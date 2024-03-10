const DrugStoreModel = require('../models/drug_stores')
const { Op } = require('sequelize')
const getDrugStores = (params, attributes) => {
  // can add filter/sort/other params
  const options = {
    where: {}
  }
  if (attributes?.length) options.attributes = attributes
  if (params?.limit) options.limit = params.limit
  if (params?.offset) options.offset = params.offset

  return DrugStoreModel.findAll(options)
}
const getDrugStoresOne = (id, attributes) => {
  const options = {
    where: { id: { [Op.eq]: id } },
  }

  if (attributes?.length) options.attributes = attributes
  return DrugStoreModel.findOne(options)
}

module.exports = {
  getDrugStores,
  getDrugStoresOne
}