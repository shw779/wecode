const commentDao = require('../models/commentDao')
const userDao = require('../models/userDao')
const errorService = require('../common/common')

const createComment = async (email, comment, product_id, parent_id) => {
    const getUserId = await userDao.getUserByEmail(email);

    if (getUserId.length == 0)
        errorService.ErrorProcess("NOT EXIST USER")

    if (parent_id) {
        const getId = await commentDao.getCommentId(parent_id)
        if (getId.length == 0)
            errorService.ErrorProcess("PARENT_ID IS NOT EXIST")
    }
    const createUser = await commentDao.insertComment(getUserId[0]["id"], comment, product_id, parent_id);
}

const updateComment = async (id, email, comment, product_id, parent_id) => {
    const getUserId = await userDao.getUserByEmail(email);

    if (getUserId.length == 0)
        errorService.ErrorProcess("NOT EXIST USER")

    if (parent_id) {
        const getId = await commentDao.getCommentId(parent_id)
        if (getId.length == 0)
            errorService.ErrorProcess("PARENT_ID IS NOT EXIST")
    }
    if (parent_id === id)
        errorService.ErrorProcess("PARENT ID IS MUST DIFFERENT ID")

    const getUseridOnComment = await commentDao.getUseridOnComment(id, getUserId[0]['id']);
    if (getUseridOnComment.length === 0)
        errorService.ErrorProcess("NOT COMMENT USER") //해당 코멘트를 작성한 유저가 아님

    const updateUser = await commentDao.updateComment(id, getUserId[0]["id"], comment, product_id, parent_id);
}

const deleteComment = async (id, email) => {
    const getUserId = await userDao.getUserByEmail(email);
    if (getUserId.length == 0)
        errorService.ErrorProcess("NOT EXIST USER")

    const getUseridOnComment = await commentDao.getUseridOnComment(id, getUserId[0]['id']);
    if (getUseridOnComment.length === 0)
        errorService.ErrorProcess("NOT COMMENT USER") //해당 코멘트를 작성한 유저가 아님

    const deleteUser = await commentDao.deleteComment(id);
}

module.exports = { createComment, updateComment, deleteComment }