import type { AppLocale } from "@/i18n/routing";
import type { MahinContent } from "@/types/mahin";

const IMG = "/images/companies/mahin";
const HERO = `${IMG}/hero`;
const CAT = `${IMG}/categories`;
const PROD = `${IMG}/products`;

const en: MahinContent = {
  name: "Mahin Enterprise",
  tagline: "LPG gas cylinders delivered to your door across the Mymensingh division — safe, sealed, and on time.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/categories",
      children: [
        { label: "Household LPG", href: "/categories/household-lpg" },
        { label: "Commercial LPG", href: "/categories/commercial-lpg" },
        { label: "Industrial LPG", href: "/categories/industrial-lpg" },
        { label: "Auto LPG", href: "/categories/autogas" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/household.svg`,
        eyebrow: "Household LPG",
        headingLead: "Gas at your",
        headingEmphasis: "doorstep",
        headingTail: "when you need it",
        body: "Sealed, full-weight LPG cylinders delivered to homes across the Mymensingh division — order today, cook tonight.",
        ctaLabel: "See household cylinders",
        ctaHref: "/categories/household-lpg",
      },
      {
        image: `${HERO}/commercial.svg`,
        eyebrow: "Commercial & Industrial",
        headingLead: "Reliable supply for",
        headingEmphasis: "every burner",
        headingTail: "",
        body: "From restaurant kitchens to factory lines, we keep 35 kg, 45 kg, and bulk LPG flowing without interruption.",
        ctaLabel: "Explore commercial LPG",
        ctaHref: "/categories/commercial-lpg",
      },
      {
        image: `${HERO}/delivery.svg`,
        eyebrow: "Mymensingh Division",
        headingLead: "Serving all",
        headingEmphasis: "four districts",
        headingTail: "close to home",
        body: "Mymensingh, Jamalpur, Netrokona, and Sherpur — a local network built for fast, dependable delivery.",
        ctaLabel: "Check our coverage",
        ctaHref: "/#coverage",
      },
    ],
  },
  why: {
    eyebrow: "Why Mahin Enterprise",
    headingLead: "Safe gas,",
    headingEmphasis: "dependable delivery",
    intro:
      "LPG is only as good as the people who handle it. We treat every cylinder as a safety-critical product — from full weight to a tight seal to the person who carries it up your stairs.",
    features: [
      {
        icon: "shield",
        title: "Safety First",
        body: "Every cylinder is leak-checked and seal-verified before it leaves us, and our team is trained in safe handling and connection.",
      },
      {
        icon: "gauge",
        title: "Full Weight, Every Time",
        body: "No underfilled cylinders. What you pay for is what you get — checked on calibrated scales before dispatch.",
      },
      {
        icon: "truck",
        title: "Fast Local Delivery",
        body: "A Mymensingh-based fleet means same-day or next-day doorstep delivery, plus quick empty-cylinder pickup.",
      },
      {
        icon: "phone",
        title: "Easy Reordering",
        body: "One call or message and your refill is on the way — with a standing schedule for regular commercial customers.",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "What We Supply",
    heading: "The right cylinder for every use",
    subtitle:
      "From a single household burner to an industrial line, Mahin Enterprise carries the full range of LPG cylinders and bulk supply.",
    exploreLabel: "View products",
  },
  featured: {
    eyebrow: "Popular Products",
    heading: "Cylinders our customers rely on",
    subtitle: "A representative pick from each range — the sizes we deliver most across the division.",
    viewAllLabel: "View all products",
  },
  coverage: {
    eyebrow: "Service Area",
    heading: "Proudly serving the Mymensingh division",
    body: "Mahin Enterprise is a local LPG supplier — we deliver only within the Mymensingh division, and that focus is our strength. A tight service area means shorter routes, faster delivery, and a team that knows every neighbourhood we serve.",
    image: `${IMG}/coverage.svg`,
    districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    note: "Outside these districts? We can point you to a trusted supplier — just ask.",
  },
  stats: {
    eyebrow: "By the numbers",
    heading: "A trusted name across the division",
    items: [
      { value: "4", label: "Districts served" },
      { value: "10k+", label: "Cylinders delivered" },
      { value: "24hr", label: "Typical delivery window" },
      { value: "100%", label: "Weight & seal checked" },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "From your order to your kitchen",
    body: "Getting a refill from Mahin Enterprise is simple — and every step is built around safety and speed.",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "Place your order",
        body: "Call, message, or ask your local agent — tell us the cylinder size and your address.",
      },
      {
        title: "We check & load",
        body: "Your cylinder is weight-verified and leak-checked, then loaded onto our delivery vehicle.",
      },
      {
        title: "Doorstep delivery",
        body: "Our trained team delivers to your door, and can safely connect the cylinder if you need.",
      },
      {
        title: "Empty pickup",
        body: "We collect your empty cylinder on the next visit — no hassle, no extra trip for you.",
      },
    ],
  },
  testimonials: {
    heading: "What our customers say",
    subtitle: "Families and businesses across the Mymensingh division who count on Mahin Enterprise.",
    items: [
      {
        quote:
          "They always deliver the same day I call, and the cylinder is always full weight. I never worry about running out mid-cooking anymore.",
        name: "Nasima Akter",
        role: "Household customer, Mymensingh",
      },
      {
        quote:
          "For our restaurant, uninterrupted gas is everything. Mahin keeps us on a schedule and we've never had a shortage.",
        name: "Jahangir Alam",
        role: "Restaurant owner, Jamalpur",
      },
      {
        quote:
          "Professional handling and honest weight. Their team clearly knows LPG safety, which matters a lot to us.",
        name: "Rezaul Karim",
        role: "Factory manager, Sherpur",
      },
    ],
  },
  cta: {
    heading: "Need a cylinder delivered today?",
    body: "Tell us your location in the Mymensingh division and the cylinder size you need — our team will get a full, sealed cylinder on its way to you.",
    button: "Order a cylinder",
  },
  categories: [
    {
      slug: "household-lpg",
      name: "Household LPG",
      icon: "home",
      tagline: "For homes & families",
      description:
        "12 kg and 25 kg cylinders and accessories for everyday home cooking — delivered and connected at your door.",
      image: `${CAT}/household-lpg.svg`,
    },
    {
      slug: "commercial-lpg",
      name: "Commercial LPG",
      icon: "flame",
      tagline: "Restaurants & shops",
      description:
        "35 kg and 45 kg cylinders for restaurants, hotels, and busy kitchens that need dependable, high-volume gas.",
      image: `${CAT}/commercial-lpg.svg`,
    },
    {
      slug: "industrial-lpg",
      name: "Industrial LPG",
      icon: "factory",
      tagline: "Factories & plants",
      description:
        "Bulk LPG and reticulated (piped) gas systems for industrial lines, boilers, and processes across the division.",
      image: `${CAT}/industrial-lpg.svg`,
    },
    {
      slug: "autogas",
      name: "Auto LPG",
      icon: "car",
      tagline: "Vehicles & conversion",
      description:
        "Auto LPG refills and conversion kits for vehicles running on cleaner, more economical gas fuel.",
      image: `${CAT}/autogas.svg`,
    },
  ],
  products: [
    {
      slug: "lpg-cylinder-12kg",
      category: "household-lpg",
      name: "12 kg LPG Cylinder",
      tagline: "The standard household cylinder for everyday cooking.",
      image: `${PROD}/lpg-cylinder-12kg.svg`,
      description:
        "The most popular size for family kitchens. A full-weight 12 kg cylinder that fits standard single- and double-burner stoves, delivered sealed and ready to connect. Ideal for a typical household's daily cooking.",
      specs: [
        { label: "Net gas weight", value: "12 kg" },
        { label: "Use", value: "Household cooking" },
        { label: "Valve", value: "Standard 22 mm" },
        { label: "Delivery", value: "Doorstep, division-wide" },
      ],
      benefits: [
        "Full 12 kg net weight, verified before dispatch",
        "Fits standard household stoves and regulators",
        "Delivered sealed and safety-checked",
        "Easy refill with empty-cylinder pickup",
      ],
    },
    {
      slug: "lpg-cylinder-25kg",
      category: "household-lpg",
      name: "25 kg LPG Cylinder",
      tagline: "Fewer refills for larger households.",
      image: `${PROD}/lpg-cylinder-25kg.svg`,
      description:
        "A larger cylinder for bigger families or homes that cook heavily — the same trusted quality with fewer refills. A good middle option between household and small commercial use.",
      specs: [
        { label: "Net gas weight", value: "25 kg" },
        { label: "Use", value: "Large households" },
        { label: "Valve", value: "Standard 22 mm" },
        { label: "Delivery", value: "Doorstep, division-wide" },
      ],
      benefits: [
        "Longer runtime means fewer refills",
        "Full net weight, checked on calibrated scales",
        "Sealed and leak-tested before delivery",
        "Ideal for larger families or small eateries",
      ],
    },
    {
      slug: "double-burner-stove",
      category: "household-lpg",
      name: "Double Burner Gas Stove",
      tagline: "A reliable, easy-clean stove to pair with your cylinder.",
      image: `${PROD}/double-burner-stove.svg`,
      description:
        "A sturdy stainless-steel double-burner stove for everyday household cooking. Auto-ignition and adjustable flame control make it easy to use, and it pairs perfectly with our household cylinders.",
      specs: [
        { label: "Burners", value: "2 (auto-ignition)" },
        { label: "Body", value: "Stainless steel" },
        { label: "Use", value: "Household" },
        { label: "Includes", value: "Regulator-ready fitting" },
      ],
      benefits: [
        "Auto-ignition — no matches needed",
        "Adjustable flame for precise cooking",
        "Easy-clean stainless steel top",
        "Pairs with our 12 kg and 25 kg cylinders",
      ],
    },
    {
      slug: "lpg-cylinder-35kg",
      category: "commercial-lpg",
      name: "35 kg LPG Cylinder",
      tagline: "Steady gas for busy commercial kitchens.",
      image: `${PROD}/lpg-cylinder-35kg.svg`,
      description:
        "A high-capacity cylinder built for restaurants, tea stalls, and catering kitchens. Longer runtime and dependable pressure keep your burners going through a full service without interruption.",
      specs: [
        { label: "Net gas weight", value: "35 kg" },
        { label: "Use", value: "Commercial kitchens" },
        { label: "Valve", value: "Commercial POL/22 mm" },
        { label: "Delivery", value: "Scheduled or on-call" },
      ],
      benefits: [
        "High capacity for continuous commercial use",
        "Dependable pressure for multi-burner setups",
        "Scheduled delivery keeps you stocked",
        "Weight and seal verified every cylinder",
      ],
    },
    {
      slug: "lpg-cylinder-45kg",
      category: "commercial-lpg",
      name: "45 kg LPG Cylinder",
      tagline: "Maximum runtime for high-demand kitchens.",
      image: `${PROD}/lpg-cylinder-45kg.svg`,
      description:
        "Our largest single cylinder, for hotels and high-volume kitchens that burn through gas fast. Fewer changeovers and steady supply mean less downtime during peak hours.",
      specs: [
        { label: "Net gas weight", value: "45 kg" },
        { label: "Use", value: "High-demand kitchens" },
        { label: "Valve", value: "Commercial POL/22 mm" },
        { label: "Delivery", value: "Scheduled or on-call" },
      ],
      benefits: [
        "Longest runtime of our cylinder range",
        "Fewer changeovers during peak service",
        "Steady, reliable supply for hotels",
        "Priority scheduled delivery available",
      ],
    },
    {
      slug: "bulk-lpg-supply",
      category: "industrial-lpg",
      name: "Bulk LPG Supply",
      tagline: "Tanker-delivered LPG for industrial demand.",
      image: `${PROD}/bulk-lpg-supply.svg`,
      description:
        "For factories and large facilities, we supply LPG in bulk to on-site storage. A scheduled, metered supply removes the handling of individual cylinders and keeps industrial processes running.",
      specs: [
        { label: "Supply mode", value: "Bulk / on-site storage" },
        { label: "Use", value: "Industrial processes" },
        { label: "Metering", value: "Metered supply" },
        { label: "Coverage", value: "Mymensingh division" },
      ],
      benefits: [
        "No individual cylinder handling",
        "Scheduled, metered supply to on-site tanks",
        "Consistent supply for continuous processes",
        "Right-sized to your plant's demand",
      ],
    },
    {
      slug: "reticulated-gas-system",
      category: "industrial-lpg",
      name: "Reticulated Gas System",
      tagline: "Piped LPG to every point of use.",
      image: `${PROD}/reticulated-gas-system.svg`,
      description:
        "A piped (reticulated) LPG system distributes gas from a central bank to multiple burners or machines. We supply and support reticulated setups for apartments, kitchens, and light industry.",
      specs: [
        { label: "Type", value: "Piped / reticulated" },
        { label: "Use", value: "Multi-point supply" },
        { label: "Feed", value: "Central cylinder bank" },
        { label: "Support", value: "Supply & refill" },
      ],
      benefits: [
        "One central supply feeds many points",
        "No cylinders inside living or work areas",
        "Consistent pressure across all outlets",
        "Ongoing refill and support from our team",
      ],
    },
    {
      slug: "autogas-refill",
      category: "autogas",
      name: "Auto LPG Refill",
      tagline: "Cleaner, cheaper fuel for LPG-converted vehicles.",
      image: `${PROD}/autogas-refill.svg`,
      description:
        "Auto LPG (autogas) refilling for cars and CNG/LPG-converted vehicles. A cleaner-burning, more economical fuel that keeps running costs down without sacrificing reliability.",
      specs: [
        { label: "Fuel", value: "Auto LPG (autogas)" },
        { label: "Use", value: "Converted vehicles" },
        { label: "Benefit", value: "Lower running cost" },
        { label: "Coverage", value: "Mymensingh division" },
      ],
      benefits: [
        "Lower fuel cost than petrol",
        "Cleaner-burning than petrol or diesel",
        "Quick, safe refilling",
        "Suitable for LPG-converted vehicles",
      ],
    },
    {
      slug: "lpg-conversion-kit",
      category: "autogas",
      name: "LPG Conversion Kit",
      tagline: "Convert your vehicle to run on LPG.",
      image: `${PROD}/lpg-conversion-kit.svg`,
      description:
        "A complete LPG conversion kit and fitting service for petrol vehicles — start saving on fuel with a cleaner alternative. Professionally installed and tuned for safe, reliable operation.",
      specs: [
        { label: "Type", value: "Vehicle conversion kit" },
        { label: "For", value: "Petrol vehicles" },
        { label: "Service", value: "Supply & fitting" },
        { label: "Outcome", value: "Dual-fuel capable" },
      ],
      benefits: [
        "Switch to cheaper LPG fuel",
        "Professional fitting and tuning",
        "Keeps petrol as a backup (dual-fuel)",
        "Safe, tested installation",
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
      "Mahin Enterprise supplies LPG gas cylinders to homes, businesses, and industries across the Mymensingh division — a subsidiary of MR Group.",
    exploreHeading: "Explore",
    contactHeading: "Contact",
    email: "info@mahinenterprise.com.bd",
    phone: "+880 1700-000000",
    addressHeading: "Head Office",
    address: ["Mahin Enterprise", "C.K. Ghosh Road", "Mymensingh 2200, Bangladesh"],
    followHeading: "Follow",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© 2026 Mahin Enterprise, a subsidiary of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "About Us",
      title: "Your local LPG supplier",
      description:
        "Mahin Enterprise brings safe, full-weight LPG to every home and business in the Mymensingh division — with the reliability that comes from being genuinely local.",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "Our story",
    storyParagraphs: [
      "Mahin Enterprise started with a frustration every family in the region knows: running out of gas mid-meal, chasing an unreliable supplier, and never being sure a cylinder was really full.",
      "As part of MR Group, we set out to fix that for one region and do it properly — a dedicated LPG business serving only the Mymensingh division, so we could promise fast delivery, honest weight, and safe handling on every single cylinder.",
      "Today we deliver to households, restaurants, and factories across Mymensingh, Jamalpur, Netrokona, and Sherpur — and staying local is exactly why we can be fast and dependable.",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "Our mission",
    mission:
      "To be the LPG supplier the Mymensingh division trusts — delivering safe, full-weight gas to every door, on time, every time.",
    visionHeading: "Our vision",
    vision:
      "A division where no family or business is ever left without gas — served by a local supplier that puts safety and reliability first.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Safety", body: "Every cylinder is leak-checked and handled by trained people. LPG safety is never optional." },
      { title: "Honesty", body: "Full weight, fair price, no shortcuts. What you pay for is what you get." },
      { title: "Reliability", body: "On-time delivery you can plan around, with quick reordering and pickup." },
      { title: "Local focus", body: "We serve one division and know it well — that's why we can be fast." },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "Our Products",
      title: "LPG for every home and business",
      description:
        "Four ranges cover household cooking, commercial kitchens, industrial supply, and auto LPG. Choose a range to see the cylinders and services inside.",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "Every cylinder we deliver is weight-verified and seal-checked, and delivered across the Mymensingh division. Pick a category to find the right product for your home or business.",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Inside Mahin Enterprise",
      description: "A look at our cylinders, delivery team, and the homes and businesses we serve across the division.",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "Photos and videos from our depot, delivery fleet, and the customers who rely on us. Switch between photos and videos below.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos yet.",
    noVideos: "No videos yet.",
  },
  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "Order gas or ask a question",
      description:
        "Need a refill, a bulk quote, or a conversion? Our team covers the whole Mymensingh division and is ready to help.",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "Send us a message",
    formIntro: "Our team usually responds within a few hours during business time.",
    officeHeading: "Head Office",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const bn: MahinContent = {
  name: "মাহিন এন্টারপ্রাইজ",
  tagline: "ময়মনসিংহ বিভাগজুড়ে আপনার দরজায় নিরাপদ, সিলড ও সময়মতো এলপিজি গ্যাস সিলিন্ডার সরবরাহ।",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    {
      label: "পণ্যসমূহ",
      href: "/categories",
      children: [
        { label: "গৃহস্থালি এলপিজি", href: "/categories/household-lpg" },
        { label: "বাণিজ্যিক এলপিজি", href: "/categories/commercial-lpg" },
        { label: "শিল্প এলপিজি", href: "/categories/industrial-lpg" },
        { label: "অটো এলপিজি", href: "/categories/autogas" },
      ],
    },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/household.svg`,
        eyebrow: "গৃহস্থালি এলপিজি",
        headingLead: "আপনার",
        headingEmphasis: "দরজায়",
        headingTail: "গ্যাস যখন দরকার",
        body: "ময়মনসিংহ বিভাগজুড়ে বাসাবাড়িতে সিলড, পূর্ণ-ওজনের এলপিজি সিলিন্ডার ডেলিভারি—আজ অর্ডার করুন, আজই রান্না করুন।",
        ctaLabel: "গৃহস্থালি সিলিন্ডার দেখুন",
        ctaHref: "/categories/household-lpg",
      },
      {
        image: `${HERO}/commercial.svg`,
        eyebrow: "বাণিজ্যিক ও শিল্প",
        headingLead: "প্রতিটি বার্নারের জন্য",
        headingEmphasis: "নির্ভরযোগ্য",
        headingTail: "সরবরাহ",
        body: "রেস্তোরাঁর রান্নাঘর থেকে কারখানার লাইন—আমরা ৩৫ কেজি, ৪৫ কেজি ও বাল্ক এলপিজি নিরবচ্ছিন্নভাবে সরবরাহ করি।",
        ctaLabel: "বাণিজ্যিক এলপিজি দেখুন",
        ctaHref: "/categories/commercial-lpg",
      },
      {
        image: `${HERO}/delivery.svg`,
        eyebrow: "ময়মনসিংহ বিভাগ",
        headingLead: "চারটি জেলাতেই",
        headingEmphasis: "সেবা",
        headingTail: "আপনার কাছেই",
        body: "ময়মনসিংহ, জামালপুর, নেত্রকোনা ও শেরপুর—দ্রুত ও নির্ভরযোগ্য ডেলিভারির জন্য গড়া স্থানীয় নেটওয়ার্ক।",
        ctaLabel: "আমাদের সেবা এলাকা দেখুন",
        ctaHref: "/#coverage",
      },
    ],
  },
  why: {
    eyebrow: "কেন মাহিন এন্টারপ্রাইজ",
    headingLead: "নিরাপদ গ্যাস,",
    headingEmphasis: "নির্ভরযোগ্য ডেলিভারি",
    intro:
      "এলপিজি যারা হ্যান্ডেল করে তাদের ওপরই এর মান নির্ভর করে। আমরা প্রতিটি সিলিন্ডারকে নিরাপত্তা-গুরুত্বপূর্ণ পণ্য হিসেবে দেখি—পূর্ণ ওজন থেকে শক্ত সিল পর্যন্ত, আর যে ব্যক্তি এটি আপনার কাছে পৌঁছে দেয় তাকেও।",
    features: [
      {
        icon: "shield",
        title: "সবার আগে নিরাপত্তা",
        body: "প্রতিটি সিলিন্ডার আমাদের কাছ থেকে যাওয়ার আগে লিক-চেক ও সিল-যাচাই করা হয়, আর আমাদের টিম নিরাপদ হ্যান্ডলিং ও সংযোগে প্রশিক্ষিত।",
      },
      {
        icon: "gauge",
        title: "প্রতিবার পূর্ণ ওজন",
        body: "কম ভরা সিলিন্ডার নয়। ডিসপ্যাচের আগে ক্যালিব্রেটেড স্কেলে যাচাই করা হয়—আপনি যা দাম দেন, তাই পান।",
      },
      {
        icon: "truck",
        title: "দ্রুত স্থানীয় ডেলিভারি",
        body: "ময়মনসিংহ-ভিত্তিক বহর মানে একইদিন বা পরদিন দরজায় ডেলিভারি, সাথে খালি সিলিন্ডার দ্রুত সংগ্রহ।",
      },
      {
        icon: "phone",
        title: "সহজ রিঅর্ডার",
        body: "এক কল বা মেসেজেই আপনার রিফিল পথে—নিয়মিত বাণিজ্যিক গ্রাহকদের জন্য নির্ধারিত সময়সূচিসহ।",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "আমরা যা সরবরাহ করি",
    heading: "প্রতিটি ব্যবহারের জন্য সঠিক সিলিন্ডার",
    subtitle:
      "একটি গৃহস্থালি বার্নার থেকে শিল্প লাইন পর্যন্ত, মাহিন এন্টারপ্রাইজ এলপিজি সিলিন্ডার ও বাল্ক সরবরাহের সম্পূর্ণ পরিসর রাখে।",
    exploreLabel: "পণ্য দেখুন",
  },
  featured: {
    eyebrow: "জনপ্রিয় পণ্য",
    heading: "যেসব সিলিন্ডারে গ্রাহকরা নির্ভর করেন",
    subtitle: "প্রতিটি পরিসর থেকে একটি প্রতিনিধিত্বমূলক পছন্দ—যেসব সাইজ আমরা বিভাগজুড়ে সবচেয়ে বেশি ডেলিভারি করি।",
    viewAllLabel: "সব পণ্য দেখুন",
  },
  coverage: {
    eyebrow: "সেবা এলাকা",
    heading: "গর্বের সাথে ময়মনসিংহ বিভাগে সেবা",
    body: "মাহিন এন্টারপ্রাইজ একটি স্থানীয় এলপিজি সরবরাহকারী—আমরা শুধু ময়মনসিংহ বিভাগেই ডেলিভারি করি, আর এই মনোযোগই আমাদের শক্তি। ছোট সেবা এলাকা মানে ছোট রুট, দ্রুত ডেলিভারি এবং এমন একটি টিম যারা আমাদের সেবা দেওয়া প্রতিটি এলাকা চেনে।",
    image: `${IMG}/coverage.svg`,
    districts: ["ময়মনসিংহ", "জামালপুর", "নেত্রকোনা", "শেরপুর"],
    note: "এই জেলাগুলোর বাইরে? আমরা একটি বিশ্বস্ত সরবরাহকারীর সন্ধান দিতে পারি—শুধু জিজ্ঞাসা করুন।",
  },
  stats: {
    eyebrow: "সংখ্যায়",
    heading: "বিভাগজুড়ে একটি আস্থাভাজন নাম",
    items: [
      { value: "৪", label: "জেলায় সেবা" },
      { value: "১০ হাজার+", label: "সিলিন্ডার ডেলিভারি" },
      { value: "২৪ ঘণ্টা", label: "সাধারণ ডেলিভারি সময়" },
      { value: "১০০%", label: "ওজন ও সিল যাচাই" },
    ],
  },
  process: {
    eyebrow: "কীভাবে কাজ করে",
    heading: "আপনার অর্ডার থেকে আপনার রান্নাঘর",
    body: "মাহিন এন্টারপ্রাইজ থেকে রিফিল নেওয়া সহজ—আর প্রতিটি ধাপ নিরাপত্তা ও গতির কথা মাথায় রেখে গড়া।",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "অর্ডার দিন",
        body: "কল, মেসেজ বা স্থানীয় এজেন্টকে বলুন—সিলিন্ডারের সাইজ ও আপনার ঠিকানা জানান।",
      },
      {
        title: "যাচাই ও লোড",
        body: "আপনার সিলিন্ডার ওজন-যাচাই ও লিক-চেক করা হয়, তারপর আমাদের ডেলিভারি গাড়িতে লোড করা হয়।",
      },
      {
        title: "দরজায় ডেলিভারি",
        body: "আমাদের প্রশিক্ষিত টিম আপনার দরজায় পৌঁছে দেয়, প্রয়োজনে নিরাপদে সিলিন্ডার সংযোগও করে দেয়।",
      },
      {
        title: "খালি সংগ্রহ",
        body: "পরবর্তী ভিজিটে আমরা আপনার খালি সিলিন্ডার সংগ্রহ করি—কোনো ঝামেলা নেই, আপনার বাড়তি ট্রিপও নেই।",
      },
    ],
  },
  testimonials: {
    heading: "আমাদের গ্রাহকরা যা বলেন",
    subtitle: "ময়মনসিংহ বিভাগজুড়ে পরিবার ও ব্যবসা যারা মাহিন এন্টারপ্রাইজে ভরসা করেন।",
    items: [
      {
        quote:
          "কল করলেই একইদিনে ডেলিভারি দেয়, আর সিলিন্ডার সবসময় পূর্ণ ওজনের। রান্নার মাঝে গ্যাস ফুরানোর চিন্তা আর নেই।",
        name: "নাসিমা আক্তার",
        role: "গৃহস্থালি গ্রাহক, ময়মনসিংহ",
      },
      {
        quote:
          "আমাদের রেস্তোরাঁর জন্য নিরবচ্ছিন্ন গ্যাসই সব। মাহিন আমাদের সময়সূচিতে রাখে, কখনো ঘাটতি হয়নি।",
        name: "জাহাঙ্গীর আলম",
        role: "রেস্তোরাঁ মালিক, জামালপুর",
      },
      {
        quote:
          "পেশাদার হ্যান্ডলিং ও সৎ ওজন। তাদের টিম স্পষ্টতই এলপিজি নিরাপত্তা বোঝে, যা আমাদের কাছে খুব গুরুত্বপূর্ণ।",
        name: "রেজাউল করিম",
        role: "কারখানা ব্যবস্থাপক, শেরপুর",
      },
    ],
  },
  cta: {
    heading: "আজই সিলিন্ডার ডেলিভারি দরকার?",
    body: "ময়মনসিংহ বিভাগে আপনার অবস্থান ও প্রয়োজনীয় সিলিন্ডারের সাইজ জানান—আমাদের টিম একটি পূর্ণ, সিলড সিলিন্ডার আপনার পথে পাঠিয়ে দেবে।",
    button: "সিলিন্ডার অর্ডার করুন",
  },
  categories: [
    {
      slug: "household-lpg",
      name: "গৃহস্থালি এলপিজি",
      icon: "home",
      tagline: "বাসা ও পরিবারের জন্য",
      description:
        "প্রতিদিনের ঘরোয়া রান্নার জন্য ১২ কেজি ও ২৫ কেজি সিলিন্ডার ও আনুষঙ্গিক—আপনার দরজায় ডেলিভারি ও সংযোগসহ।",
      image: `${CAT}/household-lpg.svg`,
    },
    {
      slug: "commercial-lpg",
      name: "বাণিজ্যিক এলপিজি",
      icon: "flame",
      tagline: "রেস্তোরাঁ ও দোকান",
      description:
        "রেস্তোরাঁ, হোটেল ও ব্যস্ত রান্নাঘরের জন্য ৩৫ কেজি ও ৪৫ কেজি সিলিন্ডার যাদের নির্ভরযোগ্য, উচ্চ-পরিমাণ গ্যাস দরকার।",
      image: `${CAT}/commercial-lpg.svg`,
    },
    {
      slug: "industrial-lpg",
      name: "শিল্প এলপিজি",
      icon: "factory",
      tagline: "কারখানা ও প্ল্যান্ট",
      description:
        "বিভাগজুড়ে শিল্প লাইন, বয়লার ও প্রক্রিয়ার জন্য বাল্ক এলপিজি ও রেটিকুলেটেড (পাইপযুক্ত) গ্যাস ব্যবস্থা।",
      image: `${CAT}/industrial-lpg.svg`,
    },
    {
      slug: "autogas",
      name: "অটো এলপিজি",
      icon: "car",
      tagline: "যানবাহন ও রূপান্তর",
      description:
        "পরিচ্ছন্ন, সাশ্রয়ী গ্যাস জ্বালানিতে চলা যানবাহনের জন্য অটো এলপিজি রিফিল ও কনভার্সন কিট।",
      image: `${CAT}/autogas.svg`,
    },
  ],
  products: [
    {
      slug: "lpg-cylinder-12kg",
      category: "household-lpg",
      name: "১২ কেজি এলপিজি সিলিন্ডার",
      tagline: "প্রতিদিনের রান্নার জন্য স্ট্যান্ডার্ড গৃহস্থালি সিলিন্ডার।",
      image: `${PROD}/lpg-cylinder-12kg.svg`,
      description:
        "পারিবারিক রান্নাঘরের সবচেয়ে জনপ্রিয় সাইজ। একটি পূর্ণ-ওজনের ১২ কেজি সিলিন্ডার যা স্ট্যান্ডার্ড সিঙ্গেল ও ডাবল-বার্নার চুলায় ফিট করে, সিলড ও সংযোগের জন্য প্রস্তুত অবস্থায় ডেলিভারি। সাধারণ পরিবারের দৈনন্দিন রান্নার জন্য আদর্শ।",
      specs: [
        { label: "নেট গ্যাস ওজন", value: "১২ কেজি" },
        { label: "ব্যবহার", value: "গৃহস্থালি রান্না" },
        { label: "ভালভ", value: "স্ট্যান্ডার্ড ২২ মিমি" },
        { label: "ডেলিভারি", value: "দরজায়, বিভাগজুড়ে" },
      ],
      benefits: [
        "পূর্ণ ১২ কেজি নেট ওজন, ডিসপ্যাচের আগে যাচাই",
        "স্ট্যান্ডার্ড চুলা ও রেগুলেটরে ফিট করে",
        "সিলড ও নিরাপত্তা-যাচাই করে ডেলিভারি",
        "খালি সিলিন্ডার সংগ্রহসহ সহজ রিফিল",
      ],
    },
    {
      slug: "lpg-cylinder-25kg",
      category: "household-lpg",
      name: "২৫ কেজি এলপিজি সিলিন্ডার",
      tagline: "বড় পরিবারের জন্য কম রিফিল।",
      image: `${PROD}/lpg-cylinder-25kg.svg`,
      description:
        "বড় পরিবার বা বেশি রান্না হয় এমন বাসার জন্য একটি বড় সিলিন্ডার—একই বিশ্বস্ত মান, কম রিফিলে। গৃহস্থালি ও ছোট বাণিজ্যিক ব্যবহারের মাঝামাঝি ভালো বিকল্প।",
      specs: [
        { label: "নেট গ্যাস ওজন", value: "২৫ কেজি" },
        { label: "ব্যবহার", value: "বড় পরিবার" },
        { label: "ভালভ", value: "স্ট্যান্ডার্ড ২২ মিমি" },
        { label: "ডেলিভারি", value: "দরজায়, বিভাগজুড়ে" },
      ],
      benefits: [
        "দীর্ঘ রানটাইম মানে কম রিফিল",
        "পূর্ণ নেট ওজন, ক্যালিব্রেটেড স্কেলে যাচাই",
        "ডেলিভারির আগে সিলড ও লিক-টেস্টেড",
        "বড় পরিবার বা ছোট খাবারের দোকানের জন্য আদর্শ",
      ],
    },
    {
      slug: "double-burner-stove",
      category: "household-lpg",
      name: "ডাবল বার্নার গ্যাসের চুলা",
      tagline: "আপনার সিলিন্ডারের সাথে নির্ভরযোগ্য, সহজে-পরিষ্কার চুলা।",
      image: `${PROD}/double-burner-stove.svg`,
      description:
        "প্রতিদিনের ঘরোয়া রান্নার জন্য মজবুত স্টেইনলেস-স্টিল ডাবল-বার্নার চুলা। অটো-ইগনিশন ও সমন্বয়যোগ্য শিখা নিয়ন্ত্রণ এটিকে সহজ করে তোলে, আর এটি আমাদের গৃহস্থালি সিলিন্ডারের সাথে চমৎকারভাবে মানানসই।",
      specs: [
        { label: "বার্নার", value: "২ (অটো-ইগনিশন)" },
        { label: "বডি", value: "স্টেইনলেস স্টিল" },
        { label: "ব্যবহার", value: "গৃহস্থালি" },
        { label: "সহ", value: "রেগুলেটর-রেডি ফিটিং" },
      ],
      benefits: [
        "অটো-ইগনিশন—দেশলাই লাগে না",
        "নির্ভুল রান্নার জন্য সমন্বয়যোগ্য শিখা",
        "সহজে-পরিষ্কার স্টেইনলেস স্টিল টপ",
        "আমাদের ১২ কেজি ও ২৫ কেজি সিলিন্ডারের সাথে মানানসই",
      ],
    },
    {
      slug: "lpg-cylinder-35kg",
      category: "commercial-lpg",
      name: "৩৫ কেজি এলপিজি সিলিন্ডার",
      tagline: "ব্যস্ত বাণিজ্যিক রান্নাঘরের জন্য স্থিতিশীল গ্যাস।",
      image: `${PROD}/lpg-cylinder-35kg.svg`,
      description:
        "রেস্তোরাঁ, চায়ের দোকান ও ক্যাটারিং রান্নাঘরের জন্য তৈরি উচ্চ-ধারণক্ষমতার সিলিন্ডার। দীর্ঘ রানটাইম ও নির্ভরযোগ্য চাপ পুরো সার্ভিসজুড়ে আপনার বার্নার চালু রাখে।",
      specs: [
        { label: "নেট গ্যাস ওজন", value: "৩৫ কেজি" },
        { label: "ব্যবহার", value: "বাণিজ্যিক রান্নাঘর" },
        { label: "ভালভ", value: "কমার্শিয়াল POL/২২ মিমি" },
        { label: "ডেলিভারি", value: "নির্ধারিত বা অন-কল" },
      ],
      benefits: [
        "নিরবচ্ছিন্ন বাণিজ্যিক ব্যবহারের জন্য উচ্চ ধারণক্ষমতা",
        "মাল্টি-বার্নার সেটআপের জন্য নির্ভরযোগ্য চাপ",
        "নির্ধারিত ডেলিভারি আপনাকে স্টকে রাখে",
        "প্রতিটি সিলিন্ডারের ওজন ও সিল যাচাই",
      ],
    },
    {
      slug: "lpg-cylinder-45kg",
      category: "commercial-lpg",
      name: "৪৫ কেজি এলপিজি সিলিন্ডার",
      tagline: "উচ্চ-চাহিদার রান্নাঘরের জন্য সর্বোচ্চ রানটাইম।",
      image: `${PROD}/lpg-cylinder-45kg.svg`,
      description:
        "আমাদের সবচেয়ে বড় একক সিলিন্ডার, হোটেল ও উচ্চ-পরিমাণ রান্নাঘরের জন্য যারা দ্রুত গ্যাস ব্যবহার করে। কম পরিবর্তন ও স্থিতিশীল সরবরাহ পিক আওয়ারে ডাউনটাইম কমায়।",
      specs: [
        { label: "নেট গ্যাস ওজন", value: "৪৫ কেজি" },
        { label: "ব্যবহার", value: "উচ্চ-চাহিদার রান্নাঘর" },
        { label: "ভালভ", value: "কমার্শিয়াল POL/২২ মিমি" },
        { label: "ডেলিভারি", value: "নির্ধারিত বা অন-কল" },
      ],
      benefits: [
        "আমাদের পরিসরে দীর্ঘতম রানটাইম",
        "পিক সার্ভিসে কম পরিবর্তন",
        "হোটেলের জন্য স্থিতিশীল, নির্ভরযোগ্য সরবরাহ",
        "অগ্রাধিকার নির্ধারিত ডেলিভারি উপলব্ধ",
      ],
    },
    {
      slug: "bulk-lpg-supply",
      category: "industrial-lpg",
      name: "বাল্ক এলপিজি সরবরাহ",
      tagline: "শিল্প চাহিদার জন্য ট্যাংকার-ডেলিভারড এলপিজি।",
      image: `${PROD}/bulk-lpg-supply.svg`,
      description:
        "কারখানা ও বড় স্থাপনার জন্য আমরা অন-সাইট স্টোরেজে বাল্ক এলপিজি সরবরাহ করি। নির্ধারিত, মিটারযুক্ত সরবরাহ পৃথক সিলিন্ডার হ্যান্ডলিং দূর করে এবং শিল্প প্রক্রিয়া চালু রাখে।",
      specs: [
        { label: "সরবরাহ ধরন", value: "বাল্ক / অন-সাইট স্টোরেজ" },
        { label: "ব্যবহার", value: "শিল্প প্রক্রিয়া" },
        { label: "মিটারিং", value: "মিটারযুক্ত সরবরাহ" },
        { label: "কভারেজ", value: "ময়মনসিংহ বিভাগ" },
      ],
      benefits: [
        "পৃথক সিলিন্ডার হ্যান্ডলিং নেই",
        "অন-সাইট ট্যাংকে নির্ধারিত, মিটারযুক্ত সরবরাহ",
        "নিরবচ্ছিন্ন প্রক্রিয়ার জন্য ধারাবাহিক সরবরাহ",
        "আপনার প্ল্যান্টের চাহিদা অনুযায়ী সঠিক আকার",
      ],
    },
    {
      slug: "reticulated-gas-system",
      category: "industrial-lpg",
      name: "রেটিকুলেটেড গ্যাস ব্যবস্থা",
      tagline: "প্রতিটি ব্যবহারের বিন্দুতে পাইপযুক্ত এলপিজি।",
      image: `${PROD}/reticulated-gas-system.svg`,
      description:
        "একটি পাইপযুক্ত (রেটিকুলেটেড) এলপিজি ব্যবস্থা কেন্দ্রীয় ব্যাংক থেকে একাধিক বার্নার বা মেশিনে গ্যাস বিতরণ করে। আমরা অ্যাপার্টমেন্ট, রান্নাঘর ও হালকা শিল্পের জন্য রেটিকুলেটেড সেটআপ সরবরাহ ও সহায়তা করি।",
      specs: [
        { label: "ধরন", value: "পাইপযুক্ত / রেটিকুলেটেড" },
        { label: "ব্যবহার", value: "মাল্টি-পয়েন্ট সরবরাহ" },
        { label: "ফিড", value: "কেন্দ্রীয় সিলিন্ডার ব্যাংক" },
        { label: "সহায়তা", value: "সরবরাহ ও রিফিল" },
      ],
      benefits: [
        "একটি কেন্দ্রীয় সরবরাহ অনেক বিন্দুতে যায়",
        "বসবাস বা কাজের এলাকায় সিলিন্ডার নেই",
        "সব আউটলেটে ধারাবাহিক চাপ",
        "আমাদের টিম থেকে চলমান রিফিল ও সহায়তা",
      ],
    },
    {
      slug: "autogas-refill",
      category: "autogas",
      name: "অটো এলপিজি রিফিল",
      tagline: "এলপিজি-রূপান্তরিত যানবাহনের জন্য পরিচ্ছন্ন, সাশ্রয়ী জ্বালানি।",
      image: `${PROD}/autogas-refill.svg`,
      description:
        "গাড়ি ও সিএনজি/এলপিজি-রূপান্তরিত যানবাহনের জন্য অটো এলপিজি (অটোগ্যাস) রিফিলিং। একটি পরিচ্ছন্ন-দহন, বেশি সাশ্রয়ী জ্বালানি যা নির্ভরযোগ্যতা না হারিয়ে চালানোর খরচ কমায়।",
      specs: [
        { label: "জ্বালানি", value: "অটো এলপিজি (অটোগ্যাস)" },
        { label: "ব্যবহার", value: "রূপান্তরিত যানবাহন" },
        { label: "সুবিধা", value: "কম চালানোর খরচ" },
        { label: "কভারেজ", value: "ময়মনসিংহ বিভাগ" },
      ],
      benefits: [
        "পেট্রলের চেয়ে কম জ্বালানি খরচ",
        "পেট্রল বা ডিজেলের চেয়ে পরিচ্ছন্ন-দহন",
        "দ্রুত, নিরাপদ রিফিলিং",
        "এলপিজি-রূপান্তরিত যানবাহনের উপযোগী",
      ],
    },
    {
      slug: "lpg-conversion-kit",
      category: "autogas",
      name: "এলপিজি কনভার্সন কিট",
      tagline: "আপনার গাড়ি এলপিজিতে চালাতে রূপান্তর করুন।",
      image: `${PROD}/lpg-conversion-kit.svg`,
      description:
        "পেট্রল যানবাহনের জন্য সম্পূর্ণ এলপিজি কনভার্সন কিট ও ফিটিং সেবা—একটি পরিচ্ছন্ন বিকল্পে জ্বালানি সাশ্রয় শুরু করুন। নিরাপদ, নির্ভরযোগ্য পরিচালনার জন্য পেশাদারভাবে ইনস্টল ও টিউন করা।",
      specs: [
        { label: "ধরন", value: "যানবাহন কনভার্সন কিট" },
        { label: "জন্য", value: "পেট্রল যানবাহন" },
        { label: "সেবা", value: "সরবরাহ ও ফিটিং" },
        { label: "ফলাফল", value: "ডুয়েল-ফুয়েল সক্ষম" },
      ],
      benefits: [
        "সাশ্রয়ী এলপিজি জ্বালানিতে যান",
        "পেশাদার ফিটিং ও টিউনিং",
        "পেট্রল ব্যাকআপ হিসেবে থাকে (ডুয়েল-ফুয়েল)",
        "নিরাপদ, পরীক্ষিত ইনস্টলেশন",
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
      "মাহিন এন্টারপ্রাইজ ময়মনসিংহ বিভাগজুড়ে বাসাবাড়ি, ব্যবসা ও শিল্পপ্রতিষ্ঠানে এলপিজি গ্যাস সিলিন্ডার সরবরাহ করে—এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান।",
    exploreHeading: "এক্সপ্লোর",
    contactHeading: "যোগাযোগ",
    email: "info@mahinenterprise.com.bd",
    phone: "+৮৮০ ১৭০০-০০০০০০",
    addressHeading: "প্রধান কার্যালয়",
    address: ["মাহিন এন্টারপ্রাইজ", "সি.কে. ঘোষ রোড", "ময়মনসিংহ ২২০০, বাংলাদেশ"],
    followHeading: "ফলো করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© ২০২৬ মাহিন এন্টারপ্রাইজ, এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের সম্পর্কে",
      title: "আপনার স্থানীয় এলপিজি সরবরাহকারী",
      description:
        "মাহিন এন্টারপ্রাইজ ময়মনসিংহ বিভাগের প্রতিটি বাসা ও ব্যবসায় নিরাপদ, পূর্ণ-ওজনের এলপিজি পৌঁছে দেয়—সত্যিকারের স্থানীয় হওয়ার নির্ভরযোগ্যতা নিয়ে।",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "আমাদের গল্প",
    storyParagraphs: [
      "মাহিন এন্টারপ্রাইজের শুরু এমন এক হতাশা থেকে যা এ অঞ্চলের প্রতিটি পরিবার জানে: রান্নার মাঝে গ্যাস ফুরিয়ে যাওয়া, অনির্ভরযোগ্য সরবরাহকারীর পেছনে ছোটা, আর কখনো নিশ্চিত না হওয়া যে সিলিন্ডারটি আসলেই পূর্ণ কিনা।",
      "এমআর গ্রুপের অংশ হিসেবে আমরা একটি অঞ্চলের জন্য এটি ঠিক করার এবং সঠিকভাবে করার লক্ষ্য নিই—শুধু ময়মনসিংহ বিভাগে সেবা দেওয়া একটি নিবেদিত এলপিজি ব্যবসা, যাতে আমরা প্রতিটি সিলিন্ডারে দ্রুত ডেলিভারি, সৎ ওজন ও নিরাপদ হ্যান্ডলিংয়ের প্রতিশ্রুতি দিতে পারি।",
      "আজ আমরা ময়মনসিংহ, জামালপুর, নেত্রকোনা ও শেরপুরজুড়ে বাসাবাড়ি, রেস্তোরাঁ ও কারখানায় ডেলিভারি করি—আর স্থানীয় থাকাই ঠিক সেই কারণ যার জন্য আমরা দ্রুত ও নির্ভরযোগ্য হতে পারি।",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "ময়মনসিংহ বিভাগ যে এলপিজি সরবরাহকারীতে ভরসা করে তা হওয়া—প্রতিটি দরজায় নিরাপদ, পূর্ণ-ওজনের গ্যাস, সময়মতো, প্রতিবার।",
    visionHeading: "আমাদের ভিশন",
    vision:
      "এমন একটি বিভাগ যেখানে কোনো পরিবার বা ব্যবসা কখনো গ্যাস ছাড়া থাকে না—নিরাপত্তা ও নির্ভরযোগ্যতাকে সবার আগে রাখা একটি স্থানীয় সরবরাহকারীর সেবায়।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "নিরাপত্তা", body: "প্রতিটি সিলিন্ডার লিক-চেক করা ও প্রশিক্ষিত মানুষ দ্বারা হ্যান্ডল করা। এলপিজি নিরাপত্তা কখনো ঐচ্ছিক নয়।" },
      { title: "সততা", body: "পূর্ণ ওজন, ন্যায্য দাম, কোনো শর্টকাট নেই। আপনি যা দাম দেন, তাই পান।" },
      { title: "নির্ভরযোগ্যতা", body: "সময়মতো ডেলিভারি যা নিয়ে পরিকল্পনা করা যায়, সাথে দ্রুত রিঅর্ডার ও সংগ্রহ।" },
      { title: "স্থানীয় মনোযোগ", body: "আমরা একটি বিভাগে সেবা দিই এবং তা ভালো চিনি—তাই আমরা দ্রুত হতে পারি।" },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "আমাদের পণ্য",
      title: "প্রতিটি বাসা ও ব্যবসার জন্য এলপিজি",
      description:
        "চারটি পরিসর গৃহস্থালি রান্না, বাণিজ্যিক রান্নাঘর, শিল্প সরবরাহ ও অটো এলপিজি কভার করে। ভেতরের সিলিন্ডার ও সেবা দেখতে একটি পরিসর বেছে নিন।",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "আমরা যে প্রতিটি সিলিন্ডার ডেলিভারি করি তা ওজন-যাচাই ও সিল-চেক করা, এবং ময়মনসিংহ বিভাগজুড়ে ডেলিভারি করা হয়। আপনার বাসা বা ব্যবসার সঠিক পণ্য খুঁজতে একটি ক্যাটাগরি বেছে নিন।",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "মাহিন এন্টারপ্রাইজের ভেতরে",
      description: "আমাদের সিলিন্ডার, ডেলিভারি টিম এবং বিভাগজুড়ে আমরা যেসব বাসা ও ব্যবসায় সেবা দিই তার এক ঝলক।",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "আমাদের ডিপো, ডেলিভারি বহর এবং যেসব গ্রাহক আমাদের ওপর নির্ভর করেন তাদের ছবি ও ভিডিও। নিচে ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ",
      title: "গ্যাস অর্ডার করুন বা প্রশ্ন করুন",
      description:
        "রিফিল, বাল্ক কোটেশন বা রূপান্তর দরকার? আমাদের টিম পুরো ময়মনসিংহ বিভাগ কভার করে এবং সাহায্যে প্রস্তুত।",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "আমাদের টিম সাধারণত কর্মঘণ্টায় কয়েক ঘণ্টার মধ্যে সাড়া দেয়।",
    officeHeading: "প্রধান কার্যালয়",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
  },
};

export const mahinContent: Record<AppLocale, MahinContent> = { en, bn };
