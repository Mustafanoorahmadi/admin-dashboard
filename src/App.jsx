import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./core/i18n.js";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
