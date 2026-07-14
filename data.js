// Complete data for Tanahun tourism site
// No truncation - all descriptions are complete

const FLAG_COLORS = ["#B3202A", "#F4B400", "#128A8C", "#C6316B", "#5B2C6F"];

const PLACES = [
  {
    id: "bandipur",
    grad: "linear-gradient(160deg, #b3202a, #e8871e)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23b3202a' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EBandipur%3C/text%3E%3C/svg%3E",
    tag: "Hilltop Heritage Town",
    name: "Bandipur",
    desc: "A cobblestoned Newar trading town frozen in time on a ridge above the valley — carved wooden windows, sunrise views over the Himalaya, and no cars in the old bazaar.",
    history: "Built by Newar traders in the 18th–19th century as a stop on the India–Tibet trade route, Bandipur grew wealthy on salt, cotton, and grain. When the highway bypassed it in the 1970s, the town became a living museum of traditional Newar architecture and culture. The bazaar is lined with three-story wooden buildings, courtyards, and temples that have survived earthquakes and modernization. Today, it's a destination for heritage lovers, artists, and trekkers seeking a slice of old Nepal.",
    bestTime: "October–December and March–April for clear mountain views and comfortable weather; avoid peak monsoon (July–August) for hazy skies.",
    reach: "3–4 hour drive from Kathmandu or Pokhara to Bandipur bus park, then a short walk or jeep up to the bazaar.",
    festivals: ["Bisket Jatra echoes", "Newar Ghatasthapana rituals", "Local temple fairs"],
    hotels: [
      ["Bandipur Mountain Resort", "Hilltop view rooms"],
      ["The Old Inn", "Restored heritage house"],
      ["Nostalgia Newari Lodge", "Local Newari kitchen"]
    ],
    nearby: ["Tundikhel viewpoint", "Thani Mai Temple", "Siddha Cave"],
    mood: ["culture", "peace"]
  },
  {
    id: "devghat",
    grad: "linear-gradient(160deg, #2e9aa8, #173a40)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%232e9aa8' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EDevghat%3C/text%3E%3C/svg%3E",
    tag: "Sacred River Confluence",
    name: "Devghat",
    desc: "Where the Seti and Trishuli rivers meet — one of Nepal's holiest sites, packed with temples and ashrams, and thronged with pilgrims during Maghe Sankranti.",
    history: "Devghat has drawn ascetics and pilgrims for centuries as a tirtha (sacred crossing) at the meeting of two rivers, comparable in spiritual weight to India's Triveni Sangam. Rishis and sages are said to have meditated on the banks. The site is studded with small temples, shrines, and ashrams where sadhus (renunciates) live year-round. During Maghe Sankranti (mid-January), thousands converge to bathe in the holy waters, believing the combined rivers wash away sins. It's a place of profound spiritual resonance and daily pilgrimage.",
    bestTime: "Maghe Sankranti (mid-January) for the biggest pilgrimage gathering; otherwise year-round for quiet temple visits and meditation.",
    reach: "Short drive or local bus from Damauli bazaar or from the Mugling–Narayanghat highway.",
    festivals: ["Maghe Sankranti mela", "Shraddha (ancestor rites) ceremonies", "Daily sunrise bathing rituals"],
    hotels: [
      ["Devghat Yatri Niwas", "Pilgrim lodge"],
      ["River View Lodge", "Riverside rooms"],
      ["Ashram Guest House", "Spiritual retreat"]
    ],
    nearby: ["Rishi Parashar's Ashram", "Kaligandaki confluence ghats", "Local temples"],
    mood: ["culture", "peace"]
  },
  {
    id: "manungkot",
    grad: "linear-gradient(160deg, #7a9a2e, #2e3d12)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%237a9a2e' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EMalung Kot%3C/text%3E%3C/svg%3E",
    tag: "Himalayan Viewpoint",
    name: "Manung Kot",
    desc: "A hill station with one of the widest mountain panoramas around — Dhaulagiri to Manaslu, Machhapuchhre, Annapurna, Lamjung — plus the whole Damauli valley below.",
    history: "A traditional lookout ridge used by nearby villages for generations, more recently developed with viewing platforms as sunrise-hike tourism grew around Pokhara and Bandipur. Local communities have maintained trails and simple guesthouses to welcome visitors. The ridge offers an unobstructed 360-degree view of the Himalayan range and is a favorite spot for photographers, bird-watchers, and sunrise seekers.",
    bestTime: "Clear pre-monsoon and post-monsoon months (October–April); arrive before sunrise for the best mountain light and clear skies.",
    reach: "Hike or jeep track from nearby villages around Bandipur/Damauli; often combined as an early-morning add-on to a Bandipur stay.",
    festivals: ["Local Chandi Purnima hill gatherings", "Sunrise meditation circles"],
    hotels: [
      ["Manung Kot Homestay", "Family-run, sunrise deck"],
      ["Hillview Guesthouse", "Budget rooms"],
      ["Mountain Retreat Lodge", "Basic but scenic"]
    ],
    nearby: ["Damauli Bazaar", "Seti River", "Local tea gardens"],
    mood: ["peace", "adventure"]
  },
  {
    id: "vyascave",
    grad: "linear-gradient(160deg, #8a6a4a, #3a2510)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%238a6a4a' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EVyas Cave%3C/text%3E%3C/svg%3E",
    tag: "Ancient Shrine Cave",
    name: "Vyas Cave",
    desc: "A limestone cave shrine linked to the sage Ved Vyas, tucked into the hillside near Damauli — cool, quiet, and steeped in old stories.",
    history: "Local tradition holds that the sage Ved Vyas — traditionally credited with compiling the Mahabharata and the Vedas — meditated in this cave, giving the site its name and its pilgrimage importance. The cave has been a sacred space for centuries, with natural stone formations that worshippers have interpreted as spiritual symbols. Pilgrims visit year-round to meditate and leave offerings. The Damauli district is sometimes called 'Vyas Bhumi' (Vyas's land) in honor of this connection.",
    bestTime: "Dry season (October–May); the cave interior stays cool and comfortable year-round.",
    reach: "Short drive from Damauli bazaar, combinable with a Devghat visit in the same day.",
    festivals: ["Guru Purnima observances", "Local pilgrimage days"],
    hotels: [
      ["Byas Guesthouse Damauli", "Closest stay to the cave"],
      ["Damauli Lodge", "Town accommodation"]
    ],
    nearby: ["Devghat", "Damauli Bazaar", "Local temples"],
    mood: ["culture", "peace"]
  },
  {
    id: "chhimkeshwari",
    grad: "linear-gradient(160deg, #a8406a, #3a1428)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23a8406a' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EChhimkeshwari%3C/text%3E%3C/svg%3E",
    tag: "Pagoda on the Ridge",
    name: "Chhimkeshwari Temple",
    desc: "A rebuilt pagoda-style temple on Chhimkeshwari hill with a dedicated trekking path — half pilgrimage, half panoramic hike.",
    history: "An old hilltop shrine rebuilt in pagoda style with support from the local rural municipality and Gandaki Province, now positioned as both a religious site and a scenic day hike. The temple sits at a elevation where you can see across three valleys on clear days. Local communities maintain the trail and welcome pilgrims and trekkers throughout the year.",
    bestTime: "Cooler months (October–March) for the uphill walk; early morning for mist-and-sun views.",
    reach: "Trailhead near Aanbukhaireni, off the Prithvi Highway between Mugling and Damauli.",
    festivals: ["Dashain hilltop pujas", "Teej gatherings", "Seasonal ritual celebrations"],
    hotels: [
      ["Chhimkeshwari Homestay", "Trailside rooms"],
      ["Aanbukhaireni Lodge", "Base village accommodation"]
    ],
    nearby: ["Aanbukhaireni Bazaar", "Marshyangdi River", "Tea plantations"],
    mood: ["culture", "adventure"]
  },
  {
    id: "chhabdibarahi",
    grad: "linear-gradient(160deg, #c9962e, #4a3410)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23c9962e' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EChhabdi Barahi%3C/text%3E%3C/svg%3E",
    tag: "Historic Magar Site",
    name: "Chhabdi Barahi Temple",
    desc: "A medieval-era temple close to the old Tanahusur Durbar, deep in Magar cultural country — forts, folklore, and organic village food.",
    history: "Tied to the medieval Tanahu kingdom, this temple and the nearby Tanahusur Durbar ruins mark the district's pre-unification history as an independent hill principality before it was absorbed into modern Nepal. The Magar people have inhabited these hills for centuries, and their cultural traditions are woven into every ritual at the temple. Local artisans still practice traditional crafts, and homestays serve authentic Magar cuisine prepared with ingredients from surrounding farms.",
    bestTime: "Year-round; local festival days bring extra color and free-flowing Magar hospitality.",
    reach: "Drive from Damauli into the Tanahusur/Magar village belt; local guides recommended for the durbar ruins.",
    festivals: ["Magar Bhume Puja", "Local Barahi jatra", "Harvest celebrations"],
    hotels: [
      ["Tanahusur Homestay", "Magar-run homestay"],
      ["Village Lodge", "Authentic village experience"]
    ],
    nearby: ["Tanahusur Durbar ruins", "Local Magar villages", "Organic farms"],
    mood: ["culture", "food"]
  },
  {
    id: "damauli",
    grad: "linear-gradient(160deg, #3a6ac9, #12183a)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%233a6ac9' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3EDamauli%3C/text%3E%3C/svg%3E",
    tag: "District Headquarters",
    name: "Damauli Bazaar",
    desc: "The lively gateway town of Tanahun, sitting where the Seti and Madi rivers converge — markets, tea shops, and the jumping-off point for everywhere else.",
    history: "Damauli grew as the administrative headquarters of Tanahun district, its position at a river confluence and along the highway corridor making it the natural hub for trade and transit across the region. The bazaar has evolved into a bustling market town where people from surrounding villages gather to trade goods, exchange news, and share meals. It's the entry point for most travelers exploring Tanahun, and locals here are accustomed to pointing visitors toward their favorite hidden spots.",
    bestTime: "Year-round travel hub; best used as a base rather than a single-day stop.",
    reach: "On the Prithvi Highway, roughly midway between Kathmandu and Pokhara, about 49km from Pokhara.",
    festivals: ["Dashain & Tihar street celebrations", "Local mela fairs", "Weekly bazaar markets"],
    hotels: [
      ["Hotel Damauli Palace", "Central, full service"],
      ["Sundar Homestay", "Local family stay"],
      ["River View Hotel", "Riverside accommodation"]
    ],
    nearby: ["Seti-Madi confluence", "Local bazaar street food", "Daily markets"],
    mood: ["food", "culture"]
  },
  {
    id: "setirafting",
    grad: "linear-gradient(160deg, #128A8C, #0a2e30)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fallbackImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23128A8C' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23fff' text-anchor='middle' dy='.3em'%3ESeti Rafting%3C/text%3E%3C/svg%3E",
    tag: "Whitewater & Camps",
    name: "Seti & Madi Rivers",
    desc: "Rapids, riverside tented camps, and a cool breeze off two rivers — the adventure heart of Tanahun, with Kurintar's cable car access nearby.",
    history: "The Seti and Madi rivers have long shaped Tanahun's farmland and settlement patterns; in recent decades stretches of both have opened up for organized whitewater rafting and riverside camping. Local communities have developed eco-friendly camps and employ experienced rafting guides who know every rapid and eddy. The rivers support thriving ecosystems and are central to Tanahun's identity as a water-rich valley.",
    bestTime: "October–December and March–May for ideal rafting water levels; monsoon season rapids are for experienced rafters only.",
    reach: "Access points near Damauli and Kurintar, off the Prithvi Highway.",
    festivals: ["Riverside Maghe Sankranti bathing", "Monsoon celebrations"],
    hotels: [
      ["Riverside Tented Camp", "Overnight rafting camp"],
      ["Rafting Base Camp Lodge", "Basic riverside rooms"],
      ["Adventure Resort", "Full-service eco-lodge"]
    ],
    nearby: ["Kurintar cable-car access", "Bandipur", "Local villages"],
    mood: ["adventure"]
  }
];

