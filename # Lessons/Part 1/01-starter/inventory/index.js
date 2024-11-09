const express = require('express')
const app = express()
const port = process.env.PORT || 5002

app.get('/inventory', (req, res) => {
  res.send('Hello from the Inventory Microservice!')
})

app.listen(port, () => {
  console.log(`Inventory Microservice listening on port ${port}`)
})
