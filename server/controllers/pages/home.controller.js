import { Category, Product } from '../../models/product.js'
import { Banner } from '../../models/banner.js'

const CATEGORY_PRODUCTS_LIMIT = 8

const getCategoryProducts = (name) => (
  Category.findOne({ name })
    .populate({
      path: 'product',
      limit: CATEGORY_PRODUCTS_LIMIT,
    })
    .exec()
)

const promises = ({ query: { page = 1, limit = 10 } }) => [
  getCategoryProducts('Curly'),
  getCategoryProducts('Body'),
  getCategoryProducts('Betty'),
  Banner.find().exec(),
  Product.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec(),
  Product.countDocuments(),
]

export const showHome = async (req, res) => {
  try {
    const [
      curlyProducts,
      bodyProducts,
      straightProducts,
      banners,
      products,
      count,
    ] = await Promise.all(promises(req))

    res.render('index', {
      curlyProducts: curlyProducts?.product || [],
      bodyProducts: bodyProducts?.product || [],
      straightProducts: straightProducts?.product || [],
      banners,
      products,
      count,
    })
  } catch (err) {
    console.error(err)
    res.render('index', { err })
  }
}
