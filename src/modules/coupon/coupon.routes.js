
import express from 'express'
import {
    getAllUsers, signIn, signUp, deleteUsers, sortUsers,
    updateUsers, verfiyAccount, getUser, resetPassword,
    forgotPassword
} from './user.controller.js'
import checkEmail from '../../middleware/checkEmail.js'
// import verifyToken from './../../middleware/verifyToken.js';



const couponRoute = express.Router()

couponRoute.get('/', getAllUsers)

couponRoute.post('/signup', checkEmail, signUp)
couponRoute.post('/signin', signIn)
couponRoute.patch('/user/update/:id', updateUsers)
couponRoute.get('/user/:id', getUser)
couponRoute.get('/verfiy/:email', verfiyAccount)
couponRoute.post('/user/resetPasswordEmail', forgotPassword)
couponRoute.patch('/user/resetPassword/:token', resetPassword)

couponRoute.delete('/user/:id', deleteUsers)
couponRoute.get('/sort', sortUsers)
// couponRoute.put('/user/:id', updateUsers)

// couponRoute.delete('/user/:id', deleteUsers)
// couponRoute.get('/sort', sortUsers)

export default couponRoute;