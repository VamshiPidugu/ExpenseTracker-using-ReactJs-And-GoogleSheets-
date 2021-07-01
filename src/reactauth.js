import React from "react";
import './Auth.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import SignupButton from './SignupButton';
function ReactAuthentication() {
  
    return (
     <div>
    <SignupButton/>  
   
    <LoginButton/>
    
    
    <LogoutButton/>
    <Profile/>
    
    </div>
    
    );
}
export default ReactAuthentication;
    