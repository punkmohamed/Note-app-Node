
import express from 'express'
import {
    getAllUsers, signIn, signUp, deleteUsers, sortUsers,
    updateUsers, verfiyAccount, getUser, resetPassword,
    forgotPassword
} from './user.controller.js'
import checkEmail from '../../middleware/checkEmail.js'
// import verifyToken from './../../middleware/verifyToken.js';



const cartRoute = express.Router()

cartRoute.get('/', getAllUsers)

cartRoute.post('/signup', checkEmail, signUp)
cartRoute.post('/signin', signIn)
cartRoute.patch('/user/update/:id', updateUsers)
cartRoute.get('/user/:id', getUser)
cartRoute.get('/verfiy/:email', verfiyAccount)
cartRoute.post('/user/resetPasswordEmail', forgotPassword)
cartRoute.patch('/user/resetPassword/:token', resetPassword)

cartRoute.delete('/user/:id', deleteUsers)
cartRoute.get('/sort', sortUsers)
// cartRoute.put('/user/:id', updateUsers)

// cartRoute.delete('/user/:id', deleteUsers)
// cartRoute.get('/sort', sortUsers)

export default cartRoute;