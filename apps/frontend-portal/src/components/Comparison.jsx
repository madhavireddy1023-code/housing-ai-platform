function Comparison({ history }) {
  if (!history.length) {
    return (
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Comparison view</h2>
        <p className="mt-4 text-sm text-slate-600">No predictions saved yet. Use the estimator to compare home value estimates.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Comparison view</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{history.length} estimations</span>
      </div>

      <div className="mt-6 min-w-[720px] overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
            <tr>
              <th className="border border-slate-200 px-4 py-3">Bedrooms</th>
              <th className="border border-slate-200 px-4 py-3">Bathrooms</th>
              <th className="border border-slate-200 px-4 py-3">Square footage</th>
              <th className="border border-slate-200 px-4 py-3">Lot size</th>
              <th className="border border-slate-200 px-4 py-3">Distance (mi)</th>
              <th className="border border-slate-200 px-4 py-3">Prediction</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="odd:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">{item.bedrooms}</td>
                <td className="border border-slate-200 px-4 py-3">{item.bathrooms}</td>
                <td className="border border-slate-200 px-4 py-3">{item.square_footage}</td>
                <td className="border border-slate-200 px-4 py-3">{item.lot_size}</td>
                <td className="border border-slate-200 px-4 py-3">{item.distance_to_city_center}</td>
                <td className="border border-slate-200 px-4 py-3">${Math.round(item.prediction).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Comparison;