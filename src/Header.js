import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

export const  HeaderData = () =>{
    const{isAuthenticated}=useAuth0();
    return isAuthenticated&&(
        <h2 ><center><b>ExpenseTracker</b></center></h2>
    )
}
