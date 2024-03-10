require('dotenv').config()
const app = require('express')();
const PORT = process.env.PORT || 4040;
const BASE_URL = process.env.BASE_URL || 'localhost';

app.get('/', (req, res) => {
  console.log(process.env)
  console.log('SSH_PRIVATE_KEY', process.env.SSH_PRIVATE_KEY)
  console.log('SERVER_IP', process.env.SERVER_IP)
  res.status(200).send('OK')
})
app.listen(PORT, () => {
  console.log(`server is running on ${BASE_URL}:${PORT}`)
})