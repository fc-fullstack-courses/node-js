const MyMath = require('./MyMath.js');

// графика
class MyComponent {
  render() {
    return 'Component rendered';
  }
}
MyMath.add(2, 2);
console.log('MyComponent');

module.exports = MyComponent;
