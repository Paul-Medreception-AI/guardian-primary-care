import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hormone Changes and Menopause: What to Expect and How to Manage Symptoms | Guardian Primary Care',
  description: 'Understanding menopause and hormone changes in Birmingham, AL. Learn what to expect, recognize symptoms, and discover evidence-based strategies to manage this natural transition with expert guidance.',
  keywords: 'menopause, hormone changes, perimenopause, hot flashes, hormone therapy, Birmingham AL, primary care, womens health',
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
            Women's Health
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Hormone Changes and Menopause: What to Expect and How to Manage Symptoms
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/70">
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
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            For many women, the mention of menopause brings a mixture of uncertainty, concern, and questions. It's a natural biological transition that every woman will experience, yet it remains shrouded in misconceptions and unnecessary silence. Understanding what happens during menopause—and knowing you have options for managing symptoms—can transform this phase from something to dread into an opportunity for renewed health and vitality.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Whether you're beginning to notice changes in your cycle, experiencing your first hot flash, or supporting someone going through this transition, having accurate, evidence-based information makes all the difference. At Guardian Primary Care in Birmingham, AL, we believe that comprehensive, compassionate guidance during menopause is an essential part of primary care.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Menopause?
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Menopause is officially defined as the point when a woman has gone 12 consecutive months without a menstrual period, marking the end of reproductive years. The average age for menopause in the United States is 51, though it can occur anywhere from the mid-40s to late 50s. This transition doesn't happen overnight—it's a gradual process that typically unfolds over several years.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The years leading up to menopause are called perimenopause, and this is when most women begin to notice symptoms. During perimenopause, hormone levels—particularly estrogen and progesterone—begin to fluctuate unpredictably before eventually declining. These hormonal shifts are responsible for the wide range of symptoms women experience.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Symptoms and What Causes Them
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Menopause affects every woman differently, but there are several hallmark symptoms that result from declining estrogen levels. Understanding the "why" behind these symptoms can help normalize the experience and guide effective management strategies.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Hot flashes and night sweats:</strong>
                <span className="text-[var(--color-ink)]"> Sudden waves of heat, often accompanied by sweating and flushing, are the most common symptoms. They result from changes in the hypothalamus, the brain's temperature regulation center, which becomes more sensitive as estrogen levels drop.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Sleep disturbances:</strong>
                <span className="text-[var(--color-ink)]"> Beyond night sweats interrupting sleep, hormonal changes can affect sleep architecture, making it harder to fall asleep and stay asleep.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Mood changes:</strong>
                <span className="text-[var(--color-ink)]"> Irritability, anxiety, and mood swings are common. Estrogen influences serotonin and other neurotransmitters that regulate mood.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Vaginal dryness and discomfort:</strong>
                <span className="text-[var(--color-ink)]"> Declining estrogen causes thinning and drying of vaginal tissues, which can lead to discomfort during intercourse and increased urinary symptoms.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Weight changes and metabolism shifts:</strong>
                <span className="text-[var(--color-ink)]"> Many women notice weight gain, particularly around the abdomen, as metabolic rate slows and body composition changes.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Cognitive changes:</strong>
                <span className="text-[var(--color-ink)]"> "Brain fog," difficulty concentrating, and memory lapses are real and frustrating symptoms linked to hormonal fluctuations.</span>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Understanding that your symptoms have a biological cause—and that effective treatments exist—is the first step toward reclaiming your quality of life during this transition."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Treatment Options
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that menopause symptoms are highly treatable. The approach that works best varies from person to person, which is why personalized medical guidance is so valuable.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Hormone Replacement Therapy (HRT):</strong> For many women, hormone therapy remains the most effective treatment for moderate to severe menopause symptoms. Modern HRT uses the lowest effective doses and can be tailored to your specific needs and risk profile. Research shows that for women who begin HRT within 10 years of menopause onset and are under 60, the benefits often outweigh the risks—particularly for quality of life and bone health.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Non-hormonal medications:</strong> For women who cannot or prefer not to use hormone therapy, several FDA-approved non-hormonal options effectively reduce hot flashes and other symptoms. These include certain antidepressants and anti-seizure medications that have been shown to help with vasomotor symptoms.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Vaginal estrogen:</strong> Low-dose vaginal estrogen (creams, tablets, or rings) can dramatically improve vaginal dryness and urinary symptoms with minimal systemic absorption, making it safe for most women even when systemic hormone therapy isn't recommended.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Lifestyle Strategies That Make a Difference
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While medical treatments address the biological aspects of menopause, lifestyle modifications can significantly improve symptoms and long-term health outcomes.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Regular exercise:</strong>
                <span className="text-[var(--color-ink)]"> Both aerobic exercise and strength training help manage weight, improve mood, support bone density, and reduce cardiovascular risk. Aim for at least 150 minutes of moderate activity weekly.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Nutrition adjustments:</strong>
                <span className="text-[var(--color-ink)]"> A diet rich in fruits, vegetables, whole grains, and lean proteins supports overall health. Calcium and vitamin D are especially important for bone health. Limiting caffeine, alcohol, and spicy foods may reduce hot flashes.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Sleep hygiene:</strong>
                <span className="text-[var(--color-ink)]"> Keep your bedroom cool, maintain consistent sleep and wake times, limit screen time before bed, and consider moisture-wicking sleepwear and bedding.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Stress management:</strong>
                <span className="text-[var(--color-ink)]"> Mindfulness, yoga, deep breathing exercises, and other stress-reduction techniques can help manage mood symptoms and may reduce hot flash frequency.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Smoking cessation:</strong>
                <span className="text-[var(--color-ink)]"> Smoking can worsen menopause symptoms and increases risks for osteoporosis and cardiovascular disease.</span>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Long-Term Health Considerations
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond managing immediate symptoms, menopause is an important time to focus on long-term health. The decline in estrogen affects several body systems, making preventive care especially important.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Bone health:</strong> Estrogen plays a protective role in bone density. After menopause, the risk of osteoporosis increases significantly. Bone density screening, adequate calcium and vitamin D intake, weight-bearing exercise, and—when appropriate—medication can help maintain strong bones.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Cardiovascular health:</strong> Heart disease risk increases after menopause. Regular monitoring of blood pressure, cholesterol, and blood sugar becomes crucial. Maintaining a healthy weight, exercising regularly, eating a heart-healthy diet, and managing stress all contribute to cardiovascular wellness.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Cancer screening:</strong> Continue with regular mammograms, Pap smears or HPV tests as recommended, and colon cancer screening. Discuss your individual risk factors with your provider to determine the right screening schedule for you.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Guidance
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You don't have to suffer through menopause symptoms or navigate this transition alone. Seeking professional guidance is appropriate when:
          </p>

          <div className="space-y-3 mb-8 pl-6">
            <p className="text-[var(--color-ink)] leading-loose text-base">• Your symptoms are interfering with daily life, work, or relationships</p>
            <p className="text-[var(--color-ink)] leading-loose text-base">• You're experiencing mood changes that concern you or affect your wellbeing</p>
            <p className="text-[var(--color-ink)] leading-loose text-base">• You're interested in exploring treatment options, including hormone therapy</p>
            <p className="text-[var(--color-ink)] leading-loose text-base">• You have questions about managing long-term health risks</p>
            <p className="text-[var(--color-ink)] leading-loose text-base">• You're experiencing early menopause (before age 40) or symptoms while still having periods</p>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Guardian Primary Care in Birmingham, AL, we provide comprehensive menopause care that addresses both symptom management and long-term wellness. We take time to understand your unique experience, discuss all available options, and create a personalized plan that aligns with your health goals and values.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Menopause is not something to simply endure—it's a transition that, with the right support and strategies, can be navigated with confidence and even embraced as a new chapter of life. You deserve to feel your best, and we're here to help you achieve that.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Primary Care / DPC, dedicated to delivering compassionate, evidence-based care to the Birmingham community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Preventive Care for Women
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Essential health screenings and preventive measures for women at every life stage.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Bone Health and Osteoporosis Prevention
                </h4>
                <p className="text-[var(--color-muted)] text-sm">How to protect your bones and maintain strength as you age.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Managing Stress and Mental Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Practical strategies for emotional health during life transitions.</p>
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate menopause with confidence and personalized care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}