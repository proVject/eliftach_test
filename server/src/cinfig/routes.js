const orderController = require("../controllers/orders");
const medicineController = require("../controllers/medicine");
const drugStoresController = require('../controllers/drug_stores')

module.exports = (app) => {
  // orderController
  app.post('/orders', orderController.createOrder)
  app.get('/medicine', medicineController.getMedicine)
  app.get('/medicine/:id', medicineController.getMedicineOne)
  app.get('/drug_stores', drugStoresController.getDrugStores)
  app.get('/drug_stores/:id', drugStoresController.getDrugStoresOne)
};
