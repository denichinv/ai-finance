import { motion } from "framer-motion";
import { ArrowUpRight, MoreHorizontal, TrendingUp } from "lucide-react";

const spendingBars = [42, 68, 54, 86, 62, 94, 72];

export default function DashboardPreview() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto mt-14 w-full max-w-5xl"
      initial={{ opacity: 0, y: 28 }}
      transition={{ delay: 0.2, duration: 0.55 }}
    >
      <div className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-r from-primary/30 via-transparent to-sky-400/25 blur-xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Updated just now
          </div>
        </div>

        <div className="grid gap-3 p-2 sm:grid-cols-[1.6fr_1fr]">
          <section className="rounded-xl border border-white/10 bg-slate-900/85 p-4 text-left">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Total balance</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  £2,480.50
                </p>
              </div>
              <span className="rounded-lg bg-primary/15 p-2 text-primary">
                <TrendingUp size={18} />
              </span>
            </div>

            <div className="mt-6 flex h-28 items-end gap-2">
              {spendingBars.map((height, index) => (
                <motion.div
                  key={height}
                  animate={{ height: `${height}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/35 to-primary"
                  initial={{ height: 0 }}
                  transition={{ delay: 0.35 + index * 0.06, duration: 0.45 }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[10px] font-medium uppercase tracking-wider text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-slate-900/85 p-4 text-left">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-400">This month</p>
              <MoreHorizontal size={17} className="text-slate-500" />
            </div>

            <div className="mt-5 space-y-4">
              <SummaryRow label="Income" value="£3,250" variant="income" />
              <SummaryRow label="Spent" value="£1,420" variant="expense" />
              <SummaryRow label="Saved" value="£1,830" variant="saved" />
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-slate-900/85 p-4 text-left sm:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Recent transactions</p>
              <span className="text-xs font-medium text-primary">View all</span>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <TransactionPreview category="Groceries" amount="-£64.20" />
              <TransactionPreview category="Salary" amount="+£2,950" positive />
              <TransactionPreview category="Transport" amount="-£18.40" />
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

type SummaryRowProps = {
  label: string;
  value: string;
  variant: "income" | "expense" | "saved";
};

function SummaryRow({ label, value, variant }: SummaryRowProps) {
  const colorClasses = {
    income: "bg-sky-400",
    expense: "bg-red-400",
    saved: "bg-primary",
  };

  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="font-semibold text-slate-100">{value}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${colorClasses[variant]}`} />
      </div>
    </div>
  );
}

type TransactionPreviewProps = {
  category: string;
  amount: string;
  positive?: boolean;
};

function TransactionPreview({ category, amount, positive = false }: TransactionPreviewProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/[0.035] px-3 py-2.5">
      <span className="text-xs text-slate-300">{category}</span>
      <span className={`flex items-center gap-1 text-xs font-semibold ${positive ? "text-primary" : "text-slate-100"}`}>
        {positive && <ArrowUpRight size={13} />}
        {amount}
      </span>
    </div>
  );
}
