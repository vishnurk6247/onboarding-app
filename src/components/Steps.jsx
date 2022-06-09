import React from "react";

const Steps = (props) => {
  const { length, current } = props;
  const steps = [...Array(length).keys()];
  const isCurrent = (step) => {
    return current === step + 1
      ? " current"
      : current > step + 1
      ? " active"
      : "";
  };

  return (
    <>
      <div className="text-center">
        <div className="steps-container margin-auto">
          {steps.map((step) => (
            <div className={"steps-progress" + isCurrent(step)} key={step}>
              <span className="center-element">{step + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Steps;
