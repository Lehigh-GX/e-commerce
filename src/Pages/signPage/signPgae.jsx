import React from "react";
import "./signPage.scss";
import SignIn from "../../Components/signIn/signIn";
import SignUp from "../../Components/sign-up/sign-up";

const SignPage = () => (
  <div className="signPage">
    <SignIn />
    <SignUp />
  </div>
);

export default SignPage;
