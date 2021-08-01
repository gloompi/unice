import { Product } from '../../models/product.js'

export const showProduct = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findOne({ id })

    res.render('product', {
      product,
    })
  } catch (err) {
    res.render('not-found', { err })
  }
}