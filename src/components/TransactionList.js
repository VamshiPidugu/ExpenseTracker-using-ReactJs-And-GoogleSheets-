import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { useAuth0 } from "@auth0/auth0-react";

import { GlobalContext } from '../appmain/GlobalProvider';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { isAuthenticated }=useAuth0();

  return  isAuthenticated &&(
    <>
      <h3><center>Old Transactions</center></h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.i} transaction={transaction} />))}
      </ul>
    </>
  )
}
