import { Router } from 'express'

import {
  deleteABook,
  getAllBooks,
  getOneBook,
  postABook,
  searchForBooks,
  updateABook,
} from '../controllers/books.controller.js'

const books = Router()



books.post('/', postABook)
books.get('/', getAllBooks)
books.get('/search/?', searchForBooks)
books.get('/:id', getOneBook)
books.patch('/:id', updateABook)
books.delete('/:id', deleteABook)

export default books

