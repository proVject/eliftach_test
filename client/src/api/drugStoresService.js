import axios from "./axios";

const getAll = async () => {
  const response = await axios.get('/drug_stores')
  return response.data?.drugStores;
}

export default {
  getAll
}