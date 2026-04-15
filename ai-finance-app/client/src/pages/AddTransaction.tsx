import { useState } from "react";
import type { Transaction } from "../types/transaction";
import { motion } from "framer-motion";

type Props = {
  onAddTransaction: (Transaction: Transaction) => void;
};

export default function AddTransaction({ onAddTransaction }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      amount: Number(amount),
      category,
      type,
      date,
    };
    if (!amount || Number(amount) <= 0) return;
    if (!category) return;
    if (!date) return;
    alert("Transaction added");
    onAddTransaction(transaction);
    // from here we will send data to the backend API to save the transaction
    console.log(transaction);
    // Reset form fields after the submission
    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-xl mx-auto">
        {/* Card */}
        <div className="bg-white p-6 rounded-xl  shadow-sm">
          {/*title and description */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Add Transaction
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Use this form to add a new transaction to your financial records.
            You can specify the amount, date, category, and description of the
            transaction.
          </p>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/*Amount*/}

            <label className="block text-sm text-gray-600 mb-1"> Amount:</label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3  py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {/*Category*/}
            <label className="block text-sm text-gray-600 mb-1">
              {" "}
              Category:
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3  py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {/*Type*/}
            <label className="block text-sm text-gray-600 mb-1"> Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
              className="w-full border border-gray-200 rounded-lg px-3  py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            {/*Date*/}
            <label className="block text-sm text-gray-600 mb-1"> Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3  py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            {/* Button*/}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-lime-400 text-black py-2 rounded-lg"
            >
              Add Transaction
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
