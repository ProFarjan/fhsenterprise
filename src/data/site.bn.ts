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
      title: "এফএইচএস এন্টারপ্রাইজে স্বাগতম",
      subtitle: "মানসম্মত সেবার দৃঢ় প্রতিশ্রুতি নিয়ে বিভিন্ন সেক্টরে একটি টেকসই ভবিষ্যৎ নির্মাণ।",
      videoSrc: "/videos/bd-agro-1.mp4",
    },
    {
      title: "মেসার্স বাংলাদেশ অটো রাইস মিল",
      subtitle: "প্রিমিয়াম মানের কৃষি পণ্য সরবরাহ এবং জাতির পুষ্টি নিশ্চিতকরণ।",
      videoSrc: "/videos/bd-agro-1.mp4",
    },
    {
      title: "ভেহিকেল সলিউশনস",
      subtitle: "নির্ভরযোগ্য অটোমোটিভ পার্টস, মেরামত এবং বিশেষজ্ঞ সেবার মাধ্যমে আপনাকে এগিয়ে রাখা।",
      videoSrc: "/videos/bd-agro-1.mp4",
    },
    {
      title: "ডেইলি বাজার",
      subtitle: "তাজা, দ্রুত এবং নির্ভরযোগ্য দৈনন্দিন প্রয়োজন ও মুদি পণ্যের জন্য আপনার বিশ্বস্ত অনলাইন শপ।",
      videoSrc: "/videos/bd-agro-1.mp4",
    }
  ],

  about: {
    title: "এফএইচএস এন্টারপ্রাইজ সম্পর্কে",
    description: "এফএইচএস এন্টারপ্রাইজ ময়মনসিংহের ফুলবাড়িয়ায় অবস্থিত একটি দ্রুত বর্ধনশীল গ্রুপ অব কোম্পানিজ। প্রিমিয়াম কৃষি প্রক্রিয়াকরণ, উন্নত অটোমোটিভ সলিউশন এবং আধুনিক ডিজিটাল ই-কমার্স জুড়ে একটি বৈচিত্র্যময় পোর্টফোলিও নিয়ে, আমরা মান, সম্প্রদায়ের ক্ষমতায়ন এবং টেকসই প্রবৃদ্ধির অভিন্ন প্রতিশ্রুতি দ্বারা ঐক্যবদ্ধ।",
    points: [
      "শিল্প-নেতৃস্থানীয় কৃষি প্রক্রিয়াকরণ",
      "নির্ভরযোগ্য অটোমোটিভ পার্টস ও সলিউশন",
      "দ্রুত এবং তাজা ডিজিটাল ই-কমার্স",
      "কমিউনিটি উন্নয়নে প্রতিশ্রুতিবদ্ধ",
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
        year: "২০১০",
        title: "সূচনা",
        description: "এফএইচএস এন্টারপ্রাইজ স্থানীয় সম্প্রদায়ের কাছে মানসম্মত পণ্য এবং সেবা সরবরাহের দৃঢ় প্রতিশ্রুতি নিয়ে তার যাত্রা শুরু করে।",
      },
      {
        year: "২০১৫",
        title: "কার্যক্রম সম্প্রসারণ",
        description: "আমাদের অপারেশনাল সক্ষমতা প্রসারিত হয় এবং আধুনিক ব্যবসার বৈচিত্র্যময় পোর্টফোলিওর ভিত্তি স্থাপিত হয়।",
      },
      {
        year: "২০২০",
        title: "নতুন উদ্যোগ",
        description: "অফিসিয়ালি এফএইচএস এন্টারপ্রাইজ হিসাবে একত্রিত হয় এবং স্বয়ংচালিত সমাধান এবং ই-কমার্সে উত্তেজনাপূর্ণ নতুন উদ্যোগ চালু করে।",
      },
      {
        year: "২০২৪",
        title: "মার্কেট লিডারশিপ",
        description: "কৃষি, লজিস্টিকস এবং ডিজিটাল খুচরা পরিষেবা জুড়ে অঞ্চলে একটি শীর্ষস্থানীয় এবং বিশ্বস্ত নাম হিসাবে প্রতিষ্ঠিত।",
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

  productCategories: [
    {
      name: "প্রিমিয়াম রাইস ও কৃষি",
      company: "মেসার্স বাংলাদেশ অটো রাইস মিল",
      subdomain: "auto-rice-mill",
      items: ["সিদ্ধ চাল", "প্রিমিয়াম রাইস", "সুগন্ধি চাল"],
      icon: "grain",
    },
    {
      name: "অটোমোটিভ পার্টস ও লুব্রিকেন্ট",
      company: "ভেহিকেল সলিউশনস",
      subdomain: "vehicle-solutions",
      items: ["খুচরা যন্ত্রাংশ", "লুব্রিকেন্ট", "অ্যাক্সেসরিজ"],
      icon: "cog",
    },
    {
      name: "ডেইলি বাজার ও মুদি",
      company: "ডেইলি বাজার",
      subdomain: "daily-bazar.fhsenterprise.com",
      items: ["তাজা পণ্য", "দৈনন্দিন প্রয়োজন", "মুদি"],
      icon: "leaf",
    },
  ],
  stats: [
    { label: "বছরের অভিজ্ঞতা", value: "১০+", icon: "calendar" },
    { label: "ব্যবসায়িক প্রতিষ্ঠান", value: "৩", icon: "building" },
    { label: "সন্তুষ্ট গ্রাহক", value: "৫০০+", icon: "users" },
    { label: "ডেডিকেটেড সাপোর্ট", value: "২৪/৭", icon: "map-pin" },
  ],
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
