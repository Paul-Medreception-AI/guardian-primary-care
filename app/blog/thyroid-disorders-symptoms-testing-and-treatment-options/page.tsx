import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Thyroid Disorders: Symptoms, Testing and Treatment',
  description: 'Thyroid symptoms, the blood tests that confirm a diagnosis, and treatment options for an underactive or overactive thyroid. Cape Girardeau, Missouri.',
  openGraph: {
    title: 'Thyroid Disorders: Symptoms, Testing, and Treatment Options',
    description: 'Thyroid symptoms, the blood tests that confirm a diagnosis, and treatment options for an underactive or overactive thyroid. Cape Girardeau, Missouri.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
}

export default function ThyroidDisordersArticle() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight mb-8">
            Thyroid Disorders: Symptoms, Testing, and Treatment Options
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
          <div className="relative h-80 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/handshake-care.jpg"
              alt="A clinician in a white coat shaking hands with a patient at the start of an office visit"
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
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Your thyroid, a small, butterfly-shaped gland in your neck, may be tiny, but its impact on your health is enormous. This powerhouse gland controls your metabolism, energy levels, heart rate, body temperature, and even your mood. When it's not working properly, the effects can ripple through every aspect of your life, leaving you feeling exhausted, anxious, or like you're not quite yourself.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Thyroid disease is common, and a large share of the people who have it do not know, because the symptoms are easy to blame on stress, aging or a busy season of life. Understanding thyroid disorders, their symptoms, how they are diagnosed, and what treatment options exist, is the first step toward reclaiming your health and your energy.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Your Thyroid
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The thyroid gland produces two primary hormones, T3 (triiodothyronine) and T4 (thyroxine), that regulate how your body uses energy. Think of these hormones as the body's metabolic thermostat. When functioning optimally, your thyroid maintains a delicate balance. But when it produces too much or too little hormone, that balance is disrupted.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The two most common thyroid disorders are hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid). Women are considerably more likely than men to develop thyroid problems, and the risk rises with age, particularly after 60. However, thyroid disorders can affect anyone at any age, including infants and teenagers.
          </p>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Symptoms
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Thyroid disorder symptoms can be subtle and often mimic other conditions, which is why they're frequently overlooked. The symptoms depend on whether your thyroid is overactive or underactive.
          </p>
          
          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Hypothyroidism (Underactive Thyroid) Symptoms:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Persistent fatigue and low energy, even after adequate sleep</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Unexplained weight gain or difficulty losing weight</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Depression, brain fog, or difficulty concentrating</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Dry skin, brittle nails, and hair loss</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Sensitivity to cold temperatures</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Constipation and slowed digestion</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Heavy or irregular menstrual periods</span>
              </div>
            </div>
          </div>
          
          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Hyperthyroidism (Overactive Thyroid) Symptoms:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Rapid heartbeat or palpitations</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Unexplained weight loss despite increased appetite</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Nervousness, anxiety, or irritability</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Trembling hands or muscle weakness</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Increased sweating and heat sensitivity</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Difficulty sleeping</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Light or missed menstrual periods</span>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="font-display bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
            Thyroid symptoms are easy to write off as stress or aging, which is why they can go unexamined for months or years. The good news is that once a thyroid disorder is identified, it is usually very treatable.
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Diagnostic Testing: Getting Clear Answers
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing symptoms that suggest a thyroid problem, comprehensive testing is essential. At Guardian Primary Care in Cape Girardeau, MO, we take a thorough approach to thyroid evaluation.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The cornerstone of thyroid testing is bloodwork. A complete thyroid panel typically includes:
          </p>
          
          <div className="my-8 space-y-4">
            <div className="bg-[var(--color-cream)] rounded-lg p-5">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">TSH (Thyroid Stimulating Hormone)</h4>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">This pituitary hormone regulates thyroid function. Elevated TSH often indicates hypothyroidism, while low TSH suggests hyperthyroidism.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-lg p-5">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">Free T4 and Free T3</h4>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">These measure the actual thyroid hormones circulating in your bloodstream, providing a more complete picture than TSH alone.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-lg p-5">
              <h4 className="font-semibold text-[var(--color-ink)] mb-2">Thyroid Antibodies</h4>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">Tests for TPO and thyroglobulin antibodies help identify autoimmune thyroid conditions like Hashimoto's thyroiditis or Graves' disease.</p>
            </div>
          </div>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In some cases, imaging studies such as thyroid ultrasound may be recommended to evaluate the gland's structure and detect nodules or other abnormalities. The key is working with a provider who looks beyond a single TSH number and considers your complete clinical picture.
          </p>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment Options: A Personalized Approach
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news about thyroid disorders is that they're highly treatable. The approach depends on your specific diagnosis, symptom severity, and overall health goals.
          </p>
          
          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">For Hypothyroidism:</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Thyroid hormone replacement therapy is the standard treatment. Levothyroxine (synthetic T4) is most commonly prescribed, though some patients benefit from combination T4/T3 therapy or natural desiccated thyroid. Finding the right medication and dose is a personalized process that requires careful monitoring and adjustment. Most patients begin to feel better within a few weeks, with optimal results typically achieved within 3-6 months.
          </p>
          
          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">For Hyperthyroidism:</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Treatment options include anti-thyroid medications that reduce hormone production, radioactive iodine therapy to shrink the thyroid gland, or in some cases, surgical removal of part or all of the thyroid. Beta-blockers may be prescribed to manage symptoms like rapid heartbeat while the underlying condition is being addressed.
          </p>
          
          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-4">Supportive Lifestyle Measures:</h3>
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Regardless of which type of thyroid disorder you have, certain lifestyle factors can support thyroid health and treatment effectiveness:
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Ensure adequate selenium and zinc intake through diet or supplementation</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Manage stress through mindfulness, yoga, or other relaxation techniques</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Prioritize sleep and maintain consistent sleep-wake cycles</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Limit goitrogenic foods (soy, cruciferous vegetables) if you have hypothyroidism</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Engage in regular, moderate exercise appropriate for your condition</span>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Importance of Ongoing Monitoring
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Thyroid management isn't a "set it and forget it" situation. Your thyroid hormone needs can change over time due to aging, weight changes, pregnancy, stress, or other health conditions. Regular follow-up testing, typically every 6-12 months once stable, or more frequently when adjusting treatment, ensures your therapy remains optimized.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This is where an ongoing relationship with one practice pays off. At Guardian Primary Care, you have direct access to your provider and your care team, which makes it easier to report symptoms, ask questions, and follow up when a dose needs adjusting. We are not just treating lab numbers, we are treating you as a whole person, considering how you feel and how thyroid health affects your daily life.
          </p>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Help
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing multiple symptoms of thyroid dysfunction, don't dismiss them as simply "getting older" or "stress." These symptoms significantly impact your quality of life and often indicate an underlying condition that deserves proper evaluation and treatment.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Certain populations are at higher risk and may benefit from thyroid screening even without symptoms:
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Women over 60</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">People with a family history of thyroid disease</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Individuals with other autoimmune conditions</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Pregnant women or those planning pregnancy</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">Anyone with unexplained changes in weight, energy, or mood</span>
            </div>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-8">
            Living with undiagnosed or poorly managed thyroid disease can feel like you're constantly fighting against your own body. The fatigue, weight changes, mood swings, and brain fog can be isolating and frustrating. But here's the empowering truth: effective diagnosis and treatment can restore your energy, stabilize your weight, clear your mind, and help you feel like yourself again.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Guardian Primary Care in Cape Girardeau, MO, we provide thorough thyroid evaluation and personalized treatment. You get time during appointments to describe your symptoms in detail, direct access to your provider when questions come up, and a care team invested in your thyroid health for the long term. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you would rather pay a flat monthly fee. You deserve to feel your best, and we are here to help. Call (573) 200-6143 to schedule.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Guardian Primary Care is a nurse practitioner led practice in Cape Girardeau, Missouri. Preston Holifield, DNP, APRN, FNP-C is nationally certified by the American Academy of Nurse Practitioners and works with a Missouri Licensed Collaborating Physician.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog/blood-work-basics-understanding-your-lab-results" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Blood Work Basics: Understanding Your Lab Results
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">What a thyroid panel and the other common labs measure, and how to read the numbers.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  The Importance of Annual Wellness Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Why preventive care matters and what to expect during your yearly wellness visit.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/managing-anxiety-in-primary-care-when-to-seek-additional-sup" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Anxiety in Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Thyroid problems can mimic anxiety. Learn the symptoms, the options, and when to ask for more support.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you achieve optimal thyroid health and feel your best.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-[var(--color-cream)] hover:shadow-lg hover:scale-105"
          >
            Schedule Your Consultation
          </a>
          <p className="mt-6 text-white/90">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Call{' '}
            <a href="tel:+15732006143" className="underline hover:text-white">(573) 200-6143</a>. Visits are by appointment.
          </p>
        </div>
      </section>

    </main>
  )
}