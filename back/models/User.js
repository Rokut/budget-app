const mongoose = require('mongoose');

const User =  mongoose.model('User', new mongoose.Schema({
    //aprasome struktura
    name: {
        // duonenu tipas
        type: String,
        // opcija, kad butu butinai uzpildytas
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

}));
module.exports = User;