function errorHandler(err, req, res, next) {
  console.log("Error :", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Interval Server Error",
  });
}

module.exports = errorHandler;
