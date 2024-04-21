


const margeBy = (arrObj = [], key) => {
    let temp = {};
    arrObj.forEach(arr => {
        arr.forEach(obj => {
            temp[obj[key]] = {
                ...(temp[obj[key]] || {}),
                ...obj,
            }
            delete temp[obj[key]][key]
        })
    })

    return Object.keys(temp).map(k => ({
        [key]: k,
        ...temp[k]
    }))
}

module.exports = {
    margeBy
}