import type { SiteConfig } from "@/types/content";
import { ORGANIZATION } from "./organization";

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
      videoSrc: "/videos/Auto_rice_mill_operation.mp4",
      poster: "/images/companies/rice-mill-bg.jpg",
    },
    {
      title: "Vehicle Solutions",
      subtitle: "Keeping you moving with dependable automotive parts, tyre servicing, lubricant supply, and expert vehicle repairs.",
      videoSrc: "/videos/vehicle_solution.mp4",
      poster: "/images/companies/vehicle-solutions-bg.jpg",
    },
    {
      title: "Daily Bazar — Modern Super Shop",
      subtitle: "Your premier destination for fresh groceries, premium household essentials, and seamless online shopping with fast doorstep delivery.",
      videoSrc: "/videos/daily_bazar.mp4",
      poster: "/images/companies/daily-bazar-bg.jpg",
    },
  ],

  about: {
    title: "About FHS Enterprise",
    description: "FHS Enterprise is a progressive, multi-disciplinary conglomerate headquartered in Fulbariya, Mymensingh. With established market leadership across automated agro-industrial rice processing, dependable automotive engineering and spare parts distribution, and modern e-commerce super shop services, we are united by an unshakeable commitment to superior product quality, sustainable regional growth, and uplifting our local communities.",
    points: [
      "Pioneering Automated Agro & Rice Processing Excellence",
      "Full-Spectrum Automotive Spares, Tyres & Repair Solutions",
      "Modern Super Shop Convenience & Doorstep Delivery",
      "Empowering Local Communities with Sustainable Employment",
    ],
  },

  aboutPages: {
    history: {
      title: "Our History & Journey",
      paragraphs: [
        "FHS Enterprise began its journey in Fulbariya, Mymensingh, driven by a foundational vision: to build reliable, high-integrity enterprises that serve the core needs of local families, farmers, and regional commerce. From humble beginnings, our focus was firmly anchored on delivering uncompromised quality and cultivating enduring trust.",
        "Recognizing Bangladesh's vital need for clean, modern staple food processing, the group made its first landmark agro-industrial investment by establishing M/s. Bangladesh Auto Rice Mill under the visionary leadership of Md. Saiful Islam Bulbul and Fakhrul Hasan Suton. By installing computerized grain sorting, destoning, and automated parboiling technologies, we set a regional benchmark for hygienic, premium-grade rice production.",
        "As commercial transport and agricultural mechanization rapidly grew across the Mymensingh region, FHS Enterprise expanded into the automotive sector with the launch of Vehicle Solutions. Specializing in genuine automotive replacement parts, heavy-duty tyres, certified lubricants, and professional mechanical diagnostics, Vehicle Solutions quickly became the go-to maintenance hub for transport fleets, private motorists, and agricultural machinery operators.",
        "Embracing digital innovation and modern consumer expectations, FHS Enterprise subsequently introduced Daily Bazar — a contemporary super shop platform offering fresh produce, daily groceries, and essential household goods with swift doorstep delivery. Today, FHS Enterprise stands as a diversified, forward-looking enterprise, proud of its local heritage in Fulbariya and relentlessly dedicated to empowering lives across the nation.",
      ],
    },

    founder: {
      name: "Fakhrul Hasan Suton",
      title: "Proprietor, FHS Enterprise",
      image: "/images/gallery/suton.jpeg",
      quote: "True business success is measured not merely by commercial turnover, but by the trust we earn every day, the quality of sustenance we deliver, and the positive impact we create for the families of Fulbariya and beyond.",
      bio: [
        "Fakhrul Hasan Suton is the visionary Proprietor and driving force behind FHS Enterprise. Born and raised in Fulbariya, Mymensingh, he envisioned a dynamic enterprise capable of bridging traditional agricultural strengths with modern technology and customer-first business ethics.",
        "Under his strategic stewardship, FHS Enterprise has evolved into a robust multi-sector powerhouse — spearheading innovations across automated rice processing, specialized automotive care and spares distribution, and modern e-commerce retail. His leadership combines hands-on operational discipline with long-term strategic investments.",
        "Beyond business expansion, Fakhrul Hasan Suton is deeply invested in social empowerment, creating stable employment for local workers, championing ethical trade practices, and actively supporting regional educational and community development initiatives in Fulbariya.",
      ],
      achievements: [
        { label: "Years of Leadership", value: "10+" },
        { label: "Core Enterprise Sectors", value: "3" },
        { label: "Dedicated Team Members", value: "100+" },
        { label: "Satisfied Customers & Partners", value: "50,000+" },
      ],
      concernLeaders: [
        {
          name: "Md. Saiful Islam Bulbul",
          title: "Founder & Director",
          company: "M/s. Bangladesh Auto Rice Mill",
          image: "/images/gallery/bulbul.jpeg",
          quote: "Modernizing Bangladesh's agricultural processing with pure, hygienic, and automated technologies has been our lifelong dedication to the farmers and families of our nation.",
          bio: [
            "Md. Saiful Islam Bulbul is the esteemed Founder and Director of M/s. Bangladesh Auto Rice Mill, the premier agricultural concern of FHS Enterprise. With hands-on expertise in the grain and agro-industrial sector, he pioneered large-scale automated milling in Fulbariya.",
            "His technical vision and commitment to uncompromised food safety have positioned the mill as a cornerstone of regional food security, supporting local paddy farmers and supplying premium rice to markets.",
          ],
        },
      ],
    },

    missionVision: {
      mission: "To deliver unmatched quality and reliable value across agricultural processing, automotive engineering, and consumer retail by deploying modern technologies, maintaining the highest ethical standards, and fostering sustainable community growth in Fulbariya and across Bangladesh.",
      vision: "To be recognized as Bangladesh's most trusted, innovative, and socially impactful regional conglomerate — empowering local farmers, transport networks, and everyday consumers through excellence in every enterprise we build.",
      values: [
        "Uncompromising Quality & Hygiene",
        "Integrity & Transparent Dealings",
        "Customer-First Commitment",
        "Technological Innovation & Automation",
        "Community Upliftment & Local Employment",
        "Environmental Stewardship & Sustainability",
      ],
    },

    milestones: [
      {
        year: "2014",
        title: "The Entrepreneurial Genesis",
        description: "FHS Enterprise commenced operations in Fulbariya, Mymensingh, establishing commercial trading and retail services built on integrity and deep community ties.",
      },
      {
        year: "2017",
        title: "Launch of Bangladesh Auto Rice Mill",
        description: "Commissioned a state-of-the-art automated rice processing plant with computerized sorting, steam parboiling, and multi-stage grain polishing.",
      },
      {
        year: "2020",
        title: "Establishment of Vehicle Solutions",
        description: "Expanded into the automotive and transport sector, opening a specialized workshop, tyre center, and certified lubricant distribution facility.",
      },
      {
        year: "2022",
        title: "Consolidation of FHS Enterprise",
        description: "Unified agricultural processing, automotive care, and commercial logistics under the centralized FHS Enterprise corporate identity with upgraded governance.",
      },
      {
        year: "2024",
        title: "Introduction of Daily Bazar Super Shop",
        description: "Launched Daily Bazar, integrating modern super shop retail with digital e-commerce and fast doorstep grocery delivery across Fulbariya.",
      },
      {
        year: "2026",
        title: "Digital Scaling & Sustainable Infrastructure",
        description: "Accelerating green energy adoption, expanded logistics fleets, automated inventory management, and wider regional supply chain networks.",
      },
    ],

    facilities: [
      {
        name: "M/s. Bangladesh Auto Rice Mill Complex",
        location: "Fulbariya, Mymensingh",
        description: "Advanced industrial milling campus featuring computerized sorting, mechanical paddy dryers, multi-stage destoners, and hygienic airtight packaging lines operating under rigorous quality control.",
        image: "/images/facilities/rice-mill-plant.jpg",
        capacity: "120+ MT Daily Production",
      },
      {
        name: "Vehicle Solutions Diagnostic & Workshop Center",
        location: "Fulbariya, Mymensingh",
        description: "Full-service automotive facility equipped with computer diagnostics, hydraulic lifts, precision wheel alignment, tyre changing equipment, and a certified genuine parts warehouse.",
        image: "/images/companies/vehicle-solutions-bg.jpg",
        capacity: "50+ Vehicles Serviced Daily",
      },
      {
        name: "Daily Bazar Central Fulfillment & Cold Chain Hub",
        location: "Fulbariya, Mymensingh",
        description: "Modern retail fulfillment hub with temperature-managed fresh produce chambers, barcode-managed grocery sorting aisles, and a dedicated rapid home delivery dispatch unit.",
        image: "/images/companies/daily-bazar-bg.jpg",
        capacity: "1,000+ Daily Orders Processed",
      },
    ],

    faqs: [
      {
        question: "What companies and businesses operate under FHS Enterprise?",
        answer: "FHS Enterprise operates three core subsidiaries: (1) M/s. Bangladesh Auto Rice Mill, specializing in automated paddy processing and premium rice distribution; (2) Vehicle Solutions, providing genuine automotive spare parts, tyres, lubricants, and repair services; and (3) Daily Bazar, an integrated modern super shop and digital grocery delivery service.",
      },
      {
        question: "Where is FHS Enterprise based, and what areas do you serve?",
        answer: "Our corporate headquarters and primary operational facilities are located in Fulbariya, Mymensingh, Bangladesh. While our automotive and retail services deeply cater to the greater Mymensingh region, our rice processing output and distribution networks supply markets across Bangladesh.",
      },
      {
        question: "What makes M/s. Bangladesh Auto Rice Mill products superior in quality?",
        answer: "M/s. Bangladesh Auto Rice Mill processes rice in an automated, hygienic mill in Fulbariya. Our range includes parboiled, premium and aromatic rice.",
      },
      {
        question: "What services and products are available at Vehicle Solutions?",
        answer: "Vehicle Solutions supplies vehicle parts, tyres, lubricants and accessories, and offers vehicle repairing services.",
      },
      {
        question: "How does Daily Bazar work for retail customers and home delivery?",
        answer: "Daily Bazar is our modern super shop and online store for everyday goods, including fresh produce, daily needs and groceries. You can shop online at dailybazar.fhsenterprise.com.",
      },
      {
        question: "How can distributors, businesses, or partners collaborate with FHS Enterprise?",
        answer: "We warmly welcome wholesale grain buyers, automotive supply partners, and corporate clients. You can reach out directly via our website contact form, email us, or visit our central corporate office in Fulbariya, Mymensingh.",
      },
    ],
  },

  companies: [
    {
      name: "M/s. Bangladesh Auto Rice Mill",
      sector: "Rice Mill",
      description: "Processing and distributing high-quality rice.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/rice-mill-bg.jpg",
      subdomain: "auto-rice-mill",
    },
    {
      name: "Vehicle Solutions",
      sector: "Automotive Services",
      description: "Vehicle parts, repairing, tyre, lubricant, and accessories.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/vehicle-solutions-bg.jpg",
      subdomain: "vehiclesolutions.fhsenterprise.com",
    },
    {
      name: "Daily Bazar",
      sector: "Ecommerce",
      description: "Online ecommerce shop for all kinds of bazar goods.",
      logo: "/logos/fhs_logo.png",
      image: "/images/companies/daily-bazar-bg.jpg",
      subdomain: "dailybazar.fhsenterprise.com",
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
      subdomain: "vehiclesolutions.fhsenterprise.com",
      items: ["Spare Parts", "Lubricants", "Accessories"],
      icon: "cog",
    },
    {
      name: "Daily Bazar & Groceries",
      company: "Daily Bazar",
      subdomain: "dailybazar.fhsenterprise.com",
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
        image: "/images/companies/rice-mill-bg.jpg",
        height: 600,
      },
      {
        caption: "M/s. Bangladesh Auto Rice Mill — Processing Tower",
        image: "/images/facilities/rice-mill-processing.jpg",
        height: 600,
      },
      {
        caption: "M/s. Bangladesh Auto Rice Mill — Silos & Storage",
        image: "/images/facilities/rice-mill-silos.jpg",
        height: 600,
      },
      {
        caption: "M/s. Bangladesh Auto Rice Mill — Mill Campus, Fulbariya",
        image: "/images/facilities/rice-mill-machinery.jpg",
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
        image: "/images/companies/vehicle-solutions-bg.jpg",
        height: 600,
      },
      {
        caption: "Daily Bazar — Fresh Grocery Supply Chain & Delivery Center",
        image: "/images/companies/daily-bazar-bg.jpg",
        height: 600,
      },
    ],
    galleryVideos: [
      {
        title: "M/s. Bangladesh Auto Rice Mill — Automated Processing & Quality Packaging",
        thumbnail: "/images/companies/rice-mill-bg.jpg",
        videoUrl: "/videos/Auto_rice_mill_operation.mp4",
        description: "An inside look at our state-of-the-art automated rice mill in Fulbariya, Mymensingh, ensuring hygienic processing and premium quality grain.",
      },
      {
        title: "Vehicle Solutions — Commercial Fleet Care, Tyres & Lubricant Services",
        thumbnail: "/images/companies/vehicle-solutions-bg.jpg",
        videoUrl: "/videos/vehicle_solution.mp4",
        description: "Comprehensive vehicle maintenance, genuine parts, tyre servicing, and industrial lubricants keeping the region moving.",
      },
      {
        title: "Daily Bazar — Modern Super Shop & Express Online Delivery",
        thumbnail: "/images/companies/daily-bazar-bg.jpg",
        videoUrl: "/videos/daily_bazar.mp4",
        description: "Explore our modern super shop experience with fully stocked aisles of fresh vegetables, packaged groceries, and doorstep delivery via dailybazar.fhsenterprise.com.",
      },
    ],
  },
  sustainabilityPages: {
    overviewDescription: "Sustainability at FHS Enterprise.",
    // One entry per page under /sustainability/<slug>. A pillar with no entry here
    // has no page: its route 404s and it is dropped from the menu, tabs and
    // sitemap (see src/data/site.ts), so adding an entry is all it takes to
    // publish one. Allowed slugs: "health" | "education" | "community-development"
    // | "environment". Keep site.bn.ts in sync.
    //
    // {
    //   slug: "health",
    //   icon: "heart", // "heart" | "book" | "users" | "leaf"
    //   title: "...",
    //   summary: "One sentence shown on the overview card and page banner.",
    //   description: "Paragraph shown under the banner.",
    //   image: "/images/sustainability/health.jpg",
    //   stats: [{ label: "...", value: "..." }],           // 3 recommended
    //   initiatives: [{ title: "...", description: "..." }], // 3 recommended
    // },
    pillars: [],
  },

  contact: {
    title: "Get in Touch",
    description: "Have a question? We'd love to hear from you.",
    address: "Fulbariya, Mymensingh",
    email: ORGANIZATION.email,
    phone: ORGANIZATION.phone,
  },

  socials: [
    { label: "Facebook", href: "#" },
  ],
};
