const userService = require('../services/userService')
const errorService = require('../common/common')
const jwt = require('jsonwebtoken')

const verification = async (req, res, next) => {
    try {
        let token = req.headers.token;
        if (!token)
            errorService.ErrorProcess("TOKEN IS NOT EXIST")

        const { id } = jwt.verify(token, process.env.SECRETKEY);
        
        const getUser = await userService.getUserById(id);
        if(!getUser)
            errorService.ErrorProcess("NOT EXIST USER")
        
        next()
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}


module.exports = { verification }