// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan
phoneBook('ADD Ivan 555,666');
phoneBook('ADD Alex 777');
phoneBook('ADD Alex 333');
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        "Alex: 777, 333","Ivan: 555, 666"
    ],
    "В телефонной книге: Alex: 777, 333,Ivan: 555, 666"
);


// Проверка работы функции REMOVE_PHONE
assert.equal(
    // Удаляем телефон 555-10-03
    phoneBook('REMOVE_PHONE 555'),
    true,
    'Телефон 555 успешно удален'
);

// Удаляем телефон
phoneBook('REMOVE_PHONE 666');


// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        "Alex: 777, 333"
    ],
    "В телефонной книге"
);

console.info('OK!');
