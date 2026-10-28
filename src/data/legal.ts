import { ORGANIZATION } from "./organization";

// Privacy Policy and Terms of Use, per language.
//
// DRAFT: written from what this website actually does (what the contact form
// stores, which cookies and third parties are involved) — NOT reviewed by a
// lawyer. The business owner should read it, correct anything that is not true
// of how FHS Enterprise really operates (for example, how long messages are
// kept), and have it reviewed before relying on it. Bump LEGAL_UPDATED when it
// changes. The Bangla text is a translation and should get a native review.

export type LegalSection = { heading: string; paragraphs: string[] };
export type LegalDocument = {
  title: string;
  description: string;
  sections: LegalSection[];
};
export type LegalKey = "privacy" | "terms";
type Lang = "en" | "bn";

export const LEGAL_UPDATED = "2026-10-28";

const email = ORGANIZATION.email;

export const LEGAL: Record<LegalKey, Record<Lang, LegalDocument>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      description:
        "What information the FHS Enterprise website collects, why, and the choices you have.",
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            `This website is run by FHS Enterprise, ${ORGANIZATION.locality}, ${ORGANIZATION.region}, Bangladesh. You can reach us about anything in this policy at ${email}.`,
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "You can browse this website without giving us any personal information.",
            "If you send us a message through the contact form, we receive the details you type in: your name, email address, phone number (optional), the subject and your message. We also record the IP address and browser type your message was sent from, which we use only to detect spam and abuse.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use your message and contact details only to read and reply to your enquiry. We use the technical details (IP address, browser type) only to protect the website from misuse. We do not sell your information and we do not use it for advertising.",
          ],
        },
        {
          heading: "Where it is stored and who sees it",
          paragraphs: [
            "Messages are stored in the website's database and are also emailed to our team's mailbox, so they pass through our email provider. They are visible to the FHS Enterprise staff who handle enquiries.",
          ],
        },
        {
          heading: "Cookies and tracking",
          paragraphs: [
            "This website has no advertising or analytics trackers. It may store a small cookie in your browser that remembers the language you chose (Bangla or English). Staff who sign in to the administration area receive a separate sign-in cookie; visitors do not.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "Some pages embed videos from YouTube. When you open a video, YouTube (Google) may set its own cookies and receive information such as your IP address, under its own privacy policy. Pages that only show a video thumbnail load that image from YouTube's servers.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep messages for as long as needed to handle your enquiry and for our ordinary business records. You can ask us to delete your message at any time.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            `You can ask us to show you, correct or delete the personal information we hold about you by writing to ${email}. You can also clear or block cookies in your browser settings; the website will still work.`,
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If we change how the website handles personal information we will update this page and its date.",
          ],
        },
      ],
    },
    bn: {
      title: "গোপনীয়তা নীতি",
      description:
        "এফএইচএস এন্টারপ্রাইজের ওয়েবসাইট কী তথ্য সংগ্রহ করে, কেন করে এবং আপনার কী কী বিকল্প আছে।",
      sections: [
        {
          heading: "আমরা কারা",
          paragraphs: [
            `এই ওয়েবসাইটটি পরিচালনা করে এফএইচএস এন্টারপ্রাইজ, ${ORGANIZATION.locality}, ${ORGANIZATION.region}, বাংলাদেশ। এই নীতি সম্পর্কে যেকোনো প্রশ্নে আমাদের ইমেইল করুন: ${email}।`,
          ],
        },
        {
          heading: "আমরা কী সংগ্রহ করি",
          paragraphs: [
            "আমাদের কোনো ব্যক্তিগত তথ্য না দিয়েই আপনি এই ওয়েবসাইট ঘুরে দেখতে পারেন।",
            "যোগাযোগ ফর্মের মাধ্যমে বার্তা পাঠালে আপনার দেওয়া তথ্য আমরা পাই: আপনার নাম, ইমেইল ঠিকানা, ফোন নম্বর (ঐচ্ছিক), বিষয় ও বার্তা। এর সাথে বার্তাটি যে আইপি ঠিকানা ও ব্রাউজার থেকে পাঠানো হয়েছে তাও আমরা রেকর্ড করি, যা শুধু স্প্যাম ও অপব্যবহার শনাক্ত করতে ব্যবহৃত হয়।",
          ],
        },
        {
          heading: "আমরা কীভাবে ব্যবহার করি",
          paragraphs: [
            "আপনার বার্তা ও যোগাযোগের তথ্য আমরা শুধু আপনার জিজ্ঞাসা পড়তে ও উত্তর দিতে ব্যবহার করি। কারিগরি তথ্য (আইপি ঠিকানা, ব্রাউজারের ধরন) শুধু ওয়েবসাইটকে অপব্যবহার থেকে রক্ষা করতে ব্যবহৃত হয়। আমরা আপনার তথ্য বিক্রি করি না এবং বিজ্ঞাপনের জন্য ব্যবহার করি না।",
          ],
        },
        {
          heading: "কোথায় সংরক্ষিত হয় এবং কারা দেখতে পায়",
          paragraphs: [
            "বার্তাগুলো ওয়েবসাইটের ডেটাবেজে সংরক্ষিত হয় এবং আমাদের টিমের মেইলবক্সেও ইমেইল করা হয়, ফলে আমাদের ইমেইল সেবাদাতার মাধ্যমে যায়। যে কর্মীরা জিজ্ঞাসার উত্তর দেন, শুধু তাঁরাই এগুলো দেখতে পান।",
          ],
        },
        {
          heading: "কুকি ও ট্র্যাকিং",
          paragraphs: [
            "এই ওয়েবসাইটে কোনো বিজ্ঞাপন বা অ্যানালিটিক্স ট্র্যাকার নেই। আপনি কোন ভাষা (বাংলা বা ইংরেজি) বেছে নিয়েছেন তা মনে রাখতে ব্রাউজারে একটি ছোট কুকি সংরক্ষিত হতে পারে। প্রশাসন এলাকায় সাইন-ইন করা কর্মীরা আলাদা একটি সাইন-ইন কুকি পান; দর্শকরা পান না।",
          ],
        },
        {
          heading: "তৃতীয় পক্ষের সেবা",
          paragraphs: [
            "কিছু পেজে ইউটিউবের ভিডিও যুক্ত করা আছে। আপনি ভিডিও খুললে ইউটিউব (গুগল) নিজস্ব গোপনীয়তা নীতি অনুযায়ী নিজের কুকি সেট করতে এবং আপনার আইপি ঠিকানার মতো তথ্য পেতে পারে। যেসব পেজে শুধু ভিডিওর থাম্বনেইল দেখানো হয়, সেখানে ছবিটি ইউটিউবের সার্ভার থেকে লোড হয়।",
          ],
        },
        {
          heading: "কতদিন সংরক্ষণ করি",
          paragraphs: [
            "আপনার জিজ্ঞাসা সামলাতে এবং আমাদের সাধারণ ব্যবসায়িক রেকর্ডের জন্য যতদিন প্রয়োজন, ততদিন আমরা বার্তা সংরক্ষণ করি। আপনি যেকোনো সময় আপনার বার্তা মুছে ফেলার অনুরোধ করতে পারেন।",
          ],
        },
        {
          heading: "আপনার বিকল্পসমূহ",
          paragraphs: [
            `আমাদের কাছে আপনার যে ব্যক্তিগত তথ্য আছে তা দেখতে, সংশোধন করতে বা মুছে ফেলতে ${email} ঠিকানায় লিখুন। ব্রাউজারের সেটিংসে কুকি মুছে ফেলতে বা বন্ধ করতেও পারেন; ওয়েবসাইট তবুও কাজ করবে।`,
          ],
        },
        {
          heading: "এই নীতির পরিবর্তন",
          paragraphs: [
            "ওয়েবসাইট ব্যক্তিগত তথ্য কীভাবে সামলায় তাতে পরিবর্তন এলে আমরা এই পেজ ও এর তারিখ হালনাগাদ করব।",
          ],
        },
      ],
    },
  },

  terms: {
    en: {
      title: "Terms of Use",
      description: "The terms for using the FHS Enterprise website.",
      sections: [
        {
          heading: "Using this website",
          paragraphs: [
            "By using this website you agree to these terms. If you do not agree, please do not use it. You agree not to misuse the website, for example by attempting to disrupt it, gain unauthorised access to it, or send spam through its contact form.",
          ],
        },
        {
          heading: "Information on the website",
          paragraphs: [
            "The website is provided for general information about FHS Enterprise and its businesses. We try to keep it accurate and up to date, but products, services, prices and availability can change, and we do not guarantee that everything on the website is complete or current. Please contact the relevant business to confirm details before you rely on them.",
          ],
        },
        {
          heading: "Our content",
          paragraphs: [
            "The text, logos, photographs and videos on this website belong to FHS Enterprise or are used with permission. You may view and share links to the pages, but you may not copy or reuse our content for commercial purposes without our written permission.",
          ],
        },
        {
          heading: "Links to other websites",
          paragraphs: [
            "Some of our businesses, such as Vehicle Solutions and Daily Bazar, have their own websites, and we link to other sites such as YouTube. We are not responsible for the content or practices of websites we do not operate.",
          ],
        },
        {
          heading: "Limits of our responsibility",
          paragraphs: [
            "The website is provided “as is”. To the extent the law allows, FHS Enterprise is not liable for any loss arising from your use of, or inability to use, the website or from reliance on information on it.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of Bangladesh, and any dispute about them will be subject to the courts of Bangladesh.",
          ],
        },
        {
          heading: "Changes and contact",
          paragraphs: [
            `We may update these terms from time to time; the date at the top shows when they last changed. Questions about them can be sent to ${email}.`,
          ],
        },
      ],
    },
    bn: {
      title: "ব্যবহারের শর্তাবলি",
      description: "এফএইচএস এন্টারপ্রাইজের ওয়েবসাইট ব্যবহারের শর্তাবলি।",
      sections: [
        {
          heading: "ওয়েবসাইট ব্যবহার",
          paragraphs: [
            "এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলিতে সম্মত হচ্ছেন। সম্মত না হলে অনুগ্রহ করে ব্যবহার করবেন না। ওয়েবসাইটের অপব্যবহার করবেন না; যেমন এটিকে বিঘ্নিত করার চেষ্টা, অনুমতি ছাড়া প্রবেশের চেষ্টা বা যোগাযোগ ফর্মের মাধ্যমে স্প্যাম পাঠানো।",
          ],
        },
        {
          heading: "ওয়েবসাইটের তথ্য",
          paragraphs: [
            "ওয়েবসাইটটি এফএইচএস এন্টারপ্রাইজ ও এর প্রতিষ্ঠানগুলো সম্পর্কে সাধারণ তথ্য জানানোর জন্য। আমরা তথ্য সঠিক ও হালনাগাদ রাখার চেষ্টা করি, কিন্তু পণ্য, সেবা, মূল্য ও প্রাপ্যতা বদলাতে পারে এবং ওয়েবসাইটের সবকিছু সম্পূর্ণ বা সর্বশেষ বলে নিশ্চয়তা দিই না। কোনো তথ্যের ওপর নির্ভর করার আগে সংশ্লিষ্ট প্রতিষ্ঠানের সাথে যোগাযোগ করে নিশ্চিত হয়ে নিন।",
          ],
        },
        {
          heading: "আমাদের কনটেন্ট",
          paragraphs: [
            "এই ওয়েবসাইটের লেখা, লোগো, ছবি ও ভিডিও এফএইচএস এন্টারপ্রাইজের অথবা অনুমতিক্রমে ব্যবহৃত। আপনি পেজগুলো দেখতে এবং এগুলোর লিংক শেয়ার করতে পারেন, কিন্তু আমাদের লিখিত অনুমতি ছাড়া বাণিজ্যিক উদ্দেশ্যে আমাদের কনটেন্ট কপি বা পুনর্ব্যবহার করতে পারবেন না।",
          ],
        },
        {
          heading: "অন্য ওয়েবসাইটের লিংক",
          paragraphs: [
            "ভেহিকেল সলিউশনস ও ডেইলি বাজারের মতো আমাদের কিছু প্রতিষ্ঠানের নিজস্ব ওয়েবসাইট আছে, এবং আমরা ইউটিউবের মতো অন্যান্য সাইটের লিংক দিই। যেসব ওয়েবসাইট আমরা পরিচালনা করি না, সেগুলোর কনটেন্ট বা কার্যপদ্ধতির দায় আমাদের নয়।",
          ],
        },
        {
          heading: "আমাদের দায়ের সীমা",
          paragraphs: [
            "ওয়েবসাইটটি “যেমন আছে” ভিত্তিতে দেওয়া হয়েছে। আইন যতটুকু অনুমতি দেয়, ওয়েবসাইট ব্যবহার বা ব্যবহার করতে না পারা, কিংবা এর তথ্যের ওপর নির্ভর করার ফলে কোনো ক্ষতি হলে এফএইচএস এন্টারপ্রাইজ দায়ী থাকবে না।",
          ],
        },
        {
          heading: "প্রযোজ্য আইন",
          paragraphs: [
            "এই শর্তাবলি বাংলাদেশের আইন দ্বারা পরিচালিত হবে এবং এ সংক্রান্ত যেকোনো বিরোধ বাংলাদেশের আদালতের এখতিয়ারভুক্ত হবে।",
          ],
        },
        {
          heading: "পরিবর্তন ও যোগাযোগ",
          paragraphs: [
            `আমরা সময়ে সময়ে এই শর্তাবলি হালনাগাদ করতে পারি; উপরের তারিখ থেকে বোঝা যাবে সর্বশেষ কবে পরিবর্তন হয়েছে। এ বিষয়ে প্রশ্ন থাকলে ${email} ঠিকানায় পাঠান।`,
          ],
        },
      ],
    },
  },
};
