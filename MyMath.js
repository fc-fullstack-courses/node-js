// математика
class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
  static mult = (...numbers) => numbers.reduce((acc, num) => acc * num);
  static minus = (...numbers) => numbers.reduce((acc, num) => acc - num);
}

const data = 'test';

// СommonJS exporting
exports.add = MyMath.sum;
exports.subtract = MyMath.minus;
exports.data = data;
exports.MyMath = MyMath;

// bad
// exports = {}
