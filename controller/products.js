const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'get all products static route'})
}

const getAllProducts = async (req, res) => {
    getProduct =await Product.find({})
    res.status(200).json({getProduct})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}