const FESTIVALS = [
  {
    icon: "🪔",
    tag: "January",
    name: "Maghe Sankranti at Devghat",
    desc: "Thousands gather at the sacred Seti–Trishuli confluence to bathe in the winter-solstice waters, share ghee and sweet potatoes, and perform ancestral rites. It's one of Nepal's largest pilgrimage events."
  },
  {
    icon: "💃",
    tag: "Folk Dance",
    name: "Ghatu Dance",
    desc: "A slow, trance-like Gurung dance performed by young women over several days, telling stories of legendary kings and queens through song and movement during pre-spring celebrations."
  },
  {
    icon: "🌺",
    tag: "Aug–Sep",
    name: "Teej",
    desc: "Women across Tanahun dress in red saris, fast, sing, and dance in temple courtyards for marital happiness and family wellbeing — one of the year's most vibrant festivals."
  },
  {
    icon: "🥁",
    tag: "Folk Dance",
    name: "Sorathi Dance",
    desc: "A Gurung storytelling dance performed by masked dancers depicting a legendary queen's tale, accompanied by madal drums and folk songs filled with wit and wisdom."
  },
  {
    icon: "🏮",
    tag: "Sep–Oct",
    name: "Dashain",
    desc: "Nepal's biggest festival — tika on foreheads, jamara sprouts, family reunions, and kite-flying skies over Damauli and every hill village in the district."
  },
  {
    icon: "🕺",
    tag: "Magar Culture",
    name: "Bhume Puja",
    desc: "A Magar earth-worship festival giving thanks to the land before planting season, celebrated with community feasts and blessings around Chhabdi Barahi and rural villages."
  },
  {
    icon: "🪈",
    tag: "Oct–Nov",
    name: "Tihar",
    desc: "Five days honoring crows, dogs, cows, and siblings, lit up with oil lamps and marigold garlands (the same marigold colors you see across this site's design)."
  },
  {
    icon: "🎭",
    tag: "Folk Dance",
    name: "Deuda Dance",
    desc: "A communal circle dance with call-and-response folk singing, performed at festivals and harvest gatherings across the hills of Tanahun, bringing communities together."
  }
];

const MOODS = {
  adventure: "Adventure",
  peace: "Peace & Views",
  culture: "Culture & History",
  food: "Food & Village Life"
};
