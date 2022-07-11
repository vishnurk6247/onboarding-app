import React, { useEffect, useState } from "react";
import "../../styles/onboarding.css";
import Steps from "../../components/Steps";
import Profile from "./Profile";
import WorkSpace from "./Workspace";
import Plans from "./Plans";
import Completed from "./Completed";
import { Routes, Route, useLocation } from "react-router-dom";
import { onboardingPages } from "../../utils/onboardingPages";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const getCurrentPage = () => {
    let pathElements = location.pathname.split("/");
    if (pathElements.at(-1) === "") pathElements.pop(); //For pathnames ending with "/"
    return onboardingPages.get(pathElements.pop());
  };

  useEffect(() => {
    setCurrentPage(getCurrentPage());
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      <div className="onboarding-container">
        <h1 className="app-title">Eden</h1>
        <Steps length={4} current={currentPage} />
        <Routes path="/onboarding">
          <Route path="profile" element={<Profile />} />
          <Route path="workspace" element={<WorkSpace />} />
          <Route path="plans" element={<Plans />} />
          <Route path="completed" element={<Completed />} />
        </Routes>
      </div>
    </>
  );
};

export default Onboarding;
