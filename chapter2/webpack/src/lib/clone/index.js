// 引入模块，判断类型
const type = require('../type');

module.exports = function clone(source) {
  const t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }

  let target;

  if (t === 'object') {
    target = {};
    for (let i in source) {
      // 排除掉原型链的属性
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]); // 注意这里
      }
    }
  } else {
    target = [];
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]); // 注意这里
    }
  }

  return target;
};
