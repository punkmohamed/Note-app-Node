
import bcrypt from 'bcrypt'
import userModel from '../../database/models/user.model.js'




const checkEmail = async (req, res, next) => {
    let foundedUser = await userModel.findOne({ email: req.body.email })
    if (foundedUser) return res.status(409).json({ message: "email you are yousing already register" })

    req.body.password = bcrypt.hashSync(req.body.password, 8)



    next()
}
export default checkEmail