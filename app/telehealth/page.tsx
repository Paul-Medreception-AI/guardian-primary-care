import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Telehealth Services</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Expert primary care from the comfort of your home
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">
            How Telehealth Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Schedule Your Visit</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Call our office or use our patient portal to book your telehealth appointment at a time that works for you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Connect with Your Provider</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your appointment via our secure video platform from any device with internet access.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Get Quality Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive the same comprehensive care you'd get in our office, including prescriptions and follow-up plans.
              </p>
            </div>
          </div>

          {/* What's Available */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Available via Telehealth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Follow-up appointments for chronic conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Medication management and refills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Minor illness consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Mental health and wellness check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Nutrition and lifestyle counseling</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Lab and test result reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Dementia care consultations and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Requires In-Person Visit</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Physical examinations and procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Sports, school, and employment physicals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Laboratory blood draws and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Women's wellness annual exams</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Immunizations and vaccines</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Urgent care requiring immediate examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-muted)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Initial new patient comprehensive evaluations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">
            Benefits of Telehealth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">No Commute Required</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Save time and gas. Connect with your provider from home, work, or anywhere you have internet access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Same-Day Availability</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Flexible scheduling makes it easier to get care when you need it, often with same-day appointments available.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Private & Confidential</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Discuss your health concerns in the privacy of your own space without worrying about waiting room exposure.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Works from Any Device</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join appointments from your smartphone, tablet, or computer with a simple link—no special software required.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Covered by Insurance</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most major insurance plans cover telehealth visits just like in-person appointments. Direct care members enjoy unlimited access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-3">Secure HIPAA-Compliant Platform</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your health information is protected with bank-level encryption and full HIPAA compliance for total peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] mb-8 text-center">
              What You Need for Your Telehealth Visit
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A smartphone, tablet, laptop, or desktop computer with a working camera and microphone. Most devices manufactured in the last 5 years are fully compatible.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Internet Connection
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A reliable high-speed internet connection with at least 3 Mbps upload and download speed. Wi-Fi or cellular data both work well.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Quiet, Private Space
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Find a quiet location where you can speak freely and confidentially with your provider without interruptions or background noise.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Supported Platforms
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                  Our telehealth platform works seamlessly on:
                </p>
                <ul className="space-y-2 ml-7">
                  <li className="text-[var(--color-muted)]">• Windows, Mac, and Linux computers</li>
                  <li className="text-[var(--color-muted)]">• iPhone and iPad (iOS 12 or later)</li>
                  <li className="text-[var(--color-muted)]">• Android phones and tablets (version 6.0 or later)</li>
                  <li className="text-[var(--color-muted)]">• All modern web browsers (Chrome, Safari, Firefox, Edge)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[var(--color-accent)]">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  <span className="font-semibold">Before your appointment:</span> Test your device camera and microphone, ensure you're in a well-lit area, and have any relevant medical records or medication lists ready to discuss with your provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-white mb-6">
            Ready to Try Telehealth?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your first virtual visit today and experience convenient, quality care from wherever you are.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}