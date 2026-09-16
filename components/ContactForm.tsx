'use client'

import { useEffect, useRef, useState } from 'react'

// Posts to /api/contact, which forwards to MedReception Studio server-side. The Studio token
// never reaches the browser. See app/api/contact/route.ts.

const FIELD =
  'border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow'
const LABEL = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent'; message: string } | { kind: 'error'; message: string }

export default function ContactForm() {
  const mountedAt = useRef<number>(0)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  // Measured from when the form is on screen, not from page load, so a slow network does not
  // make a real person look like a bot to the timing check.
  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          pagePath: window.location.pathname,
          timeElapsedMs: Date.now() - mountedAt.current,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({
          kind: 'error',
          message: json.error || 'We could not send your message. Please call our office at (573) 200-6143.',
        })
        return
      }
      form.reset()
      setStatus({ kind: 'sent', message: json.message || 'Thank you. Our team will be in touch soon.' })
    } catch {
      setStatus({
        kind: 'error',
        message: 'We could not send your message. Please call our office at (573) 200-6143.',
      })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div role="status" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-light)] p-8 text-center">
        <p className="font-display text-2xl text-[var(--color-ink)] mb-2">Message sent</p>
        <p className="text-[var(--color-muted)]">{status.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className={LABEL}>Full Name*</label>
          <input type="text" id="name" name="name" required autoComplete="name" className={FIELD} />
        </div>

        <div>
          <label htmlFor="email" className={LABEL}>Email*</label>
          <input type="email" id="email" name="email" required autoComplete="email" className={FIELD} />
        </div>

        <div>
          <label htmlFor="phone" className={LABEL}>Phone</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" className={FIELD} />
        </div>

        <div>
          <label htmlFor="service" className={LABEL}>How can we help?</label>
          <select id="service" name="service" className={FIELD} defaultValue="">
            <option value="">Select a topic...</option>
            <option value="New Patient Appointment">New patient appointment</option>
            <option value="Existing Patient Appointment">Existing patient appointment</option>
            <option value="Guardian Direct Care">Guardian Direct Care</option>
            <option value="Insurance Question">Insurance or billing question</option>
            <option value="Telehealth">Telehealth visit</option>
            <option value="Employer Plan">Employer or business plan</option>
            <option value="Other">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={LABEL}>Message</label>
          <textarea id="message" name="message" rows={5} className={`${FIELD} resize-none`} />
        </div>

        {/* Honeypot. Hidden from people and from assistive tech; bots fill every field.
            Not type=hidden, which many bots skip. */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor="company_website">Company website</label>
          <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        {status.kind === 'error' && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={status.kind === 'sending'}
          className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors mt-2"
        >
          {status.kind === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-[var(--color-muted)] text-xs mt-4 leading-relaxed">
          Please do not include sensitive medical information in this form. To share health details securely, use the{' '}
          <a
            href="https://www.patientally.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]"
          >
            Patient Ally portal
          </a>{' '}
          or call the office. If this is a medical emergency, call 911.
        </p>
      </div>
    </form>
  )
}
