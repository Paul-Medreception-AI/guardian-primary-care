import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Care Access: Insurance & Guardian Direct Care | Guardian Primary Care',
  description:
    'Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, in Cape Girardeau, MO. Prefer direct care? Guardian Direct Care plans start at $40 a month.',
  alternates: { canonical: '/insurance' },
}

const acceptedPlans = [
  'Medicare',
  'Medicaid',
  'Blue Cross Blue Shield',
  'Aetna',
  'Humana',
  'Oscar Health',
  'Mutual of Omaha',
  'Centene',
  'HealthLink',
]

const directCarePlans = [
  { plan: 'Adults (18 to 64)', monthly: '$85 / month', annual: '$925 / year', saves: 'Save $95' },
  { plan: 'Seniors (65+)', monthly: '$70 / month', annual: '$760 / year', saves: 'Save $80' },
  { plan: 'Children (0 to 17)', monthly: '$40 / month', annual: '$430 / year', saves: 'Save $50' },
  { plan: 'Couple (2 adults)', monthly: '$150 / month', annual: '$1,620 / year', saves: 'Save $180' },
  {
    plan: 'Family (2 adults, up to 2 children)',
    monthly: '$210 / month',
    annual: '$2,250 / year',
    saves: 'Save $270',
  },
  { plan: 'Each additional child', monthly: '+$30 / month', annual: '+$320 / year', saves: '' },
]

const included = [
  'Office visits whenever you need care, with no visit limits',
  'Same day or next day sick visits',
  'Direct access to your provider and your medical records',
  'Annual wellness visits and sports physicals',
  'Ongoing care for chronic conditions like diabetes, high blood pressure and asthma',
  'Basic in-office procedures: wound care, abscess drainage, cryotherapy and skin lesion removal',
]

const employerPoints = [
  {
    title: 'Predictable Costs',
    body: 'A flat monthly fee per employee, plus a 10% discount for contracted businesses.',
  },
  {
    title: 'Healthier Employees',
    body: 'An emphasis on prevention and on managing chronic conditions before they become costly.',
  },
  {
    title: 'Fast, Easy Access',
    body: 'Accessible care, comprehensive visits and telehealth included.',
  },
  {
    title: 'A Better Employee Experience',
    body: 'Personalized care with optional wellness programs, screenings and more.',
  },
]

