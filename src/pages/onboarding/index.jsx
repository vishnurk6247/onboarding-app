import React, { useState } from "react";
import "../../styles/onboarding.css";
import Steps from "../../components/Steps";
import BasicInfo from "./BasicInfo";
import WorkSpaceInfo from "./WorkspaceInfo";
import PlanInfo from "./PlanInfo";
import Completed from "./Completed";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="onboarding-container margin-auto">
        <h1 className="text-center">Eden</h1>
        <Steps length={4} current={currentPage} />
        {currentPage === 1 && <BasicInfo setCurrentPage={setCurrentPage} />}
        {currentPage === 2 && <WorkSpaceInfo setCurrentPage={setCurrentPage} />}
        {currentPage === 3 && <PlanInfo setCurrentPage={setCurrentPage} />}
        {currentPage === 4 && <Completed />}
      </div>
    </>
  );
};

export default Onboarding;
