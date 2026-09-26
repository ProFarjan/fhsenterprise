import type { AppLocale } from "@/i18n/routing";
import type { LubeContent } from "@/types/mrlube";

const IMG = "/images/companies/mr-lube";
const HERO = `${IMG}/hero`;
const CAT = `${IMG}/categories`;
const PROD = `${IMG}/products`;

const en: LubeContent = {
  name: "MR Lube",
  tagline: "High-performance engine oils, industrial lubricants, and greases engineered to keep Bangladesh moving.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/categories",
      children: [
        { label: "Automotive Engine Oils", href: "/categories/automotive-oils" },
        { label: "Industrial Lubricants", href: "/categories/industrial-lubricants" },
        { label: "Greases & Compounds", href: "/categories/greases" },
        { label: "Specialty Fluids", href: "/categories/specialty-fluids" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/engine-oil.svg`,
        eyebrow: "Automotive Engine Oils",
        headingLead: "Protection that",
        headingEmphasis: "outlasts",
        headingTail: "the road",
        body: "Fully synthetic and semi-synthetic motor oils that hold their film strength through heat, dust, and stop-start city traffic.",
        ctaLabel: "Explore Engine Oils",
        ctaHref: "/categories/automotive-oils",
      },
      {
        image: `${HERO}/industrial.svg`,
        eyebrow: "Industrial Lubricants",
        headingLead: "Keep your",
        headingEmphasis: "machines",
        headingTail: "running cooler",
        body: "Hydraulic, gear, and compressor oils formulated to cut wear, resist oxidation, and stretch drain intervals on the factory floor.",
        ctaLabel: "Explore Industrial Range",
        ctaHref: "/categories/industrial-lubricants",
      },
      {
        image: `${HERO}/grease.svg`,
        eyebrow: "Greases & Specialty",
        headingLead: "Built for the",
        headingEmphasis: "hardest",
        headingTail: "jobs",
        body: "High-load lithium and moly greases plus coolants and brake fluids that hold up where ordinary products break down.",
        ctaLabel: "Explore Greases & Fluids",
        ctaHref: "/categories/greases",
      },
    ],
  },
  why: {
    eyebrow: "Why MR Lube",
    headingLead: "Engineered for",
    headingEmphasis: "real conditions",
    intro:
      "Bangladesh's roads, climate, and duty cycles are harder on a lubricant than a lab test. Every MR Lube grade is blended and checked for exactly those conditions.",
    features: [
      {
        icon: "shield",
        title: "Stronger Wear Protection",
        body: "Anti-wear additive packages keep a protective film on metal surfaces long after start-up, cutting engine and gear wear.",
      },
      {
        icon: "flame",
        title: "Thermal Stability",
        body: "Base oils and antioxidants chosen to resist thickening and breakdown through the heat of a Dhaka summer commute.",
      },
      {
        icon: "gauge",
        title: "Longer Drain Intervals",
        body: "Cleaner-burning, oxidation-resistant formulas hold their spec for longer — fewer changes, less downtime, lower cost.",
      },
      {
        icon: "molecule",
        title: "Batch-Tested Quality",
        body: "Every production batch is lab-verified for viscosity, flash point, and additive levels before it leaves the plant.",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "Our Range",
    heading: "One supplier for every moving part",
    subtitle:
      "From a delivery van's engine to a spinning mill's gearbox, MR Lube covers the full lubrication chain — four focused product lines.",
    exploreLabel: "View products",
  },
  featured: {
    eyebrow: "Featured Products",
    heading: "Grades our customers reorder",
    subtitle: "A representative pick from each line — the workhorse products behind the MR Lube name.",
    viewAllLabel: "View all products",
  },
  stats: {
    eyebrow: "By the numbers",
    heading: "Trusted across workshops and factories",
    items: [
      { value: "40+", label: "Lubricant grades blended" },
      { value: "64", label: "Districts served" },
      { value: "1,200+", label: "Workshops & dealers supplied" },
      { value: "100%", label: "Batch lab-tested" },
    ],
  },
  process: {
    eyebrow: "From base oil to bottle",
    heading: "Blended with control at every step",
    body: "MR Lube isn't repackaged bulk oil. We formulate to a spec, blend under controlled conditions, and test before filling — so what's on the label is what's in the bottle.",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "Formulate to spec",
        body: "Each grade starts from an API/OEM performance target, matched to local operating conditions.",
      },
      {
        title: "Blend under control",
        body: "Base oils and additive packs are dosed and blended to tolerance in a temperature-controlled plant.",
      },
      {
        title: "Lab-test the batch",
        body: "Viscosity, flash point, and additive levels are verified against spec before the batch is released.",
      },
      {
        title: "Fill, seal & trace",
        body: "Bottled, sealed, and batch-coded so every pack can be traced back to its production run.",
      },
    ],
  },
  testimonials: {
    heading: "What the field says",
    subtitle: "Fleet managers, workshop owners, and plant engineers who run on MR Lube.",
    items: [
      {
        quote:
          "Switched our delivery fleet to TurboMax and the engines run noticeably cooler on long hauls. Oil consumption between changes dropped.",
        name: "Rafiqul Islam",
        role: "Fleet Manager, Dhaka",
      },
      {
        quote:
          "The hydraulic oil holds up in our injection machines far better than what we used before. Fewer breakdowns, longer drains.",
        name: "Shahin Ahmed",
        role: "Plant Engineer, Gazipur",
      },
      {
        quote:
          "Consistent quality batch after batch, and their team actually knows lubrication. That's why my workshop keeps reordering.",
        name: "Kamal Hossain",
        role: "Workshop Owner, Chattogram",
      },
    ],
  },
  cta: {
    heading: "Need the right grade for your engine or machine?",
    body: "Tell us your vehicle, equipment, or application and our team will recommend the exact MR Lube product — and get it to your nearest dealer.",
    button: "Talk to our team",
  },
  categories: [
    {
      slug: "automotive-oils",
      name: "Automotive Engine Oils",
      icon: "engine",
      tagline: "Cars · Bikes · Commercial",
      description:
        "Synthetic and mineral engine oils for cars, motorcycles, and commercial vehicles — protection tuned for stop-start traffic and long highway runs.",
      image: `${CAT}/automotive-oils.svg`,
    },
    {
      slug: "industrial-lubricants",
      name: "Industrial Lubricants",
      icon: "gear",
      tagline: "Hydraulic · Gear · Compressor",
      description:
        "Hydraulic, gear, and compressor oils for factories and mills — low wear, high oxidation resistance, and dependable long-drain performance.",
      image: `${CAT}/industrial-lubricants.svg`,
    },
    {
      slug: "greases",
      name: "Greases & Compounds",
      icon: "drum",
      tagline: "High-load · High-temp",
      description:
        "Lithium, moly, and high-temperature greases that stay in place under heavy load, water, and heat where oils would run off.",
      image: `${CAT}/greases.svg`,
    },
    {
      slug: "specialty-fluids",
      name: "Specialty Fluids",
      icon: "droplet",
      tagline: "Coolant · Brake · Transmission",
      description:
        "Engine coolants, brake fluids, and automatic transmission fluids formulated to protect the systems ordinary lubricants don't reach.",
      image: `${CAT}/specialty-fluids.svg`,
    },
  ],
  products: [
    {
      slug: "turbomax-5w40",
      category: "automotive-oils",
      name: "TurboMax 5W-40 Fully Synthetic",
      tagline: "Fully synthetic protection for modern turbocharged engines.",
      image: `${PROD}/turbomax-5w40.svg`,
      description:
        "A fully synthetic, low-ash engine oil built for modern petrol and diesel engines, including turbocharged and common-rail units. Its stable film holds up through high-temperature city driving and long highway runs, keeping pistons clean and wear low.",
      specs: [
        { label: "Viscosity", value: "5W-40" },
        { label: "Type", value: "Fully synthetic" },
        { label: "API grade", value: "API SN / CF" },
        { label: "Pack sizes", value: "1L · 4L · 5L" },
      ],
      benefits: [
        "Keeps its film strength through high-temperature operation",
        "Low-ash formula protects turbochargers and emission systems",
        "Excellent cold-start flow for less wear at ignition",
        "Extended drain capability under normal service",
      ],
    },
    {
      slug: "citydrive-20w50",
      category: "automotive-oils",
      name: "CityDrive 20W-50",
      tagline: "Dependable everyday protection for high-mileage engines.",
      image: `${PROD}/citydrive-20w50.svg`,
      description:
        "A robust mineral-based engine oil for older and high-mileage petrol engines running in hot, dusty, stop-start conditions. The heavier grade cushions worn clearances and resists thinning in the heat.",
      specs: [
        { label: "Viscosity", value: "20W-50" },
        { label: "Type", value: "Mineral" },
        { label: "API grade", value: "API SL" },
        { label: "Pack sizes", value: "1L · 3L · 5L" },
      ],
      benefits: [
        "Thicker film cushions worn, higher-mileage engines",
        "Resists thinning in high ambient temperatures",
        "Strong detergents keep the engine internally clean",
        "Reliable pressure at idle in heavy traffic",
      ],
    },
    {
      slug: "motoguard-10w40",
      category: "automotive-oils",
      name: "MotoGuard 10W-40 Motorcycle Oil",
      tagline: "Wet-clutch safe protection for four-stroke motorcycles.",
      image: `${PROD}/motoguard-10w40.svg`,
      description:
        "A semi-synthetic four-stroke motorcycle oil that lubricates engine, gearbox, and wet clutch from one bottle. JASO MA2 friction control means positive clutch feel with no slip, even in city riding.",
      specs: [
        { label: "Viscosity", value: "10W-40" },
        { label: "Type", value: "Semi-synthetic" },
        { label: "Standard", value: "JASO MA2 · API SN" },
        { label: "Pack sizes", value: "800ml · 1L" },
      ],
      benefits: [
        "JASO MA2 rated — no wet-clutch slip",
        "Protects gearbox and engine from one oil",
        "Stable under sustained high-rpm riding",
        "Smooth shifting and consistent clutch feel",
      ],
    },
    {
      slug: "hydroflow-aw68",
      category: "industrial-lubricants",
      name: "HydroFlow AW 68 Hydraulic Oil",
      tagline: "Anti-wear hydraulic oil for demanding equipment.",
      image: `${PROD}/hydroflow-aw68.svg`,
      description:
        "A premium anti-wear hydraulic oil for industrial and mobile hydraulic systems. Excellent oxidation and thermal stability protect pumps and valves and keep systems running clean through long service intervals.",
      specs: [
        { label: "ISO grade", value: "ISO VG 68" },
        { label: "Type", value: "Anti-wear (AW)" },
        { label: "Application", value: "Hydraulic systems" },
        { label: "Pack sizes", value: "5L · 20L · 208L" },
      ],
      benefits: [
        "Anti-wear additives protect pumps and valves",
        "High oxidation stability for long service life",
        "Good water separation keeps the system clean",
        "Stable viscosity across operating temperatures",
      ],
    },
    {
      slug: "gearshield-ep220",
      category: "industrial-lubricants",
      name: "GearShield EP 220 Gear Oil",
      tagline: "Extreme-pressure protection for industrial gearboxes.",
      image: `${PROD}/gearshield-ep220.svg`,
      description:
        "An extreme-pressure industrial gear oil for enclosed gear drives under heavy and shock loading. The EP additive system carries load and resists micro-pitting to extend gear and bearing life.",
      specs: [
        { label: "ISO grade", value: "ISO VG 220" },
        { label: "Type", value: "Extreme pressure (EP)" },
        { label: "Application", value: "Enclosed gear drives" },
        { label: "Pack sizes", value: "20L · 208L" },
      ],
      benefits: [
        "Carries heavy and shock loads without film breakdown",
        "Resists micro-pitting on gear teeth",
        "Strong thermal and oxidation stability",
        "Protects bearings and seals from wear",
      ],
    },
    {
      slug: "compressorpro-46",
      category: "industrial-lubricants",
      name: "CompressorPro 46",
      tagline: "Long-life oil for rotary and reciprocating compressors.",
      image: `${PROD}/compressorpro-46.svg`,
      description:
        "A high-performance air compressor oil for rotary screw and reciprocating units. Low carbon-forming tendency and strong oxidation resistance mean cleaner valves, safer running temperatures, and longer drain intervals.",
      specs: [
        { label: "ISO grade", value: "ISO VG 46" },
        { label: "Type", value: "Compressor oil" },
        { label: "Application", value: "Air compressors" },
        { label: "Pack sizes", value: "5L · 20L" },
      ],
      benefits: [
        "Low deposit formation keeps valves clean",
        "High oxidation resistance for extended drains",
        "Good water and air separation",
        "Stable performance at high discharge temperatures",
      ],
    },
    {
      slug: "redlith-ep2",
      category: "greases",
      name: "RedLith EP2 Multipurpose Grease",
      tagline: "The all-round workshop grease for bearings and chassis.",
      image: `${PROD}/redlith-ep2.svg`,
      description:
        "A lithium-based extreme-pressure grease for wheel bearings, chassis points, and general workshop use. It resists water wash-out and holds its structure under load and heat — one grease for most jobs.",
      specs: [
        { label: "NLGI grade", value: "NLGI 2" },
        { label: "Thickener", value: "Lithium EP" },
        { label: "Drop point", value: "≥ 190°C" },
        { label: "Pack sizes", value: "500g · 1kg · 15kg" },
      ],
      benefits: [
        "Extreme-pressure additives for loaded bearings",
        "Resists water wash-out and rust",
        "Wide operating temperature range",
        "Stays in place without dripping or throwing off",
      ],
    },
    {
      slug: "molyforce-hd",
      category: "greases",
      name: "MolyForce HD High-Load Grease",
      tagline: "Moly-fortified grease for shock loads and heavy plant.",
      image: `${PROD}/molyforce-hd.svg`,
      description:
        "A molybdenum-disulphide fortified grease for the heaviest duty — pins, bushes, and joints under shock and sliding loads. The moly film protects during boundary conditions when ordinary grease is squeezed out.",
      specs: [
        { label: "NLGI grade", value: "NLGI 2" },
        { label: "Additive", value: "3% Moly (MoS₂)" },
        { label: "Drop point", value: "≥ 190°C" },
        { label: "Pack sizes", value: "1kg · 15kg" },
      ],
      benefits: [
        "Moly film protects under shock and sliding loads",
        "Ideal for pins, bushes, and open joints",
        "High load-carrying and anti-seize performance",
        "Long-lasting protection between re-greasing",
      ],
    },
    {
      slug: "coolguard-coolant",
      category: "specialty-fluids",
      name: "CoolGuard Long-Life Coolant",
      tagline: "Corrosion-inhibited coolant for year-round protection.",
      image: `${PROD}/coolguard-coolant.svg`,
      description:
        "An ethylene-glycol based engine coolant concentrate with a long-life inhibitor package. It protects the cooling system against corrosion, scale, and boil-over across the range of temperatures a Bangladeshi engine sees.",
      specs: [
        { label: "Type", value: "Ethylene glycol" },
        { label: "Technology", value: "Long-life inhibitor" },
        { label: "Mix ratio", value: "Dilute 33–50%" },
        { label: "Pack sizes", value: "1L · 5L" },
      ],
      benefits: [
        "Protects radiator and block against corrosion",
        "Raises boiling point and prevents overheating",
        "Anti-scale package keeps passages clear",
        "Compatible with rubber hoses and gaskets",
      ],
    },
    {
      slug: "brakeline-dot4",
      category: "specialty-fluids",
      name: "BrakeLine DOT 4 Brake Fluid",
      tagline: "High boiling point brake fluid for consistent pedal feel.",
      image: `${PROD}/brakeline-dot4.svg`,
      description:
        "A DOT 4 glycol-ether brake fluid with a high dry and wet boiling point for reliable braking under repeated hard use. Its stable performance resists vapour lock on long descents and in heavy traffic.",
      specs: [
        { label: "Standard", value: "DOT 4" },
        { label: "Dry boiling point", value: "≥ 260°C" },
        { label: "Application", value: "Hydraulic brakes & clutch" },
        { label: "Pack sizes", value: "250ml · 500ml · 1L" },
      ],
      benefits: [
        "High boiling point resists brake fade",
        "Stable pedal feel under repeated hard braking",
        "Protects the hydraulic system from corrosion",
        "Low moisture pickup for a longer service life",
      ],
    },
    {
      slug: "autotrans-atf",
      category: "specialty-fluids",
      name: "AutoTrans ATF Transmission Fluid",
      tagline: "Smooth-shift fluid for automatic transmissions.",
      image: `${PROD}/autotrans-atf.svg`,
      description:
        "A premium automatic transmission fluid with the friction stability modern automatics need for smooth, consistent shifts. It protects gears, clutches, and the pump while controlling heat and oxidation.",
      specs: [
        { label: "Type", value: "ATF (multi-vehicle)" },
        { label: "Property", value: "Friction-stable" },
        { label: "Application", value: "Automatic transmissions" },
        { label: "Pack sizes", value: "1L · 4L" },
      ],
      benefits: [
        "Smooth, consistent shift feel",
        "Friction stability across the fluid's life",
        "Protects gears, clutches, and pump",
        "Controls heat and resists oxidation",
      ],
    },
  ],
  labels: {
    allProducts: "All Products",
    viewDetails: "View details",
    backToCategories: "Back to products",
    backToCategory: "Back",
    inCategory: "in",
    specsHeading: "Specifications",
    benefitsHeading: "Key benefits",
    relatedHeading: "Related products",
    enquire: "Enquire about this product",
    productsCount: "products",
  },
  footer: {
    blurb:
      "MR Lube blends high-performance engine oils, industrial lubricants, and greases for Bangladesh's roads, workshops, and factories — a subsidiary of MR Group.",
    exploreHeading: "Explore",
    contactHeading: "Contact",
    email: "info@mrlube.com.bd",
    phone: "+880 1700-000000",
    addressHeading: "Head Office",
    address: ["MR Lube Blending Plant", "Tejgaon Industrial Area", "Dhaka 1208, Bangladesh"],
    followHeading: "Follow",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© 2026 MR Lube, a subsidiary of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "About Us",
      title: "The lubricant behind the work",
      description:
        "MR Lube exists to make sure the engines and machines that move Bangladesh's economy are protected by lubricants formulated for real local conditions.",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "Our story",
    storyParagraphs: [
      "MR Lube began with a simple observation: too many engines in Bangladesh were failing early not because of how they were driven, but because of the oil in them. Bulk, unbranded, and poorly matched lubricants were quietly costing owners rebuilds and downtime.",
      "As part of MR Group, we set out to blend lubricants to a real specification — automotive and industrial grades formulated, blended under control, and lab-tested batch by batch, then delivered through a nationwide dealer network.",
      "Today MR Lube supplies workshops, fleets, mills, and factories across all 64 districts, with a product range that covers everything from a motorcycle's crankcase to a spinning mill's gearbox.",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "Our mission",
    mission:
      "To protect Bangladesh's engines and machinery with lubricants engineered for local conditions, backed by consistent quality and honest technical advice.",
    visionHeading: "Our vision",
    vision:
      "To be the lubricant brand Bangladesh's workshops, fleets, and factories trust by default — known for performance that shows up in longer engine and machine life.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Quality", body: "Every batch is formulated to spec and lab-tested before it ships. No shortcuts, no repackaged bulk." },
      { title: "Performance", body: "We measure ourselves by wear reduction and equipment life, not just what the label claims." },
      { title: "Honesty", body: "We recommend the right grade for the job — even when it isn't the most expensive one." },
      { title: "Availability", body: "A dealer network that keeps the right product within reach in every district." },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "Our Products",
      title: "Lubrication for every moving part",
      description:
        "Four focused product lines cover engines, hydraulics, gearboxes, bearings, and the specialty fluids in between. Choose a line to see what's inside.",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "Every MR Lube grade is formulated to a performance target and lab-tested batch by batch. Pick a category to explore the range and find the right product for your engine or machine.",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Inside MR Lube",
      description: "A look at the blending plant, the product range, and the workshops and fleets that run on MR Lube.",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "Photos and videos from our blending plant, packaging line, and the customers who depend on our lubricants. Switch between photos and videos below.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos yet.",
    noVideos: "No videos yet.",
  },
  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "Find the right grade",
      description:
        "Questions about a product, a bulk order, or becoming a dealer? Our technical team is ready to help you match the right lubricant to your application.",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "Send us a message",
    formIntro: "Our team usually responds within one business day.",
    officeHeading: "Head Office",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const bn: LubeContent = {
  name: "এমআর লুব",
  tagline: "বাংলাদেশকে সচল রাখতে প্রকৌশলকৃত উচ্চ-কার্যক্ষমতার ইঞ্জিন অয়েল, ইন্ডাস্ট্রিয়াল লুব্রিক্যান্ট ও গ্রিজ।",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    {
      label: "পণ্যসমূহ",
      href: "/categories",
      children: [
        { label: "অটোমোটিভ ইঞ্জিন অয়েল", href: "/categories/automotive-oils" },
        { label: "ইন্ডাস্ট্রিয়াল লুব্রিক্যান্ট", href: "/categories/industrial-lubricants" },
        { label: "গ্রিজ ও কম্পাউন্ড", href: "/categories/greases" },
        { label: "স্পেশালটি ফ্লুইড", href: "/categories/specialty-fluids" },
      ],
    },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/engine-oil.svg`,
        eyebrow: "অটোমোটিভ ইঞ্জিন অয়েল",
        headingLead: "যে সুরক্ষা",
        headingEmphasis: "দীর্ঘস্থায়ী",
        headingTail: "রাস্তায়",
        body: "সম্পূর্ণ সিন্থেটিক ও সেমি-সিন্থেটিক মোটর অয়েল, যা তাপ, ধুলা এবং শহরের স্টপ-স্টার্ট ট্রাফিকেও ফিল্ম শক্তি ধরে রাখে।",
        ctaLabel: "ইঞ্জিন অয়েল দেখুন",
        ctaHref: "/categories/automotive-oils",
      },
      {
        image: `${HERO}/industrial.svg`,
        eyebrow: "ইন্ডাস্ট্রিয়াল লুব্রিক্যান্ট",
        headingLead: "আপনার",
        headingEmphasis: "মেশিন",
        headingTail: "রাখুন ঠান্ডা",
        body: "হাইড্রোলিক, গিয়ার ও কম্প্রেসর অয়েল—ক্ষয় কমাতে, অক্সিডেশন প্রতিরোধ করতে এবং ফ্যাক্টরিতে ড্রেন ইন্টারভাল বাড়াতে প্রস্তুত।",
        ctaLabel: "ইন্ডাস্ট্রিয়াল রেঞ্জ দেখুন",
        ctaHref: "/categories/industrial-lubricants",
      },
      {
        image: `${HERO}/grease.svg`,
        eyebrow: "গ্রিজ ও স্পেশালটি",
        headingLead: "সবচেয়ে",
        headingEmphasis: "কঠিন",
        headingTail: "কাজের জন্য",
        body: "উচ্চ-লোডের লিথিয়াম ও মলি গ্রিজ, সাথে কুল্যান্ট ও ব্রেক ফ্লুইড—যেখানে সাধারণ পণ্য ব্যর্থ হয় সেখানেও টিকে থাকে।",
        ctaLabel: "গ্রিজ ও ফ্লুইড দেখুন",
        ctaHref: "/categories/greases",
      },
    ],
  },
  why: {
    eyebrow: "কেন এমআর লুব",
    headingLead: "প্রস্তুত",
    headingEmphasis: "বাস্তব পরিস্থিতির জন্য",
    intro:
      "বাংলাদেশের রাস্তা, আবহাওয়া ও ব্যবহারচক্র ল্যাব টেস্টের চেয়ে লুব্রিক্যান্টের ওপর অনেক বেশি চাপ ফেলে। প্রতিটি এমআর লুব গ্রেড ঠিক সেই পরিস্থিতির জন্যই ব্লেন্ড ও পরীক্ষা করা হয়।",
    features: [
      {
        icon: "shield",
        title: "শক্তিশালী ক্ষয়-সুরক্ষা",
        body: "অ্যান্টি-ওয়্যার অ্যাডিটিভ প্যাকেজ স্টার্ট-আপের পরও ধাতব পৃষ্ঠে সুরক্ষামূলক ফিল্ম ধরে রাখে, ইঞ্জিন ও গিয়ারের ক্ষয় কমায়।",
      },
      {
        icon: "flame",
        title: "তাপীয় স্থিতিশীলতা",
        body: "ঢাকার গরমেও ঘন হওয়া বা ভেঙে পড়া রোধ করতে বেছে নেওয়া বেস অয়েল ও অ্যান্টিঅক্সিড্যান্ট।",
      },
      {
        icon: "gauge",
        title: "দীর্ঘ ড্রেন ইন্টারভাল",
        body: "পরিষ্কার-দহন ও অক্সিডেশন-প্রতিরোধী ফর্মুলা বেশি সময় স্পেসিফিকেশন ধরে রাখে—কম পরিবর্তন, কম ডাউনটাইম, কম খরচ।",
      },
      {
        icon: "molecule",
        title: "ব্যাচ-টেস্টেড মান",
        body: "প্রতিটি প্রোডাকশন ব্যাচ প্ল্যান্ট ছাড়ার আগে ভিসকোসিটি, ফ্ল্যাশ পয়েন্ট ও অ্যাডিটিভ মাত্রার জন্য ল্যাবে যাচাই করা হয়।",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "আমাদের রেঞ্জ",
    heading: "প্রতিটি চলমান অংশের জন্য এক সরবরাহকারী",
    subtitle:
      "ডেলিভারি ভ্যানের ইঞ্জিন থেকে স্পিনিং মিলের গিয়ারবক্স—এমআর লুব সম্পূর্ণ লুব্রিকেশন চেইন কভার করে, চারটি নির্দিষ্ট প্রোডাক্ট লাইনে।",
    exploreLabel: "পণ্য দেখুন",
  },
  featured: {
    eyebrow: "ফিচার্ড পণ্য",
    heading: "যেসব গ্রেড গ্রাহকরা বারবার নেন",
    subtitle: "প্রতিটি লাইন থেকে একটি প্রতিনিধিত্বমূলক পছন্দ—এমআর লুব নামের পেছনের কর্মঠ পণ্যগুলো।",
    viewAllLabel: "সব পণ্য দেখুন",
  },
  stats: {
    eyebrow: "সংখ্যায়",
    heading: "ওয়ার্কশপ ও ফ্যাক্টরিজুড়ে আস্থাভাজন",
    items: [
      { value: "৪০+", label: "লুব্রিক্যান্ট গ্রেড ব্লেন্ড" },
      { value: "৬৪", label: "জেলায় সরবরাহ" },
      { value: "১,২০০+", label: "ওয়ার্কশপ ও ডিলার" },
      { value: "১০০%", label: "ব্যাচ ল্যাব-টেস্টেড" },
    ],
  },
  process: {
    eyebrow: "বেস অয়েল থেকে বোতল",
    heading: "প্রতিটি ধাপে নিয়ন্ত্রণে ব্লেন্ড করা",
    body: "এমআর লুব পুনঃপ্যাকেজ করা বাল্ক অয়েল নয়। আমরা স্পেসিফিকেশন অনুযায়ী ফর্মুলেট করি, নিয়ন্ত্রিত পরিবেশে ব্লেন্ড করি এবং ভরার আগে পরীক্ষা করি—তাই লেবেলে যা থাকে, বোতলেও তাই থাকে।",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "স্পেসিফিকেশন অনুযায়ী ফর্মুলেশন",
        body: "প্রতিটি গ্রেড API/OEM পারফরম্যান্স লক্ষ্য থেকে শুরু হয়, স্থানীয় পরিস্থিতির সাথে মিলিয়ে।",
      },
      {
        title: "নিয়ন্ত্রণে ব্লেন্ডিং",
        body: "তাপমাত্রা-নিয়ন্ত্রিত প্ল্যান্টে বেস অয়েল ও অ্যাডিটিভ প্যাক সঠিক মাত্রায় ব্লেন্ড করা হয়।",
      },
      {
        title: "ব্যাচ ল্যাব-টেস্ট",
        body: "ব্যাচ ছাড়ার আগে ভিসকোসিটি, ফ্ল্যাশ পয়েন্ট ও অ্যাডিটিভ মাত্রা স্পেসের সাথে যাচাই করা হয়।",
      },
      {
        title: "ভরা, সিল ও ট্রেস",
        body: "বোতলজাত, সিলড এবং ব্যাচ-কোডেড—যাতে প্রতিটি প্যাক তার প্রোডাকশন রান পর্যন্ত ট্রেস করা যায়।",
      },
    ],
  },
  testimonials: {
    heading: "মাঠ যা বলে",
    subtitle: "ফ্লিট ম্যানেজার, ওয়ার্কশপ মালিক ও প্ল্যান্ট ইঞ্জিনিয়ার যারা এমআর লুবে চলেন।",
    items: [
      {
        quote:
          "আমাদের ডেলিভারি ফ্লিট টার্বোম্যাক্সে সরানোর পর লম্বা পথে ইঞ্জিন লক্ষণীয়ভাবে ঠান্ডা থাকে। পরিবর্তনের মাঝে অয়েল খরচ কমেছে।",
        name: "রফিকুল ইসলাম",
        role: "ফ্লিট ম্যানেজার, ঢাকা",
      },
      {
        quote:
          "আগের চেয়ে হাইড্রোলিক অয়েল আমাদের ইনজেকশন মেশিনে অনেক ভালো টেকে। কম ব্রেকডাউন, দীর্ঘ ড্রেন।",
        name: "শাহীন আহমেদ",
        role: "প্ল্যান্ট ইঞ্জিনিয়ার, গাজীপুর",
      },
      {
        quote:
          "ব্যাচের পর ব্যাচ ধারাবাহিক মান, আর তাদের টিম আসলেই লুব্রিকেশন বোঝে। তাই আমার ওয়ার্কশপ বারবার অর্ডার করে।",
        name: "কামাল হোসেন",
        role: "ওয়ার্কশপ মালিক, চট্টগ্রাম",
      },
    ],
  },
  cta: {
    heading: "আপনার ইঞ্জিন বা মেশিনের জন্য সঠিক গ্রেড দরকার?",
    body: "আপনার গাড়ি, যন্ত্রপাতি বা প্রয়োগ জানান—আমাদের টিম সঠিক এমআর লুব পণ্যটি সুপারিশ করবে এবং নিকটতম ডিলারে পৌঁছে দেবে।",
    button: "আমাদের সাথে কথা বলুন",
  },
  categories: [
    {
      slug: "automotive-oils",
      name: "অটোমোটিভ ইঞ্জিন অয়েল",
      icon: "engine",
      tagline: "গাড়ি · বাইক · বাণিজ্যিক",
      description:
        "গাড়ি, মোটরসাইকেল ও বাণিজ্যিক যানবাহনের জন্য সিন্থেটিক ও মিনারেল ইঞ্জিন অয়েল—স্টপ-স্টার্ট ট্রাফিক ও দীর্ঘ হাইওয়ে চলার জন্য সুরক্ষা।",
      image: `${CAT}/automotive-oils.svg`,
    },
    {
      slug: "industrial-lubricants",
      name: "ইন্ডাস্ট্রিয়াল লুব্রিক্যান্ট",
      icon: "gear",
      tagline: "হাইড্রোলিক · গিয়ার · কম্প্রেসর",
      description:
        "ফ্যাক্টরি ও মিলের জন্য হাইড্রোলিক, গিয়ার ও কম্প্রেসর অয়েল—কম ক্ষয়, উচ্চ অক্সিডেশন প্রতিরোধ ও নির্ভরযোগ্য দীর্ঘ-ড্রেন পারফরম্যান্স।",
      image: `${CAT}/industrial-lubricants.svg`,
    },
    {
      slug: "greases",
      name: "গ্রিজ ও কম্পাউন্ড",
      icon: "drum",
      tagline: "উচ্চ-লোড · উচ্চ-তাপ",
      description:
        "লিথিয়াম, মলি ও উচ্চ-তাপমাত্রার গ্রিজ—ভারী লোড, পানি ও তাপেও জায়গায় থাকে, যেখানে অয়েল গড়িয়ে পড়ে।",
      image: `${CAT}/greases.svg`,
    },
    {
      slug: "specialty-fluids",
      name: "স্পেশালটি ফ্লুইড",
      icon: "droplet",
      tagline: "কুল্যান্ট · ব্রেক · ট্রান্সমিশন",
      description:
        "ইঞ্জিন কুল্যান্ট, ব্রেক ফ্লুইড ও অটোমেটিক ট্রান্সমিশন ফ্লুইড—যেসব সিস্টেমে সাধারণ লুব্রিক্যান্ট পৌঁছায় না তা সুরক্ষায় প্রস্তুত।",
      image: `${CAT}/specialty-fluids.svg`,
    },
  ],
  products: [
    {
      slug: "turbomax-5w40",
      category: "automotive-oils",
      name: "টার্বোম্যাক্স 5W-40 ফুললি সিন্থেটিক",
      tagline: "আধুনিক টার্বোচার্জড ইঞ্জিনের জন্য সম্পূর্ণ সিন্থেটিক সুরক্ষা।",
      image: `${PROD}/turbomax-5w40.svg`,
      description:
        "টার্বোচার্জড ও কমন-রেল সহ আধুনিক পেট্রল ও ডিজেল ইঞ্জিনের জন্য তৈরি সম্পূর্ণ সিন্থেটিক, লো-অ্যাশ ইঞ্জিন অয়েল। উচ্চ-তাপমাত্রার শহুরে চলা ও দীর্ঘ হাইওয়ে চলায় এর স্থিতিশীল ফিল্ম টিকে থাকে, পিস্টন পরিষ্কার রাখে ও ক্ষয় কমায়।",
      specs: [
        { label: "ভিসকোসিটি", value: "5W-40" },
        { label: "টাইপ", value: "ফুললি সিন্থেটিক" },
        { label: "API গ্রেড", value: "API SN / CF" },
        { label: "প্যাক সাইজ", value: "1L · 4L · 5L" },
      ],
      benefits: [
        "উচ্চ-তাপমাত্রায়ও ফিল্ম শক্তি ধরে রাখে",
        "লো-অ্যাশ ফর্মুলা টার্বোচার্জার ও ইমিশন সিস্টেম সুরক্ষা করে",
        "চমৎকার কোল্ড-স্টার্ট ফ্লো, ইগনিশনে কম ক্ষয়",
        "সাধারণ ব্যবহারে দীর্ঘ ড্রেন সক্ষমতা",
      ],
    },
    {
      slug: "citydrive-20w50",
      category: "automotive-oils",
      name: "সিটিড্রাইভ 20W-50",
      tagline: "বেশি চলা ইঞ্জিনের জন্য নির্ভরযোগ্য দৈনন্দিন সুরক্ষা।",
      image: `${PROD}/citydrive-20w50.svg`,
      description:
        "গরম, ধুলাময়, স্টপ-স্টার্ট পরিস্থিতিতে চলা পুরনো ও বেশি-মাইলেজ পেট্রল ইঞ্জিনের জন্য শক্তিশালী মিনারেল-ভিত্তিক ইঞ্জিন অয়েল। ভারী গ্রেড ক্ষয়প্রাপ্ত ক্লিয়ারেন্সে কুশন দেয় ও গরমে পাতলা হওয়া রোধ করে।",
      specs: [
        { label: "ভিসকোসিটি", value: "20W-50" },
        { label: "টাইপ", value: "মিনারেল" },
        { label: "API গ্রেড", value: "API SL" },
        { label: "প্যাক সাইজ", value: "1L · 3L · 5L" },
      ],
      benefits: [
        "ঘন ফিল্ম বেশি-মাইলেজ ইঞ্জিনে কুশন দেয়",
        "উচ্চ তাপমাত্রায় পাতলা হওয়া রোধ করে",
        "শক্তিশালী ডিটারজেন্ট ইঞ্জিন ভেতর থেকে পরিষ্কার রাখে",
        "ভারী ট্রাফিকে আইডলে নির্ভরযোগ্য চাপ",
      ],
    },
    {
      slug: "motoguard-10w40",
      category: "automotive-oils",
      name: "মটোগার্ড 10W-40 মোটরসাইকেল অয়েল",
      tagline: "ফোর-স্ট্রোক মোটরসাইকেলের জন্য ওয়েট-ক্লাচ নিরাপদ সুরক্ষা।",
      image: `${PROD}/motoguard-10w40.svg`,
      description:
        "একটি সেমি-সিন্থেটিক ফোর-স্ট্রোক মোটরসাইকেল অয়েল, যা এক বোতল থেকে ইঞ্জিন, গিয়ারবক্স ও ওয়েট ক্লাচ লুব্রিকেট করে। JASO MA2 ফ্রিকশন কন্ট্রোল মানে শহরের চলাতেও ক্লাচে স্লিপ ছাড়াই পজিটিভ অনুভূতি।",
      specs: [
        { label: "ভিসকোসিটি", value: "10W-40" },
        { label: "টাইপ", value: "সেমি-সিন্থেটিক" },
        { label: "স্ট্যান্ডার্ড", value: "JASO MA2 · API SN" },
        { label: "প্যাক সাইজ", value: "800ml · 1L" },
      ],
      benefits: [
        "JASO MA2 রেটেড—ওয়েট-ক্লাচে স্লিপ নেই",
        "এক অয়েলেই গিয়ারবক্স ও ইঞ্জিন সুরক্ষা",
        "টানা উচ্চ-আরপিএম চলাতেও স্থিতিশীল",
        "মসৃণ শিফটিং ও ধারাবাহিক ক্লাচ অনুভূতি",
      ],
    },
    {
      slug: "hydroflow-aw68",
      category: "industrial-lubricants",
      name: "হাইড্রোফ্লো AW 68 হাইড্রোলিক অয়েল",
      tagline: "কঠিন যন্ত্রপাতির জন্য অ্যান্টি-ওয়্যার হাইড্রোলিক অয়েল।",
      image: `${PROD}/hydroflow-aw68.svg`,
      description:
        "ইন্ডাস্ট্রিয়াল ও মোবাইল হাইড্রোলিক সিস্টেমের জন্য প্রিমিয়াম অ্যান্টি-ওয়্যার হাইড্রোলিক অয়েল। চমৎকার অক্সিডেশন ও তাপীয় স্থিতিশীলতা পাম্প ও ভালভ সুরক্ষা করে এবং দীর্ঘ সার্ভিস ইন্টারভালেও সিস্টেম পরিষ্কার রাখে।",
      specs: [
        { label: "ISO গ্রেড", value: "ISO VG 68" },
        { label: "টাইপ", value: "অ্যান্টি-ওয়্যার (AW)" },
        { label: "প্রয়োগ", value: "হাইড্রোলিক সিস্টেম" },
        { label: "প্যাক সাইজ", value: "5L · 20L · 208L" },
      ],
      benefits: [
        "অ্যান্টি-ওয়্যার অ্যাডিটিভ পাম্প ও ভালভ সুরক্ষা করে",
        "দীর্ঘ সার্ভিস লাইফের জন্য উচ্চ অক্সিডেশন স্থিতিশীলতা",
        "ভালো ওয়াটার সেপারেশন সিস্টেম পরিষ্কার রাখে",
        "অপারেটিং তাপমাত্রাজুড়ে স্থিতিশীল ভিসকোসিটি",
      ],
    },
    {
      slug: "gearshield-ep220",
      category: "industrial-lubricants",
      name: "গিয়ারশিল্ড EP 220 গিয়ার অয়েল",
      tagline: "ইন্ডাস্ট্রিয়াল গিয়ারবক্সের জন্য এক্সট্রিম-প্রেসার সুরক্ষা।",
      image: `${PROD}/gearshield-ep220.svg`,
      description:
        "ভারী ও শক লোডে চলা এনক্লোজড গিয়ার ড্রাইভের জন্য এক্সট্রিম-প্রেসার ইন্ডাস্ট্রিয়াল গিয়ার অয়েল। EP অ্যাডিটিভ সিস্টেম লোড বহন করে ও মাইক্রো-পিটিং প্রতিরোধ করে গিয়ার ও বেয়ারিংয়ের আয়ু বাড়ায়।",
      specs: [
        { label: "ISO গ্রেড", value: "ISO VG 220" },
        { label: "টাইপ", value: "এক্সট্রিম প্রেসার (EP)" },
        { label: "প্রয়োগ", value: "এনক্লোজড গিয়ার ড্রাইভ" },
        { label: "প্যাক সাইজ", value: "20L · 208L" },
      ],
      benefits: [
        "ফিল্ম ভাঙা ছাড়াই ভারী ও শক লোড বহন করে",
        "গিয়ার দাঁতে মাইক্রো-পিটিং প্রতিরোধ করে",
        "শক্তিশালী তাপীয় ও অক্সিডেশন স্থিতিশীলতা",
        "বেয়ারিং ও সিল ক্ষয় থেকে রক্ষা করে",
      ],
    },
    {
      slug: "compressorpro-46",
      category: "industrial-lubricants",
      name: "কম্প্রেসরপ্রো 46",
      tagline: "রোটারি ও রেসিপ্রোকেটিং কম্প্রেসরের জন্য দীর্ঘ-আয়ু অয়েল।",
      image: `${PROD}/compressorpro-46.svg`,
      description:
        "রোটারি স্ক্রু ও রেসিপ্রোকেটিং ইউনিটের জন্য উচ্চ-কার্যক্ষমতার এয়ার কম্প্রেসর অয়েল। কম কার্বন-গঠন প্রবণতা ও শক্তিশালী অক্সিডেশন প্রতিরোধ মানে পরিষ্কার ভালভ, নিরাপদ চলার তাপমাত্রা ও দীর্ঘ ড্রেন ইন্টারভাল।",
      specs: [
        { label: "ISO গ্রেড", value: "ISO VG 46" },
        { label: "টাইপ", value: "কম্প্রেসর অয়েল" },
        { label: "প্রয়োগ", value: "এয়ার কম্প্রেসর" },
        { label: "প্যাক সাইজ", value: "5L · 20L" },
      ],
      benefits: [
        "কম ডিপোজিট গঠন ভালভ পরিষ্কার রাখে",
        "দীর্ঘ ড্রেনের জন্য উচ্চ অক্সিডেশন প্রতিরোধ",
        "ভালো পানি ও বায়ু সেপারেশন",
        "উচ্চ ডিসচার্জ তাপমাত্রায় স্থিতিশীল পারফরম্যান্স",
      ],
    },
    {
      slug: "redlith-ep2",
      category: "greases",
      name: "রেডলিথ EP2 মাল্টিপারপাস গ্রিজ",
      tagline: "বেয়ারিং ও চ্যাসিসের জন্য সর্বজনীন ওয়ার্কশপ গ্রিজ।",
      image: `${PROD}/redlith-ep2.svg`,
      description:
        "হুইল বেয়ারিং, চ্যাসিস পয়েন্ট ও সাধারণ ওয়ার্কশপ ব্যবহারের জন্য লিথিয়াম-ভিত্তিক এক্সট্রিম-প্রেসার গ্রিজ। এটি পানিতে ধুয়ে যাওয়া রোধ করে এবং লোড ও তাপে গঠন ধরে রাখে—বেশিরভাগ কাজের জন্য এক গ্রিজ।",
      specs: [
        { label: "NLGI গ্রেড", value: "NLGI 2" },
        { label: "থিকেনার", value: "লিথিয়াম EP" },
        { label: "ড্রপ পয়েন্ট", value: "≥ 190°C" },
        { label: "প্যাক সাইজ", value: "500g · 1kg · 15kg" },
      ],
      benefits: [
        "লোডেড বেয়ারিংয়ের জন্য এক্সট্রিম-প্রেসার অ্যাডিটিভ",
        "পানিতে ধুয়ে যাওয়া ও মরিচা প্রতিরোধ করে",
        "বিস্তৃত অপারেটিং তাপমাত্রা পরিসর",
        "গড়িয়ে না পড়ে জায়গায় থাকে",
      ],
    },
    {
      slug: "molyforce-hd",
      category: "greases",
      name: "মলিফোর্স HD হাই-লোড গ্রিজ",
      tagline: "শক লোড ও ভারী যন্ত্রের জন্য মলি-ফোর্টিফাইড গ্রিজ।",
      image: `${PROD}/molyforce-hd.svg`,
      description:
        "সবচেয়ে ভারী কাজের জন্য মলিবডেনাম-ডাইসালফাইড ফোর্টিফাইড গ্রিজ—শক ও স্লাইডিং লোডে পিন, বুশ ও জয়েন্টের জন্য। বাউন্ডারি পরিস্থিতিতে যখন সাধারণ গ্রিজ চেপে বেরিয়ে যায়, তখনও মলি ফিল্ম সুরক্ষা দেয়।",
      specs: [
        { label: "NLGI গ্রেড", value: "NLGI 2" },
        { label: "অ্যাডিটিভ", value: "৩% মলি (MoS₂)" },
        { label: "ড্রপ পয়েন্ট", value: "≥ 190°C" },
        { label: "প্যাক সাইজ", value: "1kg · 15kg" },
      ],
      benefits: [
        "শক ও স্লাইডিং লোডে মলি ফিল্ম সুরক্ষা দেয়",
        "পিন, বুশ ও খোলা জয়েন্টের জন্য আদর্শ",
        "উচ্চ লোড-বহন ও অ্যান্টি-সিজ পারফরম্যান্স",
        "রি-গ্রিজিংয়ের মাঝে দীর্ঘস্থায়ী সুরক্ষা",
      ],
    },
    {
      slug: "coolguard-coolant",
      category: "specialty-fluids",
      name: "কুলগার্ড লং-লাইফ কুল্যান্ট",
      tagline: "সারা বছর সুরক্ষার জন্য করোশন-প্রতিরোধী কুল্যান্ট।",
      image: `${PROD}/coolguard-coolant.svg`,
      description:
        "লং-লাইফ ইনহিবিটর প্যাকেজসহ ইথিলিন-গ্লাইকল ভিত্তিক ইঞ্জিন কুল্যান্ট কনসেন্ট্রেট। এটি কুলিং সিস্টেমকে করোশন, স্কেল ও বয়েল-ওভার থেকে রক্ষা করে বাংলাদেশি ইঞ্জিনের তাপমাত্রা পরিসরজুড়ে।",
      specs: [
        { label: "টাইপ", value: "ইথিলিন গ্লাইকল" },
        { label: "প্রযুক্তি", value: "লং-লাইফ ইনহিবিটর" },
        { label: "মিশ্রণ অনুপাত", value: "৩৩–৫০% পাতলা" },
        { label: "প্যাক সাইজ", value: "1L · 5L" },
      ],
      benefits: [
        "রেডিয়েটর ও ব্লককে করোশন থেকে রক্ষা করে",
        "ফুটন্ত বিন্দু বাড়ায় ও ওভারহিটিং রোধ করে",
        "অ্যান্টি-স্কেল প্যাকেজ প্যাসেজ পরিষ্কার রাখে",
        "রাবার হোস ও গ্যাসকেটের সাথে সামঞ্জস্যপূর্ণ",
      ],
    },
    {
      slug: "brakeline-dot4",
      category: "specialty-fluids",
      name: "ব্রেকলাইন DOT 4 ব্রেক ফ্লুইড",
      tagline: "ধারাবাহিক প্যাডেল অনুভূতির জন্য উচ্চ ফুটন্ত-বিন্দুর ব্রেক ফ্লুইড।",
      image: `${PROD}/brakeline-dot4.svg`,
      description:
        "বারবার কঠোর ব্যবহারে নির্ভরযোগ্য ব্রেকিংয়ের জন্য উচ্চ ড্রাই ও ওয়েট ফুটন্ত-বিন্দুসহ DOT 4 গ্লাইকল-ইথার ব্রেক ফ্লুইড। এর স্থিতিশীল পারফরম্যান্স দীর্ঘ ঢালে ও ভারী ট্রাফিকে ভেপার লক প্রতিরোধ করে।",
      specs: [
        { label: "স্ট্যান্ডার্ড", value: "DOT 4" },
        { label: "ড্রাই ফুটন্ত বিন্দু", value: "≥ 260°C" },
        { label: "প্রয়োগ", value: "হাইড্রোলিক ব্রেক ও ক্লাচ" },
        { label: "প্যাক সাইজ", value: "250ml · 500ml · 1L" },
      ],
      benefits: [
        "উচ্চ ফুটন্ত বিন্দু ব্রেক ফেড প্রতিরোধ করে",
        "বারবার কঠোর ব্রেকিংয়েও স্থিতিশীল প্যাডেল অনুভূতি",
        "হাইড্রোলিক সিস্টেমকে করোশন থেকে রক্ষা করে",
        "কম আর্দ্রতা শোষণ, দীর্ঘ সার্ভিস লাইফ",
      ],
    },
    {
      slug: "autotrans-atf",
      category: "specialty-fluids",
      name: "অটোট্রান্স ATF ট্রান্সমিশন ফ্লুইড",
      tagline: "অটোমেটিক ট্রান্সমিশনের জন্য মসৃণ-শিফট ফ্লুইড।",
      image: `${PROD}/autotrans-atf.svg`,
      description:
        "আধুনিক অটোমেটিকের মসৃণ, ধারাবাহিক শিফটের জন্য প্রয়োজনীয় ফ্রিকশন স্থিতিশীলতাসহ প্রিমিয়াম অটোমেটিক ট্রান্সমিশন ফ্লুইড। এটি তাপ ও অক্সিডেশন নিয়ন্ত্রণ করে গিয়ার, ক্লাচ ও পাম্প সুরক্ষা করে।",
      specs: [
        { label: "টাইপ", value: "ATF (মাল্টি-ভেহিকল)" },
        { label: "বৈশিষ্ট্য", value: "ফ্রিকশন-স্থিতিশীল" },
        { label: "প্রয়োগ", value: "অটোমেটিক ট্রান্সমিশন" },
        { label: "প্যাক সাইজ", value: "1L · 4L" },
      ],
      benefits: [
        "মসৃণ, ধারাবাহিক শিফট অনুভূতি",
        "ফ্লুইডের আয়ুজুড়ে ফ্রিকশন স্থিতিশীলতা",
        "গিয়ার, ক্লাচ ও পাম্প সুরক্ষা করে",
        "তাপ নিয়ন্ত্রণ করে ও অক্সিডেশন প্রতিরোধ করে",
      ],
    },
  ],
  labels: {
    allProducts: "সব পণ্য",
    viewDetails: "বিস্তারিত দেখুন",
    backToCategories: "পণ্যে ফিরুন",
    backToCategory: "ফিরে যান",
    inCategory: "-এ",
    specsHeading: "স্পেসিফিকেশন",
    benefitsHeading: "মূল সুবিধা",
    relatedHeading: "সম্পর্কিত পণ্য",
    enquire: "এই পণ্য সম্পর্কে জিজ্ঞাসা করুন",
    productsCount: "পণ্য",
  },
  footer: {
    blurb:
      "এমআর লুব বাংলাদেশের রাস্তা, ওয়ার্কশপ ও ফ্যাক্টরির জন্য উচ্চ-কার্যক্ষমতার ইঞ্জিন অয়েল, ইন্ডাস্ট্রিয়াল লুব্রিক্যান্ট ও গ্রিজ ব্লেন্ড করে—এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান।",
    exploreHeading: "এক্সপ্লোর",
    contactHeading: "যোগাযোগ",
    email: "info@mrlube.com.bd",
    phone: "+৮৮০ ১৭০০-০০০০০০",
    addressHeading: "প্রধান কার্যালয়",
    address: ["এমআর লুব ব্লেন্ডিং প্ল্যান্ট", "তেজগাঁও শিল্প এলাকা", "ঢাকা ১২০৮, বাংলাদেশ"],
    followHeading: "ফলো করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© ২০২৬ এমআর লুব, এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের সম্পর্কে",
      title: "কাজের পেছনের লুব্রিক্যান্ট",
      description:
        "বাংলাদেশের অর্থনীতিকে সচল রাখা ইঞ্জিন ও মেশিনগুলো যাতে স্থানীয় পরিস্থিতির জন্য প্রস্তুত লুব্রিক্যান্টে সুরক্ষিত থাকে, তা নিশ্চিত করতেই এমআর লুব।",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "আমাদের গল্প",
    storyParagraphs: [
      "এমআর লুবের শুরু একটি সহজ পর্যবেক্ষণ থেকে: বাংলাদেশে অনেক ইঞ্জিন আগেভাগে নষ্ট হচ্ছিল চালানোর ধরনের কারণে নয়, বরং ভেতরের অয়েলের কারণে। বাল্ক, নামহীন ও অসংগত লুব্রিক্যান্ট নীরবে মালিকদের রিবিল্ড ও ডাউনটাইমের খরচ ঘটাচ্ছিল।",
      "এমআর গ্রুপের অংশ হিসেবে আমরা লুব্রিক্যান্টকে সত্যিকারের স্পেসিফিকেশনে ব্লেন্ড করার লক্ষ্য নিই—অটোমোটিভ ও ইন্ডাস্ট্রিয়াল গ্রেড ফর্মুলেট করা, নিয়ন্ত্রণে ব্লেন্ড করা এবং ব্যাচে ব্যাচে ল্যাব-টেস্ট করা, তারপর সারাদেশের ডিলার নেটওয়ার্কে পৌঁছে দেওয়া।",
      "আজ এমআর লুব ৬৪ জেলার ওয়ার্কশপ, ফ্লিট, মিল ও ফ্যাক্টরিতে সরবরাহ করে—একটি পণ্য পরিসর নিয়ে যা মোটরসাইকেলের ক্র্যাঙ্ককেস থেকে স্পিনিং মিলের গিয়ারবক্স পর্যন্ত সবকিছু কভার করে।",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "স্থানীয় পরিস্থিতির জন্য প্রকৌশলকৃত লুব্রিক্যান্ট দিয়ে বাংলাদেশের ইঞ্জিন ও যন্ত্রপাতি সুরক্ষা করা, ধারাবাহিক মান ও সৎ প্রযুক্তিগত পরামর্শে সমর্থিত।",
    visionHeading: "আমাদের ভিশন",
    vision:
      "বাংলাদেশের ওয়ার্কশপ, ফ্লিট ও ফ্যাক্টরি যে লুব্রিক্যান্ট ব্র্যান্ডে ডিফল্টভাবে আস্থা রাখে তা হওয়া—দীর্ঘতর ইঞ্জিন ও মেশিন আয়ুতে প্রমাণিত পারফরম্যান্সের জন্য পরিচিত।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "মান", body: "প্রতিটি ব্যাচ স্পেসে ফর্মুলেট ও শিপ করার আগে ল্যাব-টেস্ট করা হয়। কোনো শর্টকাট নেই, পুনঃপ্যাকেজ বাল্ক নেই।" },
      { title: "পারফরম্যান্স", body: "আমরা নিজেদের মাপি ক্ষয় হ্রাস ও যন্ত্রের আয়ু দিয়ে, শুধু লেবেলের দাবি দিয়ে নয়।" },
      { title: "সততা", body: "আমরা কাজের জন্য সঠিক গ্রেড সুপারিশ করি—তা সবচেয়ে দামি না হলেও।" },
      { title: "সহজলভ্যতা", body: "একটি ডিলার নেটওয়ার্ক যা প্রতিটি জেলায় সঠিক পণ্য হাতের নাগালে রাখে।" },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "আমাদের পণ্য",
      title: "প্রতিটি চলমান অংশের জন্য লুব্রিকেশন",
      description:
        "চারটি নির্দিষ্ট প্রোডাক্ট লাইন ইঞ্জিন, হাইড্রোলিক, গিয়ারবক্স, বেয়ারিং এবং মাঝের স্পেশালটি ফ্লুইড কভার করে। ভেতরে কী আছে দেখতে একটি লাইন বেছে নিন।",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "প্রতিটি এমআর লুব গ্রেড একটি পারফরম্যান্স লক্ষ্যে ফর্মুলেট করা এবং ব্যাচে ব্যাচে ল্যাব-টেস্ট করা হয়। আপনার ইঞ্জিন বা মেশিনের সঠিক পণ্য খুঁজতে একটি ক্যাটাগরি বেছে নিন।",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "এমআর লুবের ভেতরে",
      description: "ব্লেন্ডিং প্ল্যান্ট, পণ্য পরিসর এবং যেসব ওয়ার্কশপ ও ফ্লিট এমআর লুবে চলে তার এক ঝলক।",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "আমাদের ব্লেন্ডিং প্ল্যান্ট, প্যাকেজিং লাইন এবং যেসব গ্রাহক আমাদের লুব্রিক্যান্টের ওপর নির্ভর করেন তাদের ছবি ও ভিডিও। নিচে ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ",
      title: "সঠিক গ্রেড খুঁজুন",
      description:
        "কোনো পণ্য, বাল্ক অর্ডার বা ডিলার হওয়া নিয়ে প্রশ্ন? আমাদের টেকনিক্যাল টিম আপনার প্রয়োগের সাথে সঠিক লুব্রিক্যান্ট মেলাতে প্রস্তুত।",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "আমাদের টিম সাধারণত এক কার্যদিবসের মধ্যে সাড়া দেয়।",
    officeHeading: "প্রধান কার্যালয়",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
  },
};

export const mrlubeContent: Record<AppLocale, LubeContent> = { en, bn };
