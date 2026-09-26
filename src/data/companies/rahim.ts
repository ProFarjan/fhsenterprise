import type { AppLocale } from "@/i18n/routing";
import type { RahimContent } from "@/types/rahim";

const IMG = "/images/companies/rahim";
const HERO = `${IMG}/hero`;
const CAT = `${IMG}/categories`;
const PROD = `${IMG}/products`;

const en: RahimContent = {
  name: "Rahim Enterprise",
  tagline: "Refrigeration, industrial, and agricultural ammonia — supplied safely and pure, nationwide across Bangladesh.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/categories",
      children: [
        { label: "Refrigeration Ammonia", href: "/categories/refrigeration" },
        { label: "Industrial Ammonia", href: "/categories/industrial" },
        { label: "Water Treatment Ammonia", href: "/categories/water-treatment" },
        { label: "Agricultural Ammonia", href: "/categories/agricultural" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/refrigeration.svg`,
        eyebrow: "Refrigeration Ammonia",
        headingLead: "Keep the",
        headingEmphasis: "cold chain",
        headingTail: "running",
        body: "Refrigerant-grade ammonia (R-717) and cold-store charging for the ice plants, fish, and food cold storages that keep Bangladesh supplied.",
        ctaLabel: "Explore refrigeration ammonia",
        ctaHref: "/categories/refrigeration",
      },
      {
        image: `${HERO}/industrial.svg`,
        eyebrow: "Industrial Ammonia",
        headingLead: "Purity your",
        headingEmphasis: "process",
        headingTail: "can rely on",
        body: "Anhydrous and cylinder ammonia for chemical processing, metal treatment, and manufacturing — delivered to a consistent specification.",
        ctaLabel: "Explore industrial ammonia",
        ctaHref: "/categories/industrial",
      },
      {
        image: `${HERO}/nationwide.svg`,
        eyebrow: "Nationwide Supply",
        headingLead: "Delivered",
        headingEmphasis: "safely",
        headingTail: "across Bangladesh",
        body: "From Chattogram's cold stores to northern factories, a trained fleet and strict safety protocols put ammonia where it's needed.",
        ctaLabel: "How we deliver",
        ctaHref: "/#process",
      },
    ],
  },
  why: {
    eyebrow: "Why Rahim Enterprise",
    headingLead: "Handled with",
    headingEmphasis: "expertise",
    intro:
      "Ammonia is a demanding product — toxic, pressurised, and unforgiving of shortcuts. We built Rahim Enterprise around the training, testing, and logistics that make ammonia supply safe and dependable.",
    features: [
      {
        icon: "shield",
        title: "Safety-Certified Handling",
        body: "Trained handlers, proper PPE, and strict transfer protocols on every delivery — because ammonia leaves no room for error.",
      },
      {
        icon: "flask",
        title: "Verified Purity",
        body: "Every batch is tested to specification, so refrigeration and process customers get consistent, reliable quality.",
      },
      {
        icon: "truck",
        title: "Nationwide Logistics",
        body: "A dedicated tanker and cylinder fleet reaches cold stores, plants, and farms in every division of Bangladesh.",
      },
      {
        icon: "gauge",
        title: "Reliable Supply",
        body: "Scheduled deliveries and standing contracts keep your cold chain and processes running without interruption.",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "What We Supply",
    heading: "Ammonia for every application",
    subtitle:
      "From the R-717 that runs an ice plant to the aqua ammonia that treats effluent, Rahim Enterprise covers the full range of ammonia grades and services.",
    exploreLabel: "View products",
  },
  featured: {
    eyebrow: "Key Products",
    heading: "Grades our customers depend on",
    subtitle: "A representative product from each range — the ammonia grades behind the Rahim Enterprise name.",
    viewAllLabel: "View all products",
  },
  stats: {
    eyebrow: "By the numbers",
    heading: "Trusted with a demanding product",
    items: [
      { value: "64", label: "Districts reached" },
      { value: "99.8%", label: "Typical purity" },
      { value: "100%", label: "Safety-protocol deliveries" },
      { value: "24/7", label: "Supply coordination" },
    ],
  },
  process: {
    eyebrow: "How we deliver",
    heading: "Safe supply, every step controlled",
    body: "Ammonia supply is a chain of controlled steps — and a single weak link is unacceptable. Here is how Rahim Enterprise keeps every delivery safe and to spec.",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "Source & test",
        body: "Ammonia is sourced and lab-tested to the grade and purity your application requires.",
      },
      {
        title: "Safe transfer & fill",
        body: "Cylinders and tankers are filled under controlled conditions by trained, certified handlers.",
      },
      {
        title: "Compliant transport",
        body: "Hazard-compliant vehicles and documentation move product safely across the country.",
      },
      {
        title: "Supervised delivery",
        body: "On-site transfer is supervised to protocol, with support for connection and safe handling.",
      },
    ],
  },
  testimonials: {
    heading: "What our customers say",
    subtitle: "Cold storages, factories, and plants across Bangladesh that rely on Rahim Enterprise.",
    items: [
      {
        quote:
          "Their R-717 quality is consistent and the deliveries are always on schedule. For a cold store, that reliability is everything.",
        name: "Abdur Rahman",
        role: "Cold Storage Owner, Chattogram",
      },
      {
        quote:
          "We need ammonia to a tight specification, and Rahim delivers it batch after batch. Their safety handling is genuinely professional.",
        name: "Tanvir Hasan",
        role: "Plant Engineer, Narayanganj",
      },
      {
        quote:
          "Dependable nationwide supply and a team that clearly understands ammonia safety. That's why we've stayed with them.",
        name: "Mizanur Rahman",
        role: "Operations Manager, Bogura",
      },
    ],
  },
  cta: {
    heading: "Need ammonia supply you can trust?",
    body: "Tell us your grade, volume, and location anywhere in Bangladesh, and our team will arrange safe, tested ammonia supply on a schedule that fits your operation.",
    button: "Request a supply quote",
  },
  categories: [
    {
      slug: "refrigeration",
      name: "Refrigeration Ammonia",
      icon: "snowflake",
      tagline: "Cold stores · Ice plants",
      description:
        "Refrigerant-grade ammonia (R-717) and cold-store charging for industrial refrigeration — high purity for efficient, reliable cooling.",
      image: `${CAT}/refrigeration.svg`,
    },
    {
      slug: "industrial",
      name: "Industrial Ammonia",
      icon: "factory",
      tagline: "Process · Manufacturing",
      description:
        "Anhydrous and cylinder ammonia for chemical processing, metal treatment, and manufacturing — delivered to a consistent specification.",
      image: `${CAT}/industrial.svg`,
    },
    {
      slug: "water-treatment",
      name: "Water Treatment Ammonia",
      icon: "droplet",
      tagline: "Effluent · Utilities",
      description:
        "Aqueous (liquor) ammonia for water and effluent treatment, pH control, and utility applications across industry.",
      image: `${CAT}/water-treatment.svg`,
    },
    {
      slug: "agricultural",
      name: "Agricultural Ammonia",
      icon: "leaf",
      tagline: "Fertilizer · Agriculture",
      description:
        "Fertilizer-grade ammonia as a nitrogen feedstock for agricultural and fertilizer applications, supplied in bulk.",
      image: `${CAT}/agricultural.svg`,
    },
  ],
  products: [
    {
      slug: "refrigerant-grade-r717",
      category: "refrigeration",
      name: "Refrigerant Grade Ammonia (R-717)",
      tagline: "High-purity ammonia for industrial refrigeration.",
      image: `${PROD}/refrigerant-grade-r717.svg`,
      description:
        "High-purity anhydrous ammonia (R-717) for industrial refrigeration systems — the efficient, proven refrigerant behind ice plants and cold storages. Low moisture and oil content protect compressors and keep cooling efficient.",
      specs: [
        { label: "Grade", value: "R-717 refrigerant" },
        { label: "Purity", value: "≥ 99.8%" },
        { label: "Type", value: "Anhydrous" },
        { label: "Supply", value: "Cylinder & bulk" },
      ],
      benefits: [
        "High purity for efficient refrigeration",
        "Low moisture protects compressors",
        "Excellent thermodynamic efficiency",
        "Supplied to cold stores and ice plants nationwide",
      ],
    },
    {
      slug: "coldstore-charging",
      category: "refrigeration",
      name: "Cold Storage Charging Service",
      tagline: "On-site ammonia charging for refrigeration systems.",
      image: `${PROD}/coldstore-charging.svg`,
      description:
        "A supervised on-site service to charge and top up ammonia in industrial refrigeration systems. Our trained team handles the transfer safely, so your cold store is back to temperature with minimal downtime.",
      specs: [
        { label: "Service", value: "On-site charging" },
        { label: "For", value: "Refrigeration systems" },
        { label: "Handling", value: "Trained, supervised" },
        { label: "Coverage", value: "Nationwide" },
      ],
      benefits: [
        "Supervised, safe on-site transfer",
        "Minimises cold-store downtime",
        "Handled by certified technicians",
        "Available across the country",
      ],
    },
    {
      slug: "anhydrous-ammonia-bulk",
      category: "industrial",
      name: "Anhydrous Ammonia (Bulk)",
      tagline: "Tanker-delivered ammonia for industrial demand.",
      image: `${PROD}/anhydrous-ammonia-bulk.svg`,
      description:
        "Bulk anhydrous ammonia delivered by tanker to on-site storage for factories and processing plants. A consistent, tested specification and scheduled supply keep industrial processes running without interruption.",
      specs: [
        { label: "Type", value: "Anhydrous (NH₃)" },
        { label: "Purity", value: "≥ 99.5%" },
        { label: "Supply mode", value: "Bulk tanker" },
        { label: "Use", value: "Industrial process" },
      ],
      benefits: [
        "Consistent, tested specification",
        "Scheduled bulk supply to on-site tanks",
        "No cylinder handling for high volumes",
        "Right-sized to your plant's demand",
      ],
    },
    {
      slug: "ammonia-gas-cylinder",
      category: "industrial",
      name: "Ammonia Gas Cylinder",
      tagline: "Cylinder ammonia for controlled, smaller-volume use.",
      image: `${PROD}/ammonia-gas-cylinder.svg`,
      description:
        "Pressurised ammonia in steel cylinders for laboratories, metal treatment, and smaller-volume industrial use. Sealed, valve-checked, and delivered with safety documentation.",
      specs: [
        { label: "Form", value: "Compressed gas" },
        { label: "Container", value: "Steel cylinder" },
        { label: "Purity", value: "≥ 99.5%" },
        { label: "Use", value: "Lab & industrial" },
      ],
      benefits: [
        "Convenient for smaller, controlled volumes",
        "Valve-checked and sealed before dispatch",
        "Delivered with safety documentation",
        "Ideal for labs and metal treatment",
      ],
    },
    {
      slug: "aqueous-ammonia-25",
      category: "water-treatment",
      name: "Aqueous Ammonia 25%",
      tagline: "Ammonia solution for water and effluent treatment.",
      image: `${PROD}/aqueous-ammonia-25.svg`,
      description:
        "A 25% aqueous ammonia (ammonium hydroxide) solution for water treatment, effluent neutralisation, and pH control. Easier and safer to handle than the anhydrous form for utility applications.",
      specs: [
        { label: "Type", value: "Aqueous (NH₄OH)" },
        { label: "Concentration", value: "25%" },
        { label: "Use", value: "Water / effluent treatment" },
        { label: "Supply", value: "Drum & bulk" },
      ],
      benefits: [
        "Easier, safer handling than anhydrous",
        "Effective for pH control and neutralisation",
        "Consistent concentration",
        "Supplied in drums or bulk",
      ],
    },
    {
      slug: "liquor-ammonia",
      category: "water-treatment",
      name: "Liquor Ammonia Solution",
      tagline: "General-purpose ammonia solution for industry.",
      image: `${PROD}/liquor-ammonia.svg`,
      description:
        "A general-purpose liquor ammonia (ammonia solution) for cleaning, textile, and industrial utility use. Supplied at the concentration your process needs, with reliable, tested quality.",
      specs: [
        { label: "Type", value: "Ammonia solution" },
        { label: "Concentration", value: "As specified" },
        { label: "Use", value: "Industrial utility" },
        { label: "Supply", value: "Drum & bulk" },
      ],
      benefits: [
        "Flexible concentration to suit your process",
        "Reliable, tested quality",
        "Suitable for textile and cleaning use",
        "Drum or bulk supply available",
      ],
    },
    {
      slug: "fertilizer-grade-ammonia",
      category: "agricultural",
      name: "Fertilizer Grade Ammonia",
      tagline: "Nitrogen feedstock for agricultural use.",
      image: `${PROD}/fertilizer-grade-ammonia.svg`,
      description:
        "Fertilizer-grade ammonia as a concentrated nitrogen feedstock for agricultural and fertilizer applications. Supplied in bulk with the handling support that agricultural-scale ammonia requires.",
      specs: [
        { label: "Grade", value: "Fertilizer grade" },
        { label: "Nutrient", value: "Nitrogen (N) source" },
        { label: "Supply mode", value: "Bulk" },
        { label: "Use", value: "Agriculture / fertilizer" },
      ],
      benefits: [
        "Concentrated nitrogen source",
        "Bulk supply for agricultural scale",
        "Handling support included",
        "Tested, consistent quality",
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
      "Rahim Enterprise supplies refrigeration, industrial, water-treatment, and agricultural ammonia across Bangladesh, with a strict focus on safety and purity — a subsidiary of MR Group.",
    exploreHeading: "Explore",
    contactHeading: "Contact",
    email: "info@rahimenterprise.com.bd",
    phone: "+880 1700-000000",
    addressHeading: "Head Office",
    address: ["Rahim Enterprise", "Tejgaon Industrial Area", "Dhaka 1208, Bangladesh"],
    followHeading: "Follow",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© 2026 Rahim Enterprise, a subsidiary of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "About Us",
      title: "Ammonia, handled right",
      description:
        "Rahim Enterprise supplies ammonia to the cold stores, factories, and farms that keep Bangladesh running — with the safety and purity a demanding product requires.",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "Our story",
    storyParagraphs: [
      "Ammonia keeps Bangladesh's food cold, its factories running, and its water clean — but it is unforgiving to handle. Too many suppliers cut corners on safety and purity, and their customers paid for it in downtime and risk.",
      "As part of MR Group, we built Rahim Enterprise to do ammonia supply properly: tested purity, certified handling, and hazard-compliant logistics, delivered to a consistent standard nationwide.",
      "Today we supply cold storages, processing plants, water utilities, and agricultural operations across all 64 districts — a demanding product delivered with the discipline it demands.",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "Our mission",
    mission:
      "To supply ammonia across Bangladesh with uncompromising safety and verified purity — so the cold chains, processes, and utilities that depend on it never fail.",
    visionHeading: "Our vision",
    vision:
      "To be the ammonia supplier Bangladesh's industry trusts by default — known for safety, purity, and reliability at national scale.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Safety", body: "Ammonia is hazardous, so safety is absolute — trained handlers, proper protocols, no shortcuts." },
      { title: "Purity", body: "Every batch is tested to specification. Customers get exactly the grade they need." },
      { title: "Reliability", body: "Scheduled, dependable supply that keeps cold chains and processes running." },
      { title: "Reach", body: "Nationwide logistics that put ammonia where it's needed, in every division." },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "Our Products",
      title: "Ammonia grades for every use",
      description:
        "Four ranges cover refrigeration, industrial process, water treatment, and agriculture. Choose a range to see the grades and services inside.",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "Every grade we supply is tested to specification and delivered under strict safety protocols, anywhere in Bangladesh. Pick a category to find the right ammonia product for your application.",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Inside Rahim Enterprise",
      description: "A look at our storage, tanker fleet, and the cold stores and plants we supply across the country.",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "Photos and videos from our depot, tanker fleet, and the customers who rely on our ammonia. Switch between photos and videos below.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos yet.",
    noVideos: "No videos yet.",
  },
  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "Arrange your ammonia supply",
      description:
        "Need a grade, a bulk quote, or a cold-store charge? Our team covers all of Bangladesh and is ready to help you set up safe, reliable supply.",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "Send us a message",
    formIntro: "Our team usually responds within one business day.",
    officeHeading: "Head Office",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const bn: RahimContent = {
  name: "রাহিম এন্টারপ্রাইজ",
  tagline: "রেফ্রিজারেশন, শিল্প ও কৃষি অ্যামোনিয়া—সারা বাংলাদেশে নিরাপদ ও বিশুদ্ধভাবে সরবরাহ।",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    {
      label: "পণ্যসমূহ",
      href: "/categories",
      children: [
        { label: "রেফ্রিজারেশন অ্যামোনিয়া", href: "/categories/refrigeration" },
        { label: "শিল্প অ্যামোনিয়া", href: "/categories/industrial" },
        { label: "ওয়াটার ট্রিটমেন্ট অ্যামোনিয়া", href: "/categories/water-treatment" },
        { label: "কৃষি অ্যামোনিয়া", href: "/categories/agricultural" },
      ],
    },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/refrigeration.svg`,
        eyebrow: "রেফ্রিজারেশন অ্যামোনিয়া",
        headingLead: "সচল রাখুন",
        headingEmphasis: "কোল্ড চেইন",
        headingTail: "",
        body: "বাংলাদেশকে সরবরাহে রাখা আইস প্ল্যান্ট, মাছ ও খাদ্য কোল্ড স্টোরেজের জন্য রেফ্রিজারেন্ট-গ্রেড অ্যামোনিয়া (R-717) ও কোল্ড-স্টোর চার্জিং।",
        ctaLabel: "রেফ্রিজারেশন অ্যামোনিয়া দেখুন",
        ctaHref: "/categories/refrigeration",
      },
      {
        image: `${HERO}/industrial.svg`,
        eyebrow: "শিল্প অ্যামোনিয়া",
        headingLead: "আপনার প্রক্রিয়ার জন্য",
        headingEmphasis: "বিশুদ্ধতা",
        headingTail: "নির্ভরযোগ্য",
        body: "রাসায়নিক প্রক্রিয়াকরণ, ধাতু প্রক্রিয়া ও উৎপাদনের জন্য অ্যানহাইড্রাস ও সিলিন্ডার অ্যামোনিয়া—ধারাবাহিক স্পেসিফিকেশনে সরবরাহ।",
        ctaLabel: "শিল্প অ্যামোনিয়া দেখুন",
        ctaHref: "/categories/industrial",
      },
      {
        image: `${HERO}/nationwide.svg`,
        eyebrow: "সারাদেশে সরবরাহ",
        headingLead: "সারা বাংলাদেশে",
        headingEmphasis: "নিরাপদে",
        headingTail: "পৌঁছে দেওয়া",
        body: "চট্টগ্রামের কোল্ড স্টোর থেকে উত্তরের কারখানা—প্রশিক্ষিত বহর ও কঠোর নিরাপত্তা প্রোটোকল অ্যামোনিয়া যেখানে দরকার সেখানে পৌঁছে দেয়।",
        ctaLabel: "আমরা কীভাবে ডেলিভারি করি",
        ctaHref: "/#process",
      },
    ],
  },
  why: {
    eyebrow: "কেন রাহিম এন্টারপ্রাইজ",
    headingLead: "পরিচালিত",
    headingEmphasis: "দক্ষতায়",
    intro:
      "অ্যামোনিয়া একটি চাহিদাসম্পন্ন পণ্য—বিষাক্ত, চাপযুক্ত এবং শর্টকাট ক্ষমা করে না। আমরা রাহিম এন্টারপ্রাইজ গড়েছি সেই প্রশিক্ষণ, পরীক্ষা ও লজিস্টিকসের ওপর যা অ্যামোনিয়া সরবরাহকে নিরাপদ ও নির্ভরযোগ্য করে।",
    features: [
      {
        icon: "shield",
        title: "নিরাপত্তা-সার্টিফায়েড হ্যান্ডলিং",
        body: "প্রতিটি ডেলিভারিতে প্রশিক্ষিত হ্যান্ডলার, সঠিক পিপিই ও কঠোর ট্রান্সফার প্রোটোকল—কারণ অ্যামোনিয়া ভুলের সুযোগ রাখে না।",
      },
      {
        icon: "flask",
        title: "যাচাইকৃত বিশুদ্ধতা",
        body: "প্রতিটি ব্যাচ স্পেসিফিকেশন অনুযায়ী পরীক্ষা করা হয়, তাই রেফ্রিজারেশন ও প্রসেস গ্রাহকরা ধারাবাহিক, নির্ভরযোগ্য মান পান।",
      },
      {
        icon: "truck",
        title: "সারাদেশে লজিস্টিকস",
        body: "একটি নিবেদিত ট্যাংকার ও সিলিন্ডার বহর বাংলাদেশের প্রতিটি বিভাগের কোল্ড স্টোর, প্ল্যান্ট ও খামারে পৌঁছায়।",
      },
      {
        icon: "gauge",
        title: "নির্ভরযোগ্য সরবরাহ",
        body: "নির্ধারিত ডেলিভারি ও স্ট্যান্ডিং চুক্তি আপনার কোল্ড চেইন ও প্রক্রিয়া নিরবচ্ছিন্ন রাখে।",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "আমরা যা সরবরাহ করি",
    heading: "প্রতিটি প্রয়োগের জন্য অ্যামোনিয়া",
    subtitle:
      "আইস প্ল্যান্ট চালানো R-717 থেকে এফ্লুয়েন্ট শোধনের অ্যাকুয়া অ্যামোনিয়া—রাহিম এন্টারপ্রাইজ অ্যামোনিয়ার সম্পূর্ণ গ্রেড ও সেবার পরিসর কভার করে।",
    exploreLabel: "পণ্য দেখুন",
  },
  featured: {
    eyebrow: "মূল পণ্য",
    heading: "যেসব গ্রেডে গ্রাহকরা নির্ভর করেন",
    subtitle: "প্রতিটি পরিসর থেকে একটি প্রতিনিধিত্বমূলক পণ্য—রাহিম এন্টারপ্রাইজ নামের পেছনের অ্যামোনিয়া গ্রেডগুলো।",
    viewAllLabel: "সব পণ্য দেখুন",
  },
  stats: {
    eyebrow: "সংখ্যায়",
    heading: "একটি চাহিদাসম্পন্ন পণ্যে আস্থাভাজন",
    items: [
      { value: "৬৪", label: "জেলায় পৌঁছানো" },
      { value: "৯৯.৮%", label: "সাধারণ বিশুদ্ধতা" },
      { value: "১০০%", label: "নিরাপত্তা-প্রোটোকল ডেলিভারি" },
      { value: "২৪/৭", label: "সরবরাহ সমন্বয়" },
    ],
  },
  process: {
    eyebrow: "আমরা কীভাবে ডেলিভারি করি",
    heading: "নিরাপদ সরবরাহ, প্রতিটি ধাপ নিয়ন্ত্রিত",
    body: "অ্যামোনিয়া সরবরাহ নিয়ন্ত্রিত ধাপের একটি শৃঙ্খল—আর একটি দুর্বল লিঙ্কও অগ্রহণযোগ্য। রাহিম এন্টারপ্রাইজ কীভাবে প্রতিটি ডেলিভারি নিরাপদ ও স্পেসে রাখে তা এখানে।",
    image: `${IMG}/process.svg`,
    steps: [
      {
        title: "সোর্সিং ও পরীক্ষা",
        body: "আপনার প্রয়োগের প্রয়োজনীয় গ্রেড ও বিশুদ্ধতায় অ্যামোনিয়া সংগ্রহ ও ল্যাব-পরীক্ষা করা হয়।",
      },
      {
        title: "নিরাপদ ট্রান্সফার ও ফিল",
        body: "প্রশিক্ষিত, সার্টিফায়েড হ্যান্ডলার নিয়ন্ত্রিত পরিবেশে সিলিন্ডার ও ট্যাংকার ভরে।",
      },
      {
        title: "সম্মত পরিবহন",
        body: "হ্যাজার্ড-সম্মত যানবাহন ও ডকুমেন্টেশন পণ্য নিরাপদে সারাদেশে পৌঁছায়।",
      },
      {
        title: "তত্ত্বাবধানে ডেলিভারি",
        body: "অন-সাইট ট্রান্সফার প্রোটোকল অনুযায়ী তত্ত্বাবধান করা হয়, সংযোগ ও নিরাপদ হ্যান্ডলিংয়ে সহায়তাসহ।",
      },
    ],
  },
  testimonials: {
    heading: "আমাদের গ্রাহকরা যা বলেন",
    subtitle: "সারা বাংলাদেশের কোল্ড স্টোরেজ, কারখানা ও প্ল্যান্ট যারা রাহিম এন্টারপ্রাইজে নির্ভর করে।",
    items: [
      {
        quote:
          "তাদের R-717 এর মান ধারাবাহিক এবং ডেলিভারি সবসময় সময়মতো। কোল্ড স্টোরের জন্য এই নির্ভরযোগ্যতাই সব।",
        name: "আব্দুর রহমান",
        role: "কোল্ড স্টোরেজ মালিক, চট্টগ্রাম",
      },
      {
        quote:
          "আমাদের নির্দিষ্ট স্পেসিফিকেশনে অ্যামোনিয়া দরকার, আর রাহিম তা ব্যাচের পর ব্যাচ দেয়। তাদের নিরাপত্তা হ্যান্ডলিং সত্যিই পেশাদার।",
        name: "তানভীর হাসান",
        role: "প্ল্যান্ট ইঞ্জিনিয়ার, নারায়ণগঞ্জ",
      },
      {
        quote:
          "নির্ভরযোগ্য সারাদেশ সরবরাহ এবং এমন একটি টিম যারা স্পষ্টতই অ্যামোনিয়া নিরাপত্তা বোঝে। তাই আমরা তাদের সাথেই আছি।",
        name: "মিজানুর রহমান",
        role: "অপারেশন ম্যানেজার, বগুড়া",
      },
    ],
  },
  cta: {
    heading: "নির্ভরযোগ্য অ্যামোনিয়া সরবরাহ দরকার?",
    body: "বাংলাদেশের যেকোনো স্থানে আপনার গ্রেড, পরিমাণ ও অবস্থান জানান—আমাদের টিম আপনার কাজের উপযোগী সময়সূচিতে নিরাপদ, পরীক্ষিত অ্যামোনিয়া সরবরাহের ব্যবস্থা করবে।",
    button: "সরবরাহ কোটেশন চান",
  },
  categories: [
    {
      slug: "refrigeration",
      name: "রেফ্রিজারেশন অ্যামোনিয়া",
      icon: "snowflake",
      tagline: "কোল্ড স্টোর · আইস প্ল্যান্ট",
      description:
        "শিল্প রেফ্রিজারেশনের জন্য রেফ্রিজারেন্ট-গ্রেড অ্যামোনিয়া (R-717) ও কোল্ড-স্টোর চার্জিং—দক্ষ, নির্ভরযোগ্য কুলিংয়ের জন্য উচ্চ বিশুদ্ধতা।",
      image: `${CAT}/refrigeration.svg`,
    },
    {
      slug: "industrial",
      name: "শিল্প অ্যামোনিয়া",
      icon: "factory",
      tagline: "প্রক্রিয়া · উৎপাদন",
      description:
        "রাসায়নিক প্রক্রিয়াকরণ, ধাতু প্রক্রিয়া ও উৎপাদনের জন্য অ্যানহাইড্রাস ও সিলিন্ডার অ্যামোনিয়া—ধারাবাহিক স্পেসিফিকেশনে সরবরাহ।",
      image: `${CAT}/industrial.svg`,
    },
    {
      slug: "water-treatment",
      name: "ওয়াটার ট্রিটমেন্ট অ্যামোনিয়া",
      icon: "droplet",
      tagline: "এফ্লুয়েন্ট · ইউটিলিটি",
      description:
        "পানি ও এফ্লুয়েন্ট শোধন, পিএইচ নিয়ন্ত্রণ ও শিল্পজুড়ে ইউটিলিটি প্রয়োগের জন্য অ্যাকুয়াস (লিকার) অ্যামোনিয়া।",
      image: `${CAT}/water-treatment.svg`,
    },
    {
      slug: "agricultural",
      name: "কৃষি অ্যামোনিয়া",
      icon: "leaf",
      tagline: "সার · কৃষি",
      description:
        "কৃষি ও সার প্রয়োগের জন্য নাইট্রোজেন ফিডস্টক হিসেবে সার-গ্রেড অ্যামোনিয়া, বাল্কে সরবরাহ।",
      image: `${CAT}/agricultural.svg`,
    },
  ],
  products: [
    {
      slug: "refrigerant-grade-r717",
      category: "refrigeration",
      name: "রেফ্রিজারেন্ট গ্রেড অ্যামোনিয়া (R-717)",
      tagline: "শিল্প রেফ্রিজারেশনের জন্য উচ্চ-বিশুদ্ধতার অ্যামোনিয়া।",
      image: `${PROD}/refrigerant-grade-r717.svg`,
      description:
        "শিল্প রেফ্রিজারেশন সিস্টেমের জন্য উচ্চ-বিশুদ্ধতার অ্যানহাইড্রাস অ্যামোনিয়া (R-717)—আইস প্ল্যান্ট ও কোল্ড স্টোরেজের পেছনের দক্ষ, প্রমাণিত রেফ্রিজারেন্ট। কম আর্দ্রতা ও তেলের পরিমাণ কম্প্রেসর সুরক্ষা করে ও কুলিং দক্ষ রাখে।",
      specs: [
        { label: "গ্রেড", value: "R-717 রেফ্রিজারেন্ট" },
        { label: "বিশুদ্ধতা", value: "≥ ৯৯.৮%" },
        { label: "ধরন", value: "অ্যানহাইড্রাস" },
        { label: "সরবরাহ", value: "সিলিন্ডার ও বাল্ক" },
      ],
      benefits: [
        "দক্ষ রেফ্রিজারেশনের জন্য উচ্চ বিশুদ্ধতা",
        "কম আর্দ্রতা কম্প্রেসর সুরক্ষা করে",
        "চমৎকার থার্মোডাইনামিক দক্ষতা",
        "সারাদেশে কোল্ড স্টোর ও আইস প্ল্যান্টে সরবরাহ",
      ],
    },
    {
      slug: "coldstore-charging",
      category: "refrigeration",
      name: "কোল্ড স্টোরেজ চার্জিং সার্ভিস",
      tagline: "রেফ্রিজারেশন সিস্টেমের জন্য অন-সাইট অ্যামোনিয়া চার্জিং।",
      image: `${PROD}/coldstore-charging.svg`,
      description:
        "শিল্প রেফ্রিজারেশন সিস্টেমে অ্যামোনিয়া চার্জ ও টপ-আপ করার একটি তত্ত্বাবধানকৃত অন-সাইট সেবা। আমাদের প্রশিক্ষিত টিম নিরাপদে ট্রান্সফার করে, তাই ন্যূনতম ডাউনটাইমে আপনার কোল্ড স্টোর তাপমাত্রায় ফিরে আসে।",
      specs: [
        { label: "সেবা", value: "অন-সাইট চার্জিং" },
        { label: "জন্য", value: "রেফ্রিজারেশন সিস্টেম" },
        { label: "হ্যান্ডলিং", value: "প্রশিক্ষিত, তত্ত্বাবধানে" },
        { label: "কভারেজ", value: "সারাদেশ" },
      ],
      benefits: [
        "তত্ত্বাবধানে নিরাপদ অন-সাইট ট্রান্সফার",
        "কোল্ড-স্টোর ডাউনটাইম কমায়",
        "সার্টিফায়েড টেকনিশিয়ান দ্বারা পরিচালিত",
        "সারাদেশে উপলব্ধ",
      ],
    },
    {
      slug: "anhydrous-ammonia-bulk",
      category: "industrial",
      name: "অ্যানহাইড্রাস অ্যামোনিয়া (বাল্ক)",
      tagline: "শিল্প চাহিদার জন্য ট্যাংকার-ডেলিভারড অ্যামোনিয়া।",
      image: `${PROD}/anhydrous-ammonia-bulk.svg`,
      description:
        "কারখানা ও প্রসেসিং প্ল্যান্টের জন্য অন-সাইট স্টোরেজে ট্যাংকারে সরবরাহকৃত বাল্ক অ্যানহাইড্রাস অ্যামোনিয়া। ধারাবাহিক, পরীক্ষিত স্পেসিফিকেশন ও নির্ধারিত সরবরাহ শিল্প প্রক্রিয়া নিরবচ্ছিন্ন রাখে।",
      specs: [
        { label: "ধরন", value: "অ্যানহাইড্রাস (NH₃)" },
        { label: "বিশুদ্ধতা", value: "≥ ৯৯.৫%" },
        { label: "সরবরাহ ধরন", value: "বাল্ক ট্যাংকার" },
        { label: "ব্যবহার", value: "শিল্প প্রক্রিয়া" },
      ],
      benefits: [
        "ধারাবাহিক, পরীক্ষিত স্পেসিফিকেশন",
        "অন-সাইট ট্যাংকে নির্ধারিত বাল্ক সরবরাহ",
        "উচ্চ পরিমাণে সিলিন্ডার হ্যান্ডলিং নেই",
        "আপনার প্ল্যান্টের চাহিদা অনুযায়ী সঠিক আকার",
      ],
    },
    {
      slug: "ammonia-gas-cylinder",
      category: "industrial",
      name: "অ্যামোনিয়া গ্যাস সিলিন্ডার",
      tagline: "নিয়ন্ত্রিত, কম-পরিমাণ ব্যবহারের জন্য সিলিন্ডার অ্যামোনিয়া।",
      image: `${PROD}/ammonia-gas-cylinder.svg`,
      description:
        "ল্যাবরেটরি, ধাতু প্রক্রিয়া ও কম-পরিমাণ শিল্প ব্যবহারের জন্য স্টিল সিলিন্ডারে চাপযুক্ত অ্যামোনিয়া। সিলড, ভালভ-যাচাই করা এবং নিরাপত্তা ডকুমেন্টেশনসহ সরবরাহ।",
      specs: [
        { label: "রূপ", value: "কম্প্রেসড গ্যাস" },
        { label: "কন্টেইনার", value: "স্টিল সিলিন্ডার" },
        { label: "বিশুদ্ধতা", value: "≥ ৯৯.৫%" },
        { label: "ব্যবহার", value: "ল্যাব ও শিল্প" },
      ],
      benefits: [
        "কম, নিয়ন্ত্রিত পরিমাণের জন্য সুবিধাজনক",
        "ডিসপ্যাচের আগে ভালভ-যাচাই ও সিলড",
        "নিরাপত্তা ডকুমেন্টেশনসহ সরবরাহ",
        "ল্যাব ও ধাতু প্রক্রিয়ার জন্য আদর্শ",
      ],
    },
    {
      slug: "aqueous-ammonia-25",
      category: "water-treatment",
      name: "অ্যাকুয়াস অ্যামোনিয়া ২৫%",
      tagline: "পানি ও এফ্লুয়েন্ট শোধনের জন্য অ্যামোনিয়া দ্রবণ।",
      image: `${PROD}/aqueous-ammonia-25.svg`,
      description:
        "পানি শোধন, এফ্লুয়েন্ট নিউট্রালাইজেশন ও পিএইচ নিয়ন্ত্রণের জন্য ২৫% অ্যাকুয়াস অ্যামোনিয়া (অ্যামোনিয়াম হাইড্রক্সাইড) দ্রবণ। ইউটিলিটি প্রয়োগে অ্যানহাইড্রাস রূপের চেয়ে সহজ ও নিরাপদ হ্যান্ডলিং।",
      specs: [
        { label: "ধরন", value: "অ্যাকুয়াস (NH₄OH)" },
        { label: "ঘনত্ব", value: "২৫%" },
        { label: "ব্যবহার", value: "পানি / এফ্লুয়েন্ট শোধন" },
        { label: "সরবরাহ", value: "ড্রাম ও বাল্ক" },
      ],
      benefits: [
        "অ্যানহাইড্রাসের চেয়ে সহজ, নিরাপদ হ্যান্ডলিং",
        "পিএইচ নিয়ন্ত্রণ ও নিউট্রালাইজেশনে কার্যকর",
        "ধারাবাহিক ঘনত্ব",
        "ড্রাম বা বাল্কে সরবরাহ",
      ],
    },
    {
      slug: "liquor-ammonia",
      category: "water-treatment",
      name: "লিকার অ্যামোনিয়া দ্রবণ",
      tagline: "শিল্পের জন্য সাধারণ-উদ্দেশ্যের অ্যামোনিয়া দ্রবণ।",
      image: `${PROD}/liquor-ammonia.svg`,
      description:
        "পরিষ্কার, টেক্সটাইল ও শিল্প ইউটিলিটি ব্যবহারের জন্য সাধারণ-উদ্দেশ্যের লিকার অ্যামোনিয়া (অ্যামোনিয়া দ্রবণ)। আপনার প্রক্রিয়ার প্রয়োজনীয় ঘনত্বে, নির্ভরযোগ্য, পরীক্ষিত মানে সরবরাহ।",
      specs: [
        { label: "ধরন", value: "অ্যামোনিয়া দ্রবণ" },
        { label: "ঘনত্ব", value: "নির্দিষ্ট অনুযায়ী" },
        { label: "ব্যবহার", value: "শিল্প ইউটিলিটি" },
        { label: "সরবরাহ", value: "ড্রাম ও বাল্ক" },
      ],
      benefits: [
        "আপনার প্রক্রিয়ার উপযোগী নমনীয় ঘনত্ব",
        "নির্ভরযোগ্য, পরীক্ষিত মান",
        "টেক্সটাইল ও পরিষ্কারের কাজে উপযোগী",
        "ড্রাম বা বাল্ক সরবরাহ উপলব্ধ",
      ],
    },
    {
      slug: "fertilizer-grade-ammonia",
      category: "agricultural",
      name: "সার-গ্রেড অ্যামোনিয়া",
      tagline: "কৃষি ব্যবহারের জন্য নাইট্রোজেন ফিডস্টক।",
      image: `${PROD}/fertilizer-grade-ammonia.svg`,
      description:
        "কৃষি ও সার প্রয়োগের জন্য ঘনীভূত নাইট্রোজেন ফিডস্টক হিসেবে সার-গ্রেড অ্যামোনিয়া। কৃষি-স্কেলের অ্যামোনিয়ার প্রয়োজনীয় হ্যান্ডলিং সহায়তাসহ বাল্কে সরবরাহ।",
      specs: [
        { label: "গ্রেড", value: "সার গ্রেড" },
        { label: "পুষ্টি", value: "নাইট্রোজেন (N) উৎস" },
        { label: "সরবরাহ ধরন", value: "বাল্ক" },
        { label: "ব্যবহার", value: "কৃষি / সার" },
      ],
      benefits: [
        "ঘনীভূত নাইট্রোজেন উৎস",
        "কৃষি স্কেলের জন্য বাল্ক সরবরাহ",
        "হ্যান্ডলিং সহায়তা অন্তর্ভুক্ত",
        "পরীক্ষিত, ধারাবাহিক মান",
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
      "রাহিম এন্টারপ্রাইজ নিরাপত্তা ও বিশুদ্ধতার কঠোর মানদণ্ডে সারা বাংলাদেশে রেফ্রিজারেশন, শিল্প, ওয়াটার ট্রিটমেন্ট ও কৃষি অ্যামোনিয়া সরবরাহ করে—এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান।",
    exploreHeading: "এক্সপ্লোর",
    contactHeading: "যোগাযোগ",
    email: "info@rahimenterprise.com.bd",
    phone: "+৮৮০ ১৭০০-০০০০০০",
    addressHeading: "প্রধান কার্যালয়",
    address: ["রাহিম এন্টারপ্রাইজ", "তেজগাঁও শিল্প এলাকা", "ঢাকা ১২০৮, বাংলাদেশ"],
    followHeading: "ফলো করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© ২০২৬ রাহিম এন্টারপ্রাইজ, এমআর গ্রুপের একটি অঙ্গপ্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের সম্পর্কে",
      title: "অ্যামোনিয়া, সঠিকভাবে পরিচালিত",
      description:
        "রাহিম এন্টারপ্রাইজ বাংলাদেশকে সচল রাখা কোল্ড স্টোর, কারখানা ও খামারে অ্যামোনিয়া সরবরাহ করে—একটি চাহিদাসম্পন্ন পণ্যের প্রয়োজনীয় নিরাপত্তা ও বিশুদ্ধতা নিয়ে।",
      image: `${IMG}/header-about.svg`,
    },
    storyHeading: "আমাদের গল্প",
    storyParagraphs: [
      "অ্যামোনিয়া বাংলাদেশের খাদ্য ঠান্ডা রাখে, কারখানা চালায় ও পানি পরিষ্কার রাখে—কিন্তু এটি হ্যান্ডল করা কঠিন। অনেক সরবরাহকারী নিরাপত্তা ও বিশুদ্ধতায় শর্টকাট নেয়, আর তাদের গ্রাহকরা ডাউনটাইম ও ঝুঁকিতে এর মূল্য দেয়।",
      "এমআর গ্রুপের অংশ হিসেবে আমরা রাহিম এন্টারপ্রাইজ গড়েছি অ্যামোনিয়া সরবরাহ সঠিকভাবে করতে: পরীক্ষিত বিশুদ্ধতা, সার্টিফায়েড হ্যান্ডলিং ও হ্যাজার্ড-সম্মত লজিস্টিকস, সারাদেশে একটি ধারাবাহিক মানে সরবরাহ।",
      "আজ আমরা ৬৪ জেলাজুড়ে কোল্ড স্টোরেজ, প্রসেসিং প্ল্যান্ট, ওয়াটার ইউটিলিটি ও কৃষি কার্যক্রমে সরবরাহ করি—একটি চাহিদাসম্পন্ন পণ্য তার প্রয়োজনীয় শৃঙ্খলায় সরবরাহ করা।",
    ],
    storyImage: `${IMG}/story.svg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "আপসহীন নিরাপত্তা ও যাচাইকৃত বিশুদ্ধতায় সারা বাংলাদেশে অ্যামোনিয়া সরবরাহ করা—যাতে এর ওপর নির্ভরশীল কোল্ড চেইন, প্রক্রিয়া ও ইউটিলিটি কখনো ব্যর্থ না হয়।",
    visionHeading: "আমাদের ভিশন",
    vision:
      "বাংলাদেশের শিল্প যে অ্যামোনিয়া সরবরাহকারীতে ডিফল্টভাবে ভরসা করে তা হওয়া—জাতীয় স্কেলে নিরাপত্তা, বিশুদ্ধতা ও নির্ভরযোগ্যতার জন্য পরিচিত।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "নিরাপত্তা", body: "অ্যামোনিয়া বিপজ্জনক, তাই নিরাপত্তা পরম—প্রশিক্ষিত হ্যান্ডলার, সঠিক প্রোটোকল, কোনো শর্টকাট নেই।" },
      { title: "বিশুদ্ধতা", body: "প্রতিটি ব্যাচ স্পেসিফিকেশন অনুযায়ী পরীক্ষা করা হয়। গ্রাহকরা ঠিক যে গ্রেড দরকার তা পান।" },
      { title: "নির্ভরযোগ্যতা", body: "নির্ধারিত, নির্ভরযোগ্য সরবরাহ যা কোল্ড চেইন ও প্রক্রিয়া চালু রাখে।" },
      { title: "পরিধি", body: "সারাদেশ লজিস্টিকস যা প্রতিটি বিভাগে অ্যামোনিয়া প্রয়োজন অনুযায়ী পৌঁছে দেয়।" },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "আমাদের পণ্য",
      title: "প্রতিটি ব্যবহারের জন্য অ্যামোনিয়া গ্রেড",
      description:
        "চারটি পরিসর রেফ্রিজারেশন, শিল্প প্রক্রিয়া, ওয়াটার ট্রিটমেন্ট ও কৃষি কভার করে। ভেতরের গ্রেড ও সেবা দেখতে একটি পরিসর বেছে নিন।",
      image: `${IMG}/header-categories.svg`,
    },
    intro:
      "আমরা যে প্রতিটি গ্রেড সরবরাহ করি তা স্পেসিফিকেশন অনুযায়ী পরীক্ষিত এবং কঠোর নিরাপত্তা প্রোটোকলে বাংলাদেশের যেকোনো স্থানে সরবরাহ করা হয়। আপনার প্রয়োগের সঠিক অ্যামোনিয়া পণ্য খুঁজতে একটি ক্যাটাগরি বেছে নিন।",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "রাহিম এন্টারপ্রাইজের ভেতরে",
      description: "আমাদের স্টোরেজ, ট্যাংকার বহর এবং সারাদেশে আমরা যেসব কোল্ড স্টোর ও প্ল্যান্টে সরবরাহ করি তার এক ঝলক।",
      image: `${IMG}/header-gallery.svg`,
    },
    intro:
      "আমাদের ডিপো, ট্যাংকার বহর এবং যেসব গ্রাহক আমাদের অ্যামোনিয়ার ওপর নির্ভর করেন তাদের ছবি ও ভিডিও। নিচে ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ",
      title: "আপনার অ্যামোনিয়া সরবরাহের ব্যবস্থা করুন",
      description:
        "কোনো গ্রেড, বাল্ক কোটেশন বা কোল্ড-স্টোর চার্জ দরকার? আমাদের টিম পুরো বাংলাদেশ কভার করে এবং নিরাপদ, নির্ভরযোগ্য সরবরাহ সেট আপে সাহায্যে প্রস্তুত।",
      image: `${IMG}/header-contact.svg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "আমাদের টিম সাধারণত এক কার্যদিবসের মধ্যে সাড়া দেয়।",
    officeHeading: "প্রধান কার্যালয়",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
  },
};

export const rahimContent: Record<AppLocale, RahimContent> = { en, bn };
