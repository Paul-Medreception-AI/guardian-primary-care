import Image from 'next/image'
import Link from 'next/link'
import { VideoEmbed, GUARDIAN_VIDEOS } from '@/components/VideoEmbed'

// Every quote below is a real, verbatim patient review from Guardian Primary Care.
// Do not edit the wording, do not add ratings, counts or platform badges.
const TESTIMONIALS = [
  {
    quote:
      "I have nothing but positive things to say about Preston and GPC! From working with him on shared patients to trusting him with the care of my family members, he is thorough and very competent. I love that he takes his time with each patient and looks for real solutions instead of pushing medicine. I highly recommend him!",
    name: "Laura M. Sanders",
  },
  {
    quote:
      "Guardian Primary Care is a fantastic addition to Cape Girardeau! The staff is professional, friendly, and truly cares about their patients. The clinic has a welcoming atmosphere, and the option for both in-person and tele-health appointments makes scheduling so convenient. It's refreshing to see a healthcare provider that puts such an emphasis on patient comfort and accessibility. Highly recommend for anyone looking for reliable and compassionate primary care!",
    name: "Sho R.",
  },
  {
    quote:
      "Preston is very thorough with his patients. He answers any and all questions that one may have. Highly recommend to anyone looking for a PCP that is easy to get in with and doesn't break the bank!",
    name: "Mercedes Stiltner",
  },
]

