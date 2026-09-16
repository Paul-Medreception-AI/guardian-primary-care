import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Patient Testimonials | Guardian Primary Care',
  description:
    'Read what patients say about Guardian Primary Care in Cape Girardeau, MO, in their own words, and share your own experience with our care team.',
}

type Testimonial = { quote: string; author: string }

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I have nothing but positive things to say about Preston and GPC! From working with him on shared patients to trusting him with the care of my family members, he is thorough and very competent. I love that he takes his time with each patient and looks for real solutions instead of pushing medicine. I highly recommend him!",
    author: 'Laura M. Sanders',
  },
  {
    quote:
      "Guardian Primary Care is a fantastic addition to Cape Girardeau! The staff is professional, friendly, and truly cares about their patients. The clinic has a welcoming atmosphere, and the option for both in-person and tele-health appointments makes scheduling so convenient. It's refreshing to see a healthcare provider that puts such an emphasis on patient comfort and accessibility. Highly recommend for anyone looking for reliable and compassionate primary care!",
    author: 'Sho R.',
  },
  {
    quote:
      "Preston is very thorough with his patients. He answers any and all questions that one may have. Highly recommend to anyone looking for a PCP that is easy to get in with and doesn't break the bank!",
    author: 'Mercedes Stiltner',
  },
  {
    quote: 'I felt very respected and valued here as a patient.',
    author: 'Brea Baker',
  },
  {
    quote:
      "I'm incredibly grateful for the care of Preston Holifield! He goes above and beyond as a patient advocate, always putting his people first. He serves with kindness and excellence, ensuring every patient receives the best care possible. Despite my tight schedule, he found a way to fit me in, addressed all my needs, and even followed up to make sure everything was going as it should. I highly recommend him, he's the Chick-fil-A of primary care!",
    author: 'Jessica S.',
  },
  {
    quote:
      'Love the practice. Extremely friendly and professional. Really takes the time to listen to their patients and very easy to work with when finding new solutions.',
    author: 'Jared Mungle',
  },
  {
    quote:
      "Guardian has been a pleasant experience. Preston is very personable and professional. He actually listens and cares about your needs and doesn't feel like he trying to push you through like some places",
    author: 'Jeremy Franklin',
  },
]

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-4">
            Empowered in Care | Excellence in Health
          </p>
          <h1 className="font-display text-5xl font-light mb-6">Patient Testimonials</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            In their own words: what patients say about care at Guardian Primary Care in Cape
            Girardeau, Missouri.
          </p>
        </div>
      </section>
      {/* Section image */}
      <section className="bg-[var(--color-cream)] pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/site/hero-poster.jpg"
              alt="A Guardian Primary Care provider greeting a patient at the clinic entrance"
              fill
              sizes="(max-width: 1024px) 100vw, 64rem"
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:columns-2 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="break-inside-avoid mb-8 bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-sm animate-fade-up"
              >
                <span
                  aria-hidden="true"
                  className="font-display block text-5xl leading-none text-[var(--color-accent)] mb-4"
                >
                  {'“'}
                </span>
                <blockquote className="text-[var(--color-ink)] leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-[var(--color-border)] text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
            Share Your Experience
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10">
            Are you a Guardian patient? We would love to hear how your visit went. Send us your
            testimonial through our contact form, and tell us anything we could be doing better. Your
            feedback shapes the care we give every patient who walks through the door.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-dark)] text-white px-10 py-4 rounded-full font-medium transition-colors shadow-lg"
          >
            Share a Testimonial
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">Experience Care Built Around You</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Guardian Primary Care is in network with most major commercial insurances, Medicare and
            Medicaid, with Guardian Direct Care available if you prefer to pay directly. Visits are by
            appointment, in person or by telehealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] px-10 py-4 rounded-full font-medium transition-colors shadow-lg"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-medium transition-colors"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
