import { motion } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";
import Button from "./Button";

type ErrorStateProps = {
  description: string;
  onRetry?: () => void;
  title?: string;
};

export default function ErrorState({
  description,
  onRetry,
  title = "Something went wrong",
}: ErrorStateProps) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-red-200 bg-red-50/80 p-8 text-center shadow-sm dark:border-red-400/20 dark:bg-red-500/10"
      initial={{ opacity: 0, y: 12 }}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600 dark:text-red-300">
        <AlertCircle size={24} />
      </div>

      <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {onRetry && (
        <div className="mt-6">
          <Button onClick={onRetry}>
            <span className="inline-flex items-center gap-2">
              <RefreshCw size={16} />
              Try again
            </span>
          </Button>
        </div>
      )}
    </motion.section>
  );
}
