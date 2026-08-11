import { motion } from "framer-motion";
import type { ReactNode } from "react";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
      initial={{ opacity: 0, y: 12 }}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </div>

      <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </motion.section>
  );
}
