import Link from 'next/link'

export const metadata = {
  title: 'New Patients | Guardian Primary Care',
  description: 'Everything you need to know before your first visit to Guardian Primary Care in Birmingham, AL. Learn what to expect, what to bring, and how to prepare for your appointment.',
}

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">
            New Patients
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Everything you need to know before your first visit
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-20">
            Your First Visit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="text-[var(--color-primary)] font-serif text-7xl font-light mb-6">01</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our patient portal or call our office. We offer flexible scheduling with same-day availability for urgent concerns.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="text-[var(--color-primary)] font-serif text-7xl font-light mb-6">02</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete paperwork, or fill out forms online ahead of time to expedite your check-in process.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="text-[var(--color-primary)] font-serif text-7xl font-light mb-6">03</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your provider will conduct a comprehensive health assessment. Plan for 60-90 minutes to thoroughly discuss your medical history and health goals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="text-[var(--color-primary)] font-serif text-7xl font-light mb-6">04</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Together, we'll create a personalized care plan that aligns with your health objectives and lifestyle, ensuring you feel confident about next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-20">
            What to Bring
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-2">Photo ID & Insurance Card</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Bring a valid government-issued photo ID and your current insurance card (both sides). We'll make copies for your file and verify your coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-2">Medication List</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    A complete list of current medications including dosages, over-the-counter drugs, vitamins, and supplements. Bring the bottles if easier.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-2">Prior Medical Records</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Recent test results, imaging reports, or records from previous providers help us understand your complete health history and avoid duplicate testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-2">Emergency Contact Information</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Name, relationship, and phone number for someone we can contact in case of an emergency or if we need to reach you urgently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
              Patient Forms
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
              Forms are available at our office or can be completed at your first appointment. Arriving early ensures we can review everything before your provider visit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">New Patient Registration:</span> Basic demographic and contact information</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Medical History Questionnaire:</span> Comprehensive health background and family history</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Consent for Treatment:</span> Authorization for medical care and procedures</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">HIPAA Authorization:</span> Privacy practices and protected health information</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <p className="text-[var(--color-ink)]"><span className="font-semibold">Insurance Information:</span> Coverage details and payment responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-20">
            Telehealth Visits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Device Requirements</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Any smartphone, tablet, or computer with a camera and microphone. Stable internet connection recommended for best video quality.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Privacy & Security</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Choose a quiet, private location for your appointment. Our telehealth platform is HIPAA-compliant and encrypted to protect your information.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Appointment Access</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You'll receive a secure link via email or text before your appointment. Click to join at your scheduled time — no software download required.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mt-12 animate-fade-up">
            <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">When to Choose Telehealth</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Telehealth is ideal for follow-up appointments, medication management, minor illness consultations, mental health support, and routine check-ins. Some conditions require in-person evaluation — our team will guide you to the best visit type for your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-20">
            Office Policies
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We request 24-hour notice for appointment cancellations or rescheduling. This allows us to offer your time slot to another patient who needs care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Late Arrivals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Patients arriving more than 15 minutes late may need to reschedule to ensure quality care time for all appointments. Please call if you're running late.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Missed Appointments</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Repeated no-shows without advance notice may result in dismissal from the practice. We value your time and ask for the same consideration.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mt-12 shadow-sm animate-fade-up">
            <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Payment & Insurance</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              We are in-network with most major insurance plans. Co-pays and deductibles are due at the time of service. For patients without insurance or those enrolled in our Direct Primary Care membership, payment is due at the time of visit.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              If you have questions about coverage, billing, or our Direct Primary Care membership option, please contact our office before your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your first appointment today and experience comprehensive, compassionate primary care in Birmingham, AL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}