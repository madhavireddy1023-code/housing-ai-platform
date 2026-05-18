import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm text-center">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Page not found</p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-900">We couldn’t find that page.</h2>
      <p className="mt-3 text-sm text-slate-600">Please return to the estimator or model insights page.</p>
      <Link
        to="/estimator"
        className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
      >
        Go back to estimator
      </Link>
    </div>
  );
}
