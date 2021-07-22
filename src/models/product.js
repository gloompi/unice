import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  description: String,
  image: String,
})

const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
})

export const Product = mongoose.model('Product', productSchema)
export const Category = mongoose.model('Category', categorySchema)
