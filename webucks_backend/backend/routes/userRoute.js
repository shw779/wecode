const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/signup', userController.signUp)
router.get('/', userController.getUser)
router.put('/', userController.updatePassword)
router.post('/login', userController.userLogin)
router.get('/verification', userController.verification)
module.exports = router