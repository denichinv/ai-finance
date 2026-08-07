import { motion } from "framer-motion";
import type { ReactNode } from "react";
import DecorativeBackground from "../../../components/ui/DecorativeBackground";

type AuthPageLayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function AuthPageLayout({
  title,
  description,
  children,
}: AuthPageLayoutProps) {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-10 dark:bg-[#0b1220]">
      <DecorativeBackground />

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 text-center"
          initial={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            <span className="text-primary">S</span>pend
            <span className="ml-0.5 text-primary">W</span>ise
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Personal finance, made clear.
          </p>
        </motion.div>

        <motion.section
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-full rounded-2xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-950/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/20"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {title}
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>

          {children}
        </motion.section>
      </div>
    </main>
  );
}
