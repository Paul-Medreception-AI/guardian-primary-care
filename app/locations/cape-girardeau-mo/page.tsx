import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Primary Care in Cape Girardeau, MO | Guardian Primary Care',
  description:
    'Guardian Primary Care is located at 2441 Myra Dr, Cape Girardeau, MO 63703, serving Cape Girardeau, Jackson, Scott City, Perryville, Sikeston and Chaffee. In-person and telehealth appointments. Call (573) 200-6143.',
}

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=2441+Myra+Dr%2C+Cape+Girardeau%2C+MO+63703'

const AREA_TOWNS = ['Cape Girardeau', 'Jackson', 'Scott City', 'Perryville', 'Sikeston', 'Chaffee']

const LOCAL_SERVICES = [
  {
    title: 'Family Primary Care',
    href: '/services/family-primary-care',
    image: '/images/site/parent-child.jpg',
    alt: 'A newborn hand resting in an adult hand',
    body: 'Wellness visits, sick visits, and ongoing care for the whole family, from newborns through seniors.',
  },
  {
    title: 'Wellness & Prevention',
    href: '/services/wellness-prevention',
    image: '/images/site/cond-routine-annual-wellness.jpg',
    alt: 'Wooden letter tiles spelling the word wellness',
    body: 'Annual wellness exams, cancer screenings, nutrition counseling, and the labs that catch problems early.',
  },
  {
    title: 'Guardian Direct Care',
    href: '/services/guardian-direct-care',
    image: '/images/site/care-access.jpg',
    alt: 'A patient discussing care and payment options at the front desk',
    body: 'Our membership alternative to insurance billing: transparent pricing and direct access to your provider.',
  },
]

const FAQS = [
  {
    q: 'Where is Guardian Primary Care located?',
    a: (
      <>
        Our office is at 2441 Myra Dr, Cape Girardeau, MO 63703. You can{' '}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] font-medium hover:underline"
        >
          open the address in Google Maps
        </a>{' '}
        for turn-by-turn directions from wherever you are starting. If you would rather have directions
        over the phone, call us at{' '}
        <a href="tel:+15732006143" className="text-[var(--color-primary)] font-medium hover:underline">
          (573) 200-6143
        </a>
        .
      </>
    ),
  },
  {
    q: 'Which communities do you serve?',
    a: (
      <>
        We care for patients in Cape Girardeau and throughout Southeast Missouri, including Jackson,
        Scott City, Perryville, Sikeston, and Chaffee. If the drive is long or your week is tight, a
        telehealth visit may be a good option for follow-ups and many routine concerns.
      </>
    ),
  },
  {
    q: 'What are your office hours?',
    a: (
      <>
        Guardian Primary Care sees patients by appointment, and the office is closed on US major
        holidays. Call{' '}
        <a href="tel:+15732006143" className="text-[var(--color-primary)] font-medium hover:underline">
          (573) 200-6143
        </a>{' '}
        and we will find a time that works for you.
      </>
    ),
  },
  {
    q: 'Do you take my insurance?',
    a: (
      <>
        We are in-network with most major commercial insurances, Medicare and Medicaid, so most patients
        can use the coverage they already have. If you would rather not deal with insurance billing,{' '}
        <Link href="/services/guardian-direct-care" className="text-[var(--color-primary)] font-medium hover:underline">
          Guardian Direct Care
        </Link>{' '}
        is our membership option, with predictable pricing and no surprise bills. Call the office to
        confirm your specific plan.
      </>
    ),
  },
  {
    q: 'Do you offer telehealth?',
    a: (
      <>
        Yes. Guardian Primary Care offers both in-person and telehealth appointments. Virtual visits work
        well for follow-ups, medication management, and many routine concerns. If your provider decides
        your concern needs an exam or labs, we will bring you in.{' '}
        <Link href="/telehealth" className="text-[var(--color-primary)] font-medium hover:underline">
          Learn more about telehealth
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do I become a new patient?',
    a: (
      <>
        New patients can schedule a first appointment online or call us at{' '}
        <a href="tel:+15732006143" className="text-[var(--color-primary)] font-medium hover:underline">
          (573) 200-6143
        </a>
        . Patients already established with us can self-schedule through the Patient Ally portal. Let us
        know when you book if you have any accessibility or scheduling needs, and we will plan around
        them.
      </>
    ),
  },
]

