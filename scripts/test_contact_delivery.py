#!/usr/bin/env python3
"""End-to-end test of guardian-primary-care's contact form -> Studio delivery.

Runs the REAL built Next.js route against a mock Studio that records exactly what it received.
The assertions are about what Studio got, not what the website answered, because the website
deliberately answers a fake 200 to bots -- a status-code-only test cannot tell "delivered" from
"silently dropped". Each negative case is a control arm that must show NOTHING received.
"""
import json, os, re, subprocess, threading, time, urllib.request, urllib.error, signal
from http.server import BaseHTTPRequestHandler, HTTPServer

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_PORT, SITE_PORT = 3399, 3398
GOOD_TOKEN = 'test-token-guardian'

received = []            # every request the mock Studio accepted
mock_mode = {'status': 200}

class Studio(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_POST(self):
        body = self.rfile.read(int(self.headers.get('content-length', 0)))
        tok = self.headers.get('x-studio-token')
        if tok != GOOD_TOKEN:
            self.send_response(403); self.end_headers(); self.wfile.write(b'{"detail":"not authorised"}'); return
        if mock_mode['status'] != 200:
            self.send_response(mock_mode['status']); self.end_headers(); return
        received.append({'path': self.path, 'token': tok, 'body': json.loads(body)})
        self.send_response(200); self.send_header('content-type','application/json'); self.end_headers()
        self.wfile.write(b'{"ok":true}')

srv = HTTPServer(('127.0.0.1', MOCK_PORT), Studio)
threading.Thread(target=srv.serve_forever, daemon=True).start()

def start_site(env_extra):
    env = {**os.environ, **env_extra}
    p = subprocess.Popen(['npx', 'next', 'start', '-p', str(SITE_PORT)], cwd=REPO, env=env,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, preexec_fn=os.setsid)
    for _ in range(120):
        try:
            urllib.request.urlopen(f'http://127.0.0.1:{SITE_PORT}/', timeout=2); return p
        except Exception: time.sleep(0.5)
    raise RuntimeError('site did not start')

def stop_site(p):
    try: os.killpg(os.getpgid(p.pid), signal.SIGTERM)
    except Exception: pass
    time.sleep(1.5)

def post(payload):
    req = urllib.request.Request(f'http://127.0.0.1:{SITE_PORT}/api/contact',
                                 data=json.dumps(payload).encode(),
                                 headers={'content-type': 'application/json'}, method='POST')
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, json.loads(r.read() or b'{}')
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b'{}')

VALID = {'name': 'Pat Tester', 'email': 'pat@example.com', 'phone': '(573) 555-0142',
         'service': 'New Patient Appointment', 'message': 'Hoping to establish care.',
         'pagePath': '/contact', 'hp_leave_blank': '', 'timeElapsedMs': 4200}

# What browser AUTOFILL would fill. A stand-in for Chrome's field classifier, not a copy of it:
# the patterns for the profile types a person's saved address carries. Autofill looks at a
# field's name, id and label -- which is exactly what put "Company website" in the trap.
AUTOFILL_PROFILE = [
    (r'company|business|organi[sz]ation', 'MedReception AI'),
    (r'website|homepage|\burl\b', 'https://medreception.ai'),
    (r'e.?mail', 'autofill@example.com'),
    (r'phone|mobile|\btel\b', '5735550199'),
    (r'address|street|city|zip|postal', '1 Main St'),
    (r'name', 'Autofill Person'),
]
def autofill_value(*signals):
    text = ' '.join(x or '' for x in signals).lower()
    for pat, val in AUTOFILL_PROFILE:
        if re.search(pat, text):
            return val
    return None

passed = failed = 0
def check(name, cond, detail=''):
    global passed, failed
    if cond: passed += 1; print(f'  PASS  {name}')
    else:    failed += 1; print(f'  FAIL  {name}  :: {detail}')

# ── configured site ───────────────────────────────────────────────────────────
site = start_site({'STUDIO_INGEST_URL': f'http://127.0.0.1:{MOCK_PORT}/api/v1/web/submission',
                   'STUDIO_INGEST_TOKEN': GOOD_TOKEN})
