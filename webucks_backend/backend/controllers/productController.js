const productService = require('../services/productService')
const errorService = require('../common/common')



const getCategory = async (req, res, next) => {
    try {
        const category = await productService.getCategory(next);

        return res.status(201).json({ data: category })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const getDrinkList = async (req, res, next) => {
    try {
        const category = await productService.getDrinkList(next);

        return res.status(201).json({ data: category })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const getDetailList = async (req, res, next) => {
    try {
        const category = await productService.getDetailList(next);

        return res.status(201).json({ data: category })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}

const updateDrinkLike = async (req, res, next) => {
    try {
        const { user_id, product_id, isLike } = req.body
        if (!product_id || isLike==undefined || !user_id)
            errorService.ErrorProcess('INSERT VALUE ERROR');

        const updateDrinkLike = await productService.updateDrinkLike(user_id, product_id, isLike, next);

        return res.status(201).json({ message: 'UPDATE SUCCESS' })
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message })
    }
}


module.exports = { getCategory, getDrinkList, getDetailList, updateDrinkLike }