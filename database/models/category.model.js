import mongoose, { Schema } from "mongoose";
//2- createing schema
const categorySchema = new mongoose.Schema({
    categoryName: String,
    image: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
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
const categoryModel = mongoose.model("Category", categorySchema)
export default categoryModel