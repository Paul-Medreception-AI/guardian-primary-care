import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'High Blood Pressure: The Silent Killer You Can Control | Guardian Primary Care',
  description: 'Learn about hypertension, why it\'s called the silent killer, and evidence-based strategies to control your blood pressure. Expert insights from Guardian Primary Care in Birmingham, AL.',
  keywords: 'high blood pressure, hypertension, blood pressure control, cardiovascular health, primary care Birmingham AL, hypertension management',
  openGraph: {
    title: 'High Blood Pressure: The Silent Killer You Can Control',
    description: 'Expert guidance on understanding and controlling hypertension from Guardian Primary Care.',
    url: 'https://guardianprimary.com/blog/high-blood-pressure-the-silent-killer-you-can-control',
    type: 'article',
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant'}}>
            High Blood Pressure: The Silent Killer You Can Control
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
              You feel fine. Your energy is good, you're keeping up with work and family, and nothing seems wrong. But inside your body, your blood vessels are under relentless pressure—silently damaging your heart, kidneys, brain, and arteries. This is the insidious nature of high blood pressure, or hypertension: it rarely announces itself until serious damage has been done.
            </p>
            <p className="mb-6">
              Nearly half of American adults have high blood pressure, yet many don't even know it. That's why hypertension has earned its ominous nickname: the silent killer. But here's the empowering truth—while hypertension is dangerous, it's also one of the most controllable chronic conditions when properly managed. Understanding what it is, why it matters, and how to take control can literally save your life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            What Is High Blood Pressure?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Blood pressure measures the force of blood pushing against the walls of your arteries as your heart pumps. It's expressed in two numbers: systolic pressure (the top number) when your heart beats, and diastolic pressure (the bottom number) when your heart rests between beats.
            </p>
            <p className="mb-6">
              Normal blood pressure is generally below 120/80 mm Hg. Elevated blood pressure ranges from 120-129 systolic with diastolic below 80. Hypertension Stage 1 is 130-139 systolic or 80-89 diastolic, and Stage 2 is 140/90 or higher. A hypertensive crisis—anything above 180/120—requires immediate medical attention.
            </p>
            <p className="mb-6">
              When blood pressure remains consistently elevated, it forces your heart to work harder and damages arterial walls over time. This sets the stage for heart disease, stroke, kidney failure, vision loss, and other life-threatening complications.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant'}}>
            "Hypertension is responsible for more cardiovascular deaths than any other modifiable risk factor—but with proper management, most people can achieve healthy blood pressure levels."
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Why It's Called the Silent Killer
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most people with high blood pressure have no symptoms at all. No pain, no shortness of breath, no warning signs. You can have dangerously high blood pressure for years without feeling anything wrong. This is what makes hypertension so deadly—by the time symptoms appear, significant damage may have already occurred.
            </p>
            <p className="mb-6">
              According to the American Heart Association, hypertension contributes to nearly 500,000 deaths each year in the United States. It's a leading cause of heart attack, stroke, heart failure, and chronic kidney disease. The damage is cumulative: every day your blood pressure remains elevated, your organs are under stress.
            </p>
            <p className="mb-6">
              The good news? Regular blood pressure monitoring can catch hypertension early, before it causes harm. This is why routine checkups and knowing your numbers are so crucial—especially if you have risk factors like family history, obesity, sedentary lifestyle, or high sodium intake.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone can develop high blood pressure, certain factors increase your risk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age:</strong> Risk increases with age, particularly after 65</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Family history:</strong> Genetics play a significant role</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Race:</strong> African Americans face higher risk and earlier onset</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Obesity:</strong> Excess weight requires more blood flow and stresses arteries</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical inactivity:</strong> Sedentary lifestyle increases risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diet:</strong> High sodium, low potassium, and processed foods contribute</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Smoking and alcohol:</strong> Both raise blood pressure and damage vessels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Chronic stress:</strong> Prolonged stress hormones elevate blood pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Other conditions:</strong> Diabetes, kidney disease, and sleep apnea increase risk</span>
              </li>
            </ul>
            <p className="mb-6">
              Even if you have multiple risk factors, hypertension is not inevitable. Lifestyle changes and medical management can dramatically reduce your risk and protect your long-term health.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            The Evidence: Why Control Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Decades of research have proven that controlling high blood pressure saves lives. Landmark studies like the SPRINT trial demonstrated that intensive blood pressure control (targeting below 120 systolic) reduced the risk of heart attack, heart failure, stroke, and death by 25% compared to standard treatment.
            </p>
            <p className="mb-6">
              Even modest reductions matter. Lowering systolic blood pressure by just 10 mm Hg or diastolic by 5 mm Hg can reduce your risk of heart disease by 20% and stroke by 25-30%. Over time, these reductions compound—protecting your brain, heart, kidneys, and eyes.
            </p>
            <p className="mb-6">
              The evidence is clear: treating high blood pressure isn't just about numbers on a monitor—it's about preserving your quality of life, preventing disability, and adding healthy years to your life.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            How to Take Control: Practical Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The best news about hypertension? It's highly responsive to lifestyle changes and medical treatment. Here's how you can take control:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Know your numbers:</strong> Get your blood pressure checked regularly. If you have hypertension, monitor at home and track trends.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Adopt the DASH diet:</strong> Focus on fruits, vegetables, whole grains, lean protein, and low-fat dairy. Reduce sodium to less than 2,300 mg daily (ideally 1,500 mg).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move your body:</strong> Aim for 150 minutes of moderate aerobic activity per week. Even walking 30 minutes daily makes a difference.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a healthy weight:</strong> Losing even 5-10 pounds can lower blood pressure significantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit alcohol:</strong> No more than one drink per day for women, two for men.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Quit smoking:</strong> Tobacco damages blood vessels and raises blood pressure. Quitting is one of the best things you can do for your heart.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage stress:</strong> Practice relaxation techniques like deep breathing, meditation, or yoga.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Take medications as prescribed:</strong> If lifestyle changes aren't enough, blood pressure medications are safe, effective, and essential for protection.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've been diagnosed with high blood pressure—or if you have risk factors and haven't had your blood pressure checked recently—it's time to see your primary care provider. Managing hypertension requires a partnership between you and your healthcare team.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Birmingham, AL, we take a comprehensive, personalized approach to blood pressure management. We'll work with you to identify your unique risk factors, create a tailored treatment plan, monitor your progress, and adjust as needed. Our goal isn't just to lower numbers—it's to protect your long-term health and help you live a full, active life.
            </p>
            <p className="mb-6">
              Don't wait for symptoms. By the time high blood pressure causes noticeable problems, damage may already be done. Taking control now—through lifestyle changes, regular monitoring, and medical management—can prevent heart attack, stroke, and other serious complications.
            </p>
            <p className="mb-6">
              Your heart, brain, and kidneys are counting on you. Let's work together to keep them healthy for years to come.
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
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
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
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Cardiovascular Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Understanding Cholesterol: What Your Numbers Mean
                </h4>
                <div className="text-[var(--color-accent)] text-sm font-medium">Read more →</div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Diabetes Prevention: Small Steps, Big Impact
                </h4>
                <div className="text-[var(--color-accent)] text-sm font-medium">Read more →</div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  The Power of Annual Physicals: Why They Matter
                </h4>
                <div className="text-[var(--color-accent)] text-sm font-medium">Read more →</div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>

    </main>
  )
}