import History from "../components/History";
import { useOutletContext } from "react-router-dom";

export default function EstimatorHistorySection() {
  const { history } = useOutletContext();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Estimate history</h2>
        <p className="mt-2 text-sm text-slate-600">
          Review all previous property estimates captured during this session.
        </p>
      </div>

      <History history={history} />
    </div>
  );
}
