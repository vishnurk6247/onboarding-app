import React from "react";

const FormInput = ({ type, label, name, placeholder }) => {
  return (
    <div className="form-element">
      <label className="form-item-label" htmlFor={name}>
        {label}
      </label>
      {(() => {
        switch (type) {
          case "text":
            return (
              <input type="text" name="" id="" placeholder={placeholder} />
            );
          //Add other types of inputs here
          default:
            return (
              <input type="text" name="" id="" placeholder={placeholder} />
            );
        }
      })()}
    </div>
  );
};

export default FormInput;
