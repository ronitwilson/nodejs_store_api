require('dotenv').config()
require('express-async-errors')
const express = require('express')
const notFound = require('./middleware/not-found')
const errHandler = require('./middleware/error-handler');
const port = process.env.PORT || 3000
const connectDB = require('./db/connect')
const products = require('./router/products')

const app = express(); 
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1/products", products)
app.use(notFound)
app.use(errHandler)



const start  =  async () => {
    try {
        await connectDB()
        app.listen(port, () => console.log(`listening on ${port}`))
    } catch (error) {
        console.log('error ', error)
    }
}

start()