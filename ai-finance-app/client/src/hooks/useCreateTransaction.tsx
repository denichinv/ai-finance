import { useState } from "react";
import { createTransaction } from "../api/transactions";
import type { CreateTransactionRequest } from "../types/transaction";

export function useCreateTransaction(onSuccess?: () => void) {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (
    data: CreateTransactionRequest,
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      await createTransaction(data);
      onSuccess?.();

      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);

      return true;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to add the transaction. Please try again.",
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleCreate,
    loading,
    showToast,
    error,
  };
}
