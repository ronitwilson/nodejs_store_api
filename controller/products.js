const Product = require("../model/products")

const getAllProductsStatic = async (req, res) => {
    getProduct =await Product.find({featured: true, name: "a first wooden table", price:{$gt: 30} })
    res.status(200).json({msg: 'get all products static route', getProduct, nbHits: getProduct.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, numericFilters} = req.query
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
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

    const Regex = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(Regex, (match) => {
        return `-${operatorMap[match]}-`
    })
    console.log(filters)
    const options = ['price', 'rating']
    filters = filters.split(",").forEach((item) => {
        const [field, operator, number] = item.split("-")
        if(options.includes(field)){
            queryObj[field] = {[operator]: Number(number)}
        }
    })
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

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result  = result.limit(limit).skip(skip)
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}