// import React, { useEffect, useState } from "react";
// import "../../styles/onboarding.css";
// import Steps from "../../components/Steps";
// import Profile from "./Profile";
// import WorkSpace from "./Workspace";
// import Plans from "./Plans";
// import Completed from "./Completed";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { onboardingPages } from "../../utils/onboardingPages";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  // const location = useLocation();

  // const getCurrentPage = () => {
  //   let pathElements = location.pathname.split("/");
  //   if (pathElements.at(-1) === "") pathElements.pop(); //For pathnames ending with "/"
  //   return onboardingPages.get(pathElements.pop());
  // };

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

  return (
    <>
      <button onClick={invokeDeeplink}>Login</button>
      <button
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/redirect")}
      >
        Next Page
      </button>
      {/* <div className="onboarding-container">
        <h1 className="app-title">Eden</h1>
        <Steps length={4} current={currentPage} />
        <Routes path="/onboarding">
          <Route path="profile" element={<Profile />} />
          <Route path="workspace" element={<WorkSpace />} />
          <Route path="plans" element={<Plans />} />
          <Route path="completed" element={<Completed />} />
        </Routes>
      </div> */}
    </>
  );
};

export default Onboarding;
