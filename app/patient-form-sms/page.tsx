import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text Message Consent | Guardian Primary Care',
  description: 'Opt in to receive text messages from Guardian Primary Care about your appointments and your care.',
  // A consent form is not a page anyone should land on from search, and the fleet template
  // ships it noindex for the same reason.
  robots: { index: false, follow: false },
}

// The consent form is served by MedReception Studio, which runs Guardian's phones and texts.
//
// It is embedded rather than rebuilt here on purpose. Studio's form writes the evidence a
// carrier reviewer or a TCPA complaint asks for -- the exact wording the patient agreed to,
// snapshotted at the moment they agreed, plus when, from where and from what device -- and a
// copy of the form on this site would record none of that. Hosting it inside this page keeps
// the consent URL on www.guardianprimary.com, the same domain as the A2P Business Information,
// which is what the campaign registration checks.
//
// ?embed=1 tells Studio to drop its own page background and padding so the form sits inside
// ours. Verified 2026-09-16: the page returns 200 and sends no X-Frame-Options or CSP
// frame-ancestors header, so it can be framed.
const STUDIO_CONSENT_URL = 'https://studio.medreception.ai/p/guardian-primary-care/sms-consent?embed=1'

export default function PatientFormSmsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Text Message Consent</h1>
          <p className="text-lg text-white/90">Guardian Primary Care</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[var(--color-ink)] leading-relaxed mb-8">
            Give us your mobile number and we can text you about your appointments and your care.
            Consent is not a condition of receiving care, and you can stop at any time.
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-4 sm:p-6">
            {/* Height measured against the live form, not guessed: its content is 661px at the
                desktop width of this box and 763px on a 390px phone, where the text wraps. The
                640px this used to be cut the form off by 21px on desktop and 123px on a phone,
                behind a scrollbar inside the page. */}
            <iframe
              src={STUDIO_CONSENT_URL}
              title="Guardian Primary Care text message consent form"
              className="w-full border-0 bg-transparent h-[880px] sm:h-[700px]"
              loading="eager"
            />
          </div>

          {/* The disclosures a reviewer checks, stated on the page itself as well as inside the
              form, so they are visible even before the embedded form has loaded. */}
          <div className="mt-8 space-y-3 text-sm text-[var(--color-muted)] leading-relaxed">
            <p>
              <strong className="text-[var(--color-ink)]">Message frequency varies.</strong> Message and data rates
              may apply. Reply <strong>STOP</strong> to any message to stop, or <strong>HELP</strong> for help. You
              can also call us at <a href="tel:+15732006143" className="text-[var(--color-primary)] font-semibold">(573) 200-6143</a>.
            </p>
            <p>
              Carriers are not liable for delayed or undelivered messages. We never sell your number and never
              share it for marketing. See our{' '}
              <Link href="/privacy-sms" className="text-[var(--color-primary)] font-semibold underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms-sms" className="text-[var(--color-primary)] font-semibold underline underline-offset-2">
                SMS Terms
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
