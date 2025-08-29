export interface PaymentService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface PaymentMethod {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const samplePaymentServices: PaymentService[] = [
  {
    id: "1",
    title: "Credit Cards",
    description: "Apply for new cards and manage existing ones",
    icon: "CR",
    category: "Banking Services",
  },
  {
    id: "2",
    title: "Loans",
    description: "Personal, auto, and home loan options",
    icon: "LN",
    category: "Banking Services",
  },
  {
    id: "3",
    title: "Investments",
    description: "Grow your wealth with smart investments",
    icon: "IN",
    category: "Banking Services",
  },
  {
    id: "4",
    title: "Insurance",
    description: "Protect what matters most",
    icon: "IS",
    category: "Banking Services",
  },
];

export const samplePaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    title: "Contact Us",
    description: "Get in touch with our support team",
    icon: "CT",
    category: "Help & Support",
  },
  {
    id: "2",
    title: "FAQ",
    description: "Find answers to common questions",
    icon: "FA",
    category: "Help & Support",
  },
];
