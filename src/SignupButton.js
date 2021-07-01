import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    !(isAuthenticated) && (
        <div class="container-fluid">
        <span class="glyphicon glyphicon-user"></span> &nbsp;&nbsp;
    <button
      className="btn btn-danger navbar-btn"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button></div>
  ));
};

export default SignupButton;