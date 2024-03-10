const OrderModule = require('../models/orders')
const MedicineOrderModule = require('../models/medicine_orders')
const createOrder = ({ email, phone, address, drugs }) => {
  const drugsToInsert = drugs.map(d => ({ count: d.count, medicine_id: d.medicine_id }))

  return OrderModule.create({
    email,
    phone,
    address,
    MedicineOrders: drugsToInsert
  }, {
    include: [MedicineOrderModule]
  });
}

module.exports = {
  createOrder
}