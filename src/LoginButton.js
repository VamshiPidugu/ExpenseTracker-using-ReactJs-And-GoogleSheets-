import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated } = useAuth0();

  return  (
    !isAuthenticated && (
        
  <div class="container-fluid">
      <span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary " onClick={() => loginWithRedirect()}>
        Log In
      </button></div>
    )
  )
};

export default LoginButton;