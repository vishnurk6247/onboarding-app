import React from "react";
import PlanCard from "../../components/PlanCard";

const PlanInfo = ({ setCurrentPage }) => {
  const submitPlan = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <>
      <h2 className="text-center">How are you planning to use Eden?</h2>
      <p className="text-center">
        We'll streamline your setup experience accordingly.
      </p>
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
    </>
  );
};

export default PlanInfo;
