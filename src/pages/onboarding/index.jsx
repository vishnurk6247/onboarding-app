import React from "react";
import "../../styles/onboarding.css";
import Steps from "../../components/Steps";

const Onboarding = () => {
  return (
    <>
      <div className="onboarding-container margin-auto">
        <h1 className="text-center">Eden</h1>
        <Steps length={4} current={1} />
      </div>
    </>
  );
};

export default Onboarding;
