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
        className="bg-surface p-5 rounded-2xl shadow-sm"
      >
        <p className="text-muted text-sm">Income</p>
        <h3 className="text-2xl font-bold text-text">£{income.toFixed(2)}</h3>
      </motion.div>

      {/* Expenses */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-surface p-5 rounded-2xl shadow-sm"
      >
        <p className="text-muted text-sm">Expenses</p>
        <h3 className="text-2xl font-bold text-text">£{expenses.toFixed(2)}</h3>
      </motion.div>

      {/* Balance */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-primary p-5 rounded-2xl shadow-sm"
      >
        <p className="text-black text-sm">Balance</p>
        <h3 className="text-2xl font-bold text-black">£{balance.toFixed(2)}</h3>
      </motion.div>
    </section>
  );
}
