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

const getDetailList = async (next) => {
    const getDetailList = await productDao.getDetailList();

    for (let i = 0; i < getDetailList.length; i++) {

        const getNutrition = await productDao.getNutrition(getDetailList[i]['id']);
        getDetailList[i]['nutrition'] = (getNutrition.length !== 0) ? getNutrition[0] : {}

        let getAllergies = await productDao.getAllergies(getDetailList[i]['id'])

        let arr = [];
        for (let j = 0; j < getAllergies.length; j++)
            arr.push(getAllergies[j]['allergy']);
        getDetailList[i]['allergies'] = arr;
    }
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