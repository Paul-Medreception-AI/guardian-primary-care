import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.guardianprimary.com'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/reviews`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const servicePages = [
    { url: `${base}/services/family-primary-care`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/dementia-aging-adult-care`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/wellness-prevention`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/women-s-wellness`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/school-sports-employment-physicals`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/guardian-direct-care`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const conditionPages = [
    { url: `${base}/conditions/diabetes-and-blood-sugar-management`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hypertension-high-blood-pressure`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/high-cholesterol-and-lipid-disorders`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/asthma-and-respiratory-conditions`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/chronic-obstructive-pulmonary-disease-copd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/thyroid-disorders`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/obesity-and-weight-management`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/anxiety-and-depression`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/dementia-and-alzheimer-s-disease`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/osteoarthritis-and-joint-pain`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/osteoporosis`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/heart-disease-and-cardiovascular-conditions`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/acid-reflux-and-gerd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/irritable-bowel-syndrome-ibs`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/urinary-tract-infections`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/skin-conditions-and-rashes`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/allergies-and-sinus-problems`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/insomnia-and-sleep-disorders`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/migraines-and-headaches`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/anemia`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/vitamin-deficiencies`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/acute-illnesses-cold-flu-covid-19`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/minor-injuries-and-wound-care`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/women-s-health-concerns`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/geriatric-health-management`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const blogPages = [
    { url: `${base}/blog/understanding-direct-primary-care-is-it-right-for-you`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-importance-of-annual-wellness-exams-for-adults`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/high-blood-pressure-the-silent-killer-you-can-control`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/recognizing-the-early-signs-of-dementia-in-aging-loved-ones`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/supporting-caregivers-resources-for-families-caring-for-deme`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/women-s-health-after-40-what-screenings-you-need-and-when`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-mental-health-and-physical-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/nutrition-counseling-how-diet-impacts-chronic-disease-manage`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/when-to-choose-urgent-care-vs-primary-care-for-common-illnes`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-your-cholesterol-numbers-beyond-total-choleste`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/thyroid-disorders-symptoms-testing-and-treatment-options`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-chronic-pain-without-opioids-alternative-approaches`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/asthma-management-controlling-symptoms-for-better-quality-of`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/preventative-cancer-screenings-which-tests-you-need-and-when`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/heart-disease-prevention-small-changes-that-protect-your-hea`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/sleep-and-health-why-quality-sleep-matters-for-overall-welln`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-medicare-primary-care-coverage-for-seniors`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-exercise-in-chronic-disease-management`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/osteoporosis-prevention-and-treatment-protecting-your-bone-h`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/copd-breathing-easier-with-proper-management`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/sports-physicals-for-young-athletes-what-parents-need-to-kno`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-seasonal-allergies-beyond-over-the-counter-medicati`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/weight-management-evidence-based-approaches-that-actually-wo`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-shingles-vaccine-who-needs-it-and-why-it-matters`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-and-managing-migraine-headaches`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/urinary-tract-infections-prevention-and-treatment-strategies`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/prediabetes-your-opportunity-to-prevent-type-2-diabetes`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-anxiety-in-primary-care-when-to-seek-additional-sup`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/skin-cancer-prevention-and-early-detection`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/vitamin-d-deficiency-symptoms-testing-and-supplementation`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-gerd-and-acid-reflux-lifestyle-and-medical-approach`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/blood-work-basics-understanding-your-lab-results`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/building-a-relationship-with-your-primary-care-provider`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/telehealth-vs-in-person-visits-choosing-the-right-option`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/flu-vaccines-myths-facts-and-why-you-should-get-one`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-arthritis-pain-medications-and-beyond`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/hormone-changes-and-menopause-what-to-expect-and-how-to-mana`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/caring-for-aging-parents-medical-decision-making-and-advance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/direct-primary-care-vs-traditional-insurance`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/telehealth-vs-in-person-visits`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/urgent-care-vs-primary-care`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/medicare-vs-medicare-advantage`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/annual-physical-vs-wellness-visit`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/cape-girardeau-mo`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
  ]

  const priorRecoveryPages = [
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}