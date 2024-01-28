import { bookStore } from '../database.js'
import Exception from '../exception.js'
import { Book } from '../models/books.js'
import User from '../models/users.js'

export function homepage(req, res) {
  res.send('Welcome to AYZ BookStore')
}

export async function getAllBooks(req, res) {
  const books = await Book.find()
  res.send(books)
}

export async function getOneBook(req, res) {
  const id = req.params.id
  const book = await Book.findOne({ _id: id })
  res.send(book)
}

export function searchForBooks(req, res) {
  try {
    const q = req.query
    let book
    if (q.title) {
      console.log('1111', q.title)
      book = bookStore.find((item) => {
        return item.title == q.title
      })
    }
    if (q.author) {
      book = bookStore.find((item) => {
        return item.author == q.author
      })
    }
    if (q.author && q.title) {
      book = bookStore.find((item) => {
        return item.title == q.title && item.author == q.author
      })
    }

    console.log(q, 'query object')
    res.send(book)
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function postABook(req, res) {
  try {
    
    const user = await User.findOne({ _id: req.user._id })
    if(!user){
      throw new Exception('author not found', 400)
    }
    const data = req.body
    if (!data.isbn) {
      throw new Error('isbn is required')
    }
    if (!data.author) {
      throw new Error('author is required')
    }

    if (data.isbn.length < 6) {
      throw new Error('isbn cannot be less than 6 characters')
    }
    if (!typeof data.yearPublised == 'number') {
      throw new Error('yearPublised should be a number')
    }
    const book = await Book.create({ ...data })

    // bookStore.push(data)
    res.send(book)
  } catch (error) {
    throw new Error(error.message)
  }
}

// Asignment
export function updateABook(req, res) {
 
}

export function deleteABook(req, res) {}
