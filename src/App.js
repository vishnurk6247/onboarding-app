import "./styles/global-styles.css";
import "./styles/components.css";
// import Onboarding from "./pages/onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const invokeDeeplink = () => {
    const req_nonce = Math.floor(Math.random() * 899999 + 100000000);
    const BASE_PATH =
      "truecallersdk://truesdk/web_verify?" +
      `requestNonce=${req_nonce}` +
      `&type=btmsheet` +
      `&partnerKey=SXF5f9162faafe54c42b889a1211dde9f3567` +
      `&partnerName=TrueShop&lang=en&title=login`;
    window.location.href = BASE_PATH;
  };

  const invokeDeeplink2 = () => {
    const req_nonce = Math.floor(Math.random() * 899999 + 100000000);
    const BASE_PATH =
      "truecallersdk://truesdk/web_verify?" +
      `requestNonce=${req_nonce}` +
      `&type=btmsheet` +
      `&partnerKey=SXF5f9162faafe54c42b889a1211dde9f3567` +
      `&partnerName=TrueShop&lang=en&title=login`;
    window.open(BASE_PATH);
  };

  useEffect(() => {
    invokeDeeplink2();
  }, []);

  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <button onClick={invokeDeeplink}>Login</button>
                  <button
                    style={{ marginTop: "30px" }}
                    onClick={invokeDeeplink2}
                  >
                    Open
                  </button>
                </>
              }
            />
            {/* <Route path="/onboarding/*" element={<Onboarding />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
