import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DataContextProvider from "./contexts/DataContextProvider.tsx";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={FallBackError}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ErrorBoundary>
  </StrictMode>
);


function FallBackError({ error}: FallbackProps) {
  return <h2>{error.message}</h2>;
}