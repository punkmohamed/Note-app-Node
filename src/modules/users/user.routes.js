
import express from 'express'
import {
    getAllUsers, signIn, signUp, deleteUsers, sortUsers,
    updateUsers, verfiyAccount, getUser, resetPassword,
    forgotPassword
} from './user.controller.js'
import checkEmail from '../../middleware/checkEmail.js'
import verifyToken from './../../middleware/verifyToken.js';



const userRoute = express.Router()

userRoute.get('/', getAllUsers)

userRoute.post('/signup', checkEmail, signUp)
userRoute.post('/signin', signIn)
userRoute.patch('/user/update/:id', verifyToken, updateUsers)
userRoute.get('/user/:id', getUser)
userRoute.patch('/verfiy/:token', verfiyAccount)
userRoute.post('/user/resetPasswordEmail', forgotPassword)
userRoute.patch('/user/resetPassword/:token', resetPassword)

userRoute.delete('/user/:id', deleteUsers)
userRoute.get('/sort', sortUsers)
// userRoute.put('/user/:id', updateUsers)

// userRoute.delete('/user/:id', deleteUsers)
// userRoute.get('/sort', sortUsers)

export default userRoute;