export type Transaction = {
  amount: number;
  category: string;
  type: "expense" | "income";
  date: string;
};
