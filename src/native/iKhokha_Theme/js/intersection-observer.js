!(function () {
  "use strict";
  if ("object" == typeof window) {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      "isIntersecting" in window.IntersectionObserverEntry.prototype ||
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          "isIntersecting",
          {
            get: function () {
              return this.intersectionRatio > 0;
            },
          }
        );
      return;
    }
    var t = (function (t) {
        for (var e = t, n = i(e); n; ) n = i((e = n.ownerDocument));
        return e;
      })(window.document),
      e = [],
      n = null,
      o = null;
    (s.prototype.THROTTLE_TIMEOUT = 100),
      (s.prototype.POLL_INTERVAL = null),
      (s.prototype.USE_MUTATION_OBSERVER = !0),
      (s._setupCrossOriginUpdater = function () {
        return (
          n ||
            (n = function (t, n) {
              (o = t && n ? p(t, n) : l()),
                e.forEach(function (t) {
                  t._checkForIntersections();
                });
            }),
          n
        );
      }),
      (s._resetCrossOriginUpdater = function () {
        (n = null), (o = null);
      }),
      (s.prototype.observe = function (t) {
        if (
          !this._observationTargets.some(function (e) {
            return e.element == t;
          })
        ) {
          if (!(t && 1 == t.nodeType)) throw Error("target must be an Element");
          this._registerInstance(),
            this._observationTargets.push({ element: t, entry: null }),
            this._monitorIntersections(t.ownerDocument),
            this._checkForIntersections();
        }
      }),
      (s.prototype.unobserve = function (t) {
        (this._observationTargets = this._observationTargets.filter(function (
          e
        ) {
          return e.element != t;
        })),
          this._unmonitorIntersections(t.ownerDocument),
          0 == this._observationTargets.length && this._unregisterInstance();
      }),
      (s.prototype.disconnect = function () {
        (this._observationTargets = []),
          this._unmonitorAllIntersections(),
          this._unregisterInstance();
      }),
      (s.prototype.takeRecords = function () {
        var t = this._queuedEntries.slice();
        return (this._queuedEntries = []), t;
      }),
      (s.prototype._initThresholds = function (t) {
        var e = t || [0];
        return (
          Array.isArray(e) || (e = [e]),
          e.sort().filter(function (t, e, n) {
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
              throw Error(
                "threshold must be a number between 0 and 1 inclusively"
              );
            return t !== n[e - 1];
          })
        );
      }),
      (s.prototype._parseRootMargin = function (t) {
        var e = (t || "0px").split(/\s+/).map(function (t) {
          var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
          if (!e)
            throw Error("rootMargin must be specified in pixels or percent");
          return { value: parseFloat(e[1]), unit: e[2] };
        });
        return (
          (e[1] = e[1] || e[0]), (e[2] = e[2] || e[0]), (e[3] = e[3] || e[1]), e
        );
      }),
      (s.prototype._monitorIntersections = function (e) {
        var n = e.defaultView;
        if (n && -1 == this._monitoringDocuments.indexOf(e)) {
          var o = this._checkForIntersections,
            r = null,
            s = null;
          this.POLL_INTERVAL
            ? (r = n.setInterval(o, this.POLL_INTERVAL))
            : (h(n, "resize", o, !0),
              h(e, "scroll", o, !0),
              this.USE_MUTATION_OBSERVER &&
                "MutationObserver" in n &&
                (s = new n.MutationObserver(o)).observe(e, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                })),
            this._monitoringDocuments.push(e),
            this._monitoringUnsubscribes.push(function () {
              var t = e.defaultView;
              t && (r && t.clearInterval(r), u(t, "resize", o, !0)),
                u(e, "scroll", o, !0),
                s && s.disconnect();
            });
          var c = (this.root && (this.root.ownerDocument || this.root)) || t;
          if (e != c) {
            var a = i(e);
            a && this._monitorIntersections(a.ownerDocument);
          }
        }
      }),
      (s.prototype._unmonitorIntersections = function (e) {
        var n = this._monitoringDocuments.indexOf(e);
        if (-1 != n) {
          var o = (this.root && (this.root.ownerDocument || this.root)) || t;
          if (
            !this._observationTargets.some(function (t) {
              var n = t.element.ownerDocument;
              if (n == e) return !0;
              for (; n && n != o; ) {
                var r = i(n);
                if ((n = r && r.ownerDocument) == e) return !0;
              }
              return !1;
            })
          ) {
            var r = this._monitoringUnsubscribes[n];
            if (
              (this._monitoringDocuments.splice(n, 1),
              this._monitoringUnsubscribes.splice(n, 1),
              r(),
              e != o)
            ) {
              var s = i(e);
              s && this._unmonitorIntersections(s.ownerDocument);
            }
          }
        }
      }),
      (s.prototype._unmonitorAllIntersections = function () {
        var t = this._monitoringUnsubscribes.slice(0);
        (this._monitoringDocuments.length = 0),
          (this._monitoringUnsubscribes.length = 0);
        for (var e = 0; e < t.length; e++) t[e]();
      }),
      (s.prototype._checkForIntersections = function () {
        if (this.root || !n || o) {
          var t = this._rootIsInDom(),
            e = t ? this._getRootRect() : l();
          this._observationTargets.forEach(function (o) {
            var i = o.element,
              s = a(i),
              h = this._rootContainsTarget(i),
              u = o.entry,
              c = t && h && this._computeTargetAndRootIntersection(i, s, e),
              f = null;
            this._rootContainsTarget(i)
              ? (!n || this.root) && (f = e)
              : (f = l());
            var p = (o.entry = new r({
              time: window.performance && performance.now && performance.now(),
              target: i,
              boundingClientRect: s,
              rootBounds: f,
              intersectionRect: c,
            }));
            u
              ? t && h
                ? this._hasCrossedThreshold(u, p) && this._queuedEntries.push(p)
                : u && u.isIntersecting && this._queuedEntries.push(p)
              : this._queuedEntries.push(p);
          }, this),
            this._queuedEntries.length &&
              this._callback(this.takeRecords(), this);
        }
      }),
      (s.prototype._computeTargetAndRootIntersection = function (e, i, r) {
        if ("none" != window.getComputedStyle(e).display) {
          for (var s = i, h = d(e), u = !1; !u && h; ) {
            var l = null,
              f = 1 == h.nodeType ? window.getComputedStyle(h) : {};
            if ("none" == f.display) return null;
            if (h == this.root || 9 == h.nodeType) {
              if (((u = !0), h == this.root || h == t))
                n && !this.root
                  ? o && (0 != o.width || 0 != o.height)
                    ? (l = o)
                    : ((h = null), (l = null), (s = null))
                  : (l = r);
              else {
                var g = d(h),
                  m = g && a(g),
                  v = g && this._computeTargetAndRootIntersection(g, m, r);
                m && v ? ((h = g), (l = p(m, v))) : ((h = null), (s = null));
              }
            } else {
              var b = h.ownerDocument;
              h != b.body &&
                h != b.documentElement &&
                "visible" != f.overflow &&
                (l = a(h));
            }
            if ((l && (s = c(l, s)), !s)) break;
            h = h && d(h);
          }
          return s;
        }
      }),
      (s.prototype._getRootRect = function () {
        var e;
        if (this.root && !m(this.root)) e = a(this.root);
        else {
          var n = m(this.root) ? this.root : t,
            o = n.documentElement,
            i = n.body;
          e = {
            top: 0,
            left: 0,
            right: o.clientWidth || i.clientWidth,
            width: o.clientWidth || i.clientWidth,
            bottom: o.clientHeight || i.clientHeight,
            height: o.clientHeight || i.clientHeight,
          };
        }
        return this._expandRectByRootMargin(e);
      }),
      (s.prototype._expandRectByRootMargin = function (t) {
        var e = this._rootMarginValues.map(function (e, n) {
            return "px" == e.unit
              ? e.value
              : (e.value * (n % 2 ? t.width : t.height)) / 100;
          }),
          n = {
            top: t.top - e[0],
            right: t.right + e[1],
            bottom: t.bottom + e[2],
            left: t.left - e[3],
          };
        return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
      }),
      (s.prototype._hasCrossedThreshold = function (t, e) {
        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
        if (n !== o)
          for (var i = 0; i < this.thresholds.length; i++) {
            var r = this.thresholds[i];
            if (r == n || r == o || r < n != r < o) return !0;
          }
      }),
      (s.prototype._rootIsInDom = function () {
        return !this.root || g(t, this.root);
      }),
      (s.prototype._rootContainsTarget = function (e) {
        var n = (this.root && (this.root.ownerDocument || this.root)) || t;
        return g(n, e) && (!this.root || n == e.ownerDocument);
      }),
      (s.prototype._registerInstance = function () {
        0 > e.indexOf(this) && e.push(this);
      }),
      (s.prototype._unregisterInstance = function () {
        var t = e.indexOf(this);
        -1 != t && e.splice(t, 1);
      }),
      (window.IntersectionObserver = s),
      (window.IntersectionObserverEntry = r);
  }
  function i(t) {
    try {
      return (t.defaultView && t.defaultView.frameElement) || null;
    } catch (e) {
      return null;
    }
  }
  function r(t) {
    (this.time = t.time),
      (this.target = t.target),
      (this.rootBounds = f(t.rootBounds)),
      (this.boundingClientRect = f(t.boundingClientRect)),
      (this.intersectionRect = f(t.intersectionRect || l())),
      (this.isIntersecting = !!t.intersectionRect);
    var e = this.boundingClientRect,
      n = e.width * e.height,
      o = this.intersectionRect,
      i = o.width * o.height;
    n
      ? (this.intersectionRatio = Number((i / n).toFixed(4)))
      : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
  }
  function s(t, e) {
    var n,
      o,
      i,
      r = e || {};
    if ("function" != typeof t) throw Error("callback must be a function");
    if (r.root && 1 != r.root.nodeType && 9 != r.root.nodeType)
      throw Error("root must be a Document or Element");
    (this._checkForIntersections =
      ((n = this._checkForIntersections.bind(this)),
      (o = this.THROTTLE_TIMEOUT),
      (i = null),
      function () {
        i ||
          (i = setTimeout(function () {
            n(), (i = null);
          }, o));
      })),
      (this._callback = t),
      (this._observationTargets = []),
      (this._queuedEntries = []),
      (this._rootMarginValues = this._parseRootMargin(r.rootMargin)),
      (this.thresholds = this._initThresholds(r.threshold)),
      (this.root = r.root || null),
      (this.rootMargin = this._rootMarginValues
        .map(function (t) {
          return t.value + t.unit;
        })
        .join(" ")),
      (this._monitoringDocuments = []),
      (this._monitoringUnsubscribes = []);
  }
  function h(t, e, n, o) {
    "function" == typeof t.addEventListener
      ? t.addEventListener(e, n, o || !1)
      : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
  }
  function u(t, e, n, o) {
    "function" == typeof t.removeEventListener
      ? t.removeEventListener(e, n, o || !1)
      : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
  }
  function c(t, e) {
    var n = Math.max(t.top, e.top),
      o = Math.min(t.bottom, e.bottom),
      i = Math.max(t.left, e.left),
      r = Math.min(t.right, e.right),
      s = r - i,
      h = o - n;
    return (
      (s >= 0 &&
        h >= 0 && {
          top: n,
          bottom: o,
          left: i,
          right: r,
          width: s,
          height: h,
        }) ||
      null
    );
  }
  function a(t) {
    var e;
    try {
      e = t.getBoundingClientRect();
    } catch (n) {}
    return e
      ? ((e.width && e.height) ||
          (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top,
          }),
        e)
      : l();
  }
  function l() {
    return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
  }
  function f(t) {
    return !t || "x" in t
      ? t
      : {
          top: t.top,
          y: t.top,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          right: t.right,
          width: t.width,
          height: t.height,
        };
  }
  function p(t, e) {
    var n = e.top - t.top,
      o = e.left - t.left;
    return {
      top: n,
      left: o,
      height: e.height,
      width: e.width,
      bottom: n + e.height,
      right: o + e.width,
    };
  }
  function g(t, e) {
    for (var n = e; n; ) {
      if (n == t) return !0;
      n = d(n);
    }
    return !1;
  }
  function d(e) {
    var n = e.parentNode;
    return 9 == e.nodeType && e != t
      ? i(e)
      : (n && n.assignedSlot && (n = n.assignedSlot.parentNode),
        n && 11 == n.nodeType && n.host)
      ? n.host
      : n;
  }
  function m(t) {
    return t && 9 === t.nodeType;
  }
})();
