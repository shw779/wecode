const userService = require('../services/userService')
const errorService = require('../common/common')
const jwt = require('jsonwebtoken')

const verification = async (req, res, next) => {
    try {
        const {id} = jwt.verify(req.headers.token, 'secretKey');
        const getUser = await userService.getUserById(id);
        console.log("hello :1", getUser);
        next()
        //return res.status(201).json({ message: 'SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}


module.exports = {verification}