import mongoose, { Schema } from "mongoose";
//2- createing schema
const cartSchema = new mongoose.Schema({
    totalPrice: Number,
    priceAfterDiscount: Number,
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Products"
    }],
},
    {
        timestamps: true,
        versionKey: false
    })


// 3- create model
const cartModel = mongoose.model("Cart", cartSchema)
export default cartModel