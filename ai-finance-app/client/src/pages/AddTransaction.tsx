import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../components/ui/Toast";
import TransactionForm from "../components/transactions/TransactionForm";
import { useCreateTransaction } from "../hooks/useCreateTransaction";

type Props = {
  onSuccess: () => void;
};

export default function AddTransaction({ onSuccess }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");

  const { handleCreate, loading, showToast } = useCreateTransaction(onSuccess);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) return;
    if (!category) return;
    if (!date) return;

    handleCreate({
      title: category,
      amount: Number(amount),
      category,
      type: type === "expense" ? 0 : 1,
      date: new Date(date).toISOString(),
    });

    // reset form
    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Toast message="Transaction added successfully!" isVisible={showToast} />

      <TransactionForm
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        date={date}
        setDate={setDate}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </motion.div>
  );
}
