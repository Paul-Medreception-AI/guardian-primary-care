#!/usr/bin/env python3
"""Desktop hero audit. Usage: python3 scripts/test_hero_viewports.py [url]

Desktop hero audit across real widescreen viewports.

Fails if any line of the headline/subhead/CTAs sits under the sticky header, runs off the
hero, or covers a face. Faces come from the SOURCE photo (fractions of the 2400x1600 image)
mapped through the same object-cover + object-position math the browser uses, so the check
tracks the photo, not a guess about the layout.
"""
import os, sys, json, statistics, tempfile
from PIL import Image
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000/'
OUT = tempfile.mkdtemp(prefix='hero-viewports-')
VIEWPORTS = [(1024,768),(1280,720),(1366,768),(1440,900),(1536,864),(1680,1050),
             (1724,768),(1728,1117),(1920,969),(1920,1080),(2560,1080),(2560,1440),(3440,1440)]
IMG_W, IMG_H = 2400, 1600
# face boxes as fractions of the source image (x0, y0, x1, y1)
FACES = {'mother': (0.185, 0.45, 0.295, 0.625),
         'baby':   (0.315, 0.45, 0.440, 0.675),
         'doctor': (0.625, 0.02, 0.890, 0.470),
         'otoscope hand': (0.590, 0.400, 0.700, 0.480)}

def pct(s):
    s = s.strip()
    return float(s[:-1]) / 100 if s.endswith('%') else None

bad = 0
with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h in VIEWPORTS:
        pg = b.new_page(viewport={'width': w, 'height': h})
        pg.goto(URL, wait_until='load', timeout=60000)
        pg.wait_for_timeout(900)
        d = pg.evaluate("""() => {
          const sec = document.querySelector('main section');
          const img = sec.querySelector('img');
          const h1 = sec.querySelector('h1');
          const block = h1.parentElement;
          const boxes = [];
          const r = document.createRange();
          for (const el of [h1, block.querySelector('p')]) {
            r.selectNodeContents(el);
            for (const b of r.getClientRects()) boxes.push([b.left, b.top, b.right, b.bottom]);
          }
          const textLines = boxes.slice();
          for (const a of block.querySelectorAll('a')) { const b=a.getBoundingClientRect(); boxes.push([b.left,b.top,b.right,b.bottom]); }
          const s = sec.getBoundingClientRect();
          const hdr = document.querySelector('header').getBoundingClientRect();
          return { sec:[s.left,s.top,s.width,s.height], hdrBottom: hdr.bottom, boxes, textLines,
                   objPos: getComputedStyle(img).objectPosition,
                   fs: getComputedStyle(h1).fontSize };
        }""")
        sx, sy, sw, sh = d['sec']
        scale = max(sw / IMG_W, sh / IMG_H)
        rw, rh = IMG_W * scale, IMG_H * scale
        px, py = [pct(v) or 0.5 for v in d['objPos'].split()]
        ox, oy = sx + (sw - rw) * px, sy + (sh - rh) * py
        faces = {k: (ox + a*rw, oy + b2*rh, ox + c*rw, oy + e*rh) for k, (a, b2, c, e) in FACES.items()}
        problems = []
        top = min(bx[1] for bx in d['boxes']); bottom = max(bx[3] for bx in d['boxes'])
        if top < d['hdrBottom'] + 8: problems.append(f'under header (text top {top:.0f} < header {d["hdrBottom"]:.0f})')
        if bottom > sy + sh - 8: problems.append(f'runs off hero bottom ({bottom:.0f} > {sy+sh:.0f})')
        for name, (fx0, fy0, fx1, fy1) in faces.items():
            for (x0, y0, x1, y1) in d['boxes']:
                ix = min(x1, fx1) - max(x0, fx0); iy = min(y1, fy1) - max(y0, fy0)
                if ix > 4 and iy > 4:
                    problems.append(f'covers {name} face'); break
        shot=os.path.join(OUT, f'vp_{w}x{h}.png')
        pg.screenshot(path=shot)
        im=Image.open(shot).convert('RGB')
        def lum(c):
            f=lambda v:(v/255)/12.92 if v/255<=0.03928 else (((v/255)+0.055)/1.055)**2.4
            return 0.2126*f(c[0])+0.7152*f(c[1])+0.0722*f(c[2])
        worst=99
        for (x0,y0,x1,y1) in d['textLines']:
            crop=im.crop((max(0,int(x0)),max(0,int(y0)),min(im.width,int(x1)),min(im.height,int(y1))))
            px=sorted(crop.getdata(), key=lum)
            if not px: continue
            bg=px[:max(1,len(px)//3)]
            worst=min(worst, 1.05/(statistics.mean(lum(c) for c in bg)+0.05))
        if worst < 3.0: problems.append(f'contrast {worst:.1f}:1')
        status = 'OK  ' if not problems else 'FAIL'
        bad += bool(problems)
        print(f'{status} {w}x{h:<5} h1 {d["fs"]:>6}  text y {top:4.0f}-{bottom:4.0f}  contrast {worst:.1f}:1  ' + ('; '.join(sorted(set(problems))) if problems else ''))
        pg.close()
    b.close()
print(f'\n{bad} of {len(VIEWPORTS)} viewports failing')
sys.exit(1 if bad else 0)
