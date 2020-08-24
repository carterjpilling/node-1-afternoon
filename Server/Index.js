const express = require('express');
const getterOfProducts = require('./getProducts');


const app = express()

const port = 4040

app.get('/api/products', getterOfProducts.getProducts)
app.get('/api/product/:id', getterOfProducts.getProduct)


app.listen(port, () => {
  console.log(`Server ${port}  is up and running friends.`)
})

