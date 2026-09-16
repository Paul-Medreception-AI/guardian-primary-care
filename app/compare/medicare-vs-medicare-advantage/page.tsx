import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medicare vs. Medicare Advantage for Primary Care Coverage | Guardian Primary Care',
  description: 'Compare Medicare and Medicare Advantage for primary care coverage in Birmingham, AL. Understand benefits, costs, and which option is right for you.',
}

export default function MedicareComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Medicare vs. Medicare Advantage for Primary Care Coverage
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Understanding your coverage options in Birmingham, AL to make the best decision for your primary care needs
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-3 text-[var(--color-ink)]">Original Medicare</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Federal health insurance program with Part A (hospital) and Part B (medical). Freedom to see any provider who accepts Medicare.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-3 text-[var(--color-ink)]">Medicare Advantage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Private insurance alternative (Part C) bundling hospital, medical, and often prescription coverage through network providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">Original Medicare</div>
              <div className="p-6 font-semibold border-l border-white/20">Medicare Advantage</div>
            </div>

            {/* Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)]">Part A (hospital) + Part B (medical). Optional Part D (prescriptions)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Parts A, B, and usually D bundled. May include dental, vision, hearing</div>
            </div>

            {/* Provider Choice */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Provider Choice</div>
              <div className="p-6 border-l border-[var(--color-border)]">Any doctor or hospital that accepts Medicare nationwide</div>
              <div className="p-6 border-l border-[var(--color-border)]">Network restrictions (HMO/PPO). May need referrals for specialists</div>
            </div>

            {/* Monthly Costs */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Monthly Costs</div>
              <div className="p-6 border-l border-[var(--color-border)]">Part B premium (~$174.70) + optional Medigap + Part D premiums</div>
              <div className="p-6 border-l border-[var(--color-border)]">Part B premium + plan premium (sometimes $0). Often lower monthly cost</div>
            </div>

            {/* Out-of-Pocket Maximum */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Out-of-Pocket Maximum</div>
              <div className="p-6 border-l border-[var(--color-border)]">No annual cap (unless you buy Medigap)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Annual cap (typically $3,000-$8,000) protects against high costs</div>
            </div>

            {/* Primary Care Access */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Primary Care Access</div>
              <div className="p-6 border-l border-[var(--color-border)]">See any primary care provider accepting Medicare</div>
              <div className="p-6 border-l border-[var(--color-border)]">Must choose PCP from network. May need PCP referral for specialists</div>
            </div>

            {/* Prescription Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Prescription Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)]">Must enroll in separate Part D plan</div>
              <div className="p-6 border-l border-[var(--color-border)]">Usually included. Formulary restrictions may apply</div>
            </div>

            {/* Travel Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Travel Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)]">Coverage anywhere in the U.S.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited outside service area. Emergency coverage only</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Those who want provider flexibility, travel frequently, or prefer established relationships</div>
              <div className="p-6 border-l border-[var(--color-border)]">Those comfortable with networks, want lower premiums, or need extra benefits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Original Medicare */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                Original Medicare: Maximum Flexibility
              </h2>
            </div>
            
            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed ml-12">
              <p>
                Original Medicare, administered directly by the federal government, provides comprehensive coverage through two parts: Part A (hospital insurance) and Part B (medical insurance). This traditional option offers the greatest freedom when it comes to choosing healthcare providers. You can see any doctor, specialist, or visit any hospital in the United States that accepts Medicare—no referrals needed, no network restrictions.
              </p>
              
              <p>
                For primary care in Birmingham, AL, this means you have complete autonomy to establish and maintain relationships with the physicians you trust. If you see a specialist in another city or spend winters in a different state, your coverage travels with you seamlessly. You're never locked into a network, and you never need permission from a primary care physician to see a specialist.
              </p>
              
              <p>
                However, Original Medicare doesn't include prescription drug coverage or an out-of-pocket maximum. Most beneficiaries purchase a Part D prescription plan and many also buy Medigap (Medicare Supplement Insurance) to help cover the 20% coinsurance and other gaps. While this flexibility comes with potentially higher monthly premiums when you add these policies, it provides predictable costs and comprehensive protection against medical expenses.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>See any Medicare-accepting provider without referrals</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard Part B premium plus optional Medigap and Part D</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20% coinsurance on most services (covered by Medigap if purchased)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coverage follows you anywhere in the United States</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stable, predictable coverage that doesn't change yearly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deep Dive: Medicare Advantage */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                Medicare Advantage: All-in-One Coverage
              </h2>
            </div>
            
            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed ml-12">
              <p>
                Medicare Advantage (Part C) plans are offered by private insurance companies approved by Medicare. These plans bundle hospital, medical, and usually prescription drug coverage into a single plan—often with extra benefits like dental, vision, and hearing coverage that Original Medicare doesn't provide. Many plans have $0 monthly premiums beyond your Part B premium, making them attractive from a cost perspective.
              </p>
              
              <p>
                The trade-off for lower monthly costs is network restrictions. Most Medicare Advantage plans in Birmingham, AL operate as HMOs (Health Maintenance Organizations) or PPOs (Preferred Provider Organizations). You'll need to choose a primary care physician from the plan's network, and with HMO plans, you typically need referrals to see specialists. Out-of-network care may not be covered except in emergencies, which can be a consideration if you travel frequently or have established relationships with specialists outside the network.
              </p>
              
              <p>
                A significant advantage is the annual out-of-pocket maximum, which caps your spending each year—something Original Medicare lacks without Medigap. This protection can be valuable if you face a serious illness or injury. However, plan networks, formularies, and benefits can change annually, and you may need to switch providers if your plan's network changes or if you move to a different service area.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All-in-one coverage including prescriptions and extras</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Often lower monthly premiums (some as low as $0)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Annual out-of-pocket maximum protects against catastrophic costs</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Must use network providers; may need referrals for specialists</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Benefits and networks may change annually during open enrollment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
              How to Decide What's Right for You
            </h2>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)]">
                    Choose Original Medicare if you:
                  </h3>
                </div>
                <ul className="space-y-4 ml-11">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want complete freedom to see any doctor or specialist without referrals</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Travel frequently or spend part of the year in different locations</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Have established relationships with specialists you want to keep seeing</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Prefer predictable, stable coverage that doesn't change each year</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are willing to pay higher monthly premiums for maximum flexibility</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want to add Medigap for comprehensive supplemental protection</span>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-[var(--color-border)]"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="font-['Cormorant'] text-2xl font-semibold text-[var(--color-ink)]">
                    Choose Medicare Advantage if you:
                  </h3>
                </div>
                <ul className="space-y-4 ml-11">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are comfortable working within a provider network</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want lower monthly premiums and all-in-one convenience</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Primarily receive care in Birmingham, AL and don't travel extensively</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Value the protection of an annual out-of-pocket maximum</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want extra benefits like dental, vision, and hearing coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Don't mind potential changes to networks and benefits each year</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Important Note:</strong> You can switch between Original Medicare and Medicare Advantage during the Annual Election Period (October 15 - December 7) each year. Your decision isn't permanent, but some choices like Medigap enrollment have time-sensitive protections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Care Considerations */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
            Primary Care Considerations in Birmingham, AL
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">With Original Medicare</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                You can choose any primary care physician in Birmingham who accepts Medicare. No need to stay within a network or obtain referrals. This is ideal if you've built a long-term relationship with your doctor or prefer the freedom to switch providers easily.
              </p>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Direct access to specialists without referrals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Keep your current doctor if they accept Medicare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Coverage continues if you move or travel</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">With Medicare Advantage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                You'll select a primary care physician from your plan's Birmingham network. Your PCP coordinates your care and may provide referrals for specialty services. Plans often include wellness programs and care coordination services.
              </p>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Coordinated care through your chosen PCP</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Often includes wellness visits and preventive care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>May offer telehealth and 24/7 nurse lines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)] animate-fade-up">
            <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
              Direct Primary Care (DPC) Works with Both Options
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              At Guardian Primary Care, our Direct Primary Care model is compatible with both Original Medicare and Medicare Advantage. Many of our Birmingham patients use Medicare for hospital, specialist, and prescription coverage while enjoying the enhanced access, longer appointments, and personalized care that DPC provides.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Our affordable monthly membership fee covers unlimited primary care visits, care coordination, and direct communication with your physician—complementing your Medicare coverage regardless of which option you choose.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Can I switch from Medicare Advantage back to Original Medicare?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes. You can switch during the Annual Election Period (October 15 - December 7) or during the Medicare Advantage Open Enrollment Period (January 1 - March 31). However, if you want to purchase a Medigap policy after leaving Medicare Advantage, you may face medical underwriting unless you qualify for guaranteed issue rights in specific situations.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Do I need Medigap if I have Original Medicare?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medigap is optional but highly recommended. Original Medicare covers 80% of Part B services, leaving you responsible for 20% coinsurance with no annual limit. A Medigap policy fills these gaps, providing predictable costs and financial protection. Most beneficiaries find the peace of mind worth the additional premium, especially if facing ongoing medical needs.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Are Medicare Advantage plans really $0 premium?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Some Medicare Advantage plans have $0 monthly premiums beyond the standard Part B premium you already pay. However, you'll still have copayments, coinsurance, and deductibles when you receive care. The plan's total value depends on the out-of-pocket costs, network quality, covered benefits, and whether your preferred providers are in-network. Always compare total expected costs, not just the premium.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What happens to my Medicare Advantage plan if I move?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medicare Advantage plans are local or regional. If you move outside your plan's service area, you'll have a Special Election Period to choose a new plan in your new location or switch to Original Medicare. If you spend extended time in multiple locations (like snowbirds), Original Medicare may be more practical since it provides nationwide coverage.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Can I use Direct Primary Care with my Medicare coverage?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Direct Primary Care membership fees are separate from your Medicare coverage. You'll use your Medicare (Original or Advantage) for hospital care, specialists, prescriptions, labs, and imaging, while your DPC membership provides enhanced primary care access, longer appointments, and care coordination. Many Medicare beneficiaries find this combination gives them the best of both worlds: comprehensive insurance coverage plus personalized, accessible primary care.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Discuss Your Medicare Options
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Choosing between Medicare and Medicare Advantage is an important decision. Let's discuss how each option works with your healthcare needs and our Direct Primary Care model in Birmingham, AL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/services" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 border-2 border-white/30"
            >
              Learn About Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}