import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStatusProvider } from "./context/AppStatusContext";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import EstimatorFormSection from "./pages/EstimatorFormSection";
import EstimatorHistorySection from "./pages/EstimatorHistorySection";
import EstimatorComparisonSection from "./pages/EstimatorComparisonSection";
import ModelInsights from "./pages/ModelInsights";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AppStatusProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/estimator" replace />} />
            <Route path="estimator" element={<Home />}>
              <Route index element={<EstimatorFormSection />} />
              <Route path="history" element={<EstimatorHistorySection />} />
              <Route path="comparison" element={<EstimatorComparisonSection />} />
            </Route>
            <Route path="insights" element={<ModelInsights />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppStatusProvider>
    </BrowserRouter>
  );
}

export default App;