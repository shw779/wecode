const http = require('http')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


function ErrorProcess(message) {
    const error = new Error(message);
    error.statusCode = 400;
    throw error;
}

// get category list
async function getCategory(req, res) {
    try {
        const getCategory = await prisma.$queryRaw`
        SELECT id, name  FROM categories;
        `
        return res.status(201).json({ data: getCategory });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

//get drink list
async function getDrinkList(req, res) {
    try {
        const getDrinkList = await prisma.$queryRaw`
        SELECT  products.id, products.korean_name, products.english_name, categories.name as category, 
                categories.id as category_id,product_images.image_url
        FROM products
        INNER JOIN categories ON products.category_id=categories.id
        INNER JOIN product_images ON product_images.product_id=products.id;
        `
        return res.status(201).json({ data: getDrinkList });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//get drink detal info
async function getDetailList(req, res) {
    try {
        let getDetailList = await prisma.$queryRaw`
        SELECT  products.id, products.korean_name, products.english_name, product_images.image_url, products.description
        FROM products
        INNER JOIN product_images ON product_images.product_id=products.id
        `

        for (let i = 0; i < getDetailList.length; i++) {
            let getNutrition = await prisma.$queryRaw`
            SELECT caffein,fat,sugar,sodium,calories FROM nutritions WHERE id = ${getDetailList[i]['id']};
            `
            getDetailList[i]['nutrition'] = (getNutrition.length !== 0) ? getNutrition[0] : {}

            let getAllergies = await prisma.$queryRaw`
            SELECT allergies.name as allergy
            FROM products
            INNER JOIN products_allergies ON products_allergies.product_id=products.id
            INNER JOIN allergies ON products_allergies.allergy_id = allergies.id
            WHERE products.id = ${getDetailList[i]['id']}
            `

            let arr = [];
            for (let j = 0; j < getAllergies.length; j++)
                arr.push(getAllergies[j]['allergy']);
            getDetailList[i]['allergies'] = arr;

        }
        return res.status(201).json({ data: getDetailList });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//modify drinkLike
async function updateDrinkLike(req, res) {
    try {
        const { user_id, product_id, isLike } = req.body

        if (!product_id || !isLike || !user_id) {
            ErrorProcess('INSERT VALUE ERROR');
        }
        const getDrinkLike = await prisma.$queryRaw`
        SELECT  drinkLike.id
        FROM drinkLike
        INNER JOIN products ON drinkLike.product_id=products.id
        INNER JOIN user ON user.id=drinkLike.user_id
        WHERE products.id=${product_id} AND user.id=${user_id};
        `
        if (getDrinkLike.length == 0)
            ErrorProcess('UPDATE OBJECT NOT EXIST');

        const setLike = await prisma.$queryRaw`
        UPDATE drinkLike SET isLike=${isLike} WHERE product_id=${product_id} and user_id=${user_id};
        `
        return res.status(201).json({ message: 'UPDATED' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//insert user data
async function insertUser(req, res) {
    try {
        let { email, password, username, address, phone_number, policy_agreed } = req.body

        if (email === undefined || password === undefined)
            ErrorProcess("KEY ERROR")
        if (password.length < 8)
            ErrorProcess("PASSWORD_TOO_SHORT")
        if (policy_agreed === undefined)
            policy_agreed = true;

        const existUser = await prisma.$queryRaw`
        SELECT id FROM user WHERE email = ${email}; 
        `
        if (existUser.length > 0)
            ErrorProcess("EXISTING USER")

        // salt, hash 따로 생성
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await prisma.$queryRaw`
        INSERT INTO user(email, password, username, address, phone_number, policy_agreed) VALUES 
        (${email}, ${hash},${username},${address},${phone_number},${policy_agreed});
        `
        const user_id = await prisma.$queryRaw`
        SELECT id FROM user WHERE email=${email};
        `
        if (user_id.length == 0)
            return res.status(409).json({ message: "NOT INSERT USER" })

        for (let i = 1; i < 8; i++) {
            const insertLike = await prisma.$queryRaw`
            INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, ${i}, ${user_id[0]["id"]});
            `
        }

        return res.status(201).json({ message: "SIGNUP SUCCESS" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

//get users
async function getUser(req, res) {
    try {
        const getUsers = await prisma.$queryRaw`
        SELECT * FROM user;
        `
        return res.status(201).json({ data: getUsers });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//modify user password
async function updatePassword(req, res) {
    try {
        const { email, password } = req.body

        if (!email || !password)
            ErrorProcess('INSERT VALUE ERROR');

        const getUserPwd = await prisma.$queryRaw`
        SELECT password FROM user WHERE email=${email};
        `
        if (getUserPwd.length == 0)
            ErrorProcess('UPDATE USER NOT EXIST');
        if (getUserPwd[0]['password'] === password)
            ErrorProcess('PASSWORD IS SAME');

        const setUsers = await prisma.$queryRaw`
        UPDATE user SET password=${password} WHERE email=${email};
        `
        return res.status(201).json({ message: 'UPDATED' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//USER LOGIN
async function userLogin(req, res) {
    try {
        let { email, password } = req.body

        if (email === undefined || password === undefined)
            ErrorProcess('KEY ERROR')

        const getUsers = await prisma.$queryRaw`
        SELECT password FROM user WHERE email=${email};
        `
        if (getUsers.length == 0)
            ErrorProcess('INVALID USER')

        let flag = bcrypt.compareSync(password, getUsers[0]['password']); // true

        if (!flag)
            ErrorProcess('INVALID USER')

        const makeToken = jwt.sign({ 'test': 'test' }, process.env.SECRETKEY, { expiresIn: '1h' })

        return res.status(201).json({ message: 'LOGIN SUCCESS', token: makeToken });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//get users verification
async function verification(req, res) {
    try {
        let token = req.get('authorization')
        let check = jwt.verify(token, 'secretKey');

        return res.status(201).json({ message: 'SUCCESS' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

app.get('/category', getCategory)
app.get('/drink', getDrinkList)
app.get('/drink_detail', getDetailList)
app.put('/drink_detail', updateDrinkLike)
app.post('/users/signup', insertUser)
app.get('/users', getUser)
app.put('/users', updatePassword)
app.post('/user/login', userLogin)
app.get('/user/verification', verification)


const server = http.createServer(app) // express app 으로 서버를 만듭니다.

const start = async () => { // 서버를 시작하는 함수입니다.
    try {
        server.listen(8000, () => console.log(`Server is listening on 8000`))
    } catch (err) {
        console.error(err)
        await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
    }
}

start();
