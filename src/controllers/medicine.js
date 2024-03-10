const medicineServices = require('../services/medicine')

const getMedicine = async (req, res) => {
  try {
    const {drug_store_id, limit, offset} = req.query

    const medicine = await medicineServices.getMedicine({ drug_store_id, limit, offset })
    res.status(200).send({success: true, medicine})
  } catch (e) {
    console.log(e)
    return res.status(500).send({error: true})
  }
}
const getMedicineOne = async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (!id) return res.status(404).send({message: 'not found'})
    const medicine = await medicineServices.getMedicineOne(id)
    res.status(200).send({success: true, medicine: [medicine]})
  } catch (e) {
    console.log(e)
    return res.status(500).send({error: true})
  }
}

module.exports = {
  getMedicine,
  getMedicineOne
}