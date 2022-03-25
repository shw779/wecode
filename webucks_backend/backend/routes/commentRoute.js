const express = require('express')
const router = express.Router()
const verification = require('../middleware/validationToken')

const commentController = require('../controllers/commentController')

router.post('/create', verification.verification, commentController.createComment)
router.post('/delete', verification.verification, commentController.deleteComment)
router.put('/update', verification.verification, commentController.updateComment)


module.exports = router