import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shingles Vaccine: Who Needs It and Why It Matters',
  description: 'Who should get the shingles vaccine, how the two-dose series works and what to expect, explained by Guardian Primary Care in Cape Girardeau, MO.',
  keywords: 'shingles vaccine, Shingrix, herpes zoster, vaccine Cape Girardeau MO, adult vaccinations, preventive care, primary care',
}

export default function ShinglesVaccinePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Shingles Vaccine: Who Needs It and Why It Matters
          </h1>
          
          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/handshake-care.jpg"
              alt="A health care provider in a white coat shaking hands with a patient in a clinic hallway before a preventive care visit."
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine waking up to a painful, blistering rash that wraps around one side of your torso like a band of fire. For many adults, this is the reality of shingles, a reactivation of the chickenpox virus that can strike decades after childhood. The pain can be debilitating, lasting weeks or even months, and in some cases, it never fully goes away. Yet this suffering is largely preventable with a simple, safe vaccine.
            </p>
            <p className="mb-6">
              If you&apos;re over 50, the shingles vaccine is not just recommended, it is one of the most important preventive measures you can take for your long-term health and quality of life. Let's explore what shingles is, who's at risk, and why vaccination matters so much.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Shingles and Why Does It Happen?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Shingles, medically known as herpes zoster, is caused by the varicella-zoster virus, the same virus responsible for chickenpox. After you recover from chickenpox (usually in childhood), the virus doesn't leave your body. Instead, it lies dormant in nerve tissue near your spinal cord and brain, waiting silently for decades.
            </p>
            <p className="mb-6">
              As we age, our immune system naturally weakens. This decline gives the dormant virus an opportunity to reactivate, traveling along nerve pathways to the skin and causing the characteristic painful rash of shingles. The rash typically appears as a stripe of blisters on one side of the body, often around the torso or face.
            </p>
            <p className="mb-6">
              The pain associated with shingles can range from mild to excruciating. Some describe it as burning, stabbing, or shooting sensations that can interfere with sleep, work, and daily activities. For many, the emotional toll is just as significant as the physical discomfort.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Anyone who has had chickenpox can develop shingles, but the risk increases significantly with age. A large share of adults in the United States will develop shingles at some point in their lives, with the risk rising sharply after age 50.
            </p>
            <p className="mb-6">
              Certain factors increase your vulnerability:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age over 50:</strong> The immune system weakens naturally with age, making reactivation more likely</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Weakened immune system:</strong> Conditions like cancer, HIV/AIDS, or medications that suppress immunity increase risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Chronic stress:</strong> Physical or emotional stress can temporarily weaken immune defenses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Previous shingles episode:</strong> You can get shingles more than once, though it's relatively uncommon</span>
              </li>
            </ul>
            <p className="mb-6">
              Even if you're healthy and active, age alone puts you at increased risk. The good news? Vaccination can dramatically reduce your chances of developing shingles.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="font-display bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] text-xl">
            The shingles vaccine is highly effective at preventing shingles and its complications. It is one of the most powerful tools we have for protecting quality of life as we age.
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Serious Complications of Shingles
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the rash and acute pain of shingles typically resolve within a few weeks, complications can be severe and long-lasting. The most common and debilitating complication is postherpetic neuralgia (PHN), nerve pain that persists for months or even years after the rash heals.
            </p>
            <p className="mb-6">
              PHN affects a meaningful share of people who get shingles, and the risk increases with age. This chronic pain can be so severe that it interferes with sleep, mobility, and mental health. Many patients with PHN describe a reduced quality of life comparable to major chronic diseases.
            </p>
            <p className="mb-6">
              Other potential complications include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Vision loss:</strong> Shingles affecting the eye (ophthalmic shingles) can lead to permanent vision damage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Neurological problems:</strong> Inflammation of the brain (encephalitis) or facial paralysis</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Skin infections:</strong> Bacterial infections can develop in the blistered areas</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hearing problems:</strong> Ramsay Hunt syndrome can cause hearing loss and facial weakness</span>
              </li>
            </ul>
            <p className="mb-6">
              These complications underscore why prevention through vaccination is so crucial. The impact of shingles extends far beyond the initial outbreak.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Shingles Vaccine: Shingrix and Its Effectiveness
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The current shingles vaccine recommended by the CDC is called Shingrix. Approved in 2017, it has proven to be remarkably effective and has largely replaced the older vaccine (Zostavax).
            </p>
            <p className="mb-6">
              Shingrix is given as a two-dose series, with the second dose administered 2-6 months after the first. Clinical trials have shown impressive results:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Highly effective at preventing shingles in adults 50 and older</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Protection stays strong for years after vaccination</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Also protects against postherpetic neuralgia, the lingering nerve pain that follows some cases</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Effectiveness remains strong even in adults 70 and older</span>
              </li>
            </ul>
            <p className="mb-6">
              Common side effects are typically mild and temporary, including arm soreness, fatigue, muscle aches, and headache. These symptoms usually resolve within 2-3 days and are a sign that your immune system is responding to the vaccine.
            </p>
            <p className="mb-6">
              The protection offered by Shingrix far outweighs the minor discomfort of temporary side effects, especially when you consider the severe pain and complications that shingles can cause.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Should Get the Shingles Vaccine?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The CDC recommends the shingles vaccine for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>All adults age 50 and older,</strong> regardless of whether you remember having chickenpox (most people born before 1980 had chickenpox, even if asymptomatic)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Adults who have already had shingles</strong> (vaccination can help prevent future episodes)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Adults who received the older Zostavax vaccine</strong> (Shingrix provides better protection)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Adults with chronic conditions</strong> that weaken the immune system</span>
              </li>
            </ul>
            <p className="mb-6">
              You should talk with your provider before getting vaccinated if you:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Are currently pregnant or breastfeeding</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Have a severely compromised immune system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Currently have shingles (wait until the rash has healed)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Have had a severe allergic reaction to a previous dose or vaccine component</span>
              </li>
            </ul>
            <p className="mb-6">
              Most people can and should receive the shingles vaccine. The benefits of protection far outweigh the risks for the vast majority of adults over 50.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action: What to Do Next
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're 50 or older and haven't been vaccinated against shingles, now is the time to take action. Don&apos;t wait until you are experiencing symptoms. Prevention is far more effective than treatment.
            </p>
            <p className="mb-6">
              Here's what you can do:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Schedule an appointment with your primary care provider to discuss the shingles vaccine</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Check with your insurance, since most plans, including Medicare Part D, cover the vaccine</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mark your calendar for the second dose (2-6 months after the first)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Share this information with family and friends who may also benefit</span>
              </li>
            </ul>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, Missouri, we are committed to helping you stay healthy through evidence-based preventive care. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer predictable monthly pricing. Call (573) 200-6143 and our care team will answer your questions about whether the shingles vaccine is right for you.
            </p>
            <p className="mb-6">
              Don't let the risk of shingles hang over your future. Take control of your health today with a simple, effective vaccine that can spare you from significant pain and complications down the road. Your future self will thank you.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Guardian Primary Care Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Primary care for every stage of life in Cape Girardeau, Missouri. Our care team is led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog/flu-vaccines-myths-facts-and-why-you-should-get-one" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Preventive Care</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Flu Vaccines: Myths, Facts and Why to Get One
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Straight answers to the most common flu shot myths, and who should be vaccinated.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/preventative-cancer-screenings-which-tests-you-need-and-when" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Preventive Care</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Cancer Screenings: Which Tests and When
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Which screenings are recommended as you age, and the ages at which they start.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/understanding-medicare-primary-care-coverage-for-seniors" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Medicare</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Medicare Primary Care Coverage for Seniors
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What Medicare covers for primary care, wellness visits and preventive services.
                </p>
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
          <p className="text-xl mb-8 text-white/90">Our care team is here to answer your questions about the shingles vaccine and the rest of your preventive care.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule an Appointment
            </a>
            <a href="tel:+15732006143" className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/30">
              Call (573) 200-6143
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer predictable monthly pricing.
          </p>
        </div>
      </section>

    </main>
  )
}