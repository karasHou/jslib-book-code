/**
 * 实现一个深克隆
 * @param { * } target
 */
function clone(target) {
  const t = type(target);
  //  判断key的类型：如果是简单类型，直接返回
  if (t !== 'object' && t !== 'array') {
    return target;
  }

  let tmp;

  // 如果是对象
  if (t === 'object') {
    // 设置初始值
    tmp = {};
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        tmp[key] = clone(target[key]);
      }
    }
  } else {
    tmp = [];
    // 处理数组的情况
    target.forEach((el, i) => {
      tmp[i] = clone(el);
    });
  }

  return tmp;
}

/**
 * 返回对象的类型
 * [object Array]
 * [object Object] 等
 * @param {*} target
 * @returns
 */
function type(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}

let a = { b: { c: 1, d: 2 }, e: [{ f: 2 }] };
let b = clone(a);
a.b = 'bbb';

console.log(a);
console.log(b);
