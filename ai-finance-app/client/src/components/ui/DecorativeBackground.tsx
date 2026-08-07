import { motion } from "framer-motion";

export default function DecorativeBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, 12, 0] }}
        className="absolute -left-32 -top-28 h-80 w-80 rounded-full bg-primary/20 blur-3xl dark:bg-primary/15"
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], x: [0, -20, 0], y: [0, -16, 0] }}
        className="absolute -bottom-36 -right-28 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/10"
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
    </div>
  );
}
