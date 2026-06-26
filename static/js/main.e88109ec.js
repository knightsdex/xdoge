/*! For license information please see main.e88109ec.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          i = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          C = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          M = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          z = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          A = Object.assign;
        function F(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var I = !1;
        function B(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l])) {
                        var s = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case x:
              return "Portal";
            case S:
              return "Profiler";
            case C:
              return "StrictMode";
            case N:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === C ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Y(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Y(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Z(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function K(e, t) {
          G(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ae(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = A(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var _e = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          ke = null,
          Ce = null;
        function Se(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof xe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = wi(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          ke ? (Ce ? Ce.push(e) : (Ce = [e])) : (ke = e);
        }
        function Ee() {
          if (ke) {
            var e = ke,
              t = Ce;
            if (((Ce = ke = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Ne() {}
        var Me = !1;
        function Oe(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Me = !1), (null !== ke || null !== Ce) && (Ne(), Ee());
          }
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wi(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            je = !1;
          }
        function Le(e, t, n, r, i, a, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ae = null,
          Fe = !1,
          Ie = null,
          Be = {
            onError: function (e) {
              (De = !0), (Ae = e);
            },
          };
        function Ue(e, t, n, r, i, a, o, l, s) {
          (De = !1), (Ae = null), Le.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (He(e) !== e) throw Error(a(188));
        }
        function Ye(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return We(i), e;
                    if (o === r) return We(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var l = !1, s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = i.unstable_scheduleCallback,
          Xe = i.unstable_cancelCallback,
          Qe = i.unstable_shouldYield,
          Ze = i.unstable_requestPaint,
          Ge = i.unstable_now,
          Ke = i.unstable_getCurrentPriorityLevel,
          Je = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~i;
            0 !== l ? (r = ft(l)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function _t(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          xt,
          kt,
          Ct,
          St,
          Tt = !1,
          Et = [],
          Pt = null,
          Nt = null,
          Mt = null,
          Ot = new Map(),
          zt = new Map(),
          jt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Mt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function At(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (_e = r), n.target.dispatchEvent(r), (_e = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Mt && Ft(Mt) && (Mt = null),
            Ot.forEach(It),
            zt.forEach(It);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Et.length) {
            Ut(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== Nt && Ut(Nt, e),
              null !== Mt && Ut(Mt, e),
              Ot.forEach(t),
              zt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            At(n), null === n.blockedOn && jt.shift();
        }
        var Vt = _.ReactCurrentBatchConfig,
          Wt = !0;
        function Yt(e, t, n, r) {
          var i = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = i), (Vt.transition = a);
          }
        }
        function $t(e, t, n, r) {
          var i = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = i), (Vt.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var i = Qt(e, t, n, r);
            if (null === i) Wr(e, t, r, Xt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Pt = Dt(Pt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Nt = Dt(Nt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Mt = Dt(Mt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Ot.set(a, Dt(Ot.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      zt.set(a, Dt(zt.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && wt(a),
                  null === (a = Qt(e, t, n, r)) && Wr(e, t, r, Xt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Qt(e, t, n, r) {
          if (((Xt = null), null !== (e = yi((e = we(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Zt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ke()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Kt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Kt,
            r = n.length,
            i = "value" in Gt ? Gt.value : Gt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Jt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = A({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = A({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(A({}, pn, { dataTransfer: 0 })),
          gn = an(A({}, fn, { relatedTarget: 0 })),
          vn = an(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          _n = an(A({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Sn() {
          return Cn;
        }
        var Tn = A({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = an(Tn),
          Pn = an(
            A({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            A({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          Mn = an(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(On),
          jn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var Dn = c && "TextEvent" in window && !Ln,
          An = c && (!Rn || (Ln && 8 < Ln && 11 >= Ln)),
          Fn = String.fromCharCode(32),
          In = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Te(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function Qn(e) {
          if (q(_i(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Kn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Kn = Jn;
          } else Kn = !1;
          Gn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            Yn(t, qn, e, we(e)), Oe(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !lr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function _r(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== X(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Cr = {};
        function Sr(e) {
          if (kr[e]) return kr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Cr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Tr = Sr("animationend"),
          Er = Sr("animationiteration"),
          Pr = Sr("animationstart"),
          Nr = Sr("transitionend"),
          Mr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function zr(e, t) {
          Mr.set(e, t), s(t, [e]);
        }
        for (var jr = 0; jr < Or.length; jr++) {
          var Rr = Or[jr];
          zr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        zr(Tr, "onAnimationEnd"),
          zr(Er, "onAnimationIteration"),
          zr(Pr, "onAnimationStart"),
          zr("dblclick", "onDoubleClick"),
          zr("focusin", "onFocus"),
          zr("focusout", "onBlur"),
          zr(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, l, s, u) {
              if ((Ue.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = Ae;
                (De = !1), (Ae = null), Fe || ((Fe = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && i.isPropagationStopped()))
                    break e;
                  Ar(i, l, u), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && i.isPropagationStopped())
                  )
                    break e;
                  Ar(i, l, u), (a = s);
                }
            }
          }
          if (Fe) throw ((e = Ie), (Fe = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[mi];
          void 0 === n && (n = t[mi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Zt(t)) {
            case 1:
              var i = Yt;
              break;
            case 4:
              i = $t;
              break;
            default:
              i = qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = yi(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = a,
              i = we(n),
              o = [];
            e: {
              var l = Mr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = En;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Nn;
                    break;
                  case Tr:
                  case Er:
                  case Pr:
                    s = vn;
                    break;
                  case Nr:
                    s = Mn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = zn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = ze(h, d)) &&
                        c.push(Yr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === _e ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[hi])) &&
                  (s || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (f = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : _i(s)),
                  (p = null == u ? l : _i(u)),
                  ((l = new c(m, h + "leave", s, n, i)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  yi(i) === r &&
                    (((c = new c(d, h + "enter", u, n, i)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(o, l, s, c, !1),
                  null !== u && null !== f && Xr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? _i(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Zn;
              else if (Wn(l))
                if (Gn) g = or;
                else {
                  g = ir;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Yn(o, g, n, i)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? _i(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), _r(o, n, i);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  _r(o, n, i);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Kt = "value" in (Gt = i) ? Gt.value : Gt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, b)).length &&
                  ((b = new _n(b, e, null, n, i)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Rn && Bn(e, t))
                          ? ((e = en()), (Jt = Kt = Gt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((i = new _n("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Fr(o, t);
          });
        }
        function Yr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = ze(e, n)) && r.unshift(Yr(e, a, i)),
              null != (a = ze(e, t)) && r.push(Yr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              i
                ? null != (s = ze(n, a)) && o.unshift(Yr(n, s, l))
                : i || (null != (s = ze(n, a)) && o.push(Yr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Zr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Zr, "");
        }
        function Kr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(li);
                }
              : ri;
        function li(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function si(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Ht(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          mi = "__reactEvents$" + fi,
          gi = "__reactListeners$" + fi,
          vi = "__reactHandles$" + fi;
        function yi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function _i(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wi(e) {
          return e[pi] || null;
        }
        var xi = [],
          ki = -1;
        function Ci(e) {
          return { current: e };
        }
        function Si(e) {
          0 > ki || ((e.current = xi[ki]), (xi[ki] = null), ki--);
        }
        function Ti(e, t) {
          ki++, (xi[ki] = e.current), (e.current = t);
        }
        var Ei = {},
          Pi = Ci(Ei),
          Ni = Ci(!1),
          Mi = Ei;
        function Oi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ei;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function zi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ji() {
          Si(Ni), Si(Pi);
        }
        function Ri(e, t, n) {
          if (Pi.current !== Ei) throw Error(a(168));
          Ti(Pi, t), Ti(Ni, n);
        }
        function Li(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, V(e) || "Unknown", i));
          return A({}, n, r);
        }
        function Di(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ei),
            (Mi = Pi.current),
            Ti(Pi, e),
            Ti(Ni, Ni.current),
            !0
          );
        }
        function Ai(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Li(e, t, Mi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Si(Ni),
              Si(Pi),
              Ti(Pi, e))
            : Si(Ni),
            Ti(Ni, n);
        }
        var Fi = null,
          Ii = !1,
          Bi = !1;
        function Ui(e) {
          null === Fi ? (Fi = [e]) : Fi.push(e);
        }
        function Hi() {
          if (!Bi && null !== Fi) {
            Bi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fi = null), (Ii = !1);
            } catch (i) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), qe(Je, Hi), i);
            } finally {
              (bt = t), (Bi = !1);
            }
          }
          return null;
        }
        var Vi = [],
          Wi = 0,
          Yi = null,
          $i = 0,
          qi = [],
          Xi = 0,
          Qi = null,
          Zi = 1,
          Gi = "";
        function Ki(e, t) {
          (Vi[Wi++] = $i), (Vi[Wi++] = Yi), (Yi = e), ($i = t);
        }
        function Ji(e, t, n) {
          (qi[Xi++] = Zi), (qi[Xi++] = Gi), (qi[Xi++] = Qi), (Qi = e);
          var r = Zi;
          e = Gi;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Zi = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Gi = a + e);
          } else (Zi = (1 << a) | (n << i) | r), (Gi = e);
        }
        function ea(e) {
          null !== e.return && (Ki(e, 1), Ji(e, 1, 0));
        }
        function ta(e) {
          for (; e === Yi; )
            (Yi = Vi[--Wi]), (Vi[Wi] = null), ($i = Vi[--Wi]), (Vi[Wi] = null);
          for (; e === Qi; )
            (Qi = qi[--Xi]),
              (qi[Xi] = null),
              (Gi = qi[--Xi]),
              (qi[Xi] = null),
              (Zi = qi[--Xi]),
              (qi[Xi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qi ? { id: Zi, overflow: Gi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = na;
                t && la(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (sa(e)) throw (da(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ui(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var e = ra; e; ) e = ui(e.nextSibling);
        }
        function pa() {
          (ra = na = null), (ia = !1);
        }
        function ha(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var ma = _.ReactCurrentBatchConfig;
        function ga(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function va(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ya(e) {
          return (0, e._init)(e._payload);
        }
        function ba(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = ju(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === z &&
                    ya(a) === t.type))
              ? (((r = i(t, n.props)).ref = ga(e, t, n)), (r.return = e), r)
              : (((r = Ru(n.type, n.key, n.props, null, e.mode, r)).ref = ga(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Au("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ru(t.type, t.key, t.props, null, e.mode, n)).ref = ga(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case z:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Lu(t, e.mode, n, null)).return = e), t;
              va(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? u(e, t, n, r) : null;
                case x:
                  return n.key === i ? c(e, t, n, r) : null;
                case z:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== i ? null : f(e, t, n, r, null);
              va(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case z:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || L(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              va(t, r);
            }
            return null;
          }
          function m(i, a, l, s) {
            for (
              var u = null, c = null, f = a, m = (a = 0), g = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(i, f, l[m], s);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(i, f),
                (a = o(v, a, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (f = g);
            }
            if (m === l.length) return n(i, f), ia && Ki(i, m), u;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(i, l[m], s)) &&
                  ((a = o(f, a, m)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ia && Ki(i, m), u;
            }
            for (f = r(i, f); m < l.length; m++)
              null !== (g = h(f, i, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (a = o(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ki(i, m),
              u
            );
          }
          function g(i, l, s, u) {
            var c = L(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), m = l, g = (l = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(i, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(i, m),
                (l = o(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (y.done) return n(i, m), ia && Ki(i, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = d(i, y.value, u)) &&
                  ((l = o(y, l, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ia && Ki(i, g), c;
            }
            for (m = r(i, m); !y.done; g++, y = s.next())
              null !== (y = h(m, i, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = o(y, l, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ki(i, g),
              c
            );
          }
          return function e(r, a, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === z &&
                            ya(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = ga(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((a = Lu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = a))
                      : (((s = Ru(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = ga(r, a, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Fu(o, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case z:
                  return e(r, a, (c = o._init)(o._payload), s);
              }
              if (te(o)) return m(r, a, o, s);
              if (L(o)) return g(r, a, o, s);
              va(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Au(o, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var _a = ba(!0),
          wa = ba(!1),
          xa = Ci(null),
          ka = null,
          Ca = null,
          Sa = null;
        function Ta() {
          Sa = Ca = ka = null;
        }
        function Ea(e) {
          var t = xa.current;
          Si(xa), (e._currentValue = t);
        }
        function Pa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Na(e, t) {
          (ka = e),
            (Sa = Ca = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function Ma(e) {
          var t = e._currentValue;
          if (Sa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ca)
            ) {
              if (null === ka) throw Error(a(308));
              (Ca = e), (ka.dependencies = { lanes: 0, firstContext: e });
            } else Ca = Ca.next = e;
          return t;
        }
        var Oa = null;
        function za(e) {
          null === Oa ? (Oa = [e]) : Oa.push(e);
        }
        function ja(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), za(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Ra(e, r)
          );
        }
        function Ra(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var La = !1;
        function Da(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Aa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ia(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Ra(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), za(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Ra(e, n)
          );
        }
        function Ba(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ua(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ha(e, t, n, r) {
          var i = e.updateQueue;
          La = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = u = s = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = A({}, f, d);
                      break e;
                    case 2:
                      La = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (i.baseState = s),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (Ds |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Va(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Wa = {},
          Ya = Ci(Wa),
          $a = Ci(Wa),
          qa = Ci(Wa);
        function Xa(e) {
          if (e === Wa) throw Error(a(174));
          return e;
        }
        function Qa(e, t) {
          switch ((Ti(qa, t), Ti($a, e), Ti(Ya, Wa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Si(Ya), Ti(Ya, t);
        }
        function Za() {
          Si(Ya), Si($a), Si(qa);
        }
        function Ga(e) {
          Xa(qa.current);
          var t = Xa(Ya.current),
            n = se(t, e.type);
          t !== n && (Ti($a, e), Ti(Ya, n));
        }
        function Ka(e) {
          $a.current === e && (Si(Ya), Si($a));
        }
        var Ja = Ci(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = _.ReactCurrentDispatcher,
          io = _.ReactCurrentBatchConfig,
          ao = 0,
          oo = null,
          lo = null,
          so = null,
          uo = !1,
          co = !1,
          fo = 0,
          po = 0;
        function ho() {
          throw Error(a(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function go(e, t, n, r, i, o) {
          if (
            ((ao = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Jo : el),
            (e = n(r, i)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (so = lo = null),
                (t.updateQueue = null),
                (ro.current = tl),
                (e = n(r, i));
            } while (co);
          }
          if (
            ((ro.current = Ko),
            (t = null !== lo && null !== lo.next),
            (ao = 0),
            (so = lo = oo = null),
            (uo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vo() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === so ? (oo.memoizedState = so = e) : (so = so.next = e), so
          );
        }
        function bo() {
          if (null === lo) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = lo.next;
          var t = null === so ? oo.memoizedState : so.next;
          if (null !== t) (so = t), (lo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (lo = e).memoizedState,
              baseState: lo.baseState,
              baseQueue: lo.baseQueue,
              queue: lo.queue,
              next: null,
            }),
              null === so ? (oo.memoizedState = so = e) : (so = so.next = e);
          }
          return so;
        }
        function _o(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function wo(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = lo,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var l = i.next;
              (i.next = o.next), (o.next = l);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((ao & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (oo.lanes |= f),
                  (Ds |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (oo.lanes |= o), (Ds |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function xo(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== i);
            lr(o, t.memoizedState) || (bl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ko() {}
        function Co(e, t) {
          var n = oo,
            r = bo(),
            i = t(),
            o = !lr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (bl = !0)),
            (r = r.queue),
            Do(Eo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== so && 1 & so.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oo(9, To.bind(null, n, r, i, t), void 0, null),
              null === Ns)
            )
              throw Error(a(349));
            0 !== (30 & ao) || So(n, t, i);
          }
          return i;
        }
        function So(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Po(t) && No(e);
        }
        function Eo(e, t, n) {
          return n(function () {
            Po(t) && No(e);
          });
        }
        function Po(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function No(e) {
          var t = Ra(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Mo(e) {
          var t = yo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _o,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Xo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function Oo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zo() {
          return bo().memoizedState;
        }
        function jo(e, t, n, r) {
          var i = yo();
          (oo.flags |= e),
            (i.memoizedState = Oo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ro(e, t, n, r) {
          var i = bo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== lo) {
            var o = lo.memoizedState;
            if (((a = o.destroy), null !== r && mo(r, o.deps)))
              return void (i.memoizedState = Oo(t, n, a, r));
          }
          (oo.flags |= e), (i.memoizedState = Oo(1 | t, n, a, r));
        }
        function Lo(e, t) {
          return jo(8390656, 8, e, t);
        }
        function Do(e, t) {
          return Ro(2048, 8, e, t);
        }
        function Ao(e, t) {
          return Ro(4, 2, e, t);
        }
        function Fo(e, t) {
          return Ro(4, 4, e, t);
        }
        function Io(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Bo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ro(4, 4, Io.bind(null, t, e), n)
          );
        }
        function Uo() {}
        function Ho(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wo(e, t, n) {
          return 0 === (21 & ao)
            ? (e.baseState && ((e.baseState = !1), (bl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (oo.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function Yo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = io.transition;
          io.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (io.transition = r);
          }
        }
        function $o() {
          return bo().memoizedState;
        }
        function qo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Qo(e))
          )
            Zo(t, n);
          else if (null !== (n = ja(e, t, n, r))) {
            nu(n, e, r, eu()), Go(n, t, r);
          }
        }
        function Xo(e, t, n) {
          var r = tu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Qo(e)) Zo(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), za(t))
                      : ((i.next = s.next), (s.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = ja(e, t, i, r)) &&
              (nu(n, e, r, (i = eu())), Go(n, t, r));
          }
        }
        function Qo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Zo(e, t) {
          co = uo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Go(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Ko = {
            readContext: Ma,
            useCallback: ho,
            useContext: ho,
            useEffect: ho,
            useImperativeHandle: ho,
            useInsertionEffect: ho,
            useLayoutEffect: ho,
            useMemo: ho,
            useReducer: ho,
            useRef: ho,
            useState: ho,
            useDebugValue: ho,
            useDeferredValue: ho,
            useTransition: ho,
            useMutableSource: ho,
            useSyncExternalStore: ho,
            useId: ho,
            unstable_isNewReconciler: !1,
          },
          Jo = {
            readContext: Ma,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ma,
            useEffect: Lo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                jo(4194308, 4, Io.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return jo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return jo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: Mo,
            useDebugValue: Uo,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = Mo(!1),
                t = e[0];
              return (
                (e = Yo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                i = yo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ns)) throw Error(a(349));
                0 !== (30 & ao) || So(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Lo(Eo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Oo(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = Ns.identifierPrefix;
              if (ia) {
                var n = Gi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Zi & ~(1 << (32 - ot(Zi) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Ma,
            useCallback: Ho,
            useContext: Ma,
            useEffect: Do,
            useImperativeHandle: Bo,
            useInsertionEffect: Ao,
            useLayoutEffect: Fo,
            useMemo: Vo,
            useReducer: wo,
            useRef: zo,
            useState: function () {
              return wo(_o);
            },
            useDebugValue: Uo,
            useDeferredValue: function (e) {
              return Wo(bo(), lo.memoizedState, e);
            },
            useTransition: function () {
              return [wo(_o)[0], bo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: Co,
            useId: $o,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Ma,
            useCallback: Ho,
            useContext: Ma,
            useEffect: Do,
            useImperativeHandle: Bo,
            useInsertionEffect: Ao,
            useLayoutEffect: Fo,
            useMemo: Vo,
            useReducer: xo,
            useRef: zo,
            useState: function () {
              return xo(_o);
            },
            useDebugValue: Uo,
            useDeferredValue: function (e) {
              var t = bo();
              return null === lo
                ? (t.memoizedState = e)
                : Wo(t, lo.memoizedState, e);
            },
            useTransition: function () {
              return [xo(_o)[0], bo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: Co,
            useId: $o,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var il = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Fa(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, i)) && (nu(t, e, i, r), Ba(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Fa(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, i)) && (nu(t, e, i, r), Ba(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              i = Fa(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Ia(e, i, r)) && (nu(t, e, r, n), Ba(t, e, r));
          },
        };
        function al(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, a);
        }
        function ol(e, t, n) {
          var r = !1,
            i = Ei,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ma(a))
              : ((i = zi(t) ? Mi : Pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oi(e, i)
                  : Ei)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = il),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && il.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Da(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ma(a))
            : ((a = zi(t) ? Mi : Pi.current), (i.context = Oi(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (rl(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && il.enqueueReplaceState(i, i.state, null),
              Ha(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function cl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Ys = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Su.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fa(-1, 1)).tag = 2), Ia(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var yl = _.ReactCurrentOwner,
          bl = !1;
        function _l(e, t, n, r) {
          t.child = null === e ? wa(t, null, n, r) : _a(t, e.child, n, r);
        }
        function wl(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Na(t, i),
            (r = go(e, t, n, r, a, i)),
            (n = vo()),
            null === e || bl
              ? (ia && n && ea(t), (t.flags |= 1), _l(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wl(e, t, i))
          );
        }
        function xl(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              zu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ru(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), kl(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = ju(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Wl(e, t, i);
              0 !== (131072 & e.flags) && (bl = !0);
            }
          }
          return Tl(e, t, n, r, i);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ti(js, zs),
                (zs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ti(js, zs),
                  (zs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ti(js, zs),
                (zs |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ti(js, zs),
              (zs |= r);
          return _l(e, t, i, n), t.child;
        }
        function Sl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tl(e, t, n, r, i) {
          var a = zi(n) ? Mi : Pi.current;
          return (
            (a = Oi(t, a)),
            Na(t, i),
            (n = go(e, t, n, r, a, i)),
            (r = vo()),
            null === e || bl
              ? (ia && r && ea(t), (t.flags |= 1), _l(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wl(e, t, i))
          );
        }
        function El(e, t, n, r, i) {
          if (zi(n)) {
            var a = !0;
            Di(t);
          } else a = !1;
          if ((Na(t, i), null === t.stateNode))
            Vl(e, t), ol(t, n, r), sl(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ma(u))
              : (u = Oi(t, (u = zi(n) ? Mi : Pi.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && ll(t, o, r, u)),
              (La = !1);
            var d = t.memoizedState;
            (o.state = d),
              Ha(t, r, o, i),
              (s = t.memoizedState),
              l !== r || d !== s || Ni.current || La
                ? ("function" === typeof c &&
                    (rl(t, n, c, r), (s = t.memoizedState)),
                  (l = La || al(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Aa(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : nl(t.type, l)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ma(s))
                : (s = Oi(t, (s = zi(n) ? Mi : Pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== s) && ll(t, o, r, s)),
              (La = !1),
              (d = t.memoizedState),
              (o.state = d),
              Ha(t, r, o, i);
            var h = t.memoizedState;
            l !== f || d !== h || Ni.current || La
              ? ("function" === typeof p &&
                  (rl(t, n, p, r), (h = t.memoizedState)),
                (u = La || al(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, a, i);
        }
        function Pl(e, t, n, r, i, a) {
          Sl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Ai(t, n, !1), Wl(e, t, a);
          (r = t.stateNode), (yl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = _a(t, e.child, null, a)),
                (t.child = _a(t, null, l, a)))
              : _l(e, t, l, a),
            (t.memoizedState = r.state),
            i && Ai(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ri(0, t.context, !1),
            Qa(e, t.containerInfo);
        }
        function Ml(e, t, n, r, i) {
          return pa(), ha(i), (t.flags |= 256), _l(e, t, n, r), t.child;
        }
        var Ol,
          zl,
          jl,
          Rl,
          Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Al(e, t, n) {
          var r,
            i = t.pendingProps,
            o = Ja.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ti(Ja, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  l
                    ? ((i = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Du(s, i, 0, null)),
                      (e = Lu(e, i, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Ll),
                      e)
                    : Fl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = cl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Lu(o, i, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && _a(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Ll),
                    o);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Il(e, t, l, (r = cl((o = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), bl || s)) {
                if (null !== (r = Ns)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Ra(e, i), nu(r, e, i, -1));
                }
                return mu(), Il(e, t, l, (r = cl(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Eu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((qi[Xi++] = Zi),
                    (qi[Xi++] = Gi),
                    (qi[Xi++] = Qi),
                    (Zi = e.id),
                    (Gi = e.overflow),
                    (Qi = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, i, r, o, n);
          if (l) {
            (l = i.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = ju(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = ju(r, l))
                : ((l = Lu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (i.return = t),
              (i.sibling = l),
              (t.child = i),
              (i = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ll),
              i
            );
          }
          return (
            (e = (l = e.child).sibling),
            (i = ju(l, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Fl(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && ha(r),
            _a(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pa(e.return, t, n);
        }
        function Ul(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((_l(e, t, r.children, n), 0 !== (2 & (r = Ja.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ti(Ja, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Ul(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === eo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Ul(t, !0, n, null, a);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = ju((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = ju(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Yl(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $l(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $l(t), null;
            case 1:
            case 17:
              return zi(t.type) && ji(), $l(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Za(),
                Si(Ni),
                Si(Pi),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (ou(aa), (aa = null)))),
                zl(e, t),
                $l(t),
                null
              );
            case 5:
              Ka(t);
              var i = Xa(qa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                jl(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return $l(t), null;
                }
                if (((e = Xa(Ya.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Lr.length; i++) Ir(Lr[i], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      Z(r, o), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Ir("invalid", r);
                  }
                  for (var s in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), J(r, o, !0);
                      break;
                    case "textarea":
                      $(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    Ol(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Lr.length; i++) Ir(Lr[i], e);
                        i = r;
                        break;
                      case "source":
                        Ir("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (i = r);
                        break;
                      case "details":
                        Ir("toggle", e), (i = r);
                        break;
                      case "input":
                        Z(e, r), (i = Q(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = A({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Ir("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ir("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), J(e, r, !1);
                        break;
                      case "textarea":
                        $(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $l(t), null;
            case 6:
              if (e && null != t.stateNode) Rl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Xa(qa.current)), Xa(Ya.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return $l(t), null;
            case 13:
              if (
                (Si(Ja),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  da(), pa(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[di] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $l(t), (o = !1);
                } else null !== aa && (ou(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Ja.current)
                        ? 0 === Rs && (Rs = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $l(t),
                  null);
            case 4:
              return (
                Za(),
                zl(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                $l(t),
                null
              );
            case 10:
              return Ea(t.type._context), $l(t), null;
            case 19:
              if ((Si(Ja), null === (o = t.memoizedState))) return $l(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Yl(o, !1);
                else {
                  if (0 !== Rs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = eo(e))) {
                        for (
                          t.flags |= 128,
                            Yl(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ti(Ja, (1 & Ja.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Hs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Yl(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Yl(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ia)
                    )
                      return $l(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Yl(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = Ja.current),
                  Ti(Ja, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($l(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zs) &&
                    ($l(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $l(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Xl(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                zi(t.type) && ji(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Za(),
                Si(Ni),
                Si(Pi),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Ka(t), null;
            case 13:
              if (
                (Si(Ja),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Si(Ja), null;
            case 4:
              return Za(), null;
            case 10:
              return Ea(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ol = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zl = function () {}),
          (jl = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Xa(Ya.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = Q(e, i)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (i = A({}, i, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var s = i[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ir("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Rl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Zl = !1,
          Gl = "function" === typeof WeakSet ? WeakSet : Set,
          Kl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && es(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function is(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function as(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), as(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[mi],
              delete t[gi],
              delete t[vi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Zl || Jl(n, t);
            case 6:
              var r = cs,
                i = fs;
              (cs = null),
                ds(e, t, n),
                (fs = i),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? si(e.parentNode, n)
                      : 1 === e.nodeType && si(e, n),
                    Ht(e))
                  : si(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (i = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      es(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Zl &&
                (Jl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Cu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zl = (r = Zl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Zl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(a(160));
                ps(o, l, i), (cs = null), (fs = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Cu(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Cu(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(i, o),
                      be(s, l);
                    var c = be(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? ge(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        K(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(i, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[pi] = o;
                  } catch (g) {
                    Cu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Us = Ge())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zl = (c = Zl) || f), ms(t, e), (Zl = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Kl = e, f = e.child; null !== f; ) {
                    for (d = Kl = f; null !== Kl; ) {
                      switch (((h = (p = Kl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Cu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Kl = h)) : ws(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (i = d.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    us(e, ls(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, ls(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Cu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Kl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Kl; ) {
            var i = Kl,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Ql;
              if (!o) {
                var l = i.alternate,
                  s = (null !== l && null !== l.memoizedState) || Zl;
                l = Ql;
                var u = Zl;
                if (((Ql = o), (Zl = s) && !u))
                  for (Kl = i; null !== Kl; )
                    (s = (o = Kl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? xs(i)
                        : null !== s
                        ? ((s.return = o), (Kl = s))
                        : xs(i);
                for (; null !== a; ) (Kl = a), bs(a, t, n), (a = a.sibling);
                (Kl = i), (Ql = l), (Zl = u);
              }
              _s(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Kl = a))
                : _s(e);
          }
        }
        function _s(e) {
          for (; null !== Kl; ) {
            var t = Kl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zl)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Va(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Va(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Zl || (512 & t.flags && is(t));
              } catch (p) {
                Cu(t, t.return, p);
              }
            }
            if (t === e) {
              Kl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Kl = n);
              break;
            }
            Kl = t.return;
          }
        }
        function ws(e) {
          for (; null !== Kl; ) {
            var t = Kl;
            if (t === e) {
              Kl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Kl = n);
              break;
            }
            Kl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Kl; ) {
            var t = Kl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Cu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Cu(t, i, s);
                    }
                  }
                  var a = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Cu(t, a, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Cu(t, o, s);
                  }
              }
            } catch (s) {
              Cu(t, t.return, s);
            }
            if (t === e) {
              Kl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Kl = l);
              break;
            }
            Kl = t.return;
          }
        }
        var ks,
          Cs = Math.ceil,
          Ss = _.ReactCurrentDispatcher,
          Ts = _.ReactCurrentOwner,
          Es = _.ReactCurrentBatchConfig,
          Ps = 0,
          Ns = null,
          Ms = null,
          Os = 0,
          zs = 0,
          js = Ci(0),
          Rs = 0,
          Ls = null,
          Ds = 0,
          As = 0,
          Fs = 0,
          Is = null,
          Bs = null,
          Us = 0,
          Hs = 1 / 0,
          Vs = null,
          Ws = !1,
          Ys = null,
          $s = null,
          qs = !1,
          Xs = null,
          Qs = 0,
          Zs = 0,
          Gs = null,
          Ks = -1,
          Js = 0;
        function eu() {
          return 0 !== (6 & Ps) ? Ge() : -1 !== Ks ? Ks : (Ks = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Os
            ? Os & -Os
            : null !== ma.transition
            ? (0 === Js && (Js = mt()), Js)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Zt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Zs) throw ((Zs = 0), (Gs = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & Ps) && e === Ns) ||
              (e === Ns && (0 === (2 & Ps) && (As |= n), 4 === Rs && lu(e, Os)),
              ru(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Hs = Ge() + 500), Ii && Hi()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                l = 1 << o,
                s = i[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (i[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ns ? Os : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ii = !0), Ui(e);
                  })(su.bind(null, e))
                : Ui(su.bind(null, e)),
                oi(function () {
                  0 === (6 & Ps) && Hi();
                }),
                (n = null);
            else {
              switch (_t(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Ks = -1), (Js = 0), 0 !== (6 & Ps))) throw Error(a(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ns ? Os : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var i = Ps;
            Ps |= 2;
            var o = hu();
            for (
              (Ns === e && Os === t) ||
              ((Vs = null), (Hs = Ge() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Ta(),
              (Ss.current = o),
              (Ps = i),
              null !== Ms ? (t = 0) : ((Ns = null), (Os = 0), (t = Rs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = au(e, i))),
              1 === t)
            )
              throw ((n = Ls), du(e, 0), lu(e, r), ru(e, Ge()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(a(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = au(e, o))),
                  1 === t))
              )
                throw ((n = Ls), du(e, 0), lu(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  wu(e, Bs, Vs);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(wu.bind(null, e, Bs, Vs), t);
                    break;
                  }
                  wu(e, Bs, Vs);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > i && (i = l), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(wu.bind(null, e, Bs, Vs), r);
                    break;
                  }
                  wu(e, Bs, Vs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function lu(e, t) {
          for (
            t &= ~Fs,
              t &= ~As,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ps)) throw Error(a(327));
          xu();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Ls), du(e, 0), lu(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Bs, Vs),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Hs = Ge() + 500), Ii && Hi());
          }
        }
        function cu(e) {
          null !== Xs && 0 === Xs.tag && 0 === (6 & Ps) && xu();
          var t = Ps;
          Ps |= 1;
          var n = Es.transition,
            r = bt;
          try {
            if (((Es.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Es.transition = n), 0 === (6 & (Ps = t)) && Hi();
          }
        }
        function fu() {
          (zs = js.current), Si(js);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Ms))
            for (n = Ms.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    ji();
                  break;
                case 3:
                  Za(), Si(Ni), Si(Pi), no();
                  break;
                case 5:
                  Ka(r);
                  break;
                case 4:
                  Za();
                  break;
                case 13:
                case 19:
                  Si(Ja);
                  break;
                case 10:
                  Ea(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ns = e),
            (Ms = e = ju(e.current, null)),
            (Os = zs = t),
            (Rs = 0),
            (Ls = null),
            (Fs = As = Ds = 0),
            (Bs = Is = null),
            null !== Oa)
          ) {
            for (t = 0; t < Oa.length; t++)
              if (null !== (r = (n = Oa[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Oa = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ms;
            try {
              if ((Ta(), (ro.current = Ko), uo)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                uo = !1;
              }
              if (
                ((ao = 0),
                (so = lo = oo = null),
                (co = !1),
                (fo = 0),
                (Ts.current = null),
                null === n || null === n.return)
              ) {
                (Rs = 1), (Ls = t), (Ms = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var v = gl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vl(v, l, s, 0, t),
                      ha(ul(u, s));
                    break e;
                  }
                }
                (o = u = ul(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Is ? (Is = [o]) : Is.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ua(o, pl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ua(o, hl(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              _u(n);
            } catch (_) {
              (t = _), Ms === n && null !== n && (Ms = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Ss.current;
          return (Ss.current = Ko), null === e ? Ko : e;
        }
        function mu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === Ns ||
              (0 === (268435455 & Ds) && 0 === (268435455 & As)) ||
              lu(Ns, Os);
        }
        function gu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hu();
          for ((Ns === e && Os === t) || ((Vs = null), du(e, t)); ; )
            try {
              vu();
              break;
            } catch (i) {
              pu(e, i);
            }
          if ((Ta(), (Ps = n), (Ss.current = r), null !== Ms))
            throw Error(a(261));
          return (Ns = null), (Os = 0), Rs;
        }
        function vu() {
          for (; null !== Ms; ) bu(Ms);
        }
        function yu() {
          for (; null !== Ms && !Qe(); ) bu(Ms);
        }
        function bu(e) {
          var t = ks(e.alternate, e, zs);
          (e.memoizedProps = e.pendingProps),
            null === t ? _u(e) : (Ms = t),
            (Ts.current = null);
        }
        function _u(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, zs))) return void (Ms = n);
            } else {
              if (null !== (n = Xl(n, t)))
                return (n.flags &= 32767), void (Ms = n);
              if (null === e) return (Rs = 6), void (Ms = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ms = t);
            Ms = t = e;
          } while (null !== t);
          0 === Rs && (Rs = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            i = Es.transition;
          try {
            (Es.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Xs);
                if (0 !== (6 & Ps)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Ns && ((Ms = Ns = null), (Os = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Nu(tt, function () {
                      return xu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Es.transition), (Es.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Ts.current = null),
                    (function (e, t) {
                      if (((ei = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (s = l + i),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (s = l),
                                    p === o && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Kl = t;
                        null !== Kl;

                      )
                        if (
                          ((e = (t = Kl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Kl = e);
                        else
                          for (; null !== Kl; ) {
                            t = Kl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : nl(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var _ = t.stateNode.containerInfo;
                                    1 === _.nodeType
                                      ? (_.textContent = "")
                                      : 9 === _.nodeType &&
                                        _.documentElement &&
                                        _.removeChild(_.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Cu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Kl = e);
                              break;
                            }
                            Kl = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ti),
                    (Wt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    ys(n, e, i),
                    Ze(),
                    (Ps = s),
                    (bt = l),
                    (Es.transition = o);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Xs = e), (Qs = i)),
                  (o = e.pendingLanes),
                  0 === o && ($s = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Ws) throw ((Ws = !1), (e = Ys), (Ys = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && xu(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gs
                      ? Zs++
                      : ((Zs = 0), (Gs = e))
                    : (Zs = 0),
                  Hi();
              })(e, t, n, r);
          } finally {
            (Es.transition = i), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Xs) {
            var e = _t(Qs),
              t = Es.transition,
              n = bt;
            try {
              if (((Es.transition = null), (bt = 16 > e ? 16 : e), null === Xs))
                var r = !1;
              else {
                if (((e = Xs), (Xs = null), (Qs = 0), 0 !== (6 & Ps)))
                  throw Error(a(331));
                var i = Ps;
                for (Ps |= 4, Kl = e.current; null !== Kl; ) {
                  var o = Kl,
                    l = o.child;
                  if (0 !== (16 & Kl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Kl = c; null !== Kl; ) {
                          var f = Kl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Kl = d);
                          else
                            for (; null !== Kl; ) {
                              var p = (f = Kl).sibling,
                                h = f.return;
                              if ((as(f), f === c)) {
                                Kl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Kl = p);
                                break;
                              }
                              Kl = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Kl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Kl = l);
                  else
                    e: for (; null !== Kl; ) {
                      if (0 !== (2048 & (o = Kl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Kl = y);
                        break e;
                      }
                      Kl = o.return;
                    }
                }
                var b = e.current;
                for (Kl = b; null !== Kl; ) {
                  var _ = (l = Kl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== _)
                    (_.return = l), (Kl = _);
                  else
                    e: for (l = b; null !== Kl; ) {
                      if (0 !== (2048 & (s = Kl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (x) {
                          Cu(s, s.return, x);
                        }
                      if (s === l) {
                        Kl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Kl = w);
                        break e;
                      }
                      Kl = s.return;
                    }
                }
                if (
                  ((Ps = i),
                  Hi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Es.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Ia(e, (t = pl(0, (t = ul(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (t = Ia(t, (e = hl(t, (e = ul(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ns === e &&
              (Os & n) === n &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Os) === Os && 500 > Ge() - Us)
                ? du(e, 0)
                : (Fs |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ra(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Eu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Nu(e, t) {
          return qe(e, t);
        }
        function Mu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Mu(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ju(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ru(e, t, n, r, i, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Lu(n.children, i, o, t);
              case C:
                (l = 8), (i |= 8);
                break;
              case S:
                return (
                  ((e = Ou(12, n, t, 2 | i)).elementType = S), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Ou(13, n, t, i)).elementType = N), (e.lanes = o), e
                );
              case M:
                return (
                  ((e = Ou(19, n, t, i)).elementType = M), (e.lanes = o), e
                );
              case j:
                return Du(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case E:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case z:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Lu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Au(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Ou(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Iu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, i, a, o, l, s) {
          return (
            (e = new Iu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ou(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Da(a),
            e
          );
        }
        function Uu(e) {
          if (!e) return Ei;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (zi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (zi(n)) return Li(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, i, a, o, l, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, a, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((a = Fa((r = eu()), (i = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ia(n, a, i),
            (e.current.lanes = i),
            vt(e, i, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var i = t.current,
            a = eu(),
            o = tu(i);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fa(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ia(i, t, o)) && (nu(e, i, o, a), Ba(e, i, o)),
            o
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ni.current) bl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), pa();
                        break;
                      case 5:
                        Ga(t);
                        break;
                      case 1:
                        zi(t.type) && Di(t);
                        break;
                      case 4:
                        Qa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ti(xa, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ti(Ja, 1 & Ja.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Al(e, t, n)
                            : (Ti(Ja, 1 & Ja.current),
                              null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        Ti(Ja, 1 & Ja.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ti(Ja, Ja.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              bl = 0 !== (131072 & e.flags);
            }
          else (bl = !1), ia && 0 !== (1048576 & t.flags) && Ji(t, $i, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vl(e, t), (e = t.pendingProps);
              var i = Oi(t, Pi.current);
              Na(t, n), (i = go(null, t, r, e, i, n));
              var o = vo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    zi(r) ? ((o = !0), Di(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Da(t),
                    (i.updater = il),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Pl(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    _l(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vl(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  i)
                ) {
                  case 0:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = El(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Tl(e, t, r, (i = t.elementType === r ? i : nl(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                El(e, t, r, (i = t.elementType === r ? i : nl(r, i)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Aa(e, t),
                  Ha(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ml(e, t, r, n, (i = ul(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Ml(e, t, r, n, (i = ul(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ui(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = wa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === i)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  _l(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ga(t),
                null === e && ua(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Sl(e, t),
                _l(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Al(e, t, n);
            case 4:
              return (
                Qa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = _a(t, null, r, n)) : _l(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                wl(e, t, r, (i = t.elementType === r ? i : nl(r, i)), n)
              );
            case 7:
              return _l(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _l(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = i.value),
                  Ti(xa, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === i.children && !Ni.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Fa(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Pa(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Pa(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                _l(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Na(t, n),
                (r = r((i = Ma(i)))),
                (t.flags |= 1),
                _l(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = nl((r = t.type), t.pendingProps)),
                xl(e, t, r, (i = nl(r.type, i)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : nl(r, i)),
                Vl(e, t),
                (t.tag = 1),
                zi(r) ? ((e = !0), Di(t)) : (e = !1),
                Na(t, n),
                ol(t, r, i),
                sl(t, r, i, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xu(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          this._internalRoot = e;
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ku() {}
        function Ju(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = Wu(o);
                l.call(e);
              };
            }
            Vu(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(o);
                    a.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Ku);
                return (
                  (e._reactRootContainer = o),
                  (e[hi] = o.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Wu(s);
                  l.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Ku);
              return (
                (e._reactRootContainer = s),
                (e[hi] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, i, r);
          return Wu(o);
        }
        (Qu.prototype.render = Xu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Qu.prototype.unmount = Xu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & Ps) && ((Hs = Ge() + 500), Hi()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ra(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ra(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ra(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((K(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = wi(r);
                      if (!i) throw Error(a(90));
                      q(r), K(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Ne = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [bi, _i, wi, Te, Ee, uu],
          },
          tc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ye(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (it = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Xu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Ye(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gu(t)) throw Error(a(200));
            return Ju(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              l = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, i, 0, o, l)),
              (e[hi] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gu(t)) throw Error(a(200));
            return Ju(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Ju(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Ju(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var _ = (b.prototype = new y());
        (_.constructor = b), m(_, v.prototype), (_.isPureReactComponent = !0);
        var w = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          k = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var i,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              x.call(t, i) && !C.hasOwnProperty(i) && (a[i] = t[i]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (s = e.defaultProps)) void 0 === a[i] && (a[i] = s[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, i, a, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === a ? "." + P(s, 0) : a),
              w(o)
                ? ((i = ""),
                  null != e && (i = e.replace(E, "$&/") + "/"),
                  N(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((l = e[u]), u);
              s += N(l, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += N((l = l.value), t, i, (c = a + P(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z = { current: null },
          j = { transition: null },
          R = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: k,
          };
        function L() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.act = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = m({}, e.props),
              a = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = L),
          (t.useCallback = function (e, t) {
            return z.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return z.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return z.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return z.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return z.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return z.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return z.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return z.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return z.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return z.current.useRef(e);
          }),
          (t.useState = function (e) {
            return z.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return z.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return z.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < i && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function _(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), _(e), !m))
            if (null !== r(u)) (m = !0), j(x);
            else {
              var t = r(c);
              null !== t && R(w, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), y(T), (T = -1)), (h = !0);
          var a = p;
          try {
            for (
              _(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var l = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && i(u),
                  _(n);
              } else i(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && R(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          C = !1,
          S = null,
          T = -1,
          E = 5,
          P = -1;
        function N() {
          return !(t.unstable_now() - P < E);
        }
        function M() {
          if (null !== S) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? k() : ((C = !1), (S = null));
            }
          } else C = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            z = O.port2;
          (O.port1.onmessage = M),
            (k = function () {
              z.postMessage(null);
            });
        } else
          k = function () {
            v(M, 0);
          };
        function j(e) {
          (S = e), C || ((C = !0), k());
        }
        function R(e, n) {
          T = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), j(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(T), (T = -1)) : (g = !0), R(w, a - o)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), j(x))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".1625e3e7.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "alienblue:";
      n.l = (r, i, a, o) => {
        if (e[r]) e[r].push(i);
        else {
          var l, s;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + a
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [i]);
          var d = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = o),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            a,
            o = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (s) s(n);
          }
          for (t && t(r); u < o.length; u++)
            (a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkalienblue = self.webpackChunkalienblue || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n(43),
    i = n(391);
  function a(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function o(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  var l,
    s,
    u,
    c,
    f,
    d,
    p,
    h,
    m,
    g,
    v,
    y = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    b = { duration: 0.5, overwrite: !1, delay: 0 },
    _ = 1e8,
    w = 1e-8,
    x = 2 * Math.PI,
    k = x / 4,
    C = 0,
    S = Math.sqrt,
    T = Math.cos,
    E = Math.sin,
    P = function (e) {
      return "string" === typeof e;
    },
    N = function (e) {
      return "function" === typeof e;
    },
    M = function (e) {
      return "number" === typeof e;
    },
    O = function (e) {
      return "undefined" === typeof e;
    },
    z = function (e) {
      return "object" === typeof e;
    },
    j = function (e) {
      return !1 !== e;
    },
    R = function () {
      return "undefined" !== typeof window;
    },
    L = function (e) {
      return N(e) || P(e);
    },
    D =
      ("function" === typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    A = Array.isArray,
    F = /(?:-?\.?\d|\.)+/gi,
    I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    U = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    H = /[+-]=-?[.\d]+/,
    V = /[^,'"\[\]\s]+/gi,
    W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Y = {},
    $ = {},
    q = function (e) {
      return ($ = xe(e, Y)) && Cn;
    },
    X = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Q = function (e, t) {
      return !t && console.warn(e);
    },
    Z = function (e, t) {
      return (e && (Y[e] = t) && $ && ($[e] = t)) || Y;
    },
    G = function () {
      return 0;
    },
    K = { suppressEvents: !0, isStart: !0, kill: !1 },
    J = { suppressEvents: !0, kill: !1 },
    ee = { suppressEvents: !0 },
    te = {},
    ne = [],
    re = {},
    ie = {},
    ae = {},
    oe = 30,
    le = [],
    se = "",
    ue = function (e) {
      var t,
        n,
        r = e[0];
      if ((z(r) || N(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
        for (n = le.length; n-- && !le[n].targetTest(r); );
        t = le[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new At(e[n], t)))) ||
          e.splice(n, 1);
      return e;
    },
    ce = function (e) {
      return e._gsap || ue(et(e))[0]._gsap;
    },
    fe = function (e, t, n) {
      return (n = e[t]) && N(n)
        ? e[t]()
        : (O(n) && e.getAttribute && e.getAttribute(t)) || n;
    },
    de = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    pe = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    he = function (e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    },
    me = function (e, t) {
      var n = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
      );
    },
    ge = function (e, t) {
      for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
      return r < n;
    },
    ve = function () {
      var e,
        t,
        n = ne.length,
        r = ne.slice(0);
      for (re = {}, ne.length = 0, e = 0; e < n; e++)
        (t = r[e]) &&
          t._lazy &&
          (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    },
    ye = function (e, t, n, r) {
      ne.length && !s && ve(),
        e.render(t, n, r || (s && t < 0 && (e._initted || e._startAt))),
        ne.length && !s && ve();
    },
    be = function (e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(V).length < 2
        ? t
        : P(e)
        ? e.trim()
        : e;
    },
    _e = function (e) {
      return e;
    },
    we = function (e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e;
    },
    xe = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    },
    ke = function e(t, n) {
      for (var r in n)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (t[r] = z(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t;
    },
    Ce = function (e, t) {
      var n,
        r = {};
      for (n in e) n in t || (r[n] = e[n]);
      return r;
    },
    Se = function (e) {
      var t,
        n = e.parent || c,
        r = e.keyframes
          ? ((t = A(e.keyframes)),
            function (e, n) {
              for (var r in n)
                r in e ||
                  ("duration" === r && t) ||
                  "ease" === r ||
                  (e[r] = n[r]);
            })
          : we;
      if (j(e.inherit))
        for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
      return e;
    },
    Te = function (e, t, n, r, i) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var a,
        o = e[r];
      if (i) for (a = t[i]; o && o[i] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[n]), (e[n] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    Ee = function (e, t, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i = t._prev,
        a = t._next;
      i ? (i._next = a) : e[n] === t && (e[n] = a),
        a ? (a._prev = i) : e[r] === t && (e[r] = i),
        (t._next = t._prev = t.parent = null);
    },
    Pe = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Ne = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
      return e;
    },
    Me = function (e, t, n, r) {
      return (
        e._startAt &&
        (s
          ? e._startAt.revert(J)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Oe = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    ze = function (e) {
      return e._repeat ? je(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    je = function (e, t) {
      var n = Math.floor((e /= t));
      return e && n === e ? n - 1 : n;
    },
    Re = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Le = function (e) {
      return (e._end = he(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || w) || 0)
      ));
    },
    De = function (e, t) {
      var n = e._dp;
      return (
        n &&
          n.smoothChildTiming &&
          e._ts &&
          ((e._start = he(
            n._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Le(e),
          n._dirty || Ne(n, e)),
        e
      );
    },
    Ae = function (e, t) {
      var n;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((n = Re(e.rawTime(), t)),
          (!t._dur || Qe(0, t.totalDuration(), n) - t._tTime > w) &&
            t.render(n, !0)),
        Ne(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (n = e; n._dp; )
            n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        e._zTime = -1e-8;
      }
    },
    Fe = function (e, t, n, r) {
      return (
        t.parent && Pe(t),
        (t._start = he(
          (M(n) ? n : n || e !== c ? $e(e, n, t) : e._time) + t._delay
        )),
        (t._end = he(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Te(e, t, "_first", "_last", e._sort ? "_start" : 0),
        He(t) || (e._recent = t),
        r || Ae(e, t),
        e._ts < 0 && De(e, e._tTime),
        e
      );
    },
    Ie = function (e, t) {
      return (
        (Y.ScrollTrigger || X("scrollTrigger", t)) &&
        Y.ScrollTrigger.create(t, e)
      );
    },
    Be = function (e, t, n, r, i) {
      return (
        Yt(e, t, i),
        e._initted
          ? !n &&
            e._pt &&
            !s &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            m !== Ct.frame
            ? (ne.push(e), (e._lazy = [i, r]), 1)
            : void 0
          : 1
      );
    },
    Ue = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    },
    He = function (e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t;
    },
    Ve = function (e, t, n, r) {
      var i = e._repeat,
        a = he(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = i ? (i < 0 ? 1e10 : he(a * (i + 1) + e._rDelay * i)) : a),
        o > 0 && !r && De(e, (e._tTime = e._tDur * o)),
        e.parent && Le(e),
        n || Ne(e.parent, e),
        e
      );
    },
    We = function (e) {
      return e instanceof It ? Ne(e) : Ve(e, e._dur);
    },
    Ye = { _start: 0, endTime: G, totalDuration: G },
    $e = function e(t, n, r) {
      var i,
        a,
        o,
        l = t.labels,
        s = t._recent || Ye,
        u = t.duration() >= _ ? s.endTime(!1) : t._dur;
      return P(n) && (isNaN(n) || n in l)
        ? ((a = n.charAt(0)),
          (o = "%" === n.substr(-1)),
          (i = n.indexOf("=")),
          "<" === a || ">" === a
            ? (i >= 0 && (n = n.replace(/=/, "")),
              ("<" === a ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) *
                  (o ? (i < 0 ? s : r).totalDuration() / 100 : 1))
            : i < 0
            ? (n in l || (l[n] = u), l[n])
            : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
              o && r && (a = (a / 100) * (A(r) ? r[0] : r).totalDuration()),
              i > 1 ? e(t, n.substr(0, i - 1), r) + a : u + a))
        : null == n
        ? u
        : +n;
    },
    qe = function (e, t, n) {
      var r,
        i,
        a = M(t[1]),
        o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
        l = t[o];
      if ((a && (l.duration = t[1]), (l.parent = n), e)) {
        for (r = l, i = n; i && !("immediateRender" in r); )
          (r = i.vars.defaults || {}), (i = j(i.vars.inherit) && i.parent);
        (l.immediateRender = j(r.immediateRender)),
          e < 2 ? (l.runBackwards = 1) : (l.startAt = t[o - 1]);
      }
      return new Zt(t[0], l, t[o + 1]);
    },
    Xe = function (e, t) {
      return e || 0 === e ? t(e) : t;
    },
    Qe = function (e, t, n) {
      return n < e ? e : n > t ? t : n;
    },
    Ze = function (e, t) {
      return P(e) && (t = W.exec(e)) ? t[1] : "";
    },
    Ge = [].slice,
    Ke = function (e, t) {
      return (
        e &&
        z(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && z(e[0]))) &&
        !e.nodeType &&
        e !== f
      );
    },
    Je = function (e, t, n) {
      return (
        void 0 === n && (n = []),
        e.forEach(function (e) {
          var r;
          return (P(e) && !t) || Ke(e, 1)
            ? (r = n).push.apply(r, et(e))
            : n.push(e);
        }) || n
      );
    },
    et = function (e, t, n) {
      return u && !t && u.selector
        ? u.selector(e)
        : !P(e) || n || (!d && St())
        ? A(e)
          ? Je(e, n)
          : Ke(e)
          ? Ge.call(e, 0)
          : e
          ? [e]
          : []
        : Ge.call((t || p).querySelectorAll(e), 0);
    },
    tt = function (e) {
      return (
        (e = et(e)[0] || Q("Invalid scope") || {}),
        function (t) {
          var n = e.current || e.nativeElement || e;
          return et(
            t,
            n.querySelectorAll
              ? n
              : n === e
              ? Q("Invalid scope") || p.createElement("div")
              : e
          );
        }
      );
    },
    nt = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    rt = function (e) {
      if (N(e)) return e;
      var t = z(e) ? e : { each: e },
        n = zt(t.ease),
        r = t.from || 0,
        i = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        s = t.axis,
        u = r,
        c = r;
      return (
        P(r)
          ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (c = r[1])),
        function (e, o, f) {
          var d,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            w,
            x = (f || t).length,
            k = a[x];
          if (!k) {
            if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, _])[1])) {
              for (
                y = -_;
                y < (y = f[w++].getBoundingClientRect().left) && w < x;

              );
              w < x && w--;
            }
            for (
              k = a[x] = [],
                d = l ? Math.min(w, x) * u - 0.5 : r % w,
                p = w === _ ? 0 : l ? (x * c) / w - 0.5 : (r / w) | 0,
                y = 0,
                b = _,
                v = 0;
              v < x;
              v++
            )
              (h = (v % w) - d),
                (m = p - ((v / w) | 0)),
                (k[v] = g = s ? Math.abs("y" === s ? m : h) : S(h * h + m * m)),
                g > y && (y = g),
                g < b && (b = g);
            "random" === r && nt(k),
              (k.max = y - b),
              (k.min = b),
              (k.v = x =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (w > x
                      ? x - 1
                      : s
                      ? "y" === s
                        ? x / w
                        : w
                      : Math.max(w, x / w)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (k.b = x < 0 ? i - x : i),
              (k.u = Ze(t.amount || t.each) || 0),
              (n = n && x < 0 ? Mt(n) : n);
          }
          return (
            (x = (k[e] - k.min) / k.max || 0),
            he(k.b + (n ? n(x) : x) * k.v) + k.u
          );
        }
      );
    },
    it = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (n) {
        var r = he(Math.round(parseFloat(n) / e) * e * t);
        return (r - (r % 1)) / t + (M(n) ? 0 : Ze(n));
      };
    },
    at = function (e, t) {
      var n,
        r,
        i = A(e);
      return (
        !i &&
          z(e) &&
          ((n = i = e.radius || _),
          e.values
            ? ((e = et(e.values)), (r = !M(e[0])) && (n *= n))
            : (e = it(e.increment))),
        Xe(
          t,
          i
            ? N(e)
              ? function (t) {
                  return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                }
              : function (t) {
                  for (
                    var i,
                      a,
                      o = parseFloat(r ? t.x : t),
                      l = parseFloat(r ? t.y : 0),
                      s = _,
                      u = 0,
                      c = e.length;
                    c--;

                  )
                    (i = r
                      ? (i = e[c].x - o) * i + (a = e[c].y - l) * a
                      : Math.abs(e[c] - o)) < s && ((s = i), (u = c));
                  return (
                    (u = !n || s <= n ? e[u] : t),
                    r || u === t || M(t) ? u : u + Ze(t)
                  );
                }
            : it(e)
        )
      );
    },
    ot = function (e, t, n, r) {
      return Xe(A(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
        return A(e)
          ? e[~~(Math.random() * e.length)]
          : (n = n || 1e-5) &&
              (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                ) *
                  n *
                  r
              ) / r;
      });
    },
    lt = function (e, t, n) {
      return Xe(n, function (n) {
        return e[~~t(n)];
      });
    },
    st = function (e) {
      for (var t, n, r, i, a = 0, o = ""; ~(t = e.indexOf("random(", a)); )
        (r = e.indexOf(")", t)),
          (i = "[" === e.charAt(t + 7)),
          (n = e.substr(t + 7, r - t - 7).match(i ? V : F)),
          (o +=
            e.substr(a, t - a) +
            ot(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
          (a = r + 1);
      return o + e.substr(a, e.length - a);
    },
    ut = function (e, t, n, r, i) {
      var a = t - e,
        o = r - n;
      return Xe(i, function (t) {
        return n + (((t - e) / a) * o || 0);
      });
    },
    ct = function (e, t, n) {
      var r,
        i,
        a,
        o = e.labels,
        l = _;
      for (r in o)
        (i = o[r] - t) < 0 === !!n &&
          i &&
          l > (i = Math.abs(i)) &&
          ((a = r), (l = i));
      return a;
    },
    ft = function (e, t, n) {
      var r,
        i,
        a,
        o = e.vars,
        l = o[t],
        s = u,
        c = e._ctx;
      if (l)
        return (
          (r = o[t + "Params"]),
          (i = o.callbackScope || e),
          n && ne.length && ve(),
          c && (u = c),
          (a = r ? l.apply(i, r) : l.call(i)),
          (u = s),
          a
        );
    },
    dt = function (e) {
      return (
        Pe(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!s),
        e.progress() < 1 && ft(e, "onInterrupt"),
        e
      );
    },
    pt = [],
    ht = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), R() || e.headless)) {
          var t = e.name,
            n = N(e),
            r =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            i = {
              init: G,
              render: on,
              add: Vt,
              kill: sn,
              modifier: ln,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: tn,
              aliases: {},
              register: 0,
            };
          if ((St(), e !== r)) {
            if (ie[t]) return;
            we(r, we(Ce(e, i), a)),
              xe(r.prototype, xe(i, Ce(e, a))),
              (ie[(r.prop = t)] = r),
              e.targetTest && (le.push(r), (te[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Z(t, r), e.register && e.register(Cn, r, fn);
        } else pt.push(e);
    },
    mt = 255,
    gt = {
      aqua: [0, mt, mt],
      lime: [0, mt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, mt],
      navy: [0, 0, 128],
      white: [mt, mt, mt],
      olive: [128, 128, 0],
      yellow: [mt, mt, 0],
      orange: [mt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [mt, 0, 0],
      pink: [mt, 192, 203],
      cyan: [0, mt, mt],
      transparent: [mt, mt, mt, 0],
    },
    vt = function (e, t, n) {
      return (
        ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
          ? t + (n - t) * e * 6
          : e < 0.5
          ? n
          : 3 * e < 2
          ? t + (n - t) * (2 / 3 - e) * 6
          : t) *
          mt +
          0.5) |
        0
      );
    },
    yt = function (e, t, n) {
      var r,
        i,
        a,
        o,
        l,
        s,
        u,
        c,
        f,
        d,
        p = e ? (M(e) ? [e >> 16, (e >> 8) & mt, e & mt] : 0) : gt.black;
      if (!p) {
        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gt[e]))
          p = gt[e];
        else if ("#" === e.charAt(0)) {
          if (
            (e.length < 6 &&
              ((r = e.charAt(1)),
              (i = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                r +
                r +
                i +
                i +
                a +
                a +
                (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
            9 === e.length)
          )
            return [
              (p = parseInt(e.substr(1, 6), 16)) >> 16,
              (p >> 8) & mt,
              p & mt,
              parseInt(e.substr(7), 16) / 255,
            ];
          p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & mt, e & mt];
        } else if ("hsl" === e.substr(0, 3))
          if (((p = d = e.match(F)), t)) {
            if (~e.indexOf("="))
              return (p = e.match(I)), n && p.length < 4 && (p[3] = 1), p;
          } else
            (o = (+p[0] % 360) / 360),
              (l = +p[1] / 100),
              (r =
                2 * (s = +p[2] / 100) -
                (i = s <= 0.5 ? s * (l + 1) : s + l - s * l)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = vt(o + 1 / 3, r, i)),
              (p[1] = vt(o, r, i)),
              (p[2] = vt(o - 1 / 3, r, i));
        else p = e.match(F) || gt.transparent;
        p = p.map(Number);
      }
      return (
        t &&
          !d &&
          ((r = p[0] / mt),
          (i = p[1] / mt),
          (a = p[2] / mt),
          (s = ((u = Math.max(r, i, a)) + (c = Math.min(r, i, a))) / 2),
          u === c
            ? (o = l = 0)
            : ((f = u - c),
              (l = s > 0.5 ? f / (2 - u - c) : f / (u + c)),
              (o =
                u === r
                  ? (i - a) / f + (i < a ? 6 : 0)
                  : u === i
                  ? (a - r) / f + 2
                  : (r - i) / f + 4),
              (o *= 60)),
          (p[0] = ~~(o + 0.5)),
          (p[1] = ~~(100 * l + 0.5)),
          (p[2] = ~~(100 * s + 0.5))),
        n && p.length < 4 && (p[3] = 1),
        p
      );
    },
    bt = function (e) {
      var t = [],
        n = [],
        r = -1;
      return (
        e.split(wt).forEach(function (e) {
          var i = e.match(B) || [];
          t.push.apply(t, i), n.push((r += i.length + 1));
        }),
        (t.c = n),
        t
      );
    },
    _t = function (e, t, n) {
      var r,
        i,
        a,
        o,
        l = "",
        s = (e + l).match(wt),
        u = t ? "hsla(" : "rgba(",
        c = 0;
      if (!s) return e;
      if (
        ((s = s.map(function (e) {
          return (
            (e = yt(e, t, 1)) &&
            u +
              (t
                ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                : e.join(",")) +
              ")"
          );
        })),
        n && ((a = bt(e)), (r = n.c).join(l) !== a.c.join(l)))
      )
        for (o = (i = e.replace(wt, "1").split(B)).length - 1; c < o; c++)
          l +=
            i[c] +
            (~r.indexOf(c)
              ? s.shift() || u + "0,0,0,0)"
              : (a.length ? a : s.length ? s : n).shift());
      if (!i)
        for (o = (i = e.split(wt)).length - 1; c < o; c++) l += i[c] + s[c];
      return l + i[o];
    },
    wt = (function () {
      var e,
        t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in gt) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    xt = /hsl[a]?\(/,
    kt = function (e) {
      var t,
        n = e.join(" ");
      if (((wt.lastIndex = 0), wt.test(n)))
        return (
          (t = xt.test(n)),
          (e[1] = _t(e[1], t)),
          (e[0] = _t(e[0], t, bt(e[1]))),
          !0
        );
    },
    Ct = (function () {
      var e,
        t,
        n,
        r,
        i,
        a,
        o = Date.now,
        l = 500,
        s = 33,
        u = o(),
        c = u,
        m = 1e3 / 240,
        g = m,
        y = [],
        b = function n(f) {
          var d,
            p,
            h,
            v,
            b = o() - c,
            _ = !0 === f;
          if (
            ((b > l || b < 0) && (u += b - s),
            ((d = (h = (c += b) - u) - g) > 0 || _) &&
              ((v = ++r.frame),
              (i = h - 1e3 * r.time),
              (r.time = h /= 1e3),
              (g += d + (d >= m ? 4 : m - d)),
              (p = 1)),
            _ || (e = t(n)),
            p)
          )
            for (a = 0; a < y.length; a++) y[a](h, i, v, f);
        };
      return (r = {
        time: 0,
        frame: 0,
        tick: function () {
          b(!0);
        },
        deltaRatio: function (e) {
          return i / (1e3 / (e || 60));
        },
        wake: function () {
          h &&
            (!d &&
              R() &&
              ((f = d = window),
              (p = f.document || {}),
              (Y.gsap = Cn),
              (f.gsapVersions || (f.gsapVersions = [])).push(Cn.version),
              q($ || f.GreenSockGlobals || (!f.gsap && f) || {}),
              pt.forEach(ht)),
            (n =
              "undefined" !== typeof requestAnimationFrame &&
              requestAnimationFrame),
            e && r.sleep(),
            (t =
              n ||
              function (e) {
                return setTimeout(e, (g - 1e3 * r.time + 1) | 0);
              }),
            (v = 1),
            b(2));
        },
        sleep: function () {
          (n ? cancelAnimationFrame : clearTimeout)(e), (v = 0), (t = G);
        },
        lagSmoothing: function (e, t) {
          (l = e || 1 / 0), (s = Math.min(t || 33, l));
        },
        fps: function (e) {
          (m = 1e3 / (e || 240)), (g = 1e3 * r.time + m);
        },
        add: function (e, t, n) {
          var i = t
            ? function (t, n, a, o) {
                e(t, n, a, o), r.remove(i);
              }
            : e;
          return r.remove(e), y[n ? "unshift" : "push"](i), St(), i;
        },
        remove: function (e, t) {
          ~(t = y.indexOf(e)) && y.splice(t, 1) && a >= t && a--;
        },
        _listeners: y,
      });
    })(),
    St = function () {
      return !v && Ct.wake();
    },
    Tt = {},
    Et = /^[\d.\-M][\d.\-,\s]/,
    Pt = /["']/g,
    Nt = function (e) {
      for (
        var t,
          n,
          r,
          i = {},
          a = e.substr(1, e.length - 3).split(":"),
          o = a[0],
          l = 1,
          s = a.length;
        l < s;
        l++
      )
        (n = a[l]),
          (t = l !== s - 1 ? n.lastIndexOf(",") : n.length),
          (r = n.substr(0, t)),
          (i[o] = isNaN(r) ? r.replace(Pt, "").trim() : +r),
          (o = n.substr(t + 1).trim());
      return i;
    },
    Mt = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ot = function e(t, n) {
      for (var r, i = t._first; i; )
        i instanceof It
          ? e(i, n)
          : !i.vars.yoyoEase ||
            (i._yoyo && i._repeat) ||
            i._yoyo === n ||
            (i.timeline
              ? e(i.timeline, n)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = n))),
          (i = i._next);
    },
    zt = function (e, t) {
      return (
        (e &&
          (N(e)
            ? e
            : Tt[e] ||
              (function (e) {
                var t = (e + "").split("("),
                  n = Tt[t[0]];
                return n && t.length > 1 && n.config
                  ? n.config.apply(
                      null,
                      ~e.indexOf("{")
                        ? [Nt(t[1])]
                        : (function (e) {
                            var t = e.indexOf("(") + 1,
                              n = e.indexOf(")"),
                              r = e.indexOf("(", t);
                            return e.substring(
                              t,
                              ~r && r < n ? e.indexOf(")", n + 1) : n
                            );
                          })(e)
                            .split(",")
                            .map(be)
                    )
                  : Tt._CE && Et.test(e)
                  ? Tt._CE("", e)
                  : n;
              })(e))) ||
        t
      );
    },
    jt = function (e, t, n, r) {
      void 0 === n &&
        (n = function (e) {
          return 1 - t(1 - e);
        }),
        void 0 === r &&
          (r = function (e) {
            return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
          });
      var i,
        a = { easeIn: t, easeOut: n, easeInOut: r };
      return (
        de(e, function (e) {
          for (var t in ((Tt[e] = Y[e] = a),
          (Tt[(i = e.toLowerCase())] = n),
          a))
            Tt[
              i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
            ] = Tt[e + "." + t] = a[t];
        }),
        a
      );
    },
    Rt = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
      };
    },
    Lt = function e(t, n, r) {
      var i = n >= 1 ? n : 1,
        a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        o = (a / x) * (Math.asin(1 / i) || 0),
        l = function (e) {
          return 1 === e ? 1 : i * Math.pow(2, -10 * e) * E((e - o) * a) + 1;
        },
        s =
          "out" === t
            ? l
            : "in" === t
            ? function (e) {
                return 1 - l(1 - e);
              }
            : Rt(l);
      return (
        (a = x / a),
        (s.config = function (n, r) {
          return e(t, n, r);
        }),
        s
      );
    },
    Dt = function e(t, n) {
      void 0 === n && (n = 1.70158);
      var r = function (e) {
          return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
        },
        i =
          "out" === t
            ? r
            : "in" === t
            ? function (e) {
                return 1 - r(1 - e);
              }
            : Rt(r);
      return (
        (i.config = function (n) {
          return e(t, n);
        }),
        i
      );
    };
  de("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var n = t < 5 ? t + 1 : t;
    jt(
      e + ",Power" + (n - 1),
      t
        ? function (e) {
            return Math.pow(e, n);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, n);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(2 * e, n) / 2
          : 1 - Math.pow(2 * (1 - e), n) / 2;
      }
    );
  }),
    (Tt.Linear.easeNone = Tt.none = Tt.Linear.easeIn),
    jt("Elastic", Lt("in"), Lt("out"), Lt()),
    (function (e, t) {
      var n = 1 / t,
        r = 2 * n,
        i = 2.5 * n,
        a = function (a) {
          return a < n
            ? e * a * a
            : a < r
            ? e * Math.pow(a - 1.5 / t, 2) + 0.75
            : a < i
            ? e * (a -= 2.25 / t) * a + 0.9375
            : e * Math.pow(a - 2.625 / t, 2) + 0.984375;
        };
      jt(
        "Bounce",
        function (e) {
          return 1 - a(1 - e);
        },
        a
      );
    })(7.5625, 2.75),
    jt("Expo", function (e) {
      return e ? Math.pow(2, 10 * (e - 1)) : 0;
    }),
    jt("Circ", function (e) {
      return -(S(1 - e * e) - 1);
    }),
    jt("Sine", function (e) {
      return 1 === e ? 1 : 1 - T(e * k);
    }),
    jt("Back", Dt("in"), Dt("out"), Dt()),
    (Tt.SteppedEase =
      Tt.steps =
      Y.SteppedEase =
        {
          config: function (e, t) {
            void 0 === e && (e = 1);
            var n = 1 / e,
              r = e + (t ? 0 : 1),
              i = t ? 1 : 0;
            return function (e) {
              return (((r * Qe(0, 0.99999999, e)) | 0) + i) * n;
            };
          },
        }),
    (b.ease = Tt["quad.out"]),
    de(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (se += e + "," + e + "Params,");
      }
    );
  var At = function (e, t) {
      (this.id = C++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : fe),
        (this.set = t ? t.getSetter : tn);
    },
    Ft = (function () {
      function e(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          Ve(this, +e.duration, 1, 1),
          (this.data = e.data),
          u && ((this._ctx = u), u.data.push(this)),
          v || Ct.wake();
      }
      var t = e.prototype;
      return (
        (t.delay = function (e) {
          return e || 0 === e
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              Ve(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, t) {
          if ((St(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              De(this, e), !n._dp || n.parent || Ae(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              Fe(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === w) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), ye(this, e, t)),
            this
          );
        }),
        (t.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + ze(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (t.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                  ze(this),
                t
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (e, t) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * n, t)
            : this._repeat
            ? je(this._tTime, n) + 1
            : 1;
        }),
        (t.timeScale = function (e, t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          var n =
            this.parent && this._ts ? Re(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
            this.totalTime(Qe(-Math.abs(this._delay), this._tDur, n), !1 !== t),
            Le(this),
            (function (e) {
              for (var t = e.parent; t && t.parent; )
                (t._dirty = 1), t.totalDuration(), (t = t.parent);
              return e;
            })(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (St(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== w &&
                        (this._tTime -= w)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return (
              t && (t._sort || !this.parent) && Fe(t, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (j(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Re(t.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          void 0 === e && (e = ee);
          var t = s;
          return (
            (s = e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            (s = t),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
            (n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp);
          return !this.parent && this._sat ? this._sat.globalTime(e) : n;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), We(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var t = this._time;
            return (this._rDelay = e), We(this), t ? this.time(t) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, t) {
          return this.totalTime($e(this, e), j(t));
        }),
        (t.restart = function (e, t) {
          return this.play().totalTime(e ? -this._delay : 0, j(t));
        }),
        (t.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (t.isActive = function () {
          var e,
            t = this.parent || this._dp,
            n = this._start;
          return !(
            t &&
            !(
              this._ts &&
              this._initted &&
              t.isActive() &&
              (e = t.rawTime(!0)) >= n &&
              e < this.endTime(!0) - w
            )
          );
        }),
        (t.eventCallback = function (e, t, n) {
          var r = this.vars;
          return arguments.length > 1
            ? (t
                ? ((r[e] = t),
                  n && (r[e + "Params"] = n),
                  "onUpdate" === e && (this._onUpdate = t))
                : delete r[e],
              this)
            : r[e];
        }),
        (t.then = function (e) {
          var t = this;
          return new Promise(function (n) {
            var r = N(e) ? e : _e,
              i = function () {
                var e = t.then;
                (t.then = null),
                  N(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                  n(r),
                  (t.then = e);
              };
            (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
            (!t._tTime && t._ts < 0)
              ? i()
              : (t._prom = i);
          });
        }),
        (t.kill = function () {
          dt(this);
        }),
        e
      );
    })();
  we(Ft.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var It = (function (e) {
    function t(t, n) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = e.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = j(t.sortChildren)),
        c && Fe(t.parent || c, a(r), n),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && Ie(a(r), t.scrollTrigger),
        r
      );
    }
    o(t, e);
    var n = t.prototype;
    return (
      (n.to = function (e, t, n) {
        return qe(0, arguments, this), this;
      }),
      (n.from = function (e, t, n) {
        return qe(1, arguments, this), this;
      }),
      (n.fromTo = function (e, t, n, r) {
        return qe(2, arguments, this), this;
      }),
      (n.set = function (e, t, n) {
        return (
          (t.duration = 0),
          (t.parent = this),
          Se(t).repeatDelay || (t.repeat = 0),
          (t.immediateRender = !!t.immediateRender),
          new Zt(e, t, $e(this, n), 1),
          this
        );
      }),
      (n.call = function (e, t, n) {
        return Fe(this, Zt.delayedCall(0, e, t), n);
      }),
      (n.staggerTo = function (e, t, n, r, i, a, o) {
        return (
          (n.duration = t),
          (n.stagger = n.stagger || r),
          (n.onComplete = a),
          (n.onCompleteParams = o),
          (n.parent = this),
          new Zt(e, n, $e(this, i)),
          this
        );
      }),
      (n.staggerFrom = function (e, t, n, r, i, a, o) {
        return (
          (n.runBackwards = 1),
          (Se(n).immediateRender = j(n.immediateRender)),
          this.staggerTo(e, t, n, r, i, a, o)
        );
      }),
      (n.staggerFromTo = function (e, t, n, r, i, a, o, l) {
        return (
          (r.startAt = n),
          (Se(r).immediateRender = j(r.immediateRender)),
          this.staggerTo(e, t, r, i, a, o, l)
        );
      }),
      (n.render = function (e, t, n) {
        var r,
          i,
          a,
          o,
          l,
          u,
          f,
          d,
          p,
          h,
          m,
          g,
          v = this._time,
          y = this._dirty ? this.totalDuration() : this._tDur,
          b = this._dur,
          _ = e <= 0 ? 0 : he(e),
          x = this._zTime < 0 !== e < 0 && (this._initted || !b);
        if (
          (this !== c && _ > y && e >= 0 && (_ = y),
          _ !== this._tTime || n || x)
        ) {
          if (
            (v !== this._time &&
              b &&
              ((_ += this._time - v), (e += this._time - v)),
            (r = _),
            (p = this._start),
            (u = !(d = this._ts)),
            x && (b || (v = this._zTime), (e || !t) && (this._zTime = e)),
            this._repeat)
          ) {
            if (
              ((m = this._yoyo),
              (l = b + this._rDelay),
              this._repeat < -1 && e < 0)
            )
              return this.totalTime(100 * l + e, t, n);
            if (
              ((r = he(_ % l)),
              _ === y
                ? ((o = this._repeat), (r = b))
                : ((o = ~~(_ / l)) && o === _ / l && ((r = b), o--),
                  r > b && (r = b)),
              (h = je(this._tTime, l)),
              !v &&
                this._tTime &&
                h !== o &&
                this._tTime - h * l - this._dur <= 0 &&
                (h = o),
              m && 1 & o && ((r = b - r), (g = 1)),
              o !== h && !this._lock)
            ) {
              var k = m && 1 & h,
                C = k === (m && 1 & o);
              if (
                (o < h && (k = !k),
                (v = k ? 0 : _ % b ? b : _),
                (this._lock = 1),
                (this.render(v || (g ? 0 : he(o * l)), t, !b)._lock = 0),
                (this._tTime = _),
                !t && this.parent && ft(this, "onRepeat"),
                this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                (v && v !== this._time) ||
                  u !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((b = this._dur),
                (y = this._tDur),
                C &&
                  ((this._lock = 2),
                  (v = k ? b : -1e-4),
                  this.render(v, !0),
                  this.vars.repeatRefresh && !g && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Ot(this, g);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((f = (function (e, t, n) {
                var r;
                if (n > t)
                  for (r = e._first; r && r._start <= n; ) {
                    if ("isPause" === r.data && r._start > t) return r;
                    r = r._next;
                  }
                else
                  for (r = e._last; r && r._start >= n; ) {
                    if ("isPause" === r.data && r._start < t) return r;
                    r = r._prev;
                  }
              })(this, he(v), he(r))),
              f && (_ -= r - (r = f._start))),
            (this._tTime = _),
            (this._time = r),
            (this._act = !d),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (v = 0)),
            !v && r && !t && !o && (ft(this, "onStart"), this._tTime !== _))
          )
            return this;
          if (r >= v && e >= 0)
            for (i = this._first; i; ) {
              if (
                ((a = i._next), (i._act || r >= i._start) && i._ts && f !== i)
              ) {
                if (i.parent !== this) return this.render(e, t, n);
                if (
                  (i.render(
                    i._ts > 0
                      ? (r - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (r - i._start) * i._ts,
                    t,
                    n
                  ),
                  r !== this._time || (!this._ts && !u))
                ) {
                  (f = 0), a && (_ += this._zTime = -1e-8);
                  break;
                }
              }
              i = a;
            }
          else {
            i = this._last;
            for (var S = e < 0 ? e : r; i; ) {
              if (
                ((a = i._prev), (i._act || S <= i._end) && i._ts && f !== i)
              ) {
                if (i.parent !== this) return this.render(e, t, n);
                if (
                  (i.render(
                    i._ts > 0
                      ? (S - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (S - i._start) * i._ts,
                    t,
                    n || (s && (i._initted || i._startAt))
                  ),
                  r !== this._time || (!this._ts && !u))
                ) {
                  (f = 0), a && (_ += this._zTime = S ? -1e-8 : w);
                  break;
                }
              }
              i = a;
            }
          }
          if (
            f &&
            !t &&
            (this.pause(),
            (f.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1),
            this._ts)
          )
            return (this._start = p), Le(this), this.render(e, t, n);
          this._onUpdate && !t && ft(this, "onUpdate", !0),
            ((_ === y && this._tTime >= this.totalDuration()) || (!_ && v)) &&
              ((p !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                this._lock ||
                ((e || !b) &&
                  ((_ === y && this._ts > 0) || (!_ && this._ts < 0)) &&
                  Pe(this, 1),
                t ||
                  (e < 0 && !v) ||
                  (!_ && !v && y) ||
                  (ft(
                    this,
                    _ === y && e >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(_ < y && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (n.add = function (e, t) {
        var n = this;
        if ((M(t) || (t = $e(this, t, e)), !(e instanceof Ft))) {
          if (A(e))
            return (
              e.forEach(function (e) {
                return n.add(e, t);
              }),
              this
            );
          if (P(e)) return this.addLabel(e, t);
          if (!N(e)) return this;
          e = Zt.delayedCall(0, e);
        }
        return this !== e ? Fe(this, e, t) : this;
      }),
      (n.getChildren = function (e, t, n, r) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          void 0 === n && (n = !0),
          void 0 === r && (r = -_);
        for (var i = [], a = this._first; a; )
          a._start >= r &&
            (a instanceof Zt
              ? t && i.push(a)
              : (n && i.push(a),
                e && i.push.apply(i, a.getChildren(!0, t, n)))),
            (a = a._next);
        return i;
      }),
      (n.getById = function (e) {
        for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
          if (t[n].vars.id === e) return t[n];
      }),
      (n.remove = function (e) {
        return P(e)
          ? this.removeLabel(e)
          : N(e)
          ? this.killTweensOf(e)
          : (Ee(this, e),
            e === this._recent && (this._recent = this._last),
            Ne(this));
      }),
      (n.totalTime = function (t, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = he(
                Ct.time -
                  (this._ts > 0
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            e.prototype.totalTime.call(this, t, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (e, t) {
        return (this.labels[e] = $e(this, t)), this;
      }),
      (n.removeLabel = function (e) {
        return delete this.labels[e], this;
      }),
      (n.addPause = function (e, t, n) {
        var r = Zt.delayedCall(0, t || G, n);
        return (
          (r.data = "isPause"), (this._hasPause = 1), Fe(this, r, $e(this, e))
        );
      }),
      (n.removePause = function (e) {
        var t = this._first;
        for (e = $e(this, e); t; )
          t._start === e && "isPause" === t.data && Pe(t), (t = t._next);
      }),
      (n.killTweensOf = function (e, t, n) {
        for (var r = this.getTweensOf(e, n), i = r.length; i--; )
          Bt !== r[i] && r[i].kill(e, t);
        return this;
      }),
      (n.getTweensOf = function (e, t) {
        for (var n, r = [], i = et(e), a = this._first, o = M(t); a; )
          a instanceof Zt
            ? ge(a._targets, i) &&
              (o
                ? (!Bt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= t &&
                  a.globalTime(a.totalDuration()) > t
                : !t || a.isActive()) &&
              r.push(a)
            : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
            (a = a._next);
        return r;
      }),
      (n.tweenTo = function (e, t) {
        t = t || {};
        var n,
          r = this,
          i = $e(r, e),
          a = t,
          o = a.startAt,
          l = a.onStart,
          s = a.onStartParams,
          u = a.immediateRender,
          c = Zt.to(
            r,
            we(
              {
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  t.duration ||
                  Math.abs(
                    (i - (o && "time" in o ? o.time : r._time)) / r.timeScale()
                  ) ||
                  w,
                onStart: function () {
                  if ((r.pause(), !n)) {
                    var e =
                      t.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : r._time)) /
                          r.timeScale()
                      );
                    c._dur !== e && Ve(c, e, 0, 1).render(c._time, !0, !0),
                      (n = 1);
                  }
                  l && l.apply(c, s || []);
                },
              },
              t
            )
          );
        return u ? c.render(0) : c;
      }),
      (n.tweenFromTo = function (e, t, n) {
        return this.tweenTo(t, we({ startAt: { time: $e(this, e) } }, n));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (e) {
        return void 0 === e && (e = this._time), ct(this, $e(this, e));
      }),
      (n.previousLabel = function (e) {
        return void 0 === e && (e = this._time), ct(this, $e(this, e), 1);
      }),
      (n.currentLabel = function (e) {
        return arguments.length
          ? this.seek(e, !0)
          : this.previousLabel(this._time + w);
      }),
      (n.shiftChildren = function (e, t, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, a = this.labels; i; )
          i._start >= n && ((i._start += e), (i._end += e)), (i = i._next);
        if (t) for (r in a) a[r] >= n && (a[r] += e);
        return Ne(this);
      }),
      (n.invalidate = function (t) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
        return e.prototype.invalidate.call(this, t);
      }),
      (n.clear = function (e) {
        void 0 === e && (e = !0);
        for (var t, n = this._first; n; )
          (t = n._next), this.remove(n), (n = t);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          e && (this.labels = {}),
          Ne(this)
        );
      }),
      (n.totalDuration = function (e) {
        var t,
          n,
          r,
          i = 0,
          a = this,
          o = a._last,
          l = _;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -e : e)
          );
        if (a._dirty) {
          for (r = a.parent; o; )
            (t = o._prev),
              o._dirty && o.totalDuration(),
              (n = o._start) > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (Fe(a, o, n - o._delay, 1)._lock = 0))
                : (l = n),
              n < 0 &&
                o._ts &&
                ((i -= n),
                ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                  ((a._start += n / a._ts), (a._time -= n), (a._tTime -= n)),
                a.shiftChildren(-n, !1, -Infinity),
                (l = 0)),
              o._end > i && o._ts && (i = o._end),
              (o = t);
          Ve(a, a === c && a._time > i ? a._time : i, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (t.updateRoot = function (e) {
        if ((c._ts && (ye(c, Re(e, c)), (m = Ct.frame)), Ct.frame >= oe)) {
          oe += y.autoSleep || 120;
          var t = c._first;
          if ((!t || !t._ts) && y.autoSleep && Ct._listeners.length < 2) {
            for (; t && !t._ts; ) t = t._next;
            t || Ct.sleep();
          }
        }
      }),
      t
    );
  })(Ft);
  we(It.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Bt,
    Ut,
    Ht = function (e, t, n, r, i, a, o) {
      var l,
        s,
        u,
        c,
        f,
        d,
        p,
        h,
        m = new fn(this._pt, e, t, 0, 1, an, null, i),
        g = 0,
        v = 0;
      for (
        m.b = n,
          m.e = r,
          n += "",
          (p = ~(r += "").indexOf("random(")) && (r = st(r)),
          a && (a((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
          s = n.match(U) || [];
        (l = U.exec(r));

      )
        (c = l[0]),
          (f = r.substring(g, l.index)),
          u ? (u = (u + 1) % 5) : "rgba(" === f.substr(-5) && (u = 1),
          c !== s[v++] &&
            ((d = parseFloat(s[v - 1]) || 0),
            (m._pt = {
              _next: m._pt,
              p: f || 1 === v ? f : ",",
              s: d,
              c: "=" === c.charAt(1) ? me(d, c) - d : parseFloat(c) - d,
              m: u && u < 4 ? Math.round : 0,
            }),
            (g = U.lastIndex));
      return (
        (m.c = g < r.length ? r.substring(g, r.length) : ""),
        (m.fp = o),
        (H.test(r) || p) && (m.e = 0),
        (this._pt = m),
        m
      );
    },
    Vt = function (e, t, n, r, i, a, o, l, s, u) {
      N(r) && (r = r(i || 0, e, a));
      var c,
        f = e[t],
        d =
          "get" !== n
            ? n
            : N(f)
            ? s
              ? e[
                  t.indexOf("set") || !N(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](s)
              : e[t]()
            : f,
        p = N(f) ? (s ? Jt : Kt) : Gt;
      if (
        (P(r) &&
          (~r.indexOf("random(") && (r = st(r)),
          "=" === r.charAt(1) &&
            ((c = me(d, r) + (Ze(d) || 0)) || 0 === c) &&
            (r = c)),
        !u || d !== r || Ut)
      )
        return isNaN(d * r) || "" === r
          ? (!f && !(t in e) && X(t, r),
            Ht.call(this, e, t, d, r, p, l || y.stringFilter, s))
          : ((c = new fn(
              this._pt,
              e,
              t,
              +d || 0,
              r - (d || 0),
              "boolean" === typeof f ? rn : nn,
              0,
              p
            )),
            s && (c.fp = s),
            o && c.modifier(o, this, e),
            (this._pt = c));
    },
    Wt = function (e, t, n, r, i, a) {
      var o, l, s, u;
      if (
        ie[e] &&
        !1 !==
          (o = new ie[e]()).init(
            i,
            o.rawVars
              ? t[e]
              : (function (e, t, n, r, i) {
                  if (
                    (N(e) && (e = qt(e, i, t, n, r)),
                    !z(e) || (e.style && e.nodeType) || A(e) || D(e))
                  )
                    return P(e) ? qt(e, i, t, n, r) : e;
                  var a,
                    o = {};
                  for (a in e) o[a] = qt(e[a], i, t, n, r);
                  return o;
                })(t[e], r, i, a, n),
            n,
            r,
            a
          ) &&
        ((n._pt = l = new fn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
        n !== g)
      )
        for (s = n._ptLookup[n._targets.indexOf(i)], u = o._props.length; u--; )
          s[o._props[u]] = l;
      return o;
    },
    Yt = function e(t, n, r) {
      var i,
        a,
        o,
        u,
        f,
        d,
        p,
        h,
        m,
        g,
        v,
        y,
        x,
        k = t.vars,
        C = k.ease,
        S = k.startAt,
        T = k.immediateRender,
        E = k.lazy,
        P = k.onUpdate,
        N = k.runBackwards,
        M = k.yoyoEase,
        O = k.keyframes,
        z = k.autoRevert,
        R = t._dur,
        L = t._startAt,
        D = t._targets,
        A = t.parent,
        F = A && "nested" === A.data ? A.vars.targets : D,
        I = "auto" === t._overwrite && !l,
        B = t.timeline;
      if (
        (B && (!O || !C) && (C = "none"),
        (t._ease = zt(C, b.ease)),
        (t._yEase = M ? Mt(zt(!0 === M ? C : M, b.ease)) : 0),
        M &&
          t._yoyo &&
          !t._repeat &&
          ((M = t._yEase), (t._yEase = t._ease), (t._ease = M)),
        (t._from = !B && !!k.runBackwards),
        !B || (O && !k.stagger))
      ) {
        if (
          ((y = (h = D[0] ? ce(D[0]).harness : 0) && k[h.prop]),
          (i = Ce(k, te)),
          L &&
            (L._zTime < 0 && L.progress(1),
            n < 0 && N && T && !z ? L.render(-1, !0) : L.revert(N && R ? J : K),
            (L._lazy = 0)),
          S)
        ) {
          if (
            (Pe(
              (t._startAt = Zt.set(
                D,
                we(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: !L && j(E),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      P &&
                      function () {
                        return ft(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  S
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (s || (!T && !z)) && t._startAt.revert(J),
            T && R && n <= 0 && r <= 0)
          )
            return void (n && (t._zTime = n));
        } else if (N && R && !L)
          if (
            (n && (T = !1),
            (o = we(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: T && !L && j(E),
                immediateRender: T,
                stagger: 0,
                parent: A,
              },
              i
            )),
            y && (o[h.prop] = y),
            Pe((t._startAt = Zt.set(D, o))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (s ? t._startAt.revert(J) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            T)
          ) {
            if (!n) return;
          } else e(t._startAt, w, w);
        for (
          t._pt = t._ptCache = 0, E = (R && j(E)) || (E && !R), a = 0;
          a < D.length;
          a++
        ) {
          if (
            ((p = (f = D[a])._gsap || ue(D)[a]._gsap),
            (t._ptLookup[a] = g = {}),
            re[p.id] && ne.length && ve(),
            (v = F === D ? a : F.indexOf(f)),
            h &&
              !1 !== (m = new h()).init(f, y || i, t, v, F) &&
              ((t._pt = u =
                new fn(t._pt, f, m.name, 0, 1, m.render, m, 0, m.priority)),
              m._props.forEach(function (e) {
                g[e] = u;
              }),
              m.priority && (d = 1)),
            !h || y)
          )
            for (o in i)
              ie[o] && (m = Wt(o, i, t, v, f, F))
                ? m.priority && (d = 1)
                : (g[o] = u =
                    Vt.call(t, f, o, "get", i[o], v, F, 0, k.stringFilter));
          t._op && t._op[a] && t.kill(f, t._op[a]),
            I &&
              t._pt &&
              ((Bt = t),
              c.killTweensOf(f, g, t.globalTime(n)),
              (x = !t.parent),
              (Bt = 0)),
            t._pt && E && (re[p.id] = 1);
        }
        d && cn(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = P),
        (t._initted = (!t._op || t._pt) && !x),
        O && n <= 0 && B.render(_, !0, !0);
    },
    $t = function (e, t, n, r) {
      var i,
        a,
        o = t.ease || r || "power1.inOut";
      if (A(t))
        (a = n[e] || (n[e] = [])),
          t.forEach(function (e, n) {
            return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
          });
      else
        for (i in t)
          (a = n[i] || (n[i] = [])),
            "ease" === i || a.push({ t: parseFloat(e), v: t[i], e: o });
    },
    qt = function (e, t, n, r, i) {
      return N(e)
        ? e.call(t, n, r, i)
        : P(e) && ~e.indexOf("random(")
        ? st(e)
        : e;
    },
    Xt = se + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Qt = {};
  de(Xt + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (Qt[e] = 1);
  });
  var Zt = (function (e) {
    function t(t, n, r, i) {
      var o;
      "number" === typeof n && ((r.duration = n), (n = r), (r = null));
      var s,
        u,
        f,
        d,
        p,
        h,
        m,
        g,
        v = (o = e.call(this, i ? n : Se(n)) || this).vars,
        b = v.duration,
        _ = v.delay,
        w = v.immediateRender,
        x = v.stagger,
        k = v.overwrite,
        C = v.keyframes,
        S = v.defaults,
        T = v.scrollTrigger,
        E = v.yoyoEase,
        P = n.parent || c,
        N = (A(t) || D(t) ? M(t[0]) : "length" in n) ? [t] : et(t);
      if (
        ((o._targets = N.length
          ? ue(N)
          : Q(
              "GSAP target " + t + " not found. https://gsap.com",
              !y.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = k),
        C || x || L(b) || L(_))
      ) {
        if (
          ((n = o.vars),
          (s = o.timeline =
            new It({
              data: "nested",
              defaults: S || {},
              targets: P && "nested" === P.data ? P.vars.targets : N,
            })).kill(),
          (s.parent = s._dp = a(o)),
          (s._start = 0),
          x || L(b) || L(_))
        ) {
          if (((d = N.length), (m = x && rt(x)), z(x)))
            for (p in x) ~Xt.indexOf(p) && (g || (g = {}), (g[p] = x[p]));
          for (u = 0; u < d; u++)
            ((f = Ce(n, Qt)).stagger = 0),
              E && (f.yoyoEase = E),
              g && xe(f, g),
              (h = N[u]),
              (f.duration = +qt(b, a(o), u, h, N)),
              (f.delay = (+qt(_, a(o), u, h, N) || 0) - o._delay),
              !x &&
                1 === d &&
                f.delay &&
                ((o._delay = _ = f.delay), (o._start += _), (f.delay = 0)),
              s.to(h, f, m ? m(u, h, N) : 0),
              (s._ease = Tt.none);
          s.duration() ? (b = _ = 0) : (o.timeline = 0);
        } else if (C) {
          Se(we(s.vars.defaults, { ease: "none" })),
            (s._ease = zt(C.ease || n.ease || "none"));
          var O,
            R,
            F,
            I = 0;
          if (A(C))
            C.forEach(function (e) {
              return s.to(N, e, ">");
            }),
              s.duration();
          else {
            for (p in ((f = {}), C))
              "ease" === p || "easeEach" === p || $t(p, C[p], f, C.easeEach);
            for (p in f)
              for (
                O = f[p].sort(function (e, t) {
                  return e.t - t.t;
                }),
                  I = 0,
                  u = 0;
                u < O.length;
                u++
              )
                ((F = {
                  ease: (R = O[u]).e,
                  duration: ((R.t - (u ? O[u - 1].t : 0)) / 100) * b,
                })[p] = R.v),
                  s.to(N, F, I),
                  (I += F.duration);
            s.duration() < b && s.to({}, { duration: b - s.duration() });
          }
        }
        b || o.duration((b = s.duration()));
      } else o.timeline = 0;
      return (
        !0 !== k || l || ((Bt = a(o)), c.killTweensOf(N), (Bt = 0)),
        Fe(P, a(o), r),
        n.reversed && o.reverse(),
        n.paused && o.paused(!0),
        (w ||
          (!b &&
            !C &&
            o._start === he(P._time) &&
            j(w) &&
            Oe(a(o)) &&
            "nested" !== P.data)) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -_) || 0)),
        T && Ie(a(o), T),
        o
      );
    }
    o(t, e);
    var n = t.prototype;
    return (
      (n.render = function (e, t, n) {
        var r,
          i,
          a,
          o,
          l,
          u,
          c,
          f,
          d,
          p = this._time,
          h = this._tDur,
          m = this._dur,
          g = e < 0,
          v = e > h - w && !g ? h : e < w ? 0 : e;
        if (m) {
          if (
            v !== this._tTime ||
            !e ||
            n ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== g)
          ) {
            if (((r = v), (f = this.timeline), this._repeat)) {
              if (((o = m + this._rDelay), this._repeat < -1 && g))
                return this.totalTime(100 * o + e, t, n);
              if (
                ((r = he(v % o)),
                v === h
                  ? ((a = this._repeat), (r = m))
                  : ((a = ~~(v / o)) && a === he(v / o) && ((r = m), a--),
                    r > m && (r = m)),
                (u = this._yoyo && 1 & a) && ((d = this._yEase), (r = m - r)),
                (l = je(this._tTime, o)),
                r === p && !n && this._initted && a === l)
              )
                return (this._tTime = v), this;
              a !== l &&
                (f && this._yEase && Ot(f, u),
                this.vars.repeatRefresh &&
                  !u &&
                  !this._lock &&
                  this._time !== o &&
                  this._initted &&
                  ((this._lock = n = 1),
                  (this.render(he(o * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Be(this, g ? e : r, n, t, v)) return (this._tTime = 0), this;
              if (
                p !== this._time &&
                (!n || !this.vars.repeatRefresh || a === l)
              )
                return this;
              if (m !== this._dur) return this.render(e, t, n);
            }
            if (
              ((this._tTime = v),
              (this._time = r),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (d || this._ease)(r / m)),
              this._from && (this.ratio = c = 1 - c),
              r && !p && !t && !a && (ft(this, "onStart"), this._tTime !== v))
            )
              return this;
            for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
            (f &&
              f.render(e < 0 ? e : f._dur * f._ease(r / this._dur), t, n)) ||
              (this._startAt && (this._zTime = e)),
              this._onUpdate &&
                !t &&
                (g && Me(this, e, 0, n), ft(this, "onUpdate")),
              this._repeat &&
                a !== l &&
                this.vars.onRepeat &&
                !t &&
                this.parent &&
                ft(this, "onRepeat"),
              (v !== this._tDur && v) ||
                this._tTime !== v ||
                (g && !this._onUpdate && Me(this, e, 0, !0),
                (e || !m) &&
                  ((v === this._tDur && this._ts > 0) ||
                    (!v && this._ts < 0)) &&
                  Pe(this, 1),
                t ||
                  (g && !p) ||
                  !(v || p || u) ||
                  (ft(this, v === h ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(v < h && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (e, t, n, r) {
            var i,
              a,
              o,
              l = e.ratio,
              u =
                t < 0 ||
                (!t &&
                  ((!e._start && Ue(e) && (e._initted || !He(e))) ||
                    ((e._ts < 0 || e._dp._ts < 0) && !He(e))))
                  ? 0
                  : 1,
              c = e._rDelay,
              f = 0;
            if (
              (c &&
                e._repeat &&
                ((f = Qe(0, e._tDur, t)),
                (a = je(f, c)),
                e._yoyo && 1 & a && (u = 1 - u),
                a !== je(e._tTime, c) &&
                  ((l = 1 - u),
                  e.vars.repeatRefresh && e._initted && e.invalidate())),
              u !== l || s || r || e._zTime === w || (!t && e._zTime))
            ) {
              if (!e._initted && Be(e, t, r, n, f)) return;
              for (
                o = e._zTime,
                  e._zTime = t || (n ? w : 0),
                  n || (n = t && !o),
                  e.ratio = u,
                  e._from && (u = 1 - u),
                  e._time = 0,
                  e._tTime = f,
                  i = e._pt;
                i;

              )
                i.r(u, i.d), (i = i._next);
              t < 0 && Me(e, t, 0, !0),
                e._onUpdate && !n && ft(e, "onUpdate"),
                f && e._repeat && !n && e.parent && ft(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                  e.ratio === u &&
                  (u && Pe(e, 1),
                  n ||
                    s ||
                    (ft(e, u ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()));
            } else e._zTime || (e._zTime = t);
          })(this, e, t, n);
        return this;
      }),
      (n.targets = function () {
        return this._targets;
      }),
      (n.invalidate = function (t) {
        return (
          (!t || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          e.prototype.invalidate.call(this, t)
        );
      }),
      (n.resetTo = function (e, t, n, r, i) {
        v || Ct.wake(), this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Yt(this, a),
          (function (e, t, n, r, i, a, o, l) {
            var s,
              u,
              c,
              f,
              d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
            if (!d)
              for (
                d = e._ptCache[t] = [], c = e._ptLookup, f = e._targets.length;
                f--;

              ) {
                if ((s = c[f][t]) && s.d && s.d._pt)
                  for (s = s.d._pt; s && s.p !== t && s.fp !== t; ) s = s._next;
                if (!s)
                  return (
                    (Ut = 1),
                    (e.vars[t] = "+=0"),
                    Yt(e, o),
                    (Ut = 0),
                    l ? Q(t + " not eligible for reset") : 1
                  );
                d.push(s);
              }
            for (f = d.length; f--; )
              ((s = (u = d[f])._pt || u).s =
                (!r && 0 !== r) || i ? s.s + (r || 0) + a * s.c : r),
                (s.c = n - s.s),
                u.e && (u.e = pe(n) + Ze(u.e)),
                u.b && (u.b = s.s + Ze(u.b));
          })(this, e, t, n, r, this._ease(a / this._dur), a, i)
            ? this.resetTo(e, t, n, r, 1)
            : (De(this, 0),
              this.parent ||
                Te(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (n.kill = function (e, t) {
        if ((void 0 === t && (t = "all"), !e && (!t || "all" === t)))
          return (this._lazy = this._pt = 0), this.parent ? dt(this) : this;
        if (this.timeline) {
          var n = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(e, t, Bt && !0 !== Bt.vars.overwrite)
              ._first || dt(this),
            this.parent &&
              n !== this.timeline.totalDuration() &&
              Ve(this, (this._dur * this.timeline._tDur) / n, 0, 1),
            this
          );
        }
        var r,
          i,
          a,
          o,
          l,
          s,
          u,
          c = this._targets,
          f = e ? et(e) : c,
          d = this._ptLookup,
          p = this._pt;
        if (
          (!t || "all" === t) &&
          (function (e, t) {
            for (
              var n = e.length, r = n === t.length;
              r && n-- && e[n] === t[n];

            );
            return n < 0;
          })(c, f)
        )
          return "all" === t && (this._pt = 0), dt(this);
        for (
          r = this._op = this._op || [],
            "all" !== t &&
              (P(t) &&
                ((l = {}),
                de(t, function (e) {
                  return (l[e] = 1);
                }),
                (t = l)),
              (t = (function (e, t) {
                var n,
                  r,
                  i,
                  a,
                  o = e[0] ? ce(e[0]).harness : 0,
                  l = o && o.aliases;
                if (!l) return t;
                for (r in ((n = xe({}, t)), l))
                  if ((r in n))
                    for (i = (a = l[r].split(",")).length; i--; )
                      n[a[i]] = n[r];
                return n;
              })(c, t))),
            u = c.length;
          u--;

        )
          if (~f.indexOf(c[u]))
            for (l in ((i = d[u]),
            "all" === t
              ? ((r[u] = t), (o = i), (a = {}))
              : ((a = r[u] = r[u] || {}), (o = t)),
            o))
              (s = i && i[l]) &&
                (("kill" in s.d && !0 !== s.d.kill(l)) || Ee(this, s, "_pt"),
                delete i[l]),
                "all" !== a && (a[l] = 1);
        return this._initted && !this._pt && p && dt(this), this;
      }),
      (t.to = function (e, n) {
        return new t(e, n, arguments[2]);
      }),
      (t.from = function (e, t) {
        return qe(1, arguments);
      }),
      (t.delayedCall = function (e, n, r, i) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: e,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (t.fromTo = function (e, t, n) {
        return qe(2, arguments);
      }),
      (t.set = function (e, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
      }),
      (t.killTweensOf = function (e, t, n) {
        return c.killTweensOf(e, t, n);
      }),
      t
    );
  })(Ft);
  we(Zt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    de("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Zt[e] = function () {
        var t = new It(),
          n = Ge.call(arguments, 0);
        return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n);
      };
    });
  var Gt = function (e, t, n) {
      return (e[t] = n);
    },
    Kt = function (e, t, n) {
      return e[t](n);
    },
    Jt = function (e, t, n, r) {
      return e[t](r.fp, n);
    },
    en = function (e, t, n) {
      return e.setAttribute(t, n);
    },
    tn = function (e, t) {
      return N(e[t]) ? Kt : O(e[t]) && e.setAttribute ? en : Gt;
    },
    nn = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
    },
    rn = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    an = function (e, t) {
      var n = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (1 === e && t.e) r = t.e;
      else {
        for (; n; )
          (r =
            n.p +
            (n.m
              ? n.m(n.s + n.c * e)
              : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
            r),
            (n = n._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    on = function (e, t) {
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    },
    ln = function (e, t, n, r) {
      for (var i, a = this._pt; a; )
        (i = a._next), a.p === r && a.modifier(e, t, n), (a = i);
    },
    sn = function (e) {
      for (var t, n, r = this._pt; r; )
        (n = r._next),
          (r.p === e && !r.op) || r.op === e
            ? Ee(this, r, "_pt")
            : r.dep || (t = 1),
          (r = n);
      return !t;
    },
    un = function (e, t, n, r) {
      r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
    },
    cn = function (e) {
      for (var t, n, r, i, a = e._pt; a; ) {
        for (t = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
        (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
          (a._next = n) ? (n._prev = a) : (i = a),
          (a = t);
      }
      e._pt = r;
    },
    fn = (function () {
      function e(e, t, n, r, i, a, o, l, s) {
        (this.t = t),
          (this.s = r),
          (this.c = i),
          (this.p = n),
          (this.r = a || nn),
          (this.d = o || this),
          (this.set = l || Gt),
          (this.pr = s || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      return (
        (e.prototype.modifier = function (e, t, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = un),
            (this.m = e),
            (this.mt = n),
            (this.tween = t);
        }),
        e
      );
    })();
  de(
    se +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (te[e] = 1);
    }
  ),
    (Y.TweenMax = Y.TweenLite = Zt),
    (Y.TimelineLite = Y.TimelineMax = It),
    (c = new It({
      sortChildren: !1,
      defaults: b,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (y.stringFilter = kt);
  var dn = [],
    pn = {},
    hn = [],
    mn = 0,
    gn = 0,
    vn = function (e) {
      return (pn[e] || hn).map(function (e) {
        return e();
      });
    },
    yn = function () {
      var e = Date.now(),
        t = [];
      e - mn > 2 &&
        (vn("matchMediaInit"),
        dn.forEach(function (e) {
          var n,
            r,
            i,
            a,
            o = e.queries,
            l = e.conditions;
          for (r in o)
            (n = f.matchMedia(o[r]).matches) && (i = 1),
              n !== l[r] && ((l[r] = n), (a = 1));
          a && (e.revert(), i && t.push(e));
        }),
        vn("matchMediaRevert"),
        t.forEach(function (e) {
          return e.onMatch(e, function (t) {
            return e.add(null, t);
          });
        }),
        (mn = e),
        vn("matchMedia"));
    },
    bn = (function () {
      function e(e, t) {
        (this.selector = t && tt(t)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = gn++),
          e && this.add(e);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, n) {
          N(e) && ((n = t), (t = e), (e = N));
          var r = this,
            i = function () {
              var e,
                i = u,
                a = r.selector;
              return (
                i && i !== r && i.data.push(r),
                n && (r.selector = tt(n)),
                (u = r),
                (e = t.apply(r, arguments)),
                N(e) && r._r.push(e),
                (u = i),
                (r.selector = a),
                (r.isReverted = !1),
                e
              );
            };
          return (
            (r.last = i),
            e === N
              ? i(r, function (e) {
                  return r.add(null, e);
                })
              : e
              ? (r[e] = i)
              : i
          );
        }),
        (t.ignore = function (e) {
          var t = u;
          (u = null), e(this), (u = t);
        }),
        (t.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (n) {
              return n instanceof e
                ? t.push.apply(t, n.getTweens())
                : n instanceof Zt &&
                    !(n.parent && "nested" === n.parent.data) &&
                    t.push(n);
            }),
            t
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, t) {
          var n = this;
          if (
            (e
              ? (function () {
                  for (var t, r = n.getTweens(), i = n.data.length; i--; )
                    "isFlip" === (t = n.data[i]).data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (e) {
                        return r.splice(r.indexOf(e), 1);
                      }));
                  for (
                    r
                      .map(function (e) {
                        return {
                          g:
                            e._dur ||
                            e._delay ||
                            (e._sat && !e._sat.vars.immediateRender)
                              ? e.globalTime(0)
                              : -1 / 0,
                          t: e,
                        };
                      })
                      .sort(function (e, t) {
                        return t.g - e.g || -1 / 0;
                      })
                      .forEach(function (t) {
                        return t.t.revert(e);
                      }),
                      i = n.data.length;
                    i--;

                  )
                    (t = n.data[i]) instanceof It
                      ? "nested" !== t.data &&
                        (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
                      : !(t instanceof Zt) && t.revert && t.revert(e);
                  n._r.forEach(function (t) {
                    return t(e, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (e) {
                  return e.kill && e.kill();
                }),
            this.clear(),
            t)
          )
            for (var r = dn.length; r--; )
              dn[r].id === this.id && dn.splice(r, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        e
      );
    })(),
    _n = (function () {
      function e(e) {
        (this.contexts = []), (this.scope = e), u && u.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, n) {
          z(e) || (e = { matches: e });
          var r,
            i,
            a,
            o = new bn(0, n || this.scope),
            l = (o.conditions = {});
          for (i in (u && !o.selector && (o.selector = u.selector),
          this.contexts.push(o),
          (t = o.add("onMatch", t)),
          (o.queries = e),
          e))
            "all" === i
              ? (a = 1)
              : (r = f.matchMedia(e[i])) &&
                (dn.indexOf(o) < 0 && dn.push(o),
                (l[i] = r.matches) && (a = 1),
                r.addListener
                  ? r.addListener(yn)
                  : r.addEventListener("change", yn));
          return (
            a &&
              t(o, function (e) {
                return o.add(null, e);
              }),
            this
          );
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (t) {
            return t.kill(e, !0);
          });
        }),
        e
      );
    })(),
    wn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        t.forEach(function (e) {
          return ht(e);
        });
      },
      timeline: function (e) {
        return new It(e);
      },
      getTweensOf: function (e, t) {
        return c.getTweensOf(e, t);
      },
      getProperty: function (e, t, n, r) {
        P(e) && (e = et(e)[0]);
        var i = ce(e || {}).get,
          a = n ? _e : be;
        return (
          "native" === n && (n = ""),
          e
            ? t
              ? a(((ie[t] && ie[t].get) || i)(e, t, n, r))
              : function (t, n, r) {
                  return a(((ie[t] && ie[t].get) || i)(e, t, n, r));
                }
            : e
        );
      },
      quickSetter: function (e, t, n) {
        if ((e = et(e)).length > 1) {
          var r = e.map(function (e) {
              return Cn.quickSetter(e, t, n);
            }),
            i = r.length;
          return function (e) {
            for (var t = i; t--; ) r[t](e);
          };
        }
        e = e[0] || {};
        var a = ie[t],
          o = ce(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          s = a
            ? function (t) {
                var r = new a();
                (g._pt = 0),
                  r.init(e, n ? t + n : t, g, 0, [e]),
                  r.render(1, r),
                  g._pt && on(1, g);
              }
            : o.set(e, l);
        return a
          ? s
          : function (t) {
              return s(e, l, n ? t + n : t, o, 1);
            };
      },
      quickTo: function (e, t, n) {
        var r,
          i = Cn.to(
            e,
            xe((((r = {})[t] = "+=0.1"), (r.paused = !0), r), n || {})
          ),
          a = function (e, n, r) {
            return i.resetTo(t, e, n, r);
          };
        return (a.tween = i), a;
      },
      isTweening: function (e) {
        return c.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = zt(e.ease, b.ease)), ke(b, e || {});
      },
      config: function (e) {
        return ke(y, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          n = e.effect,
          r = e.plugins,
          i = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (e) {
          return (
            e && !ie[e] && !Y[e] && Q(t + " effect requires " + e + " plugin.")
          );
        }),
          (ae[t] = function (e, t, r) {
            return n(et(e), we(t || {}, i), r);
          }),
          a &&
            (It.prototype[t] = function (e, n, r) {
              return this.add(ae[t](e, z(n) ? n : (r = n) && {}, this), r);
            });
      },
      registerEase: function (e, t) {
        Tt[e] = zt(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? zt(e, t) : Tt;
      },
      getById: function (e) {
        return c.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var n,
          r,
          i = new It(e);
        for (
          i.smoothChildTiming = j(e.smoothChildTiming),
            c.remove(i),
            i._dp = 0,
            i._time = i._tTime = c._time,
            n = c._first;
          n;

        )
          (r = n._next),
            (!t &&
              !n._dur &&
              n instanceof Zt &&
              n.vars.onComplete === n._targets[0]) ||
              Fe(i, n, n._start - n._delay),
            (n = r);
        return Fe(c, i, 0), i;
      },
      context: function (e, t) {
        return e ? new bn(e, t) : u;
      },
      matchMedia: function (e) {
        return new _n(e);
      },
      matchMediaRefresh: function () {
        return (
          dn.forEach(function (e) {
            var t,
              n,
              r = e.conditions;
            for (n in r) r[n] && ((r[n] = !1), (t = 1));
            t && e.revert();
          }) || yn()
        );
      },
      addEventListener: function (e, t) {
        var n = pn[e] || (pn[e] = []);
        ~n.indexOf(t) || n.push(t);
      },
      removeEventListener: function (e, t) {
        var n = pn[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      },
      utils: {
        wrap: function e(t, n, r) {
          var i = n - t;
          return A(t)
            ? lt(t, e(0, t.length), n)
            : Xe(r, function (e) {
                return ((i + ((e - t) % i)) % i) + t;
              });
        },
        wrapYoyo: function e(t, n, r) {
          var i = n - t,
            a = 2 * i;
          return A(t)
            ? lt(t, e(0, t.length - 1), n)
            : Xe(r, function (e) {
                return t + ((e = (a + ((e - t) % a)) % a || 0) > i ? a - e : e);
              });
        },
        distribute: rt,
        random: ot,
        snap: at,
        normalize: function (e, t, n) {
          return ut(e, t, 0, 1, n);
        },
        getUnit: Ze,
        clamp: function (e, t, n) {
          return Xe(n, function (n) {
            return Qe(e, t, n);
          });
        },
        splitColor: yt,
        toArray: et,
        selector: tt,
        mapRange: ut,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (n) {
            return e(parseFloat(n)) + (t || Ze(n));
          };
        },
        interpolate: function e(t, n, r, i) {
          var a = isNaN(t + n)
            ? 0
            : function (e) {
                return (1 - e) * t + e * n;
              };
          if (!a) {
            var o,
              l,
              s,
              u,
              c,
              f = P(t),
              d = {};
            if ((!0 === r && (i = 1) && (r = null), f))
              (t = { p: t }), (n = { p: n });
            else if (A(t) && !A(n)) {
              for (s = [], u = t.length, c = u - 2, l = 1; l < u; l++)
                s.push(e(t[l - 1], t[l]));
              u--,
                (a = function (e) {
                  e *= u;
                  var t = Math.min(c, ~~e);
                  return s[t](e - t);
                }),
                (r = n);
            } else i || (t = xe(A(t) ? [] : {}, t));
            if (!s) {
              for (o in n) Vt.call(d, t, o, "get", n[o]);
              a = function (e) {
                return on(e, d) || (f ? t.p : t);
              };
            }
          }
          return Xe(r, a);
        },
        shuffle: nt,
      },
      install: q,
      effects: ae,
      ticker: Ct,
      updateRoot: It.updateRoot,
      plugins: ie,
      globalTimeline: c,
      core: {
        PropTween: fn,
        globals: Z,
        Tween: Zt,
        Timeline: It,
        Animation: Ft,
        getCache: ce,
        _removeLinkedListItem: Ee,
        reverting: function () {
          return s;
        },
        context: function (e) {
          return e && u && (u.data.push(e), (e._ctx = u)), u;
        },
        suppressOverwrites: function (e) {
          return (l = e);
        },
      },
    };
  de("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (wn[e] = Zt[e]);
  }),
    Ct.add(It.updateRoot),
    (g = wn.to({}, { duration: 0 }));
  var xn = function (e, t) {
      for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
        n = n._next;
      return n;
    },
    kn = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (e, n, r) {
          r._onInit = function (e) {
            var r, i;
            if (
              (P(n) &&
                ((r = {}),
                de(n, function (e) {
                  return (r[e] = 1);
                }),
                (n = r)),
              t)
            ) {
              for (i in ((r = {}), n)) r[i] = t(n[i]);
              n = r;
            }
            !(function (e, t) {
              var n,
                r,
                i,
                a = e._targets;
              for (n in t)
                for (r = a.length; r--; )
                  (i = e._ptLookup[r][n]) &&
                    (i = i.d) &&
                    (i._pt && (i = xn(i, n)),
                    i && i.modifier && i.modifier(t[n], e, a[r], n));
            })(e, n);
          };
        },
      };
    },
    Cn =
      wn.registerPlugin(
        {
          name: "attr",
          init: function (e, t, n, r, i) {
            var a, o, l;
            for (a in ((this.tween = n), t))
              (l = e.getAttribute(a) || ""),
                ((o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[a],
                  r,
                  i,
                  0,
                  0,
                  a
                )).op = a),
                (o.b = l),
                this._props.push(a);
          },
          render: function (e, t) {
            for (var n = t._pt; n; )
              s ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var n = t.length; n--; )
              this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
          },
        },
        kn("roundProps", it),
        kn("modifiers"),
        kn("snap", at)
      ) || wn;
  (Zt.version = It.version = Cn.version = "3.12.5"), (h = 1), R() && St();
  Tt.Power0, Tt.Power1, Tt.Power2;
  var Sn,
    Tn,
    En,
    Pn,
    Nn,
    Mn,
    On,
    zn,
    jn = Tt.Power3,
    Rn =
      (Tt.Power4,
      Tt.Linear,
      Tt.Quad,
      Tt.Cubic,
      Tt.Quart,
      Tt.Quint,
      Tt.Strong,
      Tt.Elastic,
      Tt.Back,
      Tt.SteppedEase,
      Tt.Bounce,
      Tt.Sine,
      Tt.Expo,
      Tt.Circ,
      {}),
    Ln = 180 / Math.PI,
    Dn = Math.PI / 180,
    An = Math.atan2,
    Fn = /([A-Z])/g,
    In = /(left|right|width|margin|padding|x)/i,
    Bn = /[\s,\(]\S/,
    Un = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Hn = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    },
    Vn = function (e, t) {
      return t.set(
        t.t,
        t.p,
        1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
        t
      );
    },
    Wn = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
        t
      );
    },
    Yn = function (e, t) {
      var n = t.s + t.c * e;
      t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    $n = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    qn = function (e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    },
    Xn = function (e, t, n) {
      return (e.style[t] = n);
    },
    Qn = function (e, t, n) {
      return e.style.setProperty(t, n);
    },
    Zn = function (e, t, n) {
      return (e._gsap[t] = n);
    },
    Gn = function (e, t, n) {
      return (e._gsap.scaleX = e._gsap.scaleY = n);
    },
    Kn = function (e, t, n, r, i) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
    },
    Jn = function (e, t, n, r, i) {
      var a = e._gsap;
      (a[t] = n), a.renderTransform(i, a);
    },
    er = "transform",
    tr = er + "Origin",
    nr = function e(t, n) {
      var r = this,
        i = this.target,
        a = i.style,
        o = i._gsap;
      if (t in Rn && a) {
        if (((this.tfm = this.tfm || {}), "transform" === t))
          return Un.transform.split(",").forEach(function (t) {
            return e.call(r, t, n);
          });
        if (
          (~(t = Un[t] || t).indexOf(",")
            ? t.split(",").forEach(function (e) {
                return (r.tfm[e] = _r(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : _r(i, t)),
          t === tr && (this.tfm.zOrigin = o.zOrigin),
          this.props.indexOf(er) >= 0)
        )
          return;
        o.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(tr, n, "")),
          (t = er);
      }
      (a || n) && this.props.push(t, n, a[t]);
    },
    rr = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    ir = function () {
      var e,
        t,
        n = this.props,
        r = this.target,
        i = r.style,
        a = r._gsap;
      for (e = 0; e < n.length; e += 3)
        n[e + 1]
          ? (r[n[e]] = n[e + 2])
          : n[e + 2]
          ? (i[n[e]] = n[e + 2])
          : i.removeProperty(
              "--" === n[e].substr(0, 2)
                ? n[e]
                : n[e].replace(Fn, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (t in this.tfm) a[t] = this.tfm[t];
        a.svg &&
          (a.renderTransform(),
          r.setAttribute("data-svg-origin", this.svgo || "")),
          ((e = On()) && e.isStart) ||
            i[er] ||
            (rr(i),
            a.zOrigin &&
              i[tr] &&
              ((i[tr] += " " + a.zOrigin + "px"),
              (a.zOrigin = 0),
              a.renderTransform()),
            (a.uncache = 1));
      }
    },
    ar = function (e, t) {
      var n = { target: e, props: [], revert: ir, save: nr };
      return (
        e._gsap || Cn.core.getCache(e),
        t &&
          t.split(",").forEach(function (e) {
            return n.save(e);
          }),
        n
      );
    },
    or = function (e, t) {
      var n = Tn.createElementNS
        ? Tn.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Tn.createElement(e);
      return n && n.style ? n : Tn.createElement(e);
    },
    lr = function e(t, n, r) {
      var i = getComputedStyle(t);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(Fn, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && e(t, ur(n) || n, 1)) ||
        ""
      );
    },
    sr = "O,Moz,ms,Ms,Webkit".split(","),
    ur = function (e, t, n) {
      var r = (t || Nn).style,
        i = 5;
      if (e in r && !n) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        i-- && !(sr[i] + e in r);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? sr[i] : "") + e;
    },
    cr = function () {
      "undefined" !== typeof window &&
        window.document &&
        ((Sn = window),
        (Tn = Sn.document),
        (En = Tn.documentElement),
        (Nn = or("div") || { style: {} }),
        or("div"),
        (er = ur(er)),
        (tr = er + "Origin"),
        (Nn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (zn = !!ur("perspective")),
        (On = Cn.core.reverting),
        (Pn = 1));
    },
    fr = function e(t) {
      var n,
        r = or(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        a = this.nextSibling,
        o = this.style.cssText;
      if (
        (En.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (n = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = e);
        } catch (l) {}
      else this._gsapBBox && (n = this._gsapBBox());
      return (
        i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
        En.removeChild(r),
        (this.style.cssText = o),
        n
      );
    },
    dr = function (e, t) {
      for (var n = t.length; n--; )
        if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
    },
    pr = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch (n) {
        t = fr.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === fr ||
          (t = fr.call(e, !0)),
        !t || t.width || t.x || t.y
          ? t
          : {
              x: +dr(e, ["x", "cx", "x1"]) || 0,
              y: +dr(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    hr = function (e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !pr(e));
    },
    mr = function (e, t) {
      if (t) {
        var n,
          r = e.style;
        t in Rn && t !== tr && (t = er),
          r.removeProperty
            ? (("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6)) ||
                (t = "-" + t),
              r.removeProperty(
                "--" === n ? t : t.replace(Fn, "-$1").toLowerCase()
              ))
            : r.removeAttribute(t);
      }
    },
    gr = function (e, t, n, r, i, a) {
      var o = new fn(e._pt, t, n, 0, 1, a ? qn : $n);
      return (e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o;
    },
    vr = { deg: 1, rad: 1, turn: 1 },
    yr = { grid: 1, flex: 1 },
    br = function e(t, n, r, i) {
      var a,
        o,
        l,
        s,
        u = parseFloat(r) || 0,
        c = (r + "").trim().substr((u + "").length) || "px",
        f = Nn.style,
        d = In.test(n),
        p = "svg" === t.tagName.toLowerCase(),
        h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
        m = 100,
        g = "px" === i,
        v = "%" === i;
      if (i === c || !u || vr[i] || vr[c]) return u;
      if (
        ("px" !== c && !g && (u = e(t, n, r, "px")),
        (s = t.getCTM && hr(t)),
        (v || "%" === c) && (Rn[n] || ~n.indexOf("adius")))
      )
        return (
          (a = s ? t.getBBox()[d ? "width" : "height"] : t[h]),
          pe(v ? (u / a) * m : (u / 100) * a)
        );
      if (
        ((f[d ? "width" : "height"] = m + (g ? c : i)),
        (o =
          ~n.indexOf("adius") || ("em" === i && t.appendChild && !p)
            ? t
            : t.parentNode),
        s && (o = (t.ownerSVGElement || {}).parentNode),
        (o && o !== Tn && o.appendChild) || (o = Tn.body),
        (l = o._gsap) && v && l.width && d && l.time === Ct.time && !l.uncache)
      )
        return pe((u / l.width) * m);
      if (!v || ("height" !== n && "width" !== n))
        (v || "%" === c) &&
          !yr[lr(o, "display")] &&
          (f.position = lr(t, "position")),
          o === t && (f.position = "static"),
          o.appendChild(Nn),
          (a = Nn[h]),
          o.removeChild(Nn),
          (f.position = "absolute");
      else {
        var y = t.style[n];
        (t.style[n] = m + i), (a = t[h]), y ? (t.style[n] = y) : mr(t, n);
      }
      return (
        d && v && (((l = ce(o)).time = Ct.time), (l.width = o[h])),
        pe(g ? (a * u) / m : a && u ? (m / a) * u : 0)
      );
    },
    _r = function (e, t, n, r) {
      var i;
      return (
        Pn || cr(),
        t in Un &&
          "transform" !== t &&
          ~(t = Un[t]).indexOf(",") &&
          (t = t.split(",")[0]),
        Rn[t] && "transform" !== t
          ? ((i = zr(e, r)),
            (i =
              "transformOrigin" !== t
                ? i[t]
                : i.svg
                ? i.origin
                : jr(lr(e, tr)) + " " + i.zOrigin + "px"))
          : (!(i = e.style[t]) ||
              "auto" === i ||
              r ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (Sr[t] && Sr[t](e, t, n)) ||
              lr(e, t) ||
              fe(e, t) ||
              ("opacity" === t ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? br(e, t, i, n) + n : i
      );
    },
    wr = function (e, t, n, r) {
      if (!n || "none" === n) {
        var i = ur(t, e, 1),
          a = i && lr(e, i, 1);
        a && a !== n
          ? ((t = i), (n = a))
          : "borderColor" === t && (n = lr(e, "borderTopColor"));
      }
      var o,
        l,
        s,
        u,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        v = new fn(this._pt, e.style, t, 0, 1, an),
        b = 0,
        _ = 0;
      if (
        ((v.b = n),
        (v.e = r),
        (n += ""),
        "auto" === (r += "") &&
          ((f = e.style[t]),
          (e.style[t] = r),
          (r = lr(e, t) || r),
          f ? (e.style[t] = f) : mr(e, t)),
        kt((o = [n, r])),
        (r = o[1]),
        (s = (n = o[0]).match(B) || []),
        (r.match(B) || []).length)
      ) {
        for (; (l = B.exec(r)); )
          (d = l[0]),
            (h = r.substring(b, l.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                (c = 1),
            d !== (f = s[_++] || "") &&
              ((u = parseFloat(f) || 0),
              (g = f.substr((u + "").length)),
              "=" === d.charAt(1) && (d = me(u, d) + g),
              (p = parseFloat(d)),
              (m = d.substr((p + "").length)),
              (b = B.lastIndex - m.length),
              m ||
                ((m = m || y.units[t] || g),
                b === r.length && ((r += m), (v.e += m))),
              g !== m && (u = br(e, t, f, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: h || 1 === _ ? h : ",",
                s: u,
                c: p - u,
                m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
              }));
        v.c = b < r.length ? r.substring(b, r.length) : "";
      } else v.r = "display" === t && "none" === r ? qn : $n;
      return H.test(r) && (v.e = 0), (this._pt = v), v;
    },
    xr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    kr = function (e) {
      var t = e.split(" "),
        n = t[0],
        r = t[1] || "50%";
      return (
        ("top" !== n && "bottom" !== n && "left" !== r && "right" !== r) ||
          ((e = n), (n = r), (r = e)),
        (t[0] = xr[n] || n),
        (t[1] = xr[r] || r),
        t.join(" ")
      );
    },
    Cr = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var n,
          r,
          i,
          a = t.t,
          o = a.style,
          l = t.u,
          s = a._gsap;
        if ("all" === l || !0 === l) (o.cssText = ""), (r = 1);
        else
          for (i = (l = l.split(",")).length; --i > -1; )
            (n = l[i]),
              Rn[n] && ((r = 1), (n = "transformOrigin" === n ? tr : er)),
              mr(a, n);
        r &&
          (mr(a, er),
          s &&
            (s.svg && a.removeAttribute("transform"),
            zr(a, 1),
            (s.uncache = 1),
            rr(o)));
      }
    },
    Sr = {
      clearProps: function (e, t, n, r, i) {
        if ("isFromStart" !== i.data) {
          var a = (e._pt = new fn(e._pt, t, n, 0, 0, Cr));
          return (a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1;
        }
      },
    },
    Tr = [1, 0, 0, 1, 0, 0],
    Er = {},
    Pr = function (e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    },
    Nr = function (e) {
      var t = lr(e, er);
      return Pr(t) ? Tr : t.substr(7).match(I).map(pe);
    },
    Mr = function (e, t) {
      var n,
        r,
        i,
        a,
        o = e._gsap || ce(e),
        l = e.style,
        s = Nr(e);
      return o.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (s = [
            (i = e.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? Tr
          : s
        : (s !== Tr ||
            e.offsetParent ||
            e === En ||
            o.svg ||
            ((i = l.display),
            (l.display = "block"),
            ((n = e.parentNode) && e.offsetParent) ||
              ((a = 1), (r = e.nextElementSibling), En.appendChild(e)),
            (s = Nr(e)),
            i ? (l.display = i) : mr(e, "display"),
            a &&
              (r
                ? n.insertBefore(e, r)
                : n
                ? n.appendChild(e)
                : En.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Or = function (e, t, n, r, i, a) {
      var o,
        l,
        s,
        u = e._gsap,
        c = i || Mr(e, !0),
        f = u.xOrigin || 0,
        d = u.yOrigin || 0,
        p = u.xOffset || 0,
        h = u.yOffset || 0,
        m = c[0],
        g = c[1],
        v = c[2],
        y = c[3],
        b = c[4],
        _ = c[5],
        w = t.split(" "),
        x = parseFloat(w[0]) || 0,
        k = parseFloat(w[1]) || 0;
      n
        ? c !== Tr &&
          (l = m * y - g * v) &&
          ((s = x * (-g / l) + k * (m / l) - (m * _ - g * b) / l),
          (x = x * (y / l) + k * (-v / l) + (v * _ - y * b) / l),
          (k = s))
        : ((x = (o = pr(e)).x + (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
          (k =
            o.y + (~(w[1] || w[0]).indexOf("%") ? (k / 100) * o.height : k))),
        r || (!1 !== r && u.smooth)
          ? ((b = x - f),
            (_ = k - d),
            (u.xOffset = p + (b * m + _ * v) - b),
            (u.yOffset = h + (b * g + _ * y) - _))
          : (u.xOffset = u.yOffset = 0),
        (u.xOrigin = x),
        (u.yOrigin = k),
        (u.smooth = !!r),
        (u.origin = t),
        (u.originIsAbsolute = !!n),
        (e.style[tr] = "0px 0px"),
        a &&
          (gr(a, u, "xOrigin", f, x),
          gr(a, u, "yOrigin", d, k),
          gr(a, u, "xOffset", p, u.xOffset),
          gr(a, u, "yOffset", h, u.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + k);
    },
    zr = function (e, t) {
      var n = e._gsap || new At(e);
      if ("x" in n && !t && !n.uncache) return n;
      var r,
        i,
        a,
        o,
        l,
        s,
        u,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        v,
        b,
        _,
        w,
        x,
        k,
        C,
        S,
        T,
        E,
        P,
        N,
        M,
        O,
        z,
        j,
        R,
        L,
        D = e.style,
        A = n.scaleX < 0,
        F = "px",
        I = "deg",
        B = getComputedStyle(e),
        U = lr(e, tr) || "0";
      return (
        (r = i = a = s = u = c = f = d = p = 0),
        (o = l = 1),
        (n.svg = !(!e.getCTM || !hr(e))),
        B.translate &&
          (("none" === B.translate &&
            "none" === B.scale &&
            "none" === B.rotate) ||
            (D[er] =
              ("none" !== B.translate
                ? "translate3d(" +
                  (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
              ("none" !== B.scale
                ? "scale(" + B.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== B[er] ? B[er] : "")),
          (D.scale = D.rotate = D.translate = "none")),
        (g = Mr(e, n.svg)),
        n.svg &&
          (n.uncache
            ? ((P = e.getBBox()),
              (U = n.xOrigin - P.x + "px " + (n.yOrigin - P.y) + "px"),
              (E = ""))
            : (E = !t && e.getAttribute("data-svg-origin")),
          Or(e, E || U, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
        (h = n.xOrigin || 0),
        (m = n.yOrigin || 0),
        g !== Tr &&
          ((w = g[0]),
          (x = g[1]),
          (k = g[2]),
          (C = g[3]),
          (r = S = g[4]),
          (i = T = g[5]),
          6 === g.length
            ? ((o = Math.sqrt(w * w + x * x)),
              (l = Math.sqrt(C * C + k * k)),
              (s = w || x ? An(x, w) * Ln : 0),
              (f = k || C ? An(k, C) * Ln + s : 0) &&
                (l *= Math.abs(Math.cos(f * Dn))),
              n.svg && ((r -= h - (h * w + m * k)), (i -= m - (h * x + m * C))))
            : ((L = g[6]),
              (j = g[7]),
              (M = g[8]),
              (O = g[9]),
              (z = g[10]),
              (R = g[11]),
              (r = g[12]),
              (i = g[13]),
              (a = g[14]),
              (u = (v = An(L, z)) * Ln),
              v &&
                ((E = S * (b = Math.cos(-v)) + M * (_ = Math.sin(-v))),
                (P = T * b + O * _),
                (N = L * b + z * _),
                (M = S * -_ + M * b),
                (O = T * -_ + O * b),
                (z = L * -_ + z * b),
                (R = j * -_ + R * b),
                (S = E),
                (T = P),
                (L = N)),
              (c = (v = An(-k, z)) * Ln),
              v &&
                ((b = Math.cos(-v)),
                (R = C * (_ = Math.sin(-v)) + R * b),
                (w = E = w * b - M * _),
                (x = P = x * b - O * _),
                (k = N = k * b - z * _)),
              (s = (v = An(x, w)) * Ln),
              v &&
                ((E = w * (b = Math.cos(v)) + x * (_ = Math.sin(v))),
                (P = S * b + T * _),
                (x = x * b - w * _),
                (T = T * b - S * _),
                (w = E),
                (S = P)),
              u &&
                Math.abs(u) + Math.abs(s) > 359.9 &&
                ((u = s = 0), (c = 180 - c)),
              (o = pe(Math.sqrt(w * w + x * x + k * k))),
              (l = pe(Math.sqrt(T * T + L * L))),
              (v = An(S, T)),
              (f = Math.abs(v) > 2e-4 ? v * Ln : 0),
              (p = R ? 1 / (R < 0 ? -R : R) : 0)),
          n.svg &&
            ((E = e.getAttribute("transform")),
            (n.forceCSS = e.setAttribute("transform", "") || !Pr(lr(e, er))),
            E && e.setAttribute("transform", E))),
        Math.abs(f) > 90 &&
          Math.abs(f) < 270 &&
          (A
            ? ((o *= -1),
              (f += s <= 0 ? 180 : -180),
              (s += s <= 0 ? 180 : -180))
            : ((l *= -1), (f += f <= 0 ? 180 : -180))),
        (t = t || n.uncache),
        (n.x =
          r -
          ((n.xPercent =
            r &&
            ((!t && n.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
            ? (e.offsetWidth * n.xPercent) / 100
            : 0) +
          F),
        (n.y =
          i -
          ((n.yPercent =
            i &&
            ((!t && n.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (e.offsetHeight * n.yPercent) / 100
            : 0) +
          F),
        (n.z = a + F),
        (n.scaleX = pe(o)),
        (n.scaleY = pe(l)),
        (n.rotation = pe(s) + I),
        (n.rotationX = pe(u) + I),
        (n.rotationY = pe(c) + I),
        (n.skewX = f + I),
        (n.skewY = d + I),
        (n.transformPerspective = p + F),
        (n.zOrigin = parseFloat(U.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
          (D[tr] = jr(U)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = y.force3D),
        (n.renderTransform = n.svg ? Br : zn ? Ir : Lr),
        (n.uncache = 0),
        n
      );
    },
    jr = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Rr = function (e, t, n) {
      var r = Ze(t);
      return pe(parseFloat(t) + parseFloat(br(e, "x", n + "px", r))) + r;
    },
    Lr = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Ir(e, t);
    },
    Dr = "0deg",
    Ar = "0px",
    Fr = ") ",
    Ir = function (e, t) {
      var n = t || this,
        r = n.xPercent,
        i = n.yPercent,
        a = n.x,
        o = n.y,
        l = n.z,
        s = n.rotation,
        u = n.rotationY,
        c = n.rotationX,
        f = n.skewX,
        d = n.skewY,
        p = n.scaleX,
        h = n.scaleY,
        m = n.transformPerspective,
        g = n.force3D,
        v = n.target,
        y = n.zOrigin,
        b = "",
        _ = ("auto" === g && e && 1 !== e) || !0 === g;
      if (y && (c !== Dr || u !== Dr)) {
        var w,
          x = parseFloat(u) * Dn,
          k = Math.sin(x),
          C = Math.cos(x);
        (x = parseFloat(c) * Dn),
          (w = Math.cos(x)),
          (a = Rr(v, a, k * w * -y)),
          (o = Rr(v, o, -Math.sin(x) * -y)),
          (l = Rr(v, l, C * w * -y + y));
      }
      m !== Ar && (b += "perspective(" + m + Fr),
        (r || i) && (b += "translate(" + r + "%, " + i + "%) "),
        (_ || a !== Ar || o !== Ar || l !== Ar) &&
          (b +=
            l !== Ar || _
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + Fr),
        s !== Dr && (b += "rotate(" + s + Fr),
        u !== Dr && (b += "rotateY(" + u + Fr),
        c !== Dr && (b += "rotateX(" + c + Fr),
        (f === Dr && d === Dr) || (b += "skew(" + f + ", " + d + Fr),
        (1 === p && 1 === h) || (b += "scale(" + p + ", " + h + Fr),
        (v.style[er] = b || "translate(0, 0)");
    },
    Br = function (e, t) {
      var n,
        r,
        i,
        a,
        o,
        l = t || this,
        s = l.xPercent,
        u = l.yPercent,
        c = l.x,
        f = l.y,
        d = l.rotation,
        p = l.skewX,
        h = l.skewY,
        m = l.scaleX,
        g = l.scaleY,
        v = l.target,
        y = l.xOrigin,
        b = l.yOrigin,
        _ = l.xOffset,
        w = l.yOffset,
        x = l.forceCSS,
        k = parseFloat(c),
        C = parseFloat(f);
      (d = parseFloat(d)),
        (p = parseFloat(p)),
        (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
        d || p
          ? ((d *= Dn),
            (p *= Dn),
            (n = Math.cos(d) * m),
            (r = Math.sin(d) * m),
            (i = Math.sin(d - p) * -g),
            (a = Math.cos(d - p) * g),
            p &&
              ((h *= Dn),
              (o = Math.tan(p - h)),
              (i *= o = Math.sqrt(1 + o * o)),
              (a *= o),
              h &&
                ((o = Math.tan(h)), (n *= o = Math.sqrt(1 + o * o)), (r *= o))),
            (n = pe(n)),
            (r = pe(r)),
            (i = pe(i)),
            (a = pe(a)))
          : ((n = m), (a = g), (r = i = 0)),
        ((k && !~(c + "").indexOf("px")) || (C && !~(f + "").indexOf("px"))) &&
          ((k = br(v, "x", c, "px")), (C = br(v, "y", f, "px"))),
        (y || b || _ || w) &&
          ((k = pe(k + y - (y * n + b * i) + _)),
          (C = pe(C + b - (y * r + b * a) + w))),
        (s || u) &&
          ((o = v.getBBox()),
          (k = pe(k + (s / 100) * o.width)),
          (C = pe(C + (u / 100) * o.height))),
        (o =
          "matrix(" +
          n +
          "," +
          r +
          "," +
          i +
          "," +
          a +
          "," +
          k +
          "," +
          C +
          ")"),
        v.setAttribute("transform", o),
        x && (v.style[er] = o);
    },
    Ur = function (e, t, n, r, i) {
      var a,
        o,
        l = 360,
        s = P(i),
        u = parseFloat(i) * (s && ~i.indexOf("rad") ? Ln : 1) - r,
        c = r + u + "deg";
      return (
        s &&
          ("short" === (a = i.split("_")[1]) &&
            (u %= l) !== u % 180 &&
            (u += u < 0 ? l : -360),
          "cw" === a && u < 0
            ? (u = ((u + 36e9) % l) - ~~(u / l) * l)
            : "ccw" === a && u > 0 && (u = ((u - 36e9) % l) - ~~(u / l) * l)),
        (e._pt = o = new fn(e._pt, t, n, r, u, Vn)),
        (o.e = c),
        (o.u = "deg"),
        e._props.push(n),
        o
      );
    },
    Hr = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    },
    Vr = function (e, t, n) {
      var r,
        i,
        a,
        o,
        l,
        s,
        u,
        c = Hr({}, n._gsap),
        f = n.style;
      for (i in (c.svg
        ? ((a = n.getAttribute("transform")),
          n.setAttribute("transform", ""),
          (f[er] = t),
          (r = zr(n, 1)),
          mr(n, er),
          n.setAttribute("transform", a))
        : ((a = getComputedStyle(n)[er]),
          (f[er] = t),
          (r = zr(n, 1)),
          (f[er] = a)),
      Rn))
        (a = c[i]) !== (o = r[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((l = Ze(a) !== (u = Ze(o)) ? br(n, i, a, u) : parseFloat(a)),
          (s = parseFloat(o)),
          (e._pt = new fn(e._pt, r, i, l, s - l, Hn)),
          (e._pt.u = u || 0),
          e._props.push(i));
      Hr(r, c);
    };
  de("padding,margin,Width,Radius", function (e, t) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      a = "Left",
      o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (
        n
      ) {
        return t < 2 ? e + n : "border" + n + e;
      });
    Sr[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
      var a, l;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return _r(e, t, n);
          })),
          5 === (l = a.join(" ")).split(a[0]).length ? a[0] : l
        );
      (a = (r + "").split(" ")),
        (l = {}),
        o.forEach(function (e, t) {
          return (l[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
        }),
        e.init(t, l, i);
    };
  });
  var Wr = {
    name: "css",
    register: cr,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, n, r, i) {
      var a,
        o,
        l,
        s,
        u,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        v,
        b,
        _,
        w,
        x = this._props,
        k = e.style,
        C = n.vars.startAt;
      for (f in (Pn || cr(),
      (this.styles = this.styles || ar(e)),
      (w = this.styles.props),
      (this.tween = n),
      t))
        if ("autoRound" !== f && ((o = t[f]), !ie[f] || !Wt(f, t, n, r, e, i)))
          if (
            ((u = typeof o),
            (c = Sr[f]),
            "function" === u && (u = typeof (o = o.call(n, r, e, i))),
            "string" === u && ~o.indexOf("random(") && (o = st(o)),
            c)
          )
            c(this, e, f, o, n) && (_ = 1);
          else if ("--" === f.substr(0, 2))
            (a = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
              (o += ""),
              (wt.lastIndex = 0),
              wt.test(a) || ((d = Ze(a)), (p = Ze(o))),
              p ? d !== p && (a = br(e, f, a, p) + p) : d && (o += d),
              this.add(k, "setProperty", a, o, r, i, 0, 0, f),
              x.push(f),
              w.push(f, 0, k[f]);
          else if ("undefined" !== u) {
            if (
              (C && f in C
                ? ((a =
                    "function" === typeof C[f] ? C[f].call(n, r, e, i) : C[f]),
                  P(a) && ~a.indexOf("random(") && (a = st(a)),
                  Ze(a + "") ||
                    "auto" === a ||
                    (a += y.units[f] || Ze(_r(e, f)) || ""),
                  "=" === (a + "").charAt(1) && (a = _r(e, f)))
                : (a = _r(e, f)),
              (s = parseFloat(a)),
              (h = "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                (o = o.substr(2)),
              (l = parseFloat(o)),
              f in Un &&
                ("autoAlpha" === f &&
                  (1 === s && "hidden" === _r(e, "visibility") && l && (s = 0),
                  w.push("visibility", 0, k.visibility),
                  gr(
                    this,
                    k,
                    "visibility",
                    s ? "inherit" : "hidden",
                    l ? "inherit" : "hidden",
                    !l
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = Un[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (m = f in Rn))
            )
              if (
                (this.styles.save(f),
                g ||
                  (((v = e._gsap).renderTransform && !t.parseTransform) ||
                    zr(e, t.parseTransform),
                  (b = !1 !== t.smoothOrigin && v.smooth),
                  ((g = this._pt =
                    new fn(
                      this._pt,
                      k,
                      er,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new fn(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (h ? me(v.scaleY, h + l) : l) - v.scaleY || 0,
                  Hn
                )),
                  (this._pt.u = 0),
                  x.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  w.push(tr, 0, k[tr]),
                    (o = kr(o)),
                    v.svg
                      ? Or(e, o, 0, b, 0, this)
                      : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin &&
                          gr(this, v, "zOrigin", v.zOrigin, p),
                        gr(this, k, f, jr(a), jr(o)));
                  continue;
                }
                if ("svgOrigin" === f) {
                  Or(e, o, 1, b, 0, this);
                  continue;
                }
                if (f in Er) {
                  Ur(this, v, f, s, h ? me(s, h + o) : o);
                  continue;
                }
                if ("smoothOrigin" === f) {
                  gr(this, v, "smooth", v.smooth, o);
                  continue;
                }
                if ("force3D" === f) {
                  v[f] = o;
                  continue;
                }
                if ("transform" === f) {
                  Vr(this, o, e);
                  continue;
                }
              }
            else f in k || (f = ur(f) || f);
            if (
              m ||
              ((l || 0 === l) && (s || 0 === s) && !Bn.test(o) && f in k)
            )
              l || (l = 0),
                (d = (a + "").substr((s + "").length)) !==
                  (p = Ze(o) || (f in y.units ? y.units[f] : d)) &&
                  (s = br(e, f, a, p)),
                (this._pt = new fn(
                  this._pt,
                  m ? v : k,
                  f,
                  s,
                  (h ? me(s, h + l) : l) - s,
                  m || ("px" !== p && "zIndex" !== f) || !1 === t.autoRound
                    ? Hn
                    : Yn
                )),
                (this._pt.u = p || 0),
                d !== p && "%" !== p && ((this._pt.b = a), (this._pt.r = Wn));
            else if (f in k) wr.call(this, e, f, a, h ? h + o : o);
            else if (f in e) this.add(e, f, a || e[f], h ? h + o : o, r, i);
            else if ("parseTransform" !== f) {
              X(f, o);
              continue;
            }
            m || (f in k ? w.push(f, 0, k[f]) : w.push(f, 1, a || e[f])),
              x.push(f);
          }
      _ && cn(this);
    },
    render: function (e, t) {
      if (t.tween._time || !On())
        for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
      else t.styles.revert();
    },
    get: _r,
    aliases: Un,
    getSetter: function (e, t, n) {
      var r = Un[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Rn && t !== tr && (e._gsap.x || _r(e, "x"))
          ? n && Mn === n
            ? "scale" === t
              ? Gn
              : Zn
            : (Mn = n || {}) && ("scale" === t ? Kn : Jn)
          : e.style && !O(e.style[t])
          ? Xn
          : ~t.indexOf("-")
          ? Qn
          : tn(e, t)
      );
    },
    core: { _removeProperty: mr, _getMatrix: Mr },
  };
  (Cn.utils.checkPrefix = ur),
    (Cn.core.getStyleSaver = ar),
    (function (e, t) {
      var n = de(
        e +
          "," +
          t +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          Rn[e] = 1;
        }
      );
      de(t, function (e) {
        (y.units[e] = "deg"), (Er[e] = 1);
      }),
        (Un[n[13]] = e + "," + t),
        de(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            Un[t[1]] = n[t[0]];
          }
        );
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY"
    ),
    de(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        y.units[e] = "px";
      }
    ),
    Cn.registerPlugin(Wr);
  var Yr = Cn.registerPlugin(Wr) || Cn,
    $r = (Yr.core.Tween, n(579));
  function qr() {
    const e = (0, r.useRef)(null),
      t = (0, r.useRef)(null),
      n = (0, r.useRef)(null),
      i = (0, r.useRef)(null),
      a = (0, r.useRef)(null),
      [o, l] = (0, r.useState)(!1);
    return (
      (0, r.useEffect)(() => {
        Yr.timeline()
          .fromTo(
            e.current,
            { opacity: 0, y: "-30%" },
            { opacity: 1, y: "0%", duration: 2, ease: jn.easeOut }
          )
          .fromTo(
            t.current,
            { opacity: 0, y: "30%" },
            { opacity: 1, y: "0%", duration: 2, ease: jn.easeOut },
            "<25%"
          )
          .fromTo(
            n.current,
            { opacity: 0, y: "30%" },
            { opacity: 1, y: "0%", duration: 1, ease: jn.easeOut },
            "<25%"
          )
          .fromTo(
            i.current,
            { opacity: 0, x: "30%" },
            { opacity: 1, x: "0%", duration: 1.5, ease: jn.easeOut },
            "<25%"
          )
          .fromTo(
            a.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.5, ease: jn.easeOut },
            "<25%"
          );
      }, []),
      (0, $r.jsx)("section", {
        children: (0, $r.jsx)("div", {
          className: "container header",
          children: (0, $r.jsxs)("div", {
            className: "grid-header",
            id: "header",
            children: [
              (0, $r.jsxs)("div", {
                className: "flex-header",
                children: [
                  (0, $r.jsx)("h1", {
                    className: "title-lg",
                    ref: e,
                    children: "𝕏OGE",
                  }),
                  (0, $r.jsx)("p", {
                    className: "text-lg",
                    ref: t,
                    children:
                      "Say hello to the official currency of 𝕏!",
                  }),
                  // (0, $r.jsx)("a", {
                  //   className: "btn",
                  //   target: "_blank",
                  //   href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xdc5510f863dead665cfb65b4203b713957094022&chain=mainnet",
                  //   ref: n,
                  //   rel: "noreferrer",
                  //   children: "Join the Galactic Mission",
                  // }),
                  (0, $r.jsxs)("div", {
                    className: "copy-contract",
                    children: [
                      (0, $r.jsx)("button", {
                        className: "btn-copy",
                        ref: a,
                        onClick: () => {
                          navigator.clipboard
                            .writeText(
                              "0xdc5510f863dead665cfb65b4203b713957094022"
                            )
                            .then(() => {
                              l(!0), setTimeout(() => l(!1), 2e3);
                            });
                        },
                        children: "Copy Contract Address",
                      }),
                      o &&
                        (0, $r.jsx)("span", {
                          className: "copied-msg",
                          children: "Copied!",
                        }),
                    ],
                  }),
                ],
              }),
              (0, $r.jsx)("div", {
                children: (0, $r.jsx)("img", {
                  className: "header-img flip-horizontal width",
                  src: "img/welcome-img.png",
                  alt: "welcome img",
                  ref: i,
                }),
              }),
            ],
          }),
        }),
      })
    );
  }
  const Xr = function () {
    const [e, t] = (0, r.useState)(!1),
      [n, i] = (0, r.useState)(!1),
      a = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        Yr.timeline().fromTo(
          a.current,
          { opacity: 0, y: "-10%" },
          { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: jn.easeOut }
        );
        const e = () => {
          const e = document.querySelector(".header").offsetHeight;
          window.scrollY > e ? i(!0) : i(!1);
        };
        return (
          window.addEventListener("scroll", e),
          () => window.removeEventListener("scroll", e)
        );
      }, []),
      (0, $r.jsx)("nav", {
        ref: a,
        className: "line " + (n ? "sticky" : ""),
        children: (0, $r.jsxs)("div", {
          className: "container",
          children: [
            (0, $r.jsxs)("div", {
              className: "logo-hamburger",
              children: [
                (0, $r.jsx)("a", {
                  href: "#header",
                  className: "logo display-none-desktop",
                  children: "𝕏OGE",
                }),
                (0, $r.jsxs)("div", {
                  className: "hamburger",
                  onClick: () => {
                    t(!e);
                  },
                  children: [
                    (0, $r.jsx)("div", {
                      className: "bar " + (e ? "open" : ""),
                    }),
                    (0, $r.jsx)("div", {
                      className: "bar " + (e ? "open" : ""),
                    }),
                    (0, $r.jsx)("div", {
                      className: "bar " + (e ? "open" : ""),
                    }),
                  ],
                }),
              ],
            }),
            (0, $r.jsxs)("ul", {
              className: "flex-navBar " + (e ? "show" : ""),
              children: [
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "logo display-none-mobile",
                    href: "#header",
                    rel: "noopener noreferrer",
                    children: "𝕏OGE",
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "#about",
                    rel: "noopener noreferrer",
                    children: "About Us",
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "#roadmap",
                    rel: "noopener noreferrer",
                    children: "RoadMap",
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "#tokenomics",
                    rel: "noopener noreferrer",
                    children: "Tokenomics",
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "#HowToBuy",
                    rel: "noopener noreferrer",
                    children: "How To Buy",
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "https://dexscreener.com/ethereum/0xdc5510f863dead665cfb65b4203b713957094022",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: (0, $r.jsxs)("p", {
                      className: "dexscreen",
                      children: [
                        " ",
                        (0, $r.jsx)("b", { children: "DEX" }),
                        "SCREENER",
                      ],
                    }),
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xdc5510f863dead665cfb65b4203b713957094022",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: (0, $r.jsx)("img", {
                      className: "dextool-icon",
                      src: "/img/Brand_DEXTools_Light.png",
                      alt: "DEXTools Logo",
                    }),
                  }),
                }),
                // (0, $r.jsx)("li", {
                //   children: (0, $r.jsx)("a", {
                //     className: "navbar-hover-effect",
                //     href: "https://docs.google.com/document/d/14W-7-f1hYLuRaM-I6m4xAGfEtnHbx-Rw/edit?tab=t.0",
                //     target: "_blank",
                //     rel: "noopener noreferrer",
                //     children: "Whitepaper",
                //   }),
                // }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "https://t.me/xdogeoneth",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: (0, $r.jsx)("svg", {
                      width: "25",
                      height: "25",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, $r.jsx)("path", {
                        d: "M21.8 2.2c-.5-.4-1.1-.4-1.6 0L2.5 10.7c-.6.2-.9.7-.9 1.3s.4 1.1.9 1.4l3.5 1.4 1.4 4c.2.7.9 1.2 1.7 1.2h.1c.5 0 1-.2 1.4-.5l2.9-2.2 3.7 3.7c.2.2.5.3.7.3.1 0 .2 0 .3-.1.3-.1.5-.4.6-.8l4.8-17.6c.1-.6 0-1.2-.4-1.6zm-9.8 10.8l-2.4 2.4-.8-2.2 7.2-5.9-4 5.7zm1 6.5l-2.5-2.5 1.7-1.7 2.5 2.5-1.7 1.7z",
                        fill: "white",
                      }),
                    }),
                  }),
                }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "navbar-hover-effect",
                    href: "https://x.com/xdogecoinoneth",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: (0, $r.jsx)("img", {
                      className: "x-icon",
                      src: "/img/x.png",
                      alt: "DEXTools Logo",
                    }),
                  }),
                }),
                // (0, $r.jsx)("li", {
                //   children: (0, $r.jsx)("a", {
                //     className: "navbar-hover-effect",
                //     href: "/",
                //     rel: "noopener noreferrer",
                //     target: "_blank",
                //     children: "BOT",
                //   }),
                // }),
                (0, $r.jsx)("li", {
                  children: (0, $r.jsx)("a", {
                    className: "btn-navBar navbar-hover-effect",
                    rel: "noopener noreferrer",
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xdc5510f863dead665cfb65b4203b713957094022&chain=mainnet",
                    children: "Buy Now",
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  };
  function Qr(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var Zr,
    Gr,
    Kr,
    Jr,
    ei,
    ti,
    ni,
    ri,
    ii,
    ai,
    oi,
    li,
    si,
    ui = function () {
      return (
        Zr ||
        ("undefined" !== typeof window &&
          (Zr = window.gsap) &&
          Zr.registerPlugin &&
          Zr)
      );
    },
    ci = 1,
    fi = [],
    di = [],
    pi = [],
    hi = Date.now,
    mi = function (e, t) {
      return t;
    },
    gi = function (e, t) {
      return ~pi.indexOf(e) && pi[pi.indexOf(e) + 1][t];
    },
    vi = function (e) {
      return !!~ai.indexOf(e);
    },
    yi = function (e, t, n, r, i) {
      return e.addEventListener(t, n, { passive: !1 !== r, capture: !!i });
    },
    bi = function (e, t, n, r) {
      return e.removeEventListener(t, n, !!r);
    },
    _i = "scrollLeft",
    wi = "scrollTop",
    xi = function () {
      return (oi && oi.isPressed) || di.cache++;
    },
    ki = function (e, t) {
      var n = function n(r) {
        if (r || 0 === r) {
          ci && (Kr.history.scrollRestoration = "manual");
          var i = oi && oi.isPressed;
          (r = n.v = Math.round(r) || (oi && oi.iOS ? 1 : 0)),
            e(r),
            (n.cacheID = di.cache),
            i && mi("ss", r);
        } else
          (t || di.cache !== n.cacheID || mi("ref")) &&
            ((n.cacheID = di.cache), (n.v = e()));
        return n.v + n.offset;
      };
      return (n.offset = 0), e && n;
    },
    Ci = {
      s: _i,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: ki(function (e) {
        return arguments.length
          ? Kr.scrollTo(e, Si.sc())
          : Kr.pageXOffset || Jr[_i] || ei[_i] || ti[_i] || 0;
      }),
    },
    Si = {
      s: wi,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ci,
      sc: ki(function (e) {
        return arguments.length
          ? Kr.scrollTo(Ci.sc(), e)
          : Kr.pageYOffset || Jr[wi] || ei[wi] || ti[wi] || 0;
      }),
    },
    Ti = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Zr.utils.toArray)(e)[0] ||
        ("string" === typeof e && !1 !== Zr.config().nullTargetWarn
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Ei = function (e, t) {
      var n = t.s,
        r = t.sc;
      vi(e) && (e = Jr.scrollingElement || ei);
      var i = di.indexOf(e),
        a = r === Si.sc ? 1 : 2;
      !~i && (i = di.push(e) - 1), di[i + a] || yi(e, "scroll", xi);
      var o = di[i + a],
        l =
          o ||
          (di[i + a] =
            ki(gi(e, n), !0) ||
            (vi(e)
              ? r
              : ki(function (t) {
                  return arguments.length ? (e[n] = t) : e[n];
                })));
      return (
        (l.target = e),
        o || (l.smooth = "smooth" === Zr.getProperty(e, "scrollBehavior")),
        l
      );
    },
    Pi = function (e, t, n) {
      var r = e,
        i = e,
        a = hi(),
        o = a,
        l = t || 50,
        s = Math.max(500, 3 * l),
        u = function (e, t) {
          var s = hi();
          t || s - a > l
            ? ((i = r), (r = e), (o = a), (a = s))
            : n
            ? (r += e)
            : (r = i + ((e - i) / (s - o)) * (a - o));
        };
      return {
        update: u,
        reset: function () {
          (i = r = n ? 0 : r), (o = a = 0);
        },
        getVelocity: function (e) {
          var t = o,
            l = i,
            c = hi();
          return (
            (e || 0 === e) && e !== r && u(e),
            a === o || c - o > s
              ? 0
              : ((r + (n ? l : -l)) / ((n ? c : a) - t)) * 1e3
          );
        },
      };
    },
    Ni = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Mi = function (e) {
      var t = Math.max.apply(Math, e),
        n = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(n) ? t : n;
    },
    Oi = function () {
      (ii = Zr.core.globals().ScrollTrigger) &&
        ii.core &&
        (function () {
          var e = ii.core,
            t = e.bridge || {},
            n = e._scrollers,
            r = e._proxies;
          n.push.apply(n, di),
            r.push.apply(r, pi),
            (di = n),
            (pi = r),
            (mi = function (e, n) {
              return t[e](n);
            });
        })();
    },
    zi = function (e) {
      return (
        (Zr = e || ui()),
        !Gr &&
          Zr &&
          "undefined" !== typeof document &&
          document.body &&
          ((Kr = window),
          (Jr = document),
          (ei = Jr.documentElement),
          (ti = Jr.body),
          (ai = [Kr, Jr, ei, ti]),
          Zr.utils.clamp,
          (si = Zr.core.context || function () {}),
          (ri = "onpointerenter" in ti ? "pointer" : "mouse"),
          (ni = ji.isTouch =
            Kr.matchMedia &&
            Kr.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Kr ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (li = ji.eventTypes =
            (
              "ontouchstart" in ei
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in ei
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ci = 0);
          }, 500),
          Oi(),
          (Gr = 1)),
        Gr
      );
    };
  (Ci.op = Si), (di.cache = 0);
  var ji = (function () {
    function e(e) {
      this.init(e);
    }
    var t, n, r;
    return (
      (e.prototype.init = function (e) {
        Gr || zi(Zr) || console.warn("Please gsap.registerPlugin(Observer)"),
          ii || Oi();
        var t = e.tolerance,
          n = e.dragMinimum,
          r = e.type,
          i = e.target,
          a = e.lineHeight,
          o = e.debounce,
          l = e.preventDefault,
          s = e.onStop,
          u = e.onStopDelay,
          c = e.ignore,
          f = e.wheelSpeed,
          d = e.event,
          p = e.onDragStart,
          h = e.onDragEnd,
          m = e.onDrag,
          g = e.onPress,
          v = e.onRelease,
          y = e.onRight,
          b = e.onLeft,
          _ = e.onUp,
          w = e.onDown,
          x = e.onChangeX,
          k = e.onChangeY,
          C = e.onChange,
          S = e.onToggleX,
          T = e.onToggleY,
          E = e.onHover,
          P = e.onHoverEnd,
          N = e.onMove,
          M = e.ignoreCheck,
          O = e.isNormalizer,
          z = e.onGestureStart,
          j = e.onGestureEnd,
          R = e.onWheel,
          L = e.onEnable,
          D = e.onDisable,
          A = e.onClick,
          F = e.scrollSpeed,
          I = e.capture,
          B = e.allowClicks,
          U = e.lockAxis,
          H = e.onLockAxis;
        (this.target = i = Ti(i) || ei),
          (this.vars = e),
          c && (c = Zr.utils.toArray(c)),
          (t = t || 1e-9),
          (n = n || 0),
          (f = f || 1),
          (F = F || 1),
          (r = r || "wheel,touch,pointer"),
          (o = !1 !== o),
          a || (a = parseFloat(Kr.getComputedStyle(ti).lineHeight) || 22);
        var V,
          W,
          Y,
          $,
          q,
          X,
          Q,
          Z = this,
          G = 0,
          K = 0,
          J = e.passive || !l,
          ee = Ei(i, Ci),
          te = Ei(i, Si),
          ne = ee(),
          re = te(),
          ie =
            ~r.indexOf("touch") &&
            !~r.indexOf("pointer") &&
            "pointerdown" === li[0],
          ae = vi(i),
          oe = i.ownerDocument || Jr,
          le = [0, 0, 0],
          se = [0, 0, 0],
          ue = 0,
          ce = function () {
            return (ue = hi());
          },
          fe = function (e, t) {
            return (
              ((Z.event = e) && c && ~c.indexOf(e.target)) ||
              (t && ie && "touch" !== e.pointerType) ||
              (M && M(e, t))
            );
          },
          de = function () {
            var e = (Z.deltaX = Mi(le)),
              n = (Z.deltaY = Mi(se)),
              r = Math.abs(e) >= t,
              i = Math.abs(n) >= t;
            C && (r || i) && C(Z, e, n, le, se),
              r &&
                (y && Z.deltaX > 0 && y(Z),
                b && Z.deltaX < 0 && b(Z),
                x && x(Z),
                S && Z.deltaX < 0 !== G < 0 && S(Z),
                (G = Z.deltaX),
                (le[0] = le[1] = le[2] = 0)),
              i &&
                (w && Z.deltaY > 0 && w(Z),
                _ && Z.deltaY < 0 && _(Z),
                k && k(Z),
                T && Z.deltaY < 0 !== K < 0 && T(Z),
                (K = Z.deltaY),
                (se[0] = se[1] = se[2] = 0)),
              ($ || Y) && (N && N(Z), Y && (m(Z), (Y = !1)), ($ = !1)),
              X && !(X = !1) && H && H(Z),
              q && (R(Z), (q = !1)),
              (V = 0);
          },
          pe = function (e, t, n) {
            (le[n] += e),
              (se[n] += t),
              Z._vx.update(e),
              Z._vy.update(t),
              o ? V || (V = requestAnimationFrame(de)) : de();
          },
          he = function (e, t) {
            U &&
              !Q &&
              ((Z.axis = Q = Math.abs(e) > Math.abs(t) ? "x" : "y"), (X = !0)),
              "y" !== Q && ((le[2] += e), Z._vx.update(e, !0)),
              "x" !== Q && ((se[2] += t), Z._vy.update(t, !0)),
              o ? V || (V = requestAnimationFrame(de)) : de();
          },
          me = function (e) {
            if (!fe(e, 1)) {
              var t = (e = Ni(e, l)).clientX,
                r = e.clientY,
                i = t - Z.x,
                a = r - Z.y,
                o = Z.isDragging;
              (Z.x = t),
                (Z.y = r),
                (o ||
                  Math.abs(Z.startX - t) >= n ||
                  Math.abs(Z.startY - r) >= n) &&
                  (m && (Y = !0),
                  o || (Z.isDragging = !0),
                  he(i, a),
                  o || (p && p(Z)));
            }
          },
          ge = (Z.onPress = function (e) {
            fe(e, 1) ||
              (e && e.button) ||
              ((Z.axis = Q = null),
              W.pause(),
              (Z.isPressed = !0),
              (e = Ni(e)),
              (G = K = 0),
              (Z.startX = Z.x = e.clientX),
              (Z.startY = Z.y = e.clientY),
              Z._vx.reset(),
              Z._vy.reset(),
              yi(O ? i : oe, li[1], me, J, !0),
              (Z.deltaX = Z.deltaY = 0),
              g && g(Z));
          }),
          ve = (Z.onRelease = function (e) {
            if (!fe(e, 1)) {
              bi(O ? i : oe, li[1], me, !0);
              var t = !isNaN(Z.y - Z.startY),
                n = Z.isDragging,
                r =
                  n &&
                  (Math.abs(Z.x - Z.startX) > 3 ||
                    Math.abs(Z.y - Z.startY) > 3),
                a = Ni(e);
              !r &&
                t &&
                (Z._vx.reset(),
                Z._vy.reset(),
                l &&
                  B &&
                  Zr.delayedCall(0.08, function () {
                    if (hi() - ue > 300 && !e.defaultPrevented)
                      if (e.target.click) e.target.click();
                      else if (oe.createEvent) {
                        var t = oe.createEvent("MouseEvents");
                        t.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Kr,
                          1,
                          a.screenX,
                          a.screenY,
                          a.clientX,
                          a.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          e.target.dispatchEvent(t);
                      }
                  })),
                (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                s && n && !O && W.restart(!0),
                h && n && h(Z),
                v && v(Z, r);
            }
          }),
          ye = function (e) {
            return (
              e.touches &&
              e.touches.length > 1 &&
              (Z.isGesturing = !0) &&
              z(e, Z.isDragging)
            );
          },
          be = function () {
            return (Z.isGesturing = !1) || j(Z);
          },
          _e = function (e) {
            if (!fe(e)) {
              var t = ee(),
                n = te();
              pe((t - ne) * F, (n - re) * F, 1),
                (ne = t),
                (re = n),
                s && W.restart(!0);
            }
          },
          we = function (e) {
            if (!fe(e)) {
              (e = Ni(e, l)), R && (q = !0);
              var t =
                (1 === e.deltaMode
                  ? a
                  : 2 === e.deltaMode
                  ? Kr.innerHeight
                  : 1) * f;
              pe(e.deltaX * t, e.deltaY * t, 0), s && !O && W.restart(!0);
            }
          },
          xe = function (e) {
            if (!fe(e)) {
              var t = e.clientX,
                n = e.clientY,
                r = t - Z.x,
                i = n - Z.y;
              (Z.x = t),
                (Z.y = n),
                ($ = !0),
                s && W.restart(!0),
                (r || i) && he(r, i);
            }
          },
          ke = function (e) {
            (Z.event = e), E(Z);
          },
          Ce = function (e) {
            (Z.event = e), P(Z);
          },
          Se = function (e) {
            return fe(e) || (Ni(e, l) && A(Z));
          };
        (W = Z._dc =
          Zr.delayedCall(u || 0.25, function () {
            Z._vx.reset(), Z._vy.reset(), W.pause(), s && s(Z);
          }).pause()),
          (Z.deltaX = Z.deltaY = 0),
          (Z._vx = Pi(0, 50, !0)),
          (Z._vy = Pi(0, 50, !0)),
          (Z.scrollX = ee),
          (Z.scrollY = te),
          (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
          si(this),
          (Z.enable = function (e) {
            return (
              Z.isEnabled ||
                (yi(ae ? oe : i, "scroll", xi),
                r.indexOf("scroll") >= 0 && yi(ae ? oe : i, "scroll", _e, J, I),
                r.indexOf("wheel") >= 0 && yi(i, "wheel", we, J, I),
                ((r.indexOf("touch") >= 0 && ni) ||
                  r.indexOf("pointer") >= 0) &&
                  (yi(i, li[0], ge, J, I),
                  yi(oe, li[2], ve),
                  yi(oe, li[3], ve),
                  B && yi(i, "click", ce, !0, !0),
                  A && yi(i, "click", Se),
                  z && yi(oe, "gesturestart", ye),
                  j && yi(oe, "gestureend", be),
                  E && yi(i, ri + "enter", ke),
                  P && yi(i, ri + "leave", Ce),
                  N && yi(i, ri + "move", xe)),
                (Z.isEnabled = !0),
                e && e.type && ge(e),
                L && L(Z)),
              Z
            );
          }),
          (Z.disable = function () {
            Z.isEnabled &&
              (fi.filter(function (e) {
                return e !== Z && vi(e.target);
              }).length || bi(ae ? oe : i, "scroll", xi),
              Z.isPressed &&
                (Z._vx.reset(), Z._vy.reset(), bi(O ? i : oe, li[1], me, !0)),
              bi(ae ? oe : i, "scroll", _e, I),
              bi(i, "wheel", we, I),
              bi(i, li[0], ge, I),
              bi(oe, li[2], ve),
              bi(oe, li[3], ve),
              bi(i, "click", ce, !0),
              bi(i, "click", Se),
              bi(oe, "gesturestart", ye),
              bi(oe, "gestureend", be),
              bi(i, ri + "enter", ke),
              bi(i, ri + "leave", Ce),
              bi(i, ri + "move", xe),
              (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
              D && D(Z));
          }),
          (Z.kill = Z.revert =
            function () {
              Z.disable();
              var e = fi.indexOf(Z);
              e >= 0 && fi.splice(e, 1), oi === Z && (oi = 0);
            }),
          fi.push(Z),
          O && vi(i) && (oi = Z),
          Z.enable(d);
      }),
      (t = e),
      (n = [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]) && Qr(t.prototype, n),
      r && Qr(t, r),
      e
    );
  })();
  (ji.version = "3.12.5"),
    (ji.create = function (e) {
      return new ji(e);
    }),
    (ji.register = zi),
    (ji.getAll = function () {
      return fi.slice();
    }),
    (ji.getById = function (e) {
      return fi.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    ui() && Zr.registerPlugin(ji);
  var Ri,
    Li,
    Di,
    Ai,
    Fi,
    Ii,
    Bi,
    Ui,
    Hi,
    Vi,
    Wi,
    Yi,
    $i,
    qi,
    Xi,
    Qi,
    Zi,
    Gi,
    Ki,
    Ji,
    ea,
    ta,
    na,
    ra,
    ia,
    aa,
    oa,
    la,
    sa,
    ua,
    ca,
    fa,
    da,
    pa,
    ha,
    ma,
    ga,
    va,
    ya = 1,
    ba = Date.now,
    _a = ba(),
    wa = 0,
    xa = 0,
    ka = function (e, t, n) {
      var r = Aa(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
      return (n["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Ca = function (e, t) {
      return !t || (Aa(e) && "clamp(" === e.substr(0, 6))
        ? e
        : "clamp(" + e + ")";
    },
    Sa = function e() {
      return xa && requestAnimationFrame(e);
    },
    Ta = function () {
      return (qi = 1);
    },
    Ea = function () {
      return (qi = 0);
    },
    Pa = function (e) {
      return e;
    },
    Na = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    Ma = function () {
      return "undefined" !== typeof window;
    },
    Oa = function () {
      return Ri || (Ma() && (Ri = window.gsap) && Ri.registerPlugin && Ri);
    },
    za = function (e) {
      return !!~Bi.indexOf(e);
    },
    ja = function (e) {
      return (
        ("Height" === e ? ca : Di["inner" + e]) ||
        Fi["client" + e] ||
        Ii["client" + e]
      );
    },
    Ra = function (e) {
      return (
        gi(e, "getBoundingClientRect") ||
        (za(e)
          ? function () {
              return (Xo.width = Di.innerWidth), (Xo.height = ca), Xo;
            }
          : function () {
              return oo(e);
            })
      );
    },
    La = function (e, t) {
      var n = t.s,
        r = t.d2,
        i = t.d,
        a = t.a;
      return Math.max(
        0,
        (n = "scroll" + r) && (a = gi(e, n))
          ? a() - Ra(e)()[i]
          : za(e)
          ? (Fi[n] || Ii[n]) - ja(r)
          : e[n] - e["offset" + r]
      );
    },
    Da = function (e, t) {
      for (var n = 0; n < Ki.length; n += 3)
        (!t || ~t.indexOf(Ki[n + 1])) && e(Ki[n], Ki[n + 1], Ki[n + 2]);
    },
    Aa = function (e) {
      return "string" === typeof e;
    },
    Fa = function (e) {
      return "function" === typeof e;
    },
    Ia = function (e) {
      return "number" === typeof e;
    },
    Ba = function (e) {
      return "object" === typeof e;
    },
    Ua = function (e, t, n) {
      return e && e.progress(t ? 0 : 1) && n && e.pause();
    },
    Ha = function (e, t) {
      if (e.enabled) {
        var n = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        n && n.totalTime && (e.callbackAnimation = n);
      }
    },
    Va = Math.abs,
    Wa = "left",
    Ya = "right",
    $a = "bottom",
    qa = "width",
    Xa = "height",
    Qa = "Right",
    Za = "Left",
    Ga = "Top",
    Ka = "Bottom",
    Ja = "padding",
    eo = "margin",
    to = "Width",
    no = "Height",
    ro = "px",
    io = function (e) {
      return Di.getComputedStyle(e);
    },
    ao = function (e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e;
    },
    oo = function (e, t) {
      var n =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== io(e)[Xi] &&
          Ri.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = e.getBoundingClientRect();
      return n && n.progress(0).kill(), r;
    },
    lo = function (e, t) {
      var n = t.d2;
      return e["offset" + n] || e["client" + n] || 0;
    },
    so = function (e) {
      var t,
        n = [],
        r = e.labels,
        i = e.duration();
      for (t in r) n.push(r[t] / i);
      return n;
    },
    uo = function (e) {
      var t = Ri.utils.snap(e),
        n =
          Array.isArray(e) &&
          e.slice(0).sort(function (e, t) {
            return e - t;
          });
      return n
        ? function (e, r, i) {
            var a;
            if ((void 0 === i && (i = 0.001), !r)) return t(e);
            if (r > 0) {
              for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
              return n[a - 1];
            }
            for (a = n.length, e += i; a--; ) if (n[a] <= e) return n[a];
            return n[0];
          }
        : function (n, r, i) {
            void 0 === i && (i = 0.001);
            var a = t(n);
            return !r || Math.abs(a - n) < i || a - n < 0 === r < 0
              ? a
              : t(r < 0 ? n - e : n + e);
          };
    },
    co = function (e, t, n, r) {
      return n.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    fo = function (e, t, n, r, i) {
      return e.addEventListener(t, n, { passive: !r, capture: !!i });
    },
    po = function (e, t, n, r) {
      return e.removeEventListener(t, n, !!r);
    },
    ho = function (e, t, n) {
      (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n));
    },
    mo = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    go = { toggleActions: "play", anticipatePin: 0 },
    vo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    yo = function (e, t) {
      if (Aa(e)) {
        var n = e.indexOf("="),
          r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
        ~n && (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
          (e =
            r +
            (e in vo
              ? vo[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    bo = function (e, t, n, r, i, a, o, l) {
      var s = i.startColor,
        u = i.endColor,
        c = i.fontSize,
        f = i.indent,
        d = i.fontWeight,
        p = Ai.createElement("div"),
        h = za(n) || "fixed" === gi(n, "pinType"),
        m = -1 !== e.indexOf("scroller"),
        g = h ? Ii : n,
        v = -1 !== e.indexOf("start"),
        y = v ? s : u,
        b =
          "border-color:" +
          y +
          ";font-size:" +
          c +
          ";color:" +
          y +
          ";font-weight:" +
          d +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (b += "position:" + ((m || l) && h ? "fixed;" : "absolute;")),
        (m || l || !h) &&
          (b += (r === Si ? Ya : $a) + ":" + (a + parseFloat(f)) + "px;"),
        o &&
          (b +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (p._isStart = v),
        p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (p.style.cssText = b),
        (p.innerText = t || 0 === t ? e + "-" + t : e),
        g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
        (p._offset = p["offset" + r.op.d2]),
        _o(p, 0, r, v),
        p
      );
    },
    _o = function (e, t, n, r) {
      var i = { display: "block" },
        a = n[r ? "os2" : "p2"],
        o = n[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (i[n.a + "Percent"] = r ? -100 : 0),
        (i[n.a] = r ? "1px" : 0),
        (i["border" + a + to] = 1),
        (i["border" + o + to] = 0),
        (i[n.p] = t + "px"),
        Ri.set(e, i);
    },
    wo = [],
    xo = {},
    ko = function () {
      return ba() - wa > 34 && (ha || (ha = requestAnimationFrame(Uo)));
    },
    Co = function () {
      (!na || !na.isPressed || na.startX > Ii.clientWidth) &&
        (di.cache++,
        na ? ha || (ha = requestAnimationFrame(Uo)) : Uo(),
        wa || Mo("scrollStart"),
        (wa = ba()));
    },
    So = function () {
      (aa = Di.innerWidth), (ia = Di.innerHeight);
    },
    To = function () {
      di.cache++,
        !$i &&
          !ta &&
          !Ai.fullscreenElement &&
          !Ai.webkitFullscreenElement &&
          (!ra ||
            aa !== Di.innerWidth ||
            Math.abs(Di.innerHeight - ia) > 0.25 * Di.innerHeight) &&
          Ui.restart(!0);
    },
    Eo = {},
    Po = [],
    No = function e() {
      return po(tl, "scrollEnd", e) || Fo(!0);
    },
    Mo = function (e) {
      return (
        (Eo[e] &&
          Eo[e].map(function (e) {
            return e();
          })) ||
        Po
      );
    },
    Oo = [],
    zo = function (e) {
      for (var t = 0; t < Oo.length; t += 5)
        (!e || (Oo[t + 4] && Oo[t + 4].query === e)) &&
          ((Oo[t].style.cssText = Oo[t + 1]),
          Oo[t].getBBox && Oo[t].setAttribute("transform", Oo[t + 2] || ""),
          (Oo[t + 3].uncache = 1));
    },
    jo = function (e, t) {
      var n;
      for (Qi = 0; Qi < wo.length; Qi++)
        !(n = wo[Qi]) ||
          (t && n._ctx !== t) ||
          (e ? n.kill(1) : n.revert(!0, !0));
      (fa = !0), t && zo(t), t || Mo("revert");
    },
    Ro = function (e, t) {
      di.cache++,
        (t || !ma) &&
          di.forEach(function (e) {
            return Fa(e) && e.cacheID++ && (e.rec = 0);
          }),
        Aa(e) && (Di.history.scrollRestoration = sa = e);
    },
    Lo = 0,
    Do = function () {
      Ii.appendChild(ua),
        (ca = (!na && ua.offsetHeight) || Di.innerHeight),
        Ii.removeChild(ua);
    },
    Ao = function (e) {
      return Hi(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    Fo = function (e, t) {
      if (!wa || e || fa) {
        Do(),
          (ma = tl.isRefreshing = !0),
          di.forEach(function (e) {
            return Fa(e) && ++e.cacheID && (e.rec = e());
          });
        var n = Mo("refreshInit");
        Ji && tl.sort(),
          t || jo(),
          di.forEach(function (e) {
            Fa(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          wo.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (fa = !1),
          wo.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
            }
          }),
          (da = 1),
          Ao(!0),
          wo.forEach(function (e) {
            var t = La(e.scroller, e._dir),
              n = "max" === e.vars.end || (e._endClamp && e.end > t),
              r = e._startClamp && e.start >= t;
            (n || r) &&
              e.setPositions(
                r ? t - 1 : e.start,
                n ? Math.max(r ? t : e.start + 1, t) : e.end,
                !0
              );
          }),
          Ao(!1),
          (da = 0),
          n.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          di.forEach(function (e) {
            Fa(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Ro(sa, 1),
          Ui.pause(),
          Lo++,
          (ma = 2),
          Uo(2),
          wo.forEach(function (e) {
            return Fa(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (ma = tl.isRefreshing = !1),
          Mo("refresh");
      } else fo(tl, "scrollEnd", No);
    },
    Io = 0,
    Bo = 1,
    Uo = function (e) {
      if (2 === e || (!ma && !fa)) {
        (tl.isUpdating = !0), va && va.update(0);
        var t = wo.length,
          n = ba(),
          r = n - _a >= 50,
          i = t && wo[0].scroll();
        if (
          ((Bo = Io > i ? -1 : 1),
          ma || (Io = i),
          r &&
            (wa && !qi && n - wa > 200 && ((wa = 0), Mo("scrollEnd")),
            (Wi = _a),
            (_a = n)),
          Bo < 0)
        ) {
          for (Qi = t; Qi-- > 0; ) wo[Qi] && wo[Qi].update(0, r);
          Bo = 1;
        } else for (Qi = 0; Qi < t; Qi++) wo[Qi] && wo[Qi].update(0, r);
        tl.isUpdating = !1;
      }
      ha = 0;
    },
    Ho = [
      Wa,
      "top",
      $a,
      Ya,
      eo + Ka,
      eo + Qa,
      eo + Ga,
      eo + Za,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Vo = Ho.concat([
      qa,
      Xa,
      "boxSizing",
      "max" + to,
      "max" + no,
      "position",
      eo,
      Ja,
      Ja + Ga,
      Ja + Qa,
      Ja + Ka,
      Ja + Za,
    ]),
    Wo = function (e, t, n, r) {
      if (!e._gsap.swappedIn) {
        for (var i, a = Ho.length, o = t.style, l = e.style; a--; )
          o[(i = Ho[a])] = n[i];
        (o.position = "absolute" === n.position ? "absolute" : "relative"),
          "inline" === n.display && (o.display = "inline-block"),
          (l[$a] = l[Ya] = "auto"),
          (o.flexBasis = n.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[qa] = lo(e, Ci) + ro),
          (o[Xa] = lo(e, Si) + ro),
          (o[Ja] = l[eo] = l.top = l[Wa] = "0"),
          $o(r),
          (l[qa] = l["max" + to] = n[qa]),
          (l[Xa] = l["max" + no] = n[Xa]),
          (l[Ja] = n[Ja]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Yo = /([A-Z])/g,
    $o = function (e) {
      if (e) {
        var t,
          n,
          r = e.t.style,
          i = e.length,
          a = 0;
        for ((e.t._gsap || Ri.core.getCache(e.t)).uncache = 1; a < i; a += 2)
          (n = e[a + 1]),
            (t = e[a]),
            n
              ? (r[t] = n)
              : r[t] && r.removeProperty(t.replace(Yo, "-$1").toLowerCase());
      }
    },
    qo = function (e) {
      for (var t = Vo.length, n = e.style, r = [], i = 0; i < t; i++)
        r.push(Vo[i], n[Vo[i]]);
      return (r.t = e), r;
    },
    Xo = { left: 0, top: 0 },
    Qo = function (e, t, n, r, i, a, o, l, s, u, c, f, d, p) {
      Fa(e) && (e = e(l)),
        Aa(e) &&
          "max" === e.substr(0, 3) &&
          (e = f + ("=" === e.charAt(4) ? yo("0" + e.substr(3), n) : 0));
      var h,
        m,
        g,
        v = d ? d.time() : 0;
      if ((d && d.seek(0), isNaN(e) || (e = +e), Ia(e)))
        d &&
          (e = Ri.utils.mapRange(
            d.scrollTrigger.start,
            d.scrollTrigger.end,
            0,
            f,
            e
          )),
          o && _o(o, n, r, !0);
      else {
        Fa(t) && (t = t(l));
        var y,
          b,
          _,
          w,
          x = (e || "0").split(" ");
        (g = Ti(t, l) || Ii),
          ((y = oo(g) || {}) && (y.left || y.top)) ||
            "none" !== io(g).display ||
            ((w = g.style.display),
            (g.style.display = "block"),
            (y = oo(g)),
            w ? (g.style.display = w) : g.style.removeProperty("display")),
          (b = yo(x[0], y[r.d])),
          (_ = yo(x[1] || "0", n)),
          (e = y[r.p] - s[r.p] - u + b + i - _),
          o && _o(o, _, r, n - _ < 20 || (o._isStart && _ > 20)),
          (n -= n - _);
      }
      if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), a)) {
        var k = e + n,
          C = a._isStart;
        (h = "scroll" + r.d2),
          _o(
            a,
            k,
            r,
            (C && k > 20) ||
              (!C && (c ? Math.max(Ii[h], Fi[h]) : a.parentNode[h]) <= k + 1)
          ),
          c &&
            ((s = oo(o)),
            c && (a.style[r.op.p] = s[r.op.p] - r.op.m - a._offset + ro));
      }
      return (
        d &&
          g &&
          ((h = oo(g)),
          d.seek(f),
          (m = oo(g)),
          (d._caScrollDist = h[r.p] - m[r.p]),
          (e = (e / d._caScrollDist) * f)),
        d && d.seek(v),
        d ? e : Math.round(e)
      );
    },
    Zo = /(webkit|moz|length|cssText|inset)/i,
    Go = function (e, t, n, r) {
      if (e.parentNode !== t) {
        var i,
          a,
          o = e.style;
        if (t === Ii) {
          for (i in ((e._stOrig = o.cssText), (a = io(e))))
            +i ||
              Zo.test(i) ||
              !a[i] ||
              "string" !== typeof o[i] ||
              "0" === i ||
              (o[i] = a[i]);
          (o.top = n), (o.left = r);
        } else o.cssText = e._stOrig;
        (Ri.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Ko = function (e, t, n) {
      var r = t,
        i = r;
      return function (t) {
        var a = Math.round(e());
        return (
          a !== r &&
            a !== i &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - i) > 3 &&
            ((t = a), n && n()),
          (i = r),
          (r = t),
          t
        );
      };
    },
    Jo = function (e, t, n) {
      var r = {};
      (r[t.p] = "+=" + n), Ri.set(e, r);
    },
    el = function (e, t) {
      var n = Ei(e, t),
        r = "_scroll" + t.p2,
        i = function t(i, a, o, l, s) {
          var u = t.tween,
            c = a.onComplete,
            f = {};
          o = o || n();
          var d = Ko(n, o, function () {
            u.kill(), (t.tween = 0);
          });
          return (
            (s = (l && s) || 0),
            (l = l || i - o),
            u && u.kill(),
            (a[r] = i),
            (a.inherit = !1),
            (a.modifiers = f),
            (f[r] = function () {
              return d(o + l * u.ratio + s * u.ratio * u.ratio);
            }),
            (a.onUpdate = function () {
              di.cache++, t.tween && Uo();
            }),
            (a.onComplete = function () {
              (t.tween = 0), c && c.call(u);
            }),
            (u = t.tween = Ri.to(e, a))
          );
        };
      return (
        (e[r] = n),
        (n.wheelHandler = function () {
          return i.tween && i.tween.kill() && (i.tween = 0);
        }),
        fo(e, "wheel", n.wheelHandler),
        tl.isTouch && fo(e, "touchmove", n.wheelHandler),
        i
      );
    },
    tl = (function () {
      function e(t, n) {
        Li ||
          e.register(Ri) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          la(this),
          this.init(t, n);
      }
      return (
        (e.prototype.init = function (t, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            xa)
          ) {
            var r,
              i,
              a,
              o,
              l,
              s,
              u,
              c,
              f,
              d,
              p,
              h,
              m,
              g,
              v,
              y,
              b,
              _,
              w,
              x,
              k,
              C,
              S,
              T,
              E,
              P,
              N,
              M,
              O,
              z,
              j,
              R,
              L,
              D,
              A,
              F,
              I,
              B,
              U,
              H,
              V = (t = ao(
                Aa(t) || Ia(t) || t.nodeType ? { trigger: t } : t,
                go
              )),
              W = V.onUpdate,
              Y = V.toggleClass,
              $ = V.id,
              q = V.onToggle,
              X = V.onRefresh,
              Q = V.scrub,
              Z = V.trigger,
              G = V.pin,
              K = V.pinSpacing,
              J = V.invalidateOnRefresh,
              ee = V.anticipatePin,
              te = V.onScrubComplete,
              ne = V.onSnapComplete,
              re = V.once,
              ie = V.snap,
              ae = V.pinReparent,
              oe = V.pinSpacer,
              le = V.containerAnimation,
              se = V.fastScrollEnd,
              ue = V.preventOverlaps,
              ce =
                t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                  ? Ci
                  : Si,
              fe = !Q && 0 !== Q,
              de = Ti(t.scroller || Di),
              pe = Ri.core.getCache(de),
              he = za(de),
              me =
                "fixed" ===
                ("pinType" in t
                  ? t.pinType
                  : gi(de, "pinType") || (he && "fixed")),
              ge = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              ve = fe && t.toggleActions.split(" "),
              ye = "markers" in t ? t.markers : go.markers,
              be = he ? 0 : parseFloat(io(de)["border" + ce.p2 + to]) || 0,
              _e = this,
              we =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(_e);
                },
              xe = (function (e, t, n) {
                var r = n.d,
                  i = n.d2,
                  a = n.a;
                return (a = gi(e, "getBoundingClientRect"))
                  ? function () {
                      return a()[r];
                    }
                  : function () {
                      return (t ? ja(i) : e["client" + i]) || 0;
                    };
              })(de, he, ce),
              ke = (function (e, t) {
                return !t || ~pi.indexOf(e)
                  ? Ra(e)
                  : function () {
                      return Xo;
                    };
              })(de, he),
              Ce = 0,
              Se = 0,
              Te = 0,
              Ee = Ei(de, ce);
            if (
              ((_e._startClamp = _e._endClamp = !1),
              (_e._dir = ce),
              (ee *= 45),
              (_e.scroller = de),
              (_e.scroll = le ? le.time.bind(le) : Ee),
              (o = Ee()),
              (_e.vars = t),
              (n = n || t.animation),
              "refreshPriority" in t &&
                ((Ji = 1), -9999 === t.refreshPriority && (va = _e)),
              (pe.tweenScroll = pe.tweenScroll || {
                top: el(de, Si),
                left: el(de, Ci),
              }),
              (_e.tweenTo = r = pe.tweenScroll[ce.p]),
              (_e.scrubDuration = function (e) {
                (L = Ia(e) && e)
                  ? R
                    ? R.duration(e)
                    : (R = Ri.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: L,
                        paused: !0,
                        onComplete: function () {
                          return te && te(_e);
                        },
                      }))
                  : (R && R.progress(1).kill(), (R = 0));
              }),
              n &&
                ((n.vars.lazy = !1),
                (n._initted && !_e.isReverted) ||
                  (!1 !== n.vars.immediateRender &&
                    !1 !== t.immediateRender &&
                    n.duration() &&
                    n.render(0, !0, !0)),
                (_e.animation = n.pause()),
                (n.scrollTrigger = _e),
                _e.scrubDuration(Q),
                (z = 0),
                $ || ($ = n.vars.id)),
              ie &&
                ((Ba(ie) && !ie.push) || (ie = { snapTo: ie }),
                "scrollBehavior" in Ii.style &&
                  Ri.set(he ? [Ii, Fi] : de, { scrollBehavior: "auto" }),
                di.forEach(function (e) {
                  return (
                    Fa(e) &&
                    e.target === (he ? Ai.scrollingElement || Fi : de) &&
                    (e.smooth = !1)
                  );
                }),
                (a = Fa(ie.snapTo)
                  ? ie.snapTo
                  : "labels" === ie.snapTo
                  ? (function (e) {
                      return function (t) {
                        return Ri.utils.snap(so(e), t);
                      };
                    })(n)
                  : "labelsDirectional" === ie.snapTo
                  ? ((H = n),
                    function (e, t) {
                      return uo(so(H))(e, t.direction);
                    })
                  : !1 !== ie.directional
                  ? function (e, t) {
                      return uo(ie.snapTo)(
                        e,
                        ba() - Se < 500 ? 0 : t.direction
                      );
                    }
                  : Ri.utils.snap(ie.snapTo)),
                (D = ie.duration || { min: 0.1, max: 2 }),
                (D = Ba(D) ? Vi(D.min, D.max) : Vi(D, D)),
                (A = Ri.delayedCall(ie.delay || L / 2 || 0.1, function () {
                  var e = Ee(),
                    t = ba() - Se < 500,
                    i = r.tween;
                  if (
                    !(t || Math.abs(_e.getVelocity()) < 10) ||
                    i ||
                    qi ||
                    Ce === e
                  )
                    _e.isActive && Ce !== e && A.restart(!0);
                  else {
                    var o,
                      l,
                      c = (e - s) / g,
                      f = n && !fe ? n.totalProgress() : c,
                      d = t ? 0 : ((f - j) / (ba() - Wi)) * 1e3 || 0,
                      p = Ri.utils.clamp(-c, 1 - c, (Va(d / 2) * d) / 0.185),
                      h = c + (!1 === ie.inertia ? 0 : p),
                      m = ie,
                      v = m.onStart,
                      y = m.onInterrupt,
                      b = m.onComplete;
                    if (
                      ((o = a(h, _e)),
                      Ia(o) || (o = h),
                      (l = Math.round(s + o * g)),
                      e <= u && e >= s && l !== e)
                    ) {
                      if (i && !i._initted && i.data <= Va(l - e)) return;
                      !1 === ie.inertia && (p = o - c),
                        r(
                          l,
                          {
                            duration: D(
                              Va(
                                (0.185 * Math.max(Va(h - f), Va(o - f))) /
                                  d /
                                  0.05 || 0
                              )
                            ),
                            ease: ie.ease || "power3",
                            data: Va(l - e),
                            onInterrupt: function () {
                              return A.restart(!0) && y && y(_e);
                            },
                            onComplete: function () {
                              _e.update(),
                                (Ce = Ee()),
                                n &&
                                  (R
                                    ? R.resetTo(
                                        "totalProgress",
                                        o,
                                        n._tTime / n._tDur
                                      )
                                    : n.progress(o)),
                                (z = j =
                                  n && !fe ? n.totalProgress() : _e.progress),
                                ne && ne(_e),
                                b && b(_e);
                            },
                          },
                          e,
                          p * g,
                          l - e - p * g
                        ),
                        v && v(_e, r.tween);
                    }
                  }
                }).pause())),
              $ && (xo[$] = _e),
              (U =
                (Z = _e.trigger = Ti(Z || (!0 !== G && G))) &&
                Z._gsap &&
                Z._gsap.stRevert) && (U = U(_e)),
              (G = !0 === G ? Z : Ti(G)),
              Aa(Y) && (Y = { targets: Z, className: Y }),
              G &&
                (!1 === K ||
                  K === eo ||
                  (K =
                    !(
                      !K &&
                      G.parentNode &&
                      G.parentNode.style &&
                      "flex" === io(G.parentNode).display
                    ) && Ja),
                (_e.pin = G),
                (i = Ri.core.getCache(G)).spacer
                  ? (v = i.pinState)
                  : (oe &&
                      ((oe = Ti(oe)) &&
                        !oe.nodeType &&
                        (oe = oe.current || oe.nativeElement),
                      (i.spacerIsNative = !!oe),
                      oe && (i.spacerState = qo(oe))),
                    (i.spacer = _ = oe || Ai.createElement("div")),
                    _.classList.add("pin-spacer"),
                    $ && _.classList.add("pin-spacer-" + $),
                    (i.pinState = v = qo(G))),
                !1 !== t.force3D && Ri.set(G, { force3D: !0 }),
                (_e.spacer = _ = i.spacer),
                (O = io(G)),
                (T = O[K + ce.os2]),
                (x = Ri.getProperty(G)),
                (k = Ri.quickSetter(G, ce.a, ro)),
                Wo(G, _, O),
                (b = qo(G))),
              ye)
            ) {
              (h = Ba(ye) ? ao(ye, mo) : mo),
                (d = bo("scroller-start", $, de, ce, h, 0)),
                (p = bo("scroller-end", $, de, ce, h, 0, d)),
                (w = d["offset" + ce.op.d2]);
              var Pe = Ti(gi(de, "content") || de);
              (c = this.markerStart = bo("start", $, Pe, ce, h, w, 0, le)),
                (f = this.markerEnd = bo("end", $, Pe, ce, h, w, 0, le)),
                le && (B = Ri.quickSetter([c, f], ce.a, ro)),
                me ||
                  (pi.length && !0 === gi(de, "fixedMarkers")) ||
                  (!(function (e) {
                    var t = io(e).position;
                    e.style.position =
                      "absolute" === t || "fixed" === t ? t : "relative";
                  })(he ? Ii : de),
                  Ri.set([d, p], { force3D: !0 }),
                  (P = Ri.quickSetter(d, ce.a, ro)),
                  (M = Ri.quickSetter(p, ce.a, ro)));
            }
            if (le) {
              var Ne = le.vars.onUpdate,
                Me = le.vars.onUpdateParams;
              le.eventCallback("onUpdate", function () {
                _e.update(0, 0, 1), Ne && Ne.apply(le, Me || []);
              });
            }
            if (
              ((_e.previous = function () {
                return wo[wo.indexOf(_e) - 1];
              }),
              (_e.next = function () {
                return wo[wo.indexOf(_e) + 1];
              }),
              (_e.revert = function (e, t) {
                if (!t) return _e.kill(!0);
                var r = !1 !== e || !_e.enabled,
                  i = $i;
                r !== _e.isReverted &&
                  (r &&
                    ((F = Math.max(Ee(), _e.scroll.rec || 0)),
                    (Te = _e.progress),
                    (I = n && n.progress())),
                  c &&
                    [c, f, d, p].forEach(function (e) {
                      return (e.style.display = r ? "none" : "block");
                    }),
                  r && (($i = _e), _e.update(r)),
                  !G ||
                    (ae && _e.isActive) ||
                    (r
                      ? (function (e, t, n) {
                          $o(n);
                          var r = e._gsap;
                          if (r.spacerIsNative) $o(r.spacerState);
                          else if (e._gsap.swappedIn) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t));
                          }
                          e._gsap.swappedIn = !1;
                        })(G, _, v)
                      : Wo(G, _, io(G), E)),
                  r || _e.update(r),
                  ($i = i),
                  (_e.isReverted = r));
              }),
              (_e.refresh = function (i, a, h, w) {
                if ((!$i && _e.enabled) || a)
                  if (G && i && wa) fo(e, "scrollEnd", No);
                  else {
                    !ma && we && we(_e),
                      ($i = _e),
                      r.tween && !h && (r.tween.kill(), (r.tween = 0)),
                      R && R.pause(),
                      J && n && n.revert({ kill: !1 }).invalidate(),
                      _e.isReverted || _e.revert(!0, !0),
                      (_e._subPinOffset = !1);
                    var k,
                      T,
                      P,
                      M,
                      O,
                      z,
                      j,
                      L,
                      D,
                      B,
                      U,
                      H,
                      V,
                      W = xe(),
                      Y = ke(),
                      $ = le ? le.duration() : La(de, ce),
                      q = g <= 0.01,
                      Q = 0,
                      ee = w || 0,
                      te = Ba(h) ? h.end : t.end,
                      ne = t.endTrigger || Z,
                      re = Ba(h)
                        ? h.start
                        : t.start ||
                          (0 !== t.start && Z ? (G ? "0 0" : "0 100%") : 0),
                      ie = (_e.pinnedContainer =
                        t.pinnedContainer && Ti(t.pinnedContainer, _e)),
                      oe = (Z && Math.max(0, wo.indexOf(_e))) || 0,
                      se = oe;
                    for (
                      ye &&
                      Ba(h) &&
                      ((H = Ri.getProperty(d, ce.p)),
                      (V = Ri.getProperty(p, ce.p)));
                      se--;

                    )
                      (z = wo[se]).end || z.refresh(0, 1) || ($i = _e),
                        !(j = z.pin) ||
                          (j !== Z && j !== G && j !== ie) ||
                          z.isReverted ||
                          (B || (B = []), B.unshift(z), z.revert(!0, !0)),
                        z !== wo[se] && (oe--, se--);
                    for (
                      Fa(re) && (re = re(_e)),
                        re = ka(re, "start", _e),
                        s =
                          Qo(
                            re,
                            Z,
                            W,
                            ce,
                            Ee(),
                            c,
                            d,
                            _e,
                            Y,
                            be,
                            me,
                            $,
                            le,
                            _e._startClamp && "_startClamp"
                          ) || (G ? -0.001 : 0),
                        Fa(te) && (te = te(_e)),
                        Aa(te) &&
                          !te.indexOf("+=") &&
                          (~te.indexOf(" ")
                            ? (te = (Aa(re) ? re.split(" ")[0] : "") + te)
                            : ((Q = yo(te.substr(2), W)),
                              (te = Aa(re)
                                ? re
                                : (le
                                    ? Ri.utils.mapRange(
                                        0,
                                        le.duration(),
                                        le.scrollTrigger.start,
                                        le.scrollTrigger.end,
                                        s
                                      )
                                    : s) + Q),
                              (ne = Z))),
                        te = ka(te, "end", _e),
                        u =
                          Math.max(
                            s,
                            Qo(
                              te || (ne ? "100% 0" : $),
                              ne,
                              W,
                              ce,
                              Ee() + Q,
                              f,
                              p,
                              _e,
                              Y,
                              be,
                              me,
                              $,
                              le,
                              _e._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        Q = 0,
                        se = oe;
                      se--;

                    )
                      (j = (z = wo[se]).pin) &&
                        z.start - z._pinPush <= s &&
                        !le &&
                        z.end > 0 &&
                        ((k =
                          z.end -
                          (_e._startClamp ? Math.max(0, z.start) : z.start)),
                        ((j === Z && z.start - z._pinPush < s) || j === ie) &&
                          isNaN(re) &&
                          (Q += k * (1 - z.progress)),
                        j === G && (ee += k));
                    if (
                      ((s += Q),
                      (u += Q),
                      _e._startClamp && (_e._startClamp += Q),
                      _e._endClamp &&
                        !ma &&
                        ((_e._endClamp = u || -0.001),
                        (u = Math.min(u, La(de, ce)))),
                      (g = u - s || ((s -= 0.01) && 0.001)),
                      q &&
                        (Te = Ri.utils.clamp(
                          0,
                          1,
                          Ri.utils.normalize(s, u, F)
                        )),
                      (_e._pinPush = ee),
                      c &&
                        Q &&
                        (((k = {})[ce.a] = "+=" + Q),
                        ie && (k[ce.p] = "-=" + Ee()),
                        Ri.set([c, f], k)),
                      !G || (da && _e.end >= La(de, ce)))
                    ) {
                      if (Z && Ee() && !le)
                        for (T = Z.parentNode; T && T !== Ii; )
                          T._pinOffset &&
                            ((s -= T._pinOffset), (u -= T._pinOffset)),
                            (T = T.parentNode);
                    } else
                      (k = io(G)),
                        (M = ce === Si),
                        (P = Ee()),
                        (C = parseFloat(x(ce.a)) + ee),
                        !$ &&
                          u > 1 &&
                          ((U = {
                            style: (U = (he ? Ai.scrollingElement || Fi : de)
                              .style),
                            value: U["overflow" + ce.a.toUpperCase()],
                          }),
                          he &&
                            "scroll" !==
                              io(Ii)["overflow" + ce.a.toUpperCase()] &&
                            (U.style["overflow" + ce.a.toUpperCase()] =
                              "scroll")),
                        Wo(G, _, k),
                        (b = qo(G)),
                        (T = oo(G, !0)),
                        (L = me && Ei(de, M ? Ci : Si)()),
                        K
                          ? (((E = [K + ce.os2, g + ee + ro]).t = _),
                            (se = K === Ja ? lo(G, ce) + g + ee : 0) &&
                              (E.push(ce.d, se + ro),
                              "auto" !== _.style.flexBasis &&
                                (_.style.flexBasis = se + ro)),
                            $o(E),
                            ie &&
                              wo.forEach(function (e) {
                                e.pin === ie &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            me && Ee(F))
                          : (se = lo(G, ce)) &&
                            "auto" !== _.style.flexBasis &&
                            (_.style.flexBasis = se + ro),
                        me &&
                          (((O = {
                            top: T.top + (M ? P - s : L) + ro,
                            left: T.left + (M ? L : P - s) + ro,
                            boxSizing: "border-box",
                            position: "fixed",
                          })[qa] = O["max" + to] =
                            Math.ceil(T.width) + ro),
                          (O[Xa] = O["max" + no] = Math.ceil(T.height) + ro),
                          (O[eo] =
                            O[eo + Ga] =
                            O[eo + Qa] =
                            O[eo + Ka] =
                            O[eo + Za] =
                              "0"),
                          (O[Ja] = k[Ja]),
                          (O[Ja + Ga] = k[Ja + Ga]),
                          (O[Ja + Qa] = k[Ja + Qa]),
                          (O[Ja + Ka] = k[Ja + Ka]),
                          (O[Ja + Za] = k[Ja + Za]),
                          (y = (function (e, t, n) {
                            for (
                              var r, i = [], a = e.length, o = n ? 8 : 0;
                              o < a;
                              o += 2
                            )
                              (r = e[o]), i.push(r, r in t ? t[r] : e[o + 1]);
                            return (i.t = e.t), i;
                          })(v, O, ae)),
                          ma && Ee(0)),
                        n
                          ? ((D = n._initted),
                            ea(1),
                            n.render(n.duration(), !0, !0),
                            (S = x(ce.a) - C + g + ee),
                            (N = Math.abs(g - S) > 1),
                            me && N && y.splice(y.length - 2, 2),
                            n.render(0, !0, !0),
                            D || n.invalidate(!0),
                            n.parent || n.totalTime(n.totalTime()),
                            ea(0))
                          : (S = g),
                        U &&
                          (U.value
                            ? (U.style["overflow" + ce.a.toUpperCase()] =
                                U.value)
                            : U.style.removeProperty("overflow-" + ce.a));
                    B &&
                      B.forEach(function (e) {
                        return e.revert(!1, !0);
                      }),
                      (_e.start = s),
                      (_e.end = u),
                      (o = l = ma ? F : Ee()),
                      le || ma || (o < F && Ee(F), (_e.scroll.rec = 0)),
                      _e.revert(!1, !0),
                      (Se = ba()),
                      A && ((Ce = -1), A.restart(!0)),
                      ($i = 0),
                      n &&
                        fe &&
                        (n._initted || I) &&
                        n.progress() !== I &&
                        n.progress(I || 0, !0).render(n.time(), !0, !0),
                      (q || Te !== _e.progress || le || J) &&
                        (n &&
                          !fe &&
                          n.totalProgress(
                            le && s < -0.001 && !Te
                              ? Ri.utils.normalize(s, u, 0)
                              : Te,
                            !0
                          ),
                        (_e.progress = q || (o - s) / g === Te ? 0 : Te)),
                      G && K && (_._pinOffset = Math.round(_e.progress * S)),
                      R && R.invalidate(),
                      isNaN(H) ||
                        ((H -= Ri.getProperty(d, ce.p)),
                        (V -= Ri.getProperty(p, ce.p)),
                        Jo(d, ce, H),
                        Jo(c, ce, H - (w || 0)),
                        Jo(p, ce, V),
                        Jo(f, ce, V - (w || 0))),
                      q && !ma && _e.update(),
                      !X || ma || m || ((m = !0), X(_e), (m = !1));
                  }
              }),
              (_e.getVelocity = function () {
                return ((Ee() - l) / (ba() - Wi)) * 1e3 || 0;
              }),
              (_e.endAnimation = function () {
                Ua(_e.callbackAnimation),
                  n &&
                    (R
                      ? R.progress(1)
                      : n.paused()
                      ? fe || Ua(n, _e.direction < 0, 1)
                      : Ua(n, n.reversed()));
              }),
              (_e.labelToScroll = function (e) {
                return (
                  (n &&
                    n.labels &&
                    (s || _e.refresh() || s) +
                      (n.labels[e] / n.duration()) * g) ||
                  0
                );
              }),
              (_e.getTrailing = function (e) {
                var t = wo.indexOf(_e),
                  n =
                    _e.direction > 0
                      ? wo.slice(0, t).reverse()
                      : wo.slice(t + 1);
                return (
                  Aa(e)
                    ? n.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : n
                ).filter(function (e) {
                  return _e.direction > 0 ? e.end <= s : e.start >= u;
                });
              }),
              (_e.update = function (e, t, i) {
                if (!le || i || e) {
                  var a,
                    c,
                    f,
                    p,
                    h,
                    m,
                    v,
                    w = !0 === ma ? F : _e.scroll(),
                    x = e ? 0 : (w - s) / g,
                    E = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                    O = _e.progress;
                  if (
                    (t &&
                      ((l = o),
                      (o = le ? Ee() : w),
                      ie && ((j = z), (z = n && !fe ? n.totalProgress() : E))),
                    ee &&
                      G &&
                      !$i &&
                      !ya &&
                      wa &&
                      (!E && s < w + ((w - l) / (ba() - Wi)) * ee
                        ? (E = 1e-4)
                        : 1 === E &&
                          u > w + ((w - l) / (ba() - Wi)) * ee &&
                          (E = 0.9999)),
                    E !== O && _e.enabled)
                  ) {
                    if (
                      ((p =
                        (h =
                          (a = _e.isActive = !!E && E < 1) !==
                          (!!O && O < 1)) || !!E !== !!O),
                      (_e.direction = E > O ? 1 : -1),
                      (_e.progress = E),
                      p &&
                        !$i &&
                        ((c = E && !O ? 0 : 1 === E ? 1 : 1 === O ? 2 : 3),
                        fe &&
                          ((f =
                            (!h && "none" !== ve[c + 1] && ve[c + 1]) || ve[c]),
                          (v =
                            n &&
                            ("complete" === f || "reset" === f || f in n)))),
                      ue &&
                        (h || v) &&
                        (v || Q || !n) &&
                        (Fa(ue)
                          ? ue(_e)
                          : _e.getTrailing(ue).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      fe ||
                        (!R || $i || ya
                          ? n && n.totalProgress(E, !(!$i || (!Se && !e)))
                          : (R._dp._time - R._start !== R._time &&
                              R.render(R._dp._time - R._start),
                            R.resetTo
                              ? R.resetTo(
                                  "totalProgress",
                                  E,
                                  n._tTime / n._tDur
                                )
                              : ((R.vars.totalProgress = E),
                                R.invalidate().restart()))),
                      G)
                    )
                      if ((e && K && (_.style[K + ce.os2] = T), me)) {
                        if (p) {
                          if (
                            ((m =
                              !e && E > O && u + 1 > w && w + 1 >= La(de, ce)),
                            ae)
                          )
                            if (e || (!a && !m)) Go(G, _);
                            else {
                              var L = oo(G, !0),
                                D = w - s;
                              Go(
                                G,
                                Ii,
                                L.top + (ce === Si ? D : 0) + ro,
                                L.left + (ce === Si ? 0 : D) + ro
                              );
                            }
                          $o(a || m ? y : b),
                            (N && E < 1 && a) || k(C + (1 !== E || m ? 0 : S));
                        }
                      } else k(Na(C + S * E));
                    ie && !r.tween && !$i && !ya && A.restart(!0),
                      Y &&
                        (h || (re && E && (E < 1 || !pa))) &&
                        Hi(Y.targets).forEach(function (e) {
                          return e.classList[a || re ? "add" : "remove"](
                            Y.className
                          );
                        }),
                      W && !fe && !e && W(_e),
                      p && !$i
                        ? (fe &&
                            (v &&
                              ("complete" === f
                                ? n.pause().totalProgress(1)
                                : "reset" === f
                                ? n.restart(!0).pause()
                                : "restart" === f
                                ? n.restart(!0)
                                : n[f]()),
                            W && W(_e)),
                          (!h && pa) ||
                            (q && h && Ha(_e, q),
                            ge[c] && Ha(_e, ge[c]),
                            re && (1 === E ? _e.kill(!1, 1) : (ge[c] = 0)),
                            h || (ge[(c = 1 === E ? 1 : 3)] && Ha(_e, ge[c]))),
                          se &&
                            !a &&
                            Math.abs(_e.getVelocity()) > (Ia(se) ? se : 2500) &&
                            (Ua(_e.callbackAnimation),
                            R
                              ? R.progress(1)
                              : Ua(n, "reverse" === f ? 1 : !E, 1)))
                        : fe && W && !$i && W(_e);
                  }
                  if (M) {
                    var I = le
                      ? (w / le.duration()) * (le._caScrollDist || 0)
                      : w;
                    P(I + (d._isFlipped ? 1 : 0)), M(I);
                  }
                  B && B((-w / le.duration()) * (le._caScrollDist || 0));
                }
              }),
              (_e.enable = function (t, n) {
                _e.enabled ||
                  ((_e.enabled = !0),
                  fo(de, "resize", To),
                  he || fo(de, "scroll", Co),
                  we && fo(e, "refreshInit", we),
                  !1 !== t && ((_e.progress = Te = 0), (o = l = Ce = Ee())),
                  !1 !== n && _e.refresh());
              }),
              (_e.getTween = function (e) {
                return e && r ? r.tween : R;
              }),
              (_e.setPositions = function (e, t, n, r) {
                if (le) {
                  var i = le.scrollTrigger,
                    a = le.duration(),
                    o = i.end - i.start;
                  (e = i.start + (o * e) / a), (t = i.start + (o * t) / a);
                }
                _e.refresh(
                  !1,
                  !1,
                  {
                    start: Ca(e, n && !!_e._startClamp),
                    end: Ca(t, n && !!_e._endClamp),
                  },
                  r
                ),
                  _e.update();
              }),
              (_e.adjustPinSpacing = function (e) {
                if (E && e) {
                  var t = E.indexOf(ce.d) + 1;
                  (E[t] = parseFloat(E[t]) + e + ro),
                    (E[1] = parseFloat(E[1]) + e + ro),
                    $o(E);
                }
              }),
              (_e.disable = function (t, n) {
                if (
                  _e.enabled &&
                  (!1 !== t && _e.revert(!0, !0),
                  (_e.enabled = _e.isActive = !1),
                  n || (R && R.pause()),
                  (F = 0),
                  i && (i.uncache = 1),
                  we && po(e, "refreshInit", we),
                  A && (A.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                  !he)
                ) {
                  for (var a = wo.length; a--; )
                    if (wo[a].scroller === de && wo[a] !== _e) return;
                  po(de, "resize", To), he || po(de, "scroll", Co);
                }
              }),
              (_e.kill = function (e, r) {
                _e.disable(e, r), R && !r && R.kill(), $ && delete xo[$];
                var a = wo.indexOf(_e);
                a >= 0 && wo.splice(a, 1),
                  a === Qi && Bo > 0 && Qi--,
                  (a = 0),
                  wo.forEach(function (e) {
                    return e.scroller === _e.scroller && (a = 1);
                  }),
                  a || ma || (_e.scroll.rec = 0),
                  n &&
                    ((n.scrollTrigger = null),
                    e && n.revert({ kill: !1 }),
                    r || n.kill()),
                  c &&
                    [c, f, d, p].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  va === _e && (va = 0),
                  G &&
                    (i && (i.uncache = 1),
                    (a = 0),
                    wo.forEach(function (e) {
                      return e.pin === G && a++;
                    }),
                    a || (i.spacer = 0)),
                  t.onKill && t.onKill(_e);
              }),
              wo.push(_e),
              _e.enable(!1, !1),
              U && U(_e),
              n && n.add && !g)
            ) {
              var Oe = _e.update;
              (_e.update = function () {
                (_e.update = Oe), s || u || _e.refresh();
              }),
                Ri.delayedCall(0.01, _e.update),
                (g = 0.01),
                (s = u = 0);
            } else _e.refresh();
            G &&
              (function () {
                if (ga !== Lo) {
                  var e = (ga = Lo);
                  requestAnimationFrame(function () {
                    return e === Lo && Fo(!0);
                  });
                }
              })();
          } else this.update = this.refresh = this.kill = Pa;
        }),
        (e.register = function (t) {
          return (
            Li ||
              ((Ri = t || Oa()),
              Ma() && window.document && e.enable(),
              (Li = xa)),
            Li
          );
        }),
        (e.defaults = function (e) {
          if (e) for (var t in e) go[t] = e[t];
          return go;
        }),
        (e.disable = function (e, t) {
          (xa = 0),
            wo.forEach(function (n) {
              return n[t ? "kill" : "disable"](e);
            }),
            po(Di, "wheel", Co),
            po(Ai, "scroll", Co),
            clearInterval(Yi),
            po(Ai, "touchcancel", Pa),
            po(Ii, "touchstart", Pa),
            co(po, Ai, "pointerdown,touchstart,mousedown", Ta),
            co(po, Ai, "pointerup,touchend,mouseup", Ea),
            Ui.kill(),
            Da(po);
          for (var n = 0; n < di.length; n += 3)
            ho(po, di[n], di[n + 1]), ho(po, di[n], di[n + 2]);
        }),
        (e.enable = function () {
          if (
            ((Di = window),
            (Ai = document),
            (Fi = Ai.documentElement),
            (Ii = Ai.body),
            Ri &&
              ((Hi = Ri.utils.toArray),
              (Vi = Ri.utils.clamp),
              (la = Ri.core.context || Pa),
              (ea = Ri.core.suppressOverwrites || Pa),
              (sa = Di.history.scrollRestoration || "auto"),
              (Io = Di.pageYOffset),
              Ri.core.globals("ScrollTrigger", e),
              Ii))
          ) {
            (xa = 1),
              ((ua = document.createElement("div")).style.height = "100vh"),
              (ua.style.position = "absolute"),
              Do(),
              Sa(),
              ji.register(Ri),
              (e.isTouch = ji.isTouch),
              (oa =
                ji.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (ra = 1 === ji.isTouch),
              fo(Di, "wheel", Co),
              (Bi = [Di, Ai, Fi, Ii]),
              Ri.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t,
                      n = Ri.matchMedia();
                    for (t in e) n.add(t, e[t]);
                    return n;
                  }),
                  Ri.addEventListener("matchMediaInit", function () {
                    return jo();
                  }),
                  Ri.addEventListener("matchMediaRevert", function () {
                    return zo();
                  }),
                  Ri.addEventListener("matchMedia", function () {
                    Fo(0, 1), Mo("matchMedia");
                  }),
                  Ri.matchMedia("(orientation: portrait)", function () {
                    return So(), So;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              So(),
              fo(Ai, "scroll", Co);
            var t,
              n,
              r = Ii.style,
              i = r.borderTopStyle,
              a = Ri.core.Animation.prototype;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                t = oo(Ii),
                Si.m = Math.round(t.top + Si.sc()) || 0,
                Ci.m = Math.round(t.left + Ci.sc()) || 0,
                i
                  ? (r.borderTopStyle = i)
                  : r.removeProperty("border-top-style"),
                Yi = setInterval(ko, 250),
                Ri.delayedCall(0.5, function () {
                  return (ya = 0);
                }),
                fo(Ai, "touchcancel", Pa),
                fo(Ii, "touchstart", Pa),
                co(fo, Ai, "pointerdown,touchstart,mousedown", Ta),
                co(fo, Ai, "pointerup,touchend,mouseup", Ea),
                Xi = Ri.utils.checkPrefix("transform"),
                Vo.push(Xi),
                Li = ba(),
                Ui = Ri.delayedCall(0.2, Fo).pause(),
                Ki = [
                  Ai,
                  "visibilitychange",
                  function () {
                    var e = Di.innerWidth,
                      t = Di.innerHeight;
                    Ai.hidden
                      ? ((Zi = e), (Gi = t))
                      : (Zi === e && Gi === t) || To();
                  },
                  Ai,
                  "DOMContentLoaded",
                  Fo,
                  Di,
                  "load",
                  Fo,
                  Di,
                  "resize",
                  To,
                ],
                Da(fo),
                wo.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                n = 0;
              n < di.length;
              n += 3
            )
              ho(po, di[n], di[n + 1]), ho(po, di[n], di[n + 2]);
          }
        }),
        (e.config = function (t) {
          "limitCallbacks" in t && (pa = !!t.limitCallbacks);
          var n = t.syncInterval;
          (n && clearInterval(Yi)) || ((Yi = n) && setInterval(ko, n)),
            "ignoreMobileResize" in t &&
              (ra = 1 === e.isTouch && t.ignoreMobileResize),
            "autoRefreshEvents" in t &&
              (Da(po) || Da(fo, t.autoRefreshEvents || "none"),
              (ta = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
        }),
        (e.scrollerProxy = function (e, t) {
          var n = Ti(e),
            r = di.indexOf(n),
            i = za(n);
          ~r && di.splice(r, i ? 6 : 2),
            t && (i ? pi.unshift(Di, t, Ii, t, Fi, t) : pi.unshift(n, t));
        }),
        (e.clearMatchMedia = function (e) {
          wo.forEach(function (t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (e, t, n) {
          var r = (Aa(e) ? Ti(e) : e).getBoundingClientRect(),
            i = r[n ? qa : Xa] * t || 0;
          return n
            ? r.right - i > 0 && r.left + i < Di.innerWidth
            : r.bottom - i > 0 && r.top + i < Di.innerHeight;
        }),
        (e.positionInViewport = function (e, t, n) {
          Aa(e) && (e = Ti(e));
          var r = e.getBoundingClientRect(),
            i = r[n ? qa : Xa],
            a =
              null == t
                ? i / 2
                : t in vo
                ? vo[t] * i
                : ~t.indexOf("%")
                ? (parseFloat(t) * i) / 100
                : parseFloat(t) || 0;
          return n
            ? (r.left + a) / Di.innerWidth
            : (r.top + a) / Di.innerHeight;
        }),
        (e.killAll = function (e) {
          if (
            (wo.slice(0).forEach(function (e) {
              return "ScrollSmoother" !== e.vars.id && e.kill();
            }),
            !0 !== e)
          ) {
            var t = Eo.killAll || [];
            (Eo = {}),
              t.forEach(function (e) {
                return e();
              });
          }
        }),
        e
      );
    })();
  (tl.version = "3.12.5"),
    (tl.saveStyles = function (e) {
      return e
        ? Hi(e).forEach(function (e) {
            if (e && e.style) {
              var t = Oo.indexOf(e);
              t >= 0 && Oo.splice(t, 5),
                Oo.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Ri.core.getCache(e),
                  la()
                );
            }
          })
        : Oo;
    }),
    (tl.revert = function (e, t) {
      return jo(!e, t);
    }),
    (tl.create = function (e, t) {
      return new tl(e, t);
    }),
    (tl.refresh = function (e) {
      return e ? To() : (Li || tl.register()) && Fo(!0);
    }),
    (tl.update = function (e) {
      return ++di.cache && Uo(!0 === e ? 2 : 0);
    }),
    (tl.clearScrollMemory = Ro),
    (tl.maxScroll = function (e, t) {
      return La(e, t ? Ci : Si);
    }),
    (tl.getScrollFunc = function (e, t) {
      return Ei(Ti(e), t ? Ci : Si);
    }),
    (tl.getById = function (e) {
      return xo[e];
    }),
    (tl.getAll = function () {
      return wo.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (tl.isScrolling = function () {
      return !!wa;
    }),
    (tl.snapDirectional = uo),
    (tl.addEventListener = function (e, t) {
      var n = Eo[e] || (Eo[e] = []);
      ~n.indexOf(t) || n.push(t);
    }),
    (tl.removeEventListener = function (e, t) {
      var n = Eo[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    }),
    (tl.batch = function (e, t) {
      var n,
        r = [],
        i = {},
        a = t.interval || 0.016,
        o = t.batchMax || 1e9,
        l = function (e, t) {
          var n = [],
            r = [],
            i = Ri.delayedCall(a, function () {
              t(n, r), (n = []), (r = []);
            }).pause();
          return function (e) {
            n.length || i.restart(!0),
              n.push(e.trigger),
              r.push(e),
              o <= n.length && i.progress(1);
          };
        };
      for (n in t)
        i[n] =
          "on" === n.substr(0, 2) && Fa(t[n]) && "onRefreshInit" !== n
            ? l(0, t[n])
            : t[n];
      return (
        Fa(o) &&
          ((o = o()),
          fo(tl, "refresh", function () {
            return (o = t.batchMax());
          })),
        Hi(e).forEach(function (e) {
          var t = {};
          for (n in i) t[n] = i[n];
          (t.trigger = e), r.push(tl.create(t));
        }),
        r
      );
    });
  var nl,
    rl = function (e, t, n, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
      );
    },
    il = function e(t, n) {
      !0 === n
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            !0 === n
              ? "auto"
              : n
              ? "pan-" + n + (ji.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Fi && e(Ii, n);
    },
    al = { auto: 1, scroll: 1 },
    ol = function (e) {
      var t,
        n = e.event,
        r = e.target,
        i = e.axis,
        a = (n.changedTouches ? n.changedTouches[0] : n).target,
        o = a._gsap || Ri.core.getCache(a),
        l = ba();
      if (!o._isScrollT || l - o._isScrollT > 2e3) {
        for (
          ;
          a &&
          a !== Ii &&
          ((a.scrollHeight <= a.clientHeight &&
            a.scrollWidth <= a.clientWidth) ||
            (!al[(t = io(a)).overflowY] && !al[t.overflowX]));

        )
          a = a.parentNode;
        (o._isScroll =
          a &&
          a !== r &&
          !za(a) &&
          (al[(t = io(a)).overflowY] || al[t.overflowX])),
          (o._isScrollT = l);
      }
      (o._isScroll || "x" === i) && (n.stopPropagation(), (n._gsapAllow = !0));
    },
    ll = function (e, t, n, r) {
      return ji.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && ol),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return n && fo(Ai, ji.eventTypes[0], ul, !1, !0);
        },
        onDisable: function () {
          return po(Ai, ji.eventTypes[0], ul, !0);
        },
      });
    },
    sl = /(input|label|select|textarea)/i,
    ul = function (e) {
      var t = sl.test(e.target.tagName);
      (t || nl) && ((e._gsapAllow = !0), (nl = t));
    },
    cl = function (e) {
      Ba(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t,
        n,
        r,
        i,
        a,
        o,
        l,
        s,
        u = e,
        c = u.normalizeScrollX,
        f = u.momentum,
        d = u.allowNestedScroll,
        p = u.onRelease,
        h = Ti(e.target) || Fi,
        m = Ri.core.globals().ScrollSmoother,
        g = m && m.get(),
        v =
          oa &&
          ((e.content && Ti(e.content)) ||
            (g && !1 !== e.content && !g.smooth() && g.content())),
        y = Ei(h, Si),
        b = Ei(h, Ci),
        _ = 1,
        w =
          (ji.isTouch && Di.visualViewport
            ? Di.visualViewport.scale * Di.visualViewport.width
            : Di.outerWidth) / Di.innerWidth,
        x = 0,
        k = Fa(f)
          ? function () {
              return f(t);
            }
          : function () {
              return f || 2.8;
            },
        C = ll(h, e.type, !0, d),
        S = function () {
          return (i = !1);
        },
        T = Pa,
        E = Pa,
        P = function () {
          (n = La(h, Si)),
            (E = Vi(oa ? 1 : 0, n)),
            c && (T = Vi(0, La(h, Ci))),
            (r = Lo);
        },
        N = function () {
          (v._gsap.y = Na(parseFloat(v._gsap.y) + y.offset) + "px"),
            (v.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(v._gsap.y) +
              ", 0, 1)"),
            (y.offset = y.cacheID = 0);
        },
        M = function () {
          P(),
            a.isActive() &&
              a.vars.scrollY > n &&
              (y() > n ? a.progress(1) && y(n) : a.resetTo("scrollY", n));
        };
      return (
        v && Ri.set(v, { y: "+=0" }),
        (e.ignoreCheck = function (e) {
          return (
            (oa &&
              "touchmove" === e.type &&
              (function () {
                if (i) {
                  requestAnimationFrame(S);
                  var e = Na(t.deltaY / 2),
                    n = E(y.v - e);
                  if (v && n !== y.v + y.offset) {
                    y.offset = n - y.v;
                    var r = Na((parseFloat(v && v._gsap.y) || 0) - y.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (v._gsap.y = r + "px"),
                      (y.cacheID = di.cache),
                      Uo();
                  }
                  return !0;
                }
                y.offset && N(), (i = !0);
              })()) ||
            (_ > 1.05 && "touchstart" !== e.type) ||
            t.isGesturing ||
            (e.touches && e.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          i = !1;
          var e = _;
          (_ = Na(((Di.visualViewport && Di.visualViewport.scale) || 1) / w)),
            a.pause(),
            e !== _ && il(h, _ > 1.01 || (!c && "x")),
            (o = b()),
            (l = y()),
            P(),
            (r = Lo);
        }),
        (e.onRelease = e.onGestureStart =
          function (e, t) {
            if ((y.offset && N(), t)) {
              di.cache++;
              var r,
                i,
                o = k();
              c &&
                ((i = (r = b()) + (0.05 * o * -e.velocityX) / 0.227),
                (o *= rl(b, r, i, La(h, Ci))),
                (a.vars.scrollX = T(i))),
                (i = (r = y()) + (0.05 * o * -e.velocityY) / 0.227),
                (o *= rl(y, r, i, La(h, Si))),
                (a.vars.scrollY = E(i)),
                a.invalidate().duration(o).play(0.01),
                ((oa && a.vars.scrollY >= n) || r >= n - 1) &&
                  Ri.to({}, { onUpdate: M, duration: o });
            } else s.restart(!0);
            p && p(e);
          }),
        (e.onWheel = function () {
          a._ts && a.pause(), ba() - x > 1e3 && ((r = 0), (x = ba()));
        }),
        (e.onChange = function (e, t, n, i, a) {
          if (
            (Lo !== r && P(),
            t && c && b(T(i[2] === t ? o + (e.startX - e.x) : b() + t - i[1])),
            n)
          ) {
            y.offset && N();
            var s = a[2] === n,
              u = s ? l + e.startY - e.y : y() + n - a[1],
              f = E(u);
            s && u !== f && (l += f - u), y(f);
          }
          (n || t) && Uo();
        }),
        (e.onEnable = function () {
          il(h, !c && "x"),
            tl.addEventListener("refresh", M),
            fo(Di, "resize", M),
            y.smooth &&
              ((y.target.style.scrollBehavior = "auto"),
              (y.smooth = b.smooth = !1)),
            C.enable();
        }),
        (e.onDisable = function () {
          il(h, !0),
            po(Di, "resize", M),
            tl.removeEventListener("refresh", M),
            C.kill();
        }),
        (e.lockAxis = !1 !== e.lockAxis),
        ((t = new ji(e)).iOS = oa),
        oa && !y() && y(1),
        oa && Ri.ticker.add(Pa),
        (s = t._dc),
        (a = Ri.to(t, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Ko(y, y(), function () {
              return a.pause();
            }),
          },
          onUpdate: Uo,
          onComplete: s.vars.onComplete,
        })),
        t
      );
    };
  (tl.sort = function (e) {
    return wo.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (tl.observe = function (e) {
      return new ji(e);
    }),
    (tl.normalizeScroll = function (e) {
      if ("undefined" === typeof e) return na;
      if (!0 === e && na) return na.enable();
      if (!1 === e) return na && na.kill(), void (na = e);
      var t = e instanceof ji ? e : cl(e);
      return (
        na && na.target === t.target && na.kill(), za(t.target) && (na = t), t
      );
    }),
    (tl.core = {
      _getVelocityProp: Pi,
      _inputObserver: ll,
      _scrollers: di,
      _proxies: pi,
      bridge: {
        ss: function () {
          wa || Mo("scrollStart"), (wa = ba());
        },
        ref: function () {
          return $i;
        },
      },
    }),
    Oa() && Ri.registerPlugin(tl),
    Yr.registerPlugin(tl);
  const fl = function () {
    const e = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        const t = e.current;
        Yr.fromTo(
          t,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: t,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, []),
      (0, $r.jsx)("section", {
        ref: e,
        id: "about",
        children: (0, $r.jsx)("div", {
          className: "container",
          children: (0, $r.jsxs)("div", {
            className: "grid-about",
            children: [
              (0, $r.jsx)("img", {
                className: "flip-horizontal width grid-2",
                src: "img/about-img.png",
                alt: "",
              }),
              (0, $r.jsxs)("div", {
                className: "flex-text-about grid-1",
                children: [
                  (0, $r.jsxs)("div", {
                    className: "about-heading",
                    children: [
                      " ",
                      (0, $r.jsx)("h2", {
                        className: "About-color About-font",
                        children: "About US",
                      }),
                      (0, $r.jsx)("h1", {
                        children: "Why choose $XOGE memecoin ?",
                      }),
                    ],
                  }),
                  (0, $r.jsx)("div", {
                    className: "flex-container-about-icon-text",
                    children: (0, $r.jsx)("p", {
                      className: "about-text",
                      children:
                        "Say hello to the official currency of 𝕏: 𝕏OGE—where memes meet money! Powered by Doge's chaotic energy and fueled by 𝕏's ambition to reinvent everything, 𝕏OGE is the ultimate fusion of laughs and ledgers. Why trade boring coins when you can meme your way to wealth? 𝕏!",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
  Yr.registerPlugin(tl);
  Yr.registerPlugin(tl);
  function dl(e) {
    let { number: t, title: n, text: i } = e;
    const a = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        Yr.fromTo(
          a.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: a.current,
              start: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, []),
      (0, $r.jsxs)($r.Fragment, {
        children: [
          (0, $r.jsxs)("div", {
            className: "token-data",
            ref: a,
            children: [
              (0, $r.jsx)("button", { className: "btn-token", children: t }),
              (0, $r.jsxs)("div", {
                children: [
                  (0, $r.jsx)("h2", { className: "title-token", children: n }),
                  (0, $r.jsx)("p", { className: "gray-text", children: i }),
                ],
              }),
            ],
          }),
          (0, $r.jsx)("hr", {}),
        ],
      })
    );
  }
  Yr.registerPlugin(tl);
  const pl = function () {
    return (0, $r.jsx)("section", {
      className: "bg-color",
      id: "tokenomics",
      children: (0, $r.jsx)("div", {
        className: "container",
        children: (0, $r.jsxs)("div", {
          children: [
            (0, $r.jsx)("h1", {
              className: "Tokenomics-title",
              children: "Tokenomics",
            }),
            (0, $r.jsxs)("div", {
              children: [
                (0, $r.jsx)(dl, {
                  number: "01",
                  title: "Total Supply",
                  text: "100% (1 billion) - Actively in circulation to support the community, liquidity, and organic ecosystem growth. Available for trading and use within the ecosystem to ensure stability and accessibility.",
                }),
                (0, $r.jsx)(dl, {
                  number: "02",
                  title: "LP",
                  text: "100% token to LP and LP Burnt",
                }),
                (0, $r.jsx)(dl, {
                  number: "03",
                  title: "Zero Tax",
                  text: "0% Buying/Selling Tax",
                }),
                (0, $r.jsx)(dl, {
                  number: "04",
                  title: "Renounce",
                  text: "Ownership Renounced",
                }),
                (0, $r.jsx)(dl, {
                  number: "05",
                  title: "CA",
                  text: "0xdc5510f863dead665cfb65b4203b713957094022",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
  function hl(e) {
    let { svg: t, title: n, text: i } = e;
    const a = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        Yr.fromTo(
          a.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: a.current,
              start: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, []),
      (0, $r.jsxs)("div", {
        ref: a,
        className: "HowToBuy-Card",
        children: [
          (0, $r.jsx)("div", { children: t }),
          (0, $r.jsxs)("div", {
            children: [
              (0, $r.jsx)("h1", { children: n }),
              (0, $r.jsxs)("p", { className: "gray-text", children: [" ", i] }),
            ],
          }),
        ],
      })
    );
  }
  Yr.registerPlugin(tl);
  const ml = function () {
    const e = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        const t = () => {
            Yr.to(e.current, { scale: 1.1, duration: 0.3, ease: "power3.out" });
          },
          n = () => {
            Yr.to(e.current, { scale: 1, duration: 1, ease: "power3.out" });
          },
          r = e.current;
        return (
          r.addEventListener("mouseenter", t),
          r.addEventListener("mouseleave", n),
          () => {
            r.removeEventListener("mouseenter", t),
              r.removeEventListener("mouseleave", n);
          }
        );
      }, []),
      (0, $r.jsx)("section", {
        className: "bg-color",
        children: (0, $r.jsx)("div", {
          className: "container bg-color",
          id: "HowToBuy",
          children: (0, $r.jsxs)("div", {
            className: "section-spacing",
            children: [
              (0, $r.jsxs)("div", {
                className: "flex-container-HowToBuy",
                children: [
                  (0, $r.jsxs)("div", {
                    className: "flex-1-HowToBuy",
                    children: [
                      (0, $r.jsx)("h1", {
                        className: "HowToBuy-title",
                        children: "HOW TO BUY",
                      }),
                      (0, $r.jsx)(hl, {
                        svg: (0, $r.jsxs)("svg", {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 114 114",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, $r.jsx)("path", {
                              d: "M18 0.836458C8.79698 0.836458 1.33646 8.29698 1.33646 17.5V96.1274C1.33646 105.33 8.79698 112.791 18 112.791H96.6274C105.83 112.791 113.291 105.33 113.291 96.1274V17.5C113.291 8.29698 105.83 0.836458 96.6274 0.836458H18Z",
                              fill: "#66B2CA",
                              stroke: "black",
                              "stroke-width": "1.32708",
                            }),
                            (0, $r.jsx)("g", {
                              "clip-path": "url(#clip0_4033_164)",
                              children: (0, $r.jsx)("path", {
                                d: "M72.459 47.5926V45.4854C72.459 42.5351 72.459 41.0599 71.8848 39.933C71.3799 38.9418 70.5739 38.1359 69.5827 37.6308C68.4559 37.0566 66.9806 37.0566 64.0303 37.0566H41.378C38.4276 37.0566 36.9525 37.0566 35.8256 37.6308C34.8343 38.1359 34.0284 38.9418 33.5234 39.933C32.9492 41.0599 32.9492 42.5351 32.9492 45.4854V47.5926M32.9492 47.5926V70.7717C32.9492 73.722 32.9492 75.1973 33.5234 76.3241C34.0284 77.3153 34.8343 78.1213 35.8256 78.6262C36.9525 79.2004 38.4276 79.2004 41.378 79.2004H71.9322C74.8826 79.2004 76.3579 79.2004 77.4847 78.6262C78.4758 78.1213 79.2818 77.3153 79.7868 76.3241C80.361 75.1973 80.361 73.722 80.361 70.7717V56.0213C80.361 53.071 80.361 51.5958 79.7868 50.469C79.2818 49.4777 78.4758 48.6718 77.4847 48.1668C76.3579 47.5926 74.8826 47.5926 71.9322 47.5926H32.9492ZM80.361 58.1285H75.093C72.1835 58.1285 69.825 60.487 69.825 63.3965C69.825 66.306 72.1835 68.6645 75.093 68.6645H80.361",
                                stroke: "white",
                                "stroke-width": "5.26797",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            }),
                            (0, $r.jsx)("defs", {
                              children: (0, $r.jsx)("clipPath", {
                                id: "clip0_4033_164",
                                children: (0, $r.jsx)("rect", {
                                  width: "63.2157",
                                  height: "63.2157",
                                  fill: "white",
                                  transform: "translate(25.7058 25.2061)",
                                }),
                              }),
                            }),
                          ],
                        }),
                        title: "Prepare Your Spaceship",
                        text: "Install a crypto wallet (like MetaMask or Trust Wallet) to safely store your $XOGE token.",
                      }),
                      (0, $r.jsx)(hl, {
                        svg: (0, $r.jsxs)("svg", {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 115 115",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, $r.jsx)("path", {
                              d: "M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V97C1.33646 106.203 8.79698 113.664 18 113.664H97C106.203 113.664 113.664 106.203 113.664 97V18C113.664 8.79698 106.203 1.33646 97 1.33646H18Z",
                              fill: "#66B2CA",
                              stroke: "black",
                              "stroke-width": "1.32708",
                            }),
                            (0, $r.jsxs)("g", {
                              "clip-path": "url(#clip0_4033_181)",
                              children: [
                                (0, $r.jsx)("path", {
                                  d: "M46.2678 53.5363H77.9821L67.4107 42.9648",
                                  stroke: "white",
                                  "stroke-width": "5.28571",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M67.4108 64.1084H35.6965L46.268 74.6798",
                                  stroke: "white",
                                  "stroke-width": "5.28571",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            (0, $r.jsx)("defs", {
                              children: (0, $r.jsx)("clipPath", {
                                id: "clip0_4033_181",
                                children: (0, $r.jsx)("rect", {
                                  width: "63.4286",
                                  height: "63.4286",
                                  fill: "white",
                                  transform: "translate(25.7859 25.7861)",
                                }),
                              }),
                            }),
                          ],
                        }),
                        title: "Launch to the Stars",
                        text: "Swap your base Eth for $XOGE token on a decentralized exchange (DEX)  ( Uniswap).",
                      }),
                      (0, $r.jsx)("img", {
                        src: "/img/card-img_1.png",
                        className: "img-HowToBuy_1",
                        alt: "card-img",
                      }),
                    ],
                  }),
                  (0, $r.jsxs)("div", {
                    className: "flex-2-HowToBuy",
                    children: [
                      (0, $r.jsx)("img", {
                        src: "/img/card-img.png",
                        className: "img-HowToBuy",
                        alt: "card-img",
                      }),
                      (0, $r.jsx)(hl, {
                        svg: (0, $r.jsxs)("svg", {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 115 115",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, $r.jsx)("path", {
                              d: "M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V96.8628C1.33646 106.066 8.79698 113.526 18 113.526H96.8628C106.066 113.526 113.526 106.066 113.526 96.8628V18C113.526 8.79698 106.066 1.33646 96.8628 1.33646H18Z",
                              fill: "#66B2CA",
                              stroke: "black",
                              "stroke-width": "1.32708",
                            }),
                            (0, $r.jsx)("path", {
                              d: "M75.2825 52.5513C74.9436 52.8903 74.809 53.3804 74.9014 53.8508C75.1292 55.0093 75.2485 56.2069 75.2485 57.4322C75.2485 67.6369 66.9757 75.9093 56.7714 75.9093C51.37 75.9093 46.5102 73.5918 43.1317 69.8971C42.6001 69.3156 41.6831 69.2555 41.1261 69.8124C40.6537 70.2849 40.6095 71.0404 41.0559 71.5374C44.9218 75.8415 50.5303 78.5489 56.7714 78.5489C68.4336 78.5489 77.8881 69.0947 77.8881 57.4322C77.8881 55.9601 77.7374 54.5234 77.4507 53.1363C77.2422 52.1276 76.0108 51.823 75.2825 52.5513Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              d: "M72.0512 44.6585C72.5334 44.1762 72.5688 43.4015 72.0995 42.9064C68.2512 38.8466 62.8071 36.3145 56.7716 36.3145C45.1091 36.3145 35.6548 45.7687 35.6548 57.4311C35.6548 59.0186 35.83 60.5651 36.162 62.0525C36.3842 63.0479 37.6034 63.3398 38.3245 62.6187C38.6686 62.2745 38.8012 61.7751 38.6998 61.2989C38.4342 60.0517 38.2944 58.7578 38.2944 57.4311C38.2944 47.2265 46.5669 38.954 56.7716 38.954C61.9933 38.954 66.7089 41.12 70.0694 44.6025C70.6068 45.1595 71.504 45.2058 72.0512 44.6585Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M72.9391 38.9531C73.6679 38.9531 74.2589 39.544 74.2589 40.2729V45.5521C74.2589 46.281 73.6679 46.8719 72.9391 46.8719H67.6599C66.9308 46.8719 66.3401 46.281 66.3401 45.5521C66.3401 44.8232 66.9308 44.2323 67.6599 44.2323H71.6193V40.2729C71.6193 39.544 72.21 38.9531 72.9391 38.9531Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M39.6707 68.3769C39.9183 68.1293 40.254 67.9902 40.604 67.9902H45.8832C46.6121 67.9902 47.203 68.5812 47.203 69.31C47.203 70.0391 46.6121 70.6298 45.8832 70.6298H41.9238V74.5892C41.9238 75.3183 41.3329 75.909 40.604 75.909C39.8751 75.909 39.2842 75.3183 39.2842 74.5892V69.31C39.2842 68.96 39.4232 68.6243 39.6707 68.3769Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              d: "M57.363 58.3105V63.435C59.1097 63.2402 60.3656 62.2298 60.3656 60.7791C60.3656 59.3067 58.9798 58.758 57.4208 58.3251L57.363 58.3105Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              d: "M53.5813 53.8794C53.5813 55.3447 55.0827 55.951 56.1797 56.2611V51.4688C54.5917 51.6781 53.5813 52.6309 53.5813 53.8794Z",
                              fill: "white",
                            }),
                            (0, $r.jsx)("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M56.7717 70.6302C64.0606 70.6302 69.9696 64.7212 69.9696 57.4323C69.9696 50.1433 64.0606 44.2344 56.7717 44.2344C49.4827 44.2344 43.5737 50.1433 43.5737 57.4323C43.5737 64.7212 49.4827 70.6302 56.7717 70.6302ZM57.3635 66.6708H56.1799V65.0615C53.3434 64.8738 51.611 63.2858 51.4451 61.0123H53.2927C53.4226 62.499 54.6642 63.2787 56.1799 63.4373V57.9737L55.6023 57.8076C53.2927 57.1435 51.8494 55.9599 51.8494 53.9678C51.8494 51.7015 53.7042 50.1281 56.1799 49.8754V48.1938H57.3635V49.8538C59.9764 50.027 61.8241 51.6293 61.8962 53.7368H60.1641C60.0052 52.4234 58.8936 51.6005 57.3635 51.4489V56.5807L57.941 56.7394C59.4712 57.1435 62.0984 58.0386 62.0984 60.8102C62.0984 63.062 60.395 64.8522 57.3635 65.0615V66.6708Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        title: "Hold To The Moon",
                        text: "Hold your 𝕏OGE token and prepare for the moon",
                      }),
                      (0, $r.jsx)(hl, {
                        svg: (0, $r.jsxs)("svg", {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 119 119",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, $r.jsx)("path", {
                              d: "M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V101.386C1.33646 110.589 8.79698 118.05 18 118.05H101.386C110.589 118.05 118.05 110.589 118.05 101.386V18C118.05 8.79698 110.589 1.33646 101.386 1.33646H18Z",
                              fill: "#66B2CA",
                              stroke: "black",
                              "stroke-width": "1.32708",
                            }),
                            (0, $r.jsxs)("g", {
                              "clip-path": "url(#clip0_4033_209)",
                              children: [
                                (0, $r.jsx)("path", {
                                  d: "M59.0061 49.7334C52.2066 49.7334 46.6433 55.2966 46.6433 62.0962C46.6433 68.8957 52.2066 74.459 59.0061 74.459C65.8056 74.459 71.3689 68.8957 71.3689 62.0962C71.3689 55.2966 65.8056 49.7334 59.0061 49.7334ZM59.0061 70.338C54.4731 70.338 50.7642 66.6292 50.7642 62.0962C50.7642 57.5632 54.4731 53.8543 59.0061 53.8543C63.5391 53.8543 67.2479 57.5632 67.2479 62.0962C67.2479 66.6292 63.5391 70.338 59.0061 70.338Z",
                                  fill: "white",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M59.0062 80.0215C51.331 80.0215 43.9648 83.2152 38.7106 88.83L37.3198 90.3238L40.3075 93.1569L41.6983 91.6631C46.2313 86.821 52.3612 84.1424 59.0062 84.1424C65.6512 84.1424 71.7811 86.821 76.3141 91.6631L77.7049 93.1569L80.6926 90.3238L79.3018 88.83C74.0476 83.2667 66.6814 80.0215 59.0062 80.0215Z",
                                  fill: "white",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M76.0049 52.7725V56.8934C80.847 56.8934 85.3285 58.8508 88.6767 62.4051L91.6644 59.572C87.6465 55.245 81.9287 52.7725 76.0049 52.7725Z",
                                  fill: "white",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M85.8437 38.4012C85.8437 32.9925 81.4137 28.5625 76.005 28.5625C70.5963 28.5625 66.1663 32.9925 66.1663 38.4012C66.1663 43.8099 70.5963 48.2399 76.005 48.2399C81.4137 48.2399 85.8437 43.8099 85.8437 38.4012ZM70.2872 38.4012C70.2872 35.259 72.8628 32.6834 76.005 32.6834C79.1472 32.6834 81.7228 35.259 81.7228 38.4012C81.7228 41.5434 79.1472 44.119 76.005 44.119C72.8628 44.119 70.2872 41.5434 70.2872 38.4012Z",
                                  fill: "white",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M42.0074 52.7725C36.0836 52.7725 30.3658 55.245 26.3479 59.572L29.3356 62.4051C32.6323 58.8508 37.1653 56.8934 42.0074 56.8934V52.7725Z",
                                  fill: "white",
                                }),
                                (0, $r.jsx)("path", {
                                  d: "M51.8461 38.4012C51.8461 32.9925 47.4161 28.5625 42.0074 28.5625C36.5987 28.5625 32.1687 32.9925 32.1687 38.4012C32.1687 43.8099 36.5987 48.2399 42.0074 48.2399C47.4161 48.2399 51.8461 43.8099 51.8461 38.4012ZM42.0074 44.119C38.8652 44.119 36.2896 41.5434 36.2896 38.4012C36.2896 35.259 38.8652 32.6834 42.0074 32.6834C45.1496 32.6834 47.7252 35.259 47.7252 38.4012C47.7252 41.5434 45.1496 44.119 42.0074 44.119Z",
                                  fill: "white",
                                }),
                              ],
                            }),
                            (0, $r.jsx)("defs", {
                              children: (0, $r.jsx)("clipPath", {
                                id: "clip0_4033_209",
                                children: (0, $r.jsx)("rect", {
                                  width: "65.9348",
                                  height: "65.9348",
                                  fill: "white",
                                  transform: "translate(26.0388 28.0996)",
                                }),
                              }),
                            }),
                          ],
                        }),
                        title: "Join the Cosmic Community",
                        text: "Join the Cosmic Community\nOnce you have your Alien Meme Coins, connect with our community on social media and stay updated on our cosmic adventures.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, $r.jsxs)("div", {
                className: "container-hr",
                children: [
                  (0, $r.jsx)("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xdc5510f863dead665cfb65b4203b713957094022&chain=mainnet",
                    rel: "noreferrer",
                    ref: e,
                    className: "btn-HowToBuy",
                    children: "Buy Now!",
                  }),
                  (0, $r.jsx)("hr", { className: "hr-HowToBuy" }),
                ],
              }),
              (0, $r.jsxs)("div", {
                className: "minting-section hidden",
                children: [
                  (0, $r.jsx)("h2", {
                    className: "minting-title",
                    children: "Mint Your NFT",
                  }),
                  (0, $r.jsx)("iframe", {
                    src: "/0e69f75459fb116b82b7e32232c94fb5.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xF1Bfa0E73cc0B097C2608669E58EfacB3a5c2C02&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=0e69f75459fb116b82b7e32232c94fb5&theme=dark&primaryColor=purple",
                    width: "100%",
                    height: "750px",
                    style: { maxWidth: "100%" },
                    frameBorder: "0",
                    title: "NFT Minting",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
  Yr.registerPlugin(tl);
  const gl = function () {
    const e = (0, r.useRef)(null);
    function t(e) {
      let { title: t, text: n, cardRef: i } = e;
      const [a, o] = (0, r.useState)(!1);
      return (0, $r.jsxs)("div", {
        className: "card-faqs",
        children: [
          (0, $r.jsxs)("div", {
            className: "faq-header",
            onClick: () => {
              o(!a);
            },
            children: [
              (0, $r.jsx)("h1", { className: "title-card-faqs", children: t }),
              (0, $r.jsx)("span", {
                className: "faq-toggle " + (a ? "open" : ""),
                children: a ? "-" : "+",
              }),
            ],
          }),
          (0, $r.jsx)("p", {
            className: "text-card-faqs " + (a ? "show" : ""),
            children: n,
          }),
        ],
      });
    }
    return (
      (0, r.useEffect)(() => {
        Yr.timeline({
          scrollTrigger: { trigger: e.current, start: "bottom 60%", scrub: 4 },
        }).fromTo(
          e.current,
          { y: "5%", ease: jn.easeOut },
          { y: "0%", duration: 1 }
        );
      }, []),
      (0, $r.jsx)("section", {
        className: "section-spacing",
        children: (0, $r.jsxs)("div", {
          className: "container ",
          ref: e,
          id: "faqs",
          children: [
            (0, $r.jsxs)("div", {
              className: "hidden",
              children: [
                (0, $r.jsx)("h1", {
                  className: "faqs-title",
                  children: "Have Any Question?",
                }),
                (0, $r.jsx)("p", {
                  className: "text-faqs",
                  children:
                    "Download the White Paper and discover Bl𝕏OGEu Meme Coin\u2019s cosmic approach, tokenomics, and meet the intergalactic team guiding the mission!",
                }),
              ],
            }),
            (0, $r.jsxs)("div", {
              className: "card-container-faqs hidden",
              children: [
                (0, $r.jsx)(t, {
                  title: "What is 𝕏OGE Meme Coin?",
                  text: "It\u2019s the first extraterrestrial memecoin, blending fun with real crypto utility.",
                }),
                (0, $r.jsx)(t, {
                  title: "Is this a serious project?",
                  text: "Yes! We offer real value through NFTs, staking, and governance, with a playful twist.",
                }),
                (0, $r.jsx)(t, {
                  title: "Where can I buy it?",
                  text: "On decentralized exchanges like  Uniswap. Check the How to Buy section for details.",
                }),
                (0, $r.jsx)(t, {
                  title: "Does 𝕏OGE actually exist?",
                  text: "We can't say for sure, but our community is out of this world!",
                }),
                (0, $r.jsx)(t, {
                  title: "How can I join the community?",
                  text: "Follow us on social media and join our Telegram!",
                }),
              ],
            }),
            (0, $r.jsxs)("div", {
              className: "socials-faqs",
              children: [
                (0, $r.jsx)("a", {
                  className: "navbar-hover-effect",
                  href: "https://t.me/xdogeoneth",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: (0, $r.jsx)("svg", {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, $r.jsx)("path", {
                      d: "M21.8 2.2c-.5-.4-1.1-.4-1.6 0L2.5 10.7c-.6.2-.9.7-.9 1.3s.4 1.1.9 1.4l3.5 1.4 1.4 4c.2.7.9 1.2 1.7 1.2h.1c.5 0 1-.2 1.4-.5l2.9-2.2 3.7 3.7c.2.2.5.3.7.3.1 0 .2 0 .3-.1.3-.1.5-.4.6-.8l4.8-17.6c.1-.6 0-1.2-.4-1.6zm-9.8 10.8l-2.4 2.4-.8-2.2 7.2-5.9-4 5.7zm1 6.5l-2.5-2.5 1.7-1.7 2.5 2.5-1.7 1.7z",
                      fill: "white",
                    }),
                  }),
                }),
                (0, $r.jsx)("a", {
                  className: "navbar-hover-effect",
                  href: "https://dexscreener.com/ethereum/0xdc5510f863dead665cfb65b4203b713957094022",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: (0, $r.jsxs)("p", {
                    className: "dexscreen",
                    children: [
                      " ",
                      (0, $r.jsx)("b", { children: "DEX" }),
                      "SCREENER",
                    ],
                  }),
                }),
                (0, $r.jsx)("a", {
                  className: "navbar-hover-effect",
                  href: "https://x.com/xdogecoinoneth",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: (0, $r.jsx)("img", {
                    className: "x-icon",
                    src: "/img/x.png",
                    alt: "DEXTools Logo",
                  }),
                }),
                (0, $r.jsx)("a", {
                  className: "navbar-hover-effect",
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0xdc5510f863dead665cfb65b4203b713957094022",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: (0, $r.jsx)("img", {
                    className: "dextool-icon",
                    src: "/img/Brand_DEXTools_Light.png",
                    alt: "DEXTools Logo",
                  }),
                }),
              ],
            }),
            (0, $r.jsxs)("div", {
              className: "text-center",
              children: [
                (0, $r.jsx)("p", {
                  children: "Copyright \xa9 2025 𝕏OGE. All rights reserved.",
                }),
                // (0, $r.jsx)("a", {
                //   href: "",
                //   children: "",
                // }),
              ],
            }),
          ],
        }),
      })
    );
  };
  Yr.registerPlugin(tl);
  const vl = (e) => {
      let { title: t, phase: n, description: i, bgColor: a, index: o } = e;
      const l = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          Yr.fromTo(
            l.current,
            { opacity: 0, y: -50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 2 * o,
              ease: "power3.out",
              scrollTrigger: {
                trigger: l.current,
                start: "top 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }, [o]),
        (0, $r.jsxs)("div", {
          ref: l,
          className: "roadmap-phase",
          style: { backgroundColor: a },
          children: [
            (0, $r.jsx)("h2", { children: t }),
            (0, $r.jsxs)("p", {
              children: [(0, $r.jsx)("strong", { children: n }), " ", i],
            }),
          ],
        })
      );
    },
    yl = () => {
      const e = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          Yr.fromTo(
            e.current,
            { opacity: 0, y: -50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: e.current,
                start: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }, []),
        (0, $r.jsxs)("section", {
          className: "roadmap-container section-spacing",
          children: [
            (0, $r.jsx)("h1", {
              ref: e,
              className: "roadmap-title",
              children: "ROADMAP",
            }),
            (0, $r.jsx)("div", {
              className: "roadmap-content",
              id: "roadmap",
              children: (0, $r.jsxs)("div", {
                className: "roadmap-phase-container",
                children: [
                  (0, $r.jsx)(vl, {
                    title: "Launchpad To The Stars",
                    phase: "Phase 1:",
                    description:
                      "Launch Our Coin, Contract Verified, And Dextools and Dexscreener updated",
                    bgColor: "#2e2e3a",
                    index: 0,
                  }),
                  (0, $r.jsx)("div", { className: "dotted-line vertical" }),
                  (0, $r.jsx)(vl, {
                    title: "Galactic Conquest",
                    phase: "Phase 2:",
                    description:
                      "CMC & CG Listings and marketing capaigns kick off",
                    bgColor: "#48b1c4",
                    index: 0.1,
                  }),
                  (0, $r.jsx)("div", { className: "dotted-line vertical" }),
                  (0, $r.jsx)(vl, {
                    title: "Colonizing The Moon",
                    phase: "Phase 3:",
                    description:
                      "Tier 2 CEX Listings and strategic partnerships",
                    bgColor: "#2e2e3a",
                    index: 0.2,
                  }),
                  (0, $r.jsx)("div", { className: "dotted-line vertical" }),
                  (0, $r.jsx)(vl, {
                    title: "Universal Domination",
                    phase: "Phase 4:",
                    description:
                      "Tier 1 CEX Listings and Build!",
                    bgColor: "#48b1c4",
                    index: 0.3,
                  }),
                ],
              }),
            }),
          ],
        })
      );
    };
  const bl = function () {
    return (0, $r.jsxs)("div", {
      className: "preloader",
      children: [
        (0, $r.jsx)("div", { className: "preloader-spinner" }),
        (0, $r.jsx)("p", { children: "Loading..." }),
      ],
    });
  };
  const _l = function () {
      const [e, t] = (0, r.useState)(!0),
        n = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          const e = setTimeout(() => t(!1), 5e3);
          return () => clearTimeout(e);
        }, []),
        (0, r.useEffect)(() => {
          if (!e) {
            Yr.timeline().fromTo(
              n.current,
              { opacity: 0, y: "-10%" },
              { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: jn.easeOut }
            );
          }
        }, [e]),
        // e
        //   ? (0, $r.jsx)(bl, {})
           (0, $r.jsxs)("div", {
              className: "App",
              children: [
                (0, $r.jsxs)("div", {
                  className: "bg-img",
                  children: [
                    (0, $r.jsx)(Xr, { ref: n }),
                    " ",
                    (0, $r.jsx)(qr, {}),
                    (0, $r.jsx)(fl, {}),
                  ],
                }),
                (0, $r.jsx)(yl, {}),
                (0, $r.jsx)(pl, {}),
                (0, $r.jsx)(ml, {}),
                (0, $r.jsx)(gl, {}),
              ],
            })
      );
    },
    wl = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: o } = t;
            n(e), r(e), i(e), a(e), o(e);
          });
    };
  i
    .createRoot(document.getElementById("root"))
    .render((0, $r.jsx)(r.StrictMode, { children: (0, $r.jsx)(_l, {}) })),
    wl();
})();
//# sourceMappingURL=main.e88109ec.js.map
