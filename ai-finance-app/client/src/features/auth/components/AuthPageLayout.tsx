import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-8 dark:bg-gray-950">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {children}
      </motion.section>
    </main>
  );
}
