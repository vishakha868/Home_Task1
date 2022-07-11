const Joi = require('joi')
const validator=(req,res,next)=>{
const userSchema = Joi.object({
    password: Joi.string().required().alphanum(),
    age: Joi.number().required().min(4).max(130)
  });
const { error } = userSchema.validate(req.body);
if (error?.isJoi) {
  res.status(400).json(error.message);
}
next();
}
module.exports={
    validator:validator,
}