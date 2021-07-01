import React, {useState, useContext} from 'react'
import { GlobalContext } from '../appmain/GlobalProvider';
import { useAuth0 } from "@auth0/auth0-react";

export const AddTransaction = () => {
  const { isAuthenticated} = useAuth0();

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const[date,setDate]=useState(' ')

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date
    }

    addTransaction(newTransaction);
  try
  {
  const response =await fetch('https://v1.nocodeapi.com/vamshikrishna/google_sheets/uBdBwtMvXboVmrQN?tabId=Sheet1',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify([
      [text,amount.toString(),new Date().toLocaleString()],
    ]),
  }
 
  );await response.json();

  }
    catch(err)
    {
      console.log(err)

    }


  }
  

  return isAuthenticated && (
    <>
    
      <h3><center>Add new transaction</center></h3>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="text">Text</label><br/>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/><br/>
        </div>
        
        <div className="">
          <label htmlFor="amount"
            >Amount <br />
            [negative - expense, positive - income]</label >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required />
        </div>
        <div className="">
          <label htmlFor="date"
            >Date <br/>
            </label
          >
          <input type="date" value={date} name="date" onChange={(e) => setDate(e.target.value)} placeholder="pick a date"  required/>
        </div>
        <button className="btn"><h4>Add transaction</h4></button>
      </form>
      
    </>
  )
}
