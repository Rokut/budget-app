import React, { useState, useEffect } from 'react';
import transactionsService from '../services/transactionService';

import { Table } from 'react-bootstrap';
import NewTransaction from './NewTransaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getData = ()=> {
    transactionsService.getTransactions().then(res=>{
      setTransactions([...res.data]);
    });
  }
  useEffect(()=>{
    getData();
  }, []);

console.log(transactions);

//div vidui {transasctions.map()} cikle atspausdinsim duomenys
  return (
    <div>
      <h2 className='text-center my-3'>Transactions</h2>
      {transactions.length > 0 ? (
        <Table striped bordered hover variant="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {transactions.map((transaction, index)=>(
            <tr key={index}>
              <td>{transaction.createAt}</td>
              <td>{transaction.text}</td>
              <td>{transaction.amount}</td>
            </tr>))}
          </tbody>
        </Table>) : (<h3 className='text-center my-3'>You don't have any transactions!</h3>)}
        <NewTransaction getData={getData}/>
    </div> 
  )
}

export default Transactions