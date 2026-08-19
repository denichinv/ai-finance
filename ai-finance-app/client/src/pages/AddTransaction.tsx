import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../components/ui/Toast";
import TransactionForm from "../components/transactions/TransactionForm";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { TransactionType } from "../types/transaction";
import { getTodayDateKey } from "../utils/date";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState<string | null>(null);

  const { handleCreate, loading, showToast } = useCreateTransaction();
  const today = getTodayDateKey();

  const handleDateChange = (nextDate: string) => {
    setDate(nextDate);
    setDateError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) return;
    if (!category) return;
    if (!date) return;
    if (date > today) {
      setDateError("Transactions cannot be dated in the future.");
      return;
    }

    handleCreate({
      title: category,
      amount: Number(amount),
      category,
      type:
        type === "expense"
          ? TransactionType.Expense
          : TransactionType.Income,
      date: new Date(date).toISOString(),
    });

    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
    setDateError(null);
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
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        date={date}
        maxDate={today}
        dateError={dateError}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </motion.div>
  );
}
