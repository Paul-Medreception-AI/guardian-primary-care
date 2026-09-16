import { NextRequest, NextResponse } from 'next/server'
import { deliver, toE164, NotConfiguredError } from '@/lib/deliver'

// Server-side handler for the public contact form. The form used to be
// action="mailto:myprovider@guardianprimary.com", which submits nothing: it opens a mail client
// if the visitor has one configured and silently does nothing on most phones.
//
// The Studio token stays SERVER-side. Studio's ingest endpoint deliberately has no CORS, and a
// secret in the browser bundle can be read and replayed by anyone. A sibling practice site
// (kentonbruicemd.com) wired its webhook into the client and spent July 2026 receiving
// gibberish-name leads. Two cheap checks run before anything is forwarded:
//   1. honeypot      a hidden field only a bot fills
//   2. submit timing a person cannot complete this form in under 1.5s
// Both answer with a FAKE success so a bot does not learn it was caught and retry.

export const runtime = 'nodejs'

const MIN_SUBMIT_MS = 1500
const OFFICE_PHONE = '(573) 200-6143'

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  pagePath?: string
  // Hidden in the UI. Real users never fill this in.
  company_website?: string
  // Milliseconds between the form mounting and submit.
  timeElapsedMs?: number
}

const clip = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n)

export async function POST(request: NextRequest) {
  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (body.company_website && body.company_website.trim()) {
    console.warn('[contact] honeypot triggered, dropped')
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // A MISSING value is a bot too. Our own form always sends it, so its absence means the caller
  // is not our form -- and a bot posting directly would otherwise just omit the field.
  if (typeof body.timeElapsedMs !== 'number' || body.timeElapsedMs < MIN_SUBMIT_MS) {
    console.warn(`[contact] bad or missing timing (${body.timeElapsedMs}), dropped`)
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const name = clip(body.name, 120)
  const email = clip(body.email, 200)
  if (!name || !email) {
    return NextResponse.json({ error: 'Please provide your name and email.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  // Field names match Studio's contract (app/store.py web_submission): name, email, phone and
  // message become columns on the card; everything else is kept verbatim as details, so the
  // reason for the enquiry reaches the front desk instead of being dropped.
  const payload: Record<string, unknown> = {
    name,
    email,
    phone: toE164(body.phone),
    message: clip(body.message, 4000) || undefined,
    reason_for_visit: clip(body.service, 120) || undefined,
    page_path: clip(body.pagePath, 300) || undefined,
    site: 'www.guardianprimary.com',
  }

  try {
    await deliver('web_form', payload)
  } catch (error) {
    if (error instanceof NotConfiguredError) {
      // Until the Studio token is attached there is nowhere to send this. Say so plainly and
      // give the patient the phone number, rather than pretend it went through.
      console.error('[contact] Studio ingest is not configured; submission NOT delivered')
    } else {
      console.error('[contact] Studio delivery failed:', error)
    }
    return NextResponse.json(
      { error: `We could not send your message. Please call our office at ${OFFICE_PHONE}.` },
      { status: 503 },
    )
  }

  return NextResponse.json(
    { success: true, message: 'Thank you. Our team will be in touch soon.' },
    { status: 200 },
  )
}
