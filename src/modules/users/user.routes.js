
import express from 'express'
import { getAllUsers, signIn, signUp, deleteUsers, sortUsers, updateUsers, verfiyAccount } from './user.controller.js'
import checkEmail from '../../middleware/checkEmail.js'



const userRoute = express.Router()

userRoute.get('/', getAllUsers)

userRoute.post('/signup', checkEmail, signUp)
userRoute.get('/signin', signIn)
userRoute.put('/user/:id', updateUsers)
userRoute.get('/verfiy/:email', verfiyAccount)

userRoute.delete('/user/:id', deleteUsers)
userRoute.get('/sort', sortUsers)
// userRoute.put('/user/:id', updateUsers)

// userRoute.delete('/user/:id', deleteUsers)
// userRoute.get('/sort', sortUsers)

export default userRoute;