import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Seasonal Allergies: Beyond Over-the-Counter Medications | Guardian Primary Care',
  description: 'Discover evidence-based strategies for managing seasonal allergies beyond OTC medications. Learn about environmental controls, immunotherapy, and when to seek professional help in Birmingham, AL.',
  keywords: 'seasonal allergies, allergy management, immunotherapy, allergic rhinitis, Birmingham AL, primary care',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Managing Seasonal Allergies: Beyond Over-the-Counter Medications
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
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
              The familiar pattern begins each spring and fall in Birmingham: itchy eyes, endless sneezing, nasal congestion that won't quit. You reach for the antihistamine bottle again, hoping for relief, but wonder if there's more you could be doing. For millions of Americans living with seasonal allergies, over-the-counter medications are just the beginning of effective management—not the complete solution.
            </p>
            <p className="mb-6">
              While antihistamines and decongestants certainly have their place, a comprehensive approach to seasonal allergies addresses the root causes, minimizes exposure, and leverages evidence-based treatments that can provide lasting relief. Let's explore the strategies that go beyond the pharmacy shelf to help you reclaim your quality of life during allergy season.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Seasonal Allergies: More Than Just a Nuisance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Seasonal allergic rhinitis affects approximately 60 million people in the United States each year. When pollen from trees, grasses, or weeds enters your respiratory system, your immune system mistakenly identifies these harmless substances as threats, triggering the release of histamine and other inflammatory compounds.
            </p>
            <p className="mb-6">
              The impact extends far beyond a runny nose. Research shows that uncontrolled seasonal allergies can disrupt sleep quality, impair cognitive function, decrease work productivity, and significantly reduce overall quality of life. Children with untreated allergies often struggle academically, while adults may find their professional and personal lives affected by persistent symptoms.
            </p>
            <p className="mb-6">
              Understanding that seasonal allergies represent a legitimate medical condition—not just an inconvenience to be tolerated—is the first step toward comprehensive management.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Environmental Control: Your First Line of Defense
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before reaching for medication, consider how you can reduce your exposure to allergens. Environmental controls may seem simple, but they form the foundation of effective allergy management and can significantly reduce your need for medication.
            </p>
            
            <div className="my-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Evidence-Based Environmental Strategies:</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Monitor pollen counts:</strong> Check local forecasts and plan outdoor activities when counts are lowest (typically after rain or in the evening)</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Create an allergen-free bedroom:</strong> Use HEPA air purifiers, keep windows closed during high pollen days, and wash bedding weekly in hot water</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Practice "pollen hygiene":</strong> Shower and change clothes after being outdoors, especially before bed, to remove pollen from skin and hair</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Optimize indoor air quality:</strong> Replace HVAC filters regularly with MERV 11-13 rated filters designed to capture allergens</p>
                </div>
                <div className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Strategic landscaping:</strong> If possible, avoid planting high-pollen trees and grasses near your home</p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              Studies demonstrate that consistent environmental controls can reduce allergy symptoms by 30-50% without any medication—making these strategies a powerful component of comprehensive care.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Effective allergy management isn't about finding a single solution—it's about creating a personalized, multi-layered approach that addresses your unique triggers and symptoms."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Nasal Saline Irrigation: Simple but Powerful
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most underutilized yet evidence-supported treatments for seasonal allergies is nasal saline irrigation. Using a neti pot, squeeze bottle, or saline spray to rinse your nasal passages physically removes allergens, mucus, and inflammatory mediators before they can trigger symptoms.
            </p>
            <p className="mb-6">
              Multiple clinical studies have shown that regular nasal irrigation can reduce allergy symptoms, decrease the need for antihistamines, and improve overall quality of life. The technique is safe for both adults and children when performed correctly with sterile or distilled water.
            </p>
            <p className="mb-6">
              For optimal results, use nasal irrigation once or twice daily during allergy season, especially after outdoor exposure. This simple practice can be as effective as some medications, with virtually no side effects when done properly.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Prescription Options: When OTC Isn't Enough
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If environmental controls and over-the-counter medications aren't providing adequate relief, several prescription options can significantly improve your symptoms:
            </p>
            
            <p className="mb-4"><strong>Prescription Nasal Corticosteroids:</strong></p>
            <p className="mb-6">
              Considered the gold standard for moderate to severe allergic rhinitis, prescription-strength nasal steroid sprays (such as fluticasone or mometasone) reduce inflammation more effectively than antihistamines alone. Unlike decongestant sprays, they're safe for long-term use and address the underlying inflammation rather than just treating symptoms.
            </p>

            <p className="mb-4"><strong>Leukotriene Receptor Antagonists:</strong></p>
            <p className="mb-6">
              Medications like montelukast (Singulair) block inflammatory compounds called leukotrienes. They're particularly helpful for patients with both allergies and asthma, offering a complementary mechanism of action to antihistamines.
            </p>

            <p className="mb-4"><strong>Prescription Antihistamines and Combination Therapies:</strong></p>
            <p className="mb-6">
              Prescription antihistamines may offer improved effectiveness or different formulations than OTC versions. Some prescription options combine antihistamines with decongestants or corticosteroids for enhanced relief.
            </p>

            <p className="mb-6">
              Working with your primary care provider allows for personalized medication selection based on your specific symptom pattern, medical history, and treatment goals.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Immunotherapy: Addressing the Root Cause
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For patients with significant seasonal allergies that don't respond adequately to medications and environmental controls, allergen immunotherapy offers the possibility of long-term relief by actually modifying your immune system's response to allergens.
            </p>
            
            <p className="mb-4"><strong>Allergy Shots (Subcutaneous Immunotherapy):</strong></p>
            <p className="mb-6">
              Traditional allergy shots involve regular injections of gradually increasing doses of allergen extracts. While they require a time commitment—typically weekly injections for several months, then monthly maintenance—studies show they can reduce symptoms by 60-80% and provide benefits that last years after treatment ends.
            </p>

            <p className="mb-4"><strong>Sublingual Immunotherapy (Allergy Tablets):</strong></p>
            <p className="mb-6">
              FDA-approved sublingual tablets dissolve under your tongue, offering a convenient alternative to shots for certain allergens (ragweed, grass, and dust mites). While they're administered at home, they still require medical supervision and a similar long-term commitment.
            </p>

            <p className="mb-6">
              Immunotherapy isn't right for everyone, but for patients with severe symptoms, multiple allergen sensitivities, or inadequate response to medications, it represents the only treatment that can fundamentally change how your body responds to allergens.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Comprehensive Primary Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Managing seasonal allergies effectively requires more than just trying different medications. Your primary care provider can help you:
            </p>

            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Distinguish between allergies and other conditions (such as chronic sinusitis or non-allergic rhinitis) that may require different treatments</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Develop a personalized treatment plan that considers your symptom severity, lifestyle, preferences, and other health conditions</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Coordinate care with allergists if specialized testing or immunotherapy is needed</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Monitor for complications such as sinus infections or asthma exacerbations</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Adjust your treatment plan over time as your needs change or new therapies become available</p>
              </div>
            </div>

            <p className="mb-6">
              In a direct primary care model, you have the time and access to work closely with your provider, fine-tuning your approach throughout allergy season and developing preventive strategies for the future.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Seasonal allergies don't have to derail your spring and fall seasons. While over-the-counter medications can provide relief for mild symptoms, a comprehensive approach that combines environmental controls, nasal irrigation, prescription therapies, and—when appropriate—immunotherapy offers the best chance for meaningful, lasting improvement.
            </p>
            <p className="mb-6">
              If you're struggling with seasonal allergies despite over-the-counter treatments, or if your symptoms are affecting your quality of life, work, or sleep, it's time to explore a more comprehensive approach. Our team at Guardian Primary Care in Birmingham is here to help you develop a personalized allergy management plan that goes beyond the pharmacy shelf to address your unique needs and goals.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based care to patients in Birmingham, AL.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Asthma Management in Adults
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how to control asthma symptoms and improve your breathing with comprehensive treatment strategies.
              </p>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                The Importance of Preventive Care
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover how regular preventive care can help you stay healthy and catch potential issues early.
              </p>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                Managing Chronic Conditions with Primary Care
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how ongoing primary care support can help you effectively manage chronic health conditions.
              </p>
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3"
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