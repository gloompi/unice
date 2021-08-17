import mongoose from "mongoose";

const color = mongoose.Schema({
  value: String,
  additionalPrice: Number,
  name: String,
});

const size = mongoose.Schema({
  value: String,
  additionalPrice: Number,
  name: String,
});

const density = mongoose.Schema({
  value: String,
  additionalPrice: Number,
  name: String,
});

const hairPart = mongoose.Schema({
  value: String,
  additionalPrice: Number,
  name: String,
});

const length = mongoose.Schema({
  value: Number,
  additionalPrice: Number,
  name: String,
});

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  images: [String],
  color: [{ type: mongoose.Schema.Types.ObjectId, ref: "Color" }],
  size: [{ type: mongoose.Schema.Types.ObjectId, ref: "Size" }],
  density: [{ type: mongoose.Schema.Types.ObjectId, ref: "Density" }],
  hairPart: [{ type: mongoose.Schema.Types.ObjectId, ref: "HairPart" }],
  length: [{ type: mongoose.Schema.Types.ObjectId, ref: "Length" }],
});

const brandSchema = mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  topImg: String,
  mainImg: String,
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const categorySchema = mongoose.Schema({
  name: String,
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const categoryGroupSchema = mongoose.Schema({
  name: String,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

export const Color = mongoose.model("Color", color);
export const Size = mongoose.model("Size", size);
export const Density = mongoose.model("Density", density);
export const HairPart = mongoose.model("HairPart", hairPart);
export const Length = mongoose.model("Length", length);
export const Product = mongoose.model("Product", productSchema);
export const Brand = mongoose.model("Brand", brandSchema);
export const Category = mongoose.model("Category", categorySchema);
export const CategoryGroup = mongoose.model(
  "CategoryGroup",
  categoryGroupSchema
);
