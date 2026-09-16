import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding and Managing Migraine Headaches | Guardian Primary Care',
  description: 'Learn about migraine triggers, symptoms, and evidence-based treatment strategies. Expert guidance from Guardian Primary Care in Birmingham, AL.',
  openGraph: {
    title: 'Understanding and Managing Migraine Headaches | Guardian Primary Care',
    description: 'Learn about migraine triggers, symptoms, and evidence-based treatment strategies. Expert guidance from Guardian Primary Care in Birmingham, AL.',
    type: 'article',
    publishedTime: '2025-01-15T10:00:00Z',
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
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding and Managing Migraine Headaches
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The throbbing pain begins behind one eye. Light becomes unbearable. Sounds feel amplified. Nausea creeps in. For the nearly 39 million Americans living with migraines, these aren't just "bad headaches"—they're neurological events that can derail entire days, strain relationships, and significantly impact quality of life. Yet despite how common migraines are, many people suffer in silence, unaware that effective treatments and management strategies exist.
            </p>
            <p>
              At Guardian Primary Care in Birmingham, AL, we understand that migraine management requires more than just pain medication. It demands a comprehensive approach that addresses triggers, lifestyle factors, and personalized treatment plans. This guide will help you understand what migraines really are and how you can take control of them.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            What Makes a Migraine Different from a Regular Headache?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Migraines are complex neurological conditions, not simply severe headaches. While a tension headache might cause steady, mild-to-moderate pain across your head, migraines typically present with intense, throbbing pain on one side of the head, often accompanied by additional symptoms that can be debilitating.
            </p>
            <p className="mb-6">
              The migraine experience often unfolds in distinct phases. Many people experience a "prodrome" phase one to two days before the headache, with symptoms like food cravings, mood changes, neck stiffness, or increased thirst. Some people then experience an "aura"—visual disturbances like flashing lights, blind spots, or tingling sensations—before the headache phase begins. The headache itself can last anywhere from four hours to three days if untreated.
            </p>
            <p>
              What sets migraines apart is their impact on daily functioning. They're often accompanied by severe sensitivity to light (photophobia) and sound (phonophobia), nausea and vomiting, and sometimes dizziness or visual disturbances. These symptoms can make it impossible to work, care for family, or engage in normal activities.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Who Gets Migraines and Why?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Migraines affect people of all ages, but they're most common in adults aged 35 to 55. Women are three times more likely to experience migraines than men, largely due to hormonal influences. In fact, many women notice their migraines correlate with their menstrual cycles, pregnancy, or menopause.
            </p>
            <p className="mb-6">
              Genetics play a significant role—if one or both parents experience migraines, you're more likely to develop them as well. Research suggests that migraines involve changes in brain chemistry, particularly with serotonin levels, and alterations in blood flow to the brain. Environmental factors, stress levels, sleep patterns, and dietary choices all contribute to migraine susceptibility.
            </p>
            <p>
              The economic impact is substantial. The American Migraine Foundation reports that migraines cost U.S. employers more than $20 billion annually in lost productivity and healthcare expenses. Yet despite this significant burden, research suggests that nearly half of migraine sufferers have never received a formal diagnosis.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'var(--font-cormorant)'}}>
            "Understanding your personal migraine triggers is one of the most powerful tools in prevention. A headache diary can reveal patterns you never knew existed."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Common Migraine Triggers to Watch For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While migraine triggers vary from person to person, certain factors commonly provoke attacks. Identifying your personal triggers is essential for effective management.
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Hormonal changes:</strong> Fluctuations in estrogen before or during menstrual periods, pregnancy, or menopause can trigger migraines
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Dietary triggers:</strong> Aged cheeses, processed meats, artificial sweeteners, alcohol (especially red wine), caffeine, and foods containing MSG or tyramine
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Sleep disruptions:</strong> Both insufficient sleep and oversleeping can trigger migraines
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Stress and emotional factors:</strong> High stress levels, anxiety, and even the "let-down" after stress can precipitate attacks
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Environmental factors:</strong> Bright lights, loud sounds, strong smells, weather changes, and barometric pressure shifts
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Physical factors:</strong> Intense physical exertion, poor posture, and dehydration
                </div>
              </div>
            </div>

            <p>
              Keeping a detailed headache diary—noting what you ate, how you slept, stress levels, weather conditions, and where you were in your menstrual cycle—can help you identify patterns over time. Many patients are surprised to discover connections they never suspected.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Treatment Options: From Acute Relief to Prevention
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Migraine management typically involves two complementary approaches: acute treatment to stop a migraine in progress, and preventive treatment to reduce the frequency and severity of future attacks.
            </p>
            <p className="mb-6">
              <strong>Acute treatments</strong> work best when taken at the first sign of a migraine. Over-the-counter pain relievers like ibuprofen or naproxen can be effective for mild migraines. For moderate to severe migraines, prescription triptans (medications that target serotonin receptors) are often highly effective. Newer medications called CGRP antagonists offer another option for acute treatment. Anti-nausea medications can address accompanying symptoms.
            </p>
            <p className="mb-6">
              <strong>Preventive treatments</strong> are considered when migraines occur frequently (four or more days per month) or significantly impact quality of life. Options include certain blood pressure medications (beta-blockers), antidepressants (particularly amitriptyline), anti-seizure drugs (like topiramate), and CGRP monoclonal antibodies specifically developed for migraine prevention. Botox injections have also been FDA-approved for chronic migraine prevention.
            </p>
            <p>
              Treatment should always be individualized. What works for one person may not work for another, and finding the right approach often requires patience and collaboration with your healthcare provider.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Lifestyle Strategies That Make a Difference
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While medication plays an important role, lifestyle modifications can significantly reduce migraine frequency and severity. These strategies work best when implemented consistently.
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Maintain sleep consistency:</strong> Go to bed and wake up at the same time every day, even on weekends
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Stay hydrated:</strong> Aim for at least eight glasses of water daily, as dehydration is a common migraine trigger
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Eat regular meals:</strong> Skipping meals can trigger migraines; maintain consistent meal times
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Practice stress management:</strong> Incorporate relaxation techniques like deep breathing, meditation, or yoga
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Exercise regularly:</strong> Moderate aerobic exercise (30 minutes most days) can reduce migraine frequency
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Limit caffeine:</strong> While small amounts may help some people, excessive caffeine or withdrawal can trigger attacks
                </div>
              </div>
            </div>

            <p>
              Some people also find relief through complementary approaches like acupuncture, biofeedback, or cognitive behavioral therapy. While the evidence varies for these modalities, they can be valuable components of a comprehensive treatment plan.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing frequent headaches that interfere with your daily life, it's time to seek professional evaluation. Many people wait years before discussing migraines with a healthcare provider, suffering unnecessarily when effective treatments are available.
            </p>
            <p className="mb-6">
              You should seek immediate medical attention if you experience a sudden, severe headache unlike any you've had before, headache accompanied by fever, stiff neck, confusion, vision changes, difficulty speaking, or numbness, or headache following a head injury. These could indicate more serious conditions requiring urgent evaluation.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Birmingham, AL, we take a comprehensive approach to migraine management. We'll work with you to identify your triggers, develop an individualized treatment plan, and adjust strategies as needed. Because we operate as a direct primary care practice, we have the time to thoroughly address your concerns and provide ongoing support.
            </p>
            <p>
              Living with migraines doesn't mean accepting a diminished quality of life. With proper diagnosis, treatment, and lifestyle modifications, most people can significantly reduce the impact of migraines on their daily activities. The key is taking that first step to seek help and commit to a management plan.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12 text-[var(--color-ink)] leading-loose">
            <p className="mb-4">
              <strong>Ready to take control of your migraines?</strong> Guardian Primary Care in Birmingham, AL offers comprehensive migraine evaluation and personalized treatment plans designed around your unique needs. Our direct primary care model means you'll have the time and attention necessary to address this complex condition effectively.
            </p>
            <p>
              Don't let migraines continue to control your life. Contact us today to schedule a consultation and start your journey toward better headache management.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Primary Care / DPC. Our team is dedicated to providing evidence-based, compassionate care to patients in Birmingham, AL and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Chronic Pain Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore evidence-based approaches to managing chronic pain conditions and improving quality of life.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Role of Stress in Physical Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn how chronic stress impacts your body and practical strategies for stress reduction.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care: Your Best Health Investment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how preventive care and regular screenings can help you stay healthy and catch problems early.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}