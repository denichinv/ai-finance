import { useState } from "react";
import { createTransaction } from "../api/transactions";

type TransactionInput = {
  title: string;
  amount: number;
  category: string;
  type: number;
  date: string;
};

export function useCreateTransaction(onSuccess: () => void) {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCreate = async (data: TransactionInput) => {
    try {
      setLoading(true);

      await createTransaction(data);
      onSuccess();

      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleCreate,
    loading,
    showToast,
  };
}
