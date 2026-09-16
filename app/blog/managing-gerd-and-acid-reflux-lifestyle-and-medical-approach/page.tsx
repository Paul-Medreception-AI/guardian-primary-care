import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing GERD and Acid Reflux: Lifestyle and Medical Approaches | Guardian Primary Care',
  description: 'Expert guidance on managing GERD and acid reflux through lifestyle modifications and medical treatments. Learn evidence-based approaches from Birmingham\'s trusted primary care team.',
  keywords: 'GERD, acid reflux, heartburn, digestive health, lifestyle changes, Birmingham AL, primary care',
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
            Managing GERD and Acid Reflux: Lifestyle and Medical Approaches
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
            That burning sensation in your chest after a meal. The bitter taste that wakes you up at night. The constant throat clearing that becomes second nature. If these experiences sound familiar, you're not alone. Gastroesophageal reflux disease (GERD) and acid reflux affect millions of Americans, impacting not just physical comfort but quality of life, sleep, and even social activities. The good news? With the right combination of lifestyle modifications and medical approaches, most people find significant relief.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Understanding how to manage GERD effectively requires looking at both the underlying mechanisms and the practical strategies that make a real difference in daily life. Whether you're experiencing occasional heartburn or dealing with chronic symptoms, this comprehensive guide will help you take control of your digestive health.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding GERD and Acid Reflux
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Acid reflux occurs when stomach acid flows backward into the esophagus, the tube connecting your mouth to your stomach. This happens when the lower esophageal sphincter (LES)—a ring of muscle that acts as a valve between the esophagus and stomach—weakens or relaxes inappropriately. When this occurs occasionally, it's simply called acid reflux or heartburn. When it happens frequently (more than twice a week), it's diagnosed as GERD.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            The esophagus isn't designed to handle stomach acid, which is why reflux causes that characteristic burning sensation. Over time, repeated exposure can lead to inflammation, damage to the esophageal lining, and complications such as esophagitis, strictures, or Barrett's esophagus—a precancerous condition that requires monitoring.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Common symptoms include heartburn, regurgitation of food or sour liquid, difficulty swallowing, chest pain, chronic cough, disrupted sleep, hoarseness, and the sensation of a lump in the throat. Some people experience "silent reflux" with minimal heartburn but significant throat and respiratory symptoms.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Lifestyle Modifications That Make a Difference
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For many people, lifestyle changes form the foundation of GERD management. These modifications address the root causes of reflux and can significantly reduce symptoms without medication—or allow you to use less medication for better control.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Dietary Adjustments</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Avoid trigger foods:</strong> Common culprits include citrus fruits, tomatoes, chocolate, mint, spicy foods, garlic, onions, and high-fat foods
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Limit acidic beverages:</strong> Coffee (even decaf), alcohol, carbonated drinks, and citrus juices can worsen symptoms
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Eat smaller, more frequent meals:</strong> Large meals increase stomach pressure and reflux risk
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Time your meals wisely:</strong> Finish eating at least 3 hours before lying down to allow gravity to help keep acid down
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Positional and Sleep Strategies</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Elevate the head of your bed:</strong> Use blocks or a wedge to raise the entire head of the bed 6-8 inches (not just pillows, which can worsen reflux by bending the stomach)
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Sleep on your left side:</strong> This position helps keep the stomach below the esophagus and reduces nighttime reflux
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Avoid tight clothing:</strong> Belts, waistbands, and shapewear that compress the abdomen can increase reflux
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Weight and Lifestyle Factors</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Achieve and maintain a healthy weight:</strong> Even modest weight loss can significantly reduce reflux symptoms
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Quit smoking:</strong> Smoking weakens the LES and increases acid production
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed text-base">
                  <strong>Manage stress:</strong> Stress doesn't directly cause reflux but can worsen symptoms and affect eating habits
                </p>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
              "For many patients, combining even two or three lifestyle modifications—such as elevating the bed, avoiding late meals, and eliminating trigger foods—can reduce symptoms by 50% or more within just a few weeks."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Medical Treatment Options
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When lifestyle changes alone aren't sufficient, several medication classes can help manage GERD effectively. The choice depends on symptom severity, frequency, and individual response.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Over-the-Counter Options</h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Antacids</strong> (Tums, Rolaids) provide quick but short-lived relief by neutralizing stomach acid. They're best for occasional symptoms and work within minutes but only last 30-60 minutes. They don't heal esophageal damage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>H2 blockers</strong> (famotidine/Pepcid, cimetidine/Tagamet) reduce acid production and provide longer relief than antacids—typically 6-12 hours. They take 30-60 minutes to work and are effective for mild to moderate symptoms, especially nighttime reflux.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Proton pump inhibitors (PPIs)</strong> (omeprazole/Prilosec, esomeprazole/Nexium) are the most powerful acid reducers available over-the-counter. They block acid production at the cellular level and provide 24-hour relief. PPIs are most effective when taken 30-60 minutes before breakfast and require 1-4 days to reach full effect. They're designed for short-term use (14 days) without medical supervision, though your provider may recommend longer courses.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Prescription Treatments</h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            For more severe or persistent GERD, your provider may prescribe higher-dose PPIs, prescription-strength H2 blockers, or prokinetic agents that help the stomach empty faster and strengthen the LES. In cases where medication isn't effective or patients prefer to avoid long-term medication use, surgical options like fundoplication or newer minimally invasive procedures may be considered.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to work with your healthcare provider to find the right approach, as long-term PPI use (beyond a year) requires monitoring for potential side effects including nutrient deficiencies (B12, magnesium, calcium), increased fracture risk, and rare kidney concerns.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to See Your Doctor
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While occasional heartburn is common and manageable at home, certain symptoms warrant medical evaluation:
          </p>

          <div className="space-y-2 mb-6 ml-6">
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Symptoms occurring more than twice a week</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Difficulty swallowing or pain when swallowing</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Unintentional weight loss</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Persistent nausea or vomiting</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Symptoms that don't improve with over-the-counter medication</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Chest pain (always seek immediate care to rule out cardiac causes)</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold">•</span>
              <p className="text-[var(--color-ink)] leading-loose text-base">Black, tarry stools or vomiting blood (seek emergency care)</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your primary care provider can evaluate your symptoms, review your medication list (some drugs worsen reflux), and determine whether additional testing like an upper endoscopy or pH monitoring is needed. Long-standing GERD requires monitoring to check for complications.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating Your Personalized Management Plan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most effective GERD management combines multiple approaches tailored to your specific triggers and lifestyle. Start by keeping a symptom diary for 1-2 weeks, noting what you eat, when symptoms occur, and their severity. This helps identify your personal triggers and patterns.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Implement lifestyle changes gradually—trying to change everything at once can feel overwhelming and unsustainable. Start with the modifications most relevant to your situation. If you have nighttime symptoms, prioritize elevating your bed and avoiding late meals. If daytime heartburn is your main issue, focus on dietary triggers and smaller meals.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Give changes time to work. Lifestyle modifications typically show improvement within 2-4 weeks, while medications may provide relief more quickly but still need time to heal esophageal damage. Work with your healthcare provider to adjust your plan based on response and ensure you're on the right track.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-8">
            Living with GERD doesn't mean living with constant discomfort. With the right combination of lifestyle strategies and medical treatment, most people achieve significant relief and prevent long-term complications. The key is taking a proactive, consistent approach and working with a healthcare provider who understands your goals and concerns.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base font-semibold">
            If you're struggling with acid reflux or GERD symptoms in Birmingham, our team at Guardian Primary Care is here to help. We take the time to understand your unique situation and develop a comprehensive management plan that fits your life. Schedule a consultation today to start feeling better.
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
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Primary Care / DPC. Our team is dedicated to providing evidence-based, compassionate care to the Birmingham community.
              </p>
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Importance of Annual Wellness Visits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Why preventive care matters and what to expect during your comprehensive physical exam.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Chronic Disease</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding and Managing Type 2 Diabetes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Evidence-based strategies for blood sugar control, medication management, and lifestyle optimization.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Heart Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Heart Disease Prevention: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical steps for cardiovascular health, from cholesterol management to exercise recommendations.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you find lasting relief from GERD and acid reflux.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}