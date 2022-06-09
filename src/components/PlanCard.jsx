import React from "react";

const PlanCard = ({ icon, cardTitle, cardContent }) => {
  return (
    <>
      <div className="plan-card">
        <div className="plan-icon-holder"></div>
        <h4>{cardTitle}</h4>
        <p>{cardContent}</p>
      </div>
    </>
  );
};

export default PlanCard;
