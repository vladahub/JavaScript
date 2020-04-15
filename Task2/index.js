/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var addHours = Math.floor(interval / 60);
    var addMinutes = interval - 60 * addHours;

    hours += Math.floor((minutes + addMinutes) / 60);  // Добавка к часам за счет минут
    hours += addHours;
    minutes += addMinutes - 60 * Math.floor((minutes + addMinutes) / 60);  // Корректировка минут

    if(hours >= 24) {
        hours -= 24 * Math.floor(hours / 24);  // Переход к следующим суткам
    }
    
    var res = '';
    res += (hours < 10? '0': '');
    res += String(hours) + ':';
    res += (minutes < 10? '0': ''); 
    res += String(minutes);

    return res;

};