const faqs = [
  {
    question: 'Do you take my insurance?',
    answer:
      'Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid. Plans and networks change often, so call us at (573) 200-6143 with the information on your card and we will check your coverage before your visit.',
  },
  {
    question: 'Do I have to join Guardian Direct Care to be seen?',
    answer:
      'No. Guardian Direct Care is a choice, not a requirement. You can be seen using the insurance you already have. Direct Care is there for people who want predictable monthly pricing and direct access to their provider, whether they have insurance or not.',
  },
  {
    question: 'Can I use Guardian Direct Care along with my insurance?',
    answer:
      'Many members keep an insurance plan for hospital care, specialists, imaging and prescriptions, and use Guardian Direct Care for their everyday primary care. Guardian Direct Care is not insurance and does not replace it. We are glad to talk through what makes sense for your situation.',
  },
  {
    question: 'How do I pay?',
    answer:
      'We accept HSA and FSA cards, and we accept CareCredit. If you are using insurance, your plan sets the co-pay, coinsurance or deductible you owe, and our team will tell you what to expect before your visit. If you would rather pay per visit, fair, upfront fee-for-service pricing is available on request.',
  },
  {
    question: 'What does enrollment cost?',
    answer:
      'There is a one time enrollment fee of $25 per member, and it is waived when you are referred by a licensed provider. If a membership is cancelled and you would like to come back later, re-enrollment is $200 per member.',
  },
  {
    question: 'What is an Explanation of Benefits?',
    answer:
      'An Explanation of Benefits, or EOB, is a statement from your insurance company showing how it processed a claim and what portion may be left to you. It is not a bill. If anything on it is unclear, call the office and we will help you read it.',
  },
]

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Care Access</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">Care Access</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Accessible. High quality. Transparent. Use your insurance, or choose Guardian Direct Care. Either way, you
            will know what to expect.
          </p>
        </div>
      </section>

      {/* Insurance first: this is how most patients are seen. */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--color-primary)] font-semibold mb-3">
              Using your insurance
            </p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
              We Are In-Network With Most Major Commercial Insurances, Medicare and Medicaid
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              You can be seen using the coverage you already have. We file the claim for you, and you are responsible for
              the co-pay, coinsurance or deductible your plan sets.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Insurance networks change, so the surest way to know is to ask. Call us with the details on your card and
              we will verify your benefits before your first visit.
            </p>
            <a
              href="tel:+15732006143"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Verify My Coverage: (573) 200-6143
            </a>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/insurance.jpg"
              alt="Insurance card and paperwork being reviewed at a primary care front desk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center text-[var(--color-ink)] mb-12">
            Plans We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {acceptedPlans.map((plan) => (
              <div
                key={plan}
                className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow"
              >
                {plan}
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)] mt-10 max-w-2xl mx-auto leading-relaxed">
            This is not a complete list. If you do not see your plan here, call us at{' '}
            <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline">(573) 200-6143</a>{' '}
            and we will check it for you.
          </p>
        </div>
      </section>

      {/* Guardian Direct Care: the alternative, never the only option. */}
      <section className="bg-white py-20" id="guardian-direct-care">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden order-last lg:order-first">
            <Image
              src="/images/site/wallet-cost.jpg"
              alt="A patient counting the cost of care, illustrating transparent monthly pricing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--color-primary)] font-semibold mb-3">
              Prefer direct care? No problem.
            </p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">Guardian Direct Care</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Guardian Direct Care offers predictable pricing, easy access, and care from a provider who knows you,
              without hidden fees or surprise bills.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              It is an alternative to filing insurance for your primary care, not a replacement for your health plan,
              and it is entirely your choice. Plans start as low as $40 a month.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">Membership Pricing</h3>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-left border-collapse bg-white min-w-[560px]">
              <thead>
                <tr className="bg-[var(--color-light)]">
                  <th className="font-display text-lg text-[var(--color-ink)] font-normal px-6 py-4">Who it covers</th>
                  <th className="font-display text-lg text-[var(--color-ink)] font-normal px-6 py-4">Monthly</th>
                  <th className="font-display text-lg text-[var(--color-ink)] font-normal px-6 py-4">
                    Annual (prepaid)
                  </th>
                </tr>
              </thead>
              <tbody>
                {directCarePlans.map((row) => (
                  <tr key={row.plan} className="border-t border-[var(--color-border)]">
                    <td className="px-6 py-4 text-[var(--color-ink)] font-semibold">{row.plan}</td>
                    <td className="px-6 py-4 text-[var(--color-ink)]">{row.monthly}</td>
                    <td className="px-6 py-4 text-[var(--color-ink)]">
                      {row.annual}
                      {row.saves ? (
                        <span className="block text-sm text-[var(--color-primary)] font-semibold">{row.saves}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">Enrollment</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A one time $25 enrollment fee per member, waived when you are referred by a licensed provider.
                Re-enrollment after a cancellation is $200 per member.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">Children&apos;s plans</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A child&apos;s plan requires a parent or guardian to be enrolled, and it includes annual and sports
                physicals.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">Ways to pay</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                HSA and FSA accepted. CareCredit accepted. Prefer to pay per visit? Fair, upfront fee-for-service
                pricing is available on request.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-16">
          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8">What Membership Includes</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    stroke="currentColor"
                    strokeWidth={1.8}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--color-muted)] text-sm mt-8 leading-relaxed">
              Guardian Direct Care is a membership for primary care services. It is not health insurance and it does not
              cover hospital stays, specialist care, imaging or prescription drug costs.
            </p>
          </div>
        </div>
      </section>

      {/* Employers */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl text-[var(--color-ink)] mb-4">For Employers and Businesses</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Offer your team real primary care with a flat monthly fee per employee, plus a 10% discount for contracted
              businesses. Annual plans carry a 10% discount as well.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employerPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up"
              >
                <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">{point.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <a href="tel:+15732006143" className="font-semibold text-[var(--color-primary)] hover:underline">
              Talk with us about a plan for your team: (573) 200-6143
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center text-[var(--color-ink)] mb-12">Care Access Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-[var(--color-cream)] rounded-xl border border-[var(--color-border)] overflow-hidden group animate-fade-up"
              >
                <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180 flex-shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl mb-6">Not Sure Which Option Fits?</h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Tell us about your coverage and what you need, and our team will walk you through both paths. There is no
            pressure either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15732006143"
              className="inline-block bg-white text-[var(--color-primary)] font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Call (573) 200-6143
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors backdrop-blur-sm"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
