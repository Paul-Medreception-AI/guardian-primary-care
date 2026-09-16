import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Guardian Primary Care, Cape Girardeau MO',
  description:
    'Answers about insurance, Guardian Direct Care pricing, telehealth, who you will see and how to become a patient at Guardian Primary Care in Cape Girardeau, Missouri.',
  alternates: { canonical: '/faq' },
}

type Faq = { question: string; answer: string }

const faqs: Faq[] = [
  {
    question: 'Do you take my insurance?',
    answer:
      'Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, including plans such as Blue Cross Blue Shield, Aetna, Humana, Oscar Health, Mutual of Omaha, Centene and HealthLink. Networks change often, so call us at (573) 200-6143 with the details on your card and we will verify your benefits before your first visit. If you would rather not use insurance for your primary care, Guardian Direct Care is available as an alternative.',
  },
  {
    question: 'Who will I see at Guardian Primary Care?',
    answer:
      'Your provider is Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner licensed by the Missouri State Board of Nursing, who practices in partnership with a Missouri Licensed Collaborating Physician. You will also be cared for by our team: Madi Hayden-Moore, BSN, RN, and Tamera Crowden, a certified medical assistant. Heather Pullen, MSN, APRN, FNP-C, RN, leads Guardian Aesthetics.',
  },
  {
    question: 'What is Guardian Direct Care, and what does it cost?',
    answer:
      'Guardian Direct Care is our direct care option for patients who want predictable pricing and direct access to their provider, without hidden fees or surprise bills. It is offered alongside insurance, not instead of it, and joining is entirely your choice. Monthly pricing is $85 for adults 18 to 64, $70 for seniors 65 and over, $40 for children 0 to 17, $150 for a couple and $210 for a family of two adults and up to two children, with each additional child at $30 a month. Prepaying annually saves you money, and there is a one time $25 enrollment fee that is waived with a referral from a licensed provider.',
  },
  {
    question: 'Is Guardian Direct Care the same as health insurance?',
    answer:
      'No. Guardian Direct Care is a membership that covers your primary care at Guardian. It is not insurance, and it does not cover hospital stays, specialist care, imaging or prescription drug costs. Many members keep a health plan for those things and use Guardian Direct Care for their day to day care. You can see the full pricing and what is included on our Care Access page.',
  },
  {
    question: 'Do you see children?',
    answer:
      'Yes. Guardian Primary Care is a family practice and we care for patients at every stage of life, from children through older adults. Guardian Direct Care includes plans for children 0 to 17 at $40 a month, which cover annual and sports physicals. A child plan requires a parent or guardian to be enrolled as well.',
  },
  {
    question: 'Do you offer telehealth or virtual visits?',
    answer:
      'Yes. Guardian offers both in-person and telehealth appointments. Telehealth works well for follow ups, medication management, mental health check ins and many minor illnesses. Some concerns do need an in-person exam, and our team will help you choose the right kind of visit when you schedule.',
  },
  {
    question: 'Where are you located?',
    answer:
      'We are at 2441 Myra Dr, Cape Girardeau, MO 63703. We care for patients from across Southeast Missouri, including Jackson, Scott City, Perryville and Sikeston.',
  },
  {
    question: 'What are your office hours?',
    answer:
      'Guardian Primary Care sees patients by appointment, and we are closed on US major holidays. Call us at (573) 200-6143 and we will find a time that fits your schedule, in the office or by telehealth.',
  },
  {
    question: 'How do I become a new patient?',
    answer:
      'Call us at (573) 200-6143 or request your first appointment online through our contact page. We will ask for your basic contact and insurance information so we can be ready for you. Patients who are already established with us can self-schedule on the Patient Ally portal.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Bring a current photo ID, your insurance card if you are using insurance, a list of everything you take including over the counter medicines and supplements, and any recent lab work or records from other providers. Bring your questions too. If something is hard to track down, come anyway and we will sort it out together.',
  },
  {
    question: 'Can I be seen quickly when I am sick?',
    answer:
      'Guardian Direct Care members have same day or next day sick visits included in their membership. If you are not a member, call us at (573) 200-6143 as early in the day as you can and we will do our best to fit you in. For a life threatening emergency such as chest pain, trouble breathing, severe bleeding or stroke symptoms, call 911 or go to the nearest emergency room.',
  },
  {
    question: 'What should I do if I have an urgent concern after hours?',
    answer:
      'For any life threatening emergency, call 911 or go to the nearest emergency room. If you are in a mental health crisis, call or text 988, the Suicide and Crisis Lifeline. For concerns that are not emergencies, call the office at (573) 200-6143 or leave a message through the Patient Ally portal, and we will get back to you when the office is next open.',
  },
  {
    question: 'Do you treat chronic conditions like diabetes and high blood pressure?',
    answer:
      'Yes. Ongoing care for chronic conditions is central to what we do, including diabetes, high blood pressure, high cholesterol, asthma, COPD, heart disease, thyroid conditions and arthritis. Our approach combines medication management, regular monitoring, education and lifestyle support, with referrals to specialists when that is the right step.',
  },
  {
    question: 'Do you provide annual wellness exams and preventive care?',
    answer:
      'Yes. We provide routine annual wellness visits, cancer screenings, school, sports and employment screenings, nutrition counseling, guidance on exercise and activity, and wellness care for women. Preventive visits are a good time to catch things early and to set goals you can actually keep.',
  },
  {
    question: 'Do you provide mental health care?',
    answer:
      'Yes. Mental health is one of our service lines, because mental and physical health are not separate. We offer screening, diagnosis and treatment for common concerns such as depression, anxiety and stress related conditions, and we can prescribe and manage medication when that is appropriate. When someone needs specialized therapy or psychiatric care, we refer to trusted clinicians in the area. If you are in crisis, call or text 988.',
  },
  {
    question: 'Do I need a referral to see a specialist?',
    answer:
      'That depends on your insurance plan. Some plans, particularly HMOs, require a referral from your primary care provider before you see a specialist, while many PPO plans do not. Either way, we are glad to make referrals and to coordinate with the specialists you see, so that everyone caring for you is working from the same picture.',
  },
  {
    question: 'How do I request a prescription refill?',
    answer:
      'You can request refills through the Patient Ally portal, by calling the office, or by asking your pharmacy to send us the request. Please ask before you run out so we have time to review it. Some medications, including controlled substances, need an office visit before a refill can be authorized.',
  },
  {
    question: 'Can I see my medical records online?',
    answer:
      'Yes. Patients have access to the Patient Ally portal, where you can review visit information and test results, request refills, message our team and schedule appointments. If you need help getting signed in, call the office and we will walk you through it.',
  },
  {
    question: 'What else do you offer besides primary care?',
    answer:
      'Alongside primary care, Guardian offers weight loss care, aging services and dementia support, hormone and testosterone therapy, mental health care, Guardian Performance, and aesthetic treatments through Guardian Aesthetics. If you are not sure where your concern fits, call us and we will point you in the right direction.',
  },
  {
    question: 'What makes Guardian Primary Care different?',
    answer:
      'You get a choice in how you pay, insurance or Guardian Direct Care, and the same care either way. You see a nationally certified nurse practitioner who takes the time to look for the root cause rather than pushing you through, working with a collaborating physician and a small team who will know your name. We care for the whole family, in person or by telehealth, right here in Cape Girardeau.',
  },
]

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-display text-5xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Straight answers about coverage, cost, scheduling and what to expect at Guardian Primary Care.
          </p>
        </div>
      </section>
      {/* Section image */}
      <section className="bg-[var(--color-cream)] pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/site/quilia-care.jpg"
              alt="A clinician talking with a patient during an appointment"
              fill
              sizes="(max-width: 1024px) 100vw, 64rem"
              className="object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
              <summary className="cursor-pointer p-6 font-display font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center gap-4">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-45 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">{faq.answer}</div>
            </details>
          ))}

          <div className="mt-12 bg-[var(--color-light)] rounded-2xl p-8 text-center">
            <p className="text-[var(--color-ink)] leading-relaxed">
              Looking for pricing details? Our{' '}
              <Link href="/insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
                Care Access page
              </Link>{' '}
              lays out insurance and Guardian Direct Care side by side. New to the practice? Start with our{' '}
              <Link href="/new-patients" className="text-[var(--color-primary)] font-semibold hover:underline">
                new patient guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-10 opacity-90 leading-relaxed">
            Our team is happy to help. Call us and we will answer honestly, whether the question is about your coverage,
            your visit or whether we are the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15732006143"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Call (573) 200-6143
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
