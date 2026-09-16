import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Type 2 Diabetes: Lifestyle Changes That Make a Difference | Guardian Primary Care',
  description: 'Discover evidence-based lifestyle strategies for managing type 2 diabetes effectively. Expert guidance from Guardian Primary Care in Birmingham, AL.',
  keywords: 'type 2 diabetes management, diabetes lifestyle changes, diabetes diet, diabetes exercise, blood sugar control, Birmingham primary care',
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
            Managing Type 2 Diabetes: Lifestyle Changes That Make a Difference
          </h1>

          {/* Meta Information */}
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you first hear the words "type 2 diabetes," it can feel overwhelming. Your mind races with questions: What does this mean for my future? Will I need insulin injections? Can I still enjoy the foods I love? Here's the encouraging truth: type 2 diabetes is one of the most manageable chronic conditions, and the lifestyle changes that make the biggest difference are often simpler than you might think.
            </p>
            <p className="mb-6">
              More than 37 million Americans live with diabetes, with type 2 diabetes accounting for approximately 90-95% of all cases. While medication plays an important role for many patients, research consistently shows that lifestyle modifications can be just as powerful—and sometimes even more effective—than pharmaceutical interventions alone. The key is understanding which changes truly matter and how to implement them sustainably in your daily life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Type 2 Diabetes: What's Happening in Your Body
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Type 2 diabetes develops when your body becomes resistant to insulin or doesn't produce enough insulin to maintain normal blood sugar levels. Think of insulin as a key that unlocks your cells to let glucose (sugar) in for energy. When this system doesn't work properly, glucose builds up in your bloodstream instead of fueling your cells.
            </p>
            <p className="mb-6">
              Unlike type 1 diabetes, which is an autoimmune condition typically diagnosed in childhood, type 2 diabetes usually develops gradually over years. It's closely linked to lifestyle factors including diet, physical activity, weight, and stress—which means it's also highly responsive to lifestyle interventions.
            </p>
            <p className="mb-6">
              The good news? Your body has remarkable healing capacity. Even small improvements in your daily habits can lead to measurable changes in blood sugar control, sometimes within just weeks of making changes.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Nutrition: The Foundation of Diabetes Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Food is medicine, especially when it comes to managing type 2 diabetes. But contrary to popular belief, you don't need to follow a restrictive or complicated diet. The most effective eating patterns focus on whole, nutrient-dense foods and balanced portions.
            </p>
            <p className="mb-6">
              Research from the Diabetes Prevention Program showed that dietary changes, combined with modest weight loss, reduced the risk of developing diabetes by 58% in high-risk individuals. For those already diagnosed, the right nutrition strategy can significantly improve blood sugar control and even lead to remission in some cases.
            </p>
          </div>

          {/* Nutrition Tips List */}
          <div className="bg-[var(--color-cream)] rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Key Nutrition Strategies:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Prioritize fiber-rich foods:</strong> Vegetables, legumes, whole grains, and fruits (in moderation) slow glucose absorption and improve blood sugar stability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Include protein at every meal:</strong> Lean meats, fish, eggs, Greek yogurt, and plant proteins help stabilize blood sugar and increase satiety
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Choose healthy fats:</strong> Olive oil, avocados, nuts, and fatty fish support heart health and don't spike blood sugar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Watch portion sizes, not just food types:</strong> Even healthy foods can raise blood sugar if eaten in large quantities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Limit refined carbohydrates and added sugars:</strong> White bread, sugary drinks, and processed snacks cause rapid blood sugar spikes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">
                  <strong>Stay hydrated with water:</strong> Proper hydration helps your kidneys flush excess blood sugar through urine
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Movement: Your Most Powerful Blood Sugar Tool
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Physical activity is perhaps the single most effective lifestyle intervention for type 2 diabetes. When you move your body, your muscles use glucose for energy—lowering your blood sugar without requiring insulin. Even better, regular exercise improves insulin sensitivity, meaning your body uses insulin more effectively over time.
            </p>
            <p className="mb-6">
              A landmark study published in the <em>Journal of the American Medical Association</em> found that 150 minutes of moderate exercise per week (that's just 30 minutes, five days a week) combined with dietary changes reduced diabetes risk by nearly 60%. For those already diagnosed, similar amounts of activity can lead to significantly improved A1C levels.
            </p>
            <p className="mb-6">
              You don't need a gym membership or expensive equipment. Walking is one of the most effective and accessible forms of exercise for diabetes management. Other excellent options include swimming, cycling, dancing, gardening, or any activity that gets you moving consistently.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The best exercise for diabetes management is the one you'll actually do consistently. Start where you are, move in ways you enjoy, and build gradually."
          </blockquote>

          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Aim to combine both aerobic exercise (walking, swimming, cycling) and resistance training (bodyweight exercises, resistance bands, or weights). The combination provides the greatest benefit for blood sugar control, weight management, and overall health.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Weight Management: Small Changes, Big Impact
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're carrying extra weight, you've probably heard that losing weight can improve diabetes management. What you might not know is how little weight loss it takes to see significant benefits. Research shows that losing just 5-10% of your body weight can lead to meaningful improvements in blood sugar control, blood pressure, and cholesterol levels.
            </p>
            <p className="mb-6">
              For someone weighing 200 pounds, that's just 10-20 pounds—a realistic and achievable goal. More importantly, the focus should be on sustainable changes rather than rapid weight loss. Crash diets rarely work long-term and can actually make diabetes management more difficult.
            </p>
            <p className="mb-6">
              The dietary and exercise changes we've already discussed naturally support healthy weight management. When combined with consistent sleep, stress management, and regular monitoring, they create a powerful foundation for both weight loss and diabetes control.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Sleep and Stress: The Often-Overlooked Factors
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your blood sugar doesn't only respond to what you eat and how much you move—it's also profoundly affected by how well you sleep and how you manage stress. Both sleep deprivation and chronic stress trigger hormonal changes that raise blood sugar and increase insulin resistance.
            </p>
            <p className="mb-6">
              Studies have shown that sleeping less than six hours per night is associated with poorer blood sugar control and increased diabetes risk. Similarly, chronic stress elevates cortisol levels, which directly raises blood glucose and makes weight management more difficult.
            </p>
          </div>

          {/* Sleep & Stress Tips */}
          <div className="bg-[var(--color-cream)] rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Strategies for Better Sleep and Stress Management:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Aim for 7-9 hours of sleep per night on a consistent schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Create a relaxing bedtime routine to signal your body it's time to wind down</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Practice stress-reduction techniques like deep breathing, meditation, or gentle yoga</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Limit caffeine and screen time in the evening hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Build a support system—connect with friends, family, or support groups</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Consider professional support if stress or anxiety feel overwhelming</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Monitoring and Medical Partnership: Staying on Track
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While lifestyle changes form the foundation of diabetes management, regular monitoring and ongoing medical support are equally essential. Checking your blood sugar helps you understand how different foods, activities, and stressors affect your levels. Over time, this data empowers you to make informed decisions and fine-tune your approach.
            </p>
            <p className="mb-6">
              Regular check-ins with your healthcare provider ensure that your treatment plan evolves with your needs. Your doctor can track your A1C levels (a measure of average blood sugar over three months), screen for complications, adjust medications when necessary, and provide personalized guidance based on your unique situation.
            </p>
            <p className="mb-6">
              In a direct primary care model, this ongoing partnership becomes even more accessible. Rather than rushed appointments every few months, you have the time and support to discuss challenges, celebrate successes, and make sustainable adjustments to your care plan.
            </p>
          </div>

          {/* Closing Section */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking the First Step Forward
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Managing type 2 diabetes through lifestyle changes isn't about perfection—it's about progress. Start with one or two changes that feel manageable. Maybe that's adding a 15-minute walk after dinner, swapping sugary drinks for water, or committing to seven hours of sleep each night. As these habits become routine, build on them gradually.
            </p>
            <p className="mb-6">
              Remember, you don't have to navigate this journey alone. The right medical partner can provide guidance, accountability, and support as you work toward better health. Whether you're newly diagnosed or have been managing diabetes for years, it's never too late to make changes that improve your quality of life and reduce your risk of complications.
            </p>
            <p className="mb-6">
              At Guardian Primary Care, we specialize in helping patients with chronic conditions like type 2 diabetes develop personalized, sustainable care plans. Our approach focuses on the whole person—not just blood sugar numbers—and we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based care to patients in Birmingham, AL.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Heart Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding High Blood Pressure: Prevention and Management</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn evidence-based strategies for controlling hypertension and protecting your cardiovascular health.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Nutrition</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Mediterranean Diet: A Heart-Healthy Eating Pattern</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover how this delicious, science-backed eating pattern supports metabolic health and longevity.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Lifestyle</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Sustainable Exercise Habits That Stick</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Practical strategies for making physical activity a consistent part of your daily routine.</p>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you manage your diabetes with personalized, compassionate care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}