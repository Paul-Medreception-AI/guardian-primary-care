import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prediabetes: Your Opportunity to Prevent Type 2 Diabetes | Guardian Primary Care',
  description: 'Learn how prediabetes is a reversible condition and your chance to prevent type 2 diabetes through lifestyle changes, early detection, and personalized care in Birmingham, AL.',
  openGraph: {
    title: 'Prediabetes: Your Opportunity to Prevent Type 2 Diabetes',
    description: 'Expert guidance on reversing prediabetes and preventing type 2 diabetes through evidence-based lifestyle interventions.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Prediabetes: Your Opportunity to Prevent Type 2 Diabetes
          </h1>

          {/* Meta Info */}
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
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine receiving news that feels like a warning light on your dashboard—not quite an emergency, but definitely something that needs attention. That's what a prediabetes diagnosis can feel like. But here's the empowering truth: prediabetes is not a diagnosis of failure; it's an opportunity, a chance to change your trajectory before type 2 diabetes develops.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            More than 96 million American adults—approximately one in three—have prediabetes, yet over 80% don't know it. If you've recently learned you have prediabetes, you're actually ahead of the curve. You now have the knowledge and the window of opportunity to make meaningful changes that can prevent or delay type 2 diabetes indefinitely.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Prediabetes: What the Numbers Mean
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Prediabetes means your blood sugar levels are higher than normal but not yet high enough to be classified as type 2 diabetes. Think of it as a bridge between normal blood sugar regulation and diabetes—a bridge you don't have to cross.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            The diagnostic criteria include:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
            <ul className="space-y-3 text-[var(--color-ink)]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Fasting blood glucose:</strong> 100-125 mg/dL (normal is below 100)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>HbA1c (hemoglobin A1c):</strong> 5.7%-6.4% (normal is below 5.7%)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Oral glucose tolerance test:</strong> 140-199 mg/dL two hours after drinking a glucose solution</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            These numbers tell us that your body is beginning to struggle with insulin resistance—your cells aren't responding to insulin as effectively as they should, causing sugar to build up in your bloodstream. The good news? This process is often reversible with the right interventions.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Prediabetes Matters: The Stakes Are Real
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Without lifestyle changes, 15-30% of people with prediabetes will develop type 2 diabetes within five years. Type 2 diabetes significantly increases your risk for:
          </p>

          <ul className="space-y-2 text-[var(--color-ink)] leading-loose mb-6 ml-6">
            <li className="list-disc">Heart disease and stroke</li>
            <li className="list-disc">Kidney disease</li>
            <li className="list-disc">Vision problems and blindness</li>
            <li className="list-disc">Nerve damage (neuropathy)</li>
            <li className="list-disc">Poor wound healing and amputations</li>
            <li className="list-disc">Cognitive decline and dementia</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            But here's the encouraging part: studies show that lifestyle interventions can reduce the progression to type 2 diabetes by 58% overall, and by 71% in adults over 60. These aren't small numbers—they represent real lives changed through accessible, achievable actions.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            "Prediabetes is one of the few conditions in medicine where we have a proven roadmap for prevention. The science is clear: modest lifestyle changes deliver dramatic results."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Power of Modest Weight Loss
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            The landmark Diabetes Prevention Program (DPP) study, one of the most influential diabetes research trials ever conducted, found that losing just 5-7% of your body weight can cut your diabetes risk in half. For someone weighing 200 pounds, that's only 10-14 pounds—far less than many people think they need to lose.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            This modest weight loss works by:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Reducing insulin resistance and helping your cells respond better to insulin</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Decreasing inflammation that interferes with blood sugar regulation</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Improving how your pancreas produces insulin</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Lowering blood pressure and cholesterol, reducing cardiovascular risk</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The goal isn't perfection or crash dieting—it's sustainable, gradual change that your body can maintain long-term.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Strategies That Work
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Based on robust clinical research, here are the most effective interventions for reversing prediabetes:
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Physical Activity</h3>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Aim for at least 150 minutes of moderate-intensity activity per week (that's just 30 minutes, five days a week). Walking, swimming, cycling, dancing—choose activities you actually enjoy. Exercise helps your muscles use blood sugar without needing as much insulin.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Nutrition Changes</h3>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            You don't need to follow a restrictive diet. Focus on:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
            <ul className="space-y-3 text-[var(--color-ink)]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Eating more fiber-rich foods (vegetables, fruits, whole grains, legumes)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Choosing lean proteins and healthy fats</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Limiting refined carbohydrates and added sugars</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watching portion sizes without obsessing over counting</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Staying hydrated with water instead of sugary drinks</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Sleep and Stress Management</h3>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Poor sleep and chronic stress both raise cortisol levels, which increases insulin resistance. Aim for 7-9 hours of quality sleep and find stress-reduction techniques that work for you—whether that's meditation, yoga, nature walks, or time with loved ones.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Regular Monitoring</h3>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Work with your healthcare provider to monitor your blood sugar regularly (typically every 3-6 months). This helps you see the tangible results of your efforts and catch any progression early.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When Medication May Help
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            For some people, lifestyle changes alone may not be enough. Metformin, a diabetes medication, has been shown to reduce diabetes risk by 31% in people with prediabetes, particularly those who are younger, have a higher BMI, or have a history of gestational diabetes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Medication is never a replacement for lifestyle changes, but it can be a helpful tool in your prevention toolkit. Your healthcare provider can help determine if medication is right for you based on your individual risk factors and response to lifestyle interventions.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Your Next Steps: Taking Action in Birmingham
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            If you've been diagnosed with prediabetes or have risk factors (family history, overweight, sedentary lifestyle, age over 45, history of gestational diabetes, or PCOS), now is the time to take action.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            At Guardian Primary Care in Birmingham, we specialize in personalized preventive care. Through our direct primary care model, you get the time and attention needed to develop a realistic, sustainable prevention plan. We'll work with you to:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Assess your individual risk factors and baseline health</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Create a personalized nutrition and exercise plan that fits your life</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Monitor your progress with regular follow-ups and lab work</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Provide ongoing support, education, and accountability</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Adjust your plan based on what works for you</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Prediabetes isn't a life sentence—it's a wake-up call and an opportunity. With the right support and evidence-based interventions, you can rewrite your health story. The science is clear, the path is proven, and we're here to walk it with you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base font-semibold">
            Your future health is worth the investment. Let's start today.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based preventive care to the Birmingham community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Your Risk for Heart Disease
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about cardiovascular risk factors and evidence-based strategies for prevention.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Lifestyle</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Science of Sustainable Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Evidence-based approaches to achieving and maintaining a healthy weight long-term.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What Your Lab Results Really Mean
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A comprehensive guide to understanding common blood tests and health markers.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you prevent diabetes and optimize your health.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:gap-3 shadow-lg"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}