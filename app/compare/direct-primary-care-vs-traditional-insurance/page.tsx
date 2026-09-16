import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Direct Primary Care vs. Traditional Insurance | Guardian Primary Care',
  description: 'Compare Direct Primary Care and Traditional Insurance models. Learn which healthcare approach is right for you in Birmingham, AL with detailed side-by-side analysis.',
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
            <a href="/resources" className="hover:underline">Resources</a>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Direct Primary Care vs. Traditional Insurance: Which Model Is Right for You?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparison to help you make an informed decision about your healthcare in Birmingham, AL
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 bg-[var(--color-primary)] text-white p-6 font-semibold">
              <div className="text-lg">Factor</div>
              <div className="text-lg">Direct Primary Care</div>
              <div className="text-lg">Traditional Insurance</div>
            </div>

            {/* Row: Access to Care */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Access to Care</div>
              <div className="text-[var(--color-muted)]">Same-day or next-day appointments, unlimited visits, direct phone/text access to your doctor</div>
              <div className="text-[var(--color-muted)]">Wait times of days to weeks, limited appointment duration, communication through office staff</div>
            </div>

            {/* Row: Monthly Cost */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Monthly Cost</div>
              <div className="text-[var(--color-muted)]">Flat monthly membership fee ($75-150), no copays for visits</div>
              <div className="text-[var(--color-muted)]">Premium + copays ($20-50 per visit) + deductible ($1,000-8,000+)</div>
            </div>

            {/* Row: Appointment Time */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Appointment Time</div>
              <div className="text-[var(--color-muted)]">30-60 minutes per visit, unhurried care</div>
              <div className="text-[var(--color-muted)]">10-15 minutes per visit, often rushed</div>
            </div>

            {/* Row: Preventive Care */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Preventive Care</div>
              <div className="text-[var(--color-muted)]">Included in membership: screenings, annual exams, chronic disease management</div>
              <div className="text-[var(--color-muted)]">Often covered after deductible, may require copays</div>
            </div>

            {/* Row: Lab Work & Tests */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Lab Work & Tests</div>
              <div className="text-[var(--color-muted)]">Wholesale pricing (often 80-90% below retail), transparent costs</div>
              <div className="text-[var(--color-muted)]">Insurance-negotiated rates, surprise bills common, applied to deductible</div>
            </div>

            {/* Row: Doctor-Patient Relationship */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Doctor-Patient Relationship</div>
              <div className="text-[var(--color-muted)]">Deep, long-term relationship with your physician who knows your health history intimately</div>
              <div className="text-[var(--color-muted)]">Limited continuity, physician manages 2,000+ patients</div>
            </div>

            {/* Row: Paperwork & Billing */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Paperwork & Billing</div>
              <div className="text-[var(--color-muted)]">Minimal, no insurance claims to file for primary care</div>
              <div className="text-[var(--color-muted)]">Extensive pre-authorizations, claims, denials, appeals</div>
            </div>

            {/* Row: Best For */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-cream)]">
              <div className="font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="text-[var(--color-muted)]">People who value convenience, personalized care, and predictable costs</div>
              <div className="text-[var(--color-muted)]">People who prefer large networks and are comfortable with traditional healthcare navigation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Direct Primary Care */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Direct Primary Care
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Direct Primary Care (DPC) is a healthcare model that removes insurance companies from the primary care equation. Instead of billing insurance for each visit, patients pay a flat monthly membership fee directly to their physician's practice. This fee covers all primary care services including unlimited office visits, preventive care, chronic disease management, and direct communication with your doctor via phone, text, or email.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              The DPC model allows physicians to reduce their patient panel from 2,000-3,000 patients (typical in insurance-based practices) to 400-600 patients. This dramatic reduction means your doctor has significantly more time to spend with you, can offer same-day or next-day appointments, and can develop a deep understanding of your health history and goals. Appointments typically last 30-60 minutes rather than the rushed 10-15 minutes common in traditional practices.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              In Birmingham, AL, Guardian Primary Care offers wholesale pricing on lab work and medications, often saving patients 80-90% compared to insurance-negotiated rates. This transparency extends to all costs—you'll know exactly what you're paying each month with no surprise bills, no copays, and no deductibles for primary care services. DPC is particularly effective for patients with chronic conditions who require regular monitoring, those who value convenience and accessibility, and families seeking comprehensive, personalized care.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Traditional Insurance-Based Care
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              Traditional insurance-based primary care is the model most Americans are familiar with. You pay monthly premiums to an insurance company, meet a deductible (often $1,000-8,000 or more), and then pay copays ($20-50) for each doctor visit. Your physician bills the insurance company for services rendered, and the insurance company determines what they'll pay and what you owe. This creates a three-way relationship between you, your doctor, and the insurance company.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
              In this model, physicians typically manage 2,000-3,000 patients to remain financially viable. This high patient volume means appointments are often limited to 10-15 minutes, wait times can stretch to weeks for non-urgent issues, and communication with your doctor usually goes through office staff. The system works best for acute care—addressing specific problems when they arise—rather than long-term preventive care and relationship-building. Insurance networks provide access to a wide range of specialists and facilities, which can be valuable for complex medical needs.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              The traditional model includes significant administrative complexity. Pre-authorizations may be required for certain tests or treatments, claims can be denied requiring appeals, and surprise medical bills remain common despite recent legislation. For patients who rarely need medical care, who prefer the structure of a large network, or who have employer-sponsored insurance with low premiums, traditional insurance may provide adequate coverage. However, many patients in Birmingham, AL find themselves frustrated by the lack of access, short appointment times, and unpredictable costs inherent in this system.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: Which Model Is Right for You?
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Direct Primary Care if you...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Value convenience and same-day access to your doctor</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want longer appointments (30-60 minutes) and unhurried care</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have a chronic condition requiring regular monitoring and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer predictable, transparent pricing with no surprise bills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Want direct communication with your physician via phone, text, or email</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are frustrated with insurance paperwork, pre-authorizations, and denials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Seek a deep, long-term relationship with a physician who knows your health history</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are self-employed, between jobs, or have high-deductible insurance plans</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Traditional Insurance if you...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have employer-sponsored insurance with low or no monthly premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Rarely need medical care and only visit the doctor once or twice per year</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer access to a large network of specialists and facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are comfortable navigating insurance pre-authorizations and claims processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Don't mind shorter appointments and longer wait times</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are satisfied with the traditional healthcare system as it currently operates</span>
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
              Direct Primary Care is not insurance and does not replace the need for health insurance for hospitalizations, surgeries, specialist care, or emergency services. Many DPC patients pair their membership with a high-deductible health plan or health sharing ministry to cover catastrophic events while enjoying affordable, accessible primary care. This combination often results in lower overall healthcare spending while providing comprehensive protection.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I have both Direct Primary Care and traditional insurance?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, and this is actually a common and smart strategy. Many patients use Direct Primary Care for all their primary care needs (unlimited visits, preventive care, chronic disease management) and maintain a high-deductible health insurance plan or catastrophic coverage for hospitalizations, surgeries, specialist care, and emergencies. This combination often costs less than traditional low-deductible insurance while providing superior primary care access. Your DPC membership fee is separate from insurance and paid directly to the practice.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover Direct Primary Care membership fees?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, insurance does not cover DPC membership fees because Direct Primary Care intentionally operates outside the insurance system to eliminate administrative complexity and reduce costs. However, the monthly membership fee is often less expensive than traditional insurance copays for frequent visitors. Some employers offer DPC memberships as a benefit, and you may be able to use HSA or FSA funds to pay your membership fee. The value comes from unlimited access, longer appointments, and transparent pricing—benefits that more than offset the direct payment model for most members.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What happens if I need specialist care or hospitalization?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Direct Primary Care covers primary care services only. If you need specialist care, surgery, hospitalization, or emergency services, you'll use your traditional health insurance, catastrophic coverage, or health sharing ministry just as you would in any healthcare system. Your DPC physician will coordinate your care, provide referrals, and communicate with specialists to ensure continuity. Many DPC doctors have strong relationships with local specialists in Birmingham, AL and can help you navigate the healthcare system more effectively. Think of DPC as handling 80-90% of your healthcare needs (primary care) while insurance covers the remaining 10-20% (specialists, hospitals, emergencies).
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                How much money can I actually save with Direct Primary Care?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Savings vary based on your individual situation, but many patients save significantly. Consider this: a DPC membership might cost $100/month ($1,200/year) with no additional copays for unlimited visits. In contrast, traditional insurance might charge $300/month premium ($3,600/year) plus $30-50 copays per visit plus lab fees applied to your deductible. If you visit the doctor 6 times per year, traditional insurance could cost $4,000-5,000 total versus $1,200 for DPC. Add in wholesale lab pricing (often 80-90% below retail) and the savings compound. Patients with chronic conditions requiring frequent monitoring often see the greatest financial benefit, but even healthy patients appreciate predictable costs with no surprise bills.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What if I'm not satisfied with Direct Primary Care?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most Direct Primary Care practices, including Guardian Primary Care in Birmingham, AL, offer month-to-month memberships with no long-term contracts. You can cancel at any time if you're not satisfied. This flexibility is part of the patient-centered philosophy of DPC—your doctor earns your membership every month through excellent service and accessible care. We encourage prospective members to schedule a consultation to meet the physician, tour the practice, ask questions, and ensure DPC is the right fit before committing. The vast majority of patients who try Direct Primary Care find the personalized attention, convenience, and transparent pricing far superior to traditional insurance-based care and remain members for years.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Explore Your Healthcare Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation with Guardian Primary Care in Birmingham, AL to discuss which healthcare model best fits your needs, budget, and health goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}