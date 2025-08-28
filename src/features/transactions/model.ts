// Simple transaction model
export type Transaction = {
  id: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  date: string;
  merchantName: string;
  categoryId: string;
  mcc: string; // 4-digit code like "5411", "0742"
  accountId: string;
  description?: string;
};

export type TransactionType = "debit" | "credit";

export type TransactionStatus = "pending" | "posted";
