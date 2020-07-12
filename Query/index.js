/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    //console.log(arguments);
    var res = collection.slice();
    //console.log(res);
    if (arguments.length === 1) {   return res;    }
    for(var i = 1; i < arguments.length; i++) {
        var func = arguments[i];
        //console.log(func.name);
        if(func.name === 'filter') {
            res = func(res);
        }
        //console.log(res);
    }
    for(var i = 1; i < arguments.length; i++) {
        var func = arguments[i];
        if(func.name === 'getSelection') {
            res = func(res);
        }
        //console.log(res);
    }
    //console.log(res);
    return res;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    //console.log(fields);

    return function getSelection(res) {
        var selection = res.slice();
        var result = [];

        for(var i in selection) {
            var obj = {};

            for(var j in fields) {
                if(selection[i].hasOwnProperty(fields[j])) {
                    obj[fields[j]] = selection[i][fields[j]];
                }
            }

            result.push(obj);
        }

        //console.log(result);
        return result;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var key = arguments[0];
    //var values = [].slice(1).call(arguments);
    return function filter(res) {
        //console.log(property, values);
        var nums = [];
        var result = [];
        for(var i in res) {
            for(var j in values) {
                //console.log(res[i]);
                if(res[i][property] === values[j]) {
                    nums.push(i);
                }
            }
        }
        //console.log(nums);
        for(var i in res) {
            if(nums.includes(i)) {
                result.push(res[i]);
            }
        }
        //console.log('FILTER', result);
        return result;

    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
