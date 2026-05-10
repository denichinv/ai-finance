import { AnimatePresence, motion } from "framer-motion";
import type { Transaction } from "../../types/transaction";
import { useState } from "react";

type Props = {
  transactions: Transaction[];
  onDelete: (id: string) => void;
};

export default function TransactionTable({ transactions, onDelete }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-surface dark:bg-gray-900 border border-border dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors">
      {/* HEADER */}
      <div className="p-5 border-b border-border dark:border-gray-800">
        <h2 className="text-xl font-semibold tracking-tight text-text dark:text-white">
          Transactions
        </h2>
      </div>

      <table className="w-full text-sm">
        {/* HEAD */}
        <thead className="bg-background dark:bg-gray-950">
          <tr>
            <th className="p-4 text-left text-muted dark:text-gray-400 font-medium">
              Category
            </th>
            <th className="p-4 text-left text-muted dark:text-gray-400 font-medium">
              Amount
            </th>
            <th className="p-4 text-left text-muted dark:text-gray-400 font-medium">
              Type
            </th>
            <th className="p-4 text-left text-muted dark:text-gray-400 font-medium">
              Date
            </th>
            <th className="p-4 text-left text-muted dark:text-gray-400 font-medium">
              Action
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {transactions.map((t) => (
            <motion.tr
              key={t.id}
              onHoverStart={() => setHoveredId(t.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="border-t border-border dark:border-gray-800 hover:bg-background dark:hover:bg-gray-800 transition-colors"
            >
              {/* CATEGORY */}
              <td className="p-4 text-text dark:text-white">{t.category}</td>

              {/* AMOUNT */}
              <td className="p-4 font-mono font-medium tracking-tight text-text dark:text-white">
                £{t.amount.toFixed(2)}
              </td>

              {/* TYPE */}
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    t.type === 1
                      ? "bg-primary/20 text-primary"
                      : "bg-danger/20 text-danger"
                  }`}
                >
                  {t.type === 0 ? "Expense" : "Income"}
                </span>
              </td>

              {/* DATE */}
              <td className="p-4 text-muted dark:text-gray-400">
                {new Date(t.date).toLocaleDateString()}
              </td>

              {/* ACTION */}
              <td className="p-4">
                <AnimatePresence>
                  {hoveredId === t.id && (
                    <motion.button
                      onClick={() => onDelete(t.id)}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-danger hover:text-danger-hover"
                    >
                      ✕
                    </motion.button>
                  )}
                </AnimatePresence>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
