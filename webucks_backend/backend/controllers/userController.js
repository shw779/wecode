const userService = require('../services/userService')
const errorService = require('../common/common')
const jwt = require('jsonwebtoken')

const signUp = async (req, res, next) => {
    try {
        let { email, password, username, address, phone_number, policy_agreed } = req.body

        if (email === undefined || password === undefined)
            errorService.ErrorProcess("KEY ERROR")
        if (policy_agreed === undefined)
            policy_agreed = true;

        const user = await userService.signUp(email, password, username, address, phone_number, policy_agreed, next)

        return res.status(201).json({ message: 'SIGNUP_SUCESS' })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const getUser = async (req, res, next) => {
    try {
        const users = await userService.getUser(next);

        return res.status(201).json({ message: users })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}


const updatePassword = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password)
            errorService.ErrorProcess('INSERT VALUE ERROR');

        const updatePwd = await userService.updatePassword(email, password, next)

        return res.status(201).json({ message: 'UPDATED SUCCESS ' })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (email === undefined || password === undefined)
            errorService.ErrorProcess('KEY ERROR')

        const getToken = await userService.userLogin(email, password, next)

        return res.status(201).json({ message: 'LOGIN SUCCESS ', token: getToken })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const verification = async (req, res, next) => {
    try {
        let check = jwt.verify(req.headers.token, 'secretKey');

        return res.status(201).json({ message: 'SUCCESS' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}


module.exports = { signUp, getUser, updatePassword, userLogin, verification }