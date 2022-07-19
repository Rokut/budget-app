import React, { useState } from 'react';

import transactionsService from '../services/transactionService';

import { Form, Button } from 'react-bootstrap';


const NewTransaction = ({getData}) => {
    const [text, setText ] = useState('');
    const [amount, setAmount] = useState('')

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            text: text,
            amount: amount,
            user: ''
        }
        transactionsService.postTransactions(newTransaction);

        setText('');
        setAmount('');
        getData();
    }
  return (
    <div>
       <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Transaction</Form.Label>
                <Form.Control type="text"
                            placeholder="Enter text"
                            id='text'
                            name='text'
                            value={text} 
                            onChange={(e)=> setText(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number"
                            placeholder="Enter amount"
                            id='amount'
                            name='amount'
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)} />
            </Form.Group>           
            <Button variant="secondary" type="submit">
                Save
            </Button>
        </Form>
    </div>
  )
}

export default NewTransaction