import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cholesterol Numbers: Beyond Total Cholesterol',
  description: 'Total cholesterol only tells part of the story. Learn what HDL, LDL, triglycerides and the key ratios really mean, and the everyday habits that improve them.',
  keywords: 'cholesterol levels, HDL cholesterol, LDL cholesterol, triglycerides, heart health, cholesterol testing, Cape Girardeau MO primary care',
  openGraph: {
    title: 'Understanding Your Cholesterol Numbers: Beyond Total Cholesterol',
    description: 'Learn what your cholesterol numbers really mean and why total cholesterol doesn\'t tell the whole story.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Team'],
  },
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
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Your Cholesterol Numbers: Beyond Total Cholesterol
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
              <span>Guardian Primary Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-highcholesterol.jpg"
              alt="An open carton of eggs with one cracked open, a food that comes up often in questions about dietary cholesterol"
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You just received your lab results, and there it is: your total cholesterol number. Maybe it's higher than you'd like, or perhaps it looks perfectly normal. But here is something most people do not realize: that single number on your lab report is only telling you part of the story. In fact, focusing solely on total cholesterol can be misleading and might cause you to miss crucial information about your actual heart health risk.
            </p>
            <p className="mb-6">
              Understanding the different types of cholesterol and what each number means is essential for making informed decisions about your cardiovascular health. Let's break down these numbers so you can have more meaningful conversations with your healthcare provider and take targeted action to protect your heart.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Total Cholesterol Doesn't Tell the Whole Story
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Total cholesterol is simply the sum of all the cholesterol types in your blood. While it's useful as a starting point, it doesn't distinguish between "good" and "bad" cholesterol. This matters because you could have a high total cholesterol reading but actually have excellent heart health if most of that cholesterol is the protective kind.
            </p>
            <p className="mb-6">
              Conversely, you might have a seemingly normal total cholesterol but be at significant cardiovascular risk if the balance between different cholesterol types is unfavorable. This is why modern medicine has moved beyond looking at total cholesterol alone and instead focuses on the cholesterol profile, a more detailed breakdown that gives us actionable insights.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Four Numbers That Really Matter
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you get a complete lipid panel, you're actually getting four key measurements. Understanding each one helps you see the complete picture of your cardiovascular health.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">LDL Cholesterol: The "Bad" Cholesterol</h3>
            <p className="mb-6">
              Low-density lipoprotein (LDL) cholesterol is often called "bad" cholesterol because it can build up in your artery walls, forming plaques that narrow blood vessels and increase heart attack and stroke risk. Generally, lower LDL numbers are better. Optimal LDL levels are typically below 100 mg/dL, though your target may be different based on your individual risk factors.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">HDL Cholesterol: The "Good" Cholesterol</h3>
            <p className="mb-6">
              High-density lipoprotein (HDL) cholesterol is the protective type. It acts like a cleanup crew, removing excess cholesterol from your arteries and transporting it back to your liver for disposal. Higher HDL levels are associated with lower heart disease risk. For men, HDL above 40 mg/dL is considered acceptable, while for women, it's above 50 mg/dL. Higher is generally better, and levels above 60 mg/dL are considered protective.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Triglycerides: The Often-Overlooked Number</h3>
            <p className="mb-6">
              Triglycerides are a type of fat in your blood that stores unused calories. Elevated triglycerides, especially when combined with low HDL, significantly increase cardiovascular risk. Normal triglycerides are below 150 mg/dL. High levels are often linked to excess sugar and refined carbohydrate intake, excess alcohol, and lack of physical activity.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Total Cholesterol: The Big Picture</h3>
            <p className="mb-6">
              Total cholesterol is the sum of HDL, LDL, and 20% of your triglycerides. While less meaningful on its own, it provides context when viewed alongside the other numbers. Desirable total cholesterol is generally below 200 mg/dL, but again, what matters more is the breakdown.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="font-display text-[var(--color-ink)] italic text-xl">
              The ratio between your HDL and LDL cholesterol is often more predictive of heart disease risk than your total cholesterol number alone.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Important Ratios and Risk Calculations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond individual numbers, your healthcare provider may calculate specific ratios that provide even more insight into your cardiovascular risk.
            </p>
            <p className="mb-6">
              The <strong>total cholesterol to HDL ratio</strong> is calculated by dividing your total cholesterol by your HDL cholesterol. A ratio below 5:1 is generally considered good, with optimal being below 3.5:1. This ratio helps identify people who may have acceptable total cholesterol but concerning cardiovascular risk due to low protective HDL.
            </p>
            <p className="mb-6">
              The <strong>triglyceride to HDL ratio</strong> is another powerful predictor. Ideally, this ratio should be below 2:1. Higher ratios are associated with insulin resistance, increased inflammation, and greater risk of heart disease and diabetes. This ratio is calculated by dividing your triglycerides by your HDL cholesterol.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Influences Your Cholesterol Numbers
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your cholesterol levels are influenced by a complex interplay of factors, some within your control and others not.
            </p>
            <p className="mb-6">
              <strong>Diet</strong> plays a significant role, but it's more nuanced than simply avoiding high-cholesterol foods. Saturated fats, trans fats, and excess refined carbohydrates all influence cholesterol levels. Meanwhile, foods rich in soluble fiber, omega-3 fatty acids, and plant sterols can help improve your lipid profile.
            </p>
            <p className="mb-6">
              <strong>Physical activity</strong> has a powerful effect, particularly on raising protective HDL cholesterol and lowering triglycerides. Regular exercise, even moderate amounts like brisk walking, can significantly improve your numbers over time.
            </p>
            <p className="mb-6">
              <strong>Genetics</strong> also matter considerably. Some people have familial hypercholesterolemia, a genetic condition that causes very high LDL cholesterol regardless of lifestyle. If you have a family history of high cholesterol or early heart disease, it's especially important to monitor your numbers closely.
            </p>
            <p className="mb-6">
              Other factors include <strong>age, gender, hormones, medications, and underlying health conditions</strong> like thyroid disorders or diabetes. This is why it's essential to interpret your numbers in the context of your complete health picture.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps to Improve Your Cholesterol Profile
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Once you understand your numbers, you can take targeted action. Here are evidence-based strategies that can help optimize your cholesterol profile:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Increase soluble fiber intake</strong> through oats, beans, lentils, apples, and barley. Soluble fiber binds to cholesterol in the digestive system and helps remove it from the body.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Choose healthy fats</strong> like olive oil, avocados, nuts, and fatty fish instead of saturated and trans fats found in processed foods and red meat.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Exercise regularly.</strong> Aim for at least 150 minutes of moderate-intensity aerobic activity weekly. This raises HDL and lowers triglycerides.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain a healthy weight.</strong> Losing even 5 to 10 percent of body weight can significantly improve cholesterol levels if you are carrying extra weight.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Limit alcohol consumption.</strong> Excessive alcohol significantly raises triglycerides.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Quit smoking.</strong> Smoking lowers HDL cholesterol and damages blood vessel walls, making them more susceptible to plaque buildup.</p>
              </div>
              
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Reduce added sugars and refined carbohydrates.</strong> These are major contributors to high triglycerides.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Lifestyle Changes Aren't Enough
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For some people, lifestyle modifications alone may not be sufficient to reach target cholesterol levels. This is particularly true for those with genetic conditions, very high baseline numbers, or additional risk factors like diabetes or previous cardiovascular events.
            </p>
            <p className="mb-6">
              If lifestyle changes don't adequately improve your numbers after several months, or if your risk profile warrants more aggressive treatment, your healthcare provider may recommend medication. Statins are the most commonly prescribed cholesterol-lowering medications and have decades of research supporting their safety and effectiveness. Other options include ezetimibe, PCSK9 inhibitors, and fibrates, depending on your specific lipid profile.
            </p>
            <p className="mb-6">
              The decision to start medication is highly individual and should be made collaboratively with your healthcare provider, taking into account your complete risk profile, personal preferences, and health goals.
            </p>
          </div>

          {/* Closing Paragraph */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Control of Your Heart Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding your cholesterol numbers is empowering. Rather than fixating on a single total cholesterol value, you now know to look at the complete picture: your LDL, HDL, triglycerides, and the important ratios between them. These numbers, combined with other risk factors and your individual health context, guide personalized strategies to protect your cardiovascular health.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, MO, we take the time to explain your lab results and build a heart-health plan that fits your life. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available for patients who prefer transparent, predictable pricing. Whether you need help interpreting your numbers, making lifestyle changes, or deciding whether medication is right for you, we are here to support you.
            </p>
            <p>
              Do not let confusing numbers keep you from taking action. Call (573) 200-6143 or request an appointment to review your cholesterol profile and build a plan for your heart health.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Primary care in Cape Girardeau, MO, led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog/high-blood-pressure-the-silent-killer-you-can-control" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Heart Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  High Blood Pressure: The Silent Killer You Can Control
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How to read your blood pressure numbers and the steps that bring them down.
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
            <a href="/blog/prediabetes-your-opportunity-to-prevent-type-2-diabetes" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Prediabetes: Your Chance to Prevent Type 2 Diabetes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  What the numbers mean and the changes that keep prediabetes from progressing.
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
            <a href="/blog/heart-disease-prevention-small-changes-that-protect-your-hea" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Nutrition</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Heart Disease Prevention: Small Changes That Protect Your Heart
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  The everyday habits that do the most to protect your cardiovascular health.
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
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our care team in Cape Girardeau, MO is here to help you understand your cholesterol numbers and build a plan for your heart health.
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