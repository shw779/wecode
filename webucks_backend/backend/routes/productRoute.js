const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/category', productController.getCategory)
router.get('/drink', productController.getDrinkList)
router.get('/drink_detail', productController.getDetailList)
router.put('/drink_detail', productController.updateDrinkLike)


module.exports = router