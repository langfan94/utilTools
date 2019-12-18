import compareArray from './compareArray.js'

// 判断两个对象是否相等
export default function compareObject(obj, others) {
    try {
        if (Object.prototype.toString.call(obj) !== '[object Object]' || Object.prototype.toString.call(others) !== '[object Object]') {
            throw new Error('must be two Object');
        }

        let flag = true
        const resultList = Object.entries(obj).map(([key, value]) => {
            if (Object.prototype.toString.call(value) === '[object Object]') {
                if (Object.prototype.toString.call(others[key]) === '[object Object]') {
                    return compareObject(value, others[key]);
                }

                return false;
            }

            if (value instanceof Array) {
                if (others[key] instanceof Array) {
                    return compareArray(value, others[key]);
                }

                return false;
            }

            if (value === others[key]) {
                return true;
            }

            return false;
        })

        resultList.forEach(item => {
            if (!item) {
                flag = false;
            }
        })
        
        return flag;
    } catch (err) {
        console.log(err);
    }
    return false;
}


const obj = {
    name: 111,
    age: 12
};
const other = {
    name: 111,
    age: 12
};

compareObject(obj, other);