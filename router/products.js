const express = require('express')
const router = express.Router()

router.route('/').get((req, res)=> {res.send('reach the product get')})
router.route('/static').get((req, res)=> {res.send('reach the static product get')})

module.exports = router