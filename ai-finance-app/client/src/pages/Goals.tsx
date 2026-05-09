import { motion } from "framer-motion";

export default function Goals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 transition-colors">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Financial Goals
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
          Set and track your financial goals. Create targets for savings,
          investments, or any financial objective you want to achieve.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-primary hover:bg-primary-hover text-black py-2 rounded-lg transition-colors"
        >
          Add Goal
        </motion.button>
      </div>
    </motion.div>
  );
}