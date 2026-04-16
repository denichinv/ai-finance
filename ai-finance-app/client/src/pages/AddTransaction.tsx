import { useState } from "react";
import type { Transaction } from "../types/transaction";
import { motion, AnimatePresence } from "framer-motion";
import { createTransaction } from "../api/transactions";

type Props = {
  onSuccess: () => void;
};

export default function AddTransaction({ onSuccess }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) return;
    if (!category) return;
    if (!date) return;

    const transaction = {
      title: category,
      amount: Number(amount),
      category,
      type: type === "expense" ? 0 : 1,
      date: new Date(date).toISOString(),
    };

    // save to backend
    await createTransaction(transaction);
    onSuccess();

    // show toast
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);

    // reset form
    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🔔 TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-md z-50 flex items-center gap-2"
          >
            ✅ Transaction added successfully
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          {/* TITLE */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Add Transaction
          </h1>

          <p className="text-gray-500 text-sm mb-6">
            Add a new income or expense to track your finances.
          </p>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* AMOUNT */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 100"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Food, Salary"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* TYPE */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Type</label>
              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as "income" | "expense")
                }
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full bg-lime-400 text-black py-2 rounded-lg font-medium transition"
            >
              Add Transaction
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
