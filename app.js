const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(123)
  res.status(200).send('Ok')
})
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})