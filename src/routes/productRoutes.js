const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productController");

router.get("/", productControllers.getProducts);
router.get("/:id", productControllers.getProducts);
router.post("/", productControllers.createProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;
