const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.get("/", userControllers.getUsers);
router.get("/:id", userControllers.getUser);
router.post("/:id", userControllers.createUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
