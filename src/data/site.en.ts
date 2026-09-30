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
      title: "M/s. Bangladesh Auto Rice Mill",
      subtitle: "Industry-leading automated rice milling, hygienic grain processing, and premium food supply feeding the nation.",
      videoSrc: "/videos/rice-mill.mp4",
    },
    {
      title: "Vehicle Solutions",
      subtitle: "Keeping you moving with dependable automotive parts, tyre servicing, lubricant supply, and expert vehicle repairs.",
      videoSrc: "/videos/vehicle-solutions.mp4",
    },
    {
      title: "Daily Bazar — Modern Super Shop",
      subtitle: "Your premier destination for fresh groceries, premium household essentials, and seamless online shopping with fast doorstep delivery.",
      videoSrc: "/videos/daily-bazar.mp4",
    },
  ],

  about: {
    title: "About FHS Enterprise",
    description: "FHS Enterprise is a rapidly growing conglomerate located in Fulbariya, Mymensingh. With a diverse portfolio spanning premium agricultural processing, advanced automotive solutions, and modern digital e-commerce, we are united by a shared commitment to quality, community empowerment, and sustainable growth.",
    points: [
      "Industry-leading agricultural processing",
      "Reliable automotive parts & solutions",
      "Fast and fresh digital e-commerce",
      "Commitment to community development",
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
        year: "2010",
        title: "The Beginning",
        description: "FHS Enterprise started its journey with a strong commitment to delivering quality products and services to the local community.",
      },
      {
        year: "2015",
        title: "Operations Expanded",
        description: "Expanded our operational capacity and laid the groundwork for a diverse portfolio of modern businesses.",
      },
      {
        year: "2020",
        title: "New Ventures",
        description: "Officially consolidated as FHS Enterprise, launching exciting new ventures in automotive solutions and e-commerce.",
      },
      {
        year: "2024",
        title: "Market Leadership",
        description: "Established as a leading and trusted name in the region across agriculture, logistics, and digital retail services.",
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

  productCategories: [
    {
      name: "Premium Rice & Agriculture",
      company: "M/s. Bangladesh Auto Rice Mill",
      subdomain: "auto-rice-mill",
      items: ["Parboiled Rice", "Premium Rice", "Aromatic Rice"],
      icon: "grain",
    },
    {
      name: "Automotive Parts & Lubricants",
      company: "Vehicle Solutions",
      subdomain: "vehicle-solutions",
      items: ["Spare Parts", "Lubricants", "Accessories"],
      icon: "cog",
    },
    {
      name: "Daily Bazar & Groceries",
      company: "Daily Bazar",
      subdomain: "daily-bazar.fhsenterprise.com",
      items: ["Fresh Produce", "Daily Needs", "Groceries"],
      icon: "leaf",
    },
  ],
  stats: [
    { label: "Years of Excellence", value: "10+", icon: "calendar" },
    { label: "Business Concerns", value: "3", icon: "building" },
    { label: "Happy Customers", value: "500+", icon: "users" },
    { label: "Dedicated Support", value: "24/7", icon: "map-pin" },
  ],
  news: [],
  mediaPages: {
    events: [],
    galleryPhotos: [
      {
        caption: "M/s. Bangladesh Auto Rice Mill — Modern Automated Milling Facility",
        image: "/images/gallery/harvest.jpg",
        height: 600,
      },
      {
        caption: "Founder Md. Saiful Islam Bulbul inspecting grain processing quality",
        image: "/images/gallery/bulbul.jpeg",
        height: 600,
      },
      {
        caption: "Fakhrul Hasan Suton, Proprietor of FHS Enterprise",
        image: "/images/gallery/suton.jpeg",
        height: 600,
      },
      {
        caption: "FHS Enterprise Headquarters & Industrial Complex",
        image: "/images/gallery/fhs_history.jpg",
        height: 600,
      },
      {
        caption: "Vehicle Solutions — Transport Fleet & Automotive Hub",
        image: "/images/gallery/distribution.jpg",
        height: 600,
      },
      {
        caption: "Daily Bazar — Fresh Grocery Supply Chain & Delivery Center",
        image: "/images/gallery/product.jpg",
        height: 600,
      },
    ],
    galleryVideos: [
      {
        title: "M/s. Bangladesh Auto Rice Mill — Automated Processing & Quality Packaging",
        thumbnail: "/images/gallery/harvest.jpg",
        videoUrl: "/videos/rice-mill.mp4",
        description: "An inside look at our state-of-the-art automated rice mill in Fulbariya, Mymensingh, ensuring hygienic processing and premium quality grain.",
      },
      {
        title: "Vehicle Solutions — Commercial Fleet Care, Tyres & Lubricant Services",
        thumbnail: "/images/gallery/distribution.jpg",
        videoUrl: "/videos/vehicle-solutions.mp4",
        description: "Comprehensive vehicle maintenance, genuine parts, tyre servicing, and industrial lubricants keeping the region moving.",
      },
      {
        title: "Daily Bazar — Modern Super Shop & Express Online Delivery",
        thumbnail: "/images/gallery/product.jpg",
        videoUrl: "/videos/daily-bazar.mp4",
        description: "Explore our modern super shop experience with fully stocked aisles of fresh vegetables, packaged groceries, and doorstep delivery via daily-bazar.fhsenterprise.com.",
      },
    ],
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
