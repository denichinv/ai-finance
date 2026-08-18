export const TransactionType = {
  Income: 0,
  Expense: 1,
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export type CreateTransactionRequest = {
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
};

export type Transaction = CreateTransactionRequest & {
  id: string;
  createdAt: string;
};
