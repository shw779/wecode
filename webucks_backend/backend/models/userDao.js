const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const getUser = async () => {
    return await prisma.$queryRaw`
    SELECT * FROM user;
    `
}

const getUserByEmail = async (email) => {
    return await prisma.$queryRaw`
    SELECT id FROM user WHERE email = ${email};
    `
}

const createdUser = async (email, encryptedPW, username, address, phone_number, policy_agreed) => {
    return await prisma.$queryRaw`
    INSERT INTO user(email, password, username, address, phone_number, policy_agreed) VALUES 
    (${email}, ${encryptedPW},${username},${address},${phone_number},${policy_agreed});
    `
}

const insertLike = async (index, id) =>{
    return await prisma.$queryRaw`
    INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, ${index}, ${id});
    `
}
const getUserPwdByEmail = async (email) =>{
    return await prisma.$queryRaw`
        SELECT id, password FROM user WHERE email=${email};
    `
}
const setUserPwd = async (password, email) =>{
    return await prisma.$queryRaw`
    UPDATE user SET password=${password} WHERE email=${email};
    `
}
const getUserById = async (id) =>{
    return await prisma.$queryRaw`
        SELECT id FROM user WHERE id=${id};
    `
}
module.exports = {getUserByEmail, createdUser, insertLike, getUser, getUserPwdByEmail, setUserPwd, getUserById}