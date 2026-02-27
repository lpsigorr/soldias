// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: "forged-tee",
    name: "FORGED TEE",
    price: 52,
    category: "tops",
    sizes: ["S","M","L","XL"],
    stock: { S: 8, M: 12, L: 6, XL: 3 },
    tag: "Drop 001",
    description: "Heavyweight 280gsm cotton, pre-washed. Structured fit with oversized chest. Built to outlast trends and territory.",
    material: "100% Ringspun Cotton, 280gsm. Pre-washed for permanent softness.",
    fit: "Oversized fit. Model is 6'0 wearing size M. Shoulder seam drops 2 inches.",
    dropNotes: "The first piece in the ENDURE & PUSH collection. Stamped with the original doctrine mark on the back collar.",
    images: ["forged-tee"],
    color: "#2a2a22",
  },
  {
    id: "endure-hoodie",
    name: "ENDURE HOODIE",
    price: 118,
    category: "tops",
    sizes: ["S","M","L","XL"],
    stock: { S: 4, M: 7, L: 9, XL: 2 },
    tag: "Drop 001",
    description: "French terry fleece, 380gsm. Kangaroo pocket with internal zip. Heavy gauge drawcords. For the ones who stay in it.",
    material: "80% Cotton, 20% Polyester, 380gsm French Terry. Brushed interior.",
    fit: "Regular-oversized. Model is 6'0 wearing size M.",
    dropNotes: "The ENDURE HOODIE is a uniform. Not a statement. Quiet, heavy, and reliable.",
    images: ["endure-hoodie"],
    color: "#1e2018",
  },
  {
    id: "loyalty-cap",
    name: "LOYALTY CAP",
    price: 44,
    category: "accessories",
    sizes: ["ONE SIZE"],
    stock: { "ONE SIZE": 15 },
    tag: "Drop 001",
    description: "6-panel structured cap, wool blend. Flat embroidered SOLDIAS mark. Adjustable brass buckle.",
    material: "Wool/Polyester blend. Structured front panels. Unstructured back.",
    fit: "One size adjustable. Fits 54–60cm head circumference.",
    dropNotes: "Loyalty doesn't need to be loud. The cap carries the mark without the noise.",
    images: ["loyalty-cap"],
    color: "#2e3328",
  },
  {
    id: "pressure-pants",
    name: "PRESSURE PANTS",
    price: 136,
    category: "bottoms",
    sizes: ["S","M","L","XL"],
    stock: { S: 5, M: 8, L: 4, XL: 1 },
    tag: "Drop 001",
    description: "Technical ripstop shell. Articulated knees, cargo pockets with hidden snaps. Elastic waist with internal drawcord.",
    material: "100% Nylon Ripstop, 160gsm. YKK zippers. DWR coated.",
    fit: "Tapered fit. Cropped at ankle. Model is 6'0 wearing size M.",
    dropNotes: "Under pressure is exactly where you should feel most comfortable.",
    images: ["pressure-pants"],
    color: "#3a3d30",
  },
  {
    id: "ritual-beanie",
    name: "RITUAL BEANIE",
    price: 36,
    category: "accessories",
    sizes: ["ONE SIZE"],
    stock: { "ONE SIZE": 22 },
    tag: "Drop 001",
    description: "Merino wool blend, 2x2 rib knit. SOLDIAS flag label on inner band. Foldable cuff.",
    material: "50% Merino Wool, 50% Acrylic. Machine washable.",
    fit: "Standard slouch fit. One size.",
    dropNotes: "Every ritual starts with showing up. The beanie is for the ones who train in the cold.",
    images: ["ritual-beanie"],
    color: "#1a1a16",
  },
  {
    id: "soldias-crewneck",
    name: "SOLDIAS CORE CREWNECK",
    price: 98,
    category: "tops",
    sizes: ["S","M","L","XL"],
    stock: { S: 6, M: 10, L: 8, XL: 4 },
    tag: "Drop 001",
    description: "350gsm fleece crewneck. Tonal embroidery front, screen-printed doctrine on back. The foundation piece.",
    material: "100% Cotton, 350gsm garment-dyed fleece. Stonewashed finish.",
    fit: "True-to-size with slight boxy cut. Model is 6'0 wearing size M.",
    dropNotes: "Every core has to hold. This is the piece everything else is built around.",
    images: ["soldias-crewneck"],
    color: "#252520",
  },
];

