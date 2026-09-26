import type { SiteConfig } from "@/types/content";

export const siteConfigEn: SiteConfig = {
  groupName: "FHS Enterprise",
  tagline: "Building industries. Empowering communities.",

  nav: [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "History", href: "/about/history" },
        { label: "About Proprietor", href: "/about/founder" },
        { label: "Mission & Vision", href: "/about/mission-vision" },
        { label: "Milestones", href: "/about/milestones" },
        { label: "Facilities", href: "/about/facilities" },
        { label: "FAQ", href: "/about/faq" },
      ],
    },
    { label: "Our Concerns", href: "/companies" },
    {
      label: "Media Center",
      href: "/media",
      children: [
        { label: "News", href: "/media/news" },
        { label: "Events", href: "/media/events" },
        { label: "Gallery", href: "/media/gallery" },
      ],
    },
    {
      label: "Sustainability",
      href: "/sustainability",
      children: [
        { label: "Health", href: "/sustainability/health" },
        { label: "Education", href: "/sustainability/education" },
        {
          label: "Community Development",
          href: "/sustainability/community-development",
        },
        { label: "Environment", href: "/sustainability/environment" },
      ],
    },
  ],

  hero: [
    {
      title: "Welcome to FHS Enterprise",
      subtitle: "Driven by innovation and a commitment to quality.",
      videoSrc: "/videos/bd-agro-1.mp4",
    }
  ],

  about: {
    title: "About FHS Enterprise",
    description: "FHS Enterprise is a growing conglomerate spanning multiple sectors, united by a shared commitment to quality, innovation, and sustainable growth.",
    points: [
      "Industry leadership",
      "Diversified sectors",
      "Dedicated employees",
      "Trusted products",
    ],
  },

  aboutPages: {
    history: {
      title: "Our History",
      paragraphs: [
        "FHS Enterprise started with a simple focus to provide the best services in our region.",
        "Over time, we have expanded our operations to meet the growing demands of our customers.",
      ],
    },

    founder: {
      name: "Fakhrul Hasan Suton",
      title: "Proprietor, FHS Enterprise",
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
      name: "M/s. Bangladesh Auto Rice Mill",
      sector: "Rice Mill",
      description: "Processing and distributing high-quality rice.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/agro-banner.png",
      subdomain: "auto-rice-mill",
    },
    {
      name: "Vehicle Solutions",
      sector: "Automotive Services",
      description: "Vehicle parts, repairing, tyre, lubricant, and accessories.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/mr-lube-banner.svg",
      subdomain: "vehicle-solutions",
    },
    {
      name: "Daily Bazar",
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
    title: "Get in Touch",
    description: "Have a question? We'd love to hear from you.",
    address: "Fulbariya, Mymensingh",
    email: "info@fhsenterprise.com",
    phone: "+880 123456789",
  },

  socials: [
    { label: "Facebook", href: "#" },
  ],
};
