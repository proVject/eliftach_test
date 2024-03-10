const MedicineModel = require('./medicine')
const OrderModel = require('./orders')

const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const MedicineOrder = sequelize.define('MedicineOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Ensure at least one medicine is ordered
    },
  },
  medicine_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Make drug_store_id required
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Make drug_store_id required
  },
});

module.exports = MedicineOrder