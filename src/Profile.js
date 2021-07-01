import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  

 
  return (
    isAuthenticated && (
      <div className="row align-items-center profile-header">
        
        <div className="col-md-2 mb-3">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
        
          <h5>  username---{user.name}</h5>
         
          <p className="lead text"> emailAddress---{user.email}</p>
        </div>
        
      </div>
    )
  );
};

export default Profile;