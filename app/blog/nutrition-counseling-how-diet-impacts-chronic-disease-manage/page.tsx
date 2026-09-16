import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutrition Counseling: How Diet Impacts Chronic Disease Management | Guardian Primary Care',
  description: 'Discover how nutrition counseling and dietary changes can help manage chronic diseases like diabetes, heart disease, and hypertension. Evidence-based guidance from Birmingham\'s trusted primary care team.',
  keywords: 'nutrition counseling, chronic disease management, diet and health, diabetes nutrition, heart healthy diet, Birmingham AL, primary care nutrition',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant, serif'}}>
            Nutrition Counseling: How Diet Impacts Chronic Disease Management
          </h1>

          {/* Meta */}
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine being told you have diabetes, high blood pressure, or heart disease—and then discovering that one of the most powerful tools for managing these conditions isn't found in a prescription bottle, but on your dinner plate. For millions of Americans living with chronic diseases, nutrition counseling offers a pathway to better health, reduced symptoms, and improved quality of life. Yet despite overwhelming evidence that diet plays a central role in disease management, many patients never receive comprehensive nutritional guidance from their healthcare providers.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Guardian Primary Care in Birmingham, AL, we recognize that managing chronic disease requires more than medication—it demands a holistic approach that includes personalized nutrition counseling. Understanding how the foods you eat affect your body can transform your health journey and empower you to take control of your wellbeing.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            The Connection Between Diet and Chronic Disease
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic diseases—including type 2 diabetes, cardiovascular disease, hypertension, and certain cancers—are the leading causes of death and disability in the United States. According to the Centers for Disease Control and Prevention, six in ten Americans live with at least one chronic disease, and four in ten have two or more. While genetics and environmental factors play roles, research consistently shows that diet is one of the most significant modifiable risk factors.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What we eat directly influences inflammation levels, blood sugar regulation, cholesterol profiles, blood pressure, and body weight—all critical factors in chronic disease development and progression. A diet high in processed foods, added sugars, and unhealthy fats can accelerate disease progression, while a nutrient-dense diet rich in whole foods can slow or even reverse certain conditions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Dietary changes can produce measurable improvements in health markers within weeks to months, often reducing the need for medication or preventing disease complications. This makes nutrition counseling not just beneficial, but essential for anyone managing a chronic condition.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            How Nutrition Counseling Works
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Nutrition counseling is a collaborative, evidence-based approach to improving health through dietary modifications. Unlike generic diet advice found online, professional nutrition counseling provides personalized recommendations based on your specific health conditions, lab values, medications, lifestyle, food preferences, and cultural background.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During nutrition counseling sessions, a qualified healthcare provider or registered dietitian will assess your current eating patterns, identify areas for improvement, and work with you to develop realistic, sustainable dietary goals. This process typically includes education about how different foods affect your condition, meal planning strategies, grocery shopping guidance, and ongoing support to help you navigate challenges and maintain progress.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The focus is always on practical, achievable changes rather than restrictive diets that are difficult to maintain long-term. By building healthy eating habits gradually and addressing barriers to change, nutrition counseling helps create lasting lifestyle modifications that support chronic disease management.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{fontFamily: 'Cormorant, serif'}}>
            "Food is not just fuel—it's information that tells your body how to function. When you have a chronic disease, every meal is an opportunity to support your health or undermine it."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Diet's Impact on Specific Chronic Conditions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Different chronic diseases respond to different nutritional interventions. Understanding these connections can help you appreciate why personalized nutrition counseling matters:
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Type 2 Diabetes</h3>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              Blood sugar management depends heavily on carbohydrate intake, meal timing, and food combinations. Nutrition counseling helps patients understand glycemic index, portion control, and how to balance macronutrients to prevent blood sugar spikes. Studies show that medical nutrition therapy can reduce HbA1c levels by 0.5-2%, comparable to some diabetes medications.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Cardiovascular Disease</h3>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              Heart health is profoundly influenced by dietary fat quality, sodium intake, and consumption of protective foods like omega-3 fatty acids, fiber, and antioxidants. The Mediterranean diet, emphasized in many nutrition counseling programs, has been shown to reduce cardiovascular events by up to 30% in high-risk patients.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Hypertension</h3>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              The DASH (Dietary Approaches to Stop Hypertension) eating pattern can lower blood pressure as effectively as some medications. Nutrition counseling focuses on reducing sodium, increasing potassium-rich foods, and emphasizing whole grains, fruits, vegetables, and lean proteins.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Chronic Kidney Disease</h3>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              Managing protein, phosphorus, potassium, and sodium intake becomes critical as kidney function declines. Specialized nutrition counseling helps patients navigate these complex restrictions while maintaining adequate nutrition and quality of life.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            The Evidence Behind Nutrition Counseling
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The scientific evidence supporting nutrition counseling for chronic disease management is robust and growing. Multiple systematic reviews and meta-analyses have demonstrated that medical nutrition therapy improves clinical outcomes, reduces healthcare costs, and enhances quality of life for patients with chronic conditions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in major medical journals has shown that intensive nutrition counseling can lead to significant improvements in weight loss, blood pressure control, lipid profiles, and glycemic control. Perhaps more importantly, studies indicate that nutrition interventions are cost-effective, with every dollar spent on medical nutrition therapy potentially saving up to $3-4 in future healthcare costs by preventing complications and reducing medication needs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The American Diabetes Association, American Heart Association, and other major medical organizations all include nutrition counseling as a core component of evidence-based guidelines for chronic disease management. This isn't alternative medicine—it's mainstream, scientifically validated healthcare.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Practical Tips for Using Diet to Manage Chronic Disease
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While professional nutrition counseling provides personalized guidance, these general principles can help anyone with a chronic condition begin improving their diet:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Prioritize whole foods:</strong> Build meals around vegetables, fruits, whole grains, lean proteins, and healthy fats rather than processed and packaged foods.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Watch portion sizes:</strong> Even healthy foods can contribute to problems when consumed in excess. Learn appropriate portion sizes for your needs.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Read nutrition labels:</strong> Pay attention to sodium, added sugars, and saturated fat content in packaged foods.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Cook at home more often:</strong> Home cooking gives you control over ingredients and preparation methods, typically resulting in healthier meals.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Stay hydrated:</strong> Choose water as your primary beverage and limit sugary drinks, which contribute to blood sugar problems and weight gain.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Plan ahead:</strong> Meal planning and preparation reduce reliance on convenient but less healthy options when you're busy or tired.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Make gradual changes:</strong> Small, sustainable modifications are more effective long-term than drastic overhauls that are difficult to maintain.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            When to Seek Professional Nutrition Counseling
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While general healthy eating principles benefit everyone, professional nutrition counseling becomes especially important if you're newly diagnosed with a chronic disease, struggling to control your condition despite medication, experiencing complications, or feeling overwhelmed by conflicting dietary information.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Guardian Primary Care, we integrate nutrition counseling into comprehensive chronic disease management. Our direct primary care model allows us to spend adequate time understanding your unique situation, providing detailed dietary guidance, and offering ongoing support as you implement changes. This personalized approach recognizes that there's no one-size-fits-all diet—what works for your neighbor with diabetes may not be ideal for you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            We also coordinate with registered dietitians when specialized nutrition expertise is needed, ensuring you receive the most appropriate guidance for your specific health challenges. This team-based approach maximizes your chances of success and helps you feel supported throughout your health journey.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Taking Control of Your Health Through Nutrition
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Managing a chronic disease can feel overwhelming, but understanding the power of nutrition offers hope and a sense of control. Every meal is an opportunity to nourish your body, reduce inflammation, stabilize blood sugar, lower blood pressure, or support heart health. With professional guidance, you can learn to make food choices that align with your health goals while still enjoying the foods you love.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're living with a chronic condition in Birmingham, AL, and want to explore how nutrition counseling can improve your health outcomes, the team at Guardian Primary Care is here to help. We believe in empowering our patients with knowledge, support, and personalized strategies that fit your life—because sustainable health changes happen when you have the right guidance and ongoing partnership with providers who truly know you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your chronic disease doesn't have to define your life. With the right nutritional approach and professional support, you can take meaningful steps toward better health, more energy, and improved quality of life. Let's work together to create a nutrition plan that supports your goals and helps you thrive.
          </p>
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
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Primary Care / DPC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-center mb-12 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Chronic Disease
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Understanding Diabetes Management in Primary Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how comprehensive diabetes care can help you control blood sugar, prevent complications, and live well with diabetes.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Wellness
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  The Role of Lifestyle Medicine in Preventive Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how lifestyle changes including diet, exercise, and stress management can prevent and reverse chronic disease.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Blood Pressure Control: Beyond Medication
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore evidence-based strategies for managing hypertension through diet, lifestyle, and comprehensive medical care.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you manage your chronic disease with personalized nutrition counseling and comprehensive care.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:gap-3"
          >
            <span>Schedule Your Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}