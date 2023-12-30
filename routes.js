import { Router } from "express";
import { bookStore } from "./database.js";
import { deleteABook, getAllBooks, getOneBook, homepage, postABook, searchForBooks, updateABook } from "./controller.js";

const route = Router()


route.get('/',homepage)

route.post('/books', postABook)
route.get('/books',getAllBooks)
route.get('/books/search/?', searchForBooks)
route.get('/books/:id', getOneBook)
route.patch('/books/:id', updateABook)
route.delete('/books/:id', deleteABook)



export default route