import { NavLink, Outlet } from "react-router-dom";
import { useAppStatus } from "../../context/AppStatusContext";

function AppLayout() {
  const { loading, error } = useAppStatus();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Housing AI Platform
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Property Value Estimator
            </h1>
          </div>
          <nav className="flex flex-wrap gap-3">
            <NavLink
              to="/estimator"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              }
            >
              Estimator
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              }
            >
              Model Insights
            </NavLink>
          </nav>
        </div>
        {error && (
          <div className="bg-rose-50 border-t border-rose-100 px-6 py-3 text-sm text-rose-700">
            {error}
          </div>
        )}
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>

      {loading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/40 px-6">
          <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="h-3.5 w-3.5 animate-pulse rounded-full bg-slate-900" />
              <div>
                <p className="text-base font-semibold text-slate-900">Loading content</p>
                <p className="text-sm text-slate-500">Fetching the latest model data and predictions.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppLayout;
