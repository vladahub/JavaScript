/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    function isHashtag(splittedString) {
        return splittedString.startsWith('#');
    }

    function deleteFirstChar(acc, splittedString) {
        return acc.concat(splittedString.slice(1));
    }

    // Разбиваем твит по пробелам, находим хештеги, возвращаем их названия без знака '#'
    return tweet.split(' ').filter(isHashtag).reduce(deleteFirstChar, []);
};


