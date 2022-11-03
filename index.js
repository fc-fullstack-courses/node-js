// CommonJS import
// const importedData = require('./MyMath');
// const MyComponent = require('./MyComponent');
// console.log('index');

const fs = require('fs/promises');
// const fs = require('fs').promises;

// fs.readFile('./text.txt', 'utf-8').then(console.log);
fs.readFile('./text.txt', 'utf-8').then((text) => {
  console.log(text);
});

// 1 resolving - ищет ваш файл
// 1.1 включаются core модули ноды
// 1.2 ищет файл по пути из строки в require
// 1.2.1 ищется файл с расширением js
// 1.2.2 ищется файл с расширением json
// 1.3 ищется папка с именем из require
// 1.3.1 package.json -> "main"
// 1.3.2 index.js
// 1.3.3 index.json
// 1.4 смотрит, есть ли папка
// 1.5 кидаем ошибку, нечего импортировать
// 2 loading - читаем файл
// 3 wrapping - оборачиват файл в функцию, при этом добавляет
//    тада все injected (require, __dirname, console ... )
// 4 evaluating - весь код файла запускается
// 5 caching - нода запоминает результат работы функции
//    из шага 3 которую запустили в шаге 4. После этого происходит експорт
//    того что лежит в module.exports
