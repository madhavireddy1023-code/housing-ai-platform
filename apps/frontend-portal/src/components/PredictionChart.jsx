function PredictionChart({ prediction, history }) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(prediction);

  const maxValue = Math.max(prediction, ...(history.map((item) => item.prediction) || [0]), 250000);
  const score = Math.min(100, Math.round((prediction / maxValue) * 100));

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Latest estimate</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{formattedValue}</p>
        </div>
        <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          {score}% of current range
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Prediction intensity</span>
          <span>{Math.round(prediction / 1000)}k</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-slate-900 to-slate-400"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default PredictionChart;
