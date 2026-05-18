function PredictionTable({ history }) {
  const latest = history[history.length - 1];
  if (!latest) {
    return null;
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(latest.prediction);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Latest estimate</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Estimated price</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{formattedPrice}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">House details</p>
          <div className="mt-2 space-y-2 text-sm text-slate-700">
            <div>Square footage: {latest.square_footage}</div>
            <div>Bedrooms: {latest.bedrooms}</div>
            <div>Bathrooms: {latest.bathrooms}</div>
            <div>Lot size: {latest.lot_size}</div>
            <div>Distance: {latest.distance_to_city_center} mi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionTable;