const MedicineModel = require('./medicine')
const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const DrugStore = sequelize.define('DrugStore', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = DrugStore