import Link from 'next/link'

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Resources & Patient Education</h1>
          <p className="text-xl text-white/90">Evidence-based information to support your health journey</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Featured Article</div>
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">Direct Primary Care: A Better Way to Experience Healthcare</h2>
            <div className="prose prose-lg max-w-none text-[var(--color-muted)] space-y-4 mb-8">
              <p>Direct Primary Care (DPC) is transforming how patients and doctors interact by removing insurance companies from the equation. Instead of navigating copays, deductibles, and authorization delays, DPC offers a straightforward monthly membership that gives you enhanced access to your physician, longer appointments, and personalized care focused entirely on your wellbeing.</p>
              <p>With DPC, you gain same-day or next-day appointments, direct access to your provider via phone, text, or email, and visits that last as long as you need—not just the 15 minutes insurance companies allow. This model restores the patient-physician relationship to what it should be: a partnership built on trust, time, and thoughtful attention to your unique health needs.</p>
              <p>Whether you're managing chronic conditions, seeking preventative care, or simply want a healthcare home that prioritizes you, Direct Primary Care offers transparent pricing, no surprise bills, and a level of care that insurance-driven medicine simply cannot match. It's healthcare the way it was meant to be.</p>
            </div>
            <Link href="/blog/direct-primary-care-better-healthcare" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium">
              Read More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Chronic Disease</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Managing Type 2 Diabetes: What Every Patient Should Know</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Understanding your diagnosis, treatment options, and lifestyle modifications can help you take control of your diabetes and prevent complications. Learn the essentials of blood sugar management and when to seek specialist care.</p>
              <Link href="/blog/managing-type-2-diabetes" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Prevention</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Cancer Screening Guidelines: When to Start and What to Expect</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Early detection saves lives. Discover which cancer screenings you need based on your age, gender, and risk factors, and learn what each screening involves so you can approach them with confidence.</p>
              <Link href="/blog/cancer-screening-guidelines" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Aging & Memory</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Early Signs of Dementia: When Memory Loss Isn't Normal Aging</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Not all memory changes are cause for concern, but knowing the difference between typical aging and early dementia symptoms helps families seek care sooner and plan thoughtfully for the future.</p>
              <Link href="/blog/early-signs-dementia" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Women's Health</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Understanding Hormone Changes: From Perimenopause to Menopause</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Hormone fluctuations affect mood, energy, sleep, and overall wellness. Learn what to expect during perimenopause and menopause, and explore treatment options that can help you feel like yourself again.</p>
              <Link href="/blog/hormone-changes-menopause" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Mental Wellness</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">The Connection Between Physical and Mental Health in Primary Care</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Your mind and body are deeply connected. Learn how primary care providers address anxiety, depression, and stress alongside physical health to support your complete wellbeing.</p>
              <Link href="/blog/physical-mental-health-connection" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Pediatric Care</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Well-Child Visits: Why Regular Check-Ups Matter for Growing Kids</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Regular pediatric appointments do more than track growth—they monitor development, ensure vaccinations are current, and give parents a trusted partner in raising healthy, thriving children.</p>
              <Link href="/blog/well-child-visits-importance" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Heart Health</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">High Blood Pressure: The Silent Risk Factor You Can Control</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Hypertension often has no symptoms but significantly increases your risk of heart disease and stroke. Discover how lifestyle changes and medication work together to protect your cardiovascular health.</p>
              <Link href="/blog/high-blood-pressure-control" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Nutrition</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Evidence-Based Nutrition: What Really Works for Long-Term Health</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Cut through diet fads and conflicting advice. Learn the fundamentals of nutrition science and how to build eating habits that support energy, disease prevention, and longevity.</p>
              <Link href="/blog/evidence-based-nutrition" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Preventive Care</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Your Annual Physical: Making the Most of Your Preventive Visit</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">Annual wellness exams are your opportunity to catch health issues early and strengthen your partnership with your provider. Learn what to expect and how to prepare for a productive appointment.</p>
              <Link href="/blog/annual-physical-preventive-visit" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6 animate-fade-up">Ready to Experience Thoughtful, Personalized Care?</h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up">Schedule your appointment with Guardian Primary Care today and discover healthcare built around you.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105 animate-fade-up">
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}