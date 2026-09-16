import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Exercise in Chronic Disease Management | Guardian Primary Care',
  description: 'Discover how regular physical activity can help manage chronic conditions like diabetes, heart disease, and arthritis. Evidence-based guidance from Birmingham\'s trusted primary care team.',
  openGraph: {
    title: 'The Role of Exercise in Chronic Disease Management | Guardian Primary Care',
    description: 'Discover how regular physical activity can help manage chronic conditions like diabetes, heart disease, and arthritis. Evidence-based guidance from Birmingham\'s trusted primary care team.',
    url: 'https://guardianprimary.com/blog/the-role-of-exercise-in-chronic-disease-management',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Guardian Primary Care' }]
  }
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
            <span className="text-white">Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Exercise in Chronic Disease Management
          </h1>
          
          {/* Meta Info */}
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
              When you're managing a chronic condition like diabetes, heart disease, or arthritis, the idea of exercise can feel overwhelming. Perhaps you're tired, in pain, or simply unsure where to start. Yet mounting evidence shows that physical activity is one of the most powerful tools available for managing chronic disease—often as effective as medication, and sometimes more so.
            </p>
            <p className="mb-6">
              The truth is, exercise isn't just about weight loss or fitness. For people living with chronic conditions, regular physical activity can reduce symptoms, improve quality of life, slow disease progression, and even reduce the need for medications. It's not about running marathons or spending hours at the gym. It's about finding sustainable movement that works for your body and your condition.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Exercise as Medicine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The concept of "exercise as medicine" isn't new, but research continues to reinforce just how profound the benefits are. When you move your body regularly, you trigger a cascade of positive physiological changes: improved circulation, reduced inflammation, better insulin sensitivity, enhanced immune function, and improved mood through endorphin release.
            </p>
            <p className="mb-6">
              For chronic disease management, exercise works on multiple levels simultaneously. It addresses the root causes of many conditions—like insulin resistance in diabetes or arterial stiffness in heart disease—while also improving your body's ability to cope with symptoms and stress. Think of it as a compound intervention that touches nearly every system in your body.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Exercise and Common Chronic Conditions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Different chronic conditions benefit from exercise in specific ways. Understanding these mechanisms can help motivate you to start and maintain an exercise routine tailored to your needs.
            </p>
            <p className="mb-4 font-semibold">Type 2 Diabetes</p>
            <p className="mb-6">
              Exercise increases insulin sensitivity, meaning your cells can use available glucose more effectively. Even a single bout of moderate exercise can lower blood sugar levels for up to 24 hours. Regular activity also helps with weight management, which is crucial for diabetes control. Studies show that combining aerobic exercise with resistance training produces the best outcomes for blood sugar management.
            </p>
            <p className="mb-4 font-semibold">Cardiovascular Disease</p>
            <p className="mb-6">
              Physical activity strengthens your heart muscle, improves circulation, lowers blood pressure, and helps manage cholesterol levels. Cardiac rehabilitation programs—which are essentially structured exercise programs—have been shown to reduce mortality rates in heart disease patients by up to 25%. The key is starting slowly and building up gradually under medical supervision.
            </p>
            <p className="mb-4 font-semibold">Arthritis</p>
            <p className="mb-6">
              While it may seem counterintuitive, movement is essential for joint health. Exercise lubricates joints, strengthens the muscles that support them, and can actually reduce pain and stiffness. Low-impact activities like swimming, cycling, and tai chi are particularly beneficial for people with arthritis.
            </p>
            <p className="mb-4 font-semibold">Chronic Respiratory Diseases</p>
            <p className="mb-6">
              For conditions like COPD and asthma, exercise improves respiratory muscle strength and efficiency. Pulmonary rehabilitation programs teach you how to exercise safely while managing breathlessness. Over time, regular activity can increase your exercise tolerance and reduce the disability associated with these conditions.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "The best exercise is the one you'll actually do. Start where you are, use what you have, and build gradually. Even five minutes of movement is better than none."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Evidence Behind Exercise Recommendations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Major health organizations, including the American Heart Association, American Diabetes Association, and Centers for Disease Control, all recommend at least 150 minutes of moderate-intensity aerobic activity per week for adults with chronic conditions. This breaks down to just 30 minutes, five days a week.
            </p>
            <p className="mb-6">
              Research published in the Journal of the American Medical Association found that regular physical activity reduced mortality risk by 30-35% in people with chronic diseases. Another landmark study in Circulation showed that even patients with advanced heart disease who engaged in regular exercise had significantly better outcomes than sedentary patients.
            </p>
            <p className="mb-6">
              The evidence is clear: exercise isn't optional for chronic disease management—it's essential. But the dose, type, and intensity must be individualized based on your specific condition, current fitness level, and any complications you may have.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Getting Started Safely
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you have a chronic condition, it's crucial to approach exercise thoughtfully and with medical guidance. Here's how to start safely:
            </p>
            
            {/* Checklist */}
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Consult your healthcare provider</span> before starting any new exercise program, especially if you haven't been active recently or have multiple health conditions.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Start slowly</span> with just 5-10 minutes of activity and gradually increase duration and intensity over weeks and months.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Choose activities you enjoy</span> so you're more likely to stick with them. Walking, swimming, dancing, gardening—it all counts.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Monitor your body's response</span> and adjust accordingly. Some muscle soreness is normal, but sharp pain, excessive fatigue, or worsening symptoms are signals to back off.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Include variety</span> in your routine: aerobic activity for heart health, strength training for muscle and bone health, and flexibility exercises for mobility.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><span className="font-semibold">Make it social</span> by exercising with friends, joining a class, or working with a physical therapist or exercise specialist.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Overcoming Common Barriers
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people with chronic conditions face unique challenges when it comes to exercise. Acknowledging these barriers and developing strategies to address them is crucial for long-term success.
            </p>
            <p className="mb-6">
              <span className="font-semibold">Fatigue:</span> If you're dealing with chronic fatigue, the idea of exercise can seem impossible. Start with extremely short sessions—even 3-5 minutes—and focus on gentle movement. Often, light activity actually improves energy levels over time.
            </p>
            <p className="mb-6">
              <span className="font-semibold">Pain:</span> Work with your healthcare provider to find activities that don't exacerbate your pain. Water-based exercises, for example, take pressure off joints while still providing resistance. The right pain management strategy, combined with appropriate exercise, can create a positive cycle.
            </p>
            <p className="mb-6">
              <span className="font-semibold">Fear of injury or making your condition worse:</span> This is a legitimate concern, which is why medical guidance is so important. A proper assessment can identify what's safe for you and what to avoid. Many people are surprised to find they can do more than they thought—safely.
            </p>
            <p className="mb-6">
              <span className="font-semibold">Time constraints:</span> Remember that exercise doesn't have to happen in one continuous block. Three 10-minute sessions spread throughout the day are just as beneficial as one 30-minute session.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Creating Your Personalized Exercise Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The most effective exercise program is one that's tailored to your specific needs, preferences, and medical situation. At Guardian Primary Care in Birmingham, we work with patients to develop individualized exercise prescriptions that consider your current health status, goals, and lifestyle.
            </p>
            <p className="mb-6">
              Your exercise plan should be dynamic—adjusting as your fitness improves, your condition changes, or new symptoms emerge. Regular check-ins with your healthcare team ensure you're progressing safely and getting maximum benefit from your efforts.
            </p>
            <p className="mb-6">
              Remember that consistency matters more than intensity. A moderate exercise routine that you maintain for years will provide far greater benefits than an aggressive program you abandon after a few weeks. Be patient with yourself, celebrate small victories, and focus on how movement makes you feel rather than just physical outcomes.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Exercise is a cornerstone of chronic disease management, but navigating how to start safely and effectively can be challenging. If you're living with a chronic condition and want to incorporate exercise into your treatment plan, professional guidance can make all the difference.
            </p>
            <p>
              Our team at Guardian Primary Care specializes in comprehensive, personalized chronic disease management. We'll work with you to develop an exercise strategy that fits your unique situation and supports your health goals. <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-semibold">Contact us today</a> to schedule a consultation and take the first step toward better health through movement.
            </p>
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
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Primary Care / DPC
              </div>
              <p className="text-[var(--color-ink)] mt-3 text-sm leading-relaxed">
                Our team is dedicated to providing evidence-based, compassionate care to help you live your healthiest life. We believe in empowering patients with the knowledge and support they need to manage chronic conditions effectively.
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
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your Blood Pressure Numbers
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn what your blood pressure readings mean and how to keep your heart healthy.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Diabetes Prevention: Small Changes, Big Impact
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Practical lifestyle strategies to reduce your risk of developing type 2 diabetes.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Connection Between Physical and Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Exploring how your physical health impacts your emotional wellbeing and vice versa.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you develop a personalized approach to managing your health.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}