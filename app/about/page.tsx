import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Guardian Primary Care',
  description:
    'Guardian Primary Care opened in 2024 in Cape Girardeau, MO, offering compassionate primary care for every stage of life. In network with most major commercial insurances, Medicare and Medicaid, with Guardian Direct Care available.',
}

// Only the three definitions the practice actually publishes are shown. The
// remaining values are listed by name alone: do not invent glosses for them.
const VALUES: { name: string; note?: string }[] = [
  { name: 'Non-maleficence', note: 'First do no harm.' },
  { name: 'Beneficence', note: 'Do good unto others.' },
  {
    name: 'Integrity',
    note: 'We advocate relentlessly for our patients and act with unwavering honesty.',
  },
  { name: 'Compassion & Respect' },
  { name: 'Inclusivity & Equality' },
  { name: 'Faith & Humility' },
  { name: 'Balance & Personal Development' },
  { name: 'Passion' },
]

const APART = [
  'Nationally certified family nurse practitioner, working with a Missouri Licensed Collaborating Physician',
  'In network with most major commercial insurances, Medicare and Medicaid',
  'Guardian Direct Care available if you prefer to pay directly',
  'Telehealth and in-person visits',
  'Same-day or next-day sick visits for Guardian Direct Care members',
  'Dementia care, aging adult services and caregiver support',
  'Family care for every stage of life, from children to seniors',
  'Referrals and affiliates when you need a specialist',
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-sm mb-6 text-white/70">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </div>
          <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-4">
            Empowered in Care | Excellence in Health
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white">
            About Guardian Primary Care
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl leading-relaxed">
            Established in 2024 in Cape Girardeau, Missouri, caring for patients across Southeast
            Missouri at every stage of life.
          </p>
        </div>
      </section>

      {/* Story + What Sets Us Apart */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-8">
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">Who We Are</h2>

              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/site/hero-poster.jpg"
                  alt="A patient being welcomed at the entrance of the Guardian Primary Care clinic in Cape Girardeau, Missouri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Guardian Primary Care opened its doors in Cape Girardeau in 2024. Care is led by
                Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse
                practitioner who works alongside a Missouri Licensed Collaborating Physician,
                supported by a nursing and clinical team that greets you by name.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                We are in network with most major commercial insurances, Medicare and Medicaid. If
                you would rather skip insurance entirely, Guardian Direct Care offers predictable
                pricing, easy access, and care from a provider who knows you, without hidden fees or
                surprise bills. Two doors into the same practice, so you can choose the one that
                fits your family.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                Guardian serves patients from Cape Girardeau and the surrounding communities of
                Jackson, Scott City, Perryville and Sikeston, in person or by telehealth. Visits are
                by appointment, and the office is closed on US major holidays. Alongside everyday
                primary care, we care for aging adults and families living with dementia, and we
                refer out to trusted specialists whenever your care calls for it.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up lg:sticky lg:top-24">
                <h3 className="font-display text-2xl mb-6 text-[var(--color-ink)]">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {APART.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-ink)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-4">
            Our Vision &amp; Mission
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-14 leading-relaxed">
            In the practice{"'"}s own words.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-light)] rounded-2xl p-10 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Our Vision</h3>
              <blockquote className="text-lg text-[var(--color-ink)] leading-relaxed">
                {
                  "To provide accessible, high-quality care to all the lord's children to elevate healthcare on a systems & individual level in the communities we touch."
                }
              </blockquote>
            </div>

            <div className="bg-[var(--color-light)] rounded-2xl p-10 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Our Mission</h3>
              <blockquote className="text-lg text-[var(--color-ink)] leading-relaxed">
                To serve &amp; heal patients to be the happiest, healthiest, best versions of
                themselves.
              </blockquote>
            </div>
          </div>

          <p className="text-center text-lg text-[var(--color-muted)] leading-relaxed max-w-3xl mx-auto mt-12">
            We believe in providing care that is accessible, trustworthy, and relationship-driven,
            ensuring that patients feel seen, heard, and supported.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-4">
            The Values We Practice By
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-14 leading-relaxed">
            These are the commitments behind every visit at Guardian.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl p-7 border border-[var(--color-border)] animate-fade-up"
              >
                <h3 className="font-display text-xl text-[var(--color-ink)]">{v.name}</h3>
                {v.note ? (
                  <p className="text-[var(--color-muted)] leading-relaxed text-sm mt-3">{v.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Access */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/site/handshake-care.jpg"
                alt="A care team member shaking hands with a patient at Guardian Primary Care"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
                Two Ways to Get Care
              </h2>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Most patients use their insurance. We are in network with most major commercial
                insurances, Medicare and Medicaid, so you can see your provider with the coverage you
                already carry.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-8">
                Prefer direct care? Guardian Direct Care is accessible, high-quality and transparent:
                predictable pricing, office visits with no visit limits, and direct access to your
                provider and your medical records. Fair, upfront self-pay pricing is available on
                request, and we accept HSA, FSA and CareCredit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/insurance"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-dark)] text-white font-medium px-8 py-4 rounded-full transition-colors text-center"
                >
                  Insurance We Accept
                </Link>
                <Link
                  href="/services/guardian-direct-care"
                  className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-light)] font-medium px-8 py-4 rounded-full transition-colors text-center"
                >
                  Guardian Direct Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PrestonNP */}
      <section className="bg-[var(--color-light)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
            Health Education: PrestonNP
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-8">
            PrestonNP is a health education platform created by Preston Holifield, DNP, APRN, FNP-C,
            designed to make health education understandable, engaging, and empowering for everyday
            people.
          </p>
          <a
            href="https://www.youtube.com/@PrestonNP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Visits are by appointment. Schedule your first appointment online, or call the office and
            we will find a time that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-white hover:text-[var(--color-primary)] text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border-2 border-white/60 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
