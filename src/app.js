const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello World! 🚀");
});
app.use(errorHandler);
module.exports = app;
