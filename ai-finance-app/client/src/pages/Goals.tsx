import { motion } from "framer-motion";
export default function Goals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          {/*title + description */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Financial Goals
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Set and track your financial goals. Create targets for savings,
            investments, or any financial objective you want to achieve.
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-primary text-black py-2 rounded-lg"
          >
            Add Transaction
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
