import { isAdmin } from "./helpers.js";
import {
  Brand,
  Category,
  CategoryGroup,
  Color,
  Density,
  HairPart,
  Length,
  Product,
  Size,
} from "../models/product.js";

const productNavigation = { name: "Product" };

const productDetailsNavigation = { name: "Product details" };

const brand = {
  resource: Brand,
  options: {
    navigation: productNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const category = {
  resource: Category,
  options: {
    navigation: productNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const categoryGroup = {
  resource: CategoryGroup,
  options: {
    navigation: productNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const color = {
  resource: Color,
  options: {
    navigation: productDetailsNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const density = {
  resource: Density,
  options: {
    navigation: productDetailsNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const hairPart = {
  resource: HairPart,
  options: {
    navigation: productDetailsNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const length = {
  resource: Length,
  options: {
    navigation: productDetailsNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const product = {
  resource: Product,
  options: {
    navigation: productNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const size = {
  resource: Size,
  options: {
    navigation: productDetailsNavigation,
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

export default [
  brand,
  category,
  categoryGroup,
  color,
  density,
  hairPart,
  length,
  product,
  size,
];