export default function CapeGirardeauLocationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Cape Girardeau, MO</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            Primary Care in Cape Girardeau, Missouri
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
            Guardian Primary Care is at 2441 Myra Dr, caring for families across Cape Girardeau and
            Southeast Missouri. Empowered in care, excellence in health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] px-8 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Request an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/50 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>

      {/* Visit Us: NAP + photo */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden animate-fade-up">
              <Image
                src="/images/site/hero-poster.jpg"
                alt="The welcoming entrance of the Guardian Primary Care clinic in Cape Girardeau, Missouri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="animate-fade-up">
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)] mb-6">Visit Us</h2>
              <dl className="space-y-4 text-ink/80">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Address</dt>
                  <dd className="text-lg">
                    Guardian Primary Care
                    <br />
                    2441 Myra Dr
                    <br />
                    Cape Girardeau, MO 63703
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Phone</dt>
                  <dd className="text-lg">
                    <a href="tel:+15732006143" className="hover:text-[var(--color-primary)] transition-colors">
                      (573) 200-6143
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Fax</dt>
                  <dd className="text-lg">(573) 755-0706</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Email</dt>
                  <dd className="text-lg break-words">
                    <a
                      href="mailto:myprovider@guardianprimary.com"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      myprovider@guardianprimary.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Hours</dt>
                  <dd className="text-lg">
                    By appointment
                    <span className="block text-sm text-[var(--color-muted)] mt-1">
                      Closed on US major holidays
                    </span>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serving the area */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving Cape Girardeau and Southeast Missouri
          </h2>
          <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
            <p>
              Guardian Primary Care has cared for patients in Cape Girardeau since 2024. Families come to
              us from across the region, including Jackson, Scott City, Perryville, Sikeston, and Chaffee,
              because quality care close to home should not require a long drive or a long wait.
            </p>
            <p>
              Patients choose Guardian for the way visits feel: unhurried, honest, and focused on finding
              the root cause rather than moving you along. Preston Holifield, DNP, APRN, FNP-C leads care
              here, working with a Missouri Licensed Collaborating Physician and referring you to a
              specialist whenever that is the right next step. Our goal is a clinic where you can speak
              freely and leave knowing what happens next.
            </p>
            <p>
              For patients with busy schedules or a long drive, we also offer telehealth appointments, so
              follow-ups and many routine concerns can be handled without coming in.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {AREA_TOWNS.map((town) => (
              <span
                key={town}
                className="bg-[var(--color-light)] text-[var(--color-ink)] text-sm font-medium px-4 py-2 rounded-full border border-[var(--color-border)]"
              >
                {town}, MO
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services available here */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Care Available at Our Cape Girardeau Office
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {LOCAL_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-light text-[var(--color-ink)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-ink/70 mb-6 flex-1 leading-relaxed">{service.body}</p>
                  <span className="text-[var(--color-accent)] font-medium group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
            A Long Drive? Ask About Telehealth
          </h2>
          <div className="space-y-4 text-lg text-ink/80 leading-relaxed">
            <p>
              If you are coming from Perryville, Sikeston, or anywhere else that turns a short visit into
              a long afternoon, a telehealth appointment may be all you need. Virtual visits work well for
              follow-ups, medication management, results reviews, and many routine concerns.
            </p>
            <p>
              You see the same provider, and the visit goes in the same chart as your in-person care. When
              a concern needs an exam, labs, or a procedure, we will tell you and get you scheduled at the
              office.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/telehealth"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              How Telehealth Works
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
                <h3 className="font-display text-2xl font-light text-[var(--color-ink)] mb-3">{faq.q}</h3>
                <p className="text-ink/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Care That Is Close to Home
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Visit us at 2441 Myra Dr in Cape Girardeau, or connect by telehealth. Guardian Primary Care
            sees patients by appointment, so call or request a time online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-lg font-semibold transition-colors"
            >
              Request an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/50 hover:bg-white/10 px-10 py-4 rounded-lg font-semibold transition-colors"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
