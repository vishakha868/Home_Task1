const Joi = require('joi')
const validator=(req,res,next)=>{
// console.log("middleware called")
const userSchema = Joi.object({
    // id: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().required().min(4).max(130)
  });
  //
const { error } = userSchema.validate(req.body);
if (error?.isJoi) {
  res.status(400).json(error.message);
}
next();
}
module.exports={
    validator:validator,
}