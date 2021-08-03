/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.6.2 (2020-12-08)
 */
 !function() {
  "use strict";
  var $ = function() {}
    , i = function(e, o) {
      return function() {
          for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
          return e(o.apply(null, t))
      }
  }
    , at = function(t) {
      return function() {
          return t
      }
  }
    , ct = function(t) {
      return t
  };
  function y(o) {
      for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
      return function() {
          for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
          var e = r.concat(t);
          return o.apply(null, e)
      }
  }
  var x = function(n) {
      return function(t) {
          return !n(t)
      }
  }
    , u = function(t) {
      return function() {
          throw new Error(t)
      }
  }
    , c = at(!1)
    , b = at(!0)
    , t = tinymce.util.Tools.resolve("tinymce.ThemeManager")
    , ut = function() {
      return (ut = Object.assign || function(t) {
          for (var n, e = 1, o = arguments.length; e < o; e++)
              for (var r in n = arguments[e])
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          return t
      }
      ).apply(this, arguments)
  };
  function w(t, n) {
      var e = {};
      for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
              n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (e[o[r]] = t[o[r]]);
      return e
  }
  function S() {
      for (var t = 0, n = 0, e = arguments.length; n < e; n++)
          t += arguments[n].length;
      for (var o = Array(t), r = 0, n = 0; n < e; n++)
          for (var i = arguments[n], u = 0, a = i.length; u < a; u++,
          r++)
              o[r] = i[u];
      return o
  }
  var n, e, o, r, s, a, l = function() {
      return f
  }, f = (n = function(t) {
      return t.isNone()
  }
  ,
  {
      fold: function(t, n) {
          return t()
      },
      is: c,
      isSome: c,
      isNone: b,
      getOr: o = function(t) {
          return t
      }
      ,
      getOrThunk: e = function(t) {
          return t()
      }
      ,
      getOrDie: function(t) {
          throw new Error(t || "error: getOrDie called on none.")
      },
      getOrNull: at(null),
      getOrUndefined: at(undefined),
      or: o,
      orThunk: e,
      map: l,
      each: $,
      bind: l,
      exists: c,
      forall: b,
      filter: l,
      equals: n,
      equals_: n,
      toArray: function() {
          return []
      },
      toString: at("none()")
  }), d = function(e) {
      var t = at(e)
        , n = function() {
          return r
      }
        , o = function(t) {
          return t(e)
      }
        , r = {
          fold: function(t, n) {
              return n(e)
          },
          is: function(t) {
              return e === t
          },
          isSome: b,
          isNone: c,
          getOr: t,
          getOrThunk: t,
          getOrDie: t,
          getOrNull: t,
          getOrUndefined: t,
          or: n,
          orThunk: n,
          map: function(t) {
              return d(t(e))
          },
          each: function(t) {
              t(e)
          },
          bind: o,
          exists: o,
          forall: o,
          filter: function(t) {
              return t(e) ? r : f
          },
          toArray: function() {
              return [e]
          },
          toString: function() {
              return "some(" + e + ")"
          },
          equals: function(t) {
              return t.is(e)
          },
          equals_: function(t, n) {
              return t.fold(c, function(t) {
                  return n(e, t)
              })
          }
      };
      return r
  }, st = {
      some: d,
      none: l,
      from: function(t) {
          return null === t || t === undefined ? f : d(t)
      }
  }, m = function(o) {
      return function(t) {
          return e = typeof (n = t),
          (null === n ? "null" : "object" == e && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : e) === o;
          var n, e
      }
  }, g = function(n) {
      return function(t) {
          return typeof t === n
      }
  }, k = m("string"), C = m("object"), p = m("array"), O = g("boolean"), h = (r = undefined,
  function(t) {
      return r === t
  }
  ), v = function(t) {
      return !(null === (n = t) || n === undefined);
      var n
  }, _ = g("function"), lt = g("number"), T = function(t, n) {
      if (p(t)) {
          for (var e = 0, o = t.length; e < o; ++e)
              if (!n(t[e]))
                  return !1;
          return !0
      }
      return !1
  }, E = Array.prototype.slice, D = Array.prototype.indexOf, B = Array.prototype.push, A = function(t, n) {
      return D.call(t, n)
  }, M = function(t, n) {
      return -1 < A(t, n)
  }, F = function(t, n) {
      for (var e = 0, o = t.length; e < o; e++) {
          if (n(t[e], e))
              return !0
      }
      return !1
  }, I = function(t, n) {
      for (var e = [], o = 0; o < t; o++)
          e.push(n(o));
      return e
  }, R = function(t, n) {
      for (var e = [], o = 0; o < t.length; o += n) {
          var r = E.call(t, o, o + n);
          e.push(r)
      }
      return e
  }, V = function(t, n) {
      for (var e = t.length, o = new Array(e), r = 0; r < e; r++) {
          var i = t[r];
          o[r] = n(i, r)
      }
      return o
  }, ft = function(t, n) {
      for (var e = 0, o = t.length; e < o; e++) {
          n(t[e], e)
      }
  }, P = function(t, n) {
      for (var e = [], o = [], r = 0, i = t.length; r < i; r++) {
          var u = t[r];
          (n(u, r) ? e : o).push(u)
      }
      return {
          pass: e,
          fail: o
      }
  }, H = function(t, n) {
      for (var e = [], o = 0, r = t.length; o < r; o++) {
          var i = t[o];
          n(i, o) && e.push(i)
      }
      return e
  }, z = function(t, n, e) {
      return function(t, n) {
          for (var e = t.length - 1; 0 <= e; e--) {
              n(t[e], e)
          }
      }(t, function(t) {
          e = n(e, t)
      }),
      e
  }, N = function(t, n, e) {
      return ft(t, function(t) {
          e = n(e, t)
      }),
      e
  }, L = function(t, n) {
      return function(t, n, e) {
          for (var o = 0, r = t.length; o < r; o++) {
              var i = t[o];
              if (n(i, o))
                  return st.some(i);
              if (e(i, o))
                  break
          }
          return st.none()
      }(t, n, c)
  }, j = function(t, n) {
      for (var e = 0, o = t.length; e < o; e++) {
          if (n(t[e], e))
              return st.some(e)
      }
      return st.none()
  }, dt = function(t) {
      for (var n = [], e = 0, o = t.length; e < o; ++e) {
          if (!p(t[e]))
              throw new Error("Arr.flatten item " + e + " was not an array, input: " + t);
          B.apply(n, t[e])
      }
      return n
  }, U = function(t, n) {
      return dt(V(t, n))
  }, W = function(t, n) {
      for (var e = 0, o = t.length; e < o; ++e) {
          if (!0 !== n(t[e], e))
              return !1
      }
      return !0
  }, G = function(t) {
      var n = E.call(t, 0);
      return n.reverse(),
      n
  }, X = function(t, n) {
      return H(t, function(t) {
          return !M(n, t)
      })
  }, Y = function(t, n) {
      var e = E.call(t, 0);
      return e.sort(n),
      e
  }, q = function(t, n) {
      return 0 <= n && n < t.length ? st.some(t[n]) : st.none()
  }, K = function(t) {
      return q(t, 0)
  }, J = function(t) {
      return q(t, t.length - 1)
  }, Q = _(Array.from) ? Array.from : function(t) {
      return E.call(t)
  }
  , Z = function(t, n) {
      for (var e = 0; e < t.length; e++) {
          var o = n(t[e], e);
          if (o.isSome())
              return o
      }
      return st.none()
  }, tt = function(e) {
      return {
          is: function(t) {
              return e === t
          },
          isValue: b,
          isError: c,
          getOr: at(e),
          getOrThunk: at(e),
          getOrDie: at(e),
          or: function(t) {
              return tt(e)
          },
          orThunk: function(t) {
              return tt(e)
          },
          fold: function(t, n) {
              return n(e)
          },
          map: function(t) {
              return tt(t(e))
          },
          mapError: function(t) {
              return tt(e)
          },
          each: function(t) {
              t(e)
          },
          bind: function(t) {
              return t(e)
          },
          exists: function(t) {
              return t(e)
          },
          forall: function(t) {
              return t(e)
          },
          toOptional: function() {
              return st.some(e)
          }
      }
  }, nt = function(e) {
      return {
          is: c,
          isValue: c,
          isError: b,
          getOr: ct,
          getOrThunk: function(t) {
              return t()
          },
          getOrDie: function() {
              return u(String(e))()
          },
          or: function(t) {
              return t
          },
          orThunk: function(t) {
              return t()
          },
          fold: function(t, n) {
              return t(e)
          },
          map: function(t) {
              return nt(e)
          },
          mapError: function(t) {
              return nt(t(e))
          },
          each: $,
          bind: function(t) {
              return nt(e)
          },
          exists: c,
          forall: b,
          toOptional: st.none
      }
  }, mt = {
      value: tt,
      error: nt,
      fromOption: function(t, n) {
          return t.fold(function() {
              return nt(n)
          }, tt)
      }
  };
  (a = s = s || {})[a.Error = 0] = "Error",
  a[a.Value = 1] = "Value";
  var et, ot, rt = function(t, n, e) {
      return t.stype === s.Error ? n(t.serror) : e(t.svalue)
  }, it = function(t) {
      return {
          stype: s.Value,
          svalue: t
      }
  }, gt = function(t) {
      return {
          stype: s.Error,
          serror: t
      }
  }, pt = function(t) {
      return t.fold(gt, it)
  }, ht = function(t) {
      return rt(t, mt.error, mt.value)
  }, vt = it, bt = function(t) {
      var n = []
        , e = [];
      return ft(t, function(t) {
          rt(t, function(t) {
              return e.push(t)
          }, function(t) {
              return n.push(t)
          })
      }),
      {
          values: n,
          errors: e
      }
  }, yt = gt, xt = function(t, n) {
      return t.stype === s.Value ? n(t.svalue) : t
  }, wt = function(t, n) {
      return t.stype === s.Error ? n(t.serror) : t
  }, St = function(t, n) {
      return t.stype === s.Value ? {
          stype: s.Value,
          svalue: n(t.svalue)
      } : t
  }, kt = function(t, n) {
      return t.stype === s.Error ? {
          stype: s.Error,
          serror: n(t.serror)
      } : t
  }, Ct = Object.keys, Ot = Object.hasOwnProperty, _t = function(t, n) {
      for (var e = Ct(t), o = 0, r = e.length; o < r; o++) {
          var i = e[o];
          n(t[i], i)
      }
  }, Tt = function(t, e) {
      return Et(t, function(t, n) {
          return {
              k: n,
              v: e(t, n)
          }
      })
  }, Et = function(t, o) {
      var r = {};
      return _t(t, function(t, n) {
          var e = o(t, n);
          r[e.k] = e.v
      }),
      r
  }, Dt = function(t, n) {
      var e, o, r, i, u = {};
      return e = n,
      i = u,
      o = function(t, n) {
          i[n] = t
      }
      ,
      r = $,
      _t(t, function(t, n) {
          (e(t, n) ? o : r)(t, n)
      }),
      u
  }, Bt = function(t, e) {
      var o = [];
      return _t(t, function(t, n) {
          o.push(e(t, n))
      }),
      o
  }, At = function(t, n) {
      for (var e = Ct(t), o = 0, r = e.length; o < r; o++) {
          var i = e[o]
            , u = t[i];
          if (n(u, i, t))
              return st.some(u)
      }
      return st.none()
  }, Mt = function(t) {
      return Bt(t, function(t) {
          return t
      })
  }, Ft = function(t, n) {
      return It(t, n) ? st.from(t[n]) : st.none()
  }, It = function(t, n) {
      return Ot.call(t, n)
  }, Rt = function(t, n) {
      return It(t, n) && t[n] !== undefined && null !== t[n]
  }, Vt = function(u) {
      if (!p(u))
          throw new Error("cases must be an array");
      if (0 === u.length)
          throw new Error("there must be at least one case");
      var a = []
        , e = {};
      return ft(u, function(t, o) {
          var n = Ct(t);
          if (1 !== n.length)
              throw new Error("one and only one name per case");
          var r = n[0]
            , i = t[r];
          if (e[r] !== undefined)
              throw new Error("duplicate key detected:" + r);
          if ("cata" === r)
              throw new Error("cannot have a case named cata (sorry)");
          if (!p(i))
              throw new Error("case arguments must be an array");
          a.push(r),
          e[r] = function() {
              var t = arguments.length;
              if (t !== i.length)
                  throw new Error("Wrong number of arguments to case " + r + ". Expected " + i.length + " (" + i + "), got " + t);
              for (var e = new Array(t), n = 0; n < e.length; n++)
                  e[n] = arguments[n];
              return {
                  fold: function() {
                      if (arguments.length !== u.length)
                          throw new Error("Wrong number of arguments to fold. Expected " + u.length + ", got " + arguments.length);
                      return arguments[o].apply(null, e)
                  },
                  match: function(t) {
                      var n = Ct(t);
                      if (a.length !== n.length)
                          throw new Error("Wrong number of arguments to match. Expected: " + a.join(",") + "\nActual: " + n.join(","));
                      if (!W(a, function(t) {
                          return M(n, t)
                      }))
                          throw new Error("Not all branches were specified when using match. Specified: " + n.join(", ") + "\nRequired: " + a.join(", "));
                      return t[r].apply(null, e)
                  },
                  log: function(t) {
                      console.log(t, {
                          constructors: a,
                          constructor: r,
                          params: e
                      })
                  }
              }
          }
      }),
      e
  }, Pt = Object.prototype.hasOwnProperty, Ht = function(u) {
      return function() {
          for (var t = new Array(arguments.length), n = 0; n < t.length; n++)
              t[n] = arguments[n];
          if (0 === t.length)
              throw new Error("Can't merge zero objects");
          for (var e = {}, o = 0; o < t.length; o++) {
              var r = t[o];
              for (var i in r)
                  Pt.call(r, i) && (e[i] = u(e[i], r[i]))
          }
          return e
      }
  }, zt = Ht(function(t, n) {
      return C(t) && C(n) ? zt(t, n) : n
  }), Nt = Ht(function(t, n) {
      return n
  }), Lt = function(e) {
      var o, r = !1;
      return function() {
          for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
          return r || (r = !0,
          o = e.apply(null, t)),
          o
      }
  }, jt = Vt([{
      strict: []
  }, {
      defaultedThunk: ["fallbackThunk"]
  }, {
      asOption: []
  }, {
      asDefaultedOptionThunk: ["fallbackThunk"]
  }, {
      mergeWithThunk: ["baseThunk"]
  }]), Ut = function(t) {
      return jt.defaultedThunk(at(t))
  }, Wt = jt.strict, Gt = jt.asOption, Xt = jt.defaultedThunk, Yt = (jt.asDefaultedOptionThunk,
  jt.mergeWithThunk), qt = (Vt([{
      bothErrors: ["error1", "error2"]
  }, {
      firstError: ["error1", "value2"]
  }, {
      secondError: ["value1", "error2"]
  }, {
      bothValues: ["value1", "value2"]
  }]),
  function(t, n) {
      var e = {};
      return e[t] = n,
      e
  }
  ), Kt = function(t, n) {
      return e = n,
      o = {},
      _t(t, function(t, n) {
          M(e, n) || (o[n] = t)
      }),
      o;
      var e, o
  }, Jt = qt, $t = function(t) {
      return n = {},
      ft(t, function(t) {
          n[t.key] = t.value
      }),
      n;
      var n
  }, Qt = function(t, n) {
      var e, o, r, i, u, a = (e = [],
      o = [],
      ft(t, function(t) {
          t.fold(function(t) {
              e.push(t)
          }, function(t) {
              o.push(t)
          })
      }),
      {
          errors: e,
          values: o
      });
      return 0 < a.errors.length ? (u = a.errors,
      mt.error(dt(u))) : (i = n,
      0 === (r = a.values).length ? mt.value(i) : mt.value(zt(i, Nt.apply(undefined, r))))
  }, Zt = function(t) {
      return i(yt, dt)(t)
  }, tn = function(t, n) {
      var e, o, r = bt(t);
      return 0 < r.errors.length ? Zt(r.errors) : (e = r.values,
      o = n,
      0 < e.length ? vt(zt(o, Nt.apply(undefined, e))) : vt(o))
  }, nn = function(t) {
      var n = bt(t);
      return 0 < n.errors.length ? Zt(n.errors) : vt(n.values)
  }, en = function(t) {
      return C(t) && 100 < Ct(t).length ? " removed due to size" : JSON.stringify(t, null, 2)
  }, on = function(t, n) {
      return yt([{
          path: t,
          getErrorInfo: n
      }])
  }, rn = Vt([{
      field: ["key", "okey", "presence", "prop"]
  }, {
      state: ["okey", "instantiator"]
  }]), un = function(e, o, r) {
      return Ft(o, r).fold(function() {
          return t = r,
          n = o,
          on(e, function() {
              return 'Could not find valid *strict* value for "' + t + '" in ' + en(n)
          });
          var t, n
      }, vt)
  }, an = function(t, n, e) {
      var o = Ft(t, n).fold(function() {
          return e(t)
      }, ct);
      return vt(o)
  }, cn = function(a, c, t, s) {
      return t.fold(function(r, e, t, o) {
          var i = function(t) {
              var n = o.extract(a.concat([r]), s, t);
              return St(n, function(t) {
                  return qt(e, s(t))
              })
          }
            , u = function(t) {
              return t.fold(function() {
                  var t = qt(e, s(st.none()));
                  return vt(t)
              }, function(t) {
                  var n = o.extract(a.concat([r]), s, t);
                  return St(n, function(t) {
                      return qt(e, s(st.some(t)))
                  })
              })
          };
          return t.fold(function() {
              return xt(un(a, c, r), i)
          }, function(t) {
              return xt(an(c, r, t), i)
          }, function() {
              return xt(vt(Ft(c, r)), u)
          }, function(t) {
              return xt((e = t,
              o = Ft(n = c, r).map(function(t) {
                  return !0 === t ? e(n) : t
              }),
              vt(o)), u);
              var n, e, o
          }, function(t) {
              var n = t(c)
                , e = St(an(c, r, at({})), function(t) {
                  return zt(n, t)
              });
              return xt(e, i)
          })
      }, function(t, n) {
          var e = n(c);
          return vt(qt(t, s(e)))
      })
  }, sn = function(o) {
      return {
          extract: function(e, t, n) {
              return wt(o(n, t), function(t) {
                  return n = t,
                  on(e, function() {
                      return n
                  });
                  var n
              })
          },
          toString: function() {
              return "val"
          }
      }
  }, ln = function(t) {
      var u = fn(t)
        , a = z(t, function(n, t) {
          return t.fold(function(t) {
              return zt(n, Jt(t, !0))
          }, at(n))
      }, {});
      return {
          extract: function(t, n, e) {
              var o, r = O(e) ? [] : Ct(Dt(e, function(t) {
                  return t !== undefined && null !== t
              })), i = H(r, function(t) {
                  return !Rt(a, t)
              });
              return 0 === i.length ? u.extract(t, n, e) : (o = i,
              on(t, function() {
                  return "There are unsupported fields: [" + o.join(", ") + "] specified"
              }))
          },
          toString: u.toString
      }
  }, fn = function(a) {
      return {
          extract: function(t, n, e) {
              return o = t,
              r = e,
              i = n,
              u = V(a, function(t) {
                  return cn(o, r, t, i)
              }),
              tn(u, {});
              var o, r, i, u
          },
          toString: function() {
              return "obj{\n" + V(a, function(t) {
                  return t.fold(function(t, n, e, o) {
                      return t + " -> " + o.toString()
                  }, function(t, n) {
                      return "state(" + t + ")"
                  })
              }).join("\n") + "}"
          }
      }
  }, dn = function(r) {
      return {
          extract: function(e, o, t) {
              var n = V(t, function(t, n) {
                  return r.extract(e.concat(["[" + n + "]"]), o, t)
              });
              return nn(n)
          },
          toString: function() {
              return "array(" + r.toString() + ")"
          }
      }
  }, mn = function(a) {
      return {
          extract: function(t, n, e) {
              for (var o = [], r = 0, i = a; r < i.length; r++) {
                  var u = i[r].extract(t, n, e);
                  if (u.stype === s.Value)
                      return u;
                  o.push(u)
              }
              return nn(o)
          },
          toString: function() {
              return "oneOf(" + V(a, function(t) {
                  return t.toString()
              }).join(", ") + ")"
          }
      }
  }, gn = function(a, c) {
      return {
          extract: function(e, o, r) {
              var t, n, i = Ct(r), u = (t = e,
              n = i,
              dn(sn(a)).extract(t, ct, n));
              return xt(u, function(t) {
                  var n = V(t, function(t) {
                      return rn.field(t, t, Wt(), c)
                  });
                  return fn(n).extract(e, o, r)
              })
          },
          toString: function() {
              return "setOf(" + c.toString() + ")"
          }
      }
  }, pn = at(sn(vt)), hn = i(dn, fn), vn = rn.state, bn = rn.field, yn = function(e, n, o, r, i) {
      return Ft(r, i).fold(function() {
          return t = r,
          n = i,
          on(e, function() {
              return 'The chosen schema: "' + n + '" did not exist in branches: ' + en(t)
          });
          var t, n
      }, function(t) {
          return t.extract(e.concat(["branch: " + i]), n, o)
      })
  }, xn = function(r, i) {
      return {
          extract: function(n, e, o) {
              return Ft(o, r).fold(function() {
                  return t = r,
                  on(n, function() {
                      return 'Choice schema did not contain choice key: "' + t + '"'
                  });
                  var t
              }, function(t) {
                  return yn(n, e, o, i, t)
              })
          },
          toString: function() {
              return "chooseOn(" + r + "). Possible values: " + Ct(i)
          }
      }
  }, wn = sn(vt), Sn = function(t) {
      return hn(t)
  }, kn = function(o) {
      return {
          extract: function(t, n, e) {
              return o().extract(t, n, e)
          },
          toString: function() {
              return o().toString()
          }
      }
  }, Cn = function(n) {
      return sn(function(t) {
          return n(t).fold(yt, vt)
      })
  }, On = function(n, t) {
      return gn(function(t) {
          return pt(n(t))
      }, t)
  }, _n = function(t, n, e) {
      return ht((o = t,
      r = ct,
      i = e,
      u = n.extract([o], r, i),
      kt(u, function(t) {
          return {
              input: i,
              errors: t
          }
      })));
      var o, r, i, u
  }, Tn = function(t) {
      return t.fold(function(t) {
          throw new Error(Dn(t))
      }, ct)
  }, En = function(t, n, e) {
      return Tn(_n(t, n, e))
  }, Dn = function(t) {
      return "Errors: \n" + (n = t.errors,
      e = 10 < n.length ? n.slice(0, 10).concat([{
          path: [],
          getErrorInfo: function() {
              return "... (only showing first ten failures)"
          }
      }]) : n,
      V(e, function(t) {
          return "Failed path: (" + t.path.join(" > ") + ")\n" + t.getErrorInfo()
      }).join("\n")) + "\n\nInput object: " + en(t.input);
      var n, e
  }, Bn = xn, An = function(t, n) {
      return xn(t, Tt(n, fn))
  }, Mn = at(wn), Fn = function(e, o) {
      return sn(function(t) {
          var n = typeof t;
          return e(t) ? vt(t) : yt("Expected type: " + o + " but got: " + n)
      })
  }, In = Fn(lt, "number"), Rn = Fn(k, "string"), Vn = Fn(O, "boolean"), Pn = Fn(_, "function"), Hn = function(n) {
      var t = function(t, n) {
          for (var e = t.next(); !e.done; ) {
              if (!n(e.value))
                  return !1;
              e = t.next()
          }
          return !0
      };
      if (Object(n) !== n)
          return !0;
      switch ({}.toString.call(n).slice(8, -1)) {
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "RegExp":
      case "Blob":
      case "FileList":
      case "ImageData":
      case "ImageBitmap":
      case "ArrayBuffer":
          return !0;
      case "Array":
      case "Object":
          return Object.keys(n).every(function(t) {
              return Hn(n[t])
          });
      case "Map":
          return t(n.keys(), Hn) && t(n.values(), Hn);
      case "Set":
          return t(n.keys(), Hn);
      default:
          return !1
      }
  }, zn = sn(function(t) {
      return Hn(t) ? vt(t) : yt("Expected value to be acceptable for sending via postMessage")
  }), Nn = function(n) {
      return Cn(function(t) {
          return M(n, t) ? mt.value(t) : mt.error('Unsupported value: "' + t + '", choose one of "' + n.join(", ") + '".')
      })
  }, Ln = function(t) {
      return bn(t, t, Wt(), pn())
  }, jn = function(t, n) {
      return bn(t, t, Wt(), n)
  }, Un = function(t) {
      return jn(t, Rn)
  }, Wn = function(t, n) {
      return bn(t, t, Wt(), Nn(n))
  }, Gn = function(t) {
      return jn(t, Pn)
  }, Xn = function(t, n) {
      return bn(t, t, Wt(), fn(n))
  }, Yn = function(t, n) {
      return bn(t, t, Wt(), hn(n))
  }, qn = function(t, n) {
      return bn(t, t, Wt(), dn(n))
  }, Kn = function(t) {
      return bn(t, t, Gt(), pn())
  }, Jn = function(t, n) {
      return bn(t, t, Gt(), n)
  }, $n = function(t) {
      return Jn(t, In)
  }, Qn = function(t) {
      return Jn(t, Rn)
  }, Zn = function(t) {
      return Jn(t, Pn)
  }, te = function(t, n) {
      return Jn(t, fn(n))
  }, ne = function(t, n) {
      return bn(t, t, Ut(n), pn())
  }, ee = function(t, n, e) {
      return bn(t, t, Ut(n), e)
  }, oe = function(t, n) {
      return ee(t, n, In)
  }, re = function(t, n) {
      return ee(t, n, Rn)
  }, ie = function(t, n, e) {
      return ee(t, n, Nn(e))
  }, ue = function(t, n) {
      return ee(t, n, Vn)
  }, ae = function(t, n) {
      return ee(t, n, Pn)
  }, ce = function(t, n, e) {
      return ee(t, n, dn(e))
  }, se = function(t, n, e) {
      return ee(t, n, fn(e))
  }, le = function(t, n) {
      return vn(t, n)
  }, fe = function(t) {
      var n = t;
      return {
          get: function() {
              return n
          },
          set: function(t) {
              n = t
          }
      }
  }, de = function(t) {
      if (null === t || t === undefined)
          throw new Error("Node cannot be null or undefined");
      return {
          dom: t
      }
  }, me = {
      fromHtml: function(t, n) {
          var e = (n || document).createElement("div");
          if (e.innerHTML = t,
          !e.hasChildNodes() || 1 < e.childNodes.length)
              throw console.error("HTML does not have a single root node", t),
              new Error("HTML must have a single root node");
          return de(e.childNodes[0])
      },
      fromTag: function(t, n) {
          var e = (n || document).createElement(t);
          return de(e)
      },
      fromText: function(t, n) {
          var e = (n || document).createTextNode(t);
          return de(e)
      },
      fromDom: de,
      fromPoint: function(t, n, e) {
          return st.from(t.dom.elementFromPoint(n, e)).map(de)
      }
  }, ge = function(t, n) {
      var e = function(t, n) {
          for (var e = 0; e < t.length; e++) {
              var o = t[e];
              if (o.test(n))
                  return o
          }
          return undefined
      }(t, n);
      if (!e)
          return {
              major: 0,
              minor: 0
          };
      var o = function(t) {
          return Number(n.replace(e, "$" + t))
      };
      return he(o(1), o(2))
  }, pe = function() {
      return he(0, 0)
  }, he = function(t, n) {
      return {
          major: t,
          minor: n
      }
  }, ve = {
      nu: he,
      detect: function(t, n) {
          var e = String(n).toLowerCase();
          return 0 === t.length ? pe() : ge(t, e)
      },
      unknown: pe
  }, be = function(t, n) {
      var e = String(n).toLowerCase();
      return L(t, function(t) {
          return t.search(e)
      })
  }, ye = function(t, e) {
      return be(t, e).map(function(t) {
          var n = ve.detect(t.versionRegexes, e);
          return {
              current: t.name,
              version: n
          }
      })
  }, xe = function(t, e) {
      return be(t, e).map(function(t) {
          var n = ve.detect(t.versionRegexes, e);
          return {
              current: t.name,
              version: n
          }
      })
  }, we = function(t, n) {
      return -1 !== t.indexOf(n)
  }, Se = function(t, n) {
      return o = n,
      r = (e = t).length - n.length,
      "" === o || e.length >= o.length && e.substr(r, r + o.length) === o;
      var e, o, r
  }, ke = (et = /^\s+|\s+$/g,
  function(t) {
      return t.replace(et, "")
  }
  ), Ce = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Oe = function(n) {
      return function(t) {
          return we(t, n)
      }
  }, _e = [{
      name: "Edge",
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function(t) {
          return we(t, "edge/") && we(t, "chrome") && we(t, "safari") && we(t, "applewebkit")
      }
  }, {
      name: "Chrome",
      versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ce],
      search: function(t) {
          return we(t, "chrome") && !we(t, "chromeframe")
      }
  }, {
      name: "IE",
      versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
      search: function(t) {
          return we(t, "msie") || we(t, "trident")
      }
  }, {
      name: "Opera",
      versionRegexes: [Ce, /.*?opera\/([0-9]+)\.([0-9]+).*/],
      search: Oe("opera")
  }, {
      name: "Firefox",
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: Oe("firefox")
  }, {
      name: "Safari",
      versionRegexes: [Ce, /.*?cpu os ([0-9]+)_([0-9]+).*/],
      search: function(t) {
          return (we(t, "safari") || we(t, "mobile/")) && we(t, "applewebkit")
      }
  }], Te = [{
      name: "Windows",
      search: Oe("win"),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
      name: "iOS",
      search: function(t) {
          return we(t, "iphone") || we(t, "ipad")
      },
      versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
      name: "Android",
      search: Oe("android"),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
      name: "OSX",
      search: Oe("mac os x"),
      versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
      name: "Linux",
      search: Oe("linux"),
      versionRegexes: []
  }, {
      name: "Solaris",
      search: Oe("sunos"),
      versionRegexes: []
  }, {
      name: "FreeBSD",
      search: Oe("freebsd"),
      versionRegexes: []
  }, {
      name: "ChromeOS",
      search: Oe("cros"),
      versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }], Ee = {
      browsers: at(_e),
      oses: at(Te)
  }, De = "Firefox", Be = function(t) {
      var n = t.current
        , e = t.version
        , o = function(t) {
          return function() {
              return n === t
          }
      };
      return {
          current: n,
          version: e,
          isEdge: o("Edge"),
          isChrome: o("Chrome"),
          isIE: o("IE"),
          isOpera: o("Opera"),
          isFirefox: o(De),
          isSafari: o("Safari")
      }
  }, Ae = {
      unknown: function() {
          return Be({
              current: undefined,
              version: ve.unknown()
          })
      },
      nu: Be,
      edge: at("Edge"),
      chrome: at("Chrome"),
      ie: at("IE"),
      opera: at("Opera"),
      firefox: at(De),
      safari: at("Safari")
  }, Me = "Windows", Fe = "Android", Ie = "Solaris", Re = "FreeBSD", Ve = "ChromeOS", Pe = function(t) {
      var n = t.current
        , e = t.version
        , o = function(t) {
          return function() {
              return n === t
          }
      };
      return {
          current: n,
          version: e,
          isWindows: o(Me),
          isiOS: o("iOS"),
          isAndroid: o(Fe),
          isOSX: o("OSX"),
          isLinux: o("Linux"),
          isSolaris: o(Ie),
          isFreeBSD: o(Re),
          isChromeOS: o(Ve)
      }
  }, He = {
      unknown: function() {
          return Pe({
              current: undefined,
              version: ve.unknown()
          })
      },
      nu: Pe,
      windows: at(Me),
      ios: at("iOS"),
      android: at(Fe),
      linux: at("Linux"),
      osx: at("OSX"),
      solaris: at(Ie),
      freebsd: at(Re),
      chromeos: at(Ve)
  }, ze = function(t, n) {
      var e, o, r, i, u, a, c, s, l, f, d, m, g = Ee.browsers(), p = Ee.oses(), h = ye(g, t).fold(Ae.unknown, Ae.nu), v = xe(p, t).fold(He.unknown, He.nu);
      return {
          browser: h,
          os: v,
          deviceType: (o = h,
          r = t,
          i = n,
          u = (e = v).isiOS() && !0 === /ipad/i.test(r),
          a = e.isiOS() && !u,
          c = e.isiOS() || e.isAndroid(),
          s = c || i("(pointer:coarse)"),
          l = u || !a && c && i("(min-device-width:768px)"),
          f = a || c && !l,
          d = o.isSafari() && e.isiOS() && !1 === /safari/i.test(r),
          m = !f && !l && !d,
          {
              isiPad: at(u),
              isiPhone: at(a),
              isTablet: at(l),
              isPhone: at(f),
              isTouch: at(s),
              isAndroid: e.isAndroid,
              isiOS: e.isiOS,
              isWebView: at(d),
              isDesktop: at(m)
          })
      }
  }, Ne = function(t) {
      return window.matchMedia(t).matches
  }, Le = Lt(function() {
      return ze(navigator.userAgent, Ne)
  }), je = function() {
      return Le()
  }, Ue = function(t, n) {
      var e = t.dom;
      if (1 !== e.nodeType)
          return !1;
      var o = e;
      if (o.matches !== undefined)
          return o.matches(n);
      if (o.msMatchesSelector !== undefined)
          return o.msMatchesSelector(n);
      if (o.webkitMatchesSelector !== undefined)
          return o.webkitMatchesSelector(n);
      if (o.mozMatchesSelector !== undefined)
          return o.mozMatchesSelector(n);
      throw new Error("Browser lacks native selectors")
  }, We = function(t) {
      return 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType || 0 === t.childElementCount
  }, Ge = function(t, n) {
      return t.dom === n.dom
  }, Xe = function(t, n) {
      return e = t.dom,
      o = n.dom,
      r = e,
      i = o,
      u = Node.DOCUMENT_POSITION_CONTAINED_BY,
      0 != (r.compareDocumentPosition(i) & u);
      var e, o, r, i, u
  }, Ye = function(t, n) {
      return je().browser.isIE() ? Xe(t, n) : (e = n,
      o = t.dom,
      r = e.dom,
      o !== r && o.contains(r));
      var e, o, r
  }, qe = function(t) {
      return _(t) ? t : c
  }, Ke = function(t, n, e) {
      for (var o = t.dom, r = qe(e); o.parentNode; ) {
          o = o.parentNode;
          var i = me.fromDom(o)
            , u = n(i);
          if (u.isSome())
              return u;
          if (r(i))
              break
      }
      return st.none()
  }, Je = function(t, n, e) {
      var o = n(t)
        , r = qe(e);
      return o.orThunk(function() {
          return r(t) ? st.none() : Ke(t, n, r)
      })
  }, $e = function(t, n) {
      return Ge(t.element, n.event.target)
  }, Qe = function(t) {
      if (!Rt(t, "can") && !Rt(t, "abort") && !Rt(t, "run"))
          throw new Error("EventHandler defined by: " + JSON.stringify(t, null, 2) + " does not have can, abort, or run!");
      return En("Extracting event.handler", ln([ne("can", b), ne("abort", c), ne("run", $)]), t)
  }, Ze = function(e) {
      var n, o, r, i, t = (o = function(t) {
          return t.can
      }
      ,
      function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return N(n, function(t, n) {
              return t && o(n).apply(undefined, e)
          }, !0)
      }
      ), u = (r = n = e,
      i = function(t) {
          return t.abort
      }
      ,
      function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return N(r, function(t, n) {
              return t || i(n).apply(undefined, e)
          }, !1)
      }
      );
      return Qe({
          can: t,
          abort: u,
          run: function() {
              for (var n = [], t = 0; t < arguments.length; t++)
                  n[t] = arguments[t];
              ft(e, function(t) {
                  t.run.apply(undefined, n)
              })
          }
      })
  }, to = at, no = to("touchstart"), eo = to("touchmove"), oo = to("touchend"), ro = to("touchcancel"), io = to("mousedown"), uo = to("mousemove"), ao = to("mouseout"), co = to("mouseup"), so = to("mouseover"), lo = to("focusin"), fo = to("focusout"), mo = to("keydown"), go = to("keyup"), po = to("input"), ho = to("change"), vo = to("click"), bo = to("transitionend"), yo = to("selectstart"), xo = function(t) {
      return at("alloy." + t)
  }, wo = {
      tap: xo("tap")
  }, So = xo("focus"), ko = xo("blur.post"), Co = xo("paste.post"), Oo = xo("receive"), _o = xo("execute"), To = xo("focus.item"), Eo = wo.tap, Do = xo("longpress"), Bo = xo("sandbox.close"), Ao = xo("typeahead.cancel"), Mo = xo("system.init"), Fo = xo("system.touchmove"), Io = xo("system.touchend"), Ro = xo("system.scroll"), Vo = xo("system.resize"), Po = xo("system.attached"), Ho = xo("system.detached"), zo = xo("system.dismissRequested"), No = xo("system.repositionRequested"), Lo = xo("focusmanager.shifted"), jo = xo("slotcontainer.visibility"), Uo = xo("change.tab"), Wo = xo("dismiss.tab"), Go = xo("highlight"), Xo = xo("dehighlight"), Yo = function(t, n) {
      $o(t, t.element, n, {})
  }, qo = function(t, n, e) {
      $o(t, t.element, n, e)
  }, Ko = function(t) {
      Yo(t, _o())
  }, Jo = function(t, n, e) {
      $o(t, n, e, {})
  }, $o = function(t, n, e, o) {
      var r = ut({
          target: n
      }, o);
      t.getSystem().triggerEvent(e, n, r)
  }, Qo = function(t, n, e, o) {
      t.getSystem().triggerEvent(e, n, o.event)
  }, Zo = $t, tr = function(t, n) {
      return {
          key: t,
          value: Qe({
              abort: n
          })
      }
  }, nr = function(t) {
      return {
          key: t,
          value: Qe({
              run: function(t, n) {
                  n.event.prevent()
              }
          })
      }
  }, er = function(t, n) {
      return {
          key: t,
          value: Qe({
              run: n
          })
      }
  }, or = function(t, e, o) {
      return {
          key: t,
          value: Qe({
              run: function(t, n) {
                  e.apply(undefined, [t, n].concat(o))
              }
          })
      }
  }, rr = function(t) {
      return function(e) {
          return {
              key: t,
              value: Qe({
                  run: function(t, n) {
                      $e(t, n) && e(t, n)
                  }
              })
          }
      }
  }, ir = function(t, n, e) {
      var o, r, i = n.partUids[e];
      return r = i,
      er(o = t, function(t, n) {
          t.getSystem().getByUid(r).each(function(t) {
              Qo(t, t.element, o, n)
          })
      })
  }, ur = function(t, r) {
      return er(t, function(n, t) {
          var e = t.event
            , o = n.getSystem().getByDom(e.target).fold(function() {
              return Je(e.target, function(t) {
                  return n.getSystem().getByDom(t).toOptional()
              }, c).getOr(n)
          }, function(t) {
              return t
          });
          r(n, o, t)
      })
  }, ar = function(t) {
      return er(t, function(t, n) {
          n.cut()
      })
  }, cr = function(t, n) {
      return rr(t)(n)
  }, sr = rr(Po()), lr = rr(Ho()), fr = rr(Mo()), dr = (ot = _o(),
  function(t) {
      return er(ot, t)
  }
  ), mr = ("undefined" != typeof window || Function("return this;")(),
  function(t) {
      return t.dom.nodeName.toLowerCase()
  }
  ), gr = function(n) {
      return function(t) {
          return t.dom.nodeType === n
      }
  }, pr = gr(1), hr = gr(3), vr = gr(9), br = gr(11), yr = function(t) {
      return me.fromDom(t.dom.ownerDocument)
  }, xr = function(t) {
      return vr(t) ? t : yr(t)
  }, wr = function(t) {
      return me.fromDom(xr(t).dom.documentElement)
  }, Sr = function(t) {
      return me.fromDom(xr(t).dom.defaultView)
  }, kr = function(t) {
      return st.from(t.dom.parentNode).map(me.fromDom)
  }, Cr = kr, Or = function(t) {
      return st.from(t.dom.offsetParent).map(me.fromDom)
  }, _r = function(t) {
      return V(t.dom.childNodes, me.fromDom)
  }, Tr = function(t, n) {
      var e = t.dom.childNodes;
      return st.from(e[n]).map(me.fromDom)
  }, Er = function(n, e) {
      kr(n).each(function(t) {
          t.dom.insertBefore(e.dom, n.dom)
      })
  }, Dr = function(t, n) {
      var e;
      (e = t,
      st.from(e.dom.nextSibling).map(me.fromDom)).fold(function() {
          kr(t).each(function(t) {
              Ar(t, n)
          })
      }, function(t) {
          Er(t, n)
      })
  }, Br = function(n, e) {
      Tr(n, 0).fold(function() {
          Ar(n, e)
      }, function(t) {
          n.dom.insertBefore(e.dom, t.dom)
      })
  }, Ar = function(t, n) {
      t.dom.appendChild(n.dom)
  }, Mr = function(n, t) {
      ft(t, function(t) {
          Ar(n, t)
      })
  }, Fr = function(t) {
      t.dom.textContent = "",
      ft(_r(t), function(t) {
          Ir(t)
      })
  }, Ir = function(t) {
      var n = t.dom;
      null !== n.parentNode && n.parentNode.removeChild(n)
  }, Rr = function(t) {
      var n, e = _r(t);
      0 < e.length && (n = t,
      ft(e, function(t) {
          Er(n, t)
      })),
      Ir(t)
  }, Vr = function(t) {
      return t.dom.innerHTML
  }, Pr = function(t, n) {
      var e, o, r = yr(t).dom, i = me.fromDom(r.createDocumentFragment()), u = (e = n,
      (o = (r || document).createElement("div")).innerHTML = e,
      _r(me.fromDom(o)));
      Mr(i, u),
      Fr(t),
      Ar(t, i)
  }, Hr = function(t, n, e) {
      if (!(k(e) || O(e) || lt(e)))
          throw console.error("Invalid call to Attribute.set. Key ", n, ":: Value ", e, ":: Element ", t),
          new Error("Attribute value was not simple");
      t.setAttribute(n, e + "")
  }, zr = function(t, n, e) {
      Hr(t.dom, n, e)
  }, Nr = function(t, n) {
      var e = t.dom.getAttribute(n);
      return null === e ? undefined : e
  }, Lr = function(t, n) {
      return st.from(Nr(t, n))
  }, jr = function(t, n) {
      var e = t.dom;
      return !(!e || !e.hasAttribute) && e.hasAttribute(n)
  }, Ur = function(t, n) {
      t.dom.removeAttribute(n)
  }, Wr = function(t) {
      return n = t,
      e = !1,
      me.fromDom(n.dom.cloneNode(e));
      var n, e
  }, Gr = function(t) {
      var n, e, o, r = Wr(t);
      return n = r,
      e = me.fromTag("div"),
      o = me.fromDom(n.dom.cloneNode(!0)),
      Ar(e, o),
      Vr(e)
  }, Xr = Zo([{
      key: So(),
      value: Qe({
          can: function(t, n) {
              var e, o, r = n.event, i = r.originator, u = r.target;
              return o = u,
              !(Ge(e = i, t.element) && !Ge(e, o)) || (console.warn(So() + " did not get interpreted by the desired target. \nOriginator: " + Gr(i) + "\nTarget: " + Gr(u) + "\nCheck the " + So() + " event handlers"),
              !1)
          }
      })
  }]), Yr = /* */
  Object.freeze({
      __proto__: null,
      events: Xr
  }), qr = 0, Kr = function(t) {
      var n = (new Date).getTime();
      return t + "_" + Math.floor(1e9 * Math.random()) + ++qr + String(n)
  }, Jr = at("alloy-id-"), $r = at("data-alloy-id"), Qr = Jr(), Zr = $r(), ti = function(t, n) {
      Object.defineProperty(t.dom, Zr, {
          value: n,
          writable: !0
      })
  }, ni = function(t) {
      var n = pr(t) ? t.dom[Zr] : null;
      return st.from(n)
  }, ei = Kr, oi = ct, ri = function(n) {
      var t = function(t) {
          return function() {
              throw new Error("The component must be in a context to send: " + t + (n ? "\n" + Gr(n().element) + " is not in context." : ""))
          }
      };
      return {
          debugInfo: at("fake"),
          triggerEvent: t("triggerEvent"),
          triggerFocus: t("triggerFocus"),
          triggerEscape: t("triggerEscape"),
          build: t("build"),
          addToWorld: t("addToWorld"),
          removeFromWorld: t("removeFromWorld"),
          addToGui: t("addToGui"),
          removeFromGui: t("removeFromGui"),
          getByUid: t("getByUid"),
          getByDom: t("getByDom"),
          broadcast: t("broadcast"),
          broadcastOn: t("broadcastOn"),
          broadcastEvent: t("broadcastEvent"),
          isConnected: c
      }
  }, ii = ri(), ui = function(t) {
      return V(t, function(t) {
          return Se(t, "/*") ? t.substring(0, t.length - "/*".length) : t
      })
  }, ai = function(t, n) {
      var e = t.toString()
        , o = e.indexOf(")") + 1
        , r = e.indexOf("(")
        , i = e.substring(r + 1, o - 1).split(/,\s*/);
      return t.toFunctionAnnotation = function() {
          return {
              name: n,
              parameters: ui(i)
          }
      }
      ,
      t
  }, ci = Kr("alloy-premade"), si = function(t) {
      return Jt(ci, t)
  }, li = function(o) {
      return t = function(t) {
          for (var n = [], e = 1; e < arguments.length; e++)
              n[e - 1] = arguments[e];
          return o.apply(void 0, S([t.getApis(), t], n))
      }
      ,
      n = o.toString(),
      e = n.indexOf(")") + 1,
      r = n.indexOf("("),
      i = n.substring(r + 1, e - 1).split(/,\s*/),
      t.toFunctionAnnotation = function() {
          return {
              name: "OVERRIDE",
              parameters: ui(i.slice(1))
          }
      }
      ,
      t;
      var t, n, e, r, i
  }, fi = {
      init: function() {
          return di({
              readState: function() {
                  return "No State required"
              }
          })
      }
  }, di = function(t) {
      return t
  }, mi = function(t, r) {
      var i = {};
      return _t(t, function(t, o) {
          _t(t, function(t, n) {
              var e = Ft(i, n).getOr([]);
              i[n] = e.concat([r(o, t)])
          })
      }),
      i
  }, gi = function(t) {
      return {
          classes: t.classes !== undefined ? t.classes : [],
          attributes: t.attributes !== undefined ? t.attributes : {},
          styles: t.styles !== undefined ? t.styles : {}
      }
  }, pi = function(t, n) {
      return {
          cHandler: y.apply(undefined, [t.handler].concat(n)),
          purpose: t.purpose
      }
  }, hi = function(t) {
      return t.cHandler
  }, vi = function(t, n) {
      return {
          name: t,
          handler: n
      }
  }, bi = function(t, n, e) {
      var o, r, i = ut(ut({}, e), (o = t,
      r = {},
      ft(n, function(t) {
          r[t.name()] = t.handlers(o)
      }),
      r));
      return mi(i, vi)
  }, yi = function(t) {
      var n, i = _(n = t) ? {
          can: at(!0),
          abort: at(!1),
          run: n
      } : n;
      return function(t, n) {
          for (var e = [], o = 2; o < arguments.length; o++)
              e[o - 2] = arguments[o];
          var r = [t, n].concat(e);
          i.abort.apply(undefined, r) ? n.stop() : i.can.apply(undefined, r) && i.run.apply(undefined, r)
      }
  }, xi = function(t, n, e) {
      var o, r, i = n[e];
      return i ? function(u, a, t, c) {
          try {
              var n = Y(t, function(t, n) {
                  var e = t[a]
                    , o = n[a]
                    , r = c.indexOf(e)
                    , i = c.indexOf(o);
                  if (-1 === r)
                      throw new Error("The ordering for " + u + " does not have an entry for " + e + ".\nOrder specified: " + JSON.stringify(c, null, 2));
                  if (-1 === i)
                      throw new Error("The ordering for " + u + " does not have an entry for " + o + ".\nOrder specified: " + JSON.stringify(c, null, 2));
                  return r < i ? -1 : i < r ? 1 : 0
              });
              return mt.value(n)
          } catch (e) {
              return mt.error([e])
          }
      }("Event: " + e, "name", t, i).map(function(t) {
          var n = V(t, function(t) {
              return t.handler
          });
          return Ze(n)
      }) : (o = e,
      r = t,
      mt.error(["The event (" + o + ') has more than one behaviour that listens to it.\nWhen this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that can trigger it are: ' + JSON.stringify(V(r, function(t) {
          return t.name
      }), null, 2)]))
  }, wi = function(t, i) {
      var n = Bt(t, function(o, r) {
          return (1 === o.length ? mt.value(o[0].handler) : xi(o, i, r)).map(function(t) {
              var n = yi(t)
                , e = 1 < o.length ? H(i[r], function(n) {
                  return F(o, function(t) {
                      return t.name === n
                  })
              }).join(" > ") : o[0].name;
              return Jt(r, {
                  handler: n,
                  purpose: e
              })
          })
      });
      return Qt(n, {})
  }, Si = "alloy.base.behaviour", ki = function(t) {
      var n, e;
      return _n("custom.definition", fn([bn("dom", "dom", Wt(), fn([Ln("tag"), ne("styles", {}), ne("classes", []), ne("attributes", {}), Kn("value"), Kn("innerHtml")])), Ln("components"), Ln("uid"), ne("events", {}), ne("apis", {}), bn("eventOrder", "eventOrder", ((n = {})[_o()] = ["disabling", Si, "toggling", "typeaheadevents"],
      n[So()] = [Si, "focusing", "keying"],
      n[Mo()] = [Si, "disabling", "toggling", "representing"],
      n[po()] = [Si, "representing", "streaming", "invalidating"],
      n[Ho()] = [Si, "representing", "item-events", "tooltipping"],
      n[io()] = ["focusing", Si, "item-type-events"],
      n[no()] = ["focusing", Si, "item-type-events"],
      n[so()] = ["item-type-events", "tooltipping"],
      n[Oo()] = ["receiving", "reflecting", "tooltipping"],
      e = n,
      jt.mergeWithThunk(at(e))), Mn()), Kn("domModification")]), t)
  }, Ci = function(t, n) {
      var e = Nr(t, n);
      return e === undefined || "" === e ? [] : e.split(" ")
  }, Oi = function(t) {
      return t.dom.classList !== undefined
  }, _i = function(t, n) {
      return r = n,
      i = Ci(e = t, o = "class").concat([r]),
      zr(e, o, i.join(" ")),
      !0;
      var e, o, r, i
  }, Ti = function(t, n) {
      return r = n,
      0 < (i = H(Ci(e = t, o = "class"), function(t) {
          return t !== r
      })).length ? zr(e, o, i.join(" ")) : Ur(e, o),
      !1;
      var e, o, r, i
  }, Ei = function(t, n) {
      Oi(t) ? t.dom.classList.add(n) : _i(t, n)
  }, Di = function(t) {
      0 === (Oi(t) ? t.dom.classList : Ci(t, "class")).length && Ur(t, "class")
  }, Bi = function(t, n) {
      Oi(t) ? t.dom.classList.remove(n) : Ti(t, n),
      Di(t)
  }, Ai = function(t, n) {
      return Oi(t) && t.dom.classList.contains(n)
  }, Mi = function(n, t) {
      ft(t, function(t) {
          Ei(n, t)
      })
  }, Fi = function(n, t) {
      ft(t, function(t) {
          Bi(n, t)
      })
  }, Ii = function(t) {
      return t.style !== undefined && _(t.style.getPropertyValue)
  }, Ri = function(t) {
      return br(t)
  }, Vi = _(Element.prototype.attachShadow) && _(Node.prototype.getRootNode), Pi = at(Vi), Hi = Vi ? function(t) {
      return me.fromDom(t.dom.getRootNode())
  }
  : xr, zi = function(t) {
      return Ri(t) ? t : me.fromDom(xr(t).dom.body)
  }, Ni = function(t) {
      var n = Hi(t);
      return Ri(n) ? st.some(n) : st.none()
  }, Li = function(t) {
      return me.fromDom(t.dom.host)
  }, ji = function(t) {
      return v(t.dom.shadowRoot)
  }, Ui = function(t) {
      var n = hr(t) ? t.dom.parentNode : t.dom;
      if (n === undefined || null === n || null === n.ownerDocument)
          return !1;
      var e, o, r = n.ownerDocument;
      return Ni(me.fromDom(n)).fold(function() {
          return r.body.contains(n)
      }, (e = Ui,
      o = Li,
      function(t) {
          return e(o(t))
      }
      ))
  }, Wi = function() {
      return Gi(me.fromDom(document))
  }, Gi = function(t) {
      var n = t.dom.body;
      if (null === n || n === undefined)
          throw new Error("Body is not available yet");
      return me.fromDom(n)
  }, Xi = function(t, n, e) {
      if (!k(e))
          throw console.error("Invalid call to CSS.set. Property ", n, ":: Value ", e, ":: Element ", t),
          new Error("CSS value must be a string: " + e);
      Ii(t) && t.style.setProperty(n, e)
  }, Yi = function(t, n) {
      Ii(t) && t.style.removeProperty(n)
  }, qi = function(t, n, e) {
      var o = t.dom;
      Xi(o, n, e)
  }, Ki = function(t, n) {
      var e = t.dom;
      _t(n, function(t, n) {
          Xi(e, n, t)
      })
  }, Ji = function(t, n) {
      var e = t.dom;
      _t(n, function(t, n) {
          t.fold(function() {
              Yi(e, n)
          }, function(t) {
              Xi(e, n, t)
          })
      })
  }, $i = function(t, n) {
      var e = t.dom
        , o = window.getComputedStyle(e).getPropertyValue(n);
      return "" !== o || Ui(t) ? o : Qi(e, n)
  }, Qi = function(t, n) {
      return Ii(t) ? t.style.getPropertyValue(n) : ""
  }, Zi = function(t, n) {
      var e = t.dom
        , o = Qi(e, n);
      return st.from(o).filter(function(t) {
          return 0 < t.length
      })
  }, tu = function(t, n, e) {
      var o = me.fromTag(t);
      return qi(o, n, e),
      Zi(o, n).isSome()
  }, nu = function(t, n) {
      var e = t.dom;
      Yi(e, n),
      Lr(t, "style").map(ke).is("") && Ur(t, "style")
  }, eu = function(t) {
      return t.dom.offsetWidth
  }, ou = function(t) {
      return t.dom.value
  }, ru = function(t, n) {
      if (n === undefined)
          throw new Error("Value.set was undefined");
      t.dom.value = n
  }, iu = function(t) {
      var n, e, o, r = me.fromTag(t.tag);
      n = r,
      e = t.attributes,
      o = n.dom,
      _t(e, function(t, n) {
          Hr(o, n, t)
      }),
      Mi(r, t.classes),
      Ki(r, t.styles),
      t.innerHtml.each(function(t) {
          return Pr(r, t)
      });
      var i = t.domChildren;
      return Mr(r, i),
      t.value.each(function(t) {
          ru(r, t)
      }),
      t.uid,
      ti(r, t.uid),
      r
  }, uu = function(t, n) {
      return e = t,
      r = V(o = n, function(t) {
          return te(t.name(), [Ln("config"), ne("state", fi)])
      }),
      i = _n("component.behaviours", fn(r), e.behaviours).fold(function(t) {
          throw new Error(Dn(t) + "\nComplete spec:\n" + JSON.stringify(e, null, 2))
      }, function(t) {
          return t
      }),
      {
          list: o,
          data: Tt(i, function(t) {
              var n = t.map(function(t) {
                  return {
                      config: t.config,
                      state: t.state.init(t.config)
                  }
              });
              return function() {
                  return n
              }
          })
      };
      var e, o, r, i
  }, au = function(t) {
      var n, e, o = (n = Ft(t, "behaviours").getOr({}),
      e = H(Ct(n), function(t) {
          return n[t] !== undefined
      }),
      V(e, function(t) {
          return n[t].me
      }));
      return uu(t, o)
  }, cu = function(t, n, e) {
      var o, r, i, u = ut(ut({}, (o = t).dom), {
          uid: o.uid,
          domChildren: V(o.components, function(t) {
              return t.element
          })
      }), a = t.domModification.fold(function() {
          return gi({})
      }, gi), c = {
          "alloy.base.modification": a
      }, s = 0 < n.length ? function(n, t, e, o) {
          var r = ut({}, t);
          ft(e, function(t) {
              r[t.name()] = t.exhibit(n, o)
          });
          var i = mi(r, function(t, n) {
              return {
                  name: t,
                  modification: n
              }
          })
            , u = function(t) {
              return z(t, function(t, n) {
                  return ut(ut({}, n.modification), t)
              }, {})
          }
            , a = z(i.classes, function(t, n) {
              return n.modification.concat(t)
          }, [])
            , c = u(i.attributes)
            , s = u(i.styles);
          return gi({
              classes: a,
              attributes: c,
              styles: s
          })
      }(e, c, n, u) : a;
      return i = s,
      ut(ut({}, r = u), {
          attributes: ut(ut({}, r.attributes), i.attributes),
          styles: ut(ut({}, r.styles), i.styles),
          classes: r.classes.concat(i.classes)
      })
  }, su = function(t, n, e) {
      var o, r, i, u = {
          "alloy.base.behaviour": t.events
      };
      return o = e,
      r = t.eventOrder,
      i = bi(o, n, u),
      wi(i, r).getOrDie()
  }, lu = function(t) {
      var n, e, o, r, i, u, a, c, s, l, f, d, m, g = oi(t), p = g.events, h = w(g, ["events"]), v = (n = Ft(h, "components").getOr([]),
      V(n, gu)), b = ut(ut({}, h), {
          events: ut(ut({}, Yr), p),
          components: v
      });
      return mt.value((o = function() {
          return m
      }
      ,
      r = fe(ii),
      i = Tn(ki(e = b)),
      u = au(e),
      a = u.list,
      c = u.data,
      s = cu(i, a, c),
      l = iu(s),
      f = su(i, a, c),
      d = fe(i.components),
      m = {
          getSystem: r.get,
          config: function(t) {
              var n = c;
              return (_(n[t.name()]) ? n[t.name()] : function() {
                  throw new Error("Could not find " + t.name() + " in " + JSON.stringify(e, null, 2))
              }
              )()
          },
          hasConfigured: function(t) {
              return _(c[t.name()])
          },
          spec: e,
          readState: function(t) {
              return c[t]().map(function(t) {
                  return t.state.readState()
              }).getOr("not enabled")
          },
          getApis: function() {
              return i.apis
          },
          connect: function(t) {
              r.set(t)
          },
          disconnect: function() {
              r.set(ri(o))
          },
          element: l,
          syncComponents: function() {
              var t = _r(l)
                , n = U(t, function(t) {
                  return r.get().getByDom(t).fold(function() {
                      return []
                  }, function(t) {
                      return [t]
                  })
              });
              d.set(n)
          },
          components: d.get,
          events: f
      }))
  }, fu = function(t) {
      var n = me.fromText(t);
      return du({
          element: n
      })
  }, du = function(t) {
      var n = En("external.component", ln([Ln("element"), Kn("uid")]), t)
        , e = fe(ri());
      n.uid.each(function(t) {
          ti(n.element, t)
      });
      var o = {
          getSystem: e.get,
          config: st.none,
          hasConfigured: c,
          connect: function(t) {
              e.set(t)
          },
          disconnect: function() {
              e.set(ri(function() {
                  return o
              }))
          },
          getApis: function() {
              return {}
          },
          element: n.element,
          spec: t,
          readState: at("No state"),
          syncComponents: $,
          components: at([]),
          events: {}
      };
      return si(o)
  }, mu = ei, gu = function(n) {
      return Ft(n, ci).fold(function() {
          var t = n.hasOwnProperty("uid") ? n : ut({
              uid: mu("")
          }, n);
          return lu(t).getOrDie()
      }, function(t) {
          return t
      })
  }, pu = si;
  function hu(o, r) {
      var t = function(t) {
          var n = r(t);
          if (n <= 0 || null === n) {
              var e = $i(t, o);
              return parseFloat(e) || 0
          }
          return n
      }
        , i = function(r, t) {
          return N(t, function(t, n) {
              var e = $i(r, n)
                , o = e === undefined ? 0 : parseInt(e, 10);
              return isNaN(o) ? t : t + o
          }, 0)
      };
      return {
          set: function(t, n) {
              if (!lt(n) && !n.match(/^[0-9]+$/))
                  throw new Error(o + ".set accepts only positive integer values. Value was " + n);
              var e = t.dom;
              Ii(e) && (e.style[o] = n + "px")
          },
          get: t,
          getOuter: t,
          aggregate: i,
          max: function(t, n, e) {
              var o = i(t, e);
              return o < n ? n - o : 0
          }
      }
  }
  var vu = hu("height", function(t) {
      var n = t.dom;
      return Ui(t) ? n.getBoundingClientRect().height : n.offsetHeight
  })
    , bu = function(t) {
      return vu.get(t)
  }
    , yu = function(t) {
      return vu.getOuter(t)
  }
    , xu = function(e, o) {
      return {
          left: e,
          top: o,
          translate: function(t, n) {
              return xu(e + t, o + n)
          }
      }
  }
    , wu = xu
    , Su = function(t, n) {
      return t !== undefined ? t : n !== undefined ? n : 0
  }
    , ku = function(t) {
      var n = t.dom.ownerDocument
        , e = n.body
        , o = n.defaultView
        , r = n.documentElement;
      if (e === t.dom)
          return wu(e.offsetLeft, e.offsetTop);
      var i = Su(null == o ? void 0 : o.pageYOffset, r.scrollTop)
        , u = Su(null == o ? void 0 : o.pageXOffset, r.scrollLeft)
        , a = Su(r.clientTop, e.clientTop)
        , c = Su(r.clientLeft, e.clientLeft);
      return Cu(t).translate(u - c, i - a)
  }
    , Cu = function(t) {
      var n, e = t.dom, o = e.ownerDocument.body;
      return o === e ? wu(o.offsetLeft, o.offsetTop) : Ui(t) ? (n = e.getBoundingClientRect(),
      wu(n.left, n.top)) : wu(0, 0)
  }
    , Ou = hu("width", function(t) {
      return t.dom.offsetWidth
  })
    , _u = function(t) {
      return Ou.get(t)
  }
    , Tu = function(t) {
      return Ou.getOuter(t)
  }
    , Eu = function(t) {
      var n = me.fromDom(function(t) {
          if (Pi() && v(t.target)) {
              var n = me.fromDom(t.target);
              if (pr(n) && ji(n) && t.composed && t.composedPath) {
                  var e = t.composedPath();
                  if (e)
                      return K(e)
              }
          }
          return st.from(t.target)
      }(t).getOr(t.target))
        , e = function() {
          return t.stopPropagation()
      }
        , o = function() {
          return t.preventDefault()
      }
        , r = i(o, e);
      return {
          target: n,
          x: t.clientX,
          y: t.clientY,
          stop: e,
          prevent: o,
          kill: r,
          raw: t
      }
  }
    , Du = function(t, n, e, o, r) {
      var i, u, a = (i = e,
      u = o,
      function(t) {
          i(t) && u(Eu(t))
      }
      );
      return t.dom.addEventListener(n, a, r),
      {
          unbind: y(Bu, t, n, a, r)
      }
  }
    , Bu = function(t, n, e, o) {
      t.dom.removeEventListener(n, e, o)
  }
    , Au = function(t) {
      var n = t !== undefined ? t.dom : document
        , e = n.body.scrollLeft || n.documentElement.scrollLeft
        , o = n.body.scrollTop || n.documentElement.scrollTop;
      return wu(e, o)
  }
    , Mu = function(t, n, e) {
      var o = (e !== undefined ? e.dom : document).defaultView;
      o && o.scrollTo(t, n)
  }
    , Fu = function(t, n, e, o) {
      return {
          x: t,
          y: n,
          width: e,
          height: o,
          right: t + e,
          bottom: n + o
      }
  }
    , Iu = function(t) {
      var n, e, o = t === undefined ? window : t, r = o.document, i = Au(me.fromDom(r));
      return e = (n = o) === undefined ? window : n,
      st.from(e.visualViewport).fold(function() {
          var t = o.document.documentElement
            , n = t.clientWidth
            , e = t.clientHeight;
          return Fu(i.left, i.top, n, e)
      }, function(t) {
          return Fu(Math.max(t.pageLeft, i.left), Math.max(t.pageTop, i.top), t.width, t.height)
      })
  }
    , Ru = function(o, t) {
      return o.view(t).fold(at([]), function(t) {
          var n = o.owner(t)
            , e = Ru(o, n);
          return [t].concat(e)
      })
  }
    , Vu = /* */
  Object.freeze({
      __proto__: null,
      view: function(t) {
          var n;
          return (t.dom === document ? st.none() : st.from(null === (n = t.dom.defaultView) || void 0 === n ? void 0 : n.frameElement)).map(me.fromDom)
      },
      owner: yr
  })
    , Pu = function(o) {
      var t, n, e, r, i = me.fromDom(document), u = Au(i);
      return (t = o,
      e = (n = Vu).owner(t),
      r = Ru(n, e),
      st.some(r)).fold(y(ku, o), function(t) {
          var n = Cu(o)
            , e = z(t, function(t, n) {
              var e = Cu(n);
              return {
                  left: t.left + e.left,
                  top: t.top + e.top
              }
          }, {
              left: 0,
              top: 0
          });
          return wu(e.left + n.left + u.left, e.top + n.top + u.top)
      })
  }
    , Hu = function(t, n, e, o) {
      return {
          x: t,
          y: n,
          width: e,
          height: o,
          right: t + e,
          bottom: n + o
      }
  }
    , zu = function(t) {
      var n = ku(t)
        , e = Tu(t)
        , o = yu(t);
      return Hu(n.left, n.top, e, o)
  }
    , Nu = function(t) {
      var n = Pu(t)
        , e = Tu(t)
        , o = yu(t);
      return Hu(n.left, n.top, e, o)
  }
    , Lu = function() {
      return Iu(window)
  };
  function ju(t, n, e, o, r) {
      return t(e, o) ? st.some(e) : _(r) && r(e) ? st.none() : n(e, o, r)
  }
  var Uu, Wu, Gu = function(t, n, e) {
      for (var o = t.dom, r = _(e) ? e : c; o.parentNode; ) {
          o = o.parentNode;
          var i = me.fromDom(o);
          if (n(i))
              return st.some(i);
          if (r(i))
              break
      }
      return st.none()
  }, Xu = function(t, n, e) {
      return ju(function(t, n) {
          return n(t)
      }, Gu, t, n, e)
  }, Yu = function(t, n, e) {
      return Xu(t, n, e).isSome()
  }, qu = function(t, n, e) {
      return Gu(t, function(t) {
          return Ue(t, n)
      }, e)
  }, Ku = function(t, n) {
      return e = n,
      r = (o = t) === undefined ? document : o.dom,
      We(r) ? st.none() : st.from(r.querySelector(e)).map(me.fromDom);
      var e, o, r
  }, Ju = function(t, n, e) {
      return ju(Ue, qu, t, n, e)
  }, $u = function() {
      var n = Kr("aria-owns");
      return {
          id: n,
          link: function(t) {
              zr(t, "aria-owns", n)
          },
          unlink: function(t) {
              Ur(t, "aria-owns")
          }
      }
  }, Qu = function(n, t) {
      return Xu(t, function(t) {
          if (!pr(t))
              return !1;
          var n = Nr(t, "id");
          return n !== undefined && -1 < n.indexOf("aria-owns")
      }).bind(function(t) {
          var n = Nr(t, "id")
            , e = Hi(t);
          return Ku(e, '[aria-owns="' + n + '"]')
      }).exists(function(t) {
          return Zu(n, t)
      })
  }, Zu = function(n, t) {
      return Yu(t, function(t) {
          return Ge(t, n.element)
      }, c) || Qu(n, t)
  }, ta = "unknown";
  (Wu = Uu = Uu || {})[Wu.STOP = 0] = "STOP",
  Wu[Wu.NORMAL = 1] = "NORMAL",
  Wu[Wu.LOGGING = 2] = "LOGGING";
  var na, ea, oa = fe({}), ra = ["alloy/data/Fields", "alloy/debugging/Debugging"], ia = function(n, t, e) {
      var o, r, i, u;
      switch (Ft(oa.get(), n).orThunk(function() {
          var t = Ct(oa.get());
          return Z(t, function(t) {
              return -1 < n.indexOf(t) ? st.some(oa.get()[t]) : st.none()
          })
      }).getOr(Uu.NORMAL)) {
      case Uu.NORMAL:
          return e(ua());
      case Uu.LOGGING:
          var a = (o = n,
          r = t,
          i = [],
          u = (new Date).getTime(),
          {
              logEventCut: function(t, n, e) {
                  i.push({
                      outcome: "cut",
                      target: n,
                      purpose: e
                  })
              },
              logEventStopped: function(t, n, e) {
                  i.push({
                      outcome: "stopped",
                      target: n,
                      purpose: e
                  })
              },
              logNoParent: function(t, n, e) {
                  i.push({
                      outcome: "no-parent",
                      target: n,
                      purpose: e
                  })
              },
              logEventNoHandlers: function(t, n) {
                  i.push({
                      outcome: "no-handlers-left",
                      target: n
                  })
              },
              logEventResponse: function(t, n, e) {
                  i.push({
                      outcome: "response",
                      purpose: e,
                      target: n
                  })
              },
              write: function() {
                  var t = (new Date).getTime();
                  M(["mousemove", "mouseover", "mouseout", Mo()], o) || console.log(o, {
                      event: o,
                      time: t - u,
                      target: r.dom,
                      sequence: V(i, function(t) {
                          return M(["cut", "stopped", "response"], t.outcome) ? "{" + t.purpose + "} " + t.outcome + " at (" + Gr(t.target) + ")" : t.outcome
                      })
                  })
              }
          })
            , c = e(a);
          return a.write(),
          c;
      case Uu.STOP:
          return !0
      }
  }, ua = at({
      logEventCut: $,
      logEventStopped: $,
      logNoParent: $,
      logEventNoHandlers: $,
      logEventResponse: $,
      write: $
  }), aa = at([Ln("menu"), Ln("selectedMenu")]), ca = at([Ln("item"), Ln("selectedItem")]), sa = (at(fn(ca().concat(aa()))),
  at(fn(ca()))), la = Xn("initSize", [Ln("numColumns"), Ln("numRows")]), fa = function() {
      return Xn("markers", [Ln("backgroundMenu")].concat(aa()).concat(ca()))
  }, da = function(t) {
      return Xn("markers", V(t, Ln))
  }, ma = function(t, n, e) {
      !function() {
          var t = new Error;
          if (t.stack === undefined)
              return;
          var n = t.stack.split("\n");
          L(n, function(n) {
              return 0 < n.indexOf("alloy") && !F(ra, function(t) {
                  return -1 < n.indexOf(t)
              })
          }).getOr(ta)
      }();
      return bn(n, n, e, Cn(function(e) {
          return mt.value(function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
              return e.apply(undefined, t)
          })
      }))
  }, ga = function(t) {
      return ma(0, t, Ut($))
  }, pa = function(t) {
      return ma(0, t, Ut(st.none))
  }, ha = function(t) {
      return ma(0, t, Wt())
  }, va = function(t) {
      return ma(0, t, Wt())
  }, ba = function(t, n) {
      return le(t, at(n))
  }, ya = function(t) {
      return le(t, ct)
  }, xa = at(la), wa = function(t, n, e, o, r, i) {
      return {
          x: t,
          y: n,
          bubble: e,
          direction: o,
          boundsRestriction: r,
          label: i
      }
  }, Sa = Vt([{
      southeast: []
  }, {
      southwest: []
  }, {
      northeast: []
  }, {
      northwest: []
  }, {
      south: []
  }, {
      north: []
  }, {
      east: []
  }, {
      west: []
  }]), ka = Sa.southeast, Ca = Sa.southwest, Oa = Sa.northeast, _a = Sa.northwest, Ta = Sa.south, Ea = Sa.north, Da = Sa.east, Ba = Sa.west, Aa = function(n, e) {
      return function(t, n) {
          for (var e = {}, o = 0, r = t.length; o < r; o++) {
              var i = t[o];
              e[String(i)] = n(i, o)
          }
          return e
      }(["left", "right", "top", "bottom"], function(t) {
          return Ft(e, t).map(function(t) {
              return function(t, n) {
                  switch (n) {
                  case 1:
                      return t.x;
                  case 0:
                      return t.x + t.width;
                  case 2:
                      return t.y;
                  case 3:
                      return t.y + t.height
                  }
              }(n, t)
          })
      })
  }, Ma = function(t) {
      return t.x
  }, Fa = function(t, n) {
      return t.x + t.width / 2 - n.width / 2
  }, Ia = function(t, n) {
      return t.x + t.width - n.width
  }, Ra = function(t, n) {
      return t.y - n.height
  }, Va = function(t) {
      return t.y + t.height
  }, Pa = function(t, n) {
      return t.y + t.height / 2 - n.height / 2
  }, Ha = function(t, n, e) {
      return wa(Ma(t), Va(t), e.southeast(), ka(), Aa(t, {
          left: 1,
          top: 3
      }), "layout-se")
  }, za = function(t, n, e) {
      return wa(Ia(t, n), Va(t), e.southwest(), Ca(), Aa(t, {
          right: 0,
          top: 3
      }), "layout-sw")
  }, Na = function(t, n, e) {
      return wa(Ma(t), Ra(t, n), e.northeast(), Oa(), Aa(t, {
          left: 1,
          bottom: 2
      }), "layout-ne")
  }, La = function(t, n, e) {
      return wa(Ia(t, n), Ra(t, n), e.northwest(), _a(), Aa(t, {
          right: 0,
          bottom: 2
      }), "layout-nw")
  }, ja = function(t, n, e) {
      return wa(Fa(t, n), Ra(t, n), e.north(), Ea(), Aa(t, {
          bottom: 2
      }), "layout-n")
  }, Ua = function(t, n, e) {
      return wa(Fa(t, n), Va(t), e.south(), Ta(), Aa(t, {
          top: 3
      }), "layout-s")
  }, Wa = function(t, n, e) {
      return wa((o = t).x + o.width, Pa(t, n), e.east(), Da(), Aa(t, {
          left: 0
      }), "layout-e");
      var o
  }, Ga = function(t, n, e) {
      return wa((o = n,
      t.x - o.width), Pa(t, n), e.west(), Ba(), Aa(t, {
          right: 1
      }), "layout-w");
      var o
  }, Xa = function() {
      return [Ha, za, Na, La, Ua, ja, Wa, Ga]
  }, Ya = function() {
      return [za, Ha, La, Na, Ua, ja, Wa, Ga]
  }, qa = function() {
      return [Na, La, Ha, za, ja, Ua]
  }, Ka = function() {
      return [La, Na, za, Ha, ja, Ua]
  }, Ja = function() {
      return [Ha, za, Na, La, Ua, ja]
  }, $a = function() {
      return [za, Ha, La, Na, Ua, ja]
  }, Qa = /* */
  Object.freeze({
      __proto__: null,
      events: function(c) {
          return Zo([er(Oo(), function(r, t) {
              var n, e, i = c.channels, o = Ct(i), u = t, a = (n = o,
              (e = u).universal ? n : H(n, function(t) {
                  return M(e.channels, t)
              }));
              ft(a, function(t) {
                  var n = i[t]
                    , e = n.schema
                    , o = En("channel[" + t + "] data\nReceiver: " + Gr(r.element), e, u.data);
                  n.onReceive(r, o)
              })
          })])
      }
  }), Za = [jn("channels", On(mt.value, ln([ha("onReceive"), ne("schema", Mn())])))], tc = function(e, o, r) {
      return fr(function(t, n) {
          r(t, e, o)
      })
  }, nc = function(t, n, e, o, r, i) {
      var u = ln(t)
        , a = te(n, [Jn("config", ln(t))]);
      return rc(u, a, n, e, o, r, i)
  }, ec = function(r, i, u) {
      var t, n, e, o, a, c;
      return t = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
          var o = [e].concat(t);
          return e.config({
              name: at(r)
          }).fold(function() {
              throw new Error("We could not find any behaviour configuration for: " + r + ". Using API: " + u)
          }, function(t) {
              var n = Array.prototype.slice.call(o, 1);
              return i.apply(undefined, [e, t.config, t.state].concat(n))
          })
      }
      ,
      n = u,
      e = i.toString(),
      o = e.indexOf(")") + 1,
      a = e.indexOf("("),
      c = e.substring(a + 1, o - 1).split(/,\s*/),
      t.toFunctionAnnotation = function() {
          return {
              name: n,
              parameters: ui(c.slice(0, 1).concat(c.slice(3)))
          }
      }
      ,
      t
  }, oc = function(t) {
      return {
          key: t,
          value: undefined
      }
  }, rc = function(e, t, o, r, n, i, u) {
      var a = function(t) {
          return Rt(t, o) ? t[o]() : st.none()
      }
        , c = Tt(n, function(t, n) {
          return ec(o, t, n)
      })
        , s = Tt(i, ai)
        , l = ut(ut(ut({}, s), c), {
          revoke: y(oc, o),
          config: function(t) {
              var n = En(o + "-config", e, t);
              return {
                  key: o,
                  value: {
                      config: n,
                      me: l,
                      configAsRaw: Lt(function() {
                          return En(o + "-config", e, t)
                      }),
                      initialConfig: t,
                      state: u
                  }
              }
          },
          schema: function() {
              return t
          },
          exhibit: function(t, e) {
              return a(t).bind(function(n) {
                  return Ft(r, "exhibit").map(function(t) {
                      return t(e, n.config, n.state)
                  })
              }).getOr(gi({}))
          },
          name: function() {
              return o
          },
          handlers: function(t) {
              return a(t).map(function(t) {
                  return Ft(r, "events").getOr(function() {
                      return {}
                  })(t.config, t.state)
              }).getOr({})
          }
      });
      return l
  }, ic = $t, uc = ln([Ln("fields"), Ln("name"), ne("active", {}), ne("apis", {}), ne("state", fi), ne("extra", {})]), ac = function(t) {
      var n = En("Creating behaviour: " + t.name, uc, t);
      return nc(n.fields, n.name, n.active, n.apis, n.extra, n.state)
  }, cc = ln([Ln("branchKey"), Ln("branches"), Ln("name"), ne("active", {}), ne("apis", {}), ne("state", fi), ne("extra", {})]), sc = function(t) {
      var n, e, o, r, i, u, a, c, s = En("Creating behaviour: " + t.name, cc, t);
      return n = An(s.branchKey, s.branches),
      e = s.name,
      o = s.active,
      r = s.apis,
      i = s.extra,
      u = s.state,
      c = te(e, [Jn("config", a = n)]),
      rc(a, c, e, o, r, i, u)
  }, lc = at(undefined), fc = ac({
      fields: Za,
      name: "receiving",
      active: Qa
  }), dc = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function(t, n) {
          return gi({
              classes: [],
              styles: n.useFixed() ? {} : {
                  position: "relative"
              }
          })
      }
  }), mc = function(t) {
      return t.dom.focus()
  }, gc = function(t) {
      return void 0 === t && (t = me.fromDom(document)),
      st.from(t.dom.activeElement).map(me.fromDom)
  }, pc = function(n) {
      return gc(Hi(n)).filter(function(t) {
          return n.dom.contains(t.dom)
      })
  }, hc = function(t, e) {
      var o = Hi(e)
        , n = gc(o).bind(function(n) {
          var r, i, t = function(t) {
              return Ge(n, t)
          };
          return t(e) ? st.some(e) : (r = t,
          (i = function(t) {
              for (var n = 0; n < t.childNodes.length; n++) {
                  var e = me.fromDom(t.childNodes[n]);
                  if (r(e))
                      return st.some(e);
                  var o = i(t.childNodes[n]);
                  if (o.isSome())
                      return o
              }
              return st.none()
          }
          )(e.dom))
      })
        , r = t(e);
      return n.each(function(n) {
          gc(o).filter(function(t) {
              return Ge(t, n)
          }).fold(function() {
              mc(n)
          }, $)
      }),
      r
  }, vc = function(t, n, e, o, r) {
      return {
          position: t,
          left: n,
          top: e,
          right: o,
          bottom: r
      }
  }, bc = function(t, n) {
      var e = function(t) {
          return t + "px"
      };
      Ji(t, {
          position: st.some(n.position),
          left: n.left.map(e),
          top: n.top.map(e),
          right: n.right.map(e),
          bottom: n.bottom.map(e)
      })
  }, yc = Vt([{
      none: []
  }, {
      relative: ["x", "y", "width", "height"]
  }, {
      fixed: ["x", "y", "width", "height"]
  }]), xc = function(t, n, e, o, r, i) {
      var u, a, c, s, l, f, d, m, g, p = n.x - e, h = n.y - o, v = r - (p + n.width), b = i - (h + n.height), y = st.some(p), x = st.some(h), w = st.some(v), S = st.some(b), k = st.none();
      return u = n.direction,
      a = function() {
          return vc(t, y, x, k, k)
      }
      ,
      c = function() {
          return vc(t, k, x, w, k)
      }
      ,
      s = function() {
          return vc(t, y, k, k, S)
      }
      ,
      l = function() {
          return vc(t, k, k, w, S)
      }
      ,
      f = function() {
          return vc(t, y, x, k, k)
      }
      ,
      d = function() {
          return vc(t, y, k, k, S)
      }
      ,
      m = function() {
          return vc(t, y, x, k, k)
      }
      ,
      g = function() {
          return vc(t, k, x, w, k)
      }
      ,
      u.fold(a, c, s, l, f, d, m, g)
  }, wc = function(t, n) {
      var e = y(Pu, n)
        , o = t.fold(e, e, function() {
          var t = Au();
          return Pu(n).translate(-t.left, -t.top)
      })
        , r = Tu(n)
        , i = yu(n);
      return Hu(o.left, o.top, r, i)
  }, Sc = function(t, n, e) {
      var o = wu(n, e);
      return t.fold(at(o), at(o), function() {
          var t = Au();
          return o.translate(-t.left, -t.top)
      })
  }, kc = (yc.none,
  yc.relative), Cc = yc.fixed, Oc = function(t, n, e, o) {
      var r = t + n;
      return o < r ? e : r < e ? o : r
  }, _c = function(t, n, e) {
      return Math.min(Math.max(t, n), e)
  }, Tc = Vt([{
      fit: ["reposition"]
  }, {
      nofit: ["reposition", "deltaW", "deltaH"]
  }]), Ec = function(t, n, e, o) {
      var r, i, u, a, c, s, l, f, d, m, g, p, h, v, b, y, x, w, S, k, C, O, _, T, E, D, B, A, M, F, I, R, V, P = t.x, H = t.y, z = t.bubble.offset, N = z.left, L = z.top, j = (r = o,
      i = t.boundsRestriction,
      u = z,
      c = (a = function(n, e) {
          var o = "top" === n || "bottom" === n ? u.top : u.left;
          return Ft(i, n).bind(ct).bind(function(t) {
              return "left" === n || "top" === n ? e <= t ? st.some(t) : st.none() : t <= e ? st.some(t) : st.none()
          }).map(function(t) {
              return t + o
          }).getOr(e)
      }
      )("left", r.x),
      s = a("top", r.y),
      l = a("right", r.right),
      f = a("bottom", r.bottom),
      Hu(c, s, l - c, f - s)), U = j.y, W = j.bottom, G = j.x, X = j.right, Y = H + L, q = (d = P + N,
      m = Y,
      g = n,
      p = e,
      v = (h = j).x,
      b = h.y,
      y = h.width,
      x = h.height,
      S = b <= m,
      k = (w = v <= d) && S,
      C = d + g <= v + y && m + p <= b + x,
      O = Math.abs(Math.min(g, w ? v + y - d : v - (d + g))),
      _ = Math.abs(Math.min(p, S ? b + x - m : b - (m + p))),
      T = Math.max(h.x, h.right - g),
      E = Math.max(h.y, h.bottom - p),
      {
          originInBounds: k,
          sizeInBounds: C,
          limitX: _c(d, h.x, T),
          limitY: _c(m, h.y, E),
          deltaW: O,
          deltaH: _
      }), K = q.originInBounds, J = q.sizeInBounds, $ = q.limitX, Q = q.limitY, Z = q.deltaW, tt = q.deltaH, nt = at(Q + tt - U), et = at(W - Q), ot = (D = t.direction,
      A = B = et,
      M = nt,
      D.fold(B, B, M, M, B, M, A, A)), rt = at($ + Z - G), it = at(X - $), ut = {
          x: $,
          y: Q,
          width: Z,
          height: tt,
          maxHeight: ot,
          maxWidth: (F = t.direction,
          R = I = it,
          V = rt,
          F.fold(I, V, I, V, R, R, I, V)),
          direction: t.direction,
          classes: {
              on: t.bubble.classesOn,
              off: t.bubble.classesOff
          },
          label: t.label,
          candidateYforTest: Y
      };
      return K && J ? Tc.fit(ut) : Tc.nofit(ut, Z, tt)
  }, Dc = function(t, n, e, o) {
      nu(n, "max-height"),
      nu(n, "max-width");
      var r, i, u, a, c, s, l, f, d, m = {
          width: Tu(r = n),
          height: yu(r)
      };
      return i = o.preference,
      u = t,
      a = m,
      c = e,
      s = o.bounds,
      l = a.width,
      f = a.height,
      d = function(t, o, r, i) {
          var n = t(u, a, c);
          return Ec(n, l, f, s).fold(Tc.fit, function(t, n, e) {
              return i < e || r < n ? Tc.nofit(t, n, e) : Tc.nofit(o, r, i)
          })
      }
      ,
      N(i, function(t, n) {
          var e = y(d, n);
          return t.fold(Tc.fit, e)
      }, Tc.nofit({
          x: u.x,
          y: u.y,
          width: a.width,
          height: a.height,
          maxHeight: a.height,
          maxWidth: a.width,
          direction: ka(),
          classes: {
              on: [],
              off: []
          },
          label: "none",
          candidateYforTest: u.y
      }, -1, -1)).fold(ct, ct)
  }, Bc = function(t, n, e) {
      var o, r;
      bc(t, (o = e.origin,
      r = n,
      o.fold(function() {
          return vc("absolute", st.some(r.x), st.some(r.y), st.none(), st.none())
      }, function(t, n, e, o) {
          return xc("absolute", r, t, n, e, o)
      }, function(t, n, e, o) {
          return xc("fixed", r, t, n, e, o)
      })))
  }, Ac = function(t, n) {
      var e, o, r;
      e = t,
      o = Math.floor(n),
      r = vu.max(e, o, ["margin-top", "border-top-width", "padding-top", "padding-bottom", "border-bottom-width", "margin-bottom"]),
      qi(e, "max-height", r + "px")
  }, Mc = at(function(t, n) {
      Ac(t, n),
      Ki(t, {
          "overflow-x": "hidden",
          "overflow-y": "auto"
      })
  }), Fc = at(function(t, n) {
      Ac(t, n)
  }), Ic = function(t, n, e) {
      return t[n] === undefined ? e : t[n]
  }, Rc = function(t, n, e, o, r, i) {
      var u, a = Ic(i, "maxHeightFunction", Mc()), c = Ic(i, "maxWidthFunction", $), s = t.anchorBox, l = t.origin, f = {
          bounds: (u = l,
          r.fold(function() {
              return u.fold(Lu, Lu, Hu)
          }, function(e) {
              return u.fold(e, e, function() {
                  var t = e()
                    , n = Sc(u, t.x, t.y);
                  return Hu(n.left, n.top, t.width, t.height)
              })
          })),
          origin: l,
          preference: o,
          maxHeightFunction: a,
          maxWidthFunction: c
      };
      Vc(s, n, e, f)
  }, Vc = function(t, n, e, o) {
      var r, i, u, a, c, s, l = Dc(t, n, e, o);
      Bc(n, l, o),
      r = n,
      i = l.classes,
      Fi(r, i.off),
      Mi(r, i.on),
      u = n,
      a = l,
      (0,
      o.maxHeightFunction)(u, a.maxHeight),
      c = n,
      s = l,
      (0,
      o.maxWidthFunction)(c, s.maxWidth)
  }, Pc = ["valignCentre", "alignLeft", "alignRight", "alignCentre", "top", "bottom", "left", "right"], Hc = function(t, n, e) {
      var r = function(t) {
          return Ft(e, t).getOr([])
      }
        , o = function(t, n, e) {
          var o = X(Pc, e);
          return {
              offset: wu(t, n),
              classesOn: U(e, r),
              classesOff: U(o, r)
          }
      };
      return {
          southeast: function() {
              return o(-t, n, ["top", "alignLeft"])
          },
          southwest: function() {
              return o(t, n, ["top", "alignRight"])
          },
          south: function() {
              return o(-t / 2, n, ["top", "alignCentre"])
          },
          northeast: function() {
              return o(-t, -n, ["bottom", "alignLeft"])
          },
          northwest: function() {
              return o(t, -n, ["bottom", "alignRight"])
          },
          north: function() {
              return o(-t / 2, -n, ["bottom", "alignCentre"])
          },
          east: function() {
              return o(t, -n / 2, ["valignCentre", "left"])
          },
          west: function() {
              return o(-t, -n / 2, ["valignCentre", "right"])
          },
          innerNorthwest: function() {
              return o(-t, n, ["top", "alignRight"])
          },
          innerNortheast: function() {
              return o(t, n, ["top", "alignLeft"])
          },
          innerNorth: function() {
              return o(-t / 2, n, ["top", "alignCentre"])
          },
          innerSouthwest: function() {
              return o(-t, -n, ["bottom", "alignRight"])
          },
          innerSoutheast: function() {
              return o(t, -n, ["bottom", "alignLeft"])
          },
          innerSouth: function() {
              return o(-t / 2, -n, ["bottom", "alignCentre"])
          },
          innerWest: function() {
              return o(t, -n / 2, ["valignCentre", "right"])
          },
          innerEast: function() {
              return o(-t, -n / 2, ["valignCentre", "left"])
          }
      }
  }, zc = function() {
      return Hc(0, 0, {})
  }, Nc = function(n, e) {
      return function(t) {
          return "rtl" === Lc(t) ? e : n
      }
  }, Lc = function(t) {
      return "rtl" === $i(t, "direction") ? "rtl" : "ltr"
  };
  (ea = na = na || {}).TopToBottom = "toptobottom",
  ea.BottomToTop = "bottomtotop";
  var jc = "data-alloy-vertical-dir"
    , Uc = function(t) {
      return Yu(t, function(t) {
          return pr(t) && Nr(t, "data-alloy-vertical-dir") === na.BottomToTop
      })
  }
    , Wc = function() {
      return te("layouts", [Ln("onLtr"), Ln("onRtl"), Kn("onBottomLtr"), Kn("onBottomRtl")])
  }
    , Gc = function(n, t, e, o, r, i, u) {
      var a = u.map(Uc).getOr(!1)
        , c = t.layouts.map(function(t) {
          return t.onLtr(n)
      })
        , s = t.layouts.map(function(t) {
          return t.onRtl(n)
      })
        , l = a ? t.layouts.bind(function(t) {
          return t.onBottomLtr.map(function(t) {
              return t(n)
          })
      }).or(c).getOr(r) : c.getOr(e)
        , f = a ? t.layouts.bind(function(t) {
          return t.onBottomRtl.map(function(t) {
              return t(n)
          })
      }).or(s).getOr(i) : s.getOr(o);
      return Nc(l, f)(n)
  }
    , Xc = [Ln("hotspot"), Kn("bubble"), ne("overrides", {}), Wc(), ba("placement", function(t, n, e) {
      var o = n.hotspot
        , r = wc(e, o.element)
        , i = Gc(t.element, n, Ja(), $a(), qa(), Ka(), st.some(n.hotspot.element));
      return st.some({
          anchorBox: r,
          bubble: n.bubble.getOr(zc()),
          overrides: n.overrides,
          layouts: i,
          placer: st.none()
      })
  })]
    , Yc = [Ln("x"), Ln("y"), ne("height", 0), ne("width", 0), ne("bubble", zc()), ne("overrides", {}), Wc(), ba("placement", function(t, n, e) {
      var o = Sc(e, n.x, n.y)
        , r = Hu(o.left, o.top, n.width, n.height)
        , i = Gc(t.element, n, Xa(), Ya(), Xa(), Ya(), st.none());
      return st.some({
          anchorBox: r,
          bubble: n.bubble,
          overrides: n.overrides,
          layouts: i,
          placer: st.none()
      })
  })]
    , qc = function(t, n, e, o) {
      return {
          start: t,
          soffset: n,
          finish: e,
          foffset: o
      }
  }
    , Kc = Vt([{
      before: ["element"]
  }, {
      on: ["element", "offset"]
  }, {
      after: ["element"]
  }])
    , Jc = (Kc.before,
  Kc.on,
  Kc.after,
  function(t) {
      return t.fold(ct, ct, ct)
  }
  )
    , $c = Vt([{
      domRange: ["rng"]
  }, {
      relative: ["startSitu", "finishSitu"]
  }, {
      exact: ["start", "soffset", "finish", "foffset"]
  }])
    , Qc = {
      domRange: $c.domRange,
      relative: $c.relative,
      exact: $c.exact,
      exactFromRange: function(t) {
          return $c.exact(t.start, t.soffset, t.finish, t.foffset)
      },
      getWin: function(t) {
          var n = t.match({
              domRange: function(t) {
                  return me.fromDom(t.startContainer)
              },
              relative: function(t, n) {
                  return Jc(t)
              },
              exact: function(t, n, e, o) {
                  return t
              }
          });
          return Sr(n)
      },
      range: qc
  }
    , Zc = function(t, n, e) {
      var o, r, i = t.document.createRange();
      return o = i,
      n.fold(function(t) {
          o.setStartBefore(t.dom)
      }, function(t, n) {
          o.setStart(t.dom, n)
      }, function(t) {
          o.setStartAfter(t.dom)
      }),
      r = i,
      e.fold(function(t) {
          r.setEndBefore(t.dom)
      }, function(t, n) {
          r.setEnd(t.dom, n)
      }, function(t) {
          r.setEndAfter(t.dom)
      }),
      i
  }
    , ts = function(t, n, e, o, r) {
      var i = t.document.createRange();
      return i.setStart(n.dom, e),
      i.setEnd(o.dom, r),
      i
  }
    , ns = function(t) {
      return {
          left: t.left,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          width: t.width,
          height: t.height
      }
  }
    , es = Vt([{
      ltr: ["start", "soffset", "finish", "foffset"]
  }, {
      rtl: ["start", "soffset", "finish", "foffset"]
  }])
    , os = function(t, n, e) {
      return n(me.fromDom(e.startContainer), e.startOffset, me.fromDom(e.endContainer), e.endOffset)
  }
    , rs = function(t, n) {
      var r, e, o, i = (r = t,
      n.match({
          domRange: function(t) {
              return {
                  ltr: at(t),
                  rtl: st.none
              }
          },
          relative: function(t, n) {
              return {
                  ltr: Lt(function() {
                      return Zc(r, t, n)
                  }),
                  rtl: Lt(function() {
                      return st.some(Zc(r, n, t))
                  })
              }
          },
          exact: function(t, n, e, o) {
              return {
                  ltr: Lt(function() {
                      return ts(r, t, n, e, o)
                  }),
                  rtl: Lt(function() {
                      return st.some(ts(r, e, o, t, n))
                  })
              }
          }
      }));
      return (o = (e = i).ltr()).collapsed ? e.rtl().filter(function(t) {
          return !1 === t.collapsed
      }).map(function(t) {
          return es.rtl(me.fromDom(t.endContainer), t.endOffset, me.fromDom(t.startContainer), t.startOffset)
      }).getOrThunk(function() {
          return os(0, es.ltr, o)
      }) : os(0, es.ltr, o)
  };
  es.ltr,
  es.rtl;
  var is, us, as, cs = (is = hr,
  us = "text",
  {
      get: function(t) {
          if (!is(t))
              throw new Error("Can only get " + us + " value of a " + us + " node");
          return as(t).getOr("")
      },
      getOption: as = function(t) {
          return is(t) ? st.from(t.dom.nodeValue) : st.none()
      }
      ,
      set: function(t, n) {
          if (!is(t))
              throw new Error("Can only set raw " + us + " value of a " + us + " node");
          t.dom.nodeValue = n
      }
  }), ss = function(t) {
      return cs.getOption(t)
  }, ls = ["img", "br"], fs = function(t) {
      return ss(t).filter(function(t) {
          return 0 !== t.trim().length || -1 < t.indexOf("\xa0")
      }).isSome() || M(ls, mr(t))
  }, ds = function(t, i) {
      var u = function(t) {
          for (var n = _r(t), e = n.length - 1; 0 <= e; e--) {
              var o = n[e];
              if (i(o))
                  return st.some(o);
              var r = u(o);
              if (r.isSome())
                  return r
          }
          return st.none()
      };
      return u(t)
  }, ms = function(t, n) {
      return e = n,
      r = (o = t) === undefined ? document : o.dom,
      We(r) ? [] : V(r.querySelectorAll(e), me.fromDom);
      var e, o, r
  }, gs = function(t, n, e, o) {
      var r, i, u, a, c, s = (i = n,
      u = e,
      a = o,
      (c = yr(r = t).dom.createRange()).setStart(r.dom, i),
      c.setEnd(u.dom, a),
      c), l = Ge(t, e) && n === o;
      return s.collapsed && !l
  }, ps = function(t) {
      if (0 < t.rangeCount) {
          var n = t.getRangeAt(0)
            , e = t.getRangeAt(t.rangeCount - 1);
          return st.some(qc(me.fromDom(n.startContainer), n.startOffset, me.fromDom(e.endContainer), e.endOffset))
      }
      return st.none()
  }, hs = function(t) {
      if (null === t.anchorNode || null === t.focusNode)
          return ps(t);
      var n = me.fromDom(t.anchorNode)
        , e = me.fromDom(t.focusNode);
      return gs(n, t.anchorOffset, e, t.focusOffset) ? st.some(qc(n, t.anchorOffset, e, t.focusOffset)) : ps(t)
  }, vs = function(t) {
      return n = t,
      st.from(n.getSelection()).filter(function(t) {
          return 0 < t.rangeCount
      }).bind(hs);
      var n
  }, bs = function(t, n) {
      var i, e, o, r, u = rs(i = t, n).match({
          ltr: function(t, n, e, o) {
              var r = i.document.createRange();
              return r.setStart(t.dom, n),
              r.setEnd(e.dom, o),
              r
          },
          rtl: function(t, n, e, o) {
              var r = i.document.createRange();
              return r.setStart(e.dom, o),
              r.setEnd(t.dom, n),
              r
          }
      });
      return o = (e = u).getClientRects(),
      0 < (r = 0 < o.length ? o[0] : e.getBoundingClientRect()).width || 0 < r.height ? st.some(r).map(ns) : st.none()
  }, ys = function(t, n) {
      return {
          element: t,
          offset: n
      }
  }, xs = function(t, n) {
      var e = _r(t);
      if (0 === e.length)
          return ys(t, n);
      if (n < e.length)
          return ys(e[n], 0);
      var o, r = e[e.length - 1], i = hr(r) ? (o = r,
      cs.get(o).length) : _r(r).length;
      return ys(r, i)
  }, ws = Vt([{
      screen: ["point"]
  }, {
      absolute: ["point", "scrollLeft", "scrollTop"]
  }]), Ss = function(t) {
      return t.fold(ct, function(t, n, e) {
          return t.translate(-n, -e)
      })
  }, ks = function(t) {
      return t.fold(ct, ct)
  }, Cs = function(t) {
      return N(t, function(t, n) {
          return t.translate(n.left, n.top)
      }, wu(0, 0))
  }, Os = function(t) {
      var n = V(t, ks);
      return Cs(n)
  }, _s = ws.screen, Ts = ws.absolute, Es = function(t, n, e) {
      var o, r, i = yr(t.element), u = Au(i), a = (o = t,
      r = Sr(e.root).dom,
      st.from(r.frameElement).map(me.fromDom).filter(function(t) {
          var n = yr(t)
            , e = yr(o.element);
          return Ge(n, e)
      }).map(ku).getOr(u));
      return Ts(a, u.left, u.top)
  }, Ds = function(t, n, e, o) {
      var r = t
        , i = n
        , u = e
        , a = o;
      t < 0 && (r = 0,
      u = e + t),
      n < 0 && (i = 0,
      a = o + n);
      var c = _s(wu(r, i));
      return st.some({
          point: c,
          width: u,
          height: a
      })
  }, Bs = function(t, l, f, d, m) {
      return t.map(function(t) {
          var n, e, o, r = [l, t.point], i = (n = function() {
              return Os(r)
          }
          ,
          e = function() {
              return Os(r)
          }
          ,
          o = function() {
              return t = V(r, Ss),
              Cs(t);
              var t
          }
          ,
          d.fold(n, e, o)), u = {
              x: i.left,
              y: i.top,
              width: t.width,
              height: t.height
          }, a = (f.showAbove ? qa : Ja)(), c = (f.showAbove ? Ka : $a)(), s = Gc(m, f, a, c, a, c, st.none());
          return {
              anchorBox: u,
              bubble: f.bubble.getOr(zc()),
              overrides: f.overrides,
              layouts: s,
              placer: st.none()
          }
      })
  }, As = function(t, n) {
      return (hr(t) ? ys : xs)(t, n)
  }, Ms = function(t, n) {
      return n.getSelection.getOrThunk(function() {
          return function() {
              return vs(t)
          }
      })().map(function(t) {
          var n = As(t.start, t.soffset)
            , e = As(t.finish, t.foffset);
          return Qc.range(n.element, n.offset, e.element, e.offset)
      })
  }, Fs = [Kn("getSelection"), Ln("root"), Kn("bubble"), Wc(), ne("overrides", {}), ne("showAbove", !1), ba("placement", function(t, n, e) {
      var o = Sr(n.root).dom
        , r = Es(t, 0, n)
        , i = Ms(o, n).bind(function(t) {
          return bs(o, Qc.exactFromRange(t)).orThunk(function() {
              var n = me.fromText("\ufeff");
              return Er(t.start, n),
              bs(o, Qc.exact(n, 0, n, 1)).map(function(t) {
                  return Ir(n),
                  t
              })
          }).bind(function(t) {
              return Ds(t.left, t.top, t.width, t.height)
          })
      })
        , u = Ms(o, n).bind(function(t) {
          return pr(t.start) ? st.some(t.start) : Cr(t.start)
      }).getOr(t.element);
      return Bs(i, r, n, e, u)
  })], Is = [Ln("node"), Ln("root"), Kn("bubble"), Wc(), ne("overrides", {}), ne("showAbove", !1), ba("placement", function(r, i, u) {
      var a = Es(r, 0, i);
      return i.node.bind(function(t) {
          var n = t.dom.getBoundingClientRect()
            , e = Ds(n.left, n.top, n.width, n.height)
            , o = i.node.getOr(r.element);
          return Bs(e, a, i, u, o)
      })
  })], Rs = function(t) {
      return t.x + t.width
  }, Vs = function(t, n) {
      return t.x - n.width
  }, Ps = function(t, n) {
      return t.y - n.height + t.height
  }, Hs = function(t) {
      return t.y
  }, zs = function(t, n, e) {
      return wa(Rs(t), Hs(t), e.southeast(), ka(), Aa(t, {
          left: 0,
          top: 2
      }), "link-layout-se")
  }, Ns = function(t, n, e) {
      return wa(Vs(t, n), Hs(t), e.southwest(), Ca(), Aa(t, {
          right: 1,
          top: 2
      }), "link-layout-sw")
  }, Ls = function(t, n, e) {
      return wa(Rs(t), Ps(t, n), e.northeast(), Oa(), Aa(t, {
          left: 0,
          bottom: 3
      }), "link-layout-ne")
  }, js = function(t, n, e) {
      return wa(Vs(t, n), Ps(t, n), e.northwest(), _a(), Aa(t, {
          right: 1,
          bottom: 3
      }), "link-layout-nw")
  }, Us = function() {
      return [zs, Ns, Ls, js]
  }, Ws = function() {
      return [Ns, zs, js, Ls]
  }, Gs = [Ln("item"), Wc(), ne("overrides", {}), ba("placement", function(t, n, e) {
      var o = wc(e, n.item.element)
        , r = Gc(t.element, n, Us(), Ws(), Us(), Ws(), st.none());
      return st.some({
          anchorBox: o,
          bubble: zc(),
          overrides: n.overrides,
          layouts: r,
          placer: st.none()
      })
  })], Xs = An("anchor", {
      selection: Fs,
      node: Is,
      hotspot: Xc,
      submenu: Gs,
      makeshift: Yc
  }), Ys = function(t, n, e, o, r) {
      var i = {
          anchorBox: e.anchorBox,
          origin: n
      };
      Rc(i, r.element, e.bubble, e.layouts, o, e.overrides)
  }, qs = function(t, n, e, o, r, i) {
      var u = i.map(zu);
      return Ks(t, n, e, o, r, u)
  }, Ks = function(c, s, t, n, l, f) {
      var d = En("positioning anchor.info", Xs, n);
      hc(function() {
          qi(l.element, "position", "fixed");
          var t = Zi(l.element, "visibility");
          qi(l.element, "visibility", "hidden");
          var n, e, o, r, i = s.useFixed() ? (r = document.documentElement,
          Cc(0, 0, r.clientWidth, r.clientHeight)) : (e = ku((n = c).element),
          o = n.element.dom.getBoundingClientRect(),
          kc(e.left, e.top, o.width, o.height)), u = d.placement, a = f.map(at).or(s.getBounds);
          u(c, d, i).each(function(t) {
              t.placer.getOr(Ys)(c, i, t, a, l)
          }),
          t.fold(function() {
              nu(l.element, "visibility")
          }, function(t) {
              qi(l.element, "visibility", t)
          }),
          Zi(l.element, "left").isNone() && Zi(l.element, "top").isNone() && Zi(l.element, "right").isNone() && Zi(l.element, "bottom").isNone() && Zi(l.element, "position").is("fixed") && nu(l.element, "position")
      }, l.element)
  }, Js = /* */
  Object.freeze({
      __proto__: null,
      position: function(t, n, e, o, r) {
          qs(t, n, e, o, r, st.none())
      },
      positionWithin: qs,
      positionWithinBounds: Ks,
      getMode: function(t, n, e) {
          return n.useFixed() ? "fixed" : "absolute"
      }
  }), $s = [ne("useFixed", c), Kn("getBounds")], Qs = ac({
      fields: $s,
      name: "positioning",
      active: dc,
      apis: Js
  }), Zs = function(t) {
      Yo(t, Ho());
      var n = t.components();
      ft(n, Zs)
  }, tl = function(t) {
      var n = t.components();
      ft(n, tl),
      Yo(t, Po())
  }, nl = function(t, n) {
      Ar(t.element, n.element)
  }, el = function(n, t) {
      var e, o = n.components();
      ft((e = n).components(), function(t) {
          return Ir(t.element)
      }),
      Fr(e.element),
      e.syncComponents();
      var r = X(o, t);
      ft(r, function(t) {
          Zs(t),
          n.getSystem().removeFromWorld(t)
      }),
      ft(t, function(t) {
          t.getSystem().isConnected() ? nl(n, t) : (n.getSystem().addToWorld(t),
          nl(n, t),
          Ui(n.element) && tl(t)),
          n.syncComponents()
      })
  }, ol = function(t, n) {
      rl(t, n, Ar)
  }, rl = function(t, n, e) {
      t.getSystem().addToWorld(n),
      e(t.element, n.element),
      Ui(t.element) && tl(n),
      t.syncComponents()
  }, il = function(t) {
      Zs(t),
      Ir(t.element),
      t.getSystem().removeFromWorld(t)
  }, ul = function(n) {
      var t = kr(n.element).bind(function(t) {
          return n.getSystem().getByDom(t).toOptional()
      });
      il(n),
      t.each(function(t) {
          t.syncComponents()
      })
  }, al = function(t) {
      var n = t.components();
      ft(n, il),
      Fr(t.element),
      t.syncComponents()
  }, cl = function(t, n) {
      sl(t, n, Ar)
  }, sl = function(t, n, e) {
      e(t, n.element);
      var o = _r(n.element);
      ft(o, function(t) {
          n.getByDom(t).each(tl)
      })
  }, ll = function(n) {
      var t = _r(n.element);
      ft(t, function(t) {
          n.getByDom(t).each(Zs)
      }),
      Ir(n.element)
  }, fl = function(n, t, e, o) {
      e.get().each(function(t) {
          al(n)
      });
      var r = t.getAttachPoint(n);
      ol(r, n);
      var i = n.getSystem().build(o);
      return ol(n, i),
      e.set(i),
      i
  }, dl = function(t, n, e, o) {
      var r = fl(t, n, e, o);
      return n.onOpen(t, r),
      r
  }, ml = function(n, e, o) {
      o.get().each(function(t) {
          al(n),
          ul(n),
          e.onClose(n, t),
          o.clear()
      })
  }, gl = function(t, n, e) {
      return e.isOpen()
  }, pl = function(t, n, e) {
      var o, r, i, u, a = n.getAttachPoint(t);
      qi(t.element, "position", Qs.getMode(a)),
      o = t,
      r = "visibility",
      i = n.cloakVisibilityAttr,
      u = "hidden",
      Zi(o.element, r).fold(function() {
          Ur(o.element, i)
      }, function(t) {
          zr(o.element, i, t)
      }),
      qi(o.element, r, u)
  }, hl = function(t, n, e) {
      var o, r, i, u;
      o = t.element,
      F(["top", "left", "right", "bottom"], function(t) {
          return Zi(o, t).isSome()
      }) || nu(t.element, "position"),
      r = t,
      i = "visibility",
      u = n.cloakVisibilityAttr,
      Lr(r.element, u).fold(function() {
          return nu(r.element, i)
      }, function(t) {
          return qi(r.element, i, t)
      })
  }, vl = /* */
  Object.freeze({
      __proto__: null,
      cloak: pl,
      decloak: hl,
      open: dl,
      openWhileCloaked: function(t, n, e, o, r) {
          pl(t, n),
          dl(t, n, e, o),
          r(),
          hl(t, n)
      },
      close: ml,
      isOpen: gl,
      isPartOf: function(n, e, t, o) {
          return gl(0, 0, t) && t.get().exists(function(t) {
              return e.isPartOf(n, t, o)
          })
      },
      getState: function(t, n, e) {
          return e.get()
      },
      setContent: function(t, n, e, o) {
          return e.get().map(function() {
              return fl(t, n, e, o)
          })
      }
  }), bl = /* */
  Object.freeze({
      __proto__: null,
      events: function(e, o) {
          return Zo([er(Bo(), function(t, n) {
              ml(t, e, o)
          })])
      }
  }), yl = [ga("onOpen"), ga("onClose"), Ln("isPartOf"), Ln("getAttachPoint"), ne("cloakVisibilityAttr", "data-precloak-visibility")], xl = ac({
      fields: yl,
      name: "sandboxing",
      active: bl,
      apis: vl,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function() {
              var n = fe(st.none())
                , t = at("not-implemented");
              return di({
                  readState: t,
                  isOpen: function() {
                      return n.get().isSome()
                  },
                  clear: function() {
                      n.set(st.none())
                  },
                  set: function(t) {
                      n.set(st.some(t))
                  },
                  get: function() {
                      return n.get()
                  }
              })
          }
      })
  }), wl = at("dismiss.popups"), Sl = at("reposition.popups"), kl = at("mouse.released"), Cl = ln([ne("isExtraPart", c), te("fireEventInstead", [ne("event", zo())])]), Ol = function(t) {
      var e = En("Dismissal", Cl, t)
        , n = {};
      return n[wl()] = {
          schema: ln([Ln("target")]),
          onReceive: function(n, t) {
              xl.isOpen(n) && (xl.isPartOf(n, t.target) || e.isExtraPart(n, t.target) || e.fireEventInstead.fold(function() {
                  return xl.close(n)
              }, function(t) {
                  return Yo(n, t.event)
              }))
          }
      },
      n
  }, _l = ln([te("fireEventInstead", [ne("event", No())]), Gn("doReposition")]), Tl = function(t) {
      var e = En("Reposition", _l, t)
        , n = {};
      return n[Sl()] = {
          onReceive: function(n) {
              xl.isOpen(n) && e.fireEventInstead.fold(function() {
                  return e.doReposition(n)
              }, function(t) {
                  return Yo(n, t.event)
              })
          }
      },
      n
  }, El = function(t, n, e) {
      n.store.manager.onLoad(t, n, e)
  }, Dl = function(t, n, e) {
      n.store.manager.onUnload(t, n, e)
  }, Bl = /* */
  Object.freeze({
      __proto__: null,
      onLoad: El,
      onUnload: Dl,
      setValue: function(t, n, e, o) {
          n.store.manager.setValue(t, n, e, o)
      },
      getValue: function(t, n, e) {
          return n.store.manager.getValue(t, n, e)
      },
      getState: function(t, n, e) {
          return e
      }
  }), Al = /* */
  Object.freeze({
      __proto__: null,
      events: function(e, o) {
          var t = e.resetOnDom ? [sr(function(t, n) {
              El(t, e, o)
          }), lr(function(t, n) {
              Dl(t, e, o)
          })] : [tc(e, o, El)];
          return Zo(t)
      }
  }), Ml = function() {
      var t = fe(null);
      return di({
          set: t.set,
          get: t.get,
          isNotSet: function() {
              return null === t.get()
          },
          clear: function() {
              t.set(null)
          },
          readState: function() {
              return {
                  mode: "memory",
                  value: t.get()
              }
          }
      })
  }, Fl = function() {
      var i = fe({})
        , u = fe({});
      return di({
          readState: function() {
              return {
                  mode: "dataset",
                  dataByValue: i.get(),
                  dataByText: u.get()
              }
          },
          lookup: function(t) {
              return Ft(i.get(), t).orThunk(function() {
                  return Ft(u.get(), t)
              })
          },
          update: function(t) {
              var n = i.get()
                , e = u.get()
                , o = {}
                , r = {};
              ft(t, function(n) {
                  o[n.value] = n,
                  Ft(n, "meta").each(function(t) {
                      Ft(t, "text").each(function(t) {
                          r[t] = n
                      })
                  })
              }),
              i.set(ut(ut({}, n), o)),
              u.set(ut(ut({}, e), r))
          },
          clear: function() {
              i.set({}),
              u.set({})
          }
      })
  }, Il = /* */
  Object.freeze({
      __proto__: null,
      memory: Ml,
      dataset: Fl,
      manual: function() {
          return di({
              readState: function() {}
          })
      },
      init: function(t) {
          return t.store.manager.state(t)
      }
  }), Rl = function(t, n, e, o) {
      var r = n.store;
      e.update([o]),
      r.setValue(t, o),
      n.onSetValue(t, o)
  }, Vl = [Kn("initialValue"), Ln("getFallbackEntry"), Ln("getDataKey"), Ln("setValue"), ba("manager", {
      setValue: Rl,
      getValue: function(t, n, e) {
          var o = n.store
            , r = o.getDataKey(t);
          return e.lookup(r).fold(function() {
              return o.getFallbackEntry(r)
          }, function(t) {
              return t
          })
      },
      onLoad: function(n, e, o) {
          e.store.initialValue.each(function(t) {
              Rl(n, e, o, t)
          })
      },
      onUnload: function(t, n, e) {
          e.clear()
      },
      state: Fl
  })], Pl = [Ln("getValue"), ne("setValue", $), Kn("initialValue"), ba("manager", {
      setValue: function(t, n, e, o) {
          n.store.setValue(t, o),
          n.onSetValue(t, o)
      },
      getValue: function(t, n, e) {
          return n.store.getValue(t)
      },
      onLoad: function(n, e, t) {
          e.store.initialValue.each(function(t) {
              e.store.setValue(n, t)
          })
      },
      onUnload: $,
      state: fi.init
  })], Hl = [Kn("initialValue"), ba("manager", {
      setValue: function(t, n, e, o) {
          e.set(o),
          n.onSetValue(t, o)
      },
      getValue: function(t, n, e) {
          return e.get()
      },
      onLoad: function(t, n, e) {
          n.store.initialValue.each(function(t) {
              e.isNotSet() && e.set(t)
          })
      },
      onUnload: function(t, n, e) {
          e.clear()
      },
      state: Ml
  })], zl = [ee("store", {
      mode: "memory"
  }, An("mode", {
      memory: Hl,
      manual: Pl,
      dataset: Vl
  })), ga("onSetValue"), ne("resetOnDom", !1)], Nl = ac({
      fields: zl,
      name: "representing",
      active: Al,
      apis: Bl,
      extra: {
          setValueFrom: function(t, n) {
              var e = Nl.getValue(n);
              Nl.setValue(t, e)
          }
      },
      state: Il
  }), Ll = function(o, t) {
      return se(o, {}, V(t, function(t) {
          return n = t.name(),
          e = "Cannot configure " + t.name() + " for " + o,
          bn(n, n, Gt(), sn(function(t) {
              return yt("The field: " + n + " is forbidden. " + e)
          }));
          var n, e
      }).concat([le("dump", ct)]))
  }, jl = function(t) {
      return t.dump
  }, Ul = function(t, n) {
      return ut(ut({}, t.dump), ic(n))
  }, Wl = Ll, Gl = Ul, Xl = "placeholder", Yl = Vt([{
      single: ["required", "valueThunk"]
  }, {
      multiple: ["required", "valueThunks"]
  }]), ql = function(t) {
      return It(t, "uiType")
  }, Kl = function(t, n, e, o) {
      return ql(e) && e.uiType === Xl ? (i = e,
      u = o,
      (r = t).exists(function(t) {
          return t !== i.owner
      }) ? Yl.single(!0, at(i)) : Ft(u, i.name).fold(function() {
          throw new Error("Unknown placeholder component: " + i.name + "\nKnown: [" + Ct(u) + "]\nNamespace: " + r.getOr("none") + "\nSpec: " + JSON.stringify(i, null, 2))
      }, function(t) {
          return t.replace()
      })) : Yl.single(!1, at(e));
      var r, i, u
  }, Jl = function(i, u, a, c) {
      return Kl(i, 0, a, c).fold(function(t, n) {
          var e = ql(a) ? n(u, a.config, a.validated) : n(u)
            , o = Ft(e, "components").getOr([])
            , r = U(o, function(t) {
              return Jl(i, u, t, c)
          });
          return [ut(ut({}, e), {
              components: r
          })]
      }, function(t, n) {
          if (ql(a)) {
              var e = n(u, a.config, a.validated);
              return a.validated.preprocess.getOr(ct)(e)
          }
          return n(u)
      })
  }, $l = function(n, e, t, o) {
      var r, i, u, a = Tt(o, function(t, n) {
          return o = t,
          r = !1,
          {
              name: at(e = n),
              required: function() {
                  return o.fold(function(t, n) {
                      return t
                  }, function(t, n) {
                      return t
                  })
              },
              used: function() {
                  return r
              },
              replace: function() {
                  if (r)
                      throw new Error("Trying to use the same placeholder more than once: " + e);
                  return r = !0,
                  o
              }
          };
          var e, o, r
      }), c = (r = n,
      i = e,
      u = a,
      U(t, function(t) {
          return Jl(r, i, t, u)
      }));
      return _t(a, function(t) {
          if (!1 === t.used() && t.required())
              throw new Error("Placeholder: " + t.name() + " was not found in components list\nNamespace: " + n.getOr("none") + "\nComponents: " + JSON.stringify(e.components, null, 2))
      }),
      c
  }, Ql = Yl.single, Zl = Yl.multiple, tf = at(Xl), nf = Vt([{
      required: ["data"]
  }, {
      external: ["data"]
  }, {
      optional: ["data"]
  }, {
      group: ["data"]
  }]), ef = ne("factory", {
      sketch: ct
  }), of = ne("schema", []), rf = Ln("name"), uf = bn("pname", "pname", Xt(function(t) {
      return "<alloy." + Kr(t.name) + ">"
  }), Mn()), af = le("schema", function() {
      return [Kn("preprocess")]
  }), cf = ne("defaults", at({})), sf = ne("overrides", at({})), lf = fn([ef, of, rf, uf, cf, sf]), ff = fn([ef, of, rf, cf, sf]), df = fn([ef, of, rf, uf, cf, sf]), mf = fn([ef, af, rf, Ln("unit"), uf, cf, sf]), gf = function(t) {
      return t.fold(st.some, st.none, st.some, st.some)
  }, pf = function(t) {
      var n = function(t) {
          return t.name
      };
      return t.fold(n, n, n, n)
  }, hf = function(e, o) {
      return function(t) {
          var n = En("Converting part type", o, t);
          return e(n)
      }
  }, vf = hf(nf.required, lf), bf = hf(nf.external, ff), yf = hf(nf.optional, df), xf = hf(nf.group, mf), wf = at("entirety"), Sf = /* */
  Object.freeze({
      __proto__: null,
      required: vf,
      external: bf,
      optional: yf,
      group: xf,
      asNamedPart: gf,
      name: pf,
      asCommon: function(t) {
          return t.fold(ct, ct, ct, ct)
      },
      original: wf
  }), kf = function(t, n, e, o) {
      return zt(n.defaults(t, e, o), e, {
          uid: t.partUids[n.name]
      }, n.overrides(t, e, o))
  }, Cf = function(r, t) {
      var n = {};
      return ft(t, function(t) {
          gf(t).each(function(e) {
              var o = Of(r, e.pname);
              n[e.name] = function(t) {
                  var n = En("Part: " + e.name + " in " + r, fn(e.schema), t);
                  return ut(ut({}, o), {
                      config: t,
                      validated: n
                  })
              }
          })
      }),
      n
  }, Of = function(t, n) {
      return {
          uiType: tf(),
          owner: t,
          name: n
      }
  }, _f = function(t, n, e) {
      return {
          uiType: tf(),
          owner: t,
          name: n,
          config: e,
          validated: {}
      }
  }, Tf = function(t) {
      return U(t, function(t) {
          return t.fold(st.none, st.some, st.none, st.none).map(function(t) {
              return Xn(t.name, t.schema.concat([ya(wf())]))
          }).toArray()
      })
  }, Ef = function(t) {
      return V(t, pf)
  }, Df = function(t, n, e) {
      return o = n,
      i = {},
      r = {},
      ft(e, function(t) {
          t.fold(function(o) {
              i[o.pname] = Ql(!0, function(t, n, e) {
                  return o.factory.sketch(kf(t, o, n, e))
              })
          }, function(t) {
              var n = o.parts[t.name];
              r[t.name] = at(t.factory.sketch(kf(o, t, n[wf()]), n))
          }, function(o) {
              i[o.pname] = Ql(!1, function(t, n, e) {
                  return o.factory.sketch(kf(t, o, n, e))
              })
          }, function(r) {
              i[r.pname] = Zl(!0, function(n, t, e) {
                  var o = n[r.name];
                  return V(o, function(t) {
                      return r.factory.sketch(zt(r.defaults(n, t, e), t, r.overrides(n, t)))
                  })
              })
          })
      }),
      {
          internals: at(i),
          externals: at(r)
      };
      var o, i, r
  }, Bf = function(t, n, e) {
      return $l(st.some(t), n, n.components, e)
  }, Af = function(t, n, e) {
      var o = n.partUids[e];
      return t.getSystem().getByUid(o).toOptional()
  }, Mf = function(t, n, e) {
      return Af(t, n, e).getOrDie("Could not find part: " + e)
  }, Ff = function(t, n, e) {
      var o = {}
        , r = n.partUids
        , i = t.getSystem();
      return ft(e, function(t) {
          o[t] = at(i.getByUid(r[t]))
      }),
      o
  }, If = function(t, n) {
      var e = t.getSystem();
      return Tt(n.partUids, function(t, n) {
          return at(e.getByUid(t))
      })
  }, Rf = function(t) {
      return Ct(t.partUids)
  }, Vf = function(t, n, e) {
      var o = {}
        , r = n.partUids
        , i = t.getSystem();
      return ft(e, function(t) {
          o[t] = at(i.getByUid(r[t]).getOrDie())
      }),
      o
  }, Pf = function(n, t) {
      var e = Ef(t);
      return $t(V(e, function(t) {
          return {
              key: t,
              value: n + "-" + t
          }
      }))
  }, Hf = function(n) {
      return bn("partUids", "partUids", Yt(function(t) {
          return Pf(t.uid, n)
      }), Mn())
  }, zf = /* */
  Object.freeze({
      __proto__: null,
      generate: Cf,
      generateOne: _f,
      schemas: Tf,
      names: Ef,
      substitutes: Df,
      components: Bf,
      defaultUids: Pf,
      defaultUidsSchema: Hf,
      getAllParts: If,
      getAllPartNames: Rf,
      getPart: Af,
      getPartOrDie: Mf,
      getParts: Ff,
      getPartsOrDie: Vf
  }), Nf = function(t, n, e, o, r) {
      var i, u, a = (u = r,
      (0 < (i = o).length ? [Xn("parts", i)] : []).concat([Ln("uid"), ne("dom", {}), ne("components", []), ya("originalSpec"), ne("debug.sketcher", {})]).concat(u));
      return En(t + " [SpecSchema]", ln(a.concat(n)), e)
  }, Lf = function(t, n, e, o, r) {
      var i = jf(r)
        , u = Tf(e)
        , a = Hf(e)
        , c = Nf(t, n, i, u, [a])
        , s = Df(0, c, e);
      return o(c, Bf(t, c, s.internals()), i, s.externals())
  }, jf = function(t) {
      return It(t, "uid") ? t : ut(ut({}, t), {
          uid: ei("uid")
      })
  };
  var Uf, Wf, Gf = ln([Ln("name"), Ln("factory"), Ln("configFields"), ne("apis", {}), ne("extraApis", {})]), Xf = ln([Ln("name"), Ln("factory"), Ln("configFields"), Ln("partFields"), ne("apis", {}), ne("extraApis", {})]), Yf = function(t) {
      var i = En("Sketcher for " + t.name, Gf, t)
        , n = Tt(i.apis, li)
        , e = Tt(i.extraApis, ai);
      return ut(ut({
          name: i.name,
          configFields: i.configFields,
          sketch: function(t) {
              return n = i.name,
              e = i.configFields,
              o = i.factory,
              r = jf(t),
              o(Nf(n, e, r, [], []), r);
              var n, e, o, r
          }
      }, n), e)
  }, qf = function(t) {
      var n = En("Sketcher for " + t.name, Xf, t)
        , e = Cf(n.name, n.partFields)
        , o = Tt(n.apis, li)
        , r = Tt(n.extraApis, ai);
      return ut(ut({
          name: n.name,
          partFields: n.partFields,
          configFields: n.configFields,
          sketch: function(t) {
              return Lf(n.name, n.configFields, n.partFields, n.factory, t)
          },
          parts: e
      }, o), r)
  }, Kf = function(t) {
      for (var n = [], e = function(t) {
          n.push(t)
      }, o = 0; o < t.length; o++)
          t[o].each(e);
      return n
  }, Jf = function(t, n) {
      return t ? st.some(n) : st.none()
  }, $f = function(t) {
      return "input" === mr(t) && "radio" !== Nr(t, "type") || "textarea" === mr(t)
  }, Qf = /* */
  Object.freeze({
      __proto__: null,
      getCurrent: function(t, n, e) {
          return n.find(t)
      }
  }), Zf = [Ln("find")], td = ac({
      fields: Zf,
      name: "composing",
      apis: Qf
  }), nd = function(e, o, t, r) {
      var n = ms(e.element, "." + o.highlightClass);
      ft(n, function(n) {
          F(r, function(t) {
              return t.element === n
          }) || (Bi(n, o.highlightClass),
          e.getSystem().getByDom(n).each(function(t) {
              o.onDehighlight(e, t),
              Yo(t, Xo())
          }))
      })
  }, ed = function(t, n, e, o) {
      nd(t, n, 0, [o]),
      od(t, n, e, o) || (Ei(o.element, n.highlightClass),
      n.onHighlight(t, o),
      Yo(o, Go()))
  }, od = function(t, n, e, o) {
      return Ai(o.element, n.highlightClass)
  }, rd = function(t, n, e, o) {
      var r = ms(t.element, "." + n.itemClass);
      return st.from(r[o]).fold(function() {
          return mt.error("No element found with index " + o)
      }, t.getSystem().getByDom)
  }, id = function(n, t, e) {
      return Ku(n.element, "." + t.itemClass).bind(function(t) {
          return n.getSystem().getByDom(t).toOptional()
      })
  }, ud = function(n, t, e) {
      var o = ms(n.element, "." + t.itemClass);
      return (0 < o.length ? st.some(o[o.length - 1]) : st.none()).bind(function(t) {
          return n.getSystem().getByDom(t).toOptional()
      })
  }, ad = function(e, n, t, o) {
      var r = ms(e.element, "." + n.itemClass);
      return j(r, function(t) {
          return Ai(t, n.highlightClass)
      }).bind(function(t) {
          var n = Oc(t, o, 0, r.length - 1);
          return e.getSystem().getByDom(r[n]).toOptional()
      })
  }, cd = function(n, t, e) {
      var o = ms(n.element, "." + t.itemClass);
      return Kf(V(o, function(t) {
          return n.getSystem().getByDom(t).toOptional()
      }))
  }, sd = /* */
  Object.freeze({
      __proto__: null,
      dehighlightAll: function(t, n, e) {
          return nd(t, n, 0, [])
      },
      dehighlight: function(t, n, e, o) {
          od(t, n, e, o) && (Bi(o.element, n.highlightClass),
          n.onDehighlight(t, o),
          Yo(o, Xo()))
      },
      highlight: ed,
      highlightFirst: function(n, e, o) {
          id(n, e).each(function(t) {
              ed(n, e, o, t)
          })
      },
      highlightLast: function(n, e, o) {
          ud(n, e).each(function(t) {
              ed(n, e, o, t)
          })
      },
      highlightAt: function(n, e, o, t) {
          rd(n, e, o, t).fold(function(t) {
              throw new Error(t)
          }, function(t) {
              ed(n, e, o, t)
          })
      },
      highlightBy: function(n, e, o, t) {
          var r = cd(n, e);
          L(r, t).each(function(t) {
              ed(n, e, o, t)
          })
      },
      isHighlighted: od,
      getHighlighted: function(n, t, e) {
          return Ku(n.element, "." + t.highlightClass).bind(function(t) {
              return n.getSystem().getByDom(t).toOptional()
          })
      },
      getFirst: id,
      getLast: ud,
      getPrevious: function(t, n, e) {
          return ad(t, n, 0, -1)
      },
      getNext: function(t, n, e) {
          return ad(t, n, 0, 1)
      },
      getCandidates: cd
  }), ld = [Ln("highlightClass"), Ln("itemClass"), ga("onHighlight"), ga("onDehighlight")], fd = ac({
      fields: ld,
      name: "highlighting",
      apis: sd
  }), dd = [8], md = [9], gd = [13], pd = [27], hd = [32], vd = [37], bd = [38], yd = [39], xd = [40], wd = function(t, n, e) {
      var o = G(t.slice(0, n))
        , r = G(t.slice(n + 1));
      return L(o.concat(r), e)
  }, Sd = function(t, n, e) {
      var o = G(t.slice(0, n));
      return L(o, e)
  }, kd = function(t, n, e) {
      var o = t.slice(0, n)
        , r = t.slice(n + 1);
      return L(r.concat(o), e)
  }, Cd = function(t, n, e) {
      var o = t.slice(n + 1);
      return L(o, e)
  }, Od = function(e) {
      return function(t) {
          var n = t.raw;
          return M(e, n.which)
      }
  }, _d = function(t) {
      return function(n) {
          return W(t, function(t) {
              return t(n)
          })
      }
  }, Td = function(t) {
      return !0 === t.raw.shiftKey
  }, Ed = function(t) {
      return !0 === t.raw.ctrlKey
  }, Dd = x(Td), Bd = function(t, n) {
      return {
          matches: t,
          classification: n
      }
  }, Ad = function(t, n, e) {
      n.exists(function(n) {
          return e.exists(function(t) {
              return Ge(t, n)
          })
      }) || qo(t, Lo(), {
          prevFocus: n,
          newFocus: e
      })
  }, Md = function() {
      var r = function(t) {
          return pc(t.element)
      };
      return {
          get: r,
          set: function(t, n) {
              var e = r(t);
              t.getSystem().triggerFocus(n, t.element);
              var o = r(t);
              Ad(t, e, o)
          }
      }
  }, Fd = function() {
      var r = function(t) {
          return fd.getHighlighted(t).map(function(t) {
              return t.element
          })
      };
      return {
          get: r,
          set: function(n, t) {
              var e = r(n);
              n.getSystem().getByDom(t).fold($, function(t) {
                  fd.highlight(n, t)
              });
              var o = r(n);
              Ad(n, e, o)
          }
      }
  };
  (Wf = Uf = Uf || {}).OnFocusMode = "onFocus",
  Wf.OnEnterOrSpaceMode = "onEnterOrSpace",
  Wf.OnApiMode = "onApi";
  var Id, Rd = function(t, n, e, o, a) {
      var c = function(n, e, t, o, r) {
          var i, u, a = t(n, e, o, r);
          return i = a,
          u = e.event,
          L(i, function(t) {
              return t.matches(u)
          }).map(function(t) {
              return t.classification
          }).bind(function(t) {
              return t(n, e, o, r)
          })
      }
        , r = {
          schema: function() {
              return t.concat([ne("focusManager", Md()), ee("focusInside", "onFocus", Cn(function(t) {
                  return M(["onFocus", "onEnterOrSpace", "onApi"], t) ? mt.value(t) : mt.error("Invalid value for focusInside")
              })), ba("handler", r), ba("state", n), ba("sendFocusIn", a)])
          },
          processKey: c,
          toEvents: function(i, u) {
              var t = i.focusInside !== Uf.OnFocusMode ? st.none() : a(i).map(function(e) {
                  return er(So(), function(t, n) {
                      e(t, i, u),
                      n.stop()
                  })
              })
                , n = [er(mo(), function(o, r) {
                  c(o, r, e, i, u).fold(function() {
                      var n, e, t;
                      n = o,
                      e = r,
                      t = Od(hd.concat(gd))(e.event),
                      i.focusInside === Uf.OnEnterOrSpaceMode && t && $e(n, e) && a(i).each(function(t) {
                          t(n, i, u),
                          e.stop()
                      })
                  }, function(t) {
                      r.stop()
                  })
              }), er(go(), function(t, n) {
                  c(t, n, o, i, u).each(function(t) {
                      n.stop()
                  })
              })];
              return Zo(t.toArray().concat(n))
          }
      };
      return r
  }, Vd = function(t) {
      var n = [Kn("onEscape"), Kn("onEnter"), ne("selector", '[data-alloy-tabstop="true"]:not(:disabled)'), ne("firstTabstop", 0), ne("useTabstopAt", b), Kn("visibilitySelector")].concat([t])
        , u = function(t, n) {
          var e = t.visibilitySelector.bind(function(t) {
              return Ju(n, t)
          }).getOr(n);
          return 0 < bu(e)
      }
        , e = function(n, e, t) {
          var o, r, i;
          o = e,
          r = ms(n.element, o.selector),
          i = H(r, function(t) {
              return u(o, t)
          }),
          st.from(i[o.firstTabstop]).each(function(t) {
              e.focusManager.set(n, t)
          })
      }
        , a = function(n, t, e, o, r) {
          return r(t, e, function(t) {
              return u(n = o, e = t) && n.useTabstopAt(e);
              var n, e
          }).fold(function() {
              return o.cyclic ? st.some(!0) : st.none()
          }, function(t) {
              return o.focusManager.set(n, t),
              st.some(!0)
          })
      }
        , r = function(n, t, e, o) {
          var r, i, u = ms(n.element, e.selector);
          return r = n,
          (i = e).focusManager.get(r).bind(function(t) {
              return Ju(t, i.selector)
          }).bind(function(t) {
              return j(u, y(Ge, t)).bind(function(t) {
                  return a(n, u, t, e, o)
              })
          })
      }
        , o = at([Bd(_d([Td, Od(md)]), function(t, n, e) {
          var o = e.cyclic ? wd : Sd;
          return r(t, 0, e, o)
      }), Bd(Od(md), function(t, n, e) {
          var o = e.cyclic ? kd : Cd;
          return r(t, 0, e, o)
      }), Bd(Od(pd), function(n, e, t) {
          return t.onEscape.bind(function(t) {
              return t(n, e)
          })
      }), Bd(_d([Dd, Od(gd)]), function(n, e, t) {
          return t.onEnter.bind(function(t) {
              return t(n, e)
          })
      })])
        , i = at([]);
      return Rd(n, fi.init, o, i, function() {
          return st.some(e)
      })
  }, Pd = Vd(le("cyclic", c)), Hd = Vd(le("cyclic", b)), zd = function(t, n, e) {
      return $f(e) && Od(hd)(n.event) ? st.none() : (Jo(t, e, _o()),
      st.some(!0))
  }, Nd = function(t, n) {
      return st.some(!0)
  }, Ld = [ne("execute", zd), ne("useSpace", !1), ne("useEnter", !0), ne("useControlEnter", !1), ne("useDown", !1)], jd = function(t, n, e) {
      return e.execute(t, n, t.element)
  }, Ud = Rd(Ld, fi.init, function(t, n, e, o) {
      var r = e.useSpace && !$f(t.element) ? hd : []
        , i = e.useEnter ? gd : []
        , u = e.useDown ? xd : []
        , a = r.concat(i).concat(u);
      return [Bd(Od(a), jd)].concat(e.useControlEnter ? [Bd(_d([Ed, Od(gd)]), jd)] : [])
  }, function(t, n, e, o) {
      return e.useSpace && !$f(t.element) ? [Bd(Od(hd), Nd)] : []
  }, function() {
      return st.none()
  }), Wd = function() {
      var e = fe(st.none());
      return di({
          readState: function() {
              return e.get().map(function(t) {
                  return {
                      numRows: String(t.numRows),
                      numColumns: String(t.numColumns)
                  }
              }).getOr({
                  numRows: "?",
                  numColumns: "?"
              })
          },
          setGridSize: function(t, n) {
              e.set(st.some({
                  numRows: t,
                  numColumns: n
              }))
          },
          getNumRows: function() {
              return e.get().map(function(t) {
                  return t.numRows
              })
          },
          getNumColumns: function() {
              return e.get().map(function(t) {
                  return t.numColumns
              })
          }
      })
  }, Gd = /* */
  Object.freeze({
      __proto__: null,
      flatgrid: Wd,
      init: function(t) {
          return t.state(t)
      }
  }), Xd = function(i) {
      return function(t, n, e, o) {
          var r = i(t.element);
          return Jd(r, t, n, e, o)
      }
  }, Yd = function(t, n) {
      var e = Nc(t, n);
      return Xd(e)
  }, qd = function(t, n) {
      var e = Nc(n, t);
      return Xd(e)
  }, Kd = function(r) {
      return function(t, n, e, o) {
          return Jd(r, t, n, e, o)
      }
  }, Jd = function(n, e, t, o, r) {
      return o.focusManager.get(e).bind(function(t) {
          return n(e.element, t, o, r)
      }).map(function(t) {
          return o.focusManager.set(e, t),
          !0
      })
  }, $d = Kd, Qd = Kd, Zd = Kd, tm = function(t) {
      return !((n = t.dom).offsetWidth <= 0 && n.offsetHeight <= 0);
      var n
  }, nm = function(t, n, e) {
      var o, r = ms(t, e), i = H(r, tm);
      return j(o = i, function(t) {
          return Ge(t, n)
      }).map(function(t) {
          return {
              index: t,
              candidates: o
          }
      })
  }, em = function(t, n) {
      return j(t, function(t) {
          return Ge(n, t)
      })
  }, om = function(e, t, o, n) {
      return n(Math.floor(t / o), t % o).bind(function(t) {
          var n = t.row * o + t.column;
          return 0 <= n && n < e.length ? st.some(e[n]) : st.none()
      })
  }, rm = function(r, t, i, u, a) {
      return om(r, t, u, function(t, n) {
          var e = t === i - 1 ? r.length - t * u : u
            , o = Oc(n, a, 0, e - 1);
          return st.some({
              row: t,
              column: o
          })
      })
  }, im = function(i, t, u, a, c) {
      return om(i, t, a, function(t, n) {
          var e = Oc(t, c, 0, u - 1)
            , o = e === u - 1 ? i.length - e * a : a
            , r = _c(n, 0, o - 1);
          return st.some({
              row: e,
              column: r
          })
      })
  }, um = [Ln("selector"), ne("execute", zd), pa("onEscape"), ne("captureTab", !1), xa()], am = function(n, e, t) {
      Ku(n.element, e.selector).each(function(t) {
          e.focusManager.set(n, t)
      })
  }, cm = function(r) {
      return function(t, n, e, o) {
          return nm(t, n, e.selector).bind(function(t) {
              return r(t.candidates, t.index, o.getNumRows().getOr(e.initSize.numRows), o.getNumColumns().getOr(e.initSize.numColumns))
          })
      }
  }, sm = function(t, n, e) {
      return e.captureTab ? st.some(!0) : st.none()
  }, lm = cm(function(t, n, e, o) {
      return rm(t, n, e, o, -1)
  }), fm = cm(function(t, n, e, o) {
      return rm(t, n, e, o, 1)
  }), dm = cm(function(t, n, e, o) {
      return im(t, n, e, o, -1)
  }), mm = cm(function(t, n, e, o) {
      return im(t, n, e, o, 1)
  }), gm = at([Bd(Od(vd), Yd(lm, fm)), Bd(Od(yd), qd(lm, fm)), Bd(Od(bd), $d(dm)), Bd(Od(xd), Qd(mm)), Bd(_d([Td, Od(md)]), sm), Bd(_d([Dd, Od(md)]), sm), Bd(Od(pd), function(t, n, e) {
      return e.onEscape(t, n)
  }), Bd(Od(hd.concat(gd)), function(n, e, o, t) {
      return r = n,
      (i = o).focusManager.get(r).bind(function(t) {
          return Ju(t, i.selector)
      }).bind(function(t) {
          return o.execute(n, e, t)
      });
      var r, i
  })]), pm = at([Bd(Od(hd), Nd)]), hm = Rd(um, Wd, gm, pm, function() {
      return st.some(am)
  }), vm = function(t, n, e, i) {
      var u = function(t, n, e) {
          var o, r = Oc(n, i, 0, e.length - 1);
          return r === t ? st.none() : (o = e[r],
          "button" === mr(o) && "disabled" === Nr(o, "disabled") ? u(t, r, e) : st.from(e[r]))
      };
      return nm(t, e, n).bind(function(t) {
          var n = t.index
            , e = t.candidates;
          return u(n, n, e)
      })
  }, bm = [Ln("selector"), ne("getInitial", st.none), ne("execute", zd), pa("onEscape"), ne("executeOnMove", !1), ne("allowVertical", !0)], ym = function(n, e, o) {
      return t = n,
      (r = o).focusManager.get(t).bind(function(t) {
          return Ju(t, r.selector)
      }).bind(function(t) {
          return o.execute(n, e, t)
      });
      var t, r
  }, xm = function(n, e, t) {
      e.getInitial(n).orThunk(function() {
          return Ku(n.element, e.selector)
      }).each(function(t) {
          e.focusManager.set(n, t)
      })
  }, wm = function(t, n, e) {
      return vm(t, e.selector, n, -1)
  }, Sm = function(t, n, e) {
      return vm(t, e.selector, n, 1)
  }, km = function(r) {
      return function(t, n, e, o) {
          return r(t, n, e, o).bind(function() {
              return e.executeOnMove ? ym(t, n, e) : st.some(!0)
          })
      }
  }, Cm = function(t, n, e) {
      return e.onEscape(t, n)
  }, Om = at([Bd(Od(hd), Nd)]), _m = Rd(bm, fi.init, function(t, n, e, o) {
      var r = vd.concat(e.allowVertical ? bd : [])
        , i = yd.concat(e.allowVertical ? xd : []);
      return [Bd(Od(r), km(Yd(wm, Sm))), Bd(Od(i), km(qd(wm, Sm))), Bd(Od(gd), ym), Bd(Od(hd), ym), Bd(Od(pd), Cm)]
  }, Om, function() {
      return st.some(xm)
  }), Tm = function(t, n, e) {
      return st.from(t[n]).bind(function(t) {
          return st.from(t[e]).map(function(t) {
              return {
                  rowIndex: n,
                  columnIndex: e,
                  cell: t
              }
          })
      })
  }, Em = function(t, n, e, o) {
      var r = t[n].length
        , i = Oc(e, o, 0, r - 1);
      return Tm(t, n, i)
  }, Dm = function(t, n, e, o) {
      var r = Oc(e, o, 0, t.length - 1)
        , i = t[r].length
        , u = _c(n, 0, i - 1);
      return Tm(t, r, u)
  }, Bm = function(t, n, e, o) {
      var r = t[n].length
        , i = _c(e + o, 0, r - 1);
      return Tm(t, n, i)
  }, Am = function(t, n, e, o) {
      var r = _c(e + o, 0, t.length - 1)
        , i = t[r].length
        , u = _c(n, 0, i - 1);
      return Tm(t, r, u)
  }, Mm = [Xn("selectors", [Ln("row"), Ln("cell")]), ne("cycles", !0), ne("previousSelector", st.none), ne("execute", zd)], Fm = function(n, e, t) {
      e.previousSelector(n).orThunk(function() {
          var t = e.selectors;
          return Ku(n.element, t.cell)
      }).each(function(t) {
          e.focusManager.set(n, t)
      })
  }, Im = function(t, n) {
      return function(e, o, i) {
          var u = i.cycles ? t : n;
          return Ju(o, i.selectors.row).bind(function(t) {
              var n = ms(t, i.selectors.cell);
              return em(n, o).bind(function(o) {
                  var r = ms(e, i.selectors.row);
                  return em(r, t).bind(function(t) {
                      var n, e = (n = i,
                      V(r, function(t) {
                          return ms(t, n.selectors.cell)
                      }));
                      return u(e, t, o).map(function(t) {
                          return t.cell
                      })
                  })
              })
          })
      }
  }, Rm = Im(function(t, n, e) {
      return Em(t, n, e, -1)
  }, function(t, n, e) {
      return Bm(t, n, e, -1)
  }), Vm = Im(function(t, n, e) {
      return Em(t, n, e, 1)
  }, function(t, n, e) {
      return Bm(t, n, e, 1)
  }), Pm = Im(function(t, n, e) {
      return Dm(t, e, n, -1)
  }, function(t, n, e) {
      return Am(t, e, n, -1)
  }), Hm = Im(function(t, n, e) {
      return Dm(t, e, n, 1)
  }, function(t, n, e) {
      return Am(t, e, n, 1)
  }), zm = at([Bd(Od(vd), Yd(Rm, Vm)), Bd(Od(yd), qd(Rm, Vm)), Bd(Od(bd), $d(Pm)), Bd(Od(xd), Qd(Hm)), Bd(Od(hd.concat(gd)), function(n, e, o) {
      return pc(n.element).bind(function(t) {
          return o.execute(n, e, t)
      })
  })]), Nm = at([Bd(Od(hd), Nd)]), Lm = Rd(Mm, fi.init, zm, Nm, function() {
      return st.some(Fm)
  }), jm = [Ln("selector"), ne("execute", zd), ne("moveOnTab", !1)], Um = function(n, e, o) {
      return o.focusManager.get(n).bind(function(t) {
          return o.execute(n, e, t)
      })
  }, Wm = function(n, e, t) {
      Ku(n.element, e.selector).each(function(t) {
          e.focusManager.set(n, t)
      })
  }, Gm = function(t, n, e) {
      return vm(t, e.selector, n, -1)
  }, Xm = function(t, n, e) {
      return vm(t, e.selector, n, 1)
  }, Ym = at([Bd(Od(bd), Zd(Gm)), Bd(Od(xd), Zd(Xm)), Bd(_d([Td, Od(md)]), function(t, n, e, o) {
      return e.moveOnTab ? Zd(Gm)(t, n, e, o) : st.none()
  }), Bd(_d([Dd, Od(md)]), function(t, n, e, o) {
      return e.moveOnTab ? Zd(Xm)(t, n, e, o) : st.none()
  }), Bd(Od(gd), Um), Bd(Od(hd), Um)]), qm = at([Bd(Od(hd), Nd)]), Km = Rd(jm, fi.init, Ym, qm, function() {
      return st.some(Wm)
  }), Jm = [pa("onSpace"), pa("onEnter"), pa("onShiftEnter"), pa("onLeft"), pa("onRight"), pa("onTab"), pa("onShiftTab"), pa("onUp"), pa("onDown"), pa("onEscape"), ne("stopSpaceKeyup", !1), Kn("focusIn")], $m = Rd(Jm, fi.init, function(t, n, e) {
      return [Bd(Od(hd), e.onSpace), Bd(_d([Dd, Od(gd)]), e.onEnter), Bd(_d([Td, Od(gd)]), e.onShiftEnter), Bd(_d([Td, Od(md)]), e.onShiftTab), Bd(_d([Dd, Od(md)]), e.onTab), Bd(Od(bd), e.onUp), Bd(Od(xd), e.onDown), Bd(Od(vd), e.onLeft), Bd(Od(yd), e.onRight), Bd(Od(hd), e.onSpace), Bd(Od(pd), e.onEscape)]
  }, function(t, n, e) {
      return e.stopSpaceKeyup ? [Bd(Od(hd), Nd)] : []
  }, function(t) {
      return t.focusIn
  }), Qm = Pd.schema(), Zm = Hd.schema(), tg = _m.schema(), ng = hm.schema(), eg = Lm.schema(), og = Ud.schema(), rg = Km.schema(), ig = $m.schema(), ug = sc({
      branchKey: "mode",
      branches: /* */
      Object.freeze({
          __proto__: null,
          acyclic: Qm,
          cyclic: Zm,
          flow: tg,
          flatgrid: ng,
          matrix: eg,
          execution: og,
          menu: rg,
          special: ig
      }),
      name: "keying",
      active: {
          events: function(t, n) {
              return t.handler.toEvents(t, n)
          }
      },
      apis: {
          focusIn: function(n, e, o) {
              e.sendFocusIn(e).fold(function() {
                  n.getSystem().triggerFocus(n.element, n.element)
              }, function(t) {
                  t(n, e, o)
              })
          },
          setGridSize: function(t, n, e, o, r) {
              Rt(e, "setGridSize") ? e.setGridSize(o, r) : console.error("Layout does not support setGridSize")
          }
      },
      state: Gd
  }), ag = function(t, n, e, o) {
      var r = t.getSystem().build(o);
      rl(t, r, e)
  }, cg = function(t, n, e, o) {
      var r = sg(t);
      L(r, function(t) {
          return Ge(o.element, t.element)
      }).each(ul)
  }, sg = function(t, n) {
      return t.components()
  }, lg = function(n, t, e, r, o) {
      var i = sg(n);
      return st.from(i[r]).map(function(t) {
          return cg(n, 0, 0, t),
          o.each(function(t) {
              ag(n, 0, function(t, n) {
                  var e, o;
                  o = n,
                  Tr(e = t, r).fold(function() {
                      Ar(e, o)
                  }, function(t) {
                      Er(t, o)
                  })
              }, t)
          }),
          t
      })
  }, fg = ac({
      fields: [],
      name: "replacing",
      apis: /* */
      Object.freeze({
          __proto__: null,
          append: function(t, n, e, o) {
              ag(t, 0, Ar, o)
          },
          prepend: function(t, n, e, o) {
              ag(t, 0, Br, o)
          },
          remove: cg,
          replaceAt: lg,
          replaceBy: function(n, t, e, o, r) {
              var i = sg(n);
              return j(i, o).bind(function(t) {
                  return lg(n, 0, 0, t, r)
              })
          },
          set: function(n, t, e, o) {
              hc(function() {
                  var t = V(o, n.getSystem().build);
                  el(n, t)
              }, n.element)
          },
          contents: sg
      })
  }), dg = function(t, n) {
      var e, o;
      return {
          key: t,
          value: {
              config: {},
              me: (e = t,
              o = Zo(n),
              ac({
                  fields: [Ln("enabled")],
                  name: e,
                  active: {
                      events: at(o)
                  }
              })),
              configAsRaw: at({}),
              initialConfig: {},
              state: fi
          }
      }
  }, mg = function(t, n) {
      n.ignore || (mc(t.element),
      n.onFocus(t))
  }, gg = /* */
  Object.freeze({
      __proto__: null,
      focus: mg,
      blur: function(t, n) {
          n.ignore || t.element.dom.blur()
      },
      isFocused: function(t) {
          return n = t.element,
          e = Hi(n).dom,
          n.dom === e.activeElement;
          var n, e
      }
  }), pg = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function(t, n) {
          var e = n.ignore ? {} : {
              attributes: {
                  tabindex: "-1"
              }
          };
          return gi(e)
      },
      events: function(e) {
          return Zo([er(So(), function(t, n) {
              mg(t, e),
              n.stop()
          })].concat(e.stopMousedown ? [er(io(), function(t, n) {
              n.event.prevent()
          })] : []))
      }
  }), hg = [ga("onFocus"), ne("stopMousedown", !1), ne("ignore", !1)], vg = ac({
      fields: hg,
      name: "focusing",
      active: pg,
      apis: gg
  }), bg = function(t, n, e) {
      var o = n.aria;
      o.update(t, o, e.get())
  }, yg = function(n, t, e) {
      t.toggleClass.each(function(t) {
          (e.get() ? Ei : Bi)(n.element, t)
      })
  }, xg = function(t, n, e) {
      kg(t, n, e, !e.get())
  }, wg = function(t, n, e) {
      e.set(!0),
      yg(t, n, e),
      bg(t, n, e)
  }, Sg = function(t, n, e) {
      e.set(!1),
      yg(t, n, e),
      bg(t, n, e)
  }, kg = function(t, n, e, o) {
      (o ? wg : Sg)(t, n, e)
  }, Cg = function(t, n, e) {
      kg(t, n, e, n.selected)
  }, Og = /* */
  Object.freeze({
      __proto__: null,
      onLoad: Cg,
      toggle: xg,
      isOn: function(t, n, e) {
          return e.get()
      },
      on: wg,
      off: Sg,
      set: kg
  }), _g = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function() {
          return gi({})
      },
      events: function(t, n) {
          var e, o, r, i = (e = t,
          o = n,
          r = xg,
          dr(function(t) {
              r(t, e, o)
          })), u = tc(t, n, Cg);
          return Zo(dt([t.toggleOnExecute ? [i] : [], [u]]))
      }
  }), Tg = function(t, n, e) {
      zr(t.element, "aria-expanded", e)
  }, Eg = [ne("selected", !1), Kn("toggleClass"), ne("toggleOnExecute", !0), ee("aria", {
      mode: "none"
  }, An("mode", {
      pressed: [ne("syncWithExpanded", !1), ba("update", function(t, n, e) {
          zr(t.element, "aria-pressed", e),
          n.syncWithExpanded && Tg(t, n, e)
      })],
      checked: [ba("update", function(t, n, e) {
          zr(t.element, "aria-checked", e)
      })],
      expanded: [ba("update", Tg)],
      selected: [ba("update", function(t, n, e) {
          zr(t.element, "aria-selected", e)
      })],
      none: [ba("update", $)]
  }))], Dg = ac({
      fields: Eg,
      name: "toggling",
      active: _g,
      apis: Og,
      state: (Id = !1,
      {
          init: function() {
              var n = fe(Id);
              return {
                  get: function() {
                      return n.get()
                  },
                  set: function(t) {
                      return n.set(t)
                  },
                  clear: function() {
                      return n.set(Id)
                  },
                  readState: function() {
                      return n.get()
                  }
              }
          }
      })
  }), Bg = function() {
      var t = function(t, n) {
          n.stop(),
          Ko(t)
      };
      return [er(vo(), t), er(Eo(), t), ar(no()), ar(io())]
  }, Ag = function(t) {
      return Zo(dt([t.map(function(e) {
          return dr(function(t, n) {
              e(t),
              n.stop()
          })
      }).toArray(), Bg()]))
  }, Mg = "alloy.item-hover", Fg = "alloy.item-focus", Ig = function(t) {
      (pc(t.element).isNone() || vg.isFocused(t)) && (vg.isFocused(t) || vg.focus(t),
      qo(t, Mg, {
          item: t
      }))
  }, Rg = function(t) {
      qo(t, Fg, {
          item: t
      })
  }, Vg = at(Mg), Pg = at(Fg), Hg = [Ln("data"), Ln("components"), Ln("dom"), ne("hasSubmenu", !1), Kn("toggling"), Wl("itemBehaviours", [Dg, vg, ug, Nl]), ne("ignoreFocus", !1), ne("domModification", {}), ba("builder", function(t) {
      return {
          dom: t.dom,
          domModification: ut(ut({}, t.domModification), {
              attributes: ut(ut(ut({
                  role: t.toggling.isSome() ? "menuitemcheckbox" : "menuitem"
              }, t.domModification.attributes), {
                  "aria-haspopup": t.hasSubmenu
              }), t.hasSubmenu ? {
                  "aria-expanded": !1
              } : {})
          }),
          behaviours: Gl(t.itemBehaviours, [t.toggling.fold(Dg.revoke, function(t) {
              return Dg.config(ut({
                  aria: {
                      mode: "checked"
                  }
              }, t))
          }), vg.config({
              ignore: t.ignoreFocus,
              stopMousedown: t.ignoreFocus,
              onFocus: function(t) {
                  Rg(t)
              }
          }), ug.config({
              mode: "execution"
          }), Nl.config({
              store: {
                  mode: "memory",
                  initialValue: t.data
              }
          }), dg("item-type-events", S(Bg(), [er(so(), Ig), er(To(), vg.focus)]))]),
          components: t.components,
          eventOrder: t.eventOrder
      }
  }), ne("eventOrder", {})], zg = [Ln("dom"), Ln("components"), ba("builder", function(t) {
      return {
          dom: t.dom,
          components: t.components,
          events: Zo([(n = To(),
          er(n, function(t, n) {
              n.stop()
          }))])
      };
      var n
  })], Ng = function() {
      return "item-widget"
  }, Lg = at([vf({
      name: "widget",
      overrides: function(n) {
          return {
              behaviours: ic([Nl.config({
                  store: {
                      mode: "manual",
                      getValue: function(t) {
                          return n.data
                      },
                      setValue: function() {}
                  }
              })])
          }
      }
  })]), jg = [Ln("uid"), Ln("data"), Ln("components"), Ln("dom"), ne("autofocus", !1), ne("ignoreFocus", !1), Wl("widgetBehaviours", [Nl, vg, ug]), ne("domModification", {}), Hf(Lg()), ba("builder", function(e) {
      var t = Df(Ng(), e, Lg())
        , n = Bf(Ng(), e, t.internals())
        , o = function(t) {
          return Af(t, e, "widget").map(function(t) {
              return ug.focusIn(t),
              t
          })
      }
        , r = function(t, n) {
          return $f(n.event.target) || e.autofocus && n.setSource(t.element),
          st.none()
      };
      return {
          dom: e.dom,
          components: n,
          domModification: e.domModification,
          events: Zo([dr(function(t, n) {
              o(t).each(function(t) {
                  n.stop()
              })
          }), er(so(), Ig), er(To(), function(t, n) {
              e.autofocus ? o(t) : vg.focus(t)
          })]),
          behaviours: Gl(e.widgetBehaviours, [Nl.config({
              store: {
                  mode: "memory",
                  initialValue: e.data
              }
          }), vg.config({
              ignore: e.ignoreFocus,
              onFocus: function(t) {
                  Rg(t)
              }
          }), ug.config({
              mode: "special",
              focusIn: e.autofocus ? function(t) {
                  o(t)
              }
              : lc(),
              onLeft: r,
              onRight: r,
              onEscape: function(t, n) {
                  return vg.isFocused(t) || e.autofocus ? (e.autofocus && n.setSource(t.element),
                  st.none()) : (vg.focus(t),
                  st.some(!0))
              }
          })])
      }
  })], Ug = An("type", {
      widget: jg,
      item: Hg,
      separator: zg
  }), Wg = at([xf({
      factory: {
          sketch: function(t) {
              var n = En("menu.spec item", Ug, t);
              return n.builder(n)
          }
      },
      name: "items",
      unit: "item",
      defaults: function(t, n) {
          return n.hasOwnProperty("uid") ? n : ut(ut({}, n), {
              uid: ei("item")
          })
      },
      overrides: function(t, n) {
          return {
              type: n.type,
              ignoreFocus: t.fakeFocus,
              domModification: {
                  classes: [t.markers.item]
              }
          }
      }
  })]), Gg = at([Ln("value"), Ln("items"), Ln("dom"), Ln("components"), ne("eventOrder", {}), Ll("menuBehaviours", [fd, Nl, td, ug]), ee("movement", {
      mode: "menu",
      moveOnTab: !0
  }, An("mode", {
      grid: [xa(), ba("config", function(t, n) {
          return {
              mode: "flatgrid",
              selector: "." + t.markers.item,
              initSize: {
                  numColumns: n.initSize.numColumns,
                  numRows: n.initSize.numRows
              },
              focusManager: t.focusManager
          }
      })],
      matrix: [ba("config", function(t, n) {
          return {
              mode: "matrix",
              selectors: {
                  row: n.rowSelector,
                  cell: "." + t.markers.item
              },
              focusManager: t.focusManager
          }
      }), Ln("rowSelector")],
      menu: [ne("moveOnTab", !0), ba("config", function(t, n) {
          return {
              mode: "menu",
              selector: "." + t.markers.item,
              moveOnTab: n.moveOnTab,
              focusManager: t.focusManager
          }
      })]
  })), jn("markers", sa()), ne("fakeFocus", !1), ne("focusManager", Md()), ga("onHighlight")]), Xg = at("alloy.menu-focus"), Yg = qf({
      name: "Menu",
      configFields: Gg(),
      partFields: Wg(),
      factory: function(t, n, e, o) {
          return {
              uid: t.uid,
              dom: t.dom,
              markers: t.markers,
              behaviours: Ul(t.menuBehaviours, [fd.config({
                  highlightClass: t.markers.selectedItem,
                  itemClass: t.markers.item,
                  onHighlight: t.onHighlight
              }), Nl.config({
                  store: {
                      mode: "memory",
                      initialValue: t.value
                  }
              }), td.config({
                  find: st.some
              }), ug.config(t.movement.config(t, t.movement))]),
              events: Zo([er(Pg(), function(n, e) {
                  var t = e.event;
                  n.getSystem().getByDom(t.target).each(function(t) {
                      fd.highlight(n, t),
                      e.stop(),
                      qo(n, Xg(), {
                          menu: n,
                          item: t
                      })
                  })
              }), er(Vg(), function(t, n) {
                  var e = n.event.item;
                  fd.highlight(t, e)
              })]),
              components: n,
              eventOrder: t.eventOrder,
              domModification: {
                  attributes: {
                      role: "menu"
                  }
              }
          }
      }
  }), qg = function(e, o, r, t) {
      return Ft(r, t).bind(function(t) {
          return Ft(e, t).bind(function(t) {
              var n = qg(e, o, r, t);
              return st.some([t].concat(n))
          })
      }).getOr([])
  }, Kg = function(t, n) {
      var e = {};
      _t(t, function(t, n) {
          ft(t, function(t) {
              e[t] = n
          })
      });
      var o = n
        , r = Et(n, function(t, n) {
          return {
              k: t,
              v: n
          }
      })
        , i = Tt(r, function(t, n) {
          return [n].concat(qg(e, o, r, n))
      });
      return Tt(e, function(t) {
          return Ft(i, t).getOr([t])
      })
  }, Jg = function(t) {
      return "prepared" === t.type ? st.some(t.menu) : st.none()
  }, $g = {
      init: function() {
          var i = fe({})
            , u = fe({})
            , a = fe({})
            , c = fe(st.none())
            , s = fe({})
            , r = function(t, o, r) {
              return e(t).bind(function(n) {
                  return e = t,
                  At(i.get(), function(t, n) {
                      return t === e
                  }).bind(function(t) {
                      return o(t).map(function(t) {
                          return {
                              triggeredMenu: n,
                              triggeringItem: t,
                              triggeringPath: r
                          }
                      })
                  });
                  var e
              })
          }
            , e = function(t) {
              return n(t).bind(Jg)
          }
            , n = function(t) {
              return Ft(u.get(), t)
          }
            , l = function(t) {
              return Ft(i.get(), t)
          };
          return {
              setMenuBuilt: function(t, n) {
                  var e;
                  u.set(ut(ut({}, u.get()), ((e = {})[t] = {
                      type: "prepared",
                      menu: n
                  },
                  e)))
              },
              setContents: function(t, n, e, o) {
                  c.set(st.some(t)),
                  i.set(e),
                  u.set(n),
                  s.set(o);
                  var r = Kg(o, e);
                  a.set(r)
              },
              expand: function(e) {
                  return Ft(i.get(), e).map(function(t) {
                      var n = Ft(a.get(), e).getOr([]);
                      return [t].concat(n)
                  })
              },
              refresh: function(t) {
                  return Ft(a.get(), t)
              },
              collapse: function(t) {
                  return Ft(a.get(), t).bind(function(t) {
                      return 1 < t.length ? st.some(t.slice(1)) : st.none()
                  })
              },
              lookupMenu: n,
              lookupItem: l,
              otherMenus: function(t) {
                  var n = s.get();
                  return X(Ct(n), t)
              },
              getPrimary: function() {
                  return c.get().bind(e)
              },
              getMenus: function() {
                  return u.get()
              },
              clear: function() {
                  i.set({}),
                  u.set({}),
                  a.set({}),
                  c.set(st.none())
              },
              isClear: function() {
                  return c.get().isNone()
              },
              getTriggeringPath: function(t, o) {
                  var n = H(l(t).toArray(), function(t) {
                      return e(t).isSome()
                  });
                  return Ft(a.get(), t).bind(function(t) {
                      var e = G(n.concat(t));
                      return function(t) {
                          for (var n = [], e = 0; e < t.length; e++) {
                              var o = t[e];
                              if (!o.isSome())
                                  return st.none();
                              n.push(o.getOrDie())
                          }
                          return st.some(n)
                      }(U(e, function(t, n) {
                          return r(t, o, e.slice(0, n + 1)).fold(function() {
                              return c.get().is(t) ? [] : [st.none()]
                          }, function(t) {
                              return [st.some(t)]
                          })
                      }))
                  })
              }
          }
      },
      extractPreparedMenu: Jg
  }, Qg = at("collapse-item"), Zg = Yf({
      name: "TieredMenu",
      configFields: [va("onExecute"), va("onEscape"), ha("onOpenMenu"), ha("onOpenSubmenu"), ga("onRepositionMenu"), ga("onCollapseMenu"), ne("highlightImmediately", !0), Xn("data", [Ln("primary"), Ln("menus"), Ln("expansions")]), ne("fakeFocus", !1), ga("onHighlight"), ga("onHover"), fa(), Ln("dom"), ne("navigateOnHover", !0), ne("stayInDom", !1), Ll("tmenuBehaviours", [ug, fd, td, fg]), ne("eventOrder", {})],
      apis: {
          collapseMenu: function(t, n) {
              t.collapseMenu(n)
          },
          highlightPrimary: function(t, n) {
              t.highlightPrimary(n)
          },
          repositionMenus: function(t, n) {
              t.repositionMenus(n)
          }
      },
      factory: function(a, t) {
          var c, n, i = fe(st.none()), s = $g.init(), e = function(t) {
              var o, r, n, e = (o = t,
              r = a.data.primary,
              n = a.data.menus,
              Tt(n, function(t, n) {
                  var e = function() {
                      return Yg.sketch(ut(ut({}, t), {
                          value: n,
                          markers: a.markers,
                          fakeFocus: a.fakeFocus,
                          onHighlight: a.onHighlight,
                          focusManager: (a.fakeFocus ? Fd : Md)()
                      }))
                  };
                  return n === r ? {
                      type: "prepared",
                      menu: o.getSystem().build(e())
                  } : {
                      type: "notbuilt",
                      nbMenu: e
                  }
              })), i = u();
              return s.setContents(a.data.primary, e, a.data.expansions, i),
              s.getPrimary()
          }, l = function(t) {
              return Nl.getValue(t).value
          }, u = function(t) {
              return Tt(a.data.menus, function(t, n) {
                  return U(t.items, function(t) {
                      return "separator" === t.type ? [] : [t.data.value]
                  })
              })
          }, f = function(n, t) {
              fd.highlight(n, t),
              fd.getHighlighted(t).orThunk(function() {
                  return fd.getFirst(t)
              }).each(function(t) {
                  Jo(n, t.element, To())
              })
          }, d = function(n, t) {
              return Kf(V(t, function(t) {
                  return n.lookupMenu(t).bind(function(t) {
                      return "prepared" === t.type ? st.some(t.menu) : st.none()
                  })
              }))
          }, m = function(n, t, e) {
              var o = d(t, t.otherMenus(e));
              ft(o, function(t) {
                  Fi(t.element, [a.markers.backgroundMenu]),
                  a.stayInDom || fg.remove(n, t)
              })
          }, g = function(t, o) {
              var r, n = (r = t,
              i.get().getOrThunk(function() {
                  var e = {}
                    , t = ms(r.element, "." + a.markers.item)
                    , n = H(t, function(t) {
                      return "true" === Nr(t, "aria-haspopup")
                  });
                  return ft(n, function(t) {
                      r.getSystem().getByDom(t).each(function(t) {
                          var n = l(t);
                          e[n] = t
                      })
                  }),
                  i.set(st.some(e)),
                  e
              }));
              _t(n, function(t, n) {
                  var e = M(o, n);
                  zr(t.element, "aria-expanded", e)
              })
          }, p = function(o, r, i) {
              return st.from(i[0]).bind(function(t) {
                  return r.lookupMenu(t).bind(function(t) {
                      if ("notbuilt" === t.type)
                          return st.none();
                      var n = t.menu
                        , e = d(r, i.slice(1));
                      return ft(e, function(t) {
                          Ei(t.element, a.markers.backgroundMenu)
                      }),
                      Ui(n.element) || fg.append(o, pu(n)),
                      Fi(n.element, [a.markers.backgroundMenu]),
                      f(o, n),
                      m(o, r, i),
                      st.some(n)
                  })
              })
          };
          (n = c = c || {})[n.HighlightSubmenu = 0] = "HighlightSubmenu",
          n[n.HighlightParent = 1] = "HighlightParent";
          var h = function(r, i, u) {
              void 0 === u && (u = c.HighlightSubmenu);
              var t = l(i);
              return s.expand(t).bind(function(o) {
                  return g(r, o),
                  st.from(o[0]).bind(function(e) {
                      return s.lookupMenu(e).bind(function(t) {
                          var n = function(t, n, e) {
                              if ("notbuilt" !== e.type)
                                  return e.menu;
                              var o = t.getSystem().build(e.nbMenu());
                              return s.setMenuBuilt(n, o),
                              o
                          }(r, e, t);
                          return Ui(n.element) || fg.append(r, pu(n)),
                          a.onOpenSubmenu(r, i, n, G(o)),
                          u === c.HighlightSubmenu ? (fd.highlightFirst(n),
                          p(r, s, o)) : (fd.dehighlightAll(n),
                          st.some(i))
                      })
                  })
              })
          }
            , o = function(n, e) {
              var t = l(e);
              return s.collapse(t).bind(function(t) {
                  return g(n, t),
                  p(n, s, t).map(function(t) {
                      return a.onCollapseMenu(n, e, t),
                      t
                  })
              })
          }
            , r = function(e) {
              return function(n, t) {
                  return Ju(t.getSource(), "." + a.markers.item).bind(function(t) {
                      return n.getSystem().getByDom(t).toOptional().bind(function(t) {
                          return e(n, t).map(function() {
                              return !0
                          })
                      })
                  })
              }
          }
            , v = Zo([er(Xg(), function(e, o) {
              var t = o.event.item;
              s.lookupItem(l(t)).each(function() {
                  var t = o.event.menu;
                  fd.highlight(e, t);
                  var n = l(o.event.item);
                  s.refresh(n).each(function(t) {
                      return m(e, s, t)
                  })
              })
          }), dr(function(n, t) {
              var e = t.event.target;
              n.getSystem().getByDom(e).each(function(t) {
                  0 === l(t).indexOf("collapse-item") && o(n, t),
                  h(n, t, c.HighlightSubmenu).fold(function() {
                      a.onExecute(n, t)
                  }, function() {})
              })
          }), sr(function(n, t) {
              e(n).each(function(t) {
                  fg.append(n, pu(t)),
                  a.onOpenMenu(n, t),
                  a.highlightImmediately && f(n, t)
              })
          })].concat(a.navigateOnHover ? [er(Vg(), function(t, n) {
              var e, o, r = n.event.item;
              e = t,
              o = l(r),
              s.refresh(o).bind(function(t) {
                  return g(e, t),
                  p(e, s, t)
              }),
              h(t, r, c.HighlightParent),
              a.onHover(t, r)
          })] : []))
            , b = function(t) {
              return fd.getHighlighted(t).bind(fd.getHighlighted)
          }
            , y = {
              collapseMenu: function(n) {
                  b(n).each(function(t) {
                      o(n, t)
                  })
              },
              highlightPrimary: function(n) {
                  s.getPrimary().each(function(t) {
                      f(n, t)
                  })
              },
              repositionMenus: function(o) {
                  s.getPrimary().bind(function(n) {
                      return b(o).bind(function(t) {
                          var n = l(t)
                            , e = Mt(s.getMenus())
                            , o = Kf(V(e, $g.extractPreparedMenu));
                          return s.getTriggeringPath(n, function(t) {
                              return e = t,
                              Z(o, function(t) {
                                  if (!t.getSystem().isConnected())
                                      return st.none();
                                  var n = fd.getCandidates(t);
                                  return L(n, function(t) {
                                      return l(t) === e
                                  })
                              });
                              var e
                          })
                      }).map(function(t) {
                          return {
                              primary: n,
                              triggeringPath: t
                          }
                      })
                  }).fold(function() {
                      var t;
                      t = o,
                      st.from(t.components()[0]).filter(function(t) {
                          return "menu" === Nr(t.element, "role")
                      }).each(function(t) {
                          a.onRepositionMenu(o, t, [])
                      })
                  }, function(t) {
                      var n = t.primary
                        , e = t.triggeringPath;
                      a.onRepositionMenu(o, n, e)
                  })
              }
          };
          return {
              uid: a.uid,
              dom: a.dom,
              markers: a.markers,
              behaviours: Ul(a.tmenuBehaviours, [ug.config({
                  mode: "special",
                  onRight: r(function(t, n) {
                      return $f(n.element) ? st.none() : h(t, n, c.HighlightSubmenu)
                  }),
                  onLeft: r(function(t, n) {
                      return $f(n.element) ? st.none() : o(t, n)
                  }),
                  onEscape: r(function(t, n) {
                      return o(t, n).orThunk(function() {
                          return a.onEscape(t, n).map(function() {
                              return t
                          })
                      })
                  }),
                  focusIn: function(n, t) {
                      s.getPrimary().each(function(t) {
                          Jo(n, t.element, To())
                      })
                  }
              }), fd.config({
                  highlightClass: a.markers.selectedMenu,
                  itemClass: a.markers.menu
              }), td.config({
                  find: function(t) {
                      return fd.getHighlighted(t)
                  }
              }), fg.config({})]),
              eventOrder: a.eventOrder,
              apis: y,
              events: v
          }
      },
      extraApis: {
          tieredData: function(t, n, e) {
              return {
                  primary: t,
                  menus: n,
                  expansions: e
              }
          },
          singleData: function(t, n) {
              return {
                  primary: t,
                  menus: Jt(t, n),
                  expansions: {}
              }
          },
          collapseItem: function(t) {
              return {
                  value: Kr(Qg()),
                  meta: {
                      text: t
                  }
              }
          }
      }
  }), tp = Yf({
      name: "InlineView",
      configFields: [Ln("lazySink"), ga("onShow"), ga("onHide"), Zn("onEscape"), Ll("inlineBehaviours", [xl, Nl, fc]), te("fireDismissalEventInstead", [ne("event", zo())]), te("fireRepositionEventInstead", [ne("event", No())]), ne("getRelated", st.none), ne("isExtraPart", c), ne("eventOrder", st.none)],
      factory: function(m, t) {
          var o = function(t, n, e, o) {
              r(t, n, e, function() {
                  return o.map(zu)
              })
          }
            , r = function(t, n, e, o) {
              var r = m.lazySink(t).getOrDie();
              xl.openWhileCloaked(t, e, function() {
                  return Qs.positionWithinBounds(r, n, t, o())
              }),
              Nl.setValue(t, st.some({
                  mode: "position",
                  anchor: n,
                  getBounds: o
              }))
          }
            , i = function(t, n, e, o) {
              var r, i, u, a, c, s, l, f, d = (r = m,
              i = t,
              u = n,
              c = o,
              s = function() {
                  return r.lazySink(i)
              }
              ,
              l = "horizontal" === (a = e).type ? {
                  layouts: {
                      onLtr: Ja,
                      onRtl: $a
                  }
              } : {},
              f = function(t) {
                  return 2 === t.length ? l : {}
              }
              ,
              Zg.sketch({
                  dom: {
                      tag: "div"
                  },
                  data: a.data,
                  markers: a.menu.markers,
                  highlightImmediately: a.menu.highlightImmediately,
                  onEscape: function() {
                      return xl.close(i),
                      r.onEscape.map(function(t) {
                          return t(i)
                      }),
                      st.some(!0)
                  },
                  onExecute: function() {
                      return st.some(!0)
                  },
                  onOpenMenu: function(t, n) {
                      Qs.positionWithinBounds(s().getOrDie(), u, n, c())
                  },
                  onOpenSubmenu: function(t, n, e, o) {
                      var r = s().getOrDie();
                      Qs.position(r, ut({
                          anchor: "submenu",
                          item: n
                      }, f(o)), e)
                  },
                  onRepositionMenu: function(t, n, e) {
                      var o = s().getOrDie();
                      Qs.positionWithinBounds(o, u, n, c()),
                      ft(e, function(t) {
                          var n = f(t.triggeringPath);
                          Qs.position(o, ut({
                              anchor: "submenu",
                              item: t.triggeringItem
                          }, n), t.triggeredMenu)
                      })
                  }
              }));
              xl.open(t, d),
              Nl.setValue(t, st.some({
                  mode: "menu",
                  menu: d
              }))
          }
            , n = function(e) {
              xl.isOpen(e) && Nl.getValue(e).each(function(t) {
                  switch (t.mode) {
                  case "menu":
                      xl.getState(e).each(function(t) {
                          Zg.repositionMenus(t)
                      });
                      break;
                  case "position":
                      var n = m.lazySink(e).getOrDie();
                      Qs.positionWithinBounds(n, t.anchor, e, t.getBounds())
                  }
              })
          }
            , e = {
              setContent: function(t, n) {
                  xl.setContent(t, n)
              },
              showAt: function(t, n, e) {
                  o(t, n, e, st.none())
              },
              showWithin: o,
              showWithinBounds: r,
              showMenuAt: function(t, n, e) {
                  i(t, n, e, function() {
                      return st.none()
                  })
              },
              showMenuWithinBounds: i,
              hide: function(t) {
                  xl.isOpen(t) && (Nl.setValue(t, st.none()),
                  xl.close(t))
              },
              getContent: function(t) {
                  return xl.getState(t)
              },
              reposition: n,
              isOpen: xl.isOpen
          };
          return {
              uid: m.uid,
              dom: m.dom,
              behaviours: Ul(m.inlineBehaviours, [xl.config({
                  isPartOf: function(t, n, e) {
                      return Zu(n, e) || (o = t,
                      r = e,
                      m.getRelated(o).exists(function(t) {
                          return Zu(t, r)
                      }));
                      var o, r
                  },
                  getAttachPoint: function(t) {
                      return m.lazySink(t).getOrDie()
                  },
                  onOpen: function(t) {
                      m.onShow(t)
                  },
                  onClose: function(t) {
                      m.onHide(t)
                  }
              }), Nl.config({
                  store: {
                      mode: "memory",
                      initialValue: st.none()
                  }
              }), fc.config({
                  channels: ut(ut({}, Ol(ut({
                      isExtraPart: t.isExtraPart
                  }, m.fireDismissalEventInstead.map(function(t) {
                      return {
                          fireEventInstead: {
                              event: t.event
                          }
                      }
                  }).getOr({})))), Tl(ut(ut({}, m.fireRepositionEventInstead.map(function(t) {
                      return {
                          fireEventInstead: {
                              event: t.event
                          }
                      }
                  }).getOr({})), {
                      doReposition: n
                  })))
              })]),
              eventOrder: m.eventOrder,
              apis: e
          }
      },
      apis: {
          showAt: function(t, n, e, o) {
              t.showAt(n, e, o)
          },
          showWithin: function(t, n, e, o, r) {
              t.showWithin(n, e, o, r)
          },
          showWithinBounds: function(t, n, e, o, r) {
              t.showWithinBounds(n, e, o, r)
          },
          showMenuAt: function(t, n, e, o) {
              t.showMenuAt(n, e, o)
          },
          showMenuWithinBounds: function(t, n, e, o, r) {
              t.showMenuWithinBounds(n, e, o, r)
          },
          hide: function(t, n) {
              t.hide(n)
          },
          isOpen: function(t, n) {
              return t.isOpen(n)
          },
          getContent: function(t, n) {
              return t.getContent(n)
          },
          setContent: function(t, n, e) {
              t.setContent(n, e)
          },
          reposition: function(t, n) {
              t.reposition(n)
          }
      }
  }), np = function(t) {
      return t.x
  }, ep = function(t, n) {
      return t.x + t.width / 2 - n.width / 2
  }, op = function(t, n) {
      return t.x + t.width - n.width
  }, rp = function(t) {
      return t.y
  }, ip = function(t, n) {
      return t.y + t.height - n.height
  }, up = function(t, n, e) {
      return wa(op(t, n), ip(t, n), e.innerSoutheast(), _a(), Aa(t, {
          right: 0,
          bottom: 3
      }), "layout-inner-se")
  }, ap = function(t, n, e) {
      return wa(np(t), ip(t, n), e.innerSouthwest(), Oa(), Aa(t, {
          left: 1,
          bottom: 3
      }), "layout-inner-sw")
  }, cp = function(t, n, e) {
      return wa(op(t, n), rp(t), e.innerNortheast(), Ca(), Aa(t, {
          right: 0,
          top: 2
      }), "layout-inner-ne")
  }, sp = function(t, n, e) {
      return wa(np(t), rp(t), e.innerNorthwest(), ka(), Aa(t, {
          left: 1,
          top: 2
      }), "layout-inner-nw")
  }, lp = function(t, n, e) {
      return wa(ep(t, n), rp(t), e.innerNorth(), Ta(), Aa(t, {
          top: 2
      }), "layout-inner-n")
  }, fp = function(t, n, e) {
      return wa(ep(t, n), ip(t, n), e.innerSouth(), Ea(), Aa(t, {
          bottom: 3
      }), "layout-inner-s")
  }, dp = tinymce.util.Tools.resolve("tinymce.util.Delay"), mp = Yf({
      name: "Button",
      factory: function(t) {
          var n = Ag(t.action)
            , e = t.dom.tag
            , o = function(n) {
              return Ft(t.dom, "attributes").bind(function(t) {
                  return Ft(t, n)
              })
          };
          return {
              uid: t.uid,
              dom: t.dom,
              components: t.components,
              events: n,
              behaviours: Gl(t.buttonBehaviours, [vg.config({}), ug.config({
                  mode: "execution",
                  useSpace: !0,
                  useEnter: !0
              })]),
              domModification: {
                  attributes: function() {
                      if ("button" !== e)
                          return {
                              role: o("role").getOr("button")
                          };
                      var t = o("type").getOr("button")
                        , n = o("role").map(function(t) {
                          return {
                              role: t
                          }
                      }).getOr({});
                      return ut({
                          type: t
                      }, n)
                  }()
              },
              eventOrder: t.eventOrder
          }
      },
      configFields: [ne("uid", undefined), Ln("dom"), ne("components", []), Wl("buttonBehaviours", [vg, ug]), Kn("action"), Kn("role"), ne("eventOrder", {})]
  }), gp = function(t) {
      var n = t.uid !== undefined && Rt(t, "uid") ? t.uid : ei("memento");
      return {
          get: function(t) {
              return t.getSystem().getByUid(n).getOrDie()
          },
          getOpt: function(t) {
              return t.getSystem().getByUid(n).toOptional()
          },
          asSpec: function() {
              return ut(ut({}, t), {
                  uid: n
              })
          }
      }
  }, pp = function(t) {
      return st.from(t()["temporary-placeholder"]).getOr("!not found!")
  }, hp = function(t, n) {
      return st.from(n()[t.toLowerCase()]).getOrThunk(function() {
          return pp(n)
      })
  }, vp = {
      success: "checkmark",
      error: "warning",
      err: "error",
      warning: "warning",
      warn: "warning",
      info: "info"
  }, bp = Yf({
      name: "Notification",
      factory: function(n) {
          var t, e, o = gp({
              dom: {
                  tag: "p",
                  innerHtml: n.translationProvider(n.text)
              },
              behaviours: ic([fg.config({})])
          }), r = function(t) {
              return {
                  dom: {
                      tag: "div",
                      classes: ["tox-bar"],
                      attributes: {
                          style: "width: " + t + "%"
                      }
                  }
              }
          }, i = function(t) {
              return {
                  dom: {
                      tag: "div",
                      classes: ["tox-text"],
                      innerHtml: t + "%"
                  }
              }
          }, u = gp({
              dom: {
                  tag: "div",
                  classes: n.progress ? ["tox-progress-bar", "tox-progress-indicator"] : ["tox-progress-bar"]
              },
              components: [{
                  dom: {
                      tag: "div",
                      classes: ["tox-bar-container"]
                  },
                  components: [r(0)]
              }, i(0)],
              behaviours: ic([fg.config({})])
          }), a = {
              updateProgress: function(t, n) {
                  t.getSystem().isConnected() && u.getOpt(t).each(function(t) {
                      fg.set(t, [{
                          dom: {
                              tag: "div",
                              classes: ["tox-bar-container"]
                          },
                          components: [r(n)]
                      }, i(n)])
                  })
              },
              updateText: function(t, n) {
                  var e;
                  t.getSystem().isConnected() && (e = o.get(t),
                  fg.set(e, [fu(n)]))
              }
          }, c = dt([n.icon.toArray(), n.level.toArray(), n.level.bind(function(t) {
              return st.from(vp[t])
          }).toArray()]), s = gp(mp.sketch({
              dom: {
                  tag: "button",
                  classes: ["tox-notification__dismiss", "tox-button", "tox-button--naked", "tox-button--icon"]
              },
              components: [{
                  dom: {
                      tag: "div",
                      classes: ["tox-icon"],
                      innerHtml: hp("close", n.iconProvider),
                      attributes: {
                          "aria-label": n.translationProvider("Close")
                      }
                  }
              }],
              action: function(t) {
                  n.onAction(t)
              }
          })), l = [{
              dom: {
                  tag: "div",
                  classes: ["tox-notification__icon"],
                  innerHtml: (t = c,
                  e = n.iconProvider,
                  Z(t, function(t) {
                      return st.from(e()[t.toLowerCase()])
                  }).getOrThunk(function() {
                      return pp(e)
                  }))
              }
          }, {
              dom: {
                  tag: "div",
                  classes: ["tox-notification__body"]
              },
              components: [o.asSpec()],
              behaviours: ic([fg.config({})])
          }];
          return {
              uid: n.uid,
              dom: {
                  tag: "div",
                  attributes: {
                      role: "alert"
                  },
                  classes: n.level.map(function(t) {
                      return ["tox-notification", "tox-notification--in", "tox-notification--" + t]
                  }).getOr(["tox-notification", "tox-notification--in"])
              },
              behaviours: ic([vg.config({}), dg("notification-events", [er(lo(), function(t) {
                  s.getOpt(t).each(vg.focus)
              })])]),
              components: l.concat(n.progress ? [u.asSpec()] : []).concat(n.closeButton ? [s.asSpec()] : []),
              apis: a
          }
      },
      configFields: [Kn("level"), Ln("progress"), Ln("icon"), Ln("onAction"), Ln("text"), Ln("iconProvider"), Ln("translationProvider"), ue("closeButton", !0)],
      apis: {
          updateProgress: function(t, n, e) {
              t.updateProgress(n, e)
          },
          updateText: function(t, n, e) {
              t.updateText(n, e)
          }
      }
  });
  function yp(t, u, a) {
      var c = u.backstage;
      return {
          open: function(t, n) {
              var e = !t.closeButton && t.timeout && (0 < t.timeout || t.timeout < 0)
                , o = function() {
                  n(),
                  tp.hide(i)
              }
                , r = gu(bp.sketch({
                  text: t.text,
                  level: M(["success", "error", "warning", "warn", "info"], t.type) ? t.type : undefined,
                  progress: !0 === t.progressBar,
                  icon: st.from(t.icon),
                  closeButton: !e,
                  onAction: o,
                  iconProvider: c.shared.providers.icons,
                  translationProvider: c.shared.providers.translate
              }))
                , i = gu(tp.sketch(ut({
                  dom: {
                      tag: "div",
                      classes: ["tox-notifications-container"]
                  },
                  lazySink: u.backstage.shared.getSink,
                  fireDismissalEventInstead: {}
              }, c.shared.header.isPositionedAtTop() ? {} : {
                  fireRepositionEventInstead: {}
              })));
              return a.add(i),
              0 < t.timeout && dp.setTimeout(function() {
                  o()
              }, t.timeout),
              {
                  close: o,
                  moveTo: function(t, n) {
                      tp.showAt(i, {
                          anchor: "makeshift",
                          x: t,
                          y: n
                      }, pu(r))
                  },
                  moveRel: function(t, n) {
                      var e, o;
                      "banner" !== n ? (e = function(t) {
                          switch (t) {
                          case "bc-bc":
                              return fp;
                          case "tc-tc":
                              return lp;
                          case "tc-bc":
                              return ja;
                          case "bc-tc":
                          default:
                              return Ua
                          }
                      }(n),
                      o = {
                          anchor: "node",
                          root: Wi(),
                          node: st.some(me.fromDom(t)),
                          layouts: {
                              onRtl: function() {
                                  return [e]
                              },
                              onLtr: function() {
                                  return [e]
                              }
                          }
                      },
                      tp.showAt(i, o, pu(r))) : tp.showAt(i, u.backstage.shared.anchors.banner(), pu(r))
                  },
                  text: function(t) {
                      bp.updateText(r, t)
                  },
                  settings: t,
                  getEl: function() {
                      return r.element.dom
                  },
                  progressBar: {
                      value: function(t) {
                          bp.updateProgress(r, t)
                      }
                  }
              }
          },
          close: function(t) {
              t.close()
          },
          reposition: function(t) {
              var e;
              ft(t, function(t) {
                  return t.moveTo(0, 0)
              }),
              0 < (e = t).length && (K(e).each(function(t) {
                  return t.moveRel(null, "banner")
              }),
              ft(e, function(t, n) {
                  0 < n && t.moveRel(e[n - 1].getEl(), "bc-tc")
              }))
          },
          getArgs: function(t) {
              return t.settings
          }
      }
  }
  var xp, wp, Sp = function(e, o) {
      var r = null;
      return {
          cancel: function() {
              null !== r && (clearTimeout(r),
              r = null)
          },
          throttle: function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
              null !== r && clearTimeout(r),
              r = setTimeout(function() {
                  e.apply(null, t),
                  r = null
              }, o)
          }
      }
  }, kp = tinymce.util.Tools.resolve("tinymce.dom.TextSeeker"), Cp = function(o, t, n, e, r) {
      var i = kp(o, function(t) {
          return e = t,
          (n = o).isBlock(e) || M(["BR", "IMG", "HR", "INPUT"], e.nodeName) || "false" === n.getContentEditable(e);
          var n, e
      });
      return st.from(i.backwards(t, n, e, r))
  }, Op = function(e, n) {
      return _p(me.fromDom(e.selection.getNode())).getOrThunk(function() {
          var t = me.fromHtml('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
          return Ar(t, me.fromDom(n.extractContents())),
          n.insertNode(t.dom),
          kr(t).each(function(t) {
              return t.dom.normalize()
          }),
          ds(t, fs).map(function(t) {
              var n;
              e.selection.setCursorLocation(t.dom, "img" === mr(n = t) ? 1 : ss(n).fold(function() {
                  return _r(n).length
              }, function(t) {
                  return t.length
              }))
          }),
          t
      })
  }, _p = function(t) {
      return Ju(t, "[data-mce-autocompleter]")
  }, Tp = function(t) {
      return t.toString().replace(/\u00A0/g, " ").replace(/\uFEFF/g, "")
  }, Ep = function(t) {
      return "" !== t && -1 !== " \xa0\f\n\r\t\x0B".indexOf(t)
  }, Dp = function(t, n) {
      return t.substring(n.length)
  }, Bp = function(t, o, r, i) {
      if (void 0 === i && (i = 0),
      !(n = o).collapsed || 3 !== n.startContainer.nodeType)
          return st.none();
      var n, e = t.getParent(o.startContainer, t.isBlock) || t.getRoot();
      return Cp(t, o.startContainer, o.startOffset, function(t, n, e) {
          return function(t, n, e) {
              for (var o = n - 1; 0 <= o; o--) {
                  var r = t.charAt(o);
                  if (Ep(r))
                      return st.none();
                  if (r === e)
                      break
              }
              return st.some(o)
          }(e, n, r).getOr(n)
      }, e).bind(function(t) {
          var n = o.cloneRange();
          if (n.setStart(t.container, t.offset),
          n.setEnd(o.endContainer, o.endOffset),
          n.collapsed)
              return st.none();
          var e = Tp(n);
          return 0 !== e.lastIndexOf(r) || Dp(e, r).length < i ? st.none() : st.some({
              text: Dp(e, r),
              range: n,
              triggerChar: r
          })
      })
  }, Ap = function(o, t, r, n) {
      return void 0 === n && (n = 0),
      _p(me.fromDom(t.startContainer)).fold(function() {
          return Bp(o, t, r, n)
      }, function(t) {
          var n = o.createRng();
          n.selectNode(t.dom);
          var e = Tp(n);
          return st.some({
              range: n,
              text: Dp(e, r),
              triggerChar: r
          })
      })
  }, Mp = function(e, t) {
      t.on("keypress compositionend", e.onKeypress.throttle),
      t.on("remove", e.onKeypress.cancel);
      var o = function(t, n) {
          qo(t, mo(), {
              raw: n
          })
      };
      t.on("keydown", function(n) {
          var t = function() {
              return e.getView().bind(fd.getHighlighted)
          };
          8 === n.which && e.onKeypress.throttle(n),
          e.isActive() && (27 === n.which && e.cancelIfNecessary(),
          e.isMenuOpen() ? 13 === n.which ? (t().each(Ko),
          n.preventDefault()) : 40 === n.which ? (t().fold(function() {
              e.getView().each(fd.highlightFirst)
          }, function(t) {
              o(t, n)
          }),
          n.preventDefault(),
          n.stopImmediatePropagation()) : 37 !== n.which && 38 !== n.which && 39 !== n.which || t().each(function(t) {
              o(t, n),
              n.preventDefault(),
              n.stopImmediatePropagation()
          }) : 13 !== n.which && 38 !== n.which && 40 !== n.which || e.cancelIfNecessary())
      }),
      t.on("NodeChange", function(t) {
          e.isActive() && !e.isProcessingAction() && _p(me.fromDom(t.element)).isNone() && e.cancelIfNecessary()
      })
  }, Fp = tinymce.util.Tools.resolve("tinymce.util.Promise"), Ip = function(t, n) {
      return {
          container: t,
          offset: n
      }
  }, Rp = function(t) {
      if (3 === t.nodeType)
          return Ip(t, t.data.length);
      var n = t.childNodes;
      return 0 < n.length ? Rp(n[n.length - 1]) : Ip(t, n.length)
  }, Vp = function(t, n) {
      var e = t.childNodes;
      return 0 < e.length && n < e.length ? Vp(e[n], 0) : 0 < e.length && 1 === t.nodeType && e.length === n ? Rp(e[e.length - 1]) : Ip(t, n)
  }, Pp = function(r) {
      return function(t) {
          var n, e, o = Vp(t.startContainer, t.startOffset);
          return !Cp(n = r, (e = o).container, e.offset, function(t, n) {
              return 0 === n ? -1 : n
          }, n.getRoot()).filter(function(t) {
              var n = t.container.data.charAt(t.offset - 1);
              return !Ep(n)
          }).isSome()
      }
  }, Hp = function(n, e) {
      var o, r, t = e(), i = n.selection.getRng();
      return o = n.dom,
      r = i,
      Z(t.triggerChars, function(t) {
          return Ap(o, r, t)
      }).bind(function(t) {
          return zp(n, e, t)
      })
  }, zp = function(n, t, e, o) {
      void 0 === o && (o = {});
      var r = t()
        , i = n.selection.getRng().startContainer.nodeValue
        , u = H(r.lookupByChar(e.triggerChar), function(t) {
          return e.text.length >= t.minChars && t.matches.getOrThunk(function() {
              return Pp(n.dom)
          })(e.range, i, e.text)
      });
      if (0 === u.length)
          return st.none();
      var a = Fp.all(V(u, function(n) {
          return n.fetch(e.text, n.maxResults, o).then(function(t) {
              return {
                  matchText: e.text,
                  items: t,
                  columns: n.columns,
                  onAction: n.onAction,
                  highlightOn: n.highlightOn
              }
          })
      }));
      return st.some({
          lookupData: a,
          context: e
      })
  }, Np = fn([Un("type"), Qn("text")]), Lp = fn([ne("type", "autocompleteitem"), ne("active", !1), ne("disabled", !1), ne("meta", {}), Un("value"), Qn("text"), Qn("icon")]), jp = fn([Un("type"), Un("ch"), oe("minChars", 1), ne("columns", 1), oe("maxResults", 10), Zn("matches"), Gn("fetch"), Gn("onAction"), ce("highlightOn", [], Rn)]), Up = [ue("disabled", !1), Qn("tooltip"), Qn("icon"), Qn("text"), ae("onSetup", function() {
      return $
  })], Wp = fn([Un("type"), Gn("onAction")].concat(Up)), Gp = function(t) {
      return _n("toolbarbutton", Wp, t)
  }, Xp = [ue("active", !1)].concat(Up), Yp = fn(Xp.concat([Un("type"), Gn("onAction")])), qp = function(t) {
      return _n("ToggleButton", Yp, t)
  }, Kp = [ae("predicate", function() {
      return !1
  }), ie("scope", "node", ["node", "editor"]), ie("position", "selection", ["node", "selection", "line"])], Jp = Up.concat([ne("type", "contextformbutton"), ne("primary", !1), Gn("onAction"), le("original", ct)]), $p = Xp.concat([ne("type", "contextformbutton"), ne("primary", !1), Gn("onAction"), le("original", ct)]), Qp = Up.concat([ne("type", "contextformbutton")]), Zp = Xp.concat([ne("type", "contextformtogglebutton")]), th = An("type", {
      contextformbutton: Jp,
      contextformtogglebutton: $p
  }), nh = fn([ne("type", "contextform"), ae("initValue", function() {
      return ""
  }), Qn("label"), qn("commands", th), Jn("launch", An("type", {
      contextformbutton: Qp,
      contextformtogglebutton: Zp
  }))].concat(Kp)), eh = fn([ne("type", "contexttoolbar"), Un("items")].concat(Kp)), oh = function(t) {
      var n, e, o = t.ui.registry.getAll().popups, r = Tt(o, function(t) {
          return _n("Autocompleter", jp, t).fold(function(t) {
              throw new Error(Dn(t))
          }, function(t) {
              return t
          })
      }), i = (n = Bt(r, function(t) {
          return t.ch
      }),
      e = {},
      ft(n, function(t) {
          e[t] = {}
      }),
      Ct(e)), u = Mt(r);
      return {
          dataset: r,
          triggerChars: i,
          lookupByChar: function(n) {
              return H(u, function(t) {
                  return t.ch === n
              })
          }
      }
  };
  (wp = xp = xp || {})[wp.CLOSE_ON_EXECUTE = 0] = "CLOSE_ON_EXECUTE",
  wp[wp.BUBBLE_TO_SANDBOX = 1] = "BUBBLE_TO_SANDBOX";
  var rh, ih, uh = xp, ah = "tox-menu-nav__js", ch = "tox-collection__item", sh = "tox-swatch", lh = {
      normal: ah,
      color: sh
  }, fh = "tox-collection__item--enabled", dh = "tox-collection__item-label", mh = "tox-collection__item-caret", gh = "tox-collection__item--active", ph = "tox-collection__item-container", hh = "tox-collection__item-container--row", vh = function(t) {
      return Ft(lh, t).getOr(ah)
  }, bh = function(t) {
      return {
          backgroundMenu: "tox-background-menu",
          selectedMenu: "tox-selected-menu",
          selectedItem: "tox-collection__item--active",
          hasIcons: "tox-menu--has-icons",
          menu: "color" === t ? "tox-swatches" : "tox-menu",
          tieredMenu: "tox-tiered-menu"
      }
  }, yh = function(t) {
      var n = bh(t);
      return {
          backgroundMenu: n.backgroundMenu,
          selectedMenu: n.selectedMenu,
          menu: n.menu,
          selectedItem: n.selectedItem,
          item: vh(t)
      }
  }, xh = [Yg.parts.items({})], wh = function(t, n, e) {
      var o = bh(e);
      return {
          dom: {
              tag: "div",
              classes: dt([[o.tieredMenu]])
          },
          markers: yh(e)
      }
  }, Sh = function(e, o) {
      return function(t) {
          var n = R(t, o);
          return V(n, function(t) {
              return {
                  dom: e,
                  components: t
              }
          })
      }
  }, kh = function(t, e) {
      var o = []
        , r = [];
      return ft(t, function(t, n) {
          e(t, n) ? (0 < r.length && o.push(r),
          r = [],
          It(t.dom, "innerHtml") && r.push(t)) : r.push(t)
      }),
      0 < r.length && o.push(r),
      V(o, function(t) {
          return {
              dom: {
                  tag: "div",
                  classes: ["tox-collection__group"]
              },
              components: t
          }
      })
  }, Ch = function(n, e, t) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-menu", "tox-collection"].concat(1 === n ? ["tox-collection--list"] : ["tox-collection--grid"])
          },
          components: [Yg.parts.items({
              preprocess: function(t) {
                  return "auto" !== n && 1 < n ? Sh({
                      tag: "div",
                      classes: ["tox-collection__group"]
                  }, n)(t) : kh(t, function(t, n) {
                      return "separator" === e[n].type
                  })
              }
          })]
      }
  }, Oh = function(t) {
      return F(t, function(t) {
          return "icon"in t && t.icon !== undefined
      })
  }, _h = function(t) {
      return console.error(Dn(t)),
      console.log(t),
      st.none()
  }, Th = function(t, n, e, o, r) {
      var i, u = (i = e,
      {
          dom: {
              tag: "div",
              classes: ["tox-collection", "tox-collection--horizontal"]
          },
          components: [Yg.parts.items({
              preprocess: function(t) {
                  return kh(t, function(t, n) {
                      return "separator" === i[n].type
                  })
              }
          })]
      });
      return {
          value: t,
          dom: u.dom,
          components: u.components,
          items: e
      }
  }, Eh = function(t, n, e, o, r) {
      var i, u, a, c, s, l;
      return "color" === r ? {
          value: t,
          dom: (a = (i = o,
          {
              dom: {
                  tag: "div",
                  classes: ["tox-menu", "tox-swatches-menu"]
              },
              components: [{
                  dom: {
                      tag: "div",
                      classes: ["tox-swatches"]
                  },
                  components: [Yg.parts.items({
                      preprocess: "auto" !== i ? Sh({
                          tag: "div",
                          classes: ["tox-swatches__row"]
                      }, i) : ct
                  })]
              }]
          })).dom,
          components: a.components,
          items: e
      } : "normal" === r && "auto" === o ? {
          value: t,
          dom: (a = Ch(o, e)).dom,
          components: a.components,
          items: e
      } : "normal" === r && 1 === o ? {
          value: t,
          dom: (a = Ch(1, e)).dom,
          components: a.components,
          items: e
      } : "normal" === r ? {
          value: t,
          dom: (a = Ch(o, e)).dom,
          components: a.components,
          items: e
      } : "listpreview" !== r || "auto" === o ? {
          value: t,
          dom: (c = n,
          s = o,
          l = bh(r),
          {
              tag: "div",
              classes: dt([[l.menu, "tox-menu-" + s + "-column"], c ? [l.hasIcons] : []])
          }),
          components: xh,
          items: e
      } : {
          value: t,
          dom: (a = (u = o,
          {
              dom: {
                  tag: "div",
                  classes: ["tox-menu", "tox-collection", "tox-collection--toolbar", "tox-collection--toolbar-lg"]
              },
              components: [Yg.parts.items({
                  preprocess: Sh({
                      tag: "div",
                      classes: ["tox-collection__group"]
                  }, u)
              })]
          })).dom,
          components: a.components,
          items: e
      }
  }, Dh = [Un("type"), Un("src"), Qn("alt"), ce("classes", [], Rn)], Bh = fn(Dh), Ah = [Un("type"), Un("text"), Qn("name"), ce("classes", ["tox-collection__item-label"], Rn)], Mh = fn(Ah), Fh = kn(function() {
      return Bn("type", {
          cardimage: Bh,
          cardtext: Mh,
          cardcontainer: Ih
      })
  }), Ih = fn([Un("type"), re("direction", "horizontal"), re("align", "left"), re("valign", "middle"), qn("items", Fh)]), Rh = [ue("disabled", !1), Qn("text"), Qn("shortcut"), bn("value", "value", Xt(function() {
      return Kr("menuitem-value")
  }), Mn()), ne("meta", {})], Vh = fn([Un("type"), Qn("label"), qn("items", Fh), ae("onSetup", function() {
      return $
  }), ae("onAction", $)].concat(Rh)), Ph = fn([Un("type"), ue("active", !1), Qn("icon")].concat(Rh)), Hh = fn([Un("type"), Wn("fancytype", ["inserttable", "colorswatch"]), ae("onAction", $)]), zh = fn([Un("type"), ae("onSetup", function() {
      return $
  }), ae("onAction", $), Qn("icon")].concat(Rh)), Nh = fn([Un("type"), Gn("getSubmenuItems"), ae("onSetup", function() {
      return $
  }), Qn("icon")].concat(Rh)), Lh = fn([Un("type"), Qn("icon"), ue("active", !1), ae("onSetup", function() {
      return $
  }), Gn("onAction")].concat(Rh)), jh = function(t, o, n) {
      var r = ms(t.element, "." + n);
      if (0 < r.length) {
          var e = j(r, function(t) {
              var n = t.dom.getBoundingClientRect().top
                , e = r[0].dom.getBoundingClientRect().top;
              return Math.abs(n - e) > o
          }).getOr(r.length);
          return st.some({
              numColumns: e,
              numRows: Math.ceil(r.length / e)
          })
      }
      return st.none()
  }, Uh = function(t, n) {
      return ic([dg(t, n)])
  }, Wh = function(t) {
      return Uh(Kr("unnamed-events"), t)
  }, Gh = [Ln("lazySink"), Ln("tooltipDom"), ne("exclusive", !0), ne("tooltipComponents", []), ne("delay", 300), ie("mode", "normal", ["normal", "follow-highlight"]), ne("anchor", function(t) {
      return {
          anchor: "hotspot",
          hotspot: t,
          layouts: {
              onLtr: at([Ua, ja, Ha, Na, za, La]),
              onRtl: at([Ua, ja, Ha, Na, za, La])
          }
      }
  }), ga("onHide"), ga("onShow")], Xh = /* */
  Object.freeze({
      __proto__: null,
      init: function() {
          var e = fe(st.none())
            , n = fe(st.none())
            , o = function() {
              e.get().each(function(t) {
                  clearTimeout(t)
              })
          }
            , t = at("not-implemented");
          return di({
              getTooltip: function() {
                  return n.get()
              },
              isShowing: function() {
                  return n.get().isSome()
              },
              setTooltip: function(t) {
                  n.set(st.some(t))
              },
              clearTooltip: function() {
                  n.set(st.none())
              },
              clearTimer: o,
              resetTimer: function(t, n) {
                  o(),
                  e.set(st.some(setTimeout(function() {
                      t()
                  }, n)))
              },
              readState: t
          })
      }
  }), Yh = Kr("tooltip.exclusive"), qh = Kr("tooltip.show"), Kh = Kr("tooltip.hide"), Jh = function(t, n, e) {
      t.getSystem().broadcastOn([Yh], {})
  }, $h = /* */
  Object.freeze({
      __proto__: null,
      hideAllExclusive: Jh,
      setComponents: function(t, n, e, o) {
          e.getTooltip().each(function(t) {
              t.getSystem().isConnected() && fg.set(t, o)
          })
      }
  }), Qh = ac({
      fields: Gh,
      name: "tooltipping",
      active: /* */
      Object.freeze({
          __proto__: null,
          events: function(r, i) {
              var e = function(n) {
                  i.getTooltip().each(function(t) {
                      ul(t),
                      r.onHide(n, t),
                      i.clearTooltip()
                  }),
                  i.clearTimer()
              };
              return Zo(dt([[er(qh, function(o) {
                  i.resetTimer(function() {
                      var n, t, e;
                      n = o,
                      i.isShowing() || (Jh(n),
                      t = r.lazySink(n).getOrDie(),
                      e = n.getSystem().build({
                          dom: r.tooltipDom,
                          components: r.tooltipComponents,
                          events: Zo("normal" === r.mode ? [er(so(), function(t) {
                              Yo(n, qh)
                          }), er(ao(), function(t) {
                              Yo(n, Kh)
                          })] : []),
                          behaviours: ic([fg.config({})])
                      }),
                      i.setTooltip(e),
                      ol(t, e),
                      r.onShow(n, e),
                      Qs.position(t, r.anchor(n), e))
                  }, r.delay)
              }), er(Kh, function(t) {
                  i.resetTimer(function() {
                      e(t)
                  }, r.delay)
              }), er(Oo(), function(t, n) {
                  n.universal || M(n.channels, Yh) && e(t)
              }), lr(function(t) {
                  e(t)
              })], "normal" === r.mode ? [er(lo(), function(t) {
                  Yo(t, qh)
              }), er(ko(), function(t) {
                  Yo(t, Kh)
              }), er(so(), function(t) {
                  Yo(t, qh)
              }), er(ao(), function(t) {
                  Yo(t, Kh)
              })] : [er(Go(), function(t, n) {
                  Yo(t, qh)
              }), er(Xo(), function(t) {
                  Yo(t, Kh)
              })]]))
          }
      }),
      state: Xh,
      apis: $h
  }), Zh = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), tv = tinymce.util.Tools.resolve("tinymce.util.I18n"), nv = ["input", "button", "textarea", "select"], ev = function(t, n, e) {
      (n.disabled() ? cv : sv)(t, n)
  }, ov = function(t, n) {
      return !0 === n.useNative && M(nv, mr(t.element))
  }, rv = function(t) {
      zr(t.element, "disabled", "disabled")
  }, iv = function(t) {
      Ur(t.element, "disabled")
  }, uv = function(t) {
      zr(t.element, "aria-disabled", "true")
  }, av = function(t) {
      zr(t.element, "aria-disabled", "false")
  }, cv = function(n, t, e) {
      t.disableClass.each(function(t) {
          Ei(n.element, t)
      }),
      (ov(n, t) ? rv : uv)(n),
      t.onDisabled(n)
  }, sv = function(n, t, e) {
      t.disableClass.each(function(t) {
          Bi(n.element, t)
      }),
      (ov(n, t) ? iv : av)(n),
      t.onEnabled(n)
  }, lv = function(t, n) {
      return ov(t, n) ? jr(t.element, "disabled") : "true" === Nr(t.element, "aria-disabled")
  }, fv = /* */
  Object.freeze({
      __proto__: null,
      enable: sv,
      disable: cv,
      isDisabled: lv,
      onLoad: ev,
      set: function(t, n, e, o) {
          (o ? cv : sv)(t, n)
      }
  }), dv = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function(t, n) {
          return gi({
              classes: n.disabled() ? n.disableClass.toArray() : []
          })
      },
      events: function(e, t) {
          return Zo([tr(_o(), function(t, n) {
              return lv(t, e)
          }), tc(e, t, ev)])
      }
  }), mv = [ae("disabled", c), ne("useNative", !0), Kn("disableClass"), ga("onDisabled"), ga("onEnabled")], gv = ac({
      fields: mv,
      name: "disabling",
      active: dv,
      apis: fv
  }), pv = tinymce.util.Tools.resolve("tinymce.EditorManager"), hv = function(t) {
      return t.getParam("height", Math.max(t.getElement().offsetHeight, 200))
  }, vv = function(t) {
      return t.getParam("width", Zh.DOM.getStyle(t.getElement(), "width"))
  }, bv = function(t) {
      return st.from(t.getParam("min_width")).filter(lt)
  }, yv = function(t) {
      return st.from(t.getParam("min_height")).filter(lt)
  }, xv = function(t) {
      return st.from(t.getParam("max_width")).filter(lt)
  }, wv = function(t) {
      return st.from(t.getParam("max_height")).filter(lt)
  }, Sv = function(t) {
      return !1 !== t.getParam("menubar", !0, "boolean")
  }, kv = function(t) {
      var n = t.getParam("toolbar", !0)
        , e = !0 === n
        , o = k(n)
        , r = p(n) && 0 < n.length;
      return !Ov(t) && (r || o || e)
  }, Cv = function(n) {
      var t = I(9, function(t) {
          return n.getParam("toolbar" + (t + 1), !1, "string")
      })
        , e = H(t, function(t) {
          return "string" == typeof t
      });
      return 0 < e.length ? st.some(e) : st.none()
  }, Ov = function(t) {
      return Cv(t).fold(function() {
          return 0 < t.getParam("toolbar", [], "string[]").length
      }, function() {
          return !0
      })
  };
  (ih = rh = rh || {})["default"] = "wrap",
  ih.floating = "floating",
  ih.sliding = "sliding",
  ih.scrolling = "scrolling";
  var _v, Tv, Ev = function(t) {
      return t.getParam("toolbar_mode", "", "string")
  };
  (Tv = _v = _v || {}).auto = "auto",
  Tv.top = "top",
  Tv.bottom = "bottom";
  var Dv, Bv = function(t) {
      return t.getParam("toolbar_location", _v.auto, "string")
  }, Av = function(t) {
      return Bv(t) === _v.bottom
  }, Mv = function(t) {
      var n = t.getParam("fixed_toolbar_container", "", "string");
      return 0 < n.length && t.inline ? Ku(Wi(), n) : st.none()
  }, Fv = function(t) {
      return t.inline && Mv(t).isSome()
  }, Iv = function(t) {
      return Mv(t).getOrThunk(function() {
          return zi(Hi(me.fromDom(t.getElement())))
      })
  }, Rv = function(t) {
      return t.inline && !Sv(t) && !kv(t) && !Ov(t)
  }, Vv = function(t) {
      return (t.getParam("toolbar_sticky", !1, "boolean") || t.inline) && !Fv(t) && !Rv(t)
  }, Pv = "silver.readonly", Hv = fn([jn("readonly", Vn)]), zv = function(t, n) {
      var e = t.outerContainer.element;
      n && (t.mothership.broadcastOn([wl()], {
          target: e
      }),
      t.uiMothership.broadcastOn([wl()], {
          target: e
      })),
      t.mothership.broadcastOn([Pv], {
          readonly: n
      }),
      t.uiMothership.broadcastOn([Pv], {
          readonly: n
      })
  }, Nv = function(t, n) {
      t.on("init", function() {
          t.mode.isReadOnly() && zv(n, !0)
      }),
      t.on("SwitchMode", function() {
          return zv(n, t.mode.isReadOnly())
      }),
      t.getParam("readonly", !1, "boolean") && t.setMode("readonly")
  }, Lv = function() {
      var t;
      return fc.config({
          channels: ((t = {})[Pv] = {
              schema: Hv,
              onReceive: function(t, n) {
                  gv.set(t, n.readonly)
              }
          },
          t)
      })
  }, jv = function(t) {
      return gv.config({
          disabled: t,
          disableClass: "tox-collection__item--state-disabled"
      })
  }, Uv = function(t) {
      return gv.config({
          disabled: t
      })
  }, Wv = function(t) {
      return gv.config({
          disabled: t,
          disableClass: "tox-tbtn--disabled"
      })
  }, Gv = function(t) {
      return gv.config({
          disabled: t,
          disableClass: "tox-tbtn--disabled",
          useNative: !1
      })
  }, Xv = function(t, n) {
      var e = t.getApi(n);
      return function(t) {
          t(e)
      }
  }, Yv = function(e, o) {
      return sr(function(t) {
          Xv(e, t)(function(t) {
              var n = e.onSetup(t);
              null !== n && n !== undefined && o.set(n)
          })
      })
  }, qv = function(n, e) {
      return lr(function(t) {
          return Xv(n, t)(e.get())
      })
  }, Kv = ((Dv = {})[_o()] = ["disabling", "alloy.base.behaviour", "toggling", "item-events"],
  Dv), Jv = function(t) {
      return U(t, function(t) {
          return t.toArray()
      })
  }, $v = function(t, n, e, o) {
      var r, i, u = fe($);
      return {
          type: "item",
          dom: n.dom,
          components: Jv(n.optComponents),
          data: t.data,
          eventOrder: Kv,
          hasSubmenu: t.triggersSubmenu,
          itemBehaviours: ic([dg("item-events", [(r = t,
          i = e,
          dr(function(t, n) {
              Xv(r, t)(r.onAction),
              r.triggersSubmenu || i !== uh.CLOSE_ON_EXECUTE || (Yo(t, Bo()),
              n.stop())
          })), Yv(t, u), qv(t, u)]), jv(function() {
              return t.disabled || o.isDisabled()
          }), Lv(), fg.config({})].concat(t.itemBehaviours))
      }
  }, Qv = function(t) {
      return {
          value: t.value,
          meta: ut({
              text: t.text.getOr("")
          }, t.meta)
      }
  }, Zv = tinymce.util.Tools.resolve("tinymce.Env"), tb = function(t) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-collection__item-icon"],
              innerHtml: t
          }
      }
  }, nb = function(t) {
      return {
          dom: {
              tag: "div",
              classes: [dh]
          },
          components: [fu(tv.translate(t))]
      }
  }, eb = function(t, n) {
      return {
          dom: {
              tag: "div",
              classes: n,
              innerHtml: t
          }
      }
  }, ob = function(t, n) {
      return {
          dom: {
              tag: "div",
              classes: [dh]
          },
          components: [{
              dom: {
                  tag: t.tag,
                  styles: t.styles
              },
              components: [fu(tv.translate(n))]
          }]
      }
  }, rb = function(t) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-collection__item-accessory"],
              innerHtml: (n = t,
              e = Zv.mac ? {
                  alt: "&#x2325;",
                  ctrl: "&#x2303;",
                  shift: "&#x21E7;",
                  meta: "&#x2318;",
                  access: "&#x2303;&#x2325;"
              } : {
                  meta: "Ctrl",
                  access: "Shift+Alt"
              },
              o = n.split("+"),
              r = V(o, function(t) {
                  var n = t.toLowerCase().trim();
                  return It(e, n) ? e[n] : t
              }),
              Zv.mac ? r.join("") : r.join("+"))
          }
      };
      var n, e, o, r
  }, ib = function(t) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-collection__item-checkmark"],
              innerHtml: hp("checkmark", t)
          }
      }
  }, ub = function(t, n) {
      var e = n.map(function(t) {
          return {
              attributes: {
                  title: tv.translate(t)
              }
          }
      }).getOr({});
      return ut({
          tag: "div",
          classes: [ah, ch].concat(t ? ["tox-collection__item-icon-rtl"] : [])
      }, e)
  }, ab = ["list-num-default", "list-num-lower-alpha", "list-num-lower-greek", "list-num-lower-roman", "list-num-upper-alpha", "list-num-upper-roman"], cb = ["list-bull-circle", "list-bull-default", "list-bull-square"], sb = function(t, r, n, i) {
      void 0 === i && (i = st.none());
      var e, o, u, a, c, s, l, f, d, m, g, p, h = tv.isRtl() && t.iconContent.exists(function(t) {
          return M(cb, t)
      }), v = t.iconContent.map(function(t) {
          return tv.isRtl() && M(ab, t) ? t + "-rtl" : t
      }).map(function(t) {
          return n = t,
          e = r.icons,
          o = i,
          st.from(e()[n.toLowerCase()]).or(o).getOrThunk(function() {
              return pp(e)
          });
          var n, e, o
      }), b = st.from(t.meta).fold(function() {
          return nb
      }, function(t) {
          return It(t, "style") ? y(ob, t.style) : nb
      });
      return "color" === t.presets ? (f = t.ariaLabel,
      d = t.value,
      m = r,
      {
          dom: (g = v.getOr(""),
          p = {
              tag: "div",
              attributes: f.map(function(t) {
                  return {
                      title: m.translate(t)
                  }
              }).getOr({}),
              classes: ["tox-swatch"]
          },
          ut(ut({}, p), "custom" === d ? {
              tag: "button",
              classes: S(p.classes, ["tox-swatches__picker-btn"]),
              innerHtml: g
          } : "remove" === d ? {
              classes: S(p.classes, ["tox-swatch--remove"]),
              innerHtml: g
          } : {
              attributes: ut(ut({}, p.attributes), {
                  "data-mce-color": d
              }),
              styles: {
                  "background-color": d
              }
          })),
          optComponents: []
      }) : (e = t,
      o = v,
      u = b,
      a = h,
      c = n ? o.or(st.some("")).map(tb) : st.none(),
      s = e.checkMark,
      l = e.htmlContent.fold(function() {
          return e.textContent.map(u)
      }, function(t) {
          return st.some(eb(t, [dh]))
      }),
      {
          dom: ub(a, e.ariaLabel),
          optComponents: [c, l, e.shortcutContent.map(rb), s, e.caret]
      })
  }, lb = function(t, n) {
      return Ft(t, "tooltipWorker").map(function(e) {
          return [Qh.config({
              lazySink: n.getSink,
              tooltipDom: {
                  tag: "div",
                  classes: ["tox-tooltip-worker-container"]
              },
              tooltipComponents: [],
              anchor: function(t) {
                  return {
                      anchor: "submenu",
                      item: t,
                      overrides: {
                          maxHeightFunction: Fc
                      }
                  }
              },
              mode: "follow-highlight",
              onShow: function(n, t) {
                  e(function(t) {
                      Qh.setComponents(n, [du({
                          element: me.fromDom(t)
                      })])
                  })
              }
          })]
      }).getOr([])
  }, fb = function(t, n) {
      var e, o = tv.translate(t), r = (e = o,
      Zh.DOM.encode(e));
      if (0 < n.length) {
          var i = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),"gi");
          return r.replace(i, function(t) {
              return '<span class="tox-autocompleter-highlight">' + t + "</span>"
          })
      }
      return r
  }, db = Cf(Ng(), Lg()), mb = function(t) {
      return {
          value: t
      }
  }, gb = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, pb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, hb = function(t) {
      return gb.test(t) || pb.test(t)
  }, vb = function(t) {
      var n = {
          value: t.value.replace(gb, function(t, n, e, o) {
              return n + n + e + e + o + o
          })
      }
        , e = pb.exec(n.value);
      return null === e ? ["FFFFFF", "FF", "FF", "FF"] : e
  }, bb = function(t) {
      var n = t.toString(16);
      return 1 === n.length ? "0" + n : n
  }, yb = function(t) {
      var n = bb(t.red) + bb(t.green) + bb(t.blue);
      return mb(n)
  }, xb = Math.min, wb = Math.max, Sb = Math.round, kb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/, Cb = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/, Ob = function(t, n, e, o) {
      return {
          red: t,
          green: n,
          blue: e,
          alpha: o
      }
  }, _b = function(t) {
      var n = parseInt(t, 10);
      return n.toString() === t && 0 <= n && n <= 255
  }, Tb = function(t) {
      var n, e, o, r = (t.hue || 0) % 360, i = t.saturation / 100, u = t.value / 100, i = wb(0, xb(i, 1)), u = wb(0, xb(u, 1));
      if (0 === i)
          return n = e = o = Sb(255 * u),
          Ob(n, e, o, 1);
      var a = r / 60
        , c = u * i
        , s = c * (1 - Math.abs(a % 2 - 1))
        , l = u - c;
      switch (Math.floor(a)) {
      case 0:
          n = c,
          e = s,
          o = 0;
          break;
      case 1:
          n = s,
          e = c,
          o = 0;
          break;
      case 2:
          n = 0,
          e = c,
          o = s;
          break;
      case 3:
          n = 0,
          e = s,
          o = c;
          break;
      case 4:
          n = s,
          e = 0,
          o = c;
          break;
      case 5:
          n = c,
          e = 0,
          o = s;
          break;
      default:
          n = e = o = 0
      }
      return n = Sb(255 * (n + l)),
      e = Sb(255 * (e + l)),
      o = Sb(255 * (o + l)),
      Ob(n, e, o, 1)
  }, Eb = function(t) {
      var n = vb(t)
        , e = parseInt(n[1], 16)
        , o = parseInt(n[2], 16)
        , r = parseInt(n[3], 16);
      return Ob(e, o, r, 1)
  }, Db = function(t, n, e, o) {
      var r = parseInt(t, 10)
        , i = parseInt(n, 10)
        , u = parseInt(e, 10)
        , a = parseFloat(o);
      return Ob(r, i, u, a)
  }, Bb = function(t) {
      return "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")"
  }, Ab = Ob(255, 0, 0, 1), Mb = function(t, n) {
      return t.fire("ResizeContent", n)
  }, Fb = tinymce.util.Tools.resolve("tinymce.util.LocalStorage"), Ib = "tinymce-custom-colors";
  var Rb = "choiceitem"
    , Vb = [{
      type: Rb,
      text: "Light Green",
      value: "#BFEDD2"
  }, {
      type: Rb,
      text: "Light Yellow",
      value: "#FBEEB8"
  }, {
      type: Rb,
      text: "Light Red",
      value: "#F8CAC6"
  }, {
      type: Rb,
      text: "Light Purple",
      value: "#ECCAFA"
  }, {
      type: Rb,
      text: "Light Blue",
      value: "#C2E0F4"
  }, {
      type: Rb,
      text: "Green",
      value: "#2DC26B"
  }, {
      type: Rb,
      text: "Yellow",
      value: "#F1C40F"
  }, {
      type: Rb,
      text: "Red",
      value: "#E03E2D"
  }, {
      type: Rb,
      text: "Purple",
      value: "#B96AD9"
  }, {
      type: Rb,
      text: "Blue",
      value: "#3598DB"
  }, {
      type: Rb,
      text: "Dark Turquoise",
      value: "#169179"
  }, {
      type: Rb,
      text: "Orange",
      value: "#E67E23"
  }, {
      type: Rb,
      text: "Dark Red",
      value: "#BA372A"
  }, {
      type: Rb,
      text: "Dark Purple",
      value: "#843FA1"
  }, {
      type: Rb,
      text: "Dark Blue",
      value: "#236FA1"
  }, {
      type: Rb,
      text: "Light Gray",
      value: "#ECF0F1"
  }, {
      type: Rb,
      text: "Medium Gray",
      value: "#CED4D9"
  }, {
      type: Rb,
      text: "Gray",
      value: "#95A5A6"
  }, {
      type: Rb,
      text: "Dark Gray",
      value: "#7E8C8D"
  }, {
      type: Rb,
      text: "Navy Blue",
      value: "#34495E"
  }, {
      type: Rb,
      text: "Black",
      value: "#000000"
  }, {
      type: Rb,
      text: "White",
      value: "#ffffff"
  }]
    , Pb = function(e) {
      void 0 === e && (e = 10);
      var t, n = Fb.getItem(Ib), o = k(n) ? JSON.parse(n) : [], r = e - (t = o).length < 0 ? t.slice(0, e) : t, i = function(t) {
          r.splice(t, 1)
      };
      return {
          add: function(t) {
              var n;
              (-1 === (n = A(r, t)) ? st.none() : st.some(n)).each(i),
              r.unshift(t),
              r.length > e && r.pop(),
              Fb.setItem(Ib, JSON.stringify(r))
          },
          state: function() {
              return r.slice(0)
          }
      }
  }(10)
    , Hb = function(t) {
      return !1 !== t.getParam("custom_colors")
  }
    , zb = function(t) {
      var n = t.getParam("color_map");
      return n !== undefined ? function(t) {
          var n = []
            , u = document.createElement("canvas");
          u.height = 1,
          u.width = 1;
          for (var a = u.getContext("2d"), c = function(t, n) {
              var e = n / 255;
              return ("0" + Math.round(t * e + 255 * (1 - e)).toString(16)).slice(-2).toUpperCase()
          }, e = 0; e < t.length; e += 2)
              n.push({
                  text: t[e + 1],
                  value: function(t) {
                      if (/^[0-9A-Fa-f]{6}$/.test(t))
                          return "#" + t.toUpperCase();
                      a.clearRect(0, 0, u.width, u.height),
                      a.fillStyle = "#FFFFFF",
                      a.fillStyle = t,
                      a.fillRect(0, 0, 1, 1);
                      var n = a.getImageData(0, 0, 1, 1).data
                        , e = n[0]
                        , o = n[1]
                        , r = n[2]
                        , i = n[3];
                      return "#" + c(e, i) + c(o, i) + c(r, i)
                  }(t[e]),
                  type: "choiceitem"
              });
          return n
      }(n) : Vb
  }
    , Nb = function(t) {
      Pb.add(t)
  }
    , Lb = function(i) {
      i.addCommand("mceApplyTextcolor", function(t, n) {
          var e, o, r;
          o = t,
          r = n,
          (e = i).undoManager.transact(function() {
              e.focus(),
              e.formatter.apply(o, {
                  value: r
              }),
              e.nodeChanged()
          })
      }),
      i.addCommand("mceRemoveTextcolor", function(t) {
          var n, e;
          e = t,
          (n = i).undoManager.transact(function() {
              n.focus(),
              n.formatter.remove(e, {
                  value: null
              }, null, !0),
              n.nodeChanged()
          })
      })
  }
    , jb = function(t) {
      var n, e, o = zb(t), r = (n = o.length,
      Math.max(5, Math.ceil(Math.sqrt(n))));
      return e = r,
      t.getParam("color_cols", e, "number")
  }
    , Ub = function(n, e, t, o) {
      "custom" === t ? Kb(n)(function(t) {
          t.each(function(t) {
              Nb(t),
              n.execCommand("mceApplyTextcolor", e, t),
              o(t)
          })
      }, "#000000") : "remove" === t ? (o(""),
      n.execCommand("mceRemoveTextcolor", e)) : (o(t),
      n.execCommand("mceApplyTextcolor", e, t))
  }
    , Wb = function(t, n) {
      return t.concat(V(Pb.state(), function(t) {
          return {
              type: Rb,
              text: t,
              value: t
          }
      }).concat((o = {
          type: e = "choiceitem",
          text: "Remove color",
          icon: "color-swatch-remove-color",
          value: "remove"
      },
      n ? [o, {
          type: e,
          text: "Custom color",
          icon: "color-picker",
          value: "custom"
      }] : [o])));
      var e, o
  }
    , Gb = function(n, e) {
      return function(t) {
          t(Wb(n, e))
      }
  }
    , Xb = function(t, n, e) {
      var o, r;
      o = "forecolor" === n ? "tox-icon-text-color__color" : "tox-icon-highlight-bg-color__color",
      r = e,
      t.setIconFill(o, r),
      t.setIconStroke(o, r)
  }
    , Yb = function(i, e, u, t, o) {
      i.ui.registry.addSplitButton(e, {
          tooltip: t,
          presets: "color",
          icon: "forecolor" === e ? "text-color" : "highlight-bg-color",
          select: function(e) {
              var t, o, r;
              return st.from((o = u,
              (t = i).dom.getParents(t.selection.getStart(), function(t) {
                  var n;
                  (n = t.style["forecolor" === o ? "color" : "background-color"]) && (r = r || n)
              }),
              r)).bind(function(t) {
                  return function(t) {
                      if ("transparent" === t)
                          return st.some(Ob(0, 0, 0, 0));
                      var n = kb.exec(t);
                      if (null !== n)
                          return st.some(Db(n[1], n[2], n[3], "1"));
                      var e = Cb.exec(t);
                      return null !== e ? st.some(Db(e[1], e[2], e[3], e[4])) : st.none()
                  }(t).map(function(t) {
                      var n = yb(t).value;
                      return we(e.toLowerCase(), n)
                  })
              }).getOr(!1)
          },
          columns: jb(i),
          fetch: Gb(zb(i), Hb(i)),
          onAction: function(t) {
              null !== o.get() && Ub(i, u, o.get(), function() {})
          },
          onItemAction: function(t, n) {
              Ub(i, u, n, function(t) {
                  var n;
                  o.set(t),
                  n = {
                      name: e,
                      color: t
                  },
                  i.fire("TextColorChange", n)
              })
          },
          onSetup: function(n) {
              null !== o.get() && Xb(n, e, o.get());
              var t = function(t) {
                  t.name === e && Xb(n, t.name, t.color)
              };
              return i.on("TextColorChange", t),
              function() {
                  i.off("TextColorChange", t)
              }
          }
      })
  }
    , qb = function(n, t, e, o) {
      n.ui.registry.addNestedMenuItem(t, {
          text: o,
          icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
          getSubmenuItems: function() {
              return [{
                  type: "fancymenuitem",
                  fancytype: "colorswatch",
                  onAction: function(t) {
                      Ub(n, e, t.value, $)
                  }
              }]
          }
      })
  }
    , Kb = function(i) {
      return function(t, n) {
          var e, o = {
              colorpicker: n
          }, r = (e = t,
          function(t) {
              var n = t.getData();
              e(st.from(n.colorpicker)),
              t.close()
          }
          );
          i.windowManager.open({
              title: "Color Picker",
              size: "normal",
              body: {
                  type: "panel",
                  items: [{
                      type: "colorpicker",
                      name: "colorpicker",
                      label: "Color"
                  }]
              },
              buttons: [{
                  type: "cancel",
                  name: "cancel",
                  text: "Cancel"
              }, {
                  type: "submit",
                  name: "save",
                  text: "Save",
                  primary: !0
              }],
              initialData: o,
              onAction: function(t, n) {
                  "hex-valid" === n.name && (n.value ? t.enable("ok") : t.disable("ok"))
              },
              onSubmit: r,
              onClose: function() {},
              onCancel: function() {
                  t(st.none())
              }
          })
      }
  }
    , Jb = function(t, n, e, o, r, i, u, a) {
      var c = Oh(n)
        , s = $b(n, e, o, "color" !== r ? "normal" : "color", i, u, a);
      return Eh(t, c, s, o, r)
  }
    , $b = function(e, o, r, i, u, a, c) {
      return Kf(V(e, function(n) {
          return "choiceitem" === n.type ? _n("choicemenuitem", Ph, n).fold(_h, function(t) {
              return st.some(function(n, t, e, o, r, i, u, a) {
                  void 0 === a && (a = !0);
                  var c = sb({
                      presets: e,
                      textContent: t ? n.text : st.none(),
                      htmlContent: st.none(),
                      ariaLabel: n.text,
                      iconContent: n.icon,
                      shortcutContent: t ? n.shortcut : st.none(),
                      checkMark: t ? st.some(ib(u.icons)) : st.none(),
                      caret: st.none(),
                      value: n.value
                  }, u, a);
                  return zt($v({
                      data: Qv(n),
                      disabled: n.disabled,
                      getApi: function(n) {
                          return {
                              setActive: function(t) {
                                  Dg.set(n, t)
                              },
                              isActive: function() {
                                  return Dg.isOn(n)
                              },
                              isDisabled: function() {
                                  return gv.isDisabled(n)
                              },
                              setDisabled: function(t) {
                                  return gv.set(n, t)
                              }
                          }
                      },
                      onAction: function(t) {
                          return o(n.value)
                      },
                      onSetup: function(t) {
                          return t.setActive(r),
                          function() {}
                      },
                      triggersSubmenu: !1,
                      itemBehaviours: []
                  }, c, i, u), {
                      toggling: {
                          toggleClass: fh,
                          toggleOnExecute: !1,
                          selected: n.active
                      }
                  })
              }(t, 1 === r, i, o, a(n.value), u, c, Oh(e)))
          }) : st.none()
      }))
  }
    , Qb = function(t, n) {
      var e = yh(n);
      return 1 === t ? {
          mode: "menu",
          moveOnTab: !0
      } : "auto" === t ? {
          mode: "grid",
          selector: "." + e.item,
          initSize: {
              numColumns: 1,
              numRows: 1
          }
      } : {
          mode: "matrix",
          rowSelector: "." + ("color" === n ? "tox-swatches__row" : "tox-collection__group")
      }
  };
  var Zb, ty, ny = Kr("cell-over"), ey = Kr("cell-execute"), oy = function(t, n, e) {
      for (var o = [], r = 0; r < n; r++) {
          for (var i = [], u = 0; u < e; u++)
              i.push(function(n, e, t) {
                  var o, r = function(t) {
                      return qo(t, ey, {
                          row: n,
                          col: e
                      })
                  }, i = function(t, n) {
                      n.stop(),
                      r(t)
                  };
                  return gu({
                      dom: {
                          tag: "div",
                          attributes: ((o = {
                              role: "button"
                          })["aria-labelledby"] = t,
                          o)
                      },
                      behaviours: ic([dg("insert-table-picker-cell", [er(so(), vg.focus), er(_o(), r), er(vo(), i), er(Eo(), i)]), Dg.config({
                          toggleClass: "tox-insert-table-picker__selected",
                          toggleOnExecute: !1
                      }), vg.config({
                          onFocus: function(t) {
                              return qo(t, ny, {
                                  row: n,
                                  col: e
                              })
                          }
                      })])
                  })
              }(r, u, t));
          o.push(i)
      }
      return o
  }, ry = {
      inserttable: function(o) {
          var t = Kr("size-label")
            , i = oy(t, 10, 10)
            , u = gp({
              dom: {
                  tag: "span",
                  classes: ["tox-insert-table-picker__label"],
                  attributes: {
                      id: t
                  }
              },
              components: [fu("0x0")],
              behaviours: ic([fg.config({})])
          });
          return {
              type: "widget",
              data: {
                  value: Kr("widget-id")
              },
              dom: {
                  tag: "div",
                  classes: ["tox-fancymenuitem"]
              },
              autofocus: !0,
              components: [db.widget({
                  dom: {
                      tag: "div",
                      classes: ["tox-insert-table-picker"]
                  },
                  components: U(i, function(t) {
                      return V(t, pu)
                  }).concat(u.asSpec()),
                  behaviours: ic([dg("insert-table-picker", [ur(ny, function(t, n, e) {
                      var o = e.event.row
                        , r = e.event.col;
                      !function(t, n, e, o, r) {
                          for (var i = 0; i < o; i++)
                              for (var u = 0; u < r; u++)
                                  Dg.set(t[i][u], i <= n && u <= e)
                      }(i, o, r, 10, 10),
                      fg.set(u.get(t), [fu(r + 1 + "x" + (o + 1))])
                  }), ur(ey, function(t, n, e) {
                      o.onAction({
                          numRows: e.event.row + 1,
                          numColumns: e.event.col + 1
                      }),
                      Yo(t, Bo())
                  })]), ug.config({
                      initSize: {
                          numRows: 10,
                          numColumns: 10
                      },
                      mode: "flatgrid",
                      selector: '[role="button"]'
                  })])
              })]
          }
      },
      colorswatch: function(n, t) {
          var e = Wb(t.colorinput.getColors(), t.colorinput.hasCustomColors())
            , o = t.colorinput.getColorCols()
            , r = Jb(Kr("menu-value"), e, function(t) {
              n.onAction({
                  value: t
              })
          }, o, "color", uh.CLOSE_ON_EXECUTE, function() {
              return !1
          }, t.shared.providers)
            , i = ut(ut({}, r), {
              markers: yh("color"),
              movement: Qb(o, "color")
          });
          return {
              type: "widget",
              data: {
                  value: Kr("widget-id")
              },
              dom: {
                  tag: "div",
                  classes: ["tox-fancymenuitem"]
              },
              autofocus: !0,
              components: [db.widget(Yg.sketch(i))]
          }
      }
  }, iy = function(t, s) {
      return V(t, function(t) {
          switch (t.type) {
          case "cardcontainer":
              return u = iy((i = t).items, s),
              a = "vertical" === i.direction ? "tox-collection__item-container--column" : hh,
              c = "left" === i.align ? "tox-collection__item-container--align-left" : "tox-collection__item-container--align-right",
              {
                  dom: {
                      tag: "div",
                      classes: [ph, a, c, function() {
                          switch (i.valign) {
                          case "top":
                              return "tox-collection__item-container--valign-top";
                          case "middle":
                              return "tox-collection__item-container--valign-middle";
                          case "bottom":
                              return "tox-collection__item-container--valign-bottom"
                          }
                      }()]
                  },
                  components: u
              };
          case "cardimage":
              return e = t.src,
              o = t.classes,
              r = t.alt,
              {
                  dom: {
                      tag: "img",
                      classes: o,
                      attributes: {
                          src: e,
                          alt: r.getOr("")
                      }
                  }
              };
          case "cardtext":
              var n = t.name.exists(function(t) {
                  return M(s.cardText.highlightOn, t)
              }) ? st.from(s.cardText.matchText).getOr("") : "";
              return eb(fb(t.text, n), t.classes)
          }
          var e, o, r, i, u, a, c
      })
  }, uy = function(n, e, t, o, r, i, u, a) {
      void 0 === a && (a = !0);
      var c = sb({
          presets: o,
          textContent: st.none(),
          htmlContent: t ? n.text.map(function(t) {
              return fb(t, e)
          }) : st.none(),
          ariaLabel: n.text,
          iconContent: n.icon,
          shortcutContent: st.none(),
          checkMark: st.none(),
          caret: st.none(),
          value: n.value
      }, u.providers, a, n.icon);
      return $v({
          data: Qv(n),
          disabled: n.disabled,
          getApi: function() {
              return {}
          },
          onAction: function(t) {
              return r(n.value, n.meta)
          },
          onSetup: function() {
              return function() {}
          },
          triggersSubmenu: !1,
          itemBehaviours: lb(n.meta, u)
      }, c, i, u.providers)
  }, ay = function(t) {
      var n = t.text.fold(function() {
          return {}
      }, function(t) {
          return {
              innerHtml: t
          }
      });
      return {
          type: "separator",
          dom: ut({
              tag: "div",
              classes: [ch, "tox-collection__group-heading"]
          }, n),
          components: []
      }
  }, cy = function(t, n, e, o) {
      void 0 === o && (o = !0);
      var r = sb({
          presets: "normal",
          iconContent: t.icon,
          textContent: t.text,
          htmlContent: st.none(),
          ariaLabel: t.text,
          caret: st.none(),
          checkMark: st.none(),
          shortcutContent: t.shortcut
      }, e, o);
      return $v({
          data: Qv(t),
          getApi: function(n) {
              return {
                  isDisabled: function() {
                      return gv.isDisabled(n)
                  },
                  setDisabled: function(t) {
                      return gv.set(n, t)
                  }
              }
          },
          disabled: t.disabled,
          onAction: t.onAction,
          onSetup: t.onSetup,
          triggersSubmenu: !1,
          itemBehaviours: []
      }, r, n, e)
  }, sy = function(t, n, e, o, r) {
      void 0 === o && (o = !0),
      void 0 === r && (r = !1);
      var i, u, a = r ? (u = e.icons,
      {
          dom: {
              tag: "div",
              classes: [mh],
              innerHtml: hp("chevron-down", u)
          }
      }) : (i = e.icons,
      {
          dom: {
              tag: "div",
              classes: [mh],
              innerHtml: hp("chevron-right", i)
          }
      }), c = sb({
          presets: "normal",
          iconContent: t.icon,
          textContent: t.text,
          htmlContent: st.none(),
          ariaLabel: t.text,
          caret: st.some(a),
          checkMark: st.none(),
          shortcutContent: t.shortcut
      }, e, o);
      return $v({
          data: Qv(t),
          getApi: function(n) {
              return {
                  isDisabled: function() {
                      return gv.isDisabled(n)
                  },
                  setDisabled: function(t) {
                      return gv.set(n, t)
                  }
              }
          },
          disabled: t.disabled,
          onAction: $,
          onSetup: t.onSetup,
          triggersSubmenu: !0,
          itemBehaviours: []
      }, c, n, e)
  }, ly = function(t, n, e, o) {
      void 0 === o && (o = !0);
      var r = sb({
          iconContent: t.icon,
          textContent: t.text,
          htmlContent: st.none(),
          ariaLabel: t.text,
          checkMark: st.some(ib(e.icons)),
          caret: st.none(),
          shortcutContent: t.shortcut,
          presets: "normal",
          meta: t.meta
      }, e, o);
      return zt($v({
          data: Qv(t),
          disabled: t.disabled,
          getApi: function(n) {
              return {
                  setActive: function(t) {
                      Dg.set(n, t)
                  },
                  isActive: function() {
                      return Dg.isOn(n)
                  },
                  isDisabled: function() {
                      return gv.isDisabled(n)
                  },
                  setDisabled: function(t) {
                      return gv.set(n, t)
                  }
              }
          },
          onAction: t.onAction,
          onSetup: t.onSetup,
          triggersSubmenu: !1,
          itemBehaviours: []
      }, r, n, e), {
          toggling: {
              toggleClass: fh,
              toggleOnExecute: !1,
              selected: t.active
          }
      })
  }, fy = function(n, e) {
      return t = ry,
      o = n.fancytype,
      (Object.prototype.hasOwnProperty.call(t, o) ? st.some(t[o]) : st.none()).map(function(t) {
          return t(n, e)
      });
      var t, o
  }, dy = function(t, n, e, o) {
      var r = {
          dom: ub(!1, t.label),
          optComponents: [st.some({
              dom: {
                  tag: "div",
                  classes: [ph, hh]
              },
              components: iy(t.items, o)
          })]
      };
      return $v({
          data: Qv(ut({
              text: st.none()
          }, t)),
          disabled: t.disabled,
          getApi: function(e) {
              return {
                  isDisabled: function() {
                      return gv.isDisabled(e)
                  },
                  setDisabled: function(n) {
                      gv.set(e, n),
                      ft(ms(e.element, "*"), function(t) {
                          e.getSystem().getByDom(t).each(function(t) {
                              t.hasConfigured(gv) && gv.set(t, n)
                          })
                      })
                  }
              }
          },
          onAction: t.onAction,
          onSetup: t.onSetup,
          triggersSubmenu: !1,
          itemBehaviours: st.from(o.itemBehaviours).getOr([])
      }, r, n, e.providers)
  };
  (ty = Zb = Zb || {})[ty.ContentFocus = 0] = "ContentFocus",
  ty[ty.UiFocus = 1] = "UiFocus";
  var my = function(t, n, e, o, r) {
      var i = e.shared.providers
        , u = function(t) {
          return r ? ut(ut({}, t), {
              shortcut: st.none(),
              icon: t.text.isSome() ? st.none() : t.icon
          }) : t
      };
      switch (t.type) {
      case "menuitem":
          return _n("menuitem", zh, t).fold(_h, function(t) {
              return st.some(cy(u(t), n, i, o))
          });
      case "nestedmenuitem":
          return _n("nestedmenuitem", Nh, t).fold(_h, function(t) {
              return st.some(sy(u(t), n, i, o, r))
          });
      case "togglemenuitem":
          return _n("togglemenuitem", Lh, t).fold(_h, function(t) {
              return st.some(ly(u(t), n, i, o))
          });
      case "separator":
          return _n("separatormenuitem", Np, t).fold(_h, function(t) {
              return st.some(ay(t))
          });
      case "fancymenuitem":
          return _n("fancymenuitem", Hh, t).fold(_h, function(t) {
              return fy(u(t), e)
          });
      default:
          return console.error("Unknown item in general menu", t),
          st.none()
      }
  }
    , gy = function(t, e, o, n, r, i, u) {
      var a = 1 === n
        , c = !a || Oh(t);
      return Kf(V(t, function(t) {
          switch (t.type) {
          case "separator":
              return _n("Autocompleter.Separator", Np, t).fold(_h, function(t) {
                  return st.some(ay(t))
              });
          case "cardmenuitem":
              return _n("cardmenuitem", Vh, t).fold(_h, function(n) {
                  return st.some(dy(ut(ut({}, n), {
                      onAction: function(t) {
                          n.onAction(t),
                          o(n.value, n.meta)
                      }
                  }), r, i, {
                      itemBehaviours: lb(n.meta, i),
                      cardText: {
                          matchText: e,
                          highlightOn: u
                      }
                  }))
              });
          case "autocompleteitem":
          default:
              return _n("Autocompleter.Item", Lp, t).fold(_h, function(t) {
                  return st.some(uy(t, e, a, "normal", o, r, i, c))
              })
          }
      }))
  }
    , py = function(t, n, e, o, r) {
      var i = Oh(n)
        , u = Kf(V(n, function(t) {
          var n = function(t) {
              return my(t, e, o, (n = t,
              r ? !n.hasOwnProperty("text") : i), r);
              var n
          };
          return "nestedmenuitem" === t.type && t.getSubmenuItems().length <= 0 ? n(ut(ut({}, t), {
              disabled: !0
          })) : n(t)
      }));
      return (r ? Th : Eh)(t, i, u, 1, "normal")
  }
    , hy = function(t) {
      return Zg.singleData(t.value, t)
  }
    , vy = function(d, c) {
      var e = fe(st.none())
        , s = fe(!1)
        , m = gu(tp.sketch({
          dom: {
              tag: "div",
              classes: ["tox-autocompleter"]
          },
          components: [],
          fireDismissalEventInstead: {},
          inlineBehaviours: ic([dg("dismissAutocompleter", [er(zo(), function() {
              return f()
          })])]),
          lazySink: c.getSink
      }))
        , o = function() {
          return e.get().isSome()
      }
        , l = function() {
          o() && tp.hide(m)
      }
        , f = function() {
          var t;
          o() && (t = e.get().map(function(t) {
              return t.element
          }),
          _p(t.getOr(me.fromDom(d.selection.getNode()))).each(Rr),
          l(),
          e.set(st.none()),
          s.set(!1))
      }
        , r = Lt(function() {
          return oh(d)
      })
        , g = function(t, n, e, o) {
          t.matchLength = n.text.length;
          var r, i, u, a, c, s, l, f = Z(e, function(t) {
              return st.from(t.columns)
          }).getOr(1);
          tp.showAt(m, {
              anchor: "node",
              root: me.fromDom(d.getBody()),
              node: st.from(t.element)
          }, Yg.sketch((r = Eh("autocompleter-value", !0, o, f, "normal"),
          i = f,
          u = Zb.ContentFocus,
          a = "normal",
          c = (u === Zb.ContentFocus ? Fd : Md)(),
          s = Qb(i, a),
          l = yh(a),
          {
              dom: r.dom,
              components: r.components,
              items: r.items,
              value: r.value,
              markers: {
                  selectedItem: l.selectedItem,
                  item: l.item
              },
              movement: s,
              fakeFocus: u === Zb.ContentFocus,
              focusManager: c,
              menuBehaviours: Wh("auto" !== i ? [] : [sr(function(o, t) {
                  jh(o, 4, l.item).each(function(t) {
                      var n = t.numColumns
                        , e = t.numRows;
                      ug.setGridSize(o, e, n)
                  })
              })])
          }))),
          tp.getContent(m).each(fd.highlightFirst)
      }
        , p = function(t) {
          var n;
          n = t,
          e.get().map(function(t) {
              return Ap(d.dom, d.selection.getRng(), t.triggerChar).bind(function(t) {
                  return zp(d, r, t, n)
              })
          }).getOrThunk(function() {
              return Hp(d, r)
          }).fold(f, function(a) {
              var t, n;
              t = a.context,
              o() || (n = Op(d, t.range),
              e.set(st.some({
                  triggerChar: t.triggerChar,
                  element: n,
                  matchLength: t.text.length
              })),
              s.set(!1)),
              a.lookupData.then(function(u) {
                  e.get().map(function(t) {
                      var n, e, o, r, i = a.context;
                      t.triggerChar === i.triggerChar && (e = i.triggerChar,
                      r = Z(o = u, function(t) {
                          return st.from(t.columns)
                      }).getOr(1),
                      0 < (n = U(o, function(i) {
                          var t = i.items;
                          return gy(t, i.matchText, function(o, r) {
                              var t = d.selection.getRng();
                              Ap(d.dom, t, e).fold(function() {
                                  return console.error("Lost context. Cursor probably moved")
                              }, function(t) {
                                  var n = t.range
                                    , e = {
                                      hide: function() {
                                          f()
                                      },
                                      reload: function(t) {
                                          l(),
                                          p(t)
                                      }
                                  };
                                  s.set(!0),
                                  i.onAction(e, n, o, r),
                                  s.set(!1)
                              })
                          }, r, uh.BUBBLE_TO_SANDBOX, c, i.highlightOn)
                      })).length ? g(t, i, u, n) : (10 <= i.text.length - t.matchLength ? f : l)())
                  })
              })
          })
      }
        , t = {
          onKeypress: Sp(function(t) {
              27 !== t.which && p()
          }, 50),
          cancelIfNecessary: f,
          isMenuOpen: function() {
              return tp.isOpen(m)
          },
          isActive: o,
          isProcessingAction: s.get,
          getView: function() {
              return tp.getContent(m)
          }
      };
      !1 === d.hasPlugin("rtc") && Mp(t, d)
  }
    , by = b
    , yy = function(t, n, e) {
      return Du(t, n, by, e, !1)
  }
    , xy = function(t, n, e) {
      return Du(t, n, by, e, !0)
  }
    , wy = Eu
    , Sy = function(t, n, e) {
      return Ju(t, n, e).isSome()
  };
  function ky(e, o) {
      var r = null;
      return {
          cancel: function() {
              null !== r && (clearTimeout(r),
              r = null)
          },
          schedule: function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
              r = setTimeout(function() {
                  e.apply(null, t),
                  r = null
              }, o)
          }
      }
  }
  var Cy = function(t) {
      var n = t.raw;
      return n.touches === undefined || 1 !== n.touches.length ? st.none() : st.some(n.touches[0])
  }
    , Oy = function(e) {
      var u = fe(st.none())
        , o = fe(!1)
        , r = ky(function(t) {
          e.triggerEvent(Do(), t),
          o.set(!0)
      }, 400)
        , i = $t([{
          key: no(),
          value: function(e) {
              return Cy(e).each(function(t) {
                  r.cancel();
                  var n = {
                      x: t.clientX,
                      y: t.clientY,
                      target: e.target
                  };
                  r.schedule(e),
                  o.set(!1),
                  u.set(st.some(n))
              }),
              st.none()
          }
      }, {
          key: eo(),
          value: function(t) {
              return r.cancel(),
              Cy(t).each(function(i) {
                  u.get().each(function(t) {
                      var n, e, o, r;
                      n = i,
                      e = t,
                      o = Math.abs(n.clientX - e.x),
                      r = Math.abs(n.clientY - e.y),
                      (5 < o || 5 < r) && u.set(st.none())
                  })
              }),
              st.none()
          }
      }, {
          key: oo(),
          value: function(n) {
              r.cancel();
              return u.get().filter(function(t) {
                  return Ge(t.target, n.target)
              }).map(function(t) {
                  return o.get() ? (n.prevent(),
                  !1) : e.triggerEvent(Eo(), n)
              })
          }
      }]);
      return {
          fireIfReady: function(n, t) {
              return Ft(i, t).bind(function(t) {
                  return t(n)
              })
          }
      }
  }
    , _y = function() {
      return je().browser.isFirefox()
  }
    , Ty = ln([Gn("triggerEvent"), ne("stopBackspace", !0)])
    , Ey = function(n, t) {
      var e, o, r, i, u = En("Getting GUI events settings", Ty, t), a = Oy(u), c = V(["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"].concat(["selectstart", "input", "contextmenu", "change", "transitionend", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), function(t) {
          return yy(n, t, function(n) {
              a.fireIfReady(n, t).each(function(t) {
                  t && n.kill()
              }),
              u.triggerEvent(t, n) && n.kill()
          })
      }), s = fe(st.none()), l = yy(n, "paste", function(n) {
          a.fireIfReady(n, "paste").each(function(t) {
              t && n.kill()
          }),
          u.triggerEvent("paste", n) && n.kill(),
          s.set(st.some(setTimeout(function() {
              u.triggerEvent(Co(), n)
          }, 0)))
      }), f = yy(n, "keydown", function(t) {
          var n;
          u.triggerEvent("keydown", t) ? t.kill() : !0 !== u.stopBackspace || ((n = t).raw.which !== dd[0] || M(["input", "textarea"], mr(n.target)) || Sy(n.target, '[contenteditable="true"]')) || t.prevent()
      }), d = (e = n,
      o = function(t) {
          u.triggerEvent("focusin", t) && t.kill()
      }
      ,
      _y() ? xy(e, "focus", o) : yy(e, "focusin", o)), m = fe(st.none()), g = (r = n,
      i = function(t) {
          u.triggerEvent("focusout", t) && t.kill(),
          m.set(st.some(setTimeout(function() {
              u.triggerEvent(ko(), t)
          }, 0)))
      }
      ,
      _y() ? xy(r, "blur", i) : yy(r, "focusout", i));
      return {
          unbind: function() {
              ft(c, function(t) {
                  t.unbind()
              }),
              f.unbind(),
              d.unbind(),
              g.unbind(),
              l.unbind(),
              s.get().each(clearTimeout),
              m.get().each(clearTimeout)
          }
      }
  }
    , Dy = function(t, n) {
      var e = Ft(t, "target").getOr(n);
      return fe(e)
  }
    , By = Vt([{
      stopped: []
  }, {
      resume: ["element"]
  }, {
      complete: []
  }])
    , Ay = function(t, o, n, e, r, i) {
      var u, a, c, s, l = t(o, e), f = (u = n,
      a = r,
      c = fe(!1),
      s = fe(!1),
      {
          stop: function() {
              c.set(!0)
          },
          cut: function() {
              s.set(!0)
          },
          isStopped: c.get,
          isCut: s.get,
          event: u,
          setSource: a.set,
          getSource: a.get
      });
      return l.fold(function() {
          return i.logEventNoHandlers(o, e),
          By.complete()
      }, function(n) {
          var e = n.descHandler;
          return hi(e)(f),
          f.isStopped() ? (i.logEventStopped(o, n.element, e.purpose),
          By.stopped()) : f.isCut() ? (i.logEventCut(o, n.element, e.purpose),
          By.complete()) : kr(n.element).fold(function() {
              return i.logNoParent(o, n.element, e.purpose),
              By.complete()
          }, function(t) {
              return i.logEventResponse(o, n.element, e.purpose),
              By.resume(t)
          })
      })
  }
    , My = function(n, e, o, t, r, i) {
      return Ay(n, e, o, t, r, i).fold(function() {
          return !0
      }, function(t) {
          return My(n, e, o, t, r, i)
      }, function() {
          return !1
      })
  }
    , Fy = function(t, n, e) {
      var o, r, i = (o = n,
      r = fe(!1),
      {
          stop: function() {
              r.set(!0)
          },
          cut: $,
          isStopped: r.get,
          isCut: c,
          event: o,
          setSource: u("Cannot set source of a broadcasted event"),
          getSource: u("Cannot get source of a broadcasted event")
      });
      return ft(t, function(t) {
          var n = t.descHandler;
          hi(n)(i)
      }),
      i.isStopped()
  }
    , Iy = function(t, n, e, o, r) {
      var i = Dy(e, o);
      return My(t, n, e, o, i, r)
  }
    , Ry = function(t, n) {
      return {
          element: t,
          descHandler: n
      }
  }
    , Vy = function(t, n) {
      return {
          id: t,
          descHandler: n
      }
  };
  function Py() {
      var i = {};
      return {
          registerId: function(o, r, t) {
              _t(t, function(t, n) {
                  var e = i[n] !== undefined ? i[n] : {};
                  e[r] = pi(t, o),
                  i[n] = e
              })
          },
          unregisterId: function(e) {
              _t(i, function(t, n) {
                  t.hasOwnProperty(e) && delete t[e]
              })
          },
          filterByType: function(t) {
              return Ft(i, t).map(function(t) {
                  return Bt(t, function(t, n) {
                      return Vy(n, t)
                  })
              }).getOr([])
          },
          find: function(t, n, e) {
              var r = Ft(i, n);
              return Je(e, function(t) {
                  return e = r,
                  ni(o = t).fold(function() {
                      return st.none()
                  }, function(n) {
                      return e.bind(function(t) {
                          return Ft(t, n)
                      }).map(function(t) {
                          return Ry(o, t)
                      })
                  });
                  var e, o
              }, t)
          }
      }
  }
  function Hy() {
      var o = Py()
        , r = {}
        , i = function(o) {
          var t = o.element;
          return ni(t).fold(function() {
              return t = "uid-",
              n = o.element,
              e = Kr(Qr + t),
              ti(n, e),
              e;
              var t, n, e
          }, function(t) {
              return t
          })
      }
        , u = function(t) {
          ni(t.element).each(function(t) {
              delete r[t],
              o.unregisterId(t)
          })
      };
      return {
          find: function(t, n, e) {
              return o.find(t, n, e)
          },
          filter: function(t) {
              return o.filterByType(t)
          },
          register: function(t) {
              var n = i(t);
              Rt(r, n) && function(t, n) {
                  var e = r[n];
                  if (e !== t)
                      throw new Error('The tagId "' + n + '" is already used by: ' + Gr(e.element) + "\nCannot use it for: " + Gr(t.element) + "\nThe conflicting element is" + (Ui(e.element) ? " " : " not ") + "already in the DOM");
                  u(t)
              }(t, n);
              var e = [t];
              o.registerId(e, n, t.events),
              r[n] = t
          },
          unregister: u,
          getById: function(t) {
              return Ft(r, t)
          }
      }
  }
  var zy, Ny, Ly, jy, Uy = Yf({
      name: "Container",
      factory: function(t) {
          var n = t.dom
            , e = n.attributes
            , o = w(n, ["attributes"]);
          return {
              uid: t.uid,
              dom: ut({
                  tag: "div",
                  attributes: ut({
                      role: "presentation"
                  }, e)
              }, o),
              components: t.components,
              behaviours: jl(t.containerBehaviours),
              events: t.events,
              domModification: t.domModification,
              eventOrder: t.eventOrder
          }
      },
      configFields: [ne("components", []), Ll("containerBehaviours", []), ne("events", {}), ne("domModification", {}), ne("eventOrder", {})]
  }), Wy = function(e) {
      var o = function(n) {
          return kr(e.element).fold(function() {
              return !0
          }, function(t) {
              return Ge(n, t)
          })
      }
        , r = Hy()
        , s = function(t, n) {
          return r.find(o, t, n)
      }
        , t = Ey(e.element, {
          triggerEvent: function(o, r) {
              return ia(o, r.target, function(t) {
                  return e = t,
                  Iy(s, o, n = r, n.target, e);
                  var n, e
              })
          }
      })
        , i = {
          debugInfo: at("real"),
          triggerEvent: function(n, e, o) {
              ia(n, e, function(t) {
                  return Iy(s, n, o, e, t)
              })
          },
          triggerFocus: function(a, c) {
              ni(a).fold(function() {
                  mc(a)
              }, function(t) {
                  ia(So(), a, function(t) {
                      var n, e, o, r, i, u;
                      return n = s,
                      e = So(),
                      i = t,
                      u = Dy(o = {
                          originator: c,
                          kill: $,
                          prevent: $,
                          target: a
                      }, r = a),
                      Ay(n, e, o, r, u, i),
                      !1
                  })
              })
          },
          triggerEscape: function(t, n) {
              i.triggerEvent("keydown", t.element, n.event)
          },
          getByUid: function(t) {
              return g(t)
          },
          getByDom: function(t) {
              return p(t)
          },
          build: gu,
          addToGui: function(t) {
              a(t)
          },
          removeFromGui: function(t) {
              c(t)
          },
          addToWorld: function(t) {
              n(t)
          },
          removeFromWorld: function(t) {
              u(t)
          },
          broadcast: function(t) {
              f(t)
          },
          broadcastOn: function(t, n) {
              d(t, n)
          },
          broadcastEvent: function(t, n) {
              m(t, n)
          },
          isConnected: b
      }
        , n = function(t) {
          t.connect(i),
          hr(t.element) || (r.register(t),
          ft(t.components(), n),
          i.triggerEvent(Mo(), t.element, {
              target: t.element
          }))
      }
        , u = function(t) {
          hr(t.element) || (ft(t.components(), u),
          r.unregister(t)),
          t.disconnect()
      }
        , a = function(t) {
          ol(e, t)
      }
        , c = function(t) {
          ul(t)
      }
        , l = function(e) {
          var t = r.filter(Oo());
          ft(t, function(t) {
              var n = t.descHandler;
              hi(n)(e)
          })
      }
        , f = function(t) {
          l({
              universal: !0,
              data: t
          })
      }
        , d = function(t, n) {
          l({
              universal: !1,
              channels: t,
              data: n
          })
      }
        , m = function(t, n) {
          var e = r.filter(t);
          return Fy(e, n)
      }
        , g = function(t) {
          return r.getById(t).fold(function() {
              return mt.error(new Error('Could not find component with uid: "' + t + '" in system.'))
          }, mt.value)
      }
        , p = function(t) {
          var n = ni(t).getOr("not found");
          return g(n)
      };
      return n(e),
      {
          root: e,
          element: e.element,
          destroy: function() {
              t.unbind(),
              Ir(e.element)
          },
          add: a,
          remove: c,
          getByUid: g,
          getByDom: p,
          addToWorld: n,
          removeFromWorld: u,
          broadcast: f,
          broadcastOn: d,
          broadcastEvent: m
      }
  }, Gy = at([ne("prefix", "form-field"), Ll("fieldBehaviours", [td, Nl])]), Xy = at([yf({
      schema: [Ln("dom")],
      name: "label"
  }), yf({
      factory: {
          sketch: function(t) {
              return {
                  uid: t.uid,
                  dom: {
                      tag: "span",
                      styles: {
                          display: "none"
                      },
                      attributes: {
                          "aria-hidden": "true"
                      },
                      innerHtml: t.text
                  }
              }
          }
      },
      schema: [Ln("text")],
      name: "aria-descriptor"
  }), vf({
      factory: {
          sketch: function(t) {
              var n = Kt(t, ["factory"]);
              return t.factory.sketch(n)
          }
      },
      schema: [Ln("factory")],
      name: "field"
  })]), Yy = qf({
      name: "FormField",
      configFields: Gy(),
      partFields: Xy(),
      factory: function(r, t, n, e) {
          var o = Ul(r.fieldBehaviours, [td.config({
              find: function(t) {
                  return Af(t, r, "field")
              }
          }), Nl.config({
              store: {
                  mode: "manual",
                  getValue: function(t) {
                      return td.getCurrent(t).bind(Nl.getValue)
                  },
                  setValue: function(t, n) {
                      td.getCurrent(t).each(function(t) {
                          Nl.setValue(t, n)
                      })
                  }
              }
          })])
            , i = Zo([sr(function(t, n) {
              var o = Ff(t, r, ["label", "field", "aria-descriptor"]);
              o.field().each(function(e) {
                  var n = Kr(r.prefix);
                  o.label().each(function(t) {
                      zr(t.element, "for", n),
                      zr(e.element, "id", n)
                  }),
                  o["aria-descriptor"]().each(function(t) {
                      var n = Kr(r.prefix);
                      zr(t.element, "id", n),
                      zr(e.element, "aria-describedby", n)
                  })
              })
          })])
            , u = {
              getField: function(t) {
                  return Af(t, r, "field")
              },
              getLabel: function(t) {
                  return Af(t, r, "label")
              }
          };
          return {
              uid: r.uid,
              dom: r.dom,
              components: t,
              behaviours: o,
              events: i,
              apis: u
          }
      },
      apis: {
          getField: function(t, n) {
              return t.getField(n)
          },
          getLabel: function(t, n) {
              return t.getLabel(n)
          }
      }
  }), qy = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function(t, n) {
          return gi({
              attributes: $t([{
                  key: n.tabAttr,
                  value: "true"
              }])
          })
      }
  }), Ky = [ne("tabAttr", "data-alloy-tabstop")], Jy = ac({
      fields: Ky,
      name: "tabstopping",
      active: qy
  }), $y = tinymce.util.Tools.resolve("tinymce.html.Entities"), Qy = function(t, n, e, o) {
      var r = Zy(t, n, e, o);
      return Yy.sketch(r)
  }, Zy = function(t, n, e, o) {
      return {
          dom: tx(e),
          components: t.toArray().concat([n]),
          fieldBehaviours: ic(o)
      }
  }, tx = function(t) {
      return {
          tag: "div",
          classes: ["tox-form__group"].concat(t)
      }
  }, nx = function(t, n) {
      return Yy.parts.label({
          dom: {
              tag: "label",
              classes: ["tox-label"],
              innerHtml: n.translate(t)
          }
      })
  }, ex = Kr("form-component-change"), ox = Kr("form-close"), rx = Kr("form-cancel"), ix = Kr("form-action"), ux = Kr("form-submit"), ax = Kr("form-block"), cx = Kr("form-unblock"), sx = Kr("form-tabchange"), lx = Kr("form-resize"), fx = function(u, a) {
      var t, n, e, o = u.label.map(function(t) {
          return nx(t, a)
      }), r = function(o) {
          return function(n, e) {
              Ju(e.event.target, "[data-collection-item-value]").each(function(t) {
                  o(n, e, t, Nr(t, "data-collection-item-value"))
              })
          }
      }, i = r(function(t, n, e, o) {
          n.stop(),
          a.isDisabled() || qo(t, ix, {
              name: u.name,
              value: o
          })
      }), c = [er(so(), r(function(t, n, e) {
          mc(e)
      })), er(vo(), i), er(Eo(), i), er(lo(), r(function(t, n, e) {
          Ku(t.element, "." + gh).each(function(t) {
              Bi(t, gh)
          }),
          Ei(e, gh)
      })), er(fo(), r(function(t) {
          Ku(t.element, "." + gh).each(function(t) {
              Bi(t, gh)
          })
      })), dr(r(function(t, n, e, o) {
          qo(t, ix, {
              name: u.name,
              value: o
          })
      }))], s = function(t, n) {
          return V(ms(t.element, ".tox-collection__item"), n)
      }, l = Yy.parts.field({
          dom: {
              tag: "div",
              classes: ["tox-collection"].concat(1 !== u.columns ? ["tox-collection--grid"] : ["tox-collection--list"])
          },
          components: [],
          factory: {
              sketch: ct
          },
          behaviours: ic([gv.config({
              disabled: a.isDisabled,
              onDisabled: function(t) {
                  s(t, function(t) {
                      Ei(t, "tox-collection__item--state-disabled"),
                      zr(t, "aria-disabled", !0)
                  })
              },
              onEnabled: function(t) {
                  s(t, function(t) {
                      Bi(t, "tox-collection__item--state-disabled"),
                      Ur(t, "aria-disabled")
                  })
              }
          }), Lv(), fg.config({}), Nl.config({
              store: {
                  mode: "memory",
                  initialValue: []
              },
              onSetValue: function(o, t) {
                  var n, e, r, i;
                  n = o,
                  e = V(t, function(t) {
                      var n = tv.translate(t.text)
                        , e = 1 === u.columns ? '<div class="tox-collection__item-label">' + n + "</div>" : ""
                        , o = '<div class="tox-collection__item-icon">' + t.icon + "</div>"
                        , r = {
                          _: " ",
                          " - ": " ",
                          "-": " "
                      }
                        , i = n.replace(/\_| \- |\-/g, function(t) {
                          return r[t]
                      });
                      return '<div class="tox-collection__item' + (a.isDisabled() ? " tox-collection__item--state-disabled" : "") + '" tabindex="-1" data-collection-item-value="' + $y.encodeAllRaw(t.value) + '" title="' + i + '" aria-label="' + i + '">' + o + e + "</div>"
                  }),
                  r = "auto" !== u.columns && 1 < u.columns ? R(e, u.columns) : [e],
                  i = V(r, function(t) {
                      return '<div class="tox-collection__group">' + t.join("") + "</div>"
                  }),
                  Pr(n.element, i.join("")),
                  "auto" === u.columns && jh(o, 5, "tox-collection__item").each(function(t) {
                      var n = t.numRows
                        , e = t.numColumns;
                      ug.setGridSize(o, n, e)
                  }),
                  Yo(o, lx)
              }
          }), Jy.config({}), ug.config((n = u.columns,
          e = "normal",
          1 === n ? {
              mode: "menu",
              moveOnTab: !1,
              selector: ".tox-collection__item"
          } : "auto" === n ? {
              mode: "flatgrid",
              selector: ".tox-collection__item",
              initSize: {
                  numColumns: 1,
                  numRows: 1
              }
          } : {
              mode: "matrix",
              selectors: {
                  row: "color" === e ? ".tox-swatches__row" : ".tox-collection__group",
                  cell: "color" === e ? "." + sh : "." + ch
              }
          })), dg("collection-events", c)]),
          eventOrder: ((t = {})[_o()] = ["disabling", "alloy.base.behaviour", "collection-events"],
          t)
      });
      return Qy(o, l, ["tox-form__group--collection"], [])
  }, dx = at([Kn("data"), ne("inputAttributes", {}), ne("inputStyles", {}), ne("tag", "input"), ne("inputClasses", []), ga("onSetValue"), ne("styles", {}), ne("eventOrder", {}), Ll("inputBehaviours", [Nl, vg]), ne("selectOnFocus", !0)]), mx = function(t) {
      return ic([vg.config({
          onFocus: t.selectOnFocus ? function(t) {
              var n = t.element
                , e = ou(n);
              n.dom.setSelectionRange(0, e.length)
          }
          : $
      })])
  }, gx = function(t) {
      return {
          tag: t.tag,
          attributes: ut({
              type: "text"
          }, t.inputAttributes),
          styles: t.inputStyles,
          classes: t.inputClasses
      }
  }, px = Yf({
      name: "Input",
      configFields: dx(),
      factory: function(t, n) {
          return {
              uid: t.uid,
              dom: gx(t),
              components: [],
              behaviours: ut(ut({}, mx(e = t)), Ul(e.inputBehaviours, [Nl.config({
                  store: ut(ut({
                      mode: "manual"
                  }, e.data.map(function(t) {
                      return {
                          initialValue: t
                      }
                  }).getOr({})), {
                      getValue: function(t) {
                          return ou(t.element)
                      },
                      setValue: function(t, n) {
                          ou(t.element) !== n && ru(t.element, n)
                      }
                  }),
                  onSetValue: e.onSetValue
              })])),
              eventOrder: t.eventOrder
          };
          var e
      }
  }), hx = {}, vx = {
      exports: hx
  };
  zy = undefined,
  Ny = hx,
  Ly = vx,
  jy = undefined,
  function(t) {
      "object" == typeof Ny && void 0 !== Ly ? Ly.exports = t() : "function" == typeof zy && zy.amd ? zy([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = t()
  }(function() {
      return function l(i, u, a) {
          function c(n, t) {
              if (!u[n]) {
                  if (!i[n]) {
                      var e = "function" == typeof jy && jy;
                      if (!t && e)
                          return e(n, !0);
                      if (s)
                          return s(n, !0);
                      var o = new Error("Cannot find module '" + n + "'");
                      throw o.code = "MODULE_NOT_FOUND",
                      o
                  }
                  var r = u[n] = {
                      exports: {}
                  };
                  i[n][0].call(r.exports, function(t) {
                      return c(i[n][1][t] || t)
                  }, r, r.exports, l, i, u, a)
              }
              return u[n].exports
          }
          for (var s = "function" == typeof jy && jy, t = 0; t < a.length; t++)
              c(a[t]);
          return c
      }({
          1: [function(t, n, e) {
              var o, r, i = n.exports = {};
              function u() {
                  throw new Error("setTimeout has not been defined")
              }
              function a() {
                  throw new Error("clearTimeout has not been defined")
              }
              function c(t) {
                  if (o === setTimeout)
                      return setTimeout(t, 0);
                  if ((o === u || !o) && setTimeout)
                      return o = setTimeout,
                      setTimeout(t, 0);
                  try {
                      return o(t, 0)
                  } catch (n) {
                      try {
                          return o.call(null, t, 0)
                      } catch (n) {
                          return o.call(this, t, 0)
                      }
                  }
              }
              !function() {
                  try {
                      o = "function" == typeof setTimeout ? setTimeout : u
                  } catch (t) {
                      o = u
                  }
                  try {
                      r = "function" == typeof clearTimeout ? clearTimeout : a
                  } catch (t) {
                      r = a
                  }
              }();
              var s, l = [], f = !1, d = -1;
              function m() {
                  f && s && (f = !1,
                  s.length ? l = s.concat(l) : d = -1,
                  l.length && g())
              }
              function g() {
                  if (!f) {
                      var t = c(m);
                      f = !0;
                      for (var n = l.length; n; ) {
                          for (s = l,
                          l = []; ++d < n; )
                              s && s[d].run();
                          d = -1,
                          n = l.length
                      }
                      s = null,
                      f = !1,
                      function(t) {
                          if (r === clearTimeout)
                              return clearTimeout(t);
                          if ((r === a || !r) && clearTimeout)
                              return r = clearTimeout,
                              clearTimeout(t);
                          try {
                              r(t)
                          } catch (n) {
                              try {
                                  return r.call(null, t)
                              } catch (n) {
                                  return r.call(this, t)
                              }
                          }
                      }(t)
                  }
              }
              function p(t, n) {
                  this.fun = t,
                  this.array = n
              }
              function h() {}
              i.nextTick = function(t) {
                  var n = new Array(arguments.length - 1);
                  if (1 < arguments.length)
                      for (var e = 1; e < arguments.length; e++)
                          n[e - 1] = arguments[e];
                  l.push(new p(t,n)),
                  1 !== l.length || f || c(g)
              }
              ,
              p.prototype.run = function() {
                  this.fun.apply(null, this.array)
              }
              ,
              i.title = "browser",
              i.browser = !0,
              i.env = {},
              i.argv = [],
              i.version = "",
              i.versions = {},
              i.on = h,
              i.addListener = h,
              i.once = h,
              i.off = h,
              i.removeListener = h,
              i.removeAllListeners = h,
              i.emit = h,
              i.prependListener = h,
              i.prependOnceListener = h,
              i.listeners = function(t) {
                  return []
              }
              ,
              i.binding = function(t) {
                  throw new Error("process.binding is not supported")
              }
              ,
              i.cwd = function() {
                  return "/"
              }
              ,
              i.chdir = function(t) {
                  throw new Error("process.chdir is not supported")
              }
              ,
              i.umask = function() {
                  return 0
              }
          }
          , {}],
          2: [function(t, f, n) {
              (function(n) {
                  function o() {}
                  function u(t) {
                      if ("object" != typeof this)
                          throw new TypeError("Promises must be constructed via new");
                      if ("function" != typeof t)
                          throw new TypeError("not a function");
                      this._state = 0,
                      this._handled = !1,
                      this._value = undefined,
                      this._deferreds = [],
                      l(t, this)
                  }
                  function r(o, r) {
                      for (; 3 === o._state; )
                          o = o._value;
                      0 !== o._state ? (o._handled = !0,
                      u._immediateFn(function() {
                          var t, n = 1 === o._state ? r.onFulfilled : r.onRejected;
                          if (null !== n) {
                              try {
                                  t = n(o._value)
                              } catch (e) {
                                  return void a(r.promise, e)
                              }
                              i(r.promise, t)
                          } else
                              (1 === o._state ? i : a)(r.promise, o._value)
                      })) : o._deferreds.push(r)
                  }
                  function i(t, n) {
                      try {
                          if (n === t)
                              throw new TypeError("A promise cannot be resolved with itself.");
                          if (n && ("object" == typeof n || "function" == typeof n)) {
                              var e = n.then;
                              if (n instanceof u)
                                  return t._state = 3,
                                  t._value = n,
                                  void c(t);
                              if ("function" == typeof e)
                                  return void l((o = e,
                                  r = n,
                                  function() {
                                      o.apply(r, arguments)
                                  }
                                  ), t)
                          }
                          t._state = 1,
                          t._value = n,
                          c(t)
                      } catch (i) {
                          a(t, i)
                      }
                      var o, r
                  }
                  function a(t, n) {
                      t._state = 2,
                      t._value = n,
                      c(t)
                  }
                  function c(t) {
                      2 === t._state && 0 === t._deferreds.length && u._immediateFn(function() {
                          t._handled || u._unhandledRejectionFn(t._value)
                      });
                      for (var n = 0, e = t._deferreds.length; n < e; n++)
                          r(t, t._deferreds[n]);
                      t._deferreds = null
                  }
                  function s(t, n, e) {
                      this.onFulfilled = "function" == typeof t ? t : null,
                      this.onRejected = "function" == typeof n ? n : null,
                      this.promise = e
                  }
                  function l(t, n) {
                      var e = !1;
                      try {
                          t(function(t) {
                              e || (e = !0,
                              i(n, t))
                          }, function(t) {
                              e || (e = !0,
                              a(n, t))
                          })
                      } catch (o) {
                          if (e)
                              return;
                          e = !0,
                          a(n, o)
                      }
                  }
                  var t, e;
                  t = this,
                  e = setTimeout,
                  u.prototype["catch"] = function(t) {
                      return this.then(null, t)
                  }
                  ,
                  u.prototype.then = function(t, n) {
                      var e = new this.constructor(o);
                      return r(this, new s(t,n,e)),
                      e
                  }
                  ,
                  u.all = function(t) {
                      var c = Array.prototype.slice.call(t);
                      return new u(function(r, i) {
                          if (0 === c.length)
                              return r([]);
                          var u = c.length;
                          for (var t = 0; t < c.length; t++)
                              !function a(n, t) {
                                  try {
                                      if (t && ("object" == typeof t || "function" == typeof t)) {
                                          var e = t.then;
                                          if ("function" == typeof e)
                                              return void e.call(t, function(t) {
                                                  a(n, t)
                                              }, i)
                                      }
                                      c[n] = t,
                                      0 == --u && r(c)
                                  } catch (o) {
                                      i(o)
                                  }
                              }(t, c[t])
                      }
                      )
                  }
                  ,
                  u.resolve = function(n) {
                      return n && "object" == typeof n && n.constructor === u ? n : new u(function(t) {
                          t(n)
                      }
                      )
                  }
                  ,
                  u.reject = function(e) {
                      return new u(function(t, n) {
                          n(e)
                      }
                      )
                  }
                  ,
                  u.race = function(r) {
                      return new u(function(t, n) {
                          for (var e = 0, o = r.length; e < o; e++)
                              r[e].then(t, n)
                      }
                      )
                  }
                  ,
                  u._immediateFn = "function" == typeof n ? function(t) {
                      n(t)
                  }
                  : function(t) {
                      e(t, 0)
                  }
                  ,
                  u._unhandledRejectionFn = function(t) {
                      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                  }
                  ,
                  u._setImmediateFn = function(t) {
                      u._immediateFn = t
                  }
                  ,
                  u._setUnhandledRejectionFn = function(t) {
                      u._unhandledRejectionFn = t
                  }
                  ,
                  void 0 !== f && f.exports ? f.exports = u : t.Promise || (t.Promise = u)
              }
              ).call(this, t("timers").setImmediate)
          }
          , {
              timers: 3
          }],
          3: [function(c, t, s) {
              (function(t, n) {
                  var o = c("process/browser.js").nextTick
                    , e = Function.prototype.apply
                    , r = Array.prototype.slice
                    , i = {}
                    , u = 0;
                  function a(t, n) {
                      this._id = t,
                      this._clearFn = n
                  }
                  s.setTimeout = function() {
                      return new a(e.call(setTimeout, window, arguments),clearTimeout)
                  }
                  ,
                  s.setInterval = function() {
                      return new a(e.call(setInterval, window, arguments),clearInterval)
                  }
                  ,
                  s.clearTimeout = s.clearInterval = function(t) {
                      t.close()
                  }
                  ,
                  a.prototype.unref = a.prototype.ref = function() {}
                  ,
                  a.prototype.close = function() {
                      this._clearFn.call(window, this._id)
                  }
                  ,
                  s.enroll = function(t, n) {
                      clearTimeout(t._idleTimeoutId),
                      t._idleTimeout = n
                  }
                  ,
                  s.unenroll = function(t) {
                      clearTimeout(t._idleTimeoutId),
                      t._idleTimeout = -1
                  }
                  ,
                  s._unrefActive = s.active = function(t) {
                      clearTimeout(t._idleTimeoutId);
                      var n = t._idleTimeout;
                      0 <= n && (t._idleTimeoutId = setTimeout(function() {
                          t._onTimeout && t._onTimeout()
                      }, n))
                  }
                  ,
                  s.setImmediate = "function" == typeof t ? t : function(t) {
                      var n = u++
                        , e = !(arguments.length < 2) && r.call(arguments, 1);
                      return i[n] = !0,
                      o(function() {
                          i[n] && (e ? t.apply(null, e) : t.call(null),
                          s.clearImmediate(n))
                      }),
                      n
                  }
                  ,
                  s.clearImmediate = "function" == typeof n ? n : function(t) {
                      delete i[t]
                  }
              }
              ).call(this, c("timers").setImmediate, c("timers").clearImmediate)
          }
          , {
              "process/browser.js": 1,
              timers: 3
          }],
          4: [function(t, n, e) {
              var o = t("promise-polyfill")
                , r = "undefined" != typeof window ? window : Function("return this;")();
              n.exports = {
                  boltExport: r.Promise || o
              }
          }
          , {
              "promise-polyfill": 2
          }]
      }, {}, [4])(4)
  });
  var bx, yx, xx = vx.exports.boltExport, wx = function(t) {
      var e = st.none()
        , n = []
        , o = function(t) {
          r() ? u(t) : n.push(t)
      }
        , r = function() {
          return e.isSome()
      }
        , i = function(t) {
          ft(t, u)
      }
        , u = function(n) {
          e.each(function(t) {
              setTimeout(function() {
                  n(t)
              }, 0)
          })
      };
      return t(function(t) {
          r() || (e = st.some(t),
          i(n),
          n = [])
      }),
      {
          get: o,
          map: function(e) {
              return wx(function(n) {
                  o(function(t) {
                      n(e(t))
                  })
              })
          },
          isReady: r
      }
  }, Sx = {
      nu: wx,
      pure: function(n) {
          return wx(function(t) {
              t(n)
          })
      }
  }, kx = function(t) {
      setTimeout(function() {
          throw t
      }, 0)
  }, Cx = function(e) {
      var t = function(t) {
          e().then(t, kx)
      };
      return {
          map: function(t) {
              return Cx(function() {
                  return e().then(t)
              })
          },
          bind: function(n) {
              return Cx(function() {
                  return e().then(function(t) {
                      return n(t).toPromise()
                  })
              })
          },
          anonBind: function(t) {
              return Cx(function() {
                  return e().then(function() {
                      return t.toPromise()
                  })
              })
          },
          toLazy: function() {
              return Sx.nu(t)
          },
          toCached: function() {
              var t = null;
              return Cx(function() {
                  return null === t && (t = e()),
                  t
              })
          },
          toPromise: e,
          get: t
      }
  }, Ox = function(t) {
      return Cx(function() {
          return new xx(t)
      })
  }, _x = function(t) {
      return Cx(function() {
          return xx.resolve(t)
      })
  }, Tx = ["input", "textarea"], Ex = function(t) {
      var n = mr(t);
      return M(Tx, n)
  }, Dx = function(t, n) {
      var e = n.getRoot(t).getOr(t.element);
      Bi(e, n.invalidClass),
      n.notify.each(function(n) {
          Ex(t.element) && zr(t.element, "aria-invalid", !1),
          n.getContainer(t).each(function(t) {
              Pr(t, n.validHtml)
          }),
          n.onValid(t)
      })
  }, Bx = function(n, t, e, o) {
      var r = t.getRoot(n).getOr(n.element);
      Ei(r, t.invalidClass),
      t.notify.each(function(t) {
          Ex(n.element) && zr(n.element, "aria-invalid", !0),
          t.getContainer(n).each(function(t) {
              Pr(t, o)
          }),
          t.onInvalid(n, o)
      })
  }, Ax = function(n, t, e) {
      return t.validator.fold(function() {
          return _x(mt.value(!0))
      }, function(t) {
          return t.validate(n)
      })
  }, Mx = function(n, e, t) {
      return e.notify.each(function(t) {
          t.onValidate(n)
      }),
      Ax(n, e).map(function(t) {
          return n.getSystem().isConnected() ? t.fold(function(t) {
              return Bx(n, e, 0, t),
              mt.error(t)
          }, function(t) {
              return Dx(n, e),
              mt.value(t)
          }) : mt.error("No longer in system")
      })
  }, Fx = /* */
  Object.freeze({
      __proto__: null,
      markValid: Dx,
      markInvalid: Bx,
      query: Ax,
      run: Mx,
      isInvalid: function(t, n) {
          var e = n.getRoot(t).getOr(t.element);
          return Ai(e, n.invalidClass)
      }
  }), Ix = /* */
  Object.freeze({
      __proto__: null,
      events: function(n, t) {
          return n.validator.map(function(t) {
              return Zo([er(t.onEvent, function(t) {
                  Mx(t, n).get(ct)
              })].concat(t.validateOnLoad ? [sr(function(t) {
                  Mx(t, n).get($)
              })] : []))
          }).getOr({})
      }
  }), Rx = [Ln("invalidClass"), ne("getRoot", st.none), te("notify", [ne("aria", "alert"), ne("getContainer", st.none), ne("validHtml", ""), ga("onValid"), ga("onInvalid"), ga("onValidate")]), te("validator", [Ln("validate"), ne("onEvent", "input"), ne("validateOnLoad", !0)])], Vx = ac({
      fields: Rx,
      name: "invalidating",
      active: Ix,
      apis: Fx,
      extra: {
          validation: function(e) {
              return function(t) {
                  var n = Nl.getValue(t);
                  return _x(e(n))
              }
          }
      }
  }), Px = /* */
  Object.freeze({
      __proto__: null,
      getCoupled: function(t, n, e, o) {
          return e.getOrCreate(t, n, o)
      }
  }), Hx = [jn("others", On(mt.value, Mn()))], zx = ac({
      fields: Hx,
      name: "coupling",
      apis: Px,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function() {
              var i = {}
                , t = at({});
              return di({
                  readState: t,
                  getOrCreate: function(e, o, r) {
                      var t = Ct(o.others);
                      if (t)
                          return Ft(i, r).getOrThunk(function() {
                              var t = Ft(o.others, r).getOrDie("No information found for coupled component: " + r)(e)
                                , n = e.getSystem().build(t);
                              return i[r] = n
                          });
                      throw new Error("Cannot find coupled component: " + r + ". Known coupled components: " + JSON.stringify(t, null, 2))
                  }
              })
          }
      })
  }), Nx = at("sink"), Lx = at(yf({
      name: Nx(),
      overrides: at({
          dom: {
              tag: "div"
          },
          behaviours: ic([Qs.config({
              useFixed: b
          })]),
          events: Zo([ar(mo()), ar(io()), ar(vo())])
      })
  }));
  (yx = bx = bx || {})[yx.HighlightFirst = 0] = "HighlightFirst",
  yx[yx.HighlightNone = 1] = "HighlightNone";
  var jx = function(t, n) {
      var e = t.getHotspot(n).getOr(n)
        , o = t.getAnchorOverrides();
      return t.layouts.fold(function() {
          return {
              anchor: "hotspot",
              hotspot: e,
              overrides: o
          }
      }, function(t) {
          return {
              anchor: "hotspot",
              hotspot: e,
              overrides: o,
              layouts: t
          }
      })
  }
    , Ux = function(t, n, e, o, r, i, u) {
      var a, c, s, l, f, d, m, g, p, h, v = jx(t, e);
      return (c = v,
      l = o,
      f = r,
      d = u,
      m = n,
      g = s = e,
      p = (0,
      (a = t).fetch)(g).map(m),
      h = Yx(s, a),
      p.map(function(t) {
          return t.bind(function(t) {
              return st.from(Zg.sketch(ut(ut({}, f.menu()), {
                  uid: ei(""),
                  data: t,
                  highlightImmediately: d === bx.HighlightFirst,
                  onOpenMenu: function(t, n) {
                      var e = h().getOrDie();
                      Qs.position(e, c, n),
                      xl.decloak(l)
                  },
                  onOpenSubmenu: function(t, n, e) {
                      var o = h().getOrDie();
                      Qs.position(o, {
                          anchor: "submenu",
                          item: n
                      }, e),
                      xl.decloak(l)
                  },
                  onRepositionMenu: function(t, n, e) {
                      var o = h().getOrDie();
                      Qs.position(o, c, n),
                      ft(e, function(t) {
                          Qs.position(o, {
                              anchor: "submenu",
                              item: t.triggeringItem
                          }, t.triggeredMenu)
                      })
                  },
                  onEscape: function() {
                      return vg.focus(s),
                      xl.close(l),
                      st.some(!0)
                  }
              })))
          })
      })).map(function(t) {
          return t.fold(function() {
              xl.isOpen(o) && xl.close(o)
          }, function(t) {
              xl.cloak(o),
              xl.open(o, t),
              i(o)
          }),
          o
      })
  }
    , Wx = function(t, n, e, o, r, i, u) {
      return xl.close(o),
      _x(o)
  }
    , Gx = function(t, n, e, o, r, i) {
      var u = zx.getCoupled(e, "sandbox");
      return (xl.isOpen(u) ? Wx : Ux)(t, n, e, u, o, r, i)
  }
    , Xx = function(t, n, e) {
      var o, r, i = td.getCurrent(n).getOr(n), u = _u(t.element);
      e ? qi(i.element, "min-width", u + "px") : (o = i.element,
      r = u,
      Ou.set(o, r))
  }
    , Yx = function(n, t) {
      return n.getSystem().getByUid(t.uid + "-" + Nx()).map(function(t) {
          return function() {
              return mt.value(t)
          }
      }).getOrThunk(function() {
          return t.lazySink.fold(function() {
              return function() {
                  return mt.error(new Error("No internal sink is specified, nor could an external sink be found"))
              }
          }, function(t) {
              return function() {
                  return t(n)
              }
          })
      })
  }
    , qx = function(t) {
      xl.getState(t).each(function(t) {
          Zg.repositionMenus(t)
      })
  }
    , Kx = function(o, r, i) {
      var u = $u()
        , t = Yx(r, o);
      return {
          dom: {
              tag: "div",
              classes: o.sandboxClasses,
              attributes: {
                  id: u.id,
                  role: "listbox"
              }
          },
          behaviours: Gl(o.sandboxBehaviours, [Nl.config({
              store: {
                  mode: "memory",
                  initialValue: r
              }
          }), xl.config({
              onOpen: function(t, n) {
                  var e = jx(o, r);
                  u.link(r.element),
                  o.matchWidth && Xx(e.hotspot, n, o.useMinWidth),
                  o.onOpen(e, t, n),
                  i !== undefined && i.onOpen !== undefined && i.onOpen(t, n)
              },
              onClose: function(t, n) {
                  u.unlink(r.element),
                  i !== undefined && i.onClose !== undefined && i.onClose(t, n)
              },
              isPartOf: function(t, n, e) {
                  return Zu(n, e) || Zu(r, e)
              },
              getAttachPoint: function() {
                  return t().getOrDie()
              }
          }), td.config({
              find: function(t) {
                  return xl.getState(t).bind(function(t) {
                      return td.getCurrent(t)
                  })
              }
          }), fc.config({
              channels: ut(ut({}, Ol({
                  isExtraPart: c
              })), Tl({
                  doReposition: qx
              }))
          })])
      }
  }
    , Jx = function(t) {
      var n = zx.getCoupled(t, "sandbox");
      qx(n)
  }
    , $x = function() {
      return [ne("sandboxClasses", []), Wl("sandboxBehaviours", [td, fc, xl, Nl])]
  }
    , Qx = at([Ln("dom"), Ln("fetch"), ga("onOpen"), pa("onExecute"), ne("getHotspot", st.some), ne("getAnchorOverrides", at({})), Wc(), Ll("dropdownBehaviours", [Dg, zx, ug, vg]), Ln("toggleClass"), ne("eventOrder", {}), Kn("lazySink"), ne("matchWidth", !1), ne("useMinWidth", !1), Kn("role")].concat($x()))
    , Zx = at([bf({
      schema: [fa()],
      name: "menu",
      defaults: function(t) {
          return {
              onExecute: t.onExecute
          }
      }
  }), Lx()])
    , tw = qf({
      name: "Dropdown",
      configFields: Qx(),
      partFields: Zx(),
      factory: function(n, t, e, o) {
          var r, i, u = function(t) {
              xl.getState(t).each(function(t) {
                  Zg.highlightPrimary(t)
              })
          }, a = {
              expand: function(t) {
                  Dg.isOn(t) || Gx(n, function(t) {
                      return t
                  }, t, o, $, bx.HighlightNone).get($)
              },
              open: function(t) {
                  Dg.isOn(t) || Gx(n, function(t) {
                      return t
                  }, t, o, $, bx.HighlightFirst).get($)
              },
              isOpen: Dg.isOn,
              close: function(t) {
                  Dg.isOn(t) && Gx(n, function(t) {
                      return t
                  }, t, o, $, bx.HighlightFirst).get($)
              },
              repositionMenus: function(t) {
                  Dg.isOn(t) && Jx(t)
              }
          }, c = function(t, n) {
              return Ko(t),
              st.some(!0)
          };
          return {
              uid: n.uid,
              dom: n.dom,
              components: t,
              behaviours: Ul(n.dropdownBehaviours, [Dg.config({
                  toggleClass: n.toggleClass,
                  aria: {
                      mode: "expanded"
                  }
              }), zx.config({
                  others: {
                      sandbox: function(t) {
                          return Kx(n, t, {
                              onOpen: function() {
                                  Dg.on(t)
                              },
                              onClose: function() {
                                  Dg.off(t)
                              }
                          })
                      }
                  }
              }), ug.config({
                  mode: "special",
                  onSpace: c,
                  onEnter: c,
                  onDown: function(t, n) {
                      var e;
                      return tw.isOpen(t) ? (e = zx.getCoupled(t, "sandbox"),
                      u(e)) : tw.open(t),
                      st.some(!0)
                  },
                  onEscape: function(t, n) {
                      return tw.isOpen(t) ? (tw.close(t),
                      st.some(!0)) : st.none()
                  }
              }), vg.config({})]),
              events: Ag(st.some(function(t) {
                  Gx(n, function(t) {
                      return t
                  }, t, o, u, bx.HighlightFirst).get($)
              })),
              eventOrder: ut(ut({}, n.eventOrder), ((r = {})[_o()] = ["disabling", "toggling", "alloy.base.behaviour"],
              r)),
              apis: a,
              domModification: {
                  attributes: ut(ut({
                      "aria-haspopup": "true"
                  }, n.role.fold(function() {
                      return {}
                  }, function(t) {
                      return {
                          role: t
                      }
                  })), "button" === n.dom.tag ? {
                      type: (i = "type",
                      Ft(n.dom, "attributes").bind(function(t) {
                          return Ft(t, i)
                      }).getOr("button"))
                  } : {})
              }
          }
      },
      apis: {
          open: function(t, n) {
              return t.open(n)
          },
          expand: function(t, n) {
              return t.expand(n)
          },
          close: function(t, n) {
              return t.close(n)
          },
          isOpen: function(t, n) {
              return t.isOpen(n)
          },
          repositionMenus: function(t, n) {
              return t.repositionMenus(n)
          }
      }
  })
    , nw = ac({
      fields: [],
      name: "unselecting",
      active: /* */
      Object.freeze({
          __proto__: null,
          events: function() {
              return Zo([tr(yo(), b)])
          },
          exhibit: function() {
              return gi({
                  styles: {
                      "-webkit-user-select": "none",
                      "user-select": "none",
                      "-ms-user-select": "none",
                      "-moz-user-select": "-moz-none"
                  },
                  attributes: {
                      unselectable: "on"
                  }
              })
          }
      })
  })
    , ew = Kr("color-input-change")
    , ow = Kr("color-swatch-change")
    , rw = Kr("color-picker-cancel")
    , iw = function(e, n, o) {
      var r, i, t = Yy.parts.field({
          factory: px,
          inputClasses: ["tox-textfield"],
          onSetValue: function(t) {
              return Vx.run(t).get(function() {})
          },
          inputBehaviours: ic([gv.config({
              disabled: n.providers.isDisabled
          }), Lv(), Jy.config({}), Vx.config({
              invalidClass: "tox-textbox-field-invalid",
              getRoot: function(t) {
                  return kr(t.element)
              },
              notify: {
                  onValid: function(t) {
                      var n = Nl.getValue(t);
                      qo(t, ew, {
                          color: n
                      })
                  }
              },
              validator: {
                  validateOnLoad: !1,
                  validate: function(t) {
                      var n = Nl.getValue(t);
                      if (0 === n.length)
                          return _x(mt.value(!0));
                      var e = me.fromTag("span");
                      qi(e, "background-color", n);
                      var o = Zi(e, "background-color").fold(function() {
                          return mt.error("blah")
                      }, function(t) {
                          return mt.value(n)
                      });
                      return _x(o)
                  }
              }
          })]),
          selectOnFocus: !1
      }), u = e.label.map(function(t) {
          return nx(t, n.providers)
      }), a = function(t, n) {
          qo(t, ow, {
              value: n
          })
      }, c = gp((r = {
          dom: {
              tag: "span",
              attributes: {
                  "aria-label": n.providers.translate("Color swatch")
              }
          },
          layouts: {
              onRtl: function() {
                  return [za, Ha, Ua]
              },
              onLtr: function() {
                  return [Ha, za, Ua]
              }
          },
          components: [],
          fetch: Gb(o.getColors(), o.hasCustomColors()),
          columns: o.getColorCols(),
          presets: "color",
          onItemAction: function(t, e) {
              c.getOpt(t).each(function(n) {
                  "custom" === e ? o.colorPicker(function(t) {
                      t.fold(function() {
                          return Yo(n, rw)
                      }, function(t) {
                          a(n, t),
                          Nb(t)
                      })
                  }, "#ffffff") : a(n, "remove" === e ? "" : e)
              })
          }
      },
      i = n,
      tw.sketch({
          dom: r.dom,
          components: r.components,
          toggleClass: "mce-active",
          dropdownBehaviours: ic([Uv(i.providers.isDisabled), Lv(), nw.config({}), Jy.config({})]),
          layouts: r.layouts,
          sandboxClasses: ["tox-dialog__popups"],
          lazySink: i.getSink,
          fetch: function(n) {
              return Ox(function(t) {
                  return r.fetch(t)
              }).map(function(t) {
                  return st.from(hy(zt(Jb(Kr("menu-value"), t, function(t) {
                      r.onItemAction(n, t)
                  }, r.columns, r.presets, uh.CLOSE_ON_EXECUTE, function() {
                      return !1
                  }, i.providers), {
                      movement: Qb(r.columns, r.presets)
                  })))
              })
          },
          parts: {
              menu: wh(0, 0, r.presets)
          }
      })));
      return Yy.sketch({
          dom: {
              tag: "div",
              classes: ["tox-form__group"]
          },
          components: u.toArray().concat([{
              dom: {
                  tag: "div",
                  classes: ["tox-color-input"]
              },
              components: [t, c.asSpec()]
          }]),
          fieldBehaviours: ic([dg("form-field-events", [er(ew, function(t, n) {
              c.getOpt(t).each(function(t) {
                  qi(t.element, "background-color", n.event.color)
              }),
              qo(t, ex, {
                  name: e.name
              })
          }), er(ow, function(n, e) {
              Yy.getField(n).each(function(t) {
                  Nl.setValue(t, e.event.value),
                  td.getCurrent(n).each(vg.focus)
              })
          }), er(rw, function(n, t) {
              Yy.getField(n).each(function(t) {
                  td.getCurrent(n).each(vg.focus)
              })
          })])])
      })
  }
    , uw = function(t, n, e) {
      return {
          hue: t,
          saturation: n,
          value: e
      }
  }
    , aw = Kr("rgb-hex-update")
    , cw = Kr("slider-update")
    , sw = Kr("palette-update")
    , lw = yf({
      schema: [Ln("dom")],
      name: "label"
  })
    , fw = function(n) {
      return yf({
          name: n + "-edge",
          overrides: function(t) {
              return t.model.manager.edgeActions[n].fold(function() {
                  return {}
              }, function(o) {
                  return {
                      events: Zo([or(no(), function(t, n, e) {
                          return o(t, e)
                      }, [t]), or(io(), function(t, n, e) {
                          return o(t, e)
                      }, [t]), or(uo(), function(t, n, e) {
                          e.mouseIsDown.get() && o(t, e)
                      }, [t])])
                  }
              })
          }
      })
  }
    , dw = fw("top-left")
    , mw = fw("top")
    , gw = fw("top-right")
    , pw = fw("right")
    , hw = fw("bottom-right")
    , vw = fw("bottom")
    , bw = fw("bottom-left")
    , yw = [lw, fw("left"), pw, mw, vw, dw, gw, bw, hw, vf({
      name: "thumb",
      defaults: at({
          dom: {
              styles: {
                  position: "absolute"
              }
          }
      }),
      overrides: function(t) {
          return {
              events: Zo([ir(no(), t, "spectrum"), ir(eo(), t, "spectrum"), ir(oo(), t, "spectrum"), ir(io(), t, "spectrum"), ir(uo(), t, "spectrum"), ir(co(), t, "spectrum")])
          }
      }
  }), vf({
      schema: [le("mouseIsDown", function() {
          return fe(!1)
      })],
      name: "spectrum",
      overrides: function(e) {
          var o = e.model.manager
            , r = function(n, t) {
              return o.getValueFromEvent(t).map(function(t) {
                  return o.setValueFrom(n, e, t)
              })
          };
          return {
              behaviours: ic([ug.config({
                  mode: "special",
                  onLeft: function(t) {
                      return o.onLeft(t, e)
                  },
                  onRight: function(t) {
                      return o.onRight(t, e)
                  },
                  onUp: function(t) {
                      return o.onUp(t, e)
                  },
                  onDown: function(t) {
                      return o.onDown(t, e)
                  }
              }), vg.config({})]),
              events: Zo([er(no(), r), er(eo(), r), er(io(), r), er(uo(), function(t, n) {
                  e.mouseIsDown.get() && r(t, n)
              })])
          }
      }
  })]
    , xw = at("slider.change.value")
    , ww = function(t) {
      var n = t.event.raw;
      return -1 === n.type.indexOf("touch") ? n.clientX !== undefined ? st.some(n).map(function(t) {
          return wu(t.clientX, t.clientY)
      }) : st.none() : n.touches !== undefined && 1 === n.touches.length ? st.some(n.touches[0]).map(function(t) {
          return wu(t.clientX, t.clientY)
      }) : st.none()
  }
    , Sw = function(t) {
      return t.model.minX
  }
    , kw = function(t) {
      return t.model.minY
  }
    , Cw = function(t) {
      return t.model.minX - 1
  }
    , Ow = function(t) {
      return t.model.minY - 1
  }
    , _w = function(t) {
      return t.model.maxX
  }
    , Tw = function(t) {
      return t.model.maxY
  }
    , Ew = function(t) {
      return t.model.maxX + 1
  }
    , Dw = function(t) {
      return t.model.maxY + 1
  }
    , Bw = function(t, n, e) {
      return n(t) - e(t)
  }
    , Aw = function(t) {
      return Bw(t, _w, Sw)
  }
    , Mw = function(t) {
      return Bw(t, Tw, kw)
  }
    , Fw = function(t) {
      return Aw(t) / 2
  }
    , Iw = function(t) {
      return Mw(t) / 2
  }
    , Rw = function(t) {
      return t.stepSize
  }
    , Vw = function(t) {
      return t.snapToGrid
  }
    , Pw = function(t) {
      return t.snapStart
  }
    , Hw = function(t) {
      return t.rounded
  }
    , zw = function(t, n) {
      return t[n + "-edge"] !== undefined
  }
    , Nw = function(t) {
      return zw(t, "left")
  }
    , Lw = function(t) {
      return zw(t, "right")
  }
    , jw = function(t) {
      return zw(t, "top")
  }
    , Uw = function(t) {
      return zw(t, "bottom")
  }
    , Ww = function(t) {
      return t.model.value.get()
  }
    , Gw = function(t) {
      return {
          x: t
      }
  }
    , Xw = function(t) {
      return {
          y: t
      }
  }
    , Yw = function(t, n) {
      return {
          x: t,
          y: n
      }
  }
    , qw = function(t, n) {
      qo(t, xw(), {
          value: n
      })
  }
    , Kw = function(t, n, e, o) {
      return t < n ? t : e < t ? e : t === n ? n - 1 : Math.max(n, t - o)
  }
    , Jw = function(t, n, e, o) {
      return e < t ? t : t < n ? n : t === e ? e + 1 : Math.min(e, t + o)
  }
    , $w = function(t, n, e) {
      return Math.max(n, Math.min(e, t))
  }
    , Qw = function(t) {
      var n = t.min
        , e = t.max
        , o = t.range
        , r = t.value
        , i = t.step
        , u = t.snap
        , a = t.snapStart
        , c = t.rounded
        , s = t.hasMinEdge
        , l = t.hasMaxEdge
        , f = t.minBound
        , d = t.maxBound
        , m = t.screenRange
        , g = s ? n - 1 : n
        , p = l ? e + 1 : e;
      if (r < f)
          return g;
      if (d < r)
          return p;
      var h, v, b, y, x, w, S, k = (x = r,
      w = f,
      S = d,
      Math.min(S, Math.max(x, w)) - w), C = $w(k / m * o + n, g, p);
      return u && n <= C && C <= e ? (h = C,
      v = n,
      b = e,
      y = i,
      a.fold(function() {
          var t = h - v
            , n = Math.round(t / y) * y;
          return $w(v + n, v - 1, b + 1)
      }, function(t) {
          var n = (h - t) % y
            , e = Math.round(n / y)
            , o = Math.floor((h - t) / y)
            , r = Math.floor((b - t) / y)
            , i = t + Math.min(r, o + e) * y;
          return Math.max(t, i)
      })) : c ? Math.round(C) : C
  }
    , Zw = function(t) {
      var n = t.min
        , e = t.max
        , o = t.range
        , r = t.value
        , i = t.hasMinEdge
        , u = t.hasMaxEdge
        , a = t.maxBound
        , c = t.maxOffset
        , s = t.centerMinEdge
        , l = t.centerMaxEdge;
      return r < n ? i ? 0 : s : e < r ? u ? a : l : (r - n) / o * c
  }
    , tS = "left"
    , nS = function(t) {
      return t.element.dom.getBoundingClientRect()
  }
    , eS = function(t, n) {
      return t[n]
  }
    , oS = function(t) {
      var n = nS(t);
      return eS(n, tS)
  }
    , rS = function(t) {
      var n = nS(t);
      return eS(n, "right")
  }
    , iS = function(t) {
      var n = nS(t);
      return eS(n, "top")
  }
    , uS = function(t) {
      var n = nS(t);
      return eS(n, "bottom")
  }
    , aS = function(t) {
      var n = nS(t);
      return eS(n, "width")
  }
    , cS = function(t) {
      var n = nS(t);
      return eS(n, "height")
  }
    , sS = function(t, n, e) {
      return (t + n) / 2 - e
  }
    , lS = function(t, n) {
      var e = nS(t)
        , o = nS(n)
        , r = eS(e, tS)
        , i = eS(e, "right")
        , u = eS(o, tS);
      return sS(r, i, u)
  }
    , fS = function(t, n) {
      var e = nS(t)
        , o = nS(n)
        , r = eS(e, "top")
        , i = eS(e, "bottom")
        , u = eS(o, "top");
      return sS(r, i, u)
  }
    , dS = function(t, n) {
      qo(t, xw(), {
          value: n
      })
  }
    , mS = function(t) {
      return {
          x: t
      }
  }
    , gS = function(t, n, e) {
      var o = {
          min: Sw(n),
          max: _w(n),
          range: Aw(n),
          value: e,
          step: Rw(n),
          snap: Vw(n),
          snapStart: Pw(n),
          rounded: Hw(n),
          hasMinEdge: Nw(n),
          hasMaxEdge: Lw(n),
          minBound: oS(t),
          maxBound: rS(t),
          screenRange: aS(t)
      };
      return Qw(o)
  }
    , pS = function(i) {
      return function(t, n) {
          return e = t,
          r = (0 < i ? Jw : Kw)(Ww(o = n).x, Sw(o), _w(o), Rw(o)),
          dS(e, mS(r)),
          st.some(r).map(function() {
              return !0
          });
          var e, o, r
      }
  }
    , hS = function(t, n, e, o, r, i) {
      var u, a, c, s, l, f, d, m, g, p = (a = i,
      c = e,
      s = o,
      l = r,
      f = aS(u = n),
      d = s.bind(function(t) {
          return st.some(lS(t, u))
      }).getOr(0),
      m = l.bind(function(t) {
          return st.some(lS(t, u))
      }).getOr(f),
      g = {
          min: Sw(a),
          max: _w(a),
          range: Aw(a),
          value: c,
          hasMinEdge: Nw(a),
          hasMaxEdge: Lw(a),
          minBound: oS(u),
          minOffset: 0,
          maxBound: rS(u),
          maxOffset: f,
          centerMinEdge: d,
          centerMaxEdge: m
      },
      Zw(g));
      return oS(n) - oS(t) + p
  }
    , vS = pS(-1)
    , bS = pS(1)
    , yS = st.none
    , xS = st.none
    , wS = {
      "top-left": st.none(),
      top: st.none(),
      "top-right": st.none(),
      right: st.some(function(t, n) {
          qw(t, Gw(Ew(n)))
      }),
      "bottom-right": st.none(),
      bottom: st.none(),
      "bottom-left": st.none(),
      left: st.some(function(t, n) {
          qw(t, Gw(Cw(n)))
      })
  }
    , SS = /* */
  Object.freeze({
      __proto__: null,
      setValueFrom: function(t, n, e) {
          var o = gS(t, n, e)
            , r = mS(o);
          return dS(t, r),
          o
      },
      setToMin: function(t, n) {
          var e = Sw(n);
          dS(t, mS(e))
      },
      setToMax: function(t, n) {
          var e = _w(n);
          dS(t, mS(e))
      },
      findValueOfOffset: gS,
      getValueFromEvent: function(t) {
          return ww(t).map(function(t) {
              return t.left
          })
      },
      findPositionOfValue: hS,
      setPositionFromValue: function(t, n, e, o) {
          var r = Ww(e)
            , i = hS(t, o.getSpectrum(t), r.x, o.getLeftEdge(t), o.getRightEdge(t), e)
            , u = _u(n.element) / 2;
          qi(n.element, "left", i - u + "px")
      },
      onLeft: vS,
      onRight: bS,
      onUp: yS,
      onDown: xS,
      edgeActions: wS
  })
    , kS = function(t, n) {
      qo(t, xw(), {
          value: n
      })
  }
    , CS = function(t) {
      return {
          y: t
      }
  }
    , OS = function(t, n, e) {
      var o = {
          min: kw(n),
          max: Tw(n),
          range: Mw(n),
          value: e,
          step: Rw(n),
          snap: Vw(n),
          snapStart: Pw(n),
          rounded: Hw(n),
          hasMinEdge: jw(n),
          hasMaxEdge: Uw(n),
          minBound: iS(t),
          maxBound: uS(t),
          screenRange: cS(t)
      };
      return Qw(o)
  }
    , _S = function(i) {
      return function(t, n) {
          return e = t,
          r = (0 < i ? Jw : Kw)(Ww(o = n).y, kw(o), Tw(o), Rw(o)),
          kS(e, CS(r)),
          st.some(r).map(function() {
              return !0
          });
          var e, o, r
      }
  }
    , TS = function(t, n, e, o, r, i) {
      var u, a, c, s, l, f, d, m, g, p = (a = i,
      c = e,
      s = o,
      l = r,
      f = cS(u = n),
      d = s.bind(function(t) {
          return st.some(fS(t, u))
      }).getOr(0),
      m = l.bind(function(t) {
          return st.some(fS(t, u))
      }).getOr(f),
      g = {
          min: kw(a),
          max: Tw(a),
          range: Mw(a),
          value: c,
          hasMinEdge: jw(a),
          hasMaxEdge: Uw(a),
          minBound: iS(u),
          minOffset: 0,
          maxBound: uS(u),
          maxOffset: f,
          centerMinEdge: d,
          centerMaxEdge: m
      },
      Zw(g));
      return iS(n) - iS(t) + p
  }
    , ES = st.none
    , DS = st.none
    , BS = _S(-1)
    , AS = _S(1)
    , MS = {
      "top-left": st.none(),
      top: st.some(function(t, n) {
          qw(t, Xw(Ow(n)))
      }),
      "top-right": st.none(),
      right: st.none(),
      "bottom-right": st.none(),
      bottom: st.some(function(t, n) {
          qw(t, Xw(Dw(n)))
      }),
      "bottom-left": st.none(),
      left: st.none()
  }
    , FS = /* */
  Object.freeze({
      __proto__: null,
      setValueFrom: function(t, n, e) {
          var o = OS(t, n, e)
            , r = CS(o);
          return kS(t, r),
          o
      },
      setToMin: function(t, n) {
          var e = kw(n);
          kS(t, CS(e))
      },
      setToMax: function(t, n) {
          var e = Tw(n);
          kS(t, CS(e))
      },
      findValueOfOffset: OS,
      getValueFromEvent: function(t) {
          return ww(t).map(function(t) {
              return t.top
          })
      },
      findPositionOfValue: TS,
      setPositionFromValue: function(t, n, e, o) {
          var r = Ww(e)
            , i = TS(t, o.getSpectrum(t), r.y, o.getTopEdge(t), o.getBottomEdge(t), e)
            , u = bu(n.element) / 2;
          qi(n.element, "top", i - u + "px")
      },
      onLeft: ES,
      onRight: DS,
      onUp: BS,
      onDown: AS,
      edgeActions: MS
  })
    , IS = function(t, n) {
      qo(t, xw(), {
          value: n
      })
  }
    , RS = function(t, n) {
      return {
          x: t,
          y: n
      }
  }
    , VS = function(c, s) {
      return function(t, n) {
          return o = t,
          r = n,
          i = 0 < c ? Jw : Kw,
          u = (e = s) ? Ww(r).x : i(Ww(r).x, Sw(r), _w(r), Rw(r)),
          a = e ? i(Ww(r).y, kw(r), Tw(r), Rw(r)) : Ww(r).y,
          IS(o, RS(u, a)),
          st.some(u).map(function() {
              return !0
          });
          var e, o, r, i, u, a
      }
  }
    , PS = ww
    , HS = VS(-1, !1)
    , zS = VS(1, !1)
    , NS = VS(-1, !0)
    , LS = VS(1, !0)
    , jS = {
      "top-left": st.some(function(t, n) {
          qw(t, Yw(Cw(n), Ow(n)))
      }),
      top: st.some(function(t, n) {
          qw(t, Yw(Fw(n), Ow(n)))
      }),
      "top-right": st.some(function(t, n) {
          qw(t, Yw(Ew(n), Ow(n)))
      }),
      right: st.some(function(t, n) {
          qw(t, Yw(Ew(n), Iw(n)))
      }),
      "bottom-right": st.some(function(t, n) {
          qw(t, Yw(Ew(n), Dw(n)))
      }),
      bottom: st.some(function(t, n) {
          qw(t, Yw(Fw(n), Dw(n)))
      }),
      "bottom-left": st.some(function(t, n) {
          qw(t, Yw(Cw(n), Dw(n)))
      }),
      left: st.some(function(t, n) {
          qw(t, Yw(Cw(n), Iw(n)))
      })
  }
    , US = /* */
  Object.freeze({
      __proto__: null,
      setValueFrom: function(t, n, e) {
          var o = gS(t, n, e.left)
            , r = OS(t, n, e.top)
            , i = RS(o, r);
          return IS(t, i),
          i
      },
      setToMin: function(t, n) {
          var e = Sw(n)
            , o = kw(n);
          IS(t, RS(e, o))
      },
      setToMax: function(t, n) {
          var e = _w(n)
            , o = Tw(n);
          IS(t, RS(e, o))
      },
      getValueFromEvent: PS,
      setPositionFromValue: function(t, n, e, o) {
          var r = Ww(e)
            , i = hS(t, o.getSpectrum(t), r.x, o.getLeftEdge(t), o.getRightEdge(t), e)
            , u = TS(t, o.getSpectrum(t), r.y, o.getTopEdge(t), o.getBottomEdge(t), e)
            , a = _u(n.element) / 2
            , c = bu(n.element) / 2;
          qi(n.element, "left", i - a + "px"),
          qi(n.element, "top", u - c + "px")
      },
      onLeft: HS,
      onRight: zS,
      onUp: NS,
      onDown: LS,
      edgeActions: jS
  })
    , WS = qf({
      name: "Slider",
      configFields: [ne("stepSize", 1), ne("onChange", $), ne("onChoose", $), ne("onInit", $), ne("onDragStart", $), ne("onDragEnd", $), ne("snapToGrid", !1), ne("rounded", !0), Kn("snapStart"), jn("model", An("mode", {
          x: [ne("minX", 0), ne("maxX", 100), le("value", function(t) {
              return fe(t.mode.minX)
          }), Ln("getInitialValue"), ba("manager", SS)],
          y: [ne("minY", 0), ne("maxY", 100), le("value", function(t) {
              return fe(t.mode.minY)
          }), Ln("getInitialValue"), ba("manager", FS)],
          xy: [ne("minX", 0), ne("maxX", 100), ne("minY", 0), ne("maxY", 100), le("value", function(t) {
              return fe({
                  x: t.mode.minX,
                  y: t.mode.minY
              })
          }), Ln("getInitialValue"), ba("manager", US)]
      })), Ll("sliderBehaviours", [ug, Nl]), le("mouseIsDown", function() {
          return fe(!1)
      })],
      partFields: yw,
      factory: function(i, t, n, e) {
          var o, u = function(t) {
              return Mf(t, i, "thumb")
          }, a = function(t) {
              return Mf(t, i, "spectrum")
          }, r = function(t) {
              return Af(t, i, "left-edge")
          }, c = function(t) {
              return Af(t, i, "right-edge")
          }, s = function(t) {
              return Af(t, i, "top-edge")
          }, l = function(t) {
              return Af(t, i, "bottom-edge")
          }, f = i.model, d = f.manager, m = function(t, n) {
              d.setPositionFromValue(t, n, i, {
                  getLeftEdge: r,
                  getRightEdge: c,
                  getTopEdge: s,
                  getBottomEdge: l,
                  getSpectrum: a
              })
          }, g = function(t, n) {
              f.value.set(n);
              var e = u(t);
              return m(t, e),
              i.onChange(t, e, n),
              st.some(!0)
          }, p = function(e) {
              var t = i.mouseIsDown.get();
              i.mouseIsDown.set(!1),
              t && Af(e, i, "thumb").each(function(t) {
                  var n = f.value.get();
                  i.onChoose(e, t, n)
              })
          }, h = function(t, n) {
              n.stop(),
              i.mouseIsDown.set(!0),
              i.onDragStart(t, u(t))
          }, v = function(t, n) {
              n.stop(),
              i.onDragEnd(t, u(t)),
              p(t)
          };
          return {
              uid: i.uid,
              dom: i.dom,
              components: t,
              behaviours: Ul(i.sliderBehaviours, [ug.config({
                  mode: "special",
                  focusIn: function(t) {
                      return Af(t, i, "spectrum").map(ug.focusIn).map(b)
                  }
              }), Nl.config({
                  store: {
                      mode: "manual",
                      getValue: function(t) {
                          return f.value.get()
                      }
                  }
              }), fc.config({
                  channels: ((o = {})[kl()] = {
                      onReceive: p
                  },
                  o)
              })]),
              events: Zo([er(xw(), function(t, n) {
                  g(t, n.event.value)
              }), sr(function(t, n) {
                  var e = f.getInitialValue();
                  f.value.set(e);
                  var o = u(t);
                  m(t, o);
                  var r = a(t);
                  i.onInit(t, o, r, f.value.get())
              }), er(no(), h), er(oo(), v), er(io(), h), er(co(), v)]),
              apis: {
                  resetToMin: function(t) {
                      d.setToMin(t, i)
                  },
                  resetToMax: function(t) {
                      d.setToMax(t, i)
                  },
                  changeValue: g,
                  refresh: m
              },
              domModification: {
                  styles: {
                      position: "relative"
                  }
              }
          }
      },
      apis: {
          resetToMin: function(t, n) {
              t.resetToMin(n)
          },
          resetToMax: function(t, n) {
              t.resetToMax(n)
          },
          refresh: function(t, n) {
              t.refresh(n)
          }
      }
  })
    , GS = [Ll("formBehaviours", [Nl])]
    , XS = function(t) {
      return "<alloy.field." + t + ">"
  }
    , YS = function(o, t) {
      return {
          uid: o.uid,
          dom: o.dom,
          components: t,
          behaviours: Ul(o.formBehaviours, [Nl.config({
              store: {
                  mode: "manual",
                  getValue: function(t) {
                      var n = If(t, o);
                      return Tt(n, function(t, r) {
                          return t().bind(function(t) {
                              var n, e, o = td.getCurrent(t);
                              return n = o,
                              e = new Error("Cannot find a current component to extract the value from for form part '" + r + "': " + Gr(t.element)),
                              n.fold(function() {
                                  return mt.error(e)
                              }, mt.value)
                          }).map(Nl.getValue)
                      })
                  },
                  setValue: function(e, t) {
                      _t(t, function(n, t) {
                          Af(e, o, t).each(function(t) {
                              td.getCurrent(t).each(function(t) {
                                  Nl.setValue(t, n)
                              })
                          })
                      })
                  }
              }
          })]),
          apis: {
              getField: function(t, n) {
                  return Af(t, o, n).bind(td.getCurrent)
              }
          }
      }
  }
    , qS = {
      getField: li(function(t, n, e) {
          return t.getField(n, e)
      }),
      sketch: function(t) {
          var e, n = (e = [],
          {
              field: function(t, n) {
                  return e.push(t),
                  _f("form", XS(t), n)
              },
              record: function() {
                  return e
              }
          }), o = t(n), r = n.record(), i = V(r, function(t) {
              return vf({
                  name: t,
                  pname: XS(t)
              })
          });
          return Lf("form", GS, i, YS, o)
      }
  }
    , KS = Kr("valid-input")
    , JS = Kr("invalid-input")
    , $S = Kr("validating-input")
    , QS = "colorcustom.rgb."
    , ZS = function(d, m, g, p) {
      var h = function(t, n, e, o, r) {
          var i, u, a = d(QS + "range"), c = [Yy.parts.label({
              dom: {
                  tag: "label",
                  innerHtml: e,
                  attributes: {
                      "aria-label": o
                  }
              }
          }), Yy.parts.field({
              data: r,
              factory: px,
              inputAttributes: ut({
                  type: "text"
              }, "hex" === n ? {
                  "aria-live": "polite"
              } : {}),
              inputClasses: [m("textfield")],
              inputBehaviours: ic([(i = n,
              u = t,
              Vx.config({
                  invalidClass: m("invalid"),
                  notify: {
                      onValidate: function(t) {
                          qo(t, $S, {
                              type: i
                          })
                      },
                      onValid: function(t) {
                          qo(t, KS, {
                              type: i,
                              value: Nl.getValue(t)
                          })
                      },
                      onInvalid: function(t) {
                          qo(t, JS, {
                              type: i,
                              value: Nl.getValue(t)
                          })
                      }
                  },
                  validator: {
                      validate: function(t) {
                          var n = Nl.getValue(t)
                            , e = u(n) ? mt.value(!0) : mt.error(d("aria.input.invalid"));
                          return _x(e)
                      },
                      validateOnLoad: !1
                  }
              })), Jy.config({})]),
              onSetValue: function(t) {
                  Vx.isInvalid(t) && Vx.run(t).get($)
              }
          })], s = "hex" !== n ? [Yy.parts["aria-descriptor"]({
              text: a
          })] : [];
          return {
              dom: {
                  tag: "div",
                  attributes: {
                      role: "presentation"
                  }
              },
              components: c.concat(s)
          }
      }
        , v = function(t, n) {
          var e = n.red
            , o = n.green
            , r = n.blue;
          Nl.setValue(t, {
              red: e,
              green: o,
              blue: r
          })
      }
        , b = gp({
          dom: {
              tag: "div",
              classes: [m("rgba-preview")],
              styles: {
                  "background-color": "white"
              },
              attributes: {
                  role: "presentation"
              }
          }
      })
        , y = function(t, n) {
          b.getOpt(t).each(function(t) {
              qi(t.element, "background-color", "#" + n.value)
          })
      };
      return Yf({
          factory: function() {
              var e = {
                  red: fe(st.some(255)),
                  green: fe(st.some(255)),
                  blue: fe(st.some(255)),
                  hex: fe(st.some("ffffff"))
              }
                , o = function(t) {
                  return e[t].get()
              }
                , i = function(t, n) {
                  e[t].set(n)
              }
                , r = function(t) {
                  var n = t.red
                    , e = t.green
                    , o = t.blue;
                  i("red", st.some(n)),
                  i("green", st.some(e)),
                  i("blue", st.some(o))
              }
                , n = function(t, n) {
                  var e = n.event;
                  "hex" !== e.type ? i(e.type, st.none()) : p(t)
              }
                , u = function(r, t, n) {
                  var e = parseInt(n, 10);
                  i(t, st.some(e)),
                  o("red").bind(function(e) {
                      return o("green").bind(function(n) {
                          return o("blue").map(function(t) {
                              return Ob(e, n, t, 1)
                          })
                      })
                  }).each(function(t) {
                      var n, e, o = (n = r,
                      e = yb(t),
                      qS.getField(n, "hex").each(function(t) {
                          vg.isFocused(t) || Nl.setValue(n, {
                              hex: e.value
                          })
                      }),
                      e);
                      y(r, o)
                  })
              }
                , a = function(t, n) {
                  var e = n.event;
                  "hex" === e.type ? function(t, n) {
                      g(t);
                      var e = mb(n);
                      i("hex", st.some(n));
                      var o = Eb(e);
                      v(t, o),
                      r(o),
                      qo(t, aw, {
                          hex: e
                      }),
                      y(t, e)
                  }(t, e.value) : u(t, e.type, e.value)
              }
                , t = function(t) {
                  return {
                      label: d(QS + t + ".label"),
                      description: d(QS + t + ".description")
                  }
              }
                , c = t("red")
                , s = t("green")
                , l = t("blue")
                , f = t("hex");
              return zt(qS.sketch(function(t) {
                  return {
                      dom: {
                          tag: "form",
                          classes: [m("rgb-form")],
                          attributes: {
                              "aria-label": d("aria.color.picker")
                          }
                      },
                      components: [t.field("red", Yy.sketch(h(_b, "red", c.label, c.description, 255))), t.field("green", Yy.sketch(h(_b, "green", s.label, s.description, 255))), t.field("blue", Yy.sketch(h(_b, "blue", l.label, l.description, 255))), t.field("hex", Yy.sketch(h(hb, "hex", f.label, f.description, "ffffff"))), b.asSpec()],
                      formBehaviours: ic([Vx.config({
                          invalidClass: m("form-invalid")
                      }), dg("rgb-form-events", [er(KS, a), er(JS, n), er($S, n)])])
                  }
              }), {
                  apis: {
                      updateHex: function(t, n) {
                          var e, o;
                          Nl.setValue(t, {
                              hex: n.value
                          }),
                          e = t,
                          o = Eb(n),
                          v(e, o),
                          r(o),
                          y(t, n)
                      }
                  }
              })
          },
          name: "RgbForm",
          configFields: [],
          apis: {
              updateHex: function(t, n, e) {
                  t.updateHex(n, e)
              }
          },
          extraApis: {}
      })
  }
    , tk = function(t, o) {
      var r = WS.parts.spectrum({
          dom: {
              tag: "canvas",
              attributes: {
                  role: "presentation"
              },
              classes: [o("sv-palette-spectrum")]
          }
      })
        , i = WS.parts.thumb({
          dom: {
              tag: "div",
              attributes: {
                  role: "presentation"
              },
              classes: [o("sv-palette-thumb")],
              innerHtml: "<div class=" + o("sv-palette-inner-thumb") + ' role="presentation"></div>'
          }
      })
        , u = function(t, n) {
          var e, o, r = t.width, i = t.height, u = t.getContext("2d");
          null !== u && (u.fillStyle = n,
          u.fillRect(0, 0, r, i),
          (e = u.createLinearGradient(0, 0, r, 0)).addColorStop(0, "rgba(255,255,255,1)"),
          e.addColorStop(1, "rgba(255,255,255,0)"),
          u.fillStyle = e,
          u.fillRect(0, 0, r, i),
          (o = u.createLinearGradient(0, 0, 0, i)).addColorStop(0, "rgba(0,0,0,0)"),
          o.addColorStop(1, "rgba(0,0,0,1)"),
          u.fillStyle = o,
          u.fillRect(0, 0, r, i))
      };
      return Yf({
          factory: function(t) {
              var n = at({
                  x: 0,
                  y: 0
              })
                , e = ic([td.config({
                  find: st.some
              }), vg.config({})]);
              return WS.sketch({
                  dom: {
                      tag: "div",
                      attributes: {
                          role: "presentation"
                      },
                      classes: [o("sv-palette")]
                  },
                  model: {
                      mode: "xy",
                      getInitialValue: n
                  },
                  rounded: !1,
                  components: [r, i],
                  onChange: function(t, n, e) {
                      qo(t, sw, {
                          value: e
                      })
                  },
                  onInit: function(t, n, e, o) {
                      u(e.element.dom, Bb(Ab))
                  },
                  sliderBehaviours: e
              })
          },
          name: "SaturationBrightnessPalette",
          configFields: [],
          apis: {
              setRgba: function(t, n, e) {
                  var o, r;
                  o = e,
                  r = n.components()[0].element.dom,
                  u(r, Bb(o))
              }
          },
          extraApis: {}
      })
  }
    , nk = function(f, d) {
      return Yf({
          name: "ColourPicker",
          configFields: [Ln("dom"), ne("onValidHex", $), ne("onInvalidHex", $)],
          factory: function(t) {
              var a, v, n, e, o, r = ZS(f, d, t.onValidHex, t.onInvalidHex), i = tk(0, d), b = {
                  paletteRgba: fe(Ab)
              }, u = gp(i.sketch({})), c = gp(r.sketch({})), s = function(t, e) {
                  u.getOpt(t).each(function(t) {
                      var n = Eb(e);
                      b.paletteRgba.set(n),
                      i.setRgba(t, n)
                  })
              }, l = function(t, n) {
                  c.getOpt(t).each(function(t) {
                      r.updateHex(t, n)
                  })
              }, y = function(n, e, t) {
                  ft(t, function(t) {
                      t(n, e)
                  })
              };
              return {
                  uid: t.uid,
                  dom: t.dom,
                  components: [u.asSpec(), (n = d,
                  e = WS.parts.spectrum({
                      dom: {
                          tag: "div",
                          classes: [n("hue-slider-spectrum")],
                          attributes: {
                              role: "presentation"
                          }
                      }
                  }),
                  o = WS.parts.thumb({
                      dom: {
                          tag: "div",
                          classes: [n("hue-slider-thumb")],
                          attributes: {
                              role: "presentation"
                          }
                      }
                  }),
                  WS.sketch({
                      dom: {
                          tag: "div",
                          classes: [n("hue-slider")],
                          attributes: {
                              role: "presentation"
                          }
                      },
                      rounded: !1,
                      model: {
                          mode: "y",
                          getInitialValue: at({
                              y: 0
                          })
                      },
                      components: [e, o],
                      sliderBehaviours: ic([vg.config({})]),
                      onChange: function(t, n, e) {
                          qo(t, cw, {
                              value: e
                          })
                      }
                  })), c.asSpec()],
                  behaviours: ic([dg("colour-picker-events", [er(sw, (v = [l],
                  function(t, n) {
                      var e, o, r, i, u, a, c, s, l, f = n.event.value, d = b.paletteRgba.get(), m = (i = r = 0,
                      u = (e = d).red / 255,
                      a = e.green / 255,
                      c = e.blue / 255,
                      s = Math.min(u, Math.min(a, c)),
                      l = Math.max(u, Math.max(a, c)),
                      s === l ? uw(0, 0, 100 * (i = s)) : (r = 60 * ((r = u === s ? 3 : c === s ? 1 : 5) - (u === s ? a - c : c === s ? u - a : c - u) / (l - s)),
                      o = (l - s) / l,
                      i = l,
                      uw(Math.round(r), Math.round(100 * o), Math.round(100 * i)))), g = uw(m.hue, f.x, 100 - f.y), p = Tb(g), h = yb(p);
                      y(t, h, v)
                  }
                  )), er(cw, (a = [s, l],
                  function(t, n) {
                      var e, o, r, i = n.event.value, u = (e = i.y,
                      o = uw((100 - e) / 100 * 360, 100, 100),
                      r = Tb(o),
                      yb(r));
                      y(t, u, a)
                  }
                  ))]), td.config({
                      find: function(t) {
                          return c.getOpt(t)
                      }
                  }), ug.config({
                      mode: "acyclic"
                  })])
              }
          }
      })
  }
    , ek = function() {
      return td.config({
          find: st.some
      })
  }
    , ok = function(t) {
      return td.config({
          find: t.getOpt
      })
  }
    , rk = function(t) {
      return td.config({
          find: function(n) {
              return Tr(n.element, t).bind(function(t) {
                  return n.getSystem().getByDom(t).toOptional()
              })
          }
      })
  }
    , ik = {
      "colorcustom.rgb.red.label": "R",
      "colorcustom.rgb.red.description": "Red component",
      "colorcustom.rgb.green.label": "G",
      "colorcustom.rgb.green.description": "Green component",
      "colorcustom.rgb.blue.label": "B",
      "colorcustom.rgb.blue.description": "Blue component",
      "colorcustom.rgb.hex.label": "#",
      "colorcustom.rgb.hex.description": "Hex color code",
      "colorcustom.rgb.range": "Range 0 to 255",
      "colorcustom.sb.saturation": "Saturation",
      "colorcustom.sb.brightness": "Brightness",
      "colorcustom.sb.picker": "Saturation and Brightness Picker",
      "colorcustom.sb.palette": "Saturation and Brightness Palette",
      "colorcustom.sb.instructions": "Use arrow keys to select saturation and brightness, on x and y axes",
      "colorcustom.hue.hue": "Hue",
      "colorcustom.hue.slider": "Hue Slider",
      "colorcustom.hue.palette": "Hue Palette",
      "colorcustom.hue.instructions": "Use arrow keys to select a hue",
      "aria.color.picker": "Color Picker",
      "aria.input.invalid": "Invalid input"
  }
    , uk = function(t) {
      return ik[t]
  }
    , ak = tinymce.util.Tools.resolve("tinymce.Resource")
    , ck = tinymce.util.Tools.resolve("tinymce.util.Tools")
    , sk = fn([ne("preprocess", ct), ne("postprocess", ct)])
    , lk = function(t, n, e) {
      return Nl.config(zt({
          store: {
              mode: "manual",
              getValue: n,
              setValue: e
          }
      }, t.map(function(t) {
          return {
              store: {
                  initialValue: t
              }
          }
      }).getOr({})))
  }
    , fk = function(t, n, e) {
      return lk(t, function(t) {
          return n(t.element)
      }, function(t, n) {
          return e(t.element, n)
      })
  }
    , dk = function(r, t) {
      var i = En("RepresentingConfigs.memento processors", sk, t);
      return Nl.config({
          store: {
              mode: "manual",
              getValue: function(t) {
                  var n = r.get(t)
                    , e = Nl.getValue(n);
                  return i.postprocess(e)
              },
              setValue: function(t, n) {
                  var e = i.preprocess(n)
                    , o = r.get(t);
                  Nl.setValue(o, e)
              }
          }
      })
  }
    , mk = lk
    , gk = function(t) {
      return fk(t, Vr, Pr)
  }
    , pk = function(t) {
      return Nl.config({
          store: {
              mode: "memory",
              initialValue: t
          }
      })
  }
    , hk = function(i, u) {
      var n = function(t, n) {
          n.stop()
      }
        , e = function(t) {
          return function(n, e) {
              ft(t, function(t) {
                  t(n, e)
              })
          }
      }
        , o = function(t, n) {
          var e;
          gv.isDisabled(t) || (e = n.event.raw,
          a(t, e.dataTransfer.files))
      }
        , r = function(t, n) {
          var e = n.event.raw.target;
          a(t, e.files)
      }
        , a = function(t, n) {
          var e, o, r;
          Nl.setValue(t, (e = n,
          o = u,
          r = ck.explode(o.getSetting("images_file_types", "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp", "string")),
          H(Q(e), function(n) {
              return F(r, function(t) {
                  return Se(n.name, "." + t)
              })
          }))),
          qo(t, ex, {
              name: i.name
          })
      }
        , c = gp({
          dom: {
              tag: "input",
              attributes: {
                  type: "file",
                  accept: "image/*"
              },
              styles: {
                  display: "none"
              }
          },
          behaviours: ic([dg("input-file-events", [ar(vo()), ar(Eo())])])
      })
        , t = i.label.map(function(t) {
          return nx(t, u)
      })
        , s = Yy.parts.field({
          factory: {
              sketch: function(t) {
                  return {
                      uid: t.uid,
                      dom: {
                          tag: "div",
                          classes: ["tox-dropzone-container"]
                      },
                      behaviours: ic([pk([]), ek(), gv.config({}), Dg.config({
                          toggleClass: "dragenter",
                          toggleOnExecute: !1
                      }), dg("dropzone-events", [er("dragenter", e([n, Dg.toggle])), er("dragleave", e([n, Dg.toggle])), er("dragover", n), er("drop", e([n, o])), er(ho(), r)])]),
                      components: [{
                          dom: {
                              tag: "div",
                              classes: ["tox-dropzone"],
                              styles: {}
                          },
                          components: [{
                              dom: {
                                  tag: "p",
                                  innerHtml: u.translate("Drop an image here")
                              }
                          }, mp.sketch({
                              dom: {
                                  tag: "button",
                                  innerHtml: u.translate("Browse for an image"),
                                  styles: {
                                      position: "relative"
                                  },
                                  classes: ["tox-button", "tox-button--secondary"]
                              },
                              components: [c.asSpec()],
                              action: function(t) {
                                  c.get(t).element.dom.click()
                              },
                              buttonBehaviours: ic([Jy.config({}), Uv(u.isDisabled), Lv()])
                          })]
                      }]
                  }
              }
          }
      });
      return Qy(t, s, ["tox-form__group--stretched"], [])
  }
    , vk = Kr("alloy-fake-before-tabstop")
    , bk = Kr("alloy-fake-after-tabstop")
    , yk = function(t) {
      return {
          dom: {
              tag: "div",
              styles: {
                  width: "1px",
                  height: "1px",
                  outline: "none"
              },
              attributes: {
                  tabindex: "0"
              },
              classes: t
          },
          behaviours: ic([vg.config({
              ignore: !0
          }), Jy.config({})])
      }
  }
    , xk = function(t) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-navobj"]
          },
          components: [yk([vk]), t, yk([bk])],
          behaviours: ic([rk(1)])
      }
  }
    , wk = function(t, n) {
      qo(t, mo(), {
          raw: {
              which: 9,
              shiftKey: n
          }
      })
  }
    , Sk = function(t, n) {
      var e = n.element;
      Ai(e, vk) ? wk(t, !0) : Ai(e, bk) && wk(t, !1)
  }
    , kk = function(t) {
      return Sy(t, ["." + vk, "." + bk].join(","), c)
  }
    , Ck = !(je().browser.isIE() || je().browser.isEdge())
    , Ok = function(t, n) {
      var o, r, e = Ck && t.sandboxed, i = ut(ut({}, t.label.map(function(t) {
          return {
              title: t
          }
      }).getOr({})), e ? {
          sandbox: "allow-scripts allow-same-origin"
      } : {}), u = (o = e,
      r = fe(""),
      {
          getValue: function(t) {
              return r.get()
          },
          setValue: function(t, n) {
              var e;
              o ? zr(t.element, "srcdoc", n) : (zr(t.element, "src", "javascript:''"),
              (e = t.element.dom.contentWindow.document).open(),
              e.write(n),
              e.close()),
              r.set(n)
          }
      }), a = t.label.map(function(t) {
          return nx(t, n)
      }), c = Yy.parts.field({
          factory: {
              sketch: function(t) {
                  return xk({
                      uid: t.uid,
                      dom: {
                          tag: "iframe",
                          attributes: i
                      },
                      behaviours: ic([Jy.config({}), vg.config({}), mk(st.none(), u.getValue, u.setValue)])
                  })
              }
          }
      });
      return Qy(a, c, ["tox-form__group--stretched"], [])
  };
  function _k(t, n) {
      return Dk(document.createElement("canvas"), t, n)
  }
  function Tk(t) {
      var n = _k(t.width, t.height);
      return Ek(n).drawImage(t, 0, 0),
      n
  }
  function Ek(t) {
      return t.getContext("2d")
  }
  function Dk(t, n, e) {
      return t.width = n,
      t.height = e,
      t
  }
  function Bk(t) {
      return t.naturalWidth || t.width
  }
  function Ak(t) {
      return t.naturalHeight || t.height
  }
  var Mk, Fk, Ik, Rk, Vk = window.Promise ? window.Promise : (Mk = function(t) {
      if ("object" != typeof this)
          throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t)
          throw new TypeError("not a function");
      this._state = null,
      this._value = null,
      this._deferreds = [],
      Uk(t, Pk(zk, this), Pk(Nk, this))
  }
  ,
  Fk = window,
  Ik = Mk.immediateFn || "function" == typeof Fk.setImmediate && Fk.setImmediate || function(t) {
      setTimeout(t, 1)
  }
  ,
  Rk = Array.isArray || function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
  }
  ,
  Mk.prototype["catch"] = function(t) {
      return this.then(null, t)
  }
  ,
  Mk.prototype.then = function(e, o) {
      var r = this;
      return new Mk(function(t, n) {
          Hk.call(r, new jk(e,o,t,n))
      }
      )
  }
  ,
  Mk.all = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
      var c = Array.prototype.slice.call(1 === t.length && Rk(t[0]) ? t[0] : t);
      return new Mk(function(r, i) {
          if (0 === c.length)
              return r([]);
          for (var u = c.length, t = 0; t < c.length; t++)
              !function a(n, t) {
                  try {
                      if (t && ("object" == typeof t || "function" == typeof t)) {
                          var e = t.then;
                          if ("function" == typeof e)
                              return void e.call(t, function(t) {
                                  a(n, t)
                              }, i)
                      }
                      c[n] = t,
                      0 == --u && r(c)
                  } catch (o) {
                      i(o)
                  }
              }(t, c[t])
      }
      )
  }
  ,
  Mk.resolve = function(n) {
      return n && "object" == typeof n && n.constructor === Mk ? n : new Mk(function(t) {
          t(n)
      }
      )
  }
  ,
  Mk.reject = function(e) {
      return new Mk(function(t, n) {
          n(e)
      }
      )
  }
  ,
  Mk.race = function(r) {
      return new Mk(function(t, n) {
          for (var e = 0, o = r; e < o.length; e++)
              o[e].then(t, n)
      }
      )
  }
  ,
  Mk);
  function Pk(t, n) {
      return function() {
          return t.apply(n, arguments)
      }
  }
  function Hk(o) {
      var r = this;
      null !== this._state ? Ik(function() {
          var t, n = r._state ? o.onFulfilled : o.onRejected;
          if (null !== n) {
              try {
                  t = n(r._value)
              } catch (e) {
                  return void o.reject(e)
              }
              o.resolve(t)
          } else
              (r._state ? o.resolve : o.reject)(r._value)
      }) : this._deferreds.push(o)
  }
  function zk(t) {
      try {
          if (t === this)
              throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
              var n = t.then;
              if ("function" == typeof n)
                  return void Uk(Pk(n, t), Pk(zk, this), Pk(Nk, this))
          }
          this._state = !0,
          this._value = t,
          Lk.call(this)
      } catch (e) {
          Nk.call(this, e)
      }
  }
  function Nk(t) {
      this._state = !1,
      this._value = t,
      Lk.call(this)
  }
  function Lk() {
      for (var t = 0, n = this._deferreds; t < n.length; t++) {
          var e = n[t];
          Hk.call(this, e)
      }
      this._deferreds = []
  }
  function jk(t, n, e, o) {
      this.onFulfilled = "function" == typeof t ? t : null,
      this.onRejected = "function" == typeof n ? n : null,
      this.resolve = e,
      this.reject = o
  }
  function Uk(t, n, e) {
      var o = !1;
      try {
          t(function(t) {
              o || (o = !0,
              n(t))
          }, function(t) {
              o || (o = !0,
              e(t))
          })
      } catch (r) {
          if (o)
              return;
          o = !0,
          e(r)
      }
  }
  function Wk(e) {
      return new Vk(function(t, n) {
          (function(t) {
              var n = t.split(",")
                , e = /data:([^;]+)/.exec(n[0]);
              if (!e)
                  return st.none();
              for (var o = e[1], r = n[1], i = atob(r), u = i.length, a = Math.ceil(u / 1024), c = new Array(a), s = 0; s < a; ++s) {
                  for (var l = 1024 * s, f = Math.min(1024 + l, u), d = new Array(f - l), m = l, g = 0; m < f; ++g,
                  ++m)
                      d[g] = i[m].charCodeAt(0);
                  c[s] = new Uint8Array(d)
              }
              return st.some(new Blob(c,{
                  type: o
              }))
          }
          )(e).fold(function() {
              n("uri is not base64: " + e)
          }, t)
      }
      )
  }
  function Gk(t, o, r) {
      return o = o || "image/png",
      _(HTMLCanvasElement.prototype.toBlob) ? new Vk(function(n, e) {
          t.toBlob(function(t) {
              t ? n(t) : e()
          }, o, r)
      }
      ) : Wk(t.toDataURL(o, r))
  }
  function Xk(t) {
      return a = t,
      new Vk(function(t, n) {
          var e = URL.createObjectURL(a)
            , o = new Image
            , r = function() {
              o.removeEventListener("load", i),
              o.removeEventListener("error", u)
          };
          function i() {
              r(),
              t(o)
          }
          function u() {
              r(),
              n("Unable to load data of type " + a.type + ": " + e)
          }
          o.addEventListener("load", i),
          o.addEventListener("error", u),
          o.src = e,
          o.complete && i()
      }
      ).then(function(t) {
          var n;
          n = t,
          URL.revokeObjectURL(n.src);
          var e = _k(Bk(t), Ak(t));
          return Ek(e).drawImage(t, 0, 0),
          e
      });
      var a
  }
  function Yk(t, n, e) {
      var o = n.type;
      function r(o, r) {
          return t.then(function(t) {
              return e = r,
              n = (n = o) || "image/png",
              t.toDataURL(n, e);
              var n, e
          })
      }
      return {
          getType: at(o),
          toBlob: function() {
              return Vk.resolve(n)
          },
          toDataURL: at(e),
          toBase64: function() {
              return e.split(",")[1]
          },
          toAdjustedBlob: function(n, e) {
              return t.then(function(t) {
                  return Gk(t, n, e)
              })
          },
          toAdjustedDataURL: r,
          toAdjustedBase64: function(t, n) {
              return r(t, n).then(function(t) {
                  return t.split(",")[1]
              })
          },
          toCanvas: function() {
              return t.then(Tk)
          }
      }
  }
  function qk(n) {
      return e = n,
      new Vk(function(t) {
          var n = new FileReader;
          n.onloadend = function() {
              t(n.result)
          }
          ,
          n.readAsDataURL(e)
      }
      ).then(function(t) {
          return Yk(Xk(n), n, t)
      });
      var e
  }
  function Kk(n, t) {
      return Gk(n, t).then(function(t) {
          return Yk(Vk.resolve(n), t, n.toDataURL())
      })
  }
  var Jk = qk;
  function $k(t, n, e) {
      var o = "string" == typeof t ? parseFloat(t) : t;
      return e < o ? o = e : o < n && (o = n),
      o
  }
  function Qk() {
      return [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
  }
  var Zk = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
  function tC(t, n) {
      for (var e, o = [], r = new Array(25), i = 0; i < 5; i++) {
          for (var u = 0; u < 5; u++)
              o[u] = n[u + 5 * i];
          for (u = 0; u < 5; u++) {
              for (var a = e = 0; a < 5; a++)
                  e += t[u + 5 * a] * o[a];
              r[u + 5 * i] = e
          }
      }
      return r
  }
  function nC(u, a) {
      return u.toCanvas().then(function(t) {
          return n = t,
          e = u.getType(),
          o = a,
          r = Ek(n),
          i = function(t, n) {
              for (var e, o, r, i, u = t.data, a = n[0], c = n[1], s = n[2], l = n[3], f = n[4], d = n[5], m = n[6], g = n[7], p = n[8], h = n[9], v = n[10], b = n[11], y = n[12], x = n[13], w = n[14], S = n[15], k = n[16], C = n[17], O = n[18], _ = n[19], T = 0; T < u.length; T += 4)
                  e = u[T],
                  o = u[T + 1],
                  r = u[T + 2],
                  i = u[T + 3],
                  u[T] = e * a + o * c + r * s + i * l + f,
                  u[T + 1] = e * d + o * m + r * g + i * p + h,
                  u[T + 2] = e * v + o * b + r * y + i * x + w,
                  u[T + 3] = e * S + o * k + r * C + i * O + _;
              return t
          }(r.getImageData(0, 0, n.width, n.height), o),
          r.putImageData(i, 0, 0),
          Kk(n, e);
          var n, e, o, r, i
      })
  }
  function eC(a, c) {
      return a.toCanvas().then(function(t) {
          return n = t,
          e = a.getType(),
          o = c,
          r = Ek(n),
          i = r.getImageData(0, 0, n.width, n.height),
          u = r.getImageData(0, 0, n.width, n.height),
          u = function(t, n, e) {
              function o(t, n, e) {
                  return e < t ? t = e : t < n && (t = n),
                  t
              }
              for (var r = Math.round(Math.sqrt(e.length)), i = Math.floor(r / 2), u = t.data, a = n.data, c = t.width, s = t.height, l = 0; l < s; l++)
                  for (var f = 0; f < c; f++) {
                      for (var d = 0, m = 0, g = 0, p = 0; p < r; p++)
                          for (var h = 0; h < r; h++) {
                              var v = o(f + h - i, 0, c - 1)
                                , b = 4 * (o(l + p - i, 0, s - 1) * c + v)
                                , y = e[p * r + h];
                              d += u[b] * y,
                              m += u[1 + b] * y,
                              g += u[2 + b] * y
                          }
                      var x = 4 * (l * c + f);
                      a[x] = o(d, 0, 255),
                      a[1 + x] = o(m, 0, 255),
                      a[2 + x] = o(g, 0, 255)
                  }
              return n
          }(i, u, o),
          r.putImageData(u, 0, 0),
          Kk(n, e);
          var n, e, o, r, i, u
      })
  }
  function oC(e) {
      return function(t, n) {
          return nC(t, e(Qk(), n))
      }
  }
  var rC, iC, uC, aC, cC = (rC = [-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  function(t) {
      return nC(t, rC)
  }
  ), sC = oC(function(t, n) {
      return tC(t, [1, 0, 0, 0, n = $k(255 * n, -255, 255), 0, 1, 0, 0, n, 0, 0, 1, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
  }), lC = oC(function(t, n) {
      var e;
      return n = $k(n, -1, 1),
      tC(t, [(e = (n *= 100) < 0 ? 127 + n / 100 * 127 : 127 * (e = 0 === (e = n % 1) ? Zk[n] : Zk[Math.floor(n)] * (1 - e) + Zk[Math.floor(n) + 1] * e) + 127) / 127, 0, 0, 0, .5 * (127 - e), 0, e / 127, 0, 0, .5 * (127 - e), 0, 0, e / 127, 0, .5 * (127 - e), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
  }), fC = (iC = [0, -1, 0, -1, 5, -1, 0, -1, 0],
  function(t) {
      return eC(t, iC)
  }
  ), dC = (uC = function(t, n) {
      return 255 * Math.pow(t / 255, 1 - n)
  }
  ,
  aC = function(t, n, e) {
      var o = Ek(t)
        , r = new Array(256);
      for (var i = 0; i < r.length; i++)
          r[i] = uC(i, e);
      var u = function(t, n) {
          for (var e = t.data, o = 0; o < e.length; o += 4)
              e[o] = n[e[o]],
              e[o + 1] = n[e[o + 1]],
              e[o + 2] = n[e[o + 2]];
          return t
      }(o.getImageData(0, 0, t.width, t.height), r);
      return o.putImageData(u, 0, 0),
      Kk(t, n)
  }
  ,
  function(n, e) {
      return n.toCanvas().then(function(t) {
          return aC(t, n.getType(), e)
      })
  }
  );
  function mC(t, n, e) {
      var o = Bk(t)
        , r = Ak(t)
        , i = n / o
        , u = e / r
        , a = !1;
      (i < .5 || 2 < i) && (i = i < .5 ? .5 : 2,
      a = !0),
      (u < .5 || 2 < u) && (u = u < .5 ? .5 : 2,
      a = !0);
      var c, s, l, f = (c = t,
      s = i,
      l = u,
      new Vk(function(t) {
          var n = Bk(c)
            , e = Ak(c)
            , o = Math.floor(n * s)
            , r = Math.floor(e * l)
            , i = _k(o, r);
          Ek(i).drawImage(c, 0, 0, n, e, 0, 0, o, r),
          t(i)
      }
      ));
      return a ? f.then(function(t) {
          return mC(t, n, e)
      }) : f
  }
  function gC(n, e) {
      return n.toCanvas().then(function(t) {
          return function(t, n, e) {
              var o = _k(t.width, t.height)
                , r = Ek(o)
                , i = 0
                , u = 0;
              90 !== (e = e < 0 ? 360 + e : e) && 270 !== e || Dk(o, o.height, o.width);
              90 !== e && 180 !== e || (i = o.width);
              270 !== e && 180 !== e || (u = o.height);
              return r.translate(i, u),
              r.rotate(e * Math.PI / 180),
              r.drawImage(t, 0, 0),
              Kk(o, n)
          }(t, n.getType(), e)
      })
  }
  function pC(n, e) {
      return n.toCanvas().then(function(t) {
          return function(t, n, e) {
              var o = _k(t.width, t.height)
                , r = Ek(o);
              "v" === e ? (r.scale(1, -1),
              r.drawImage(t, 0, -o.height)) : (r.scale(-1, 1),
              r.drawImage(t, -o.width, 0));
              return Kk(o, n)
          }(t, n.getType(), e)
      })
  }
  function hC(u, a, c, s, l) {
      return u.toCanvas().then(function(t) {
          return n = t,
          e = u.getType(),
          o = a,
          r = c,
          Ek(i = _k(s, l)).drawImage(n, -o, -r),
          Kk(i, e);
          var n, e, o, r, i
      })
  }
  var vC, bC = function(t) {
      return cC(t)
  }, yC = function(t) {
      return fC(t)
  }, xC = function(t, n) {
      return dC(t, n)
  }, wC = function(t, n, e, o) {
      return nC(t, (r = Qk(),
      i = e,
      u = o,
      tC(r, [$k(n, 0, 2), 0, 0, 0, 0, 0, i = $k(i, 0, 2), 0, 0, 0, 0, 0, u = $k(u, 0, 2), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])));
      var r, i, u
  }, SC = function(t, n) {
      return sC(t, n)
  }, kC = function(t, n) {
      return lC(t, n)
  }, CC = pC, OC = hC, _C = function(t, n, e) {
      return r = n,
      i = e,
      (o = t).toCanvas().then(function(t) {
          return mC(t, r, i).then(function(t) {
              return Kk(t, o.getType())
          })
      });
      var o, r, i
  }, TC = gC, EC = function(t, n) {
      return ut({
          dom: {
              tag: "span",
              innerHtml: t,
              classes: ["tox-icon", "tox-tbtn__icon-wrap"]
          }
      }, n)
  }, DC = function(t, n) {
      return EC(hp(t, n), {})
  }, BC = function(t, n) {
      return EC(hp(t, n), {
          behaviours: ic([fg.config({})])
      })
  }, AC = function(t, n, e) {
      return {
          dom: {
              tag: "span",
              innerHtml: e.translate(t),
              classes: [n + "__select-label"]
          },
          behaviours: ic([fg.config({})])
      }
  }, MC = Kr("toolbar.button.execute"), FC = ((vC = {})[_o()] = ["disabling", "alloy.base.behaviour", "toggling", "toolbar-button-events"],
  vC), IC = Kr("update-menu-text"), RC = Kr("update-menu-icon"), VC = function(n, e, o) {
      var t = fe($)
        , r = n.text.map(function(t) {
          return gp(AC(t, e, o.providers))
      })
        , i = n.icon.map(function(t) {
          return gp(BC(t, o.providers.icons))
      })
        , u = function(t, n) {
          var e = Nl.getValue(t);
          return vg.focus(e),
          qo(e, "keydown", {
              raw: n.event.raw
          }),
          tw.close(e),
          st.some(!0)
      }
        , a = n.role.fold(function() {
          return {}
      }, function(t) {
          return {
              role: t
          }
      })
        , c = n.tooltip.fold(function() {
          return {}
      }, function(t) {
          var n = o.providers.translate(t);
          return {
              title: n,
              "aria-label": n
          }
      });
      return gp(tw.sketch(ut(ut(ut({}, n.uid ? {
          uid: n.uid
      } : {}), a), {
          dom: {
              tag: "button",
              classes: [e, e + "--select"].concat(V(n.classes, function(t) {
                  return e + "--" + t
              })),
              attributes: ut({}, c)
          },
          components: Jv([i.map(function(t) {
              return t.asSpec()
          }), r.map(function(t) {
              return t.asSpec()
          }), st.some({
              dom: {
                  tag: "div",
                  classes: [e + "__select-chevron"],
                  innerHtml: hp("chevron-down", o.providers.icons)
              }
          })]),
          matchWidth: !0,
          useMinWidth: !0,
          dropdownBehaviours: ic(S(n.dropdownBehaviours, [Uv(function() {
              return n.disabled || o.providers.isDisabled()
          }), Lv(), nw.config({}), fg.config({}), dg("dropdown-events", [Yv(n, t), qv(n, t)]), dg("menubutton-update-display-text", [er(IC, function(n, e) {
              r.bind(function(t) {
                  return t.getOpt(n)
              }).each(function(t) {
                  fg.set(t, [fu(o.providers.translate(e.event.text))])
              })
          }), er(RC, function(n, e) {
              i.bind(function(t) {
                  return t.getOpt(n)
              }).each(function(t) {
                  fg.set(t, [BC(e.event.icon, o.providers.icons)])
              })
          })])])),
          eventOrder: zt(FC, {
              mousedown: ["focusing", "alloy.base.behaviour", "item-type-events", "normal-dropdown-events"]
          }),
          sandboxBehaviours: ic([ug.config({
              mode: "special",
              onLeft: u,
              onRight: u
          })]),
          lazySink: o.getSink,
          toggleClass: e + "--active",
          parts: {
              menu: wh(0, n.columns, n.presets)
          },
          fetch: function(t) {
              return Ox(y(n.fetch, t))
          }
      }))).asSpec()
  }, PC = function(t) {
      return "separator" === t.type
  }, HC = {
      type: "separator"
  }, zC = function(t, e) {
      var n = N(t, function(t, n) {
          return k(n) ? "" === n ? t : "|" === n ? 0 < t.length && !PC(t[t.length - 1]) ? t.concat([HC]) : t : It(e, n.toLowerCase()) ? t.concat([e[n.toLowerCase()]]) : t : t.concat([n])
      }, []);
      return 0 < n.length && PC(n[n.length - 1]) && n.pop(),
      n
  }, NC = function(t, n) {
      return It(t, "getSubmenuItems") ? (o = n,
      r = (e = t).getSubmenuItems(),
      i = LC(r, o),
      {
          item: e,
          menus: zt(i.menus, Jt(e.value, i.items)),
          expansions: zt(i.expansions, Jt(e.value, e.value))
      }) : {
          item: t,
          menus: {},
          expansions: {}
      };
      var e, o, r, i
  }, LC = function(t, r) {
      var n = zC(k(t) ? t.split(" ") : t, r);
      return z(n, function(t, n) {
          var e = function(t) {
              if (PC(t))
                  return t;
              var n = Ft(t, "value").getOrThunk(function() {
                  return Kr("generated-menu-item")
              });
              return zt({
                  value: n
              }, t)
          }(n)
            , o = NC(e, r);
          return {
              menus: zt(t.menus, o.menus),
              items: [o.item].concat(t.items),
              expansions: zt(t.expansions, o.expansions)
          }
      }, {
          menus: {},
          expansions: {},
          items: []
      })
  }, jC = function(t, e, o, n) {
      var r = Kr("primary-menu")
        , i = LC(t, o.shared.providers.menuItems());
      if (0 === i.items.length)
          return st.none();
      var u = py(r, i.items, e, o, n)
        , a = Tt(i.menus, function(t, n) {
          return py(n, t, e, o, !1)
      })
        , c = zt(a, Jt(r, u));
      return st.from(Zg.tieredData(r, c, i.expansions))
  }, UC = function(e) {
      return {
          isDisabled: function() {
              return gv.isDisabled(e)
          },
          setDisabled: function(t) {
              return gv.set(e, t)
          },
          setActive: function(t) {
              var n = e.element;
              t ? (Ei(n, "tox-tbtn--enabled"),
              zr(n, "aria-pressed", !0)) : (Bi(n, "tox-tbtn--enabled"),
              Ur(n, "aria-pressed"))
          },
          isActive: function() {
              return Ai(e.element, "tox-tbtn--enabled")
          }
      }
  }, WC = function(e, t, o, n) {
      return VC({
          text: e.text,
          icon: e.icon,
          tooltip: e.tooltip,
          role: n,
          fetch: function(t, n) {
              e.fetch(function(t) {
                  n(jC(t, uh.CLOSE_ON_EXECUTE, o, !1))
              })
          },
          onSetup: e.onSetup,
          getApi: UC,
          columns: 1,
          presets: "normal",
          classes: [],
          dropdownBehaviours: [Jy.config({})]
      }, t, o.shared)
  }, GC = function(n, r, i) {
      return function(t) {
          t(V(n, function(t) {
              var n, e, o = t.text.fold(function() {
                  return {}
              }, function(t) {
                  return {
                      text: t
                  }
              });
              return ut(ut({
                  type: t.type,
                  active: !1
              }, o), {
                  onAction: function(t) {
                      var n = !t.isActive();
                      t.setActive(n),
                      e.storage.set(n),
                      i.shared.getSink().each(function(t) {
                          r().getOpt(t).each(function(t) {
                              mc(t.element),
                              qo(t, ix, {
                                  name: e.name,
                                  value: e.storage.get()
                              })
                          })
                      })
                  },
                  onSetup: (n = e = t,
                  function(t) {
                      t.setActive(n.storage.get())
                  }
                  )
              })
          }))
      }
  }, XC = function(t, n, e, o, r, i) {
      void 0 === e && (e = []);
      var u = n.fold(function() {
          return {}
      }, function(t) {
          return {
              action: t
          }
      })
        , a = ut({
          buttonBehaviours: ic([Uv(function() {
              return t.disabled || i.isDisabled()
          }), Lv(), Jy.config({}), dg("button press", [nr("click"), nr("mousedown")])].concat(e)),
          eventOrder: {
              click: ["button press", "alloy.base.behaviour"],
              mousedown: ["button press", "alloy.base.behaviour"]
          }
      }, u)
        , c = zt(a, {
          dom: o
      });
      return zt(c, {
          components: r
      })
  }, YC = function(t, n, e, o) {
      void 0 === o && (o = []);
      var r = {
          tag: "button",
          classes: ["tox-tbtn"],
          attributes: t.tooltip.map(function(t) {
              return {
                  "aria-label": e.translate(t),
                  title: e.translate(t)
              }
          }).getOr({})
      }
        , i = t.icon.map(function(t) {
          return DC(t, e.icons)
      })
        , u = Jv([i]);
      return XC(t, n, o, r, u, e)
  }, qC = function(t, n, e, o) {
      void 0 === o && (o = []);
      var r = YC(t, st.some(n), e, o);
      return mp.sketch(r)
  }, KC = function(t, n, e, o, r) {
      void 0 === o && (o = []),
      void 0 === r && (r = []);
      var i = e.translate(t.text)
        , u = t.icon ? t.icon.map(function(t) {
          return DC(t, e.icons)
      }) : st.none()
        , a = u.isSome() ? Jv([u]) : []
        , c = u.isSome() ? {} : {
          innerHtml: i
      }
        , s = S(t.primary || t.borderless ? ["tox-button"] : ["tox-button", "tox-button--secondary"], u.isSome() ? ["tox-button--icon"] : [], t.borderless ? ["tox-button--naked"] : [], r)
        , l = ut(ut({
          tag: "button",
          classes: s
      }, c), {
          attributes: {
              title: i
          }
      });
      return XC(t, n, o, l, a, e)
  }, JC = function(t, n, e, o, r) {
      void 0 === o && (o = []),
      void 0 === r && (r = []);
      var i = KC(t, st.some(n), e, o, r);
      return mp.sketch(i)
  }, $C = function(n, e) {
      return function(t) {
          "custom" === e ? qo(t, ix, {
              name: n,
              value: {}
          }) : "submit" === e ? Yo(t, ux) : "cancel" === e ? Yo(t, rx) : console.error("Unknown button type: ", e)
      }
  }, QC = function(n, t, e) {
      if ("menu" === t) {
          var o = n
            , r = ut(ut({}, n), {
              onSetup: function(t) {
                  return t.setDisabled(n.disabled),
                  $
              },
              fetch: GC(o.items, function() {
                  return i
              }, e)
          })
            , i = gp(WC(r, "tox-tbtn", e, st.none()));
          return i.asSpec()
      }
      if ("custom" === (c = t) || "cancel" === c || "submit" === c) {
          var u = $C(n.name, t)
            , a = ut(ut({}, n), {
              borderless: !1
          });
          return JC(a, u, e.shared.providers, [])
      }
      var c;
      console.error("Unknown footer button type: ", t)
  }, ZC = function(t, n) {
      var e, o, r = $C(t.name, "custom");
      return e = st.none(),
      o = Yy.parts.field(ut({
          factory: mp
      }, KC(t, st.some(r), n, [pk(""), ek()]))),
      Qy(e, o, [], [])
  }, tO = at([ne("field1Name", "field1"), ne("field2Name", "field2"), ha("onLockedChange"), da(["lockClass"]), ne("locked", !1), Wl("coupledFieldBehaviours", [td, Nl])]), nO = function(t, n) {
      return vf({
          factory: Yy,
          name: t,
          overrides: function(o) {
              return {
                  fieldBehaviours: ic([dg("coupled-input-behaviour", [er(po(), function(e) {
                      Af(e, o, n).bind(td.getCurrent).each(function(n) {
                          Af(e, o, "lock").each(function(t) {
                              Dg.isOn(t) && o.onLockedChange(e, n, t)
                          })
                      })
                  })])])
              }
          }
      })
  }, eO = at([nO("field1", "field2"), nO("field2", "field1"), vf({
      factory: mp,
      schema: [Ln("dom")],
      name: "lock",
      overrides: function(t) {
          return {
              buttonBehaviours: ic([Dg.config({
                  selected: t.locked,
                  toggleClass: t.markers.lockClass,
                  aria: {
                      mode: "pressed"
                  }
              })])
          }
      }
  })]), oO = qf({
      name: "FormCoupledInputs",
      configFields: tO(),
      partFields: eO(),
      factory: function(o, t, n, e) {
          return {
              uid: o.uid,
              dom: o.dom,
              components: t,
              behaviours: Gl(o.coupledFieldBehaviours, [td.config({
                  find: st.some
              }), Nl.config({
                  store: {
                      mode: "manual",
                      getValue: function(t) {
                          var n = Vf(t, o, ["field1", "field2"])
                            , e = {};
                          return e[o.field1Name] = Nl.getValue(n.field1()),
                          e[o.field2Name] = Nl.getValue(n.field2()),
                          e
                      },
                      setValue: function(t, n) {
                          var e = Vf(t, o, ["field1", "field2"]);
                          Rt(n, o.field1Name) && Nl.setValue(e.field1(), n[o.field1Name]),
                          Rt(n, o.field2Name) && Nl.setValue(e.field2(), n[o.field2Name])
                      }
                  }
              })]),
              apis: {
                  getField1: function(t) {
                      return Af(t, o, "field1")
                  },
                  getField2: function(t) {
                      return Af(t, o, "field2")
                  },
                  getLock: function(t) {
                      return Af(t, o, "lock")
                  }
              }
          }
      },
      apis: {
          getField1: function(t, n) {
              return t.getField1(n)
          },
          getField2: function(t, n) {
              return t.getField2(n)
          },
          getLock: function(t, n) {
              return t.getLock(n)
          }
      }
  }), rO = function(t) {
      var n = /^\s*(\d+(?:\.\d+)?)\s*(|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s*$/.exec(t);
      if (null === n)
          return mt.error(t);
      var e = parseFloat(n[1])
        , o = n[2];
      return mt.value({
          value: e,
          unit: o
      })
  }, iO = function(t, n) {
      var e = {
          "": 96,
          px: 96,
          pt: 72,
          cm: 2.54,
          pc: 12,
          mm: 25.4,
          "in": 1
      }
        , o = function(t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      };
      return t.unit === n ? st.some(t.value) : o(t.unit) && o(n) ? e[t.unit] === e[n] ? st.some(t.value) : st.some(t.value / e[t.unit] * e[n]) : st.none()
  }, uO = function(t) {
      return st.none()
  }, aO = function(t, n) {
      var e, o, r, i = rO(t).toOptional(), u = rO(n).toOptional();
      return o = u,
      r = function(t, o) {
          return iO(t, o.unit).map(function(t) {
              return o.value / t
          }).map(function(t) {
              return n = t,
              e = o.unit,
              function(t) {
                  return iO(t, e).map(function(t) {
                      return {
                          value: t * n,
                          unit: e
                      }
                  })
              }
              ;
              var n, e
          }).getOr(uO)
      }
      ,
      ((e = i).isSome() && o.isSome() ? st.some(r(e.getOrDie(), o.getOrDie())) : st.none()).getOr(uO)
  }, cO = function(o, n) {
      var a = uO
        , r = Kr("ratio-event")
        , t = oO.parts.lock({
          dom: {
              tag: "button",
              classes: ["tox-lock", "tox-button", "tox-button--naked", "tox-button--icon"],
              attributes: {
                  title: n.translate(o.label.getOr("Constrain proportions"))
              }
          },
          components: [{
              dom: {
                  tag: "span",
                  classes: ["tox-icon", "tox-lock-icon__lock"],
                  innerHtml: hp("lock", n.icons)
              }
          }, {
              dom: {
                  tag: "span",
                  classes: ["tox-icon", "tox-lock-icon__unlock"],
                  innerHtml: hp("unlock", n.icons)
              }
          }],
          buttonBehaviours: ic([gv.config({
              disabled: function() {
                  return o.disabled || n.isDisabled()
              }
          }), Lv(), Jy.config({})])
      })
        , e = function(t) {
          return {
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"]
              },
              components: t
          }
      }
        , i = function(e) {
          return Yy.parts.field({
              factory: px,
              inputClasses: ["tox-textfield"],
              inputBehaviours: ic([gv.config({
                  disabled: function() {
                      return o.disabled || n.isDisabled()
                  }
              }), Lv(), Jy.config({}), dg("size-input-events", [er(lo(), function(t, n) {
                  qo(t, r, {
                      isField1: e
                  })
              }), er(ho(), function(t, n) {
                  qo(t, ex, {
                      name: o.name
                  })
              })])]),
              selectOnFocus: !1
          })
      }
        , u = function(t) {
          return {
              dom: {
                  tag: "label",
                  classes: ["tox-label"],
                  innerHtml: n.translate(t)
              }
          }
      }
        , c = oO.parts.field1(e([Yy.parts.label(u("Width")), i(!0)]))
        , s = oO.parts.field2(e([Yy.parts.label(u("Height")), i(!1)]));
      return oO.sketch({
          dom: {
              tag: "div",
              classes: ["tox-form__group"]
          },
          components: [{
              dom: {
                  tag: "div",
                  classes: ["tox-form__controls-h-stack"]
              },
              components: [c, s, e([u("&nbsp;"), t])]
          }],
          field1Name: "width",
          field2Name: "height",
          locked: !0,
          markers: {
              lockClass: "tox-locked"
          },
          onLockedChange: function(t, i, n) {
              rO(Nl.getValue(t)).each(function(t) {
                  a(t).each(function(t) {
                      var n, e, o, r;
                      Nl.setValue(i, (o = {
                          "": 0,
                          px: 0,
                          pt: 1,
                          mm: 1,
                          pc: 2,
                          ex: 2,
                          em: 2,
                          ch: 2,
                          rem: 2,
                          cm: 3,
                          "in": 4,
                          "%": 4
                      },
                      -1 !== (r = (n = t).value.toFixed((e = n.unit)in o ? o[e] : 1)).indexOf(".") && (r = r.replace(/\.?0*$/, "")),
                      r + n.unit))
                  })
              })
          },
          coupledFieldBehaviours: ic([gv.config({
              disabled: function() {
                  return o.disabled || n.isDisabled()
              },
              onDisabled: function(t) {
                  oO.getField1(t).bind(Yy.getField).each(gv.disable),
                  oO.getField2(t).bind(Yy.getField).each(gv.disable),
                  oO.getLock(t).each(gv.disable)
              },
              onEnabled: function(t) {
                  oO.getField1(t).bind(Yy.getField).each(gv.enable),
                  oO.getField2(t).bind(Yy.getField).each(gv.enable),
                  oO.getLock(t).each(gv.enable)
              }
          }), Lv(), dg("size-input-events2", [er(r, function(t, n) {
              var e = n.event.isField1
                , o = e ? oO.getField1(t) : oO.getField2(t)
                , r = e ? oO.getField2(t) : oO.getField1(t)
                , i = o.map(Nl.getValue).getOr("")
                , u = r.map(Nl.getValue).getOr("");
              a = aO(i, u)
          })])])
      })
  }, sO = {
      undo: at(Kr("undo")),
      redo: at(Kr("redo")),
      zoom: at(Kr("zoom")),
      back: at(Kr("back")),
      apply: at(Kr("apply")),
      swap: at(Kr("swap")),
      transform: at(Kr("transform")),
      tempTransform: at(Kr("temp-transform")),
      transformApply: at(Kr("transform-apply"))
  }, lO = at("save-state"), fO = at("disable"), dO = at("enable"), mO = {
      formActionEvent: ix,
      saveState: lO,
      disable: fO,
      enable: dO
  }, gO = function(r, c) {
      var t = function(t, n, e, o) {
          return gp(JC({
              name: t,
              text: t,
              disabled: e,
              primary: o,
              icon: st.none(),
              borderless: !1
          }, n, c))
      }
        , n = function(t, n, e, o) {
          return gp(qC({
              name: t,
              icon: st.some(t),
              tooltip: st.some(n),
              disabled: o,
              primary: !1,
              borderless: !1
          }, e, c))
      }
        , u = function(t, e) {
          t.map(function(t) {
              var n = t.get(e);
              n.hasConfigured(gv) && gv.disable(n)
          })
      }
        , a = function(t, e) {
          t.map(function(t) {
              var n = t.get(e);
              n.hasConfigured(gv) && gv.enable(n)
          })
      }
        , s = {
          tag: "div",
          classes: ["tox-image-tools__toolbar", "tox-image-tools-edit-panel"]
      }
        , e = $
        , i = function(t, n, e) {
          qo(t, n, e)
      }
        , l = function(t) {
          return Yo(t, mO.disable())
      }
        , f = function(t) {
          return Yo(t, mO.enable())
      }
        , d = function(t, n) {
          l(t),
          i(t, sO.transform(), {
              transform: n
          }),
          f(t)
      }
        , o = function(t) {
          return function() {
              J.getOpt(t).each(function(t) {
                  fg.set(t, [q])
              })
          }
      }
        , m = function(t, n) {
          l(t),
          i(t, sO.transformApply(), {
              transform: n,
              swap: o(t)
          }),
          f(t)
      }
        , g = function() {
          return t("Back", function(t) {
              return i(t, sO.back(), {
                  swap: o(t)
              })
          }, !1, !1)
      }
        , p = function() {
          return gp({
              dom: {
                  tag: "div",
                  classes: ["tox-spacer"]
              },
              behaviours: ic([gv.config({})])
          })
      }
        , h = function() {
          return t("Apply", function(t) {
              return i(t, sO.apply(), {
                  swap: o(t)
              })
          }, !0, !0)
      }
        , v = [g(), p(), t("Apply", function(t) {
          m(t, function(t) {
              var n = r.getRect();
              return OC(t, n.x, n.y, n.w, n.h)
          }),
          r.hideCrop()
      }, !1, !0)]
        , b = Uy.sketch({
          dom: s,
          components: v.map(function(t) {
              return t.asSpec()
          }),
          containerBehaviours: ic([dg("image-tools-crop-buttons-events", [er(mO.disable(), function(t, n) {
              u(v, t)
          }), er(mO.enable(), function(t, n) {
              a(v, t)
          })])])
      })
        , y = gp(cO({
          name: "size",
          label: st.none(),
          constrain: !0,
          disabled: !1
      }, c))
        , x = [g(), p(), y, p(), t("Apply", function(a) {
          y.getOpt(a).each(function(t) {
              var n, e, o = Nl.getValue(t), r = parseInt(o.width, 10), i = parseInt(o.height, 10), u = (n = r,
              e = i,
              function(t) {
                  return _C(t, n, e)
              }
              );
              m(a, u)
          })
      }, !1, !0)]
        , w = Uy.sketch({
          dom: s,
          components: x.map(function(t) {
              return t.asSpec()
          }),
          containerBehaviours: ic([dg("image-tools-resize-buttons-events", [er(mO.disable(), function(t, n) {
              u(x, t)
          }), er(mO.enable(), function(t, n) {
              a(x, t)
          })])])
      })
        , S = function(n, e) {
          return function(t) {
              return n(t, e)
          }
      }
        , k = S(CC, "h")
        , C = S(CC, "v")
        , O = S(TC, -90)
        , _ = S(TC, 90)
        , T = function(t, n) {
          var e, o;
          o = n,
          l(e = t),
          i(e, sO.tempTransform(), {
              transform: o
          }),
          f(e)
      }
        , E = [g(), p(), n("flip-horizontally", "Flip horizontally", function(t) {
          T(t, k)
      }, !1), n("flip-vertically", "Flip vertically", function(t) {
          T(t, C)
      }, !1), n("rotate-left", "Rotate counterclockwise", function(t) {
          T(t, O)
      }, !1), n("rotate-right", "Rotate clockwise", function(t) {
          T(t, _)
      }, !1), p(), h()]
        , D = Uy.sketch({
          dom: s,
          components: E.map(function(t) {
              return t.asSpec()
          }),
          containerBehaviours: ic([dg("image-tools-fliprotate-buttons-events", [er(mO.disable(), function(t, n) {
              u(E, t)
          }), er(mO.enable(), function(t, n) {
              a(E, t)
          })])])
      })
        , B = function(t, n, e, o, r) {
          var i = WS.parts.label({
              dom: {
                  tag: "label",
                  classes: ["tox-label"],
                  innerHtml: c.translate(t)
              }
          })
            , u = WS.parts.spectrum({
              dom: {
                  tag: "div",
                  classes: ["tox-slider__rail"],
                  attributes: {
                      role: "presentation"
                  }
              }
          })
            , a = WS.parts.thumb({
              dom: {
                  tag: "div",
                  classes: ["tox-slider__handle"],
                  attributes: {
                      role: "presentation"
                  }
              }
          });
          return gp(WS.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-slider"],
                  attributes: {
                      role: "presentation"
                  }
              },
              model: {
                  mode: "x",
                  minX: e,
                  maxX: r,
                  getInitialValue: at({
                      x: o
                  })
              },
              components: [i, u, a],
              sliderBehaviours: ic([vg.config({})]),
              onChoose: n
          }))
      }
        , A = function(t, n, e, o, r) {
          return [g(), (i = n,
          B(t, function(t, n, e) {
              var o = S(i, e.x / 100);
              d(t, o)
          }, e, o, r)), h()];
          var i
      }
        , M = function(t, n, e, o, r) {
          var i = A(t, n, e, o, r);
          return Uy.sketch({
              dom: s,
              components: i.map(function(t) {
                  return t.asSpec()
              }),
              containerBehaviours: ic([dg("image-tools-filter-panel-buttons-events", [er(mO.disable(), function(t, n) {
                  u(i, t)
              }), er(mO.enable(), function(t, n) {
                  a(i, t)
              })])])
          })
      }
        , F = [g(), p(), h()]
        , I = Uy.sketch({
          dom: s,
          components: F.map(function(t) {
              return t.asSpec()
          })
      })
        , R = M("Brightness", SC, -100, 0, 100)
        , V = M("Contrast", kC, -100, 0, 100)
        , P = M("Gamma", xC, -100, 0, 100)
        , H = function(t) {
          return B(t, function(l, t, n) {
              var e = z.getOpt(l)
                , o = L.getOpt(l)
                , r = N.getOpt(l);
              e.each(function(s) {
                  o.each(function(c) {
                      r.each(function(t) {
                          var n, e, o, r = Nl.getValue(s).x / 100, i = Nl.getValue(t).x / 100, u = Nl.getValue(c).x / 100, a = (n = r,
                          e = i,
                          o = u,
                          function(t) {
                              return wC(t, n, e, o)
                          }
                          );
                          d(l, a)
                      })
                  })
              })
          }, 0, 100, 200)
      }
        , z = H("R")
        , N = H("G")
        , L = H("B")
        , j = [g(), z, N, L, h()]
        , U = Uy.sketch({
          dom: s,
          components: j.map(function(t) {
              return t.asSpec()
          })
      })
        , W = function(n, e, o) {
          return function(t) {
              i(t, sO.swap(), {
                  transform: e,
                  swap: function() {
                      J.getOpt(t).each(function(t) {
                          fg.set(t, [n]),
                          o(t)
                      })
                  }
              })
          }
      }
        , G = st.some(yC)
        , X = st.some(bC)
        , Y = [n("crop", "Crop", W(b, st.none(), function(t) {
          r.showCrop()
      }), !1), n("resize", "Resize", W(w, st.none(), function(t) {
          y.getOpt(t).each(function(t) {
              var n = r.getMeasurements()
                , e = n.width
                , o = n.height;
              Nl.setValue(t, {
                  width: e,
                  height: o
              })
          })
      }), !1), n("orientation", "Orientation", W(D, st.none(), e), !1), n("brightness", "Brightness", W(R, st.none(), e), !1), n("sharpen", "Sharpen", W(I, G, e), !1), n("contrast", "Contrast", W(V, st.none(), e), !1), n("color-levels", "Color levels", W(U, st.none(), e), !1), n("gamma", "Gamma", W(P, st.none(), e), !1), n("invert", "Invert", W(I, X, e), !1)]
        , q = Uy.sketch({
          dom: s,
          components: Y.map(function(t) {
              return t.asSpec()
          })
      })
        , K = Uy.sketch({
          dom: {
              tag: "div"
          },
          components: [q],
          containerBehaviours: ic([fg.config({})])
      })
        , J = gp(K);
      return {
          memContainer: J,
          getApplyButton: function(t) {
              return J.getOpt(t).map(function(t) {
                  var n = t.components()[0];
                  return n.components()[n.components().length - 1]
              })
          }
      }
  }, pO = tinymce.util.Tools.resolve("tinymce.geom.Rect"), hO = tinymce.util.Tools.resolve("tinymce.dom.DomQuery"), vO = tinymce.util.Tools.resolve("tinymce.util.Observable"), bO = tinymce.util.Tools.resolve("tinymce.util.VK");
  function yO(t) {
      var n, e;
      if (t.changedTouches)
          for (n = "screenX screenY pageX pageY clientX clientY".split(" "),
          e = 0; e < n.length; e++)
              t[n[e]] = t.changedTouches[0][n[e]]
  }
  function xO(t, m) {
      var g, p, h, v, b = m.document || document, y = b.getElementById(m.handle || t), x = function(t) {
          if (yO(t),
          t.button !== p)
              return w(t);
          t.deltaX = t.screenX - h,
          t.deltaY = t.screenY - v,
          t.preventDefault(),
          m.drag(t)
      }, w = function(t) {
          yO(t),
          hO(b).off("mousemove touchmove", x).off("mouseup touchend", w),
          g.remove(),
          m.stop && m.stop(t)
      };
      this.destroy = function() {
          hO(y).off()
      }
      ,
      hO(y).on("mousedown touchstart", function(t) {
          var n, e, o, r, i, u, a, c, s, l, f = (n = b,
          e = Math.max,
          o = n.documentElement,
          r = n.body,
          i = e(o.scrollWidth, r.scrollWidth),
          u = e(o.clientWidth, r.clientWidth),
          a = e(o.offsetWidth, r.offsetWidth),
          c = e(o.scrollHeight, r.scrollHeight),
          s = e(o.clientHeight, r.clientHeight),
          {
              width: i < a ? u : i,
              height: c < e(o.offsetHeight, r.offsetHeight) ? s : c
          });
          yO(t),
          t.preventDefault(),
          p = t.button;
          var d = y;
          h = t.screenX,
          v = t.screenY,
          l = window.getComputedStyle ? window.getComputedStyle(d, null).getPropertyValue("cursor") : d.runtimeStyle.cursor,
          g = hO("<div></div>").css({
              position: "absolute",
              top: 0,
              left: 0,
              width: f.width,
              height: f.height,
              zIndex: 2147483647,
              opacity: 1e-4,
              cursor: l
          }).appendTo(b.body),
          hO(b).on("mousemove touchmove", x).on("mouseup touchend", w),
          m.start(t)
      })
  }
  var wO = 0
    , SO = function(s, e, l, o, r) {
      var t, n = "tox-", u = "tox-crid-" + wO++, a = [{
          name: "move",
          xMul: 0,
          yMul: 0,
          deltaX: 1,
          deltaY: 1,
          deltaW: 0,
          deltaH: 0,
          label: "Crop Mask"
      }, {
          name: "nw",
          xMul: 0,
          yMul: 0,
          deltaX: 1,
          deltaY: 1,
          deltaW: -1,
          deltaH: -1,
          label: "Top Left Crop Handle"
      }, {
          name: "ne",
          xMul: 1,
          yMul: 0,
          deltaX: 0,
          deltaY: 1,
          deltaW: 1,
          deltaH: -1,
          label: "Top Right Crop Handle"
      }, {
          name: "sw",
          xMul: 0,
          yMul: 1,
          deltaX: 1,
          deltaY: 0,
          deltaW: -1,
          deltaH: 1,
          label: "Bottom Left Crop Handle"
      }, {
          name: "se",
          xMul: 1,
          yMul: 1,
          deltaX: 0,
          deltaY: 0,
          deltaW: 1,
          deltaH: 1,
          label: "Bottom Right Crop Handle"
      }], i = ["top", "right", "bottom", "left"], c = function(t, n) {
          return {
              x: n.x + t.x,
              y: n.y + t.y,
              w: n.w,
              h: n.h
          }
      }, f = function(t, n) {
          return {
              x: n.x - t.x,
              y: n.y - t.y,
              w: n.w,
              h: n.h
          }
      };
      function d(t, n, e, o) {
          var r, i = n.x, u = n.y, a = n.w, c = n.h;
          i += e * t.deltaX,
          u += o * t.deltaY,
          (a += e * t.deltaW) < 20 && (a = 20),
          (c += o * t.deltaH) < 20 && (c = 20),
          r = s = pO.clamp({
              x: i,
              y: u,
              w: a,
              h: c
          }, l, "move" === t.name),
          r = f(l, r),
          h.fire("updateRect", {
              rect: r
          }),
          p(r)
      }
      function m(n) {
          function t(t, n) {
              n.h < 0 && (n.h = 0),
              n.w < 0 && (n.w = 0),
              hO("#" + u + "-" + t, o).css({
                  left: n.x,
                  top: n.y,
                  width: n.w,
                  height: n.h
              })
          }
          ck.each(a, function(t) {
              hO("#" + u + "-" + t.name, o).css({
                  left: n.w * t.xMul + n.x,
                  top: n.h * t.yMul + n.y
              })
          }),
          t("top", {
              x: e.x,
              y: e.y,
              w: e.w,
              h: n.y - e.y
          }),
          t("right", {
              x: n.x + n.w,
              y: n.y,
              w: e.w - n.x - n.w + e.x,
              h: n.h
          }),
          t("bottom", {
              x: e.x,
              y: n.y + n.h,
              w: e.w,
              h: e.h - n.y - n.h + e.y
          }),
          t("left", {
              x: e.x,
              y: n.y,
              w: n.x - e.x,
              h: n.h
          }),
          t("move", n)
      }
      function g(t) {
          m(s = t)
      }
      function p(t) {
          g(c(l, t))
      }
      hO('<div id="' + u + '" class="' + n + 'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(o),
      ck.each(i, function(t) {
          hO("#" + u, o).append('<div id="' + u + "-" + t + '"class="' + n + 'croprect-block" style="display: none" data-mce-bogus="all">')
      }),
      ck.each(a, function(t) {
          hO("#" + u, o).append('<div id="' + u + "-" + t.name + '" class="' + n + "croprect-handle " + n + "croprect-handle-" + t.name + '"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="' + t.label + '" aria-grabbed="false" title="' + t.label + '">')
      }),
      t = ck.map(a, function(n) {
          var e;
          return new xO(u,{
              document: o.ownerDocument,
              handle: u + "-" + n.name,
              start: function() {
                  e = s
              },
              drag: function(t) {
                  d(n, e, t.deltaX, t.deltaY)
              }
          })
      }),
      m(s),
      hO(o).on("focusin focusout", function(t) {
          hO(t.target).attr("aria-grabbed", "focus" === t.type ? "true" : "false")
      }),
      hO(o).on("keydown", function(n) {
          var i;
          function t(t, n, e, o, r) {
              t.stopPropagation(),
              t.preventDefault(),
              d(i, e, o, r)
          }
          switch (ck.each(a, function(t) {
              if (n.target.id === u + "-" + t.name)
                  return i = t,
                  !1
          }),
          n.keyCode) {
          case bO.LEFT:
              t(n, 0, s, -10, 0);
              break;
          case bO.RIGHT:
              t(n, 0, s, 10, 0);
              break;
          case bO.UP:
              t(n, 0, s, 0, -10);
              break;
          case bO.DOWN:
              t(n, 0, s, 0, 10);
              break;
          case bO.ENTER:
          case bO.SPACEBAR:
              n.preventDefault(),
              r()
          }
      });
      var h = ck.extend({
          toggleVisibility: function(t) {
              var n = ck.map(a, function(t) {
                  return "#" + u + "-" + t.name
              }).concat(ck.map(i, function(t) {
                  return "#" + u + "-" + t
              })).join(",");
              t ? hO(n, o).show() : hO(n, o).hide()
          },
          setClampRect: function(t) {
              l = t,
              m(s)
          },
          setRect: g,
          getInnerRect: function() {
              return f(l, s)
          },
          setInnerRect: p,
          setViewPortRect: function(t) {
              e = t,
              m(s)
          },
          destroy: function() {
              ck.each(t, function(t) {
                  t.destroy()
              }),
              t = []
          }
      }, vO);
      return h
  }
    , kO = function(n) {
      var l = gp({
          dom: {
              tag: "div",
              classes: ["tox-image-tools__image-bg"],
              attributes: {
                  role: "presentation"
              }
          }
      })
        , f = fe(1)
        , d = fe(st.none())
        , m = fe({
          x: 0,
          y: 0,
          w: 1,
          h: 1
      })
        , c = fe({
          x: 0,
          y: 0,
          w: 1,
          h: 1
      })
        , s = function(t, s) {
          g.getOpt(t).each(function(t) {
              var e = f.get()
                , o = _u(t.element)
                , r = bu(t.element)
                , i = s.dom.naturalWidth * e
                , u = s.dom.naturalHeight * e
                , a = Math.max(0, o / 2 - i / 2)
                , c = Math.max(0, r / 2 - u / 2)
                , n = {
                  left: a.toString() + "px",
                  top: c.toString() + "px",
                  width: i.toString() + "px",
                  height: u.toString() + "px",
                  position: "absolute"
              };
              Ki(s, n),
              l.getOpt(t).each(function(t) {
                  Ki(t.element, n)
              }),
              d.get().each(function(t) {
                  var n = m.get();
                  t.setRect({
                      x: n.x * e + a,
                      y: n.y * e + c,
                      w: n.w * e,
                      h: n.h * e
                  }),
                  t.setClampRect({
                      x: a,
                      y: c,
                      w: i,
                      h: u
                  }),
                  t.setViewPortRect({
                      x: 0,
                      y: 0,
                      w: o,
                      h: r
                  })
              })
          })
      }
        , e = function(t, n) {
          var e, a = me.fromTag("img");
          return zr(a, "src", n),
          e = a.dom,
          new Fp(function(t) {
              var n = function() {
                  e.removeEventListener("load", n),
                  t(e)
              };
              e.complete ? t(e) : e.addEventListener("load", n)
          }
          ).then(function() {
              return g.getOpt(t).map(function(t) {
                  var n = du({
                      element: a
                  });
                  fg.replaceAt(t, 1, st.some(n));
                  var e = c.get()
                    , o = {
                      x: 0,
                      y: 0,
                      w: a.dom.naturalWidth,
                      h: a.dom.naturalHeight
                  };
                  c.set(o);
                  var r, u, i = pO.inflate(o, -20, -20);
                  return m.set(i),
                  e.w === o.w && e.h === o.h || (r = t,
                  u = a,
                  g.getOpt(r).each(function(t) {
                      var n = _u(t.element)
                        , e = bu(t.element)
                        , o = u.dom.naturalWidth
                        , r = u.dom.naturalHeight
                        , i = Math.min(n / o, e / r);
                      1 <= i ? f.set(1) : f.set(i)
                  })),
                  s(t, a),
                  a
              })
          })
      }
        , t = Uy.sketch({
          dom: {
              tag: "div",
              classes: ["tox-image-tools__image"]
          },
          components: [l.asSpec(), {
              dom: {
                  tag: "img",
                  attributes: {
                      src: n
                  }
              }
          }, {
              dom: {
                  tag: "div"
              },
              behaviours: ic([dg("image-panel-crop-events", [sr(function(t) {
                  g.getOpt(t).each(function(t) {
                      var n = t.element.dom
                        , e = SO({
                          x: 10,
                          y: 10,
                          w: 100,
                          h: 100
                      }, {
                          x: 0,
                          y: 0,
                          w: 200,
                          h: 200
                      }, {
                          x: 0,
                          y: 0,
                          w: 200,
                          h: 200
                      }, n, function() {});
                      e.toggleVisibility(!1),
                      e.on("updateRect", function(t) {
                          var n = t.rect
                            , e = f.get()
                            , o = {
                              x: Math.round(n.x / e),
                              y: Math.round(n.y / e),
                              w: Math.round(n.w / e),
                              h: Math.round(n.h / e)
                          };
                          m.set(o)
                      }),
                      d.set(st.some(e))
                  })
              })])])
          }],
          containerBehaviours: ic([fg.config({}), dg("image-panel-events", [sr(function(t) {
              e(t, n)
          })])])
      })
        , g = gp(t);
      return {
          memContainer: g,
          updateSrc: e,
          zoom: function(t, n) {
              var e = f.get()
                , o = 0 < n ? Math.min(2, e + .1) : Math.max(.1, e - .1);
              f.set(o),
              g.getOpt(t).each(function(t) {
                  var n = t.components()[1].element;
                  s(t, n)
              })
          },
          showCrop: function() {
              d.get().each(function(t) {
                  t.toggleVisibility(!0)
              })
          },
          hideCrop: function() {
              d.get().each(function(t) {
                  t.toggleVisibility(!1)
              })
          },
          getRect: function() {
              return m.get()
          },
          getMeasurements: function() {
              var t = c.get();
              return {
                  width: t.w,
                  height: t.h
              }
          }
      }
  }
    , CO = function(t, n, e, o, r) {
      return qC({
          name: t,
          icon: st.some(n),
          disabled: e,
          tooltip: st.some(t),
          primary: !1,
          borderless: !1
      }, o, r)
  }
    , OO = function(t, n) {
      n ? gv.enable(t) : gv.disable(t)
  };
  function _O() {
      var e = []
        , o = -1;
      function t() {
          return 0 < o
      }
      function n() {
          return -1 !== o && o < e.length - 1
      }
      return {
          data: e,
          add: function(t) {
              var n = e.splice(++o);
              return e.push(t),
              {
                  state: t,
                  removed: n
              }
          },
          undo: function() {
              if (t())
                  return e[--o]
          },
          redo: function() {
              if (n())
                  return e[++o]
          },
          canUndo: t,
          canRedo: n
      }
  }
  var TO, EO, DO, BO = function(t) {
      var n = fe(t)
        , e = fe(st.none())
        , r = _O();
      r.add(t);
      var i = function(t) {
          n.set(t)
      }
        , u = function(t) {
          return {
              blob: t,
              url: URL.createObjectURL(t)
          }
      }
        , a = function(t) {
          URL.revokeObjectURL(t.url)
      }
        , o = function() {
          e.get().each(a),
          e.set(st.none())
      }
        , c = function(t) {
          var n = u(t);
          i(n);
          var e, o = r.add(n).removed;
          return e = o,
          ck.each(e, a),
          n.url
      };
      return {
          getBlobState: function() {
              return n.get()
          },
          setBlobState: i,
          addBlobState: c,
          getTempState: function() {
              return e.get().fold(function() {
                  return n.get()
              }, function(t) {
                  return t
              })
          },
          updateTempState: function(t) {
              var n = u(t);
              return o(),
              e.set(st.some(n)),
              n.url
          },
          addTempState: function(t) {
              var n = u(t);
              return e.set(st.some(n)),
              n.url
          },
          applyTempState: function(n) {
              return e.get().fold(function() {}, function(t) {
                  c(t.blob),
                  n()
              })
          },
          destroyTempState: o,
          undo: function() {
              var t = r.undo();
              return i(t),
              t.url
          },
          redo: function() {
              var t = r.redo();
              return i(t),
              t.url
          },
          getHistoryStates: function() {
              return {
                  undoEnabled: r.canUndo(),
                  redoEnabled: r.canRedo()
              }
          }
      }
  }, AO = function(t, n) {
      var e, o, r, u = BO(t.currentState), i = function(t) {
          var n = u.getHistoryStates();
          p.updateButtonUndoStates(t, n.undoEnabled, n.redoEnabled),
          qo(t, mO.formActionEvent, {
              name: mO.saveState(),
              value: n.undoEnabled
          })
      }, a = function(t) {
          return t.toBlob()
      }, c = function(t) {
          qo(t, mO.formActionEvent, {
              name: mO.disable(),
              value: {}
          })
      }, s = function(t) {
          h.getApplyButton(t).each(function(t) {
              gv.enable(t)
          }),
          qo(t, mO.formActionEvent, {
              name: mO.enable(),
              value: {}
          })
      }, l = function(t, n) {
          return c(t),
          g.updateSrc(t, n)
      }, f = function(n, t, e, o, r) {
          return c(n),
          Jk(t).then(e).then(a).then(o).then(function(t) {
              return l(n, t).then(function(t) {
                  return i(n),
                  r(),
                  s(n),
                  t
              })
          })["catch"](function(t) {
              return console.log(t),
              s(n),
              t
          })
      }, d = function(t, n, e) {
          var o = u.getBlobState().blob;
          f(t, o, n, function(t) {
              return u.updateTempState(t)
          }, e)
      }, m = function(t) {
          var n = u.getBlobState().url;
          return u.destroyTempState(),
          i(t),
          n
      }, g = kO(t.currentState.url), p = (o = gp(CO("Undo", "undo", !0, function(t) {
          qo(t, sO.undo(), {
              direction: 1
          })
      }, e = n)),
      r = gp(CO("Redo", "redo", !0, function(t) {
          qo(t, sO.redo(), {
              direction: 1
          })
      }, e)),
      {
          container: Uy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-image-tools__toolbar", "tox-image-tools__sidebar"]
              },
              components: [o.asSpec(), r.asSpec(), CO("Zoom in", "zoom-in", !1, function(t) {
                  qo(t, sO.zoom(), {
                      direction: 1
                  })
              }, e), CO("Zoom out", "zoom-out", !1, function(t) {
                  qo(t, sO.zoom(), {
                      direction: -1
                  })
              }, e)]
          }),
          updateButtonUndoStates: function(t, n, e) {
              o.getOpt(t).each(function(t) {
                  OO(t, n)
              }),
              r.getOpt(t).each(function(t) {
                  OO(t, e)
              })
          }
      }), h = gO(g, n);
      return {
          dom: {
              tag: "div",
              attributes: {
                  role: "presentation"
              }
          },
          components: [h.memContainer.asSpec(), g.memContainer.asSpec(), p.container],
          behaviours: ic([Nl.config({
              store: {
                  mode: "manual",
                  getValue: function() {
                      return u.getBlobState()
                  }
              }
          }), dg("image-tools-events", [er(sO.undo(), function(n, t) {
              var e = u.undo();
              l(n, e).then(function(t) {
                  s(n),
                  i(n)
              })
          }), er(sO.redo(), function(n, t) {
              var e = u.redo();
              l(n, e).then(function(t) {
                  s(n),
                  i(n)
              })
          }), er(sO.zoom(), function(t, n) {
              var e = n.event.direction;
              g.zoom(t, e)
          }), er(sO.back(), function(t, n) {
              var e, o;
              o = m(e = t),
              l(e, o).then(function(t) {
                  s(e)
              }),
              (0,
              n.event.swap)(),
              g.hideCrop()
          }), er(sO.apply(), function(t, n) {
              u.applyTempState(function() {
                  m(t),
                  (0,
                  n.event.swap)()
              })
          }), er(sO.transform(), function(t, n) {
              return d(t, n.event.transform, $)
          }), er(sO.tempTransform(), function(t, n) {
              return e = t,
              o = n.event.transform,
              r = u.getTempState().blob,
              void f(e, r, o, function(t) {
                  return u.addTempState(t)
              }, $);
              var e, o, r
          }), er(sO.transformApply(), function(t, n) {
              return e = t,
              o = n.event.transform,
              r = n.event.swap,
              i = u.getBlobState().blob,
              void f(e, i, o, function(t) {
                  var n = u.addBlobState(t);
                  return m(e),
                  n
              }, r);
              var e, o, r, i
          }), er(sO.swap(), function(n, t) {
              var e;
              e = n,
              p.updateButtonUndoStates(e, !1, !1);
              var o = t.event.transform
                , r = t.event.swap;
              o.fold(function() {
                  r()
              }, function(t) {
                  d(n, t, r)
              })
          })]), ek()])
      }
  }, MO = function(t) {
      return !It(t, "items")
  }, FO = "data-value", IO = function(n, e, t, o) {
      return V(t, function(t) {
          return MO(t) ? {
              type: "togglemenuitem",
              text: t.text,
              value: t.value,
              active: t.value === o,
              onAction: function() {
                  Nl.setValue(n, t.value),
                  qo(n, ex, {
                      name: e
                  }),
                  vg.focus(n)
              }
          } : {
              type: "nestedmenuitem",
              text: t.text,
              getSubmenuItems: function() {
                  return IO(n, e, t.items, o)
              }
          }
      })
  }, RO = function(t, n) {
      return Z(t, function(t) {
          return MO(t) ? Jf(t.value === n, t) : RO(t.items, n)
      })
  }, VO = Yf({
      name: "HtmlSelect",
      configFields: [Ln("options"), Ll("selectBehaviours", [vg, Nl]), ne("selectClasses", []), ne("selectAttributes", {}), Kn("data")],
      factory: function(e, t) {
          var n = V(e.options, function(t) {
              return {
                  dom: {
                      tag: "option",
                      value: t.value,
                      innerHtml: t.text
                  }
              }
          })
            , o = e.data.map(function(t) {
              return Jt("initialValue", t)
          }).getOr({});
          return {
              uid: e.uid,
              dom: {
                  tag: "select",
                  classes: e.selectClasses,
                  attributes: e.selectAttributes
              },
              components: n,
              behaviours: Ul(e.selectBehaviours, [vg.config({}), Nl.config({
                  store: ut({
                      mode: "manual",
                      getValue: function(t) {
                          return ou(t.element)
                      },
                      setValue: function(t, n) {
                          L(e.options, function(t) {
                              return t.value === n
                          }).isSome() && ru(t.element, n)
                      }
                  }, o)
              })])
          }
      }
  }), PO = function(e, n) {
      var t = e.label.map(function(t) {
          return nx(t, n)
      })
        , o = [gv.config({
          disabled: function() {
              return e.disabled || n.isDisabled()
          }
      }), Lv(), ug.config({
          mode: "execution",
          useEnter: !0 !== e.multiline,
          useControlEnter: !0 === e.multiline,
          execute: function(t) {
              return Yo(t, ux),
              st.some(!0)
          }
      }), dg("textfield-change", [er(po(), function(t, n) {
          qo(t, ex, {
              name: e.name
          })
      }), er(Co(), function(t, n) {
          qo(t, ex, {
              name: e.name
          })
      })]), Jy.config({})]
        , r = e.validation.map(function(o) {
          return Vx.config({
              getRoot: function(t) {
                  return kr(t.element)
              },
              invalidClass: "tox-invalid",
              validator: {
                  validate: function(t) {
                      var n = Nl.getValue(t)
                        , e = o.validator(n);
                      return _x(!0 === e ? mt.value(n) : mt.error(e))
                  },
                  validateOnLoad: o.validateOnLoad
              }
          })
      }).toArray()
        , i = e.placeholder.fold(at({}), function(t) {
          return {
              placeholder: n.translate(t)
          }
      })
        , u = e.inputMode.fold(at({}), function(t) {
          return {
              inputmode: t
          }
      })
        , a = ut(ut({}, i), u)
        , c = Yy.parts.field({
          tag: !0 === e.multiline ? "textarea" : "input",
          inputAttributes: a,
          inputClasses: [e.classname],
          inputBehaviours: ic(dt([o, r])),
          selectOnFocus: !1,
          factory: px
      })
        , s = (e.flex ? ["tox-form__group--stretched"] : []).concat(e.maximized ? ["tox-form-group--maximize"] : [])
        , l = [gv.config({
          disabled: function() {
              return e.disabled || n.isDisabled()
          },
          onDisabled: function(t) {
              Yy.getField(t).each(gv.disable)
          },
          onEnabled: function(t) {
              Yy.getField(t).each(gv.enable)
          }
      }), Lv()];
      return Qy(t, c, s, l)
  }, HO = /* */
  Object.freeze({
      __proto__: null,
      events: function(t, n) {
          var e = t.stream.streams.setup(t, n);
          return Zo([er(t.event, e), lr(function() {
              return n.cancel()
          })].concat(t.cancelEvent.map(function(t) {
              return [er(t, function() {
                  return n.cancel()
              })]
          }).getOr([])))
      }
  }), zO = function(t) {
      var n = fe(null);
      return di({
          readState: function() {
              return {
                  timer: null !== n.get() ? "set" : "unset"
              }
          },
          setTimer: function(t) {
              n.set(t)
          },
          cancel: function() {
              var t = n.get();
              null !== t && t.cancel()
          }
      })
  }, NO = /* */
  Object.freeze({
      __proto__: null,
      throttle: zO,
      init: function(t) {
          return t.stream.streams.state(t)
      }
  }), LO = [jn("stream", An("mode", {
      throttle: [Ln("delay"), ne("stopEvent", !0), ba("streams", {
          setup: function(t, n) {
              var e = t.stream
                , o = Sp(t.onStream, e.delay);
              return n.setTimer(o),
              function(t, n) {
                  o.throttle(t, n),
                  e.stopEvent && n.stop()
              }
          },
          state: zO
      })]
  })), ne("event", "input"), Kn("cancelEvent"), ha("onStream")], jO = ac({
      fields: LO,
      name: "streaming",
      active: HO,
      state: NO
  }), UO = function(t, n, e) {
      var o = Nl.getValue(e);
      Nl.setValue(n, o),
      GO(n)
  }, WO = function(t, n) {
      var e = t.element
        , o = ou(e)
        , r = e.dom;
      "number" !== Nr(e, "type") && n(r, o)
  }, GO = function(t) {
      WO(t, function(t, n) {
          return t.setSelectionRange(n.length, n.length)
      })
  }, XO = function(t, n, o) {
      if (t.selectsOver) {
          var e = Nl.getValue(n)
            , r = t.getDisplayText(e)
            , i = Nl.getValue(o);
          return 0 === t.getDisplayText(i).indexOf(r) ? st.some(function() {
              var t, e;
              UO(0, n, o),
              t = n,
              e = r.length,
              WO(t, function(t, n) {
                  return t.setSelectionRange(e, n.length)
              })
          }) : st.none()
      }
      return st.none()
  }, YO = at("alloy.typeahead.itemexecute"), qO = at([Kn("lazySink"), Ln("fetch"), ne("minChars", 5), ne("responseTime", 1e3), ga("onOpen"), ne("getHotspot", st.some), ne("getAnchorOverrides", at({})), ne("layouts", st.none()), ne("eventOrder", {}), se("model", {}, [ne("getDisplayText", function(t) {
      return t.meta !== undefined && t.meta.text !== undefined ? t.meta.text : t.value
  }), ne("selectsOver", !0), ne("populateFromBrowse", !0)]), ga("onSetValue"), pa("onExecute"), ga("onItemExecute"), ne("inputClasses", []), ne("inputAttributes", {}), ne("inputStyles", {}), ne("matchWidth", !0), ne("useMinWidth", !1), ne("dismissOnBlur", !0), da(["openClass"]), Kn("initialData"), Ll("typeaheadBehaviours", [vg, Nl, jO, ug, Dg, zx]), le("previewing", function() {
      return fe(!0)
  })].concat(dx()).concat($x())), KO = at([bf({
      schema: [fa()],
      name: "menu",
      overrides: function(o) {
          return {
              fakeFocus: !0,
              onHighlight: function(n, e) {
                  o.previewing.get() ? n.getSystem().getByUid(o.uid).each(function(t) {
                      XO(o.model, t, e).fold(function() {
                          return fd.dehighlight(n, e)
                      }, function(t) {
                          return t()
                      })
                  }) : n.getSystem().getByUid(o.uid).each(function(t) {
                      o.model.populateFromBrowse && UO(o.model, t, e)
                  }),
                  o.previewing.set(!1)
              },
              onExecute: function(t, n) {
                  return t.getSystem().getByUid(o.uid).toOptional().map(function(t) {
                      return qo(t, YO(), {
                          item: n
                      }),
                      !0
                  })
              },
              onHover: function(t, n) {
                  o.previewing.set(!1),
                  t.getSystem().getByUid(o.uid).each(function(t) {
                      o.model.populateFromBrowse && UO(o.model, t, n)
                  })
              }
          }
      }
  })]), JO = qf({
      name: "Typeahead",
      configFields: qO(),
      partFields: KO(),
      factory: function(r, t, n, i) {
          var e = function(t, n, e) {
              r.previewing.set(!1);
              var o = zx.getCoupled(t, "sandbox");
              xl.isOpen(o) ? td.getCurrent(o).each(function(t) {
                  fd.getHighlighted(t).fold(function() {
                      e(t)
                  }, function() {
                      Qo(o, t.element, "keydown", n)
                  })
              }) : Ux(r, u(t), t, o, i, function(t) {
                  td.getCurrent(t).each(e)
              }, bx.HighlightFirst).get($)
          }
            , o = mx(r)
            , u = function(o) {
              return function(t) {
                  return t.map(function(t) {
                      var n = Mt(t.menus)
                        , e = U(n, function(t) {
                          return H(t.items, function(t) {
                              return "item" === t.type
                          })
                      });
                      return Nl.getState(o).update(V(e, function(t) {
                          return t.data
                      })),
                      t
                  })
              }
          }
            , a = [vg.config({}), Nl.config({
              onSetValue: r.onSetValue,
              store: ut({
                  mode: "dataset",
                  getDataKey: function(t) {
                      return ou(t.element)
                  },
                  getFallbackEntry: function(t) {
                      return {
                          value: t,
                          meta: {}
                      }
                  },
                  setValue: function(t, n) {
                      ru(t.element, r.model.getDisplayText(n))
                  }
              }, r.initialData.map(function(t) {
                  return Jt("initialValue", t)
              }).getOr({}))
          }), jO.config({
              stream: {
                  mode: "throttle",
                  delay: r.responseTime,
                  stopEvent: !1
              },
              onStream: function(t, n) {
                  var e, o = zx.getCoupled(t, "sandbox");
                  vg.isFocused(t) && ou(t.element).length >= r.minChars && (e = td.getCurrent(o).bind(function(t) {
                      return fd.getHighlighted(t).map(Nl.getValue)
                  }),
                  r.previewing.set(!0),
                  Ux(r, u(t), t, o, i, function(t) {
                      td.getCurrent(o).each(function(t) {
                          e.fold(function() {
                              r.model.selectsOver && fd.highlightFirst(t)
                          }, function(n) {
                              fd.highlightBy(t, function(t) {
                                  return Nl.getValue(t).value === n.value
                              }),
                              fd.getHighlighted(t).orThunk(function() {
                                  return fd.highlightFirst(t),
                                  st.none()
                              })
                          })
                      })
                  }, bx.HighlightFirst).get($))
              },
              cancelEvent: Ao()
          }), ug.config({
              mode: "special",
              onDown: function(t, n) {
                  return e(t, n, fd.highlightFirst),
                  st.some(!0)
              },
              onEscape: function(t) {
                  var n = zx.getCoupled(t, "sandbox");
                  return xl.isOpen(n) ? (xl.close(n),
                  st.some(!0)) : st.none()
              },
              onUp: function(t, n) {
                  return e(t, n, fd.highlightLast),
                  st.some(!0)
              },
              onEnter: function(n) {
                  var t = zx.getCoupled(n, "sandbox")
                    , e = xl.isOpen(t);
                  if (e && !r.previewing.get())
                      return td.getCurrent(t).bind(function(t) {
                          return fd.getHighlighted(t)
                      }).map(function(t) {
                          return qo(n, YO(), {
                              item: t
                          }),
                          !0
                      });
                  var o = Nl.getValue(n);
                  return Yo(n, Ao()),
                  r.onExecute(t, n, o),
                  e && xl.close(t),
                  st.some(!0)
              }
          }), Dg.config({
              toggleClass: r.markers.openClass,
              aria: {
                  mode: "expanded"
              }
          }), zx.config({
              others: {
                  sandbox: function(t) {
                      return Kx(r, t, {
                          onOpen: function() {
                              return Dg.on(t)
                          },
                          onClose: function() {
                              return Dg.off(t)
                          }
                      })
                  }
              }
          }), dg("typeaheadevents", [dr(function(t) {
              var n = $;
              Gx(r, u(t), t, i, n, bx.HighlightFirst).get($)
          }), er(YO(), function(t, n) {
              var e = zx.getCoupled(t, "sandbox");
              UO(r.model, t, n.event.item),
              Yo(t, Ao()),
              r.onItemExecute(t, e, n.event.item, Nl.getValue(t)),
              xl.close(e),
              GO(t)
          })].concat(r.dismissOnBlur ? [er(ko(), function(t) {
              var n = zx.getCoupled(t, "sandbox");
              pc(n.element).isNone() && xl.close(n)
          })] : []))];
          return {
              uid: r.uid,
              dom: gx(zt(r, {
                  inputAttributes: {
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-haspopup": "true"
                  }
              })),
              behaviours: ut(ut({}, o), Ul(r.typeaheadBehaviours, a)),
              eventOrder: r.eventOrder
          }
      }
  }), $O = function(i) {
      return ut(ut({}, i), {
          toCached: function() {
              return $O(i.toCached())
          },
          bindFuture: function(n) {
              return $O(i.bind(function(t) {
                  return t.fold(function(t) {
                      return _x(mt.error(t))
                  }, function(t) {
                      return n(t)
                  })
              }))
          },
          bindResult: function(n) {
              return $O(i.map(function(t) {
                  return t.bind(n)
              }))
          },
          mapResult: function(n) {
              return $O(i.map(function(t) {
                  return t.map(n)
              }))
          },
          mapError: function(n) {
              return $O(i.map(function(t) {
                  return t.mapError(n)
              }))
          },
          foldResult: function(n, e) {
              return i.map(function(t) {
                  return t.fold(n, e)
              })
          },
          withTimeout: function(t, r) {
              return $O(Ox(function(n) {
                  var e = !1
                    , o = setTimeout(function() {
                      e = !0,
                      n(mt.error(r()))
                  }, t);
                  i.get(function(t) {
                      e || (clearTimeout(o),
                      n(t))
                  })
              }))
          }
      })
  }, QO = function(t) {
      return $O(Ox(t))
  }, ZO = QO, t_ = {
      type: "separator"
  }, n_ = function(t) {
      return {
          type: "menuitem",
          value: t.url,
          text: t.title,
          meta: {
              attach: t.attach
          },
          onAction: function() {}
      }
  }, e_ = function(t, n) {
      return {
          type: "menuitem",
          value: n,
          text: t,
          meta: {
              attach: undefined
          },
          onAction: function() {}
      }
  }, o_ = function(t, n) {
      return o = t,
      e = H(n, function(t) {
          return t.type === o
      }),
      V(e, n_);
      var e, o
  }, r_ = function(t, n) {
      var e = t.toLowerCase();
      return H(n, function(t) {
          var n = t.meta !== undefined && t.meta.text !== undefined ? t.meta.text : t.text;
          return we(n.toLowerCase(), e) || we(t.value.toLowerCase(), e)
      })
  }, i_ = function(u, t, a) {
      var n = Nl.getValue(t)
        , c = n.meta.text !== undefined ? n.meta.text : n.value;
      return a.getLinkInformation().fold(function() {
          return []
      }, function(t) {
          var n, e, o, r, i = r_(c, (n = a.getHistory(u),
          V(n, function(t) {
              return e_(t, t)
          })));
          return "file" === u ? (e = [i, r_(c, o_("header", t.targets)), r_(c, dt([(r = t,
          st.from(r.anchorTop).map(function(t) {
              return e_("<top>", t)
          }).toArray()), o_("anchor", t.targets), (o = t,
          st.from(o.anchorBottom).map(function(t) {
              return e_("<bottom>", t)
          }).toArray())]))],
          N(e, function(t, n) {
              return 0 === t.length || 0 === n.length ? t.concat(n) : t.concat(t_, n)
          }, [])) : i
      })
  }, u_ = Kr("aria-invalid"), a_ = function(r, o, i) {
      var t, n, e, u, a, c = o.shared.providers, s = function(t) {
          var n = Nl.getValue(t);
          i.addToHistory(n.value, r.filetype)
      }, l = Yy.parts.field({
          factory: JO,
          dismissOnBlur: !0,
          inputClasses: ["tox-textfield"],
          sandboxClasses: ["tox-dialog__popups"],
          inputAttributes: {
              "aria-errormessage": u_,
              type: "url"
          },
          minChars: 0,
          responseTime: 0,
          fetch: function(t) {
              var n = i_(r.filetype, t, i)
                , e = jC(n, uh.BUBBLE_TO_SANDBOX, o, !1);
              return _x(e)
          },
          getHotspot: function(t) {
              return h.getOpt(t)
          },
          onSetValue: function(t, n) {
              t.hasConfigured(Vx) && Vx.run(t).get($)
          },
          typeaheadBehaviours: ic(dt([i.getValidationHandler().map(function(e) {
              return Vx.config({
                  getRoot: function(t) {
                      return kr(t.element)
                  },
                  invalidClass: "tox-control-wrap--status-invalid",
                  notify: {
                      onInvalid: function(t, n) {
                          d.getOpt(t).each(function(t) {
                              zr(t.element, "title", c.translate(n))
                          })
                      }
                  },
                  validator: {
                      validate: function(t) {
                          var n = Nl.getValue(t);
                          return ZO(function(o) {
                              e({
                                  type: r.filetype,
                                  url: n.value
                              }, function(t) {
                                  var n, e;
                                  "invalid" === t.status ? (n = mt.error(t.message),
                                  o(n)) : (e = mt.value(t.message),
                                  o(e))
                              })
                          })
                      },
                      validateOnLoad: !1
                  }
              })
          }).toArray(), [gv.config({
              disabled: function() {
                  return r.disabled || c.isDisabled()
              }
          }), Jy.config({}), dg("urlinput-events", dt(["file" === r.filetype ? [er(po(), function(t) {
              qo(t, ex, {
                  name: r.name
              })
          })] : [], [er(ho(), function(t) {
              qo(t, ex, {
                  name: r.name
              }),
              s(t)
          }), er(Co(), function(t) {
              qo(t, ex, {
                  name: r.name
              }),
              s(t)
          })]]))]])),
          eventOrder: ((t = {})[po()] = ["streaming", "urlinput-events", "invalidating"],
          t),
          model: {
              getDisplayText: function(t) {
                  return t.value
              },
              selectsOver: !1,
              populateFromBrowse: !1
          },
          markers: {
              openClass: "tox-textfield--popup-open"
          },
          lazySink: o.shared.getSink,
          parts: {
              menu: wh(0, 0, "normal")
          },
          onExecute: function(t, n, e) {
              qo(n, ux, {})
          },
          onItemExecute: function(t, n, e, o) {
              s(t),
              qo(t, ex, {
                  name: r.name
              })
          }
      }), f = r.label.map(function(t) {
          return nx(t, c)
      }), d = gp((n = "invalid",
      e = st.some(u_),
      void 0 === (u = "warning") && (u = n),
      void 0 === a && (a = n),
      {
          dom: {
              tag: "div",
              classes: ["tox-icon", "tox-control-wrap__status-icon-" + n],
              innerHtml: hp(u, c.icons),
              attributes: ut({
                  title: c.translate(a),
                  "aria-live": "polite"
              }, e.fold(function() {
                  return {}
              }, function(t) {
                  return {
                      id: t
                  }
              }))
          }
      })), m = gp({
          dom: {
              tag: "div",
              classes: ["tox-control-wrap__status-icon-wrap"]
          },
          components: [d.asSpec()]
      }), g = i.getUrlPicker(r.filetype), p = Kr("browser.url.event"), h = gp({
          dom: {
              tag: "div",
              classes: ["tox-control-wrap"]
          },
          components: [l, m.asSpec()],
          behaviours: ic([gv.config({
              disabled: function() {
                  return r.disabled || c.isDisabled()
              }
          })])
      }), v = gp(JC({
          name: r.name,
          icon: st.some("browse"),
          text: r.label.getOr(""),
          disabled: r.disabled,
          primary: !1,
          borderless: !0
      }, function(t) {
          return Yo(t, p)
      }, c, [], ["tox-browse-url"]));
      return Yy.sketch({
          dom: tx([]),
          components: f.toArray().concat([{
              dom: {
                  tag: "div",
                  classes: ["tox-form__controls-h-stack"]
              },
              components: dt([[h.asSpec()], g.map(function() {
                  return v.asSpec()
              }).toArray()])
          }]),
          fieldBehaviours: ic([gv.config({
              disabled: function() {
                  return r.disabled || c.isDisabled()
              },
              onDisabled: function(t) {
                  Yy.getField(t).each(gv.disable),
                  v.getOpt(t).each(gv.disable)
              },
              onEnabled: function(t) {
                  Yy.getField(t).each(gv.enable),
                  v.getOpt(t).each(gv.enable)
              }
          }), Lv(), dg("url-input-events", [er(p, function(o) {
              td.getCurrent(o).each(function(n) {
                  var t = Nl.getValue(n)
                    , e = ut({
                      fieldname: r.name
                  }, t);
                  g.each(function(t) {
                      t(e).get(function(t) {
                          Nl.setValue(n, t),
                          qo(o, ex, {
                              name: r.name
                          })
                      })
                  })
              })
          })])])
      })
  }, c_ = function(r) {
      return function(n, e, o) {
          return Ft(e, "name").fold(function() {
              return r(e, o)
          }, function(t) {
              return n.field(t, r(e, o))
          })
      }
  }, s_ = {
      bar: c_(function(t, n) {
          return e = t,
          o = n.shared,
          {
              dom: {
                  tag: "div",
                  classes: ["tox-bar", "tox-form__controls-h-stack"]
              },
              components: V(e.items, o.interpreter)
          };
          var e, o
      }),
      collection: c_(function(t, n) {
          return fx(t, n.shared.providers)
      }),
      alertbanner: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          Uy.sketch({
              dom: {
                  tag: "div",
                  attributes: {
                      role: "alert"
                  },
                  classes: ["tox-notification", "tox-notification--in", "tox-notification--" + e.level]
              },
              components: [{
                  dom: {
                      tag: "div",
                      classes: ["tox-notification__icon"]
                  },
                  components: [mp.sketch({
                      dom: {
                          tag: "button",
                          classes: ["tox-button", "tox-button--naked", "tox-button--icon"],
                          innerHtml: hp(e.icon, o.icons),
                          attributes: {
                              title: o.translate(e.iconTooltip)
                          }
                      },
                      action: function(t) {
                          qo(t, ix, {
                              name: "alert-banner",
                              value: e.url
                          })
                      }
                  })]
              }, {
                  dom: {
                      tag: "div",
                      classes: ["tox-notification__body"],
                      innerHtml: o.translate(e.text)
                  }
              }]
          });
          var e, o
      }),
      input: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          PO({
              name: e.name,
              multiline: !1,
              label: e.label,
              inputMode: e.inputMode,
              placeholder: e.placeholder,
              flex: !1,
              disabled: e.disabled,
              classname: "tox-textfield",
              validation: st.none(),
              maximized: e.maximized
          }, o);
          var e, o
      }),
      textarea: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          PO({
              name: e.name,
              multiline: !0,
              label: e.label,
              inputMode: st.none(),
              placeholder: e.placeholder,
              flex: !0,
              disabled: e.disabled,
              classname: "tox-textarea",
              validation: st.none(),
              maximized: e.maximized
          }, o);
          var e, o
      }),
      label: c_(function(t, n) {
          return e = t,
          o = n.shared,
          r = {
              dom: {
                  tag: "label",
                  innerHtml: o.providers.translate(e.label),
                  classes: ["tox-label"]
              }
          },
          i = V(e.items, o.interpreter),
          {
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"]
              },
              components: [r].concat(i),
              behaviours: ic([ek(), fg.config({}), gk(st.none()), ug.config({
                  mode: "acyclic"
              })])
          };
          var e, o, r, i
      }),
      iframe: (TO = function(t, n) {
          return Ok(t, n.shared.providers)
      }
      ,
      function(t, n, e) {
          var o = zt(n, {
              source: "dynamic"
          });
          return c_(TO)(t, o, e)
      }
      ),
      button: c_(function(t, n) {
          return ZC(t, n.shared.providers)
      }),
      checkbox: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          r = Nl.config({
              store: {
                  mode: "manual",
                  getValue: function(t) {
                      return t.element.dom.checked
                  },
                  setValue: function(t, n) {
                      t.element.dom.checked = n
                  }
              }
          }),
          i = function(t) {
              return t.element.dom.click(),
              st.some(!0)
          }
          ,
          u = Yy.parts.field({
              factory: {
                  sketch: ct
              },
              dom: {
                  tag: "input",
                  classes: ["tox-checkbox__input"],
                  attributes: {
                      type: "checkbox"
                  }
              },
              behaviours: ic([ek(), gv.config({
                  disabled: function() {
                      return e.disabled || o.isDisabled()
                  }
              }), Jy.config({}), vg.config({}), r, ug.config({
                  mode: "special",
                  onEnter: i,
                  onSpace: i,
                  stopSpaceKeyup: !0
              }), dg("checkbox-events", [er(ho(), function(t, n) {
                  qo(t, ex, {
                      name: e.name
                  })
              })])])
          }),
          a = Yy.parts.label({
              dom: {
                  tag: "span",
                  classes: ["tox-checkbox__label"],
                  innerHtml: o.translate(e.label)
              },
              behaviours: ic([nw.config({})])
          }),
          s = gp({
              dom: {
                  tag: "div",
                  classes: ["tox-checkbox__icons"]
              },
              components: [(c = function(t) {
                  return {
                      dom: {
                          tag: "span",
                          classes: ["tox-icon", "tox-checkbox-icon__" + t],
                          innerHtml: hp("checked" === t ? "selected" : "unselected", o.icons)
                      }
                  }
              }
              )("checked"), c("unchecked")]
          }),
          Yy.sketch({
              dom: {
                  tag: "label",
                  classes: ["tox-checkbox"]
              },
              components: [u, s.asSpec(), a],
              fieldBehaviours: ic([gv.config({
                  disabled: function() {
                      return e.disabled || o.isDisabled()
                  },
                  disableClass: "tox-checkbox--disabled",
                  onDisabled: function(t) {
                      Yy.getField(t).each(gv.disable)
                  },
                  onEnabled: function(t) {
                      Yy.getField(t).each(gv.enable)
                  }
              }), Lv()])
          });
          var e, o, r, i, u, a, c, s
      }),
      colorinput: c_(function(t, n) {
          return iw(t, n.shared, n.colorinput)
      }),
      colorpicker: c_(function(t) {
          var n = function(t) {
              return "tox-" + t
          }
            , e = nk(uk, n)
            , r = gp(e.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-color-picker-container"],
                  attributes: {
                      role: "presentation"
                  }
              },
              onValidHex: function(t) {
                  qo(t, ix, {
                      name: "hex-valid",
                      value: !0
                  })
              },
              onInvalidHex: function(t) {
                  qo(t, ix, {
                      name: "hex-valid",
                      value: !1
                  })
              }
          }));
          return {
              dom: {
                  tag: "div"
              },
              components: [r.asSpec()],
              behaviours: ic([Nl.config({
                  store: {
                      mode: "manual",
                      getValue: function(t) {
                          var n = r.get(t);
                          return td.getCurrent(n).bind(function(t) {
                              return Nl.getValue(t).hex
                          }).map(function(t) {
                              return "#" + t
                          }).getOr("")
                      },
                      setValue: function(t, n) {
                          var e = /^#([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)/.exec(n)
                            , o = r.get(t);
                          td.getCurrent(o).fold(function() {
                              console.log("Can not find form")
                          }, function(t) {
                              Nl.setValue(t, {
                                  hex: st.from(e[1]).getOr("")
                              }),
                              qS.getField(t, "hex").each(function(t) {
                                  Yo(t, po())
                              })
                          })
                      }
                  }
              }), ek()])
          }
      }),
      dropzone: c_(function(t, n) {
          return hk(t, n.shared.providers)
      }),
      grid: c_(function(t, n) {
          return e = t,
          o = n.shared,
          {
              dom: {
                  tag: "div",
                  classes: ["tox-form__grid", "tox-form__grid--" + e.columns + "col"]
              },
              components: V(e.items, o.interpreter)
          };
          var e, o
      }),
      listbox: c_(function(t, n) {
          return o = t,
          e = (r = n).shared.providers,
          i = K(o.items).filter(MO),
          u = o.label.map(function(t) {
              return nx(t, e)
          }),
          a = {
              dom: {
                  tag: "div",
                  classes: ["tox-listboxfield"]
              },
              components: [Yy.parts.field({
                  dom: {},
                  factory: {
                      sketch: function(t) {
                          return VC({
                              uid: t.uid,
                              text: i.map(function(t) {
                                  return t.text
                              }),
                              icon: st.none(),
                              tooltip: o.label,
                              role: st.none(),
                              fetch: function(t, n) {
                                  var e = IO(t, o.name, o.items, Nl.getValue(t));
                                  n(jC(e, uh.CLOSE_ON_EXECUTE, r, !1))
                              },
                              onSetup: at($),
                              getApi: at({}),
                              columns: 1,
                              presets: "normal",
                              classes: [],
                              dropdownBehaviours: [Jy.config({}), Nl.config({
                                  store: {
                                      mode: "manual",
                                      initialValue: i.map(function(t) {
                                          return t.value
                                      }).getOr(""),
                                      getValue: function(t) {
                                          return Nr(t.element, FO)
                                      },
                                      setValue: function(n, t) {
                                          RO(o.items, t).each(function(t) {
                                              zr(n.element, FO, t.value),
                                              qo(n, IC, {
                                                  text: t.text
                                              })
                                          })
                                      }
                                  }
                              })]
                          }, "tox-listbox", r.shared)
                      }
                  }
              })]
          },
          Yy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"]
              },
              components: dt([u.toArray(), [a]]),
              fieldBehaviours: ic([gv.config({
                  disabled: at(o.disabled),
                  onDisabled: function(t) {
                      Yy.getField(t).each(gv.disable)
                  },
                  onEnabled: function(t) {
                      Yy.getField(t).each(gv.enable)
                  }
              })])
          });
          var o, r, e, i, u, a
      }),
      selectbox: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          r = V(e.items, function(t) {
              return {
                  text: o.translate(t.text),
                  value: t.value
              }
          }),
          i = e.label.map(function(t) {
              return nx(t, o)
          }),
          u = Yy.parts.field({
              dom: {},
              selectAttributes: {
                  size: e.size
              },
              options: r,
              factory: VO,
              selectBehaviours: ic([gv.config({
                  disabled: function() {
                      return e.disabled || o.isDisabled()
                  }
              }), Jy.config({}), dg("selectbox-change", [er(ho(), function(t, n) {
                  qo(t, ex, {
                      name: e.name
                  })
              })])])
          }),
          a = 1 < e.size ? st.none() : st.some({
              dom: {
                  tag: "div",
                  classes: ["tox-selectfield__icon-js"],
                  innerHtml: hp("chevron-down", o.icons)
              }
          }),
          c = {
              dom: {
                  tag: "div",
                  classes: ["tox-selectfield"]
              },
              components: dt([[u], a.toArray()])
          },
          Yy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"]
              },
              components: dt([i.toArray(), [c]]),
              fieldBehaviours: ic([gv.config({
                  disabled: function() {
                      return e.disabled || o.isDisabled()
                  },
                  onDisabled: function(t) {
                      Yy.getField(t).each(gv.disable)
                  },
                  onEnabled: function(t) {
                      Yy.getField(t).each(gv.enable)
                  }
              }), Lv()])
          });
          var e, o, r, i, u, a, c
      }),
      sizeinput: c_(function(t, n) {
          return cO(t, n.shared.providers)
      }),
      urlinput: c_(function(t, n) {
          return a_(t, n, n.urlinput)
      }),
      customeditor: c_(function(e) {
          var o = fe(st.none())
            , n = gp({
              dom: {
                  tag: e.tag
              }
          })
            , r = fe(st.none());
          return {
              dom: {
                  tag: "div",
                  classes: ["tox-custom-editor"]
              },
              behaviours: ic([dg("custom-editor-events", [sr(function(t) {
                  n.getOpt(t).each(function(n) {
                      var t;
                      t = e,
                      (Object.prototype.hasOwnProperty.call(t, "init") ? e.init(n.element.dom) : ak.load(e.scriptId, e.scriptUrl).then(function(t) {
                          return t(n.element.dom, e.settings)
                      })).then(function(n) {
                          r.get().each(function(t) {
                              n.setValue(t)
                          }),
                          r.set(st.none()),
                          o.set(st.some(n))
                      })
                  })
              })]), Nl.config({
                  store: {
                      mode: "manual",
                      getValue: function() {
                          return o.get().fold(function() {
                              return r.get().getOr("")
                          }, function(t) {
                              return t.getValue()
                          })
                      },
                      setValue: function(t, n) {
                          o.get().fold(function() {
                              r.set(st.some(n))
                          }, function(t) {
                              return t.setValue(n)
                          })
                      }
                  }
              }), ek()]),
              components: [n.asSpec()]
          }
      }),
      htmlpanel: c_(function(t) {
          return "presentation" === t.presets ? Uy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"],
                  innerHtml: t.html
              }
          }) : Uy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-form__group"],
                  innerHtml: t.html,
                  attributes: {
                      role: "document"
                  }
              },
              containerBehaviours: ic([Jy.config({}), vg.config({})])
          })
      }),
      imagetools: c_(function(t, n) {
          return AO(t, n.shared.providers)
      }),
      table: c_(function(t, n) {
          return e = t,
          o = n.shared.providers,
          u = function(t) {
              return {
                  dom: {
                      tag: "th",
                      innerHtml: o.translate(t)
                  }
              }
          }
          ,
          a = function(t) {
              return {
                  dom: {
                      tag: "td",
                      innerHtml: o.translate(t)
                  }
              }
          }
          ,
          c = function(t) {
              return {
                  dom: {
                      tag: "tr"
                  },
                  components: V(t, a)
              }
          }
          ,
          {
              dom: {
                  tag: "table",
                  classes: ["tox-dialog__table"]
              },
              components: [(i = e.header,
              {
                  dom: {
                      tag: "thead"
                  },
                  components: [{
                      dom: {
                          tag: "tr"
                      },
                      components: V(i, u)
                  }]
              }), (r = e.cells,
              {
                  dom: {
                      tag: "tbody"
                  },
                  components: V(r, c)
              })],
              behaviours: ic([Jy.config({}), vg.config({})])
          };
          var e, o, r, i, u, a, c
      }),
      panel: c_(function(t, n) {
          return o = n,
          {
              dom: {
                  tag: "div",
                  classes: (e = t).classes
              },
              components: V(e.items, o.shared.interpreter)
          };
          var e, o
      })
  }, l_ = {
      field: function(t, n) {
          return n
      }
  }, f_ = function(n, t, e) {
      var o = zt(e, {
          shared: {
              interpreter: function(t) {
                  return d_(n, t, o)
              }
          }
      });
      return d_(n, t, o)
  }, d_ = function(n, e, o) {
      return Ft(s_, e.type).fold(function() {
          return console.error('Unknown factory type "' + e.type + '", defaulting to container: ', e),
          e
      }, function(t) {
          return t(n, e, o)
      })
  }, m_ = {
      valignCentre: [],
      alignCentre: [],
      alignLeft: [],
      alignRight: [],
      right: [],
      left: [],
      bottom: [],
      top: []
  }, g_ = function(t, n, e) {
      var o = Hc(-12, 12, m_)
        , r = {
          maxHeightFunction: Fc()
      };
      return function() {
          return e() ? {
              anchor: "node",
              root: zi(t()),
              node: st.from(t()),
              bubble: o,
              layouts: {
                  onRtl: function() {
                      return [sp]
                  },
                  onLtr: function() {
                      return [cp]
                  }
              },
              overrides: r
          } : {
              anchor: "hotspot",
              hotspot: n(),
              bubble: o,
              layouts: {
                  onRtl: function() {
                      return [Ha]
                  },
                  onLtr: function() {
                      return [za]
                  }
              },
              overrides: r
          }
      }
  }, p_ = function(t, n, e) {
      return function() {
          return e() ? {
              anchor: "node",
              root: zi(t()),
              node: st.from(t()),
              layouts: {
                  onRtl: function() {
                      return [lp]
                  },
                  onLtr: function() {
                      return [lp]
                  }
              }
          } : {
              anchor: "hotspot",
              hotspot: n(),
              layouts: {
                  onRtl: function() {
                      return [Ua]
                  },
                  onLtr: function() {
                      return [Ua]
                  }
              }
          }
      }
  }, h_ = function(t, n, e) {
      var o, r, i, u = Fv(t), a = function() {
          return me.fromDom(t.getBody())
      }, c = function() {
          return me.fromDom(t.getContentAreaContainer())
      }, s = function() {
          return u || !e()
      };
      return {
          inlineDialog: g_(c, n, s),
          banner: p_(c, n, s),
          cursor: (r = t,
          function() {
              return {
                  anchor: "selection",
                  root: i(),
                  getSelection: function() {
                      var t = r.selection.getRng();
                      return st.some(Qc.range(me.fromDom(t.startContainer), t.startOffset, me.fromDom(t.endContainer), t.endOffset))
                  }
              }
          }
          ),
          node: (o = i = a,
          function(t) {
              return {
                  anchor: "node",
                  root: o(),
                  node: t
              }
          }
          )
      }
  }, v_ = function(t) {
      return {
          colorPicker: function(t, n) {
              Kb(r)(t, n)
          },
          hasCustomColors: function() {
              return Hb(o)
          },
          getColors: function() {
              return zb(e)
          },
          getColorCols: (n = e = o = r = t,
          function() {
              return jb(n)
          }
          )
      };
      var n, e, o, r
  }, b_ = [{
      title: "Headings",
      items: [{
          title: "Heading 1",
          format: "h1"
      }, {
          title: "Heading 2",
          format: "h2"
      }, {
          title: "Heading 3",
          format: "h3"
      }, {
          title: "Heading 4",
          format: "h4"
      }, {
          title: "Heading 5",
          format: "h5"
      }, {
          title: "Heading 6",
          format: "h6"
      }]
  }, {
      title: "Inline",
      items: [{
          title: "Bold",
          format: "bold"
      }, {
          title: "Italic",
          format: "italic"
      }, {
          title: "Underline",
          format: "underline"
      }, {
          title: "Strikethrough",
          format: "strikethrough"
      }, {
          title: "Superscript",
          format: "superscript"
      }, {
          title: "Subscript",
          format: "subscript"
      }, {
          title: "Code",
          format: "code"
      }]
  }, {
      title: "Blocks",
      items: [{
          title: "Paragraph",
          format: "p"
      }, {
          title: "Blockquote",
          format: "blockquote"
      }, {
          title: "Div",
          format: "div"
      }, {
          title: "Pre",
          format: "pre"
      }]
  }, {
      title: "Align",
      items: [{
          title: "Left",
          format: "alignleft"
      }, {
          title: "Center",
          format: "aligncenter"
      }, {
          title: "Right",
          format: "alignright"
      }, {
          title: "Justify",
          format: "alignjustify"
      }]
  }], y_ = function(t) {
      return N(t, function(t, n) {
          if (It(n, "items")) {
              var e = y_(n.items);
              return {
                  customFormats: t.customFormats.concat(e.customFormats),
                  formats: t.formats.concat([{
                      title: n.title,
                      items: e.formats
                  }])
              }
          }
          if (It(n, "inline") || It(n, "block") || It(n, "selector")) {
              var o = "custom-" + (k(n.name) ? n.name : n.title.toLowerCase());
              return {
                  customFormats: t.customFormats.concat([{
                      name: o,
                      format: n
                  }]),
                  formats: t.formats.concat([{
                      title: n.title,
                      format: o,
                      icon: n.icon
                  }])
              }
          }
          return ut(ut({}, t), {
              formats: t.formats.concat(n)
          })
      }, {
          customFormats: [],
          formats: []
      })
  }, x_ = function(i) {
      return t = i,
      st.from(t.getParam("style_formats")).filter(p).map(function(t) {
          var n, e, o, r = (n = i,
          e = y_(t),
          o = function(t) {
              ft(t, function(t) {
                  n.formatter.has(t.name) || n.formatter.register(t.name, t.format)
              })
          }
          ,
          n.formatter ? o(e.customFormats) : n.on("init", function() {
              o(e.customFormats)
          }),
          e.formats);
          return i.getParam("style_formats_merge", !1, "boolean") ? b_.concat(r) : r
      }).getOr(b_);
      var t
  }, w_ = function(t, n, e) {
      var o = {
          type: "formatter",
          isSelected: n(t.format),
          getStylePreview: e(t.format)
      };
      return zt(t, o)
  }, S_ = function(c, t, s, l) {
      var f = function(t) {
          return V(t, function(t) {
              var n, e, o, r, i, u = Ct(t);
              if (Rt(t, "items")) {
                  var a = f(t.items);
                  return zt(zt(t, {
                      type: "submenu"
                  }), {
                      getStyleItems: function() {
                          return a
                      }
                  })
              }
              return Rt(t, "format") ? w_(t, s, l) : 1 === u.length && M(u, "title") ? zt(t, {
                  type: "separator"
              }) : (e = k((n = t).name) ? n.name : Kr(n.title),
              r = {
                  type: "formatter",
                  format: o = "custom-" + e,
                  isSelected: s(o),
                  getStylePreview: l(o)
              },
              i = zt(n, r),
              c.formatter.register(e, i),
              i)
          })
      };
      return f(t)
  }, k_ = ck.trim, C_ = function(n) {
      return function(t) {
          if (t && 1 === t.nodeType) {
              if (t.contentEditable === n)
                  return !0;
              if (t.getAttribute("data-mce-contenteditable") === n)
                  return !0
          }
          return !1
      }
  }, O_ = C_("true"), __ = C_("false"), T_ = function(t, n, e, o, r) {
      return {
          type: t,
          title: n,
          url: e,
          level: o,
          attach: r
      }
  }, E_ = function(t) {
      return t.innerText || t.textContent
  }, D_ = function(t) {
      return (n = t) && "A" === n.nodeName && (n.id || n.name) !== undefined && A_(t);
      var n
  }, B_ = function(t) {
      return t && /^(H[1-6])$/.test(t.nodeName)
  }, A_ = function(t) {
      return function(t) {
          for (; t = t.parentNode; ) {
              var n = t.contentEditable;
              if (n && "inherit" !== n)
                  return O_(t)
          }
          return !1
      }(t) && !__(t)
  }, M_ = function(t) {
      return B_(t) && A_(t)
  }, F_ = function(t) {
      var n, e, o = (n = t).id ? n.id : Kr("h");
      return T_("header", E_(t), "#" + o, B_(e = t) ? parseInt(e.nodeName.substr(1), 10) : 0, function() {
          t.id = o
      })
  }, I_ = function(t) {
      var n = t.id || t.name
        , e = E_(t);
      return T_("anchor", e || "#" + n, "#" + n, 0, $)
  }, R_ = function(t) {
      var n, e;
      return n = "h1,h2,h3,h4,h5,h6,a:not([href])",
      e = t,
      V(ms(me.fromDom(e), n), function(t) {
          return t.dom
      })
  }, V_ = function(t) {
      return 0 < k_(t.title).length
  }, P_ = function(t) {
      var n = R_(t);
      return H(V(H(n, M_), F_).concat(V(H(n, D_), I_)), V_)
  }, H_ = "tinymce-url-history", z_ = function(t) {
      return k(t) && /^https?/.test(t)
  }, N_ = function(t) {
      return C(t) && At(t, function(t) {
          return !(p(n = t) && n.length <= 5 && W(n, z_));
          var n
      }).isNone()
  }, L_ = function() {
      var t, n = Fb.getItem(H_);
      if (null === n)
          return {};
      try {
          t = JSON.parse(n)
      } catch (e) {
          if (e instanceof SyntaxError)
              return console.log("Local storage " + H_ + " was not valid JSON", e),
              {};
          throw e
      }
      return N_(t) ? t : (console.log("Local storage " + H_ + " was not valid format", t),
      {})
  }, j_ = function(t) {
      var n = L_();
      return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : []
  }, U_ = function(n, t) {
      var e, o, r;
      z_(n) && (e = L_(),
      o = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : [],
      r = H(o, function(t) {
          return t !== n
      }),
      e[t] = [n].concat(r).slice(0, 5),
      function(t) {
          if (!N_(t))
              throw new Error("Bad format for history:\n" + JSON.stringify(t));
          Fb.setItem(H_, JSON.stringify(t))
      }(e))
  }, W_ = function(t) {
      return !!t
  }, G_ = function(t) {
      return Tt(ck.makeMap(t, /[, ]/), W_)
  }, X_ = function(t) {
      return st.from(t.getParam("file_picker_callback")).filter(_)
  }, Y_ = function(t, n) {
      var e, o, r, i, u = (e = t,
      o = st.some(e.getParam("file_picker_types")).filter(W_),
      r = st.some(e.getParam("file_browser_callback_types")).filter(W_),
      i = o.or(r).map(G_),
      X_(e).fold(function() {
          return !1
      }, function(t) {
          return i.fold(function() {
              return !0
          }, function(t) {
              return 0 < Ct(t).length && t
          })
      }));
      return O(u) ? u ? X_(t) : st.none() : u[n] ? X_(t) : st.none()
  }, q_ = function(t) {
      return st.from(t).filter(k).getOrUndefined()
  }, K_ = function(t) {
      return st.from((e = (n = t).getParam("file_picker_validator_handler", undefined, "function")) === undefined ? n.getParam("filepicker_validator_handler", undefined, "function") : e);
      var n, e
  }, J_ = function(n) {
      return {
          getHistory: j_,
          addToHistory: U_,
          getLinkInformation: function() {
              return !1 === (t = n).getParam("typeahead_urls") ? st.none() : st.some({
                  targets: P_(t.getBody()),
                  anchorTop: q_(t.getParam("anchor_top", "#top")),
                  anchorBottom: q_(t.getParam("anchor_bottom", "#bottom"))
              });
              var t
          },
          getValidationHandler: function() {
              return K_(n)
          },
          getUrlPicker: function(t) {
              return Y_(r = n, i = t).map(function(o) {
                  return function(n) {
                      return Ox(function(e) {
                          var t = ut({
                              filetype: i,
                              fieldname: n.fieldname
                          }, st.from(n.meta).getOr({}));
                          o.call(r, function(t, n) {
                              if (!k(t))
                                  throw new Error("Expected value to be string");
                              if (n !== undefined && !C(n))
                                  throw new Error("Expected meta to be a object");
                              e({
                                  value: t,
                                  meta: n
                              })
                          }, n.value, t)
                      })
                  }
              });
              var r, i
          }
      }
  }, $_ = function(t, n, e) {
      var o, r, i = fe(!1), u = {
          isPositionedAtTop: function() {
              return "top" === o.get()
          },
          getDockingMode: (o = fe(Av(n) ? "bottom" : "top")).get,
          setDockingMode: o.set
      }, a = {
          shared: {
              providers: {
                  icons: function() {
                      return n.ui.registry.getAll().icons
                  },
                  menuItems: function() {
                      return n.ui.registry.getAll().menuItems
                  },
                  translate: tv.translate,
                  isDisabled: function() {
                      return n.mode.isReadOnly() || n.ui.isDisabled()
                  },
                  getSetting: n.getParam.bind(n)
              },
              interpreter: function(t) {
                  return d_(l_, t, a)
              },
              anchors: h_(n, e, u.isPositionedAtTop),
              header: u,
              getSink: function() {
                  return mt.value(t)
              }
          },
          urlinput: J_(n),
          styleselect: function(o) {
              var r = function(t) {
                  return function() {
                      return o.formatter.match(t)
                  }
              }
                , i = function(n) {
                  return function() {
                      var t = o.formatter.get(n);
                      return t !== undefined ? st.some({
                          tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                          styles: o.dom.parseStyle(o.formatter.getCssText(n))
                      }) : st.none()
                  }
              }
                , u = function(t) {
                  var n = t.items;
                  return n !== undefined && 0 < n.length ? U(n, u) : [t.format]
              }
                , a = fe([])
                , c = fe([])
                , e = fe([])
                , s = fe([])
                , l = fe(!1);
              o.on("PreInit", function(t) {
                  var n = x_(o)
                    , e = S_(o, n, r, i);
                  a.set(e),
                  c.set(U(e, u))
              }),
              o.on("addStyleModifications", function(t) {
                  var n = S_(o, t.items, r, i);
                  e.set(n),
                  l.set(t.replace),
                  s.set(U(n, u))
              });
              return {
                  getData: function() {
                      var t = l.get() ? [] : a.get()
                        , n = e.get();
                      return t.concat(n)
                  },
                  getFlattenedKeys: function() {
                      var t = l.get() ? [] : c.get()
                        , n = s.get();
                      return t.concat(n)
                  }
              }
          }(n),
          colorinput: v_(n),
          dialog: {
              isDraggableModal: (r = n,
              function() {
                  return r.getParam("draggable_modal", !1, "boolean")
              }
              )
          },
          isContextMenuOpen: function() {
              return i.get()
          },
          setContextMenuState: function(t) {
              return i.set(t)
          }
      };
      return a
  }, Q_ = at(function(t, n) {
      var e, o, r;
      e = t,
      o = Math.floor(n),
      r = Ou.max(e, o, ["margin-left", "border-left-width", "padding-left", "padding-right", "border-right-width", "margin-right"]),
      qi(e, "max-width", r + "px")
  }), Z_ = "contexttoolbar-hide", tT = at([Ln("dom"), ne("shell", !0), Ll("toolbarBehaviours", [fg])]), nT = at([yf({
      name: "groups",
      overrides: function() {
          return {
              behaviours: ic([fg.config({})])
          }
      }
  })]), eT = qf({
      name: "Toolbar",
      configFields: tT(),
      partFields: nT(),
      factory: function(n, t, e, o) {
          var r = function(t) {
              return n.shell ? st.some(t) : Af(t, n, "groups")
          }
            , i = n.shell ? {
              behaviours: [fg.config({})],
              components: []
          } : {
              behaviours: [],
              components: t
          };
          return {
              uid: n.uid,
              dom: n.dom,
              components: i.components,
              behaviours: Ul(n.toolbarBehaviours, i.behaviours),
              apis: {
                  setGroups: function(t, n) {
                      r(t).fold(function() {
                          throw console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"),
                          new Error("Toolbar was defined to not be a shell, but no groups container was specified in components")
                      }, function(t) {
                          fg.set(t, n)
                      })
                  }
              },
              domModification: {
                  attributes: {
                      role: "group"
                  }
              }
          }
      },
      apis: {
          setGroups: function(t, n, e) {
              t.setGroups(n, e)
          }
      }
  }), oT = function(t, n, e) {
      return {
          within: t,
          extra: n,
          withinWidth: e
      }
  }, rT = function(t, n, o) {
      var e, r = (e = function(t, n) {
          var e = o(t);
          return st.some({
              element: t,
              start: n,
              finish: n + e,
              width: e
          })
      }
      ,
      N(t, function(n, t) {
          return e(t, n.len).fold(at(n), function(t) {
              return {
                  len: t.finish,
                  list: n.list.concat([t])
              }
          })
      }, {
          len: 0,
          list: []
      }).list), i = H(r, function(t) {
          return t.finish <= n
      }), u = z(i, function(t, n) {
          return t + n.width
      }, 0);
      return {
          within: i,
          extra: r.slice(i.length),
          withinWidth: u
      }
  }, iT = function(t) {
      return V(t, function(t) {
          return t.element
      })
  }, uT = function(t, n, e, o) {
      var r, i, u, a, c, s, l, f, d, m = (0 === (r = rT(n, t, e)).extra.length ? st.some(r) : st.none()).getOrThunk(function() {
          return rT(n, t - e(o), e)
      }), g = m.within, p = m.extra, h = m.withinWidth;
      return 1 === p.length && p[0].width <= e(o) ? (l = p,
      f = h,
      d = iT(g.concat(l)),
      oT(d, [], f)) : 1 <= p.length ? (u = p,
      a = o,
      c = h,
      s = iT(g).concat([a]),
      oT(s, iT(u), c)) : (i = h,
      oT(iT(g), [], i))
  }, aT = function(t, n) {
      var e = V(n, function(t) {
          return pu(t)
      });
      eT.setGroups(t, e)
  }, cT = function(t, n, e) {
      var o = Mf(t, n, "primary")
        , r = zx.getCoupled(t, "overflowGroup");
      qi(o.element, "visibility", "hidden");
      var i = n.builtGroups.get().concat([r])
        , u = Z(i, function(n) {
          return pc(n.element).bind(function(t) {
              return n.getSystem().getByDom(t).toOptional()
          })
      });
      e([]),
      aT(o, i);
      var a = _u(o.element)
        , c = uT(a, n.builtGroups.get(), function(t) {
          return _u(t.element)
      }, r);
      0 === c.extra.length ? (fg.remove(o, r),
      e([])) : (aT(o, c.within),
      e(c.extra)),
      nu(o.element, "visibility"),
      eu(o.element),
      u.each(vg.focus)
  }, sT = at([Ll("splitToolbarBehaviours", [zx]), le("builtGroups", function() {
      return fe([])
  })]), lT = at([da(["overflowToggledClass"]), Zn("getOverflowBounds"), Ln("lazySink"), le("overflowGroups", function() {
      return fe([])
  })].concat(sT())), fT = at([vf({
      factory: eT,
      schema: tT(),
      name: "primary"
  }), bf({
      schema: tT(),
      name: "overflow"
  }), bf({
      name: "overflow-button"
  }), bf({
      name: "overflow-group"
  })]), dT = at([da(["toggledClass"]), Ln("lazySink"), Gn("fetch"), Zn("getBounds"), te("fireDismissalEventInstead", [ne("event", zo())]), Wc()]), mT = at([bf({
      name: "button",
      overrides: function(t) {
          return {
              dom: {
                  attributes: {
                      "aria-haspopup": "true"
                  }
              },
              buttonBehaviours: ic([Dg.config({
                  toggleClass: t.markers.toggledClass,
                  aria: {
                      mode: "expanded"
                  },
                  toggleOnExecute: !1
              })])
          }
      }
  }), bf({
      factory: eT,
      schema: tT(),
      name: "toolbar",
      overrides: function(n) {
          return {
              toolbarBehaviours: ic([ug.config({
                  mode: "cyclic",
                  onEscape: function(t) {
                      return Af(t, n, "button").each(vg.focus),
                      st.none()
                  }
              })])
          }
      }
  })]), gT = function(t, n) {
      var e = zx.getCoupled(t, "toolbarSandbox");
      xl.isOpen(e) ? xl.close(e) : xl.open(e, n.toolbar())
  }, pT = function(t, n, e, o) {
      var r = e.getBounds.map(function(t) {
          return t()
      })
        , i = e.lazySink(t).getOrDie();
      Qs.positionWithinBounds(i, {
          anchor: "hotspot",
          hotspot: t,
          layouts: o,
          overrides: {
              maxWidthFunction: Q_()
          }
      }, n, r)
  }, hT = function(t, n, e, o, r) {
      eT.setGroups(n, r),
      pT(t, n, e, o),
      Dg.on(t)
  }, vT = qf({
      name: "FloatingToolbarButton",
      factory: function(u, t, a, n) {
          return ut(ut({}, mp.sketch(ut(ut({}, n.button()), {
              action: function(t) {
                  gT(t, n)
              },
              buttonBehaviours: Gl({
                  dump: n.button().buttonBehaviours
              }, [zx.config({
                  others: {
                      toolbarSandbox: function(t) {
                          return o = t,
                          e = a,
                          r = u,
                          {
                              dom: {
                                  tag: "div",
                                  attributes: {
                                      id: (i = $u()).id
                                  }
                              },
                              behaviours: ic([ug.config({
                                  mode: "special",
                                  onEscape: function(t) {
                                      return xl.close(t),
                                      st.some(!0)
                                  }
                              }), xl.config({
                                  onOpen: function(t, n) {
                                      r.fetch().get(function(t) {
                                          hT(o, n, r, e.layouts, t),
                                          i.link(o.element),
                                          ug.focusIn(n)
                                      })
                                  },
                                  onClose: function() {
                                      Dg.off(o),
                                      vg.focus(o),
                                      i.unlink(o.element)
                                  },
                                  isPartOf: function(t, n, e) {
                                      return Zu(n, e) || Zu(o, e)
                                  },
                                  getAttachPoint: function() {
                                      return r.lazySink(o).getOrDie()
                                  }
                              }), fc.config({
                                  channels: ut(ut({}, Ol(ut({
                                      isExtraPart: c
                                  }, r.fireDismissalEventInstead.map(function(t) {
                                      return {
                                          fireEventInstead: {
                                              event: t.event
                                          }
                                      }
                                  }).getOr({})))), Tl({
                                      doReposition: function() {
                                          xl.getState(zx.getCoupled(o, "toolbarSandbox")).each(function(t) {
                                              pT(o, t, r, e.layouts)
                                          })
                                      }
                                  }))
                              })])
                          };
                          var o, e, r, i
                      }
                  }
              })])
          }))), {
              apis: {
                  setGroups: function(n, e) {
                      xl.getState(zx.getCoupled(n, "toolbarSandbox")).each(function(t) {
                          hT(n, t, u, a.layouts, e)
                      })
                  },
                  reposition: function(n) {
                      xl.getState(zx.getCoupled(n, "toolbarSandbox")).each(function(t) {
                          pT(n, t, u, a.layouts)
                      })
                  },
                  toggle: function(t) {
                      gT(t, n)
                  },
                  getToolbar: function(t) {
                      return xl.getState(zx.getCoupled(t, "toolbarSandbox"))
                  },
                  isOpen: function(t) {
                      return xl.isOpen(zx.getCoupled(t, "toolbarSandbox"))
                  }
              }
          })
      },
      configFields: dT(),
      partFields: mT(),
      apis: {
          setGroups: function(t, n, e) {
              t.setGroups(n, e)
          },
          reposition: function(t, n) {
              t.reposition(n)
          },
          toggle: function(t, n) {
              t.toggle(n)
          },
          getToolbar: function(t, n) {
              return t.getToolbar(n)
          },
          isOpen: function(t, n) {
              return t.isOpen(n)
          }
      }
  }), bT = at([Ln("items"), da(["itemSelector"]), Ll("tgroupBehaviours", [ug])]), yT = at([xf({
      name: "items",
      unit: "item"
  })]), xT = qf({
      name: "ToolbarGroup",
      configFields: bT(),
      partFields: yT(),
      factory: function(t, n, e, o) {
          return {
              uid: t.uid,
              dom: t.dom,
              components: n,
              behaviours: Ul(t.tgroupBehaviours, [ug.config({
                  mode: "flow",
                  selector: t.markers.itemSelector
              })]),
              domModification: {
                  attributes: {
                      role: "toolbar"
                  }
              }
          }
      }
  }), wT = function(t) {
      return V(t, function(t) {
          return pu(t)
      })
  }, ST = function(t, e, o) {
      cT(t, o, function(n) {
          o.overflowGroups.set(n),
          e.getOpt(t).each(function(t) {
              vT.setGroups(t, wT(n))
          })
      })
  }, kT = qf({
      name: "SplitFloatingToolbar",
      configFields: lT(),
      partFields: fT(),
      factory: function(e, t, n, o) {
          var r = gp(vT.sketch({
              fetch: function() {
                  return Ox(function(t) {
                      t(wT(e.overflowGroups.get()))
                  })
              },
              layouts: {
                  onLtr: function() {
                      return [za, Ha]
                  },
                  onRtl: function() {
                      return [Ha, za]
                  },
                  onBottomLtr: function() {
                      return [La, Na]
                  },
                  onBottomRtl: function() {
                      return [Na, La]
                  }
              },
              getBounds: n.getOverflowBounds,
              lazySink: e.lazySink,
              fireDismissalEventInstead: {},
              markers: {
                  toggledClass: e.markers.overflowToggledClass
              },
              parts: {
                  button: o["overflow-button"](),
                  toolbar: o.overflow()
              }
          }));
          return {
              uid: e.uid,
              dom: e.dom,
              components: t,
              behaviours: Ul(e.splitToolbarBehaviours, [zx.config({
                  others: {
                      overflowGroup: function() {
                          return xT.sketch(ut(ut({}, o["overflow-group"]()), {
                              items: [r.asSpec()]
                          }))
                      }
                  }
              })]),
              apis: {
                  setGroups: function(t, n) {
                      e.builtGroups.set(V(n, t.getSystem().build)),
                      ST(t, r, e)
                  },
                  refresh: function(t) {
                      return ST(t, r, e)
                  },
                  toggle: function(t) {
                      r.getOpt(t).each(function(t) {
                          vT.toggle(t)
                      })
                  },
                  isOpen: function(t) {
                      return r.getOpt(t).map(vT.isOpen).getOr(!1)
                  },
                  reposition: function(t) {
                      r.getOpt(t).each(function(t) {
                          vT.reposition(t)
                      })
                  },
                  getOverflow: function(t) {
                      return r.getOpt(t).bind(vT.getToolbar)
                  }
              },
              domModification: {
                  attributes: {
                      role: "group"
                  }
              }
          }
      },
      apis: {
          setGroups: function(t, n, e) {
              t.setGroups(n, e)
          },
          refresh: function(t, n) {
              t.refresh(n)
          },
          reposition: function(t, n) {
              t.reposition(n)
          },
          toggle: function(t, n) {
              t.toggle(n)
          },
          isOpen: function(t, n) {
              return t.isOpen(n)
          },
          getOverflow: function(t, n) {
              return t.getOverflow(n)
          }
      }
  }), CT = function(n, t) {
      return t.getAnimationRoot.fold(function() {
          return n.element
      }, function(t) {
          return t(n)
      })
  }, OT = function(t) {
      return t.dimension.property
  }, _T = function(t, n) {
      return t.dimension.getDimension(n)
  }, TT = function(t, n) {
      var e = CT(t, n);
      Fi(e, [n.shrinkingClass, n.growingClass])
  }, ET = function(t, n) {
      Bi(t.element, n.openClass),
      Ei(t.element, n.closedClass),
      qi(t.element, OT(n), "0px"),
      eu(t.element)
  }, DT = function(t, n) {
      Bi(t.element, n.closedClass),
      Ei(t.element, n.openClass),
      nu(t.element, OT(n))
  }, BT = function(t, n, e, o) {
      e.setCollapsed(),
      qi(t.element, OT(n), _T(n, t.element)),
      eu(t.element),
      TT(t, n),
      ET(t, n),
      n.onStartShrink(t),
      n.onShrunk(t)
  }, AT = function(t, n, e, o) {
      var r = o.getOrThunk(function() {
          return _T(n, t.element)
      });
      e.setCollapsed(),
      qi(t.element, OT(n), r),
      eu(t.element);
      var i = CT(t, n);
      Bi(i, n.growingClass),
      Ei(i, n.shrinkingClass),
      ET(t, n),
      n.onStartShrink(t)
  }, MT = function(t, n, e) {
      var o = _T(n, t.element);
      ("0px" === o ? BT : AT)(t, n, e, st.some(o))
  }, FT = function(t, n, e) {
      var o = CT(t, n)
        , r = Ai(o, n.shrinkingClass)
        , i = _T(n, t.element);
      DT(t, n);
      var u = _T(n, t.element);
      (r ? function() {
          qi(t.element, OT(n), i),
          eu(t.element)
      }
      : function() {
          ET(t, n)
      }
      )(),
      Bi(o, n.shrinkingClass),
      Ei(o, n.growingClass),
      DT(t, n),
      qi(t.element, OT(n), u),
      e.setExpanded(),
      n.onStartGrow(t)
  }, IT = function(t, n, e) {
      var o = CT(t, n);
      return !0 === Ai(o, n.growingClass)
  }, RT = function(t, n, e) {
      var o = CT(t, n);
      return !0 === Ai(o, n.shrinkingClass)
  }, VT = /* */
  Object.freeze({
      __proto__: null,
      refresh: function(t, n, e) {
          var o;
          e.isExpanded() && (nu(t.element, OT(n)),
          o = _T(n, t.element),
          qi(t.element, OT(n), o))
      },
      grow: function(t, n, e) {
          e.isExpanded() || FT(t, n, e)
      },
      shrink: function(t, n, e) {
          e.isExpanded() && MT(t, n, e)
      },
      immediateShrink: function(t, n, e) {
          e.isExpanded() && BT(t, n, e, st.none())
      },
      hasGrown: function(t, n, e) {
          return e.isExpanded()
      },
      hasShrunk: function(t, n, e) {
          return e.isCollapsed()
      },
      isGrowing: IT,
      isShrinking: RT,
      isTransitioning: function(t, n, e) {
          return !0 === IT(t, n) || !0 === RT(t, n)
      },
      toggleGrow: function(t, n, e) {
          (e.isExpanded() ? MT : FT)(t, n, e)
      },
      disableTransitions: TT
  }), PT = /* */
  Object.freeze({
      __proto__: null,
      exhibit: function(t, n, e) {
          var o = n.expanded;
          return gi(o ? {
              classes: [n.openClass],
              styles: {}
          } : {
              classes: [n.closedClass],
              styles: Jt(n.dimension.property, "0px")
          })
      },
      events: function(e, o) {
          return Zo([cr(bo(), function(t, n) {
              n.event.raw.propertyName === e.dimension.property && (TT(t, e),
              o.isExpanded() && nu(t.element, e.dimension.property),
              (o.isExpanded() ? e.onGrown : e.onShrunk)(t))
          })])
      }
  }), HT = [Ln("closedClass"), Ln("openClass"), Ln("shrinkingClass"), Ln("growingClass"), Kn("getAnimationRoot"), ga("onShrunk"), ga("onStartShrink"), ga("onGrown"), ga("onStartGrow"), ne("expanded", !1), jn("dimension", An("property", {
      width: [ba("property", "width"), ba("getDimension", function(t) {
          return _u(t) + "px"
      })],
      height: [ba("property", "height"), ba("getDimension", function(t) {
          return bu(t) + "px"
      })]
  }))], zT = ac({
      fields: HT,
      name: "sliding",
      active: PT,
      apis: VT,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function(t) {
              var n = fe(t.expanded);
              return di({
                  isExpanded: function() {
                      return !0 === n.get()
                  },
                  isCollapsed: function() {
                      return !1 === n.get()
                  },
                  setCollapsed: y(n.set, !1),
                  setExpanded: y(n.set, !0),
                  readState: function() {
                      return "expanded: " + n.get()
                  }
              })
          }
      })
  }), NT = at([da(["closedClass", "openClass", "shrinkingClass", "growingClass", "overflowToggledClass"]), ga("onOpened"), ga("onClosed")].concat(sT())), LT = at([vf({
      factory: eT,
      schema: tT(),
      name: "primary"
  }), vf({
      factory: eT,
      schema: tT(),
      name: "overflow",
      overrides: function(n) {
          return {
              toolbarBehaviours: ic([zT.config({
                  dimension: {
                      property: "height"
                  },
                  closedClass: n.markers.closedClass,
                  openClass: n.markers.openClass,
                  shrinkingClass: n.markers.shrinkingClass,
                  growingClass: n.markers.growingClass,
                  onShrunk: function(t) {
                      Af(t, n, "overflow-button").each(function(t) {
                          Dg.off(t),
                          vg.focus(t)
                      }),
                      n.onClosed(t)
                  },
                  onGrown: function(t) {
                      ug.focusIn(t),
                      n.onOpened(t)
                  },
                  onStartGrow: function(t) {
                      Af(t, n, "overflow-button").each(Dg.on)
                  }
              }), ug.config({
                  mode: "acyclic",
                  onEscape: function(t) {
                      return Af(t, n, "overflow-button").each(vg.focus),
                      st.some(!0)
                  }
              })])
          }
      }
  }), bf({
      name: "overflow-button",
      overrides: function(t) {
          return {
              buttonBehaviours: ic([Dg.config({
                  toggleClass: t.markers.overflowToggledClass,
                  aria: {
                      mode: "pressed"
                  },
                  toggleOnExecute: !1
              })])
          }
      }
  }), bf({
      name: "overflow-group"
  })]), jT = function(n, e) {
      Af(n, e, "overflow-button").bind(function() {
          return Af(n, e, "overflow")
      }).each(function(t) {
          UT(n, e),
          zT.toggleGrow(t)
      })
  }, UT = function(t, n) {
      Af(t, n, "overflow").each(function(e) {
          cT(t, n, function(t) {
              var n = V(t, function(t) {
                  return pu(t)
              });
              eT.setGroups(e, n)
          }),
          Af(t, n, "overflow-button").each(function(t) {
              zT.hasGrown(e) && Dg.on(t)
          }),
          zT.refresh(e)
      })
  }, WT = qf({
      name: "SplitSlidingToolbar",
      configFields: NT(),
      partFields: LT(),
      factory: function(o, t, n, e) {
          var r = "alloy.toolbar.toggle";
          return {
              uid: o.uid,
              dom: o.dom,
              components: t,
              behaviours: Ul(o.splitToolbarBehaviours, [zx.config({
                  others: {
                      overflowGroup: function(n) {
                          return xT.sketch(ut(ut({}, e["overflow-group"]()), {
                              items: [mp.sketch(ut(ut({}, e["overflow-button"]()), {
                                  action: function(t) {
                                      Yo(n, r)
                                  }
                              }))]
                          }))
                      }
                  }
              }), dg("toolbar-toggle-events", [er(r, function(t) {
                  jT(t, o)
              })])]),
              apis: {
                  setGroups: function(t, n) {
                      var e;
                      e = V(n, t.getSystem().build),
                      o.builtGroups.set(e),
                      UT(t, o)
                  },
                  refresh: function(t) {
                      return UT(t, o)
                  },
                  toggle: function(t) {
                      return jT(t, o)
                  },
                  isOpen: function(t) {
                      return Af(t, o, "overflow").map(zT.hasGrown).getOr(!1)
                  }
              },
              domModification: {
                  attributes: {
                      role: "group"
                  }
              }
          }
      },
      apis: {
          setGroups: function(t, n, e) {
              t.setGroups(n, e)
          },
          refresh: function(t, n) {
              t.refresh(n)
          },
          toggle: function(t, n) {
              t.toggle(n)
          },
          isOpen: function(t, n) {
              return t.isOpen(n)
          }
      }
  }), GT = at(Kr("toolbar-height-change")), XT = function(t) {
      var n = t.title.fold(function() {
          return {}
      }, function(t) {
          return {
              attributes: {
                  title: t
              }
          }
      });
      return {
          dom: ut({
              tag: "div",
              classes: ["tox-toolbar__group"]
          }, n),
          components: [xT.parts.items({})],
          items: t.items,
          markers: {
              itemSelector: "*:not(.tox-split-button) > .tox-tbtn:not([disabled]), .tox-split-button:not([disabled]), .tox-toolbar-nav-js:not([disabled])"
          },
          tgroupBehaviours: ic([Jy.config({}), vg.config({})])
      }
  }, YT = function(t) {
      return xT.sketch(XT(t))
  }, qT = function(e, t) {
      var n = sr(function(t) {
          var n = V(e.initGroups, YT);
          eT.setGroups(t, n)
      });
      return ic([Gv(e.providers.isDisabled), Lv(), ug.config({
          mode: t,
          onEscape: e.onEscape,
          selector: ".tox-toolbar__group"
      }), dg("toolbar-events", [n])])
  }, KT = function(t) {
      var n = t.cyclicKeying ? "cyclic" : "acyclic";
      return {
          uid: t.uid,
          dom: {
              tag: "div",
              classes: ["tox-toolbar-overlord"]
          },
          parts: {
              "overflow-group": XT({
                  title: st.none(),
                  items: []
              }),
              "overflow-button": YC({
                  name: "more",
                  icon: st.some("more-drawer"),
                  disabled: !1,
                  tooltip: st.some("More..."),
                  primary: !1,
                  borderless: !1
              }, st.none(), t.providers)
          },
          splitToolbarBehaviours: qT(t, n)
      }
  }, JT = function(i) {
      var t = KT(i)
        , n = kT.parts.primary({
          dom: {
              tag: "div",
              classes: ["tox-toolbar__primary"]
          }
      });
      return kT.sketch(ut(ut({}, t), {
          lazySink: i.getSink,
          getOverflowBounds: function() {
              var t = i.moreDrawerData.lazyHeader().element
                , n = Nu(t)
                , e = wr(t)
                , o = Nu(e)
                , r = Math.max(e.dom.scrollHeight, o.height);
              return Hu(n.x + 4, o.y, n.width - 8, r)
          },
          parts: ut(ut({}, t.parts), {
              overflow: {
                  dom: {
                      tag: "div",
                      classes: ["tox-toolbar__overflow"],
                      attributes: i.attributes
                  }
              }
          }),
          components: [n],
          markers: {
              overflowToggledClass: "tox-tbtn--enabled"
          }
      }))
  }, $T = function(t) {
      var n = WT.parts.primary({
          dom: {
              tag: "div",
              classes: ["tox-toolbar__primary"]
          }
      })
        , e = WT.parts.overflow({
          dom: {
              tag: "div",
              classes: ["tox-toolbar__overflow"]
          }
      })
        , o = KT(t);
      return WT.sketch(ut(ut({}, o), {
          components: [n, e],
          markers: {
              openClass: "tox-toolbar__overflow--open",
              closedClass: "tox-toolbar__overflow--closed",
              growingClass: "tox-toolbar__overflow--growing",
              shrinkingClass: "tox-toolbar__overflow--shrinking",
              overflowToggledClass: "tox-tbtn--enabled"
          },
          onOpened: function(t) {
              t.getSystem().broadcastOn([GT()], {
                  type: "opened"
              })
          },
          onClosed: function(t) {
              t.getSystem().broadcastOn([GT()], {
                  type: "closed"
              })
          }
      }))
  }, QT = function(t) {
      var n = t.cyclicKeying ? "cyclic" : "acyclic";
      return eT.sketch({
          uid: t.uid,
          dom: {
              tag: "div",
              classes: ["tox-toolbar"].concat(t.type === rh.scrolling ? ["tox-toolbar--scrolling"] : [])
          },
          components: [eT.parts.groups({})],
          toolbarBehaviours: qT(t, n)
      })
  }, ZT = fn([Un("type"), jn("items", mn([Sn([Un("name"), qn("items", Rn)]), Rn]))].concat(Up)), tE = [Qn("text"), Qn("tooltip"), Qn("icon"), Gn("fetch"), ae("onSetup", function() {
      return $
  })], nE = fn(S([Un("type")], tE)), eE = function(t) {
      return _n("menubutton", nE, t)
  }, oE = fn([Un("type"), Qn("tooltip"), Qn("icon"), Qn("text"), Zn("select"), Gn("fetch"), ae("onSetup", function() {
      return $
  }), ie("presets", "normal", ["normal", "color", "listpreview"]), ne("columns", 1), Gn("onAction"), Gn("onItemAction")]), rE = /* */
  Object.freeze({
      __proto__: null,
      events: function(i, u) {
          var r = function(o, r) {
              i.updateState.each(function(t) {
                  var n = t(o, r);
                  u.set(n)
              }),
              i.renderComponents.each(function(t) {
                  var n = t(r, u.get())
                    , e = V(n, o.getSystem().build);
                  el(o, e)
              })
          };
          return Zo([er(Oo(), function(t, n) {
              var e, o = n;
              o.universal || (e = i.channel,
              M(o.channels, e) && r(t, o.data))
          }), sr(function(n, t) {
              i.initialData.each(function(t) {
                  r(n, t)
              })
          })])
      }
  }), iE = /* */
  Object.freeze({
      __proto__: null,
      getState: function(t, n, e) {
          return e
      }
  }), uE = [Ln("channel"), Kn("renderComponents"), Kn("updateState"), Kn("initialData")], aE = ac({
      fields: uE,
      name: "reflecting",
      active: rE,
      apis: iE,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function() {
              var n = fe(st.none());
              return {
                  readState: function() {
                      return n.get().fold(function() {
                          return "none"
                      }, function(t) {
                          return t
                      })
                  },
                  get: function() {
                      return n.get()
                  },
                  set: function(t) {
                      return n.set(t)
                  },
                  clear: function() {
                      return n.set(st.none())
                  }
              }
          }
      })
  }), cE = at([Ln("toggleClass"), Ln("fetch"), ha("onExecute"), ne("getHotspot", st.some), ne("getAnchorOverrides", at({})), Wc(), ha("onItemExecute"), Kn("lazySink"), Ln("dom"), ga("onOpen"), Ll("splitDropdownBehaviours", [zx, ug, vg]), ne("matchWidth", !1), ne("useMinWidth", !1), ne("eventOrder", {}), Kn("role")].concat($x())), sE = vf({
      factory: mp,
      schema: [Ln("dom")],
      name: "arrow",
      defaults: function() {
          return {
              buttonBehaviours: ic([vg.revoke()])
          }
      },
      overrides: function(n) {
          return {
              dom: {
                  tag: "span",
                  attributes: {
                      role: "presentation"
                  }
              },
              action: function(t) {
                  t.getSystem().getByUid(n.uid).each(Ko)
              },
              buttonBehaviours: ic([Dg.config({
                  toggleOnExecute: !1,
                  toggleClass: n.toggleClass
              })])
          }
      }
  }), lE = vf({
      factory: mp,
      schema: [Ln("dom")],
      name: "button",
      defaults: function() {
          return {
              buttonBehaviours: ic([vg.revoke()])
          }
      },
      overrides: function(e) {
          return {
              dom: {
                  tag: "span",
                  attributes: {
                      role: "presentation"
                  }
              },
              action: function(n) {
                  n.getSystem().getByUid(e.uid).each(function(t) {
                      e.onExecute(t, n)
                  })
              }
          }
      }
  }), fE = at([sE, lE, yf({
      factory: {
          sketch: function(t) {
              return {
                  uid: t.uid,
                  dom: {
                      tag: "span",
                      styles: {
                          display: "none"
                      },
                      attributes: {
                          "aria-hidden": "true"
                      },
                      innerHtml: t.text
                  }
              }
          }
      },
      schema: [Ln("text")],
      name: "aria-descriptor"
  }), bf({
      schema: [fa()],
      name: "menu",
      defaults: function(o) {
          return {
              onExecute: function(n, e) {
                  n.getSystem().getByUid(o.uid).each(function(t) {
                      o.onItemExecute(t, n, e)
                  })
              }
          }
      }
  }), Lx()]), dE = qf({
      name: "SplitDropdown",
      configFields: cE(),
      partFields: fE(),
      factory: function(o, t, n, e) {
          var r, i = function(t) {
              td.getCurrent(t).each(function(t) {
                  fd.highlightFirst(t),
                  ug.focusIn(t)
              })
          }, u = function(t) {
              Gx(o, function(t) {
                  return t
              }, t, e, i, bx.HighlightFirst).get($)
          }, a = function(t) {
              var n = Mf(t, o, "button");
              return Ko(n),
              st.some(!0)
          }, c = ut(ut({}, Zo([sr(function(e, t) {
              Af(e, o, "aria-descriptor").each(function(t) {
                  var n = Kr("aria");
                  zr(t.element, "id", n),
                  zr(e.element, "aria-describedby", n)
              })
          })])), Ag(st.some(u))), s = {
              repositionMenus: function(t) {
                  Dg.isOn(t) && Jx(t)
              }
          };
          return {
              uid: o.uid,
              dom: o.dom,
              components: t,
              apis: s,
              eventOrder: ut(ut({}, o.eventOrder), ((r = {})[_o()] = ["disabling", "toggling", "alloy.base.behaviour"],
              r)),
              events: c,
              behaviours: Ul(o.splitDropdownBehaviours, [zx.config({
                  others: {
                      sandbox: function(t) {
                          var n = Mf(t, o, "arrow");
                          return Kx(o, t, {
                              onOpen: function() {
                                  Dg.on(n),
                                  Dg.on(t)
                              },
                              onClose: function() {
                                  Dg.off(n),
                                  Dg.off(t)
                              }
                          })
                      }
                  }
              }), ug.config({
                  mode: "special",
                  onSpace: a,
                  onEnter: a,
                  onDown: function(t) {
                      return u(t),
                      st.some(!0)
                  }
              }), vg.config({}), Dg.config({
                  toggleOnExecute: !1,
                  aria: {
                      mode: "expanded"
                  }
              })]),
              domModification: {
                  attributes: {
                      role: o.role.getOr("button"),
                      "aria-haspopup": !0
                  }
              }
          }
      },
      apis: {
          repositionMenus: function(t, n) {
              return t.repositionMenus(n)
          }
      }
  }), mE = function(n) {
      return {
          isDisabled: function() {
              return gv.isDisabled(n)
          },
          setDisabled: function(t) {
              return gv.set(n, t)
          }
      }
  }, gE = function(n) {
      return {
          setActive: function(t) {
              Dg.set(n, t)
          },
          isActive: function() {
              return Dg.isOn(n)
          },
          isDisabled: function() {
              return gv.isDisabled(n)
          },
          setDisabled: function(t) {
              return gv.set(n, t)
          }
      }
  }, pE = function(t, n) {
      return t.map(function(t) {
          return {
              "aria-label": n.translate(t),
              title: n.translate(t)
          }
      }).getOr({})
  }, hE = Kr("focus-button"), vE = ["checklist", "ordered-list"], bE = ["indent", "outdent", "table-insert-column-after", "table-insert-column-before", "unordered-list"], yE = function(n, e, t, o, r, i) {
      var u, a = function(t) {
          return tv.isRtl() && M(vE, t) ? t + "-rtl" : t
      }, c = tv.isRtl() && n.exists(function(t) {
          return M(bE, t)
      });
      return {
          dom: {
              tag: "button",
              classes: ["tox-tbtn"].concat(e.isSome() ? ["tox-tbtn--select"] : []).concat(c ? ["tox-tbtn__icon-rtl"] : []),
              attributes: pE(t, i)
          },
          components: Jv([n.map(function(t) {
              return DC(a(t), i.icons)
          }), e.map(function(t) {
              return AC(t, "tox-tbtn", i)
          })]),
          eventOrder: ((u = {})[io()] = ["focusing", "alloy.base.behaviour", "common-button-display-events"],
          u),
          buttonBehaviours: ic([Gv(i.isDisabled), Lv(), dg("common-button-display-events", [er(io(), function(t, n) {
              n.event.prevent(),
              Yo(t, hE)
          })])].concat(o.map(function(t) {
              return aE.config({
                  channel: t,
                  initialData: {
                      icon: n,
                      text: e
                  },
                  renderComponents: function(t, n) {
                      return Jv([t.icon.map(function(t) {
                          return DC(a(t), i.icons)
                      }), t.text.map(function(t) {
                          return AC(t, "tox-tbtn", i)
                      })])
                  }
              })
          }).toArray()).concat(r.getOr([])))
      }
  }, xE = function(t, n, e) {
      var o, r = fe($), i = yE(t.icon, t.text, t.tooltip, st.none(), st.none(), e);
      return mp.sketch({
          dom: i.dom,
          components: i.components,
          eventOrder: FC,
          buttonBehaviours: ic([dg("toolbar-button-events", [(o = {
              onAction: t.onAction,
              getApi: n.getApi
          },
          dr(function(n, t) {
              Xv(o, n)(function(t) {
                  qo(n, MC, {
                      buttonApi: t
                  }),
                  o.onAction(t)
              })
          })), Yv(n, r), qv(n, r)]), Gv(function() {
              return t.disabled || e.isDisabled()
          }), Lv()].concat(n.toolbarButtonBehaviours))
      })
  }, wE = function(t, n, e) {
      return xE(t, {
          toolbarButtonBehaviours: [].concat(0 < e.length ? [dg("toolbarButtonWith", e)] : []),
          getApi: mE,
          onSetup: t.onSetup
      }, n)
  }, SE = function(t, n, e) {
      return zt(xE(t, {
          toolbarButtonBehaviours: [fg.config({}), Dg.config({
              toggleClass: "tox-tbtn--enabled",
              aria: {
                  mode: "pressed"
              },
              toggleOnExecute: !1
          })].concat(0 < e.length ? [dg("toolbarToggleButtonWith", e)] : []),
          getApi: gE,
          onSetup: t.onSetup
      }, n))
  }, kE = function(n, t) {
      var e, o, r, i, u = Kr("channel-update-split-dropdown-display"), a = function(e) {
          return {
              isDisabled: function() {
                  return gv.isDisabled(e)
              },
              setDisabled: function(t) {
                  return gv.set(e, t)
              },
              setIconFill: function(t, n) {
                  Ku(e.element, 'svg path[id="' + t + '"], rect[id="' + t + '"]').each(function(t) {
                      zr(t, "fill", n)
                  })
              },
              setIconStroke: function(t, n) {
                  Ku(e.element, 'svg path[id="' + t + '"], rect[id="' + t + '"]').each(function(t) {
                      zr(t, "stroke", n)
                  })
              },
              setActive: function(n) {
                  zr(e.element, "aria-pressed", n),
                  Ku(e.element, "span").each(function(t) {
                      e.getSystem().getByDom(t).each(function(t) {
                          return Dg.set(t, n)
                      })
                  })
              },
              isActive: function() {
                  return Ku(e.element, "span").exists(function(t) {
                      return e.getSystem().getByDom(t).exists(Dg.isOn)
                  })
              }
          }
      }, c = fe($), s = {
          getApi: a,
          onSetup: n.onSetup
      };
      return dE.sketch({
          dom: {
              tag: "div",
              classes: ["tox-split-button"],
              attributes: ut({
                  "aria-pressed": !1
              }, pE(n.tooltip, t.providers))
          },
          onExecute: function(t) {
              n.onAction(a(t))
          },
          onItemExecute: function(t, n, e) {},
          splitDropdownBehaviours: ic([Wv(t.providers.isDisabled), Lv(), dg("split-dropdown-events", [er(hE, vg.focus), Yv(s, c), qv(s, c)]), nw.config({})]),
          eventOrder: ((e = {})[Po()] = ["alloy.base.behaviour", "split-dropdown-events"],
          e),
          toggleClass: "tox-tbtn--enabled",
          lazySink: t.getSink,
          fetch: (o = a,
          r = n,
          i = t.providers,
          function(n) {
              return Ox(function(t) {
                  return r.fetch(t)
              }).map(function(t) {
                  return st.from(hy(zt(Jb(Kr("menu-value"), t, function(t) {
                      r.onItemAction(o(n), t)
                  }, r.columns, r.presets, uh.CLOSE_ON_EXECUTE, r.select.getOr(function() {
                      return !1
                  }), i), {
                      movement: Qb(r.columns, r.presets),
                      menuBehaviours: Wh("auto" !== r.columns ? [] : [sr(function(o, t) {
                          jh(o, 4, vh(r.presets)).each(function(t) {
                              var n = t.numRows
                                , e = t.numColumns;
                              ug.setGridSize(o, n, e)
                          })
                      })])
                  })))
              })
          }
          ),
          parts: {
              menu: wh(0, n.columns, n.presets)
          },
          components: [dE.parts.button(yE(n.icon, n.text, st.none(), st.some(u), st.some([Dg.config({
              toggleClass: "tox-tbtn--enabled",
              toggleOnExecute: !1
          })]), t.providers)), dE.parts.arrow({
              dom: {
                  tag: "button",
                  classes: ["tox-tbtn", "tox-split-button__chevron"],
                  innerHtml: hp("chevron-down", t.providers.icons)
              },
              buttonBehaviours: ic([Wv(t.providers.isDisabled), Lv()])
          }), dE.parts["aria-descriptor"]({
              text: t.providers.translate("To open the popup, press Shift+Enter")
          })]
      })
  }, CE = function(i, u) {
      return er(MC, function(t, n) {
          var e, o = i.get(t), r = (e = o,
          {
              hide: function() {
                  return Yo(e, Bo())
              },
              getValue: function() {
                  return Nl.getValue(e)
              }
          });
          u.onAction(r, n.event.buttonApi)
      })
  }, OE = function(t, n, e) {
      var o, r, i, u, a, c, s, l, f, d, m, g, p = {
          backstage: {
              shared: {
                  providers: e
              }
          }
      };
      return "contextformtogglebutton" === n.type ? (s = t,
      f = p,
      (d = (l = n).original).primary,
      m = w(d, ["primary"]),
      g = Tn(qp(ut(ut({}, m), {
          type: "togglebutton",
          onAction: function() {}
      }))),
      SE(g, f.backstage.shared.providers, [CE(s, l)])) : (o = t,
      i = p,
      (u = (r = n).original).primary,
      a = w(u, ["primary"]),
      c = Tn(Gp(ut(ut({}, a), {
          type: "button",
          onAction: function() {}
      }))),
      wE(c, i.backstage.shared.providers, [CE(o, r)]))
  }, _E = function(t, n) {
      var e, o, r, i, u = t.label.fold(function() {
          return {}
      }, function(t) {
          return {
              "aria-label": t
          }
      }), a = gp(px.sketch({
          inputClasses: ["tox-toolbar-textfield", "tox-toolbar-nav-js"],
          data: t.initValue(),
          inputAttributes: u,
          selectOnFocus: !0,
          inputBehaviours: ic([ug.config({
              mode: "special",
              onEnter: function(t) {
                  return c.findPrimary(t).map(function(t) {
                      return Ko(t),
                      !0
                  })
              },
              onLeft: function(t, n) {
                  return n.cut(),
                  st.none()
              },
              onRight: function(t, n) {
                  return n.cut(),
                  st.none()
              }
          })])
      })), c = (e = a,
      o = t.commands,
      r = n,
      i = V(o, function(t) {
          return gp(OE(e, t, r))
      }),
      {
          asSpecs: function() {
              return V(i, function(t) {
                  return t.asSpec()
              })
          },
          findPrimary: function(e) {
              return Z(o, function(t, n) {
                  return t.primary ? st.from(i[n]).bind(function(t) {
                      return t.getOpt(e)
                  }).filter(x(gv.isDisabled)) : st.none()
              })
          }
      });
      return [{
          title: st.none(),
          items: [a.asSpec()]
      }, {
          title: st.none(),
          items: c.asSpecs()
      }]
  }, TE = _E, EE = function(t, n) {
      var e, o, r, i, u, a = Iu(window), c = zu(me.fromDom(t.getContentAreaContainer())), s = Sv(t) || kv(t) || Ov(t), l = (e = c,
      o = a,
      r = Math.max(o.x, e.x),
      i = e.right - r,
      u = o.width - (r - o.x),
      {
          x: r,
          width: Math.min(i, u)
      }), f = l.x, d = l.width;
      if (t.inline && !s)
          return Hu(f, a.y, d, a.height);
      var m = function(t, n, e, o) {
          var r = me.fromDom(t.getContainer())
            , i = Ku(r, ".tox-editor-header").getOr(r)
            , u = zu(i)
            , a = u.y >= n.bottom
            , c = o && !a;
          if (t.inline && c)
              return {
                  y: Math.max(u.bottom, e.y),
                  bottom: e.bottom
              };
          if (t.inline && !c)
              return {
                  y: e.y,
                  bottom: Math.min(u.y, e.bottom)
              };
          var s = zu(r);
          return c ? {
              y: Math.max(u.bottom, e.y),
              bottom: Math.min(s.bottom, e.bottom)
          } : {
              y: Math.max(s.y, e.y),
              bottom: Math.min(u.y, e.bottom)
          }
      }(t, c, a, n.header.isPositionedAtTop())
        , g = m.y
        , p = m.bottom;
      return Hu(f, g, d, p - g)
  }, DE = function(n, t) {
      var e = H(t, function(t) {
          return t.predicate(n.dom)
      })
        , o = P(e, function(t) {
          return "contexttoolbar" === t.type
      });
      return {
          contextToolbars: o.pass,
          contextForms: o.fail
      }
  }, BE = function(t, n, e) {
      var o = DE(t, n);
      if (0 < o.contextForms.length)
          return st.some({
              elem: t,
              toolbars: [o.contextForms[0]]
          });
      var r = DE(t, e);
      if (0 < r.contextForms.length)
          return st.some({
              elem: t,
              toolbars: [r.contextForms[0]]
          });
      if (0 < o.contextToolbars.length || 0 < r.contextToolbars.length) {
          var i = function(t) {
              if (t.length <= 1)
                  return t;
              var n = function(n) {
                  return F(t, function(t) {
                      return t.position === n
                  })
              }
                , e = function(n) {
                  return H(t, function(t) {
                      return t.position === n
                  })
              }
                , o = n("selection")
                , r = n("node");
              if (o || r) {
                  if (r && o) {
                      var i = e("node")
                        , u = V(e("selection"), function(t) {
                          return ut(ut({}, t), {
                              position: "node"
                          })
                      });
                      return i.concat(u)
                  }
                  return e(o ? "selection" : "node")
              }
              return e("line")
          }(o.contextToolbars.concat(r.contextToolbars));
          return st.some({
              elem: t,
              toolbars: i
          })
      }
      return st.none()
  }, AE = function(t, n, i) {
      return t(n) ? st.none() : Ke(n, function(t) {
          var n = DE(t, i.inNodeScope)
            , e = n.contextToolbars
            , o = n.contextForms
            , r = 0 < o.length ? o : function(t) {
              if (t.length <= 1)
                  return t;
              var n = function(n) {
                  return L(t, function(t) {
                      return t.position === n
                  })
              };
              return n("selection").orThunk(function() {
                  return n("node")
              }).orThunk(function() {
                  return n("line")
              }).map(function(t) {
                  return t.position
              }).fold(function() {
                  return []
              }, function(n) {
                  return H(t, function(t) {
                      return t.position === n
                  })
              })
          }(e);
          return 0 < r.length ? st.some({
              elem: t,
              toolbars: r
          }) : st.none()
      }, t)
  }, ME = function(e, r) {
      var t = {}
        , i = []
        , u = []
        , a = {}
        , c = {}
        , o = function(n, e) {
          var o = Tn(_n("ContextForm", nh, e));
          (t[n] = o).launch.map(function(t) {
              a["form:" + n] = ut(ut({}, e.launch), {
                  type: "contextformtogglebutton" === t.type ? "togglebutton" : "button",
                  onAction: function() {
                      r(o)
                  }
              })
          }),
          "editor" === o.scope ? u.push(o) : i.push(o),
          c[n] = o
      }
        , s = function(n, e) {
          _n("ContextToolbar", eh, e).each(function(t) {
              "editor" === e.scope ? u.push(t) : i.push(t),
              c[n] = t
          })
      }
        , n = Ct(e);
      return ft(n, function(t) {
          var n = e[t];
          "contextform" === n.type ? o(t, n) : "contexttoolbar" === n.type && s(t, n)
      }),
      {
          forms: t,
          inNodeScope: i,
          inEditorScope: u,
          lookupTable: c,
          formNavigators: a
      }
  }, FE = Kr("forward-slide"), IE = Kr("backward-slide"), RE = Kr("change-slide-event"), VE = "tox-pop--resizing", PE = function(t, n, e) {
      var u, a, r, c, s, o = e.dataset, i = "basic" === o.type ? function() {
          return V(o.data, function(t) {
              return w_(t, e.isSelectedFor, e.getPreviewFor)
          })
      }
      : o.getData;
      return {
          items: (u = n,
          a = e,
          r = function(t, n, e, o) {
              var r = u.shared.providers.translate(t.title);
              if ("separator" === t.type)
                  return st.some({
                      type: "separator",
                      text: r
                  });
              if ("submenu" !== t.type)
                  return st.some(ut({
                      type: "togglemenuitem",
                      text: r,
                      icon: t.icon,
                      active: t.isSelected(o),
                      disabled: e,
                      onAction: a.onAction(t)
                  }, t.getStylePreview().fold(function() {
                      return {}
                  }, function(t) {
                      return {
                          meta: {
                              style: t
                          }
                      }
                  })));
              var i = U(t.getStyleItems(), function(t) {
                  return c(t, n, o)
              });
              return 0 === n && i.length <= 0 ? st.none() : st.some({
                  type: "nestedmenuitem",
                  text: r,
                  disabled: i.length <= 0,
                  getSubmenuItems: function() {
                      return U(t.getStyleItems(), function(t) {
                          return c(t, n, o)
                      })
                  }
              })
          }
          ,
          c = function(t, n, e) {
              var o = "formatter" === t.type && a.isInvalid(t);
              return 0 === n ? o ? [] : r(t, n, !1, e).toArray() : r(t, n, o, e).toArray()
          }
          ,
          {
              validateItems: s = function(t) {
                  var n = a.getCurrentValue()
                    , e = a.shouldHide ? 0 : 1;
                  return U(t, function(t) {
                      return c(t, e, n)
                  })
              }
              ,
              getFetch: function(r, i) {
                  return function(t, n) {
                      var e = i()
                        , o = s(e);
                      n(jC(o, uh.CLOSE_ON_EXECUTE, r, !1))
                  }
              }
          }),
          getStyleItems: i
      }
  }, HE = function(o, t, n) {
      var e = PE(0, t, n)
        , r = e.items
        , i = e.getStyleItems;
      return VC({
          text: n.icon.isSome() ? st.none() : st.some(""),
          icon: n.icon,
          tooltip: st.from(n.tooltip),
          role: st.none(),
          fetch: r.getFetch(t, i),
          onSetup: function(e) {
              return n.setInitialValue.each(function(t) {
                  return t(e.getComponent())
              }),
              n.nodeChangeHandler.map(function(t) {
                  var n = t(e.getComponent());
                  return o.on("NodeChange", n),
                  function() {
                      o.off("NodeChange", n)
                  }
              }).getOr($)
          },
          getApi: function(t) {
              return {
                  getComponent: function() {
                      return t
                  }
              }
          },
          columns: 1,
          presets: "normal",
          classes: n.icon.isSome() ? [] : ["bespoke"],
          dropdownBehaviours: []
      }, "tox-tbtn", t.shared)
  };
  (DO = EO = EO || {})[DO.SemiColon = 0] = "SemiColon",
  DO[DO.Space = 1] = "Space";
  var zE, NE, LE, jE, UE, WE, GE = function(t, n, e, o) {
      var r, i, u = t.getParam(n, e, "string");
      return {
          type: "basic",
          data: (i = u,
          r = o === EO.SemiColon ? i.replace(/;$/, "").split(";") : i.split(" "),
          V(r, function(t) {
              var n = t
                , e = t
                , o = t.split("=");
              return 1 < o.length && (n = o[0],
              e = o[1]),
              {
                  title: n,
                  format: e
              }
          }))
      }
  }, XE = [{
      title: "Left",
      icon: "align-left",
      format: "alignleft",
      command: "JustifyLeft"
  }, {
      title: "Center",
      icon: "align-center",
      format: "aligncenter",
      command: "JustifyCenter"
  }, {
      title: "Right",
      icon: "align-right",
      format: "alignright",
      command: "JustifyRight"
  }, {
      title: "Justify",
      icon: "align-justify",
      format: "alignjustify",
      command: "JustifyFull"
  }], YE = function(e) {
      var n = function(t) {
          var n = L(XE, function(t) {
              return e.formatter.match(t.format)
          }).fold(function() {
              return "left"
          }, function(t) {
              return t.title.toLowerCase()
          });
          qo(t, RC, {
              icon: "align-" + n
          })
      }
        , t = st.some(function(t) {
          return function() {
              return n(t)
          }
      })
        , o = st.some(n)
        , r = {
          type: "basic",
          data: XE
      };
      return {
          tooltip: "Align",
          icon: st.some("align-left"),
          isSelectedFor: function(t) {
              return function() {
                  return e.formatter.match(t)
              }
          },
          getCurrentValue: st.none,
          getPreviewFor: function(t) {
              return function() {
                  return st.none()
              }
          },
          onAction: function(n) {
              return function() {
                  return L(XE, function(t) {
                      return t.format === n.format
                  }).each(function(t) {
                      return e.execCommand(t.command)
                  })
              }
          },
          setInitialValue: o,
          nodeChangeHandler: t,
          dataset: r,
          shouldHide: !1,
          isInvalid: function(t) {
              return !e.formatter.canApply(t.format)
          }
      }
  }, qE = ["-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"], KE = function(t) {
      var n = t.split(/\s*,\s*/);
      return V(n, function(t) {
          return t.replace(/^['"]+|['"]+$/g, "")
      })
  }, JE = function(t) {
      var n;
      return 0 === t.indexOf("-apple-system") && (n = KE(t.toLowerCase()),
      W(qE, function(t) {
          return -1 < n.indexOf(t.toLowerCase())
      }))
  }, $E = function(r) {
      var i = function() {
          var e = function(t) {
              return t ? KE(t)[0] : ""
          }
            , t = r.queryCommandValue("FontName")
            , n = u.data
            , o = t ? t.toLowerCase() : "";
          return {
              matchOpt: L(n, function(t) {
                  var n = t.format;
                  return n.toLowerCase() === o || e(n).toLowerCase() === e(o).toLowerCase()
              }).orThunk(function() {
                  return JE(o) ? st.from({
                      title: "System Font",
                      format: o
                  }) : st.none()
              }),
              font: t
          }
      }
        , n = function(t) {
          var n = i()
            , e = n.matchOpt
            , o = n.font
            , r = e.fold(function() {
              return o
          }, function(t) {
              return t.title
          });
          qo(t, IC, {
              text: r
          })
      }
        , t = st.some(function(t) {
          return function() {
              return n(t)
          }
      })
        , e = st.some(n)
        , u = GE(r, "font_formats", "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats", EO.SemiColon);
      return {
          tooltip: "Fonts",
          icon: st.none(),
          isSelectedFor: function(n) {
              return function(t) {
                  return t.exists(function(t) {
                      return t.format === n
                  })
              }
          },
          getCurrentValue: function() {
              return i().matchOpt
          },
          getPreviewFor: function(t) {
              return function() {
                  return st.some({
                      tag: "div",
                      styles: -1 === t.indexOf("dings") ? {
                          "font-family": t
                      } : {}
                  })
              }
          },
          onAction: function(t) {
              return function() {
                  r.undoManager.transact(function() {
                      r.focus(),
                      r.execCommand("FontName", !1, t.format)
                  })
              }
          },
          setInitialValue: e,
          nodeChangeHandler: t,
          dataset: u,
          shouldHide: !1,
          isInvalid: function() {
              return !1
          }
      }
  }, QE = {
      "8pt": "1",
      "10pt": "2",
      "12pt": "3",
      "14pt": "4",
      "18pt": "5",
      "24pt": "6",
      "36pt": "7"
  }, ZE = {
      "xx-small": "7pt",
      "x-small": "8pt",
      small: "10pt",
      medium: "12pt",
      large: "14pt",
      "x-large": "18pt",
      "xx-large": "24pt"
  }, tD = function(t, n) {
      return /[0-9.]+px$/.test(t) ? (e = 72 * parseInt(t, 10) / 96,
      o = n || 0,
      r = Math.pow(10, o),
      Math.round(e * r) / r + "pt") : Ft(ZE, t).getOr(t);
      var e, o, r
  }, nD = function(e) {
      var i = function() {
          var o = st.none()
            , r = u.data
            , i = e.queryCommandValue("FontSize");
          if (i)
              for (var t = function(t) {
                  var n = tD(i, t)
                    , e = Ft(QE, n).getOr("");
                  o = L(r, function(t) {
                      return t.format === i || t.format === n || t.format === e
                  })
              }, n = 3; o.isNone() && 0 <= n; n--)
                  t(n);
          return {
              matchOpt: o,
              size: i
          }
      }
        , t = at(st.none)
        , n = function(t) {
          var n = i()
            , e = n.matchOpt
            , o = n.size
            , r = e.fold(function() {
              return o
          }, function(t) {
              return t.title
          });
          qo(t, IC, {
              text: r
          })
      }
        , o = st.some(function(t) {
          return function() {
              return n(t)
          }
      })
        , r = st.some(n)
        , u = GE(e, "fontsize_formats", "8pt 10pt 12pt 14pt 18pt 24pt 36pt", EO.Space);
      return {
          tooltip: "Font sizes",
          icon: st.none(),
          isSelectedFor: function(n) {
              return function(t) {
                  return t.exists(function(t) {
                      return t.format === n
                  })
              }
          },
          getPreviewFor: t,
          getCurrentValue: function() {
              return i().matchOpt
          },
          onAction: function(t) {
              return function() {
                  e.undoManager.transact(function() {
                      e.focus(),
                      e.execCommand("FontSize", !1, t.format)
                  })
              }
          },
          setInitialValue: r,
          nodeChangeHandler: o,
          dataset: u,
          shouldHide: !1,
          isInvalid: function() {
              return !1
          }
      }
  }, eD = function(t, n) {
      var e = n()
        , o = V(e, function(t) {
          return t.format
      });
      return st.from(t.formatter.closest(o)).bind(function(n) {
          return L(e, function(t) {
              return t.format === n
          })
      }).orThunk(function() {
          return Jf(t.formatter.match("p"), {
              title: "Paragraph",
              format: "p"
          })
      })
  }, oD = function(t) {
      var n = fe(st.none())
        , e = function() {
          return n.get().each(t)
      };
      return {
          clear: function() {
              e(),
              n.set(st.none())
          },
          isSet: function() {
              return n.get().isSome()
          },
          set: function(t) {
              e(),
              n.set(st.some(t))
          }
      }
  }, rD = function() {
      return oD(function(t) {
          return t.destroy()
      })
  }, iD = function() {
      return oD(function(t) {
          return t.unbind()
      })
  }, uD = function(o, r) {
      return function(n) {
          var e = iD()
            , t = function() {
              n.setActive(o.formatter.match(r));
              var t = o.formatter.formatChanged(r, n.setActive);
              e.set(t)
          };
          return o.initialized ? t() : o.on("init", t),
          e.clear
      }
  }, aD = function(n) {
      return function(t) {
          return function() {
              n.undoManager.transact(function() {
                  n.focus(),
                  n.execCommand("mceToggleFormat", !1, t.format)
              })
          }
      }
  }, cD = function(e) {
      var n = function(t) {
          var n = eD(e, function() {
              return r.data
          }).fold(function() {
              return "Paragraph"
          }, function(t) {
              return t.title
          });
          qo(t, IC, {
              text: n
          })
      }
        , t = st.some(function(t) {
          return function() {
              return n(t)
          }
      })
        , o = st.some(n)
        , r = GE(e, "block_formats", "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre", EO.SemiColon);
      return {
          tooltip: "Blocks",
          icon: st.none(),
          isSelectedFor: function(t) {
              return function() {
                  return e.formatter.match(t)
              }
          },
          getCurrentValue: st.none,
          getPreviewFor: function(n) {
              return function() {
                  var t = e.formatter.get(n);
                  return st.some({
                      tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                      styles: e.dom.parseStyle(e.formatter.getCssText(n))
                  })
              }
          },
          onAction: aD(e),
          setInitialValue: o,
          nodeChangeHandler: t,
          dataset: r,
          shouldHide: !1,
          isInvalid: function(t) {
              return !e.formatter.canApply(t.format)
          }
      }
  }, sD = function(r, t) {
      var n = function(t) {
          var e = function(t) {
              var n = t.items;
              return n !== undefined && 0 < n.length ? U(n, e) : [{
                  title: t.title,
                  format: t.format
              }]
          }
            , n = U(x_(r), e)
            , o = eD(r, function() {
              return n
          }).fold(function() {
              return "Paragraph"
          }, function(t) {
              return t.title
          });
          qo(t, IC, {
              text: o
          })
      }
        , e = st.some(function(t) {
          return function() {
              return n(t)
          }
      })
        , o = st.some(n);
      return {
          tooltip: "Formats",
          icon: st.none(),
          isSelectedFor: function(t) {
              return function() {
                  return r.formatter.match(t)
              }
          },
          getCurrentValue: st.none,
          getPreviewFor: function(n) {
              return function() {
                  var t = r.formatter.get(n);
                  return t !== undefined ? st.some({
                      tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                      styles: r.dom.parseStyle(r.formatter.getCssText(n))
                  }) : st.none()
              }
          },
          onAction: aD(r),
          setInitialValue: o,
          nodeChangeHandler: e,
          shouldHide: r.getParam("style_formats_autohide", !1, "boolean"),
          isInvalid: function(t) {
              return !r.formatter.canApply(t.format)
          },
          dataset: t
      }
  }, lD = [{
      name: "history",
      items: ["undo", "redo"]
  }, {
      name: "styles",
      items: ["styleselect"]
  }, {
      name: "formatting",
      items: ["bold", "italic"]
  }, {
      name: "alignment",
      items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
  }, {
      name: "indentation",
      items: ["outdent", "indent"]
  }, {
      name: "permanent pen",
      items: ["permanentpen"]
  }, {
      name: "comments",
      items: ["addcomment"]
  }], fD = function(r, i) {
      return function(t, n, e) {
          var o = r(t).mapError(function(t) {
              return Dn(t)
          }).getOrDie();
          return i(o, n, e)
      }
  }, dD = {
      button: fD(Gp, function(t, n) {
          return e = t,
          o = n.backstage.shared.providers,
          wE(e, o, []);
          var e, o
      }),
      togglebutton: fD(qp, function(t, n) {
          return e = t,
          o = n.backstage.shared.providers,
          SE(e, o, []);
          var e, o
      }),
      menubutton: fD(eE, function(t, n) {
          return WC(t, "tox-tbtn", n.backstage, st.none())
      }),
      splitbutton: fD(function(t) {
          return _n("SplitButton", oE, t)
      }, function(t, n) {
          return kE(t, n.backstage.shared)
      }),
      grouptoolbarbutton: fD(function(t) {
          return _n("GroupToolbarButton", ZT, t)
      }, function(t, n, e) {
          var o, r, i, u, a, c, s = e.ui.registry.getAll().buttons, l = ((o = {})[jc] = n.backstage.shared.header.isPositionedAtTop() ? na.TopToBottom : na.BottomToTop,
          o);
          switch (Ev(e)) {
          case rh.floating:
              return r = t,
              i = n.backstage,
              u = function(t) {
                  return hD(e, {
                      buttons: s,
                      toolbar: t,
                      allowToolbarGroups: !1
                  }, n, st.none())
              }
              ,
              a = l,
              c = i.shared,
              vT.sketch({
                  lazySink: c.getSink,
                  fetch: function() {
                      return Ox(function(t) {
                          t(V(u(r.items), YT))
                      })
                  },
                  markers: {
                      toggledClass: "tox-tbtn--enabled"
                  },
                  parts: {
                      button: yE(r.icon, r.text, r.tooltip, st.none(), st.none(), c.providers),
                      toolbar: {
                          dom: {
                              tag: "div",
                              classes: ["tox-toolbar__overflow"],
                              attributes: a
                          }
                      }
                  }
              });
          default:
              throw new Error("Toolbar groups are only supported when using floating toolbar mode")
          }
      }),
      styleSelectButton: function(t, n) {
          return e = t,
          o = n.backstage,
          r = ut({
              type: "advanced"
          }, o.styleselect),
          HE(e, o, sD(e, r));
          var e, o, r
      },
      fontsizeSelectButton: function(t, n) {
          return e = t,
          o = n.backstage,
          HE(e, o, nD(e));
          var e, o
      },
      fontSelectButton: function(t, n) {
          return e = t,
          o = n.backstage,
          HE(e, o, $E(e));
          var e, o
      },
      formatButton: function(t, n) {
          return e = t,
          o = n.backstage,
          HE(e, o, cD(e));
          var e, o
      },
      alignMenuButton: function(t, n) {
          return e = t,
          o = n.backstage,
          HE(e, o, YE(e));
          var e, o
      }
  }, mD = {
      styleselect: dD.styleSelectButton,
      fontsizeselect: dD.fontsizeSelectButton,
      fontselect: dD.fontSelectButton,
      formatselect: dD.formatButton,
      align: dD.alignMenuButton
  }, gD = function(t) {
      var n, e, o, r = t.toolbar, i = t.buttons;
      return !1 === r ? [] : r === undefined || !0 === r ? (e = i,
      o = V(lD, function(t) {
          var n = H(t.items, function(t) {
              return It(e, t) || It(mD, t)
          });
          return {
              name: t.name,
              items: n
          }
      }),
      H(o, function(t) {
          return 0 < t.items.length
      })) : k(r) ? (n = r.split("|"),
      V(n, function(t) {
          return {
              items: t.trim().split(" ")
          }
      })) : T(r, function(t) {
          return It(t, "name") && It(t, "items")
      }) ? r : (console.error("Toolbar type should be string, string[], boolean or ToolbarGroup[]"),
      [])
  }, pD = function(r, n, i, u, a, t) {
      return Ft(n, i.toLowerCase()).orThunk(function() {
          return t.bind(function(t) {
              return Z(t, function(t) {
                  return Ft(n, t + i.toLowerCase())
              })
          })
      }).fold(function() {
          return Ft(mD, i.toLowerCase()).map(function(t) {
              return t(r, a)
          }).orThunk(function() {
              return st.none()
          })
      }, function(t) {
          return "grouptoolbarbutton" !== t.type || u ? (e = a,
          o = r,
          Ft(dD, (n = t).type).fold(function() {
              return console.error("skipping button defined by", n),
              st.none()
          }, function(t) {
              return st.some(t(n, e, o))
          })) : (console.warn("Ignoring the '" + i + "' toolbar button. Group toolbar buttons are only supported when using floating toolbar mode and cannot be nested."),
          st.none());
          var n, e, o
      })
  }, hD = function(e, o, r, i) {
      var t = gD(o)
        , n = V(t, function(t) {
          var n = U(t.items, function(t) {
              return 0 === t.trim().length ? [] : pD(e, o.buttons, t, o.allowToolbarGroups, r, i).toArray()
          });
          return {
              title: st.from(e.translate(t.name)),
              items: n
          }
      });
      return H(n, function(t) {
          return 0 < t.items.length
      })
  }, vD = {
      valignCentre: [],
      alignCentre: [],
      alignLeft: ["tox-pop--align-left"],
      alignRight: ["tox-pop--align-right"],
      right: ["tox-pop--right"],
      left: ["tox-pop--left"],
      bottom: ["tox-pop--bottom"],
      top: ["tox-pop--top"]
  }, bD = {
      maxHeightFunction: Fc(),
      maxWidthFunction: Q_()
  }, yD = {
      onLtr: function() {
          return [ja, Ua, Na, Ha, La, za, lp, fp, cp, up, sp, ap]
      },
      onRtl: function() {
          return [ja, Ua, La, za, Na, Ha, lp, fp, sp, ap, cp, up]
      }
  }, xD = {
      onLtr: function() {
          return [Ua, Ha, za, Na, La, ja, lp, fp, cp, up, sp, ap]
      },
      onRtl: function() {
          return [Ua, za, Ha, La, Na, ja, lp, fp, sp, ap, cp, up]
      }
  }, wD = function(c, t, e, s) {
      var o, r, l = je().deviceType.isTouch, a = gu((o = {
          sink: e,
          onEscape: function() {
              return c.focus(),
              st.some(!0)
          }
      },
      r = fe([]),
      tp.sketch({
          dom: {
              tag: "div",
              classes: ["tox-pop"]
          },
          fireDismissalEventInstead: {
              event: "doNotDismissYet"
          },
          onShow: function(t) {
              r.set([]),
              tp.getContent(t).each(function(t) {
                  nu(t.element, "visibility")
              }),
              Bi(t.element, VE),
              nu(t.element, "width")
          },
          inlineBehaviours: ic([dg("context-toolbar-events", [cr(bo(), function(t, n) {
              Bi(t.element, VE),
              nu(t.element, "width")
          }), er(RE, function(n, e) {
              nu(n.element, "width");
              var t = _u(n.element);
              tp.setContent(n, e.event.contents),
              Ei(n.element, VE);
              var o = _u(n.element);
              qi(n.element, "width", t + "px"),
              tp.getContent(n).each(function(t) {
                  e.event.focus.bind(function(t) {
                      return mc(t),
                      pc(n.element)
                  }).orThunk(function() {
                      return ug.focusIn(t),
                      gc()
                  })
              }),
              dp.setTimeout(function() {
                  qi(n.element, "width", o + "px")
              }, 0)
          }), er(FE, function(t, n) {
              tp.getContent(t).each(function(t) {
                  r.set(r.get().concat([{
                      bar: t,
                      focus: gc()
                  }]))
              }),
              qo(t, RE, {
                  contents: n.event.forwardContents,
                  focus: st.none()
              })
          }), er(IE, function(n, t) {
              J(r.get()).each(function(t) {
                  r.set(r.get().slice(0, r.get().length - 1)),
                  qo(n, RE, {
                      contents: pu(t.bar),
                      focus: t.focus
                  })
              })
          })]), ug.config({
              mode: "special",
              onEscape: function(n) {
                  return J(r.get()).fold(function() {
                      return o.onEscape()
                  }, function(t) {
                      return Yo(n, IE),
                      st.some(!0)
                  })
              }
          })]),
          lazySink: function() {
              return mt.value(o.sink)
          }
      }))), f = function() {
          return EE(c, s.backstage.shared)
      }, u = function() {
          if (l() && s.backstage.isContextMenuOpen())
              return !0;
          var t, n, e, o, r, i, u = (t = m.get().filter(function(t) {
              return Ui(me.fromDom(t))
          }).map(function(t) {
              return t.getBoundingClientRect()
          }).getOrThunk(function() {
              return c.selection.getRng().getBoundingClientRect()
          }),
          n = c.inline ? Au().top : Nu(me.fromDom(c.getBody())).y,
          {
              y: t.top + n,
              bottom: t.bottom + n
          }), a = f();
          return e = u.y,
          o = u.bottom,
          r = a.y,
          i = a.bottom,
          !(Math.max(e, r) <= Math.min(o, i))
      }, n = function() {
          tp.hide(a)
      }, i = function() {
          d.get().each(function(t) {
              var n = a.element;
              nu(n, "display"),
              u() ? qi(n, "display", "none") : Qs.positionWithinBounds(e, t, a, st.some(f()))
          })
      }, d = fe(st.none()), m = fe(st.none()), g = fe(null), p = function(t) {
          return {
              dom: {
                  tag: "div",
                  classes: ["tox-pop__dialog"]
              },
              components: [t],
              behaviours: ic([ug.config({
                  mode: "acyclic"
              }), dg("pop-dialog-wrap-events", [sr(function(t) {
                  c.shortcuts.add("ctrl+F9", "focus statusbar", function() {
                      return ug.focusIn(t)
                  })
              }), lr(function(t) {
                  c.shortcuts.remove("ctrl+F9")
              })])])
          }
      }, h = Lt(function() {
          return ME(t, function(t) {
              var n = v([t]);
              qo(a, FE, {
                  forwardContents: p(n)
              })
          })
      }), v = function(t) {
          var n = c.ui.registry.getAll().buttons
            , e = h()
            , o = ut(ut({}, n), e.formNavigators)
            , r = Ev(c) === rh.scrolling ? rh.scrolling : rh["default"]
            , i = dt(V(t, function(t) {
              return "contexttoolbar" === t.type ? hD(c, {
                  buttons: o,
                  toolbar: t.items,
                  allowToolbarGroups: !1
              }, s, st.some(["form:"])) : (n = t,
              e = s.backstage.shared.providers,
              TE(n, e));
              var n, e
          }));
          return QT({
              type: r,
              uid: Kr("context-toolbar"),
              initGroups: i,
              onEscape: st.none,
              cyclicKeying: !0,
              providers: s.backstage.shared.providers
          })
      };
      c.on("contexttoolbar-show", function(n) {
          var t = h();
          Ft(t.lookupTable, n.toolbarKey).each(function(t) {
              y([t], n.target === c ? st.none() : st.some(n)),
              tp.getContent(a).each(ug.focusIn)
          })
      });
      var b = function(t, n) {
          var e, o, r = "node" === t ? s.backstage.shared.anchors.node(n) : s.backstage.shared.anchors.cursor();
          return zt(r, (e = t,
          o = l(),
          "line" === e ? {
              bubble: Hc(12, 0, vD),
              layouts: {
                  onLtr: function() {
                      return [Wa]
                  },
                  onRtl: function() {
                      return [Ga]
                  }
              },
              overrides: bD
          } : {
              bubble: Hc(0, 12, vD),
              layouts: o ? xD : yD,
              overrides: bD
          }))
      }
        , y = function(t, n) {
          var e, o, r, i;
          w(),
          l() && s.backstage.isContextMenuOpen() || (e = v(t),
          o = n.map(me.fromDom),
          r = b(t[0].position, o),
          d.set(st.some(r)),
          m.set(n),
          i = a.element,
          nu(i, "display"),
          tp.showWithinBounds(a, r, p(e), function() {
              return st.some(f())
          }),
          u() && qi(i, "display", "none"))
      }
        , x = function() {
          var t, n, e, o, r, i, u;
          c.hasFocus() && (t = h(),
          n = t,
          e = c,
          r = me.fromDom(e.getBody()),
          i = function(t) {
              return Ge(t, r)
          }
          ,
          u = me.fromDom(e.selection.getNode()),
          (i(o = u) || Ye(r, o) ? BE(u, n.inNodeScope, n.inEditorScope).orThunk(function() {
              return AE(i, u, n)
          }) : st.none()).fold(function() {
              d.set(st.none()),
              tp.hide(a)
          }, function(t) {
              y(t.toolbars, st.some(t.elem.dom))
          }))
      }
        , w = function() {
          var t = g.get();
          null !== t && (dp.clearTimeout(t),
          g.set(null))
      }
        , S = function(t) {
          w(),
          g.set(t)
      };
      c.on("init", function() {
          c.on(Z_, n),
          c.on("ScrollContent ScrollWindow longpress", i),
          c.on("click keyup focus SetContent ObjectResized ResizeEditor", function() {
              S(dp.setEditorTimeout(c, x, 0))
          }),
          c.on("focusout", function(t) {
              dp.setEditorTimeout(c, function() {
                  pc(e.element).isNone() && pc(a.element).isNone() && (d.set(st.none()),
                  tp.hide(a))
              }, 0)
          }),
          c.on("SwitchMode", function() {
              c.mode.isReadOnly() && (d.set(st.none()),
              tp.hide(a))
          }),
          c.on("NodeChange", function(t) {
              pc(a.element).fold(function() {
                  S(dp.setEditorTimeout(c, x, 0))
              }, function(t) {})
          })
      })
  }, SD = zf, kD = Sf, CD = at([ne("shell", !1), Ln("makeItem"), ne("setupItem", $), Wl("listBehaviours", [fg])]), OD = yf({
      name: "items",
      overrides: function() {
          return {
              behaviours: ic([fg.config({})])
          }
      }
  }), _D = at([OD]), TD = qf({
      name: at("CustomList")(),
      configFields: CD(),
      partFields: _D(),
      factory: function(s, t, n, e) {
          var o = s.shell ? {
              behaviours: [fg.config({})],
              components: []
          } : {
              behaviours: [],
              components: t
          }
            , r = function(t) {
              return s.shell ? st.some(t) : Af(t, s, "items")
          };
          return {
              uid: s.uid,
              dom: s.dom,
              components: o.components,
              behaviours: Ul(s.listBehaviours, o.behaviours),
              apis: {
                  setItems: function(a, c) {
                      r(a).fold(function() {
                          throw console.error("Custom List was defined to not be a shell, but no item container was specified in components"),
                          new Error("Custom List was defined to not be a shell, but no item container was specified in components")
                      }, function(n) {
                          var t = fg.contents(n)
                            , e = c.length
                            , o = e - t.length
                            , r = 0 < o ? I(o, function() {
                              return s.makeItem()
                          }) : []
                            , i = t.slice(e);
                          ft(i, function(t) {
                              return fg.remove(n, t)
                          }),
                          ft(r, function(t) {
                              return fg.append(n, t)
                          });
                          var u = fg.contents(n);
                          ft(u, function(t, n) {
                              s.setupItem(a, t, c[n], n)
                          })
                      })
                  }
              }
          }
      },
      apis: {
          setItems: function(t, n, e) {
              t.setItems(n, e)
          }
      }
  }), ED = $, DD = c, BD = at([]), AD = /* */
  Object.freeze({
      __proto__: null,
      setup: ED,
      isDocked: DD,
      getBehaviours: BD
  }), MD = function(t) {
      return (Zi(t, "position").is("fixed") ? st.none() : Or(t)).orThunk(function() {
          var e = me.fromTag("span");
          return kr(t).bind(function(t) {
              Ar(t, e);
              var n = Or(e);
              return Ir(e),
              n
          })
      })
  }, FD = function(t) {
      return MD(t).map(ku).getOrThunk(function() {
          return wu(0, 0)
      })
  }, ID = Vt([{
      "static": []
  }, {
      absolute: ["positionCss"]
  }, {
      fixed: ["positionCss"]
  }]), RD = function(t, n) {
      var e = t.element;
      Ei(e, n.transitionClass),
      Bi(e, n.fadeOutClass),
      Ei(e, n.fadeInClass),
      n.onShow(t)
  }, VD = function(t, n) {
      var e = t.element;
      Ei(e, n.transitionClass),
      Bi(e, n.fadeInClass),
      Ei(e, n.fadeOutClass),
      n.onHide(t)
  }, PD = function(t, o, r) {
      return W(t, function(t) {
          switch (t) {
          case "bottom":
              return e = r,
              o.bottom <= e.bottom;
          case "top":
              return n = r,
              o.y >= n.y
          }
          var n, e
      })
  }, HD = function(n, t) {
      return t.getInitialPosition().map(function(t) {
          return Hu(t.bounds.x, t.bounds.y, _u(n), bu(n))
      })
  }, zD = function(t, n, e) {
      e.setInitialPosition(st.some({
          style: function(t) {
              var n = {}
                , e = t.dom;
              if (Ii(e))
                  for (var o = 0; o < e.style.length; o++) {
                      var r = e.style.item(o);
                      n[r] = e.style[r]
                  }
              return n
          }(t),
          position: $i(t, "position") || "static",
          bounds: n
      }))
  }, ND = function(e, o, r) {
      return r.getInitialPosition().bind(function(t) {
          switch (r.setInitialPosition(st.none()),
          t.position) {
          case "static":
              return st.some(ID["static"]());
          case "absolute":
              var n = MD(e).map(zu).getOrThunk(function() {
                  return zu(Wi())
              });
              return st.some(ID.absolute(vc("absolute", Ft(t.style, "left").map(function(t) {
                  return o.x - n.x
              }), Ft(t.style, "top").map(function(t) {
                  return o.y - n.y
              }), Ft(t.style, "right").map(function(t) {
                  return n.right - o.right
              }), Ft(t.style, "bottom").map(function(t) {
                  return n.bottom - o.bottom
              }))));
          default:
              return st.none()
          }
      })
  }, LD = function(t, n, e) {
      var o, r, i, u = t.element;
      return Zi(u, "position").is("fixed") ? (r = n,
      HD(o = u, i = e).filter(function(t) {
          return PD(i.getModes(), t, r)
      }).bind(function(t) {
          return ND(o, t, i)
      })) : function(t, n, e) {
          var o = zu(t);
          if (PD(e.getModes(), o, n))
              return st.none();
          zD(t, o, e);
          var r = Lu()
            , i = o.x - r.x
            , u = n.y - r.y
            , a = r.bottom - n.bottom
            , c = o.y <= n.y;
          return st.some(ID.fixed(vc("fixed", st.some(i), c ? st.some(u) : st.none(), st.none(), c ? st.none() : st.some(a))))
      }(u, n, e)
  }, jD = function(n, t) {
      ft(["left", "right", "top", "bottom", "position"], function(t) {
          return nu(n.element, t)
      }),
      t.onUndocked(n)
  }, UD = function(t, n, e) {
      bc(t.element, e),
      ("fixed" === e.position ? n.onDocked : n.onUndocked)(t)
  }, WD = function(i, t, u, a, c) {
      void 0 === c && (c = !1),
      t.contextual.each(function(r) {
          r.lazyContext(i).each(function(t) {
              var n, e, o = (e = a,
              (n = t).y < e.bottom && n.bottom > e.y);
              o !== u.isVisible() && (u.setVisible(o),
              c && !o ? (Mi(i.element, [r.fadeOutClass]),
              r.onHide(i)) : (o ? RD : VD)(i, r))
          })
      })
  }, GD = function(n, e, t) {
      var o, r, i = n.element;
      t.setDocked(!1),
      o = t,
      r = n.element,
      HD(r, o).bind(function(t) {
          return ND(r, t, o)
      }).each(function(t) {
          t.fold(function() {
              return jD(n, e)
          }, function(t) {
              return UD(n, e, t)
          }, $)
      }),
      t.setVisible(!0),
      e.contextual.each(function(t) {
          Fi(i, [t.fadeInClass, t.fadeOutClass, t.transitionClass]),
          t.onShow(n)
      }),
      XD(n, e, t)
  }, XD = function(t, n, e) {
      var o, r, i, u, a;
      t.getSystem().isConnected() && (o = t,
      i = e,
      u = (r = n).lazyViewport(o),
      (a = i.isDocked()) && WD(o, r, i, u),
      LD(o, u, i).each(function(t) {
          i.setDocked(!a),
          t.fold(function() {
              return jD(o, r)
          }, function(t) {
              return UD(o, r, t)
          }, function(t) {
              WD(o, r, i, u, !0),
              UD(o, r, t)
          })
      }))
  }, YD = function(t, n, e) {
      e.isDocked() && GD(t, n, e)
  }, qD = /* */
  Object.freeze({
      __proto__: null,
      refresh: XD,
      reset: YD,
      isDocked: function(t, n, e) {
          return e.isDocked()
      },
      getModes: function(t, n, e) {
          return e.getModes()
      },
      setModes: function(t, n, e, o) {
          return e.setModes(o)
      }
  }), KD = /* */
  Object.freeze({
      __proto__: null,
      events: function(o, r) {
          return Zo([cr(bo(), function(n, e) {
              o.contextual.each(function(t) {
                  Ai(n.element, t.transitionClass) && (Fi(n.element, [t.transitionClass, t.fadeInClass]),
                  (r.isVisible() ? t.onShown : t.onHidden)(n)),
                  e.stop()
              })
          }), er(Ro(), function(t, n) {
              XD(t, o, r)
          }), er(Vo(), function(t, n) {
              YD(t, o, r)
          })])
      }
  }), JD = [te("contextual", [Un("fadeInClass"), Un("fadeOutClass"), Un("transitionClass"), Gn("lazyContext"), ga("onShow"), ga("onShown"), ga("onHide"), ga("onHidden")]), ae("lazyViewport", Lu), ce("modes", ["top", "bottom"], Rn), ga("onDocked"), ga("onUndocked")], $D = ac({
      fields: JD,
      name: "docking",
      active: KD,
      apis: qD,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function(t) {
              var n = fe(!1)
                , e = fe(!0)
                , o = fe(st.none())
                , r = fe(t.modes);
              return di({
                  isDocked: n.get,
                  setDocked: n.set,
                  getInitialPosition: o.get,
                  setInitialPosition: o.set,
                  isVisible: e.get,
                  setVisible: e.set,
                  getModes: r.get,
                  setModes: r.set,
                  readState: function() {
                      return "docked:  " + n.get() + ", visible: " + e.get() + ", modes: " + r.get().join(",")
                  }
              })
          }
      })
  }), QD = {
      fadeInClass: "tox-editor-dock-fadein",
      fadeOutClass: "tox-editor-dock-fadeout",
      transitionClass: "tox-editor-dock-transition"
  }, ZD = "tox-tinymce--toolbar-sticky-on", tB = "tox-tinymce--toolbar-sticky-off", nB = function(r) {
      var i = r.element;
      kr(i).each(function(t) {
          var n, e, o = "padding-" + $D.getModes(r)[0];
          $D.isDocked(r) ? (n = _u(t),
          qi(i, "width", n + "px"),
          qi(t, o, yu(e = i) + (parseInt($i(e, "margin-top"), 10) || 0) + (parseInt($i(e, "margin-bottom"), 10) || 0) + "px")) : (nu(i, "width"),
          nu(t, o))
      })
  }, eB = function(t, n) {
      n ? (Bi(t, QD.fadeOutClass),
      Mi(t, [QD.transitionClass, QD.fadeInClass])) : (Bi(t, QD.fadeInClass),
      Mi(t, [QD.fadeOutClass, QD.transitionClass]))
  }, oB = function(t, n) {
      var e = me.fromDom(t.getContainer());
      n ? (Ei(e, ZD),
      Bi(e, tB)) : (Ei(e, tB),
      Bi(e, ZD))
  }, rB = function(c, t) {
      var n, i = fe(st.none()), o = t.getSink, u = function(n) {
          o().each(function(t) {
              return n(t.element)
          })
      }, e = function(t) {
          c.inline || nB(t),
          oB(c, $D.isDocked(t)),
          t.getSystem().broadcastOn([Sl()], {}),
          o().each(function(t) {
              return t.getSystem().broadcastOn([Sl()], {})
          })
      }, r = c.inline ? [] : [fc.config({
          channels: ((n = {})[GT()] = {
              onReceive: nB
          },
          n)
      })];
      return S([vg.config({}), $D.config({
          contextual: ut({
              lazyContext: function(t) {
                  var n, e, o = yu(t.element), r = c.inline ? c.getContentAreaContainer() : c.getContainer(), i = zu(me.fromDom(r)), u = i.height - o, a = i.y + (n = t,
                  e = "top",
                  M($D.getModes(n), e) ? 0 : o);
                  return st.some(Hu(i.x, a, i.width, u))
              },
              onShow: function() {
                  u(function(t) {
                      return eB(t, !0)
                  })
              },
              onShown: function(r) {
                  u(function(t) {
                      return Fi(t, [QD.transitionClass, QD.fadeInClass])
                  }),
                  i.get().each(function(t) {
                      var n, e, o;
                      n = r.element,
                      o = yr(e = t),
                      gc(o).filter(function(t) {
                          return !Ge(e, t)
                      }).filter(function(t) {
                          return Ge(t, me.fromDom(o.dom.body)) || Ye(n, t)
                      }).each(function() {
                          return mc(e)
                      }),
                      i.set(st.none())
                  })
              },
              onHide: function(t) {
                  var n, e;
                  i.set((n = t.element,
                  e = o,
                  pc(n).orThunk(function() {
                      return e().toOptional().bind(function(t) {
                          return pc(t.element)
                      })
                  }))),
                  u(function(t) {
                      return eB(t, !1)
                  })
              },
              onHidden: function() {
                  u(function(t) {
                      return Fi(t, [QD.transitionClass])
                  })
              }
          }, QD),
          modes: [t.header.getDockingMode()],
          onDocked: e,
          onUndocked: e
      })], r)
  }, iB = /* */
  Object.freeze({
      __proto__: null,
      setup: function(t, n, e) {
          t.inline || (n.header.isPositionedAtTop() || t.on("ResizeEditor", function() {
              e().each($D.reset)
          }),
          t.on("ResizeWindow ResizeEditor", function() {
              e().each(nB)
          }),
          t.on("SkinLoaded", function() {
              e().each(function(t) {
                  $D.isDocked(t) ? $D.reset(t) : $D.refresh(t)
              })
          }),
          t.on("FullscreenStateChanged", function() {
              e().each($D.reset)
          })),
          t.on("AfterScrollIntoView", function(y) {
              e().each(function(t) {
                  $D.refresh(t);
                  var n, e, o, r, i, u, a, c, s, l, f, d, m, g, p, h, v, b = t.element;
                  tm(b) && (n = y,
                  r = yr(e = b),
                  i = r.dom.defaultView.innerHeight,
                  u = Au(r),
                  a = me.fromDom(n.elm),
                  c = Nu(a),
                  s = bu(a),
                  l = c.y,
                  f = l + s,
                  d = ku(e),
                  m = bu(e),
                  g = d.top,
                  p = g + m,
                  h = Math.abs(g - u.top) < 2,
                  v = Math.abs(p - (u.top + i)) < 2,
                  h && l < p ? Mu(u.left, l - m, r) : v && g < f && (o = l - i + s + m,
                  Mu(u.left, o, r)))
              })
          }),
          t.on("PostRender", function() {
              oB(t, !1)
          })
      },
      isDocked: function(t) {
          return t().map($D.isDocked).getOr(!1)
      },
      getBehaviours: rB
  }), uB = Yf({
      factory: function(n, o) {
          var t = {
              focus: ug.focusIn,
              setMenus: function(t, n) {
                  var e = V(n, function(n) {
                      var t = {
                          type: "menubutton",
                          text: n.text,
                          fetch: function(t) {
                              t(n.getItems())
                          }
                      }
                        , e = eE(t).mapError(function(t) {
                          return Dn(t)
                      }).getOrDie();
                      return WC(e, "tox-mbtn", o.backstage, st.some("menuitem"))
                  });
                  fg.set(t, e)
              }
          };
          return {
              uid: n.uid,
              dom: n.dom,
              components: [],
              behaviours: ic([fg.config({}), dg("menubar-events", [sr(function(t) {
                  n.onSetup(t)
              }), er(so(), function(e, t) {
                  Ku(e.element, ".tox-mbtn--active").each(function(n) {
                      Ju(t.event.target, ".tox-mbtn").each(function(t) {
                          Ge(n, t) || e.getSystem().getByDom(n).each(function(n) {
                              e.getSystem().getByDom(t).each(function(t) {
                                  tw.expand(t),
                                  tw.close(n),
                                  vg.focus(t)
                              })
                          })
                      })
                  })
              }), er(Lo(), function(e, t) {
                  t.event.prevFocus.bind(function(t) {
                      return e.getSystem().getByDom(t).toOptional()
                  }).each(function(n) {
                      t.event.newFocus.bind(function(t) {
                          return e.getSystem().getByDom(t).toOptional()
                      }).each(function(t) {
                          tw.isOpen(n) && (tw.expand(t),
                          tw.close(n))
                      })
                  })
              })]), ug.config({
                  mode: "flow",
                  selector: ".tox-mbtn",
                  onEscape: function(t) {
                      return n.onEscape(t),
                      st.some(!0)
                  }
              }), Jy.config({})]),
              apis: t,
              domModification: {
                  attributes: {
                      role: "menubar"
                  }
              }
          }
      },
      name: "silver.Menubar",
      configFields: [Ln("dom"), Ln("uid"), Ln("onEscape"), Ln("backstage"), ne("onSetup", $)],
      apis: {
          focus: function(t, n) {
              t.focus(n)
          },
          setMenus: function(t, n, e) {
              t.setMenus(n, e)
          }
      }
  }), aB = "container", cB = [Ll("slotBehaviours", [])], sB = function(t) {
      return "<alloy.field." + t + ">"
  }, lB = function(r, t) {
      var e, n = function(t) {
          return Rf(r)
      }, o = function(e, o) {
          return function(t, n) {
              return Af(t, r, n).map(function(t) {
                  return e(t, n)
              }).getOr(o)
          }
      }, i = function(t, n) {
          return "true" !== Nr(t.element, "aria-hidden")
      }, u = o(i, !1), a = o(function(t, n) {
          var e;
          i(t) && (e = t.element,
          qi(e, "display", "none"),
          zr(e, "aria-hidden", "true"),
          qo(t, jo(), {
              name: n,
              visible: !1
          }))
      }), c = function(n, t) {
          ft(t, function(t) {
              return e(n, t)
          })
      }, s = o(function(t, n) {
          var e;
          i(t) || (e = t.element,
          nu(e, "display"),
          Ur(e, "aria-hidden"),
          qo(t, jo(), {
              name: n,
              visible: !0
          }))
      }), l = {
          getSlotNames: n,
          getSlot: function(t, n) {
              return Af(t, r, n)
          },
          isShowing: u,
          hideSlot: e = a,
          hideAllSlots: function(t) {
              return c(t, n())
          },
          showSlot: s
      };
      return {
          uid: r.uid,
          dom: r.dom,
          components: t,
          behaviours: jl(r.slotBehaviours),
          apis: l
      }
  }, fB = Tt({
      getSlotNames: function(t, n) {
          return t.getSlotNames(n)
      },
      getSlot: function(t, n, e) {
          return t.getSlot(n, e)
      },
      isShowing: function(t, n, e) {
          return t.isShowing(n, e)
      },
      hideSlot: function(t, n, e) {
          return t.hideSlot(n, e)
      },
      hideAllSlots: function(t, n) {
          return t.hideAllSlots(n)
      },
      showSlot: function(t, n, e) {
          return t.showSlot(n, e)
      }
  }, li), dB = ut(ut({}, fB), {
      sketch: function(t) {
          var e, n = (e = [],
          {
              slot: function(t, n) {
                  return e.push(t),
                  _f(aB, sB(t), n)
              },
              record: function() {
                  return e
              }
          }), o = t(n), r = n.record(), i = V(r, function(t) {
              return vf({
                  name: t,
                  pname: sB(t)
              })
          });
          return Lf(aB, cB, i, lB, o)
      }
  }), mB = fn([Qn("icon"), Qn("tooltip"), ae("onShow", $), ae("onHide", $), ae("onSetup", function() {
      return $
  })]), gB = function(t) {
      return {
          element: function() {
              return t.element.dom
          }
      }
  }, pB = function(e, o) {
      var r = V(Ct(o), function(t) {
          var n = o[t]
            , e = Tn(_n("sidebar", mB, n));
          return {
              name: t,
              getApi: gB,
              onSetup: e.onSetup,
              onShow: e.onShow,
              onHide: e.onHide
          }
      });
      return V(r, function(t) {
          var n = fe($);
          return e.slot(t.name, {
              dom: {
                  tag: "div",
                  classes: ["tox-sidebar__pane"]
              },
              behaviours: Wh([Yv(t, n), qv(t, n), er(jo(), function(n, t) {
                  var e = t.event;
                  L(r, function(t) {
                      return t.name === e.name
                  }).each(function(t) {
                      (e.visible ? t.onShow : t.onHide)(t.getApi(n))
                  })
              })])
          })
      })
  }, hB = function(t, e) {
      td.getCurrent(t).each(function(t) {
          return fg.set(t, [(n = e,
          dB.sketch(function(t) {
              return {
                  dom: {
                      tag: "div",
                      classes: ["tox-sidebar__pane-container"]
                  },
                  components: pB(t, n),
                  slotBehaviours: Wh([sr(function(t) {
                      return dB.hideAllSlots(t)
                  })])
              }
          }))]);
          var n
      })
  }, vB = function(t) {
      return td.getCurrent(t).bind(function(t) {
          return zT.isGrowing(t) || zT.hasGrown(t) ? td.getCurrent(t).bind(function(n) {
              return L(dB.getSlotNames(n), function(t) {
                  return dB.isShowing(n, t)
              })
          }) : st.none()
      })
  }, bB = Kr("FixSizeEvent"), yB = Kr("AutoSizeEvent"), xB = function(t) {
      var n, e, o, r = me.fromHtml(t), i = _r(r), u = (e = (n = r).dom.attributes !== undefined ? n.dom.attributes : [],
      N(e, function(t, n) {
          var e;
          return "class" === n.name ? t : ut(ut({}, t), ((e = {})[n.name] = n.value,
          e))
      }, {})), a = (o = r,
      Array.prototype.slice.call(o.dom.classList, 0)), c = 0 === i.length ? {} : {
          innerHtml: Vr(r)
      };
      return ut({
          tag: mr(r),
          classes: a,
          attributes: u
      }, c)
  }, wB = function(t, n, e) {
      var o = t.element;
      !0 === n ? (fg.set(t, [{
          dom: {
              tag: "div",
              attributes: {
                  "aria-label": e.translate("Loading...")
              },
              classes: ["tox-throbber__busy-spinner"]
          },
          components: [{
              dom: xB('<div class="tox-spinner"><div></div><div></div><div></div></div>')
          }],
          behaviours: ic([ug.config({
              mode: "special",
              onTab: function() {
                  return st.some(!0)
              },
              onShiftTab: function() {
                  return st.some(!0)
              }
          }), vg.config({})])
      }]),
      nu(o, "display"),
      Ur(o, "aria-hidden")) : (fg.set(t, []),
      qi(o, "display", "none"),
      zr(o, "aria-hidden", "true"))
  }, SB = kD.optional({
      factory: uB,
      name: "menubar",
      schema: [Ln("backstage")]
  }), kB = kD.optional({
      factory: {
          sketch: function(t) {
              return TD.sketch({
                  uid: t.uid,
                  dom: t.dom,
                  listBehaviours: ic([ug.config({
                      mode: "acyclic",
                      selector: ".tox-toolbar"
                  })]),
                  makeItem: function() {
                      return QT({
                          type: t.type,
                          uid: Kr("multiple-toolbar-item"),
                          cyclicKeying: !1,
                          initGroups: [],
                          providers: t.providers,
                          onEscape: function() {
                              return t.onEscape(),
                              st.some(!0)
                          }
                      })
                  },
                  setupItem: function(t, n, e, o) {
                      eT.setGroups(n, e)
                  },
                  shell: !0
              })
          }
      },
      name: "multiple-toolbar",
      schema: [Ln("dom"), Ln("onEscape")]
  }), CB = kD.optional({
      factory: {
          sketch: function(t) {
              var n;
              return ((n = t).type === rh.sliding ? $T : n.type === rh.floating ? JT : QT)({
                  type: t.type,
                  uid: t.uid,
                  onEscape: function() {
                      return t.onEscape(),
                      st.some(!0)
                  },
                  cyclicKeying: !1,
                  initGroups: [],
                  getSink: t.getSink,
                  providers: t.providers,
                  moreDrawerData: {
                      lazyToolbar: t.lazyToolbar,
                      lazyMoreButton: t.lazyMoreButton,
                      lazyHeader: t.lazyHeader
                  },
                  attributes: t.attributes
              })
          }
      },
      name: "toolbar",
      schema: [Ln("dom"), Ln("onEscape"), Ln("getSink")]
  }), OB = kD.optional({
      factory: {
          sketch: function(t) {
              var n = t.editor
                , e = t.sticky ? rB : BD;
              return {
                  uid: t.uid,
                  dom: t.dom,
                  components: t.components,
                  behaviours: ic(e(n, t.sharedBackstage))
              }
          }
      },
      name: "header",
      schema: [Ln("dom")]
  }), _B = kD.optional({
      name: "socket",
      schema: [Ln("dom")]
  }), TB = kD.optional({
      factory: {
          sketch: function(t) {
              return {
                  uid: t.uid,
                  dom: {
                      tag: "div",
                      classes: ["tox-sidebar"],
                      attributes: {
                          role: "complementary"
                      }
                  },
                  components: [{
                      dom: {
                          tag: "div",
                          classes: ["tox-sidebar__slider"]
                      },
                      components: [],
                      behaviours: ic([Jy.config({}), vg.config({}), zT.config({
                          dimension: {
                              property: "width"
                          },
                          closedClass: "tox-sidebar--sliding-closed",
                          openClass: "tox-sidebar--sliding-open",
                          shrinkingClass: "tox-sidebar--sliding-shrinking",
                          growingClass: "tox-sidebar--sliding-growing",
                          onShrunk: function(t) {
                              td.getCurrent(t).each(dB.hideAllSlots),
                              Yo(t, yB)
                          },
                          onGrown: function(t) {
                              Yo(t, yB)
                          },
                          onStartGrow: function(t) {
                              qo(t, bB, {
                                  width: Zi(t.element, "width").getOr("")
                              })
                          },
                          onStartShrink: function(t) {
                              qo(t, bB, {
                                  width: _u(t.element) + "px"
                              })
                          }
                      }), fg.config({}), td.config({
                          find: function(t) {
                              var n = fg.contents(t);
                              return K(n)
                          }
                      })])
                  }],
                  behaviours: ic([rk(0), dg("sidebar-sliding-events", [er(bB, function(t, n) {
                      qi(t.element, "width", n.event.width)
                  }), er(yB, function(t, n) {
                      nu(t.element, "width")
                  })])])
              }
          }
      },
      name: "sidebar",
      schema: [Ln("dom")]
  }), EB = kD.optional({
      factory: {
          sketch: function(t) {
              return {
                  uid: t.uid,
                  dom: {
                      tag: "div",
                      attributes: {
                          "aria-hidden": "true"
                      },
                      classes: ["tox-throbber"],
                      styles: {
                          display: "none"
                      }
                  },
                  behaviours: ic([fg.config({})]),
                  components: []
              }
          }
      },
      name: "throbber",
      schema: [Ln("dom")]
  }), DB = qf({
      name: "OuterContainer",
      factory: function(e, t, n) {
          var o = {
              getSocket: function(t) {
                  return SD.getPart(t, e, "socket")
              },
              setSidebar: function(t, n) {
                  SD.getPart(t, e, "sidebar").each(function(t) {
                      return hB(t, n)
                  })
              },
              toggleSidebar: function(t, o) {
                  SD.getPart(t, e, "sidebar").each(function(t) {
                      return n = t,
                      e = o,
                      void td.getCurrent(n).each(function(n) {
                          td.getCurrent(n).each(function(t) {
                              zT.hasGrown(n) ? dB.isShowing(t, e) ? zT.shrink(n) : (dB.hideAllSlots(t),
                              dB.showSlot(t, e)) : (dB.hideAllSlots(t),
                              dB.showSlot(t, e),
                              zT.grow(n))
                          })
                      });
                      var n, e
                  })
              },
              whichSidebar: function(t) {
                  return SD.getPart(t, e, "sidebar").bind(vB).getOrNull()
              },
              getHeader: function(t) {
                  return SD.getPart(t, e, "header")
              },
              getToolbar: function(t) {
                  return SD.getPart(t, e, "toolbar")
              },
              setToolbar: function(t, n) {
                  SD.getPart(t, e, "toolbar").each(function(t) {
                      t.getApis().setGroups(t, n)
                  })
              },
              setToolbars: function(t, n) {
                  SD.getPart(t, e, "multiple-toolbar").each(function(t) {
                      TD.setItems(t, n)
                  })
              },
              refreshToolbar: function(t) {
                  SD.getPart(t, e, "toolbar").each(function(t) {
                      return t.getApis().refresh(t)
                  })
              },
              toggleToolbarDrawer: function(t) {
                  SD.getPart(t, e, "toolbar").each(function(n) {
                      var t, e;
                      t = n.getApis().toggle,
                      e = function(t) {
                          return t(n)
                      }
                      ,
                      t !== undefined && null !== t ? st.some(e(t)) : st.none()
                  })
              },
              isToolbarDrawerToggled: function(t) {
                  return SD.getPart(t, e, "toolbar").bind(function(n) {
                      return st.from(n.getApis().isOpen).map(function(t) {
                          return t(n)
                      })
                  }).getOr(!1)
              },
              getThrobber: function(t) {
                  return SD.getPart(t, e, "throbber")
              },
              focusToolbar: function(t) {
                  SD.getPart(t, e, "toolbar").orThunk(function() {
                      return SD.getPart(t, e, "multiple-toolbar")
                  }).each(function(t) {
                      ug.focusIn(t)
                  })
              },
              setMenubar: function(t, n) {
                  SD.getPart(t, e, "menubar").each(function(t) {
                      uB.setMenus(t, n)
                  })
              },
              focusMenubar: function(t) {
                  SD.getPart(t, e, "menubar").each(function(t) {
                      uB.focus(t)
                  })
              }
          };
          return {
              uid: e.uid,
              dom: e.dom,
              components: t,
              apis: o,
              behaviours: e.behaviours
          }
      },
      configFields: [Ln("dom"), Ln("behaviours")],
      partFields: [OB, SB, CB, kB, _B, TB, EB],
      apis: {
          getSocket: function(t, n) {
              return t.getSocket(n)
          },
          setSidebar: function(t, n, e) {
              t.setSidebar(n, e)
          },
          toggleSidebar: function(t, n, e) {
              t.toggleSidebar(n, e)
          },
          whichSidebar: function(t, n) {
              return t.whichSidebar(n)
          },
          getHeader: function(t, n) {
              return t.getHeader(n)
          },
          getToolbar: function(t, n) {
              return t.getToolbar(n)
          },
          setToolbar: function(t, n, e) {
              var o = V(e, YT);
              t.setToolbar(n, o)
          },
          setToolbars: function(t, n, e) {
              var o = V(e, function(t) {
                  return V(t, YT)
              });
              t.setToolbars(n, o)
          },
          refreshToolbar: function(t, n) {
              return t.refreshToolbar(n)
          },
          toggleToolbarDrawer: function(t, n) {
              t.toggleToolbarDrawer(n)
          },
          isToolbarDrawerToggled: function(t, n) {
              return t.isToolbarDrawerToggled(n)
          },
          getThrobber: function(t, n) {
              return t.getThrobber(n)
          },
          setMenubar: function(t, n, e) {
              t.setMenubar(n, e)
          },
          focusMenubar: function(t, n) {
              t.focusMenubar(n)
          },
          focusToolbar: function(t, n) {
              t.focusToolbar(n)
          }
      }
  }), BB = {
      file: {
          title: "File",
          items: "newdocument restoredraft | preview | export print | deleteallconversations"
      },
      edit: {
          title: "Edit",
          items: "undo redo | cut copy paste pastetext | selectall | searchreplace"
      },
      view: {
          title: "View",
          items: "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
      },
      insert: {
          title: "Insert",
          items: "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
      },
      format: {
          title: "Format",
          items: "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat"
      },
      tools: {
          title: "Tools",
          items: "spellchecker spellcheckerlanguage | a11ycheck code wordcount"
      },
      table: {
          title: "Table",
          items: "inserttable | cell row column | advtablesort | tableprops deletetable"
      },
      help: {
          title: "Help",
          items: "help"
      }
  }, AB = function(t) {
      return "string" == typeof t ? t.split(" ") : t
  }, MB = function(i, u) {
      var a = ut(ut({}, BB), u.menus)
        , n = 0 < Ct(u.menus).length
        , t = u.menubar === undefined || !0 === u.menubar ? AB("file edit view insert format tools table help") : AB(!1 === u.menubar ? "" : u.menubar)
        , e = H(t, function(t) {
          return n && u.menus.hasOwnProperty(t) && u.menus[t].hasOwnProperty("items") || BB.hasOwnProperty(t)
      })
        , o = V(e, function(t) {
          var n, e, o, r = a[t];
          return n = {
              title: r.title,
              items: AB(r.items)
          },
          e = u,
          o = i.getParam("removed_menuitems", "").split(/[ ,]/),
          {
              text: n.title,
              getItems: function() {
                  return U(n.items, function(t) {
                      var n = t.toLowerCase();
                      return 0 === n.trim().length || F(o, function(t) {
                          return t === n
                      }) ? [] : "separator" === n || "|" === n ? [{
                          type: "separator"
                      }] : e.menuItems[n] ? [e.menuItems[n]] : []
                  })
              }
          }
      });
      return H(o, function(t) {
          return 0 < t.getItems().length && F(t.getItems(), function(t) {
              return "separator" !== t.type
          })
      })
  }, FB = function(t) {
      var n = function() {
          t._skinLoaded = !0,
          t.fire("SkinLoaded")
      };
      return function() {
          t.initialized ? n() : t.on("init", n)
      }
  }, IB = function(n, e) {
      return function() {
          return t = {
              message: e
          },
          n.fire("SkinLoadError", t);
          var t
      }
  }, RB = function(e, o, r) {
      return new Fp(function(t, n) {
          r.load(o, t, n),
          e.on("remove", function() {
              return r.unload(o)
          })
      }
      )
  }, VB = function(t, n) {
      var e;
      return (e = me.fromDom(t.getElement()),
      Ni(e).isSome()) ? RB(t, n + "/skin.shadowdom.min.css", Zh.DOM.styleSheetLoader) : Fp.resolve()
  }, PB = function(t, n) {
      var e, o, r, i, u, a = (r = (e = n).getParam("skin"),
      i = e.getParam("skin_url"),
      !1 !== r && (o = r || "oxide",
      i = i ? e.documentBaseURI.toAbsolute(i) : pv.baseURL + "/skins/ui/" + o),
      i);
      a && n.contentCSS.push(a + (t ? "/content.inline" : "/content") + ".min.css"),
      !1 == (!1 === n.getParam("skin")) && k(a) ? Fp.all([RB(u = n, a + "/skin.min.css", u.ui.styleSheetLoader), VB(n, a)]).then(FB(n), IB(n, "Skin could not be loaded")) : FB(n)()
  }, HB = y(PB, !1), zB = y(PB, !0), NB = function(e, t, o, r) {
      var n, i = t.outerContainer, u = o.toolbar, a = o.buttons;
      T(u, k) ? (n = u.map(function(t) {
          var n = {
              toolbar: t,
              buttons: a,
              allowToolbarGroups: o.allowToolbarGroups
          };
          return hD(e, n, {
              backstage: r
          }, st.none())
      }),
      DB.setToolbars(i, n)) : DB.setToolbar(i, hD(e, o, {
          backstage: r
      }, st.none()))
  }, LB = je(), jB = LB.os.isiOS() && LB.os.version.major <= 12, UB = function(e, t) {
      var n = e.dom
        , o = e.getWin()
        , r = e.getDoc().documentElement
        , i = fe(wu(o.innerWidth, o.innerHeight))
        , u = fe(wu(r.offsetWidth, r.offsetHeight))
        , a = function() {
          var t = i.get();
          t.left === o.innerWidth && t.top === o.innerHeight || (i.set(wu(o.innerWidth, o.innerHeight)),
          Mb(e))
      }
        , c = function() {
          var t = e.getDoc().documentElement
            , n = u.get();
          n.left === t.offsetWidth && n.top === t.offsetHeight || (u.set(wu(t.offsetWidth, t.offsetHeight)),
          Mb(e))
      }
        , s = function(t) {
          return n = t,
          e.fire("ScrollContent", n);
          var n
      };
      n.bind(o, "resize", a),
      n.bind(o, "scroll", s);
      var l = xy(me.fromDom(e.getBody()), "load", c)
        , f = t.uiMothership.element;
      e.on("hide", function() {
          qi(f, "display", "none")
      }),
      e.on("show", function() {
          nu(f, "display")
      }),
      e.on("NodeChange", c),
      e.on("remove", function() {
          l.unbind(),
          n.unbind(o, "resize", a),
          n.unbind(o, "scroll", s),
          o = null
      })
  }, WB = /* */
  Object.freeze({
      __proto__: null,
      render: function(e, n, t, o, r) {
          var i = fe(0)
            , u = n.outerContainer;
          HB(e);
          var a, c, s = me.fromDom(r.targetNode), l = zi(Hi(s));
          a = s,
          c = n.mothership,
          sl(a, c, Dr),
          cl(l, n.uiMothership),
          e.on("PostRender", function() {
              NB(e, n, t, o),
              i.set(e.getWin().innerWidth),
              DB.setMenubar(u, MB(e, t)),
              DB.setSidebar(u, t.sidebar),
              UB(e, n)
          });
          var f, d, m, g, p, h = DB.getSocket(u).getOrDie("Could not find expected socket element");
          jB && (Ki(h.element, {
              overflow: "scroll",
              "-webkit-overflow-scrolling": "touch"
          }),
          m = function() {
              e.fire("ScrollContent")
          }
          ,
          g = 20,
          p = null,
          f = {
              cancel: function() {
                  null !== p && (clearTimeout(p),
                  p = null)
              },
              throttle: function() {
                  for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                  null === p && (p = setTimeout(function() {
                      m.apply(null, t),
                      p = null
                  }, g))
              }
          },
          d = yy(h.element, "scroll", f.throttle),
          e.on("remove", d.unbind)),
          Nv(e, n),
          e.addCommand("ToggleSidebar", function(t, n) {
              DB.toggleSidebar(u, n),
              e.fire("ToggleSidebar")
          }),
          e.addQueryValueHandler("ToggleSidebar", function() {
              return DB.whichSidebar(u)
          });
          var v = Ev(e);
          v !== rh.sliding && v !== rh.floating || e.on("ResizeWindow ResizeEditor ResizeContent", function() {
              var t = e.getWin().innerWidth;
              t !== i.get() && (DB.refreshToolbar(n.outerContainer),
              i.set(t))
          });
          var b = {
              enable: function() {
                  zv(n, !1)
              },
              disable: function() {
                  zv(n, !0)
              },
              isDisabled: function() {
                  return gv.isDisabled(u)
              }
          };
          return {
              iframeContainer: h.element.dom,
              editorContainer: u.element.dom,
              api: b
          }
      }
  }), GB = function(t) {
      return /^[0-9\.]+(|px)$/i.test("" + t) ? st.some(parseInt("" + t, 10)) : st.none()
  }, XB = function(t) {
      return lt(t) ? t + "px" : t
  }, YB = function(n, t, e) {
      var o = t.filter(function(t) {
          return n < t
      })
        , r = e.filter(function(t) {
          return t < n
      });
      return o.or(r).getOr(n)
  }, qB = function(t) {
      var n, e, o, r;
      return (e = hv(n = t),
      o = yv(n),
      r = wv(n),
      GB(e).map(function(t) {
          return YB(t, o, r)
      })).getOr(hv(t))
  }, KB = function(t) {
      var n = vv(t)
        , e = bv(t)
        , o = xv(t);
      return GB(n).map(function(t) {
          return YB(t, e, o)
      })
  }, JB = function(a, c, t, n, s) {
      var e = t.uiMothership
        , l = t.outerContainer
        , o = Zh.DOM
        , f = Fv(a)
        , d = Vv(a)
        , m = xv(a).or(KB(a))
        , r = n.shared.header
        , g = r.isPositionedAtTop
        , i = Ev(a)
        , p = i === rh.sliding || i === rh.floating
        , u = fe(!1)
        , h = function() {
          return u.get() && !a.removed
      }
        , v = function(t) {
          return p ? t.fold(function() {
              return 0
          }, function(t) {
              return 1 < t.components().length ? bu(t.components()[1].element) : 0
          }) : 0
      }
        , b = function() {
          e.broadcastOn([Sl()], {})
      }
        , y = function(t) {
          var n, e, o, r, i, u;
          void 0 === t && (t = !1),
          h() && (f || (n = m.getOrThunk(function() {
              var t = GB($i(Wi(), "margin-left")).getOr(0);
              return _u(Wi()) - ku(c).left + t
          }),
          qi(s.get().element, "max-width", n + "px")),
          p && DB.refreshToolbar(l),
          f || (e = DB.getToolbar(l),
          o = v(e),
          r = zu(c),
          i = g() ? Math.max(r.y - bu(s.get().element) + o, 0) : r.bottom,
          Ki(l.element, {
              position: "absolute",
              top: Math.round(i) + "px",
              left: Math.round(r.x) + "px"
          })),
          d && (u = s.get(),
          t ? $D.reset(u) : $D.refresh(u)),
          b())
      }
        , x = function(t) {
          var n, e;
          void 0 === t && (t = !0),
          !f && d && h() && (n = r.getDockingMode(),
          (e = function(t) {
              switch (Bv(a)) {
              case _v.auto:
                  var n = DB.getToolbar(l)
                    , e = v(n)
                    , o = bu(t.element) - e
                    , r = zu(c);
                  if (r.y > o)
                      return "top";
                  var i = wr(c)
                    , u = Math.max(i.dom.scrollHeight, bu(i));
                  return r.bottom < u - o || Lu().bottom < r.bottom - o ? "bottom" : "top";
              case _v.bottom:
                  return "bottom";
              case _v.top:
              default:
                  return "top"
              }
          }(s.get())) !== n && (function(t) {
              var n = s.get();
              $D.setModes(n, [t]),
              r.setDockingMode(t);
              var e = g() ? na.TopToBottom : na.BottomToTop;
              zr(n.element, jc, e)
          }(e),
          t && y(!0)))
      };
      return {
          isVisible: h,
          isPositionedAtTop: g,
          show: function() {
              u.set(!0),
              qi(l.element, "display", "flex"),
              o.addClass(a.getBody(), "mce-edit-focus"),
              nu(e.element, "display"),
              x(!1),
              y()
          },
          hide: function() {
              u.set(!1),
              t.outerContainer && (qi(l.element, "display", "none"),
              o.removeClass(a.getBody(), "mce-edit-focus")),
              qi(e.element, "display", "none")
          },
          update: y,
          updateMode: x,
          repositionPopups: b
      }
  }, $B = function(t, n) {
      var e = zu(t);
      return {
          pos: n ? e.y : e.bottom,
          bounds: e
      }
  }, QB = /* */
  Object.freeze({
      __proto__: null,
      render: function(n, e, o, r, t) {
          var i = e.mothership
            , u = e.uiMothership
            , a = e.outerContainer
            , c = fe(null)
            , s = me.fromDom(t.targetNode)
            , l = JB(n, s, e, r, c)
            , f = n.getParam("toolbar_persist", !1, "boolean");
          zB(n);
          var d = function() {
              var t;
              c.get() ? l.show() : (c.set(DB.getHeader(a).getOrDie()),
              t = Iv(n),
              cl(t, i),
              cl(t, u),
              NB(n, e, o, r),
              DB.setMenubar(a, MB(n, o)),
              l.show(),
              function(c, s, l, t) {
                  var f = fe($B(s, l.isPositionedAtTop()))
                    , n = function(t) {
                      var n = $B(s, l.isPositionedAtTop())
                        , e = n.pos
                        , o = n.bounds
                        , r = f.get()
                        , i = r.pos
                        , u = r.bounds
                        , a = o.height !== u.height || o.width !== u.width;
                      f.set({
                          pos: e,
                          bounds: o
                      }),
                      a && Mb(c, t),
                      l.isVisible() && (i !== e ? l.update(!0) : a && (l.updateMode(),
                      l.repositionPopups()))
                  };
                  t || (c.on("activate", l.show),
                  c.on("deactivate", l.hide)),
                  c.on("SkinLoaded ResizeWindow", function() {
                      return l.update(!0)
                  }),
                  c.on("NodeChange keydown", function(t) {
                      dp.requestAnimationFrame(function() {
                          return n(t)
                      })
                  }),
                  c.on("ScrollWindow", function() {
                      return l.updateMode()
                  });
                  var e = iD();
                  e.set(xy(me.fromDom(c.getBody()), "load", n)),
                  c.on("remove", function() {
                      e.clear()
                  })
              }(n, s, l, f),
              n.nodeChanged())
          };
          n.on("show", d),
          n.on("hide", l.hide),
          f || (n.on("focus", d),
          n.on("blur", l.hide)),
          n.on("init", function() {
              (n.hasFocus() || f) && d()
          }),
          Nv(n, e);
          var m = {
              show: function() {
                  l.show()
              },
              hide: function() {
                  l.hide()
              },
              enable: function() {
                  zv(e, !1)
              },
              disable: function() {
                  zv(e, !0)
              },
              isDisabled: function() {
                  return gv.isDisabled(a)
              }
          };
          return {
              editorContainer: a.element.dom,
              api: m
          }
      }
  }), ZB = function(t, n) {
      var e, o, r, i, u, a, c, s, l, f, d, m, g, p;
      r = PE(0, o = n, YE(e = t)),
      e.ui.registry.addNestedMenuItem("align", {
          text: o.shared.providers.translate("Align"),
          getSubmenuItems: function() {
              return r.items.validateItems(r.getStyleItems())
          }
      }),
      a = PE(0, u = n, $E(i = t)),
      i.ui.registry.addNestedMenuItem("fontformats", {
          text: u.shared.providers.translate("Fonts"),
          getSubmenuItems: function() {
              return a.items.validateItems(a.getStyleItems())
          }
      }),
      c = t,
      l = ut({
          type: "advanced"
      }, (s = n).styleselect),
      f = PE(0, s, sD(c, l)),
      c.ui.registry.addNestedMenuItem("formats", {
          text: "Formats",
          getSubmenuItems: function() {
              return f.items.validateItems(f.getStyleItems())
          }
      }),
      m = PE(0, n, cD(d = t)),
      d.ui.registry.addNestedMenuItem("blockformats", {
          text: "Blocks",
          getSubmenuItems: function() {
              return m.items.validateItems(m.getStyleItems())
          }
      }),
      p = PE(0, n, nD(g = t)),
      g.ui.registry.addNestedMenuItem("fontsizes", {
          text: "Font sizes",
          getSubmenuItems: function() {
              return p.items.validateItems(p.getStyleItems())
          }
      })
  }, tA = function(t, n) {
      return function() {
          t.execCommand("mceToggleFormat", !1, n)
      }
  }, nA = function(t) {
      var n, e;
      !function(e) {
          ck.each([{
              name: "bold",
              text: "Bold",
              icon: "bold"
          }, {
              name: "italic",
              text: "Italic",
              icon: "italic"
          }, {
              name: "underline",
              text: "Underline",
              icon: "underline"
          }, {
              name: "strikethrough",
              text: "Strikethrough",
              icon: "strike-through"
          }, {
              name: "subscript",
              text: "Subscript",
              icon: "subscript"
          }, {
              name: "superscript",
              text: "Superscript",
              icon: "superscript"
          }], function(t, n) {
              e.ui.registry.addToggleButton(t.name, {
                  tooltip: t.text,
                  icon: t.icon,
                  onSetup: uD(e, t.name),
                  onAction: tA(e, t.name)
              })
          });
          for (var t = 1; t <= 6; t++) {
              var n = "h" + t;
              e.ui.registry.addToggleButton(n, {
                  text: n.toUpperCase(),
                  tooltip: "Heading " + t,
                  onSetup: uD(e, n),
                  onAction: tA(e, n)
              })
          }
      }(t),
      n = t,
      ck.each([{
          name: "cut",
          text: "Cut",
          action: "Cut",
          icon: "cut"
      }, {
          name: "copy",
          text: "Copy",
          action: "Copy",
          icon: "copy"
      }, {
          name: "paste",
          text: "Paste",
          action: "Paste",
          icon: "paste"
      }, {
          name: "help",
          text: "Help",
          action: "mceHelp",
          icon: "help"
      }, {
          name: "selectall",
          text: "Select all",
          action: "SelectAll",
          icon: "select-all"
      }, {
          name: "newdocument",
          text: "New document",
          action: "mceNewDocument",
          icon: "new-document"
      }, {
          name: "removeformat",
          text: "Clear formatting",
          action: "RemoveFormat",
          icon: "remove-formatting"
      }, {
          name: "remove",
          text: "Remove",
          action: "Delete",
          icon: "remove"
      }], function(t) {
          n.ui.registry.addButton(t.name, {
              tooltip: t.text,
              icon: t.icon,
              onAction: function() {
                  return n.execCommand(t.action)
              }
          })
      }),
      e = t,
      ck.each([{
          name: "blockquote",
          text: "Blockquote",
          action: "mceBlockQuote",
          icon: "quote"
      }], function(t) {
          e.ui.registry.addToggleButton(t.name, {
              tooltip: t.text,
              icon: t.icon,
              onAction: function() {
                  return e.execCommand(t.action)
              },
              onSetup: uD(e, t.name)
          })
      })
  }, eA = function(t) {
      var n;
      nA(t),
      n = t,
      ck.each([{
          name: "bold",
          text: "Bold",
          action: "Bold",
          icon: "bold",
          shortcut: "Meta+B"
      }, {
          name: "italic",
          text: "Italic",
          action: "Italic",
          icon: "italic",
          shortcut: "Meta+I"
      }, {
          name: "underline",
          text: "Underline",
          action: "Underline",
          icon: "underline",
          shortcut: "Meta+U"
      }, {
          name: "strikethrough",
          text: "Strikethrough",
          action: "Strikethrough",
          icon: "strike-through",
          shortcut: ""
      }, {
          name: "subscript",
          text: "Subscript",
          action: "Subscript",
          icon: "subscript",
          shortcut: ""
      }, {
          name: "superscript",
          text: "Superscript",
          action: "Superscript",
          icon: "superscript",
          shortcut: ""
      }, {
          name: "removeformat",
          text: "Clear formatting",
          action: "RemoveFormat",
          icon: "remove-formatting",
          shortcut: ""
      }, {
          name: "newdocument",
          text: "New document",
          action: "mceNewDocument",
          icon: "new-document",
          shortcut: ""
      }, {
          name: "cut",
          text: "Cut",
          action: "Cut",
          icon: "cut",
          shortcut: "Meta+X"
      }, {
          name: "copy",
          text: "Copy",
          action: "Copy",
          icon: "copy",
          shortcut: "Meta+C"
      }, {
          name: "paste",
          text: "Paste",
          action: "Paste",
          icon: "paste",
          shortcut: "Meta+V"
      }, {
          name: "selectall",
          text: "Select all",
          action: "SelectAll",
          icon: "select-all",
          shortcut: "Meta+A"
      }], function(t) {
          n.ui.registry.addMenuItem(t.name, {
              text: t.text,
              icon: t.icon,
              shortcut: t.shortcut,
              onAction: function() {
                  return n.execCommand(t.action)
              }
          })
      }),
      n.ui.registry.addMenuItem("codeformat", {
          text: "Code",
          icon: "sourcecode",
          onAction: tA(n, "code")
      })
  }, oA = function(t, n, e) {
      var o = function() {
          return !!n.undoManager && n.undoManager[e]()
      }
        , r = function() {
          t.setDisabled(n.mode.isReadOnly() || !o())
      };
      return t.setDisabled(!o()),
      n.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", r),
      function() {
          return n.off("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", r)
      }
  }, rA = function(t) {
      var n, e;
      (n = t).ui.registry.addMenuItem("undo", {
          text: "Undo",
          icon: "undo",
          shortcut: "Meta+Z",
          onSetup: function(t) {
              return oA(t, n, "hasUndo")
          },
          onAction: function() {
              return n.execCommand("undo")
          }
      }),
      n.ui.registry.addMenuItem("redo", {
          text: "Redo",
          icon: "redo",
          shortcut: "Meta+Y",
          onSetup: function(t) {
              return oA(t, n, "hasRedo")
          },
          onAction: function() {
              return n.execCommand("redo")
          }
      }),
      (e = t).ui.registry.addButton("undo", {
          tooltip: "Undo",
          icon: "undo",
          onSetup: function(t) {
              return oA(t, e, "hasUndo")
          },
          onAction: function() {
              return e.execCommand("undo")
          }
      }),
      e.ui.registry.addButton("redo", {
          tooltip: "Redo",
          icon: "redo",
          onSetup: function(t) {
              return oA(t, e, "hasRedo")
          },
          onAction: function() {
              return e.execCommand("redo")
          }
      })
  }, iA = {
      unsupportedLength: ["em", "ex", "cap", "ch", "ic", "rem", "lh", "rlh", "vw", "vh", "vi", "vb", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px"],
      fixed: ["px", "pt"],
      relative: ["%"],
      empty: [""]
  }, uA = (NE = "[eE][+-]?[0-9]+",
  jE = ["Infinity", (zE = "[0-9]+") + "\\." + (LE = function(t) {
      return "(?:" + t + ")?"
  }
  )(zE) + LE(NE), "\\." + zE + LE(NE), zE + LE(NE)].join("|"),
  new RegExp("^([+-]?(?:" + jE + "))(.*)$")), aA = function(t, r) {
      return st.from(uA.exec(t)).bind(function(t) {
          var n, e = Number(t[1]), o = t[2];
          return n = o,
          F(r, function(t) {
              return F(iA[t], function(t) {
                  return n === t
              })
          }) ? st.some({
              value: e,
              unit: o
          }) : st.none()
      })
  }, cA = function(t) {
      return aA(t, ["fixed", "relative", "empty"]).map(function(t) {
          return t.value + t.unit
      }).getOr(t)
  }, sA = function(o) {
      var r = o.getParam("lineheight_formats", "1 1.1 1.2 1.3 1.4 1.5 2", "string").split(" ")
        , i = new Map
        , u = rD()
        , a = function() {
          var t = cA(o.queryCommandValue("LineHeight"));
          st.from(i.get(t)).fold(function() {
              return u.clear()
          }, function(t) {
              u.set({
                  destroy: function() {
                      t.setActive(!1)
                  }
              }),
              t.setActive(!0)
          })
      };
      return o.on("nodeChange", a),
      V(r, function(n, e) {
          return {
              type: "togglemenuitem",
              text: n,
              onSetup: function(t) {
                  return i.set(cA(n), t),
                  e + 1 === r.length && a(),
                  function() {
                      0 === e && (o.off("nodeChange", a),
                      u.clear())
                  }
              },
              onAction: function() {
                  return o.execCommand("LineHeight", !1, n)
              }
          }
      })
  }, lA = function(t) {
      var n, e;
      (n = t).ui.registry.addNestedMenuItem("lineheight", {
          type: "nestedmenuitem",
          text: "Line height",
          getSubmenuItems: function() {
              return sA(n)
          }
      }),
      (e = t).ui.registry.addMenuButton("lineheight", {
          tooltip: "Line height",
          icon: "line-height",
          fetch: function(t) {
              return t(sA(e))
          }
      })
  }, fA = function(t, n) {
      var e, o, r, i;
      !function(n) {
          ck.each([{
              name: "alignleft",
              text: "Align left",
              cmd: "JustifyLeft",
              icon: "align-left"
          }, {
              name: "aligncenter",
              text: "Align center",
              cmd: "JustifyCenter",
              icon: "align-center"
          }, {
              name: "alignright",
              text: "Align right",
              cmd: "JustifyRight",
              icon: "align-right"
          }, {
              name: "alignjustify",
              text: "Justify",
              cmd: "JustifyFull",
              icon: "align-justify"
          }], function(t) {
              n.ui.registry.addToggleButton(t.name, {
                  tooltip: t.text,
                  onAction: function() {
                      return n.execCommand(t.cmd)
                  },
                  icon: t.icon,
                  onSetup: uD(n, t.name)
              })
          });
          var t = "alignnone"
            , e = "No alignment"
            , o = "JustifyNone"
            , r = "align-none";
          n.ui.registry.addButton(t, {
              tooltip: e,
              onAction: function() {
                  return n.execCommand(o)
              },
              icon: r
          })
      }(t),
      eA(t),
      ZB(t, n),
      rA(t),
      function(t) {
          Lb(t);
          var n = fe(null)
            , e = fe(null);
          Yb(t, "forecolor", "forecolor", "Text color", n),
          Yb(t, "backcolor", "hilitecolor", "Background color", e),
          qb(t, "forecolor", "forecolor", "Text color"),
          qb(t, "backcolor", "hilitecolor", "Background color")
      }(t),
      (o = e = t).ui.registry.addButton("visualaid", {
          tooltip: "Visual aids",
          text: "Visual aids",
          onAction: function() {
              return o.execCommand("mceToggleVisualAid")
          }
      }),
      (r = e).ui.registry.addToggleMenuItem("visualaid", {
          text: "Visual aids",
          onSetup: function(t) {
              return function(n, t) {
                  n.setActive(t.hasVisual);
                  var e = function(t) {
                      n.setActive(t.hasVisual)
                  };
                  return t.on("VisualAid", e),
                  function() {
                      return t.off("VisualAid", e)
                  }
              }(t, r)
          },
          onAction: function() {
              r.execCommand("mceToggleVisualAid")
          }
      }),
      (i = t).ui.registry.addButton("outdent", {
          tooltip: "Decrease indent",
          icon: "outdent",
          onSetup: function(t) {
              return function(t, n) {
                  t.setDisabled(!n.queryCommandState("outdent"));
                  var e = function() {
                      t.setDisabled(!n.queryCommandState("outdent"))
                  };
                  return n.on("NodeChange", e),
                  function() {
                      return n.off("NodeChange", e)
                  }
              }(t, i)
          },
          onAction: function() {
              return i.execCommand("outdent")
          }
      }),
      i.ui.registry.addButton("indent", {
          tooltip: "Increase indent",
          icon: "indent",
          onAction: function() {
              return i.execCommand("indent")
          }
      }),
      lA(t)
  }, dA = function(t, n) {
      return {
          anchor: "makeshift",
          x: t,
          y: n
      }
  }, mA = function(t) {
      return "longpress" === t.type || 0 === t.type.indexOf("touch")
  }, gA = function(t, n) {
      var e, o, r, i = Zh.DOM.getPos(t);
      return e = n,
      o = i.x,
      r = i.y,
      dA(e.x + o, e.y + r)
  }, pA = function(t, n) {
      return "contextmenu" === n.type || "longpress" === n.type ? t.inline ? function(t) {
          if (mA(t)) {
              var n = t.touches[0];
              return dA(n.pageX, n.pageY)
          }
          return dA(t.pageX, t.pageY)
      }(n) : gA(t.getContentAreaContainer(), function(t) {
          if (mA(t)) {
              var n = t.touches[0];
              return dA(n.clientX, n.clientY)
          }
          return dA(t.clientX, t.clientY)
      }(n)) : hA(t)
  }, hA = function(t) {
      return {
          anchor: "selection",
          root: me.fromDom(t.selection.getNode())
      }
  }, vA = function(t) {
      return {
          anchor: "node",
          node: st.some(me.fromDom(t.selection.getNode())),
          root: me.fromDom(t.getBody())
      }
  }, bA = function(t, n, e, o, r, i) {
      var u = e()
        , a = i ? vA(t) : pA(t, n);
      jC(u, uh.CLOSE_ON_EXECUTE, o, !1).map(function(t) {
          n.preventDefault(),
          tp.showMenuAt(r, a, {
              menu: {
                  markers: yh("normal")
              },
              data: t
          })
      })
  }, yA = {
      onLtr: function() {
          return [Ua, Ha, za, Na, La, ja, lp, fp, cp, up, sp, ap]
      },
      onRtl: function() {
          return [Ua, za, Ha, La, Na, ja, lp, fp, sp, ap, cp, up]
      }
  }, xA = {
      valignCentre: [],
      alignCentre: [],
      alignLeft: ["tox-pop--align-left"],
      alignRight: ["tox-pop--align-right"],
      right: ["tox-pop--right"],
      left: ["tox-pop--left"],
      bottom: ["tox-pop--bottom"],
      top: ["tox-pop--top"]
  }, wA = function(n, e, t, o, r, i, u) {
      var a, c, s = i ? vA(n) : (a = n,
      c = e,
      ut({
          bubble: Hc(0, 12, xA),
          layouts: yA,
          overrides: {
              maxWidthFunction: Q_(),
              maxHeightFunction: Fc()
          }
      }, pA(a, c)));
      jC(t, uh.CLOSE_ON_EXECUTE, o, !0).map(function(t) {
          e.preventDefault(),
          tp.showMenuWithinBounds(r, s, {
              menu: {
                  markers: yh("normal"),
                  highlightImmediately: u
              },
              data: t,
              type: "horizontal"
          }, function() {
              return st.some(EE(n, o.shared))
          }),
          n.fire(Z_)
      })
  }, SA = function(n, e, o, r, i, u) {
      var t, a = je(), c = a.os.isiOS(), s = a.os.isOSX(), l = a.os.isAndroid(), f = a.deviceType.isTouch(), d = function() {
          var t = o();
          wA(n, e, t, r, i, u, !(l || c || s && f))
      };
      !s && !c || u ? (l && !u && n.selection.setCursorLocation(e.target, 0),
      d()) : (t = function() {
          !function(t) {
              var n = t.selection.getRng()
                , e = function() {
                  dp.setEditorTimeout(t, function() {
                      t.selection.setRng(n)
                  }, 10),
                  i()
              };
              t.once("touchend", e);
              var o = function(t) {
                  t.preventDefault(),
                  t.stopImmediatePropagation()
              };
              t.on("mousedown", o, !0);
              var r = function() {
                  return i()
              };
              t.once("longpresscancel", r);
              var i = function() {
                  t.off("touchend", e),
                  t.off("longpresscancel", r),
                  t.off("mousedown", o)
              }
          }(n),
          d()
      }
      ,
      !function(t, n) {
          var e = t.selection;
          if (e.isCollapsed() || n.touches.length < 1)
              return !1;
          var o = n.touches[0]
            , r = e.getRng();
          return bs(t.getWin(), Qc.domRange(r)).exists(function(t) {
              return t.left <= o.clientX && t.right >= o.clientX && t.top <= o.clientY && t.bottom >= o.clientY
          })
      }(n, e) ? (n.once("selectionchange", t),
      n.once("touchend", function() {
          return n.off("selectionchange", t)
      })) : t())
  }, kA = function(t) {
      return "string" == typeof t ? t.split(/[ ,]/) : t
  }, CA = function(t) {
      return t.getParam("contextmenu_never_use_native", !1, "boolean")
  }, OA = function(t) {
      return e = "contextmenu",
      o = "link linkchecker image imagetools table spellchecker configurepermanentpen",
      r = (n = t).ui.registry.getAll().contextMenus,
      st.from(n.getParam(e)).map(kA).getOrThunk(function() {
          return H(kA(o), function(t) {
              return It(r, t)
          })
      });
      var n, e, o, r
  }, _A = function(t) {
      return k(t) ? "|" === t : "separator" === t.type
  }, TA = {
      type: "separator"
  }, EA = function(n) {
      if (k(n))
          return n;
      switch (n.type) {
      case "separator":
          return TA;
      case "submenu":
          return {
              type: "nestedmenuitem",
              text: n.text,
              icon: n.icon,
              getSubmenuItems: function() {
                  var t = n.getSubmenuItems();
                  return k(t) ? t : V(t, EA)
              }
          };
      default:
          return {
              type: "menuitem",
              text: n.text,
              icon: n.icon,
              onAction: (t = n.onAction,
              function() {
                  return t()
              }
              )
          }
      }
      var t
  }, DA = function(t, n) {
      if (0 === n.length)
          return t;
      var e = J(t).filter(function(t) {
          return !_A(t)
      }).fold(function() {
          return []
      }, function(t) {
          return [TA]
      });
      return t.concat(e).concat(n).concat([TA])
  }, BA = function(t, n) {
      return "longpress" !== n.type && (2 !== n.button || n.target === t.getBody() && "" === n.pointerType)
  }, AA = function(t, n) {
      return BA(t, n) ? t.selection.getStart(!0) : n.target
  }, MA = function(a, t, e) {
      var o = je().deviceType.isTouch
        , r = gu(tp.sketch({
          dom: {
              tag: "div"
          },
          lazySink: t,
          onEscape: function() {
              return a.focus()
          },
          onShow: function() {
              return e.setContextMenuState(!0)
          },
          onHide: function() {
              return e.setContextMenuState(!1)
          },
          fireDismissalEventInstead: {},
          inlineBehaviours: ic([dg("dismissContextMenu", [er(zo(), function(t, n) {
              xl.close(t),
              a.focus()
          })])])
      }))
        , n = function(t) {
          return tp.hide(r)
      }
        , i = function(u) {
          var t, n;
          CA(a) && u.preventDefault(),
          t = a,
          u.ctrlKey && !CA(t) || !1 === a.getParam("contextmenu") || (n = function(t, n) {
              var e = t.getParam("contextmenu_avoid_overlap", "", "string");
              if (BA(t, n))
                  return !0;
              if (e) {
                  var o = AA(t, n);
                  return Sy(me.fromDom(o), e)
              }
              return !1
          }(a, u),
          (o() ? SA : bA)(a, u, function() {
              var r, i, t, n = AA(a, u), e = a.ui.registry.getAll(), o = OA(a);
              return r = e.contextMenus,
              i = n,
              0 < (t = N(o, function(t, n) {
                  if (It(r, n)) {
                      var e = r[n].update(i);
                      if (k(e))
                          return DA(t, e.split(" "));
                      if (0 < e.length) {
                          var o = V(e, EA);
                          return DA(t, o)
                      }
                      return t
                  }
                  return t.concat([n])
              }, [])).length && _A(t[t.length - 1]) && t.pop(),
              t
          }, e, r, n))
      };
      a.on("init", function() {
          var t = "ResizeEditor ScrollContent ScrollWindow longpresscancel" + (o() ? "" : " ResizeWindow");
          a.on(t, n),
          a.on("longpress contextmenu", i)
      })
  }, FA = Vt([{
      offset: ["x", "y"]
  }, {
      absolute: ["x", "y"]
  }, {
      fixed: ["x", "y"]
  }]), IA = function(n) {
      return function(t) {
          return t.translate(-n.left, -n.top)
      }
  }, RA = function(n) {
      return function(t) {
          return t.translate(n.left, n.top)
      }
  }, VA = function(e) {
      return function(t, n) {
          return N(e, function(t, n) {
              return n(t)
          }, wu(t, n))
      }
  }, PA = function(t, n, e) {
      return t.fold(VA([RA(e), IA(n)]), VA([IA(n)]), VA([]))
  }, HA = function(t, n, e) {
      return t.fold(VA([RA(e)]), VA([]), VA([RA(n)]))
  }, zA = function(t, n, e) {
      return t.fold(VA([]), VA([IA(e)]), VA([RA(n), IA(e)]))
  }, NA = function(t, n, e) {
      var o = t.fold(function(t, n) {
          return {
              position: st.some("absolute"),
              left: st.some(t + "px"),
              top: st.some(n + "px")
          }
      }, function(t, n) {
          return {
              position: st.some("absolute"),
              left: st.some(t - e.left + "px"),
              top: st.some(n - e.top + "px")
          }
      }, function(t, n) {
          return {
              position: st.some("fixed"),
              left: st.some(t + "px"),
              top: st.some(n + "px")
          }
      });
      return ut({
          right: st.none(),
          bottom: st.none()
      }, o)
  }, LA = function(t, i, u, a) {
      var n = function(o, r) {
          return function(t, n) {
              var e = o(i, u, a);
              return r(t.getOr(e.left), n.getOr(e.top))
          }
      };
      return t.fold(n(zA, jA), n(HA, UA), n(PA, WA))
  }, jA = FA.offset, UA = FA.absolute, WA = FA.fixed, GA = function(t, n) {
      var e = Nr(t, n);
      return h(e) ? NaN : parseInt(e, 10)
  }, XA = function(t, n, e, o) {
      return r = n,
      i = t.element,
      u = GA(i, r.leftAttr),
      a = GA(i, r.topAttr),
      (isNaN(u) || isNaN(a) ? st.none() : st.some(wu(u, a))).fold(function() {
          return e
      }, function(t) {
          return WA(t.left + o.left, t.top + o.top)
      });
      var r, i, u, a
  }, YA = function(t, n, e, o, r, i) {
      var u, a, c, s = XA(t, n, e, o), l = (n.mustSnap ? JA : $A)(t, n, s, r, i), f = PA(s, r, i);
      return u = n,
      a = f,
      c = t.element,
      zr(c, u.leftAttr, a.left + "px"),
      zr(c, u.topAttr, a.top + "px"),
      l.fold(function() {
          return {
              coord: WA(f.left, f.top),
              extra: st.none()
          }
      }, function(t) {
          return {
              coord: t.output,
              extra: t.extra
          }
      })
  }, qA = function(t, n) {
      var e, o;
      e = n,
      o = t.element,
      Ur(o, e.leftAttr),
      Ur(o, e.topAttr)
  }, KA = function(t, l, f, d) {
      return Z(t, function(t) {
          var n, e, o, r, i, u, a, c, s = t.sensor;
          return (n = l,
          e = s,
          o = t.range.left,
          r = t.range.top,
          a = HA(n, i = f, u = d),
          c = HA(e, i, u),
          Math.abs(a.left - c.left) <= o && Math.abs(a.top - c.top) <= r) ? st.some({
              output: LA(t.output, l, f, d),
              extra: t.extra
          }) : st.none()
      })
  }, JA = function(t, n, d, m, g) {
      var e = n.getSnapPoints(t);
      return KA(e, d, m, g).orThunk(function() {
          return N(e, function(n, e) {
              var t, o, r, i, u, a, c, s, l = e.sensor, f = (t = d,
              o = l,
              e.range.left,
              e.range.top,
              u = HA(t, r = m, i = g),
              a = HA(o, r, i),
              c = Math.abs(u.left - a.left),
              s = Math.abs(u.top - a.top),
              wu(c, s));
              return n.deltas.fold(function() {
                  return {
                      deltas: st.some(f),
                      snap: st.some(e)
                  }
              }, function(t) {
                  return (f.left + f.top) / 2 <= (t.left + t.top) / 2 ? {
                      deltas: st.some(f),
                      snap: st.some(e)
                  } : n
              })
          }, {
              deltas: st.none(),
              snap: st.none()
          }).snap.map(function(t) {
              return {
                  output: LA(t.output, d, m, g),
                  extra: t.extra
              }
          })
      })
  }, $A = function(t, n, e, o, r) {
      var i = n.getSnapPoints(t);
      return KA(i, e, o, r)
  }, QA = /* */
  Object.freeze({
      __proto__: null,
      snapTo: function(t, n, e, o) {
          var r, i, u, a, c, s, l, f, d = n.getTarget(t.element);
          n.repositionTarget && (r = yr(t.element),
          i = Au(r),
          u = FD(d),
          l = i,
          f = u,
          a = {
              coord: LA((s = o).output, s.output, l, f),
              extra: s.extra
          },
          c = NA(a.coord, 0, u),
          Ji(d, c))
      }
  }), ZA = "data-initial-z-index", tM = function(t, n) {
      var e;
      t.getSystem().addToGui(n),
      kr((e = n).element).filter(pr).each(function(n) {
          Zi(n, "z-index").each(function(t) {
              zr(n, ZA, t)
          }),
          qi(n, "z-index", $i(e.element, "z-index"))
      })
  }, nM = function(t) {
      kr(t.element).filter(pr).each(function(n) {
          Lr(n, ZA).fold(function() {
              return nu(n, "z-index")
          }, function(t) {
              return qi(n, "z-index", t)
          }),
          Ur(n, ZA)
      }),
      t.getSystem().removeFromGui(t)
  }, eM = function(t, n, e) {
      return t.getSystem().build(Uy.sketch({
          dom: {
              styles: {
                  left: "0px",
                  top: "0px",
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  "z-index": "1000000000000000"
              },
              classes: [n]
          },
          events: e
      }))
  }, oM = te("snaps", [Ln("getSnapPoints"), ga("onSensor"), Ln("leftAttr"), Ln("topAttr"), ne("lazyViewport", Lu), ne("mustSnap", !1)]), rM = [ne("useFixed", c), Ln("blockerClass"), ne("getTarget", ct), ne("onDrag", $), ne("repositionTarget", !0), ne("onDrop", $), ae("getBounds", Lu), oM], iM = function(n) {
      return t = Zi(n, "left"),
      e = Zi(n, "top"),
      o = Zi(n, "position"),
      r = function(t, n, e) {
          return ("fixed" === e ? WA : jA)(parseInt(t, 10), parseInt(n, 10))
      }
      ,
      (t.isSome() && e.isSome() && o.isSome() ? st.some(r(t.getOrDie(), e.getOrDie(), o.getOrDie())) : st.none()).getOrThunk(function() {
          var t = ku(n);
          return UA(t.left, t.top)
      });
      var t, e, o, r
  }, uM = function(e, t, i, u, a, c, n) {
      var o, r, s, l, f, d, m, g, p, h = t.fold(function() {
          var t, e, o, n = (t = i,
          e = c.left,
          o = c.top,
          t.fold(function(t, n) {
              return jA(t + e, n + o)
          }, function(t, n) {
              return UA(t + e, n + o)
          }, function(t, n) {
              return WA(t + e, n + o)
          })), r = PA(n, u, a);
          return WA(r.left, r.top)
      }, function(n) {
          var t = YA(e, n, i, c, u, a);
          return t.extra.each(function(t) {
              n.onSensor(e, t)
          }),
          t.coord
      });
      return o = h,
      r = u,
      s = a,
      f = (l = n).bounds,
      d = HA(o, r, s),
      m = _c(d.left, f.x, f.x + f.width - l.width),
      g = _c(d.top, f.y, f.y + f.height - l.height),
      p = UA(m, g),
      o.fold(function() {
          var t = zA(p, r, s);
          return jA(t.left, t.top)
      }, function() {
          return p
      }, function() {
          var t = PA(p, r, s);
          return WA(t.left, t.top)
      })
  }, aM = function(t, n) {
      return {
          bounds: t.getBounds(),
          height: yu(n.element),
          width: Tu(n.element)
      }
  }, cM = function(d, m, t, n, e) {
      var o = t.update(n, e)
        , g = t.getStartData().getOrThunk(function() {
          return aM(m, d)
      });
      o.each(function(t) {
          var n, e, o, r, i, u, a, c, s, l, f;
          n = d,
          o = g,
          r = t,
          f = (e = m).getTarget(n.element),
          e.repositionTarget && (i = yr(n.element),
          u = Au(i),
          a = FD(f),
          c = iM(f),
          s = uM(n, e.snaps, c, u, a, r, o),
          l = NA(s, 0, a),
          Ji(f, l)),
          e.onDrag(n, f, r)
      })
  }, sM = function(n, t, e, o) {
      t.each(nM),
      e.snaps.each(function(t) {
          qA(n, t)
      });
      var r = e.getTarget(n.element);
      o.reset(),
      e.onDrop(n, r)
  }, lM = function(t) {
      return function(n, e) {
          var o = function(t) {
              e.setStartData(aM(n, t))
          };
          return Zo(S([er(Ro(), function(t) {
              e.getStartData().each(function() {
                  return o(t)
              })
          })], t(n, e, o)))
      }
  }, fM = /* */
  Object.freeze({
      __proto__: null,
      getData: function(t) {
          return st.from(wu(t.x, t.y))
      },
      getDelta: function(t, n) {
          return wu(n.left - t.left, n.top - t.top)
      }
  }), dM = function(a, c, s) {
      return [er(io(), function(n, t) {
          var e, o, r, i, u;
          0 === t.event.raw.button && (t.stop(),
          r = {
              drop: e = function() {
                  return sM(n, st.some(i), a, c)
              }
              ,
              delayDrop: (o = ky(e, 200)).schedule,
              forceDrop: e,
              move: function(t) {
                  o.cancel(),
                  cM(n, a, c, fM, t)
              }
          },
          i = eM(n, a.blockerClass, (u = r,
          Zo([er(io(), u.forceDrop), er(co(), u.drop), er(uo(), function(t, n) {
              u.move(n.event)
          }), er(ao(), u.delayDrop)]))),
          s(n),
          tM(n, i))
      })]
  }, mM = S(rM, [ba("dragger", {
      handlers: lM(dM)
  })]), gM = /* */
  Object.freeze({
      __proto__: null,
      getData: function(t) {
          var n, e = t.raw.touches;
          return 1 === e.length ? (n = e[0],
          st.some(wu(n.clientX, n.clientY))) : st.none()
      },
      getDelta: function(t, n) {
          return wu(n.left - t.left, n.top - t.top)
      }
  }), pM = function(u, a, c) {
      var s = fe(st.none());
      return [er(no(), function(n, t) {
          t.stop();
          var e, o = function() {
              sM(n, s.get(), u, a),
              s.set(st.none())
          }, r = {
              drop: o,
              delayDrop: function() {},
              forceDrop: o,
              move: function(t) {
                  cM(n, u, a, gM, t)
              }
          }, i = eM(n, u.blockerClass, (e = r,
          Zo([er(no(), e.forceDrop), er(oo(), e.drop), er(ro(), e.drop), er(eo(), function(t, n) {
              e.move(n.event)
          })])));
          s.set(st.some(i));
          c(n),
          tM(n, i)
      }), er(eo(), function(t, n) {
          n.stop(),
          cM(t, u, a, gM, n.event)
      }), er(oo(), function(t, n) {
          n.stop(),
          sM(t, s.get(), u, a),
          s.set(st.none())
      }), er(ro(), function(t) {
          sM(t, s.get(), u, a),
          s.set(st.none())
      })]
  }, hM = S(rM, [ba("dragger", {
      handlers: lM(pM)
  })]), vM = S(rM, [ba("dragger", {
      handlers: lM(function(t, n, e) {
          return S(dM(t, n, e), pM(t, n, e))
      })
  })]), bM = sc({
      branchKey: "mode",
      branches: /* */
      Object.freeze({
          __proto__: null,
          mouse: mM,
          touch: hM,
          mouseOrTouch: vM
      }),
      name: "dragging",
      active: {
          events: function(t, n) {
              return t.dragger.handlers(t, n)
          }
      },
      extra: {
          snap: function(t) {
              return {
                  sensor: t.sensor,
                  range: t.range,
                  output: t.output,
                  extra: st.from(t.extra)
              }
          }
      },
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function() {
              var i = st.none()
                , n = st.none()
                , t = at({});
              return di({
                  readState: t,
                  reset: function() {
                      i = st.none(),
                      n = st.none()
                  },
                  update: function(r, t) {
                      return r.getData(t).bind(function(t) {
                          return n = r,
                          e = t,
                          o = i.map(function(t) {
                              return n.getDelta(t, e)
                          }),
                          i = st.some(e),
                          o;
                          var n, e, o
                      })
                  },
                  getStartData: function() {
                      return n
                  },
                  setStartData: function(t) {
                      n = st.some(t)
                  }
              })
          }
      }),
      apis: QA
  }), yM = function(t, r, i, u, n, e) {
      return t.fold(function() {
          return bM.snap({
              sensor: UA(i - 20, u - 20),
              range: wu(n, e),
              output: UA(st.some(i), st.some(u)),
              extra: {
                  td: r
              }
          })
      }, function(t) {
          var n = i - 20
            , e = u - 20
            , o = t.element.dom.getBoundingClientRect();
          return bM.snap({
              sensor: UA(n, e),
              range: wu(40, 40),
              output: UA(st.some(i - o.width / 2), st.some(u - o.height / 2)),
              extra: {
                  td: r
              }
          })
      })
  }, xM = function(t, i, u) {
      return {
          getSnapPoints: t,
          leftAttr: "data-drag-left",
          topAttr: "data-drag-top",
          onSensor: function(t, n) {
              var e, o, r = n.td;
              e = i.get(),
              o = r,
              e.exists(function(t) {
                  return Ge(t, o)
              }) || (i.set(st.some(r)),
              u(r))
          },
          mustSnap: !0
      }
  }, wM = function(t) {
      return gp(mp.sketch({
          dom: {
              tag: "div",
              classes: ["tox-selector"]
          },
          buttonBehaviours: ic([bM.config({
              mode: "mouseOrTouch",
              blockerClass: "blocker",
              snaps: t
          }), nw.config({})]),
          eventOrder: {
              mousedown: ["dragging", "alloy.base.behaviour"],
              touchstart: ["dragging", "alloy.base.behaviour"]
          }
      }))
  }, SM = function(c, e) {
      var o = fe([])
        , r = fe([])
        , t = fe(!1)
        , i = fe(st.none())
        , u = fe(st.none())
        , n = function(t) {
          var n = Nu(t);
          return yM(f.getOpt(e), t, n.x, n.y, n.width, n.height)
      }
        , a = function(t) {
          var n = Nu(t);
          return yM(d.getOpt(e), t, n.right, n.bottom, n.width, n.height)
      }
        , s = xM(function() {
          return V(o.get(), n)
      }, i, function(n) {
          u.get().each(function(t) {
              c.fire("TableSelectorChange", {
                  start: n,
                  finish: t
              })
          })
      })
        , l = xM(function() {
          return V(r.get(), a)
      }, u, function(n) {
          i.get().each(function(t) {
              c.fire("TableSelectorChange", {
                  start: t,
                  finish: n
              })
          })
      })
        , f = wM(s)
        , d = wM(l)
        , m = gu(f.asSpec())
        , g = gu(d.asSpec())
        , p = function(t, n, e, o) {
          var r = e(n);
          bM.snapTo(t, r);
          !function(t, n, e, o) {
              var r = n.dom.getBoundingClientRect();
              nu(t.element, "display");
              var i = Sr(me.fromDom(c.getBody())).dom.innerHeight
                , u = e(r)
                , a = o(r, i);
              (u || a) && qi(t.element, "display", "none")
          }(t, n, function(t) {
              return t[o] < 0
          }, function(t, n) {
              return t[o] > n
          })
      }
        , h = function(t) {
          return p(m, t, n, "top")
      }
        , v = function(t) {
          return p(g, t, a, "bottom")
      };
      je().deviceType.isTouch() && (c.on("TableSelectionChange", function(n) {
          t.get() || (ol(e, m),
          ol(e, g),
          t.set(!0)),
          i.set(st.some(n.start)),
          u.set(st.some(n.finish)),
          n.otherCells.each(function(t) {
              o.set(t.upOrLeftCells),
              r.set(t.downOrRightCells),
              h(n.start),
              v(n.finish)
          })
      }),
      c.on("ResizeEditor ResizeWindow ScrollContent", function() {
          i.get().each(h),
          u.get().each(v)
      }),
      c.on("TableSelectionClear", function() {
          t.get() && (ul(m),
          ul(g),
          t.set(!1)),
          i.set(st.none()),
          u.set(st.none())
      }))
  };
  (WE = UE = UE || {})[WE.None = 0] = "None",
  WE[WE.Both = 1] = "Both",
  WE[WE.Vertical = 2] = "Vertical";
  var kM, CM, OM, _M = function(t, n, e) {
      var o, r, i, u, a, c, s = me.fromDom(t.getContainer()), l = (o = t,
      r = n,
      i = e,
      u = bu(s),
      a = _u(s),
      (c = {}).height = YB(u + r.top, yv(o), wv(o)),
      i === UE.Both && (c.width = YB(a + r.left, bv(o), xv(o))),
      c);
      _t(l, function(t, n) {
          return qi(s, n, XB(t))
      }),
      t.fire("ResizeEditor")
  }, TM = function(i, u, a) {
      u.delimiter || (u.delimiter = "\xbb");
      return {
          dom: {
              tag: "div",
              classes: ["tox-statusbar__path"],
              attributes: {
                  role: "navigation"
              }
          },
          behaviours: ic([ug.config({
              mode: "flow",
              selector: "div[role=button]"
          }), gv.config({
              disabled: a.isDisabled
          }), Lv(), Jy.config({}), fg.config({}), dg("elementPathEvents", [sr(function(r, t) {
              i.shortcuts.add("alt+F11", "focus statusbar elementpath", function() {
                  return ug.focusIn(r)
              }),
              i.on("NodeChange", function(t) {
                  var n, o, e = function(t) {
                      for (var n = [], e = t.length; 0 < e--; ) {
                          var o = t[e];
                          if (1 === o.nodeType && !function(t) {
                              if (1 === t.nodeType) {
                                  if ("BR" === t.nodeName || t.getAttribute("data-mce-bogus"))
                                      return !0;
                                  if ("bookmark" === t.getAttribute("data-mce-type"))
                                      return !0
                              }
                              return !1
                          }(o)) {
                              var r = i.fire("ResolveName", {
                                  name: o.nodeName.toLowerCase(),
                                  target: o
                              });
                              if (r.isDefaultPrevented() || n.push({
                                  name: r.name,
                                  element: o
                              }),
                              r.isPropagationStopped())
                                  break
                          }
                      }
                      return n
                  }(t.parents);
                  0 < e.length ? fg.set(r, (n = V(e || [], function(n, t) {
                      return mp.sketch({
                          dom: {
                              tag: "div",
                              classes: ["tox-statusbar__path-item"],
                              attributes: {
                                  role: "button",
                                  "data-index": t,
                                  "tab-index": -1,
                                  "aria-level": t + 1
                              },
                              innerHtml: n.name
                          },
                          action: function(t) {
                              i.focus(),
                              i.selection.select(n.element),
                              i.nodeChanged()
                          },
                          buttonBehaviours: ic([Uv(a.isDisabled), Lv()])
                      })
                  }),
                  o = {
                      dom: {
                          tag: "div",
                          classes: ["tox-statusbar__path-divider"],
                          attributes: {
                              "aria-hidden": !0
                          },
                          innerHtml: " " + u.delimiter + " "
                      }
                  },
                  N(n.slice(1), function(t, n) {
                      var e = t;
                      return e.push(o),
                      e.push(n),
                      e
                  }, [n[0]]))) : fg.set(r, [])
              })
          })])]),
          components: []
      }
  }, EM = function(u, a) {
      var t, n, e, o, r, i;
      return {
          dom: {
              tag: "div",
              classes: ["tox-statusbar"]
          },
          components: (r = function() {
              var t, o, n, r, e, i = [];
              return u.getParam("elementpath", !0, "boolean") && i.push(TM(u, {}, a)),
              u.hasPlugin("wordcount") && i.push((t = u,
              o = a,
              r = function(t, n, e) {
                  return fg.set(t, [fu(o.translate(["{0} " + e, n[e]]))])
              }
              ,
              mp.sketch({
                  dom: {
                      tag: "button",
                      classes: ["tox-statusbar__wordcount"]
                  },
                  components: [],
                  buttonBehaviours: ic([Uv(o.isDisabled), Lv(), Jy.config({}), fg.config({}), Nl.config({
                      store: {
                          mode: "memory",
                          initialValue: {
                              mode: "words",
                              count: {
                                  words: 0,
                                  characters: 0
                              }
                          }
                      }
                  }), dg("wordcount-events", [dr(function(t) {
                      var n = Nl.getValue(t)
                        , e = "words" === n.mode ? "characters" : "words";
                      Nl.setValue(t, {
                          mode: e,
                          count: n.count
                      }),
                      r(t, n.count, e)
                  }), sr(function(e) {
                      t.on("wordCountUpdate", function(t) {
                          var n = Nl.getValue(e).mode;
                          Nl.setValue(e, {
                              mode: n,
                              count: t.wordCount
                          }),
                          r(e, t.wordCount, n)
                      })
                  })])]),
                  eventOrder: ((n = {})[_o()] = ["disabling", "alloy.base.behaviour", "wordcount-events"],
                  n)
              }))),
              u.getParam("branding", !0, "boolean") && i.push({
                  dom: {
                      tag: "span",
                      classes: ["tox-statusbar__branding"],
                      innerHtml: '<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5" rel="noopener" target="_blank" tabindex="-1" aria-label="' + (e = tv.translate(["Powered by {0}", "Tiny"])) + '">' + e + "</a>"
                  }
              }),
              0 < i.length ? [{
                  dom: {
                      tag: "div",
                      classes: ["tox-statusbar__text-container"]
                  },
                  components: i
              }] : []
          }(),
          n = !(t = u).hasPlugin("autoresize"),
          (i = !1 === (e = t.getParam("resize", n)) ? UE.None : "both" === e ? UE.Both : UE.Vertical) !== UE.None && r.push((o = i,
          {
              dom: {
                  tag: "div",
                  classes: ["tox-statusbar__resize-handle"],
                  attributes: {
                      title: a.translate("Resize"),
                      "aria-hidden": "true"
                  },
                  innerHtml: hp("resize-handle", a.icons)
              },
              behaviours: ic([bM.config({
                  mode: "mouse",
                  repositionTarget: !1,
                  onDrag: function(t, n, e) {
                      _M(u, e, o)
                  },
                  blockerClass: "tox-blocker"
              })])
          })),
          r)
      }
  }, DM = function(x) {
      var t, n, e, o, r = x.inline, w = r ? QB : WB, S = Vv(x) ? iB : AD, i = st.none(), u = je(), a = u.browser.isIE() ? ["tox-platform-ie"] : [], c = u.deviceType.isTouch() ? ["tox-platform-touch"] : [], s = Av(x), l = Iv(x), f = tv.isRtl() ? {
          attributes: {
              dir: "rtl"
          }
      } : {}, d = {
          attributes: ((t = {})[jc] = s ? na.BottomToTop : na.TopToBottom,
          t)
      }, k = function() {
          return i.bind(DB.getHeader)
      }, m = function() {
          qi(rt.element, "width", document.body.clientWidth + "px")
      }, C = gu((n = Ge(Wi(), l) && "grid" === $i(l, "display"),
      e = {
          dom: ut({
              tag: "div",
              classes: ["tox", "tox-silver-sink", "tox-tinymce-aux"].concat(a).concat(c)
          }, f),
          behaviours: ic([Qs.config({
              useFixed: function() {
                  return S.isDocked(k)
              }
          })])
      },
      o = {
          dom: {
              styles: {
                  width: document.body.clientWidth + "px"
              }
          },
          events: Zo([er(Vo(), m)])
      },
      zt(e, n ? o : {}))), O = function() {
          return mt.value(C)
      }, g = gp({
          dom: {
              tag: "div",
              classes: ["tox-anchorbar"]
          }
      }), _ = function() {
          return i.bind(function(t) {
              return DB.getThrobber(t)
          }).getOrDie("Could not find throbber element")
      }, T = $_(C, x, function() {
          return i.bind(function(t) {
              return g.getOpt(t)
          }).getOrDie("Could not find a anchor bar element")
      }), p = DB.parts.menubar({
          dom: {
              tag: "div",
              classes: ["tox-menubar"]
          },
          backstage: T,
          onEscape: function() {
              x.focus()
          }
      }), E = Ev(x), h = DB.parts.toolbar(ut({
          dom: {
              tag: "div",
              classes: ["tox-toolbar"]
          },
          getSink: O,
          providers: T.shared.providers,
          onEscape: function() {
              x.focus()
          },
          type: E,
          lazyToolbar: function() {
              return i.bind(function(t) {
                  return DB.getToolbar(t)
              }).getOrDie("Could not find more toolbar element")
          },
          lazyHeader: function() {
              return k().getOrDie("Could not find header element")
          }
      }, d)), v = DB.parts["multiple-toolbar"]({
          dom: {
              tag: "div",
              classes: ["tox-toolbar-overlord"]
          },
          providers: T.shared.providers,
          onEscape: function() {
              x.focus()
          },
          type: E
      }), b = DB.parts.socket({
          dom: {
              tag: "div",
              classes: ["tox-edit-area"]
          }
      }), y = DB.parts.sidebar({
          dom: {
              tag: "div",
              classes: ["tox-sidebar"]
          }
      }), D = DB.parts.throbber({
          dom: {
              tag: "div",
              classes: ["tox-throbber"]
          },
          backstage: T
      }), B = x.getParam("statusbar", !0, "boolean") && !r ? st.some(EM(x, T.shared.providers)) : st.none(), A = {
          dom: {
              tag: "div",
              classes: ["tox-sidebar-wrap"]
          },
          components: [b, y]
      }, M = Ov(x), F = kv(x), I = Sv(x), R = DB.parts.header({
          dom: ut({
              tag: "div",
              classes: ["tox-editor-header"]
          }, d),
          components: dt([I ? [p] : [], M ? [v] : F ? [h] : [], Fv(x) ? [] : [g.asSpec()]]),
          sticky: Vv(x),
          editor: x,
          sharedBackstage: T.shared
      }), V = dt([s ? [] : [R], r ? [] : [A], s ? [R] : []]), P = dt([[{
          dom: {
              tag: "div",
              classes: ["tox-editor-container"]
          },
          components: V
      }], r ? [] : B.toArray(), [D]]), H = Rv(x), z = ut(ut({
          role: "application"
      }, tv.isRtl() ? {
          dir: "rtl"
      } : {}), H ? {
          "aria-hidden": "true"
      } : {}), N = gu(DB.sketch({
          dom: {
              tag: "div",
              classes: ["tox", "tox-tinymce"].concat(r ? ["tox-tinymce-inline"] : []).concat(s ? ["tox-tinymce--toolbar-bottom"] : []).concat(c).concat(a),
              styles: ut({
                  visibility: "hidden"
              }, H ? {
                  opacity: "0",
                  border: "0"
              } : {}),
              attributes: z
          },
          components: P,
          behaviours: ic([Lv(), gv.config({
              disableClass: "tox-tinymce--disabled"
          }), ug.config({
              mode: "cyclic",
              selector: ".tox-menubar, .tox-toolbar, .tox-toolbar__primary, .tox-toolbar__overflow--open, .tox-sidebar__overflow--open, .tox-statusbar__path, .tox-statusbar__wordcount, .tox-statusbar__branding a"
          })])
      })), i = st.some(N);
      x.shortcuts.add("alt+F9", "focus menubar", function() {
          DB.focusMenubar(N)
      }),
      x.shortcuts.add("alt+F10", "focus toolbar", function() {
          DB.focusToolbar(N)
      }),
      x.addCommand("ToggleToolbarDrawer", function() {
          DB.toggleToolbarDrawer(N)
      }),
      x.addQueryStateHandler("ToggleToolbarDrawer", function() {
          return DB.isToolbarDrawerToggled(N)
      });
      var L, j, U, W, G, X, Y, q, K, J, $, Q, Z, tt, nt, et, ot = Wy(N), rt = Wy(C);
      L = x,
      j = ot,
      U = rt,
      W = function(n, e) {
          ft([j, U], function(t) {
              t.broadcastEvent(n, e)
          })
      }
      ,
      G = function(n, e) {
          ft([j, U], function(t) {
              t.broadcastOn([n], e)
          })
      }
      ,
      X = function(t) {
          return G(wl(), {
              target: t.target
          })
      }
      ,
      Y = yy(me.fromDom(document), "touchstart", X),
      q = yy(me.fromDom(document), "touchmove", function(t) {
          return W(Fo(), t)
      }),
      K = yy(me.fromDom(document), "touchend", function(t) {
          return W(Io(), t)
      }),
      J = yy(me.fromDom(document), "mousedown", X),
      $ = yy(me.fromDom(document), "mouseup", function(t) {
          0 === t.raw.button && G(kl(), {
              target: t.target
          })
      }),
      Q = function(t) {
          return G(wl(), {
              target: me.fromDom(t.target)
          })
      }
      ,
      Z = function(t) {
          0 === t.button && G(kl(), {
              target: me.fromDom(t.target)
          })
      }
      ,
      tt = function(t) {
          return W(Ro(), wy(t))
      }
      ,
      nt = function(t) {
          G(Sl(), {}),
          W(Vo(), wy(t))
      }
      ,
      et = function() {
          return G(Sl(), {})
      }
      ,
      L.on("PostRender", function() {
          L.on("click", Q),
          L.on("tap", Q),
          L.on("mouseup", Z),
          L.on("ScrollWindow", tt),
          L.on("ResizeWindow", nt),
          L.on("ResizeEditor", et)
      }),
      L.on("remove", function() {
          L.off("click", Q),
          L.off("tap", Q),
          L.off("mouseup", Z),
          L.off("ScrollWindow", tt),
          L.off("ResizeWindow", nt),
          L.off("ResizeEditor", et),
          J.unbind(),
          Y.unbind(),
          q.unbind(),
          K.unbind(),
          $.unbind()
      }),
      L.on("detach", function() {
          ll(j),
          ll(U),
          j.destroy(),
          U.destroy()
      });
      var it = function() {
          var t, n = XB(qB(x)), e = XB(KB(t = x).getOr(vv(t)));
          return x.inline || (tu("div", "width", e) && qi(N.element, "width", e),
          tu("div", "height", n) ? qi(N.element, "height", n) : qi(N.element, "height", "200px")),
          n
      };
      return {
          mothership: ot,
          uiMothership: rt,
          backstage: T,
          renderUI: function() {
              var o, r, e, n, i, u, a, c;
              S.setup(x, T.shared, k),
              fA(x, T),
              MA(x, O, T),
              r = (o = x).ui.registry.getAll().sidebars,
              ft(Ct(r), function(n) {
                  var t = r[n]
                    , e = function() {
                      return st.from(o.queryCommandValue("ToggleSidebar")).is(n)
                  };
                  o.ui.registry.addToggleButton(n, {
                      icon: t.icon,
                      tooltip: t.tooltip,
                      onAction: function(t) {
                          o.execCommand("ToggleSidebar", !1, n),
                          t.setActive(e())
                      },
                      onSetup: function(t) {
                          var n = function() {
                              return t.setActive(e())
                          };
                          return o.on("ToggleSidebar", n),
                          function() {
                              o.off("ToggleSidebar", n)
                          }
                      }
                  })
              }),
              e = x,
              n = _,
              i = T.shared,
              u = fe(!1),
              a = fe(st.none()),
              c = function(t) {
                  t !== u.get() && (wB(n(), t, i.providers),
                  u.set(t))
              }
              ,
              e.on("ProgressState", function(t) {
                  var n;
                  a.get().each(dp.clearTimeout),
                  lt(t.time) ? (n = dp.setEditorTimeout(e, function() {
                      return c(t.state)
                  }, t.time),
                  a.set(st.some(n))) : (c(t.state),
                  a.set(st.none()))
              }),
              Tt(x.getParam("toolbar_groups", {}, "object"), function(t, n) {
                  x.ui.registry.addGroupToolbarButton(n, t)
              });
              var t, s = x.ui.registry.getAll(), l = s.buttons, f = s.menuItems, d = s.contextToolbars, m = s.sidebars, g = Cv(x), p = {
                  menuItems: f,
                  menus: (t = x.getParam("menu")) ? Tt(t, function(t) {
                      return ut(ut({}, t), {
                          items: t.items
                      })
                  }) : {},
                  menubar: x.getParam("menubar"),
                  toolbar: g.getOrThunk(function() {
                      return x.getParam("toolbar", !0)
                  }),
                  allowToolbarGroups: E === rh.floating,
                  buttons: l,
                  sidebar: m
              };
              wD(x, d, C, {
                  backstage: T
              }),
              SM(x, C);
              var h = x.getElement()
                , v = it()
                , b = {
                  mothership: ot,
                  uiMothership: rt,
                  outerContainer: N
              }
                , y = {
                  targetNode: h,
                  height: v
              };
              return w.render(x, b, p, T, y)
          },
          getUi: function() {
              return {
                  channels: {
                      broadcastAll: rt.broadcast,
                      broadcastOn: rt.broadcastOn,
                      register: function() {}
                  }
              }
          }
      }
  }, BM = at([Ln("lazySink"), Kn("dragBlockClass"), ae("getBounds", Lu), ne("useTabstopAt", b), ne("eventOrder", {}), Ll("modalBehaviours", [ug]), pa("onExecute"), va("onEscape")]), AM = {
      sketch: ct
  }, MM = at([yf({
      name: "draghandle",
      overrides: function(t, n) {
          return {
              behaviours: ic([bM.config({
                  mode: "mouse",
                  getTarget: function(t) {
                      return qu(t, '[role="dialog"]').getOr(t)
                  },
                  blockerClass: t.dragBlockClass.getOrDie(new Error("The drag blocker class was not specified for a dialog with a drag handle: \n" + JSON.stringify(n, null, 2)).message),
                  getBounds: t.getDragBounds
              })])
          }
      }
  }), vf({
      schema: [Ln("dom")],
      name: "title"
  }), vf({
      factory: AM,
      schema: [Ln("dom")],
      name: "close"
  }), vf({
      factory: AM,
      schema: [Ln("dom")],
      name: "body"
  }), yf({
      factory: AM,
      schema: [Ln("dom")],
      name: "footer"
  }), bf({
      factory: {
          sketch: function(t, n) {
              return ut(ut({}, t), {
                  dom: n.dom,
                  components: n.components
              })
          }
      },
      schema: [ne("dom", {
          tag: "div",
          styles: {
              position: "fixed",
              left: "0px",
              top: "0px",
              right: "0px",
              bottom: "0px"
          }
      }), ne("components", [])],
      name: "blocker"
  })]), FM = /* */
  Object.freeze({
      __proto__: null,
      block: function(t, n, e, o) {
          zr(t.element, "aria-busy", !0);
          var r = n.getRoot(t).getOr(t)
            , i = ic([ug.config({
              mode: "special",
              onTab: function() {
                  return st.some(!0)
              },
              onShiftTab: function() {
                  return st.some(!0)
              }
          }), vg.config({})])
            , u = o(r, i)
            , a = r.getSystem().build(u);
          fg.append(r, pu(a)),
          a.hasConfigured(ug) && ug.focusIn(a),
          e.isBlocked() || n.onBlock(t),
          e.blockWith(function() {
              return fg.remove(r, a)
          })
      },
      unblock: function(t, n, e) {
          Ur(t.element, "aria-busy"),
          e.isBlocked() && n.onUnblock(t),
          e.clear()
      }
  }), IM = [ae("getRoot", st.none), ga("onBlock"), ga("onUnblock")], RM = ac({
      fields: IM,
      name: "blocking",
      apis: FM,
      state: /* */
      Object.freeze({
          __proto__: null,
          init: function() {
              var n = rD();
              return di({
                  readState: n.isSet,
                  blockWith: function(t) {
                      n.set({
                          destroy: t
                      })
                  },
                  clear: n.clear,
                  isBlocked: n.isSet
              })
          }
      })
  }), VM = qf({
      name: "ModalDialog",
      configFields: BM(),
      partFields: MM(),
      factory: function(a, t, n, r) {
          var e, i = fe(st.none()), o = Kr("modal-events"), u = ut(ut({}, a.eventOrder), ((e = {})[Po()] = [o].concat(a.eventOrder["alloy.system.attached"] || []),
          e));
          return {
              uid: a.uid,
              dom: a.dom,
              components: t,
              apis: {
                  show: function(t) {
                      i.set(st.some(t));
                      var n = a.lazySink(t).getOrDie()
                        , e = r.blocker()
                        , o = n.getSystem().build(ut(ut({}, e), {
                          components: e.components.concat([pu(t)]),
                          behaviours: ic([vg.config({}), dg("dialog-blocker-events", [cr(lo(), function() {
                              ug.focusIn(t)
                          })])])
                      }));
                      ol(n, o),
                      ug.focusIn(t)
                  },
                  hide: function(n) {
                      i.set(st.none()),
                      kr(n.element).each(function(t) {
                          n.getSystem().getByDom(t).each(function(t) {
                              ul(t)
                          })
                      })
                  },
                  getBody: function(t) {
                      return Mf(t, a, "body")
                  },
                  getFooter: function(t) {
                      return Mf(t, a, "footer")
                  },
                  setIdle: function(t) {
                      RM.unblock(t)
                  },
                  setBusy: function(t, n) {
                      RM.block(t, n)
                  }
              },
              eventOrder: u,
              domModification: {
                  attributes: {
                      role: "dialog",
                      "aria-modal": "true"
                  }
              },
              behaviours: Ul(a.modalBehaviours, [fg.config({}), ug.config({
                  mode: "cyclic",
                  onEnter: a.onExecute,
                  onEscape: a.onEscape,
                  useTabstopAt: a.useTabstopAt
              }), RM.config({
                  getRoot: i.get
              }), dg(o, [sr(function(t) {
                  var n, e, o, r, i, u;
                  n = t.element,
                  e = Mf(t, a, "title").element,
                  o = Lr(n, "id").fold(function() {
                      var t = Kr("dialog-label");
                      return zr(e, "id", t),
                      t
                  }, ct),
                  zr(n, "aria-labelledby", o),
                  r = t.element,
                  i = Mf(t, a, "body").element,
                  u = st.from(Nr(r, "id")).fold(function() {
                      var t = Kr("dialog-describe");
                      return zr(i, "id", t),
                      t
                  }, ct),
                  zr(r, "aria-describedby", u)
              })])])
          }
      },
      apis: {
          show: function(t, n) {
              t.show(n)
          },
          hide: function(t, n) {
              t.hide(n)
          },
          getBody: function(t, n) {
              return t.getBody(n)
          },
          getFooter: function(t, n) {
              return t.getFooter(n)
          },
          setBusy: function(t, n, e) {
              t.setBusy(n, e)
          },
          setIdle: function(t, n) {
              t.setIdle(n)
          }
      }
  }), PM = fn([Un("type"), Un("name")].concat(Rh)), HM = Vn, zM = [bn("name", "name", Xt(function() {
      return Kr("button-name")
  }), Rn), Qn("icon"), ie("align", "end", ["start", "end"]), ue("primary", !1), ue("disabled", !1)], NM = S(zM, [Un("text")]), LM = S([Wn("type", ["submit", "cancel", "custom"])], NM), jM = S([Wn("type", ["menu"]), Qn("text"), Qn("tooltip"), Qn("icon"), qn("items", PM)], zM), UM = An("type", {
      submit: LM,
      cancel: LM,
      custom: LM,
      menu: jM
  }), WM = [Un("type"), Un("text"), Wn("level", ["info", "warn", "error", "success"]), Un("icon"), ne("url", "")], GM = fn(WM), XM = [Un("type"), Un("text"), ue("disabled", !1), ue("primary", !1), bn("name", "name", Xt(function() {
      return Kr("button-name")
  }), Rn), Qn("icon"), ue("borderless", !1)], YM = fn(XM), qM = [Un("type"), Un("name"), Un("label"), ue("disabled", !1)], KM = fn(qM), JM = Vn, $M = [Un("type"), Un("name")], QM = $M.concat([Qn("label")]), ZM = QM.concat([ne("columns", "auto")]), tF = fn(ZM), nF = Sn([Un("value"), Un("text"), Un("icon")]), eF = fn(QM), oF = Rn, rF = fn(QM), iF = Rn, uF = $M.concat([re("tag", "textarea"), Un("scriptId"), Un("scriptUrl"), (kM = undefined,
  ee("settings", kM, zn))]), aF = $M.concat([re("tag", "textarea"), Gn("init")]), cF = Cn(function(t) {
      return _n("customeditor.old", ln(aF), t).orThunk(function() {
          return _n("customeditor.new", ln(uF), t)
      })
  }), sF = Rn, lF = fn(QM), fF = dn(wn), dF = function(t) {
      return [Un("type"), jn("columns", In), t]
  }, mF = [Un("type"), Un("html"), ie("presets", "presentation", ["presentation", "document"])], gF = fn(mF), pF = QM.concat([ue("sandboxed", !0)]), hF = fn(pF), vF = Rn, bF = QM.concat([jn("currentState", fn([Ln("blob"), Un("url")]))]), yF = fn(bF), xF = QM.concat([Qn("inputMode"), Qn("placeholder"), ue("maximized", !1), ue("disabled", !1)]), wF = fn(xF), SF = Rn, kF = [Un("text"), Un("value")], CF = [Un("text"), qn("items", (CM = function() {
      return OF
  }
  ,
  OM = Lt(function() {
      return CM()
  }),
  {
      extract: function(t, n, e) {
          return OM().extract(t, n, e)
      },
      toString: function() {
          return OM().toString()
      }
  }))], OF = mn([fn(kF), fn(CF)]), _F = QM.concat([qn("items", OF), ue("disabled", !1)]), TF = fn(_F), EF = Rn, DF = QM.concat([Yn("items", [Un("text"), Un("value")]), oe("size", 1), ue("disabled", !1)]), BF = fn(DF), AF = Rn, MF = QM.concat([ue("constrain", !0), ue("disabled", !1)]), FF = fn(MF), IF = fn([Un("width"), Un("height")]), RF = [Un("type"), qn("header", Rn), qn("cells", dn(Rn))], VF = fn(RF), PF = QM.concat([Qn("placeholder"), ue("maximized", !1), ue("disabled", !1)]), HF = fn(PF), zF = Rn, NF = QM.concat([ie("filetype", "file", ["image", "media", "file"]), ne("disabled", !1)]), LF = fn(NF), jF = fn([Un("value"), ne("meta", {})]), UF = function(n) {
      return bn("items", "items", Wt(), dn(Cn(function(t) {
          return _n("Checking item of " + n, WF, t).fold(function(t) {
              return mt.error(Dn(t))
          }, function(t) {
              return mt.value(t)
          })
      })))
  }, WF = kn(function() {
      return Bn("type", {
          alertbanner: GM,
          bar: fn((n = UF("bar"),
          [Un("type"), n])),
          button: YM,
          checkbox: KM,
          colorinput: eF,
          colorpicker: rF,
          dropzone: lF,
          grid: fn(dF(UF("grid"))),
          iframe: hF,
          input: wF,
          listbox: TF,
          selectbox: BF,
          sizeinput: FF,
          textarea: HF,
          urlinput: LF,
          customeditor: cF,
          htmlpanel: gF,
          imagetools: yF,
          collection: tF,
          label: fn((t = UF("label"),
          [Un("type"), Un("label"), t])),
          table: VF,
          panel: XF
      });
      var t, n
  }), GF = [Un("type"), ne("classes", []), qn("items", WF)], XF = fn(GF), YF = [bn("name", "name", Xt(function() {
      return Kr("tab-name")
  }), Rn), Un("title"), qn("items", WF)], qF = [Un("type"), Yn("tabs", YF)], KF = fn(qF), JF = NM, $F = UM, QF = fn([Un("title"), jn("body", Bn("type", {
      panel: XF,
      tabpanel: KF
  })), re("size", "normal"), qn("buttons", $F), ne("initialData", {}), ae("onAction", $), ae("onChange", $), ae("onSubmit", $), ae("onClose", $), ae("onCancel", $), ne("onTabChange", $)]), ZF = fn(S([Wn("type", ["cancel", "custom"])], JF)), tI = fn([Un("title"), Un("url"), $n("height"), $n("width"), Jn("buttons", dn(ZF)), ae("onAction", $), ae("onCancel", $), ae("onClose", $), ae("onMessage", $)]), nI = function(t) {
      return C(t) ? [t].concat(U(Mt(t), nI)) : p(t) ? U(t, nI) : []
  }, eI = function(t) {
      return k(t.type) && k(t.name)
  }, oI = {
      checkbox: JM,
      colorinput: oF,
      colorpicker: iF,
      dropzone: fF,
      input: SF,
      iframe: vF,
      sizeinput: IF,
      selectbox: AF,
      listbox: EF,
      size: IF,
      textarea: zF,
      urlinput: jF,
      customeditor: sF,
      collection: nF,
      togglemenuitem: HM
  }, rI = function(t) {
      var n = H(nI(t), eI)
        , e = U(n, function(n) {
          return t = n,
          st.from(oI[t.type]).fold(function() {
              return []
          }, function(t) {
              return [jn(n.name, t)]
          });
          var t
      });
      return fn(e)
  }, iI = function(t) {
      return {
          internalDialog: Tn(_n("dialog", QF, t)),
          dataValidator: rI(t),
          initialData: t.initialData
      }
  }, uI = {
      open: function(t, n) {
          var e = iI(n);
          return t(e.internalDialog, e.initialData, e.dataValidator)
      },
      openUrl: function(t, n) {
          return t(Tn(_n("dialog", tI, n)))
      },
      redial: iI
  }, aI = function(t) {
      var e = []
        , o = {};
      return _t(t, function(t, n) {
          t.fold(function() {
              e.push(n)
          }, function(t) {
              o[n] = t
          })
      }),
      0 < e.length ? mt.error(e) : mt.value(o)
  }, cI = Yf({
      name: "TabButton",
      configFields: [ne("uid", undefined), Ln("value"), bn("dom", "dom", Yt(function() {
          return {
              attributes: {
                  role: "tab",
                  id: Kr("aria"),
                  "aria-selected": "false"
              }
          }
      }), Mn()), Kn("action"), ne("domModification", {}), Ll("tabButtonBehaviours", [vg, ug, Nl]), Ln("view")],
      factory: function(t, n) {
          return {
              uid: t.uid,
              dom: t.dom,
              components: t.components,
              events: Ag(t.action),
              behaviours: Ul(t.tabButtonBehaviours, [vg.config({}), ug.config({
                  mode: "execution",
                  useSpace: !0,
                  useEnter: !0
              }), Nl.config({
                  store: {
                      mode: "memory",
                      initialValue: t.value
                  }
              })]),
              domModification: t.domModification
          }
      }
  }), sI = at([Ln("tabs"), Ln("dom"), ne("clickToDismiss", !1), Ll("tabbarBehaviours", [fd, ug]), da(["tabClass", "selectedClass"])]), lI = xf({
      factory: cI,
      name: "tabs",
      unit: "tab",
      overrides: function(o) {
          var r = function(t, n) {
              fd.dehighlight(t, n),
              qo(t, Wo(), {
                  tabbar: t,
                  button: n
              })
          }
            , i = function(t, n) {
              fd.highlight(t, n),
              qo(t, Uo(), {
                  tabbar: t,
                  button: n
              })
          };
          return {
              action: function(t) {
                  var n = t.getSystem().getByUid(o.uid).getOrDie()
                    , e = fd.isHighlighted(n, t);
                  (e && o.clickToDismiss ? r : e ? $ : i)(n, t)
              },
              domModification: {
                  classes: [o.markers.tabClass]
              }
          }
      }
  }), fI = at([lI]), dI = qf({
      name: "Tabbar",
      configFields: sI(),
      partFields: fI(),
      factory: function(t, n, e, o) {
          return {
              uid: t.uid,
              dom: t.dom,
              components: n,
              "debug.sketcher": "Tabbar",
              domModification: {
                  attributes: {
                      role: "tablist"
                  }
              },
              behaviours: Ul(t.tabbarBehaviours, [fd.config({
                  highlightClass: t.markers.selectedClass,
                  itemClass: t.markers.tabClass,
                  onHighlight: function(t, n) {
                      zr(n.element, "aria-selected", "true")
                  },
                  onDehighlight: function(t, n) {
                      zr(n.element, "aria-selected", "false")
                  }
              }), ug.config({
                  mode: "flow",
                  getInitial: function(t) {
                      return fd.getHighlighted(t).map(function(t) {
                          return t.element
                      })
                  },
                  selector: "." + t.markers.tabClass,
                  executeOnMove: !0
              })])
          }
      }
  }), mI = Yf({
      name: "Tabview",
      configFields: [Ll("tabviewBehaviours", [fg])],
      factory: function(t, n) {
          return {
              uid: t.uid,
              dom: t.dom,
              behaviours: Ul(t.tabviewBehaviours, [fg.config({})]),
              domModification: {
                  attributes: {
                      role: "tabpanel"
                  }
              }
          }
      }
  }), gI = at([ne("selectFirst", !0), ga("onChangeTab"), ga("onDismissTab"), ne("tabs", []), Ll("tabSectionBehaviours", [])]), pI = vf({
      factory: dI,
      schema: [Ln("dom"), Xn("markers", [Ln("tabClass"), Ln("selectedClass")])],
      name: "tabbar",
      defaults: function(t) {
          return {
              tabs: t.tabs
          }
      }
  }), hI = vf({
      factory: mI,
      name: "tabview"
  }), vI = at([pI, hI]), bI = qf({
      name: "TabSection",
      configFields: gI(),
      partFields: vI(),
      factory: function(i, t, n, e) {
          var o = function(t, n) {
              Af(t, i, "tabbar").each(function(t) {
                  n(t).each(Ko)
              })
          };
          return {
              uid: i.uid,
              dom: i.dom,
              components: t,
              behaviours: jl(i.tabSectionBehaviours),
              events: Zo(dt([i.selectFirst ? [sr(function(t, n) {
                  o(t, fd.getFirst)
              })] : [], [er(Uo(), function(t, n) {
                  var o, r, e = n.event.button;
                  o = e,
                  r = Nl.getValue(o),
                  Af(o, i, "tabview").each(function(e) {
                      L(i.tabs, function(t) {
                          return t.value === r
                      }).each(function(t) {
                          var n = t.view();
                          Lr(o.element, "id").each(function(t) {
                              zr(e.element, "aria-labelledby", t)
                          }),
                          fg.set(e, n),
                          i.onChangeTab(e, o, n)
                      })
                  })
              }), er(Wo(), function(t, n) {
                  var e = n.event.button;
                  i.onDismissTab(t, e)
              })]])),
              apis: {
                  getViewItems: function(t) {
                      return Af(t, i, "tabview").map(function(t) {
                          return fg.contents(t)
                      }).getOr([])
                  },
                  showTab: function(t, e) {
                      o(t, function(n) {
                          var t = fd.getCandidates(n);
                          return L(t, function(t) {
                              return Nl.getValue(t) === e
                          }).filter(function(t) {
                              return !fd.isHighlighted(n, t)
                          })
                      })
                  }
              }
          }
      },
      apis: {
          getViewItems: function(t, n) {
              return t.getViewItems(n)
          },
          showTab: function(t, n, e) {
              t.showTab(n, e)
          }
      }
  }), yI = function(t, n) {
      qi(t, "height", n + "px"),
      je().browser.isIE() ? nu(t, "flex-basis") : qi(t, "flex-basis", n + "px")
  }, xI = function(t, m, n) {
      qu(t, '[role="dialog"]').each(function(d) {
          Ku(d, '[role="tablist"]').each(function(f) {
              n.get().map(function(t) {
                  return qi(m, "height", "0"),
                  qi(m, "flex-basis", "0"),
                  Math.min(t, (e = m,
                  o = f,
                  r = wr(n = d).dom,
                  i = qu(n, ".tox-dialog-wrap").getOr(n),
                  u = "fixed" === $i(i, "position") ? Math.max(r.clientHeight, window.innerHeight) : Math.max(r.offsetHeight, r.scrollHeight),
                  a = bu(e),
                  c = e.dom.offsetLeft >= o.dom.offsetLeft + _u(o) ? Math.max(bu(o), a) : a,
                  s = parseInt($i(n, "margin-top"), 10) || 0,
                  l = parseInt($i(n, "margin-bottom"), 10) || 0,
                  u - (bu(n) + s + l - c)));
                  var n, e, o, r, i, u, a, c, s, l
              }).each(function(t) {
                  yI(m, t)
              })
          })
      })
  }, wI = function(t) {
      return Ku(t, '[role="tabpanel"]')
  }, SI = function(a) {
      var c;
      return {
          smartTabHeight: (c = fe(st.none()),
          {
              extraEvents: [sr(function(t) {
                  var e = t.element;
                  wI(e).each(function(u) {
                      var n;
                      qi(u, "visibility", "hidden"),
                      t.getSystem().getByDom(u).toOptional().each(function(t) {
                          var o, r, i, n = (r = u,
                          i = t,
                          V(o = a, function(t, n) {
                              fg.set(i, o[n].view());
                              var e = r.dom.getBoundingClientRect();
                              return fg.set(i, []),
                              e.height
                          })), e = K(Y(n, function(t, n) {
                              return n < t ? -1 : t < n ? 1 : 0
                          }));
                          c.set(e)
                      }),
                      xI(e, u, c),
                      nu(u, "visibility"),
                      n = t,
                      K(a).each(function(t) {
                          return bI.showTab(n, t.value)
                      }),
                      dp.requestAnimationFrame(function() {
                          xI(e, u, c)
                      })
                  })
              }), er(Vo(), function(t) {
                  var n = t.element;
                  wI(n).each(function(t) {
                      xI(n, t, c)
                  })
              }), er(lx, function(t, n) {
                  var r = t.element;
                  wI(r).each(function(n) {
                      var t = gc();
                      qi(n, "visibility", "hidden");
                      var e = Zi(n, "height").map(function(t) {
                          return parseInt(t, 10)
                      });
                      nu(n, "height"),
                      nu(n, "flex-basis");
                      var o = n.dom.getBoundingClientRect().height;
                      e.forall(function(t) {
                          return t < o
                      }) ? (c.set(st.from(o)),
                      xI(r, n, c)) : e.each(function(t) {
                          yI(n, t)
                      }),
                      nu(n, "visibility"),
                      t.each(mc)
                  })
              })],
              selectFirst: !1
          }),
          naiveTabHeight: {
              extraEvents: [],
              selectFirst: !0
          }
      }
  }, kI = "send-data-to-section", CI = "send-data-to-view", OI = Kr("update-dialog"), _I = Kr("update-title"), TI = Kr("update-body"), EI = Kr("update-footer"), DI = Kr("body-send-message"), BI = function(t, n, d, e) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-dialog__content-js"],
              attributes: ut(ut({}, n.map(function(t) {
                  return {
                      id: t
                  }
              }).getOr({})), e ? {
                  "aria-live": "polite"
              } : {})
          },
          components: [],
          behaviours: ic([rk(0), aE.config({
              channel: TI,
              updateState: function(t, n) {
                  return st.some({
                      isTabPanel: function() {
                          return "tabpanel" === n.body.type
                      }
                  })
              },
              renderComponents: function(t) {
                  switch (t.body.type) {
                  case "tabpanel":
                      return [(r = t.body,
                      i = d,
                      u = fe({}),
                      a = function(t) {
                          var n = Nl.getValue(t)
                            , e = aI(n).getOr({})
                            , o = u.get()
                            , r = zt(o, e);
                          u.set(r)
                      }
                      ,
                      c = function(t) {
                          var n = u.get();
                          Nl.setValue(t, n)
                      }
                      ,
                      s = fe(null),
                      l = V(r.tabs, function(t) {
                          return {
                              value: t.name,
                              dom: {
                                  tag: "div",
                                  classes: ["tox-dialog__body-nav-item"],
                                  innerHtml: i.shared.providers.translate(t.title)
                              },
                              view: function() {
                                  return [qS.sketch(function(n) {
                                      return {
                                          dom: {
                                              tag: "div",
                                              classes: ["tox-form"]
                                          },
                                          components: V(t.items, function(t) {
                                              return f_(n, t, i)
                                          }),
                                          formBehaviours: ic([ug.config({
                                              mode: "acyclic",
                                              useTabstopAt: x(kk)
                                          }), dg("TabView.form.events", [sr(c), lr(a)]), fc.config({
                                              channels: $t([{
                                                  key: kI,
                                                  value: {
                                                      onReceive: a
                                                  }
                                              }, {
                                                  key: CI,
                                                  value: {
                                                      onReceive: c
                                                  }
                                              }])
                                          })])
                                      }
                                  })]
                              }
                          }
                      }),
                      f = SI(l).smartTabHeight,
                      bI.sketch({
                          dom: {
                              tag: "div",
                              classes: ["tox-dialog__body"]
                          },
                          onChangeTab: function(t, n, e) {
                              var o = Nl.getValue(n);
                              qo(t, sx, {
                                  name: o,
                                  oldName: s.get()
                              }),
                              s.set(o)
                          },
                          tabs: l,
                          components: [bI.parts.tabbar({
                              dom: {
                                  tag: "div",
                                  classes: ["tox-dialog__body-nav"]
                              },
                              components: [dI.parts.tabs({})],
                              markers: {
                                  tabClass: "tox-tab",
                                  selectedClass: "tox-dialog__body-nav-item--active"
                              },
                              tabbarBehaviours: ic([Jy.config({})])
                          }), bI.parts.tabview({
                              dom: {
                                  tag: "div",
                                  classes: ["tox-dialog__body-content"]
                              }
                          })],
                          selectFirst: f.selectFirst,
                          tabSectionBehaviours: ic([dg("tabpanel", f.extraEvents), ug.config({
                              mode: "acyclic"
                          }), td.config({
                              find: function(t) {
                                  return K(bI.getViewItems(t))
                              }
                          }), Nl.config({
                              store: {
                                  mode: "manual",
                                  getValue: function(t) {
                                      return t.getSystem().broadcastOn([kI], {}),
                                      u.get()
                                  },
                                  setValue: function(t, n) {
                                      u.set(n),
                                      t.getSystem().broadcastOn([CI], {})
                                  }
                              }
                          })])
                      }))];
                  default:
                      return [(e = t.body,
                      o = d,
                      {
                          dom: {
                              tag: "div",
                              classes: ["tox-dialog__body"]
                          },
                          components: [{
                              dom: {
                                  tag: "div",
                                  classes: ["tox-dialog__body-content"]
                              },
                              components: [(n = gp(qS.sketch(function(n) {
                                  return {
                                      dom: {
                                          tag: "div",
                                          classes: ["tox-form"].concat(e.classes)
                                      },
                                      components: V(e.items, function(t) {
                                          return f_(n, t, o)
                                      })
                                  }
                              }))).asSpec()]
                          }],
                          behaviours: ic([ug.config({
                              mode: "acyclic",
                              useTabstopAt: x(kk)
                          }), ok(n), dk(n, {
                              postprocess: function(t) {
                                  return aI(t).fold(function(t) {
                                      return console.error(t),
                                      {}
                                  }, function(t) {
                                      return t
                                  })
                              }
                          })])
                      })]
                  }
                  var e, o, n, r, i, u, a, c, s, l, f
              },
              initialData: t
          })])
      }
  }, AI = Zv.deviceType.isTouch(), MI = function(t, n) {
      return {
          dom: {
              tag: "div",
              styles: {
                  display: "none"
              },
              classes: ["tox-dialog__header"]
          },
          components: [t, n]
      }
  }, FI = function(t, n) {
      return VM.parts.close(mp.sketch({
          dom: {
              tag: "button",
              classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
              attributes: {
                  type: "button",
                  "aria-label": n.translate("Close")
              }
          },
          action: t,
          buttonBehaviours: ic([Jy.config({})])
      }))
  }, II = function() {
      return VM.parts.title({
          dom: {
              tag: "div",
              classes: ["tox-dialog__title"],
              innerHtml: "",
              styles: {
                  display: "none"
              }
          }
      })
  }, RI = function(t, n) {
      return VM.parts.body({
          dom: {
              tag: "div",
              classes: ["tox-dialog__body"]
          },
          components: [{
              dom: {
                  tag: "div",
                  classes: ["tox-dialog__body-content"]
              },
              components: [{
                  dom: xB("<p>" + n.translate(t) + "</p>")
              }]
          }]
      })
  }, VI = function(t) {
      return VM.parts.footer({
          dom: {
              tag: "div",
              classes: ["tox-dialog__footer"]
          },
          components: t
      })
  }, PI = function(t, n) {
      return [Uy.sketch({
          dom: {
              tag: "div",
              classes: ["tox-dialog__footer-start"]
          },
          components: t
      }), Uy.sketch({
          dom: {
              tag: "div",
              classes: ["tox-dialog__footer-end"]
          },
          components: n
      })]
  }, HI = function(n) {
      var t, e = "tox-dialog", o = e + "-wrap", r = o + "__backdrop", i = e + "__disable-scroll";
      return VM.sketch({
          lazySink: n.lazySink,
          onEscape: function(t) {
              return n.onEscape(t),
              st.some(!0)
          },
          useTabstopAt: function(t) {
              return !kk(t)
          },
          dom: {
              tag: "div",
              classes: [e].concat(n.extraClasses),
              styles: ut({
                  position: "relative"
              }, n.extraStyles)
          },
          components: S([n.header, n.body], n.footer.toArray()),
          parts: {
              blocker: {
                  dom: xB('<div class="' + o + '"></div>'),
                  components: [{
                      dom: {
                          tag: "div",
                          classes: AI ? [r, r + "--opaque"] : [r]
                      }
                  }]
              }
          },
          dragBlockClass: o,
          modalBehaviours: ic(S([vg.config({}), dg("dialog-events", n.dialogEvents.concat([cr(lo(), function(t, n) {
              ug.focusIn(t)
          })])), dg("scroll-lock", [sr(function() {
              Ei(Wi(), i)
          }), lr(function() {
              Bi(Wi(), i)
          })])], n.extraBehaviours)),
          eventOrder: ut(((t = {})[_o()] = ["dialog-events"],
          t[Po()] = ["scroll-lock", "dialog-events", "alloy.base.behaviour"],
          t[Ho()] = ["alloy.base.behaviour", "dialog-events", "scroll-lock"],
          t), n.eventOrder)
      })
  }, zI = function(t) {
      return mp.sketch({
          dom: {
              tag: "button",
              classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
              attributes: {
                  type: "button",
                  "aria-label": t.translate("Close"),
                  title: t.translate("Close")
              }
          },
          components: [{
              dom: {
                  tag: "div",
                  classes: ["tox-icon"],
                  innerHtml: hp("close", t.icons)
              }
          }],
          action: function(t) {
              Yo(t, rx)
          }
      })
  }, NI = function(t, n, e) {
      var o = function(t) {
          return [fu(e.translate(t.title))]
      };
      return {
          dom: {
              tag: "div",
              classes: ["tox-dialog__title"],
              attributes: ut({}, n.map(function(t) {
                  return {
                      id: t
                  }
              }).getOr({}))
          },
          components: o(t),
          behaviours: ic([aE.config({
              channel: _I,
              renderComponents: o
          })])
      }
  }, LI = function() {
      return {
          dom: xB('<div class="tox-dialog__draghandle"></div>')
      }
  }, jI = function(t, n) {
      return e = {
          title: n.shared.providers.translate(t),
          draggable: n.dialog.isDraggableModal()
      },
      o = n.shared.providers,
      r = VM.parts.title(NI(e, st.none(), o)),
      i = VM.parts.draghandle(LI()),
      u = VM.parts.close(zI(o)),
      a = [r].concat(e.draggable ? [i] : []).concat([u]),
      Uy.sketch({
          dom: xB('<div class="tox-dialog__header"></div>'),
          components: a
      });
      var e, o, r, i, u, a
  }, UI = function(t, n) {
      return {
          dom: {
              tag: "div",
              classes: ["tox-dialog__busy-spinner"],
              attributes: {
                  "aria-label": t
              },
              styles: {
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  top: "0px",
                  position: "absolute"
              }
          },
          behaviours: n,
          components: [{
              dom: xB('<div class="tox-spinner"><div></div><div></div><div></div></div>')
          }]
      }
  }, WI = function(t, n) {
      return {
          onClose: function() {
              return n.closeWindow()
          },
          onBlock: function(e) {
              VM.setBusy(t(), function(t, n) {
                  return UI(e.message, n)
              })
          },
          onUnblock: function() {
              VM.setIdle(t())
          }
      }
  }, GI = function(t, n, e, o) {
      var r;
      return gu(HI(ut(ut({}, t), {
          lazySink: o.shared.getSink,
          extraBehaviours: S([aE.config({
              channel: OI,
              updateState: function(t, n) {
                  return st.some(n)
              },
              initialData: n
          }), pk({})], t.extraBehaviours),
          onEscape: function(t) {
              Yo(t, rx)
          },
          dialogEvents: e,
          eventOrder: ((r = {})[Oo()] = [aE.name(), fc.name()],
          r[Po()] = ["scroll-lock", aE.name(), "messages", "dialog-events", "alloy.base.behaviour"],
          r[Ho()] = ["alloy.base.behaviour", "dialog-events", "messages", aE.name(), "scroll-lock"],
          r)
      })))
  }, XI = function(t) {
      return V(t, function(t) {
          return "menu" === t.type ? (e = V((n = t).items, function(t) {
              var n = fe(!1);
              return ut(ut({}, t), {
                  storage: n
              })
          }),
          ut(ut({}, n), {
              items: e
          })) : t;
          var n, e
      })
  }, YI = function(t) {
      return N(t, function(t, n) {
          return "menu" !== n.type ? t : N(n.items, function(t, n) {
              return t[n.name] = n.storage,
              t
          }, t)
      }, {})
  }, qI = function(t, e) {
      return [ur(lo(), Sk), t(ox, function(t, n) {
          e.onClose(),
          n.onClose()
      }), t(rx, function(t, n, e, o) {
          n.onCancel(t),
          Yo(o, ox)
      }), er(cx, function(t, n) {
          return e.onUnblock()
      }), er(ax, function(t, n) {
          return e.onBlock(n.event)
      })]
  }, KI = function(i, t) {
      var n = function(t, r) {
          return er(t, function(e, o) {
              u(e, function(t, n) {
                  r(i(), t, o.event, e)
              })
          })
      }
        , u = function(n, e) {
          aE.getState(n).get().each(function(t) {
              e(t, n)
          })
      };
      return S(qI(n, t), [n(ix, function(t, n, e) {
          n.onAction(t, {
              name: e.name
          })
      })])
  }, JI = function(i, t, c) {
      var n = function(t, r) {
          return er(t, function(e, o) {
              u(e, function(t, n) {
                  r(i(), t, o.event, e)
              })
          })
      }
        , u = function(n, e) {
          aE.getState(n).get().each(function(t) {
              e(t.internalDialog, n)
          })
      };
      return S(qI(n, t), [n(ux, function(t, n) {
          return n.onSubmit(t)
      }), n(ex, function(t, n, e) {
          n.onChange(t, {
              name: e.name
          })
      }), n(ix, function(t, n, e, o) {
          var r = function() {
              return ug.focusIn(o)
          }
            , i = function(t) {
              return jr(t, "disabled") || Lr(t, "aria-disabled").exists(function(t) {
                  return "true" === t
              })
          }
            , u = Hi(o.element)
            , a = gc(u);
          n.onAction(t, {
              name: e.name,
              value: e.value
          }),
          gc(u).fold(r, function(n) {
              i(n) || a.exists(function(t) {
                  return Ye(n, t) && i(t)
              }) ? r() : c().toOptional().filter(function(t) {
                  return !Ye(t.element, n)
              }).each(r)
          })
      }), n(sx, function(t, n, e) {
          n.onTabChange(t, {
              newTabName: e.name,
              oldTabName: e.oldName
          })
      }), lr(function(t) {
          var n = i();
          Nl.setValue(t, n.getData())
      })])
  }, $I = function(t, n) {
      var e = n.map(function(t) {
          return t.footerButtons
      }).getOr([])
        , o = P(e, function(t) {
          return "start" === t.align
      })
        , r = function(t, n) {
          return Uy.sketch({
              dom: {
                  tag: "div",
                  classes: ["tox-dialog__footer-" + t]
              },
              components: V(n, function(t) {
                  return t.memento.asSpec()
              })
          })
      };
      return [r("start", o.pass), r("end", o.fail)]
  }, QI = function(t, i) {
      return {
          dom: xB('<div class="tox-dialog__footer"></div>'),
          components: [],
          behaviours: ic([aE.config({
              channel: EI,
              initialData: t,
              updateState: function(t, n) {
                  var r = V(n.buttons, function(t) {
                      var n, e, o = gp((e = i,
                      QC(n = t, n.type, e)));
                      return {
                          name: t.name,
                          align: t.align,
                          memento: o
                      }
                  });
                  return st.some({
                      lookupByName: function(t, n) {
                          return e = t,
                          o = n,
                          L(r, function(t) {
                              return t.name === o
                          }).bind(function(t) {
                              return t.memento.getOpt(e)
                          });
                          var e, o
                      },
                      footerButtons: r
                  })
              },
              renderComponents: $I
          })])
      }
  }, ZI = QI, tR = function(t, n) {
      return VM.parts.footer(QI(t, n))
  }, nR = function(n, e) {
      if (n.getRoot().getSystem().isConnected()) {
          var o = td.getCurrent(n.getFormWrapper()).getOr(n.getFormWrapper());
          return qS.getField(o, e).fold(function() {
              var t = n.getFooter();
              return aE.getState(t).get().bind(function(t) {
                  return t.lookupByName(o, e)
              })
          }, function(t) {
              return st.some(t)
          })
      }
      return st.none()
  }, eR = function(c, o, s) {
      var t = function(t) {
          var n = c.getRoot();
          n.getSystem().isConnected() && t(n)
      }
        , l = {
          getData: function() {
              var t = c.getRoot()
                , n = t.getSystem().isConnected() ? c.getFormWrapper() : t
                , e = Nl.getValue(n)
                , o = Tt(s, function(t) {
                  return t.get()
              });
              return ut(ut({}, e), o)
          },
          setData: function(a) {
              t(function(t) {
                  var n, e, o = l.getData(), r = ut(ut({}, o), a), i = (n = r,
                  e = c.getRoot(),
                  aE.getState(e).get().map(function(t) {
                      return Tn(_n("data", t.dataValidator, n))
                  }).getOr(n)), u = c.getFormWrapper();
                  Nl.setValue(u, i),
                  _t(s, function(t, n) {
                      It(r, n) && t.set(r[n])
                  })
              })
          },
          disable: function(t) {
              nR(c, t).each(gv.disable)
          },
          enable: function(t) {
              nR(c, t).each(gv.enable)
          },
          focus: function(t) {
              nR(c, t).each(vg.focus)
          },
          block: function(n) {
              if (!k(n))
                  throw new Error("The dialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
              t(function(t) {
                  qo(t, ax, {
                      message: n
                  })
              })
          },
          unblock: function() {
              t(function(t) {
                  Yo(t, cx)
              })
          },
          showTab: function(e) {
              t(function(t) {
                  var n = c.getBody();
                  aE.getState(n).get().exists(function(t) {
                      return t.isTabPanel()
                  }) && td.getCurrent(n).each(function(t) {
                      bI.showTab(t, e)
                  })
              })
          },
          redial: function(e) {
              t(function(t) {
                  var n = o(e);
                  t.getSystem().broadcastOn([OI], n),
                  t.getSystem().broadcastOn([_I], n.internalDialog),
                  t.getSystem().broadcastOn([TI], n.internalDialog),
                  t.getSystem().broadcastOn([EI], n.internalDialog),
                  l.setData(n.initialData)
              })
          },
          close: function() {
              t(function(t) {
                  Yo(t, ox)
              })
          }
      };
      return l
  }, oR = function(t, n, e) {
      var o, r, i, u = jI(t.internalDialog.title, e), a = (o = {
          body: t.internalDialog.body
      },
      r = e,
      i = BI(o, st.none(), r, !1),
      VM.parts.body(i)), c = XI(t.internalDialog.buttons), s = YI(c), l = tR({
          buttons: c
      }, e), f = JI(function() {
          return p
      }, WI(function() {
          return g
      }, n), e.shared.getSink), d = function(t) {
          switch (t) {
          case "large":
              return ["tox-dialog--width-lg"];
          case "medium":
              return ["tox-dialog--width-md"];
          default:
              return []
          }
      }(t.internalDialog.size), m = {
          header: u,
          body: a,
          footer: st.some(l),
          extraClasses: d,
          extraBehaviours: [],
          extraStyles: {}
      }, g = GI(m, t, f, e), p = eR({
          getRoot: function() {
              return g
          },
          getBody: function() {
              return VM.getBody(g)
          },
          getFooter: function() {
              return VM.getFooter(g)
          },
          getFormWrapper: function() {
              var t = VM.getBody(g);
              return td.getCurrent(t).getOr(t)
          }
      }, n.redial, s);
      return {
          dialog: g,
          instanceApi: p
      }
  }, rR = function(t, n, e, o) {
      var r, i, u, a, c, s, l, f, d, m = Kr("dialog-label"), g = Kr("dialog-content"), p = gp((u = {
          title: t.internalDialog.title,
          draggable: !0
      },
      a = m,
      c = e.shared.providers,
      Uy.sketch({
          dom: xB('<div class="tox-dialog__header"></div>'),
          components: [NI(u, st.some(a), c), LI(), zI(c)],
          containerBehaviours: ic([bM.config({
              mode: "mouse",
              blockerClass: "blocker",
              getTarget: function(t) {
                  return Ju(t, '[role="dialog"]').getOrDie()
              },
              snaps: {
                  getSnapPoints: function() {
                      return []
                  },
                  leftAttr: "data-drag-left",
                  topAttr: "data-drag-top"
              }
          })])
      }))), h = gp((s = {
          body: t.internalDialog.body
      },
      l = g,
      f = e,
      d = o,
      BI(s, st.some(l), f, d))), v = XI(t.internalDialog.buttons), b = YI(v), y = gp(ZI({
          buttons: v
      }, e)), x = JI(function() {
          return S
      }, {
          onBlock: function(e) {
              RM.block(w, function(t, n) {
                  return UI(e.message, n)
              })
          },
          onUnblock: function() {
              RM.unblock(w)
          },
          onClose: function() {
              return n.closeWindow()
          }
      }, e.shared.getSink), w = gu({
          dom: {
              tag: "div",
              classes: ["tox-dialog", "tox-dialog-inline"],
              attributes: ((r = {
                  role: "dialog"
              })["aria-labelledby"] = m,
              r["aria-describedby"] = "" + g,
              r)
          },
          eventOrder: ((i = {})[Oo()] = [aE.name(), fc.name()],
          i[_o()] = ["execute-on-form"],
          i[Po()] = ["reflecting", "execute-on-form"],
          i),
          behaviours: ic([ug.config({
              mode: "cyclic",
              onEscape: function(t) {
                  return Yo(t, ox),
                  st.some(!0)
              },
              useTabstopAt: function(t) {
                  return !kk(t) && ("button" !== mr(t) || "disabled" !== Nr(t, "disabled"))
              }
          }), aE.config({
              channel: OI,
              updateState: function(t, n) {
                  return st.some(n)
              },
              initialData: t
          }), vg.config({}), dg("execute-on-form", x.concat([cr(lo(), function(t, n) {
              ug.focusIn(t)
          })])), RM.config({
              getRoot: function() {
                  return st.some(w)
              }
          }), fg.config({}), pk({})]),
          components: [p.asSpec(), h.asSpec(), y.asSpec()]
      }), S = eR({
          getRoot: function() {
              return w
          },
          getFooter: function() {
              return y.get(w)
          },
          getBody: function() {
              return h.get(w)
          },
          getFormWrapper: function() {
              var t = h.get(w);
              return td.getCurrent(t).getOr(t)
          }
      }, n.redial, b);
      return {
          dialog: w,
          instanceApi: S
      }
  }, iR = tinymce.util.Tools.resolve("tinymce.util.URI"), uR = ["insertContent", "setContent", "execCommand", "close", "block", "unblock"], aR = function(t) {
      return C(t) && -1 !== uR.indexOf(t.mceAction)
  }, cR = function(o, t, r, n) {
      var e, i, u, a, c = jI(o.title, n), s = (i = {
          dom: {
              tag: "div",
              classes: ["tox-dialog__content-js"]
          },
          components: [{
              dom: {
                  tag: "div",
                  classes: ["tox-dialog__body-iframe"]
              },
              components: [xk({
                  dom: {
                      tag: "iframe",
                      attributes: {
                          src: o.url
                      }
                  },
                  behaviours: ic([Jy.config({}), vg.config({})])
              })]
          }],
          behaviours: ic([ug.config({
              mode: "acyclic",
              useTabstopAt: x(kk)
          })])
      },
      VM.parts.body(i)), l = o.buttons.bind(function(t) {
          return 0 === t.length ? st.none() : st.some(tR({
              buttons: t
          }, n))
      }), f = KI(function() {
          return y
      }, WI(function() {
          return b
      }, t)), d = ut(ut({}, o.height.fold(function() {
          return {}
      }, function(t) {
          return {
              height: t + "px",
              "max-height": t + "px"
          }
      })), o.width.fold(function() {
          return {}
      }, function(t) {
          return {
              width: t + "px",
              "max-width": t + "px"
          }
      })), m = o.width.isNone() && o.height.isNone() ? ["tox-dialog--width-lg"] : [], g = new iR(o.url,{
          base_uri: new iR(window.location.href)
      }), p = g.protocol + "://" + g.host + (g.port ? ":" + g.port : ""), h = fe(st.none()), v = [dg("messages", [sr(function() {
          var t = yy(me.fromDom(window), "message", function(t) {
              var n, e;
              g.isSameOrigin(new iR(t.raw.origin)) && (n = t.raw.data,
              aR(n) ? function(t, n, e) {
                  switch (e.mceAction) {
                  case "insertContent":
                      t.insertContent(e.content);
                      break;
                  case "setContent":
                      t.setContent(e.content);
                      break;
                  case "execCommand":
                      var o = !!O(e.ui) && e.ui;
                      t.execCommand(e.cmd, o, e.value);
                      break;
                  case "close":
                      n.close();
                      break;
                  case "block":
                      n.block(e.message);
                      break;
                  case "unblock":
                      n.unblock()
                  }
              }(r, y, n) : !aR(e = n) && C(e) && It(e, "mceAction") && o.onMessage(y, n))
          });
          h.set(st.some(t))
      }), lr(function() {
          h.get().each(function(t) {
              return t.unbind()
          })
      })]), fc.config({
          channels: ((e = {})[DI] = {
              onReceive: function(t, n) {
                  Ku(t.element, "iframe").each(function(t) {
                      t.dom.contentWindow.postMessage(n, p)
                  })
              }
          },
          e)
      })], b = GI({
          header: c,
          body: s,
          footer: l,
          extraClasses: m,
          extraBehaviours: v,
          extraStyles: d
      }, o, f, n), y = (a = function(t) {
          u.getSystem().isConnected() && t(u)
      }
      ,
      {
          block: function(n) {
              if (!k(n))
                  throw new Error("The urlDialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
              a(function(t) {
                  qo(t, ax, {
                      message: n
                  })
              })
          },
          unblock: function() {
              a(function(t) {
                  Yo(t, cx)
              })
          },
          close: function() {
              a(function(t) {
                  Yo(t, ox)
              })
          },
          sendMessage: function(n) {
              a(function(t) {
                  t.getSystem().broadcastOn([DI], n)
              })
          }
      });
      return {
          dialog: u = b,
          instanceApi: y
      }
  }, sR = function(t) {
      var c, s, l, f, p = t.backstage, h = t.editor, v = Vv(h), e = (s = (c = t).backstage.shared,
      {
          open: function(t, n) {
              var e = function() {
                  VM.hide(u),
                  n()
              }
                , o = gp(QC({
                  name: "close-alert",
                  text: "OK",
                  primary: !0,
                  align: "end",
                  disabled: !1,
                  icon: st.none()
              }, "cancel", c.backstage))
                , r = II()
                , i = FI(e, s.providers)
                , u = gu(HI({
                  lazySink: function() {
                      return s.getSink()
                  },
                  header: MI(r, i),
                  body: RI(t, s.providers),
                  footer: st.some(VI(PI([], [o.asSpec()]))),
                  onEscape: e,
                  extraClasses: ["tox-alert-dialog"],
                  extraBehaviours: [],
                  extraStyles: {},
                  dialogEvents: [er(rx, e)],
                  eventOrder: {}
              }));
              VM.show(u);
              var a = o.get(u);
              vg.focus(a)
          }
      }), o = (f = (l = t).backstage.shared,
      {
          open: function(t, n) {
              var e = function(t) {
                  VM.hide(a),
                  n(t)
              }
                , o = gp(QC({
                  name: "yes",
                  text: "Yes",
                  primary: !0,
                  align: "end",
                  disabled: !1,
                  icon: st.none()
              }, "submit", l.backstage))
                , r = QC({
                  name: "no",
                  text: "No",
                  primary: !1,
                  align: "end",
                  disabled: !1,
                  icon: st.none()
              }, "cancel", l.backstage)
                , i = II()
                , u = FI(function() {
                  return e(!1)
              }, f.providers)
                , a = gu(HI({
                  lazySink: function() {
                      return f.getSink()
                  },
                  header: MI(i, u),
                  body: RI(t, f.providers),
                  footer: st.some(VI(PI([], [r, o.asSpec()]))),
                  onEscape: function() {
                      return e(!1)
                  },
                  extraClasses: ["tox-confirm-dialog"],
                  extraBehaviours: [],
                  extraStyles: {},
                  dialogEvents: [er(rx, function() {
                      return e(!1)
                  }), er(ux, function() {
                      return e(!0)
                  })],
                  eventOrder: {}
              }));
              VM.show(a);
              var c = o.get(a);
              vg.focus(c)
          }
      }), r = function(t, e) {
          return uI.openUrl(function(t) {
              var n = cR(t, {
                  closeWindow: function() {
                      VM.hide(n.dialog),
                      e(n.instanceApi)
                  }
              }, h, p);
              return VM.show(n.dialog),
              n.instanceApi
          }, t)
      }, i = function(t, i) {
          return uI.open(function(t, n, e) {
              var o = n
                , r = oR({
                  dataValidator: e,
                  initialData: o,
                  internalDialog: t
              }, {
                  redial: uI.redial,
                  closeWindow: function() {
                      VM.hide(r.dialog),
                      i(r.instanceApi)
                  }
              }, p);
              return VM.show(r.dialog),
              r.instanceApi.setData(o),
              r.instanceApi
          }, t)
      }, u = function(t, d, m, g) {
          return uI.open(function(t, n, e) {
              var o, r, i, u = Tn(_n("data", e, n)), a = (o = fe(st.none()),
              {
                  clear: function() {
                      return o.set(st.none())
                  },
                  set: function(t) {
                      return o.set(st.some(t))
                  },
                  isSet: function() {
                      return o.get().isSome()
                  },
                  on: function(t) {
                      return o.get().each(t)
                  }
              }), c = p.shared.header.isPositionedAtTop(), s = function() {
                  return a.on(function(t) {
                      tp.reposition(t),
                      $D.refresh(t)
                  })
              }, l = rR({
                  dataValidator: e,
                  initialData: u,
                  internalDialog: t
              }, {
                  redial: uI.redial,
                  closeWindow: function() {
                      a.on(tp.hide),
                      h.off("ResizeEditor", s),
                      a.clear(),
                      m(l.instanceApi)
                  }
              }, p, g), f = gu(tp.sketch(ut(ut({
                  lazySink: p.shared.getSink,
                  dom: {
                      tag: "div",
                      classes: []
                  },
                  fireDismissalEventInstead: {}
              }, c ? {} : {
                  fireRepositionEventInstead: {}
              }), {
                  inlineBehaviours: ic(S([dg("window-manager-inline-events", [er(zo(), function(t, n) {
                      Yo(l.dialog, rx)
                  })])], (r = h,
                  i = c,
                  v && i ? [] : [$D.config({
                      contextual: {
                          lazyContext: function() {
                              return st.some(zu(me.fromDom(r.getContentAreaContainer())))
                          },
                          fadeInClass: "tox-dialog-dock-fadein",
                          fadeOutClass: "tox-dialog-dock-fadeout",
                          transitionClass: "tox-dialog-dock-transition"
                      },
                      modes: ["top"]
                  })]))),
                  isExtraPart: function(t, n) {
                      return Sy(e = n, ".tox-alert-dialog") || Sy(e, ".tox-confirm-dialog");
                      var e
                  }
              })));
              return a.set(f),
              tp.showWithin(f, d, pu(l.dialog), st.some(Wi())),
              v && c || ($D.refresh(f),
              h.on("ResizeEditor", s)),
              l.instanceApi.setData(u),
              ug.focusIn(l.dialog),
              l.instanceApi
          }, t)
      };
      return {
          open: function(t, n, e) {
              return n !== undefined && "toolbar" === n.inline ? u(t, p.shared.anchors.inlineDialog(), e, n.ariaAttrs) : n !== undefined && "cursor" === n.inline ? u(t, p.shared.anchors.cursor(), e, n.ariaAttrs) : i(t, e)
          },
          openUrl: function(t, n) {
              return r(t, n)
          },
          alert: function(t, n) {
              e.open(t, function() {
                  n()
              })
          },
          close: function(t) {
              t.close()
          },
          confirm: function(t, n) {
              o.open(t, function(t) {
                  n(t)
              })
          }
      }
  };
  t.add("silver", function(t) {
      var n = DM(t)
        , e = n.uiMothership
        , o = n.backstage
        , r = n.renderUI
        , i = n.getUi;
      vy(t, o.shared);
      var u = sR({
          editor: t,
          backstage: o
      });
      return {
          renderUI: r,
          getWindowManagerImpl: at(u),
          getNotificationManagerImpl: function() {
              return yp(0, {
                  backstage: o
              }, e)
          },
          ui: i()
      }
  })
}();
