const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const insertComment = async (user_id, comment, product_id, parent_id) => {
    return await prisma.$queryRaw`
    INSERT INTO comment(user_id, comment, product_id, parent_id) VALUES 
    (${user_id}, ${comment}, ${product_id}, ${parent_id});
    `
}

const getCommentId = async(id) =>{
    return await prisma.$queryRaw`
    SELECT id FROM comment WHERE id=${id};
    `
}

const updateComment = async(id,user_id, comment, product_id, parent_id) =>{
    return await prisma.$queryRaw`
    UPDATE comment SET user_id=${user_id}, comment=${comment}, product_id=${product_id}, 
    parent_id=${parent_id} WHERE id=${id};
    `
}

const deleteComment = async(id) =>{
    return await prisma.$queryRaw`
    DELETE FROM comment WHERE id = ${id};
    `
}

const getUseridOnComment = async(id, user_id) =>{
    return await prisma.$queryRaw`
    SELECT id FROM comment WHERE id=${id} and user_id=${user_id};
    `
}

module.exports = {insertComment, getCommentId, updateComment, deleteComment, getUseridOnComment}