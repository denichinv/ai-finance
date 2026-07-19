import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

type Props = {
  data: { name: string; value: number }[];
};

const COLORS = ["#84cc16", "#ef4444", "#3b82f6", "#eab308"];

export default function SpendingChart({ data }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 transition-colors"
    >
      <h3 className="text-xl font-semibold tracking-tight text-gray-700 dark:text-gray-200 mb-4">
        Spending by Category
      </h3>

      <div className="flex justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label={{ fill: "#6b7280" }}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#f3f4f6",
            }}
          />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              color: "#6b7280",
              fontFamily: "Outfit",
              fontSize: "14px",
            }}
          />
        </PieChart>
      </div>
    </motion.section>
  );
}
