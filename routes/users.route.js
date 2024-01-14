import { Router } from 'express'
import { login, signUp } from '../controllers/users.controller.js'


const users = Router()


users.post('/', signUp)
users.post('/login', login)
// users.get('/', getAllUsers)


export default users