// ─── DROPS ────────────────────────────────────────────────────────────────────
export const DROPS = [
  {
    slug: "endure-push-001",
    title: "ENDURE & PUSH — DROP 001",
    subtitle: "The beginning of the doctrine.",
    date: "2025-11-15",
    status: "active",
    story: "Drop 001 wasn't planned. It was earned. Three years of building in silence, of not being ready but moving anyway. ENDURE & PUSH is not a collection theme — it is a lived instruction. Every piece in this drop was designed for the ones still in the middle of something. Still going. Still not done.",
    products: ["forged-tee","endure-hoodie","loyalty-cap","pressure-pants","ritual-beanie","soldias-crewneck"],
  },
  {
    slug: "forged-000",
    title: "FORGED — DROP 000",
    subtitle: "The prototype run. 30 units. Gone.",
    date: "2025-06-01",
    status: "sold-out",
    story: "Before the brand had a name that stuck, there was a run of 30 pieces made in a garage. No tags. No announcement. Word of mouth only. Drop 000 never made it to a website. It was never supposed to.",
    products: [],
  },
];

// ─── LOOKBOOK ─────────────────────────────────────────────────────────────────
export const LOOKBOOK = [
  { id: 1, src: null, tag: "forged-tee",       caption: "ENDURE & PUSH — Campaign 01", aspect: "portrait"  },
  { id: 2, src: null, tag: "pressure-pants",   caption: "Field study, Nov 2025",        aspect: "landscape" },
  { id: 3, src: null, tag: "endure-hoodie",    caption: "Early access preview",          aspect: "portrait"  },
  { id: 4, src: null, tag: "loyalty-cap",      caption: "The detail is in the silence",  aspect: "square"    },
  { id: 5, src: null, tag: "soldias-crewneck", caption: "Core uniform",                  aspect: "portrait"  },
  { id: 6, src: null, tag: "ritual-beanie",    caption: "Cold season ritual",            aspect: "landscape" },
];

// ─── COMMUNITY POSTS ──────────────────────────────────────────────────────────
export const COMMUNITY_POSTS = [
  { id: 1, handle: "@marcobvl",       caption: "The ENDURE hoodie is something else. Worn it every day for two weeks straight. No complaints.",             product: "ENDURE HOODIE"  },
  { id: 2, handle: "@siennaxkyle",    caption: "FORGED TEE hits different when you've actually been through something. That's the only review.",             product: "FORGED TEE"     },
  { id: 3, handle: "@j_underscore_k", caption: "Pressure Pants on a night run in November. This is what they were made for.",                              product: "PRESSURE PANTS" },
  { id: 4, handle: "@davi.lima",      caption: "The Loyalty Cap is the most understated piece I own. People always ask about it.",                          product: "LOYALTY CAP"    },
];

// ─── PRINCIPLES ───────────────────────────────────────────────────────────────
export const PRINCIPLES = [
  {
    title: "ENDURANCE",
    number: "01",
    body: "You do not wait until you are ready. You go now. Endurance is not a trait — it is a decision made again and again in the moments when stopping would be easier.",
  },
  {
    title: "LOYALTY",
    number: "02",
    body: "To the ones beside you. To the version of yourself you promised to become. Loyalty is not loud. It shows up every day without asking for recognition.",
  },
  {
    title: "GROWTH",
    number: "03",
    body: "Growth is not comfort. It is the pressure you accept because you know what is on the other side. You do not grow in stillness. You grow in the push.",
  },
];