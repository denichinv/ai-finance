import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
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
      className="bg-surface p-5 rounded-2xl shadow-sm"
    >
      <h3 className="text-sm text-muted mb-4">Spending by Category</h3>

      <div className="flex justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
    </motion.section>
  );
}
