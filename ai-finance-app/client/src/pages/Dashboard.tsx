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
        <section>
          <h2>Insights</h2>

          {insights.length === 0 ? (
            <p>No insights yet</p>
          ) : (
            insights.map((insight, index) => <p key={index}>💡 {insight}</p>)
          )}

          <h3>Spending by Category</h3>
          <ul>
            {Object.entries(categoryTotals).map(([category, total]) => (
              <li key={category}>
                {category}: £{total.toFixed(2)}
              </li>
            ))}
          </ul>
        </section>

        {/* 📊 TRANSACTIONS */}
        <section>
          <h2>Transactions</h2>

          {transactions.length === 0 ? (
            <p>No transactions yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t, index) => (
                  <tr key={index}>
                    <td>{t.category}</td>
                    <td>£{t.amount.toFixed(2)}</td>
                    <td>{t.type}</td>
                    <td>{t.date}</td>
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
