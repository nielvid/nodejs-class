import User from "../models/users.js"
import bcrypt from 'bcryptjs'


export async function signUp(req, res, next) {
 try {
     const data = req.body
     if (
       !data.firstName ||
       !data.lastName ||
       !data.email ||
       !data.password ||
       !data.address ||
       !data.address.houseNumber ||
       !data.address.street ||
       !data.address.city ||
       !data.address.state ||
       !data.address.country ||
       !data.telephone
     ) {
       throw new Error('Please fill all the fields')
     }
     const hashedPassword = await bcrypt.hash(data.password, 10)

     const user = await User.create({ ...data, password: hashedPassword })
     user.password = null
     res.send(user)
 } catch (error) {
     next(error)
 }

}


export async function login(req, res, next) {
 try {
     const data = req.body

     const user = await User.findOne({ email: data.email })

     if (!user) {
       throw new Error('User not found')
     }
     const isPasswordCorrect = await bcrypt.compare(
       data.password,
       user.password
     )
     if (!isPasswordCorrect) {
       throw new Error('invalid email/password')
     }
     user.password = null
     res.send(user)
 } catch (error) {
    next(error)
 }
}

