import mongoose from "mongoose";
//1-create database 
const dbConnection = mongoose.connect("mongodb://localhost:27017/Note-NodeApp")
    .then(() => console.log("connected"))
    .catch((err) => console.log("error"))

export default dbConnection