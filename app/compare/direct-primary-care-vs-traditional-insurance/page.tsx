import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Direct Primary Care vs. Traditional Insurance | Guardian Primary Care',
  description: 'Guardian Primary Care in Cape Girardeau, MO is in-network with most major commercial insurances, Medicare and Medicaid, and also offers Guardian Direct Care. Compare both ways to get care.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            Direct Primary Care vs. Traditional Insurance: Which Way Works Better for You?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            At Guardian Primary Care in Cape Girardeau, MO you can use your insurance or choose Guardian Direct Care. Here is a plain-language look at both.
          </p>
        </div>
      </section>

      {/* You Can Choose Either */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/site/insurance.jpg"
                alt="Insurance card and coverage paperwork being reviewed at a primary care front desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)] mb-6">
                Good News: You Do Not Have to Pick a Side
              </h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid. If you have coverage, bring it. We file your visits the way any in-network primary care office does, and our team can help you understand what your plan covers before you are seen.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                We also offer <strong className="text-[var(--color-ink)]">Guardian Direct Care</strong>, a membership option for patients who would rather pay the practice directly at a flat, published price. It is an alternative, not a requirement. Many of our patients simply use their insurance, and that is welcome here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 bg-[var(--color-primary)] text-white p-6 font-semibold">
              <div className="text-lg">Factor</div>
              <div className="text-lg">Guardian Direct Care</div>
              <div className="text-lg">Using Your Insurance</div>
            </div>

            {/* Row: Access to Care */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Access to Care</div>
              <div className="text-[var(--color-muted)]">Same-day or next-day sick visits, office visits with no visit limits, direct access to your provider and your medical records</div>
              <div className="text-[var(--color-muted)]">Scheduled appointments at Guardian, with coverage and visit frequency shaped by your plan</div>
            </div>

            {/* Row: What You Pay */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">What You Pay</div>
              <div className="text-[var(--color-muted)]">A flat published membership fee: adults $85/month, seniors 65+ $70/month, children $40/month, couples $150/month, families $210/month</div>
              <div className="text-[var(--color-muted)]">Your plan&apos;s premium, copay, coinsurance and deductible, as set by your insurer</div>
            </div>

            {/* Row: Price Transparency */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Price Transparency</div>
              <div className="text-[var(--color-muted)]">Published rates, no hidden fees or surprise bills. Fair, upfront fee-for-service pricing is available on request</div>
              <div className="text-[var(--color-muted)]">Your share depends on your benefits. Our team will help you check coverage before your visit</div>
            </div>

            {/* Row: Preventive Care */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Preventive Care</div>
              <div className="text-[var(--color-muted)]">Annual wellness visits and sports physicals are included in the membership</div>
              <div className="text-[var(--color-muted)]">Most plans cover preventive visits, often at little or no cost to you. Coverage varies by plan</div>
            </div>

            {/* Row: Chronic Conditions */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Chronic Conditions</div>
              <div className="text-[var(--color-muted)]">Ongoing care for diabetes, high blood pressure, asthma and more, with no visit limits</div>
              <div className="text-[var(--color-muted)]">Ongoing care billed to your plan, with copay or deductible amounts applied per visit</div>
            </div>

            {/* Row: In-Office Procedures */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">In-Office Procedures</div>
              <div className="text-[var(--color-muted)]">Basic procedures included: wound care, abscess drainage, cryotherapy and skin lesion removal</div>
              <div className="text-[var(--color-muted)]">The same procedures, billed to your plan under your benefits</div>
            </div>

            {/* Row: Ways to Pay */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Ways to Pay</div>
              <div className="text-[var(--color-muted)]">HSA, FSA and CareCredit accepted. Prepaying annually lowers the rate, and contracted businesses receive an additional 10% discount</div>
              <div className="text-[var(--color-muted)]">Most major commercial insurances, Medicare and Medicaid accepted in-network</div>
            </div>

            {/* Row: Best For */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)]">
              <div className="font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="text-[var(--color-muted)]">Patients who want predictable pricing, direct access and no visit limits, including self-pay and high-deductible households</div>
              <div className="text-[var(--color-muted)]">Patients who already carry coverage and want to use the benefits they are paying for</div>
            </div>
          </div>

          <p className="text-sm text-[var(--color-muted)] text-center mt-6 max-w-2xl mx-auto">
            Guardian Direct Care plans start as low as $40 per month. An initial enrollment fee of $25 per member applies and is waived with a licensed provider referral.
          </p>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Guardian Direct Care
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Direct primary care is a model where you pay the practice directly for your primary care instead of routing every visit through an insurance claim. Guardian Direct Care is our version of that model: accessible, high-quality and transparent, with predictable pricing and care from a provider who knows you, without hidden fees or surprise bills.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              A Guardian Direct Care membership includes office visits when you need care with no visit limits, same-day or next-day sick visits, direct access to your provider and your medical records, annual wellness and sports physicals, ongoing care for chronic conditions such as diabetes, high blood pressure and asthma, and basic in-office procedures including wound care, abscess drainage, cryotherapy and skin lesion removal.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Published pricing for patients in Cape Girardeau, MO: adults ages 18 to 64 are $85 per month or $925 prepaid for the year, seniors 65 and older are $70 per month or $760 per year, and children ages 0 to 17 are $40 per month or $430 per year (a parent or guardian must be enrolled, and annual and sports physicals are included). Couples are $150 per month or $1,620 per year, and a family of two adults plus up to two children is $210 per month or $2,250 per year. Each additional child is $30 per month. HSA and FSA funds are accepted, CareCredit is accepted, and fair upfront fee-for-service pricing is available on request.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Insurance-Based Care at Guardian
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Most of our patients use insurance, and Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid. In this model you pay a premium to your insurer, your plan sets a deductible along with copay or coinsurance amounts, and we bill your plan for the visit. Your out-of-pocket share depends on the benefits you chose or the benefits your employer provides.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Insurance has real strengths. It is designed to cover the expensive things: hospital stays, surgery, imaging, specialty care and emergencies. Preventive visits are covered by most plans, frequently at little or no cost to you. If you already carry coverage, using it at Guardian is usually the most straightforward path, and you keep the network access your plan provides for care beyond primary care.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              The trade-offs are the ones most patients already know: deductibles have to be met, prior authorizations are sometimes required, and the amount you owe is not always clear until the claim is processed. Our team will help you check your benefits before your visit so there are as few surprises as possible, and if you would rather step outside that process entirely, Guardian Direct Care is available.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: Which Option Is Right for You?
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider Guardian Direct Care if you...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want direct access to your provider and your medical records</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want office visits with no visit limits, plus same-day or next-day sick visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have a chronic condition that needs regular monitoring and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer predictable, published pricing with no hidden fees or surprise bills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are self-employed, between jobs, uninsured, or carrying a high deductible</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Run a business and want a flat monthly fee per employee (contracted businesses receive an additional 10% discount)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want to put HSA, FSA or CareCredit funds toward your primary care</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider using your insurance if you...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have commercial coverage, Medicare or Medicaid that you are already paying for</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have employer-sponsored insurance with a low or no monthly premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want your preventive visits processed as covered preventive care</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Expect to need specialty care, imaging or a hospital stay this year</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer the structure of a plan network and are comfortable with claims and referrals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-accent)] p-8 rounded-r-xl animate-fade-up">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              Important Note About Coverage
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Guardian Direct Care is a membership for primary care. It is not health insurance, and it does not replace coverage for hospital stays, surgery, specialty care, imaging or emergency services. Patients who choose Direct Care often keep a health plan for those larger costs. If you already have insurance we are glad to simply use it, since Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Do I have to join a membership to be seen at Guardian Primary Care?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No. Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, and most of our patients simply use their coverage. Guardian Direct Care is an alternative for patients who prefer to pay the practice directly at a flat published price, and fair upfront fee-for-service pricing is available on request. Whichever way you come in, you are welcome here.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I have both Guardian Direct Care and health insurance?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes. Guardian Direct Care covers your primary care at the practice. Your health plan stays in place for the things a primary care membership does not cover: hospital stays, surgery, specialty care, imaging and emergencies. Some patients with a high deductible choose this combination so their everyday care has a known price while their plan protects them from large bills.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What does Guardian Direct Care cost?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Plans start as low as $40 per month. Adults ages 18 to 64 are $85 per month or $925 prepaid for the year (a savings of $95). Seniors 65 and older are $70 per month or $760 per year (a savings of $80). Children ages 0 to 17 are $40 per month or $430 per year (a savings of $50) and must have a parent or guardian enrolled. Couples are $150 per month or $1,620 per year, and a family of two adults plus up to two children is $210 per month or $2,250 per year. Each additional child is $30 per month or $320 per year. An initial enrollment fee of $25 per member applies and is waived with a licensed provider referral. Re-enrollment after a cancellation is $200 per member.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What happens if I need specialty care or a hospital stay?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Primary care is the foundation, not the whole building. If you need a specialist, surgery, a hospital stay or emergency services, those are billed through your health plan the same way they would be anywhere else. Your Guardian provider coordinates that care, sends the referral, and follows up with you afterward so nothing falls through the cracks.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I use HSA, FSA or CareCredit for a Direct Care membership?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Guardian Primary Care accepts HSA and FSA funds and also accepts CareCredit. Employers and contracted businesses can enroll their teams at a flat monthly fee per employee with an additional 10% discount. Call our office at <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline">(573) 200-6143</a> and we will walk you through the options.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What if Direct Care turns out not to be a good fit?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                You can cancel a Guardian Direct Care membership. Please note that re-enrolling after a cancellation carries a $200 per member fee, so it is worth talking the decision through first. If Direct Care is not the right fit, you can keep seeing us using your insurance, since we are in-network with most major commercial insurances, Medicare and Medicaid. We would rather help you land in the right place than sign you up for the wrong one.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team at Guardian Primary Care in Cape Girardeau, MO will help you check your insurance benefits or walk you through Guardian Direct Care, whichever fits your family better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Discuss Your Options
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border-2 border-white/30"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
