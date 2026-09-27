import type { CompanySiteContent } from "@/types/company";

export const autoRiceMillContent: Record<"en" | "bn", CompanySiteContent> = {
  en: {
    name: "M/s. Bangladesh Auto Rice Mill",
    sector: "Rice Mill",
    tagline: "Premium Quality Rice Production from field to table.",
    heroImage: "/images/companies/agro-banner.png",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Products", href: "/#products" },
      { label: "Contact", href: "/#contact" },
    ],
    about: {
      heading: "About M/s. Bangladesh Auto Rice Mill",
      body: "We process and distribute high-quality rice to meet the growing demands of our region. Founded by Md. Saiful Islam Bulbul, our state-of-the-art automated milling facilities ensure the best quality rice for every household. From sourcing the finest paddy directly from local farmers to utilizing advanced sorting and grading technology, we guarantee hygiene, nutritional value, and perfect taste in every grain. Our commitment to sustainable agriculture and fair trade practices empowers local farmers while delivering uncompromising quality to your table.",
    },
    products: {
      heading: "Our Premium Products",
      items: [
        "Premium Miniket Rice (Sleek & Delicious)",
        "Nazirshail Rice (Nutritious & Traditional)",
        "Chinigura Aromatic Rice (Perfect for Polao/Biryani)",
        "Kataribhog Rice",
        "High-Grade Parboiled Rice",
        "Export Quality Basmati Rice",
        "Nutrient-Rich Brown Rice",
        "Animal Feed & Rice Bran"
      ],
    },
    contact: {
      heading: "Contact Us",
      email: "rice@fhsenterprise.com",
      phone: "+880 123456789",
      address: "Fulbariya, Mymensingh, Bangladesh",
    },
  },
  bn: {
    name: "মেসার্স বাংলাদেশ অটো রাইস মিল",
    sector: "রাইস মিল",
    tagline: "মাঠ থেকে টেবিলে প্রিমিয়াম মানের চাল সরবরাহ",
    heroImage: "/images/companies/agro-banner.png",
    nav: [
      { label: "হোম", href: "/" },
      { label: "সম্পর্কে", href: "/#about" },
      { label: "পণ্য", href: "/#products" },
      { label: "যোগাযোগ", href: "/#contact" },
    ],
    about: {
      heading: "মেসার্স বাংলাদেশ অটো রাইস মিল সম্পর্কে",
      body: "আমরা আমাদের অঞ্চলের ক্রমবর্ধমান চাহিদা মেটাতে উচ্চ-মানের চাল প্রক্রিয়াজাত এবং বিতরণ করি। মোঃ সাইফুল ইসলাম বুলবুল দ্বারা প্রতিষ্ঠিত, আমাদের অত্যাধুনিক স্বয়ংক্রিয় মিলিং সুবিধা প্রতিটি পরিবারের জন্য সেরা মানের চাল নিশ্চিত করে। স্থানীয় কৃষকদের কাছ থেকে সরাসরি সেরা ধান সংগ্রহ করা থেকে শুরু করে উন্নত বাছাই প্রযুক্তি ব্যবহার পর্যন্ত, আমরা প্রতিটি দানায় স্বাস্থ্যবিধি, পুষ্টিগুণ এবং নিখুঁত স্বাদ নিশ্চিত করি। টেকসই কৃষি এবং ন্যায্য বাণিজ্যের প্রতি আমাদের প্রতিশ্রুতি স্থানীয় কৃষকদের ক্ষমতায়ন করে এবং আপনার টেবিলে আপোষহীন মান সরবরাহ করে।",
    },
    products: {
      heading: "আমাদের প্রিমিয়াম পণ্য",
      items: [
        "প্রিমিয়াম মিনিকেট চাল (মসৃণ ও সুস্বাদু)",
        "নাজিরশাইল চাল (পুষ্টিকর ও ঐতিহ্যবাহী)",
        "চিনিগুঁড়া সুগন্ধি চাল (পোলাও/বিরিয়ানির জন্য নিখুঁত)",
        "কাটারিভোগ চাল",
        "উচ্চ-গ্রেডের সিদ্ধ চাল",
        "রপ্তানি মানের বাসমতি চাল",
        "পুষ্টিকর ব্রাউন রাইস",
        "পশুখাদ্য ও রাইস ব্র্যান"
      ],
    },
    contact: {
      heading: "যোগাযোগ করুন",
      email: "rice@fhsenterprise.com",
      phone: "+880 123456789",
      address: "ফুলবাড়িয়া, ময়মনসিংহ, বাংলাদেশ",
    },
  },
};
