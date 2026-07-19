import { useState } from "react";
import { createTransaction } from "../api/transactions";
import type { CreateTransactionRequest } from "../types/transaction";

export function useCreateTransaction(onSuccess?: () => void) {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCreate = async (data: CreateTransactionRequest) => {
    try {
      setLoading(true);

      await createTransaction(data);
      onSuccess?.();

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
