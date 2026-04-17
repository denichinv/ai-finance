import type { Transaction } from "../types/transaction";
import { motion } from "framer-motion";
import { deleteTransaction } from "../api/transactions";
import SummaryCards from "../components/dashboard/SummaryCards";
import SpendingChart from "../components/dashboard/SpendingChart";
import InsightsPanel from "../components/dashboard/InsightsPanel";
import TransactionTable from "../components/dashboard/TransactionTable";

type Props = {
  transactions: Transaction[];
  onRefresh: () => void;
};
type ChartData = {
  name: string;
  value: number;
};

export default function Dashboard({ transactions, onRefresh }: Props) {
  const totalIncome = transactions
    .filter((t) => t.type === 1)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const categoryTotals: Record<string, number> = {};

  transactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });
  const chartData: ChartData[] = Object.entries(categoryTotals).map(
    ([category, total]: [string, number]) => ({
      name: category,
      value: total,
    }),
  );

  let topCategory = "";
  let topAmount = 0;

  Object.entries(categoryTotals).forEach(([category, total]) => {
    if (total > topAmount) {
      topCategory = category;
      topAmount = total;
    }
  });

  const insights: string[] = [];
  if (balance < 0) {
    insights.push("You are spending more than you earn.");
  } else if (balance > 0) {
    insights.push("You are saving money this period.");
  }

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
              <SummaryCards
                income={totalIncome}
                expenses={totalExpenses}
                balance={balance}
              />
              <SpendingChart data={chartData} />
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 space-y-6">
              <InsightsPanel insights={insights} />

              <TransactionTable
                transactions={transactions}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
