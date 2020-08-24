const products = require('../products.json')

module.exports = {
  getProducts: (req, res) => {
    const { price } = req.query
    console.log(price)
    if (req.query.price) {
      const items = products.filter(element => element.price >= +price)
      return res.status(200).send(items)
    }
    res.status(200).send(products)
  },
  getProduct: (req, res) => {
    const { id } = req.params
    // console.log(id)
    const item = products.find(element => element.id === +id)

    if (!item) {
      res.status(500).send('Item not in list')
    } else {
      res.status(200).send(item)
    }
  }
}


