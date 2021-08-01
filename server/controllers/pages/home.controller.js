import { Product } from '../../models/product.js'
import { Banner } from '../../models/banner.js'

export const showHome = async (req, res) => {
  const { page = 1, limit = 10 } = req.query

  try {
    const banners = await Banner.find().exec()
    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec()

    const count = await Product.countDocuments()

    res.render('index', {
      banners,
      products,
      count,
    })
  } catch (err) {
    res.render('index', { err })
  }
}