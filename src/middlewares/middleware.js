const logger = (req,res,next) => {
    console.log(`Middleware log chạy : `,req.method,req.url)
    next()
}

module.exports  = logger