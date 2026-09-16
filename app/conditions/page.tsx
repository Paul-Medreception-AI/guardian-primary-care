import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CONDITIONS } from '@/lib/data/conditions'

export const metadata: Metadata = {
  title: 'Conditions We Treat | Guardian Primary Care | Cape Girardeau, MO',
  description:
    'Evidence-based primary care for chronic conditions, acute illness, and preventive health concerns in Cape Girardeau, MO. In-network with most major commercial insurances, Medicare and Medicaid.',
}

type CardMeta = { image: string; alt: string; blurb: string }

const CONDITION_CARDS: Record<string, CardMeta> = {
  'diabetes-and-blood-sugar-management': {
    image: '/images/site/cond-diabetes.jpg',
    alt: 'A platter of fresh fruit, nuts and cheese on a table',
    blurb:
      'Care for type 1, type 2, and prediabetes, including lab work, medication management, and practical food and activity coaching you can actually live with.',
  },
  'hypertension-high-blood-pressure': {
    image: '/images/site/cond-hypertension.jpg',
    alt: 'A blood pressure cuff being used during a primary care visit',
    blurb:
      'High blood pressure rarely feels like anything. We check it, treat it, and adjust as your body responds, so you lower your long-term risk.',
  },
  'high-cholesterol-and-lipid-disorders': {
    image: '/images/site/cond-highcholesterol.jpg',
    alt: 'A carton of eggs with one shell opened to show the yolk',
    blurb:
      'Lipid testing and treatment that looks past the total number, so you understand your LDL, HDL, and triglycerides and what to do about them.',
  },
  'asthma-and-respiratory-conditions': {
    image: '/images/site/cond-asthma.jpg',
    alt: 'A hand holding a nebulizer mask beside its compressor',
    blurb:
      'Breathing should not be a daily struggle. We work on triggers, inhaler technique, and a written plan for flare-ups.',
  },
  'chronic-obstructive-pulmonary-disease-copd': {
    image: '/images/site/cond-copd-inhaler.jpg',
    alt: 'A man holding a metered dose inhaler used to manage COPD symptoms',
    blurb:
      'Ongoing COPD care focused on symptom control, avoiding hospital stays, and keeping you doing the things you enjoy.',
  },
  'thyroid-disorders': {
    image: '/images/site/cond-thyroid.jpg',
    alt: 'A clinician gently palpating a patient&apos;s neck to examine the thyroid gland',
    blurb:
      'Testing and treatment for an underactive or overactive thyroid, with follow-up labs until your energy, weight, and mood settle.',
  },
  'obesity-and-weight-management': {
    image: '/images/site/cond-obesity.jpg',
    alt: 'A bathroom scale on a wooden floor',
    blurb:
      'A judgment-free plan built around nutrition, movement, behavior, and medication when it is appropriate for you.',
  },
  'anxiety-and-depression': {
    image: '/images/site/cond-anxiety.jpg',
    alt: 'A person sitting with both hands covering their face',
    blurb:
      'Mental health is health. We screen, treat, and refer when more support would help, all as part of your regular primary care.',
  },
  'dementia-and-alzheimer-s-disease': {
    image: '/images/site/cond-dementia-including-alzheimers.jpg',
    alt: 'An older adult pictured behind missing jigsaw puzzle pieces, illustrating memory loss',
    blurb:
      'Evaluation of memory changes, ongoing management, and steady support for the family members doing the caring.',
  },
  'osteoarthritis-and-joint-pain': {
    image: '/images/site/cond-arthritis.jpg',
    alt: 'A person pressing one hand into the other to ease joint pain',
    blurb:
      'Pain relief strategies, movement guidance, and referrals to physical therapy or orthopedics when that is the right next step.',
  },
  osteoporosis: {
    image: '/images/site/cond-osteoporosis.jpg',
    alt: 'An anatomical model of the spine and pelvis',
    blurb:
      'Bone density screening, vitamin D and calcium guidance, fall prevention, and treatment to reduce fracture risk.',
  },
  'heart-disease-and-cardiovascular-conditions': {
    image: '/images/site/cond-heart-disease.jpg',
    alt: 'An illustration of a heart with a stethoscope resting against it',
    blurb:
      'Risk assessment, prevention, and coordinated care with cardiology when a specialist should be involved.',
  },
  'acid-reflux-and-gerd': {
    image: '/images/site/cond-chronic-hepatitis.jpg',
    alt: 'A medical illustration of the torso with the digestive organs highlighted',
    blurb:
      'Relief from heartburn and reflux through diet changes, timing, and medication, plus a look for causes that need more than a daily pill.',
  },
  'irritable-bowel-syndrome-ibs': {
    image: '/images/site/cond-ibs.jpg',
    alt: 'A person holding their abdomen, with the colon highlighted in an overlay',
    blurb:
      'A practical approach to IBS: identify your patterns and triggers, rule out what needs ruling out, and build a plan that calms symptoms.',
  },
  'urinary-tract-infections': {
    image: '/images/site/cond-frequent-urinary-tract-infections-utis.jpg',
    alt: 'A clean, tiled restroom',
    blurb:
      'Prompt testing and treatment for UTIs, and a prevention plan if you get them again and again.',
  },
  'skin-conditions-and-rashes': {
    image: '/images/site/cond-eczema.jpg',
    alt: 'Close view of dry, cracked skin on an open palm',
    blurb:
      'Treatment for eczema, acne, rashes, and skin infections, with skin checks and dermatology referrals when a lesion needs a closer look.',
  },
  'allergies-and-sinus-problems': {
    image: '/images/site/cond-chronic-sinusitis.jpg',
    alt: 'A woman with her eyes closed, smelling an orange flower',
    blurb:
      'Help for seasonal allergies and stubborn sinus trouble: identify triggers, treat the inflammation, and stop the cycle of repeat infections.',
  },
  'insomnia-and-sleep-disorders': {
    image: '/images/site/cond-sleep-apnea.jpg',
    alt: 'An empty, unmade bed in a darkened bedroom',
    blurb:
      'Poor sleep affects everything. We look at habits, mood, medications, and possible sleep apnea, then treat the cause.',
  },
  'migraines-and-headaches': {
    image: '/images/site/cond-migraines.jpg',
    alt: 'A person holding their head, with hands drawn above them to suggest pressure',
    blurb:
      'Trigger tracking, rescue treatment, and preventive options so headaches stop running your calendar.',
  },
  anemia: {
    image: '/images/site/cond-pad.jpg',
    alt: 'An illustration of red and white blood cells inside a blood vessel',
    blurb:
      'Fatigue is a symptom, not a personality trait. We test for anemia, find the reason behind it, and treat both.',
  },
  'vitamin-deficiencies': {
    image: '/images/site/cond-nutrition-counseling.jpg',
    alt: 'A wooden crate of fresh leafy greens, peppers and radishes',
    blurb:
      'Testing and sensible supplementation for vitamin D, B12, iron, and other deficiencies, with food-first guidance.',
  },
  'acute-illnesses-cold-flu-covid-19': {
    image: '/images/site/cond-interstitial-lung-disease-ild.jpg',
    alt: 'An anatomical model of the lungs shown in cross section',
    blurb:
      'Colds, flu, COVID-19, strep, and the rest of what circulates through Cape Girardeau every season. Call us and we will get you seen.',
  },
  'minor-injuries-and-wound-care': {
    image: '/images/site/cond-tennis-elbow.jpg',
    alt: 'A skeletal model of the arm and elbow',
    blurb:
      'Sprains, strains, cuts, and wound care in the office, including basic procedures like wound care, abscess drainage, and skin lesion removal.',
  },
  'women-s-health-concerns': {
    image: '/images/site/cond-womens-wellness.jpg',
    alt: 'A woman stretching on a yoga mat in an open field',
    blurb:
      'Annual exams, preventive screenings, contraception, and hormone-related concerns, handled with respect and plain language.',
  },
  'geriatric-health-management': {
    image: '/images/site/cond-stroke.jpg',
    alt: 'An older adult sitting outdoors with a hand resting against her cheek',
    blurb:
      'Care for older adults that weighs the whole picture: medication load, mobility, memory, mood, and what matters most to you.',
  },
}

