import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Heart Disease Prevention: Small Changes That Work',
  description: 'Heart disease is largely preventable. Learn the nutrition, movement, sleep and screening habits that protect your heart, explained in plain language.',
  keywords: 'heart disease prevention, cardiovascular health, heart health Cape Girardeau MO, primary care, lifestyle changes, heart disease risk factors',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Heart Health
          </div>
          
          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight text-center mb-8">
            Heart Disease Prevention: Small Changes That Protect Your Heart
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-heart-disease.jpg"
              alt="An illustration of a red heart with a stethoscope against a blue background, representing cardiovascular screening and prevention"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cardiovascular disease remains the leading cause of death in the United States, and it touches almost every family in some way. But here is the hopeful truth: heart disease is largely preventable. The choices you make today, what you eat for breakfast, how you manage stress, whether you take a walk after dinner, can profoundly shape your heart health for decades to come.
            </p>
            <p className="mb-6">
              You do not need a complete life overhaul or a gym membership to protect your heart. Research consistently shows that small, sustainable changes create the most lasting impact. Whether you're concerned about your family history, recovering from a cardiac event, or simply want to invest in your long-term health, understanding heart disease prevention empowers you to take meaningful action.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Your Heart Disease Risk
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Heart disease encompasses several conditions affecting the heart and blood vessels, with coronary artery disease being the most common. When plaque builds up in your arteries, it restricts blood flow to your heart, potentially leading to chest pain, heart attack, or other serious complications.
            </p>
            <p className="mb-6">
              Several factors increase your risk. Some, like age, sex, and family history, you cannot change. But many risk factors are within your control: high blood pressure, high cholesterol, smoking, obesity, physical inactivity, diabetes, unhealthy diet, and excessive alcohol consumption. The good news? Addressing even one of these factors significantly reduces your overall risk.
            </p>
            <p className="mb-6">
              Across Southeast Missouri, the picture looks much like the rest of the country. What we see in the exam room is that unhurried primary care and clear patient education make a real difference. Understanding your own risk profile is the first step toward meaningful prevention.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Nutrition: The Foundation of Heart Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              What you eat directly affects your heart. The Mediterranean diet, rich in fruits, vegetables, whole grains, legumes, nuts, and olive oil, has been extensively studied and consistently shows cardiovascular benefits. It is not about restriction, it is about an abundance of the right foods.
            </p>
            <p className="mb-6">
              Consider these evidence-based dietary changes:
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Increase fiber intake</strong> to 25-30 grams daily through whole grains, vegetables, and fruits. Fiber helps lower cholesterol and promotes healthy blood pressure.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Choose healthy fats</strong> from sources like salmon, avocados, nuts, and olive oil while limiting saturated fats from red meat and full-fat dairy.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Reduce sodium</strong> to less than 2,300mg daily (ideally 1,500mg if you have high blood pressure). Cook at home more often and read labels carefully.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Add fatty fish</strong> like salmon or mackerel at least twice weekly for omega-3 fatty acids that reduce inflammation and triglycerides.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Limit added sugars.</strong> Excess sugar contributes to obesity, diabetes, and inflammation, all of which raise heart disease risk.
              </p>
            </div>
          </div>

          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p>
              Small swaps make a big difference: whole grain bread instead of white, berries for dessert instead of cake, water or unsweetened tea instead of soda. You do not need perfection, consistency matters most.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-display">
            The best time to start protecting your heart was twenty years ago. The second best time is today. Small changes, consistently applied, create profound health transformations.
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Movement: Exercise as Medicine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Regular physical activity is one of the most powerful heart disease prevention strategies available. The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity weekly, which is just 30 minutes, five days a week.
            </p>
            <p className="mb-6">
              Exercise strengthens your heart muscle, improves circulation, helps maintain healthy weight, lowers blood pressure, increases HDL ("good") cholesterol, and reduces stress. You don't need intense workouts to benefit. Brisk walking, swimming, cycling, dancing, gardening: any activity that elevates your heart rate counts.
            </p>
            <p className="mb-6">
              Start where you are. If you're currently sedentary, begin with 10-minute walks three times daily. Gradually increase duration and intensity as your fitness improves. Find activities you genuinely enjoy; you're far more likely to maintain an exercise habit that feels rewarding rather than punishing.
            </p>
            <p className="mb-6">
              Strength training twice weekly offers additional benefits by building muscle mass, improving metabolism, and supporting healthy bones. You do not need a gym. Bodyweight exercises, resistance bands, or household items work perfectly.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Stress Management and Sleep
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Chronic stress and poor sleep are independent risk factors for heart disease, yet they're often overlooked. When you're stressed, your body releases hormones that increase heart rate, blood pressure, and inflammation. Over time, this takes a serious toll on cardiovascular health.
            </p>
            <p className="mb-6">
              Effective stress management looks different for everyone. Deep breathing exercises, meditation, yoga, spending time in nature, connecting with loved ones, pursuing hobbies: all of these can reduce stress hormones and their impact on your heart. The key is finding strategies that fit your life and practicing them regularly, not just during crisis moments.
            </p>
            <p className="mb-6">
              Sleep is equally critical. Adults need 7-9 hours nightly for optimal heart health. Poor sleep disrupts metabolism, increases blood pressure, and promotes inflammation. If you struggle with sleep, establish a consistent bedtime routine, limit screen time before bed, keep your bedroom cool and dark, and avoid caffeine after noon. If problems persist, discuss them with your primary care provider, because conditions like sleep apnea significantly increase heart disease risk and require treatment.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Smoking, Alcohol, and Substance Use
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you smoke, quitting is the single most impactful action you can take for your heart health. Smoking damages blood vessels, raises blood pressure, reduces oxygen to your heart, and dramatically increases heart attack and stroke risk. The good news? Your risk begins dropping immediately after quitting and continues to decrease over time.
            </p>
            <p className="mb-6">
              Quitting smoking is challenging, but you don't have to do it alone. Medications, nicotine replacement therapy, counseling, and support groups significantly improve success rates. Your primary care provider can create a personalized quit plan and connect you with resources.
            </p>
            <p className="mb-6">
              Regarding alcohol, moderation is key. Excessive drinking raises blood pressure, contributes to weight gain, and increases triglycerides. Current guidelines suggest limiting alcohol to no more than one drink daily for women and two for men, though less is better for heart health. If you don't drink, there's no reason to start.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Regular Monitoring and Medical Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Prevention requires knowing your numbers. Regular check-ups allow your healthcare provider to monitor blood pressure, cholesterol, blood sugar, and body mass index, all key indicators of heart disease risk. Many people have high blood pressure or elevated cholesterol without any symptoms, making regular screening essential.
            </p>
            <p className="mb-6">
              Adults should have blood pressure checked at least annually, cholesterol screened every 4-6 years (or more frequently if risk factors are present), and diabetes screening beginning at age 35 or earlier if overweight or other risk factors exist. Your primary care provider can determine the right screening schedule for your individual situation.
            </p>
            <p className="mb-6">
              If you have existing conditions like diabetes, high blood pressure, or high cholesterol, consistent management is crucial. Take medications as prescribed, attend follow-up appointments, and communicate openly with your care team about any concerns or challenges. At Guardian Primary Care we are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available for patients who prefer transparent, predictable pricing, an option that includes direct access to your provider and your medical records.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 mb-8">
            <p className="mb-6">
              Heart disease prevention isn't about perfection. It's about progress. Each positive choice (the salad you pick over fries, the walk you take instead of scrolling through your phone, the eight hours of sleep you protect, the stress management technique you practice) contributes to a healthier cardiovascular system and a longer, more vibrant life.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, MO, we partner with our patients to create personalized prevention strategies that fit their lives, their goals, and their unique risk factors. If you are ready to take control of your heart health, call us at (573) 200-6143 and we will guide and support you at every step.
            </p>
            <p>
              Your heart has been beating for you since before you were born. It deserves your attention, care, and protection. The small changes you make today can give you many more healthy, active years with the people you love.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-2">
                Written by the Guardian Primary Care Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Primary care in Cape Girardeau, MO, led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog/high-blood-pressure-the-silent-killer-you-can-control" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Chronic Disease</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  High Blood Pressure: The Silent Killer You Can Control
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understanding hypertension and the practical steps that keep it in a healthy range.
                </p>
              </div>
            </a>

            <a href="/blog/nutrition-counseling-how-diet-impacts-chronic-disease-manage" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Nutrition</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Nutrition Counseling: How Diet Impacts Chronic Disease
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How everyday food choices shape blood pressure, cholesterol and long-term health.
                </p>
              </div>
            </a>

            <a href="/blog/understanding-your-cholesterol-numbers-beyond-total-choleste" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Preventive Care</div>
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your Cholesterol Numbers
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What your lipid panel means, and how to improve the numbers that matter.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our care team in Cape Girardeau, MO is here to help you protect your heart with personalized, compassionate care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[var(--color-cream)] hover:shadow-xl"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Call (573) 200-6143
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}