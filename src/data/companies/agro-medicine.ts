import type { AppLocale } from "@/i18n/routing";
import type { AgroMedContent } from "@/types/agromed";

const IMG = "/images/companies/agromed";

const en: AgroMedContent = {
  name: "MR Chemical",
  tagline: "Animal-health medicine for aqua, cattle, poultry, and pets nationwide.",
  getInTouch: "Get in touch",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Aqua", href: "/products/aqua" },
        { label: "Cattle", href: "/products/cattle" },
        { label: "Poultry", href: "/products/poultry" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        eyebrow: "Cattle Health",
        title: "Stronger herds, healthier yields",
        subtitle:
          "Vet-grade calcium tonics, dewormers, and antibiotics that keep your cattle productive season after season.",
        image: `${IMG}/hero-cattle.jpg`,
        ctaLabel: "Explore cattle care",
        ctaCategory: "cattle",
      },
      {
        eyebrow: "Poultry Health",
        title: "Protecting every flock, from chick to layer",
        subtitle:
          "Coccidiostats, vitamins, and probiotics formulated to raise healthy, high-performing birds.",
        image: `${IMG}/hero-poultry.jpg`,
        ctaLabel: "Explore poultry care",
        ctaCategory: "poultry",
      },
      {
        eyebrow: "Aqua Health",
        title: "Healthy water, thriving harvests",
        subtitle:
          "Water treatments, oxygen boosters, and immunity premixes trusted by fish and shrimp farmers.",
        image: `${IMG}/hero-aqua.jpg`,
        ctaLabel: "Explore aqua care",
        ctaCategory: "aqua",
      },
    ],
  },
  intro: {
    eyebrow: "Welcome to MR Agro Medicine",
    heading: "Animal-health medicine, engineered for Bangladesh's farms and homes",
    body: "From aquaculture ponds to poultry sheds, dairy farms to family pets, we develop and distribute quality veterinary medicines that keep animals healthy and farmers profitable.",
    features: [
      {
        icon: "award",
        title: "Quality assured",
        body: "Every batch is manufactured to strict standards and lab-tested for potency.",
      },
      {
        icon: "vaccine",
        title: "Full-spectrum range",
        body: "Medicines, vaccines, vitamins, and supplements for every species we serve.",
      },
      {
        icon: "truck",
        title: "Nationwide reach",
        body: "A distribution network delivering to vets, dealers, and farms across the country.",
      },
    ],
  },
  categorySection: {
    eyebrow: "Our Products",
    heading: "Solutions for every species",
    body: "Browse our animal-health range by category — each formulated for the specific needs of the animals in your care.",
    viewAll: "View all products",
    exploreLabel: "Explore range",
  },
  categories: [
    {
      slug: "aqua",
      name: "Aqua",
      tagline: "Fish & shrimp health",
      description:
        "Water treatments, oxygen boosters, and immunity premixes for healthy, high-yield ponds.",
      image: `${IMG}/cat-aqua.jpg`,
      icon: "aqua",
    },
    {
      slug: "cattle",
      name: "Cattle",
      tagline: "Dairy & beef care",
      description:
        "Calcium tonics, dewormers, and antibiotics that protect herds and lift milk yields.",
      image: `${IMG}/cat-cattle.jpg`,
      icon: "cattle",
    },
    {
      slug: "poultry",
      name: "Poultry",
      tagline: "Broiler & layer care",
      description:
        "Coccidiostats, vitamins, and probiotics for healthy, productive flocks.",
      image: `${IMG}/cat-poultry.jpg`,
      icon: "poultry",
    },
  ],
  products: [
    // Aqua
    {
      slug: "atc-5-aqua",
      category: "aqua",
      name: "ATC-5 Aqua",
      tagline: "Multi-action water-care solution for fish ponds.",
      form: "Liquid solution",
      pack: "250 ml",
      composition: "Multi-action aqua-care blend",
      benefits: [
        "Helps maintain a healthy pond environment",
        "Supports fish condition through the cycle",
        "Easy liquid dosing across the pond",
      ],
      icon: "drop",
      image: `${IMG}/products/atc-5-aqua.png`,
      images: [`${IMG}/products/atc-5-aqua.png`],
      overview:
        "ATC-5 Aqua is a liquid pond-care solution from M.R Agri Technology for maintaining healthy water conditions in fish ponds. Applied directly to pond water, it supports a clean culture environment and helps keep stock in good condition throughout the production cycle.",
      indications: [
        "Routine pond water management",
        "Support during seasonal water-quality changes",
        "General fish health maintenance",
      ],
      directions:
        "Apply to pond water at the dose stated on the label, or as advised by a fish-health specialist. Shake well before use.",
      storage:
        "Store in a cool, dry place away from direct sunlight. Keep the bottle tightly closed and out of reach of children.",
    },
    {
      slug: "new-delta-aqua",
      category: "aqua",
      name: "New Delta Aqua",
      tagline: "Deltamethrin solution that kills external parasites of fish.",
      form: "Liquid solution",
      pack: "250 ml",
      composition: "Deltamethrin 2.8%",
      benefits: [
        "Kills ticks, lice, mites, and Argulus",
        "Supports recovery from parasite-borne disease",
        "Simple pond application",
      ],
      icon: "shield",
      image: `${IMG}/products/delta-aqua.png`,
      images: [`${IMG}/products/banner/new-delta-aqua.jpeg`, `${IMG}/products/delta-aqua.png`],
      overview:
        "New Delta Aqua is a deltamethrin-based (2.8%) solution that kills the external parasites of fish — ticks, lice, mites, and Argulus (fish lice). Clearing these parasites protects fish health and speeds recovery from parasite-borne disease.",
      indications: [
        "External parasites — ticks, lice, and mites",
        "Argulus (fish-lice) infestation",
        "Recovery support after parasite-related disease",
      ],
      directions:
        "Apply 0.5 ml per decimal for water 3–5 ft deep, or as advised by a fisheries consultant. Not for human use — wear a mask during application and wash hands afterwards.",
      storage:
        "Keep in a cool, dry place, out of reach of children.",
    },
    {
      slug: "elca-nil-plus",
      category: "aqua",
      name: "Elca nil Plus",
      tagline: "Germicide-enriched cleaner for harmful pond gases.",
      form: "Liquid solution",
      pack: "500 ml",
      composition: "Multi-action gas cleaner with germicide",
      benefits: [
        "Removes harmful and toxic gases from ponds",
        "Acts as a germicide against virus, bacteria, and fungus",
        "Restores oxygen levels and balances pH",
      ],
      icon: "drop",
      image: `${IMG}/products/elca-nil.png`,
      images: [`${IMG}/products/banner/elca-nil-plus.jpeg`, `${IMG}/products/elca-nil.png`],
      overview:
        "Elca nil Plus is a germicide-enriched gas cleaner for fish and shrimp ponds. It removes harmful gases and odour, protects stock from viral, bacterial, and fungal attack, stops surface gasping by restoring oxygen, helps hold pH at an ideal level, and clears turbid, heavy, or foul water — replacing separate water-cleaner and deodoriser treatments.",
      indications: [
        "Toxic gas and odour in pond water",
        "Routine germicidal pond care",
        "Turbid, heavy, or foul water",
      ],
      directions:
        "Prevention: 5–10 ml per decimal for water 3–5 ft deep. Treatment: 10 ml per decimal for 3–7 days, or as advised by a fish-health specialist. Dilute in plenty of water in a plastic container and broadcast over the whole pond. Apply morning, evening, night, or on cloudy days — avoid strong midday sun.",
      storage:
        "Store in the supplied bottle away from high temperatures. Do not pour the concentrate directly into steel or aluminium containers — dilute in plastic first.",
    },
    {
      slug: "hashpoka-finish-a",
      category: "aqua",
      name: "Hashpoka Finish-A",
      tagline: "Controls harmful aquatic insects (hashpoka) in nursery ponds.",
      form: "Liquid solution",
      pack: "500 ml",
      composition: "Mahogany seed oil + cypermethrin 8.5%",
      benefits: [
        "Clears predatory water insects that attack fry",
        "Reduces harmful bacteria in pond water",
        "Keeps pond water parasite-free for a long period",
      ],
      icon: "shield",
      image: `${IMG}/products/hash-poka-finish-a.png`,
      images: [`${IMG}/products/banner/hashpoka-finish-a.jpeg`, `${IMG}/products/hash-poka-finish-a.png`],
      overview:
        "Hashpoka Finish-A targets the predatory aquatic insects — locally known as hashpoka — that prey on fish fry and hatchlings in nursery ponds. Based on mahogany seed oil with cypermethrin, it also helps suppress internal and external parasite-borne disease and reduces harmful bacteria in the water, keeping the pond parasite-free for an extended period.",
      indications: [
        "Predatory water-insect infestation",
        "Pond preparation before and after releasing fry",
        "Parasite and harmful-bacteria control in nursery ponds",
      ],
      directions:
        "After releasing fry, apply 3 ml per decimal for water 3–5 ft deep, or as advised by a fish-health specialist. Wear a mask during application, burn the empty bottle after use, and wash hands and feet well with soap.",
      storage:
        "Store in a cool, dry place away from direct sunlight, food, and feed. Keep out of reach of children.",
    },
    {
      slug: "hashpoka-finish-b",
      category: "aqua",
      name: "Hashpoka Finish-B",
      tagline: "Compact pack for aquatic insect control in ponds.",
      form: "Liquid solution",
      pack: "100 ml / 500 ml",
      composition: "Mahogany seed oil + cypermethrin 5%",
      benefits: [
        "Controls predatory water insects",
        "Reduces harmful bacteria in pond water",
        "Protects fry at the most vulnerable stage",
      ],
      icon: "shield",
      image: `${IMG}/products/hash-poka-finish-b.png`,
      images: [`${IMG}/products/banner/hashpoka-finish-b.jpeg`, `${IMG}/products/hash-poka-finish-b.png`],
      overview:
        "Hashpoka Finish-B brings the same mahogany-seed-oil and cypermethrin action as Hashpoka Finish-A at a gentler 5% strength. It clears the predatory water insects that threaten fry, suppresses parasite-borne disease, and reduces harmful bacteria — keeping nursery ponds safe through the most vulnerable stage.",
      indications: [
        "Predatory water-insect infestation",
        "Nursery and hatchery pond preparation",
        "Parasite and harmful-bacteria control",
      ],
      directions:
        "After releasing fry, apply 3 ml per decimal for water 3–5 ft deep, or as advised by a fish-health specialist. Wear a mask during application, burn the empty bottle after use, and wash hands and feet well with soap.",
      storage:
        "Store in a cool, dry place away from direct sunlight, food, and feed. Keep out of reach of children.",
    },
    {
      slug: "mitha-in-b",
      category: "aqua",
      name: "Mitha in-B",
      tagline: "Effective against bacteria, fungus, and parasites in fish.",
      form: "Liquid solution",
      pack: "100 ml / 500 ml",
      composition: "Methylene blue 25% (C₁₆H₁₈N₃SCl·3H₂O)",
      benefits: [
        "Acts on bacterial, fungal, and parasitic problems",
        "Controls ulcer, tail and fin rot, gill rot, and belly swelling",
        "Also disinfects hatchery tanks and equipment",
      ],
      icon: "flask",
      image: `${IMG}/products/mitha-in-b.png`,
      images: [`${IMG}/products/banner/mitha-in-b.jpeg`, `${IMG}/products/mitha-in-b.png`],
      overview:
        "Mitha in-B is a high-strength methylene blue (25%) germicide that works against the bacteria, fungus, and parasites behind ulcers, tail and fin rot, gill rot, and belly swelling — particularly in shing and magur (catfish). It destroys the disease-causing microbes, cuts mortality quickly, and doubles as a hatchery disinfectant for tanks, eggs, and equipment.",
      indications: [
        "Ulcer disease, tail, fin, and gill rot",
        "Bacterial, fungal, and parasitic infection in catfish",
        "Hatchery tank and equipment disinfection",
      ],
      directions:
        "Prevention: 3–5 ml per decimal for water 3–5 ft deep, every 15 days. Treatment: 7–10 ml per decimal. Hatchery: 5 ml per 10 L of water for tanks and equipment; spray 10 ml per 1,000 L against fungus on eggs and hatchlings. Best applied in sunlight between 10 am and 3 pm; check water pH and oxygen before use.",
      storage:
        "Store in a cool, dry place out of reach of children.",
    },
    {
      slug: "nano-g-clear",
      category: "aqua",
      name: "Nano G-Clear",
      tagline: "Yucca-based ammonia & gas control for ponds.",
      form: "Powder sachet",
      pack: "100 g",
      composition: "Yucca plant extract 20% + plant extracts & probiotics",
      benefits: [
        "Reduces harmful ammonia gas in pond water",
        "Keeps the pond bottom and water fresh",
        "Usable in both aquaculture and poultry",
      ],
      icon: "leaf",
      image: `${IMG}/products/nano-g-clear.jpg`,
      images: [`${IMG}/products/nano-g-clear.jpg`],
      overview:
        "Nano G-Clear is a yucca-extract-based powder that binds and reduces harmful ammonia and other gases in pond water. Regular use keeps the water and pond bottom fresh, supports protein utilisation, and makes higher stocking densities safer. It can also be used in poultry houses for gas control.",
      indications: [
        "Ammonia and toxic-gas build-up in ponds",
        "Bad odour from the pond bottom",
        "High-density culture management",
      ],
      directions:
        "For prevention, apply one dose for water of 3–5 ft depth as directed on the pack; double the dose for treatment. Mix with water or feed, or follow the advice of a fish-health specialist.",
      storage:
        "Store in a cool, dry place. Keep the sachet sealed until use.",
    },
    {
      slug: "nephro-aqua",
      category: "aqua",
      name: "Nephro-Aqua",
      tagline: "Kidney care — helps manage gout and edema.",
      form: "Oral liquid",
      pack: "100 ml / 500 ml",
      composition: "Halite, salmiac, glucitol & citrosodine blend",
      benefits: [
        "Supports healthy kidney function",
        "Helps manage gout, edema, and water belly",
        "Zero withdrawal period",
      ],
      icon: "pulse",
      image: `${IMG}/products/nephro-aqua.png`,
      images: [`${IMG}/products/banner/nephro-aqua.jpeg`, `${IMG}/products/nephro-aqua.png`],
      overview:
        "Nephro-Aqua is an oral kidney-care solution for fish, poultry, and cattle used in the treatment of gout and edema. It helps prevent water belly in fish, flushes uric acid from the body, keeps the kidneys and urinary tract fresh and open, helps clear the toxicity left by antibiotics and other medicines, and supports hormone function including vitamin D.",
      indications: [
        "Gout and uric-acid problems",
        "Edema and water belly",
        "Kidney support during and after medication courses",
      ],
      directions:
        "Fish: 5–10 ml per kg of feed. Poultry: 1 ml per 1–2 L of drinking water. Cattle: 10–20 ml per 100 kg body weight. Or as advised by a registered veterinarian or fish specialist. Withdrawal period: zero (0) days. Shake well before use.",
      storage:
        "Store below 30°C, away from light and moisture. Keep all medicines out of reach of children.",
    },
    {
      slug: "o2-white",
      category: "aqua",
      name: "O₂ White",
      tagline: "Emergency oxygen supplier for fish ponds.",
      form: "Tablet / Granule",
      pack: "250 g",
      composition: "Oxygen-releasing granules",
      benefits: [
        "Releases dissolved oxygen within minutes",
        "Prevents losses during oxygen depletion",
        "Easy tablet or granule application",
      ],
      icon: "drop",
      image: `${IMG}/products/o2white.png`,
      images: [`${IMG}/products/banner/o2-white.jpeg`, `${IMG}/products/o2white.png`],
      overview:
        "O₂ White is an emergency oxygen supplier in tablet and granule form. Broadcast over the pond during an oxygen crisis, it releases dissolved oxygen within minutes — buying critical time during algal crashes, cloudy weather, and high-density holding or transport.",
      indications: [
        "Sudden oxygen depletion in ponds",
        "Fish gasping at the surface in early morning",
        "High-density stocking and transport",
      ],
      directions:
        "Broadcast evenly over the pond surface during an oxygen crisis at the dose stated on the pack, or as advised by a fish-health specialist. Repeat if fish remain stressed.",
      storage:
        "Store dry in the sealed pack away from moisture and heat. Reseal immediately after use.",
    },
    {
      slug: "pond-pro",
      category: "aqua",
      name: "Pond Pro",
      tagline: "Probiotic for fish & shrimp ponds.",
      form: "Powder",
      pack: "50 g / 100 g",
      composition: "12-strain probiotic (Bacillus spp., Clostridium, Pediococcus, Aspergillus & more)",
      benefits: [
        "Builds a beneficial microbial balance in the pond",
        "Improves water quality and the pond bottom",
        "Free from antibiotics, chloramphenicol, nitrofuran & GMO",
      ],
      icon: "leaf",
      image: `${IMG}/products/pond-pro.png`,
      images: [`${IMG}/products/banner/pond-pro.jpeg`, `${IMG}/products/pond-pro.png`],
      overview:
        "Pond Pro is a Japanese-origin, 12-strain probiotic for fish and shrimp ponds, combining Bacillus subtilis, B. megaterium, B. licheniformis, Aspergillus oryzae, and other beneficial cultures at billions of CFU per gram. The living cultures break down organic waste, improve water quality and the pond bottom, and crowd out harmful microbes — and the product is certified free of antibiotics, chloramphenicol, nitrofuran, melamine, and GMO.",
      indications: [
        "Poor water quality and organic sludge",
        "Routine probiotic pond management",
        "Preparation before and during grow-out",
      ],
      directions:
        "For water 3–5 ft deep: before releasing fry, 100 g per acre; during culture, 75–100 g per acre once every two weeks. Soak in sugar water for 7–8 hours, then broadcast over the whole pond. Do not use antibiotics or disinfectants while the probiotic is working.",
      storage:
        "Store in a cool, dry place with the lid tightly closed to protect the live cultures.",
    },
    {
      slug: "renutek-aqua",
      category: "aqua",
      name: "Renutek Aqua",
      tagline: "Multivitamin with immunostimulant for fish & shrimp.",
      form: "Oral liquid",
      pack: "500 ml",
      composition: "Vitamins A, D & B-complex + minerals, amino nitrogen & immunostimulant",
      benefits: [
        "Fills nutritional gaps and boosts immunity",
        "Raises fry survival rates",
        "Helps shrimp through moulting and keeps them strong",
      ],
      icon: "pulse",
      image: `${IMG}/products/renutake-aqua.png`,
      images: [`${IMG}/products/banner/renutek-aqua.jpeg`, `${IMG}/products/renutake-aqua.png`],
      overview:
        "Renutek Aqua combines vitamins A, D, and B-complex with minerals, amino nitrogen, yeast extract, and an immunostimulant for farmed fish and shrimp. It supplies the right nutrients to cover deficiencies, raises fry survival, supports shrimp shell change and keeps them strong through moulting, makes young stock more active, and improves results when used alongside antibiotic treatment.",
      indications: [
        "Nutritional deficiency and weak stock",
        "Low fry survival rates",
        "Shrimp moulting support and recovery during treatment",
      ],
      directions:
        "Nursery ponds: 3–5 ml per kg of nursery feed, or use as advised by a fish-health specialist.",
      storage:
        "Store in a cool, dry place. Keep all medicines out of reach of children.",
    },
    {
      slug: "ruchi-advance-aqua",
      category: "aqua",
      name: "Ruchi Advance-Aqua",
      tagline: "Mineral-rich fish feed supplement that lifts appetite & FCR.",
      form: "Feed supplement (powder)",
      pack: "500 g",
      composition: "Calcium 12% + minerals, Vitamin-B complex, 16% crude protein",
      benefits: [
        "Supports rapid weight gain with added protein",
        "Increases appetite and digestion",
        "Improves disease resistance and feed FCR",
      ],
      icon: "leaf",
      image: `${IMG}/products/ruchi-advance-aqua.jpg`,
      images: [`${IMG}/products/banner/ruchi-advance-aqua.jpeg`, `${IMG}/products/ruchi-advance-aqua.jpg`],
      overview:
        "Ruchi Advance-Aqua is a fish feed supplement delivering calcium, phosphorus, iron, zinc, and other trace minerals with Vitamin-B complex and 16% crude protein (3,200 kcal/kg). Mixed into daily feed, it lifts appetite, digestion, and disease resistance while improving feed conversion.",
      indications: [
        "Poor appetite and slow growth",
        "Weak digestion and high FCR",
        "Mineral and vitamin deficiency in feed",
      ],
      directions:
        "Mix 10–20 g per kg of feed, or use as advised by a fish-health specialist.",
      storage:
        "Store in a cool, dry place. Reseal the pack tightly after each use.",
    },
    {
      slug: "yucca-rex-100",
      category: "aqua",
      name: "Yucca Rex-100",
      tagline: "100% natural Yucca schidigera extract for ammonia control.",
      form: "Liquid solution",
      pack: "500 ml",
      composition: "Yucca schidigera extract 100% natural",
      benefits: [
        "Reduces ammonia and other irritant gases",
        "Cuts stress and fingerling mortality",
        "Lifts production up to 14–21.5% and FCR 11–19%",
      ],
      icon: "leaf",
      image: `${IMG}/products/banner/yucca-rex-100.jpeg`,
      images: [`${IMG}/products/banner/yucca-rex-100.jpeg`],
      overview:
        "Yucca Rex-100 is a 100% natural Yucca schidigera extract (origin: Mexico) for aquaculture. By binding ammonia and other irritant gases it creates healthier living conditions with lower stress, reduces fingerling mortality, helps control water pH without harming stock, and improves production by up to 14–21.5% and feed conversion by 11–19%.",
      indications: [
        "Ammonia build-up in pond water",
        "Fingerling mortality and stress",
        "pH management in culture ponds",
      ],
      directions:
        "Apply 2–3 ml per decimal for water 3–5 ft deep. For aqua use only — not for human consumption.",
      storage:
        "Keep in a cool, dry place.",
    },
    {
      slug: "zeo-b",
      category: "aqua",
      name: "Zeo-B",
      tagline: "Zeolite-based conditioner for a clean, healthy pond.",
      form: "Powder / granules",
      pack: "5 kg",
      composition: "Zeolite (SiO₂ 60–65%) + enzymes, probiotics, yucca & herbal extract",
      benefits: [
        "Removes hydrogen sulphide, methane, and ammonia gases",
        "Treats soil and water pollution at the pond bottom",
        "Boosts oxygen levels and natural plankton feed",
      ],
      icon: "flask",
      image: `${IMG}/products/banner/zeo-b.jpeg`,
      images: [`${IMG}/products/banner/zeo-b.jpeg`],
      overview:
        "Specil Zeo-B is a zeolite-based pond conditioner with the highest cation-exchange capacity, blended with enzymes, probiotics, yucca, and herbal extracts. It removes harmful gases such as hydrogen sulphide, methane, and ammonia, curbs harmful bacteria at the pond bottom, treats soil and water pollution, raises oxygen levels, and helps phytoplankton produce natural feed — so fish grow faster in a healthier pond.",
      indications: [
        "Harmful gas build-up (H₂S, methane, ammonia)",
        "Polluted pond bottom and bad odour",
        "Pond preparation and ongoing culture management",
      ],
      directions:
        "Pond preparation: broadcast 150 g per decimal across the whole pond for water 3–5 ft deep. During culture: 100 g per decimal every 30 days, or as advised by a fish-health specialist.",
      storage:
        "Store in a cool, dry place away from moisture. Keep the pack sealed after use.",
    },
    // Cattle
    {
      slug: "liver-power",
      category: "cattle",
      name: "Liver Power",
      tagline: "An ideal liver-tonic oral solution for cattle, poultry & fish.",
      form: "Oral solution",
      pack: "500 ml / 1 L",
      composition: "Vitamin B-complex, folic acid, nicotinamide, liver extract, choline chloride & dl-methionine with herbs",
      benefits: [
        "Rebuilds damaged liver cells and restores function",
        "Supports maximum bile production and digestion",
        "Supplies antioxidants for cattle, poultry, and fish",
      ],
      icon: "leaf",
      image: `${IMG}/products/liver-power.png`,
      images: [`${IMG}/products/banner/liver-power.jpeg`, `${IMG}/products/liver-power.png`],
      overview:
        "Liver Power is an ideal liver-tonic oral solution for cattle, poultry, and fish, combining B-vitamins, folic acid, nicotinamide, liver extract, choline chloride, and dl-methionine with herbs. It ensures rapid rebuilding of damaged liver cells, restores lost liver function, supports maximum bile production, supplies antioxidants, and improves digestion — especially valuable during recovery and heavy feeding.",
      indications: [
        "Weak appetite and poor digestion",
        "Liver stress after illness or medication courses",
        "Fattening programmes after deworming",
      ],
      directions:
        "Poultry: 0.5 ml per litre of drinking water (prevention) or 1 ml per litre (treatment) for 5 days. Cattle: 0.5–0.75 ml per litre of drinking water for 5 days. Fish: 5 ml per kg of feed for 7–10 days; at the start of fattening after deworming, 50 ml daily or 10 ml continuously. Or as advised by a registered veterinarian.",
      storage:
        "Store below 30°C, away from direct sunlight. Keep the bottle tightly closed.",
    },
    {
      slug: "power-zinc",
      category: "cattle",
      name: "Power Zinc",
      tagline: "Zinc with vitamin B-complex oral solution.",
      form: "Oral solution",
      pack: "1 L",
      composition: "Zinc sulphate monohydrate + vitamin B complex (B1, B2, B6, B12, nicotinamide)",
      benefits: [
        "Strengthens body structure and increases weight",
        "Develops immunity and increases egg and milk production",
        "Helps feather and coat development, appetite, and recovery from diarrhoea",
      ],
      icon: "pulse",
      image: `${IMG}/products/power-zinc.png`,
      images: [`${IMG}/products/banner/power-zinc.jpeg`, `${IMG}/products/power-zinc.png`],
      overview:
        "Power Zinc is an oral solution combining zinc sulphate monohydrate with vitamin B-complex (B1, B2, B6, B12, and nicotinamide) for cattle, poultry, and fish. It strengthens body structure, increases body weight, develops immunity against disease, lifts egg and milk production, supports feather and coat development, improves appetite, helps with all kinds of diarrhoea and dysentery, and corrects blood deficiency.",
      indications: [
        "Zinc and vitamin-B deficiency",
        "Poor growth, feathering, or coat condition",
        "Diarrhoea, dysentery, and blood deficiency",
      ],
      directions:
        "Poultry: 2–3 ml per litre of drinking water for 5–7 days. Cattle/buffalo: 50–100 ml per animal for 5–7 days. Goat/sheep: 25–30 ml per animal for 5–7 days. Fish: 5–10 ml per kg of feed for 10–15 days. Or as advised by a registered veterinarian or aqua specialist.",
      storage:
        "Store below 30°C, away from direct sunlight. Keep tightly closed after use.",
    },
    // Poultry
    {
      slug: "zyme-r",
      category: "poultry",
      name: "Zyme-R",
      tagline: "Multi-enzyme feed supplement for better digestion.",
      form: "Powder",
      pack: "500 g",
      composition: "Multi-enzyme complex (amylase, protease, lipase, xylanase, cellulase, pectinase, glucanase, phytase, galactosidase)",
      benefits: [
        "Digests non-starch polysaccharides and anti-nutritional factors",
        "Better FCR with optimum feed consumption",
        "Minimises ammonia formation in the gut",
      ],
      icon: "flask",
      image: `${IMG}/products/zymer-r.png`,
      images: [`${IMG}/products/banner/zyme-r.jpeg`, `${IMG}/products/zymer-r.png`],
      overview:
        "Zyme-R is a multi-enzyme feed supplement blending amylase, protease, lipase, alpha- and beta-galactosidase, xylanase, cellulase, pectinase, glucanase, and phytase in stable proportions. It degrades non-starch polysaccharides and anti-nutritional factors so feed nutrients are utilised completely — increasing feed value at lower cost, improving FCR, providing extra energy, reducing wet droppings, and minimising ammonia formation in the gut.",
      indications: [
        "Poor digestion and undigested feed in droppings",
        "High feed conversion ratio (FCR)",
        "Wet droppings and gut ammonia problems",
      ],
      directions:
        "For oral administration: poultry 0.5–1 g per kg of feed; fish 5 g per kg of feed; large animals 10–20 g per day. Or as advised by a poultry or fish consultant.",
      storage:
        "Store in a cool, dry place with the lid tightly closed to protect enzyme activity.",
    },
    {
      slug: "vita-plus-c",
      category: "poultry",
      name: "Vita plus-C",
      tagline: "Vitamin C supplement for immunity & stress relief.",
      form: "Water-soluble powder",
      pack: "1 kg",
      composition: "Ascorbic acid 99%",
      benefits: [
        "Protects against transport, density, heat, and post-antibiotic stress",
        "Boosts immunity and reduces mortality",
        "Improves appetite; supports shrimp moulting and wound healing in fish",
      ],
      icon: "pulse",
      image: `${IMG}/products/vitaplus-c.png`,
      images: [`${IMG}/products/banner/vita-plus-c.jpeg`, `${IMG}/products/vitaplus-c.png`],
      overview:
        "Vita plus-C is a 99% ascorbic acid (vitamin C) supplement for poultry and aqua. It protects against every kind of stress — transport, high density, heat, adverse weather, and post-antibiotic recovery — while raising disease resistance, lowering mortality, improving feed intake and appetite, helping shrimp form bright, regular moulting shells, and speeding the healing of wounds in sick fish.",
      indications: [
        "Heat, transport, and density stress",
        "Low immunity and high mortality",
        "Recovery after antibiotics; shrimp moulting support",
      ],
      directions:
        "Poultry — prevention: mix 1 g per 5–7 L of drinking water; treatment: 1 g per 3–5 L for 5–7 days. Aqua — prevention: 1–2 g per kg of feed for 5–7 days; treatment: 3–5 g per kg for 5–7 days; against bacterial disease 8–15 g per cubic metre of water.",
      storage:
        "Store in a cool, dry place away from direct sunlight. Reseal tightly to protect vitamin potency. Keep out of reach of children.",
    },
  ],
  quality: {
    eyebrow: "Quality & Research",
    heading: "Backed by science, tested for safety",
    body: "Our formulations are developed with veterinary experts and quality-checked at every stage, so you can trust every dose you give.",
    image: `${IMG}/lab.jpg`,
    points: [
      {
        icon: "flask",
        title: "Lab-tested potency",
        body: "Each batch is verified for active-ingredient strength and purity.",
      },
      {
        icon: "shield",
        title: "Safe & compliant",
        body: "Products meet veterinary safety and withdrawal-period standards.",
      },
      {
        icon: "pulse",
        title: "Field-proven results",
        body: "Trusted by farmers and veterinarians in real conditions nationwide.",
      },
    ],
  },
  stats: {
    eyebrow: "Trusted across the country",
    heading: "Animal health at scale",
    items: [
      { value: "120+", label: "Products" },
      { value: "3", label: "Species categories" },
      { value: "5K+", label: "Dealers & vets" },
      { value: "15+", label: "Years of expertise" },
    ],
  },
  cta: {
    heading: "Partner with MR Agro Medicine",
    body: "Become a dealer, or talk to our veterinary team about the right products for your animals.",
    button: "Get in touch",
  },
  footer: {
    newsletterHeading: "Stay updated",
    emailPlaceholder: "Your email",
    submitLabel: "Submit",
    consent:
      "I consent to receive updates from MR Agro Medicine. I understand I can withdraw my consent at any time.",
    contactHeading: "Contact us",
    email: "agromedicine@mrgroup.com",
    phone: "+880 1712-345678",
    addressHeading: "Address",
    address: ["MR Tower, Gulshan Avenue", "Dhaka 1212, Bangladesh"],
    followHeading: "Follow us",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "Healthy animals, thriving farms.",
    legal: "© 2026 MR Agro Medicine, a company of MR Group. All rights reserved.",
  },
  aboutPage: {
    header: {
      eyebrow: "About Us",
      title: "Advancing animal health across Bangladesh",
      description:
        "From aquaculture and livestock to household pets, MR Agro Medicine brings trusted veterinary medicine to the animals the country depends on.",
      image: `${IMG}/about-farm.jpg`,
    },
    storyHeading: "Where it started",
    storyParagraphs: [
      "MR Agro Medicine began with a simple belief: healthy animals are the foundation of healthy farms and happy homes. We set out to make quality veterinary medicine accessible to every farmer and pet owner in the country.",
      "Today our range spans aquaculture, cattle, poultry, and pet care — medicines, vaccines, vitamins, and supplements developed with veterinary experts and manufactured to strict quality standards.",
      "As part of MR Group, we combine decades of agricultural and distribution expertise with modern animal-health science to keep raising the standard of care nationwide.",
    ],
    storyImage: `${IMG}/hero-cattle.jpg`,
    missionHeading: "Our mission",
    mission:
      "To protect and improve animal health with safe, effective, and affordable veterinary medicine — strengthening farm productivity and animal welfare across Bangladesh.",
    visionHeading: "Our vision",
    vision:
      "A country where every farmer and pet owner has access to trusted animal-health medicine, and where healthy animals drive prosperity in every community.",
    valuesHeading: "What we stand for",
    values: [
      { title: "Quality", body: "Lab-tested, standards-compliant medicine in every batch." },
      { title: "Safety", body: "Formulations that respect animal welfare and withdrawal periods." },
      { title: "Innovation", body: "Vet-led research that keeps our range effective and modern." },
      { title: "Partnership", body: "Long-term support for the dealers, vets, and farmers we serve." },
    ],
    careHeading: "Care at every stage of life",
    careBody:
      "From day-old chicks and fingerlings to dairy herds and household pets, our products support animals through every stage — prevention, treatment, and recovery.",
    careImage: `${IMG}/vet-care.jpg`,
  },
  contactPage: {
    header: {
      eyebrow: "Contact Us",
      title: "We'd love to hear from you",
      description:
        "Questions about a product, dealership, or veterinary advice — send us a message and our team will get back to you.",
      image: `${IMG}/vet-care.jpg`,
    },
    formHeading: "Send us a message",
    formIntro: "Fill in the form and our team will respond within one business day.",
    officeHeading: "Head office",
    emailLabel: "Email",
    phoneLabel: "Phone",
    followHeading: "Follow us",
  },
  productsPage: {
    header: {
      eyebrow: "Our Products",
      title: "Animal-health medicine for every species",
      description:
        "Medicines, vaccines, vitamins, and supplements — organised by species so you can find exactly what your animals need.",
      image: `${IMG}/med-vial.jpg`,
    },
    intro:
      "Browse our full range by category. Every product is developed with veterinary experts and lab-tested for potency and safety.",
    allLabel: "All Products",
    formLabel: "Form",
    packLabel: "Pack size",
    compositionLabel: "Composition",
    benefitsLabel: "Key benefits",
    enquireLabel: "Enquire about this product",
    categoryHeaderPrefix: "Products for",
    productsCountLabel: "products",
    viewDetailsLabel: "View details",
    overviewLabel: "Overview",
    indicationsLabel: "Indications",
    directionsLabel: "Directions for use",
    storageLabel: "Storage",
    relatedLabel: "Related products",
    backToProductsLabel: "Back to all products",
  },
  galleryPage: {
    header: {
      eyebrow: "Gallery",
      title: "Inside MR Chemical",
      description:
        "Photos and videos from our labs, fieldwork, and the farmers and animals we serve.",
      image: `${IMG}/vet-care.jpg`,
    },
    intro:
      "A look at the people, products, and fieldwork behind MR Chemical. Toggle between photos and videos to explore.",
    photosLabel: "Photos",
    videosLabel: "Videos",
    noPhotos: "No photos available yet.",
    noVideos: "No videos available yet.",
  },
};

