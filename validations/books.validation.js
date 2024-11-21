
import Joi from 'joi'
import Exception from '../exception.js'

const bookSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  isbn: Joi.string().required(),
  yearPublished: Joi.number().required(),
  quantity: Joi.number().required(),
})


export const validateBook = (
  req,
  res,
  next
) => {
 

   const { error } = bookSchema.validate(req.body)
   if (error) {

     const { details } = error
     const message = details.map((i) => i.message).join(',')
     next(new Exception (message, 400))
   }
   next()
}



const borrowBookSchema = Joi.object({
  bookId: Joi.string().required(),
  dateToBeReturned: Joi.date().required()
})


export const validateBorrowBook = (req, res, next) => {
  const { error } = borrowBookSchema.validate(req.body)
  if (error) {
    const { details } = error
    const message = details.map((i) => i.message).join(',')
    next(new Exception(message, 400))
  }
  next()
}
