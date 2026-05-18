import Comparison from "../components/Comparison";
import { useOutletContext } from "react-router-dom";

export default function EstimatorComparisonSection() {
  const { history, selected, setSelected } = useOutletContext();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Comparison view</h2>
        <p className="mt-2 text-sm text-slate-600">
          Compare multiple property estimates side-by-side to spot differences in predicted values and key inputs.
        </p>
      </div>

      <Comparison history={history} selected={selected} setSelected={setSelected} />
    </div>
  );
}
