const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const middlewareController = require('../middleware/validationToken')

router.post('/signup', userController.signUp)
router.get('/', userController.getUser)
router.put('/', userController.updatePassword)
router.post('/login', userController.userLogin)
router.get('/verification', middlewareController.verification)
module.exports = router