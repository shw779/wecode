const express = require('express')
const router = express.Router()

const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
const commentRoute = require('./commentRoute')

router.use('/user', userRoute)
router.use('/', productRoute)
router.use('/drink_detail', commentRoute)
module.exports = router