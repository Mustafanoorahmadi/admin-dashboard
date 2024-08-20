import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/app/app-context.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />;
  </AppProvider>
);
