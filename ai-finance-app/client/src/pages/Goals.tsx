export default function Goals() {
  return (
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

        {/* Button */}
        <button className="w-full bg-lime-400 text-black font-medium py-2 rounded-lg hover:bg-lime-300 transition">
          + Create Goal
        </button>
      </div>
    </div>
  );
}
