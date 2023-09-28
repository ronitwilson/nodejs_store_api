const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    getProduct =await Product.find({featured: true, name: "a first wooden table"})
    res.status(200).json({msg: 'get all products static route', getProduct, nbHits: getProduct.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name, sort} = req.query
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
    let result =  Product.find(queryObj)
    if (sort) {
        console.log("reach inner loop")
        const sortList = sort.split(',').join(' ')
        console.log(sortList)
        result.sort(sortList)
    } else {
        result.sort("createdAt")
    }
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}