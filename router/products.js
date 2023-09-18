const express = require('express')
const {getAllProductsStatic, getAllProducts} = require("../controller/products")
const router = express.Router()


// router.route('/').get((req, res)=> {res.send('reach the product get')})
// router.route('/static').get((req, res)=> {res.send('reach the static product get')})

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router