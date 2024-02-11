import { Router } from 'express'

import {
  borrowABook,
  deleteABook,
  deleteBooks,
  getAllBooks,
  getOneBook,
  postABook,
  searchForBooks,
  updateABook,
  uploadImage,
} from '../controllers/books.controller.js'
import isLoggedIn from '../middleware/authentication.js'
import { validateBook, validateBorrowBook } from '../validations/books.validation.js'
import { upload } from '../uploads/upload-helper.js'


const books = Router()

books.get('/', getAllBooks)
books.get('/search/?', searchForBooks)
books.get('/:id', getOneBook)


books.use(isLoggedIn) //endpoints from here down uses isLogged middlware for authentication
books.post('/', validateBook, postABook)
books.post('/borrow', validateBorrowBook,  borrowABook)
books.post('/upload-image',  upload.single("image"), uploadImage)
books.patch('/:id',  updateABook)
books.delete('/',  deleteBooks)
books.delete('/:id', deleteABook)

export default books

