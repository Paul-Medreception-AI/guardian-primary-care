import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Medicare vs. Medicare Advantage for Primary Care Coverage | Guardian Primary Care',
  description: 'Compare Original Medicare and Medicare Advantage for primary care coverage in Cape Girardeau, MO. Guardian Primary Care is in-network with Medicare. Understand the benefits, the costs and the trade-offs.',
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
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            Medicare vs. Medicare Advantage for Primary Care Coverage
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Understanding your coverage options in Cape Girardeau, MO to make the best decision for your primary care needs
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
              <h3 className="font-display text-2xl font-semibold mb-3 text-[var(--color-ink)]">Original Medicare</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The federal program, with Part A (hospital) and Part B (medical). You may see any provider who accepts Medicare.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[var(--color-ink)]">Medicare Advantage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Private insurance alternative (Part C) bundling hospital, medical, and often prescription coverage through network providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            <Image
              src="/images/site/wallet-cost.jpg"
              alt="A wallet and everyday household costs, representing what Medicare coverage choices mean for your budget"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-[var(--color-muted)] text-center mt-4">
            The right choice depends on how you use care and what you can plan for.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
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
              <div className="p-6 border-l border-[var(--color-border)]">Any provider or hospital that accepts Medicare, anywhere in the U.S.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Network restrictions (HMO/PPO). May need referrals for specialists</div>
            </div>

            {/* Monthly Costs */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Monthly Costs</div>
              <div className="p-6 border-l border-[var(--color-border)]">The standard Part B premium set by Medicare each year, plus optional Medigap and Part D premiums</div>
              <div className="p-6 border-l border-[var(--color-border)]">Part B premium + plan premium (sometimes $0). Often lower monthly cost</div>
            </div>

            {/* Out-of-Pocket Maximum */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Out-of-Pocket Maximum</div>
              <div className="p-6 border-l border-[var(--color-border)]">No annual cap (unless you buy Medigap)</div>
              <div className="p-6 border-l border-[var(--color-border)]">An annual out-of-pocket cap, set by the plan, protects against high costs</div>
            </div>

            {/* Primary Care Access */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Primary Care Access</div>
              <div className="p-6 border-l border-[var(--color-border)]">See any primary care provider accepting Medicare</div>
              <div className="p-6 border-l border-[var(--color-border)]">Choose a primary care provider from the network. A referral may be needed for specialists</div>
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
              <div className="p-6 border-l border-[var(--color-border)]">People who want provider flexibility, travel often, or want to keep the relationships they already have</div>
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
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                Original Medicare: Maximum Flexibility
              </h2>
            </div>
            
            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed ml-12">
              <p>
                Original Medicare, administered directly by the federal government, provides coverage through two parts: Part A (hospital insurance) and Part B (medical insurance). This is the option with the most freedom in choosing where you get care. You can see any provider, any specialist, or use any hospital in the United States that accepts Medicare, with no referrals needed and no network restrictions.
              </p>
              
              <p>
                For primary care in Cape Girardeau, MO, that means you decide who you see and you can stay with the care team you trust. Guardian Primary Care is in-network with Medicare, so Original Medicare patients are welcome here. If you see a specialist in another city or spend winters in a different state, your coverage travels with you. You are never locked into a network, and you do not need permission from a primary care provider to see a specialist.
              </p>
              
              <p>
                Original Medicare does not include prescription drug coverage or an out-of-pocket maximum on its own. Most beneficiaries add a Part D prescription plan, and many also buy Medigap (Medicare Supplement Insurance) to help cover the 20% coinsurance and other gaps. Adding those policies raises your monthly premium, but it makes your costs more predictable across the year.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-ink)]">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>See any Medicare-accepting provider, no referral needed</span>
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
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                Medicare Advantage: All-in-One Coverage
              </h2>
            </div>
            
            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed ml-12">
              <p>
                Medicare Advantage (Part C) plans are offered by private insurance companies approved by Medicare. These plans bundle hospital, medical and usually prescription drug coverage into a single plan, often with extra benefits such as dental, vision and hearing that Original Medicare does not provide. Many plans carry a $0 monthly premium beyond your Part B premium, which is a big part of their appeal.
              </p>
              
              <p>
                The trade-off for lower monthly costs is the network. Medicare Advantage plans are usually built as HMOs (Health Maintenance Organizations) or PPOs (Preferred Provider Organizations). You choose a primary care provider from the plan&apos;s network, and with an HMO you typically need a referral to see a specialist. Out-of-network care may not be covered except in an emergency, which matters if you travel often or already see specialists outside the network. Before you enroll, check that the providers you want are in that plan&apos;s network.
              </p>
              
              <p>
                A real advantage is the annual out-of-pocket maximum, which caps your spending for the year. Original Medicare has no such cap without Medigap. That protection matters if you face a serious illness or injury. The counterweight is that networks, drug formularies and benefits can change each year, so you may have to change providers if the network shifts or if you move outside the service area.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-ink)]">What to Expect</h3>
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
            <h2 className="font-display text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
              How to Decide What's Right for You
            </h2>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                    Choose Original Medicare if you:
                  </h3>
                </div>
                <ul className="space-y-4 ml-11">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want the freedom to see any provider or specialist without a referral</span>
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
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
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
                    <span className="text-[var(--color-muted)]">Primarily receive care in Cape Girardeau, MO and don't travel extensively</span>
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
          <h2 className="font-display text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
            Primary Care Considerations in Cape Girardeau, MO
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-ink)]">With Original Medicare</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                You can choose any primary care provider in Cape Girardeau who accepts Medicare, with no network to stay inside and no referrals to chase. Guardian Primary Care is in-network with Medicare. This suits you if you have built a long-term relationship with your care team, or if you want the freedom to change providers easily.
              </p>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Direct access to specialists without referrals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Keep your current provider if they accept Medicare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Coverage continues if you move or travel</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-ink)]">With Medicare Advantage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                You select a primary care provider from your plan&apos;s network in the Cape Girardeau area. That provider coordinates your care and issues referrals for specialty services. Plans often include wellness programs and care coordination. Check your plan&apos;s directory, or call us at (573) 200-6143 and we will help you confirm whether we are in your plan&apos;s network.
              </p>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Coordinated care through the primary care provider you choose</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>Often includes wellness visits and preventive care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)] font-bold">•</span>
                  <span>May offer telehealth and nurse advice lines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)] animate-fade-up">
            <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-ink)]">
              Guardian Accepts Medicare, and Also Offers Guardian Direct Care
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Guardian Primary Care is in-network with Medicare and Medicaid as well as most major commercial insurances, so for most of our Cape Girardeau patients on Medicare, nothing about this page changes how they get care here: use your coverage and we will bill it.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For patients who would rather pay the practice directly at a flat published price, Guardian Direct Care is available as an alternative. Senior memberships are $70 per month, or $760 prepaid for the year, and include office visits with no visit limits, same-day or next-day sick visits, annual wellness visits, ongoing care for chronic conditions, and direct access to your provider. It is a membership for primary care, not insurance, so it does not replace Medicare for hospital stays, specialty care, imaging or prescriptions. Call us at (573) 200-6143 and we will walk you through which route makes more sense for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
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
                Medigap is optional, and it is worth considering. Original Medicare covers 80% of Part B services, leaving you responsible for the remaining 20% coinsurance with no annual limit. A Medigap policy fills that gap and makes your costs far more predictable. Whether the extra premium is worth it depends on your health and your budget, and a licensed Medicare agent can price it out with you.
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
                Can I use Guardian Direct Care alongside my Medicare coverage?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                You do not have to choose one or the other. Guardian Primary Care is in-network with Medicare, so most patients simply use their coverage here. If you prefer a flat published price for your primary care, a Guardian Direct Care membership is separate from your Medicare coverage: the membership fee is paid to the practice, while your Medicare plan (Original or Advantage) stays in place for hospital care, specialists, prescriptions, labs and imaging. Call us at (573) 200-6143 and our team will explain exactly how each option would work for your situation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Discuss Your Medicare Options
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Choosing between Original Medicare and Medicare Advantage is a real decision, and it is easier with someone to talk it through. Guardian Primary Care in Cape Girardeau, MO is in-network with Medicare, and Guardian Direct Care is available if you would prefer a flat published price for your primary care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 border-2 border-white/30"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="mt-6 text-white/80 text-sm max-w-2xl mx-auto">
            Guardian Primary Care does not sell insurance plans. This page is general education, not plan-specific advice.
          </p>
        </div>
      </section>
    </>
  )
}