import axios from 'axios';

const API_URL = '/api/transactions';

//get transactions
const getTransactions = async()=>{
   
        try {
          const response = await axios.get(API_URL);
          //console.log(response);
          return response;
        } catch (error) {
          console.error(error);
        }
    
}
//post transactions
const postTransactions = async(transaction)=>{
  try {
    const response = await axios.post(API_URL, transaction);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }    
}
const transactionsService = {
    getTransactions,
    postTransactions
}

export default transactionsService