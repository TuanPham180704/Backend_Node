const userServices = require("../services/userService");
const { v4 : uuidv4 } = require("uuid");


exports.getUser = (req,res) => {
   res.json(userServices.getAllUser());
}

exports.getUser = (req,res,next) => {
   const user = userServices.getUser(req.params.id)
   if(!user) return next({status : 404,message : 'User not found'})
   res.json(user)
}

exports.createUser = (req,res) => {
   const newUser = {id : uuidv4(),...req.body}
   res.status(201).json(userServices.createUser(newUser))
}

exports.updateUser = (req,res,next) => {
   let user = userServices.updateUser(req.params.id,req.body)
   if(!user) return next({status : 404 , message : 'User not found'})
   res.status(200).json(user)
}
exports.deleteUser = (req,res,next) => {
   const deleted = userServices.deleteUser(req.params.id)
   if(!deleted) return next({status : 404 , message : 'User not found'})
   res.json(deleted)
}