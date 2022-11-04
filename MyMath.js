// математика
class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
  static mult = (...numbers) => numbers.reduce((acc, num) => acc * num);
  static minus = (...numbers) => numbers.reduce((acc, num) => acc - num);
}

const data = 'test';

// СommonJS exporting
// module.exports.add = MyMath.sum;
// module.exports.subtract = MyMath.minus;
// module.exports.data = data;
// module.exports.MyMath = MyMath;
// module.exports; // реальные експортириуемые данные
// module.exports = 10;
// console.log('MyMath');

// bad
// exports = {}
// const exports = module.exports;

// ESModules exporting
export default MyMath; // экспорт по умолчанию можно делать один раз в файле
// export default data;
export const sum = MyMath.sum; // именной экспорт
export const number = 42;

/*
123
00000123
*/
