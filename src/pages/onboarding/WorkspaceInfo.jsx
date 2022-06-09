import React from "react";
import FormInput from "../../components/FormInput";

const WorkSpaceInfo = ({ setCurrentPage }) => {
  const submitForm = (e) => {
    e.preventDefault();
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <>
      <h2 className="text-center">Let's set up a home for all your work</h2>
      <p className="text-center">
        You can always create another workspace later.
      </p>
      <form>
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

export default WorkSpaceInfo;
