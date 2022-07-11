import "./styles/global-styles.css";
import "./styles/components.css";
import Onboarding from "./pages/onboarding";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const req_nonce = Math.floor(Math.random() * 899999 + 100000000);
    const BASE_PATH =
      "truecallersdk://truesdk/web_verify?" +
      `requestNonce=${req_nonce}` +
      `&partnerKey=SXF5f9162faafe54c42b889a1211dde9f3567` +
      `&partnerName=TrueShop&lang=en&title=login`;
    window.location.href = BASE_PATH;
  }, []);
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
