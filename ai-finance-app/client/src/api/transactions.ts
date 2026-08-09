import type {
  CreateTransactionRequest,
  Transaction,
} from "../types/transaction";

import { authenticatedFetch } from "./apiClient";

const TRANSACTIONS_PATH = "/Transactions";

// GET all transactions
export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await authenticatedFetch(TRANSACTIONS_PATH);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return response.json();
};

// CREATE transaction
export const createTransaction = async (
  data: CreateTransactionRequest,
): Promise<Transaction> => {
  const response = await authenticatedFetch(TRANSACTIONS_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create transaction");
  }

  return response.json();
};

// DELETE transaction
export const deleteTransaction = async (id: string) => {
  const response = await authenticatedFetch(`${TRANSACTIONS_PATH}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete transaction");
  }
};
