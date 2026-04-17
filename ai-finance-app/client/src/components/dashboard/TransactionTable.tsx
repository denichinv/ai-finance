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
    <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="text-lg font-semibold">Transactions</h2>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <motion.tr
              key={t.id}
              onHoverStart={() => setHoveredId(t.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{t.category}</td>

              <td className="p-4 font-medium">£{t.amount.toFixed(2)}</td>

              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    t.type === 1
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {t.type === 0 ? "Expense" : "Income"}
                </span>
              </td>

              <td className="p-4 text-gray-500">
                {new Date(t.date).toLocaleDateString()}
              </td>

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
                      className="text-red-500 hover:text-red-700"
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
