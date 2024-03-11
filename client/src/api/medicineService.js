import axios from "./axios";

const getAll = async (activeDrugStoreId) => {
  const url = activeDrugStoreId
    ? `/medicine?drug_store_id=${activeDrugStoreId}`
    : '/medicine'
  const response = await axios.get(url)
  return response.data?.medicine;
}

export default {
  getAll
}