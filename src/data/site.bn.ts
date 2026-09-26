import type { SiteConfig } from "@/types/content";

export const siteConfigBn: SiteConfig = {
  groupName: "FHS Enterprise",
  tagline: "Building industries. Empowering communities.",

  nav: [
    { label: "হোম", href: "/" },
    {
      label: "আমাদের সম্পর্কে",
      href: "/about",
      children: [
        { label: "ইতিহাস", href: "/about/history" },
        { label: "প্রোপাইটর সম্পর্কে", href: "/about/founder" },
        { label: "লক্ষ্য ও উদ্দেশ্য", href: "/about/mission-vision" },
        { label: "মাইলফলক", href: "/about/milestones" },
        { label: "সুবিধাসমূহ", href: "/about/facilities" },
        { label: "সাধারণ জিজ্ঞাসা", href: "/about/faq" },
      ],
    },
    { label: "আমাদের প্রতিষ্ঠানসমূহ", href: "/companies" },
    {
      label: "মিডিয়া",
      href: "/media",
      children: [
        { label: "সংবাদ", href: "/media/news" },
        { label: "ইভেন্ট", href: "/media/events" },
        { label: "গ্যালারি", href: "/media/gallery" },
      ],
    },
    {
      label: "টেকসই উন্নয়ন",
      href: "/sustainability",
      children: [
        { label: "স্বাস্থ্য", href: "/sustainability/health" },
        { label: "শিক্ষা", href: "/sustainability/education" },
        {
          label: "উন্নয়ন",
          href: "/sustainability/community-development",
        },
        { label: "পরিবেশ", href: "/sustainability/environment" },
      ],
    },
  ],

  hero: [
    {
      title: "FHS Enterprise এ স্বাগতম",
      subtitle: "Driven by innovation and a commitment to quality.",
      videoSrc: "/videos/bd-agro-1.mp4",
    }
  ],

  about: {
    title: "FHS Enterprise সম্পর্কে",
    description: "FHS Enterprise is a growing conglomerate spanning multiple sectors...",
    points: [
      "Industry leadership",
      "Diversified sectors",
      "Dedicated employees",
      "Trusted products",
    ],
  },

  aboutPages: {
    history: {
      title: "আমাদের ইতিহাস",
      paragraphs: [
        "FHS Enterprise started with a simple focus to provide the best services in our region.",
        "Over time, we have expanded our operations to meet the growing demands of our customers.",
      ],
    },

    founder: {
      name: "ফখরুল হাসান সুতন",
      title: "প্রোপাইটর, FHS Enterprise",
      image: "/images/gallery/suton.jpeg",
      quote: "We strive for excellence in everything we do.",
      bio: [
        "Fakhrul Hasan Suton is the visionary Proprietor of FHS Enterprise.",
        "Under his leadership, FHS Enterprise has grown and diversified into new sectors.",
      ],
      achievements: [
        { label: "Years of Experience", value: "10+" },
      ],
    },

    missionVision: {
      mission: "To improve everyday life by delivering quality products and services.",
      vision: "To be the most trusted diversified enterprise.",
      values: ["Quality First", "Integrity", "Innovation", "Community Impact", "Sustainability"],
    },
    milestones: [
      {
        year: "2020",
        title: "Founded",
        description: "FHS Enterprise established.",
      }
    ],
    facilities: [],
    faqs: [],
  },

  companies: [
    {
      name: "মেসার্স বাংলাদেশ অটো রাইস মিল",
      sector: "রাইস মিল",
      description: "Processing and distributing high-quality rice.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/agro-banner.png",
      subdomain: "auto-rice-mill",
    },
    {
      name: "ভেহিকেল সলিউশনস",
      sector: "Automotive Services",
      description: "Vehicle parts, repairing, tyre, lubricant, and accessories.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/mr-lube-banner.svg",
      subdomain: "vehicle-solutions",
    },
    {
      name: "ডেইলি বাজার",
      sector: "Ecommerce",
      description: "Online ecommerce shop for all kinds of bazar goods.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/feed.jpg",
      subdomain: "daily-bazar.fhsenterprise.com",
    },
  ],

  productCategories: [],
  stats: [],
  news: [],
  mediaPages: {
    events: [],
    galleryPhotos: [],
    galleryVideos: [],
  },
  sustainabilityPages: {
    overviewDescription: "Sustainability at FHS Enterprise.",
    pillars: [],
  },

  contact: {
    title: "যোগাযোগ করুন",
    description: "Have a question? We'd love to hear from you.",
    address: "ফুলবাড়িয়া, ময়মনসিংহ",
    email: "info@fhsenterprise.com",
    phone: "+880 123456789",
  },

  socials: [
    { label: "Facebook", href: "#" },
  ],
};
