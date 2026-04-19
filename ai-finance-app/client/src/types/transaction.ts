type TransactionType = 0 | 1;

export type Transaction = {
  id: string;
  amount: number;
  category: string;
  type: TransactionType;
  date: string;
};
