import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sleep and Health: Why Quality Sleep Matters for Overall Wellness | Guardian Primary Care',
  description: 'Discover the vital connection between quality sleep and overall health. Learn evidence-based strategies to improve your sleep and enhance your wellness in Birmingham, AL.',
  keywords: 'sleep health, quality sleep, sleep wellness, sleep tips Birmingham AL, primary care sleep advice, sleep and health connection',
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Sleep and Health: Why Quality Sleep Matters for Overall Wellness
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published May 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="text-xl mb-6">
            You've probably heard it countless times: "Make sure you get enough sleep." Yet in our fast-paced world, sleep is often the first thing we sacrifice when life gets busy. But what if we told you that quality sleep isn't just about feeling rested—it's one of the most powerful tools you have for protecting your physical health, mental clarity, and emotional well-being?
          </p>

          <p className="mb-6">
            Sleep is not a luxury; it's a biological necessity. During those precious hours of rest, your body performs critical maintenance work that affects everything from your immune system to your heart health. Let's explore why sleep matters so much and what you can do to prioritize it in your life.
          </p>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Happens When You Sleep?
          </h2>

          <p className="mb-6">
            Sleep is far from a passive state. While you rest, your body is remarkably active, engaging in essential processes that keep you healthy. During deep sleep, your body repairs tissues, builds bone and muscle, and strengthens your immune system. Your brain consolidates memories, processes emotions, and clears out toxins that accumulate during waking hours.
          </p>

          <p className="mb-6">
            The sleep cycle consists of multiple stages, including light sleep, deep sleep, and REM (rapid eye movement) sleep. Each stage plays a unique role. Deep sleep is when physical restoration happens, while REM sleep is crucial for cognitive function, learning, and emotional regulation. Missing out on complete sleep cycles means your body can't perform these vital functions effectively.
          </p>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Health Consequences of Poor Sleep
          </h2>

          <p className="mb-6">
            Chronic sleep deprivation isn't just about feeling tired—it has serious health implications that extend far beyond morning grogginess. Research has consistently shown that inadequate sleep increases your risk for numerous health conditions.
          </p>

          <p className="mb-6">
            Poor sleep affects your cardiovascular system, increasing your risk of high blood pressure, heart disease, and stroke. It impairs your body's ability to regulate blood sugar, raising your risk for type 2 diabetes. Your immune system suffers too, making you more susceptible to infections and illnesses.
          </p>

          <p className="mb-6">
            Mental health is deeply intertwined with sleep quality. Insufficient sleep is linked to depression, anxiety, and increased stress levels. It impairs cognitive function, affecting your memory, concentration, decision-making abilities, and reaction time. Even your weight is influenced by sleep—poor sleep disrupts hormones that control hunger and appetite, often leading to weight gain.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Sleep is the golden chain that ties health and our bodies together. When we prioritize rest, we invest in every aspect of our wellness—from our hearts to our minds."
          </div>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How Much Sleep Do You Really Need?
          </h2>

          <p className="mb-6">
            Sleep needs vary by age and individual factors, but most adults need 7-9 hours of quality sleep per night. Children and teenagers require even more—anywhere from 8-14 hours depending on their age. Unfortunately, research shows that more than one-third of American adults regularly get less than the recommended amount.
          </p>

          <p className="mb-6">
            Quality matters as much as quantity. You might spend 8 hours in bed but still wake feeling unrefreshed if your sleep is fragmented or you're not cycling through all sleep stages properly. Conditions like sleep apnea, restless leg syndrome, or chronic insomnia can severely impact sleep quality even when you're spending adequate time in bed.
          </p>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Strategies for Better Sleep
          </h2>

          <p className="mb-6">
            The good news is that for many people, improving sleep quality is achievable with consistent habits and lifestyle adjustments. Here are evidence-based strategies that can make a real difference:
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Maintain a consistent sleep schedule:</strong> Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Create a relaxing bedtime routine:</strong> Spend 30-60 minutes before bed doing calming activities like reading, gentle stretching, or meditation. This signals to your body that it's time to wind down.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Optimize your sleep environment:</strong> Keep your bedroom cool (65-68°F is ideal), dark, and quiet. Invest in comfortable bedding and consider blackout curtains or a white noise machine if needed.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Limit screen time before bed:</strong> The blue light from phones, tablets, and computers can interfere with melatonin production. Try to avoid screens for at least an hour before bedtime.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Watch your diet:</strong> Avoid large meals, caffeine, and alcohol close to bedtime. While alcohol might make you drowsy initially, it disrupts sleep quality later in the night.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Get regular exercise:</strong> Physical activity promotes better sleep, but try to finish vigorous workouts at least 3-4 hours before bedtime.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Manage stress and anxiety:</strong> Practices like journaling, deep breathing exercises, or progressive muscle relaxation can help quiet a racing mind at bedtime.
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>

          <p className="mb-6">
            While lifestyle changes can help many people improve their sleep, persistent sleep problems may indicate an underlying condition that requires medical attention. If you consistently have trouble falling asleep or staying asleep, wake up feeling unrefreshed despite adequate time in bed, experience excessive daytime sleepiness, or if your partner notices you snoring loudly or gasping during sleep, it's time to talk to a healthcare provider.
          </p>

          <p className="mb-6">
            Sleep disorders like sleep apnea, insomnia, restless leg syndrome, and narcolepsy are common and treatable, but they require professional diagnosis and management. Don't dismiss sleep problems as just "getting older" or "being stressed"—they deserve the same attention as any other health concern.
          </p>

          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Bottom Line: Sleep Is Healthcare
          </h2>

          <p className="mb-6">
            In a culture that often glorifies busyness and productivity at the expense of rest, it's time to reclaim sleep as the health priority it truly is. Quality sleep isn't selfish or lazy—it's essential healthcare. When you prioritize sleep, you're investing in your immune function, your cardiovascular health, your mental clarity, your emotional resilience, and your overall quality of life.
          </p>

          <p className="mb-6">
            Start tonight. Choose one or two strategies from this article and commit to them for the next two weeks. Pay attention to how you feel. Better sleep won't solve all of life's challenges, but it will give you the energy, clarity, and resilience to face them more effectively.
          </p>

          <p className="mb-6">
            If you're struggling with sleep issues in Birmingham, AL, our team at Guardian Primary Care is here to help. We take a comprehensive approach to health that includes addressing sleep quality as a cornerstone of wellness. Don't wait until poor sleep takes a serious toll on your health—reach out today and let's work together to help you get the restorative rest you deserve.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
              Written by the Guardian Primary Care Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based care to patients in Birmingham, AL.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Stress Management Techniques for Better Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn practical strategies to reduce stress and improve your overall well-being.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Nutrition Basics: Building a Healthier Diet
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover evidence-based nutritional guidance to fuel your body and support wellness.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventive Care: The Foundation of Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understanding how preventive care helps catch health issues before they become serious.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you achieve better health and wellness.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}