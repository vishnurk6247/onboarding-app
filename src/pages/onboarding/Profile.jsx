import React from "react";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    navigate("/onboarding/workspace");
  };
  return (
    <>
      <h2 className="text-center">Welcome! First things first...</h2>
      <p className="text-center">You can always change them later.</p>
      <form>
        <FormInput
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="eg:Steve Jobs"
        />
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          placeholder="eg:Steve"
        />
        <button type="submit" onClick={submitForm}>
          Create Workspace
        </button>
      </form>
    </>
  );
};

export default Profile;
