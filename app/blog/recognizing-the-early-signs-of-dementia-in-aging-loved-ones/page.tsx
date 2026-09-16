import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Early Signs of Dementia in Aging Loved Ones | Guardian',
  description: 'Learn the early warning signs of dementia, how they differ from normal aging, and when to ask a provider in Cape Girardeau, MO for a memory evaluation.',
  openGraph: {
    title: 'Early Signs of Dementia in Aging Loved Ones',
    description: 'Learn the early warning signs of dementia, how they differ from normal aging, and when to ask a provider in Cape Girardeau, MO for a memory evaluation.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Recognizing the Early Signs of Dementia in Aging Loved Ones
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-dementia-including-alzheimers.jpg"
              alt="An older adult sitting with a family member in a bright room, a reminder that families are often the first to notice memory changes"
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When your mother forgets where she placed her keys for the third time this week, or your father struggles to find the right word mid-conversation, it's natural to wonder: is this normal aging, or could it be something more? For families across Cape Girardeau and beyond, recognizing the early signs of dementia in aging loved ones is one of the most important, and often most challenging, responsibilities we face.
            </p>
            <p className="mb-6">
              Dementia isn't a single disease, but rather an umbrella term for a decline in cognitive function severe enough to interfere with daily life. While memory loss is often the first sign that comes to mind, dementia encompasses a much broader range of symptoms. Understanding these early warning signs can lead to earlier diagnosis, better management, and improved quality of life for both patients and their families.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Dementia: More Than Just Memory Loss
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Dementia affects more than 55 million people worldwide, according to the World Health Organization, with nearly 10 million new cases diagnosed each year. Alzheimer's disease accounts for 60-70% of cases, but vascular dementia, Lewy body dementia, and frontotemporal dementia are also common forms.
            </p>
            <p className="mb-6">
              What makes early detection so crucial is that while dementia is progressive and currently incurable, early intervention can significantly slow its progression. Medications, lifestyle modifications, and supportive therapies work best when started early in the disease process. Additionally, early diagnosis allows families time to plan for the future, make legal and financial arrangements, and ensure their loved one's wishes are honored.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Early Warning Signs to Watch For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The early signs of dementia can be subtle and easily dismissed as normal aging. However, certain patterns of change warrant closer attention and professional evaluation. Here are the key warning signs to monitor:
            </p>
            
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Memory loss that disrupts daily life:</strong> Forgetting recently learned information, important dates, or asking the same questions repeatedly. Unlike normal aging, these memory lapses significantly impact daily functioning.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Challenges in planning or problem-solving:</strong> Difficulty following familiar recipes, managing monthly bills, or keeping track of regular responsibilities. Tasks that once seemed automatic now require significant effort.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Confusion with time or place:</strong> Losing track of dates, seasons, or the passage of time. Getting lost in familiar neighborhoods or forgetting how they arrived somewhere.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Trouble with visual and spatial relationships:</strong> Difficulty reading, judging distance, or determining color contrast. This may manifest as problems driving or navigating familiar environments.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Communication difficulties:</strong> Struggling to find the right words, stopping mid-conversation, or having trouble following discussions. May repeat themselves or use unusual words for familiar objects.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Misplacing things and losing the ability to retrace steps:</strong> Putting items in unusual places and being unable to remember where they left something. May accuse others of stealing as confusion increases.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Changes in judgment or decision-making:</strong> Poor judgment with money, falling for scams, or neglecting personal grooming and hygiene. May dress inappropriately for weather or situations.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Withdrawal from social activities:</strong> Avoiding hobbies, social gatherings, or work projects they once enjoyed. May become passive, sleeping more than usual or watching television for hours.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Mood and personality changes:</strong> Becoming confused, suspicious, depressed, fearful, or anxious. May be easily upset when out of their comfort zone or routine is disrupted.
                </div>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="font-display bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
            "Early detection of dementia isn't about delivering bad news, it's about opening a window of opportunity for treatment, planning, and preserving quality of life for as long as possible."
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Distinguishing Normal Aging from Dementia
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to understand that not all cognitive changes signal dementia. Normal age-related changes include occasionally forgetting names or appointments but remembering them later, making occasional errors when managing finances, or needing help with technology. These are typically minor inconveniences that don't significantly impact independence.
            </p>
            <p className="mb-6">
              Dementia-related changes, by contrast, are more severe and progressive. They include forgetting conversations entirely, chronic difficulty managing monthly bills, confusion about time and place, or withdrawal from previously enjoyed activities. The key distinction is the degree to which these changes interfere with daily life and independence.
            </p>
            <p className="mb-6">
              When in doubt, it's always better to have a conversation with a healthcare provider. A comprehensive cognitive assessment can help distinguish normal aging from early dementia, identify reversible causes of cognitive decline (such as vitamin deficiencies, thyroid problems, or medication side effects), and establish a baseline for future monitoring.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Risk Factors and Prevention
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While age is the greatest risk factor for dementia, research has identified several modifiable factors that can influence risk. Understanding these can help families take proactive steps to support brain health in aging loved ones.
            </p>
            <p className="mb-6">
              Major risk factors include cardiovascular disease, diabetes, obesity, smoking, excessive alcohol consumption, physical inactivity, social isolation, and untreated hearing loss. Family history and certain genetic factors also play a role, particularly in early-onset dementia.
            </p>
            <p className="mb-6">
              The good news is that research increasingly shows that lifestyle interventions can reduce dementia risk. Regular physical exercise, a Mediterranean-style diet rich in vegetables, fruits, whole grains, and healthy fats, ongoing social engagement, cognitive stimulation through learning and puzzles, quality sleep, stress management, and control of cardiovascular risk factors all contribute to brain health throughout life.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action: When and How to Seek Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've noticed concerning changes in a loved one, the most important step is to schedule a comprehensive evaluation with a healthcare provider experienced in cognitive assessment. Starting with your primary care provider is often the best approach, since they can conduct initial screening, review medications that might affect cognition, order the necessary blood work and imaging, and refer you to a specialist if one is needed.
            </p>
            <p className="mb-6">
              Having the conversation with your loved one about seeking evaluation requires sensitivity and tact. Focus on specific concerns you've observed, frame the visit as routine preventive care or a check-up, offer to accompany them to the appointment, and emphasize that early detection allows for more treatment options. Avoid being confrontational or arguing about memory lapses, which often leads to defensiveness.
            </p>
            <p className="mb-6">
              A thorough cognitive evaluation typically includes a detailed medical history, physical and neurological examination, cognitive and neuropsychological testing, laboratory tests to rule out reversible causes, and brain imaging such as MRI or CT scans. This comprehensive approach helps establish an accurate diagnosis and appropriate treatment plan.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Supporting Your Loved One After Diagnosis
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If dementia is diagnosed, remember that this is the beginning of a journey, not the end of meaningful life. Many people with early-stage dementia continue to live active, fulfilling lives for years with proper support and management.
            </p>
            <p className="mb-6">
              Important next steps include exploring medication options with your healthcare team, making legal and financial arrangements while your loved one can still participate in decision-making, connecting with support groups and community resources, implementing safety measures at home, establishing care routines and systems, and maintaining social connections and meaningful activities for as long as possible.
            </p>
            <p className="mb-6">
              Remember that caregiver support is equally important. Caring for someone with dementia is emotionally and physically demanding. Seeking support for yourself through counseling, support groups, and respite care isn't selfish, it's essential for providing sustainable, compassionate care to your loved one.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Recognizing the early signs of dementia in aging loved ones is an act of care and respect. While the journey ahead may be challenging, early detection opens doors to treatment, planning, and support that can significantly improve quality of life for everyone involved.
            </p>
            <p className="mb-6">
              If you're concerned about cognitive changes in a family member, don't wait. At Guardian Primary Care in Cape Girardeau, Missouri, our care team is here to provide compassionate cognitive assessment and ongoing support for patients and families navigating memory concerns. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you would rather pay a flat monthly rate. Call <a href="tel:+15732006143" className="text-[var(--color-primary)] underline">(573) 200-6143</a> to book a visit and talk through what you are seeing.
            </p>
          </div>
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
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner.
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
            <a href="/blog/managing-anxiety-in-primary-care-when-to-seek-additional-sup" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Anxiety in Primary Care: When to Seek Additional Support
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How anxiety shows up at a primary care visit, and the point at which added support helps.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Preventive Care
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What an annual wellness exam covers and why it is the visit that catches problems early.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/caring-for-aging-parents-medical-decision-making-and-advance" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Family Care
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Caring for Aging Parents: Medical Decision-Making and Advance Directives
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How to hold the hard conversations early and put the right documents in place.
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our care team in Cape Girardeau, Missouri is here to help you navigate memory concerns with compassion and plain answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
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