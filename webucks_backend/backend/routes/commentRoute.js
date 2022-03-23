const express = require('express')
const router = express.Router()

const commentController = require('../controllers/commentController')

router.post('/create', commentController.createComment)
router.post('/delete', commentController.deleteComment)
router.put('/update', commentController.updateComment)


module.exports = router