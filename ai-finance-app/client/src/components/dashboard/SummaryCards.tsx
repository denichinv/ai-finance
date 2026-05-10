import { motion } from "framer-motion";

type Props = {
  income: number;
  expenses: number;
  balance: number;
};

export default function SummaryCards({ income, expenses, balance }: Props) {
  return (
    <section className="grid gap-4">
      {/* Income */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-surface dark:bg-gray-900 border border-border dark:border-gray-800 p-5 rounded-2xl shadow-sm transition-colors"
      >
        <p className="text-muted dark:text-gray-400 text-sm font-medium">
          Income
        </p>

        <h3 className="text-2xl font-bold font-mono tracking-tight text-text dark:text-white">
          £{income.toFixed(2)}
        </h3>
      </motion.div>

      {/* Expenses */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-surface dark:bg-gray-900 border border-border dark:border-gray-800 p-5 rounded-2xl shadow-sm transition-colors"
      >
        <p className="text-muted dark:text-gray-400 text-sm font-medium">
          Expenses
        </p>

        <h3 className="text-2xl font-bold font-mono tracking-tight text-text dark:text-white">
          £{expenses.toFixed(2)}
        </h3>
      </motion.div>

      {/* Balance */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-primary hover:bg-primary-hover p-5 rounded-2xl shadow-sm transition-colors"
      >
        <p className="text-black text-sm font-medium">Balance</p>

        <h3 className="text-3xl font-bold font-mono tracking-[-0.03em] text-black">
          £{balance.toFixed(2)}
        </h3>
      </motion.div>
    </section>
  );
}
