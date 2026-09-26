import type { AppLocale } from "@/i18n/routing";
import type { AgroContent } from "@/types/agro";

const IMG = "/images/companies/agro";
const PRODUCTS_IMG = "/images/companies/agro/products";
const PHOTOS_IMG = "/images/companies/agro/photos";

const en: AgroContent = {
  name: "Rabeya Hossain Agro Farm",
  tagline: "Cultivating and processing agricultural produce nationwide.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    headingLead: "Regenerative farming for a",
    headingEmphasis: "greener",
    headingTail: "Bangladesh",
    ctaFarmer: "I'm a Farmer",
    ctaBuyer: "I'm a Buyer",
    scrollLabel: "Scroll to explore",
    image: `${IMG}/hero.jpg`,
  },
  farmers: {
    headingLead: "Benefits for",
    headingEmphasis: "Farmers & Growers",
    intro:
      "Rabeya Hossain Agro Farm works alongside producers as trusted stewards of the land, helping farms become more profitable and more sustainable, season after season.",
    image: `${PHOTOS_IMG}/farmers-field.jpg`,
    features: [
      {
        icon: "price",
        title: "Fair, transparent pricing",
        body: "We commit to the best value for your harvest, paid on time, with no hidden deductions.",
      },
      {
        icon: "seedling",
        title: "Agronomic support",
        body: "On-field guidance on seeds, soil, and practices that improve yields and protect the land.",
      },
      {
        icon: "growth",
        title: "Guaranteed offtake",
        body: "Reliable demand aligned to your growing cycles, so you can plan the season with confidence.",
      },
      {
        icon: "leaf",
        title: "Sustainable practices",
        body: "We invest in regenerative methods that keep soil healthy for the next generation.",
      },
    ],
  },
  buyers: {
    headingLead: "Benefits for",
    headingEmphasis: "Buyers & Businesses",
    intro:
      "From processors to retailers, we connect your business to a dependable, traceable supply of quality produce grown across the country.",
    image: `${PHOTOS_IMG}/produce-crate.jpg`,
    features: [
      {
        icon: "shield",
        title: "Quality you can trust",
        body: "Graded and processed to consistent standards, with quality checks at every stage.",
      },
      {
        icon: "report",
        title: "Full traceability",
        body: "Know where your produce comes from, from the farm plot to the delivery dock.",
      },
      {
        icon: "truck",
        title: "Reliable supply",
        body: "Nationwide sourcing and cold-chain handling that meet your volumes and timelines.",
      },
      {
        icon: "handshake",
        title: "Long-term partnership",
        body: "We grow with you, planning capacity around your procurement needs year on year.",
      },
    ],
  },
  impact: {
    eyebrow: "Impact since 2015",
    stats: [
      { value: "12K+", label: "Farmers partnered" },
      { value: "40K", label: "Acres cultivated" },
      { value: "85K", label: "Tonnes processed" },
      { value: "24", label: "Districts served" },
    ],
  },
  network: {
    eyebrow: "Nationwide network",
    heading: "Rabeya Hossain Agro Farm sources through local partners across all 8 divisions of Bangladesh.",
    body: "We build lasting relationships with farmers and cooperatives in every corner of the country, bringing fresh produce from the field to markets nationwide.",
    regions: [
      "Dhaka",
      "Chattogram",
      "Rajshahi",
      "Khulna",
      "Barishal",
      "Sylhet",
      "Rangpur",
      "Mymensingh",
    ],
    image: `${PHOTOS_IMG}/nationwide-network.jpg`,
  },
  partners: {
    heading: "Valued partners",
    subtitle: "Voices from the farmers and cooperatives we grow alongside.",
    items: [
      {
        quote:
          "Partnering with Rabeya Hossain Agro Farm gave our cooperative a fair price and a buyer we can count on every harvest.",
        name: "Abdul Karim",
        role: "Chairman, Rajshahi Growers Co-op",
        logo: "Rajshahi Co-op",
      },
      {
        quote:
          "Their agronomists helped us improve our soil and nearly double our yield in two seasons.",
        name: "Shahana Begum",
        role: "Farm owner, Rangpur",
        logo: "Rangpur Farms",
      },
      {
        quote:
          "As a food processor, the traceability and consistency Rabeya Hossain Agro Farm provides is exactly what we needed.",
        name: "Tanvir Ahmed",
        role: "Procurement Lead, Fresh Foods Ltd.",
        logo: "Fresh Foods",
      },
    ],
  },
  news: {
    heading: "Latest news",
    subtitle: "Stories from our farms, partners, and the future of farming.",
    viewMore: "View more",
    items: [
      {
        category: "Sustainability",
        date: "June 12, 2026",
        title: "Regenerative rice cultivation reaches 5,000 acres",
        excerpt:
          "Our soil-first program expands across three districts, cutting water use while lifting farmer income.",
        image: `${PHOTOS_IMG}/news-rice-cultivation.jpg`,
      },
      {
        category: "Partnership",
        date: "May 28, 2026",
        title: "Rabeya Hossain Agro Farm partners with regional cooperatives",
        excerpt:
          "New agreements bring guaranteed offtake and agronomic support to over 2,000 smallholder farmers.",
        image: `${PHOTOS_IMG}/news-cooperative-partnership.jpg`,
      },
      {
        category: "Harvest",
        date: "May 03, 2026",
        title: "A record vegetable season for our growers",
        excerpt:
          "Favourable weather and better practices delivered the strongest fresh-produce harvest on record.",
        image: `${PHOTOS_IMG}/news-vegetable-harvest.jpg`,
      },
    ],
  },
  cta: {
    heading: "Start growing with Rabeya Hossain Agro Farm",
    button: "Partner with us",
  },
  footer: {
    newsletterHeading: "Stay in touch",
    emailPlaceholder: "Your email",
    submitLabel: "Submit",
    consent: "I consent to receive updates from Rabeya Hossain Agro Farm. I understand I can withdraw my consent at any time.",
    contactHeading: "Contact us",
    email: "agro@mrgroup.com",
    phone: "+880 1XXX-XXXXXX",
    addressHeading: "Address",
    address: ["MR Tower, Gulshan Avenue", "Dhaka 1212, Bangladesh"],
    followHeading: "Follow us",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "We grow from the ground up.",
    legal: "© 2026 Rabeya Hossain Agro Farm, a company of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "Our Story",
      title: "Growing Bangladesh, one harvest at a time",
      description:
        "From a single sourcing desk to a nationwide network of farmers and buyers — this is the story of Rabeya Hossain Agro Farm.",
      image: `${IMG}/hero.jpg`,
    },
    storyHeading: "Where it started",
    storyParagraphs: [
      "Rabeya Hossain Agro Farm began in 2015 with a simple idea: farmers deserve a fair price, and buyers deserve produce they can trust. What started as a small sourcing desk in Dhaka has grown into a nationwide network spanning all eight divisions of Bangladesh.",
      "Today we partner with more than 12,000 farmers, offering agronomic support, guaranteed offtake, and transparent pricing — while giving processors and retailers a dependable, traceable supply chain from field to dock.",
      "As part of MR Group, we draw on decades of logistics, manufacturing, and trade expertise to keep raising the bar for what a modern agribusiness can do for the people who grow our food.",
    ],
    storyImage: "/images/gallery/harvest.jpg",
    missionHeading: "Our mission",
    mission:
      "To connect farmers and buyers through fair, transparent, and sustainable agricultural trade — strengthening rural livelihoods while delivering quality produce nationwide.",
    visionHeading: "Our vision",
    vision:
      "A Bangladesh where every farmer has a reliable market, every harvest is valued fairly, and every buyer can trust where their produce comes from.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Fairness", body: "Transparent pricing and on-time payment for every farmer we work with." },
      { title: "Sustainability", body: "Regenerative practices that protect the land for the next harvest." },
      { title: "Traceability", body: "A supply chain buyers can verify, from the farm plot to delivery." },
      { title: "Partnership", body: "Long-term relationships built on trust, not one-off transactions." },
    ],
  },
  productsPage: {
    header: {
      eyebrow: "What We Grow & Raise",
      title: "Farm-fresh produce from our land, ponds, and fields",
      description:
        "Rabeya Hossain Agro Farm raises cattle, farms fish, and grows staple crops across Bangladesh — bringing traceable, farm-fresh produce from our farms straight to your business.",
      image: `${PHOTOS_IMG}/produce-crate.jpg`,
    },
    intro:
      "Explore what we grow and raise — browse by category to see produce from our cattle farms, fisheries, and croplands, every batch traceable from field to dock.",
    allLabel: "All Produce",
    viewDetailsLabel: "View details",
    categories: [
      {
        slug: "cattle-farming",
        name: "Cattle Farming",
        description: "Dairy and beef cattle reared on our own managed farms.",
      },
      {
        slug: "fishery",
        name: "Fishery & Aquaculture",
        description: "Freshwater fish and prawns farmed in our ponds and cages.",
      },
      {
        slug: "crop-farming",
        name: "Crop Farming",
        description: "Rice, vegetables, and staples grown across our fields.",
      },
    ],
    products: [
      {
        slug: "fresh-dairy-milk",
        category: "cattle-farming",
        name: "Fresh Dairy Milk",
        tagline: "Farm-fresh milk collected daily from our own dairy herd.",
        image: `${PRODUCTS_IMG}/fresh-dairy-milk.jpg`,
        description:
          "Our dairy milk comes straight from grass-fed cows on our managed farms, chilled within hours of milking and delivered fresh — with the natural cream and richness only farm-fresh milk has.",
        specs: [
          { label: "Source", value: "Own dairy herd" },
          { label: "Type", value: "Raw, chilled" },
          { label: "Supply", value: "Bulk & retail" },
          { label: "Availability", value: "Year-round" },
        ],
        benefits: [
          "Collected daily from our own farms",
          "Chilled cold-chain from farm to dock",
          "No added preservatives",
          "Naturally rich cream content",
        ],
      },
      {
        slug: "beef-cattle",
        category: "cattle-farming",
        name: "Beef Cattle",
        tagline: "Healthy, farm-raised cattle reared for quality beef.",
        image: `${PRODUCTS_IMG}/beef-cattle.jpg`,
        description:
          "We rear local and cross-bred cattle on open pasture and in well-managed sheds, raised on grass and forage for healthy growth and quality beef you can trace back to the farm.",
        specs: [
          { label: "Rearing", value: "Pasture & shed" },
          { label: "Breeds", value: "Local & crossbred" },
          { label: "Weight Range", value: "300–450 kg" },
          { label: "Availability", value: "Year-round" },
        ],
        benefits: [
          "Raised on our own farms",
          "Grass and forage fed",
          "No growth hormones",
          "Fully traceable to the farm",
        ],
      },
      {
        slug: "dairy-breeding-cattle",
        category: "cattle-farming",
        name: "Dairy & Breeding Cattle",
        tagline: "Well-bred dairy cows and heifers for productive herds.",
        image: `${PRODUCTS_IMG}/dairy-cattle.jpg`,
        description:
          "Our dairy and breeding cattle are selected for strong milk-yield genetics and reared under expert veterinary care, giving farmers healthy, productive animals with full farm records.",
        specs: [
          { label: "Purpose", value: "Dairy & breeding" },
          { label: "Breeds", value: "Holstein-cross, Sahiwal" },
          { label: "Care", value: "Vet-monitored" },
          { label: "Availability", value: "Seasonal" },
        ],
        benefits: [
          "Vaccinated and health-checked",
          "Strong milk-yield genetics",
          "Reared under expert supervision",
          "Full farm records provided",
        ],
      },
      {
        slug: "farmed-fish",
        category: "fishery",
        name: "Fresh Farmed Fish",
        tagline: "Tilapia, rui, and carp raised in our freshwater ponds.",
        image: `${PRODUCTS_IMG}/farmed-fish.jpg`,
        description:
          "We farm tilapia, rui, and carp in clean freshwater ponds, harvested to order and moved through a cold chain so the fish reaches markets fresh, at consistent size and quality.",
        specs: [
          { label: "Farming Method", value: "Pond-raised" },
          { label: "Species", value: "Tilapia, Rui, Carp" },
          { label: "Harvest Size", value: "500–900 g" },
          { label: "Availability", value: "Year-round" },
        ],
        benefits: [
          "Freshwater pond-raised",
          "Harvested to order",
          "Consistent size and quality",
          "Cold-chain delivery",
        ],
      },
      {
        slug: "pangasius-aquaculture",
        category: "fishery",
        name: "Pangasius & Pond Fish",
        tagline: "High-yield pangasius cultured in managed aquaculture ponds.",
        image: `${PRODUCTS_IMG}/aquaculture-ponds.jpg`,
        description:
          "Grown in managed ponds and cages with monitored water quality, our pangasius culture delivers steady, high-yield harvests that stay traceable from pond to market.",
        specs: [
          { label: "Farming Method", value: "Managed cages/ponds" },
          { label: "Species", value: "Pangasius" },
          { label: "Harvest Size", value: "800 g – 1.2 kg" },
          { label: "Availability", value: "Year-round" },
        ],
        benefits: [
          "Managed aquaculture systems",
          "Water quality monitored",
          "Efficient, high-yield culture",
          "Traceable from pond to market",
        ],
      },
      {
        slug: "freshwater-prawn",
        category: "fishery",
        name: "Freshwater Prawn (Golda)",
        tagline: "Premium golda prawns farmed in our clean-water ponds.",
        image: `${PRODUCTS_IMG}/freshwater-prawn.jpg`,
        description:
          "Our golda prawns are pond-farmed and hand-graded for size, then chilled immediately after harvest to hold their export-standard quality all the way to the buyer.",
        specs: [
          { label: "Farming Method", value: "Pond-farmed" },
          { label: "Species", value: "Golda / freshwater prawn" },
          { label: "Grade", value: "Export quality" },
          { label: "Availability", value: "Seasonal" },
        ],
        benefits: [
          "Farm-raised in clean ponds",
          "Hand-graded for size",
          "Chilled right after harvest",
          "Export-standard quality",
        ],
      },
      {
        slug: "paddy-rice",
        category: "crop-farming",
        name: "Paddy Rice",
        tagline: "Staple and aromatic rice grown across our partner fields.",
        image: `${PRODUCTS_IMG}/paddy-rice.jpg`,
        description:
          "Grown by our nationwide farmer network across the Aman and Boro seasons, our paddy is cleaned, graded, and milled to consistent standards for both staple and aromatic varieties.",
        specs: [
          { label: "Type", value: "Paddy / milled rice" },
          { label: "Varieties", value: "BRRI & aromatic" },
          { label: "Season", value: "Aman & Boro" },
          { label: "Availability", value: "Year-round" },
        ],
        benefits: [
          "Grown by our farmer network",
          "Multiple varieties",
          "Cleaned and graded",
          "Sustainably cultivated",
        ],
      },
      {
        slug: "fresh-vegetables",
        category: "crop-farming",
        name: "Fresh Vegetables",
        tagline: "Seasonal vegetables harvested fresh from the field.",
        image: `${PRODUCTS_IMG}/fresh-vegetables.jpg`,
        description:
          "From leafy greens to root vegetables, we harvest a wide seasonal range from our contract farms and move it through a cold chain the same day, graded and ready for market.",
        specs: [
          { label: "Range", value: "20+ varieties" },
          { label: "Sourcing", value: "Contract farms" },
          { label: "Handling", value: "Same-day harvest" },
          { label: "Availability", value: "Seasonal" },
        ],
        benefits: [
          "Field-fresh, same day",
          "Wide seasonal range",
          "Graded for market",
          "Cold-chain handling",
        ],
      },
      {
        slug: "maize",
        category: "crop-farming",
        name: "Maize",
        tagline: "Field-grown maize for food and commercial supply.",
        image: `${PRODUCTS_IMG}/maize.jpg`,
        description:
          "Grown across our partner farms and dried to storage moisture, our grain maize is cleaned and quality-checked for reliable bulk supply to food and commercial buyers.",
        specs: [
          { label: "Type", value: "Grain maize" },
          { label: "Use", value: "Food & commercial" },
          { label: "Moisture", value: "Dried, ≤14%" },
          { label: "Availability", value: "Post-harvest" },
        ],
        benefits: [
          "Grown across partner farms",
          "Dried and cleaned",
          "Consistent grain quality",
          "Bulk supply available",
        ],
      },
    ],
    backLabel: "Back to Produce",
    specsHeading: "Product Details",
    benefitsHeading: "Key Benefits",
    relatedHeading: "You may also like",
    enquireLabel: "Enquire about this produce",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Life across our farms and facilities",
      description: "A look at the people, places, and produce behind Rabeya Hossain Agro Farm.",
      image: `${IMG}/hero.jpg`,
    },
    intro:
      "Photos and videos from our farms, processing, and distribution. Toggle between photos and videos to explore.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos available yet.",
    noVideos: "No videos available yet.",
  },
  contactPage: {
    header: {
      eyebrow: "Get in Touch",
      title: "Let's grow together",
      description: "Whether you farm, buy, or want to partner with us, we'd love to hear from you.",
      image: `${IMG}/field.svg`,
    },
    formHeading: "Send us a message",
    formIntro: "Our team typically responds within one business day.",
    officeHeading: "Head office",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const bn: AgroContent = {
  name: "রাবেয়া হোসেন অ্যাগ্রো ফার্ম",
  tagline: "সারাদেশে কৃষিপণ্য চাষ ও প্রক্রিয়াকরণ।",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "পণ্য", href: "/products" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    headingLead: "একটি",
    headingEmphasis: "সবুজ",
    headingTail: "বাংলাদেশের জন্য পুনর্জীবী কৃষি",
    ctaFarmer: "আমি একজন কৃষক",
    ctaBuyer: "আমি একজন ক্রেতা",
    scrollLabel: "নিচে স্ক্রল করুন",
    image: `${IMG}/hero.jpg`,
  },
  farmers: {
    headingLead: "সুবিধা",
    headingEmphasis: "কৃষকদের জন্য",
    intro:
      "রাবেয়া হোসেন অ্যাগ্রো ফার্ম জমির বিশ্বস্ত রক্ষক হিসেবে কৃষকদের পাশে থেকে কাজ করে, প্রতি মৌসুমে খামারকে আরও লাভজনক ও টেকসই করে তুলতে সহায়তা করে।",
    image: `${PHOTOS_IMG}/farmers-field.jpg`,
    features: [
      {
        icon: "price",
        title: "ন্যায্য, স্বচ্ছ মূল্য",
        body: "আপনার ফসলের সর্বোত্তম মূল্য, সময়মতো পরিশোধ, কোনো গোপন কর্তন ছাড়াই।",
      },
      {
        icon: "seedling",
        title: "কৃষি পরামর্শ সহায়তা",
        body: "বীজ, মাটি ও পদ্ধতি নিয়ে মাঠপর্যায়ের নির্দেশনা যা ফলন বাড়ায় ও জমি রক্ষা করে।",
      },
      {
        icon: "growth",
        title: "নিশ্চিত ক্রয়",
        body: "আপনার চাষের চক্রের সাথে সামঞ্জস্যপূর্ণ নির্ভরযোগ্য চাহিদা, যাতে আপনি আত্মবিশ্বাসে মৌসুম পরিকল্পনা করতে পারেন।",
      },
      {
        icon: "leaf",
        title: "টেকসই পদ্ধতি",
        body: "আমরা পুনর্জীবী পদ্ধতিতে বিনিয়োগ করি যা পরবর্তী প্রজন্মের জন্য মাটি সুস্থ রাখে।",
      },
    ],
  },
  buyers: {
    headingLead: "সুবিধা",
    headingEmphasis: "ক্রেতা ও ব্যবসার জন্য",
    intro:
      "প্রক্রিয়াকারী থেকে খুচরা বিক্রেতা পর্যন্ত, আমরা আপনার ব্যবসাকে সারাদেশে উৎপাদিত মানসম্পন্ন পণ্যের নির্ভরযোগ্য ও শনাক্তযোগ্য সরবরাহের সাথে সংযুক্ত করি।",
    image: `${PHOTOS_IMG}/produce-crate.jpg`,
    features: [
      {
        icon: "shield",
        title: "নির্ভরযোগ্য মান",
        body: "সামঞ্জস্যপূর্ণ মান অনুযায়ী গ্রেডকৃত ও প্রক্রিয়াজাত, প্রতিটি ধাপে মান পরীক্ষা সহ।",
      },
      {
        icon: "report",
        title: "সম্পূর্ণ শনাক্তযোগ্যতা",
        body: "খামারের জমি থেকে ডেলিভারি পর্যন্ত আপনার পণ্য কোথা থেকে আসছে তা জানুন।",
      },
      {
        icon: "truck",
        title: "নির্ভরযোগ্য সরবরাহ",
        body: "সারাদেশব্যাপী সংগ্রহ ও কোল্ড-চেইন ব্যবস্থাপনা যা আপনার পরিমাণ ও সময়সীমা পূরণ করে।",
      },
      {
        icon: "handshake",
        title: "দীর্ঘমেয়াদী অংশীদারিত্ব",
        body: "আমরা আপনার সাথে বেড়ে উঠি, বছরের পর বছর আপনার ক্রয়ের প্রয়োজন অনুযায়ী সক্ষমতা পরিকল্পনা করি।",
      },
    ],
  },
  impact: {
    eyebrow: "২০১৫ সাল থেকে প্রভাব",
    stats: [
      { value: "১২ হাজার+", label: "অংশীদার কৃষক" },
      { value: "৪০ হাজার", label: "একর চাষাবাদ" },
      { value: "৮৫ হাজার", label: "টন প্রক্রিয়াজাত" },
      { value: "২৪", label: "জেলায় সেবা" },
    ],
  },
  network: {
    eyebrow: "সারাদেশব্যাপী নেটওয়ার্ক",
    heading: "রাবেয়া হোসেন অ্যাগ্রো ফার্ম বাংলাদেশের সব ৮টি বিভাগে স্থানীয় অংশীদারদের মাধ্যমে পণ্য সংগ্রহ করে।",
    body: "আমরা দেশের প্রতিটি কোণে কৃষক ও সমবায়ের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়ে তুলি, মাঠ থেকে সারাদেশের বাজারে তাজা পণ্য পৌঁছে দিই।",
    regions: [
      "ঢাকা",
      "চট্টগ্রাম",
      "রাজশাহী",
      "খুলনা",
      "বরিশাল",
      "সিলেট",
      "রংপুর",
      "ময়মনসিংহ",
    ],
    image: `${PHOTOS_IMG}/nationwide-network.jpg`,
  },
  partners: {
    heading: "মূল্যবান অংশীদার",
    subtitle: "যেসব কৃষক ও সমবায়ের সাথে আমরা বেড়ে উঠি, তাদের কণ্ঠস্বর।",
    items: [
      {
        quote:
          "রাবেয়া হোসেন অ্যাগ্রো ফার্মর সাথে অংশীদারিত্ব আমাদের সমবায়কে ন্যায্য মূল্য ও প্রতি মৌসুমে নির্ভরযোগ্য ক্রেতা এনে দিয়েছে।",
        name: "আব্দুল করিম",
        role: "সভাপতি, রাজশাহী গ্রোয়ার্স কো-অপ",
        logo: "রাজশাহী কো-অপ",
      },
      {
        quote:
          "তাদের কৃষিবিদরা আমাদের মাটি উন্নত করতে ও দুই মৌসুমে ফলন প্রায় দ্বিগুণ করতে সাহায্য করেছেন।",
        name: "শাহানা বেগম",
        role: "খামার মালিক, রংপুর",
        logo: "রংপুর ফার্মস",
      },
      {
        quote:
          "একজন খাদ্য প্রক্রিয়াকারী হিসেবে, রাবেয়া হোসেন অ্যাগ্রো ফার্মর দেওয়া শনাক্তযোগ্যতা ও সামঞ্জস্যতাই আমাদের প্রয়োজন ছিল।",
        name: "তানভীর আহমেদ",
        role: "ক্রয় প্রধান, ফ্রেশ ফুডস লিমিটেড",
        logo: "ফ্রেশ ফুডস",
      },
    ],
  },
  news: {
    heading: "সর্বশেষ সংবাদ",
    subtitle: "আমাদের খামার, অংশীদার ও কৃষির ভবিষ্যৎ নিয়ে গল্প।",
    viewMore: "আরও দেখুন",
    items: [
      {
        category: "টেকসইতা",
        date: "১২ জুন, ২০২৬",
        title: "পুনর্জীবী ধান চাষ ৫,০০০ একরে পৌঁছেছে",
        excerpt:
          "আমাদের মাটি-প্রথম কর্মসূচি তিনটি জেলায় সম্প্রসারিত হয়েছে, পানির ব্যবহার কমিয়ে কৃষকের আয় বাড়িয়েছে।",
        image: `${PHOTOS_IMG}/news-rice-cultivation.jpg`,
      },
      {
        category: "অংশীদারিত্ব",
        date: "২৮ মে, ২০২৬",
        title: "রাবেয়া হোসেন অ্যাগ্রো ফার্ম আঞ্চলিক সমবায়ের সাথে অংশীদারিত্ব করেছে",
        excerpt:
          "নতুন চুক্তি ২,০০০-এর বেশি ক্ষুদ্র কৃষকের জন্য নিশ্চিত ক্রয় ও কৃষি সহায়তা এনে দেয়।",
        image: `${PHOTOS_IMG}/news-cooperative-partnership.jpg`,
      },
      {
        category: "ফসল",
        date: "০৩ মে, ২০২৬",
        title: "আমাদের কৃষকদের জন্য রেকর্ড সবজির মৌসুম",
        excerpt:
          "অনুকূল আবহাওয়া ও উন্নত পদ্ধতি রেকর্ড পরিমাণ তাজা পণ্যের ফসল এনে দিয়েছে।",
        image: `${PHOTOS_IMG}/news-vegetable-harvest.jpg`,
      },
    ],
  },
  cta: {
    heading: "রাবেয়া হোসেন অ্যাগ্রো ফার্মর সাথে বেড়ে উঠুন",
    button: "আমাদের সাথে অংশীদার হোন",
  },
  footer: {
    newsletterHeading: "যোগাযোগে থাকুন",
    emailPlaceholder: "আপনার ইমেইল",
    submitLabel: "জমা দিন",
    consent: "আমি রাবেয়া হোসেন অ্যাগ্রো ফার্ম থেকে আপডেট পেতে সম্মত। আমি জানি যে আমি যেকোনো সময় সম্মতি প্রত্যাহার করতে পারি।",
    contactHeading: "যোগাযোগ করুন",
    email: "agro@mrgroup.com",
    phone: "+৮৮০ ১XXX-XXXXXX",
    addressHeading: "ঠিকানা",
    address: ["এমআর টাওয়ার, গুলশান এভিনিউ", "ঢাকা ১২১২, বাংলাদেশ"],
    followHeading: "অনুসরণ করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "আমরা মাটি থেকে বেড়ে উঠি।",
    legal: "© ২০২৬ রাবেয়া হোসেন অ্যাগ্রো ফার্ম, এমআর গ্রুপের একটি প্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের গল্প",
      title: "একবারে একটি ফসল করে বাংলাদেশকে বেড়ে তোলা",
      description:
        "একটি একক সংগ্রহ ডেস্ক থেকে কৃষক ও ক্রেতাদের একটি সারাদেশব্যাপী নেটওয়ার্ক — এই হলো রাবেয়া হোসেন অ্যাগ্রো ফার্মর গল্প।",
      image: `${IMG}/hero.jpg`,
    },
    storyHeading: "যেখান থেকে শুরু",
    storyParagraphs: [
      "রাবেয়া হোসেন অ্যাগ্রো ফার্মর যাত্রা শুরু হয়েছিল ২০১৫ সালে একটি সাধারণ ধারণা নিয়ে: কৃষকরা ন্যায্য মূল্য পাওয়ার যোগ্য, এবং ক্রেতারা বিশ্বাসযোগ্য পণ্য পাওয়ার যোগ্য। ঢাকায় একটি ছোট সংগ্রহ ডেস্ক হিসেবে শুরু হওয়া এই উদ্যোগ আজ বাংলাদেশের সব আটটি বিভাগে বিস্তৃত একটি নেটওয়ার্কে পরিণত হয়েছে।",
      "আজ আমরা ১২,০০০-এরও বেশি কৃষকের সাথে অংশীদারিত্ব করি, কৃষি সহায়তা, নিশ্চিত ক্রয়, এবং স্বচ্ছ মূল্য প্রদান করি — একইসাথে প্রক্রিয়াকারী ও খুচরা বিক্রেতাদের জন্য মাঠ থেকে ডেলিভারি পর্যন্ত একটি নির্ভরযোগ্য, শনাক্তযোগ্য সরবরাহ ব্যবস্থা নিশ্চিত করি।",
      "এমআর গ্রুপের অংশ হিসেবে, আমরা লজিস্টিক্স, উৎপাদন ও বাণিজ্যে কয়েক দশকের অভিজ্ঞতা কাজে লাগিয়ে আমাদের খাদ্য উৎপাদনকারীদের জন্য একটি আধুনিক কৃষি ব্যবসা কেমন হতে পারে তার মান উন্নত করে চলেছি।",
    ],
    storyImage: "/images/gallery/harvest.jpg",
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "ন্যায্য, স্বচ্ছ ও টেকসই কৃষি বাণিজ্যের মাধ্যমে কৃষক ও ক্রেতাদের সংযুক্ত করা — গ্রামীণ জীবিকাকে শক্তিশালী করা এবং সারাদেশে মানসম্পন্ন পণ্য সরবরাহ করা।",
    visionHeading: "আমাদের দৃষ্টিভঙ্গি",
    vision:
      "এমন একটি বাংলাদেশ যেখানে প্রতিটি কৃষকের একটি নির্ভরযোগ্য বাজার থাকবে, প্রতিটি ফসলের ন্যায্য মূল্যায়ন হবে, এবং প্রতিটি ক্রেতা তাদের পণ্যের উৎস সম্পর্কে নিশ্চিত থাকতে পারবে।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "ন্যায্যতা", body: "প্রতিটি কৃষকের জন্য স্বচ্ছ মূল্য ও সময়মতো পরিশোধ।" },
      { title: "টেকসইতা", body: "পরবর্তী ফসলের জন্য জমি রক্ষাকারী পুনর্জীবী পদ্ধতি।" },
      { title: "শনাক্তযোগ্যতা", body: "খামার থেকে ডেলিভারি পর্যন্ত ক্রেতারা যাচাই করতে পারেন এমন সরবরাহ ব্যবস্থা।" },
      { title: "অংশীদারিত্ব", body: "এককালীন লেনদেন নয়, বিশ্বাসের উপর গড়ে ওঠা দীর্ঘমেয়াদী সম্পর্ক।" },
    ],
  },
  productsPage: {
    header: {
      eyebrow: "আমরা যা উৎপাদন ও পালন করি",
      title: "আমাদের জমি, পুকুর ও মাঠ থেকে তাজা কৃষিপণ্য",
      description: "রাবেয়া হোসেন অ্যাগ্রো ফার্ম সারা বাংলাদেশে গবাদি পশু পালন করে, মাছ চাষ করে এবং প্রধান শস্য ফলায় — আমাদের খামার থেকে সরাসরি আপনার ব্যবসায় শনাক্তযোগ্য, তাজা কৃষিপণ্য পৌঁছে দেয়।",
      image: `${PHOTOS_IMG}/produce-crate.jpg`,
    },
    intro:
      "আমরা যা উৎপাদন ও পালন করি তা ঘুরে দেখুন — আমাদের গবাদি খামার, মৎস্য ও শস্যক্ষেত্রের পণ্য শ্রেণি অনুযায়ী দেখুন, প্রতিটি চালান মাঠ থেকে সরবরাহ পর্যন্ত শনাক্তযোগ্য।",
    allLabel: "সব পণ্য",
    viewDetailsLabel: "বিস্তারিত দেখুন",
    categories: [
      {
        slug: "cattle-farming",
        name: "গবাদি পশু পালন",
        description: "আমাদের নিজস্ব খামারে পালিত দুগ্ধ ও মাংসের গরু।",
      },
      {
        slug: "fishery",
        name: "মৎস্য ও অ্যাকুয়াকালচার",
        description: "আমাদের পুকুর ও খাঁচায় চাষকৃত মিঠাপানির মাছ ও চিংড়ি।",
      },
      {
        slug: "crop-farming",
        name: "শস্য চাষ",
        description: "আমাদের মাঠজুড়ে ফলানো ধান, সবজি ও প্রধান শস্য।",
      },
    ],
    products: [
      {
        slug: "fresh-dairy-milk",
        category: "cattle-farming",
        name: "তাজা দুগ্ধ (দুধ)",
        tagline: "আমাদের নিজস্ব দুগ্ধ পাল থেকে প্রতিদিন সংগৃহীত তাজা দুধ।",
        image: `${PRODUCTS_IMG}/fresh-dairy-milk.jpg`,
        description:
          "আমাদের দুধ আসে খামারের ঘাস-খাওয়া গাভী থেকে, দোহনের কয়েক ঘণ্টার মধ্যে শীতল করে তাজা অবস্থায় সরবরাহ করা হয় — যাতে থাকে খামার-তাজা দুধের স্বাভাবিক ক্রিম ও ঘনত্ব।",
        specs: [
          { label: "উৎস", value: "নিজস্ব দুগ্ধ পাল" },
          { label: "ধরন", value: "কাঁচা, শীতল" },
          { label: "সরবরাহ", value: "পাইকারি ও খুচরা" },
          { label: "সহজলভ্যতা", value: "সারা বছর" },
        ],
        benefits: [
          "আমাদের নিজস্ব খামার থেকে প্রতিদিন সংগৃহীত",
          "খামার থেকে সরবরাহ পর্যন্ত শীতল চেইন",
          "কোনো সংরক্ষণকারী যোগ করা হয় না",
          "স্বাভাবিকভাবে সমৃদ্ধ ক্রিম",
        ],
      },
      {
        slug: "beef-cattle",
        category: "cattle-farming",
        name: "মাংসের গরু",
        tagline: "মানসম্মত গোমাংসের জন্য খামারে পালিত সুস্থ গরু।",
        image: `${PRODUCTS_IMG}/beef-cattle.jpg`,
        description:
          "আমরা খোলা চারণভূমি ও সুব্যবস্থাপিত শেডে দেশি ও সংকর জাতের গরু পালন করি, ঘাস ও সবুজ খাদ্যে সুস্থভাবে বেড়ে ওঠা এই গরু থেকে খামার পর্যন্ত শনাক্তযোগ্য মানসম্মত গোমাংস পাওয়া যায়।",
        specs: [
          { label: "পালন", value: "চারণভূমি ও শেড" },
          { label: "জাত", value: "দেশি ও সংকর" },
          { label: "ওজন পরিসর", value: "৩০০–৪৫০ কেজি" },
          { label: "সহজলভ্যতা", value: "সারা বছর" },
        ],
        benefits: [
          "আমাদের নিজস্ব খামারে পালিত",
          "ঘাস ও সবুজ খাদ্যে পালিত",
          "কোনো বৃদ্ধি হরমোন নেই",
          "খামার পর্যন্ত সম্পূর্ণ শনাক্তযোগ্য",
        ],
      },
      {
        slug: "dairy-breeding-cattle",
        category: "cattle-farming",
        name: "দুগ্ধ ও প্রজনন গরু",
        tagline: "উৎপাদনশীল পালের জন্য উন্নত জাতের দুগ্ধ গাভী ও বকনা।",
        image: `${PRODUCTS_IMG}/dairy-cattle.jpg`,
        description:
          "আমাদের দুগ্ধ ও প্রজনন গরু শক্তিশালী দুধ-উৎপাদন বৈশিষ্ট্যের জন্য নির্বাচিত এবং বিশেষজ্ঞ পশুচিকিৎসা তত্ত্বাবধানে পালিত, যা কৃষকদের সম্পূর্ণ খামার রেকর্ডসহ সুস্থ ও উৎপাদনশীল পশু দেয়।",
        specs: [
          { label: "উদ্দেশ্য", value: "দুগ্ধ ও প্রজনন" },
          { label: "জাত", value: "হলস্টাইন-ক্রস, সাহিওয়াল" },
          { label: "পরিচর্যা", value: "পশুচিকিৎসক-তত্ত্বাবধানে" },
          { label: "সহজলভ্যতা", value: "মৌসুমি" },
        ],
        benefits: [
          "টিকাপ্রাপ্ত ও স্বাস্থ্য-পরীক্ষিত",
          "শক্তিশালী দুধ-উৎপাদন বৈশিষ্ট্য",
          "বিশেষজ্ঞ তত্ত্বাবধানে পালিত",
          "সম্পূর্ণ খামার রেকর্ড প্রদান",
        ],
      },
      {
        slug: "farmed-fish",
        category: "fishery",
        name: "তাজা চাষের মাছ",
        tagline: "আমাদের মিঠাপানির পুকুরে চাষকৃত তেলাপিয়া, রুই ও কার্প।",
        image: `${PRODUCTS_IMG}/farmed-fish.jpg`,
        description:
          "আমরা পরিষ্কার মিঠাপানির পুকুরে তেলাপিয়া, রুই ও কার্প চাষ করি, চাহিদা অনুযায়ী আহরণ করে শীতল চেইনে সরবরাহ করি যাতে মাছ তাজা অবস্থায় সামঞ্জস্যপূর্ণ আকার ও মানে বাজারে পৌঁছে।",
        specs: [
          { label: "চাষ পদ্ধতি", value: "পুকুরে চাষ" },
          { label: "প্রজাতি", value: "তেলাপিয়া, রুই, কার্প" },
          { label: "আহরণ আকার", value: "৫০০–৯০০ গ্রাম" },
          { label: "সহজলভ্যতা", value: "সারা বছর" },
        ],
        benefits: [
          "মিঠাপানির পুকুরে চাষকৃত",
          "চাহিদা অনুযায়ী আহরিত",
          "সামঞ্জস্যপূর্ণ আকার ও মান",
          "শীতল চেইনে সরবরাহ",
        ],
      },
      {
        slug: "pangasius-aquaculture",
        category: "fishery",
        name: "পাঙাশ ও পুকুরের মাছ",
        tagline: "সুব্যবস্থাপিত অ্যাকুয়াকালচার পুকুরে চাষকৃত উচ্চ-ফলনশীল পাঙাশ।",
        image: `${PRODUCTS_IMG}/aquaculture-ponds.jpg`,
        description:
          "পানির মান পর্যবেক্ষণসহ সুব্যবস্থাপিত পুকুর ও খাঁচায় চাষ করা আমাদের পাঙাশ স্থির, উচ্চ-ফলন আহরণ দেয় যা পুকুর থেকে বাজার পর্যন্ত শনাক্তযোগ্য।",
        specs: [
          { label: "চাষ পদ্ধতি", value: "ব্যবস্থাপিত খাঁচা/পুকুর" },
          { label: "প্রজাতি", value: "পাঙাশ" },
          { label: "আহরণ আকার", value: "৮০০ গ্রাম – ১.২ কেজি" },
          { label: "সহজলভ্যতা", value: "সারা বছর" },
        ],
        benefits: [
          "ব্যবস্থাপিত অ্যাকুয়াকালচার ব্যবস্থা",
          "পানির মান পর্যবেক্ষিত",
          "কার্যকর, উচ্চ-ফলন চাষ",
          "পুকুর থেকে বাজার পর্যন্ত শনাক্তযোগ্য",
        ],
      },
      {
        slug: "freshwater-prawn",
        category: "fishery",
        name: "মিঠাপানির চিংড়ি (গলদা)",
        tagline: "আমাদের পরিষ্কার পানির পুকুরে চাষকৃত উন্নত মানের গলদা চিংড়ি।",
        image: `${PRODUCTS_IMG}/freshwater-prawn.jpg`,
        description:
          "আমাদের গলদা চিংড়ি পুকুরে চাষ করা হয় এবং আকার অনুযায়ী হাতে বাছাই করে আহরণের সাথে সাথে শীতল করা হয়, যাতে রপ্তানি-মানের গুণমান ক্রেতা পর্যন্ত বজায় থাকে।",
        specs: [
          { label: "চাষ পদ্ধতি", value: "পুকুরে চাষ" },
          { label: "প্রজাতি", value: "গলদা / মিঠাপানির চিংড়ি" },
          { label: "গ্রেড", value: "রপ্তানি মান" },
          { label: "সহজলভ্যতা", value: "মৌসুমি" },
        ],
        benefits: [
          "পরিষ্কার পুকুরে খামার-চাষকৃত",
          "আকার অনুযায়ী হাতে বাছাই",
          "আহরণের সাথে সাথে শীতল",
          "রপ্তানি-মানের গুণমান",
        ],
      },
      {
        slug: "paddy-rice",
        category: "crop-farming",
        name: "ধান",
        tagline: "আমাদের অংশীদার মাঠজুড়ে ফলানো প্রধান ও সুগন্ধি ধান।",
        image: `${PRODUCTS_IMG}/paddy-rice.jpg`,
        description:
          "আমন ও বোরো মৌসুমজুড়ে আমাদের সারাদেশব্যাপী কৃষক নেটওয়ার্কের ফলানো ধান পরিষ্কার, গ্রেডিং ও প্রধান এবং সুগন্ধি জাতের জন্য সামঞ্জস্যপূর্ণ মানে মাড়াই করা হয়।",
        specs: [
          { label: "ধরন", value: "ধান / মিলড চাল" },
          { label: "জাত", value: "ব্রি ও সুগন্ধি" },
          { label: "মৌসুম", value: "আমন ও বোরো" },
          { label: "সহজলভ্যতা", value: "সারা বছর" },
        ],
        benefits: [
          "আমাদের কৃষক নেটওয়ার্কের ফলানো",
          "একাধিক জাত",
          "পরিষ্কার ও গ্রেডকৃত",
          "টেকসই চাষ",
        ],
      },
      {
        slug: "fresh-vegetables",
        category: "crop-farming",
        name: "তাজা সবজি",
        tagline: "মাঠ থেকে তাজা আহরিত মৌসুমি সবজি।",
        image: `${PRODUCTS_IMG}/fresh-vegetables.jpg`,
        description:
          "শাকসবজি থেকে মূল সবজি পর্যন্ত, আমরা আমাদের চুক্তিভিত্তিক খামার থেকে বিস্তৃত মৌসুমি পরিসর একই দিনে আহরণ করে শীতল চেইনে গ্রেডিং করে বাজারের জন্য প্রস্তুত করি।",
        specs: [
          { label: "পরিসর", value: "২০+ জাত" },
          { label: "উৎস", value: "চুক্তিভিত্তিক খামার" },
          { label: "ব্যবস্থাপনা", value: "একই দিনে আহরণ" },
          { label: "সহজলভ্যতা", value: "মৌসুমি" },
        ],
        benefits: [
          "মাঠ-তাজা, একই দিনে",
          "বিস্তৃত মৌসুমি পরিসর",
          "বাজারের জন্য গ্রেডকৃত",
          "শীতল চেইন ব্যবস্থাপনা",
        ],
      },
      {
        slug: "maize",
        category: "crop-farming",
        name: "ভুট্টা",
        tagline: "খাদ্য ও বাণিজ্যিক সরবরাহের জন্য মাঠে ফলানো ভুট্টা।",
        image: `${PRODUCTS_IMG}/maize.jpg`,
        description:
          "আমাদের অংশীদার খামারজুড়ে ফলানো এবং সংরক্ষণযোগ্য আর্দ্রতায় শুকানো আমাদের দানা ভুট্টা পরিষ্কার ও মান-পরীক্ষিত, যা খাদ্য ও বাণিজ্যিক ক্রেতাদের জন্য নির্ভরযোগ্য পাইকারি সরবরাহ নিশ্চিত করে।",
        specs: [
          { label: "ধরন", value: "দানা ভুট্টা" },
          { label: "ব্যবহার", value: "খাদ্য ও বাণিজ্যিক" },
          { label: "আর্দ্রতা", value: "শুকনো, ≤১৪%" },
          { label: "সহজলভ্যতা", value: "আহরণ-পরবর্তী" },
        ],
        benefits: [
          "অংশীদার খামারজুড়ে ফলানো",
          "শুকানো ও পরিষ্কার",
          "সামঞ্জস্যপূর্ণ দানার মান",
          "পাইকারি সরবরাহ উপলব্ধ",
        ],
      },
    ],
    backLabel: "পণ্যে ফিরে যান",
    specsHeading: "পণ্যের বিবরণ",
    benefitsHeading: "মূল সুবিধাসমূহ",
    relatedHeading: "আপনি আরও পছন্দ করতে পারেন",
    enquireLabel: "এই পণ্য সম্পর্কে জিজ্ঞাসা করুন",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "আমাদের খামার ও সুবিধাদির জীবন",
      description: "রাবেয়া হোসেন অ্যাগ্রো ফার্মর পেছনের মানুষ, স্থান ও পণ্যের এক ঝলক।",
      image: `${IMG}/hero.jpg`,
    },
    intro:
      "আমাদের খামার, প্রক্রিয়াকরণ ও বিতরণের ছবি ও ভিডিও। ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজে দেখুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ করুন",
      title: "আসুন একসাথে বেড়ে উঠি",
      description: "আপনি কৃষক, ক্রেতা বা আমাদের সাথে অংশীদার হতে চান — আমরা আপনার কথা শুনতে চাই।",
      image: `${IMG}/field.svg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "আমাদের দল সাধারণত এক কার্যদিবসের মধ্যে সাড়া দেয়।",
    officeHeading: "প্রধান কার্যালয়",
    addressLabel: "ঠিকানা",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
  },
};

export const agroContent: Record<AppLocale, AgroContent> = { en, bn };
