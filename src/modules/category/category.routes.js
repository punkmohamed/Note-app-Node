
import express from 'express'
import {
    getAllUsers, signIn, signUp, deleteUsers, sortUsers,
    updateUsers, verfiyAccount, getUser, resetPassword,
    forgotPassword
} from './user.controller.js'
import checkEmail from '../../middleware/checkEmail.js'
// import verifyToken from './../../middleware/verifyToken.js';



const categoryRoute = express.Router()

categoryRoute.get('/', getAllUsers)

categoryRoute.post('/signup', checkEmail, signUp)
categoryRoute.post('/signin', signIn)
categoryRoute.patch('/user/update/:id', updateUsers)
categoryRoute.get('/user/:id', getUser)
categoryRoute.get('/verfiy/:email', verfiyAccount)
categoryRoute.post('/user/resetPasswordEmail', forgotPassword)
categoryRoute.patch('/user/resetPassword/:token', resetPassword)

categoryRoute.delete('/user/:id', deleteUsers)
categoryRoute.get('/sort', sortUsers)
// categoryRoute.put('/user/:id', updateUsers)

// categoryRoute.delete('/user/:id', deleteUsers)
// categoryRoute.get('/sort', sortUsers)

export default categoryRoute;