type Props = {
  insights: string[];
};

export default function InsightsPanel({ insights }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 transition-colors">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        AI Insights
      </h2>

      {insights.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No insights yet</p>
      ) : (
        <div className="space-y-2">
          {insights.map((i, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300">
              💡 {i}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
