
import express from 'express'
import {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getSpecficProduct,
    getProductByCategory
} from './products.controller.js'

// import verifyToken from './../../middleware/verifyToken.js';



const productsRoute = express.Router()

productsRoute.get('/', getAllUsers)

productsRoute.post('/signup', signUp)
productsRoute.post('/signin', signIn)
productsRoute.patch('/user/update/:id', updateUsers)
productsRoute.get('/user/:id', getUser)
productsRoute.get('/verfiy/:email', verfiyAccount)
productsRoute.post('/user/resetPasswordEmail', forgotPassword)
productsRoute.patch('/user/resetPassword/:token', resetPassword)

productsRoute.delete('/user/:id', deleteUsers)
productsRoute.get('/sort', sortUsers)
// productsRoute.put('/user/:id', updateUsers)

// productsRoute.delete('/user/:id', deleteUsers)
// productsRoute.get('/sort', sortUsers)

export default productsRoute;