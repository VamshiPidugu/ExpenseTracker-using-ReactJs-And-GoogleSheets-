import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,isAuthenticated  } = useAuth0();

  return (
    isAuthenticated && (
        
  <div class="container-fluid">
  <span class="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;&nbsp;
   <button  className="btn btn-info" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button></div>
  ));
};

export default LogoutButton;