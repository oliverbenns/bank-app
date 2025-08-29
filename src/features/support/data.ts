export interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const sampleSupportOptions: SupportOption[] = [
  {
    id: "1",
    title: "Live Chat",
    description: "Chat with our support team 24/7",
    icon: "CH",
    category: "Get Help",
  },
  {
    id: "2",
    title: "Email Support",
    description: "Send us a detailed message",
    icon: "EM",
    category: "Get Help",
  },
  {
    id: "3",
    title: "Call Us",
    description: "1-800-BANK-APP (Available 8AM-8PM)",
    icon: "CL",
    category: "Get Help",
  },
  {
    id: "4",
    title: "FAQ",
    description: "Find answers to common questions",
    icon: "FA",
    category: "Self-Service",
  },
  {
    id: "5",
    title: "App Tutorial",
    description: "Learn how to use the app",
    icon: "AP",
    category: "Self-Service",
  },
];
