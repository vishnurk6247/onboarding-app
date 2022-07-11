import React from "react";
// import FormInput from "../../components/FormInput";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  // const navigate = useNavigate();
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   navigate("/onboarding/workspace");
  // };

  useEffect(() => {
    const req_nonce = Math.floor(Math.random() * 899999 + 100000000);
    const BASE_PATH =
      "truecallersdk://truesdk/web_verify?" +
      `requestNonce=${req_nonce}` +
      `&type=btmsheet` +
      `&partnerKey=SXF5f9162faafe54c42b889a1211dde9f3567` +
      `&partnerName=TrueShop&lang=en&title=login`;
    window.location.href = BASE_PATH;
  }, []);

  return (
    <>
      <p> Redirect page</p>
      {/* <h2 className="page-title">Welcome! First things first...</h2>
      <p className="page-sub">You can always change them later.</p>
      <form className="onboarding-elements-container">
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
      </form> */}
    </>
  );
};

export default Profile;
