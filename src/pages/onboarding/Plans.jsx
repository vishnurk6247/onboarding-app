import React from "react";
import PlanCard from "../../components/PlanCard";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  const submitPlan = () => {
    navigate("/onboarding/completed");
  };
  return (
    <>
      <h2 className="page-title">How are you planning to use Eden?</h2>
      <p className="page-sub">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="onboarding-elements-container">
        <div className="plan-cards-container">
          <PlanCard
            cardTitle="For myself"
            cardContent="Write better. Think more clearly. Stay organized."
          />
          <PlanCard
            cardTitle="With my team"
            cardContent="Wikis, docs, tasks & projects, all in one place."
          />
        </div>
        <button onClick={submitPlan}>Create Workspace</button>
      </div>
    </>
  );
};

export default Plans;
