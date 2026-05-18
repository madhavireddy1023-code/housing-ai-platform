import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAppStatus } from "../context/AppStatusContext";
import PredictionChart from "../components/PredictionChart";

function Home() {
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState([]);
  const { setLoading, setError } = useAppStatus();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Estimator</p>
            <h2 className="text-2xl font-semibold text-slate-900">Property value estimator</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/estimator"
              end
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              }
            >
              Form
            </NavLink>
            <NavLink
              to="history"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              }
            >
              History
            </NavLink>
            <NavLink
              to="comparison"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              }
            >
              Comparison
            </NavLink>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <Outlet
            context={{
              prediction,
              history,
              setPrediction,
              setHistory,
              setLoading,
              setError,
              selected,
              setSelected,
            }}
          />
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Session overview</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span>Estimates created</span>
                <span className="font-semibold text-slate-900">{history.length}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span>Selected for comparison</span>
                <span className="font-semibold text-slate-900">{selected.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Latest price</span>
                <span className="font-semibold text-slate-900">
                  {prediction !== null ? `$${Math.round(prediction).toLocaleString()}` : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {prediction !== null ? (
            <PredictionChart prediction={prediction} history={history} />
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600 shadow-sm">
              Submit a property estimate to see a visual scorecard and prediction intensity.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Home;