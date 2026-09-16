import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Importance of Annual Wellness Exams for Adults | Guardian Primary Care',
  description: 'Learn why annual wellness exams are critical for adults in Birmingham, AL. Discover how preventive care helps detect health issues early and keeps you healthy.',
  openGraph: {
    title: 'The Importance of Annual Wellness Exams for Adults',
    description: 'Learn why annual wellness exams are critical for adults in Birmingham, AL. Discover how preventive care helps detect health issues early and keeps you healthy.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
  },
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Preventive Care
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Importance of Annual Wellness Exams for Adults
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 15, 2024</span>
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
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-lg mb-12">
          <p className="mb-6">
            When was the last time you saw your doctor when you weren't sick? If you're like many adults, it might have been longer than you'd care to admit. Life gets busy, and when you feel fine, scheduling a check-up can easily fall to the bottom of your priority list. But here's the truth that healthcare providers in Birmingham, AL want you to know: feeling healthy today doesn't guarantee you'll stay that way tomorrow without proper preventive care.
          </p>
          <p>
            Annual wellness exams are one of the most powerful tools we have for maintaining long-term health, catching problems early, and preventing serious illness before it starts. Yet millions of Americans skip these vital appointments every year, often discovering health issues only after symptoms become impossible to ignore. Let's explore why making time for your annual wellness exam might be one of the most important decisions you make for your health this year.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          What Is an Annual Wellness Exam?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            An annual wellness exam, sometimes called a physical or check-up, is a comprehensive evaluation of your overall health conducted by your primary care provider. Unlike appointments where you come in with a specific complaint or illness, wellness exams are proactive—designed to assess your current health status, screen for potential problems, and develop strategies to keep you healthy.
          </p>
          <p className="mb-6">
            During a typical annual wellness exam, your provider will review your medical history, perform a physical examination, order appropriate screening tests based on your age and risk factors, update your vaccinations, and discuss lifestyle factors that impact your health. This is also your opportunity to ask questions, discuss concerns, and partner with your doctor in creating a personalized health plan for the year ahead.
          </p>
          <p>
            These visits typically last 30-60 minutes and provide dedicated time for you and your healthcare provider to focus on prevention rather than treatment. In a direct primary care model, these appointments often allow even more time for thorough discussion and personalized care planning.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Early Detection Saves Lives
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            The most compelling reason for annual wellness exams is their power to detect diseases in their earliest, most treatable stages. Many serious conditions—including high blood pressure, diabetes, high cholesterol, and even certain cancers—can develop silently for years without causing noticeable symptoms.
          </p>
          <p className="mb-6">
            Consider these facts: High blood pressure affects nearly half of American adults, yet many don't know they have it until they experience a heart attack or stroke. Type 2 diabetes can damage your body for 7-10 years before diagnosis if you're not getting regular screenings. Colon cancer, when caught early through screening, has a 90% five-year survival rate, but that drops dramatically when detected at later stages.
          </p>
          <p>
            Your annual wellness exam includes screenings appropriate for your age, gender, and personal risk factors. These might include blood pressure checks, cholesterol panels, diabetes screening, cancer screenings, and other tests that can identify problems before they become medical emergencies. Finding issues early doesn't just improve outcomes—it often means simpler, less invasive, and more affordable treatment options.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[family-name:var(--font-cormorant)]">
          "Prevention is not just better than cure—it's often the difference between a long, healthy life and years spent managing chronic conditions that could have been avoided."
        </blockquote>

        {/* Section 3 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Building a Foundation for Chronic Disease Prevention
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Chronic diseases like heart disease, diabetes, and chronic kidney disease are among the leading causes of death and disability in the United States. The encouraging news is that many of these conditions are largely preventable through lifestyle modifications and early intervention—both of which are central to annual wellness exams.
          </p>
          <p className="mb-6">
            During your wellness visit, your provider doesn't just look for existing problems; they assess your risk factors for developing chronic diseases in the future. This includes evaluating your family history, lifestyle habits, weight, activity level, diet, stress, and sleep patterns. Based on this comprehensive picture, your doctor can provide personalized recommendations to reduce your risk.
          </p>
          <p className="mb-6">
            Perhaps you're pre-diabetic but not yet diabetic—lifestyle changes implemented now can prevent or delay the onset of full diabetes. Maybe your cholesterol is creeping up but hasn't reached the treatment threshold—this is the perfect time to make dietary adjustments. Your blood pressure might be in the "elevated" category but not yet hypertension—increasing physical activity and reducing sodium could bring it back to normal ranges.
          </p>
          <p>
            These preventive interventions are most effective when problems are caught in their earliest stages. Annual wellness exams provide the regular monitoring needed to identify these opportunities and track your progress over time.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          The Power of the Patient-Provider Relationship
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            One of the often-overlooked benefits of annual wellness exams is the opportunity they provide to build and maintain a strong relationship with your primary care provider. When you see your doctor regularly—not just when you're sick—they develop a comprehensive understanding of your health history, your concerns, and your goals.
          </p>
          <p className="mb-6">
            This continuity of care matters tremendously. Your provider learns what's normal for you, making it easier to spot when something is off. They understand your health priorities and can tailor recommendations to fit your lifestyle and values. You develop trust and open communication, making it easier to discuss sensitive health topics or concerns you might otherwise keep to yourself.
          </p>
          <p className="mb-6">
            Research consistently shows that patients who have an established relationship with a primary care provider experience better health outcomes, lower healthcare costs, and higher satisfaction with their care. They're more likely to follow treatment recommendations, complete screenings, and manage chronic conditions effectively.
          </p>
          <p>
            In the Birmingham, AL area, where direct primary care models are becoming increasingly popular, this relationship becomes even stronger. With more time per appointment and easier access to your provider, you can build the kind of partnership that truly supports your long-term health.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          What to Expect and How to Prepare
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Knowing what to expect can help you make the most of your annual wellness exam. While the specific components may vary based on your age, gender, and health status, most comprehensive exams include several standard elements.
          </p>
          <p className="mb-6">
            Your visit will typically begin with vital signs—height, weight, blood pressure, heart rate, and sometimes temperature. Your provider will review your medical history, current medications, and any new symptoms or concerns. The physical examination includes checking your heart, lungs, abdomen, skin, and other body systems. Depending on your age and risk factors, you may need lab work such as cholesterol screening, diabetes testing, or thyroid function tests.
          </p>
          
          <div className="my-8">
            <p className="font-semibold text-[var(--color-ink)] mb-4">To prepare for your annual wellness exam:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bring a list of all current medications, including over-the-counter drugs and supplements</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Know your family health history, especially regarding heart disease, cancer, and diabetes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Write down questions or concerns you want to discuss—don't rely on memory</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Be prepared to discuss lifestyle factors honestly, including diet, exercise, alcohol use, and stress</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast for 8-12 hours before your appointment if lab work is planned</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bring records from any specialists you've seen since your last visit</span>
              </li>
            </ul>
          </div>

          <p>
            Remember, this appointment is about you. Don't hesitate to ask questions, express concerns, or request clarification on anything you don't understand. Your provider is there to partner with you in maintaining and improving your health.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Overcoming Common Barriers to Preventive Care
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Despite the clear benefits, many adults skip their annual wellness exams. Understanding and addressing common barriers can help you prioritize this important aspect of your healthcare.
          </p>
          <p className="mb-6">
            <strong>Time constraints</strong> are the most frequently cited reason for skipping preventive care. Between work, family obligations, and daily responsibilities, finding time for a doctor's appointment when you feel fine can seem impossible. Consider scheduling your annual exam a year in advance, treating it as a non-negotiable appointment with yourself. Many practices offer early morning or late afternoon appointments to accommodate work schedules.
          </p>
          <p className="mb-6">
            <strong>Cost concerns</strong> prevent some people from seeking preventive care. However, most health insurance plans cover annual wellness exams at 100% with no copay when you see an in-network provider. If you're uninsured or underinsured, direct primary care models offer affordable monthly memberships that include comprehensive wellness visits without the complexity of insurance billing.
          </p>
          <p className="mb-6">
            <strong>Fear or anxiety</strong> about what a doctor might find keeps some people away. While this concern is understandable, consider that finding a problem early—when it's most treatable—is always better than discovering it later when it's more serious. Most screening tests detect nothing concerning, and when they do find issues, you'll have more options for addressing them.
          </p>
          <p>
            <strong>Feeling healthy</strong> paradoxically prevents many people from seeking preventive care. "If it's not broken, why check it?" goes the thinking. But many serious conditions develop silently. You can feel perfectly fine while high blood pressure damages your arteries, prediabetes progresses toward diabetes, or early-stage cancer grows undetected. Wellness exams catch these problems before symptoms appear.
          </p>
        </div>

        {/* Closing Call to Action */}
        <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="mb-6">
            Your health is your most valuable asset, and annual wellness exams are one of the most effective investments you can make in protecting it. These appointments provide an opportunity to catch problems early, prevent chronic diseases, stay up to date on screenings and vaccinations, and build a strong relationship with a healthcare provider who knows you and your health history.
          </p>
          <p>
            If it's been more than a year since your last wellness exam—or if you've never had one—now is the perfect time to schedule an appointment. At Guardian Primary Care, our team is dedicated to providing comprehensive, unhurried preventive care that addresses your unique health needs and goals. We serve patients throughout Birmingham, AL with a direct primary care model that prioritizes your time, your concerns, and your long-term wellness. Don't wait for symptoms to appear. Take charge of your health today.
          </p>
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
              <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Primary Care / DPC
              </p>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                Our clinical team is dedicated to providing evidence-based, compassionate care to patients throughout Birmingham, AL. We believe in empowering patients with the knowledge and support they need to achieve optimal health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Preventive Care
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Blood Pressure: What Your Numbers Mean
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how to interpret your blood pressure readings and what steps to take for optimal heart health.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Chronic Disease
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Prediabetes: Your Wake-Up Call to Better Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how lifestyle changes can prevent or delay the progression from prediabetes to type 2 diabetes.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Wellness
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Direct Primary Care Difference in Birmingham
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore how the DPC model provides more time, better access, and personalized care for your health journey.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you prioritize your health with comprehensive, personalized care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Wellness Exam
          </a>
        </div>
      </section>
    </main>
  )
}