(() => {
  var t = {
      12: (t, o, e) => {
        const r = e(184);
        t.exports = function t(o) {
          const e = r(o);
          if ('object' !== e && 'array' !== e) return o;
          let n;
          if ('object' === e) {
            n = {};
            for (let e in o) o.hasOwnProperty(e) && (n[e] = t(o[e]));
          } else {
            n = [];
            for (let e = 0; e < o.length; e++) n[e] = t(o[e]);
          }
          return n;
        };
      },
      184: (t) => {
        t.exports = function (t) {
          return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
        };
      },
    },
    o = {};
  function e(r) {
    if (o[r]) return o[r].exports;
    var n = (o[r] = { exports: {} });
    return t[r](n, n.exports, e), n.exports;
  }
  (() => {
    const t = { c: 1 },
      o = e(12)(t);
    (t.c = 3), console.log(t), console.log(o);
  })();
})();
