import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'COPD: Breathing Easier with Proper Management',
  description: 'How COPD is diagnosed, the treatments that slow it down and the daily habits that help you breathe easier, from Guardian Primary Care in Cape Girardeau, MO.',
  keywords: 'COPD, chronic obstructive pulmonary disease, COPD management, breathing problems, lung disease, Cape Girardeau MO primary care',
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
          <h1 className="font-display text-5xl font-light leading-tight text-center mb-8">
            COPD: Breathing Easier with Proper Management
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-copd-inhaler.jpg"
              alt="A man holding a metered dose inhaler used to manage COPD symptoms"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Every breath we take is a gift we rarely think about, until breathing becomes difficult. For the millions of Americans living with Chronic Obstructive Pulmonary Disease (COPD), each breath can feel like a challenge. But here's the encouraging truth: with proper management, education, and support, people with COPD can breathe easier, stay active, and enjoy a fulfilling quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you or a loved one has been diagnosed with COPD, you&apos;re not alone, and you are not without options. Understanding this condition and taking proactive steps can make all the difference in how you live each day.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            What Is COPD?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Chronic Obstructive Pulmonary Disease (COPD) is an umbrella term for progressive lung diseases that make breathing difficult. The two most common conditions under this umbrella are chronic bronchitis and emphysema. In COPD, the airways become inflamed and narrowed, and the air sacs in the lungs lose their elasticity, making it harder to move air in and out.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            COPD affects millions of Americans, and many more may be living with it undiagnosed. It is one of the leading causes of death in the United States, yet with early detection and comprehensive management, its progression can be slowed significantly.
          </p>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Who Is at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While COPD most commonly develops in people over 40, several risk factors increase your likelihood of developing the disease:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Smoking:</strong> The leading cause of COPD. The large majority of cases are linked to cigarette smoking, including secondhand smoke exposure.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Long-term exposure to lung irritants:</strong> Such as air pollution, chemical fumes, or dust in the workplace.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Genetics:</strong> A small percentage of COPD cases are caused by alpha-1 antitrypsin deficiency, a genetic condition.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>History of childhood respiratory infections:</strong> Can increase susceptibility later in life.</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="font-display text-[var(--color-ink)] text-xl leading-relaxed">
              COPD is not a death sentence. With the right treatment plan and lifestyle adjustments, people living with COPD can stay active and enjoy meaningful lives for many years.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Recognizing the Symptoms
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Early detection is crucial. Many people dismiss early symptoms as "just getting older" or a "smoker's cough." Pay attention to these warning signs:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic cough that produces mucus (often called "smoker's cough")</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Shortness of breath, especially during physical activities</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Wheezing or chest tightness</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Frequent respiratory infections</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fatigue and lack of energy</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unintended weight loss (in advanced stages)</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you experience these symptoms, especially if you have a history of smoking or exposure to lung irritants, schedule an appointment with your primary care provider. Simple tests like spirometry can diagnose COPD and measure lung function.
          </p>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Evidence-Based Treatment Approaches
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            While COPD is a progressive disease with no cure, research shows that comprehensive management can dramatically slow its progression and improve quality of life. Treatment typically includes:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Medications:</strong> Bronchodilators help relax airway muscles, making breathing easier. Inhaled corticosteroids reduce inflammation. Your provider will tailor medications to your specific needs and disease stage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Pulmonary Rehabilitation:</strong> Pulmonary rehabilitation programs, which combine exercise training, education and behavioral support, are shown to improve exercise capacity, reduce symptoms and enhance quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Oxygen Therapy:</strong> For patients with low blood oxygen levels, supplemental oxygen can improve survival and allow for greater activity levels.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <strong>Vaccinations:</strong> Annual flu shots and pneumonia vaccines are crucial, as respiratory infections can trigger dangerous COPD exacerbations.
          </p>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Lifestyle Strategies That Make a Difference
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Beyond medical treatment, daily choices have a profound impact on COPD management:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Quit smoking immediately:</strong> This is the single most important step. Even after years of smoking, quitting slows disease progression. Ask your provider about smoking cessation programs and medications.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Stay active:</strong> Regular physical activity strengthens respiratory muscles and improves endurance. Even gentle walking can help.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Eat a nutritious diet:</strong> Good nutrition supports lung function and overall health. Small, frequent meals may be easier if breathing makes eating difficult.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Avoid lung irritants:</strong> Stay away from secondhand smoke, strong perfumes, dust, and air pollution when possible.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Practice breathing techniques:</strong> Pursed-lip breathing and diaphragmatic breathing can help you manage shortness of breath more effectively.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Manage stress:</strong> Anxiety can worsen breathing difficulties. Relaxation techniques, support groups, and counseling can help.</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            The Importance of Ongoing Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            COPD management works best with a strong partnership between you and your healthcare team. Regular check-ups allow your provider to:
          </p>

          <ul className="space-y-2 mb-6 text-[var(--color-ink)] leading-loose ml-6">
            <li className="list-disc">Monitor lung function and adjust medications as needed</li>
            <li className="list-disc">Catch exacerbations early before they become severe</li>
            <li className="list-disc">Provide education and support for lifestyle changes</li>
            <li className="list-disc">Coordinate care with specialists when necessary</li>
            <li className="list-disc">Address mental health concerns, which commonly accompany chronic illness</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            In Cape Girardeau, Missouri, Guardian Primary Care offers comprehensive COPD management. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available for patients who prefer predictable monthly pricing. Either way the goal is the same: time with your provider, easy access when you have a concern, and care coordinated around your needs.
          </p>

          {/* Closing */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            You Can Breathe Easier
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Living with COPD presents challenges, but it doesn't have to define your life. With proper management, the right support, and a proactive approach, you can maintain your independence, enjoy activities you love, and live well for years to come.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're experiencing symptoms of COPD, don't wait. Early diagnosis and treatment make a significant difference in outcomes. Our care team at Guardian Primary Care is here to provide comprehensive, compassionate care with the time and attention your health requires. Call us at (573) 200-6143 to schedule a visit.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">
              Written by the Guardian Primary Care Team
            </div>
            <div className="text-[var(--color-muted)] text-sm leading-relaxed">
              Primary care for every stage of life in Cape Girardeau, Missouri. Our care team is led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl font-light text-center mb-12 text-[var(--color-ink)]">
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog/asthma-management-controlling-symptoms-for-better-quality-of" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Asthma Management: Controlling Symptoms
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Effective strategies for controlling asthma symptoms and living an active, healthy life.
              </p>
            </a>

            {/* Card 2 */}
            <a href="/blog/flu-vaccines-myths-facts-and-why-you-should-get-one" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Flu Vaccines: Myths, Facts and Why to Get One
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Why an annual flu shot matters when you live with a lung condition, and what to expect.
              </p>
            </a>

            {/* Card 3 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                The Importance of Annual Wellness Exams
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Stay ahead of health issues with regular screenings and preventive care tailored to your needs.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">Our care team is here to help you breathe easier, one step at a time.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule an Appointment
            </a>
            <a href="tel:+15732006143" className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/30">
              Call (573) 200-6143
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer predictable monthly pricing.
          </p>
        </div>
      </section>
    </main>
  )
}