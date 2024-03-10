const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const Medicine = sequelize.define('Medicine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  drug_store_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Make drug_store_id required
  },
});

module.exports = Medicine