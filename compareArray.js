import compareObject from './compareObject.js';

// 判断两个数组是否相等
export default function compareArray(arr, others) {
    try {
        if (!(arr instanceof Array) || !(others instanceof Array)) {
            throw new Error('must be two Array');
        }

        if (arr.length !== others.length) {
            return false;
        }

        let flag = true;
        const resultList = arr.map((item, index) => {
            if (Object.prototype.toString.call(item) === '[object Number]' || Object.prototype.toString.call(item) === '[object String]') {
                if (item === others[index]) {
                    return true;
                }
                return false;
            }

            if (item instanceof Array) {
                if (others[index] instanceof Array) {
                    return compareArray(item, others[index])
                }

                return false;
            }

            if (Object.prototype.toString.call(item) === '[object Object]') {
                if (Object.prototype.toString.call(others[index]) === '[object Object]') {
                    return compareObject(item, others[index])
                }

                return false;
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
