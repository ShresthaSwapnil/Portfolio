// All portfolio copy lives here, sourced from the latest CV.
// Components stay presentational — edit words here, not in JSX.

export const profile = {
  name: "Swapnil Shrestha",
  nameNepali: "स्वप्निल",
  greeting: "नमस्ते",
  thanks: "धन्यवाद",
  title: "Multidisciplinary Creative Technologist",
  email: "shresthaswapnil03@gmail.com",
  location: "Kathmandu, Nepal",
  coords: "27.7172° N · 85.3240° E",
  resume: "/SwapnilCV.pdf",
  manifesto:
    "I work where artificial intelligence, design, content and business meet. I've produced 700+ creative assets for 10+ clients, led digital and AI initiatives for businesses, built AI-powered products, and led technology communities. Code tells a product what to do. Craft decides how it feels.",
};

export const chapters = [
  { id: "hero", index: "00", label: "Prologue" },
  { id: "convergence", index: "01", label: "The Convergence" },
  { id: "work", index: "02", label: "Exhibits" },
  { id: "chronicle", index: "03", label: "Chronicle" },
  { id: "contact", index: "04", label: "Epilogue" },
];

export const systems = [
  "Python",
  "FastAPI",
  "Flutter",
  "Next.js",
  "TypeScript",
  "PostgreSQL / Neon",
  "Supabase",
  "MongoDB",
  "Gemini / Gemma",
  "Local LLMs",
  "n8n",
  "Prompt Engineering",
];

export const stories = [
  "Creative Strategy",
  "Visual Storytelling",
  "Photography",
  "Videography",
  "DaVinci Resolve",
  "Adobe Creative Suite",
  "Figma",
  "CapCut",
  "UX / UI Design",
  "Content Strategy",
  "AI Image Generation",
  "Social Media",
];

// `ambient` drives the page-wide mood shift when each exhibit is in view.
export const caseStudies = [
  {
    id: "dressmate",
    number: "01",
    title: "DressMate",
    kicker: "AI-Powered Digital Wardrobe",
    context: "Final Year Project · BIT (Hons)",
    ambient: "#5B3FD1",
    accent: "#A78BFA",
    image: null,
    link: null,
    stack: ["Flutter", "FastAPI", "PostgreSQL / Neon", "Gemini / Gemma", "Open-Meteo"],
    chapters: {
      Challenge:
        "Most people own more clothes than they use, and the decision of what to wear is still made every morning from scratch, ignoring the weather and the occasion.",
      Build:
        "I own the backend and AI layer: a FastAPI service on PostgreSQL/Neon that connects recommendation logic, Gemini/Gemma and live Open-Meteo weather data to the Flutter app.",
      Craft:
        "The wardrobe should feel like a personal stylist, not a database. Recommendations are framed around the day ahead, so they read as advice instead of search results.",
      Outcome:
        "In active development as my Final Year Project. It's where my AI engineering and product thinking meet in one shipped experience.",
    },
  },
  {
    id: "aurora",
    number: "02",
    title: "Aurora Jewel Studio",
    kicker: "Tech Lead · Digital & AI",
    context: "Luxury jewellery brand",
    ambient: "#0F6B4F",
    accent: "#D4AF37",
    image: "/images/projects/aurora.png",
    link: "https://aurorajewelstudio.com/",
    stack: ["Next.js", "Aura AI", "Internal Systems", "Automation", "AI Content"],
    chapters: {
      Challenge:
        "A growing jewellery brand ran its operations through scattered WhatsApp threads, and customers had no guided way to find the right piece.",
      Build:
        "I built a centralized internal management system to replace the WhatsApp workflow, and Aura AI, a stylist that recommends pieces by occasion, preference, gemstone and budget.",
      Craft:
        "AI-assisted workflows for photorealistic product content and video, under one strict rule: the jewellery on screen must exactly match the jewellery in the case.",
      Outcome:
        "I lead the brand's website, internal systems, AI implementation, automation and digital strategy, end to end.",
    },
  },
  {
    id: "netra",
    number: "03",
    title: "Project Netra",
    kicker: "UNESCO Youth Hackathon 2025",
    context: "AI digital-literacy platform",
    ambient: "#1D4ED8",
    accent: "#60A5FA",
    image: "/images/projects/netra.png",
    link: "https://github.com/ShresthaSwapnil/Netra",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Google Gemini"],
    chapters: {
      Challenge:
        "Deepfakes and misinformation spread faster than people can learn to spot them, especially among young users.",
      Build:
        "A full-stack platform: an AI coaching simulator, a deepfake image analyzer, gamified learning and a global leaderboard, built on Flutter, FastAPI, PostgreSQL and Gemini.",
      Craft:
        "Literacy that feels like play. Game mechanics turn a defensive skill into something people come back to.",
      Outcome:
        "Built for the UNESCO Youth Hackathon 2025. The source code is open on GitHub.",
    },
  },
  {
    id: "craft",
    number: "04",
    title: "Visual Craft at Scale",
    kicker: "Humming Web · Twenty4Social · Ultra Trails Nepal",
    context: "Content, campaigns & documentary",
    ambient: "#B4532A",
    accent: "#F59E0B",
    image: null,
    link: null,
    stack: ["Creative Direction", "Reels", "Photography", "Videography", "AI-Assisted Workflows"],
    chapters: {
      Challenge:
        "Producing high volumes of content for very different industries, from automotive to healthcare to gold and diamonds, without letting any brand blur into another.",
      Build:
        "AI-assisted ideation and production pipelines that let me deliver 700+ creatives and reels across 10+ client accounts, working remotely with Australian teams.",
      Craft:
        "Premium visual direction for Nepali jewellery brands rooted in festival culture, and documentary-style race-day stories of the athletes and communities behind Nepal's trail running.",
      Outcome:
        "One creative voice that adapts across Australia and Nepal, from social campaigns to the Himalayan trails.",
    },
  },
];

