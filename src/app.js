const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! 🚀')
})


module.exports = app