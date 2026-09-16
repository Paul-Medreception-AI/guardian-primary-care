// Shared YouTube embed. Uses youtube-nocookie so a visitor reading about a
// medical condition is not cookied by an ad network on a page they may consider
// private. Server component, no client JS.
//
// Video ids are Guardian's own uploads (Guardian Health and Preston Holifield NP)
// scraped from www.guardianprimary.com on 2026-09-16 — see GUARDIAN_VIDEOS below.
export function VideoEmbed({
  videoId,
  title,
  className = '',
}: {
  videoId: string
  title: string
  className?: string
}) {
  const src =
    'https://www.youtube-nocookie.com/embed/' +
    videoId +
    '?rel=0&vq=hd1080&cc_load_policy=0&iv_load_policy=3'
  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black ${className}`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

// Guardian's OWN channels only. The live site also embeds explainers from KFF,
// Blue Cross, the AAP, CMS and Strive Compounding Pharmacy; those are other
// organisations' content and are deliberately left off this site.
export const GUARDIAN_VIDEOS = {
  welcome: {
    videoId: '8fHS4R84QPQ',
    title: 'Welcome to Guardian Primary Care | Provider Owned & Operated',
  },
  brand: {
    videoId: '3xT4etVmAwA',
    title: 'Empowered in Care, Excellence in Health | Guardian Primary Care',
  },
  nurseMadi: {
    videoId: 'zrQXMt7xAo0',
    title: 'A Message from Guardian | Meet Nurse Madi',
  },
  heatherPullen: {
    videoId: 'qbZ8bCBq8X4',
    title: 'Meet Heather Pullen | Aesthetic Injector at Guardian Primary Care',
  },
  peptides: {
    videoId: 'Xit8odDNUVw',
    title: 'What are Compounded Peptides & GLP-1s Everyone is Talking About?',
  },
  kfvs12: {
    videoId: 'cBldCPnm9A0',
    title: 'Motherhood Lunch and Learn | KFVS12 News',
  },
} as const

// The practice's own channel. Three further uploads there are raw social reels
// ("Hey guys", sm_reel_1_v1, sm_reel_2_v1) and are deliberately not embedded.
export const GUARDIAN_CHANNEL_URL = 'https://www.youtube.com/@GuardianHealthMO'

// The PrestonNP health-education library, in the order the live site lists it.
export const PRESTON_NP_LIBRARY = [
  { videoId: 'XK78fc-CjzI', title: "Healthcare Is Confusing, Let's Fix That" },
  { videoId: 'INgs6-SJgKY', title: 'Your A1C Is Lying' },
  { videoId: '9F52Tm6v8cM', title: 'Is Your Blood Pressure Actually Dangerous?' },
  { videoId: 'zCtM7hO4pV8', title: 'Statins: What Patients Are Right to Worry About' },
  { videoId: 'xcLDR2U772A', title: 'Do You Actually Need Medication for Prediabetes?' },
  { videoId: 'amBhPjrq3fk', title: 'Why Weight Loss Feels Harder After 30' },
  { videoId: 'TRH8Shcgil8', title: 'Normal Labs. Still Not Well.' },
  { videoId: 'lArg8mNz1b0', title: 'The Biggest Lie Men Are Told About Low Testosterone' },
  { videoId: 'AgOZDy66UYM', title: "Chest Pain? Here's When You Should Actually Go to the ER" },
  { videoId: 'm9cc49utyG0', title: 'Postpartum Depression, Anxiety & Birth Trauma' },
] as const

export default VideoEmbed
