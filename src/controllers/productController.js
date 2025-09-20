const productService = require("../services/productService");
const { v4: uuidv4 } = require("uuid");
const { body, validationResult } = require("express-validator");

exports.validationResult = [
  body("name").notEmpty().withMessage("Name is require"),
  body("price").isFloat({ gt: 0 }).withMessage("Price must be > 0"),
];
exports.getProducts = (req, res) => {
  res.json(productService.getAllProducts());
};
exports.getProduct = (req, res, next) => {
  const product = productService.getProduct(req.params.id);
  if (!product) return next({ status: 404, messgae: "Product not found" });
  res.json(product);
};
exports.createProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 400, message: errors.array() });
  }
  const newProduct = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json(productService.createProduct(newProduct));
};
exports.updateProduct = (req, res, next) => {
  let product = userServices.updateUser(req.params.id, req.body);
  if (!product) return next({ status: 404, message: "Product not found" });
  res.status(200).json(product);
};
exports.deleteProduct = (req, res, next) => {
  const deleted = userServices.deleteUser(req.params.id);
  if (!deleted) return next({ status: 404, message: "Product not found" });
  res.json(deleted);
};
