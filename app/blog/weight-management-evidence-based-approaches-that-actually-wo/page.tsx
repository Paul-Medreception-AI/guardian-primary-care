import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weight Management: Evidence-Based Approaches That Actually Work | Guardian Primary Care',
  description: 'Discover proven, science-backed strategies for sustainable weight management. Learn what actually works from the Primary Care experts at Guardian Primary Care in Birmingham, AL.',
  keywords: 'weight management, weight loss, obesity treatment, evidence-based weight loss, sustainable weight management, Birmingham AL, primary care',
  openGraph: {
    title: 'Weight Management: Evidence-Based Approaches That Actually Work',
    description: 'Discover proven, science-backed strategies for sustainable weight management from Guardian Primary Care.',
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
          <div className="text-white/80 text-sm mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Weight Management: Evidence-Based Approaches That Actually Work
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Guardian Primary Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <div className="text-[var(--color-ink)] leading-loose text-base">
          {/* Opening Hook */}
          <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            You've tried the diets. You've counted calories, eliminated food groups, and followed the latest trends. Maybe you've even lost weight—only to gain it back. If this sounds familiar, you're not alone. More than 70% of American adults struggle with weight management, and the confusion around what actually works has never been greater.
          </p>

          <p className="mb-6">
            The truth is, sustainable weight management isn't about the next miracle diet or trendy supplement. It's about understanding the science behind metabolism, behavior, and long-term lifestyle change. At Guardian Primary Care in Birmingham, AL, we take an evidence-based approach that focuses on what research consistently shows actually works—and just as importantly, what doesn't.
          </p>

          <p className="mb-6">
            Let's cut through the noise and explore the strategies that are backed by solid science and proven to create lasting results.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why Most Diets Fail (And What This Tells Us)
          </h2>

          <p className="mb-6">
            Research shows that approximately 80% of people who lose weight regain it within a year. This isn't a failure of willpower—it's a failure of approach. Restrictive diets trigger biological responses that make weight regain almost inevitable: metabolic adaptation slows calorie burning, hunger hormones increase, and satiety signals decrease.
          </p>

          <p className="mb-6">
            The lesson here is clear: any approach that relies on extreme restriction or elimination is doomed to fail. Sustainable weight management requires strategies you can maintain for life, not just for the next 30 days.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Foundations: What the Evidence Actually Shows
          </h2>

          <p className="mb-6">
            Decades of research have identified several core principles that consistently predict successful, long-term weight management:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Moderate calorie deficit without deprivation:</strong> Studies show that modest reductions (300-500 calories per day) are more sustainable than aggressive cuts and lead to better long-term outcomes.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Protein optimization:</strong> Higher protein intake (25-30% of calories) preserves lean muscle mass during weight loss, increases satiety, and slightly boosts metabolic rate.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Regular physical activity:</strong> Exercise alone rarely causes significant weight loss, but it's one of the strongest predictors of maintaining weight loss. Aim for 150-300 minutes of moderate activity weekly.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Behavioral self-monitoring:</strong> People who track their food intake, weight, and activity consistently lose 2-3 times more weight than those who don't.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Sleep and stress management:</strong> Poor sleep and chronic stress both disrupt hunger hormones and increase cravings. Quality sleep (7-9 hours) is essential for weight regulation.</p>
            </div>
          </div>

          <p className="mb-6">
            None of these principles are glamorous or revolutionary—but that's precisely the point. Sustainable weight management is built on consistent application of proven fundamentals, not dramatic interventions.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Sustainable weight management isn't about finding the perfect diet—it's about building habits you can maintain for life."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Role of Medical Support
          </h2>

          <p className="mb-6">
            While lifestyle changes form the foundation, some individuals benefit from additional medical interventions. Modern weight management has evolved beyond the outdated advice to "just eat less and move more."
          </p>

          <p className="mb-6">
            <strong>Comprehensive medical evaluation</strong> can identify underlying factors that affect weight, including thyroid disorders, insulin resistance, polycystic ovary syndrome (PCOS), sleep apnea, and medication side effects. Addressing these root causes can make weight management significantly more achievable.
          </p>

          <p className="mb-6">
            <strong>FDA-approved weight management medications</strong> have come a long way. Modern options like GLP-1 receptor agonists work with your body's natural hunger and satiety signals, helping you feel satisfied with appropriate portion sizes. These aren't "shortcuts"—they're tools that address real biological barriers to weight loss.
          </p>

          <p className="mb-6">
            <strong>Ongoing accountability and support</strong> dramatically improve outcomes. Regular check-ins with a healthcare provider who understands the complexity of weight management provide the structure and encouragement that research shows is critical for long-term success.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Practical Strategies That Work
          </h2>

          <p className="mb-6">
            Translating evidence into daily life requires practical, sustainable strategies. Here's what we recommend to our patients in Birmingham:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Start with protein at every meal:</strong> This simple change increases satiety and preserves muscle mass. Aim for palm-sized portions of lean protein sources.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Fill half your plate with vegetables:</strong> This automatically reduces calorie density while increasing nutrient intake and fiber for satiety.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Move daily, even informally:</strong> While structured exercise is ideal, any increase in daily movement counts. Park farther away, take stairs, walk during phone calls.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Keep a simple food log:</strong> You don't need to count every calorie, but awareness of what and when you eat creates accountability and reveals patterns.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Prioritize sleep as much as diet:</strong> Set a consistent bedtime, create a dark sleeping environment, and aim for 7-9 hours nightly.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-[var(--color-ink)]">Plan for challenges:</strong> Identify your high-risk situations (stress eating, social events, travel) and develop specific strategies for each.</p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Rethinking Success: Beyond the Scale
          </h2>

          <p className="mb-6">
            One of the most important shifts in modern weight management is how we define success. While weight is one metric, it's far from the only one that matters.
          </p>

          <p className="mb-6">
            Research shows that even modest weight loss (5-10% of body weight) produces significant health improvements: better blood sugar control, reduced blood pressure, improved cholesterol levels, decreased joint pain, and enhanced sleep quality. You don't need to reach an "ideal" weight to experience meaningful health benefits.
          </p>

          <p className="mb-6">
            Furthermore, improvements in fitness, energy, mood, and quality of life often precede changes on the scale. If you're feeling better, sleeping better, and moving more easily, that's success—regardless of what the scale says this week.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Seek Professional Support
          </h2>

          <p className="mb-6">
            Weight management is complex, and going it alone isn't necessary—or always advisable. Consider professional support if:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>You've tried multiple approaches without lasting success</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>You have weight-related health conditions like diabetes, high blood pressure, or sleep apnea</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>You suspect underlying medical issues are affecting your weight</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>You're interested in medical therapies like weight management medications</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>You need ongoing accountability and support to stay on track</p>
            </div>
          </div>

          <p className="mb-6">
            At Guardian Primary Care, we understand that weight management isn't one-size-fits-all. Our approach combines medical expertise, evidence-based strategies, and personalized support to help you achieve sustainable results that improve your health and quality of life.
          </p>

          {/* Closing */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-lg mb-6">
              Sustainable weight management is possible—but it requires moving beyond fad diets and quick fixes. By focusing on evidence-based strategies, addressing underlying medical factors, and building habits you can maintain for life, you can achieve meaningful, lasting results.
            </p>
            <p className="text-lg">
              If you're ready to take a different approach to weight management—one grounded in science, personalized to your needs, and supported by experienced healthcare providers—we're here to help. Let's work together to create a plan that actually works for you.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Primary Care / DPC, dedicated to delivering evidence-based, compassionate care to the Birmingham community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Diabetes Prevention and Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn evidence-based strategies for preventing and managing diabetes effectively.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Nutrition</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Truth About Nutrition: Separating Fact from Fiction
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Cut through the confusion with science-backed nutrition guidance that works.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Sleep and Metabolic Health: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how quality sleep impacts weight, metabolism, and overall health.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you achieve your health goals with evidence-based, personalized care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}