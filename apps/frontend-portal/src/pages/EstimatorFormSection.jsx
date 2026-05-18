import PropertyForm from "../components/PropertyForm";
import PredictionTable from "../components/PredictionTable";
import { useOutletContext } from "react-router-dom";

export default function EstimatorFormSection() {
  const {
    prediction,
    history,
    setPrediction,
    setHistory,
    setLoading,
    setError,
  } = useOutletContext();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Property details</h2>
        <p className="mt-2 text-sm text-slate-600">
          Enter the property information below to generate a price estimate from the regression model.
        </p>
      </div>

      <PropertyForm
        setPrediction={setPrediction}
        history={history}
        setHistory={setHistory}
        setLoading={setLoading}
        setError={setError}
      />

      {history.length > 0 && <PredictionTable history={history} />}
    </div>
  );
}
