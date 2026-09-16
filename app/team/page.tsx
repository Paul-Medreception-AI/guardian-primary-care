import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meet Our Team | Guardian Primary Care',
  description:
    'Meet the Guardian Primary Care team in Cape Girardeau, MO: nurse practitioner Preston Holifield, DNP, APRN, FNP-C, along with our aesthetics specialist, nurse and certified medical assistant.',
}

type Member = {
  name: string
  credentials: string
  role: string
  image: string
  alt: string
  bio: string
  certs: string[]
}

const TEAM: Member[] = [
  {
    name: 'Preston Holifield',
    credentials: 'DNP, APRN, FNP-C',
    role: 'Primary Care Provider',
    image: '/images/site/team-preston.jpg',
    alt: 'Portrait of Preston Holifield, DNP, APRN, FNP-C, primary care provider at Guardian Primary Care in Cape Girardeau, Missouri',
    bio:
      "Preston believes in evidence-based, guideline-directed healthcare. That said, as healthcare has evolved over the years, Preston has risen with the tide. Through joint efforts with his Missouri Licensed Collaborating Physician, Preston employs his years of Nursing experience to delve into the root cause of his patients' health concerns. Preston believes in caring, & going above & beyond for each & every one of his patients. Preston believes all his patients at Guardian should feel the clinic is a safe place to speak freely & experience healing of the mind, body, & spirit in order to become the happiest, healthiest, best versions of themselves.",
    certs: [
      'American Academy of Nurse Practitioner Nationally Certified Family Nurse Practitioner',
      'Licensed by the Missouri State Board of Nursing',
      'Basic Life Support (BLS) Certified Provider',
      'Doctorate of Nursing Practice, Arkansas State University',
      'Master of Science in Nursing, Southeast Missouri State University',
      'Bachelor of Science in Nursing, Southeast Missouri State University',
    ],
  },
  {
    name: 'Heather Pullen',
    credentials: 'MSN, APRN, FNP-C, RN',
    role: 'Aesthetics Specialist',
    image: '/images/site/team-heather.jpg',
    alt: 'Portrait of Heather Pullen, MSN, APRN, FNP-C, RN, aesthetics specialist at Guardian Primary Care in Cape Girardeau, Missouri',
    bio:
      "Heather brings a patient-centered, detail-oriented approach to aesthetic care. She is committed to safe, effective treatment while staying current with evolving techniques in cosmetic medicine. Working within a collaborative medical environment, Heather uses her clinical background and eye for precision to tailor each treatment to the individual, never a one-size-fits-all approach. She believes in taking the time to understand her patients' goals, educating them along the way, and delivering natural, confidence-enhancing results. At Guardian Aesthetics, Heather strives to create a comfortable, judgment-free space where patients feel heard, respected, and empowered in their confidence.",
    certs: [
      'Certified Botox Injector',
      'Licensed by the Missouri State Board of Nursing',
      'Master of Science in Nursing',
    ],
  },
  {
    name: 'Madi Hayden-Moore',
    credentials: 'BSN, RN',
    role: 'Nurse',
    image: '/images/site/team-madi.jpg',
    alt: 'Portrait of Madi Hayden-Moore, BSN, RN, nurse at Guardian Primary Care in Cape Girardeau, Missouri',
    bio:
      'Nurse Madi is a dedicated healthcare professional known for her compassionate, patient-centered approach to care. She prioritizes listening, education, and individualized treatment, ensuring each patient feels heard, respected, and empowered in their health journey. With a strong commitment to quality and trust, Madi strives to create a welcoming environment where patients receive attentive, personalized care tailored to their unique needs.',
    certs: [
      'Bachelor of Science in Nursing',
      'Licensed Registered Nurse',
      'Experience in Emergency Room Nursing, Labor & Delivery, and Primary Care Family Practice Nursing',
    ],
  },
  {
    name: 'Tamera Crowden',
    credentials: 'MA',
    role: 'Certified Medical Assistant',
    image: '/images/site/team-tamera.jpg',
    alt: 'Portrait of Tamera Crowden, MA, certified medical assistant at Guardian Primary Care in Cape Girardeau, Missouri',
    bio:
      'Tamera is a compassionate and dedicated Medical Assistant committed to providing patients with a welcoming and supportive healthcare experience. She brings a patient-centered approach to her role, helping patients feel comfortable, respected, and cared for throughout the visit.',
    certs: ['Certified Medical Assistant (CCMA)', 'BLS/CPR Certified'],
  },
]

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-4">
            Empowered in Care | Excellence in Health
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
            Meet the Guardian Team
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Guardian Primary Care is led by a nationally certified family nurse practitioner working
            alongside a Missouri Licensed Collaborating Physician, supported by a nursing and
            clinical team that knows you by name.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl text-[var(--color-ink)] text-center mb-4">
            Our Providers &amp; Staff
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-16 leading-relaxed">
            Care in Cape Girardeau, Missouri from people who take the time to listen. Here is who you
            will meet at Guardian.
          </p>

          <div className="space-y-12">
            {TEAM.map((member, i) => (
              <article
                key={member.name}
                className="grid lg:grid-cols-12 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden animate-fade-up"
              >
                <div
                  className={`relative w-full h-96 lg:h-auto lg:min-h-[30rem] lg:col-span-5 bg-[var(--color-light)] ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="lg:col-span-7 p-8 md:p-12">
                  <h3 className="font-display text-3xl text-[var(--color-ink)]">{member.name}</h3>
                  <p className="text-[var(--color-primary)] font-semibold mt-1">
                    {member.credentials}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] mt-2">
                    {member.role}
                  </p>

                  <p className="text-[var(--color-ink)] leading-relaxed mt-6">{member.bio}</p>

                  <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                    <h4 className="font-display text-lg text-[var(--color-ink)] mb-4">
                      Credentials &amp; Certifications
                    </h4>
                    <ul className="space-y-3">
                      {member.certs.map((cert) => (
                        <li key={cert} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--color-muted)] leading-relaxed">
                            {cert}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-6">
            Ready to Meet Your Provider?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            New patients can schedule online or call the office. Visits are by appointment, in person
            or by telehealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border-2 border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
