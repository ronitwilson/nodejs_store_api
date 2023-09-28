const products = require("../model/products")
const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'get all products static route'})
}

const getAllProducts = async (req, res) => {
    getProduct =await Product.find({featured: true, name: "a first wooden table"})
    res.status(200).json({getProduct, nbHits: getProduct.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}