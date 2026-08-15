const shimmer = "animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800";
const transactionRows = [1, 2, 3, 4];

export default function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className={`mb-6 h-9 w-44 ${shimmer}`} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className={`h-4 w-20 ${shimmer}`} />
              <div className={`mt-3 h-7 w-28 ${shimmer}`} />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className={`h-4 w-24 ${shimmer}`} />
              <div className={`mt-3 h-7 w-28 ${shimmer}`} />
            </div>
            <div className="rounded-2xl bg-primary/25 p-5">
              <div className={`h-4 w-20 ${shimmer}`} />
              <div className={`mt-3 h-8 w-32 ${shimmer}`} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className={`h-6 w-44 ${shimmer}`} />
            <div className="mx-auto mt-6 h-40 w-40 rounded-full border-[28px] border-slate-200 dark:border-slate-800" />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className={`h-6 w-28 ${shimmer}`} />
            <div className={`mt-5 h-4 w-full ${shimmer}`} />
            <div className={`mt-3 h-4 w-4/5 ${shimmer}`} />
            <div className={`mt-3 h-4 w-3/5 ${shimmer}`} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="p-5">
              <div className={`h-6 w-32 ${shimmer}`} />
            </div>
            <div className="border-y border-slate-200 px-4 py-3 dark:border-gray-800">
              <div className="grid grid-cols-5 gap-4">
                {transactionRows.map((row) => (
                  <div key={row} className={`h-4 ${shimmer}`} />
                ))}
              </div>
            </div>
            <div className="space-y-4 p-4">
              {transactionRows.map((row) => (
                <div key={row} className="grid grid-cols-5 gap-4">
                  <div className={`h-4 ${shimmer}`} />
                  <div className={`h-4 ${shimmer}`} />
                  <div className={`h-4 ${shimmer}`} />
                  <div className={`h-4 ${shimmer}`} />
                  <div className={`h-4 ${shimmer}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
