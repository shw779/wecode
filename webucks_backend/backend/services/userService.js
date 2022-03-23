const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao')
const errorService = require('../common/common')


const signUp = async (email, password, username, address, phone_number, policy_agreed, next) => {
    if (password.length < 8)
        errorService.ErrorProcess("PASSWORD_TOO_SHORT")

    const existUser = await userDao.getUserByEmail(email)

    if (existUser.length > 0)
        errorService.ErrorProcess("EXISTING USER")

    const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())
    const createUser = await userDao.createdUser(email, encryptedPW, username, address, phone_number, policy_agreed)

    const getUserId = await userDao.getUserByEmail(email);
    if (getUserId.length == 0)
        errorService.ErrorProcess("NOT INSERT USER")

    for (let i = 1; i < 8; i++) {
        const insertLike = await userDao.insertLike(i, getUserId[0]["id"])
    }

    return createUser
}

const getUser = async (next) => {
    const getUser = await userDao.getUser();
    return getUser
}

const userLogin = async (email, password, next) => {
    const getUser = await userDao.getUserPwdByEmail(email);

    if (getUser.length == 0)
        errorService.ErrorProcess('INVALID USER')
    console.log(getUser);
    let flag = bcrypt.compareSync(password, getUser[0]['password']); // true
    if (!flag)
        errorService.ErrorProcess('INVALID USER')

    const makeToken = jwt.sign({ 'test': 'test' }, process.env.SECRETKEY, { expiresIn: '1h' })

    return makeToken
}

const updatePassword = async (email, password, next) => {
    const getUserPwd = await userDao.getUserPwdByEmail(email);

    if (getUserPwd.length == 0)
        errorService.ErrorProcess('UPDATE USER NOT EXIST');


    let flag = bcrypt.compareSync(password, getUserPwd[0]['password']); // true
    if (flag)
        errorService.ErrorProcess('PASSWORD IS SAME');

    const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())
    const setUsers = await userDao.setUserPwd(encryptedPW, email)

    return setUsers
}

module.exports = { signUp, getUser, updatePassword, userLogin }