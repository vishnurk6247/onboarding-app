import React from "react";

const Completed = () => {
  return (
    <>
      <h2 className="page-title">Congratulations, Eren!</h2>
      <p className="page-sub">
        You have completed onboarding, you can start using Eden!
      </p>
      <div className="onboarding-elements-container">
        <button>Launch Eden</button>
      </div>
    </>
  );
};

export default Completed;
