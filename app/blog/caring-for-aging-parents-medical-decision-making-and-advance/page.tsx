import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Aging Parents: Medical Decisions and Advance Directives',
  description: 'How to make medical decisions for aging parents, understand advance directives, and start the family conversation before a health crisis forces it.',
  keywords: 'aging parents, advance directives, medical decision-making, healthcare proxy, living will, end of life planning, Cape Girardeau MO, primary care',
}

export default function BlogPost() {
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
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight text-center mb-8">
            Caring for Aging Parents: Medical Decision-Making and Advance Directives
          </h1>
          
          {/* Meta */}
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
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/handshake-care.jpg"
              alt="Two people clasping hands across a table, illustrating the trust behind family decisions about a parent's medical care"
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
          <p className="text-lg text-[var(--color-ink)] leading-loose mb-6">
            The conversation often begins with a phone call from a hospital, a slip on the stairs, or a moment when you realize your parent can no longer remember their medications. Suddenly, you're faced with questions you never imagined asking: Who makes medical decisions if they can't? What would they want if they couldn't tell us? These moments are never easy, but they don't have to be overwhelming. With preparation, honest conversations, and the right legal documents in place, you can honor your parents' wishes while navigating one of life's most challenging transitions.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            As your parents age, taking an active role in their healthcare planning isn't just practical, it's an act of love. Advance directives and medical decision-making conversations may feel uncomfortable, but they provide clarity, reduce family conflict, and ensure that your loved ones receive care aligned with their values and preferences.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Advance Directives
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Advance directives are legal documents that allow individuals to communicate their healthcare preferences in advance, particularly for situations where they may be unable to speak for themselves. These documents serve as both a roadmap for medical providers and a source of comfort for family members who might otherwise struggle with difficult decisions during crisis moments.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            There are two primary types of advance directives:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Living Will:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> A written document that specifies what medical treatments you do or do not want in end-of-life situations, such as resuscitation, mechanical ventilation, or feeding tubes.</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Healthcare Power of Attorney (Healthcare Proxy):</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Designates a trusted person to make medical decisions on your behalf if you become incapacitated. This person should understand your values and be willing to advocate for your wishes.</span>
              </div>
            </div>
          </div>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            In Missouri, these documents must be executed the way state law requires (generally signed and either notarized or witnessed), and they are best reviewed with a healthcare provider and an attorney. Copies should go to your parent's primary care provider and to the designated healthcare proxy, and one should be kept somewhere easy to reach in an emergency.
          </p>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why These Conversations Matter
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Research consistently shows that patients who complete advance directives receive care that aligns more closely with their preferences, experience less unwanted aggressive treatment at the end of life, and report higher satisfaction with their care. Yet studies also reveal that fewer than one-third of American adults have completed these documents, often because the conversations feel too difficult or are postponed indefinitely.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            Delaying these discussions can lead to painful scenarios: family members disagreeing about treatment, medical teams uncertain about how to proceed, and guilt-ridden children making decisions without guidance. Conversely, families who engage in these conversations early report feeling more prepared, less stressed, and more confident that they honored their loved one's wishes.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="font-display text-[var(--color-ink)] italic text-xl leading-relaxed">
              "Having these conversations before a crisis occurs is one of the most loving gifts you can give your family. It removes the burden of guesswork and replaces it with clarity and peace of mind."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How to Start the Conversation
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Initiating a discussion about end-of-life planning requires sensitivity, but it doesn't have to be morbid. The key is to approach it as an expression of care, respect, and practicality. Here are strategies to make the conversation easier:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Choose the right moment:</strong> Avoid bringing it up during stressful times or medical emergencies. Instead, find a calm, private setting, perhaps during a routine visit or family gathering.
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Frame it positively:</strong> Position the conversation as a way to ensure their voice is heard. You might say, "I want to make sure I understand what matters most to you if you ever can't speak for yourself."
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Use prompts and examples:</strong> Reference a news story, a friend's experience, or even your own planning as a conversation starter. This can make the topic feel less abstract.
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Listen more than you talk:</strong> This is about their wishes, not yours. Ask open-ended questions like, "What does quality of life mean to you?" or "Are there treatments you'd never want?"
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Involve their provider:</strong> Primary care providers can lead these discussions during annual wellness visits, offering medical context and taking some of the emotional weight off family members.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Topics to Cover
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            When discussing medical decision-making and advance directives with your aging parents, consider exploring the following areas:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Resuscitation preferences:</strong> Would they want CPR if their heart stopped? What about a Do Not Resuscitate (DNR) order?
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Life-sustaining treatments:</strong> Mechanical ventilation, feeding tubes, dialysis: are there circumstances where they would or wouldn't want these?
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Quality of life considerations:</strong> What makes life meaningful to them? What conditions would be unacceptable?
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Organ and tissue donation:</strong> Do they wish to be an organ donor?
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Healthcare proxy selection:</strong> Who should make decisions on their behalf? Is there a backup person?
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Spiritual or religious beliefs:</strong> Are there faith-based considerations that should guide medical care?
              </p>
            </div>
          </div>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            Document these preferences clearly and revisit them periodically. People's wishes can evolve as their health changes, so treating this as an ongoing conversation rather than a one-time event is essential.
          </p>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Navigating Family Dynamics
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Family disagreements about medical decisions are common, especially when siblings have different relationships with aging parents or hold differing beliefs about medical intervention. To minimize conflict:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Include everyone early:</strong> Bring all key family members into the conversation so no one feels blindsided later.
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Center the parent's voice:</strong> Remind everyone that the goal is to honor the parent's wishes, not impose personal preferences.
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Use a mediator:</strong> A primary care provider, social worker, or eldercare attorney can serve as a neutral third party to facilitate difficult conversations.
              </p>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Put it in writing:</strong> Formal documentation reduces ambiguity and provides legal protection for the healthcare proxy's decisions.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Your Primary Care Provider
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Your parent's primary care provider plays a critical role in advance care planning. They can provide medical context to help your parent understand the implications of various decisions, answer questions about prognosis and treatment options, and ensure that advance directives are documented in the medical record.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            At Guardian Primary Care in Cape Girardeau, Missouri, care planning is treated as a real visit rather than something squeezed into the last two minutes of an appointment. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available as an alternative for families who prefer a flat monthly rate with direct access to their provider. Either way, continuity means your parent's provider comes to know their values, their health history and their goals, which makes them a genuine partner in planning ahead.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            Don't hesitate to request a dedicated appointment to discuss advance directives. Many practices now offer care planning visits specifically for this purpose, and Medicare covers these discussions as part of annual wellness exams.
          </p>

          {/* Closing */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Confidence
          </h2>
          
          <p className="text-base text-[var(--color-ink)] leading-loose mb-6">
            Caring for aging parents is one of life's most profound responsibilities. While conversations about medical decision-making and advance directives can feel overwhelming, they are also acts of deep respect and compassion. By taking these steps now, before a crisis, you give your parents the gift of autonomy and your family the gift of clarity.
          </p>

          <p className="text-base text-[var(--color-ink)] leading-loose mb-8">
            Remember, you don't have to navigate this journey alone. Your primary care provider, social workers, eldercare attorneys, and support groups are all valuable resources. If you're unsure where to start or need guidance tailored to your family's unique situation, reach out to a trusted healthcare professional who can walk with you through every step.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm">Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner.</p>
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
            
            {/* Card 1 */}
            <a href="/blog/understanding-medicare-primary-care-coverage-for-seniors" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Medicare: Primary Care Coverage for Seniors
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  What Parts A, B, C and D actually cover, and how to get the most from an annual wellness visit.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Multiple Chronic Conditions: A Coordinated Care Approach
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies for managing several conditions at once without losing quality of life.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog/recognizing-the-early-signs-of-dementia-in-aging-loved-ones" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Recognizing the Early Signs of Dementia in Aging Loved Ones
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  The changes that separate normal aging from something worth evaluating, and when to ask.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our care team in Cape Girardeau, Missouri is here to help your family work through medical decision-making and advance care planning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
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