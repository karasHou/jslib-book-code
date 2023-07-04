export function getType(obj) {
  return Object.prototype.toString.call(obj).replace(/^[object (\w+)]$/, '$1');
}
