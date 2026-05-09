import { motion } from "framer-motion";
import Button from "../ui/Button";

type Props = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  type: "income" | "expense";
  setType: React.Dispatch<React.SetStateAction<"income" | "expense">>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
};

export default function TransactionForm({
  amount,
  setAmount,
  category,
  setCategory,
  type,
  setType,
  date,
  setDate,
  onSubmit,
  loading,
}: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm transition-colors"
      >
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Add Transaction
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Add a new income or expense to track your finances.
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          {/* AMOUNT */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 100"
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Category
            </label>

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Food, Salary"
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors"
            />
          </div>

          {/* TYPE */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-colors"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Adding..." : "Add Transaction"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
