import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blood Work Basics: Understanding Your Lab Results | Guardian Primary Care',
  description: 'Learn how to read and understand your blood work results. Expert guidance from Guardian Primary Care in Birmingham, AL on common lab tests and what they mean for your health.',
  openGraph: {
    title: 'Blood Work Basics: Understanding Your Lab Results',
    description: 'Learn how to read and understand your blood work results. Expert guidance from Guardian Primary Care in Birmingham, AL.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
  }
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Blood Work Basics: Understanding Your Lab Results
          </h1>

          {/* Meta Info */}
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
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              You sit in the exam room, clutching a printout filled with numbers, acronyms, and ranges. Your doctor mentioned everything looks "mostly fine," but you're left wondering: What do these numbers actually mean? Is that slightly high cholesterol something to worry about? Why is one result flagged in bold?
            </p>
            <p className="mb-6">
              If you've ever felt overwhelmed by your lab results, you're not alone. Blood work is one of the most powerful tools in modern medicine, offering a window into your body's inner workings. Yet for many patients, understanding these results feels like deciphering a foreign language. At Guardian Primary Care in Birmingham, AL, we believe that informed patients are empowered patients—and that starts with understanding what your blood work is telling you.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Blood Work and Why Does It Matter?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Blood work, or laboratory testing, involves analyzing a sample of your blood to measure various substances, cells, and chemicals. These tests provide critical information about your organ function, nutrient levels, immune system health, and potential disease markers—often before you experience any symptoms.
            </p>
            <p className="mb-4">
              Think of blood work as preventive maintenance for your body. Just as you wouldn't wait for your car's engine to fail before checking the oil, you shouldn't wait for serious symptoms to assess your health. Regular blood tests can catch problems early when they're most treatable, from prediabetes and thyroid disorders to vitamin deficiencies and cholesterol imbalances.
            </p>
            <p className="mb-4">
              The most common types of blood work include the Complete Blood Count (CBC), which measures your red and white blood cells and platelets; the Comprehensive Metabolic Panel (CMP), which evaluates kidney and liver function, blood sugar, and electrolytes; and the lipid panel, which assesses your cholesterol levels. Depending on your age, symptoms, and risk factors, your provider may order additional specialized tests.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Decoding Common Blood Tests
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Understanding the most frequently ordered tests can help you make sense of your results and have more productive conversations with your healthcare provider.
            </p>
            <p className="mb-4">
              <strong>Complete Blood Count (CBC):</strong> This foundational test measures three main types of blood cells. Red blood cells carry oxygen throughout your body—low levels may indicate anemia, causing fatigue and weakness. White blood cells fight infection; abnormal counts can signal immune system problems or infection. Platelets help your blood clot; too few may cause excessive bleeding, while too many can increase clotting risk.
            </p>
            <p className="mb-4">
              <strong>Comprehensive Metabolic Panel (CMP):</strong> This panel provides a comprehensive overview of your metabolic health. Glucose levels reveal your blood sugar control and diabetes risk. Kidney markers (creatinine and BUN) show how well your kidneys filter waste. Liver enzymes (ALT and AST) indicate liver health and function. Electrolytes (sodium, potassium, chloride) maintain fluid balance and nerve function.
            </p>
            <p className="mb-4">
              <strong>Lipid Panel:</strong> This cholesterol screening is crucial for heart health. Total cholesterol gives an overall picture, but the details matter more. LDL cholesterol ("bad" cholesterol) can build up in arteries, increasing heart disease risk. HDL cholesterol ("good" cholesterol) helps remove LDL from your bloodstream. Triglycerides, another type of fat in your blood, contribute to arterial plaque when elevated.
            </p>
            <p className="mb-4">
              <strong>Thyroid Tests:</strong> The thyroid-stimulating hormone (TSH) test evaluates thyroid function, which regulates metabolism, energy, and mood. An elevated TSH often indicates hypothyroidism (underactive thyroid), while low TSH may suggest hyperthyroidism (overactive thyroid).
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Lab results aren't just numbers—they're a conversation between your body and your healthcare team. Understanding them empowers you to take charge of your health."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Reference Ranges and Flags
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Every lab result comes with a reference range—the typical values found in healthy people. These ranges are established through population studies and vary slightly between laboratories. Results outside the reference range are often flagged with "H" (high) or "L" (low) to catch your attention.
            </p>
            <p className="mb-4">
              However, a flagged result doesn't automatically mean something is wrong. Reference ranges represent about 95% of the healthy population, which means 5% of healthy people will naturally fall outside these ranges. Context matters enormously. Your age, gender, medications, time of day, hydration status, and even recent meals can affect results.
            </p>
            <p className="mb-4">
              This is why your healthcare provider's interpretation is essential. They consider your complete clinical picture: your symptoms, medical history, medications, lifestyle factors, and trends over time. A slightly elevated glucose reading after a large breakfast means something very different than a fasting glucose consistently above 100 mg/dL. Similarly, a mildly low iron level in a menstruating woman is far more common and less concerning than the same result in a post-menopausal woman.
            </p>
            <p className="mb-4">
              At Guardian Primary Care, we take the time to explain not just what your results are, but what they mean for you specifically. We look at patterns, consider your unique circumstances, and create a personalized plan rather than treating numbers in isolation.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Affects Your Lab Results?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Numerous factors can influence your blood test results, sometimes leading to misleading readings if not properly considered:
            </p>
            <p className="mb-4">
              <strong>Fasting status:</strong> Many tests, particularly glucose and lipid panels, require fasting for 8-12 hours beforehand. Eating before these tests can significantly elevate results, leading to false concerns about diabetes or cholesterol.
            </p>
            <p className="mb-4">
              <strong>Hydration:</strong> Dehydration can concentrate your blood, making certain substances appear artificially elevated. Conversely, overhydration can dilute results. This particularly affects kidney function tests and electrolyte levels.
            </p>
            <p className="mb-4">
              <strong>Medications and supplements:</strong> Many common medications affect lab values. Biotin supplements can interfere with thyroid tests. Diuretics affect electrolytes. Statins may slightly elevate liver enzymes. Always inform your provider about everything you're taking, including over-the-counter supplements.
            </p>
            <p className="mb-4">
              <strong>Exercise:</strong> Intense exercise shortly before blood work can temporarily elevate certain enzymes and affect hydration status. Plan to skip your workout on test day.
            </p>
            <p className="mb-4">
              <strong>Stress and illness:</strong> Your body's stress response and inflammation from illness can alter many lab values, particularly white blood cell counts and glucose levels.
            </p>
            <p className="mb-4">
              <strong>Time of day:</strong> Some hormones and substances fluctuate throughout the day. Cortisol levels peak in the morning, while other markers vary with your circadian rhythm.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Be Concerned vs. When to Monitor
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Not every abnormal result requires immediate intervention. Healthcare is increasingly recognizing the value of "watchful waiting" for borderline or mildly abnormal results. Here's a general framework, though your provider's specific guidance should always take precedence:
            </p>
            <p className="mb-4">
              <strong>Results requiring prompt attention:</strong> Severely abnormal glucose levels suggesting diabetes crisis; very high potassium that could affect heart rhythm; extremely low hemoglobin indicating significant anemia; markedly elevated liver enzymes suggesting acute liver injury; abnormal kidney function that's rapidly worsening.
            </p>
            <p className="mb-4">
              <strong>Results warranting follow-up testing:</strong> Mildly elevated cholesterol in someone with family history; slightly abnormal thyroid levels with symptoms; borderline anemia that could be dietary; modestly elevated liver enzymes in someone taking new medication.
            </p>
            <p className="mb-4">
              <strong>Results to monitor over time:</strong> Fasting glucose in the "prediabetic" range; gradually declining vitamin D levels; slightly low iron without symptoms; mildly elevated inflammatory markers.
            </p>
            <p className="mb-4">
              The key is establishing a relationship with a provider who knows your baseline, understands your health goals, and can track trends over time. In direct primary care models like ours, this longitudinal relationship enables truly personalized interpretation of your lab work.
            </p>
          </div>

          {/* Section 6 - Practical Tips */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            How to Prepare for Blood Work and Get Accurate Results
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Taking a few simple steps can ensure your lab results accurately reflect your health:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Follow fasting instructions carefully.</strong> If fasting is required, stick to water only for the specified period. Black coffee is sometimes acceptable—ask your provider.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Stay well-hydrated.</strong> Drink plenty of water the day before and morning of your test (unless told otherwise). This makes blood draws easier and ensures accurate results.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Take medications as prescribed.</strong> Unless specifically instructed to skip them, continue your regular medications. Stopping prescriptions can be dangerous and may affect results.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Avoid intense exercise 24 hours before.</strong> Stick to light activity or rest to prevent temporary enzyme elevations.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Schedule morning appointments when possible.</strong> Many reference ranges are based on morning values, and fasting overnight is easier than fasting all day.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Keep a record of your results.</strong> Request copies of your lab work and maintain a personal health file. This helps you and future providers see trends over time.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Ask questions.</strong> If you don't understand something about your results, speak up. There are no silly questions when it comes to your health.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              Blood work is a powerful tool for understanding and protecting your health, but numbers alone don't tell the whole story. The true value comes from having a healthcare partner who takes the time to explain your results in context, answer your questions, and work with you to create a plan that makes sense for your life.
            </p>
            <p className="mb-4">
              At Guardian Primary Care in Birmingham, AL, we believe in transparent, unhurried care that puts you at the center. Our direct primary care model means we have time to review your lab work thoroughly, explain what each result means, and develop personalized strategies to optimize your health. Whether you're managing a chronic condition, focusing on prevention, or simply seeking to understand your body better, we're here to guide you every step of the way.
            </p>
            <p>
              Ready to take control of your health with a team that truly listens? Contact us today to learn how our approach to primary care can help you feel confident, informed, and empowered.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, accessible healthcare to the Birmingham community.
              </div>
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
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Prevention</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Heart Health 101: Small Steps, Big Impact
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover evidence-based strategies to protect your cardiovascular health and reduce your risk of heart disease.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how proactive management and partnership with your care team can improve outcomes for chronic conditions.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What Is Direct Primary Care?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore how the DPC model transforms healthcare by prioritizing time, accessibility, and personalized attention.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you understand your health and achieve your wellness goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </main>
  )
}