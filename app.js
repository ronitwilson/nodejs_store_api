require('dotenv').config()

const express = require('express')
const notFound = require('./middleware/not-found')
const errHandler = require('./middleware/error-handler');
const { startSession } = require('mongoose');
const port = process.env.PORT || 3000

const app = express(); 
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use(notFound)
app.use(errHandler)



const start  =  () => {
    try {
        app.listen(port, () => console.log(`listening on ${port}`))
    } catch (error) {
        console.log('error ', error)
    }
}

start()