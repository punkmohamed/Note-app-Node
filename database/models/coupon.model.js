import mongoose, { Schema } from "mongoose";
//2- createing schema
const couponSchema = new mongoose.Schema({
    couponCode: String,
    value: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    deletedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    expireIn: Number
    // role: {
    //     type: String,
    //     enums: ['User', 'Admin'],
    //     default: 'User'
    // }
},
    {
        timestamps: true,
        versionKey: false
    })


// 3- create model
const couponModel = mongoose.model("Coupon", couponSchema)
export default couponModel