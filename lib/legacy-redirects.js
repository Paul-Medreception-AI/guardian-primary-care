// Legacy URL map for the Webflow site this Next.js build replaces.
//
// www.guardianprimary.com published 70 indexed URLs (52 of them under
// /conditions-symptoms/*). None of those paths exist in this app, so without
// these rules every one of them 404s the day the DNS cuts over, and whatever
// ranking they hold is thrown away. Slugs were taken from the live sitemap.xml
// on 2026-09-16, not guessed.
//
// Where the old page has a real equivalent here, it maps to that page. Where it
// does not (a condition this site has no page for yet), it maps to the hub
// rather than to an approximation, so we never send a searcher to a page about a
// different condition.

// Old /conditions-symptoms/<slug>  ->  new path
const CONDITION_MAP = {
  // direct equivalents
  diabetes: '/conditions/diabetes-and-blood-sugar-management',
  hypertension: '/conditions/hypertension-high-blood-pressure',
  highcholesterol: '/conditions/high-cholesterol-and-lipid-disorders',
  asthma: '/conditions/asthma-and-respiratory-conditions',
  copd: '/conditions/chronic-obstructive-pulmonary-disease-copd',
  obesity: '/conditions/obesity-and-weight-management',
  anxiety: '/conditions/anxiety-and-depression',
  sufferingfromdepression: '/conditions/anxiety-and-depression',
  'post-traumatic-stress-disorder': '/conditions/anxiety-and-depression',
  'dementia-including-alzheimers': '/conditions/dementia-and-alzheimer-s-disease',
  arthritis: '/conditions/osteoarthritis-and-joint-pain',
  gout: '/conditions/osteoarthritis-and-joint-pain',
  fibromyalgia: '/conditions/osteoarthritis-and-joint-pain',
  'tennis-elbow': '/conditions/osteoarthritis-and-joint-pain',
  carpaltunnelsyndrome: '/conditions/osteoarthritis-and-joint-pain',
  'low-back-pain': '/conditions/osteoarthritis-and-joint-pain',
  osteoporosis: '/conditions/osteoporosis',
  'heart-disease': '/conditions/heart-disease-and-cardiovascular-conditions',
  cad: '/conditions/heart-disease-and-cardiovascular-conditions',
  afib: '/conditions/heart-disease-and-cardiovascular-conditions',
  stroke: '/conditions/heart-disease-and-cardiovascular-conditions',
  pad: '/conditions/heart-disease-and-cardiovascular-conditions',
  'chronic-venous-insufficiencies': '/conditions/heart-disease-and-cardiovascular-conditions',
  ibs: '/conditions/irritable-bowel-syndrome-ibs',
  'chronic-constipation': '/conditions/irritable-bowel-syndrome-ibs',
  hemorrhoids: '/conditions/irritable-bowel-syndrome-ibs',
  'frequent-urinary-tract-infections-utis': '/conditions/urinary-tract-infections',
  'urinary-leakage-incontinence': '/conditions/urinary-tract-infections',
  eczema: '/conditions/skin-conditions-and-rashes',
  'chronic-sinusitis': '/conditions/allergies-and-sinus-problems',
  'sleep-apnea': '/conditions/insomnia-and-sleep-disorders',
  migraines: '/conditions/migraines-and-headaches',
  'womens-wellness': '/conditions/women-s-health-concerns',
  contraception: '/conditions/women-s-health-concerns',
  parkinsons: '/conditions/geriatric-health-management',
  'age-related-hearing-loss': '/conditions/geriatric-health-management',
  // these map to a service, not a condition
  'routine-annual-wellness': '/services/wellness-prevention',
  'cancer-screenings': '/services/wellness-prevention',
  'exercise-activity': '/services/wellness-prevention',
  'nutrition-counseling': '/services/wellness-prevention',
  'role-of-holistic-integrative-care': '/services/wellness-prevention',
  'school-sports-employment-screenings': '/services/school-sports-employment-physicals',
  'common-primary-care-referrals': '/services/family-primary-care',
  // no equivalent page yet: send to the hub rather than to a near-miss condition
  ckd: '/conditions',
  'chronic-hepatitis': '/conditions',
  'interstitial-lung-disease-ild': '/conditions',
  'enlarged-prostate': '/conditions',
  ed: '/conditions',
  sti: '/conditions',
  tinnitus: '/conditions',
  'tmj-temporomandibular-joint': '/conditions',
  'vertigo-vs-dizziness': '/conditions',
}

// Old top-level Webflow pages -> new path
const PAGE_MAP = {
  '/gpcteam': '/team',
  '/testimonials': '/reviews',
  '/careaccess': '/insurance',
  '/primary-care': '/services/family-primary-care',
  '/aging-services': '/services/dementia-aging-adult-care',
  '/weight-loss': '/conditions/obesity-and-weight-management',
  '/mental-health': '/conditions/anxiety-and-depression',
  '/aesthetics': '/services',
  '/guardian-performance': '/services',
  '/hormones-testosterone-therapy': '/services',
  // Existing patients bookmarked this; it was a page that linked out to the portal.
  '/patientportal': 'https://www.patientally.com/login',
  '/scheduleappointment': '/contact',
  '/referrals-affiliates': '/about',
  '/search': '/',
  '/brand-guidelines': '/about',
  '/business-calendars': '/contact',
  '/education-development': '/about',
}

function legacyRedirects() {
  const rules = []
  for (const [slug, destination] of Object.entries(CONDITION_MAP)) {
    rules.push({ source: `/conditions-symptoms/${slug}`, destination, permanent: true })
  }
  for (const [source, destination] of Object.entries(PAGE_MAP)) {
    rules.push({ source, destination, permanent: true })
  }
  // Anything else that was under the old conditions hub lands on the new hub.
  rules.push({ source: '/conditions-symptoms', destination: '/conditions', permanent: true })
  rules.push({ source: '/conditions-symptoms/:slug*', destination: '/conditions', permanent: true })
  return rules
}

module.exports = { legacyRedirects, CONDITION_MAP, PAGE_MAP }
