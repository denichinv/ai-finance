import { useMemo } from "react";
import { motion } from "framer-motion";
import { deleteTransaction } from "../api/transactions";
import SummaryCards from "../components/dashboard/SummaryCards";
import SpendingChart from "../components/dashboard/SpendingChart";
import InsightsPanel from "../components/dashboard/InsightsPanel";
import TransactionTable from "../components/dashboard/TransactionTable";
import { useTransactions } from "../hooks/useTransactions";
import { WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import EmptyState from "../components/ui/EmptyState";

export default function Dashboard() {
  const { transactions, loading, error, refetch } = useTransactions();

  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 1)
      .reduce((acc, t) => acc + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.type === 0)
      .reduce((acc, t) => acc + t.amount, 0);

    return {
      totalIncome: income,
      totalExpenses: expenses,
      balance: income - expenses,
    };
  }, [transactions]);

  const categoryTotals = useMemo(() => {
    const totals: Record<string, number> = {};

    transactions.forEach((t) => {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    });

    return totals;
  }, [transactions]);

  const chartData = useMemo(() => {
    return Object.entries(categoryTotals).map(([category, total]) => ({
      name: category,
      value: total,
    }));
  }, [categoryTotals]);

  const topCategory = useMemo(() => {
    let top = "";
    let max = 0;

    Object.entries(categoryTotals).forEach(([category, total]) => {
      if (total > max) {
        top = category;
        max = total;
      }
    });

    return top;
  }, [categoryTotals]);

  const insights: string[] = [];

  if (balance < 0) {
    insights.push("You are spending more than you earn.");
  } else if (balance > 0) {
    insights.push("You are saving money this period.");
  }

  if (topCategory) {
    insights.push(`You spend most of your money on ${topCategory}.`);
  }

  if (loading) {
    return <p className="p-6 text-gray-900 dark:text-white">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600 dark:text-red-400">{error}</p>;
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this transaction?")) return;

    try {
      await deleteTransaction(id);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  if (transactions.length === 0) {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto p-6"
        initial={{ opacity: 0 }}
      >
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-text dark:text-white">
          Dashboard
        </h1>

        <EmptyState
          action={
            <Link
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              to="/add"
            >
              Add your first transaction
            </Link>
          }
          description="Start by adding a transaction to see your spending, income, and insights here."
          icon={<WalletCards size={24} />}
          title="Your financial workspace is ready"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-6"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-semibold tracking-tight text-text dark:text-white mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <SummaryCards
            income={totalIncome}
            expenses={totalExpenses}
            balance={balance}
          />

          <SpendingChart data={chartData} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <InsightsPanel insights={insights} />

          <TransactionTable
            transactions={transactions}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </motion.div>
  );
}