export const moreWork = [
  {
    title: "QFX Cinemas",
    kind: "Mobile UX Redesign",
    image: "/images/projects/qfx.png",
    link: "https://www.figma.com/design/iSzsgT6phHzACaZmPKTgLf/QFX-Cinemas-Redesign--Copy-?node-id=0-1&t=4jiAhW1RoH3shFzj-1",
  },
  {
    title: "Huba Nepal",
    kind: "E-commerce App Concept",
    image: "/images/projects/huba.png",
    link: "https://www.figma.com/design/FY5da6hJFkPB5HPeQtH8m2/Huba-Nepal?node-id=0-1&t=TpxoxqA8zktd1STb-1",
  },
  {
    title: "KhetAI",
    kind: "AgriTech · Crop Disease Detection",
    image: "/images/projects/khetai.png",
    link: "https://github.com/subaasw/khetai",
  },
  {
    title: "Pomodoro Sathi",
    kind: "Productivity App · Flutter",
    image: "/images/projects/pomodoro.png",
    link: "https://github.com/ShresthaSwapnil/PomodoroSathi",
  },
];

// `period: null` where the CV gives no dates — fill these in when ready.
export const chronicle = [
  {
    role: "Tech Lead · Digital & AI",
    org: "Aurora Jewel Studio",
    period: null,
    domain: "AI",
    points: [
      "Lead website, internal systems, AI implementation, automation and digital strategy.",
      "Replaced WhatsApp-based operations with a centralized management system.",
      "Built Aura AI, a jewellery stylist that recommends by occasion, gemstone and budget.",
    ],
  },
  {
    role: "Content & Creative Designer",
    org: "Humming Web, Australia",
    period: "2024 — Present",
    domain: "Creative",
    points: [
      "700+ creatives and reels across 10+ client accounts.",
      "Automotive, healthcare, finance, hospitality, retail and more.",
      "Remote collaboration with Australian marketing teams.",
    ],
  },
  {
    role: "Social Media Strategist & Content Designer",
    org: "Twenty4Social / Aabhushan Crafts",
    period: null,
    domain: "Creative",
    points: [
      "Strategy and creative direction for gold, silver and diamond jewellery brands.",
      "AI-assisted product photography concepts and festival campaigns.",
    ],
  },
  {
    role: "Photography & Videography",
    org: "Ultra Trails Nepal",
    period: null,
    domain: "Media",
    points: [
      "Race-day coverage, reels and social content for trail-running events.",
      "Documentary-style stories of athletes and Nepal's trail-running culture.",
    ],
  },
  {
    role: "Flutter Developer",
    org: "Sero Finance",
    period: "2025 — 2026",
    domain: "Engineering",
    points: [
      "OAuth authentication, JWT sessions and multilingual support on a NestJS backend.",
      "Voice interaction and conversational UI with speech-to-text and text-to-speech.",
    ],
  },
  {
    role: "President",
    org: "Tech Titans IT Club",
    period: "2024 — 2026",
    domain: "Leadership",
    points: [
      "Helped organize Build Nepal Hackathon 2026: 20 teams, 60+ participants, 8 mentors.",
      "Workshops, hackathons and industry collaborations for students.",
    ],
  },
];

export const stats = [
  { value: 700, suffix: "+", label: "Creative assets shipped" },
  { value: 10, suffix: "+", label: "Client accounts" },
  { value: 60, suffix: "+", label: "Hackers hosted at Build Nepal" },
  { value: 3.48, suffix: "", label: "CGPA · BIT (Hons)", decimals: 2 },
];

export const education = {
  degree: "Bachelor of Information Technology (Honours)",
  school: "Mid-Valley International College · HELP University, Malaysia",
  certs: [
    "Google AI Essentials",
    "Foundations of UX Design",
    "Meta React Native",
    "Adobe Design Fundamentals with AI",
  ],
};

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/swapnil-shrestha-b5792925b/" },
  { name: "GitHub", url: "https://github.com/ShresthaSwapnil" },
  { name: "Instagram", url: "https://www.instagram.com/shresthaswapnil/" },
  { name: "DataCamp", url: "https://www.datacamp.com/profile/shresthaswapnil03" },
];
