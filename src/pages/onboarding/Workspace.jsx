import React from "react";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";

const WorkSpace = () => {
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    navigate("/onboarding/plans");
  };
  return (
    <>
      <h2 className="page-title">Let's set up a home for all your work</h2>
      <p className="page-sub">You can always create another workspace later.</p>
      <form className="onboarding-elements-container">
        <FormInput
          type="text"
          name="workspaceName"
          label="Workspace Name"
          placeholder="eg:Eden"
        />
        <FormInput
          type="text"
          name="workspaceUrl"
          label="Workspace URL"
          placeholder="eg:Steve"
        />
        <button type="submit" onClick={submitForm}>
          Create Workspace
        </button>
      </form>
    </>
  );
};

export default WorkSpace;
