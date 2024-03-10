const orderService = require('../services/orders')

const createOrder = async (req, res) => {
  try {
    const {email, phone, address, drugs} = req.body
    if (!email || !phone || !address) return res.status(403).send({error: true, message: 'wrong order details'})
    if (!Array.isArray(drugs) && drugs?.length) return res.status(403).send({
      error: true,
      message: 'wrong order details'
    })

    const order = await orderService.createOrder({email, phone, address, drugs})

    res.status(201).send({success: true, order})
  } catch (e) {
    console.log(e)
    return res.status(500).send({error: true})
  }
}

module.exports = {
  createOrder
}