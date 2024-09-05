const express = require('express')

const app = express()

app.use(express.json())

let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 }
  // Add more products as needed
  // ...
]

// Get all products

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/', (req, res) => {
    res.send('Welcome to the Product API')
})

app.listen(8080, (req, res) => {
    console.log('Server running on port 8080')
})