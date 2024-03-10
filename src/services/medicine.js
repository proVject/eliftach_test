const {Op} = require("sequelize");
const MedicineModel = require("../models/medicine");
const getMedicine = (params, attributes) => {
  const options = {
    where: {}
  }
  if (params?.drug_store_id) options.where.drug_store_id = { [Op.eq]: params.drug_store_id }
  if (params?.limit) options.limit = params.limit
  if (params?.offset) options.offset = params.offset
  if (attributes?.length) options.attributes = attributes

  return MedicineModel.findAll(options)
}
const getMedicineOne = (id, attributes) => {
  const options = {
    where: { id: { [Op.eq]: id } },
  }

  if (attributes?.length) options.attributes = attributes
  return MedicineModel.findOne(options)
}

module.exports = {
  getMedicine,
  getMedicineOne
}