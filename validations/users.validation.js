
import Joi from 'joi'

const schema = Joi.object({
  firstName: Joi.string().required().min(3),
  lastName: Joi.string().required().min(3),
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().required().min(8).alphanum(),
  telephone: Joi.string().required().min(11).max(14).trim(),
  
})


export const validateSignup = (
  req,
  res,
  next
) => {
  const { error } = schema.validate(req.body)
  if (error) {
    const { details } = error
    const message = details.map((i) => i.message).join(',')
    next(new Exception(message, 400))
  }
  next()
}



