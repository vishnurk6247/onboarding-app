import "./styles/global-styles.css";
import "./styles/components.css";
import Onboarding from "./pages/onboarding";
import Plans from "./pages/onboarding/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const req_nonce = Math.floor(Math.random() * 899999 + 100000000);
    const BASE_PATH =
      "truecallersdk://truesdk/web_verify?" +
      `requestNonce=${req_nonce}` +
      `&type=btmsheet` +
      `&partnerKey=SXF5f9162faafe54c42b889a1211dde9f3567` +
      `&partnerName=TrueShop&lang=en&title=login`;
    let a = document.createElement("a");
    a.setAttribute("href", BASE_PATH);
    a.click();
    // invokeDeeplink2();
  }, []);

  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/redirect" element={<Plans />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
