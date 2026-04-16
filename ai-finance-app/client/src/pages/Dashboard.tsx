import type { Transaction } from "../types/transaction";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { deleteTransaction } from "../api/transactions";

type Props = {
  transactions: Transaction[];
  onRefresh: () => void;
};

export default function Dashboard({ transactions, onRefresh }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const totalIncome = transactions
    .filter((t) => t.type === 1)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const categoryTotals: Record<string, number> = {};
  const insights: string[] = [];

  transactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  if (balance < 0) {
    insights.push("You are spending more than you earn.");
  } else if (balance > 0) {
    insights.push("You are saving money this period.");
  }

  let topCategory = "";
  let topAmount = 0;

  Object.entries(categoryTotals).forEach(([category, total]) => {
    if (total > topAmount) {
      topCategory = category;
      topAmount = total;
    }
  });

  if (topCategory) {
    insights.push(`You spend most of your money on ${topCategory}.`);
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this transaction?")) return;

    try {
      await deleteTransaction(id);
      onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="lg:col-span-1 space-y-6">
              <section className="grid gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-5 rounded-2xl shadow-sm"
                >
                  <p className="text-gray-500 text-sm">Income</p>
                  <h3 className="text-2xl font-bold">
                    £{totalIncome.toFixed(2)}
                  </h3>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-5 rounded-2xl shadow-sm"
                >
                  <p className="text-gray-500 text-sm">Expenses</p>
                  <h3 className="text-2xl font-bold">
                    £{totalExpenses.toFixed(2)}
                  </h3>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-lime-400 p-5 rounded-2xl shadow-sm"
                >
                  <p className="text-black text-sm">Balance</p>
                  <h3 className="text-2xl font-bold">£{balance.toFixed(2)}</h3>
                </motion.div>
              </section>

              <section className="bg-white p-5 rounded-2xl shadow-sm">
                <h3 className="text-sm text-gray-500 mb-2">
                  Spending by Category
                </h3>
                <ul>
                  {Object.entries(categoryTotals).map(([category, total]) => (
                    <li key={category}>
                      {category}: £{total.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-black text-white p-6 rounded-2xl">
                <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
                {insights.length === 0 ? (
                  <p>No insights yet</p>
                ) : (
                  insights.map((i, idx) => <p key={idx}>💡 {i}</p>)
                )}
              </section>

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

                        <td className="p-4 font-medium">
                          £{t.amount.toFixed(2)}
                        </td>

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
                                onClick={() => handleDelete(t.id)}
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
