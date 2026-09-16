import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telehealth vs. In-Person Visits: Choosing the Right Option | Guardian Primary Care',
  description: 'Discover when to choose telehealth or in-person care. Learn the benefits, limitations, and best use cases for each option from our Birmingham primary care experts.',
  openGraph: {
    title: 'Telehealth vs. In-Person Visits: Choosing the Right Option',
    description: 'Expert guidance on selecting between telehealth and in-person medical visits for your healthcare needs.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Telehealth vs. In-Person Visits: Choosing the Right Option
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
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
          {/* Opening */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You wake up feeling under the weather—sore throat, mild fever, and fatigue. Do you schedule an in-person doctor's visit, or could a video call from the comfort of your home be just as effective? The rise of telehealth has transformed how we access medical care, offering unprecedented convenience. But with options comes the question: which type of visit is right for your specific situation?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the strengths and limitations of both telehealth and in-person visits empowers you to make informed decisions about your healthcare. Let's explore when each option shines, helping you choose the right approach for your needs.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Telehealth?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telehealth, also called telemedicine, allows you to consult with healthcare providers remotely using video conferencing, phone calls, or secure messaging platforms. This technology-driven approach eliminates the need for physical travel, enabling patients to receive medical advice, prescriptions, follow-up care, and even mental health counseling from virtually anywhere.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The COVID-19 pandemic accelerated telehealth adoption dramatically. According to the American Medical Association, telehealth visits increased by more than 50 times their pre-pandemic levels in 2020. While utilization has moderated since peak pandemic times, telehealth has firmly established itself as a valuable tool in modern healthcare delivery.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In Birmingham, AL, many primary care practices now offer hybrid models that combine traditional in-person appointments with convenient virtual options, giving patients flexibility without sacrificing quality care.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When Telehealth Excels
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telehealth isn't just convenient—it's genuinely effective for many medical situations. Virtual visits can provide the same quality of care as in-person appointments for numerous conditions while saving time and reducing exposure to illness in waiting rooms.
          </p>

          <div className="my-8">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4 font-semibold">
              Ideal situations for telehealth include:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Follow-up appointments:</strong> Checking in on treatment progress, medication adjustments, or discussing lab results that don't require physical examination</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Minor acute illnesses:</strong> Cold and flu symptoms, mild respiratory infections, urinary tract infections, allergies, or pink eye</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Chronic disease management:</strong> Diabetes monitoring, hypertension management, or asthma control when symptoms are stable</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mental health services:</strong> Therapy sessions, depression or anxiety management, and medication management for psychiatric conditions</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prescription refills:</strong> Routine medication renewals when no examination is needed</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Skin conditions:</strong> Rashes, eczema flare-ups, or acne that can be visually assessed through video</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Preventive care consultations:</strong> Discussing nutrition, lifestyle modifications, or health education</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in the Journal of the American Medical Association found that telehealth visits achieved comparable clinical outcomes to in-person visits for common primary care conditions, with the added benefit of reduced time burden and travel costs for patients.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Telehealth isn't replacing traditional care—it's expanding access and offering patients choice. The best healthcare model uses both approaches strategically."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When In-Person Visits Are Essential
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While telehealth offers remarkable convenience, certain medical situations absolutely require the hands-on evaluation that only in-person visits can provide. Physical examinations, diagnostic testing, and procedures necessitate your physical presence.
          </p>

          <div className="my-8">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4 font-semibold">
              You should schedule an in-person visit for:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Annual physical examinations:</strong> Comprehensive wellness visits that include physical assessments like blood pressure measurement, heart and lung auscultation, and abdominal examination</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>New or severe symptoms:</strong> Chest pain, severe abdominal pain, significant injuries, or any concerning symptoms that need immediate physical evaluation</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diagnostic procedures:</strong> Lab work, imaging studies, EKGs, or any testing that requires specialized equipment</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical procedures:</strong> Vaccinations, wound care, joint injections, or minor surgical procedures</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Complex diagnostic challenges:</strong> When symptoms are vague or multiple systems are involved, requiring thorough hands-on examination</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Initial evaluations for chronic conditions:</strong> New diagnoses often benefit from comprehensive in-person assessment before transitioning to virtual follow-ups</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pediatric well-child visits:</strong> Growth measurements, developmental assessments, and vaccinations require in-person care</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're uncertain whether your situation warrants an in-person visit, don't hesitate to call your provider's office. Staff can help triage your concern and recommend the most appropriate visit type.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Comparing the Benefits and Limitations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Both telehealth and in-person visits offer distinct advantages. Understanding these can help you maximize the benefits of each approach.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4 font-semibold">
            Telehealth advantages:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Convenience:</strong> No travel time, no waiting rooms, appointments fit easily into busy schedules</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Accessibility:</strong> Especially valuable for patients with mobility limitations, transportation challenges, or those living in rural areas</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Reduced exposure:</strong> Minimize contact with potentially contagious patients in healthcare settings</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Cost savings:</strong> Lower overhead often translates to reduced costs; saves on travel expenses and time off work</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Increased frequency:</strong> Easier to schedule frequent check-ins for chronic condition management</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4 font-semibold">
            In-person visit advantages:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Comprehensive examination:</strong> Providers can perform hands-on assessments critical for accurate diagnosis</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Immediate testing:</strong> On-site labs and diagnostic equipment provide instant results</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Procedures and interventions:</strong> Many treatments simply require your physical presence</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Personal connection:</strong> Some patients find face-to-face interaction more reassuring and easier for building rapport</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>No technology barriers:</strong> Eliminates concerns about internet connectivity or digital literacy</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The limitations mirror these advantages—telehealth can't perform physical exams or procedures, while in-person visits require time, travel, and potential exposure to illness.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Making the Right Choice for Your Situation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The decision between telehealth and in-person care isn't always black and white. Consider these factors when choosing:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Nature of your concern:</strong> Is this a follow-up for a known condition, or a new problem? Simple, straightforward issues often work well virtually, while complex or severe symptoms warrant in-person evaluation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Need for physical examination:</strong> Ask yourself: "Would the doctor need to touch, listen to, or closely examine my body to properly evaluate this?" If yes, schedule in-person.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Testing requirements:</strong> If you anticipate needing bloodwork, imaging, or other diagnostic tests, an in-person visit is more efficient.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Your comfort level:</strong> Some patients prefer the reassurance of face-to-face interaction, especially when discussing anxiety-provoking health concerns. Your emotional comfort matters.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Timing and urgency:</strong> Telehealth often offers faster appointment availability. For urgent but non-emergency concerns, a virtual visit might get you answers sooner.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many primary care practices in Birmingham offer hybrid models where you can start with a telehealth consultation, and the provider will recommend an in-person follow-up if needed. This approach combines convenience with comprehensive care.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Future: Blended Care Models
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The future of primary care isn't about choosing between telehealth and in-person visits—it's about intelligently integrating both. Progressive practices are developing blended care models that leverage the strengths of each approach.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For example, you might have an annual in-person comprehensive physical, followed by quarterly virtual check-ins for chronic disease management, with in-person visits reserved for acute problems requiring examination. This model maximizes convenience while maintaining quality and continuity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Direct Primary Care (DPC) models are particularly well-suited to this hybrid approach. With extended appointment times, unlimited access to your provider, and the flexibility to choose virtual or in-person visits based on your needs, DPC practices in Birmingham, AL are pioneering personalized, patient-centered care delivery.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Technology continues to evolve as well. Remote patient monitoring devices, at-home diagnostic tools, and improved telehealth platforms are expanding what's possible in virtual care, gradually blurring the lines between remote and in-person capabilities.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Your Healthcare, Your Choice
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The expansion of telehealth has given patients unprecedented flexibility in accessing healthcare. Rather than viewing telehealth and in-person visits as competing options, think of them as complementary tools in your healthcare toolkit. The right choice depends on your specific situation, the nature of your health concern, and your personal preferences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Don't hesitate to discuss with your provider which visit type makes the most sense for your needs. A responsive primary care practice will work with you to create a care plan that combines the convenience of virtual visits with the thoroughness of in-person care when needed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're looking for a primary care practice that offers both exceptional in-person care and convenient telehealth options in Birmingham, AL, we're here to help. Our team is committed to providing personalized, accessible healthcare that fits your life.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Primary Care / DPC</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Importance of Annual Physical Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover why routine checkups are essential for catching health issues early and maintaining long-term wellness.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Direct Primary Care: Is It Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how the DPC model provides more time, better access, and personalized attention from your primary care provider.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Chronic Disease</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Managing Chronic Conditions: A Comprehensive Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Expert strategies for living well with chronic health conditions through proactive management and lifestyle modifications.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </main>
  )
}