const FALLBACK: CardMeta = {
  image: '/images/site/quilia-care.jpg',
  alt: 'A physician balance scale mounted on a clinic wall',
  blurb: 'Evidence-based primary care from the Guardian Primary Care team in Cape Girardeau, Missouri.',
}

export default function ConditionsPage() {
  const warningSigns = [
    {
      title: 'Persistent Symptoms',
      description:
        'Pain, fatigue, or symptoms that do not improve with rest or over-the-counter treatment may point to something underlying that deserves a real evaluation.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'New or Worsening Symptoms',
      description:
        'Sudden changes in health, unexplained weight loss or gain, new lumps or skin changes, or a chronic condition that is getting worse should be looked at promptly.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      title: 'Impact on Daily Life',
      description:
        'When symptoms start interfering with work, relationships, sleep, or the things you enjoy, that is reason enough to be seen.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Conditions</span>
          </div>
          <h1 className="font-display text-5xl font-light mb-6">Conditions We Treat</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Evidence-based care for acute and chronic health conditions, for patients of every age in
            Cape Girardeau, Missouri.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Primary Care
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            From managing a long-term condition to treating an illness that showed up this morning, our
            care team looks for the root cause instead of reaching straight for a prescription.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((condition) => {
              const card = CONDITION_CARDS[condition.slug] ?? FALLBACK
              return (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up flex flex-col"
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
                    <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-3">
                      {condition.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4 flex-1">
                      {card.blurb}
                    </p>
                    <span className="text-[var(--color-primary)] font-semibold text-sm group-hover:underline inline-flex items-center">
                      Learn More →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-16">When to Seek Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign) => (
              <div key={sign.title} className="text-center animate-fade-up">
                <div className="flex justify-center mb-4">{sign.icon}</div>
                <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{sign.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[var(--color-light)] to-white border border-[var(--color-border)] rounded-2xl p-8 text-center animate-fade-up">
            <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-4">
              Need Support Right Now?
            </h3>
            <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
              Call Guardian Primary Care at{' '}
              <a href="tel:+15732006143" className="text-[var(--color-primary)] font-semibold hover:underline">
                (573) 200-6143
              </a>{' '}
              and ask about a sick visit. If this is a medical emergency, call 911. For a mental
              health crisis, these national resources answer around the clock:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-[var(--color-ink)]">988 Suicide &amp; Crisis Lifeline</p>
                  <p className="text-sm text-[var(--color-muted)]">Call or text 988 at any time</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <div className="text-left">
                  <p className="font-semibold text-[var(--color-ink)]">Crisis Text Line</p>
                  <p className="text-sm text-[var(--color-muted)]">Text HOME to 741741</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">Ready to Get the Care You Need?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule with Guardian Primary Care and work with a provider who takes the time to listen.
            We are in-network with most major commercial insurances, Medicare and Medicaid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white hover:bg-white/90 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
