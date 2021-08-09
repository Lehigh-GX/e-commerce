import React from "react-dom";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...props }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...props}
  >
    {children}
  </button>
);
export default CustomButton;
