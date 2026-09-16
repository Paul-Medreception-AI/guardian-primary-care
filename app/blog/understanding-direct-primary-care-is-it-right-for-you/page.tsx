import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Direct Primary Care: Is It Right for You? | Guardian',
  description: 'How Direct Primary Care works, who it suits, and how Guardian Direct Care compares with using your insurance benefits at our Cape Girardeau, Missouri clinic.',
  openGraph: {
    title: 'Direct Primary Care: Is It Right for You?',
    description: 'How Direct Primary Care works, who it suits, and how Guardian Direct Care compares with using your insurance benefits at our Cape Girardeau, Missouri clinic.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care'],
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8 font-display">
            Understanding Direct Primary Care: Is It Right for You?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/site/handshake-care.jpg"
              alt="A care team member shaking hands with a patient at the start of a primary care visit"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-4 text-center leading-relaxed">
            Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid. Guardian Direct Care is offered as an alternative for patients who prefer it.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine walking into your provider&apos;s office and actually having time to talk. No rushing. No feeling like just another number. No surprise bills that make you wonder what you are really paying for. For many people in Cape Girardeau and across the country, that sounds almost too good to be true, and it is close to what Direct Primary Care (DPC) is designed to offer.
            </p>
            <p className="mb-6">
              As healthcare becomes more complex and more impersonal, many patients are looking at a model that puts the relationship with their provider first. So what exactly is Direct Primary Care, and is it the right choice for you and your family? Here is a plain-language look at how the model works, who tends to benefit, and how it compares with using your insurance benefits.

            </p>
            <p className="mb-6">
              One note before we start: Direct Primary Care is not the only way to be seen at Guardian Primary Care. We are in-network with most major commercial insurances, Medicare and Medicaid, and we also offer Guardian Direct Care for patients who would rather pay a flat monthly fee. You can choose either path.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            What Is Direct Primary Care?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Direct Primary Care is a model built on a simple premise: you pay your primary care practice a flat monthly fee, and in return you get comprehensive primary care without insurance billing for those visits.
            </p>
            <p className="mb-6">
              A traditional insurance-based office often has to see a high volume of visits each day to cover its overhead. DPC practices usually keep a smaller patient panel than that, and the smaller panel is what makes the rest possible: longer appointments, same-day or next-day availability, and direct access to your provider.
            </p>
            <p className="mb-6">
              What the fee covers varies from practice to practice, so ask for the list in writing before you enroll anywhere. Guardian Direct Care, for example, includes office visits with no visit limits, same or next day sick visits, direct access to your provider and your medical records, annual wellness and sports physicals, ongoing care for chronic conditions such as diabetes, high blood pressure and asthma, and basic in-office procedures including wound care, abscess drainage, cryotherapy and skin lesion removal. Plans start as low as $40 a month, and the current rates are listed on our <a href="/services/guardian-direct-care" className="text-[var(--color-primary)] underline">Guardian Direct Care</a> page.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            How DPC Differs from Traditional Healthcare
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The contrast between DPC and traditional fee-for-service medicine is stark. In conventional practices, insurance companies act as the middleman between you and your provider. That adds administrative burden, limits appointment times, and can put billing codes ahead of patient needs.
            </p>
            <p className="mb-6">
              Direct Primary Care removes that middleman for primary care services. Your provider works directly for you, not for an insurance company, and that alignment means the focus can stay on keeping you healthy rather than on billable volume.
            </p>
            <p className="mb-6">
              It is important to understand that DPC is not insurance and does not replace coverage for hospital stays, specialist care or emergencies. It works alongside a health plan, covering routine primary care while your insurance covers the larger medical events. If keeping your existing benefits matters to you, using your insurance at an in-network practice may simply be the better fit, and that option is available here too.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-display">
              &ldquo;Direct Primary Care returns healthcare to its roots: a trusted relationship between provider and patient, built on time, accessibility and transparency.&rdquo;
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
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
                  <span className="text-[var(--color-ink)]"> who value longer appointments and direct communication with their provider.</span>
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
                  <span className="text-[var(--color-ink)]"> who appreciate being able to reach their provider quickly for guidance on common childhood illnesses.</span>
                </div>
              </div>
            </div>
            <p className="mb-6">
              The practical differences show up in the same places every time: longer visits, quicker answers between visits, and a provider who already knows your story and does not have to start over each time.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            The Financial Reality: Does DPC Save Money?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The financial equation of Direct Primary Care isn't always straightforward, but for many families, the math works out favorably. Consider a typical scenario:
            </p>
            <p className="mb-6">
              Guardian Direct Care lists an adult plan at $85 a month, a senior plan at $70 a month, children at $40 a month, and a family plan (two adults plus up to two children) at $210 a month. At first glance a monthly fee can look like an added expense. Paired with a health plan that carries a lower premium, though, total monthly healthcare spending can come out even or lower, which is why it is worth doing the arithmetic on your own situation rather than guessing.
            </p>
            <p className="mb-6">
              Just as importantly, a direct-care patient avoids the smaller costs that are hard to predict: a copay at each visit, coinsurance on labs, and the administrative work of denied claims and surprise bills. That predictability is a large part of the appeal.
            </p>
            <p className="mb-6">
              Employers look at the model for the same reason: a flat monthly fee per employee is a predictable line item, and an emphasis on prevention and chronic care management tends to keep people out of urgent care and the emergency room. Guardian offers a discount for contracted businesses, and telehealth is included.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
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
                  <span className="text-[var(--color-ink)]"><strong>How often do you see your primary care provider?</strong> If you rarely need care, a monthly fee may not earn its keep. If you have ongoing health needs, it usually does.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>Do you have Medicare or Medicaid?</strong> Those programs do not pay a direct-care monthly fee. That is not a dead end here: Guardian Primary Care is in-network with Medicare and Medicaid, so you can simply use your benefits instead.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>What's your total healthcare budget?</strong> Calculate your current insurance premiums, copays, and out-of-pocket costs, then compare that with a direct-care monthly fee plus a health plan.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-[var(--color-ink)]"><strong>Do you value convenience and accessibility?</strong> If direct access to your provider and shorter waits matter to you, the model delivers real benefits that never show up on an invoice.</span>
                </div>
              </div>
            </div>
            <p className="mb-6">
              It is also worth noting that direct care is not available everywhere, so you may have to look for a practice near you. In Cape Girardeau, Guardian Direct Care is offered alongside our insurance-based care, so patients in Cape Girardeau, Jackson, Scott City and the surrounding Southeast Missouri communities can choose whichever path suits them.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Making Your Decision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Direct Primary Care is a rethinking of how primary care should work. It puts the relationship with your provider first, it makes pricing transparent, and it removes several of the frustrations built into insurance-based billing.
            </p>
            <p className="mb-6">
              However, it's not a one-size-fits-all solution. The model works best for those who value personalized care, have ongoing health needs, or are frustrated with the limitations of traditional practices. It requires maintaining separate coverage for hospitalizations and specialists, and the upfront monthly cost can be a barrier for some families.
            </p>
            <p className="mb-6">
              If you are considering Direct Primary Care, take the time to talk with the practice first. Ask what is included, how they handle care outside of appointment hours, and how they coordinate with specialists and hospitals. A good practice will be transparent about cost and will help you understand how the model fits the rest of your coverage.
            </p>
            <p className="mb-6">
              Ultimately the question is not whether Direct Primary Care is perfect, because no model is. The question is whether it fits you, your family and your health needs. At Guardian you do not have to decide sight unseen: use your insurance, or choose Guardian Direct Care, and either way the focus stays where it belongs, on your health and your relationship with your provider.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Guardian Primary Care is led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner who works with a Missouri Licensed Collaborating Physician, caring for patients in Cape Girardeau and across Southeast Missouri.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center font-display">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how regular checkups can prevent serious health issues and keep you feeling your best year-round.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog/managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Chronic Disease</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Managing Type 2 Diabetes: Lifestyle Changes That Help
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical, evidence-based changes that help you manage type 2 diabetes with support from your care team.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog/when-to-choose-urgent-care-vs-primary-care-for-common-illnes" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Healthcare Access</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Urgent Care or Primary Care: How to Choose
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How to tell which common illnesses belong in urgent care and which are better handled by your own provider.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 font-display">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team in Cape Girardeau is here to help you compare using your insurance with Guardian Direct Care, and to answer your questions either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/60 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/10"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment.
          </p>
        </div>
      </section>
    </main>
  )
}