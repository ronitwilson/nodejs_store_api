const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    getProduct =await Product.find({featured: true, name: "a first wooden table"})
    res.status(200).json({msg: 'get all products static route', getProduct, nbHits: getProduct.length})
}

const getAllProducts = async (req, res) => {
    products =await Product.find(req.query)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}