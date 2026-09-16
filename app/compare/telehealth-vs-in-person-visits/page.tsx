import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Telehealth vs. In-Person Visits: When Each Makes Sense for Primary Care | Guardian Primary Care',
  description: 'Compare telehealth and in-person primary care visits in Cape Girardeau, MO. Learn when each option is most effective, costs, convenience, and how to choose the right care approach for your needs.',
}

export default function TelehealthVsInPersonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home › Resources › Comparison</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            Telehealth vs. In-Person Visits: When Each Makes Sense for Primary Care
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Understanding the benefits and limitations of virtual and traditional primary care visits to make the best choice for your health in Cape Girardeau, MO
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Factor</div>
              <div className="p-6 border-r border-white/20">Telehealth Visits</div>
              <div className="p-6">In-Person Visits</div>
            </div>
            
            {/* Convenience */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Convenience
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                High: no travel, flexible scheduling, from wherever you are
              </div>
              <div className="p-6">
                Moderate: requires travel to the office and time set aside
              </div>
            </div>
            
            {/* Scope of Care */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Scope of Care
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Limited: consultations, follow-ups, prescription refills, minor concerns
              </div>
              <div className="p-6">
                Comprehensive: full exams, lab work, in-office procedures, acute concerns
              </div>
            </div>
            
            {/* Physical Examination */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Physical Examination
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Not possible: visual assessment only
              </div>
              <div className="p-6">
                Complete: hands-on exam, vital signs, in-office diagnostics
              </div>
            </div>
            
            {/* Wait Times */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Wait Times
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Minimal: a virtual slot is often easier to fit in
              </div>
              <div className="p-6">
                Variable: depends on what is open on the schedule
              </div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Cost Factors
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                No travel, no parking, and usually less time away from work
              </div>
              <div className="p-6">
                Your plan&apos;s copay or deductible applies, plus travel and time away from work
              </div>
            </div>
            
            {/* Technology Requirements */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Technology Requirements
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Required: a smartphone, tablet or computer with an internet connection
              </div>
              <div className="p-6">
                None: just come to the office
              </div>
            </div>
            
            {/* Privacy */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Privacy
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Flexible: join from a private space at home
              </div>
              <div className="p-6">
                Private exam rooms in a professional setting
              </div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Best For
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Follow-ups, medication management, mental health, chronic condition monitoring, minor illnesses
              </div>
              <div className="p-6">
                New symptoms, physical exams, lab work, vaccinations, complex conditions, urgent concerns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            <Image
              src="/images/site/care-access.jpg"
              alt="A patient connecting with a primary care team, showing the ways care can be accessed"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-[var(--color-muted)] text-center mt-4">
            Guardian Primary Care offers both in-person and telehealth appointments.
          </p>
        </div>
      </section>

      {/* Deep Dive: Telehealth */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                Telehealth Visits: Virtual Care Delivered
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="text-lg leading-relaxed mb-6">
                Telehealth has widened access to primary care in Cape Girardeau and across Southeast Missouri, letting patients connect with their provider by video from home, from work, or anywhere with an internet connection. It works best for the visits that do not need hands-on examination: medication refills, follow-ups, mental health support, ongoing management of a stable chronic condition, and minor symptoms that can be assessed by talking and looking.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                For many everyday concerns, such as an upper respiratory infection, a urinary tract infection, a visible rash or a mental health check-in, a virtual visit can get you the same plan of care you would leave the office with. The appeal is the time saved (no drive, no waiting room), less exposure to whatever is going around, and the ability to fit an appointment around work and family.
              </p>
              
              <p className="text-lg leading-relaxed">
                Telehealth suits established patients with stable chronic conditions, anyone needing a prescription renewal, patients seeking mental health support, and anyone with a minor concern that does not require a hands-on exam, such as a cough, allergy symptoms or a mild rash visible on camera. It is also a good fit for busy working parents and for patients who find travel difficult.
              </p>
            </div>
          </div>

          {/* Deep Dive: In-Person */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                In-Person Visits: Comprehensive Traditional Care
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="text-lg leading-relaxed mb-6">
                In-person visits remain the standard for comprehensive primary care in Cape Girardeau, particularly when a physical examination is what drives the diagnosis. That includes listening to heart and lung sounds, examining the abdomen, checking reflexes, looking in the ears and throat, measuring vital signs with proper equipment, and performing in-office procedures such as wound care or a skin lesion removal. Some things simply cannot be evaluated through a screen.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Office visits also allow for testing on site: blood draws, urinalysis and other point-of-care tests that give results quickly and let treatment decisions happen in the same visit. For new patients, a first in-person visit establishes a baseline examination and builds the relationship with your provider face to face, which many patients find more personal and more reassuring than a video call.
              </p>
              
              <p className="text-lg leading-relaxed">
                In-person care is the right choice for acute symptoms (chest pain, severe abdominal pain, an injury), new or unexplained problems, annual physicals with full screening, anyone who prefers hands-on care, and anything needing a procedure or lab work. Choose it when you need a thorough physical examination, when symptoms are worrying or unclear, or when you are establishing care with a new provider in Cape Girardeau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Option Is Right for You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Choose Telehealth */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Choose Telehealth If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're an established patient with a known condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a prescription refill or medication adjustment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're following up on test results or a previous visit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have minor symptoms (cold, allergies, mild rash)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need mental health support or counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Travel or scheduling makes office visits difficult</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're managing a stable chronic condition (diabetes, hypertension)</span>
                  </li>
                </ul>
              </div>
              
              {/* Choose In-Person */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose In-Person If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're a new patient establishing care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a physical examination (chest pain, abdominal pain, lumps)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You require lab work, blood draws, or diagnostic tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're due for an annual physical or preventive screening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need vaccinations or injections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have new or unexplained symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer meeting your provider face to face</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Hybrid Approach</p>
              <p className="text-[var(--color-muted)]">
                Many patients do best with a mix of the two: in-person visits for full exams and new problems, telehealth for follow-ups and routine management. Guardian Primary Care in Cape Girardeau offers both, and our team can help you pick the right one each time. Call us at (573) 200-6143 if you are not sure which to book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Common Questions About Telehealth vs. In-Person Care
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Is telehealth as effective as in-person care for primary care needs?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>For many common concerns, a virtual visit can deliver the same plan of care as an office visit: respiratory infections, urinary tract infections, visible skin conditions, mental health support and routine management of a stable chronic condition. The key is choosing the right visit for the right problem. When a concern needs a hands-on assessment, lab work or a procedure, an in-person visit is the better choice, and your provider will tell you if that is the case.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Does insurance cover telehealth visits the same as office visits?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Many plans now cover telehealth on similar terms to an office visit, but coverage does vary, so it is worth checking your specific benefits. Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, and our team is glad to help you check what your plan covers before you book. If you would rather have a flat published price instead, Guardian Direct Care is our membership alternative, and telehealth is part of the care it covers.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What technology do I need for a telehealth appointment?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>You will need a device with a camera and microphone (a smartphone, tablet or computer), a reliable internet connection, and a web browser or the telehealth app. Find a quiet, private spot with good lighting where you can speak freely. Your visit is confidential, and it does not take any technical skill. If you can make a video call, you can do a telehealth visit.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Can my provider prescribe medications during a telehealth visit?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes. Your provider can prescribe most medications during a telehealth visit, including antibiotics and medications for ongoing conditions. Prescriptions are sent electronically to the pharmacy you choose, exactly as they would be after an office visit. Controlled substances carry restrictions that vary by state, but most routine prescriptions can be handled virtually.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What if my telehealth visit reveals I need to be seen in person?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Your provider will tell you if you need to be seen in the office, based on your symptoms and what can be observed on the call. If that happens, we will get you on the schedule as soon as we can. A telehealth visit is often a useful first step for working out how urgent something is. Guardian Primary Care is by appointment, and Guardian Direct Care members have same-day or next-day sick visits included.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white animate-fade-up">
            <h2 className="font-display text-4xl font-light mb-6">
              Not Sure Which Option Is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tell us what is going on and our care team will help you choose the right visit, whether that is in person, virtual, or a mix of both.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105 hover:shadow-xl"
              >
                Discuss Your Options
              </a>
              <a
                href="tel:+15732006143"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all"
              >
                Call (573) 200-6143
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}