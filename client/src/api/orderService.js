import axios from "./axios.js";

const createOrder = async (inputData) => {
  const response = await axios.post('/orders', inputData)
  return response.data.order
}

export default {
  createOrder
}