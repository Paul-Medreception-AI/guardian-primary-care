import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Supporting Dementia Caregivers: Resources for Families',
  description: 'Practical help for family dementia caregivers: build a support network, handle difficult behaviors, protect your own health, and find Missouri resources.',
  openGraph: {
    title: 'Supporting Dementia Caregivers: Resources for Families',
    description: 'Practical help for family dementia caregivers: build a support network, handle difficult behaviors, protect your own health, and find Missouri resources.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Supporting Caregivers: Resources for Families Caring for Dementia Patients
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
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
              src="/images/site/nurses-heart.jpg"
              alt="A nurse holding a small paper heart, representing the steady, compassionate support family caregivers give every day"
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
          <div className="text-lg leading-relaxed text-[var(--color-ink)] mb-8">
            <p className="mb-6">
              Caring for a loved one with dementia is one of the most challenging journeys a family can face. The person you've known your entire life may no longer recognize you. Daily routines become complex negotiations. The emotional weight can feel crushing, and the practical demands never seem to end. If you're reading this as a caregiver, know that you are not alone, and that seeking support is not a sign of weakness, but of wisdom.
            </p>
            <p>
              More than 11 million Americans currently serve as unpaid caregivers for someone with Alzheimer's disease or related dementias. In Cape Girardeau, MO, countless families navigate this journey every day. While the path is difficult, understanding available resources and evidence-based strategies can make a meaningful difference in both your loved one's quality of life and your own well-being.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Caregiver Experience
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              Dementia caregiving differs fundamentally from other forms of caregiving. As the disease progresses, your loved one's needs intensify while their ability to express gratitude or recognition may diminish. This creates a unique emotional burden that researchers call "ambiguous loss," grieving someone who is still physically present but cognitively absent.
            </p>
            <p className="mb-4">
              Studies show that dementia caregivers experience higher rates of depression, anxiety, and physical health problems compared to non-caregivers. The stress is cumulative: interrupted sleep, constant vigilance, behavioral challenges, and the relentless nature of progressive decline all take their toll. Understanding that these feelings are normal, and that your health matters too, is the first step toward sustainable caregiving.
            </p>
            <p>
              The Alzheimer's Association reports that nearly 60% of dementia caregivers rate the emotional stress of caregiving as high or very high. Recognizing warning signs in yourself (chronic exhaustion, social withdrawal, increased irritability, or neglecting your own health) means it's time to seek additional support.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Your Support Network
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              No one can provide dementia care alone indefinitely. Building a reliable support network isn't optional, it's essential for long-term sustainability. This network might include family members, friends, professional caregivers, and community resources.
            </p>
            <p className="mb-6">
              Start by having honest conversations with family members about dividing responsibilities. Create a shared calendar for medications, appointments, and care tasks. Be specific about needs rather than waiting for others to offer help. People often want to assist but don't know what would be most useful.
            </p>

            <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-primary)] p-6 my-8 rounded-r-lg">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">Key Support Resources in Cape Girardeau, MO:</h3>
              <ul className="space-y-2 text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Alzheimer's Association</strong>: Support groups, education programs, care consultations, and a helpline staffed around the clock</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Your regional Area Agency on Aging</strong>: Information on respite care, adult day programs, and in-home services in Southeast Missouri</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Missouri Medicaid Waiver Programs</strong>: May provide financial assistance for home and community-based services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Adult Day Care Centers</strong>: Offer supervised activities and socialization while giving caregivers respite time</span>
                </li>
              </ul>
            </div>

            <p>
              Don't overlook virtual resources. Online support groups can provide connection and advice at any hour. The Alzheimer's Association's 24/7 helpline (800-272-3900) offers immediate support during crisis moments. These resources exist because caregiving is genuinely difficult, and using them demonstrates strength, not failure.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Daily Care
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              Evidence-based strategies can reduce stress and improve quality of life for both caregiver and patient. While every situation is unique, certain approaches consistently prove helpful across the spectrum of dementia care.
            </p>
            <p className="mb-6">
              Establish predictable routines. People with dementia function best with consistency. Keep mealtimes, bathing, and bedtime at the same time each day. Use visual cues like labeled photos on doors or color-coded calendars. Simplify choices to reduce decision fatigue, offering two outfit options instead of an open closet, for example.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 rounded-r-lg">
              <p className="italic text-xl text-[var(--color-ink)]">
                "Communication strategies matter enormously. Speak slowly and clearly, maintain eye contact, and use simple sentences. When your loved one struggles to find words, provide gentle prompts rather than corrections. Validate emotions even when the underlying facts seem confused."
              </p>
            </div>

            <p className="mb-6">
              Safety modifications become increasingly important as dementia progresses. Remove tripping hazards, install grab bars in bathrooms, and consider technology solutions like door alarms or GPS trackers. Keep a recent photograph and written description of your loved one readily accessible in case they wander.
            </p>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Managing Challenging Behaviors:</h3>
              <ul className="space-y-3 text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Identify triggers</strong>: Keep a journal noting when difficult behaviors occur and what preceded them</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Address physical needs first</strong>: Agitation often signals hunger, pain, or bathroom needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Redirect rather than confront</strong>: If your loved one insists on something impossible, distract with another activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Maintain calm</strong>: Your emotional state influences theirs; take deep breaths and speak softly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Consult professionals</strong>: Sudden behavioral changes may indicate medical issues requiring evaluation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Protecting Your Own Health and Wellbeing
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              The airline safety instruction to secure your own oxygen mask first applies perfectly to caregiving. You cannot provide sustainable care if you're depleted, ill, or burned out. Self-care isn't selfish, it's a prerequisite for effective caregiving.
            </p>
            <p className="mb-4">
              Schedule regular respite care, even if it feels unnecessary at first. This might mean hiring a professional caregiver for a few hours weekly, enrolling your loved one in adult day care, or accepting a family member's offer to stay while you take a break. Use this time intentionally: see friends, pursue hobbies, attend medical appointments, or simply rest.
            </p>
            <p className="mb-4">
              Maintain your own healthcare appointments. Caregiver health often deteriorates from neglect rather than lack of access. Stay current with preventive care, manage chronic conditions, and address new symptoms promptly. At Guardian Primary Care in Cape Girardeau, Missouri, we understand the unique health challenges caregivers face and can coordinate your care alongside your loved one's needs.
            </p>
            <p className="mb-6">
              Consider professional counseling or support groups specifically for caregivers. Talking with others who understand your experience provides validation and practical insights. Research shows that caregivers who participate in support programs experience less depression and maintain better health than those who don't seek support.
            </p>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Essential Self-Care Practices:</h3>
              <ul className="space-y-3 text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prioritize sleep: Aim for 7-8 hours; sleep deprivation magnifies stress and impairs decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exercise regularly: Even brief walks reduce stress hormones and improve mood</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Eat nutritious meals: Keep healthy snacks accessible and avoid using food as your only comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Practice stress reduction: Meditation, deep breathing, or prayer can provide emotional anchoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stay connected: Isolation worsens mental health; maintain friendships even when it feels difficult</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set boundaries: It's acceptable to say no to additional demands when you're at capacity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Planning for the Future
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              While focusing on immediate needs is natural, planning ahead reduces crisis decision-making during emotionally difficult moments. Have important conversations while your loved one can still participate in planning when possible.
            </p>
            <p className="mb-4">
              Legal and financial planning should address powers of attorney for healthcare and finances, advance directives, and long-term care funding. Missouri residents should consult an elder law attorney familiar with state-specific regulations around Medicaid planning and estate considerations.
            </p>
            <p className="mb-4">
              Discuss care preferences and values while meaningful conversation is still possible. What matters most to your loved one? Would they prefer to remain at home as long as possible, even if it means less comprehensive care? What are their wishes regarding life-sustaining treatment? Documenting these conversations provides guidance when you must make decisions on their behalf.
            </p>
            <p className="mb-6">
              Recognize that placement in a memory care facility isn't failure, and sometimes it represents the most loving choice when care needs exceed what can safely be provided at home. Research facilities in advance, visit multiple options, and trust your judgment about what's best for your family's unique situation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Finding Meaning in the Journey
          </h2>
          <div className="text-base leading-loose text-[var(--color-ink)]">
            <p className="mb-4">
              Dementia caregiving demands extraordinary patience, resilience, and compassion. The journey includes profound losses, but many caregivers also discover unexpected moments of connection and personal growth. Research on post-traumatic growth shows that challenging experiences can deepen empathy, strengthen relationships with others facing similar struggles, and clarify what truly matters in life.
            </p>
            <p className="mb-4">
              Focus on the present moment rather than grieving the past or fearing the future constantly. Your loved one may not remember your visit tomorrow, but the feelings of safety and love you provide in this moment are real and valuable. Small joys (a shared smile, a favorite song that brings recognition, the comfort of familiar touch) matter more than perfect care.
            </p>
            <p className="mb-6">
              Give yourself permission to experience the full range of emotions that accompany this role: love and frustration, gratitude and resentment, hope and grief. These feelings aren't contradictory, they're human. Allowing yourself to acknowledge the difficulty doesn't diminish your love or commitment.
            </p>
          </div>

          {/* Closing Call to Action */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 rounded-r-lg">
            <p className="text-base leading-relaxed text-[var(--color-ink)]">
              <strong>If you're caring for a loved one with dementia in Cape Girardeau, you don't have to navigate this journey alone.</strong> Guardian Primary Care supports both patients and their caregivers with medication management, care coordination, and connections to community resources. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you would rather pay a flat monthly rate with direct access to your provider. Call <a href="tel:+15732006143" className="text-[var(--color-primary)] underline">(573) 200-6143</a> to arrange a visit for yourself or for the person you care for.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] mb-3">Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner.</p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our team is dedicated to comprehensive, compassionate care for patients and families throughout Cape Girardeau and Southeast Missouri. We believe in taking the time to understand your unique needs and building lasting relationships centered on your health and wellbeing.
              </p>
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
            <a href="/blog/recognizing-the-early-signs-of-dementia-in-aging-loved-ones" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Aging &amp; Memory</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Recognizing the Early Signs of Dementia in Aging Loved Ones
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Recognizing early warning signs can lead to better outcomes. Learn what changes warrant medical evaluation.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/the-connection-between-mental-health-and-physical-health" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Mental Health</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Connection Between Mental Health and Physical Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why prolonged stress shows up in the body, and what caregivers can do about it early.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/caring-for-aging-parents-medical-decision-making-and-advance" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Patient Education</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Caring for Aging Parents: Medical Decision-Making and Advance Directives
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How to put healthcare decisions, documents and family expectations in place before a crisis.
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
          <p className="text-xl text-white/90 mb-8">
            Our care team in Cape Girardeau, Missouri is here to help you and your family through this, with compassion and plain answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:gap-3"
            >
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
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