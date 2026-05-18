import { createContext, useContext, useMemo, useState } from "react";

const AppStatusContext = createContext(null);

export function AppStatusProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const value = useMemo(
    () => ({ loading, error, setLoading, setError }),
    [loading, error]
  );

  return (
    <AppStatusContext.Provider value={value}>
      {children}
    </AppStatusContext.Provider>
  );
}

export function useAppStatus() {
  const context = useContext(AppStatusContext);
  if (!context) {
    throw new Error("useAppStatus must be used inside AppStatusProvider");
  }
  return context;
}