const bn: AgroMedContent = {
  name: "এমআর কেমিক্যাল",
  tagline: "সারাদেশে অ্যাকুয়া, গবাদি পশু, পোল্ট্রি ও পোষা প্রাণীর স্বাস্থ্য ঔষধ।",
  getInTouch: "যোগাযোগ করুন",
  nav: [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    {
      label: "পণ্যসমূহ",
      href: "/products",
      children: [
        { label: "অ্যাকুয়া", href: "/products/aqua" },
        { label: "গবাদি পশু", href: "/products/cattle" },
        { label: "পোল্ট্রি", href: "/products/poultry" },
      ],
    },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
  hero: {
    slides: [
      {
        eyebrow: "গবাদি পশুর স্বাস্থ্য",
        title: "সুস্থ পাল, বেশি উৎপাদন",
        subtitle:
          "ভেট-মানের ক্যালসিয়াম টনিক, কৃমিনাশক ও অ্যান্টিবায়োটিক যা আপনার গবাদি পশুকে মৌসুমের পর মৌসুম উৎপাদনশীল রাখে।",
        image: `${IMG}/hero-cattle.jpg`,
        ctaLabel: "গবাদি পশুর সেবা দেখুন",
        ctaCategory: "cattle",
      },
      {
        eyebrow: "পোল্ট্রির স্বাস্থ্য",
        title: "বাচ্চা থেকে লেয়ার, প্রতিটি পাল সুরক্ষিত",
        subtitle:
          "সুস্থ ও উচ্চ-উৎপাদনশীল পাখি গড়ে তুলতে তৈরি কক্সিডিওস্ট্যাট, ভিটামিন ও প্রোবায়োটিক।",
        image: `${IMG}/hero-poultry.jpg`,
        ctaLabel: "পোল্ট্রি সেবা দেখুন",
        ctaCategory: "poultry",
      },
      {
        eyebrow: "অ্যাকুয়া স্বাস্থ্য",
        title: "সুস্থ পানি, ভালো ফলন",
        subtitle:
          "মাছ ও চিংড়ি চাষিদের আস্থাভাজন পানি ট্রিটমেন্ট, অক্সিজেন বুস্টার ও ইমিউনিটি প্রিমিক্স।",
        image: `${IMG}/hero-aqua.jpg`,
        ctaLabel: "অ্যাকুয়া সেবা দেখুন",
        ctaCategory: "aqua",
      },
    ],
  },
  intro: {
    eyebrow: "এমআর অ্যাগ্রো মেডিসিনে স্বাগতম",
    heading: "বাংলাদেশের খামার ও ঘরের জন্য তৈরি প্রাণী-স্বাস্থ্য ঔষধ",
    body: "অ্যাকুয়াকালচার পুকুর থেকে পোল্ট্রি শেড, ডেইরি খামার থেকে পরিবারের পোষা প্রাণী — আমরা মানসম্পন্ন ভেটেরিনারি ঔষধ তৈরি ও বিতরণ করি যা প্রাণীকে সুস্থ ও কৃষককে লাভবান রাখে।",
    features: [
      {
        icon: "award",
        title: "মান নিশ্চিত",
        body: "প্রতিটি ব্যাচ কঠোর মান অনুযায়ী উৎপাদিত ও কার্যকারিতার জন্য ল্যাব-পরীক্ষিত।",
      },
      {
        icon: "vaccine",
        title: "পূর্ণাঙ্গ পরিসর",
        body: "আমরা যে সব প্রজাতির সেবা দিই তাদের জন্য ঔষধ, ভ্যাকসিন, ভিটামিন ও সাপ্লিমেন্ট।",
      },
      {
        icon: "truck",
        title: "সারাদেশব্যাপী বিস্তৃতি",
        body: "একটি বিতরণ নেটওয়ার্ক যা সারাদেশে ভেট, ডিলার ও খামারে পৌঁছে দেয়।",
      },
    ],
  },
  categorySection: {
    eyebrow: "আমাদের পণ্য",
    heading: "প্রতিটি প্রজাতির জন্য সমাধান",
    body: "শ্রেণি অনুযায়ী আমাদের প্রাণী-স্বাস্থ্য পরিসর দেখুন — প্রতিটি আপনার প্রাণীর নির্দিষ্ট প্রয়োজন অনুযায়ী তৈরি।",
    viewAll: "সব পণ্য দেখুন",
    exploreLabel: "পরিসর দেখুন",
  },
  categories: [
    {
      slug: "aqua",
      name: "অ্যাকুয়া",
      tagline: "মাছ ও চিংড়ির স্বাস্থ্য",
      description:
        "সুস্থ, উচ্চ-ফলনশীল পুকুরের জন্য পানি ট্রিটমেন্ট, অক্সিজেন বুস্টার ও ইমিউনিটি প্রিমিক্স।",
      image: `${IMG}/cat-aqua.jpg`,
      icon: "aqua",
    },
    {
      slug: "cattle",
      name: "গবাদি পশু",
      tagline: "ডেইরি ও গরুর যত্ন",
      description:
        "ক্যালসিয়াম টনিক, কৃমিনাশক ও অ্যান্টিবায়োটিক যা পাল রক্ষা করে ও দুধ উৎপাদন বাড়ায়।",
      image: `${IMG}/cat-cattle.jpg`,
      icon: "cattle",
    },
    {
      slug: "poultry",
      name: "পোল্ট্রি",
      tagline: "ব্রয়লার ও লেয়ার যত্ন",
      description:
        "সুস্থ ও উৎপাদনশীল পালের জন্য কক্সিডিওস্ট্যাট, ভিটামিন ও প্রোবায়োটিক।",
      image: `${IMG}/cat-poultry.jpg`,
      icon: "poultry",
    },
  ],
  products: [
    // Aqua
    {
      slug: "atc-5-aqua",
      category: "aqua",
      name: "এটিসি-৫ অ্যাকুয়া",
      tagline: "মাছের পুকুরের জন্য বহুমুখী পানি-পরিচর্যা সলিউশন।",
      form: "তরল সলিউশন",
      pack: "২৫০ মিলি",
      composition: "বহুমুখী অ্যাকুয়া-কেয়ার মিশ্রণ",
      benefits: [
        "পুকুরের সুস্থ পরিবেশ বজায় রাখতে সাহায্য করে",
        "পুরো চক্রজুড়ে মাছের সুস্থতা সমর্থন করে",
        "পুকুরে সহজ তরল প্রয়োগ",
      ],
      icon: "drop",
      image: `${IMG}/products/atc-5-aqua.png`,
      images: [`${IMG}/products/atc-5-aqua.png`],
      overview:
        "এটিসি-৫ অ্যাকুয়া এম.আর অ্যাগ্রি টেকনোলজির একটি তরল পুকুর-পরিচর্যা সলিউশন, যা মাছের পুকুরে সুস্থ পানির পরিবেশ বজায় রাখতে ব্যবহৃত হয়। সরাসরি পুকুরের পানিতে প্রয়োগ করে এটি পরিষ্কার চাষ-পরিবেশ ধরে রাখে এবং উৎপাদন চক্রজুড়ে মজুতকে সুস্থ রাখতে সহায়তা করে।",
      indications: [
        "নিয়মিত পুকুরের পানি ব্যবস্থাপনা",
        "মৌসুমি পানির মান পরিবর্তনে সহায়তা",
        "মাছের সাধারণ স্বাস্থ্য রক্ষা",
      ],
      directions:
        "লেবেলে উল্লেখিত মাত্রায় পুকুরের পানিতে প্রয়োগ করুন, অথবা মৎস্য-স্বাস্থ্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। ব্যবহারের আগে ভালোভাবে ঝাঁকান।",
      storage:
        "সরাসরি সূর্যালোক থেকে দূরে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। বোতল শক্তভাবে বন্ধ রাখুন এবং শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "new-delta-aqua",
      category: "aqua",
      name: "নিউ ডেল্টা অ্যাকুয়া",
      tagline: "মাছের বাহ্যিক পরজীবী দমনে ডেল্টামেথ্রিন সলিউশন।",
      form: "তরল সলিউশন",
      pack: "২৫০ মিলি",
      composition: "ডেল্টামেথ্রিন ২.৮%",
      benefits: [
        "উকুন, মাইট ও আরগুলাস (মাছের উকুন) ধ্বংস করে",
        "পরজীবীজনিত রোগ থেকে সেরে উঠতে সহায়তা করে",
        "পুকুরে সহজ প্রয়োগ",
      ],
      icon: "shield",
      image: `${IMG}/products/delta-aqua.png`,
      images: [`${IMG}/products/banner/new-delta-aqua.jpeg`, `${IMG}/products/delta-aqua.png`],
      overview:
        "নিউ ডেল্টা অ্যাকুয়া একটি ডেল্টামেথ্রিন-ভিত্তিক (২.৮%) সলিউশন যা মাছের বাহ্যিক পরজীবী — উকুন, মাইট ও আরগুলাস (মাছের উকুন) — ধ্বংস করে। এই পরজীবী দূর করলে মাছের স্বাস্থ্য রক্ষা পায় এবং পরজীবীজনিত রোগ থেকে দ্রুত সেরে ওঠে।",
      indications: [
        "বাহ্যিক পরজীবী — উকুন ও মাইট",
        "আরগুলাস (মাছের উকুন) সংক্রমণ",
        "পরজীবীজনিত রোগের পর সুস্থতা",
      ],
      directions:
        "প্রতি শতাংশে ৩–৫ ফুট গভীর পানির জন্য ০.৫ মিলি প্রয়োগ করুন, অথবা মৎস্য পরামর্শকের পরামর্শ অনুযায়ী। মানুষের ব্যবহারের জন্য নয় — প্রয়োগের সময় মাস্ক পরুন এবং পরে হাত ধুয়ে নিন।",
      storage:
        "শীতল, শুষ্ক স্থানে শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "elca-nil-plus",
      category: "aqua",
      name: "এলকা নিল প্লাস",
      tagline: "জীবাণুনাশকসমৃদ্ধ ক্ষতিকর গ্যাস ক্লিনার।",
      form: "তরল সলিউশন",
      pack: "৫০০ মিলি",
      composition: "জীবাণুনাশকসহ বহুমুখী গ্যাস ক্লিনার",
      benefits: [
        "পুকুরের ক্ষতিকর ও বিষাক্ত গ্যাস দূর করে",
        "ভাইরাস, ব্যাকটেরিয়া ও ফাংগাসের বিরুদ্ধে জীবাণুনাশক হিসেবে কাজ করে",
        "অক্সিজেনের স্বল্পতা দূর করে ও পিএইচ ভারসাম্য রাখে",
      ],
      icon: "drop",
      image: `${IMG}/products/elca-nil.png`,
      images: [`${IMG}/products/banner/elca-nil-plus.jpeg`,`${IMG}/products/elca-nil.png`],
      overview:
        "এলকা নিল প্লাস মাছ ও চিংড়ির পুকুরের জন্য জীবাণুনাশকসমৃদ্ধ একটি গ্যাস ক্লিনার। এটি পুকুর ও ঘেরের ক্ষতিকর গ্যাস ও দুর্গন্ধ দূর করে, ভাইরাস, ব্যাকটেরিয়া ও ফাংগাসের আক্রমণ থেকে মাছ রক্ষা করে, অক্সিজেনের স্বল্পতা দূর করে মাছের খাবি খাওয়া বন্ধ করে, পানির পিএইচ আদর্শ মাত্রায় রাখে এবং ঘোলা, ভারী ও দুর্গন্ধযুক্ত পানি পরিষ্কার করে — আলাদা ওয়াটার ক্লিনার ও দুর্গন্ধনাশকের প্রয়োজন হয় না।",
      indications: [
        "পানিতে বিষাক্ত গ্যাস ও দুর্গন্ধ",
        "নিয়মিত জীবাণুনাশক পুকুর পরিচর্যা",
        "ঘোলা, ভারী বা দুর্গন্ধযুক্ত পানি",
      ],
      directions:
        "প্রতিরোধে: প্রতি শতাংশে ৩–৫ ফুট পানির জন্য ৫–১০ মিলি। চিকিৎসায়: প্রতি শতাংশে ১০ মিলি করে ৩–৭ দিন, অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। প্লাস্টিকের পাত্রে যত বেশি সম্ভব পানির সাথে মিশিয়ে সমস্ত পুকুরে ছিটিয়ে দিন। সকাল, সন্ধ্যা, রাত বা মেঘলা দিনে ব্যবহার করা যাবে — প্রখর রোদে ব্যবহার থেকে বিরত থাকুন।",
      storage:
        "সরবরাহকৃত বোতলেই সংরক্ষণ করুন, অধিক তাপমাত্রায় রাখবেন না। ঔষধ সরাসরি স্টিল/অ্যালুমিনিয়ামের পাত্রে ঢালবেন না — আগে প্লাস্টিকের পাত্রে পাতলা করে নিন।",
    },
    {
      slug: "hashpoka-finish-a",
      category: "aqua",
      name: "হাঁসপোকা ফিনিশ-এ",
      tagline: "নার্সারি পুকুরে ক্ষতিকর হাঁসপোকা নিয়ন্ত্রণ করে।",
      form: "তরল সলিউশন",
      pack: "৫০০ মিলি",
      composition: "মেহগনি বীজের তেল + সাইপারমেথ্রিন ৮.৫%",
      benefits: [
        "রেণু-পোনা আক্রমণকারী শিকারি জলজ পোকা দূর করে",
        "পুকুরের পানিতে ক্ষতিকর ব্যাকটেরিয়া কমায়",
        "দীর্ঘ সময় পুকুরের পানি পরজীবীমুক্ত রাখে",
      ],
      icon: "shield",
      image: `${IMG}/products/hash-poka-finish-a.png`,
      images: [`${IMG}/products/banner/hashpoka-finish-a.jpeg`, `${IMG}/products/hash-poka-finish-a.png`],
      overview:
        "হাঁসপোকা ফিনিশ-এ নার্সারি পুকুরে মাছের রেণু ও পোনা শিকারকারী জলজ পোকা — হাঁসপোকা — নিয়ন্ত্রণ করে। মেহগনি বীজের তেল ও সাইপারমেথ্রিন-ভিত্তিক এই ঔষধ মাছের শরীরের অন্তঃ ও বহিঃ পরজীবীবাহিত রোগ দমনেও সহায়তা করে এবং পানির ক্ষতিকর ব্যাকটেরিয়া কমিয়ে দীর্ঘ সময় পুকুর পরজীবীমুক্ত রাখে।",
      indications: [
        "শিকারি জলজ পোকার উপদ্রব",
        "রেণু ছাড়ার আগে ও পরে পুকুর প্রস্তুতি",
        "নার্সারি পুকুরে পরজীবী ও ক্ষতিকর ব্যাকটেরিয়া নিয়ন্ত্রণ",
      ],
      directions:
        "রেণু ছাড়ার পর প্রতি শতাংশে ৩–৫ ফুট গভীর পানির জন্য ৩ মিলি প্রয়োগ করুন, অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। মুখে মাস্ক লাগিয়ে প্রয়োগ করুন, ব্যবহার শেষে খালি বোতল পুড়িয়ে ফেলুন এবং হাত-পা সাবান দিয়ে ভালোভাবে পরিষ্কার করুন।",
      storage:
        "সরাসরি সূর্যালোক, খাদ্য ও খাবার থেকে দূরে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "hashpoka-finish-b",
      category: "aqua",
      name: "হাঁসপোকা ফিনিশ-বি",
      tagline: "পুকুরে জলজ পোকা নিয়ন্ত্রণের কমপ্যাক্ট প্যাক।",
      form: "তরল সলিউশন",
      pack: "১০০ মিলি / ৫০০ মিলি",
      composition: "মেহগনি বীজের তেল + সাইপারমেথ্রিন ৫%",
      benefits: [
        "শিকারি জলজ পোকা নিয়ন্ত্রণ করে",
        "পুকুরের পানিতে ক্ষতিকর ব্যাকটেরিয়া কমায়",
        "সবচেয়ে ঝুঁকিপূর্ণ পর্যায়ে পোনা রক্ষা করে",
      ],
      icon: "shield",
      image: `${IMG}/products/hash-poka-finish-b.png`,
      images: [`${IMG}/products/banner/hashpoka-finish-b.jpeg`, `${IMG}/products/hash-poka-finish-b.png`],
      overview:
        "হাঁসপোকা ফিনিশ-বি হাঁসপোকা ফিনিশ-এ এর মতোই মেহগনি বীজের তেল ও সাইপারমেথ্রিনের কার্যকারিতা দেয়, তবে ৫% মৃদু শক্তিতে। এটি পোনার জন্য হুমকি শিকারি জলজ পোকা দূর করে, পরজীবীবাহিত রোগ দমন করে এবং ক্ষতিকর ব্যাকটেরিয়া কমায় — সবচেয়ে ঝুঁকিপূর্ণ পর্যায়ে নার্সারি পুকুর নিরাপদ রাখে।",
      indications: [
        "শিকারি জলজ পোকার উপদ্রব",
        "নার্সারি ও হ্যাচারি পুকুর প্রস্তুতি",
        "পরজীবী ও ক্ষতিকর ব্যাকটেরিয়া নিয়ন্ত্রণ",
      ],
      directions:
        "রেণু ছাড়ার পর প্রতি শতাংশে ৩–৫ ফুট গভীর পানির জন্য ৩ মিলি প্রয়োগ করুন, অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। মুখে মাস্ক লাগিয়ে প্রয়োগ করুন, ব্যবহার শেষে খালি বোতল পুড়িয়ে ফেলুন এবং হাত-পা সাবান দিয়ে ভালোভাবে পরিষ্কার করুন।",
      storage:
        "সরাসরি সূর্যালোক, খাদ্য ও খাবার থেকে দূরে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "mitha-in-b",
      category: "aqua",
      name: "মিঠা ইন-বি",
      tagline: "মাছের ব্যাকটেরিয়া, ফাংগাস ও প্যারাসাইটের বিরুদ্ধে কার্যকর।",
      form: "তরল সলিউশন",
      pack: "১০০ মিলি / ৫০০ মিলি",
      composition: "মিথিলিন ব্লু ২৫% (C₁₆H₁₈N₃SCl·3H₂O)",
      benefits: [
        "ব্যাকটেরিয়া, ফাংগাস ও প্যারাসাইট সমস্যায় কাজ করে",
        "ক্ষতরোগ, লেজ-পাখনা পচা, ফুলকা পচা ও পেট ফোলা নিয়ন্ত্রণ করে",
        "হ্যাচারির ট্যাংক ও যন্ত্রপাতি জীবাণুমুক্ত করে",
      ],
      icon: "flask",
      image: `${IMG}/products/mitha-in-b.png`,
      images: [`${IMG}/products/banner/mitha-in-b.jpeg`, `${IMG}/products/mitha-in-b.png`],
      overview:
        "মিঠা ইন-বি একটি উচ্চক্ষমতাসম্পন্ন মিথিলিন ব্লু (২৫%) জীবাণুনাশক, যা ক্ষতরোগ, লেজ ও পাখনা পচা, ফুলকা পচা ও পেট ফোলা রোগের পেছনের ব্যাকটেরিয়া, ফাংগাস ও প্যারাসাইটের বিরুদ্ধে কাজ করে — বিশেষত শিং ও মাগুর মাছে। এটি রোগ সৃষ্টিকারী জীবাণু ধ্বংস করে দ্রুত মৃত্যুর হার কমায় এবং হ্যাচারির ট্যাংক, ডিম ও যন্ত্রপাতি জীবাণুমুক্ত করতেও ব্যবহৃত হয়।",
      indications: [
        "ক্ষতরোগ, লেজ, পাখনা ও ফুলকা পচা",
        "শিং-মাগুরে ব্যাকটেরিয়া, ফাংগাস ও প্যারাসাইট সংক্রমণ",
        "হ্যাচারির ট্যাংক ও যন্ত্রপাতি জীবাণুমুক্তকরণ",
      ],
      directions:
        "রোগ প্রতিরোধে: প্রতি শতাংশে ৩–৫ ফুট পানির জন্য ৩–৫ মিলি, প্রতি ১৫ দিন পর পর। রোগ প্রতিকারে: প্রতি শতাংশে ৭–১০ মিলি। হ্যাচারিতে: ট্যাংক ও যন্ত্রপাতি জীবাণুমুক্ত করতে ১০ লিটার পানিতে ৫ মিলি; ডিম ও হ্যাচলিংয়ের ফাংগাস প্রতিরোধে ১০০০ লিটার পানিতে ১০ মিলি স্প্রে করুন। সকাল ১০টা থেকে বিকাল ৩টার রৌদ্রে ব্যবহার ভালো; ব্যবহারের আগে পানির পিএইচ ও অক্সিজেন মাত্রা দেখে নিন।",
      storage:
        "ঠান্ডা ও শুষ্ক জায়গায় এবং শিশুদের নাগালের বাইরে সংরক্ষণ করুন।",
    },
    {
      slug: "nano-g-clear",
      category: "aqua",
      name: "ন্যানো জি-ক্লিয়ার",
      tagline: "ইউক্কা-ভিত্তিক অ্যামোনিয়া ও গ্যাস নিয়ন্ত্রণ।",
      form: "পাউডার স্যাশে",
      pack: "১০০ গ্রাম",
      composition: "ইউক্কা উদ্ভিদ নির্যাস ২০% + উদ্ভিদ নির্যাস ও প্রোবায়োটিক",
      benefits: [
        "পুকুরের পানিতে ক্ষতিকর অ্যামোনিয়া গ্যাস কমায়",
        "পুকুরের তলা ও পানি সতেজ রাখে",
        "অ্যাকুয়াকালচার ও পোল্ট্রি উভয় ক্ষেত্রে ব্যবহারযোগ্য",
      ],
      icon: "leaf",
      image: `${IMG}/products/nano-g-clear.jpg`,
      images: [`${IMG}/products/nano-g-clear.jpg`],
      overview:
        "ন্যানো জি-ক্লিয়ার একটি ইউক্কা-নির্যাসভিত্তিক পাউডার যা পুকুরের পানির ক্ষতিকর অ্যামোনিয়া ও অন্যান্য গ্যাস শোষণ করে কমায়। নিয়মিত ব্যবহারে পানি ও পুকুরের তলা সতেজ থাকে, প্রোটিন ব্যবহার উন্নত হয় এবং বেশি ঘনত্বে চাষ নিরাপদ হয়। পোল্ট্রি ঘরের গ্যাস নিয়ন্ত্রণেও ব্যবহার করা যায়।",
      indications: [
        "পুকুরে অ্যামোনিয়া ও বিষাক্ত গ্যাস জমা",
        "পুকুরের তলা থেকে দুর্গন্ধ",
        "উচ্চ-ঘনত্বের চাষ ব্যবস্থাপনা",
      ],
      directions:
        "প্রতিরোধে ৩–৫ ফুট গভীর পানির জন্য প্যাকে নির্দেশিত মাত্রায় একবার প্রয়োগ করুন; চিকিৎসায় দ্বিগুণ মাত্রা। পানি বা খাবারের সাথে মিশিয়ে দিন, অথবা মৎস্য-স্বাস্থ্য বিশেষজ্ঞের পরামর্শ নিন।",
      storage:
        "শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। ব্যবহারের আগ পর্যন্ত স্যাশে সিল রাখুন।",
    },
    {
      slug: "nephro-aqua",
      category: "aqua",
      name: "নেফ্রো-অ্যাকুয়া",
      tagline: "কিডনির যত্ন — গাউট ও ইডিমা ব্যবস্থাপনায় সহায়ক।",
      form: "ওরাল তরল",
      pack: "১০০ মিলি / ৫০০ মিলি",
      composition: "হ্যালাইট, সালমিয়াক, গ্লুসিটল ও সাইট্রোসোডিন মিশ্রণ",
      benefits: [
        "সুস্থ কিডনি কার্যক্রম সমর্থন করে",
        "গাউট, ইডিমা ও মাছের পেটের পানি ব্যবস্থাপনায় সহায়তা করে",
        "প্রত্যাহারকাল শূন্য (০) দিন",
      ],
      icon: "pulse",
      image: `${IMG}/products/nephro-aqua.png`,
      images: [`${IMG}/products/banner/nephro-aqua.jpeg`, `${IMG}/products/nephro-aqua.png`],
      overview:
        "নেফ্রো-অ্যাকুয়া মাছ, পোল্ট্রি ও গবাদি পশুর গাউট ও ইডিমা চিকিৎসায় ব্যবহৃত একটি ওরাল কিডনি-কেয়ার সলিউশন। এটি মাছের পেটের পানি ও কিডনির পানি প্রতিরোধে কার্যকর ভূমিকা রাখে, শরীর থেকে ইউরিক অ্যাসিড দূর করতে সহায়তা করে, বৃক্ক ও মূত্রনালী সতেজ ও প্রসারিত রাখে, অ্যান্টিবায়োটিক বা অন্যান্য ওষুধের বিষাক্ততা দূর করতে সাহায্য করে এবং ভিটামিন ডি-সহ বিভিন্ন হরমোনের কার্যকারিতা সচল রাখে।",
      indications: [
        "গাউট ও ইউরিক-অ্যাসিড সমস্যা",
        "ইডিমা ও পেটে পানি জমা",
        "ঔষধ কোর্স চলাকালীন ও পরে কিডনি সহায়তা",
      ],
      directions:
        "মৎস্য: প্রতি কেজি খাবারে ৫–১০ মিলি। পোল্ট্রি: ১–২ লিটার খাবার পানিতে ১ মিলি। গবাদি: প্রতি ১০০ কেজি দৈহিক ওজনে ১০–২০ মিলি। অথবা রেজিস্টার্ড ভেটেরিনারিয়ান ও মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। প্রত্যাহারকাল: শূন্য (০) দিন। ব্যবহারের আগে বোতল ভালোভাবে ঝাঁকিয়ে নিন।",
      storage:
        "৩০°সে তাপমাত্রার নিচে, আলো ও আর্দ্রতা থেকে দূরে সংরক্ষণ করুন। সকল ওষুধ শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "o2-white",
      category: "aqua",
      name: "ও২ হোয়াইট",
      tagline: "মাছের পুকুরের জন্য জরুরি অক্সিজেন সরবরাহকারী।",
      form: "ট্যাবলেট / গ্র্যানুল",
      pack: "২৫০ গ্রাম",
      composition: "অক্সিজেন-নিঃসরণকারী গ্র্যানুল",
      benefits: [
        "কয়েক মিনিটে দ্রবীভূত অক্সিজেন ছাড়ে",
        "অক্সিজেন ঘাটতিতে ক্ষতি রোধ করে",
        "সহজ ট্যাবলেট বা গ্র্যানুল প্রয়োগ",
      ],
      icon: "drop",
      image: `${IMG}/products/o2white.png`,
      images: [`${IMG}/products/banner/o2-white.jpeg`, `${IMG}/products/o2white.png`],
      overview:
        "ও২ হোয়াইট ট্যাবলেট ও গ্র্যানুল আকারে একটি জরুরি অক্সিজেন সরবরাহকারী। অক্সিজেন সংকটে পুকুরে ছিটিয়ে দিলে কয়েক মিনিটের মধ্যে দ্রবীভূত অক্সিজেন ছাড়ে — শৈবাল ধস, মেঘলা আবহাওয়া এবং উচ্চ-ঘনত্বের মজুত বা পরিবহনে গুরুত্বপূর্ণ সময় এনে দেয়।",
      indications: [
        "পুকুরে হঠাৎ অক্সিজেন ঘাটতি",
        "ভোরবেলা মাছের ভেসে ওঠা ও খাবি খাওয়া",
        "উচ্চ-ঘনত্বের মজুত ও পরিবহন",
      ],
      directions:
        "অক্সিজেন সংকটের সময় প্যাকে উল্লেখিত মাত্রায় পুকুরের উপরিভাগে সমানভাবে ছিটিয়ে দিন, অথবা মৎস্য-স্বাস্থ্য বিশেষজ্ঞের পরামর্শ অনুযায়ী। মাছ স্ট্রেসে থাকলে পুনরায় প্রয়োগ করুন।",
      storage:
        "আর্দ্রতা ও তাপ থেকে দূরে সিলড প্যাকে শুষ্ক অবস্থায় রাখুন। ব্যবহারের পর সঙ্গে সঙ্গে পুনরায় সিল করুন।",
    },
    {
      slug: "pond-pro",
      category: "aqua",
      name: "পন্ড প্রো",
      tagline: "মাছ ও চিংড়ির পুকুরের জন্য প্রোবায়োটিক।",
      form: "পাউডার",
      pack: "৫০ গ্রাম / ১০০ গ্রাম",
      composition: "১২-স্ট্রেন প্রোবায়োটিক (ব্যাসিলাস, ক্লস্ট্রিডিয়াম, পেডিওকক্কাস, অ্যাসপারজিলাসসহ)",
      benefits: [
        "পুকুরে উপকারী জীবাণুর ভারসাম্য গড়ে তোলে",
        "পানির মান ও পুকুরের তলা উন্নত করে",
        "অ্যান্টিবায়োটিক, ক্লোরামফেনিকল, নাইট্রোফুরান ও জিএমও মুক্ত",
      ],
      icon: "leaf",
      image: `${IMG}/products/pond-pro.png`,
      images: [`${IMG}/products/banner/pond-pro.jpeg`, `${IMG}/products/pond-pro.png`],
      overview:
        "পন্ড প্রো জাপানি প্রযুক্তির ১২-স্ট্রেন প্রোবায়োটিক — ব্যাসিলাস সাবটিলিস, বি. মেগাটেরিয়াম, বি. লাইকেনিফরমিস, অ্যাসপারজিলাস ওরাইজিসহ প্রতি গ্রামে বিলিয়ন সিএফইউ মাত্রার উপকারী কালচারের সমন্বয়। জীবন্ত কালচারগুলো জৈব বর্জ্য ভেঙে দেয়, পানির মান ও পুকুরের তলা উন্নত করে এবং ক্ষতিকর জীবাণু দমন করে। পণ্যটি অ্যান্টিবায়োটিক, ক্লোরামফেনিকল, নাইট্রোফুরান, মেলামাইন ও জিএমও মুক্ত বলে প্রত্যয়িত।",
      indications: [
        "খারাপ পানির মান ও জৈব কাদা",
        "নিয়মিত প্রোবায়োটিক পুকুর ব্যবস্থাপনা",
        "গ্রো-আউটের আগে ও চলাকালীন প্রস্তুতি",
      ],
      directions:
        "৩–৫ ফুট গভীর পানির জন্য: মাছ ছাড়ার আগে প্রতি একরে ১০০ গ্রাম; চাষকালীন প্রতি একরে ৭৫–১০০ গ্রাম, প্রতি ২ সপ্তাহে ১ বার। ৭–৮ ঘণ্টা চিনির পানিতে ভিজিয়ে রেখে সমস্ত জলাশয়ে ছিটিয়ে দিন। প্রোবায়োটিক ব্যবহারকালীন অ্যান্টিবায়োটিক বা জীবাণুনাশক ব্যবহার করবেন না।",
      storage:
        "জীবন্ত কালচার রক্ষায় ঢাকনা শক্তভাবে বন্ধ করে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন।",
    },
    {
      slug: "renutek-aqua",
      category: "aqua",
      name: "রেনুটেক অ্যাকুয়া",
      tagline: "মাছ ও চিংড়ির জন্য ইমিউনোস্টিমুল্যান্টসহ মাল্টিভিটামিন।",
      form: "ওরাল তরল",
      pack: "৫০০ মিলি",
      composition: "ভিটামিন এ, ডি ও বি-কমপ্লেক্স + খনিজ, অ্যামিনো নাইট্রোজেন ও ইমিউনোস্টিমুল্যান্ট",
      benefits: [
        "পুষ্টির ঘাটতি পূরণ করে ও রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
        "পোনা বেঁচে থাকার হার বাড়ায়",
        "চিংড়ির খোলস বদলাতে সহায়তা করে ও মোল্টিংয়ে সবল রাখে",
      ],
      icon: "pulse",
      image: `${IMG}/products/renutake-aqua.png`,
      images: [`${IMG}/products/banner/renutek-aqua.jpeg`, `${IMG}/products/renutake-aqua.png`],
      overview:
        "রেনুটেক অ্যাকুয়া চাষের মাছ ও চিংড়ির জন্য ভিটামিন এ, ডি ও বি-কমপ্লেক্সের সাথে খনিজ, অ্যামিনো নাইট্রোজেন, ইস্ট নির্যাস ও ইমিউনোস্টিমুল্যান্টের সমন্বয়। এটি যথাযথ পুষ্টি উপাদান সরবরাহ করে পুষ্টির অভাব পূরণ করে, পোনা বেঁচে থাকার হার বাড়ায়, চিংড়ির খোলস বদলাতে সহায়তা করে ও মোল্টিংয়ের সময় সবল রাখে, মাছ/চিংড়ির পোনাকে অধিক সক্রিয় করে এবং চিকিৎসার প্রয়োজনে অ্যান্টিবায়োটিকের সাথে ব্যবহারে আরও ভালো ফল দেয়।",
      indications: [
        "পুষ্টির ঘাটতি ও দুর্বল মজুত",
        "পোনার কম বেঁচে থাকার হার",
        "চিংড়ির মোল্টিং সহায়তা ও চিকিৎসাকালীন সুস্থতা",
      ],
      directions:
        "নার্সারি পুকুর: প্রতি কেজি নার্সারি খাবারে ৩–৫ মিলি। অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।",
      storage:
        "ঠান্ডা এবং শুষ্ক স্থানে রাখুন। সকল ঔষধ শিশুদের নাগালের বাইরে রাখুন।",
    },
    {
      slug: "ruchi-advance-aqua",
      category: "aqua",
      name: "রুচি অ্যাডভান্স-অ্যাকুয়া",
      tagline: "খনিজসমৃদ্ধ ফিশ ফিড সাপ্লিমেন্ট — রুচি ও এফসিআর বাড়ায়।",
      form: "ফিড সাপ্লিমেন্ট (পাউডার)",
      pack: "৫০০ গ্রাম",
      composition: "ক্যালসিয়াম ১২% + খনিজ, ভিটামিন-বি কমপ্লেক্স, ১৬% ক্রুড প্রোটিন",
      benefits: [
        "প্রোটিন থাকায় মাছের দ্রুত ওজন বৃদ্ধিতে সহায়তা করে",
        "মাছের রুচি ও হজম শক্তি বাড়ায়",
        "রোগ প্রতিরোধ ক্ষমতা ও খাদ্যের এফসিআর হার উন্নত করে",
      ],
      icon: "leaf",
      image: `${IMG}/products/ruchi-advance-aqua.jpg`,
      images: [`${IMG}/products/banner/ruchi-advance-aqua.jpeg`, `${IMG}/products/ruchi-advance-aqua.jpg`],
      overview:
        "রুচি অ্যাডভান্স-অ্যাকুয়া একটি ফিশ ফিড সাপ্লিমেন্ট, যাতে রয়েছে ক্যালসিয়াম, ফসফরাস, আয়রন, জিংকসহ বিভিন্ন খনিজ, ভিটামিন-বি কমপ্লেক্স এবং ১৬% ক্রুড প্রোটিন (৩,২০০ কিলোক্যালরি/কেজি)। দৈনিক খাবারের সাথে মিশিয়ে দিলে মাছের রুচি, হজম ও রোগ প্রতিরোধ ক্ষমতা বাড়ে এবং খাদ্য রূপান্তর উন্নত হয়।",
      indications: [
        "রুচিহীনতা ও ধীর বৃদ্ধি",
        "দুর্বল হজম ও উচ্চ এফসিআর",
        "খাদ্যে খনিজ ও ভিটামিনের ঘাটতি",
      ],
      directions:
        "প্রতি কেজি খাবারের সাথে ১০–২০ গ্রাম মিশিয়ে দিন, অথবা মৎস্য চিকিৎসকের পরামর্শ অনুযায়ী।",
      storage:
        "শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। প্রতিবার ব্যবহারের পর প্যাক শক্তভাবে বন্ধ করুন।",
    },
    {
      slug: "yucca-rex-100",
      category: "aqua",
      name: "ইউক্কা রেক্স-১০০",
      tagline: "অ্যামোনিয়া নিয়ন্ত্রণে ১০০% প্রাকৃতিক ইউক্কা নির্যাস।",
      form: "তরল সলিউশন",
      pack: "৫০০ মিলি",
      composition: "ইউক্কা শিডিগেরা নির্যাস ১০০% প্রাকৃতিক",
      benefits: [
        "অ্যামোনিয়া ও অন্যান্য ক্ষতিকর গ্যাস কমায়",
        "স্ট্রেস ও পোনার মৃত্যুহার কমায়",
        "উৎপাদন ১৪–২১.৫% ও এফসিআর ১১–১৯% পর্যন্ত বাড়ায়",
      ],
      icon: "leaf",
      image: `${IMG}/products/banner/yucca-rex-100.jpeg`,
      images: [`${IMG}/products/banner/yucca-rex-100.jpeg`],
      overview:
        "ইউক্কা রেক্স-১০০ অ্যাকুয়াকালচারের জন্য ১০০% প্রাকৃতিক ইউক্কা শিডিগেরা নির্যাস (উৎপত্তি: মেক্সিকো)। অ্যামোনিয়া ও অন্যান্য ক্ষতিকর গ্যাস শোষণ করে এটি কম স্ট্রেসের সুস্থ পরিবেশ তৈরি করে, পোনার মৃত্যুহার কমায়, ক্ষতি না করে পানির পিএইচ নিয়ন্ত্রণে রাখে এবং উৎপাদন ১৪–২১.৫% ও খাদ্য রূপান্তর ১১–১৯% পর্যন্ত উন্নত করে।",
      indications: [
        "পুকুরের পানিতে অ্যামোনিয়া জমা",
        "পোনার মৃত্যুহার ও স্ট্রেস",
        "চাষের পুকুরে পিএইচ ব্যবস্থাপনা",
      ],
      directions:
        "প্রতি শতাংশে ৩–৫ ফুট গভীর পানির জন্য ২–৩ মিলি প্রয়োগ করুন। শুধুমাত্র অ্যাকুয়া ব্যবহারের জন্য — মানুষের খাওয়ার জন্য নয়।",
      storage:
        "শীতল ও শুষ্ক স্থানে সংরক্ষণ করুন।",
    },
    {
      slug: "zeo-b",
      category: "aqua",
      name: "জিও-বি",
      tagline: "পরিষ্কার, স্বাস্থ্যকর পুকুরের জন্য জিওলাইট-ভিত্তিক কন্ডিশনার।",
      form: "পাউডার / গ্র্যানুল",
      pack: "৫ কেজি",
      composition: "জিওলাইট (SiO₂ ৬০–৬৫%) + এনজাইম, প্রোবায়োটিক, ইউক্কা ও ভেষজ নির্যাস",
      benefits: [
        "হাইড্রোজেন সালফাইড, মিথেন ও অ্যামোনিয়া গ্যাস দূর করে",
        "পুকুরের তলদেশের মাটি ও পানির দূষণ নিরাময় করে",
        "অক্সিজেনের মাত্রা ও প্রাকৃতিক প্লাংটন খাবার বাড়ায়",
      ],
      icon: "flask",
      image: `${IMG}/products/banner/zeo-b.jpeg`,
      images: [`${IMG}/products/banner/zeo-b.jpeg`],
      overview:
        "স্পেশাল জিও-বি সর্বোচ্চ ক্যাটায়ন বিনিময় ক্ষমতাসম্পন্ন একটি জিওলাইট-ভিত্তিক পুকুর কন্ডিশনার, যাতে মেশানো আছে এনজাইম, প্রোবায়োটিক, ইউক্কা ও ভেষজ নির্যাস। এটি হাইড্রোজেন সালফাইড, মিথেন, অ্যামোনিয়ার মতো ক্ষতিকারক গ্যাস ও দুর্গন্ধ দূর করে, তলদেশের ক্ষতিকর জীবাণুর বৃদ্ধি ব্যাহত করে, মাটি ও পানির দূষণ নিরাময় করে, অক্সিজেনের মাত্রা বাড়ায় এবং ফাইটোপ্লাংটনের প্রাকৃতিক খাবার উৎপাদনে সহায়তা করে — ফলে মাছ দ্রুত বেড়ে ওঠে।",
      indications: [
        "ক্ষতিকর গ্যাস জমা (হাইড্রোজেন সালফাইড, মিথেন, অ্যামোনিয়া)",
        "দূষিত পুকুরতল ও দুর্গন্ধ",
        "পুকুর প্রস্তুতি ও চাষকালীন ব্যবস্থাপনা",
      ],
      directions:
        "পুকুর প্রস্তুতির সময়: প্রতি শতাংশে (৩–৫ ফুট পানির জন্য) ১৫০ গ্রাম হিসাবে সমস্ত পুকুরে ছিটিয়ে দিন। চাষকালীন: প্রতি শতাংশে ১০০ গ্রাম হিসাবে ৩০ দিন পর পর, অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী।",
      storage:
        "আর্দ্রতা থেকে দূরে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। ব্যবহারের পর প্যাক সিল করে রাখুন।",
    },
    // Cattle
    {
      slug: "liver-power",
      category: "cattle",
      name: "লিভার পাওয়ার",
      tagline: "গবাদি পশু, পোল্ট্রি ও মাছের জন্য আদর্শ লিভার-টনিক ওরাল সলিউশন।",
      form: "ওরাল সলিউশন",
      pack: "৫০০ মিলি / ১ লিটার",
      composition: "ভিটামিন বি-কমপ্লেক্স, ফলিক অ্যাসিড, নিকোটিনামাইড, লিভার নির্যাস, কোলিন ক্লোরাইড ও ডিএল-মিথিওনিন সহ ভেষজ",
      benefits: [
        "লিভারের ক্ষতিগ্রস্থ কোষের দ্রুত পুনর্গঠন নিশ্চিত করে",
        "সর্বোচ্চ পিত্তরস উৎপাদন ও হজমে সহায়তা করে",
        "গবাদি পশু, পোল্ট্রি ও মাছের জন্য অ্যান্টি-অক্সিডেন্ট সরবরাহ করে",
      ],
      icon: "leaf",
      image: `${IMG}/products/liver-power.png`,
      images: [`${IMG}/products/banner/liver-power.jpeg`, `${IMG}/products/liver-power.png`],
      overview:
        "লিভার পাওয়ার গবাদি পশু, পোল্ট্রি ও মাছের জন্য একটি আদর্শ লিভার-টনিক ওরাল সলিউশন, যাতে রয়েছে বি-ভিটামিন, ফলিক অ্যাসিড, নিকোটিনামাইড, লিভার নির্যাস, কোলিন ক্লোরাইড ও ডিএল-মিথিওনিন সহ ভেষজ উপাদান। এটি লিভারের ক্ষতিগ্রস্থ কোষের দ্রুত পুনর্গঠন নিশ্চিত করে, লিভারের হারানো কার্যক্ষমতা ফিরিয়ে আনে, সর্বোচ্চ পিত্তরস উৎপাদনে সহায়তা করে, অ্যান্টি-অক্সিডেন্ট সরবরাহ নিশ্চিত করে এবং হজম ক্ষমতা বাড়ায় — বিশেষত অসুস্থতা-পরবর্তী সুস্থতা ও ভারী খাওয়ানোর সময়ে কার্যকর।",
      indications: [
        "রুচিহীনতা ও দুর্বল হজম",
        "অসুস্থতা বা ঔষধ কোর্সের পর লিভারের ধকল",
        "কৃমিনাশের পর মোটাতাজাকরণ কর্মসূচি",
      ],
      directions:
        "পোল্ট্রি: প্রতিরোধে ০.৫ মিলি/লিটার খাবার পানিতে মিশিয়ে ৫ দিন; চিকিৎসায় ১ মিলি/লিটার ৫ দিন। গবাদি প্রাণী: ০.৫–০.৭৫ মিলি/লিটার খাবার পানিতে ৫ দিন। মাছ: প্রতি কেজি খাবারে ৫ মিলি করে ৭–১০ দিন; মোটাতাজাকরণের শুরুতে কৃমিনাশক ব্যবহারের পর দৈনিক ৫০ মিলি একাধারে ১০ দিন। অথবা রেজিস্টার্ড ভেটেরিনারিয়ানের পরামর্শ অনুযায়ী।",
      storage:
        "সরাসরি সূর্যালোক থেকে দূরে ৩০°সে-এর নিচে সংরক্ষণ করুন। বোতল শক্তভাবে বন্ধ রাখুন।",
    },
    {
      slug: "power-zinc",
      category: "cattle",
      name: "পাওয়ার জিংক",
      tagline: "ভিটামিন বি-কমপ্লেক্সসহ জিংক ওরাল সলিউশন।",
      form: "ওরাল সলিউশন",
      pack: "১ লিটার",
      composition: "জিংক সালফেট মনোহাইড্রেট + ভিটামিন বি কমপ্লেক্স (বি১, বি২, বি৬, বি১২, নিকোটিনামাইড)",
      benefits: [
        "দেহ গঠন মজবুত করে ও ওজন বাড়ায়",
        "রোগ প্রতিরোধ ক্ষমতা গড়ে তোলে, ডিম ও দুধ উৎপাদন বাড়ায়",
        "পালক/লোম গজাতে, রুচি বাড়াতে ও ডায়রিয়া-আমাশয় সারাতে সাহায্য করে",
      ],
      icon: "pulse",
      image: `${IMG}/products/power-zinc.png`,
      images: [`${IMG}/products/banner/power-zinc.jpeg`, `${IMG}/products/power-zinc.png`],
      overview:
        "পাওয়ার জিংক গবাদি পশু, পোল্ট্রি ও মাছের জন্য জিংক সালফেট মনোহাইড্রেটের সাথে ভিটামিন বি-কমপ্লেক্সের (বি১, বি২, বি৬, বি১২ ও নিকোটিনামাইড) সমন্বয়ে একটি ওরাল সলিউশন। এটি দেহ গঠন মজবুত করে, ওজন বাড়ায়, রোগের বিরুদ্ধে প্রতিরোধ ক্ষমতা গড়ে তোলে, ডিম ও দুধ উৎপাদন বাড়ায়, পালক ও লোমের বিকাশে সাহায্য করে, রুচি উন্নত করে, সব ধরনের ডায়রিয়া ও আমাশয়ে কাজ করে এবং রক্তস্বল্পতা দূর করে।",
      indications: [
        "জিংক ও ভিটামিন-বি ঘাটতি",
        "দুর্বল বৃদ্ধি, পালক বা লোমের সমস্যা",
        "ডায়রিয়া, আমাশয় ও রক্তস্বল্পতা",
      ],
      directions:
        "পোল্ট্রি: ২–৩ মিলি/লিটার খাবার পানিতে ৫–৭ দিন। গরু/মহিষ: ৫০–১০০ মিলি করে ৫–৭ দিন। ছাগল/ভেড়া: ২৫–৩০ মিলি করে ৫–৭ দিন। মাছ: প্রতি কেজি খাবারে ৫–১০ মিলি করে ১০–১৫ দিন। অথবা রেজিস্টার্ড ভেটেরিনারিয়ান ও মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী।",
      storage:
        "সরাসরি সূর্যালোক থেকে দূরে ৩০°সে-এর নিচে সংরক্ষণ করুন। ব্যবহারের পর শক্তভাবে বন্ধ রাখুন।",
    },
    // Poultry
    {
      slug: "zyme-r",
      category: "poultry",
      name: "জাইম-আর",
      tagline: "উন্নত হজমের জন্য মাল্টি-এনজাইম ফিড সাপ্লিমেন্ট।",
      form: "পাউডার",
      pack: "৫০০ গ্রাম",
      composition: "মাল্টি-এনজাইম কমপ্লেক্স (অ্যামাইলেজ, প্রোটিয়েজ, লাইপেজ, জাইলানেজ, সেলুলেজ, পেকটিনেজ, গ্লুকানেজ, ফাইটেজ, গ্যালাক্টোসাইডেজ)",
      benefits: [
        "নন-স্টার্চ পলিস্যাকারাইড ও পুষ্টিবিরোধী উপাদান হজম করায়",
        "সর্বোত্তম খাদ্য গ্রহণে ভালো এফসিআর নিশ্চিত করে",
        "অন্ত্রে অ্যামোনিয়া তৈরি কমায়",
      ],
      icon: "flask",
      image: `${IMG}/products/zymer-r.png`,
      images: [`${IMG}/products/banner/zyme-r.jpeg`, `${IMG}/products/zymer-r.png`],
      overview:
        "জাইম-আর একটি মাল্টি-এনজাইম ফিড সাপ্লিমেন্ট, যাতে অ্যামাইলেজ, প্রোটিয়েজ, লাইপেজ, আলফা ও বিটা-গ্যালাক্টোসাইডেজ, জাইলানেজ, সেলুলেজ, পেকটিনেজ, গ্লুকানেজ ও ফাইটেজ স্থিতিশীল অনুপাতে মেশানো। এটি নন-স্টার্চ পলিস্যাকারাইড ও পুষ্টিবিরোধী উপাদান ভেঙে দেয়, ফলে খাদ্যের পুষ্টি সম্পূর্ণ ব্যবহৃত হয় — কম খরচে খাদ্যমূল্য বাড়ে, এফসিআর উন্নত হয়, বাড়তি শক্তি মেলে, ভেজা বিষ্ঠা কমে এবং অন্ত্রে অ্যামোনিয়া তৈরি হ্রাস পায়।",
      indications: [
        "দুর্বল হজম ও বিষ্ঠায় অপাচ্য খাবার",
        "উচ্চ খাদ্য রূপান্তর হার (এফসিআর)",
        "ভেজা বিষ্ঠা ও অন্ত্রের অ্যামোনিয়া সমস্যা",
      ],
      directions:
        "মুখে খাওয়ানোর জন্য: পোল্ট্রি প্রতি কেজি খাবারে ০.৫–১ গ্রাম; মাছ প্রতি কেজি খাবারে ৫ গ্রাম; বড় প্রাণী দৈনিক ১০–২০ গ্রাম। অথবা পোল্ট্রি/মৎস্য পরামর্শকের পরামর্শ অনুযায়ী।",
      storage:
        "এনজাইমের কার্যকারিতা রক্ষায় ঢাকনা শক্তভাবে বন্ধ করে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন।",
    },
    {
      slug: "vita-plus-c",
      category: "poultry",
      name: "ভিটা প্লাস-সি",
      tagline: "রোগ প্রতিরোধ ও ধকল প্রতিরোধে ভিটামিন সি সাপ্লিমেন্ট।",
      form: "পানিতে দ্রবণীয় পাউডার",
      pack: "১ কেজি",
      composition: "এসকরবিক এসিড ৯৯%",
      benefits: [
        "পরিবহন, ঘনত্ব, তাপ ও অ্যান্টিবায়োটিক-পরবর্তী ধকল থেকে রক্ষা করে",
        "রোগ প্রতিরোধ ক্ষমতা বাড়ায় ও মৃত্যুর হার কমায়",
        "রুচি বাড়ায়; চিংড়ির মোল্টিং ও মাছের ক্ষত শুকাতে সহায়তা করে",
      ],
      icon: "pulse",
      image: `${IMG}/products/vitaplus-c.png`,
      images: [`${IMG}/products/banner/vita-plus-c.jpeg`, `${IMG}/products/vitaplus-c.png`],
      overview:
        "ভিটা প্লাস-সি ৯৯% এসকরবিক এসিডের (ভিটামিন সি) একটি সাপ্লিমেন্ট, পোল্ট্রি ও অ্যাকুয়ার জন্য। এটি যেকোনো ধরনের ধকল — পরিবহনজনিত, অধিক ঘনত্ব, তাপ বৃদ্ধি, প্রতিকূল পরিবেশ ও অ্যান্টিবায়োটিক-পরবর্তী ধকল — থেকে রক্ষা করে, রোগ প্রতিরোধ ক্ষমতা বাড়িয়ে মৃত্যুর হার কমায়, খাদ্য গ্রহণের মাত্রা ও রুচি বাড়ায়, চিংড়ির নিয়মিত মোল্টিং ও উজ্জ্বল খোসা তৈরিতে সহায়তা করে এবং রোগাক্রান্ত মাছের ক্ষত দ্রুত শুকাতে সাহায্য করে।",
      indications: [
        "তাপ, পরিবহন ও ঘনত্বের ধকল",
        "দুর্বল রোগ প্রতিরোধ ক্ষমতা ও উচ্চ মৃত্যুহার",
        "অ্যান্টিবায়োটিকের পর সুস্থতা; চিংড়ির মোল্টিং সহায়তা",
      ],
      directions:
        "পোল্ট্রি — প্রতিরোধে: ১ গ্রাম ভিটা প্লাস-সি ৫–৭ লিটার পানিতে মিশিয়ে খাওয়াতে হবে; চিকিৎসায়: ১ গ্রাম ৩–৫ লিটার পানিতে মিশিয়ে ৫–৭ দিন। অ্যাকুয়া — প্রতিরোধে: ১–২ গ্রাম প্রতি কেজি খাদ্যে ৫–৭ দিন; চিকিৎসায়: ৩–৫ গ্রাম প্রতি কেজি খাদ্যে ৫–৭ দিন; ব্যাকটেরিয়াজনিত রোগে প্রতি ঘন মিটার পানিতে ৮–১৫ গ্রাম।",
      storage:
        "সরাসরি সূর্যালোক থেকে দূরে শীতল, শুষ্ক স্থানে সংরক্ষণ করুন। ভিটামিনের কার্যকারিতা রক্ষায় শক্তভাবে বন্ধ রাখুন। শিশুদের নাগালের বাইরে রাখুন।",
    },
  ],
  quality: {
    eyebrow: "মান ও গবেষণা",
    heading: "বিজ্ঞান দ্বারা সমর্থিত, নিরাপত্তার জন্য পরীক্ষিত",
    body: "আমাদের ফর্মুলেশন ভেটেরিনারি বিশেষজ্ঞদের সাথে তৈরি এবং প্রতিটি ধাপে মান-পরীক্ষিত, তাই আপনি প্রতিটি ডোজে আস্থা রাখতে পারেন।",
    image: `${IMG}/lab.jpg`,
    points: [
      {
        icon: "flask",
        title: "ল্যাব-পরীক্ষিত কার্যকারিতা",
        body: "প্রতিটি ব্যাচ সক্রিয় উপাদানের শক্তি ও বিশুদ্ধতার জন্য যাচাইকৃত।",
      },
      {
        icon: "shield",
        title: "নিরাপদ ও সম্মত",
        body: "পণ্যগুলো ভেটেরিনারি নিরাপত্তা ও প্রত্যাহার-সময়ের মান পূরণ করে।",
      },
      {
        icon: "pulse",
        title: "মাঠে প্রমাণিত ফলাফল",
        body: "সারাদেশে বাস্তব পরিস্থিতিতে কৃষক ও ভেটেরিনারিয়ানদের আস্থাভাজন।",
      },
    ],
  },
  stats: {
    eyebrow: "সারাদেশে আস্থাভাজন",
    heading: "বৃহৎ পরিসরে প্রাণী-স্বাস্থ্য",
    items: [
      { value: "১২০+", label: "পণ্য" },
      { value: "৩", label: "প্রজাতি শ্রেণি" },
      { value: "৫ হাজার+", label: "ডিলার ও ভেট" },
      { value: "১৫+", label: "বছরের অভিজ্ঞতা" },
    ],
  },
  cta: {
    heading: "এমআর অ্যাগ্রো মেডিসিনের সাথে অংশীদার হোন",
    body: "ডিলার হোন, অথবা আপনার প্রাণীর জন্য সঠিক পণ্য নিয়ে আমাদের ভেটেরিনারি টিমের সাথে কথা বলুন।",
    button: "যোগাযোগ করুন",
  },
  footer: {
    newsletterHeading: "আপডেট পান",
    emailPlaceholder: "আপনার ইমেইল",
    submitLabel: "জমা দিন",
    consent:
      "আমি এমআর অ্যাগ্রো মেডিসিন থেকে আপডেট পেতে সম্মত। আমি জানি যে আমি যেকোনো সময় সম্মতি প্রত্যাহার করতে পারি।",
    contactHeading: "যোগাযোগ করুন",
    email: "agromedicine@mrgroup.com",
    phone: "+৮৮০ ১৭১২-৩৪৫৬৭৮",
    addressHeading: "ঠিকানা",
    address: ["এমআর টাওয়ার, গুলশান এভিনিউ", "ঢাকা ১২১২, বাংলাদেশ"],
    followHeading: "অনুসরণ করুন",
    socials: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    statement: "সুস্থ প্রাণী, সমৃদ্ধ খামার।",
    legal: "© ২০২৬ এমআর অ্যাগ্রো মেডিসিন, এমআর গ্রুপের একটি প্রতিষ্ঠান। সর্বস্বত্ব সংরক্ষিত।",
  },
  aboutPage: {
    header: {
      eyebrow: "আমাদের সম্পর্কে",
      title: "সারাদেশে প্রাণী-স্বাস্থ্যের অগ্রযাত্রা",
      description:
        "অ্যাকুয়াকালচার ও গবাদি পশু থেকে ঘরের পোষা প্রাণী পর্যন্ত, এমআর অ্যাগ্রো মেডিসিন দেশের নির্ভরযোগ্য ভেটেরিনারি ঔষধ পৌঁছে দেয়।",
      image: `${IMG}/about-farm.jpg`,
    },
    storyHeading: "যেখান থেকে শুরু",
    storyParagraphs: [
      "এমআর অ্যাগ্রো মেডিসিনের যাত্রা শুরু হয়েছিল একটি সরল বিশ্বাস নিয়ে: সুস্থ প্রাণীই সুস্থ খামার ও সুখী ঘরের ভিত্তি। আমরা দেশের প্রতিটি কৃষক ও পোষা-প্রাণী মালিকের কাছে মানসম্পন্ন ভেটেরিনারি ঔষধ পৌঁছে দিতে চেয়েছিলাম।",
      "আজ আমাদের পরিসর অ্যাকুয়াকালচার, গবাদি পশু, পোল্ট্রি ও পোষা প্রাণীর যত্ন জুড়ে বিস্তৃত — ঔষধ, ভ্যাকসিন, ভিটামিন ও সাপ্লিমেন্ট, ভেটেরিনারি বিশেষজ্ঞদের সাথে তৈরি ও কঠোর মান অনুযায়ী উৎপাদিত।",
      "এমআর গ্রুপের অংশ হিসেবে, আমরা কয়েক দশকের কৃষি ও বিতরণ অভিজ্ঞতার সাথে আধুনিক প্রাণী-স্বাস্থ্য বিজ্ঞান মিলিয়ে সারাদেশে সেবার মান উন্নত করে চলেছি।",
    ],
    storyImage: `${IMG}/hero-cattle.jpg`,
    missionHeading: "আমাদের লক্ষ্য",
    mission:
      "নিরাপদ, কার্যকর ও সাশ্রয়ী ভেটেরিনারি ঔষধ দিয়ে প্রাণী-স্বাস্থ্য রক্ষা ও উন্নত করা — সারাদেশে খামারের উৎপাদনশীলতা ও প্রাণী কল্যাণ শক্তিশালী করা।",
    visionHeading: "আমাদের দৃষ্টিভঙ্গি",
    vision:
      "এমন একটি দেশ যেখানে প্রতিটি কৃষক ও পোষা-প্রাণী মালিকের নির্ভরযোগ্য প্রাণী-স্বাস্থ্য ঔষধের সুযোগ থাকবে, এবং যেখানে সুস্থ প্রাণী প্রতিটি সম্প্রদায়ে সমৃদ্ধি আনবে।",
    valuesHeading: "আমরা যা বিশ্বাস করি",
    values: [
      { title: "মান", body: "প্রতিটি ব্যাচে ল্যাব-পরীক্ষিত, মান-সম্মত ঔষধ।" },
      { title: "নিরাপত্তা", body: "প্রাণী কল্যাণ ও প্রত্যাহার-সময়কে সম্মান করে এমন ফর্মুলেশন।" },
      { title: "উদ্ভাবন", body: "ভেট-পরিচালিত গবেষণা যা আমাদের পরিসরকে কার্যকর ও আধুনিক রাখে।" },
      { title: "অংশীদারিত্ব", body: "আমরা যে ডিলার, ভেট ও কৃষকদের সেবা দিই তাদের দীর্ঘমেয়াদী সহায়তা।" },
    ],
    careHeading: "জীবনের প্রতিটি পর্যায়ে যত্ন",
    careBody:
      "একদিনের বাচ্চা ও পোনা থেকে ডেইরি পাল ও ঘরের পোষা প্রাণী পর্যন্ত, আমাদের পণ্য প্রতিটি পর্যায়ে প্রাণীকে সহায়তা করে — প্রতিরোধ, চিকিৎসা ও সুস্থতা।",
    careImage: `${IMG}/vet-care.jpg`,
  },
  contactPage: {
    header: {
      eyebrow: "যোগাযোগ",
      title: "আপনার কথা শুনতে চাই",
      description:
        "পণ্য, ডিলারশিপ বা ভেটেরিনারি পরামর্শ নিয়ে যেকোনো প্রশ্ন — আমাদের বার্তা পাঠান, আমাদের টিম দ্রুত উত্তর দেবে।",
      image: `${IMG}/vet-care.jpg`,
    },
    formHeading: "আমাদের বার্তা পাঠান",
    formIntro: "ফর্মটি পূরণ করুন, আমাদের টিম এক কর্মদিবসের মধ্যে উত্তর দেবে।",
    officeHeading: "প্রধান কার্যালয়",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
    followHeading: "অনুসরণ করুন",
  },
  productsPage: {
    header: {
      eyebrow: "আমাদের পণ্য",
      title: "প্রতিটি প্রজাতির জন্য প্রাণী-স্বাস্থ্য ঔষধ",
      description:
        "ঔষধ, ভ্যাকসিন, ভিটামিন ও সাপ্লিমেন্ট — প্রজাতি অনুযায়ী সাজানো, যাতে আপনি ঠিক যা প্রয়োজন তা খুঁজে পান।",
      image: `${IMG}/med-vial.jpg`,
    },
    intro:
      "শ্রেণি অনুযায়ী আমাদের সম্পূর্ণ পরিসর দেখুন। প্রতিটি পণ্য ভেটেরিনারি বিশেষজ্ঞদের সাথে তৈরি এবং কার্যকারিতা ও নিরাপত্তার জন্য ল্যাব-পরীক্ষিত।",
    allLabel: "সব পণ্য",
    formLabel: "ধরন",
    packLabel: "প্যাক সাইজ",
    compositionLabel: "উপাদান",
    benefitsLabel: "মূল সুবিধা",
    enquireLabel: "এই পণ্য সম্পর্কে জিজ্ঞাসা করুন",
    categoryHeaderPrefix: "পণ্য",
    productsCountLabel: "পণ্য",
    viewDetailsLabel: "বিস্তারিত দেখুন",
    overviewLabel: "সংক্ষিপ্ত বিবরণ",
    indicationsLabel: "ব্যবহারের ক্ষেত্র",
    directionsLabel: "ব্যবহারবিধি",
    storageLabel: "সংরক্ষণ",
    relatedLabel: "সম্পর্কিত পণ্য",
    backToProductsLabel: "সব পণ্যে ফিরে যান",
  },
  galleryPage: {
    header: {
      eyebrow: "গ্যালারি",
      title: "এমআর কেমিক্যালের ভেতরে",
      description:
        "আমাদের ল্যাব, মাঠে কাজ এবং যে কৃষক ও প্রাণীর সেবা করি তাদের ছবি ও ভিডিও।",
      image: `${IMG}/vet-care.jpg`,
    },
    intro:
      "এমআর কেমিক্যালের পেছনের মানুষ, পণ্য ও মাঠে কাজের এক ঝলক। ছবি ও ভিডিওর মধ্যে বিকল্প খুঁজে দেখুন।",
    photosLabel: "ছবি",
    videosLabel: "ভিডিও",
    noPhotos: "এখনও কোনো ছবি নেই।",
    noVideos: "এখনও কোনো ভিডিও নেই।",
  },
};

export const agroMedicineContent: Record<AppLocale, AgroMedContent> = { en, bn };
