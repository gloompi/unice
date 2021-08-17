import { Brand, Product } from "../../models/product.js";
import { Banner } from "../../models/banner.js";

const CATEGORY_PRODUCTS_LIMIT = 8;
const BRANDS_LIMIT = 3;

const promises = ({ query: { page = 1, limit = 10 } }) => [
  Banner.find().exec(),
  Brand.find()
    .limit(BRANDS_LIMIT)
    .populate({
      path: "product",
      limit: CATEGORY_PRODUCTS_LIMIT,
    })
    .exec(),
  Product.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec(),
  Product.countDocuments(),
];

export const showHome = async (req, res) => {
  try {
    const [banners, brands, products, count] = await Promise.all(promises(req));

    res.render("index", {
      banners,
      brands,
      products,
      count,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/404");
  }
};
