import { useEffect, useState } from "react";
import { useAppStatus } from "../context/AppStatusContext";

export default function ModelInsights() {
  const [modelInfo, setModelInfo] = useState(null);
  const { setLoading, setError } = useAppStatus();

  useEffect(() => {
    async function loadModelInfo() {
      try {
        setError("");
        setLoading(true);

        const response = await fetch("http://localhost:8000/model-info");
        if (!response.ok) {
          throw new Error("Unable to load model information.");
        }

        const data = await response.json();
        setModelInfo(data);
      } catch (err) {
        setError(err.message || "Unable to load model details.");
      } finally {
        setLoading(false);
      }
    }

    loadModelInfo();
  }, [setError, setLoading]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Model insights</h2>
        <p className="mt-2 text-sm text-slate-600">
          See model coefficients, intercept, and test performance metrics from the current regression model.
        </p>
      </section>

      {modelInfo ? (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Model summary</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <span className="font-semibold">Type:</span> {modelInfo.model_type}
              </div>
              <div>
                <span className="font-semibold">Intercept:</span>{" "}
                {Math.round(modelInfo.intercept).toLocaleString()}
              </div>
              <div>
                <span className="font-semibold">Features:</span> {modelInfo.features.join(", ")}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Performance</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <span className="font-semibold">MAE:</span> {modelInfo.metrics.mae.toFixed(2)}
              </div>
              <div>
                <span className="font-semibold">RMSE:</span> {modelInfo.metrics.rmse.toFixed(2)}
              </div>
              <div>
                <span className="font-semibold">R² score:</span> {modelInfo.metrics.r2_score.toFixed(4)}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">Coefficients</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-700">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-medium">Feature</th>
                    <th className="px-4 py-3 font-medium">Coefficient</th>
                  </tr>
                </thead>
                <tbody>
                  {modelInfo.features.map((feature, index) => (
                    <tr key={feature} className="border-b border-slate-100">
                      <td className="px-4 py-3">{feature}</td>
                      <td className="px-4 py-3">{modelInfo.coefficients[index].toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600 shadow-sm">
          Loading model data...
        </div>
      )}
    </div>
  );
}
