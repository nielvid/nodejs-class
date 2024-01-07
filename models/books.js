import mongoose, {Schema, model} from 'mongoose'


const BookSchema = new Schema({

  author: {
    type: String,
    required: true
  },

  title: String,
  yearPublished: Number,

  isbn:{
    type: String,
    required: true
  }

})


export const Book = model('books',BookSchema)




