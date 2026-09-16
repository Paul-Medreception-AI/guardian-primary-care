import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Telehealth vs. In-Person Visits: How to Choose | Guardian',
  description: 'When a video visit is enough, when you need to be seen in person, and how to decide, from the primary care team in Cape Girardeau, Missouri.',
  openGraph: {
    title: 'Telehealth vs. In-Person Visits: How to Choose',
    description: 'When a video visit is enough, when you need to be seen in person, and how to decide, from the primary care team in Cape Girardeau, Missouri.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care'],
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8 font-display">
            Telehealth vs. In-Person Visits: Choosing the Right Option
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
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
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/site/hero-poster.jpg"
              alt="A provider greeting a patient at the entrance of the Guardian Primary Care clinic"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-4 text-center leading-relaxed">
            Guardian Primary Care offers both in-office and telehealth visits. Appointments are scheduled by request, so ask for whichever suits the problem.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You wake up feeling under the weather: sore throat, mild fever, fatigue. Do you book an in-person visit, or would a video call from home work just as well? Telehealth has changed how we reach our care team, and with the extra option comes a question: which type of visit is right for this particular problem?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the strengths and limitations of both telehealth and in-person visits empowers you to make informed decisions about your healthcare. Let's explore when each option shines, helping you choose the right approach for your needs.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            What Is Telehealth?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telehealth, also called telemedicine, allows you to consult with healthcare providers remotely using video conferencing, phone calls, or secure messaging platforms. This technology-driven approach eliminates the need for physical travel, enabling patients to receive medical advice, prescriptions, follow-up care, and even mental health counseling from virtually anywhere.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The COVID-19 pandemic accelerated the adoption of telehealth across the country. Use has settled back since the peak of the pandemic, but virtual visits did not go away: telehealth is now a standard tool in primary care rather than an emergency measure.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In Cape Girardeau, Missouri, many primary care practices now combine in-office appointments with virtual options, which gives patients flexibility without giving up quality. Guardian Primary Care offers both, and you can read how our virtual visits work on our <a href="/telehealth" className="text-[var(--color-primary)] underline">telehealth</a> page.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            When Telehealth Excels
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telehealth is not only convenient, it is genuinely effective for many situations. For a good number of concerns a virtual visit does the same work as an office visit, while saving you travel time and keeping you out of a waiting room full of other people&apos;s germs.
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
            For many common primary care concerns, a virtual visit reaches the same plan of care as an office visit would, with less time away from work and no drive. The judgment call is not really telehealth against in-person care, it is whether this particular problem needs hands on it.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light font-display">
            &ldquo;Telehealth is not replacing traditional care. It is widening access and giving patients a choice, and the best care uses both approaches deliberately.&rdquo;
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            When In-Person Visits Are Essential
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For all its convenience, some situations require the hands-on evaluation only an in-person visit can provide. Physical examination, diagnostic testing and procedures all need you in the room.
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
            If you are not sure which your situation calls for, call the office and ask. Our team can talk through your concern and recommend the right kind of visit: call (573) 200-6143.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
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
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Testing in the same visit:</strong> Samples can be collected and testing arranged while you are there, instead of scheduling a second trip</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Procedures and interventions:</strong> Many treatments simply require your physical presence</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>Personal connection:</strong> Some patients find face-to-face interaction more reassuring and easier for building rapport</li>
            <li className="text-[var(--color-ink)] leading-loose">• <strong>No technology barriers:</strong> Eliminates concerns about internet connectivity or digital literacy</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The limitations mirror these advantages, telehealth can't perform physical exams or procedures, while in-person visits require time, travel, and potential exposure to illness.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Making the Right Choice for Your Situation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The decision between telehealth and in-person care isn't always black and white. Consider these factors when choosing:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Nature of your concern:</strong> Is this a follow-up for a known condition, or a new problem? Simple, straightforward issues often work well virtually, while complex or severe symptoms warrant in-person evaluation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Need for physical examination:</strong> Ask yourself whether your provider would need to listen to, feel or closely examine something in order to evaluate it properly. If the answer is yes, book an in-person visit.
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
            Many practices in Cape Girardeau work in a hybrid way: you start with a telehealth visit, and your provider asks you to come in if the problem needs a closer look. That approach keeps the convenience without giving up thoroughness.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            The Future: Blended Care Models
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The future of primary care is not about choosing between telehealth and in-person visits, it is about combining them sensibly. Blended care uses the strengths of each.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For example, you might have an annual in-person comprehensive physical, followed by quarterly virtual check-ins for chronic disease management, with in-person visits reserved for acute problems requiring examination. This model maximizes convenience while maintaining quality and continuity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Direct-care models suit this hybrid approach well, because longer appointments and direct access to your provider make it easy to start virtually and come in if needed. At Guardian Primary Care you can use your insurance (we are in-network with most major commercial insurances, Medicare and Medicaid) or choose <a href="/services/guardian-direct-care" className="text-[var(--color-primary)] underline">Guardian Direct Care</a>, which includes telehealth either way.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Technology continues to evolve as well. Remote patient monitoring devices, at-home diagnostic tools, and improved telehealth platforms are expanding what's possible in virtual care, gradually blurring the lines between remote and in-person capabilities.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Your Healthcare, Your Choice
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The expansion of telehealth has given patients unprecedented flexibility in accessing healthcare. Rather than viewing telehealth and in-person visits as competing options, think of them as complementary tools in your healthcare toolkit. The right choice depends on your specific situation, the nature of your health concern, and your personal preferences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Talk with your provider about which visit type makes the most sense for you. A responsive practice will build a plan that uses virtual visits where they work and in-office visits where they matter.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you are looking for a primary care practice in Cape Girardeau, Missouri that offers both in-office care and telehealth, we are here to help. Visits are by appointment: call (573) 200-6143 or request an appointment online, and existing patients can self-schedule on the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a>.
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
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri Licensed Collaborating Physician, caring for patients in Cape Girardeau and Southeast Missouri.</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center font-display">
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover why routine checkups are essential for catching health issues early and maintaining long-term wellness.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/understanding-direct-primary-care-is-it-right-for-you" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Direct Primary Care: Is It Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How Guardian Direct Care compares with using your insurance benefits, and who each option suits.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Chronic Disease</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Managing Multiple Chronic Conditions: A Coordinated Approach
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How one care team keeps several long-term conditions, and their treatments, working together.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 font-display">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Telehealth or in office, our team in Cape Girardeau will help you pick the visit that fits the problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Schedule Your Visit
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/60 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment.
          </p>
        </div>
      </section>
    </main>
  )
}