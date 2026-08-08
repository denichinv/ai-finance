import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import DecorativeBackground from "../../../components/ui/DecorativeBackground";
import DashboardPreview from "../components/DashboardPreview";

export default function LandingPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-50 px-6 py-8 dark:bg-[#0b1220]">
      <DecorativeBackground />

      <motion.div
        animate={{ opacity: [0.12, 0.32, 0.12], x: [0, -42, 0], y: [0, 26, 0] }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ opacity: [0.08, 0.24, 0.08], x: [0, 34, 0], y: [0, -24, 0] }}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-24 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
        <header className="flex items-center justify-between">
          <Link
            aria-label="SpendWise home"
            className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            to="/"
          >
            <span className="text-primary">S</span>pend
            <span className="ml-0.5 text-primary">W</span>ise
          </Link>

          <Link
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/10"
            to="/login"
          >
            Log in
          </Link>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.45 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-hover dark:text-primary">
              <ShieldCheck size={16} />
              Your money, clearly organised
            </p>

            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Make every pound feel intentional.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              SpendWise brings your transactions, goals, and spending habits into one calm personal-finance workspace.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                to="/register"
              >
                Start for free
                <ArrowRight size={17} />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                to="/login"
              >
                I already have an account
              </Link>
            </div>
          </motion.div>

          <DashboardPreview />

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            <Feature icon={<BarChart3 size={20} />} text="See where your money goes" />
            <Feature icon={<Target size={20} />} text="Stay focused on your goals" />
            <Feature icon={<ShieldCheck size={20} />} text="Keep your data personal" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  text: string;
};

function Feature({ icon, text }: FeatureProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/75 p-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
      <span className="text-primary">{icon}</span>
      {text}
    </div>
  );
}
