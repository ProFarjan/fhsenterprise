import type { AppLocale } from "@/i18n/routing";
import type { FeedContent } from "@/types/feed";

const IMG = "/images/companies/feed";
const HERO = `${IMG}/hero`;
const CAT = `${IMG}/categories`;
const PROD = `${IMG}/products`;

const en: FeedContent = {
  name: "MR Feed",
  tagline: "Scientifically formulated cattle, poultry, and fish feed trusted by farmers nationwide.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Categories",
      href: "/categories",
      children: [
        { label: "Poultry Feed", href: "/categories/poultry-feed" },
        { label: "Cattle Feed", href: "/categories/cattle-feed" },
        { label: "Fish Feed", href: "/categories/fish-feed" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/poultry.jpg`,
        eyebrow: "Poultry Nutrition",
        headingLead: "Feed that builds",
        headingEmphasis: "healthier",
        headingTail: "flocks",
        body: "Precision-milled poultry feed that supports uniform growth, strong immunity, and better yields — from day-old chick to layer.",
        ctaLabel: "Explore Poultry Feed",
        ctaHref: "/categories/poultry-feed",
      },
      {
        image: `${HERO}/cattle.jpg`,
        eyebrow: "Cattle Nutrition",
        headingLead: "Stronger herds,",
        headingEmphasis: "richer",
        headingTail: "yields",
        body: "Energy-balanced cattle rations that lift milk production and finishing weight while keeping your herd in peak health.",
        ctaLabel: "Explore Cattle Feed",
        ctaHref: "/categories/cattle-feed",
      },
      {
        image: `${HERO}/fish.jpg`,
        eyebrow: "Aqua Nutrition",
        headingLead: "Aquaculture feed for",
        headingEmphasis: "thriving",
        headingTail: "ponds",
        body: "Floating and sinking feeds engineered for fast, efficient growth and cleaner water across every stage of the pond.",
        ctaLabel: "Explore Fish Feed",
        ctaHref: "/categories/fish-feed",
      },
      {
        image: `${HERO}/farm.jpg`,
        eyebrow: "Trusted Nationwide",
        headingLead: "Nutrition that grows",
        headingEmphasis: "Bangladesh",
        headingTail: "",
        body: "From our mills to farms in every division — dependable, traceable feed that farmers have trusted for over a decade.",
        ctaLabel: "About MR Feed",
        ctaHref: "/about",
      },
    ],
  },
  why: {
    eyebrow: "Why MR Feed",
    headingLead: "Nutrition backed by",
    headingEmphasis: "science",
    intro:
      "Every batch of MR Feed is formulated by nutritionists, milled to consistent standards, and quality-checked before it ever reaches your farm.",
    features: [
      {
        icon: "flask",
        title: "Scientifically formulated",
        body: "Rations balanced by animal nutritionists for the right energy, protein, and mineral profile at every growth stage.",
      },
      {
        icon: "shield",
        title: "Quality assured",
        body: "In-house lab testing on every batch — from raw material intake to the finished bag that leaves our mill.",
      },
      {
        icon: "leaf",
        title: "Clean ingredients",
        body: "Locally sourced grains and premium additives, free from harmful growth promoters and contaminants.",
      },
      {
        icon: "truck",
        title: "Nationwide supply",
        body: "A dealer and distribution network that keeps fresh feed within reach of farmers across the country.",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "Our Categories",
    heading: "Feed for every farm",
    subtitle: "Purpose-built nutrition across three specialised categories, each formulated for the animals you raise.",
    exploreLabel: "View products",
  },
  featured: {
    eyebrow: "Featured Products",
    heading: "Farmer favourites",
    subtitle: "A selection of our most trusted formulas, milled fresh and bagged to consistent standards.",
    viewAllLabel: "View all products",
  },
  stats: {
    eyebrow: "Our impact",
    heading: "Trusted at scale",
    items: [
      { value: "15+", label: "Years of milling" },
      { value: "30K+", label: "Farmers served" },
      { value: "120K", label: "Tonnes milled yearly" },
      { value: "64", label: "Districts covered" },
    ],
  },
  process: {
    eyebrow: "From mill to farm",
    heading: "How every bag is made",
    body: "Consistency is engineered, not accidental. Our milling process is controlled and documented at every step so each bag performs the same, batch after batch.",
    image: `${IMG}/grain.jpg`,
    steps: [
      { title: "Sourcing", body: "Grains and proteins selected and screened for quality on intake." },
      { title: "Formulation", body: "Nutritionist-designed recipes balanced for each animal and stage." },
      { title: "Precision milling", body: "Ground, mixed, and pelleted to exact size and density." },
      { title: "Lab testing", body: "Every batch verified before packaging and dispatch." },
    ],
  },
  testimonials: {
    heading: "Trusted by farmers",
    subtitle: "The people who feed their animals MR Feed, season after season.",
    items: [
      {
        quote: "Since switching to MR Feed layer ration, my egg production has been steady and shell quality is noticeably better.",
        name: "Rahima Khatun",
        role: "Layer farm owner, Gazipur",
      },
      {
        quote: "The dairy feed keeps my cows healthy and milk yield up. Consistent quality in every bag is what keeps me loyal.",
        name: "Md. Sohel Rana",
        role: "Dairy farmer, Pabna",
      },
      {
        quote: "Their floating fish feed barely wastes and my tilapia reach harvest size faster. Best value in the market.",
        name: "Abdul Mannan",
        role: "Fish farmer, Mymensingh",
      },
    ],
  },
  cta: {
    heading: "Ready to feed better?",
    body: "Talk to our team about the right feed for your farm, or find your nearest MR Feed dealer.",
    button: "Get in touch",
  },
  categories: [
    {
      slug: "poultry-feed",
      name: "Poultry Feed",
      icon: "poultry",
      tagline: "Healthy, productive flocks",
      description:
        "Balanced starter, grower, and layer feeds that support strong immunity, uniform growth, and steady egg production.",
      image: `${CAT}/poultry.jpg`,
    },
    {
      slug: "cattle-feed",
      name: "Cattle Feed",
      icon: "cattle",
      tagline: "Stronger cattle, better yields",
      description:
        "Energy-dense rations for dairy and beef cattle at every stage, from calf starter to lactation and finishing feed.",
      image: `${CAT}/cattle.jpg`,
    },
    {
      slug: "fish-feed",
      name: "Fish Feed",
      icon: "fish",
      tagline: "Thriving, productive ponds",
      description:
        "Floating and sinking aquaculture feeds for tilapia, pangasius, and shrimp — engineered for growth and water quality.",
      image: `${CAT}/fish.jpg`,
    },
  ],
  products: [
    {
      slug: "dairy-gold",
      category: "cattle-feed",
      name: "Dairy Gold Cattle Feed",
      tagline: "High-energy feed formulated to boost milk yield in dairy cows.",
      image: `${PROD}/dairy-gold.jpg`,
      description:
        "Dairy Gold is a pelleted concentrate feed designed for lactating cows, blending energy-dense grains with balanced protein to support consistent milk production without compromising herd health.",
      specs: [
        { label: "Protein Content", value: "18%" },
        { label: "Form", value: "Pellet" },
        { label: "Pack Size", value: "25 kg / 50 kg bag" },
        { label: "Recommended For", value: "Lactating dairy cows" },
      ],
      benefits: [
        "Improves milk yield and quality",
        "Balanced vitamin and mineral profile",
        "Made from locally sourced grains",
        "Supports rumen health",
      ],
    },
    {
      slug: "beef-booster",
      category: "cattle-feed",
      name: "Beef Booster Cattle Feed",
      tagline: "A growth-focused ration for beef cattle nearing market weight.",
      image: `${PROD}/beef-booster.jpg`,
      description:
        "Beef Booster is formulated for the finishing stage, delivering the energy and protein beef cattle need to reach market weight efficiently while maintaining feed conversion.",
      specs: [
        { label: "Protein Content", value: "16%" },
        { label: "Form", value: "Pellet" },
        { label: "Pack Size", value: "50 kg bag" },
        { label: "Recommended For", value: "Finishing beef cattle" },
      ],
      benefits: [
        "Faster, efficient weight gain",
        "Improved feed conversion ratio",
        "Fortified with essential minerals",
        "Consistent batch-to-batch quality",
      ],
    },
    {
      slug: "calf-starter",
      category: "cattle-feed",
      name: "Calf Starter Feed",
      tagline: "Easy-to-digest starter feed for calves transitioning off milk.",
      image: `${PROD}/calf-starter.jpg`,
      description:
        "Calf Starter supports young calves through weaning with a palatable, easy-to-digest formula that builds strong rumen development from an early age.",
      specs: [
        { label: "Protein Content", value: "20%" },
        { label: "Form", value: "Crumble" },
        { label: "Pack Size", value: "25 kg bag" },
        { label: "Recommended For", value: "Calves 1–4 months" },
      ],
      benefits: [
        "Supports early rumen development",
        "Highly palatable crumble texture",
        "Boosts weight gain during weaning",
        "Enriched with probiotics",
      ],
    },
    {
      slug: "broiler-grower",
      category: "poultry-feed",
      name: "Broiler Grower Feed",
      tagline: "Balanced grower feed for fast, healthy broiler development.",
      image: `${PROD}/broiler-grower.png`,
      description:
        "Broiler Grower is formulated for the grower phase, balancing energy and amino acids to keep broilers on track for healthy, uniform growth.",
      specs: [
        { label: "Protein Content", value: "21%" },
        { label: "Form", value: "Pellet" },
        { label: "Pack Size", value: "25 kg / 50 kg bag" },
        { label: "Recommended For", value: "Broilers 2–4 weeks" },
      ],
      benefits: [
        "Uniform, consistent growth",
        "Optimized amino acid balance",
        "Supports strong bone development",
        "Low feed wastage pellet form",
      ],
    },
    {
      slug: "layer-premium",
      category: "poultry-feed",
      name: "Layer Premium Feed",
      tagline: "Calcium-rich feed that keeps laying hens productive.",
      image: `${PROD}/layer-premium.jpg`,
      description:
        "Layer Premium is formulated for laying hens, with the calcium and nutrient balance needed to sustain strong shell quality and steady egg production.",
      specs: [
        { label: "Protein Content", value: "17%" },
        { label: "Form", value: "Mash" },
        { label: "Pack Size", value: "50 kg bag" },
        { label: "Recommended For", value: "Laying hens" },
      ],
      benefits: [
        "Stronger, more consistent eggshells",
        "Sustains high egg-laying rate",
        "Balanced calcium-phosphorus ratio",
        "Supports long-term flock health",
      ],
    },
    {
      slug: "chick-starter",
      category: "poultry-feed",
      name: "Chick Starter Feed",
      tagline: "High-protein starter feed for day-old to three-week chicks.",
      image: `${PROD}/chick-starter.jpg`,
      description:
        "Chick Starter gives day-old chicks the protein-rich foundation they need for a strong immune system and steady early growth.",
      specs: [
        { label: "Protein Content", value: "22%" },
        { label: "Form", value: "Crumble" },
        { label: "Pack Size", value: "25 kg bag" },
        { label: "Recommended For", value: "Chicks 0–3 weeks" },
      ],
      benefits: [
        "Supports strong early immunity",
        "High-protein for rapid growth",
        "Easy-to-eat crumble texture",
        "Fortified with essential vitamins",
      ],
    },
    {
      slug: "tilapia-grower",
      category: "fish-feed",
      name: "Tilapia Grower Feed",
      tagline: "Floating pellets formulated for fast-growing tilapia ponds.",
      image: `${PROD}/tilapia-grower.jpg`,
      description:
        "Tilapia Grower floats on the water's surface, letting farmers monitor feeding activity while delivering the protein tilapia need for steady growth.",
      specs: [
        { label: "Protein Content", value: "28%" },
        { label: "Form", value: "Floating Pellet" },
        { label: "Pack Size", value: "25 kg bag" },
        { label: "Recommended For", value: "Grow-out tilapia ponds" },
      ],
      benefits: [
        "Floats for easy feeding monitoring",
        "Reduces water quality degradation",
        "Improves feed conversion ratio",
        "Fortified with fish-specific vitamins",
      ],
    },
    {
      slug: "pangasius-floating",
      category: "fish-feed",
      name: "Pangasius Floating Feed",
      tagline: "Cost-efficient floating feed for pangasius (pangas) culture.",
      image: `${PROD}/pangasius-floating.jpg`,
      description:
        "Pangasius Floating Feed is built for high-density pangas ponds, balancing cost efficiency with the nutrition needed for steady growth to harvest size.",
      specs: [
        { label: "Protein Content", value: "26%" },
        { label: "Form", value: "Floating Pellet" },
        { label: "Pack Size", value: "25 kg / 40 kg bag" },
        { label: "Recommended For", value: "Pangasius grow-out ponds" },
      ],
      benefits: [
        "Cost-efficient for high-density ponds",
        "Consistent floating pellet quality",
        "Supports uniform harvest size",
        "Minimizes feed wastage",
      ],
    },
    {
      slug: "shrimp-starter",
      category: "fish-feed",
      name: "Shrimp Starter Feed",
      tagline: "Fine-crumble starter feed for post-larval shrimp.",
      image: `${PROD}/shrimp-starter.jpg`,
      description:
        "Shrimp Starter is a fine-textured feed for post-larval shrimp, designed for fast, healthy early growth.",
      specs: [
        { label: "Protein Content", value: "35%" },
        { label: "Form", value: "Fine Crumble" },
        { label: "Pack Size", value: "10 kg / 25 kg bag" },
        { label: "Recommended For", value: "Post-larval shrimp" },
      ],
      benefits: [
        "High-protein early nutrition",
        "Fast-digesting fine texture",
        "Improves early survival rates",
        "Helps stabilize pond water quality",
      ],
    },
  ],
  labels: {
    allProducts: "All Products",
    viewDetails: "View details",
    backToCategories: "All categories",
    backToCategory: "Back to category",
    inCategory: "in this category",
    specsHeading: "Specifications",
    benefitsHeading: "Key Benefits",
    relatedHeading: "You may also like",
    enquire: "Enquire about this product",
    productsCount: "products",
  },
  footer: {
    blurb: "Scientifically formulated cattle, poultry, and fish feed, milled to consistent, traceable standards for farmers across Bangladesh.",
    exploreHeading: "Explore",
    contactHeading: "Contact us",
    email: "feed@mrgroup.com",
    phone: "+880 1XXX-XXXXXX",
    addressHeading: "Address",
    address: ["MR Feed Mill, Gulshan Avenue", "Dhaka 1212, Bangladesh"],
    followHeading: "Follow us",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© 2026 MR Feed, a company of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "About Us",
      title: "Feeding the nation's farms with science",
      description: "From a single feed mill to a nationwide brand trusted by tens of thousands of farmers — this is MR Feed.",
      image: `${IMG}/products/header-feed-pellets.jpg`,
    },
    storyHeading: "Where it started",
    storyParagraphs: [
      "MR Feed was founded to solve a simple problem: farmers deserved feed they could trust, batch after batch. We started with a single mill and a team of animal nutritionists determined to raise the standard of livestock and aquaculture nutrition in Bangladesh.",
      "Today, our mills produce scientifically formulated cattle, poultry, and fish feed at scale — milled to consistent, traceable standards and delivered through a dealer network that reaches farms in every division of the country.",
      "As part of MR Group, we combine decades of trade, logistics, and manufacturing expertise with modern nutrition science to help farmers raise healthier animals and earn better returns.",
    ],
    storyImage: `${IMG}/handshake.jpg`,
    missionHeading: "Our mission",
    mission:
      "To improve farm productivity and profitability across Bangladesh by producing safe, scientifically formulated animal feed of consistent, trusted quality.",
    visionHeading: "Our vision",
    vision:
      "A Bangladesh where every farmer — large or small — has access to affordable, high-quality nutrition for their livestock, poultry, and fish.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Quality", body: "Consistent, lab-tested feed that performs the same in every bag." },
      { title: "Science", body: "Formulas designed by nutritionists, not guesswork." },
      { title: "Trust", body: "Transparent standards farmers can rely on, season after season." },
      { title: "Partnership", body: "We grow when our farmers grow — their success is our measure." },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "Our Categories",
      title: "Feed formulated for every stage of growth",
      description: "Browse our three feed categories to find the right nutrition for your poultry, cattle, or fish.",
      image: `${CAT}/cattle.jpg`,
    },
    intro:
      "Every MR Feed formula is milled to consistent, traceable standards. Choose a category to see the products within it.",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Inside MR Feed",
      description: "A look at the animals, farms, and feed behind the MR Feed name.",
      image: `${HERO}/poultry.jpg`,
    },
    intro:
      "Photos and videos from our mills, farms, and the animals that thrive on MR Feed. Toggle between photos and videos to explore.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos available yet.",
    noVideos: "No videos available yet.",
  },
  contactPage: {
    header: {
      eyebrow: "Contact Us",
      title: "Let's talk feed",
      description: "Questions about a product, bulk orders, or becoming a dealer? Our team is here to help.",
      image: `${IMG}/field.jpg`,
    },
    formHeading: "Send us a message",
    formIntro: "Our team typically responds within one business day.",
    officeHeading: "Head office",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const bn: FeedContent = {
  name: "এমআর ফিড",
  tagline: "সারাদেশের কৃষকদের আস্থাভাজন বৈজ্ঞানিকভাবে প্রস্তুতকৃত গরু, পোল্ট্রি ও মাছের খাদ্য।",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    {
      label: "ক্যাটাগরি",
      href: "/categories",
      children: [
        { label: "পোল্ট্রি খাদ্য", href: "/categories/poultry-feed" },
        { label: "গরুর খাদ্য", href: "/categories/cattle-feed" },
        { label: "মাছের খাদ্য", href: "/categories/fish-feed" },
      ],
    },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        image: `${HERO}/poultry.jpg`,
        eyebrow: "পোল্ট্রি পুষ্টি",
        headingLead: "যে খাদ্য গড়ে",
        headingEmphasis: "সুস্থ",
        headingTail: "পাল",
        body: "একদিনের বাচ্চা থেকে লেয়ার পর্যন্ত — সুষম বৃদ্ধি, শক্তিশালী রোগ প্রতিরোধ ক্ষমতা ও উন্নত ফলনের জন্য নির্ভুলভাবে প্রস্তুতকৃত পোল্ট্রি খাদ্য।",
        ctaLabel: "পোল্ট্রি খাদ্য দেখুন",
        ctaHref: "/categories/poultry-feed",
      },
      {
        image: `${HERO}/cattle.jpg`,
        eyebrow: "গবাদি পশুর পুষ্টি",
        headingLead: "শক্তিশালী পাল,",
        headingEmphasis: "সমৃদ্ধ",
        headingTail: "ফলন",
        body: "শক্তি-সুষম গরুর খাদ্য যা আপনার পালকে সুস্থ রেখে দুধ উৎপাদন ও ওজন বৃদ্ধি করে।",
        ctaLabel: "গরুর খাদ্য দেখুন",
        ctaHref: "/categories/cattle-feed",
      },
      {
        image: `${HERO}/fish.jpg`,
        eyebrow: "মৎস্য পুষ্টি",
        headingLead: "সমৃদ্ধ পুকুরের জন্য",
        headingEmphasis: "মাছের",
        headingTail: "খাদ্য",
        body: "পুকুরের প্রতিটি পর্যায়ে দ্রুত, কার্যকর বৃদ্ধি ও পরিষ্কার পানির জন্য তৈরি ভাসমান ও ডুবন্ত খাদ্য।",
        ctaLabel: "মাছের খাদ্য দেখুন",
        ctaHref: "/categories/fish-feed",
      },
      {
        image: `${HERO}/farm.jpg`,
        eyebrow: "সারাদেশে বিশ্বস্ত",
        headingLead: "যে পুষ্টি এগিয়ে নেয়",
        headingEmphasis: "বাংলাদেশকে",
        headingTail: "",
        body: "আমাদের মিল থেকে প্রতিটি বিভাগের খামার পর্যন্ত — এক দশকেরও বেশি সময় ধরে কৃষকদের আস্থাভাজন নির্ভরযোগ্য, শনাক্তযোগ্য খাদ্য।",
        ctaLabel: "এমআর ফিড সম্পর্কে",
        ctaHref: "/about",
      },
    ],
  },
  why: {
    eyebrow: "কেন এমআর ফিড",
    headingLead: "বিজ্ঞানসম্মত",
    headingEmphasis: "পুষ্টি",
    intro:
      "এমআর ফিডের প্রতিটি ব্যাচ পুষ্টিবিদদের দ্বারা প্রস্তুত, সামঞ্জস্যপূর্ণ মানে তৈরি এবং আপনার খামারে পৌঁছানোর আগেই মান পরীক্ষা করা হয়।",
    features: [
      {
        icon: "flask",
        title: "বৈজ্ঞানিকভাবে প্রস্তুত",
        body: "প্রতিটি বৃদ্ধির পর্যায়ে সঠিক শক্তি, প্রোটিন ও খনিজের ভারসাম্যের জন্য পুষ্টিবিদদের তৈরি খাদ্য।",
      },
      {
        icon: "shield",
        title: "মান নিশ্চিত",
        body: "কাঁচামাল গ্রহণ থেকে মিল ছাড়ার আগ পর্যন্ত — প্রতিটি ব্যাচে নিজস্ব ল্যাব পরীক্ষা।",
      },
      {
        icon: "leaf",
        title: "বিশুদ্ধ উপাদান",
        body: "স্থানীয়ভাবে সংগৃহীত শস্য ও প্রিমিয়াম উপাদান, ক্ষতিকর গ্রোথ প্রোমোটার ও দূষণমুক্ত।",
      },
      {
        icon: "truck",
        title: "সারাদেশে সরবরাহ",
        body: "একটি ডিলার ও পরিবেশন নেটওয়ার্ক যা সারাদেশের কৃষকদের কাছে তাজা খাদ্য পৌঁছে দেয়।",
      },
    ],
  },
  categoriesSection: {
    eyebrow: "আমাদের ক্যাটাগরি",
    heading: "প্রতিটি খামারের জন্য খাদ্য",
    subtitle: "তিনটি বিশেষায়িত ক্যাটাগরিতে উদ্দেশ্য-নির্দিষ্ট পুষ্টি, আপনার পালিত প্রাণীর জন্য বিশেষভাবে তৈরি।",
    exploreLabel: "পণ্য দেখুন",
  },
  featured: {
    eyebrow: "নির্বাচিত পণ্য",
    heading: "কৃষকদের প্রিয়",
    subtitle: "আমাদের সবচেয়ে বিশ্বস্ত ফর্মুলার একটি নির্বাচন, তাজা মিল করা ও সামঞ্জস্যপূর্ণ মানে প্যাক করা।",
    viewAllLabel: "সব পণ্য দেখুন",
  },
  stats: {
    eyebrow: "আমাদের অবদান",
    heading: "বৃহৎ পরিসরে বিশ্বস্ত",
    items: [
      { value: "১৫+", label: "বছরের মিলিং" },
      { value: "৩০ হাজার+", label: "সেবাপ্রাপ্ত কৃষক" },
      { value: "১.২ লক্ষ", label: "টন বার্ষিক মিলিং" },
      { value: "৬৪", label: "জেলায় বিস্তৃত" },
    ],
  },
  process: {
    eyebrow: "মিল থেকে খামার",
    heading: "প্রতিটি ব্যাগ যেভাবে তৈরি হয়",
    body: "সামঞ্জস্যতা দুর্ঘটনা নয়, প্রকৌশলের ফল। আমাদের মিলিং প্রক্রিয়া প্রতিটি ধাপে নিয়ন্ত্রিত ও নথিভুক্ত, যাতে প্রতিটি ব্যাগ ব্যাচের পর ব্যাচ একই মান দেয়।",
    image: `${IMG}/grain.jpg`,
    steps: [
      { title: "সংগ্রহ", body: "গ্রহণের সময়ই মান যাচাই করা শস্য ও প্রোটিন।" },
      { title: "ফর্মুলেশন", body: "প্রতিটি প্রাণী ও পর্যায়ের জন্য পুষ্টিবিদদের ভারসাম্যপূর্ণ রেসিপি।" },
      { title: "নির্ভুল মিলিং", body: "সঠিক আকার ও ঘনত্বে গুঁড়া, মিশ্রণ ও পিলেট তৈরি।" },
      { title: "ল্যাব পরীক্ষা", body: "প্যাকেজিং ও প্রেরণের আগে প্রতিটি ব্যাচ যাচাই।" },
    ],
  },
  testimonials: {
    heading: "কৃষকদের আস্থা",
    subtitle: "যারা প্রতি মৌসুমে তাদের প্রাণীকে এমআর ফিড খাওয়ান।",
    items: [
      {
        quote: "এমআর ফিডের লেয়ার খাদ্যে পরিবর্তনের পর আমার ডিম উৎপাদন স্থির এবং খোসার মানও লক্ষণীয়ভাবে ভালো।",
        name: "রহিমা খাতুন",
        role: "লেয়ার খামার মালিক, গাজীপুর",
      },
      {
        quote: "ডেইরি ফিড আমার গরুকে সুস্থ রাখে ও দুধ উৎপাদন বাড়ায়। প্রতিটি ব্যাগে সামঞ্জস্যপূর্ণ মানই আমার আস্থার কারণ।",
        name: "মোঃ সোহেল রানা",
        role: "ডেইরি খামারি, পাবনা",
      },
      {
        quote: "তাদের ভাসমান মাছের খাদ্যে অপচয় কম এবং আমার তেলাপিয়া দ্রুত ফলনযোগ্য আকারে পৌঁছায়। বাজারে সেরা মূল্য।",
        name: "আব্দুল মান্নান",
        role: "মৎস্য চাষি, ময়মনসিংহ",
      },
    ],
  },
  cta: {
    heading: "আরও ভালো খাওয়াতে প্রস্তুত?",
    body: "আপনার খামারের জন্য সঠিক খাদ্য সম্পর্কে আমাদের দলের সাথে কথা বলুন, অথবা নিকটস্থ এমআর ফিড ডিলার খুঁজুন।",
    button: "যোগাযোগ করুন",
  },
  categories: [
    {
      slug: "poultry-feed",
      name: "পোল্ট্রি খাদ্য",
      icon: "poultry",
      tagline: "সুস্থ, উৎপাদনশীল পাল",
      description:
        "সুষম স্টার্টার, গ্রোয়ার ও লেয়ার খাদ্য যা শক্তিশালী রোগ প্রতিরোধ ক্ষমতা, সুষম বৃদ্ধি ও নিয়মিত ডিম উৎপাদনে সহায়তা করে।",
      image: `${CAT}/poultry.jpg`,
    },
    {
      slug: "cattle-feed",
      name: "গরুর খাদ্য",
      icon: "cattle",
      tagline: "শক্তিশালী গরু, উন্নত ফলন",
      description:
        "বাছুরের স্টার্টার থেকে দুগ্ধ ও ফিনিশিং খাদ্য পর্যন্ত, প্রতিটি পর্যায়ে দুগ্ধ ও মাংসের গরুর জন্য শক্তি-সমৃদ্ধ খাদ্য।",
      image: `${CAT}/cattle.jpg`,
    },
    {
      slug: "fish-feed",
      name: "মাছের খাদ্য",
      icon: "fish",
      tagline: "সমৃদ্ধ, উৎপাদনশীল পুকুর",
      description:
        "তেলাপিয়া, পাঙাশ ও চিংড়ির জন্য ভাসমান ও ডুবন্ত মৎস্য খাদ্য — বৃদ্ধি ও পানির মানের জন্য তৈরি।",
      image: `${CAT}/fish.jpg`,
    },
  ],
  products: [
    {
      slug: "dairy-gold",
      category: "cattle-feed",
      name: "ডেইরি গোল্ড ক্যাটল ফিড",
      tagline: "দুগ্ধবতী গাভীর দুধ উৎপাদন বাড়াতে উচ্চ-শক্তিসম্পন্ন খাদ্য।",
      image: `${PROD}/dairy-gold.jpg`,
      description:
        "ডেইরি গোল্ড দুগ্ধবতী গাভীর জন্য তৈরি পিলেটেড কনসেনট্রেট খাদ্য, যা শক্তি-সমৃদ্ধ শস্য ও সুষম প্রোটিনের মিশ্রণে পশুর স্বাস্থ্য বজায় রেখে নিয়মিত দুধ উৎপাদনে সহায়তা করে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "১৮%" },
        { label: "ধরন", value: "পিলেট" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি / ৫০ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "দুগ্ধবতী গাভী" },
      ],
      benefits: [
        "দুধের পরিমাণ ও মান বৃদ্ধি করে",
        "সুষম ভিটামিন ও খনিজ উপাদান",
        "স্থানীয়ভাবে সংগৃহীত শস্য থেকে তৈরি",
        "রুমেন স্বাস্থ্য বজায় রাখে",
      ],
    },
    {
      slug: "beef-booster",
      category: "cattle-feed",
      name: "বিফ বুস্টার ক্যাটল ফিড",
      tagline: "বাজারজাত ওজনের কাছাকাছি গরুর জন্য বৃদ্ধি-কেন্দ্রিক খাদ্য।",
      image: `${PROD}/beef-booster.jpg`,
      description:
        "বিফ বুস্টার ফিনিশিং পর্যায়ের জন্য তৈরি, যা গরুর দ্রুত ও কার্যকরভাবে বাজারজাত ওজনে পৌঁছাতে প্রয়োজনীয় শক্তি ও প্রোটিন সরবরাহ করে এবং খাদ্য রূপান্তর হার বজায় রাখে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "১৬%" },
        { label: "ধরন", value: "পিলেট" },
        { label: "প্যাক সাইজ", value: "৫০ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "ফিনিশিং বিফ ক্যাটল" },
      ],
      benefits: [
        "দ্রুত ও কার্যকর ওজন বৃদ্ধি",
        "উন্নত খাদ্য রূপান্তর হার",
        "প্রয়োজনীয় খনিজ দ্বারা সমৃদ্ধ",
        "প্রতিটি ব্যাচে সামঞ্জস্যপূর্ণ মান",
      ],
    },
    {
      slug: "calf-starter",
      category: "cattle-feed",
      name: "কাফ স্টার্টার ফিড",
      tagline: "দুধ ছাড়ানো বাছুরের জন্য সহজপাচ্য স্টার্টার খাদ্য।",
      image: `${PROD}/calf-starter.jpg`,
      description:
        "কাফ স্টার্টার দুধ ছাড়ানোর সময় বাছুরকে সহায়তা করে এমন সুস্বাদু ও সহজপাচ্য ফর্মুলা দিয়ে, যা প্রাথমিক বয়স থেকেই শক্তিশালী রুমেন গঠনে সহায়তা করে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "২০%" },
        { label: "ধরন", value: "ক্রাম্বল" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "১-৪ মাস বয়সী বাছুর" },
      ],
      benefits: [
        "প্রাথমিক রুমেন গঠনে সহায়তা করে",
        "সুস্বাদু ক্রাম্বল টেক্সচার",
        "দুধ ছাড়ানোর সময় ওজন বৃদ্ধি করে",
        "প্রোবায়োটিক সমৃদ্ধ",
      ],
    },
    {
      slug: "broiler-grower",
      category: "poultry-feed",
      name: "ব্রয়লার গ্রোয়ার ফিড",
      tagline: "দ্রুত ও সুস্থ ব্রয়লার বৃদ্ধির জন্য সুষম গ্রোয়ার খাদ্য।",
      image: `${PROD}/broiler-grower.png`,
      description:
        "ব্রয়লার গ্রোয়ার গ্রোয়ার পর্যায়ের জন্য তৈরি, যা শক্তি ও অ্যামিনো অ্যাসিডের ভারসাম্য বজায় রেখে ব্রয়লারকে সুস্থ ও সামঞ্জস্যপূর্ণ বৃদ্ধির পথে রাখে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "২১%" },
        { label: "ধরন", value: "পিলেট" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি / ৫০ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "২-৪ সপ্তাহ বয়সী ব্রয়লার" },
      ],
      benefits: [
        "সামঞ্জস্যপূর্ণ বৃদ্ধি",
        "সুনির্দিষ্ট অ্যামিনো অ্যাসিড ভারসাম্য",
        "হাড়ের গঠন মজবুত করে",
        "পিলেট ফর্মে কম খাদ্য অপচয়",
      ],
    },
    {
      slug: "layer-premium",
      category: "poultry-feed",
      name: "লেয়ার প্রিমিয়াম ফিড",
      tagline: "ডিম পাড়া মুরগিকে উৎপাদনশীল রাখতে ক্যালসিয়াম সমৃদ্ধ খাদ্য।",
      image: `${PROD}/layer-premium.jpg`,
      description:
        "লেয়ার প্রিমিয়াম ডিম পাড়া মুরগির জন্য তৈরি, যাতে রয়েছে শক্তিশালী খোসার মান ও নিয়মিত ডিম উৎপাদন বজায় রাখতে প্রয়োজনীয় ক্যালসিয়াম ও পুষ্টির ভারসাম্য।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "১৭%" },
        { label: "ধরন", value: "ম্যাশ" },
        { label: "প্যাক সাইজ", value: "৫০ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "ডিম পাড়া মুরগি" },
      ],
      benefits: [
        "শক্তিশালী ও সামঞ্জস্যপূর্ণ ডিমের খোসা",
        "উচ্চ ডিম উৎপাদন হার বজায় রাখে",
        "সুষম ক্যালসিয়াম-ফসফরাস অনুপাত",
        "দীর্ঘমেয়াদী পালের স্বাস্থ্য সহায়তা করে",
      ],
    },
    {
      slug: "chick-starter",
      category: "poultry-feed",
      name: "চিক স্টার্টার ফিড",
      tagline: "একদিন থেকে তিন সপ্তাহ বয়সী বাচ্চার জন্য উচ্চ-প্রোটিন স্টার্টার খাদ্য।",
      image: `${PROD}/chick-starter.jpg`,
      description:
        "চিক স্টার্টার একদিনের বাচ্চাদের শক্তিশালী রোগ প্রতিরোধ ক্ষমতা ও স্থির প্রাথমিক বৃদ্ধির জন্য প্রয়োজনীয় প্রোটিন-সমৃদ্ধ ভিত্তি প্রদান করে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "২২%" },
        { label: "ধরন", value: "ক্রাম্বল" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "০-৩ সপ্তাহ বয়সী বাচ্চা" },
      ],
      benefits: [
        "প্রাথমিক রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
        "দ্রুত বৃদ্ধির জন্য উচ্চ-প্রোটিন",
        "সহজে খাওয়ার উপযোগী ক্রাম্বল টেক্সচার",
        "প্রয়োজনীয় ভিটামিন সমৃদ্ধ",
      ],
    },
    {
      slug: "tilapia-grower",
      category: "fish-feed",
      name: "তেলাপিয়া গ্রোয়ার ফিড",
      tagline: "দ্রুত বর্ধনশীল তেলাপিয়া পুকুরের জন্য ভাসমান পিলেট।",
      image: `${PROD}/tilapia-grower.jpg`,
      description:
        "তেলাপিয়া গ্রোয়ার পানির উপরিভাগে ভাসে, যা কৃষকদের খাদ্য গ্রহণের কার্যকলাপ পর্যবেক্ষণ করতে দেয়, সাথে তেলাপিয়ার স্থির বৃদ্ধির জন্য প্রয়োজনীয় প্রোটিন সরবরাহ করে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "২৮%" },
        { label: "ধরন", value: "ভাসমান পিলেট" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "গ্রো-আউট তেলাপিয়া পুকুর" },
      ],
      benefits: [
        "সহজ পর্যবেক্ষণের জন্য ভাসমান",
        "পানির মান অবনতি কমায়",
        "খাদ্য রূপান্তর হার উন্নত করে",
        "মাছের জন্য নির্দিষ্ট ভিটামিন সমৃদ্ধ",
      ],
    },
    {
      slug: "pangasius-floating",
      category: "fish-feed",
      name: "পাঙাশ ভাসমান ফিড",
      tagline: "পাঙাশ চাষের জন্য সাশ্রয়ী ভাসমান খাদ্য।",
      image: `${PROD}/pangasius-floating.jpg`,
      description:
        "পাঙাশ ভাসমান ফিড উচ্চ-ঘনত্বের পাঙাশ পুকুরের জন্য তৈরি, যা সাশ্রয়ীতা ও ফলনযোগ্য আকারে পৌঁছানোর জন্য প্রয়োজনীয় পুষ্টির ভারসাম্য বজায় রাখে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "২৬%" },
        { label: "ধরন", value: "ভাসমান পিলেট" },
        { label: "প্যাক সাইজ", value: "২৫ কেজি / ৪০ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "পাঙাশ গ্রো-আউট পুকুর" },
      ],
      benefits: [
        "উচ্চ-ঘনত্বের পুকুরের জন্য সাশ্রয়ী",
        "সামঞ্জস্যপূর্ণ ভাসমান পিলেট মান",
        "সুষম ফলন আকার নিশ্চিত করে",
        "খাদ্য অপচয় কমায়",
      ],
    },
    {
      slug: "shrimp-starter",
      category: "fish-feed",
      name: "চিংড়ি স্টার্টার ফিড",
      tagline: "পোস্ট-লার্ভাল চিংড়ির জন্য সূক্ষ্ম-ক্রাম্বল স্টার্টার খাদ্য।",
      image: `${PROD}/shrimp-starter.jpg`,
      description:
        "চিংড়ি স্টার্টার পোস্ট-লার্ভাল চিংড়ির জন্য তৈরি সূক্ষ্ম টেক্সচারের খাদ্য, যা দ্রুত ও সুস্থ প্রাথমিক বৃদ্ধি নিশ্চিত করে।",
      specs: [
        { label: "প্রোটিন পরিমাণ", value: "৩৫%" },
        { label: "ধরন", value: "সূক্ষ্ম ক্রাম্বল" },
        { label: "প্যাক সাইজ", value: "১০ কেজি / ২৫ কেজি ব্যাগ" },
        { label: "সুপারিশকৃত", value: "পোস্ট-লার্ভাল চিংড়ি" },
      ],
      benefits: [
        "উচ্চ প্রোটিনের প্রাথমিক পুষ্টি",
        "দ্রুত হজমযোগ্য সূক্ষ্ম টেক্সচার",
        "প্রাথমিক বেঁচে থাকার হার বাড়ায়",
        "পুকুরের পানি স্থিতিশীল রাখে",
      ],
    },
  ],
  labels: {
    allProducts: "সব পণ্য",
    viewDetails: "বিস্তারিত দেখুন",
    backToCategories: "সব ক্যাটাগরি",
    backToCategory: "ক্যাটাগরিতে ফিরে যান",
    inCategory: "এই ক্যাটাগরিতে",
    specsHeading: "স্পেসিফিকেশন",
    benefitsHeading: "মূল সুবিধাসমূহ",
    relatedHeading: "আপনি আরও পছন্দ করতে পারেন",
    enquire: "এই পণ্য সম্পর্কে জিজ্ঞাসা করুন",
    productsCount: "টি পণ্য",
  },
  footer: {
    blurb: "সারাদেশের কৃষকদের জন্য সামঞ্জস্যপূর্ণ, শনাক্তযোগ্য মানে প্রস্তুতকৃত বৈজ্ঞানিক গরু, পোল্ট্রি ও মাছের খাদ্য।",
    exploreHeading: "এক্সপ্লোর",
    contactHeading: "যোগাযোগ করুন",
    email: "feed@mrgroup.com",
    phone: "+৮৮০ ১XXX-XXXXXX",
    addressHeading: "ঠিকানা",
    address: ["এমআর ফিড মিল, গুলশান এভিনিউ", "ঢাকা ১২১২, বাংলাদেশ"],
    followHeading: "অনুসরণ করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    legal: "© ২০২৬ এমআর ফিড, এমআর গ্রুপের একটি প্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের সম্পর্কে",
      title: "বিজ্ঞান দিয়ে দেশের খামারে পুষ্টি জোগানো",
      description: "একটি একক ফিড মিল থেকে হাজার হাজার কৃষকের আস্থাভাজন একটি জাতীয় ব্র্যান্ড — এই হলো এমআর ফিড।",
      image: `${IMG}/products/header-feed-pellets.jpg`,
    },
    storyHeading: "যেখান থেকে শুরু",
    storyParagraphs: [
      "এমআর ফিড একটি সহজ সমস্যা সমাধানে প্রতিষ্ঠিত হয়েছিল: কৃষকরা এমন খাদ্য পাওয়ার যোগ্য যাতে তারা প্রতিটি ব্যাচে আস্থা রাখতে পারেন। আমরা একটি মিল ও একদল পুষ্টিবিদ নিয়ে যাত্রা শুরু করি, যারা বাংলাদেশের প্রাণিসম্পদ ও মৎস্য পুষ্টির মান উন্নয়নে দৃঢ়প্রতিজ্ঞ ছিলেন।",
      "আজ আমাদের মিলগুলো বৃহৎ পরিসরে বৈজ্ঞানিকভাবে প্রস্তুতকৃত গরু, পোল্ট্রি ও মাছের খাদ্য উৎপাদন করে — সামঞ্জস্যপূর্ণ, শনাক্তযোগ্য মানে তৈরি এবং দেশের প্রতিটি বিভাগের খামারে পৌঁছানো ডিলার নেটওয়ার্কের মাধ্যমে সরবরাহ করা হয়।",
      "এমআর গ্রুপের অংশ হিসেবে, আমরা বাণিজ্য, লজিস্টিক্স ও উৎপাদনে কয়েক দশকের অভিজ্ঞতা আধুনিক পুষ্টি বিজ্ঞানের সাথে মিলিয়ে কৃষকদের সুস্থ প্রাণী পালন ও উন্নত আয়ে সহায়তা করি।",
    ],
    storyImage: `${IMG}/handshake.jpg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "সামঞ্জস্যপূর্ণ, বিশ্বস্ত মানের নিরাপদ ও বৈজ্ঞানিকভাবে প্রস্তুতকৃত পশুখাদ্য উৎপাদনের মাধ্যমে সারাদেশে খামারের উৎপাদনশীলতা ও লাভজনকতা বৃদ্ধি করা।",
    visionHeading: "আমাদের দৃষ্টিভঙ্গি",
    vision:
      "এমন একটি বাংলাদেশ যেখানে ছোট বা বড় প্রতিটি কৃষক তাদের গবাদি পশু, পোল্ট্রি ও মাছের জন্য সাশ্রয়ী, উচ্চমানের পুষ্টি পাবেন।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "মান", body: "সামঞ্জস্যপূর্ণ, ল্যাব-পরীক্ষিত খাদ্য যা প্রতিটি ব্যাগে একই মান দেয়।" },
      { title: "বিজ্ঞান", body: "অনুমান নয়, পুষ্টিবিদদের তৈরি ফর্মুলা।" },
      { title: "আস্থা", body: "স্বচ্ছ মান যার উপর কৃষকরা মৌসুমের পর মৌসুম নির্ভর করতে পারেন।" },
      { title: "অংশীদারিত্ব", body: "আমাদের কৃষকরা এগোলে আমরাও এগোই — তাদের সাফল্যই আমাদের মাপকাঠি।" },
    ],
  },
  categoriesPage: {
    header: {
      eyebrow: "আমাদের ক্যাটাগরি",
      title: "প্রতিটি বৃদ্ধির পর্যায়ের জন্য প্রস্তুতকৃত খাদ্য",
      description: "আপনার পোল্ট্রি, গরু বা মাছের জন্য সঠিক পুষ্টি খুঁজে পেতে আমাদের তিনটি খাদ্য ক্যাটাগরি দেখুন।",
      image: `${CAT}/cattle.jpg`,
    },
    intro:
      "এমআর ফিডের প্রতিটি ফর্মুলা সামঞ্জস্যপূর্ণ, শনাক্তযোগ্য মানে তৈরি। ভেতরের পণ্য দেখতে একটি ক্যাটাগরি নির্বাচন করুন।",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "এমআর ফিডের ভেতরে",
      description: "এমআর ফিড নামের পেছনের প্রাণী, খামার ও খাদ্যের এক ঝলক।",
      image: `${HERO}/poultry.jpg`,
    },
    intro:
      "আমাদের মিল, খামার এবং এমআর ফিডে সুস্থ প্রাণীর ছবি ও ভিডিও। ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজে দেখুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ",
      title: "খাদ্য নিয়ে কথা বলি",
      description: "কোনো পণ্য, পাইকারি অর্ডার বা ডিলার হওয়া নিয়ে প্রশ্ন? আমাদের দল সাহায্যে প্রস্তুত।",
      image: `${IMG}/field.jpg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "আমাদের দল সাধারণত এক কার্যদিবসের মধ্যে সাড়া দেয়।",
    officeHeading: "প্রধান কার্যালয়",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
  },
};

export const feedContent: Record<AppLocale, FeedContent> = { en, bn };
