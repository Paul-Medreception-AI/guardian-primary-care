// Where a website form submission goes: MedReception Studio, which runs Guardian's phones.
//
// A website enquiry is the same kind of thing as a message taken on a call, so it lands on the
// same board the front desk already works from, not in a second inbox someone has to remember.
//
// Adapted from premier-internal-medicine/lib/deliver.ts. Premier MIRRORS to GoHighLevel and
// Studio during a cutover; Guardian is a Studio practice from the start, so Studio is the only
// sink and there is nothing to mirror.
//
//   STUDIO_INGEST_URL    https://studio.medreception.ai/api/v1/web/submission
//   STUDIO_INGEST_TOKEN  Guardian's web-ingest secret (the routing key; see below)
//
// ⚠️ SET BOTH ON THE VERCEL PROJECT THAT SERVES THE DOMAIN. Premier's repo turned out to be
// linked to two Vercel projects, and vars on the wrong one produced a deployment that looked
// configured and delivered nothing.

const STUDIO_URL = process.env.STUDIO_INGEST_URL
const STUDIO_TOKEN = process.env.STUDIO_INGEST_TOKEN

export type Sink = 'web_form' | 'web_widget'

export class NotConfiguredError extends Error {}

/** Studio holds every phone as E.164 and matches contacts on it. "5732006143" would arrive as a
 *  stranger even for a patient who has called before, so normalise here as well as in Studio. */
export function toE164(raw?: string): string | undefined {
  const digits = (raw || '').replace(/\D/g, '')
  if (!digits) return undefined
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  return (raw || '').trim().startsWith('+') ? `+${digits}` : undefined
}

/**
 * Deliver one submission to Studio.
 *
 * 🔴 THROWS WHENEVER STUDIO DID NOT ACCEPT IT, INCLUDING WHEN IT IS NOT CONFIGURED. With a
 * single sink there is no fallback holding the message, so a failure here IS a lost enquiry.
 * The route turns the throw into an error that hands the patient the phone number. The
 * alternative -- answering 200 because the form "worked" -- is how submissions vanish with
 * nobody ever finding out.
 */
export async function deliver(source: Sink, payload: Record<string, unknown>): Promise<void> {
  if (!STUDIO_URL || !STUDIO_TOKEN) {
    throw new NotConfiguredError('STUDIO_INGEST_URL / STUDIO_INGEST_TOKEN are not set')
  }

  const res = await fetch(STUDIO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // The token is the routing key: nothing in the body names a practice, so a wrong token
      // cannot reach somebody else's board.
      'x-studio-token': STUDIO_TOKEN,
    },
    // Studio is the only sink, so it gets a real timeout rather than Premier's 3s mirror budget.
    signal: AbortSignal.timeout(10_000),
    // studio_source, NOT source. On Premier the payload already carried its own `source` and,
    // spread after the sink label, silently overwrote it, filing every widget submission as a
    // contact form. A separate key cannot collide however the payload grows.
    body: JSON.stringify({ ...payload, studio_source: source }),
  })

  if (!res.ok) {
    // 403 means the token is wrong or the practice is archived; Studio deliberately does not
    // say which. Logged without the token and without the body, which holds what a patient typed.
    throw new Error(`studio ingest ${res.status}`)
  }
}
