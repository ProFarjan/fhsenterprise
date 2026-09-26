import type { AppLocale } from "@/i18n/routing";
import type { FillingContent } from "@/types/filling";

const IMG = "/images/companies/filling";

const en: FillingContent = {
  name: "Sattar Filling Station",
  tagline: "Clean fuel and fast service at highway stations nationwide.",
  getInTouch: "Get in touch",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Notice", href: "/notice" },
    { label: "Gallery", href: "/gallery" },
  ],
  hero: {
    brandWord: "MR FILLING",
    headingLead: "Power every",
    headingEmphasis: "journey",
    subtext:
      "Sattar Filling Station keeps Bangladesh moving with clean fuel, fast service, and trusted stations on every major highway.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Our services",
    image: `${IMG}/hero.jpg`,
    stats: [
      { value: "10+", label: "Years on the road" },
      { value: "50+", label: "Highway stations" },
      { value: "24/7", label: "Always open" },
    ],
  },
  highlights: {
    eyebrow: "Why Sattar Filling Station",
    heading:
      "Choose a fuel partner built for reliability, speed, and complete peace of mind.",
    body: "From premium fuel to full vehicle care, every MR station is engineered for quick, safe, and dependable service — whatever the road demands.",
    cta: "Get in touch",
    cards: [
      {
        value: "50+",
        label: "Stations nationwide",
        description:
          "A growing network on Bangladesh's busiest highways and city corridors.",
        image: `${IMG}/highway.jpg`,
      },
      {
        value: "99.9%",
        label: "Dispensing accuracy",
        description:
          "Calibrated dispensers and quality-tested fuel at every pump, every time.",
        image: `${IMG}/canopy.jpg`,
      },
    ],
  },
  services: {
    eyebrow: "What we offer",
    heading: "Everything your vehicle needs, under one canopy",
    body: "Fuel, servicing, and everyday essentials — designed to get you back on the road fast.",
    items: [
      {
        icon: "fuel",
        name: "Fuel Filling",
        description:
          "Octane, Petrol, and Diesel dispensed at calibrated, accurate volumes.",
        image: `${IMG}/car-refuel.jpg`,
      },
      {
        icon: "oil",
        name: "Lubricants & Oil Change",
        description:
          "Genuine engine oils and quick oil-change bays for every kind of vehicle.",
        image: `${IMG}/lubricant.jpg`,
      },
      {
        icon: "spark",
        name: "Vehicle Servicing",
        description:
          "Tyre, battery, and quick mechanical checks by trained forecourt staff.",
        image: `${IMG}/servicing.jpg`,
      },
      {
        icon: "wash",
        name: "Car Wash",
        description:
          "Fast, water-efficient wash bays to keep your vehicle spotless.",
        image: `${IMG}/carwash.jpg`,
      },
      {
        icon: "store",
        name: "Convenience Store",
        description:
          "Snacks, drinks, and travel essentials for the road ahead, around the clock.",
        image: `${IMG}/convenience.jpg`,
      },
      {
        icon: "truck",
        name: "Fleet & Commercial Fuel",
        description:
          "Bulk fuelling, fleet cards, and priority lanes for commercial vehicles.",
        image: `${IMG}/fleet.jpg`,
      },
    ],
  },
  feature: {
    eyebrow: "Engineered for performance",
    heading:
      "Clean fuel and safe forecourts, tested to the highest standards nationwide.",
    body: "Every litre is quality-checked and every station is built for safety — so you can refuel with total confidence, day or night.",
    image: `${IMG}/pump-closeup.jpg`,
    caption: "Precision and safety at every station we build.",
    features: [
      {
        icon: "gauge",
        title: "Certified quality",
        body: "Fuel tested for purity and dispensed at calibrated, accurate volumes.",
      },
      {
        icon: "shield",
        title: "Safety first",
        body: "Fire-safe forecourts, trained staff, and 24/7 monitoring at every site.",
      },
    ],
  },
  process: {
    eyebrow: "How it works (step by step)",
    heading: "A complete pit stop, from pulling in to driving off.",
    body: "Every MR station is designed for a smooth, quick visit — fuel, care, and essentials without the wait.",
    image: `${IMG}/car-refuel.jpg`,
    steps: [
      {
        title: "Drive in",
        body: "Pull up to any open bay — our attendants greet you and confirm your fuel grade.",
      },
      {
        title: "Fuel up",
        body: "Choose Octane, Petrol, or Diesel, dispensed at calibrated, accurate volumes.",
      },
      {
        title: "Add-on services",
        body: "Top up oil, wash your car, or grab essentials from the convenience store.",
      },
      {
        title: "Pay & go",
        body: "Pay by cash or card in seconds and get back on the road.",
      },
    ],
  },
  notices: {
    eyebrow: "Notice board",
    heading: "Latest notices & updates",
    body: "Price revisions, new stations, and safety announcements from across the network.",
    viewMore: "View all notices",
    items: [
      {
        category: "Fuel Prices",
        date: "July 10, 2026",
        title: "Revised fuel prices effective this week",
        excerpt:
          "Updated Octane, Petrol, and Diesel rates are now displayed at all stations.",
        image: `${IMG}/prices.jpg`,
      },
      {
        category: "Network",
        date: "June 22, 2026",
        title: "New highway station opens on the Dhaka–Chattogram route",
        excerpt:
          "Our 51st outlet brings 24/7 fuel and servicing to the southern corridor.",
        image: `${IMG}/notice-1.jpg`,
      },
      {
        category: "Safety",
        date: "June 05, 2026",
        title: "Station-wide fire safety drill completed",
        excerpt:
          "All forecourt teams cleared the annual emergency-response certification.",
        image: `${IMG}/notice-3.jpg`,
      },
      {
        category: "Service",
        date: "May 18, 2026",
        title: "Extended lubricant and oil-change hours",
        excerpt:
          "Selected stations now offer oil-change bays until midnight, seven days a week.",
        image: `${IMG}/notice-2.jpg`,
      },
    ],
  },
  cta: {
    heading: "Ready to fuel up with MR?",
    body: "Find your nearest station or partner with us for fleet and commercial fuel.",
    button: "Get in touch",
  },
  footer: {
    newsletterHeading: "Stay updated",
    emailPlaceholder: "Your email",
    submitLabel: "Submit",
    consent:
      "I consent to receive updates from Sattar Filling Station. I understand I can withdraw my consent at any time.",
    contactHeading: "Contact us",
    email: "fillingstation@mrgroup.com",
    phone: "+880 1XXX-XXXXXX",
    addressHeading: "Address",
    address: ["MR Tower, Gulshan Avenue", "Dhaka 1212, Bangladesh"],
    followHeading: "Follow us",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "Keeping Bangladesh moving.",
    legal: "© 2026 Sattar Filling Station, a company of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "Our Story",
      title: "Fuelling the nation, one journey at a time",
      description:
        "From a single highway pump to a nationwide network of stations — this is the story of Sattar Filling Station.",
      image: `${IMG}/hero.jpg`,
    },
    storyHeading: "Where it started",
    storyParagraphs: [
      "Sattar Filling Station began with a single pump on a busy highway and a simple promise: honest fuel, fair measure, and fast service for every driver who pulls in.",
      "Today that promise runs across a growing network of stations on the country's key highways and city corridors — each offering calibrated fuel dispensing, vehicle care, and round-the-clock convenience.",
      "As part of MR Group, we combine decades of logistics and trade expertise with modern forecourt technology to keep raising the standard for what a fuel stop can be.",
    ],
    storyImage: `${IMG}/forecourt.jpg`,
    missionHeading: "Our mission",
    mission:
      "To keep Bangladesh moving with clean, accurately measured fuel and dependable service — delivered safely at every station, every hour of the day.",
    visionHeading: "Our vision",
    vision:
      "A nationwide network where every driver can count on trusted fuel, quick service, and a safe, welcoming stop wherever the road takes them.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Reliability", body: "Open when you need us, with fuel and service you can count on." },
      { title: "Safety", body: "Fire-safe forecourts and trained teams at every single station." },
      { title: "Quality", body: "Purity-tested fuel dispensed at calibrated, accurate volumes." },
      { title: "Service", body: "Fast, friendly help that gets you back on the road quickly." },
    ],
    stats: [
      { value: "10+", label: "Years of service" },
      { value: "50+", label: "Stations nationwide" },
      { value: "1.5M+", label: "Litres dispensed monthly" },
      { value: "24/7", label: "Support & fuelling" },
    ],
  },
  servicesPage: {
    header: {
      eyebrow: "Our Services",
      title: "Full service at every fill-up",
      description:
        "Fuel, servicing, and everyday essentials — everything your vehicle needs, under one canopy.",
      image: `${IMG}/car-refuel.jpg`,
    },
    intro:
      "Whether you're topping up on your commute or running a commercial fleet, every MR station is built to get you back on the road fast.",
  },
  noticePage: {
    header: {
      eyebrow: "Notice Board",
      title: "Notices & announcements",
      description:
        "Fuel price revisions, new station openings, and safety updates from across the MR network.",
      image: `${IMG}/prices.jpg`,
    },
    intro:
      "Stay up to date with the latest from Sattar Filling Station — from price changes to network news.",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "A look at life on the forecourt",
      description:
        "Photos and videos from across the Sattar Filling Station network — stations, services, and the teams that keep Bangladesh moving.",
      image: `${IMG}/canopy.jpg`,
    },
    intro:
      "Step inside any MR station — from fuelling bays and forecourts to servicing and car wash. Toggle between photos and videos to explore.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos available yet.",
    noVideos: "No videos available yet.",
  },
};

