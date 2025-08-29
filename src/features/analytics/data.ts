import { Insight, SpendingCategory } from "./model";

export const sampleSpendingCategories: SpendingCategory[] = [
  { category: "Food & Dining", amount: 245.67, percentage: 35 },
  { category: "Transportation", amount: 189.23, percentage: 27 },
  { category: "Shopping", amount: 156.89, percentage: 22 },
  { category: "Entertainment", amount: 89.45, percentage: 13 },
  { category: "Other", amount: 23.76, percentage: 3 },
];

export const sampleInsights: Insight[] = [
  {
    title: "Great job on savings!",
    description:
      "You're saving 78% of your income this month, which is above the recommended 20%.",
    type: "success",
  },
  {
    title: "Food spending increased ",
    description:
      "Your food spending is 15% higher than last month. Consider setting a budget.",
    type: "warn",
  },
];
