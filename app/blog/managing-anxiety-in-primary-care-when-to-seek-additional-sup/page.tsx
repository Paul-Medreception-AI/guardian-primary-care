import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Managing Anxiety in Primary Care: When to Seek Help',
  description: 'How your provider can help you manage anxiety, the warning signs worth acting on, and the treatments that work. Guardian Primary Care, Cape Girardeau MO.',
  keywords: 'anxiety management, primary care mental health, anxiety treatment Cape Girardeau MO, when to seek help for anxiety, mental health support',
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
            Mental Health
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight text-center mb-8">
            Managing Anxiety in Primary Care: When to Seek Additional Support
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
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/cond-anxiety.jpg"
              alt="A man standing against a dark background with his hands covering his face, showing the weight of persistent anxiety"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your heart races before an important meeting. You lie awake at night replaying conversations from the day. You feel a knot in your stomach when thinking about upcoming obligations. These experiences are universal, but when do they cross the line from normal stress into something that requires professional attention?
            </p>
            <p className="mb-6">
              Anxiety disorders are among the most common mental health conditions in the United States, and they are also among the most treatable. Even so, many people who live with anxiety never get care for it. Some do not realize that their primary care provider can be an essential first step in addressing anxiety, and others are unsure when their symptoms warrant seeking help.
            </p>
            <p>
              Understanding anxiety, recognizing when it becomes problematic, and knowing how primary care fits into effective management can empower you to take control of your mental health and overall wellbeing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Anxiety: Normal Response vs. Disorder
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Anxiety is a normal human emotion, a protective mechanism that helped our ancestors survive threats. In modern life, some anxiety actually helps us perform better, meet deadlines, and stay alert to genuine dangers. The problem arises when anxiety becomes persistent, excessive, and interferes with daily functioning.
            </p>
            <p className="mb-6">
              Clinical anxiety disorders are characterized by worry or fear that is disproportionate to the situation, lasts for extended periods (typically six months or more), and significantly impacts your ability to work, maintain relationships, or enjoy life. Common types include generalized anxiety disorder, social anxiety disorder, panic disorder, and specific phobias.
            </p>
            <p>
              Physical symptoms often accompany anxiety and can include rapid heartbeat, sweating, trembling, fatigue, difficulty concentrating, muscle tension, and sleep disturbances. Many patients initially visit their primary care provider concerned about these physical symptoms, not realizing anxiety may be the underlying cause.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Primary Care in Anxiety Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your primary care provider is uniquely positioned to help with anxiety for several reasons. First, they know your complete medical history and can rule out physical conditions that may mimic or contribute to anxiety symptoms, such as thyroid disorders, heart conditions, or medication side effects.
            </p>
            <p className="mb-6">
              Primary care providers can screen for anxiety using validated questionnaires, provide initial counseling about lifestyle modifications, prescribe medications when appropriate, and coordinate care with mental health specialists if needed. At Guardian Primary Care in Cape Girardeau, Missouri, we are in network with most major commercial insurances, Medicare and Medicaid, and we also offer Guardian Direct Care for patients who prefer a membership option. Either way, unhurried appointment times and an ongoing relationship with your provider make it easier to address mental health concerns thoroughly.
            </p>
            <p>
              Many mild to moderate anxiety cases can be effectively managed in primary care, especially when caught early. Your provider can help you develop coping strategies, address contributing factors like sleep problems or chronic pain, and monitor your progress over time.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-display">
              The relationship you build with your provider creates a safe space to discuss mental health concerns openly, without stigma or judgment. That is often the first step toward healing.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Signs It May Be Time to Seek Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing when anxiety has moved beyond the normal range can be challenging, especially when symptoms develop gradually. Consider scheduling an appointment with your primary care provider if you experience any of the following:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent worry or fear that feels out of your control for most days over several months</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoidance behaviors that limit your life, such as skipping social events, refusing opportunities, or restricting activities</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical symptoms like chest pain, shortness of breath, or dizziness that have been medically evaluated but persist</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances, including difficulty falling asleep, staying asleep, or getting restful sleep</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or completing tasks at work or home due to anxious thoughts</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Using alcohol, medications, or other substances to cope with anxious feelings</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Relationship conflicts or withdrawal from loved ones because of anxiety symptoms</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Panic attacks (sudden episodes of intense fear with physical symptoms like heart palpitations and a feeling of being out of control)</span>
              </div>
            </div>

            <p className="mt-6">
              Remember that seeking help early often leads to better outcomes. Anxiety is highly treatable, and you don't need to wait until symptoms become severe to reach out for support.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research consistently shows that anxiety disorders respond well to treatment. The most effective approaches typically involve a combination of strategies tailored to your specific situation.
            </p>
            <p className="mb-6">
              <strong>Lifestyle modifications</strong> form the foundation of anxiety management. Regular physical exercise has been shown to reduce anxiety symptoms as effectively as medication for some people. Sleep hygiene, nutrition, limiting caffeine and alcohol, and stress management techniques all play important roles. Your primary care provider can help you identify which lifestyle factors might be contributing to your anxiety and develop realistic plans for improvement.
            </p>
            <p className="mb-6">
              <strong>Cognitive-behavioral therapy (CBT)</strong> is considered the gold standard psychotherapy for anxiety disorders. CBT helps you identify and change thought patterns and behaviors that contribute to anxiety. While this typically requires working with a mental health specialist, your primary care provider can refer you to qualified therapists and coordinate care.
            </p>
            <p className="mb-6">
              <strong>Medications</strong> can be highly effective for moderate to severe anxiety. Several classes of medications are used, including SSRIs (selective serotonin reuptake inhibitors), SNRIs (serotonin-norepinephrine reuptake inhibitors), and others. Your primary care provider can prescribe and monitor these medications, adjusting as needed based on your response and any side effects.
            </p>
            <p>
              <strong>Complementary approaches</strong> like mindfulness meditation, yoga, and relaxation techniques have growing evidence supporting their effectiveness as part of a comprehensive treatment plan. These can be particularly helpful when combined with other treatments.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Specialized Mental Health Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While primary care providers can effectively manage many cases of anxiety, certain situations warrant referral to mental health specialists such as psychiatrists, psychologists, or licensed therapists.
            </p>
            <p className="mb-6">
              Consider asking your primary care provider for a referral if you have severe symptoms that significantly limit daily functioning, haven't responded to initial treatment approaches, have co-occurring mental health conditions like depression or substance use disorders, or have experienced trauma that contributes to your anxiety.
            </p>
            <p className="mb-6">
              Complex cases, such as treatment-resistant anxiety or situations requiring intensive psychotherapy, benefit from specialized expertise. However, this doesn't mean you stop seeing your primary care provider. Integrated care, where your primary care provider and mental health specialist communicate and coordinate your treatment, typically produces the best outcomes.
            </p>
            <p>
              In Cape Girardeau, Missouri, Guardian Primary Care can arrange referrals to mental health specialists and stay involved in your care, so you are not left to coordinate that step on your own.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're reading this and recognizing yourself in these descriptions, the most important thing you can do is reach out. Many people struggle with anxiety for years before seeking help, often due to stigma, uncertainty about where to turn, or hope that symptoms will resolve on their own.
            </p>
            <p className="mb-6">
              The good news is that anxiety is one of the most treatable mental health conditions. With proper support, most people experience significant improvement in their symptoms and quality of life. Starting with your primary care provider offers several advantages: they already know you, the setting may feel less intimidating than a mental health clinic, and they can address both the physical and psychological aspects of anxiety.
            </p>
            <p className="mb-6">
              Prepare for your appointment by tracking your symptoms, noting when anxiety is worse or better, listing questions you want to ask, and being honest about how anxiety affects your daily life. Remember that there is no minimum threshold of suffering required to seek help. If anxiety is bothering you, that is reason enough to discuss it with your provider.
            </p>
            <p>
              Anxiety doesn't have to control your life. With the right support, tools, and treatment, you can develop effective ways to manage anxiety and reclaim your wellbeing. Your primary care provider is ready to partner with you on this journey.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Guardian Primary Care team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Primary care in Cape Girardeau, Missouri, led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri Licensed Collaborating Physician.
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
            <a href="/blog/the-connection-between-mental-health-and-physical-health" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Connection Between Mental Health and Physical Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How stress and mood affect the body, and how physical illness affects mood.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/sleep-and-health-why-quality-sleep-matters-for-overall-welln" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Sleep Health
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Sleep and Health: Why Quality Sleep Matters for Overall Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why rest is one of the most powerful tools you have, and how to get more of it.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/building-a-relationship-with-your-primary-care-provider" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Primary Care
                </div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building a Relationship with Your Primary Care Provider
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What an ongoing relationship with one provider changes about your care.
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
          <p className="text-xl text-white/90 mb-8">
            Our care team in Cape Girardeau, Missouri is here to help you manage anxiety and feel like yourself again. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer a membership option.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Schedule an Appointment
          </a>
          <a
            href="tel:+15732006143"
            className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 mt-4 sm:mt-0 sm:ml-4"
          >
            Call (573) 200-6143
          </a>
        </div>
      </section>

    </main>
  )
}