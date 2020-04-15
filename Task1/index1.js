/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    isTimeRight = (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60)? true : false;
    return isTimeRight;
};
