import mongoose, { Schema } from "mongoose";


const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
    versionKey: false
})

const noteModel = mongoose.model("Note", noteSchema)

export default noteModel