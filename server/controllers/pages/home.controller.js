import { Product } from '../../models/product.js'
import { Banner } from '../../models/banner.js'

const promises = ({ query: { page = 1, limit = 10 } }) => [
  Banner.find().exec(),
  Product.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec(),
  Product.countDocuments(),
]

export const showHome = async (req, res) => {
  try {
    const [banners, products, count] = await Promise.all(promises(req))

    res.render('index', {
      banners,
      products,
      count,
    })
  } catch (err) {
    res.render('index', { err })
  }
}