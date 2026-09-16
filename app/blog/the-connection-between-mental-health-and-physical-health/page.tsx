import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between Mental Health and Physical Health | Guardian Primary Care',
  description: 'Discover how mental health and physical health are deeply interconnected. Learn evidence-based insights and practical strategies from Guardian Primary Care in Birmingham, AL.',
  keywords: 'mental health, physical health, mind-body connection, Birmingham AL, primary care, holistic health, anxiety, depression, chronic disease',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Mental Health
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant'}}>
            The Connection Between Mental Health and Physical Health
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You wake up with a headache. Your stomach churns with anxiety before an important meeting. A stressful week leaves you exhausted, and suddenly you're fighting off a cold. These aren't coincidences—they're your body speaking the language of your mind. The connection between mental health and physical health isn't just real; it's one of the most powerful relationships in medicine, yet it remains one of the most overlooked.
            </p>
            <p>
              At Guardian Primary Care in Birmingham, AL, we see this connection play out every day. Patients come in with physical symptoms that have roots in emotional distress, or chronic conditions that worsen under the weight of untreated anxiety or depression. Understanding this mind-body connection isn't just fascinating—it's essential to your overall wellbeing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            The Science Behind the Mind-Body Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your brain and body are in constant communication through an intricate network of hormones, neurotransmitters, and immune signals. When you experience stress, anxiety, or depression, your body responds with measurable physical changes.
            </p>
            <p className="mb-6">
              Chronic stress triggers the release of cortisol, your body's primary stress hormone. While helpful in short bursts, prolonged elevation of cortisol can lead to inflammation, weakened immune function, elevated blood pressure, and disrupted sleep patterns. Research published in the Journal of the American Medical Association has consistently shown that people with depression have higher rates of heart disease, diabetes, and stroke—not because of lifestyle factors alone, but because of the biological impact of mental health conditions on the body.
            </p>
            <p>
              Similarly, chronic physical illness can profoundly affect mental health. Living with pain, managing a complex medication regimen, or facing limitations in daily activities can lead to feelings of helplessness, isolation, and depression. It's a two-way street, and addressing one without the other leaves half the problem unsolved.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl leading-relaxed" style={{fontFamily: 'Cormorant'}}>
            "Your mind and body aren't separate entities—they're partners in your health journey. When one struggles, the other feels it too."
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            How Mental Health Affects Physical Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The physical manifestations of poor mental health are wide-ranging and often underestimated:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cardiovascular Impact:</strong> Depression and anxiety increase the risk of heart disease by up to 40%. Chronic stress raises blood pressure and contributes to arterial damage.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Immune System:</strong> Prolonged stress weakens your immune response, making you more susceptible to infections and slower to heal.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Digestive Health:</strong> Anxiety and depression can trigger or worsen conditions like irritable bowel syndrome (IBS), acid reflux, and stomach ulcers.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Chronic Pain:</strong> Mental health conditions amplify the perception of pain and can contribute to tension headaches, migraines, and musculoskeletal pain.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep Disruption:</strong> Anxiety and depression interfere with sleep quality, which in turn affects weight, metabolism, and cognitive function.</span>
              </li>
            </ul>
            <p>
              These aren't vague connections—they're measurable, biological realities that underscore why treating the whole person, not just isolated symptoms, is so critical.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            How Physical Health Affects Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The relationship works in reverse, too. Chronic physical illnesses—such as diabetes, heart disease, arthritis, and autoimmune conditions—significantly increase the risk of developing depression and anxiety.
            </p>
            <p className="mb-6">
              Living with ongoing pain or limitations can erode your sense of independence and joy. Medical appointments, medication side effects, and uncertainty about the future can create a heavy emotional burden. Studies show that nearly one-third of people with a serious medical condition experience symptoms of depression.
            </p>
            <p>
              Additionally, certain physical conditions directly affect brain chemistry. Thyroid disorders, vitamin deficiencies (especially B12 and D), and hormonal imbalances can all cause or worsen mood disorders. This is why comprehensive care—that looks at labs, lifestyle, and emotional health together—is so important.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            Recognizing the Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sometimes, physical symptoms are the first—and only—clue that something is wrong with your mental health. Watch for:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unexplained aches, pains, or headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent fatigue, even with adequate sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Digestive problems without a clear medical cause</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changes in appetite or weight</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or memory problems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased irritability or mood swings</span>
              </li>
            </ul>
            <p>
              If you're experiencing these symptoms, don't dismiss them as "just stress" or "all in your head." They're real, they matter, and they deserve attention.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            Practical Steps to Support Both Mental and Physical Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news? Small, intentional changes can have a profound impact on both your mind and body. Here are evidence-based strategies to get started:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move Your Body:</strong> Exercise releases endorphins and reduces stress hormones. Even a 20-minute walk can improve mood and energy.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize Sleep:</strong> Aim for 7-9 hours per night. Good sleep hygiene—consistent bedtimes, limiting screens, and a cool, dark room—makes a difference.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nourish Yourself:</strong> A diet rich in whole foods, omega-3 fatty acids, and probiotics supports brain health and mood regulation.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay Connected:</strong> Social isolation worsens both mental and physical health. Reach out to friends, join a community group, or talk to a counselor.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice Stress Management:</strong> Techniques like deep breathing, mindfulness, journaling, or yoga can lower cortisol and improve resilience.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Seek Professional Support:</strong> Whether it's therapy, medication, or both, mental health treatment is as important as treating any physical condition.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant'}}>
            The Role of Integrated Primary Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              At Guardian Primary Care, we believe in treating the whole person—not just symptoms in isolation. Our direct primary care model allows us the time to dig deeper, ask the right questions, and address both the physical and emotional factors affecting your health.
            </p>
            <p className="mb-6">
              We screen for depression and anxiety as part of routine care, review lifestyle factors that impact mood and energy, and coordinate with mental health specialists when needed. We also help manage chronic conditions in ways that support your emotional wellbeing, recognizing that your quality of life is just as important as your lab results.
            </p>
            <p>
              You don't have to choose between treating your body and caring for your mind. Comprehensive, compassionate care addresses both—because they're inseparable.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The connection between mental health and physical health isn't abstract—it's deeply personal, profoundly real, and worthy of your attention. When you care for your emotional wellbeing, your body benefits. When you address physical health concerns, your mind feels lighter.
            </p>
            <p>
              If you're struggling with unexplained physical symptoms, managing a chronic condition, or simply feeling like something is off, we encourage you to reach out. At Guardian Primary Care in Birmingham, AL, we're here to listen, support, and help you find the path to better health—mind, body, and spirit.
            </p>
          </div>

        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
              Written by the Guardian Primary Care Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Primary Care / DPC, serving patients throughout Birmingham, AL with compassionate, evidence-based care.
            </div>
          </div>
        </div>

      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Managing Stress in Daily Life
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies to reduce stress and build resilience in your everyday routine.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-2">Sleep Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  The Importance of Quality Sleep
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How better sleep can transform your physical health, mood, and cognitive function.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-2">Chronic Disease</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Living Well with Chronic Illness
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How to maintain quality of life and emotional wellbeing while managing long-term health conditions.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you address both your physical and mental health with compassion and expertise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}