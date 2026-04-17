type Props = {
  insights: string[];
};
export default function InsightsPanel({ insights }: Props) {
  return (
    <section className="bg-black text-white p-6 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
      {insights.length === 0 ? (
        <p>No insights yet</p>
      ) : (
        insights.map((i, idx) => <p key={idx}>💡 {i}</p>)
      )}
    </section>
  );
}
