const productDao = require('../models/productDao')
const errorService = require('../common/common')

const getCategory = async (next) => {
    const getCategory = await productDao.getCategory();
    return getCategory
}

const getDrinkList = async (next) => {
    const getDrinkList = await productDao.getDrinkList();
    return getDrinkList
}

const getDetailList = async (id, next) => {
    const getDetailList = await productDao.getDetailList(id);
    return getDetailList

}

const updateDrinkLike = async (user_id, product_id, isLike, next) => {
    const getDrinkLike = await productDao.getDrinkLike(product_id, user_id);
    if (getDrinkLike.length == 0)
        errorService.ErrorProcess('UPDATE OBJECT NOT EXIST');

    const setLike = await productDao.setDrinkLike(isLike, product_id, user_id)
    return true
}

module.exports = { getCategory, getDrinkList, getDetailList, updateDrinkLike }