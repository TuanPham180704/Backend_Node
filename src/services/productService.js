const { products } = require("../models/productModel");

function getAllProducts() {
  return products;
}
function getProduct(id) {
  const product = products.find((pr) => pr.id === id);
  return product;
}
function createProduct(product) {
  products.push(product);
  return product;
}

function updateProduct(id, newData) {
  let product = products.find((pr) => pr.id === id);
  if (!product) return null;
  Object.assign(product, newData);
  return product;
}

function deleteProduct(id) {
  let index = products.findIndex((pr) => pr.id === id);
  if (!index) return null;
  return products.splice(index, 1)[0];
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
