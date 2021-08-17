import { Product } from "../../models/product.js";

export const showProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ _id: id })
      .populate("color")
      .populate("size")
      .populate("density")
      .populate("hairPart")
      .populate("length")
      .exec();

    if (product === null) {
      res.redirect("/404");
    } else {
      res.render("product", {
        stylePath: "/product.css",
        product,
      });
    }
  } catch (err) {
    res.redirect("/404");
  }
};