try:
    print('\nCASE 1  valid submission reaches Studio with the right shape')
    received.clear()
    st, js = post(VALID)
    check('site answers 200', st == 200, st)
    check('Studio received exactly one submission', len(received) == 1, len(received))
    if received:
        b = received[0]['body']
        check('posted to /api/v1/web/submission', received[0]['path'] == '/api/v1/web/submission', received[0]['path'])
        check('token sent as x-studio-token header', received[0]['token'] == GOOD_TOKEN)
        check('studio_source = web_form', b.get('studio_source') == 'web_form', b.get('studio_source'))
        check('name/email carried', b.get('name') == 'Pat Tester' and b.get('email') == 'pat@example.com', b)
        check('phone normalised to E.164', b.get('phone') == '+15735550142', b.get('phone'))
        check('reason for visit preserved (becomes a Studio detail)', b.get('reason_for_visit') == 'New Patient Appointment', b)
        check('message carried', b.get('message') == 'Hoping to establish care.', b.get('message'))
        check('honeypot NOT forwarded', 'hp_leave_blank' not in b and 'company_website' not in b, list(b))
        check('timing NOT forwarded', 'timeElapsedMs' not in b, list(b))
        check('no `source` key that could collide with studio_source', 'source' not in b, list(b))

    print('\nCASE 2  control: honeypot filled -> fake 200, Studio receives NOTHING')
    received.clear()
    st, _ = post({**VALID, 'hp_leave_blank': 'http://spam.example'})
    check('fake 200 to the bot', st == 200, st)
    check('Studio received nothing', len(received) == 0, len(received))

    print('\nCASE 2b  a stale page still sending the OLD trap, filled by autofill -> delivered')
    received.clear()
    st, _ = post({**VALID, 'company_website': 'MedReception AI', 'message': 'stale bundle'})
    check('200', st == 200, st)
    check('Studio received it (company_website no longer drops a person)', len(received) == 1, len(received))

    print('\nCASE 2c  the autofill stand-in recognises the OLD trap and not the new one')
    check('control: "company_website" / "Company website" WOULD be autofilled',
          autofill_value('company_website', 'company_website', 'Company website') is not None)
    check('"hp_leave_blank" / "Leave this empty" would not',
          autofill_value('hp_leave_blank', 'hp_leave_blank', 'Leave this empty') is None)

    print('\nCASE 2d  REAL BROWSER: autofill every field it recognises, submit, Studio receives it')
    # The JSON cases above cannot see this bug: it lived in the rendered form, where a browser
    # decides what to fill. So drive the built page, fill every input autofill would recognise
    # -- hidden or not, as Chrome does -- and assert on what Studio got.
    from playwright.sync_api import sync_playwright
    received.clear()
    with sync_playwright() as pw:
        br = pw.chromium.launch()
        pg = br.new_page()
        pg.goto(f'http://127.0.0.1:{SITE_PORT}/contact', wait_until='networkidle')
        if os.environ.get('CONTROL_RELABEL_TRAP'):
            # CONTROL ARM: give the trap back the label autofill recognised. This case must then
            # go RED -- if it stays green, it cannot see the bug it exists for.
            pg.evaluate("document.querySelector(`label[for='hp_leave_blank']`).textContent = 'Company website'")
        filled, trap_filled = [], False
        for el in pg.query_selector_all('form input, form textarea'):
            nm, ident = el.get_attribute('name'), el.get_attribute('id')
            label = pg.evaluate("(id) => { const l = id && document.querySelector(`label[for='${id}']`); return l ? l.textContent : '' }", ident)
            val = autofill_value(nm, ident, label)
            if val is not None:
                el.evaluate("(e, v) => { e.value = v; e.dispatchEvent(new Event('input', {bubbles: true})) }", val)
                filled.append(nm)
                trap_filled |= nm in ('hp_leave_blank', 'company_website')
        pg.fill('#message', 'Filled by the autofill browser test.')
        pg.wait_for_timeout(2000)                      # a person, not a bot, by the timing check
        pg.click('button[type=submit]')
        pg.wait_for_selector('text=Message sent', timeout=15000)
        br.close()
    check(f'autofill stand-in filled the visible fields ({", ".join(filled)})', {'name', 'email', 'phone'} <= set(filled), filled)
    check('autofill did NOT fill the trap', not trap_filled, filled)
    check('Studio received the autofilled submission', len(received) == 1, len(received))
    if received:
        check('it is the person, not a blank', received[0]['body'].get('email') == 'autofill@example.com', received[0]['body'])

    print('\nCASE 3  control: timing missing -> fake 200, Studio receives NOTHING')
    received.clear()
    bad = dict(VALID); bad.pop('timeElapsedMs')
    st, _ = post(bad)
    check('fake 200 to the bot', st == 200, st)
    check('Studio received nothing', len(received) == 0, len(received))

    print('\nCASE 4  control: submitted too fast (<1.5s) -> Studio receives NOTHING')
    received.clear()
    st, _ = post({**VALID, 'timeElapsedMs': 300})
    check('Studio received nothing', len(received) == 0, len(received))

    print('\nCASE 5  invalid email -> 400, nothing delivered')
    received.clear()
    st, js = post({**VALID, 'email': 'not-an-email'})
    check('400 with a message', st == 400 and 'email' in (js.get('error') or '').lower(), (st, js))
    check('Studio received nothing', len(received) == 0, len(received))

    print('\nCASE 6  Studio rejects (5xx) -> patient gets the phone number, NOT a fake success')
    received.clear(); mock_mode['status'] = 502
    st, js = post({**VALID, 'message': 'studio down test'})
    mock_mode['status'] = 200
    check('503 surfaced', st == 503, st)
    check('error hands the patient the office number', '(573) 200-6143' in (js.get('error') or ''), js)
finally:
    stop_site(site)

# ── wrong token: Studio 403 must not look like success ─────────────────────────
site = start_site({'STUDIO_INGEST_URL': f'http://127.0.0.1:{MOCK_PORT}/api/v1/web/submission',
                   'STUDIO_INGEST_TOKEN': 'WRONG-token'})
try:
    print('\nCASE 7  wrong token -> Studio 403 -> site reports failure, not success')
    received.clear()
    st, js = post({**VALID, 'message': 'wrong token test'})
    check('503, not 200', st == 503, st)
    check('Studio stored nothing', len(received) == 0, len(received))
finally:
    stop_site(site)

# ── NOT configured: the critical control. Must never answer a fake 200. ───────
site = start_site({'STUDIO_INGEST_URL': '', 'STUDIO_INGEST_TOKEN': ''})
try:
    print('\nCASE 8  Studio token not attached yet -> 503 with phone number (never a silent 200)')
    received.clear()
    st, js = post({**VALID, 'message': 'unconfigured test'})
    check('503, not a cheerful 200', st == 503, (st, js))
    check('error hands the patient the office number', '(573) 200-6143' in (js.get('error') or ''), js)
    check('nothing received anywhere', len(received) == 0, len(received))
finally:
    stop_site(site)

srv.shutdown()
print(f"\n{'='*60}\n{passed} passed, {failed} failed\n{'='*60}")
raise SystemExit(1 if failed else 0)
