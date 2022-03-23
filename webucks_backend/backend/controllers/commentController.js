const commentService = require('../services/commentService')
const errorService = require('../common/common')


//create comment
const createComment = async (req, res, next) => {
    try {
        const { email, comment, product_id, parent_id } = req.body

        if (email === undefined || comment === undefined || product_id === undefined)
            errorService.ErrorProcess("KEY ERROR")

        const ret = await commentService.createComment(email, comment, product_id, parent_id)

        return res.status(201).json({ message: 'CREATE SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}
//update commnet
const updateComment = async (req, res, next) => {
    try {
        const { id, email, comment, product_id, parent_id } = req.body

        if (id === undefined || email === undefined || comment === undefined || product_id === undefined)
            errorService.ErrorProcess("KEY ERROR")

        const ret = await commentService.updateComment(id,email, comment, product_id, parent_id)

        return res.status(201).json({ message: 'UPDATE SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}
const deleteComment = async (req, res, next) => {
    try {
        const { id, email } = req.body

        if (email === undefined || id === undefined)
            errorService.ErrorProcess("KEY ERROR")

        const ret = await commentService.deleteComment(id, email)

        return res.status(201).json({ message: 'DELETE SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

module.exports = { createComment, updateComment, deleteComment }