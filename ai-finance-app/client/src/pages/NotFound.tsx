import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Page not found
          </h2>
          <p className="tex-gray-500 mb-6 ">
            The page you are looking for does not exist.
          </p>
          <Link
            to={"/"}
            className="w-full bg-lime-400 text-black font-medium py-3 px-6 rounded-lg hover:bg-lime-300 transition"
          >
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
