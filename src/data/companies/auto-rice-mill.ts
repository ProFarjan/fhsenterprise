import type { CompanySiteContent } from "@/types/company";

export const autoRiceMillContent: Record<"en" | "bn", CompanySiteContent> = {
  en: {
    name: "M/s. Bangladesh Auto Rice Mill",
    sector: "Rice Mill",
    tagline: "Quality Rice Production from field to table.",
    heroImage: "/images/companies/agro-banner.png",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Products", href: "/#products" },
      { label: "Contact", href: "/#contact" },
    ],
    about: {
      heading: "About M/s. Bangladesh Auto Rice Mill",
      body: "We process and distribute high-quality rice to meet the demands of our region. Founded by Md. Saiful Islam Bulbul, our state-of-the-art milling facilities ensure the best quality rice for every household.",
    },
    products: {
      heading: "Our Products",
      items: ["Premium Rice", "Parboiled Rice", "Aromatic Rice"],
    },
    contact: {
      heading: "Contact Us",
      email: "rice@fhsenterprise.com",
      phone: "+880 123456789",
      address: "Fulbariya, Mymensingh",
    },
  },
  bn: {
    name: "মেসার্স বাংলাদেশ অটো রাইস মিল",
    sector: "রাইস মিল",
    tagline: "মাঠ থেকে টেবিলে উন্নত মানের চাল সরবরাহ",
    heroImage: "/images/companies/agro-banner.png",
    nav: [
      { label: "হোম", href: "/" },
      { label: "সম্পর্কে", href: "/#about" },
      { label: "পণ্য", href: "/#products" },
      { label: "যোগাযোগ", href: "/#contact" },
    ],
    about: {
      heading: "মেসার্স বাংলাদেশ অটো রাইস মিল সম্পর্কে",
      body: "আমরা আমাদের অঞ্চলের চাহিদা মেটাতে উচ্চ-মানের চাল প্রক্রিয়াজাত এবং বিতরণ করি। মোঃ সাইফুল ইসলাম বুলবুল দ্বারা প্রতিষ্ঠিত, আমাদের অত্যাধুনিক মিলিং সুবিধা প্রতিটি পরিবারের জন্য সেরা মানের চাল নিশ্চিত করে।",
    },
    products: {
      heading: "আমাদের পণ্য",
      items: ["প্রিমিয়াম রাইস", "সিদ্ধ চাল", "সুগন্ধি চাল"],
    },
    contact: {
      heading: "যোগাযোগ করুন",
      email: "rice@fhsenterprise.com",
      phone: "+880 123456789",
      address: "ফুলবাড়িয়া, ময়মনসিংহ",
    },
  },
};
