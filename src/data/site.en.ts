import type { SiteConfig } from "@/types/content";

// English content tree. See src/data/site.ts for the locale loader — when
// the admin panel is built later, getSiteConfig() can be replaced by a
// function that fetches the same `SiteConfig` shape from MySQL via Prisma
// (see src/lib/prisma.ts), without needing to change any components.
export const siteConfigEn: SiteConfig = {
  groupName: "MR Group",
  tagline: "Building industries. Empowering communities.",

  nav: [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "History", href: "/about/history" },
        { label: "About Founder", href: "/about/founder" },
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

  // Add more slides here as more hero videos become available — each
  // slide gets its own title/subtitle, the video carousel (dots + arrows)
  // appears automatically once there's more than one.
  hero: [
    {
      title: "One Group, Many Industries",
      subtitle:
        "MR Group is a diversified conglomerate spanning food & beverage, plastics, textiles, and consumer goods — driven by innovation and a commitment to quality across every business we run.",
      videoSrc: "/videos/bd-agro-1.mp4",
    },
    {
      title: "Powering the Nation",
      subtitle: "Providing reliable energy and agricultural solutions to communities across Bangladesh.",
      videoSrc: "/videos/bd-agro-2.mp4",
    },
    {
      title: "Sustainable Growth",
      subtitle: "Committed to environmentally friendly practices and long-term sustainability.",
      videoSrc: "/videos/bd-agro-3.mp4",
    },
    {
      title: "Innovation in Agriculture",
      subtitle: "Delivering safer, more effective crop protection solutions to farmers nationwide.",
      videoSrc: "/videos/bd-agro-4.mp4",
    },
  ],

  about: {
    title: "About MR Group",
    description:
      "For nearly decades, MR Group has grown from a single manufacturing unit into one of the region's most trusted industrial conglomerates. Our portfolio of companies spans multiple sectors, united by a shared commitment to quality, innovation, and sustainable growth.",
    points: [
      "20+ years of industry leadership",
      "Diversified across 8 major sectors",
      "Thousands of employees nationwide",
      "Products trusted in millions of households",
    ],
  },

  aboutPages: {
    history: {
      title: "Our History",
      paragraphs: [
        "MR Group started in 2006 with a simple focus: supporting the farmers of Mymensingh with the inputs they could rely on. Our first venture, Rabeya Hossain Agro Farm, was built around sustainable crop and livestock production — a hands-on business that put us close to the land and the people working it.",
        "That closeness shaped everything that followed. We saw the same farmers who needed good produce also needed dependable feed, crop protection, and fuel — so we built MR Feed and MR Chemical to supply scientifically formulated animal feed and agro-medicine, and opened Sattar Filling Station to keep the region moving. From there, the group grew into the machinery and systems modern farming depends on through MR Agri Technology, and into the industrial side of the same supply chain with MR Lube, and LPG and ammonia gas distribution through Mahin Enterprise and Rahim Enterprise.",
        "In under a decade, that single agro farm has grown into eight companies working across agriculture, energy, and industrial supply — employing over 15,000 people and reaching 64 districts nationwide. Every company we've added has stayed close to the same idea we started with: build what the region actually needs, and build it to last.",
      ],
    },

    founder: {
      name: "Md. Deluar Rasal",
      title: "Founder & Chairman, MR Group",
      image: "/images/gallery/rasal.jpg",
      quote: "We didn't build MR Group to be big. We built it to be needed — by the farmers, the families, and the communities around us.",
      bio: [
        "Md. Deluar Rasal is the visionary founder and chairman of MR Group, a diversified conglomerate rooted in the agricultural heartland of Mymensingh, Bangladesh. A first-generation entrepreneur, he began his journey with a single agro farm in 2006, driven by a deep belief that rural Bangladesh deserved better access to quality agricultural inputs.",
        "Over the years, his leadership has expanded MR Group into eight companies spanning animal feed, agro chemicals, agri technology, lubricants, fuel, and gas distribution — creating thousands of jobs and touching the lives of farming families across 64 districts.",
        "Known for his humility, vision, and relentless commitment to quality, Md. Deluar Rasal leads not from a boardroom, but from the field — staying connected to the farmers, workers, and communities that MR Group was built to serve.",
        "His philosophy is simple: build what the region truly needs, build it with integrity, and build it to last for generations.",
      ],
      achievements: [
        { label: "Years of Entrepreneurship", value: "20+" },
        { label: "Companies Founded", value: "8" },
        { label: "Lives Impacted", value: "500K+" },
        { label: "Districts Reached", value: "64" },
      ],
    },

    missionVision: {
      mission:
        "To improve everyday life by delivering quality products and services across every industry we serve, while building sustainable value for our employees, partners, and communities.",
      vision:
        "To be the most trusted diversified industrial group, recognized for innovation, integrity, and impact across the region.",
      values: [
        "Quality First",
        "Integrity",
        "Innovation",
        "Community Impact",
        "Sustainability",
      ],
    },
    milestones: [
      {
        year: "2006",
        title: "Founded",
        description: "MR Group established as a single agricultural venture.",
      },
      {
        year: "2010",
        title: "First Expansion",
        description:
          "Expanded operations and began supplying quality agricultural inputs to farmers.",
      },
      {
        year: "2016",
        title: "Industrial Diversification",
        description:
          "Entered the energy and fuel sectors, establishing Sattar Filling Station.",
      },
      {
        year: "2020",
        title: "Nationwide Distribution",
        description:
          "Expanded reach to all 64 districts with animal feed and agro chemicals.",
      },
      {
        year: "2024",
        title: "Sustainability Commitment",
        description:
          "Group-wide initiative launched to reduce environmental impact across all companies.",
      },
      {
        year: "2026",
        title: "8 Companies, One Group",
        description:
          "MR Group now spans eight diversified companies and thousands of employees nationwide.",
      },
    ],
    facilities: [
      {
        name: "MR Feed Mill",
        location: "Mymensingh",
        description:
          "State-of-the-art animal feed milling and packaging facility.",
      },
      {
        name: "MR Chemical",
        location: "Mymensingh",
        description: "A reliable solution for protecting farm livestock.",
      },
      {
        name: "Rabeya Hossain Agro Farm",
        location: "konapara, Sitra, Sadar, Mymensingh",
        description: "Sustainable agricultural production.",
      },
      {
        name: "Sattar Filling Station",
        location: "Mymensingh",
        description:
          "Reliable fuel services with quality, safety, and customer satisfaction.",
      },
    ],
    faqs: [
      {
        question: "What industries does MR Group operate in?",
        answer:
          "MR Group operates across food & beverage, plastics, textiles, ceramics, agro-processing, and logistics.",
      },
      {
        question: "Where is MR Group headquartered?",
        answer:
          "Our head office is located at MR Tower, Gulshan Avenue, Dhaka 1212, Bangladesh.",
      },
      {
        question: "How can I partner or do business with MR Group?",
        answer:
          "Reach out via our Contact page and our business development team will get back to you.",
      },
    ],
  },

  companies: [
    {
      name: "Rabeya Hossain Agro Farm",
      sector: "Agro",
      description:
        "Cultivating and processing agricultural produce, supporting farmers and local supply chains nationwide.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/agro-banner.png",
      subdomain: "agro",
    },
    {
      name: "Sattar Filling Station",
      sector: "Filling Station",
      description:
        "Operating fuel filling stations providing petrol, diesel, and octane across key highway locations.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/filling-station.jpg",
      subdomain: "filling-station",
    },
    {
      name: "MR Chemical",
      sector: "Agro Chemical",
      description:
        "Manufacturing and distributing crop protection and agricultural medicine products for farmers nationwide.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/Chemical.png",
      subdomain: "agro-medicine",
    },
    {
      name: "MR Feed",
      sector: "Fish and Cattle Feed",
      description:
        "Producing scientifically formulated cattle, poultry, and fish feed trusted by farmers across the country.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/feed.jpg",
      subdomain: "feed",
    },
    {
      name: "MR Agri Technology",
      sector: "Agri Technology",
      description:
        "Supplying modern farm machinery, irrigation systems, and smart farming technology backed by nationwide service.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/agri-tech-banner.svg",
      subdomain: "tech",
    },
    {
      name: "MR Lube",
      sector: "Lubricants",
      description:
        "Blending high-performance engine oils, industrial lubricants, and greases engineered to protect engines and machinery in Bangladeshi conditions.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/mr-lube-banner.svg",
      subdomain: "lube",
    },
    {
      name: "Mahin Enterprise",
      sector: "LPG Gas Supply",
      description:
        "Supplying LPG gas cylinders to homes, businesses, and industries across the Mymensingh division with fast, reliable doorstep delivery.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/mahin-banner.svg",
      subdomain: "mahin",
    },
    {
      name: "Rahim Enterprise",
      sector: "Ammonia Gas Supply",
      description:
        "Supplying refrigeration, industrial, and agricultural ammonia to cold storages, factories, and plants nationwide with a strict focus on safety and purity.",
      logo: "/logos/placeholder.svg",
      image: "/images/companies/rahim-banner.svg",
      subdomain: "rahim",
    },
  ],

  productCategories: [
    {
      name: "Fish and Cattle Feed",
      company: "MR Feed",
      subdomain: "feed",
      items: ["Poultry Feed", "Cattle Feed", "Fish Feed"],
      icon: "grain",
    },
    {
      name: "Agro Chemical",
      company: "MR Chemical",
      subdomain: "agro-medicine",
      items: ["Sulfuric Acid", "Nitric Acid", "Hydrochloric Acid"],
      icon: "flask",
    },
    {
      name: "Agro Medicine",
      company: "MR Agri Technology",
      subdomain: "tech",
      items: ["Aqua", "Cattle", "Poultry"],
      icon: "cog",
    },
    {
      name: "Lubricants & Greases",
      company: "MR Lube",
      subdomain: "lube",
      items: ["Engine Oils", "Industrial Lubricants", "Greases"],
      icon: "droplet",
    },
    {
      name: "LPG Gas",
      company: "Mahin Enterprise",
      subdomain: "mahin",
      items: ["Household", "Commercial", "Industrial", "Auto Gas"],
      icon: "flame",
    },
    {
      name: "Ammonia Gas",
      company: "Rahim Enterprise",
      subdomain: "rahim",
      items: ["Refrigeration", "Industrial", "Water Treatment"],
      icon: "snowflake",
    },
    {
      name: "Farm Produce",
      company: "Rabeya Hossain Agro Farm",
      subdomain: "agro",
      items: ["Cattle Farming", "Fishery", "Crop Farming"],
      icon: "leaf",
    },
    {
      name: "Fuel Retail",
      company: "Sattar Filling Station",
      subdomain: "filling-station",
      items: ["Petrol", "Diesel", "Octane"],
      icon: "fuel",
    },
  ],

  stats: [
    { label: "Years of Excellence", value: "20+", icon: "calendar" },
    { label: "Group Companies", value: "8", icon: "building" },
    { label: "Employees", value: "500+", icon: "users" },
    { label: "Districts Served", value: "64", icon: "map-pin" },
  ],

  news: [
    {
      title: "MR Group Breaks Ground on New Manufacturing Facility",
      excerpt:
        "A new state-of-the-art plant will expand our production capacity and create thousands of jobs nationwide.",
      date: "2026-05-12",
      image: "/images/gallery/facility.jpg",
      href: "/media/news",
    },
    {
      title: "MR Feed Launches Nationwide Sustainability Initiative",
      excerpt:
        "Our latest program focuses on reducing plastic waste across our packaging and supply chain.",
      date: "2026-04-28",
      image: "/images/gallery/harvest.jpg",
      href: "/media/news",
    },
    {
      title: "MR Group Recognized as Top Employer of the Year",
      excerpt:
        "We're proud to be honored for our continued commitment to employee growth and workplace culture.",
      date: "2026-03-15",
      image: "/images/gallery/team.jpg",
      href: "/media/news",
    },
    {
      title: "Sattar Filling Station Expands to 15 New Locations",
      excerpt:
        "New highway locations bring convenient fueling access to more communities across the country.",
      date: "2026-02-20",
      image: "/images/gallery/distribution.jpg",
      href: "/media/news",
    },
    {
      title: "MR Agro Chemical Wins Innovation Award",
      excerpt:
        "Recognized for developing safer, more effective crop protection solutions for local farmers.",
      date: "2026-01-08",
      image: "/images/gallery/safety.jpg",
      href: "/media/news",
    },
  ],

  mediaPages: {
    events: [
      {
        title: "MR Group Annual Business Summit 2026",
        date: "2026-03-10",
        location: "MR Tower, Dhaka",
        description:
          "Leadership from across all four companies gathered to set the group's strategic direction for the year ahead.",
        image: "/images/events/summit.jpg",
      },
      {
        title: "Farmers' Appreciation Day",
        date: "2026-01-22",
        location: "Gazipur District",
        description:
          "Rabeya Hossain Agro Farm hosted a community event honoring local farmers and distributing new crop protection kits.",
        image: "/images/events/farmers-day.jpg",
      },
      {
        title: "Sattar Filling Station Nationwide Launch",
        date: "2025-11-05",
        location: "Multiple Locations",
        description:
          "Celebrating the opening of 15 new filling stations across major highways.",
        image: "/images/events/filling-station-launch.jpg",
      },
      {
        title: "Sustainability Workshop",
        date: "2025-09-18",
        location: "MR Tower, Dhaka",
        description:
          "Cross-company workshop on reducing environmental impact across manufacturing operations.",
        image: "/images/events/sustainability-workshop.jpg",
      },
    ],
    galleryPhotos: [
      {
        caption: "MR Feed mill",
        image: "/images/gallery/facility.jpg",
        height: 520,
      },
      {
        caption: "Team members across MR Group",
        image: "/images/gallery/team.jpg",
        height: 360,
      },
      {
        caption: "Annual business summit",
        image: "/images/gallery/event.jpg",
        height: 440,
      },
      {
        caption: "Harvest season with Rabeya Hossain Agro Farm partners",
        image: "/images/gallery/harvest.jpg",
        height: 560,
      },
      {
        caption: "Products ready for distribution",
        image: "/images/gallery/chemical-fac.png",
        height: 380,
      },
      {
        caption: "Nationwide distribution network",
        image: "/images/gallery/distribution.jpg",
        height: 460,
      },
      {
        caption: "Safety-first culture across facilities",
        image: "/images/gallery/safety.jpg",
        height: 400,
      },
    ],
    galleryVideos: [
      {
        title: "MR Group Corporate Overview",
        thumbnail: "/images/gallery/facility.jpg",
      },
      {
        title: "Life at Rabeya Hossain Agro Farm",
        thumbnail: "/images/gallery/harvest.jpg",
      },
      {
        title: "Sustainability in Action",
        thumbnail: "/images/gallery/safety.jpg",
      },
    ],
  },

  sustainabilityPages: {
    overviewDescription:
      "Sustainability at MR Group means investing in the health, education, and livelihoods of the communities we serve, while reducing our environmental footprint across every company we run.",
    pillars: [
      {
        slug: "health",
        icon: "heart",
        title: "Health",
        summary:
          "Improving access to healthcare and wellbeing in our communities.",
        description:
          "We believe a healthy community is the foundation of sustainable growth. Across our operating regions, MR Group runs health camps, supports local clinics, and invests in employee wellness so that every family connected to our companies has access to quality care.",
        image: "/images/sustainability/health.jpg",
        stats: [
          { label: "Free Health Camps", value: "20+" },
          { label: "Patients Treated", value: "25,000+" },
          { label: "Health Workers Trained", value: "300+" },
        ],
        initiatives: [
          {
            title: "Mobile Health Camps",
            description:
              "Free health checkups and medicine distribution in rural areas served by Rabeya Hossain Agro Farm and Sattar Filling Station communities.",
          },
          {
            title: "Employee Wellness Program",
            description:
              "Annual health screenings and insurance coverage for all MR Group employees and their families.",
          },
          {
            title: "Maternal & Child Health",
            description:
              "Partnering with local clinics to improve prenatal care access near our manufacturing facilities.",
          },
        ],
      },
      {
        slug: "education",
        icon: "book",
        title: "Education",
        summary: "Expanding access to quality education and skill development.",
        description:
          "From scholarships to vocational training, we invest in the next generation of talent — both for the communities around us and for the future workforce of MR Group itself.",
        image: "/images/sustainability/education.jpg",
        stats: [
          { label: "Scholarships Awarded", value: "500+" },
          { label: "Schools Supported", value: "20+" },
          { label: "Students Reached", value: "10,000+" },
        ],
        initiatives: [
          {
            title: "MR Group Scholarship Fund",
            description:
              "Annual scholarships for meritorious students from farming and factory-worker families.",
          },
          {
            title: "Vocational Training Centers",
            description:
              "Hands-on technical training preparing youth for careers in manufacturing and agriculture.",
          },
          {
            title: "School Infrastructure Support",
            description:
              "Funding classroom renovations and learning materials for underserved rural schools.",
          },
        ],
      },
      {
        slug: "community-development",
        icon: "users",
        title: "Community Development",
        summary: "Building stronger, more resilient communities.",
        description:
          "Sustainable business means investing directly in the towns and villages where we operate — through infrastructure, livelihood programs, and partnerships with local leaders.",
        image: "/images/sustainability/community-development.jpg",
        stats: [
          { label: "Villages Supported", value: "60+" },
          { label: "Jobs Created", value: "15,000+" },
          { label: "Community Projects", value: "120+" },
        ],
        initiatives: [
          {
            title: "Farmer Support Program",
            description:
              "Providing MR Agro Chemical and training to smallholder farmers to improve crop yields.",
          },
          {
            title: "Local Infrastructure Grants",
            description:
              "Funding roads, water access, and community centers near our operational sites.",
          },
          {
            title: "Women's Livelihood Initiative",
            description:
              "Skills training and microloans supporting women-led small businesses.",
          },
        ],
      },
      {
        slug: "environment",
        icon: "leaf",
        title: "Environment",
        summary: "Reducing our environmental footprint across every company.",
        description:
          "We're working to make every stage of our operations — from farming to manufacturing to distribution — more sustainable, with measurable targets across the group.",
        image: "/images/sustainability/environment.jpg",
        stats: [
          { label: "Trees Planted", value: "50,000+" },
          { label: "Plastic Waste Reduced", value: "30%" },
          { label: "Solar-Powered Facilities", value: "5" },
        ],
        initiatives: [
          {
            title: "Sustainable Packaging",
            description:
              "Transitioning MR Feed packaging to recyclable and biodegradable materials.",
          },
          {
            title: "Solar Energy Adoption",
            description:
              "Installing solar panels across manufacturing facilities to reduce carbon emissions.",
          },
          {
            title: "Reforestation Program",
            description:
              "Planting trees in partnership with local communities near Rabeya Hossain Agro Farm operations.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Get in Touch",
    description:
      "Have a question about MR Group or one of our companies? We'd love to hear from you.",
    address: "West Charicha, Sadar, Mymensingh",
    email: "info@mr-groupbd.com",
    phone: "+880 1711-239935",
  },

  socials: [
    { label: "Facebook", href: "https://www.facebook.com/mrgroupbangladesh" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "https://www.youtube.com/@mr-groupbd" },
  ],
};
