

import React from "react";
import './App.css';
import ReactAuthentication from './reactauth';
import { HeaderData } from './Header.js';
import {GlobalProvider} from './appmain/GlobalProvider';
import { AddTransaction } from  './components/AddTransaction';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

function App() {
  
  return (
    <div className="App">
  <ReactAuthentication/>
  <GlobalProvider>
      <HeaderData/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      
      </GlobalProvider>
      </div>
      
    
  );
}

export default App;
