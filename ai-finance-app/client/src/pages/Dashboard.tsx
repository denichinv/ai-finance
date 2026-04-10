import type { Transaction } from "../types/transaction";

type Props = {
  transactions: Transaction[];
};

export default function Dashboard({ transactions }: Props) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const categoryTotals: Record<string, number> = {};
  const insights: string[] = [];

  transactions.forEach((t) => {
    if (categoryTotals[t.category]) {
      categoryTotals[t.category] += t.amount;
    } else {
      categoryTotals[t.category] = t.amount;
    }
  });

  // AI-like insights
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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 ">
          Dashboard
        </h1>

        {/* 🔝 SUMMARY */}
        <section className="grid gird-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Income</p>
            <h3 className="text-2xl font-bold text-gray-900">
              £{totalIncome.toFixed(2)}
            </h3>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Expenses</p>
            <h3 className="text-2xl font-bold text-gray-900">
              £{totalExpenses.toFixed(2)}
            </h3>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Balance</p>
            <h3 className="text-2xl font-bold text-gray-900">
              £{balance.toFixed(2)}
            </h3>
          </div>
        </section>

        {/* 🧠 INSIGHTS */}
        <section className="bg-black text-white p-6 rounded-2xl mb-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-4 ">AI Insights</h2>

          {insights.length === 0 ? (
            <p className="text-gray-400 ">No insights yet</p>
          ) : (
            insights.map((insight, index) => (
              <p key={index} className="text-gray-300 mb-2">
                💡 {insight}
              </p>
            ))
          )}

          <div className="mt-4">
            <h3 className="text-sm text-gray-400 mb-2 ">
              Spending by Category
            </h3>
            <ul className="space-y-1">
              {Object.entries(categoryTotals).map(([category, total]) => (
                <li key={category} className="text-gray-300">
                  {category}: £{total.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 📊 TRANSACTIONS */}
        <section bg-white rounded-2xl shadow-sm overflow-hidden>
          <div className="p-5 border-b border-gray-100 ">
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
                  <th className="p-4 text-left font-medium">Category</th>
                  <th className="p-4 text-left font-medium">Amount</th>
                  <th className="p-4 text-left font-medium">Type</th>
                  <th className="p-4 text-left font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t, index) => (
                  <tr
                    key={index}
                    className="border-t hoover:bg-gray-50 transition"
                  >
                    <td className="p-4 text-gray-800">{t.category}</td>
                    <td className="p-4 font-medium text-gray-900">
                      £{t.amount.toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          t.type === "income"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
}
