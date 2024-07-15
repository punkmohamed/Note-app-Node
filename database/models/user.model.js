import mongoose, { Schema } from "mongoose";
//2- createing schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isConfrimed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    })


// 3- create model
const userModel = mongoose.model("User", userSchema)
export default userModel