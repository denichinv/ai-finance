import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-background min-h-[80vh] flex items-center justify-center px-6 py-8">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-text mb-2">404</h1>

          <h2 className="text-xl font-semibold text-text mb-3">
            Page not found
          </h2>

          <p className="text-muted mb-6">
            The page you are looking for does not exist.
          </p>

          <Button>
            <Link to="/">Go back to Dashboard</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
