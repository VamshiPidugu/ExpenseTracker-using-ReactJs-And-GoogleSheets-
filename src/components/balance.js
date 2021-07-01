import React, { useContext } from 'react';
import { GlobalContext } from '../appmain/GlobalProvider';
import { useAuth0 } from "@auth0/auth0-react";


//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    'Rs ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
    +' /-'
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const { isAuthenticated} = useAuth0();


  const amounts = transactions.map(transaction => transaction.amount);
  


  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return isAuthenticated &&(
    <>
      <h3>Your Balance</h3>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}
