// математика
class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
  static mult = (...numbers) => numbers.reduce((acc, num) => acc * num);
  static minus = (...numbers) => numbers.reduce((acc, num) => acc - num);
}

const data = 'test';

// СommonJS exporting
module.exports.add = MyMath.sum;
module.exports.subtract = MyMath.minus;
module.exports.data = data;
module.exports.MyMath = MyMath;

module.exports; // реальные експортириуемые данные

console.log('MyMath');

// module.exports = 10;
// bad
// exports = {}
// const exports = module.exports;

/*
123
00000123
*/