require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();

const User = require('./models/User');

// lengvesniam darbui su serveriu, API kurimu
const express = require('express');
const app = express(); //startuoja aplikacija ant express framework
// nes duomenys siusim/gausim json formatu -> is frontend'o "email" : "pvz@gmail.com"
app.use(express.json());

//controllers import
const {
    registerUser,
    loginUser
} = require('./controllers/userController');
const  {
    getTransactions,
    setTransactions
} = require('./controllers/transactionsController');

app.post('/api/user', registerUser);
app.post('/api/user/login', loginUser);
app.get('/api/transactions', getTransactions);
app.post('/api/transactions', setTransactions);

// app.get('/api/users', async(req, res) => {
//     const result = await User.find();
//     res.send(result);
// });

//serverio startavimas
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} serveris sukasi, galiu testuoti per Postman`);
});
