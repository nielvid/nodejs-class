import { bookStore } from './database.js'

export function homepage(req, res) {
  res.send('Welcome to AYZ BookStore')
}

export function getAllBooks(req, res) {
  res.send(bookStore)
}

export function getOneBook(req, res) {
  const id = req.params.id
  console.log(id, 'id of book requested for')
  const requestedBook = bookStore.find((element) => {
    return element.id == id
  })
  console.log(requestedBook)
  res.send(requestedBook)
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

export function postABook(req, res) {
  try {
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
    bookStore.push(data)
    res.send(bookStore)
  } catch (error) {
    throw new Error(error.message)
  }
}

export function updateABook(req, res) {}

export function deleteABook(req, res) {}

//  const book = {
//    author: 'Katherine Pen',
//    title: 'The return of Katherine',
//    yearPublished: 2002,
//    isbn: 'ad3qw2',
//  }
