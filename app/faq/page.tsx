import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Guardian Primary Care',
  description: 'Get answers to common questions about our primary care services, direct primary care membership, insurance, appointments, and patient care in Birmingham, AL.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you accept my insurance?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Guardian Primary Care is in-network with most major insurance plans, including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, Medicare, and Medicaid. We recommend contacting our office with your specific insurance information so we can verify coverage and benefits before your first visit. Our staff is happy to help you understand your out-of-pocket costs, copays, and deductibles. We also offer a Direct Primary Care membership option for those who prefer to bypass insurance entirely.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What is Direct Primary Care and how does it work?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Direct Primary Care (DPC) is a membership-based healthcare model where patients pay a monthly or annual fee for enhanced access to primary care services. Instead of billing insurance for every visit, our DPC members enjoy longer appointment times, same-day or next-day scheduling, direct communication with providers via phone, email, or text, and significantly reduced wait times. This model removes the administrative complexity of insurance billing and allows us to focus entirely on your health. Many DPC members also maintain a high-deductible health insurance plan for catastrophic coverage while enjoying affordable, predictable primary care costs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>How do I become a new patient?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Becoming a new patient is simple. Contact our office by phone or through our website to schedule a new patient appointment. We'll ask for basic demographic and insurance information, and we'll send you new patient forms to complete before your first visit. Plan to arrive 10-15 minutes early to complete any remaining paperwork. During your initial visit, we'll conduct a comprehensive health assessment, review your medical history, discuss your health goals, and create a personalized care plan. We welcome patients of all ages and families seeking a medical home in Birmingham.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What should I bring to my first appointment?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Please bring a valid photo ID, your insurance card (if applicable), a list of all current medications including dosages, any relevant medical records or test results from previous providers, and a list of questions or health concerns you'd like to discuss. If you have a chronic condition, bringing recent lab results or specialist reports is very helpful. We also recommend bringing a payment method for any copays or out-of-pocket costs. Arriving prepared helps us make the most of your appointment time and ensures we have all the information needed to provide excellent care from day one.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you offer same-day appointments?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, we strive to accommodate same-day appointments for urgent medical concerns whenever possible. We understand that illness and injury don't follow a schedule, and we reserve appointment slots each day for acute care needs. If you're experiencing a non-emergency urgent health issue, please call our office as early in the day as possible to maximize availability. Our Direct Primary Care members typically have priority access to same-day scheduling. For life-threatening emergencies, please call 911 or visit your nearest emergency room.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you offer telehealth or virtual visits?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely. We offer secure telehealth appointments for many types of visits, including sick visits, medication management, mental health consultations, chronic disease follow-ups, and routine check-ins. Telehealth appointments provide the convenience of receiving care from home, your workplace, or anywhere with a reliable internet connection. While some conditions require an in-person exam, many concerns can be effectively addressed through a video visit. Our staff will help determine if telehealth is appropriate for your specific needs when you schedule your appointment.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What ages do you treat?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Guardian Primary Care provides comprehensive care for patients of all ages, from pediatrics through geriatrics. We're proud to serve as a true family practice where children, adults, and seniors can all receive care under one roof. Whether you need a well-child check, a sports physical for your teenager, chronic disease management for a parent, or specialized dementia care for an aging loved one, our providers have the training and experience to meet your family's diverse healthcare needs. We believe in building long-term relationships that span generations.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>How do I request a prescription refill?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Prescription refills can be requested through our patient portal, by phone, or through your pharmacy. We ask that you submit refill requests at least 48-72 hours before you run out of medication to allow adequate processing time. Please note that some medications, particularly controlled substances, may require an office visit before refills can be authorized. We recommend scheduling a medication management appointment if you're on multiple long-term prescriptions so we can review your regimen, assess effectiveness, monitor for side effects, and ensure your treatment plan remains optimal for your health goals.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What is your cancellation policy?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We require at least 24 hours' notice for appointment cancellations or rescheduling. Late cancellations or missed appointments (no-shows) without adequate notice may result in a fee, as they prevent other patients from accessing that appointment slot. We understand that emergencies and unexpected circumstances arise, and we'll work with you on a case-by-case basis. To cancel or reschedule your appointment, please call our office as soon as possible. Respecting our cancellation policy helps us maintain appointment availability for all patients and ensures our practice runs efficiently.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do I need a referral to see a specialist?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Whether you need a referral depends on your insurance plan. Some insurance plans, particularly HMOs, require a referral from your primary care provider before seeing a specialist. PPO plans typically allow you to see specialists without a referral, though getting one may help with care coordination and insurance coverage. Regardless of insurance requirements, we're happy to provide referrals and help coordinate your specialist care. We maintain relationships with excellent specialists throughout Birmingham and will ensure your care team communicates effectively to provide seamless, comprehensive healthcare.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What payment methods do you accept?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We accept cash, checks, credit cards (Visa, MasterCard, Discover, American Express), and debit cards. For patients with insurance, we'll bill your insurance company directly and collect any applicable copays, coinsurance, or deductibles at the time of service. For uninsured patients or those choosing our Direct Primary Care membership, we offer transparent, affordable pricing and flexible payment options. If you have questions about costs or payment arrangements, please don't hesitate to speak with our billing staff. We believe financial concerns should never be a barrier to receiving quality healthcare.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Can I access my medical records online?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, all patients have access to our secure online patient portal where you can view test results, review visit summaries, access your medical history, request prescription refills, communicate with your care team, schedule appointments, and update your personal information. The portal is available 24/7 from any device with internet access. We'll provide login credentials and instructions during your first visit. Having online access to your medical records empowers you to be an active participant in your healthcare and provides convenient access to important health information whenever you need it.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What should I do if I have a medical emergency after hours?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              For life-threatening emergencies such as chest pain, difficulty breathing, severe bleeding, loss of consciousness, or stroke symptoms, call 911 immediately or go to your nearest emergency room. For urgent but non-emergency concerns after hours, our answering service can connect you with an on-call provider who can provide guidance and triage your concern. You can also utilize telehealth urgent care services for many after-hours needs. Direct Primary Care members have enhanced after-hours access to providers via phone, text, or email. We take your health seriously around the clock and will ensure you receive appropriate guidance whenever health concerns arise.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you provide annual wellness exams and preventive care?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely. Preventive care is a cornerstone of our practice philosophy. We provide comprehensive annual wellness exams that include physical examination, age-appropriate health screenings, cancer screenings (mammograms, colonoscopies, skin checks), immunizations, cardiovascular risk assessment, mental health screening, and lifestyle counseling. Most insurance plans cover annual wellness visits at 100% with no copay when billed as preventive care. These visits are essential for catching health issues early, maintaining optimal wellness, and building a strong patient-provider relationship. We strongly encourage all patients to schedule an annual exam as a foundation of proactive healthcare.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you treat chronic conditions like diabetes and high blood pressure?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, chronic disease management is one of our core services. We provide comprehensive care for conditions including diabetes, hypertension, high cholesterol, asthma, COPD, thyroid disorders, heart disease, arthritis, and many others. Our approach includes medication management, lifestyle counseling, regular monitoring, patient education, and coordination with specialists when needed. We believe in empowering patients with the knowledge and tools to actively manage their conditions and achieve the best possible health outcomes. Regular follow-up appointments and consistent communication are key to successful chronic disease management, and we're committed to being your partner every step of the way.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Do you provide mental health services?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We integrate mental health care into our primary care services, recognizing that mental and physical health are inseparably connected. We provide screening, diagnosis, and treatment for common mental health conditions including depression, anxiety, ADHD, and stress-related disorders. We can prescribe and manage psychiatric medications when appropriate and provide counseling and lifestyle interventions. For patients requiring specialized mental health services or intensive therapy, we maintain referral relationships with excellent psychiatrists, psychologists, and counselors in the Birmingham area. If you're experiencing a mental health crisis, please call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>Can you help coordinate care with my specialists?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Care coordination is an essential part of comprehensive primary care. We actively communicate with your specialists, review their recommendations, monitor your progress, and ensure all aspects of your care work together cohesively. We'll track specialist appointments, follow up on test results, integrate specialist recommendations into your overall care plan, and serve as your healthcare quarterback to prevent gaps or duplications in care. When you have multiple providers, it's crucial to have a primary care home that maintains the big picture of your health. We're committed to being that central hub that keeps your healthcare organized, efficient, and patient-centered.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>What makes Guardian Primary Care different from other practices?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Guardian Primary Care combines the best of traditional and innovative healthcare delivery. We offer both insurance-based care and Direct Primary Care membership, giving patients flexibility in how they access services. Our board-certified providers prioritize building genuine, long-term relationships with patients and take the time to truly listen and understand your unique health journey. We provide care for all ages under one roof, making us a true family practice. We embrace technology through telehealth and patient portals while maintaining the personal touch of compassionate, face-to-face care. Our commitment to access, trust, and thoughtful care means you'll never feel like just a number—you're a valued partner in a healthcare relationship built on mutual respect and shared goals.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              <span>How long are typical appointments?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Appointment length varies based on the type and complexity of your visit. Routine sick visits or follow-ups typically last 15-20 minutes, while annual wellness exams and new patient appointments are scheduled for 30-45 minutes to allow adequate time for comprehensive assessment. Direct Primary Care members often enjoy longer appointment times—sometimes 45-60 minutes—because we're not constrained by insurance billing requirements. We believe quality healthcare requires adequate time, and we structure our schedule to minimize rushing while respecting your time. Our goal is for you to leave every appointment feeling heard, informed, and confident in your care plan.
              </div>
          </details>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our team is here to help. Contact us today and we'll be happy to answer any questions about our services, insurance, or how we can support your health journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}