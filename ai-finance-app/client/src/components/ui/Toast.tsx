import { motion, AnimatePresence } from "framer-motion";
type Props = {
  message: string;
  isVisible: boolean;
};
export default function Toast({ message, isVisible }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-md z-50 flex items-center gap-2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
