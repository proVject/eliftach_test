const MedicineOrderModel = require("./medicine_orders");
const OrderModel = require("./orders");
const MedicineModel = require("./medicine");
const DrugStoreModel = require("./drug_stores");

module.exports = () => {
  OrderModel.hasMany(MedicineOrderModel, { foreignKey: 'order_id' });
  MedicineOrderModel.belongsTo(OrderModel, { foreignKey: 'order_id' });
  MedicineOrderModel.belongsTo(MedicineModel, { foreignKey: 'medicine_id' });
  MedicineModel.hasMany(MedicineOrderModel, { foreignKey: 'medicine_id' });
  DrugStoreModel.hasMany(MedicineModel, { foreignKey: 'drug_store_id' });
}