const SERVICE_CARDS = [
  {
    href: '/services/family-primary-care',
    title: 'Family Primary Care',
    image: '/images/site/parent-child.jpg',
    alt: "A newborn's hand holding a parent's hand",
    body:
      'Care for every member of the family, from childhood through retirement. Routine check-ups, sick visits, chronic condition management and preventative care, in person or by telehealth.',
  },
  {
    href: '/services/dementia-aging-adult-care',
    title: 'Dementia & Aging Adult Care',
    image: '/images/site/cond-dementia-including-alzheimers.jpg',
    alt: 'A portrait of an older adult rendered as a jigsaw puzzle with pieces missing',
    body:
      'Support for older adults and the families caring for them, including memory concerns, medication review, care coordination and caregiver guidance, with dignity at the center of every visit.',
  },
  {
    href: '/services/wellness-prevention',
    title: 'Wellness & Prevention',
    image: '/images/site/cond-routine-annual-wellness.jpg',
    alt: 'Lettered wooden tiles spelling out the word wellness',
    body:
      'Annual wellness visits, cancer screenings, nutrition counseling, exercise and activity guidance, and school, sports and employment screenings to keep small things from becoming big ones.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero — the photograph is the hero; the copy answers only
          what this is, who it is for, and what to do next. */}
      <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden bg-[var(--color-dark)]">
        <Image
          src="/images/site/hero-family.jpg"
          alt="A Guardian Primary Care provider examining an infant while the child's mother holds them"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Localized scrim only. Strongest behind the copy, fading completely into
            the photo so the image keeps its full brightness at the edges instead of
            taking a flat grey wash. Inline rgba on purpose: Tailwind cannot apply an
            alpha modifier to an arbitrary var() colour, so `from-[var(--color-dark)]/85`
            compiles to nothing and the white copy lands on bare photograph. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 42% 36% at 46% 20%, rgba(15,35,45,0.56) 0%, rgba(15,35,45,0.52) 48%, rgba(15,35,45,0.22) 74%, rgba(15,35,45,0) 100%)',
          }}
        />

        <div className="relative w-full px-6 pb-24 self-center -translate-y-[6%] lg:-translate-y-[calc(20%_+_105px)]">
          <div className="mx-auto lg:mx-0 lg:ml-[25%] text-center" style={{ maxWidth: '600px' }}>
            <h1
              className="font-display text-[34px] sm:text-[46px] lg:text-[57px] leading-[1.08] tracking-tight"
              style={{ fontWeight: 600, textWrap: 'balance', textShadow: '0 1px 10px rgba(10,28,38,0.45)' }}
            >
              Primary Care for Your Whole Family
            </h1>
            <p
              className="mt-5 text-[19px] lg:text-[22px] font-semibold leading-[1.5] text-white"
              style={{ textShadow: '0 1px 8px rgba(10,28,38,0.5)' }}
            >
              Personalized care in Cape Girardeau for every stage of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
              <Link
                href="/contact"
                className="bg-[var(--color-primary)] hover:bg-[#007ec4] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Schedule an Appointment
              </Link>
              <a
                href="tel:+15732006143"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/20"
                style={{ backgroundColor: 'rgba(10,40,60,0.20)' }}
              >
                Call (573) 200-6143
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip — the coverage facts, out of the hero's way */}
      <section className="bg-white py-5 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
            <span className="text-[var(--color-ink)] font-semibold">Most major commercial insurance accepted</span>
            <span className="mx-2 text-[var(--color-border)]" aria-hidden="true">&bull;</span>Medicare
            <span className="mx-2 text-[var(--color-border)]" aria-hidden="true">&bull;</span>Medicaid
            <span className="mx-2 text-[var(--color-border)]" aria-hidden="true">&bull;</span>
            <Link href="/services/guardian-direct-care" className="text-[var(--color-primary)] font-semibold hover:underline">
              Guardian Direct Care available
            </Link>
          </p>
        </div>
      </section>


      {/* Welcome video — Guardian's own introduction */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl sm:text-5xl text-center text-[var(--color-ink)] mb-4">
            Meet Guardian Primary Care
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-10 max-w-2xl mx-auto">
            A provider owned and operated practice in Cape Girardeau, Missouri.
          </p>
          <VideoEmbed videoId={GUARDIAN_VIDEOS.welcome.videoId} title={GUARDIAN_VIDEOS.welcome.title} />
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive care tailored to you and your family&apos;s needs at every stage of life, right
            here in Cape Girardeau.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.href}
                className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-8 py-3 rounded-xl hover:bg-[var(--color-light)] transition-all"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Your Provider */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/site/team-preston.jpg"
                  alt="Preston Holifield, DNP, APRN, FNP-C, primary care provider at Guardian Primary Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Meet Your Provider
              </p>
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-2">
                Preston Holifield, DNP, APRN, FNP-C
              </h2>
              <p className="text-[var(--color-muted)] font-semibold mb-6">
                Primary Care Provider, Guardian Primary Care
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Preston believes in evidence-based, guideline-directed healthcare. Through joint efforts
                with his Missouri Licensed Collaborating Physician, Preston employs his years of nursing
                experience to delve into the root cause of his patients&apos; health concerns. He believes in
                caring, and going above and beyond for each and every one of his patients.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Preston believes all his patients at Guardian should feel the clinic is a safe place to
                speak freely and experience healing of the mind, body and spirit, in order to become the
                happiest, healthiest, best versions of themselves. He is a Nationally Certified Family Nurse
                Practitioner through the American Academy of Nurse Practitioners, licensed by the Missouri
                State Board of Nursing, and earned his Doctorate of Nursing Practice at Arkansas State
                University after completing his MSN and BSN at Southeast Missouri State University.
              </p>
              <Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet the Guardian Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Care Access */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
                Two Ways to Get Care
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Guardian Primary Care is in-network with most major commercial insurances, Medicare and
                Medicaid, so you can use the coverage you already have.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Prefer direct care? Guardian Direct Care offers predictable pricing, easy access, and care
                from a provider who knows you, without hidden fees or surprise bills. Plans start as low as
                $40 per month, and HSA, FSA and CareCredit are accepted. Fair, upfront self-pay pricing is
                available on request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/insurance"
                  className="bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all text-center"
                >
                  Insurance We Accept
                </Link>
                <Link
                  href="/services/guardian-direct-care"
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all text-center"
                >
                  Explore Guardian Direct Care
                </Link>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/site/hero-poster.jpg"
                alt="A Guardian Primary Care provider greeting a patient at the clinic entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-5xl text-center text-[var(--color-ink)] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            In our patients&apos; own words.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] flex flex-col"
              >
                <svg className="w-8 h-8 text-[var(--color-primary)] mb-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.5 5C6.5 5 4 7.5 4 10.5S6.5 16 9.5 16c.3 0 .6 0 .9-.1C9.6 17.7 7.9 19 6 19v2c4.4 0 8-3.6 8-8v-2.5C14 7.5 12.5 5 9.5 5zm10 0C16.5 5 14 7.5 14 10.5S16.5 16 19.5 16c.3 0 .6 0 .9-.1C19.6 17.7 17.9 19 16 19v2c4.4 0 8-3.6 8-8v-2.5C24 7.5 22.5 5 19.5 5z" />
                </svg>
                <blockquote className="text-[var(--color-muted)] text-sm leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="font-display text-lg text-[var(--color-ink)] mt-6">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews" className="text-[var(--color-primary)] font-semibold hover:underline">
              Read More Patient Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 01 */}
            <div className="text-center">
              <div className="font-display text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-display text-2xl mb-4">Schedule Your Visit</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                New patients can request a first appointment online or call us at (573) 200-6143. Already a
                patient? Self-schedule on the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a>. Visits are by appointment, in person or
                by telehealth.
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center">
              <div className="font-display text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-display text-2xl mb-4">Meet Your Provider</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Your provider takes the time to understand your health history, your current concerns and
                your goals. We believe in collaborative care, where you are an active partner in every
                decision about your health.
              </p>
            </div>

            {/* Step 03 */}
            <div className="text-center">
              <div className="font-display text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-display text-2xl mb-4">Receive Ongoing Care</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Healthcare does not end when you leave our office. We provide continuing support through
                follow-up visits, care coordination and referrals when a specialist is the right next step,
                so nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl font-light mb-6">
            Access, Trust, and Thoughtful Care for Life
          </h2>
          <p className="text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            Guardian Primary Care serves Cape Girardeau and the surrounding Southeast Missouri communities,
            including Jackson, Scott City and Perryville. Our vision is to become the premier healthcare
            provider in Southeast Missouri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block border-2 border-white text-white font-semibold px-12 py-5 rounded-2xl hover:bg-white/10 transition-all text-lg"
            >
              (573) 200-6143
            </a>
          </div>
          <p className="text-white/70 text-sm mt-10">
            2441 Myra Dr, Cape Girardeau, MO 63703 &middot; By Appointment &middot; Closed on US major holidays
          </p>
        </div>
      </section>
    </main>
  )
}
