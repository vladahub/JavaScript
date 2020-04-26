// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    
    function addNumber(command) {
        var newKey = command.slice(firstSpace, secondSpace).trim();
        var numbers = command.slice(secondSpace, command.length).trim().split(',');
        
        phoneBook[newKey] = 
            (!phoneBook[newKey]? numbers : phoneBook[newKey].concat(numbers));
        //console.log('added');
        return undefined;
    }

    function isNumRemoved(command) {
        var number = command.slice(firstSpace).trim();
        var keys = Object.keys(phoneBook);

        for (var i = 0; i < keys.length; i++) {
            
            var key = keys[i], value = phoneBook[key];
            
            if(value.indexOf(number) != -1) {
                value.splice(value.indexOf(number), 1);

                //console.log('Number removed');
                return true;
            }   
        }
        //console.log('Number not removed');
        return false;
    }

    function showData(command) {
        var keys = Object.keys(phoneBook);
        for (var i = 0; i < keys.length; i++) {
            var value = phoneBook[keys[i]];
            if(value.length == 0) { delete phoneBook[keys[i]]; continue;}

            var elem = keys[i] + ': ' + value.join(', ');
            data.unshift(elem);
        }
        //console.log(data);
        return data;
    }
    // Массив для финальных данных
    var data = [];

    // Индексы первого и второго пробела, встречающихся в строке команды
    var firstSpace = command.indexOf(' ');
    var secondSpace = command.indexOf(' ', command.indexOf(' ') + 1);
    
    commandName = 
        (command.indexOf(' ') == -1? command : command.slice(0, command.indexOf(' ')));
    
    switch(commandName) {
        case 'ADD': return addNumber(command);
        case 'REMOVE_PHONE': return isNumRemoved(command);
        case 'SHOW': return showData(command);
    }
};