const bn: FillingContent = {
  name: "সাত্তার ফিলিং স্টেশন",
  tagline: "সারাদেশের মহাসড়কে পরিচ্ছন্ন ফুয়েল ও দ্রুত সেবা।",
  getInTouch: "যোগাযোগ করুন",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "সেবাসমূহ", href: "/services" },
    { label: "নোটিশ", href: "/notice" },
    { label: "গ্যালারি", href: "/gallery" },
  ],
  hero: {
    brandWord: "MR FILLING",
    headingLead: "শক্তি দিন প্রতিটি",
    headingEmphasis: "যাত্রায়",
    subtext:
      "সাত্তার ফিলিং স্টেশন পরিচ্ছন্ন ফুয়েল, দ্রুত সেবা এবং প্রতিটি প্রধান মহাসড়কে নির্ভরযোগ্য স্টেশনের মাধ্যমে বাংলাদেশকে সচল রাখে।",
    ctaPrimary: "যোগাযোগ করুন",
    ctaSecondary: "আমাদের সেবা",
    image: `${IMG}/hero.jpg`,
    stats: [
      { value: "১০+", label: "বছরের পথচলা" },
      { value: "৫০+", label: "মহাসড়ক স্টেশন" },
      { value: "২৪/৭", label: "সবসময় খোলা" },
    ],
  },
  highlights: {
    eyebrow: "কেন সাত্তার ফিলিং স্টেশন",
    heading:
      "নির্ভরযোগ্যতা, গতি ও সম্পূর্ণ নিশ্চিন্ততার জন্য গড়ে ওঠা একজন ফুয়েল সঙ্গী বেছে নিন।",
    body: "প্রিমিয়াম ফুয়েল থেকে সম্পূর্ণ গাড়ির যত্ন — প্রতিটি এমআর স্টেশন দ্রুত, নিরাপদ ও নির্ভরযোগ্য সেবার জন্য তৈরি, রাস্তা যা-ই চাহিদা রাখুক।",
    cta: "যোগাযোগ করুন",
    cards: [
      {
        value: "৫০+",
        label: "সারাদেশে স্টেশন",
        description:
          "বাংলাদেশের ব্যস্ততম মহাসড়ক ও শহরের করিডোরে ক্রমবর্ধমান নেটওয়ার্ক।",
        image: `${IMG}/highway.jpg`,
      },
      {
        value: "৯৯.৯%",
        label: "পরিমাপের নির্ভুলতা",
        description:
          "প্রতিটি পাম্পে ক্যালিব্রেটেড ডিসপেনসার ও মানসম্পন্ন ফুয়েল, প্রতিবার।",
        image: `${IMG}/canopy.jpg`,
      },
    ],
  },
  services: {
    eyebrow: "আমরা যা দিই",
    heading: "আপনার গাড়ির প্রয়োজনীয় সবকিছু, এক ছাদের নিচে",
    body: "ফুয়েল, সার্ভিসিং ও প্রতিদিনের প্রয়োজনীয় জিনিস — আপনাকে দ্রুত রাস্তায় ফেরাতে তৈরি।",
    items: [
      {
        icon: "fuel",
        name: "ফুয়েল ফিলিং",
        description:
          "অকটেন, পেট্রল ও ডিজেল — ক্যালিব্রেটেড, নির্ভুল পরিমাণে সরবরাহ।",
        image: `${IMG}/car-refuel.jpg`,
      },
      {
        icon: "oil",
        name: "লুব্রিকেন্ট ও অয়েল চেঞ্জ",
        description:
          "সব ধরনের গাড়ির জন্য আসল ইঞ্জিন অয়েল ও দ্রুত অয়েল-চেঞ্জ বে।",
        image: `${IMG}/lubricant.jpg`,
      },
      {
        icon: "spark",
        name: "গাড়ি সার্ভিসিং",
        description:
          "প্রশিক্ষিত কর্মীদের দ্বারা টায়ার, ব্যাটারি ও দ্রুত যান্ত্রিক পরীক্ষা।",
        image: `${IMG}/servicing.jpg`,
      },
      {
        icon: "wash",
        name: "কার ওয়াশ",
        description:
          "আপনার গাড়ি ঝকঝকে রাখতে দ্রুত, পানি-সাশ্রয়ী ওয়াশ বে।",
        image: `${IMG}/carwash.jpg`,
      },
      {
        icon: "store",
        name: "কনভেনিয়েন্স স্টোর",
        description:
          "পথের জন্য স্ন্যাকস, পানীয় ও প্রয়োজনীয় জিনিস, দিনরাত সবসময়।",
        image: `${IMG}/convenience.jpg`,
      },
      {
        icon: "truck",
        name: "ফ্লিট ও বাণিজ্যিক ফুয়েল",
        description:
          "বাণিজ্যিক গাড়ির জন্য বাল্ক ফুয়েলিং, ফ্লিট কার্ড ও অগ্রাধিকার লেন।",
        image: `${IMG}/fleet.jpg`,
      },
    ],
  },
  feature: {
    eyebrow: "পারফরম্যান্সের জন্য প্রকৌশলিত",
    heading:
      "পরিচ্ছন্ন ফুয়েল ও নিরাপদ ফোরকোর্ট, সারাদেশে সর্বোচ্চ মান অনুযায়ী পরীক্ষিত।",
    body: "প্রতিটি লিটার মান-পরীক্ষিত এবং প্রতিটি স্টেশন নিরাপত্তার জন্য তৈরি — তাই দিন হোক বা রাত, আপনি সম্পূর্ণ আস্থায় ফুয়েল নিতে পারেন।",
    image: `${IMG}/pump-closeup.jpg`,
    caption: "আমাদের গড়া প্রতিটি স্টেশনে নির্ভুলতা ও নিরাপত্তা।",
    features: [
      {
        icon: "gauge",
        title: "সনদপ্রাপ্ত মান",
        body: "বিশুদ্ধতার জন্য পরীক্ষিত ফুয়েল, ক্যালিব্রেটেড ও নির্ভুল পরিমাণে সরবরাহ।",
      },
      {
        icon: "shield",
        title: "নিরাপত্তা সর্বাগ্রে",
        body: "প্রতিটি সাইটে অগ্নি-নিরাপদ ফোরকোর্ট, প্রশিক্ষিত কর্মী ও ২৪/৭ মনিটরিং।",
      },
    ],
  },
  process: {
    eyebrow: "কীভাবে কাজ করে (ধাপে ধাপে)",
    heading: "ভেতরে ঢোকা থেকে বেরিয়ে যাওয়া পর্যন্ত, এক সম্পূর্ণ পিট স্টপ।",
    body: "প্রতিটি এমআর স্টেশন মসৃণ ও দ্রুত ভিজিটের জন্য তৈরি — অপেক্ষা ছাড়াই ফুয়েল, যত্ন ও প্রয়োজনীয় জিনিস।",
    image: `${IMG}/car-refuel.jpg`,
    steps: [
      {
        title: "ভেতরে আসুন",
        body: "যেকোনো খালি বে-তে চলে আসুন — আমাদের কর্মীরা আপনাকে স্বাগত জানিয়ে ফুয়েল গ্রেড নিশ্চিত করবেন।",
      },
      {
        title: "ফুয়েল নিন",
        body: "অকটেন, পেট্রল বা ডিজেল বেছে নিন, ক্যালিব্রেটেড ও নির্ভুল পরিমাণে সরবরাহ।",
      },
      {
        title: "বাড়তি সেবা",
        body: "অয়েল টপ-আপ করুন, গাড়ি ধুয়ে নিন বা কনভেনিয়েন্স স্টোর থেকে প্রয়োজনীয় জিনিস নিন।",
      },
      {
        title: "পরিশোধ করে যান",
        body: "কয়েক সেকেন্ডে নগদ বা কার্ডে পরিশোধ করে আবার রাস্তায় ফিরে যান।",
      },
    ],
  },
  notices: {
    eyebrow: "নোটিশ বোর্ড",
    heading: "সর্বশেষ নোটিশ ও আপডেট",
    body: "মূল্য সংশোধন, নতুন স্টেশন ও নিরাপত্তা ঘোষণা — নেটওয়ার্ক জুড়ে।",
    viewMore: "সব নোটিশ দেখুন",
    items: [
      {
        category: "ফুয়েল মূল্য",
        date: "১০ জুলাই, ২০২৬",
        title: "এই সপ্তাহ থেকে সংশোধিত ফুয়েল মূল্য কার্যকর",
        excerpt:
          "হালনাগাদকৃত অকটেন, পেট্রল ও ডিজেলের দর এখন সব স্টেশনে প্রদর্শিত হচ্ছে।",
        image: `${IMG}/prices.jpg`,
      },
      {
        category: "নেটওয়ার্ক",
        date: "২২ জুন, ২০২৬",
        title: "ঢাকা–চট্টগ্রাম রুটে নতুন মহাসড়ক স্টেশন চালু",
        excerpt:
          "আমাদের ৫১তম আউটলেট দক্ষিণ করিডোরে ২৪/৭ ফুয়েল ও সার্ভিসিং নিয়ে এসেছে।",
        image: `${IMG}/notice-1.jpg`,
      },
      {
        category: "নিরাপত্তা",
        date: "০৫ জুন, ২০২৬",
        title: "স্টেশনব্যাপী অগ্নি-নিরাপত্তা মহড়া সম্পন্ন",
        excerpt:
          "সব ফোরকোর্ট দল বার্ষিক জরুরি-সাড়াদান সনদ সম্পন্ন করেছে।",
        image: `${IMG}/notice-3.jpg`,
      },
      {
        category: "সেবা",
        date: "১৮ মে, ২০২৬",
        title: "লুব্রিকেন্ট ও অয়েল-চেঞ্জের সময় বৃদ্ধি",
        excerpt:
          "নির্বাচিত স্টেশনে এখন সপ্তাহে সাত দিন মধ্যরাত পর্যন্ত অয়েল-চেঞ্জ বে খোলা।",
        image: `${IMG}/notice-2.jpg`,
      },
    ],
  },
  cta: {
    heading: "এমআর-এ ফুয়েল নিতে প্রস্তুত?",
    body: "আপনার নিকটতম স্টেশন খুঁজুন অথবা ফ্লিট ও বাণিজ্যিক ফুয়েলের জন্য আমাদের সাথে অংশীদার হোন।",
    button: "যোগাযোগ করুন",
  },
  footer: {
    newsletterHeading: "আপডেট পান",
    emailPlaceholder: "আপনার ইমেইল",
    submitLabel: "জমা দিন",
    consent:
      "আমি সাত্তার ফিলিং স্টেশন থেকে আপডেট পেতে সম্মত। আমি জানি যে আমি যেকোনো সময় সম্মতি প্রত্যাহার করতে পারি।",
    contactHeading: "যোগাযোগ করুন",
    email: "fillingstation@mrgroup.com",
    phone: "+৮৮০ ১XXX-XXXXXX",
    addressHeading: "ঠিকানা",
    address: ["এমআর টাওয়ার, গুলশান এভিনিউ", "ঢাকা ১২১২, বাংলাদেশ"],
    followHeading: "অনুসরণ করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "বাংলাদেশকে সচল রাখছি।",
    legal: "© ২০২৬ সাত্তার ফিলিং স্টেশন, এমআর গ্রুপের একটি প্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের গল্প",
      title: "একবারে একটি যাত্রা করে জাতিকে সচল রাখা",
      description:
        "একটি মহাসড়কের পাম্প থেকে সারাদেশব্যাপী স্টেশনের নেটওয়ার্ক — এই হলো সাত্তার ফিলিং স্টেশনের গল্প।",
      image: `${IMG}/hero.jpg`,
    },
    storyHeading: "যেখান থেকে শুরু",
    storyParagraphs: [
      "সাত্তার ফিলিং স্টেশনের যাত্রা শুরু হয়েছিল একটি ব্যস্ত মহাসড়কের একটিমাত্র পাম্প ও একটি সরল প্রতিশ্রুতি নিয়ে: প্রতিটি চালকের জন্য সৎ ফুয়েল, সঠিক পরিমাপ ও দ্রুত সেবা।",
      "আজ সেই প্রতিশ্রুতি দেশের গুরুত্বপূর্ণ মহাসড়ক ও শহরের করিডোরজুড়ে ক্রমবর্ধমান স্টেশন নেটওয়ার্কে ছড়িয়ে পড়েছে — প্রতিটি স্টেশনে রয়েছে ক্যালিব্রেটেড ফুয়েল সরবরাহ, গাড়ির যত্ন ও সার্বক্ষণিক সুবিধা।",
      "এমআর গ্রুপের অংশ হিসেবে, আমরা কয়েক দশকের লজিস্টিক্স ও বাণিজ্য অভিজ্ঞতার সাথে আধুনিক ফোরকোর্ট প্রযুক্তি মিলিয়ে একটি ফুয়েল স্টপ কেমন হতে পারে তার মান উন্নত করে চলেছি।",
    ],
    storyImage: `${IMG}/forecourt.jpg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "পরিচ্ছন্ন, সঠিকভাবে পরিমাপকৃত ফুয়েল ও নির্ভরযোগ্য সেবা দিয়ে বাংলাদেশকে সচল রাখা — প্রতিটি স্টেশনে, দিনের প্রতিটি ঘণ্টায় নিরাপদে।",
    visionHeading: "আমাদের দৃষ্টিভঙ্গি",
    vision:
      "এমন একটি সারাদেশব্যাপী নেটওয়ার্ক যেখানে প্রতিটি চালক নির্ভরযোগ্য ফুয়েল, দ্রুত সেবা এবং নিরাপদ ও স্বাগতপূর্ণ স্টপের উপর আস্থা রাখতে পারেন, রাস্তা যেখানেই নিয়ে যাক।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "নির্ভরযোগ্যতা", body: "যখন প্রয়োজন তখন খোলা, ফুয়েল ও সেবা যার উপর আস্থা রাখা যায়।" },
      { title: "নিরাপত্তা", body: "প্রতিটি স্টেশনে অগ্নি-নিরাপদ ফোরকোর্ট ও প্রশিক্ষিত দল।" },
      { title: "মান", body: "বিশুদ্ধতা-পরীক্ষিত ফুয়েল, ক্যালিব্রেটেড ও নির্ভুল পরিমাণে সরবরাহ।" },
      { title: "সেবা", body: "দ্রুত, বন্ধুত্বপূর্ণ সহায়তা যা আপনাকে দ্রুত রাস্তায় ফেরায়।" },
    ],
    stats: [
      { value: "১০+", label: "বছরের সেবা" },
      { value: "৫০+", label: "সারাদেশে স্টেশন" },
      { value: "১৫ লাখ+", label: "মাসিক লিটার সরবরাহ" },
      { value: "২৪/৭", label: "সহায়তা ও ফুয়েলিং" },
    ],
  },
  servicesPage: {
    header: {
      eyebrow: "আমাদের সেবা",
      title: "প্রতিটি ফিল-আপে সম্পূর্ণ সেবা",
      description:
        "ফুয়েল, সার্ভিসিং ও প্রতিদিনের প্রয়োজনীয় জিনিস — আপনার গাড়ির প্রয়োজনীয় সবকিছু এক ছাদের নিচে।",
      image: `${IMG}/car-refuel.jpg`,
    },
    intro:
      "আপনি প্রতিদিনের যাত্রায় টপ-আপ করুন বা বাণিজ্যিক ফ্লিট চালান — প্রতিটি এমআর স্টেশন আপনাকে দ্রুত রাস্তায় ফেরাতে তৈরি।",
  },
  noticePage: {
    header: {
      eyebrow: "নোটিশ বোর্ড",
      title: "নোটিশ ও ঘোষণা",
      description:
        "ফুয়েল মূল্য সংশোধন, নতুন স্টেশন উদ্বোধন ও নিরাপত্তা আপডেট — এমআর নেটওয়ার্ক জুড়ে।",
      image: `${IMG}/prices.jpg`,
    },
    intro:
      "সাত্তার ফিলিং স্টেশনের সর্বশেষ খবরের সাথে আপডেট থাকুন — মূল্য পরিবর্তন থেকে নেটওয়ার্ক সংবাদ পর্যন্ত।",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "ফোরকোর্টে জীবনের এক ঝলক",
      description:
        "সাত্তার ফিলিং স্টেশন নেটওয়ার্ক জুড়ে ছবি ও ভিডিও — স্টেশন, সেবা এবং বাংলাদেশকে সচল রাখা দলসমূহ।",
      image: `${IMG}/canopy.jpg`,
    },
    intro:
      "যেকোনো এমআর স্টেশনে প্রবেশ করুন — ফুয়েলিং বে ও ফোরকোর্ট থেকে সার্ভিসিং ও কার ওয়াশ পর্যন্ত। ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজে দেখুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
};

export const fillingStationContent: Record<AppLocale, FillingContent> = { en, bn };
