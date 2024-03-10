const drugStoresServices = require('../services/drug_stores')

const getDrugStores = async (req, res) => {
  try {
    const { limit, offset } = req.query

    const drugStores = await drugStoresServices.getDrugStores({ limit, offset })
    res.status(200).send({success: true, drugStores})
  } catch (e) {
    console.log(e)
    return res.status(500).send({error: true})
  }
}
const getDrugStoresOne = async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (!id) return res.status(404).send({ message: 'not found' })
    const drugStore = await drugStoresServices.getDrugStoresOne(id)
    res.status(200).send({ success: true, drugStores: [drugStore] })
  } catch (e) {
    console.log(e)
    return res.status(500).send({ error: true })
  }
}

module.exports = {
  getDrugStores,
  getDrugStoresOne
}