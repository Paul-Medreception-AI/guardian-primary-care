import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Resources & Patient Education | Guardian Primary Care | Cape Girardeau, MO',
  description:
    'Plain-language health education from Guardian Primary Care in Cape Girardeau, MO. Articles on chronic conditions, prevention, screenings, mental health, and getting the most from your primary care visits.',
}

type Post = {
  slug: string
  title: string
  category: string
  blurb: string
  image: string
  alt: string
}

const FEATURED: Post = {
  slug: 'understanding-direct-primary-care-is-it-right-for-you',
  title: 'Understanding Direct Primary Care: Is It Right for You?',
  category: 'Care Access',
  blurb:
    'Most of our patients use the insurance they already have. Some prefer a membership instead. This article explains how direct primary care works, what it costs, and how to tell which option fits your family.',
  image: '/images/site/care-access.jpg',
  alt: 'A patient discussing care and payment options with a staff member at the front desk',
}

const POSTS: Post[] = [
  {
    slug: 'managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe',
    title: 'Managing Type 2 Diabetes: Lifestyle Changes That Make a Difference',
    category: 'Chronic Disease',
    blurb: 'The daily habits that move your numbers, and how to build them without overhauling your whole life at once.',
    image: '/images/site/cond-diabetes.jpg',
    alt: 'A platter of fresh fruit, nuts and cheese on a table',
  },
  {
    slug: 'prediabetes-your-opportunity-to-prevent-type-2-diabetes',
    title: 'Prediabetes: Your Opportunity to Prevent Type 2 Diabetes',
    category: 'Prevention',
    blurb: 'Prediabetes is a warning, not a sentence. Here is what the diagnosis means and what can still change the outcome.',
    image: '/images/site/cond-diabetes.jpg',
    alt: 'A platter of fresh fruit, nuts and cheese on a table',
  },
  {
    slug: 'high-blood-pressure-the-silent-killer-you-can-control',
    title: 'High Blood Pressure: The Silent Killer You Can Control',
    category: 'Heart Health',
    blurb: 'Hypertension usually has no symptoms at all, which is exactly why it goes untreated. Here is how to find it and lower it.',
    image: '/images/site/cond-hypertension.jpg',
    alt: 'A blood pressure cuff being used during a checkup',
  },
  {
    slug: 'understanding-your-cholesterol-numbers-beyond-total-choleste',
    title: 'Understanding Your Cholesterol Numbers: Beyond Total Cholesterol',
    category: 'Heart Health',
    blurb: 'LDL, HDL, triglycerides: what each number actually tells you, and why the total on its own can be misleading.',
    image: '/images/site/cond-highcholesterol.jpg',
    alt: 'A carton of eggs with one shell opened to show the yolk',
  },
  {
    slug: 'heart-disease-prevention-small-changes-that-protect-your-hea',
    title: 'Heart Disease Prevention: Small Changes That Protect Your Heart',
    category: 'Heart Health',
    blurb: 'Prevention is rarely dramatic. It is a handful of ordinary changes, kept up over years.',
    image: '/images/site/cond-heart-disease.jpg',
    alt: 'An illustration of a heart with a stethoscope resting against it',
  },
  {
    slug: 'asthma-management-controlling-symptoms-for-better-quality-of',
    title: 'Asthma Management: Controlling Symptoms for Better Quality of Life',
    category: 'Respiratory',
    blurb: 'Triggers, inhaler technique, and a written action plan for the days when breathing gets hard.',
    image: '/images/site/cond-asthma.jpg',
    alt: 'A hand holding a nebulizer mask beside its compressor',
  },
  {
    slug: 'copd-breathing-easier-with-proper-management',
    title: 'COPD: Breathing Easier with Proper Management',
    category: 'Respiratory',
    blurb: 'What good COPD care looks like day to day, and the warning signs that mean you should call sooner rather than later.',
    image: '/images/site/cond-copd.jpg',
    alt: 'An inhaler lying next to a single cigarette',
  },
  {
    slug: 'managing-seasonal-allergies-beyond-over-the-counter-medicati',
    title: 'Managing Seasonal Allergies: Beyond Over-the-Counter Medications',
    category: 'Allergies',
    blurb: 'When the pharmacy aisle stops working, there are still options worth trying.',
    image: '/images/site/cond-chronic-sinusitis.jpg',
    alt: 'A woman with her eyes closed, smelling an orange flower',
  },
  {
    slug: 'thyroid-disorders-symptoms-testing-and-treatment-options',
    title: 'Thyroid Disorders: Symptoms, Testing, and Treatment Options',
    category: 'Hormones',
    blurb: 'Fatigue, weight changes, and mood shifts sometimes trace back to your thyroid. Here is how it gets tested.',
    image: '/images/site/cond-ckd.jpg',
    alt: 'A hand holding an anatomical model of an organ',
  },
  {
    slug: 'hormone-changes-and-menopause-what-to-expect-and-how-to-mana',
    title: 'Hormone Changes and Menopause: What to Expect and How to Manage Symptoms',
    category: "Women's Health",
    blurb: 'Perimenopause and menopause affect sleep, mood, and energy. You do not have to just wait them out.',
    image: '/images/site/cond-womens-wellness.jpg',
    alt: 'A woman stretching on a yoga mat in an open field',
  },
  {
    slug: 'women-s-health-after-40-what-screenings-you-need-and-when',
    title: "Women's Health After 40: What Screenings You Need and When",
    category: "Women's Health",
    blurb: 'A straightforward checklist of the screenings that matter after 40, and the ages to start each one.',
    image: '/images/site/cond-womens-wellness.jpg',
    alt: 'A woman stretching on a yoga mat in an open field',
  },
  {
    slug: 'managing-anxiety-in-primary-care-when-to-seek-additional-sup',
    title: 'Managing Anxiety in Primary Care: When to Seek Additional Support',
    category: 'Mental Wellness',
    blurb: 'Anxiety is treatable in a primary care office. Here is what we can do, and when a referral helps more.',
    image: '/images/site/cond-anxiety.jpg',
    alt: 'A person sitting with both hands covering their face',
  },
  {
    slug: 'the-connection-between-mental-health-and-physical-health',
    title: 'The Connection Between Mental Health and Physical Health',
    category: 'Mental Wellness',
    blurb: 'Mood, sleep, pain, and blood sugar all pull on each other. Treating one usually means looking at the rest.',
    image: '/images/site/cond-role-of-holistic-integrative-care.jpg',
    alt: 'A child holding a monarch butterfly in cupped hands',
  },
  {
    slug: 'recognizing-the-early-signs-of-dementia-in-aging-loved-ones',
    title: 'Recognizing the Early Signs of Dementia in Aging Loved Ones',
    category: 'Aging & Memory',
    blurb: 'Not every memory slip is dementia. Knowing the difference helps families get answers sooner.',
    image: '/images/site/cond-dementia-including-alzheimers.jpg',
    alt: 'An older adult pictured behind missing jigsaw puzzle pieces, illustrating memory loss',
  },
  {
    slug: 'supporting-caregivers-resources-for-families-caring-for-deme',
    title: 'Supporting Caregivers: Resources for Families Caring for Dementia Patients',
    category: 'Aging & Memory',
    blurb: 'Caregiving is real work. Practical strategies and support for the people doing it.',
    image: '/images/site/cond-dementia-including-alzheimers.jpg',
    alt: 'An older adult pictured behind missing jigsaw puzzle pieces, illustrating memory loss',
  },
  {
    slug: 'caring-for-aging-parents-medical-decision-making-and-advance',
    title: 'Caring for Aging Parents: Medical Decision-Making and Advance Directives',
    category: 'Aging & Memory',
    blurb: 'How to have the conversation about advance directives before a crisis forces it.',
    image: '/images/site/handshake-care.jpg',
    alt: 'A clinician and a patient shaking hands',
  },
  {
    slug: 'osteoporosis-prevention-and-treatment-protecting-your-bone-h',
    title: 'Osteoporosis Prevention and Treatment: Protecting Your Bone Health',
    category: 'Bone Health',
    blurb: 'Bone loss is quiet until a fracture. Screening, nutrition, and strength work all move the needle.',
    image: '/images/site/cond-osteoporosis.jpg',
    alt: 'An anatomical model of the spine and pelvis',
  },
  {
    slug: 'managing-arthritis-pain-medications-and-beyond',
    title: 'Managing Arthritis Pain: Medications and Beyond',
    category: 'Joint & Muscle',
    blurb: 'Medication is one tool. Movement, weight, sleep, and physical therapy are the rest of the toolbox.',
    image: '/images/site/cond-arthritis.jpg',
    alt: 'A person pressing one hand into the other to ease joint pain',
  },
  {
    slug: 'managing-chronic-pain-without-opioids-alternative-approaches',
    title: 'Managing Chronic Pain Without Opioids: Alternative Approaches',
    category: 'Joint & Muscle',
    blurb: 'Evidence-based options for long-term pain, from physical therapy to behavioral approaches.',
    image: '/images/site/cond-low-back-pain.jpg',
    alt: 'A person seen from behind with the lower back highlighted in red',
  },
  {
    slug: 'managing-gerd-and-acid-reflux-lifestyle-and-medical-approach',
    title: 'Managing GERD and Acid Reflux: Lifestyle and Medical Approaches',
    category: 'Digestive Health',
    blurb: 'What to change before reaching for a daily pill, and when reflux needs a closer look.',
    image: '/images/site/cond-ibs.jpg',
    alt: 'A person holding their abdomen, with the colon highlighted in an overlay',
  },
  {
    slug: 'urinary-tract-infections-prevention-and-treatment-strategies',
    title: 'Urinary Tract Infections: Prevention and Treatment Strategies',
    category: 'Urinary Health',
    blurb: 'Treating the infection you have, and reducing the odds of the next one.',
    image: '/images/site/cond-frequent-urinary-tract-infections-utis.jpg',
    alt: 'A clean, tiled restroom',
  },
  {
    slug: 'understanding-and-managing-migraine-headaches',
    title: 'Understanding and Managing Migraine Headaches',
    category: 'Neurology',
    blurb: 'Tracking triggers, treating an attack early, and knowing when prevention is worth it.',
    image: '/images/site/cond-migraines.jpg',
    alt: 'A person holding their head, with hands drawn above them to suggest pressure',
  },
  {
    slug: 'sleep-and-health-why-quality-sleep-matters-for-overall-welln',
    title: 'Sleep and Health: Why Quality Sleep Matters for Overall Wellness',
    category: 'Sleep',
    blurb: 'Sleep quietly shapes weight, mood, blood pressure, and blood sugar. Here is how to improve it.',
    image: '/images/site/cond-sleep-apnea.jpg',
    alt: 'An empty, unmade bed in a darkened bedroom',
  },
  {
    slug: 'weight-management-evidence-based-approaches-that-actually-wo',
    title: 'Weight Management: Evidence-Based Approaches That Actually Work',
    category: 'Weight & Nutrition',
    blurb: 'Past the fads: what the evidence supports for losing weight and keeping it off.',
    image: '/images/site/cond-obesity.jpg',
    alt: 'A bathroom scale on a wooden floor',
  },
  {
    slug: 'nutrition-counseling-how-diet-impacts-chronic-disease-manage',
    title: 'Nutrition Counseling: How Diet Impacts Chronic Disease Management',
    category: 'Weight & Nutrition',
    blurb: 'How everyday food choices change the course of diabetes, blood pressure, and heart disease.',
    image: '/images/site/cond-nutrition-counseling.jpg',
    alt: 'A wooden crate of fresh leafy greens, peppers and radishes',
  },
  {
    slug: 'vitamin-d-deficiency-symptoms-testing-and-supplementation',
    title: 'Vitamin D Deficiency: Symptoms, Testing, and Supplementation',
    category: 'Weight & Nutrition',
    blurb: 'Who should be tested, what the levels mean, and how much supplementation is sensible.',
    image: '/images/site/cond-nutrition-counseling.jpg',
    alt: 'A wooden crate of fresh leafy greens, peppers and radishes',
  },
  {
    slug: 'the-role-of-exercise-in-chronic-disease-management',
    title: 'The Role of Exercise in Chronic Disease Management',
    category: 'Exercise & Activity',
    blurb: 'Movement is treatment. Here is how much, what kind, and how to start when starting feels impossible.',
    image: '/images/site/cond-exercise-activity.jpg',
    alt: 'A person running along a city wall',
  },
  {
    slug: 'the-importance-of-annual-wellness-exams-for-adults',
    title: 'The Importance of Annual Wellness Exams for Adults',
    category: 'Preventive Care',
    blurb: 'What happens at a wellness visit, and how to come prepared so you get more out of it.',
    image: '/images/site/cond-routine-annual-wellness.jpg',
    alt: 'Wooden letter tiles spelling the word wellness',
  },
  {
    slug: 'preventative-cancer-screenings-which-tests-you-need-and-when',
    title: 'Preventative Cancer Screenings: Which Tests You Need and When',
    category: 'Preventive Care',
    blurb: 'Screening schedules by age and risk, explained without the jargon.',
    image: '/images/site/cond-cancer-screenings.jpg',
    alt: 'A clinician in a white coat holding a red awareness ribbon',
  },
  {
    slug: 'skin-cancer-prevention-and-early-detection',
    title: 'Skin Cancer Prevention and Early Detection',
    category: 'Preventive Care',
    blurb: 'Sun habits worth keeping, and what a spot has to look like before you get it checked.',
    image: '/images/site/cond-eczema.jpg',
    alt: 'Close view of dry, cracked skin on an open palm',
  },
  {
    slug: 'blood-work-basics-understanding-your-lab-results',
    title: 'Blood Work Basics: Understanding Your Lab Results',
    category: 'Labs & Testing',
    blurb: 'A guide to the panels you get most often, and what an out-of-range value does and does not mean.',
    image: '/images/site/cond-pad.jpg',
    alt: 'An illustration of red and white blood cells inside a blood vessel',
  },
  {
    slug: 'flu-vaccines-myths-facts-and-why-you-should-get-one',
    title: 'Flu Vaccines: Myths, Facts, and Why You Should Get One',
    category: 'Vaccines',
    blurb: 'The common objections to the flu shot, and what the evidence actually says about each one.',
    image: '/images/site/cond-chronic-hepatitis.jpg',
    alt: 'A medical illustration of the torso with the internal organs highlighted',
  },
  {
    slug: 'the-shingles-vaccine-who-needs-it-and-why-it-matters',
    title: 'The Shingles Vaccine: Who Needs It and Why It Matters',
    category: 'Vaccines',
    blurb: 'Who the shingles vaccine is recommended for, and why the nerve pain afterward is the real reason to get it.',
    image: '/images/site/hero-poster.jpg',
    alt: 'A provider greeting a patient at the entrance of the Guardian Primary Care clinic',
  },
  {
    slug: 'sports-physicals-for-young-athletes-what-parents-need-to-kno',
    title: 'Sports Physicals for Young Athletes: What Parents Need to Know',
    category: 'Pediatric Care',
    blurb: 'What the pre-participation exam covers, what to bring, and when to schedule it.',
    image: '/images/site/cond-school-sports-employment-screenings.jpg',
    alt: 'A young volleyball player holding a ball on an indoor court',
  },
  {
    slug: 'managing-multiple-chronic-conditions-a-coordinated-care-appr',
    title: 'Managing Multiple Chronic Conditions: A Coordinated Care Approach',
    category: 'Chronic Disease',
    blurb: 'When several conditions and several specialists are involved, someone has to see the whole picture.',
    image: '/images/site/cond-common-primary-care-referrals.jpg',
    alt: 'Two miniature figures of medical staff on a plain background',
  },
  {
    slug: 'when-to-choose-urgent-care-vs-primary-care-for-common-illnes',
    title: 'When to Choose Urgent Care vs. Primary Care for Common Illnesses',
    category: 'Getting Care',
    blurb: 'A simple guide to where to go when you wake up sick, and when to head straight to the emergency room.',
    image: '/images/site/cond-common-primary-care-referrals.jpg',
    alt: 'Two miniature figures of medical staff on a plain background',
  },
  {
    slug: 'building-a-relationship-with-your-primary-care-provider',
    title: 'Building a Relationship with Your Primary Care Provider',
    category: 'Getting Care',
    blurb: 'Continuity is underrated. Here is how to get more out of knowing, and being known by, your provider.',
    image: '/images/site/handshake-care.jpg',
    alt: 'A clinician and a patient shaking hands',
  },
  {
    slug: 'telehealth-vs-in-person-visits-choosing-the-right-option',
    title: 'Telehealth vs. In-Person Visits: Choosing the Right Option',
    category: 'Getting Care',
    blurb: 'Which concerns a video visit handles well, and which ones really do need an exam room.',
    image: '/images/site/care-access.jpg',
    alt: 'A patient checking in with a staff member at a clinic reception desk',
  },
  {
    slug: 'understanding-medicare-primary-care-coverage-for-seniors',
    title: 'Understanding Medicare: Primary Care Coverage for Seniors',
    category: 'Care Access',
    blurb: 'Parts A, B, C, and D in plain language, and what each one covers at a primary care visit.',
    image: '/images/site/insurance.jpg',
    alt: 'An illustration of health insurance paperwork, coverage shields and a stethoscope',
  },
]

