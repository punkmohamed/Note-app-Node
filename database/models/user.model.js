import mongoose, { Schema } from "mongoose";
//2- createing schema
const locationSchema = new Schema({
    country: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isConfrimed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enums: ['User', 'Admin'],
        default: 'User'
    },
    locations: [locationSchema]
},
    {
        timestamps: true,
        versionKey: false
    })


// 3- create model
const userModel = mongoose.model("User", userSchema)
export default userModel