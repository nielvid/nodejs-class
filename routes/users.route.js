import { Router } from 'express'
import { login, signUp } from '../controllers/users.controller.js'
import { validateSignup } from '../validations/users.validation.js'


const users = Router()


users.post('/', validateSignup, signUp)
users.post('/login', login)
// users.get('/', getAllUsers)


export default users
