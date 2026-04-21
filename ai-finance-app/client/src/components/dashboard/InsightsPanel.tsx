type Props = {
  insights: string[];
};
export default function InsightsPanel({ insights }: Props) {
  return (
    <section className="bg-surface p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-text mb-4">AI Insights</h2>

      {insights.length === 0 ? (
        <p className="text-muted">No insights yet</p>
      ) : (
        <div className="space-y-2">
          {insights.map((i, idx) => (
            <p key={idx} className="text-text">
              💡 {i}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
