const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    getProduct =await Product.find({featured: true, name: "a first wooden table"})
    res.status(200).json({msg: 'get all products static route', getProduct, nbHits: getProduct.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name} = req.query
    const queryObj = {}
    if (featured === 'true') {
        console.log(featured)
       queryObj.featured = featured==='true' ? true: false
    }
    if (company) {
        queryObj.company = company
    }
    if (name) {
        queryObj.name = { $regex: name, $options: 'i'}
    }
    console.log(queryObj)
    products =await Product.find(queryObj)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}