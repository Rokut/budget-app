const Transaction = require('../models/Transaction')
// const User = require('../models/User');
const asyncHandler = require('express-async-handler');


const getTransactions = asyncHandler( async (req, res) => {
    const transactions = await Transaction.find({user: '62d6557612eb9b329cc856fe'});
    res.status(200).json(transactions);
});


const setTransactions = asyncHandler( async (req, res) => {
   
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
   }
   const transaction = await Transaction.create({
       text: req.body.text,
       amount: req.body.amount,
       user: req.body.user
   })
    res.status(200).json(transaction);
});

module.exports = {
    getTransactions,
    setTransactions
}