/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "FT/q": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return E;
      });
      var a,
        r = n("mrSG"),
        o = n("rHSA"),
        c = n("XxJJ"),
        i = [
          { index: 0, type: o.a.OK, category: "action" },
          { index: 1, type: o.a.CANCEL, category: "action" },
          { index: 2, type: o.a.SECONDARY, category: "action" },
          { index: 3, type: o.a.OPTIONS, category: "action" },
          { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: o.a.SELECT, category: "action" },
          { index: 9, type: o.a.START, category: "action" },
          { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: o.a.DIR_UP, category: "navigation" },
          { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: o.a.SELECT, category: "action" },
        ],
        s = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(o.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.PollGamepads = function () {
              for (
                var e = navigator.getGamepads(), t = !1, n = 0;
                n < e.length;
                n++
              ) {
                var a = e[n];
                if (a) {
                  this.m_rgGamepadStatus[n] ||
                    (this.m_rgGamepadStatus[n] = { buttons: [] });
                  for (
                    var r = this.m_rgGamepadStatus[n], o = 0;
                    o < i.length;
                    o++
                  ) {
                    var c = i[o],
                      s = c.index;
                    a.buttons[s] &&
                      (a.buttons[s].pressed
                        ? ((t = !0),
                          r.buttons[s] ||
                            ((r.buttons[s] = !0), this.OnButtonDown(c.type)))
                        : r.buttons[s] &&
                          (this.OnButtonUp(c.type), (r.buttons[s] = !1)));
                  }
                }
              }
              document.hasFocus() || t
                ? requestAnimationFrame(this.PollGamepads)
                : (console.log("Lost focus - suspending gamepad polling"),
                  window.addEventListener(
                    "focusin",
                    this.OnWindowRegainedFocus
                  ));
            }),
            (t.prototype.OnWindowRegainedFocus = function () {
              window.removeEventListener("focusin", this.OnWindowRegainedFocus),
                this.PollGamepads();
            }),
            Object(r.c)([c.a], t.prototype, "PollGamepads", null),
            Object(r.c)([c.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(o.c),
        l = n("kyHq"),
        u = {
          A: o.a.OK,
          B: o.a.CANCEL,
          X: o.a.SECONDARY,
          Y: o.a.OPTIONS,
          SELECT: o.a.SELECT,
          START: o.a.START,
          LSHOULDER: o.a.BUMPER_LEFT,
          RSHOULDER: o.a.BUMPER_RIGHT,
          LTRIGGER: o.a.TRIGGER_LEFT,
          RTRIGGER: o.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: o.a.DIR_UP,
          LEFTSTICK_RIGHT: o.a.DIR_RIGHT,
          LEFTSTICK_DOWN: o.a.DIR_DOWN,
          LEFTSTICK_LEFT: o.a.DIR_LEFT,
          LEFTSTICK_CLICK: o.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: o.a.RSTICK_CLICK,
          LeftStick: o.a.LSTICK_TOUCH,
          RightStick: o.a.RSTICK_TOUCH,
          LeftTrackpad: o.a.LPAD_TOUCH,
          LeftTrackpadClick: o.a.LPAD_CLICK,
          RightTrackpad: o.a.RPAD_TOUCH,
          RightTrackpadClick: o.a.RPAD_CLICK,
          RearLeftUpper: o.a.REAR_LEFT_UPPER,
          RearLeftLower: o.a.REAR_LEFT_LOWER,
          RearRightUpper: o.a.REAR_RIGHT_UPPER,
          RearRightLower: o.a.REAR_RIGHT_LOWER,
        },
        p =
          (((a = {})[l.h.SystemKey0] = o.a.STEAM_GUIDE),
          (a[l.h.SystemKey1] = o.a.STEAM_QUICK_MENU),
          a),
        d = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgControllers = new Map()),
              "undefined" != typeof SteamClient &&
                ((t.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                  t.HandleControllerInputMessages
                )),
                SteamClient.System.UI.RegisterForSystemKeyEvents(
                  t.HandleSystemKeyEvents
                )),
              t.SetSourceType(o.b.GAMEPAD),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.HandleSystemKeyEvents = function (e) {
              var t = p[e.eKey];
              t && this.OnSystemButtonPress(t, e.nControllerIndex);
            }),
            (t.prototype.OnSystemButtonPress = function (e, t) {
              this.OnButtonDown(e, t), this.OnButtonUp(e, t);
            }),
            (t.prototype.GetController = function (e) {
              var t = this.m_rgControllers.get(e);
              return (
                t ||
                  ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
                t
              );
            }),
            (t.prototype.HandleControllerInputMessages = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var a = n[t],
                  r = u[a.strActionName];
                if (null != r) {
                  var o = this.GetController(a.nController);
                  a.bState && !o.activeButtons[r]
                    ? ((o.activeButtons[r] = !0),
                      this.OnButtonDown(r, a.nController))
                    : !a.bState &&
                      o.activeButtons[r] &&
                      ((o.activeButtons[r] = !1),
                      this.OnButtonUp(r, a.nController));
                }
              }
            }),
            Object(r.c)([c.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(r.c)(
              [c.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(o.c),
        m = n("X3Ds"),
        f = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_lastButtonDown = o.a.INVALID),
              n.SetSourceType(o.b.KEYBOARD),
              t.addEventListener("keydown", n.OnKeyDown),
              t.addEventListener("keyup", n.OnKeyUp),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = o.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != o.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = o.a.INVALID));
            }),
            (t.prototype.TranslateKey = function (e) {
              var t = e.code,
                n = e.ctrlKey,
                a =
                  m.q(e.target) &&
                  ("INPUT" === e.target.nodeName ||
                    "TEXTAREA" === e.target.nodeName);
              if (n)
                switch (t) {
                  case "Digit1":
                    return o.a.STEAM_GUIDE;
                  case "Digit2":
                    return o.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return o.a.SELECT;
                  case "Digit4":
                    return o.a.BUMPER_LEFT;
                  case "Digit5":
                    return o.a.BUMPER_RIGHT;
                  case "Digit6":
                    return o.a.LSTICK_CLICK;
                  case "Digit7":
                    return o.a.RSTICK_CLICK;
                  case "Digit8":
                    return o.a.OPTIONS;
                  case "Digit9":
                    return o.a.SELECT;
                  case "Digit0":
                    return o.a.START;
                }
              switch (t) {
                case "Escape":
                  return o.a.CANCEL;
                case "Enter":
                  return a ? o.a.INVALID : o.a.OK;
                case "Backspace":
                  return a ? o.a.INVALID : o.a.SECONDARY;
                case "ArrowUp":
                  return o.a.DIR_UP;
                case "ArrowDown":
                  return o.a.DIR_DOWN;
                case "ArrowLeft":
                  return o.a.DIR_LEFT;
                case "ArrowRight":
                  return o.a.DIR_RIGHT;
              }
              return o.a.INVALID;
            }),
            Object(r.c)([c.a], t.prototype, "OnKeyDown", null),
            Object(r.c)([c.a], t.prototype, "OnKeyUp", null),
            Object(r.c)([c.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        g = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_nAccumulatedMouseMovement = 0),
              (n.m_bFirstMouseUpdate = !0),
              n.SetSourceType(o.b.MOUSE),
              t.addEventListener("mousedown", n.OnMouseDown),
              t.addEventListener("mousemove", n.OnMouseMove),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
            }),
            (t.prototype.OnMouseMove = function (e) {
              if (!e.defaultPrevented) {
                if (this.m_bFirstMouseUpdate)
                  return (
                    (this.m_nLastScreenX = e.screenX),
                    (this.m_nLastScreenY = e.screenY),
                    void (this.m_bFirstMouseUpdate = !1)
                  );
                (this.m_nAccumulatedMouseMovement +=
                  Math.abs(e.screenX - this.m_nLastScreenX) +
                  Math.abs(e.screenY - this.m_nLastScreenY)),
                  this.m_nAccumulatedMouseMovement > 500 &&
                    (this.Reset(), this.OnNavigationTypeChanged(o.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(r.c)([c.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([c.a], t.prototype, "OnMouseMove", null),
            Object(r.c)([c.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        y = n("NxAk"),
        R = n("lkRc"),
        _ = (function () {
          function e() {
            (this.m_GamepadNavigationController = new y.c()),
              R.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new d()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new s()
                )),
              "dev" == R.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new f(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new g(window)
                ));
          }
          return (
            (e.prototype.GetNavigationController = function () {
              return this.m_GamepadNavigationController;
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  "dev" == R.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function E() {
        var e = window.legacyWebFocusNavController;
        return e || _.Get().GetNavigationController();
      }
    },
    OVk1: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("FT/q"),
        r = n("q1tI"),
        o = n.n(r),
        c = (n("kyHq"), n("av+R")),
        i = n("ykc/"),
        s = n("qDk6"),
        l = n("mrSG"),
        u = n("r64O"),
        p = n("exH9"),
        d = n("opsS"),
        m = n("EC67");
      function f(e, t, n) {
        var a,
          o = e + "_HistoryValue",
          c = Object(m.g)(),
          i = Object(m.h)(),
          s = null !== (a = i.state && i.state[o]) && void 0 !== a ? a : n,
          u = r.useRef(!1),
          p = r.useRef(),
          d = r.useRef(),
          f = r.useCallback(
            function (e) {
              if (u.current && ((p.current = e), !d.current)) {
                var n = c.location.pathname;
                d.current = window.setTimeout(function () {
                  var e;
                  c.location.pathname == n &&
                    c.location.state[o] != p.current &&
                    c.replace(
                      c.location.pathname,
                      Object(l.a)(
                        Object(l.a)({}, c.location.state),
                        (((e = {})[o] = p.current), e)
                      )
                    ),
                    (d.current = void 0);
                }, t);
              }
            },
            [c, o, t]
          );
        return (
          r.useEffect(function () {
            u.current = !0;
          }, []),
          [s, f]
        );
      }
      n("BaVA");
      var g = n("j+5p"),
        y = n("hJxo"),
        R = n("rHSA");
      function _(e, t, n, a) {
        void 0 === t && (t = "smooth");
        var r = (null != n ? n : 30) / 100,
          c = o.a.useRef(void 0),
          i = o.a.useRef(void 0),
          s = o.a.useCallback(function () {
            (c.current = void 0), (i.current = void 0);
          }, []),
          l = (function (e, t) {
            var n = o.a.useRef();
            return o.a.useCallback(
              function (a, r) {
                var o = "sine";
                n.current && (n.current.Cancel(), (o = "linear")),
                  void 0 === a && (a = e.current.scrollTop),
                  void 0 === r && (r = e.current.scrollLeft);
                var c = Math.max(
                  Math.abs(e.current.scrollTop - a),
                  Math.abs(e.current.scrollLeft - r)
                );
                if (c > 0) {
                  var i = Math.max(Math.min((c / 1e3) * 200, 500), 300);
                  (n.current = new y.a(
                    e.current,
                    { scrollTop: a, scrollLeft: r },
                    { msDuration: i, timing: o, onComplete: t }
                  )),
                    n.current.Start();
                } else t && t();
              },
              [e, t]
            );
          })(e, s);
        return o.a.useCallback(
          function (n) {
            var o, u;
            if (a && !a(n)) return !1;
            var p = e.current,
              d = p.scrollTop,
              m = p.scrollHeight,
              f = p.clientHeight,
              g = p.scrollLeft,
              y = p.scrollWidth,
              _ = p.clientWidth,
              E = null !== (o = c.current) && void 0 !== o ? o : d,
              S = null !== (u = i.current) && void 0 !== u ? u : g;
            switch (n.detail.button) {
              case R.a.DIR_UP:
                if (E <= 2) return !1;
                c.current = Math.max(0, E - f * r);
                break;
              case R.a.DIR_DOWN:
                if (E >= m - f - 2) return !1;
                c.current = Math.min(m - f, E + f * r);
                break;
              case R.a.DIR_LEFT:
                if (S <= 2) return !1;
                i.current = Math.max(0, S - _ * r);
                break;
              case R.a.DIR_RIGHT:
                if (S >= y - _ - 2) return !1;
                i.current = Math.min(y - _, S + _ * r);
                break;
              default:
                return !1;
            }
            return (
              t && "smooth" != t
                ? (e.current.scrollTo({
                    top: c.current,
                    left: i.current,
                    behavior: "auto",
                  }),
                  s())
                : l(c.current, i.current),
              !0
            );
          },
          [a, e, t, r, l, s]
        );
      }
      var E = n("yLGM"),
        S = n("ZAxP"),
        v = n.n(S),
        h = o.a.forwardRef(function (e, t) {
          var n,
            a = e.scrollDirection,
            r = e.scrollPaddingTop,
            c = e.scrollPaddingRight,
            i = e.scrollPaddingBottom,
            u = e.scrollPaddingLeft,
            d = e.className,
            m = e.children,
            f = e.style,
            g = Object(l.f)(e, [
              "scrollDirection",
              "scrollPaddingTop",
              "scrollPaddingRight",
              "scrollPaddingBottom",
              "scrollPaddingLeft",
              "className",
              "children",
              "style",
            ]);
          switch (a) {
            case "x":
              n = v.a.ScrollX;
              break;
            case "both":
              n = v.a.ScrollBoth;
              break;
            case "y":
            default:
              n = v.a.ScrollY;
          }
          var y = Object(l.a)({}, f);
          return (
            (r || 0 === r) && (y.scrollPaddingTop = r),
            (c || 0 === c) && (y.scrollPaddingRight = c),
            (i || 0 === i) && (y.scrollPaddingBottom = i),
            (u || 0 === u) && (y.scrollPaddingLeft = u),
            o.a.createElement(
              s.a,
              Object(l.a)({}, g, {
                style: y,
                className: Object(p.a)(d, v.a.ScrollPanel, n),
                ref: t,
              }),
              o.a.createElement(E.a, null, m)
            )
          );
        }),
        C =
          (o.a.forwardRef(function (e, t) {
            var n = e.scrollStepPercent,
              a = e.scrollBehavior,
              r = Object(l.f)(e, ["scrollStepPercent", "scrollBehavior"]),
              c = o.a.useRef(),
              i = _(
                c,
                a,
                n,
                o.a.useCallback(function (e) {
                  return e.currentTarget != e.target;
                }, [])
              ),
              s = Object(d.f)(c, t);
            return o.a.createElement(
              h,
              Object(l.a)({}, r, {
                onGamepadDirection: i,
                ref: s,
                scrollIntoViewType: g.d.NoTransformSparseContent,
              })
            );
          }),
          o.a.forwardRef(function (e, t) {
            var n = e.name,
              a = e.msScrollRestoreDelay,
              r = e.onScroll,
              c = Object(l.f)(e, ["name", "msScrollRestoreDelay", "onScroll"]),
              i = f(n + "ScrollTop", 250, 0),
              s = i[0],
              p = i[1],
              m = f(n + "ScrollLeft", 250, 0),
              g = m[0],
              y = m[1],
              R = o.a.useRef(0),
              _ = o.a.useRef(0),
              E = o.a.useRef(),
              S = o.a.useCallback(
                function (e) {
                  var t = e.currentTarget,
                    n = t.scrollTop,
                    a = t.scrollLeft;
                  p(n), (R.current = n), y(a), (_.current = a), r && r(e);
                },
                [p, y, r]
              );
            o.a.useLayoutEffect(
              function () {
                var e = function () {
                  Object(u.a)(
                    E.current.scrollHeight >= s,
                    "Element is " +
                      E.current.scrollHeight +
                      " high but trying to restore scrollTop of " +
                      s +
                      ", element may need more time to lay out.",
                    E.current
                  ),
                    (R.current = s),
                    (_.current = g),
                    E.current.scrollTo({ top: s, left: g, behavior: "auto" });
                };
                (s == R.current && g == _.current) ||
                  (a ? window.setTimeout(e, a) : e());
              },
              [s, g, a]
            );
            var v = Object(d.f)(t, E);
            return o.a.createElement(
              h,
              Object(l.a)({}, c, { onScroll: S, ref: v })
            );
          }),
          n("kKgT"),
          n("3+zv"),
          n("5eAM")),
        T = n("gyoR"),
        I = n("MnIK"),
        O = n("0OaU"),
        L = n("lkRc"),
        b = n("jIbu"),
        D = (function () {
          function e() {
            this.m_rgSections = Object(L.h)("categories", "application_config");
          }
          return (
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.Get = function () {
              return e.s_singleton || (e.s_singleton = new e()), e.s_singleton;
            }),
            e
          );
        })();
      function w(e) {
        var t = e.section;
        return o.a.createElement(
          "div",
          { className: b.CategorySection },
          o.a.createElement(
            "span",
            { className: b.CategorySectionName },
            t.name
          ),
          o.a.createElement(
            h,
            {
              className: b.CategoriesCtn,
              scrollDirection: "x",
              navEntryPreferPosition: g.c.MAINTAIN_X,
            },
            t.categories.map(function (e) {
              return o.a.createElement(G, {
                key: "category" + e.name,
                category: e,
              });
            })
          )
        );
      }
      function G(e) {
        var t,
          n = e.category,
          a = Object(r.useState)(Boolean(n.items)),
          i = a[0],
          l = a[1],
          u = Object(r.useState)(!1),
          d = u[0],
          m = u[1],
          f = Object(r.useState)(),
          g = f[0],
          y = f[1];
        return (
          Object(r.useEffect)(
            function () {
              if (n.items && d) {
                for (var e = new Set(), t = 0, a = n.items; t < a.length; t++) {
                  var r = a[t];
                  e.add(r.id);
                }
                C.a.LoadAppLinkInfo(Array.from(e)).then(function () {
                  Object(T.a)(n.items, !1).then(function (e) {
                    y(e), l(!1);
                  });
                });
              }
            },
            [d, n.items]
          ),
          o.a.createElement(
            s.a,
            { focusableIfNoChildren: !0 },
            o.a.createElement(
              I.a,
              {
                placeholderWidth: "110px",
                placeholderHeight: "150px",
                bHorizontal: !0,
                onRender: function () {
                  return m(!0);
                },
              },
              o.a.createElement(
                c.c,
                {
                  href: L.d.STORE_BASE_URL + n.url,
                  className: Object(p.a)(
                    ((t = {}),
                    (t[b.Category] = !0),
                    (t[b.TopLevelCategory] = n.is_toplevel_genre),
                    t)
                  ),
                },
                o.a.createElement(
                  "span",
                  { className: b.CategoryName },
                  o.a.createElement("span", null, n.name)
                ),
                i
                  ? o.a.createElement(O.a, {
                      size: "small",
                      position: "center",
                    })
                  : o.a.createElement(A, { apps: g })
              )
            )
          )
        );
      }
      function A(e) {
        var t = e.apps;
        if (!t) return null;
        var n = (t = t.slice(0, 6)).map(function (e) {
          return C.a.GetAppLinkInfo(e.id);
        });
        return o.a.createElement(
          "div",
          { className: b.GridOuter },
          o.a.createElement(
            "div",
            { className: b.Grid },
            n.map(function (e) {
              return o.a.createElement("img", { key: e.id, src: e.capsule });
            })
          )
        );
      }
      t.default = function () {
        var e = (function () {
            var e = D.Get(),
              t = Object(r.useState)(e.GetSections()),
              n = t[0];
            return t[1], { sections: n };
          })().sections,
          t = Object(a.a)(),
          n = o.a.useRef();
        return (
          o.a.useEffect(function () {
            return n.current.Activate();
          }, []),
          o.a.createElement(
            i.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            o.a.createElement(
              "div",
              { className: b.CategorySectionsCtn },
              e.map(function (e) {
                return o.a.createElement(w, {
                  key: "section" + e.name,
                  section: e,
                });
              })
            )
          )
        );
      };
    },
    ZAxP: function (e, t, n) {
      e.exports = {
        ScrollPanel: "scrollpanel_ScrollPanel_1Ecbh",
        ScrollY: "scrollpanel_ScrollY_3yFwd",
        ScrollBoth: "scrollpanel_ScrollBoth_7h7DE",
        ScrollX: "scrollpanel_ScrollX_3TJWg",
      };
    },
    jIbu: function (e, t, n) {
      e.exports = {
        CategorySectionsCtn: "categoriesapp_CategorySectionsCtn_YuXds",
        CategorySection: "categoriesapp_CategorySection_2MUQ8",
        CategorySectionName: "categoriesapp_CategorySectionName_2Vnsy",
        CategoriesCtn: "categoriesapp_CategoriesCtn_3yuPy",
        Category: "categoriesapp_Category_1uwcZ",
        GridOuter: "categoriesapp_GridOuter_3Q4XM",
        Grid: "categoriesapp_Grid_3anY0",
        CategoryName: "categoriesapp_CategoryName_3VNsE",
      };
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        c = n("opsS"),
        i = n("av+R"),
        s = n("yLGM"),
        l = n("qDk6"),
        u = (n("NxAk"), n("lkRc"));
      function p(e) {
        var t = e.children,
          n = e.navTreeRef,
          r = Object(a.f)(e, ["children", "navTreeRef"]),
          p = o.a.useRef(),
          d = Object(c.f)(p, n);
        return u.d.IN_GAMEPADUI
          ? o.a.createElement(
              i.b,
              Object(a.a)({}, r, { navTreeRef: d, secondary: !0 }),
              o.a.createElement(
                s.a,
                null,
                o.a.createElement(
                  l.a,
                  {
                    autoFocus: !0,
                    "flow-children": "column",
                    onMoveUp: function () {
                      return p.current.Deactivate(), !0;
                    },
                  },
                  t
                )
              )
            )
          : o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);