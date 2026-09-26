import type { CompanySiteContent } from "@/types/company";

export const vehicleSolutionsContent: Record<"en" | "bn", CompanySiteContent> = {
  en: {
    name: "Vehicle Solutions",
    sector: "Automotive Services",
    tagline: "Your trusted automotive partner.",
    heroImage: "/images/companies/mr-lube-banner.svg",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#products" },
      { label: "Contact", href: "/#contact" },
    ],
    about: {
      heading: "About Vehicle Solutions",
      body: "We provide comprehensive vehicle parts, repairing, tyre, lubricant, and accessories solutions. Our expert technicians are dedicated to keeping you safely on the road.",
    },
    products: {
      heading: "Our Services & Products",
      items: ["Vehicle Parts", "Repairing", "Tyres", "Lubricants", "Accessories"],
    },
    contact: {
      heading: "Contact Us",
      email: "vehicles@fhsenterprise.com",
      phone: "+880 123456789",
      address: "Fulbariya, Mymensingh",
    },
  },
  bn: {
    name: "ভেহিকেল সলিউশনস",
    sector: "Automotive Services",
    tagline: "আপনার বিশ্বস্ত অটোমোটিভ পার্টনার",
    heroImage: "/images/companies/mr-lube-banner.svg",
    nav: [
      { label: "হোম", href: "/" },
      { label: "সম্পর্কে", href: "/#about" },
      { label: "সেবা", href: "/#products" },
      { label: "যোগাযোগ", href: "/#contact" },
    ],
    about: {
      heading: "ভেহিকেল সলিউশনস সম্পর্কে",
      body: "আমরা গাড়ির যন্ত্রাংশ, মেরামত, টায়ার, লুব্রিকেন্ট এবং আনুষাঙ্গিকগুলির ব্যাপক সমাধান প্রদান করি। আমাদের বিশেষজ্ঞ টেকনিশিয়ানরা আপনাকে নিরাপদে রাস্তায় রাখতে প্রতিশ্রুতিবদ্ধ।",
    },
    products: {
      heading: "আমাদের সেবাসমূহ",
      items: ["গাড়ির যন্ত্রাংশ", "মেরামত", "টায়ার", "লুব্রিকেন্ট", "আনুষাঙ্গিক"],
    },
    contact: {
      heading: "যোগাযোগ করুন",
      email: "vehicles@fhsenterprise.com",
      phone: "+880 123456789",
      address: "ফুলবাড়িয়া, ময়মনসিংহ",
    },
  },
};
