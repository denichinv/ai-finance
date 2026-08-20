import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../components/ui/Toast";
import TransactionForm from "../components/transactions/TransactionForm";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { TransactionType } from "../types/transaction";
import { getTodayDateKey } from "../utils/date";

type TransactionFormErrors = {
  amount?: string;
  category?: string;
  date?: string;
};

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<TransactionFormErrors>({});

  const { handleCreate, loading, showToast } = useCreateTransaction();
  const today = getTodayDateKey();

  const handleAmountChange = (nextAmount: string) => {
    setAmount(nextAmount);
    setErrors((currentErrors) => ({ ...currentErrors, amount: undefined }));
  };

  const handleCategoryChange = (nextCategory: string) => {
    setCategory(nextCategory);
    setErrors((currentErrors) => ({ ...currentErrors, category: undefined }));
  };

  const handleDateChange = (nextDate: string) => {
    setDate(nextDate);
    setErrors((currentErrors) => ({ ...currentErrors, date: undefined }));
  };
  const validateForm = (): TransactionFormErrors => {
    const nextErrors: TransactionFormErrors = {};

    if (!amount || Number(amount) <= 0) {
      nextErrors.amount = "Amount must be greater than £0.";
    }

    if (!category.trim()) {
      nextErrors.category = "Please enter a category.";
    }

    if (!date) {
      nextErrors.date = "Please choose a date.";
    } else if (date > today) {
      nextErrors.date = "Transactions cannot be dated in the future.";
    }

    return nextErrors;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateForm();

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    handleCreate({
      title: category,
      amount: Number(amount),
      category,
      type:
        type === "expense" ? TransactionType.Expense : TransactionType.Income,
      date: new Date(date).toISOString(),
    });

    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <Toast message="Transaction added successfully!" isVisible={showToast} />

      <TransactionForm
        amount={amount}
        onAmountChange={handleAmountChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        type={type}
        setType={setType}
        date={date}
        maxDate={today}
        dateError={errors.date}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
        loading={loading}
        amountError={errors.amount}
        categoryError={errors.category}
      />
    </motion.div>
  );
}
