const clone = require('./lib/clone');

const a = { c: 1 };

const b = clone(a);

a.c = 3;

console.log(a);
console.log(b);
