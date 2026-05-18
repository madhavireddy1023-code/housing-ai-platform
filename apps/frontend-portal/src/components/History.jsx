function History({ history }) {
  if (!history.length) {
    return (
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Prediction history</h2>
        <p className="mt-4 text-sm text-slate-600">No predictions yet. Submit the form to save your first estimate.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Prediction history</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{history.length} entries</span>
      </div>

      <div className="mt-6 space-y-4">
        {history.map((item, index) => (
          <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">Estimated price</p>
                <p className="mt-1 font-semibold text-slate-900">${Math.round(item.prediction).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Bedrooms</p>
                <p className="mt-1 text-slate-900">{item.bedrooms}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Bathrooms</p>
                <p className="mt-1 text-slate-900">{item.bathrooms}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Square footage</p>
                <p className="mt-1 text-slate-900">{item.square_footage}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Lot size</p>
                <p className="mt-1 text-slate-900">{item.lot_size}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Distance</p>
                <p className="mt-1 text-slate-900">{item.distance_to_city_center} mi</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default History;