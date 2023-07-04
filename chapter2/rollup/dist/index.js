'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getType(obj) {
  return Object.prototype.toString.call(obj).replace(/^[object (\w+)]$/, '$1');
}

function clone(obj) {
  const type = getType(obj);

  // 简单数据类型
  if (!['object', 'array'].includes(type)) {
    return obj;
  }

  let newObj;

  if (type === 'object') {
    newObj = {};
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        newObj[key] = clone(object[key]);
      }
    }
  } else {
    newObj = [];

    for (let index = 0; index < obj.length; index++) {
      newObj[index] = clone(obj[index]);
    }
  }
}

exports.clone = clone;
