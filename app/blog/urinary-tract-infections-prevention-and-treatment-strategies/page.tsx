import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urinary Tract Infections: Prevention and Treatment Strategies | Guardian Primary Care',
  description: 'Learn evidence-based strategies for preventing and treating urinary tract infections. Expert guidance from Guardian Primary Care in Birmingham, AL.',
  openGraph: {
    title: 'Urinary Tract Infections: Prevention and Treatment Strategies',
    description: 'Learn evidence-based strategies for preventing and treating urinary tract infections. Expert guidance from Guardian Primary Care in Birmingham, AL.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            Urinary Tract Infections: Prevention and Treatment Strategies
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              That familiar burning sensation during urination. The constant urge to go, even when your bladder is empty. The uncomfortable pressure in your lower abdomen. If you've experienced a urinary tract infection (UTI), you know how disruptive and painful it can be. For millions of Americans each year, UTIs are more than just an inconvenience—they're a recurring health concern that impacts quality of life, work productivity, and overall wellbeing.
            </p>
            <p className="mb-6">
              The good news? While UTIs are incredibly common, they're also highly preventable and treatable when you understand the underlying causes and implement evidence-based strategies. Whether you're dealing with your first UTI or you're tired of recurring infections, this comprehensive guide will help you understand what's happening in your body and what you can do about it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Urinary Tract Infections
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A urinary tract infection occurs when bacteria—most commonly E. coli from the digestive tract—enter the urinary system and multiply. The infection can affect different parts of your urinary tract, including the bladder (cystitis), urethra (urethritis), or kidneys (pyelonephritis). While UTIs can occur in anyone, women are significantly more susceptible due to anatomical differences, with shorter urethras that make bacterial travel to the bladder easier.
            </p>
            <p className="mb-6">
              Common symptoms include a persistent urge to urinate, burning sensation during urination, cloudy or strong-smelling urine, pelvic pain, and frequent small amounts of urine. More serious infections that reach the kidneys may cause fever, back pain, nausea, and vomiting—requiring immediate medical attention.
            </p>
            <p className="mb-6">
              It's estimated that 50-60% of women will experience at least one UTI in their lifetime, and approximately 20-30% will have recurrent infections. Understanding your risk factors and implementing prevention strategies can significantly reduce your likelihood of developing these uncomfortable infections.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            "Prevention is always better than treatment when it comes to UTIs. Small daily habits can make a tremendous difference in breaking the cycle of recurring infections."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Risk Factors and Who's Most Vulnerable
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Certain factors significantly increase your risk of developing UTIs. Sexual activity is a major contributor, as it can introduce bacteria into the urinary tract. Certain birth control methods, particularly spermicides and diaphragms, can alter vaginal flora and increase infection risk. Menopause brings hormonal changes that affect urinary tract tissues, making infections more likely.
            </p>
            <p className="mb-6">
              Medical conditions such as diabetes, kidney stones, or an enlarged prostate can impair normal urine flow and create environments where bacteria thrive. A suppressed immune system, whether from illness or medications, reduces your body's ability to fight off infection. Catheter use and recent urinary procedures also elevate risk.
            </p>
            <p className="mb-6">
              Pregnancy deserves special mention—hormonal changes and physical pressure from the growing uterus can slow urine flow and increase infection susceptibility. UTIs during pregnancy require prompt treatment, as they can lead to serious complications for both mother and baby.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Evidence-Based Prevention Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Prevention is the cornerstone of UTI management, particularly for those prone to recurrent infections. Research supports several lifestyle modifications that can significantly reduce your risk:
            </p>
            
            <div className="my-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Stay hydrated:</strong> Drinking plenty of water dilutes urine and ensures frequent urination, flushing bacteria from the urinary tract before they can multiply. Aim for at least 6-8 glasses daily.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Urinate frequently:</strong> Don't hold urine for extended periods. Empty your bladder every 2-3 hours and always urinate before and after sexual activity.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Practice proper hygiene:</strong> Always wipe from front to back after using the bathroom to prevent bacterial transfer from the anal area to the urethra.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Choose showers over baths:</strong> Prolonged soaking in bath water, especially with added products, can introduce bacteria into the urinary tract.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Avoid irritating feminine products:</strong> Douches, powders, and scented products can disrupt natural bacterial balance and irritate delicate tissues.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Wear breathable cotton underwear:</strong> Cotton allows air circulation and reduces moisture buildup that bacteria love. Avoid tight-fitting pants and synthetic fabrics.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Consider cranberry supplements:</strong> While cranberry juice alone isn't a cure, cranberry supplements containing proanthocyanidins may help prevent bacteria from adhering to urinary tract walls.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            When to Seek Medical Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While preventive measures are powerful, they don't guarantee you'll never develop a UTI. Knowing when to seek medical care is crucial. Contact your healthcare provider if you experience burning during urination, frequent urgent need to urinate, cloudy or bloody urine, pelvic pain, or strong-smelling urine.
            </p>
            <p className="mb-6">
              Seek immediate medical attention if you develop fever, chills, back pain, nausea, or vomiting—these may indicate a kidney infection requiring urgent treatment. Pregnant women should contact their provider at the first sign of any UTI symptoms.
            </p>
            <p className="mb-6">
              Your healthcare provider will typically perform a urinalysis and urine culture to confirm the infection and identify the specific bacteria causing it. This information guides appropriate antibiotic selection. Most uncomplicated UTIs respond well to a short course of antibiotics, with symptoms improving within a few days.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Managing Recurrent Infections
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you experience two or more UTIs within six months or three or more within a year, you have recurrent UTIs. This frustrating pattern affects approximately 25% of women who've had a UTI. Working with your healthcare provider to identify underlying causes is essential.
            </p>
            <p className="mb-6">
              Management strategies may include low-dose prophylactic antibiotics taken daily or after sexual activity, depending on your pattern of infections. Postmenopausal women may benefit from topical vaginal estrogen to restore healthy tissue. Some patients find success with D-mannose supplements, a sugar that may prevent bacterial adhesion.
            </p>
            <p className="mb-6">
              Your provider may also recommend additional testing to rule out anatomical abnormalities, kidney stones, or other underlying conditions contributing to recurrent infections. A comprehensive approach addressing all risk factors offers the best chance of breaking the cycle.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Taking Control of Your Urinary Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Living with frequent UTIs can feel overwhelming, but you have more control than you might think. By implementing preventive strategies, recognizing symptoms early, and working closely with your healthcare provider, you can significantly reduce infection frequency and severity.
            </p>
            <p className="mb-6">
              Remember that every person's situation is unique. What works for one individual may not work for another, which is why personalized medical guidance is invaluable. Don't hesitate to discuss your concerns, ask questions, and advocate for comprehensive evaluation if you're struggling with recurrent infections.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Birmingham, AL, our team understands the impact UTIs have on your daily life. We take the time to develop individualized prevention and treatment plans that address your specific risk factors and lifestyle. You don't have to accept recurring infections as inevitable—effective solutions are available.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 my-12 text-center">
            <p className="text-[var(--color-ink)] text-lg mb-4">
              Experiencing UTI symptoms or struggling with recurrent infections? Our experienced team is here to help you find lasting relief.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all"
            >
              Schedule a Consultation
            </a>
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
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based care to the Birmingham community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Understanding Women's Health: A Comprehensive Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Essential health information every woman should know about preventive care and wellness.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  The Importance of Preventive Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How regular check-ups and screenings can catch health issues before they become serious.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Antibiotic Stewardship: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understanding the proper use of antibiotics and why it matters for your health and community.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}