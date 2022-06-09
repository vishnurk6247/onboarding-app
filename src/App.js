import "./styles/global-styles.css";
import "./styles/components.css";
import Onboarding from "./pages/onboarding";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/onboarding/profile" />}
            />
            <Route path="/onboarding/*" element={<Onboarding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
