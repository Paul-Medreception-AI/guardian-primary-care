import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Our Services | Guardian Primary Care | Cape Girardeau, MO',
  description:
    'Primary care, dementia and aging adult care, wellness and prevention, women’s wellness, physicals, and Guardian Direct Care in Cape Girardeau, MO. In-network with most major commercial insurances, Medicare and Medicaid.',
}

type CardMeta = { image: string; alt: string; blurb: string }

const SERVICE_CARDS: Record<string, CardMeta> = {
  'family-primary-care': {
    image: '/images/site/parent-child.jpg',
    alt: 'A newborn hand resting in an adult hand',
    blurb:
      'Primary care for the whole family, from newborns through seniors. Wellness visits, sick visits, ongoing care for chronic conditions, and the screenings that catch problems early.',
  },
  'dementia-aging-adult-care': {
    image: '/images/site/cond-dementia-including-alzheimers.jpg',
    alt: 'An older adult pictured behind missing jigsaw puzzle pieces, illustrating memory loss',
    blurb:
      'Careful, unhurried care for older adults and the families who support them: memory concerns, medication review, coordination with specialists, and caregiver support.',
  },
  'wellness-prevention': {
    image: '/images/site/cond-routine-annual-wellness.jpg',
    alt: 'Wooden letter tiles spelling the word wellness',
    blurb:
      'Annual wellness visits, cancer screenings, nutrition counseling, and activity guidance, so you can stay ahead of health problems instead of reacting to them.',
  },
  'women-s-wellness': {
    image: '/images/site/cond-womens-wellness.jpg',
    alt: 'A woman stretching on a yoga mat in an open field',
    blurb:
      'Women’s health care at every stage, including annual exams, preventive screenings, contraception, and hormone-related concerns, in a space where you can speak freely.',
  },
  'school-sports-employment-physicals': {
    image: '/images/site/cond-school-sports-employment-screenings.jpg',
    alt: 'A young volleyball player holding a ball on an indoor court',
    blurb:
      'Physicals and screenings for school enrollment, sports participation, and employment requirements, handled thoroughly and scheduled around your calendar.',
  },
  'guardian-direct-care': {
    image: '/images/site/care-access.jpg',
    alt: 'A patient and staff member discussing care options at the front desk',
    blurb:
      'Prefer direct care? Guardian Direct Care is a membership option with transparent pricing and direct access to your provider, offered alongside our insurance-based care.',
  },
}

const FALLBACK: CardMeta = {
  image: '/images/site/quilia-care.jpg',
  alt: 'A physician balance scale mounted on a clinic wall',
  blurb: 'Personalized care from the Guardian Primary Care team in Cape Girardeau, Missouri.',
}

export default function ServicesPage() {
  const steps = [
    {
      number: '01',
      title: 'Schedule Your Visit',
      description:
        'Call us at (573) 200-6143 or request your first appointment online. Visits are by appointment, and you can choose an in-person visit or a telehealth visit, whichever fits your week better.',
    },
    {
      number: '02',
      title: 'Meet Your Provider',
      description:
        'Preston Holifield, DNP, APRN, FNP-C and our care team take the time to understand your health history, your current concerns, and your goals. You are an active partner in every decision about your care.',
    },
    {
      number: '03',
      title: 'Continue Your Care',
      description:
        'Care does not end when you leave the office. We follow up, coordinate referrals when you need a specialist, and stay reachable so you know what comes next.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mt-4 leading-relaxed">
            Comprehensive, personalized care for every stage of life, right here in Cape Girardeau, Missouri.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            From preventive visits to ongoing care for chronic conditions, our services are built around
            listening first and treating the whole person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const card = SERVICE_CARDS[service.slug] ?? FALLBACK
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up flex flex-col"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 flex-1">
                      {card.blurb}
                    </p>
                    <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insurance-first note */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden animate-fade-up">
              <Image
                src="/images/site/insurance.jpg"
                alt="An illustration of health insurance paperwork, coverage shields and a stethoscope"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-4">
                Two Ways to Get Care
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Guardian Primary Care is in-network with most major commercial insurances, Medicare and
                Medicaid, so most patients can simply use the coverage they already have.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Prefer direct care? Guardian Direct Care is our membership alternative: accessible,
                high quality, and transparent, with predictable pricing and no surprise bills. Plans start
                as low as $40 per month, and fair per-visit pricing is available on request.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/guardian-direct-care"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-7 py-3 rounded-full transition-colors"
                >
                  Explore Guardian Direct Care
                </Link>
                <Link
                  href="/insurance"
                  className="inline-block border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-light)] font-semibold px-7 py-3 rounded-full transition-colors"
                >
                  Insurance We Accept
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-4">How It Works</h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Getting started with Guardian Primary Care is simple.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-display text-7xl text-[var(--color-primary)] opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-32 bg-[var(--color-border)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Take the first step toward care that puts you first. Appointments are available in person at
            our Cape Girardeau office or by telehealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
