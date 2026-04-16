import type { Transaction } from "../types/transaction";
import { motion } from "framer-motion";

type Props = {
  transactions: Transaction[];
};

export default function Dashboard({ transactions }: Props) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="lg:col-span-1 space-y-6">
              {/* SUMMARY */}
              <section className="grid grid-cols-1 gap-4">
                {/* Income */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-500 text-sm">Income</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    £{totalIncome.toFixed(2)}
                  </h3>
                </motion.div>

                {/* Expenses */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-500 text-sm">Expenses</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    £{totalExpenses.toFixed(2)}
                  </h3>
                </motion.div>

                {/* Balance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-lime-400 p-5 rounded-2xl shadow-sm"
                >
                  <p className="text-black text-sm">Balance</p>
                  <h3 className="text-2xl font-bold text-black">
                    £{balance.toFixed(2)}
                  </h3>
                </motion.div>
              </section>

              {/* CATEGORY */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-5 rounded-2xl shadow-sm"
              >
                <h3 className="text-sm text-gray-500 mb-2">
                  Spending by Category
                </h3>

                <ul className="space-y-1">
                  {Object.entries(categoryTotals).map(([category, total]) => (
                    <li key={category} className="text-gray-700">
                      {category}: £{total.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI INSIGHTS */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-black text-white p-6 rounded-2xl"
              >
                <h2 className="text-lg font-semibold mb-4">AI Insights</h2>

                {insights.length === 0 ? (
                  <p className="text-gray-400">No insights yet</p>
                ) : (
                  insights.map((insight, index) => (
                    <p key={index} className="text-gray-300 mb-2">
                      💡 {insight}
                    </p>
                  ))
                )}
              </motion.section>

              {/* TRANSACTIONS */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Transactions
                  </h2>
                </div>

                {transactions.length === 0 ? (
                  <p className="p-5 text-gray-500">No transactions yet</p>
                ) : (
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                      <tr>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Amount</th>
                        <th className="p-4 text-left">Type</th>
                        <th className="p-4 text-left">Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      {transactions.map((t, index) => (
                        <tr
                          key={index}
                          className="border-t hover:bg-gray-50 transition"
                        >
                          <td className="p-4 text-gray-800">{t.category}</td>

                          <td className="p-4 font-medium text-gray-900">
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

                          <td className="p-4 text-gray-500">{t.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
