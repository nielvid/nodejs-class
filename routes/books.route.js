import { Router } from 'express'

import {
  borrowABook,
  deleteABook,
  getAllBooks,
  getOneBook,
  postABook,
  searchForBooks,
  updateABook,
} from '../controllers/books.controller.js'
import isLoggedIn from '../middleware/authentication.js'
import { validateBook, validateBorrowBook } from '../validations/books.validation.js'


const books = Router()



books.post('/', isLoggedIn, validateBook, postABook)
books.post('/borrow', isLoggedIn, validateBorrowBook,  borrowABook)
books.get('/', getAllBooks)
books.get('/search/?', searchForBooks)
books.get('/:id', getOneBook)

books.patch('/:id', isLoggedIn, updateABook)
books.delete('/',  deleteABook)

export default books

