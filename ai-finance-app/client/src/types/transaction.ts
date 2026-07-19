export type TransactionType = 0 | 1;

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
