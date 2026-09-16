import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Direct Primary Care: Is It Right for You? | Guardian Primary Care',
  description: 'Explore the Direct Primary Care model and discover if this personalized, membership-based approach to healthcare is the right fit for you and your family in Birmingham, AL.',
  openGraph: {
    title: 'Understanding Direct Primary Care: Is It Right for You?',
    description: 'Explore the Direct Primary Care model and discover if this personalized, membership-based approach to healthcare is the right fit for you and your family in Birmingham, AL.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Direct Primary Care: Is It Right for You?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine walking into your doctor's office and actually having time to talk. No rushing. No feeling like just another number. No surprise bills that make you wonder what you're really paying for. For many people in Birmingham and across the country, this sounds almost too good to be true—but it's exactly what Direct Primary Care (DPC) offers.
            </p>
            <p className="mb-6">
              As healthcare becomes increasingly complex and impersonal, more patients are discovering an alternative model that prioritizes the doctor-patient relationship above all else. But what exactly is Direct Primary Care, and more importantly, is it the right choice for you and your family?
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Direct Primary Care?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Direct Primary Care is a healthcare model built on a simple premise: you pay your primary care doctor a monthly membership fee, similar to a gym membership, and in return, you get comprehensive primary care services without the hassle of insurance billing for those visits.
            </p>
            <p className="mb-6">
              Unlike traditional insurance-based practices where doctors see 25-30 patients per day to cover overhead costs, DPC physicians typically maintain smaller patient panels—often around 600 patients compared to the typical 2,000-3,000. This fundamental difference allows for longer appointments, same-day or next-day availability, and direct access to your doctor via phone, text, or email.
            </p>
            <p className="mb-6">
              The monthly fee typically ranges from $50 to $150 per person, depending on age and the specific practice. This covers unlimited office visits, basic lab work, care coordination, and often includes services like EKGs, minor procedures, and chronic disease management—all without copays or additional fees.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How DPC Differs from Traditional Healthcare
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The contrast between DPC and traditional fee-for-service medicine is stark. In conventional practices, insurance companies act as the middleman between you and your doctor. This creates administrative burden, limits appointment times, and often prioritizes billing codes over patient needs.
            </p>
            <p className="mb-6">
              Direct Primary Care removes this middleman entirely—at least for primary care services. Your doctor works directly for you, not for an insurance company. This alignment of incentives means your physician can focus on keeping you healthy rather than maximizing billable procedures.
            </p>
            <p className="mb-6">
              It's important to understand that DPC is not insurance and doesn't replace your health insurance for hospitalizations, specialists, or emergency care. Instead, it works alongside a high-deductible health plan or health sharing ministry, covering your routine primary care needs while you maintain catastrophic coverage for major medical events.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "Direct Primary Care returns healthcare to its roots: a trusted relationship between doctor and patient, built on time, accessibility, and transparency."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Who Benefits Most from Direct Primary Care?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While DPC can work for almost anyone, certain groups find it particularly valuable:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">People with chronic conditions</strong>
                  <span className="text-[var(--color-ink)]"> like diabetes, hypertension, or thyroid disorders benefit from frequent monitoring and adjustments without worrying about copay costs adding up.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Individuals and families seeking personalized care</strong>
                  <span className="text-[var(--color-ink)]"> who value longer appointments and direct communication with their physician.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Those with high-deductible insurance plans</strong>
                  <span className="text-[var(--color-ink)]"> who face significant out-of-pocket costs before their insurance kicks in. DPC provides predictable primary care costs.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Self-employed professionals and small business owners</strong>
                  <span className="text-[var(--color-ink)]"> who need flexible, accessible care that fits their unpredictable schedules.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Parents of young children</strong>
                  <span className="text-[var(--color-ink)]"> who appreciate the ability to quickly reach their doctor for guidance on common childhood illnesses.</span>
                </div>
              </div>
            </div>
            <p className="mb-6">
              Research published in the Journal of the American Board of Family Medicine found that DPC practices achieve higher patient satisfaction scores, better chronic disease management, and lower overall healthcare costs when combined with appropriate insurance coverage.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Financial Reality: Does DPC Save Money?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The financial equation of Direct Primary Care isn't always straightforward, but for many families, the math works out favorably. Consider a typical scenario:
            </p>
            <p className="mb-6">
              A family of four might pay $300-400 per month for DPC membership. At first glance, this might seem expensive. However, when combined with a high-deductible health plan (which costs significantly less in monthly premiums than traditional insurance), the total monthly healthcare spending often decreases.
            </p>
            <p className="mb-6">
              More importantly, DPC members avoid the hidden costs of traditional insurance: copays for each visit, coinsurance for labs, and the administrative headache of denied claims and surprise bills. The transparency and predictability of DPC costs appeal to many who are tired of healthcare's financial complexity.
            </p>
            <p className="mb-6">
              A 2020 study in the journal Healthcare found that employers offering DPC alongside high-deductible plans saw a 20% reduction in overall healthcare spending, primarily through decreased emergency room visits and better management of chronic conditions.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What to Consider Before Making the Switch
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before committing to a DPC practice, ask yourself these important questions:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>How often do you visit your primary care doctor?</strong> If you rarely need care, a DPC membership might not provide enough value. If you have ongoing health needs, it likely will.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>Do you have Medicare or Medicaid?</strong> Unfortunately, these programs don't cover DPC memberships, though some practices offer reduced rates for these populations.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>What's your total healthcare budget?</strong> Calculate your current insurance premiums, copays, and out-of-pocket costs, then compare that to a DPC membership plus a high-deductible plan.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>Do you value convenience and accessibility?</strong> If having direct access to your doctor and avoiding long wait times is important to you, DPC delivers significant non-financial benefits.</span>
                </div>
              </div>
            </div>
            <p className="mb-6">
              It's also worth noting that DPC isn't universally available. While the model is growing rapidly—with over 1,800 practices nationwide as of 2024—you'll need to find a reputable DPC physician in your area. Birmingham residents are fortunate to have growing access to this care model.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Making Your Decision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Direct Primary Care represents a fundamental rethinking of how primary care should work. It prioritizes the doctor-patient relationship, provides transparency in pricing, and removes many of the frustrations inherent in traditional insurance-based medicine.
            </p>
            <p className="mb-6">
              However, it's not a one-size-fits-all solution. The model works best for those who value personalized care, have ongoing health needs, or are frustrated with the limitations of traditional practices. It requires maintaining separate coverage for hospitalizations and specialists, and the upfront monthly cost can be a barrier for some families.
            </p>
            <p className="mb-6">
              If you're considering Direct Primary Care, take the time to meet with a DPC physician in Birmingham. Ask about what's included in the membership, how they handle after-hours care, and how they coordinate with specialists and hospitals. A good DPC practice will be transparent about costs and help you understand how the model fits into your overall healthcare strategy.
            </p>
            <p className="mb-6">
              Ultimately, the question isn't whether Direct Primary Care is perfect—no healthcare model is. The question is whether it's right for you, your family, and your health needs. For a growing number of Americans tired of impersonal, rushed medical care, DPC offers a compelling alternative that puts the focus back where it belongs: on your health and your relationship with your doctor.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, accessible healthcare to the Birmingham community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Importance of Annual Wellness Visits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how regular checkups can prevent serious health issues and keep you feeling your best year-round.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Chronic Disease</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Managing Diabetes with Your Primary Care Team
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how ongoing support and personalized care can help you successfully manage diabetes and live well.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Healthcare Access</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Why Same-Day Appointments Matter for Your Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Understand the benefits of timely medical care and how quick access to your doctor improves outcomes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you explore whether Direct Primary Care is right for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}