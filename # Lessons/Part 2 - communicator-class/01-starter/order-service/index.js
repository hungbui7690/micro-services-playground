const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003

app.get('/api/orders', (req, res) => {
  res.json({ orders: [{ id: 1, user_id: 1, product_id: 1 }] })
})

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`)
})