function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up flex flex-col">
      <Link href={`/blog/${post.slug}`} className="group flex flex-col flex-1">
        <div className="relative w-full h-48">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-8 flex flex-col flex-1">
          <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
            {post.category}
          </div>
          <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed flex-1">{post.blurb}</p>
          <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium group-hover:underline">
            Read More →
          </span>
        </div>
      </Link>
    </article>
  )
}

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-5xl font-light mb-6">Resources &amp; Patient Education</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Clear, plain-language health information from the Guardian Primary Care team in
            Cape Girardeau, Missouri.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="grid lg:grid-cols-2">
              <div className="relative w-full h-72 lg:h-full lg:min-h-[22rem]">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-10">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
                  Featured Article
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
                  {FEATURED.title}
                </h2>
                <div className="text-[var(--color-muted)] space-y-4 mb-8 leading-relaxed">
                  <p>
                    Guardian Primary Care is in-network with most major commercial insurances, Medicare
                    and Medicaid, so most patients simply use the coverage they already have. For patients
                    who would rather skip insurance billing altogether, we also offer Guardian Direct Care,
                    a membership option with predictable pricing and direct access to your provider.
                  </p>
                  <p>
                    This article walks through how direct primary care works, what is included, what it
                    costs, and the kinds of patients who tend to prefer it, so you can decide which path
                    fits your family.
                  </p>
                </div>
                <Link
                  href={`/blog/${FEATURED.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-6 animate-fade-up">
            Have a Question About Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up leading-relaxed">
            Reading is a good start. Talking it through with your provider is better. Appointments are
            available in person at our Cape Girardeau office or by telehealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105 animate-fade-up"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] px-10 py-4 rounded-full font-medium transition-all animate-fade-up"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
