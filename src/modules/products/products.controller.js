
import bcrypt from 'bcrypt'

import sendOurEmail from '../../utli/sendEmail.js'
import jwt from 'jsonwebtoken'
import resetPasswordEmail from '../../utli/resetPassword/resetEmail.js'
import productModel from './../../../database/models/products.model';



const getAllProducts = async (req, res) => {
    let products = await productModel.find()
    res.json({ message: "success", products })
}


const addProduct = async (req, res) => {
    const { ...rest } = req.body
    let product = await productModel.insertMany({ rest })
    res.json({ message: "you just added  product successfully", product })
}

const updateProduct = async (req, res) => {
    const { ...rest } = req.body;
    let product = await productModel.findByIdAndUpdate(req.body.id, rest, { new: true });
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json({ message: "updated", product });
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    let product = await productModel.findByIdAndDelete({ id }, { new: true });
    if (!product)
        return res.status(404).json({ message: "Product not found" });
    res.json({ message: "deleted", product });
}

const getSpecficProduct = async (req, res) => {
    const { productName, id } = req.body
    try {
        const product = await productModel.findOne({ $or: [{ productName }, { id }] });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product found", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}
const getProductByCategory = async (req, res) => {
    const { category } = req.body
    try {
        const product = await productModel.find({ category });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product found", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}


const sortProduct = async (req, res) => {
    let product = await productModel.find().sort({ name: 1 })
    res.json({ messages: "sorted", product })
}



export {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getSpecficProduct,
    getProductByCategory
}