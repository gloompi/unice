import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  images: [String],
  color: [String],
  size: [String],
  density: [String],
  hairPart: [String],
  length: [Number],
})

const brandSchema = mongoose.Schema({
  name: String,
  description: String,
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

const categorySchema = mongoose.Schema({
  name: String,
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

const categoryGroupSchema = mongoose.Schema({
  name: String,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
})

export const Product = mongoose.model('Product', productSchema)
export const Brand = mongoose.model('Brand', brandSchema)
export const Category = mongoose.model('Category', categorySchema)
export const CategoryGroup = mongoose.model('CategoryGroup', categoryGroupSchema)
