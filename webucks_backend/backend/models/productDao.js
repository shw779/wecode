const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getCategory = async () => {
    return await prisma.$queryRaw`
    SELECT id, name  FROM categories;
    `
}

const getDrinkList = async () => {
    return await prisma.$queryRaw`
    SELECT  products.id, products.korean_name, products.english_name, categories.name as category, 
                categories.id as category_id,product_images.image_url
    FROM products
    INNER JOIN categories ON products.category_id=categories.id
    INNER JOIN product_images ON product_images.product_id=products.id;
    `
}

const getDetailList = async (id) => {
    return await prisma.$queryRaw`
    SELECT  products.id, products.korean_name, products.english_name, products.description,
       product_images.image_url,
	   JSON_ARRAYAGG(a.name),
	   JSON_OBJECT(
		'caffein', nutritions.caffein, 
		'fat', nutritions.fat, 
		'sugar', nutritions.sugar, 
		'sodium', nutritions.sodium, 
		'calories', nutritions.calories) AS nutritonsInfo
    FROM products
    LEFT JOIN products_allergies pa ON pa.product_id = products.id
    LEFT JOIN allergies a ON pa.allergy_id = a.id
    INNER JOIN product_images ON product_images.product_id=products.id
    INNER JOIN nutritions ON products.id = nutritions.product_id
    GROUP BY products.id
    HAVING products.id = ${id};
    `
}

const getNutrition = async (id) => {
    return await prisma.$queryRaw`
    SELECT caffein,fat,sugar,sodium,calories FROM nutritions WHERE id = ${id};
    `
}

const getAllergies = async (id) => {
    return await prisma.$queryRaw`
    SELECT allergies.name as allergy
    FROM products
    INNER JOIN products_allergies ON products_allergies.product_id=products.id
    INNER JOIN allergies ON products_allergies.allergy_id = allergies.id
    WHERE products.id = ${id}
    `
}
const getDrinkLike = async (product_id, user_id) =>{
    return await prisma.$queryRaw`
    SELECT  drinkLike.id
    FROM drinkLike
    INNER JOIN products ON drinkLike.product_id=products.id
    INNER JOIN user ON user.id=drinkLike.user_id
    WHERE products.id=${product_id} AND user.id=${user_id};
    `
}

const setDrinkLike = async (isLike, product_id, user_id) =>{
    return await prisma.$queryRaw`
    UPDATE drinkLike SET isLike=${isLike} WHERE product_id=${product_id} and user_id=${user_id};
    `
}

module.exports = { getCategory, getDrinkList, getDetailList, getNutrition, getAllergies, getDrinkLike, setDrinkLike }