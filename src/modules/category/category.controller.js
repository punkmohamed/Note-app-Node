
import bcrypt from 'bcrypt'
import userModel from '../../../database/models/user.model.js'
import sendOurEmail from '../../utli/sendEmail.js'
import jwt from 'jsonwebtoken'
import resetPasswordEmail from '../../utli/resetPassword/resetEmail.js'



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


    const token = jwt.sign({ id: foundedUser._id, role: foundedUser.role }, 'iti', { expiresIn: '24h' }, process.env.JWT_TOKEN_SECRET)
    res.status(200).json({ message: "sign in process successfully", token })
}

const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User found", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}
const updateUsers = async (req, res) => {
    const { password, ...rest } = req.body;

    if (password) {
        const hashedPassword = bcrypt.hashSync(password, 8);
        let user = await userModel.findByIdAndUpdate(req.params.id, { ...rest, password: hashedPassword }, { new: true });
        res.json({ message: "updated", user });
    } else {
        let user = await userModel.findByIdAndUpdate(req.params.id, rest, { new: true });
        res.json({ message: "updated", user });
    }
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
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const resetEmail = await userModel.findOne({ email });
        console.log(resetEmail);
        if (!resetEmail) {
            return res.status(404).json({ message: 'Email does not exist' });
        }
        const token = jwt.sign({ email }, 'iti', { expiresIn: '2m' }, process.env.JWT_TOKEN_SECRET)
        await resetPasswordEmail(email, token);
        res.json({ message: 'Email was sent', resetEmail, token: token })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const { token } = req.params
        let decoded;
        try {
            decoded = jwt.verify(token, 'iti');
        } catch (error) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        const email = decoded.email;
        const hashedPassword = bcrypt.hashSync(password, 8)
        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
        );
        res.json({ message: 'Your password was reset successfully' });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export {
    signUp,
    getAllUsers,
    signIn,
    updateUsers,
    deleteUsers,
    sortUsers,
    verfiyAccount,
    getUser,
    resetPassword,
    forgotPassword
}