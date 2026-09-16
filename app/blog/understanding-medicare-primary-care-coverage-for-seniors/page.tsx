import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Medicare and Primary Care Coverage for Seniors',
  description: 'A plain-language guide to Medicare Parts A, B, C and D: what primary care is covered, what you pay, and how to choose a plan in Cape Girardeau, MO.',
  openGraph: {
    title: 'Medicare and Primary Care Coverage for Seniors',
    description: 'A plain-language guide to Medicare Parts A, B, C and D: what primary care is covered, what you pay, and how to choose a plan in Cape Girardeau, MO.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Medicare: Primary Care Coverage for Seniors
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Guardian Primary Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/insurance.jpg"
              alt="Insurance paperwork and a pen on a desk, representing the coverage decisions that come with turning 65"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Navigating Medicare can feel overwhelming. You've worked hard your entire life, paid into the system, and now that you're approaching 65, the flood of information about Parts A, B, C, and D can leave you more confused than confident. You're not alone. Seniors in Cape Girardeau, and millions more across the country, share these same concerns about understanding their healthcare coverage.
            </p>
            <p className="mb-6">
              The good news? Medicare provides comprehensive coverage for primary care services, and understanding how it works can help you maximize your benefits and maintain your health throughout your retirement years. This guide will walk you through everything you need to know about Medicare coverage for primary care, from enrollment to preventive services, so you can make informed decisions about your healthcare.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Medicare and Who Is Eligible?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              Medicare is a federal health insurance program that primarily serves Americans aged 65 and older. However, eligibility isn't limited by age alone, since certain younger individuals with disabilities or specific health conditions like End-Stage Renal Disease (ESRD) or ALS also qualify.
            </p>
            <p className="mb-6">
              Most people become eligible for Medicare three months before their 65th birthday month. If you've worked and paid Medicare taxes for at least 10 years (40 quarters), you'll qualify for premium-free Part A. Part B, however, requires a monthly premium that varies based on your income.
            </p>
            <p className="mb-6">
              Understanding your eligibility timeline is crucial because missing your Initial Enrollment Period can result in late enrollment penalties that follow you for the rest of your life. These penalties can add 10% or more to your monthly premiums for each 12-month period you were eligible but didn't enroll.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Four Parts of Medicare Explained
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              Medicare is divided into four distinct parts, each covering different aspects of your healthcare. Understanding these differences is essential for making the right choices for your situation.
            </p>
            <p className="mb-6">
              <strong>Part A (Hospital Insurance)</strong> covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health services. Most people don't pay a premium for Part A because they've already paid into Medicare through payroll taxes during their working years.
            </p>
            <p className="mb-6">
              <strong>Part B (Medical Insurance)</strong> is where primary care coverage really shines. This part covers provider visits, outpatient care, preventive services, and medical equipment. Your annual wellness visits, screenings, and routine checkups with your primary care provider are all covered under Part B. Part B carries a standard monthly premium that Medicare resets each year, and higher earners pay more based on income-related adjustments, so check the current figure on Medicare.gov before you budget.
            </p>
            <p className="mb-6">
              <strong>Part C (Medicare Advantage)</strong> is an alternative way to receive your Medicare benefits. Private insurance companies approved by Medicare offer these plans, which combine Parts A and B coverage and often include prescription drug coverage (Part D) as well. Many Medicare Advantage plans also offer additional benefits like dental, vision, and hearing coverage.
            </p>
            <p className="mb-6">
              <strong>Part D (Prescription Drug Coverage)</strong> helps cover the cost of prescription medications. Whether you choose Original Medicare or Medicare Advantage, having Part D coverage is important to avoid gaps in your prescription coverage and potential late enrollment penalties.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-display">
            "Medicare Part B covers many preventive services at no cost to you when your provider accepts Medicare assignment, including your annual wellness visit and a long list of screenings and vaccines."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Primary Care Services Covered by Medicare
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              Medicare Part B provides robust coverage for primary care services, with a special emphasis on preventive care. Understanding what's covered can help you take full advantage of your benefits and maintain optimal health.
            </p>
            <p className="mb-6">
              Your <strong>Annual Wellness Visit</strong> is one of the most valuable covered services. This isn't a physical exam in the traditional sense, but rather a comprehensive review of your health, including a health risk assessment, a review of your medical and family history, and the development of a personalized prevention plan. This visit is covered in full when your provider accepts Medicare assignment, with no copayment and no deductible.
            </p>
            <p className="mb-6">
              <strong>Preventive screenings</strong> covered by Medicare include cardiovascular disease screening, diabetes screening, cancer screenings (including mammograms, colonoscopies, and prostate cancer screenings), bone mass measurements, and glaucoma tests. Most of these preventive services are covered at no cost to you when provided by participating providers.
            </p>
            <p className="mb-6">
              <strong>Chronic disease management</strong> is another critical component of Medicare's primary care coverage. If you have conditions like diabetes, heart disease, or chronic obstructive pulmonary disease (COPD), Medicare covers regular monitoring and management visits with your primary care provider.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Costs: What You'll Pay Out of Pocket
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              While Medicare provides excellent coverage, it's important to understand your out-of-pocket responsibilities. With Original Medicare (Parts A and B), you'll typically face three types of costs: premiums, deductibles, and coinsurance or copayments.
            </p>
            <p className="mb-6">
              For Part B services, after you meet the annual Part B deductible (an amount Medicare sets each year), you'll typically pay 20% of the Medicare-approved amount for most visits and services. This is where many seniors choose to purchase supplemental insurance (Medigap) to help cover these costs.
            </p>
            <p className="mb-6">
              Medicare Advantage plans often work differently, charging a flat copayment for office visits instead of coinsurance. Many seniors find the predictability of copayments easier to budget than the percentage-based coinsurance of Original Medicare.
            </p>
            <p className="mb-6">
              One important consideration: preventive services are typically covered at 100% with no cost-sharing, but if your provider finds a problem during a preventive visit and treats it, that additional service may be subject to normal cost-sharing rules.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Choosing Between Original Medicare and Medicare Advantage
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              One of the most important decisions you'll make is whether to enroll in Original Medicare or a Medicare Advantage plan. Both options provide access to primary care, but they work very differently.
            </p>
            <p className="mb-6">
              <strong>Original Medicare</strong> offers the greatest flexibility in choosing healthcare providers. You can see any provider or specialist who accepts Medicare anywhere in the United States, without needing referrals. This makes it ideal if you travel frequently, split time between different locations, or want to preserve maximum choice in your healthcare providers.
            </p>
            <p className="mb-6">
              <strong>Medicare Advantage plans</strong> typically require you to use a network of providers (with exceptions for emergency care) and may require referrals to see specialists. However, they often include additional benefits like prescription drug coverage, dental, vision, and hearing services, and they cap your annual out-of-pocket spending, something Original Medicare doesn't do.
            </p>
            <p className="mb-6">
              Your choice depends on your individual circumstances: your health status, budget, preferred providers, and whether you value flexibility over added benefits. In Cape Girardeau, there are numerous Medicare Advantage plans available, and it's worth comparing them carefully during your enrollment period.
            </p>
          </div>

          {/* Section 6 - Practical Tips */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Maximizing Your Medicare Benefits: Practical Tips
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-6">
              Understanding your coverage is just the first step. Here are practical strategies to help you get the most value from your Medicare benefits:
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Schedule your Annual Wellness Visit every year.</strong> This free visit helps establish your baseline health and creates a personalized prevention plan. Many health issues can be caught early during these comprehensive reviews.
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Take advantage of preventive screenings.</strong> From cardiovascular disease screening to cancer screenings, most of these services come at no cost to you when your provider accepts Medicare assignment. Early detection saves lives and reduces healthcare costs long-term.
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Establish a relationship with a primary care provider.</strong> Continuity of care leads to better health outcomes. Your primary care provider becomes familiar with your health history and can coordinate every part of your care.
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Review your coverage annually during Open Enrollment.</strong> Your health needs change, and so do Medicare plans. Every October through December, evaluate whether your current coverage still meets your needs.
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Keep detailed records of your healthcare.</strong> Document your visits, test results, and any conversations about your care. This information becomes invaluable if you need to appeal a coverage decision or coordinate care between providers.
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[var(--color-ink)] leading-relaxed">
                <strong>Ask questions before services are rendered.</strong> If you're unsure whether something is covered, call Medicare or your plan before receiving care. Understanding your coverage upfront prevents surprise bills later.
              </div>
            </div>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 mb-6">
            <p className="mb-6">
              Medicare provides comprehensive coverage for primary care services, ensuring that seniors have access to preventive care, chronic disease management, and routine healthcare throughout their retirement years. While the system can seem complex at first, understanding your options empowers you to make informed decisions about your health.
            </p>
            <p className="mb-6">
              Whether you're approaching 65 or already enrolled, having a primary care provider who understands how Medicare works makes the whole thing easier. Guardian Primary Care in Cape Girardeau, Missouri is in network with Medicare, Medicaid and most major commercial insurances, and our care team helps Medicare patients use the preventive benefits they have already paid for.
            </p>
            <p>
              If you have questions about your coverage, or you are looking for a primary care provider who accepts Medicare, call us at <a href="tel:+15732006143" className="text-[var(--color-primary)] underline">(573) 200-6143</a>. Visits are by appointment, and we will take the time to answer your questions properly.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog/preventative-cancer-screenings-which-tests-you-need-and-when" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-medium">
                  Preventive Care
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventative Cancer Screenings: Which Tests You Need and When
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Which screenings are recommended at each age, and how they catch problems early.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-medium">
                  Chronic Disease
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Type 2 Diabetes: Lifestyle Changes That Make a Difference
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How working closely with your primary care provider helps you manage type 2 diabetes well.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/understanding-direct-primary-care-is-it-right-for-you" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-medium">
                  Healthcare Navigation
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Direct Primary Care: Is It Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How Guardian Direct Care works as an alternative to billing insurance, and who it suits.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We are in network with Medicare, Medicaid and most major commercial insurances. Our care team in Cape Girardeau, Missouri is here to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105 hover:shadow-xl"
            >
              Schedule Your Visit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Guardian Primary Care &middot; 2441 Myra Dr, Cape Girardeau, MO 63703 &middot; By Appointment
          </p>
        </div>
      </section>

    </main>
  )
}