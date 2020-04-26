/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    
    function toLowerCase(hashtag) {
        return hashtag.toLowerCase();
    }
    
    function isUnique(hashtag, index) {
        var match = '';

        for (var i = 0; i < hashtags.length; i++) {
            if(index == i) {
                continue;
            }
            if(hashtag === hashtags[i]) {
                match += hashtag;
            }
        }

        return !match;
    }
     // Список хештегов приводится к нижнему регистру с устранением повторяющихся
     // Вывод в формате единой строки с запятыми между хештегами
    return hashtags.map(toLowerCase).filter(isUnique).join(', ');

};
