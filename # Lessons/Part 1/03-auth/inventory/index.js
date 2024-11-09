const express = require('express')
const app = express()
const port = process.env.PORT || 5002

// @
const jwt = require('jsonwebtoken')
const { expressjwt: expressJwt } = require('express-jwt')

// @
const jwtSecret = 'my-secret-key'

// @
app.post('/inventory/auth', (req, res) => {
  const token = jwt.sign({ user: 'inventory-service' }, jwtSecret, { expiresIn: '1h' })
  res.send({ token })
})

// @ to access /inventory -> need to provide auth token
app.use(
  expressJwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({ path: ['/inventory/auth'] })
)

app.get('/inventory', (req, res) => {
  res.send('Hello from the Inventory Microservice!')
})

app.listen(port, () => {
  console.log(`Inventory Microservice listening on port ${port}`)
})
