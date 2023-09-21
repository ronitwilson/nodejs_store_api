require('dotenv').config()

const connectDB = require("./db/connect")

const Product = require("./model/products")

const jsonProducts = require("./products.json")

const start  =  async () => {
    try {
        await connectDB()
        Product.deleteMany()
        Product.create(jsonProducts)
        tests = await Product.find({})
        console.log(tests)
        console.log("success")
        process.exit(0)
    } catch (error) {
        console.log('error ', error)
        process.exit(1)
    }
}

start()