import { Product } from '../../models/product.js'

export const showProduct = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findOne({ _id: id })

    if (product === null) {
      res.redirect('/404')
    } else {
      res.render('product', {
        stylePath: '/product.css',
        product,
      })
    }
  } catch (err) {
    res.redirect('/404')
  }
}