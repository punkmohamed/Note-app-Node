import mongoose, { Schema } from "mongoose";
//2- createing schema
const productSchema = new mongoose.Schema({
    productName: String,
    slug: String,
    priceAfterDiscount: Number,
    finalPrice: Number,
    image: String,
    stock: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
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
const productModel = mongoose.model("Products", productSchema)
export default productModel