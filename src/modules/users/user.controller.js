
import bcrypt from 'bcrypt'
import userModel from '../../../database/models/user.model.js'
import sendOurEmail from '../../utli/sendEmail.js'



const getAllUsers = async (req, res) => {
    let user = await userModel.find()
    res.json({ message: "success", user })
}


const signUp = async (req, res) => {

    let user = await userModel.insertMany(req.body)

    res.json({ message: "signup process successfully", user })
    sendOurEmail(req.body.email)
    // let user = new userModel(req.body) anthor way to add using just one
    // user.save()
}
const signIn = async (req, res) => {
    let foundedUser = await userModel.findOne({ email: req.body.email })
    if (!foundedUser || !bcrypt.compareSync(req.body.password, foundedUser.password))
        return res.status(404).json({ message: "email or password is not valid" })
    if (foundedUser.isConfrimed == false)
        return res.status(401).json({ message: "you did not activate your account" })
    res.status(200).json({ message: "sign in process successfully", foundedUser })
}

const updateUsers = async (req, res) => {
    let user = await userModel.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    res.json({ message: "updated", user })
}

const deleteUsers = async (req, res) => {
    let user = await userModel.findByIdAndDelete(req.params.id, { new: true })
    res.json({ messages: "deleted", user })
}
const sortUsers = async (req, res) => {
    let user = await userModel.find().sort({ name: 1 })
    res.json({ messages: "sorted", user })
}
const verfiyAccount = async (req, res) => {
    let user = await userModel.findOneAndUpdate({ email: req.params.email }, { isConfrimed: true }, { new: true })
    res.json({ messages: "welcome" })
}

export {
    signUp,
    getAllUsers,
    signIn,
    updateUsers,
    deleteUsers,
    sortUsers,
    verfiyAccount
}