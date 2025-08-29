export type SpendingCategory = {
  category: string;
  amount: number;
  percentage: number;
};

export type InsightType = "success" | "warn" | "idea";

export type Insight = {
  type: InsightType;
  title: string;
  description: string;
};
