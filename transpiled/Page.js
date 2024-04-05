"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var logout = function logout() {
  localStorage.removeItem("token");
  window.location.reload();
};
var loginUser = function loginUser() {
  window.location.href = "../login.html";
};
var fetchBlogId = function fetchBlogId(param) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};
var CustomerLoader = function CustomerLoader(_ref) {
  var width = _ref.width,
    height = _ref.height;
  var loaderStyle = {
    border: "6px solid rgba(0, 0, 0, 0.1)",
    borderTop: "6px solid blue",
    borderRadius: "50%",
    width: width,
    height: height,
    animation: "spin 1s linear infinite",
    margin: "0 auto"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: loaderStyle
  });
};
var RelatedBlogs = function RelatedBlogs(_ref2) {
  var toggle = _ref2.toggle;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    blogs = _useState2[0],
    setBlogs = _useState2[1];
  var fetchBlogs = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, allBlogs;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs", {
              headers: {
                "Access-Control-Allow-Origin": "*"
              }
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            allBlogs = _context.sent;
            setBlogs(allBlogs.data);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching blogs:", _context.t0.message);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function fetchBlogs() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleClick = function handleClick(blog) {
    window.location.href = "/blog.html?blogId=".concat(blog._id);
  };
  useEffect(function () {
    fetchBlogs();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "main-right",
    id: "related-blogs"
  }, /*#__PURE__*/React.createElement("h3", null, "Related Blogs"), /*#__PURE__*/React.createElement("button", {
    onClick: toggle
  }, "Toggle"), blogs.length > 0 ? blogs.map(function (blog) {
    var _blog$content;
    var truncatedDescription = (blog === null || blog === void 0 || (_blog$content = blog.content) === null || _blog$content === void 0 ? void 0 : _blog$content.length) > 30 ? blog.content.substring(0, 25) + "... " : blog.content;
    return /*#__PURE__*/React.createElement("div", {
      "class": "related-blog",
      id: "redirect",
      key: blog._id,
      onClick: function onClick() {
        return handleClick(blog);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: blog.image,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "$", blog.title), /*#__PURE__*/React.createElement("p", null, "$", truncatedDescription)));
  }) : /*#__PURE__*/React.createElement(CustomerLoader, {
    width: 50,
    height: 50
  }));
};
var SingleBlog = function SingleBlog(_ref4) {
  var blog = _ref4.blog,
    currentUser = _ref4.currentUser,
    setIsCommentPopupOpen = _ref4.setIsCommentPopupOpen,
    setIsLoginPopupOpen = _ref4.setIsLoginPopupOpen;
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    comment = _useState4[0],
    setComment = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    blogComments = _useState6[0],
    setBlogComments = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var _useState9 = useState(blog.likes.length),
    _useState10 = _slicedToArray(_useState9, 2),
    likes = _useState10[0],
    setLikes = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isLoading = _useState12[0],
    setIsLoading = _useState12[1];
  var token = localStorage.getItem("token");
  var _useState13 = useState(blog === null || blog === void 0 ? void 0 : blog.comments),
    _useState14 = _slicedToArray(_useState13, 2),
    test = _useState14[0],
    setTest = _useState14[1];
  var _useState15 = useState(blog.likes.some(function (like) {
      return like.includes(currentUser === null || currentUser === void 0 ? void 0 : currentUser._id);
    })),
    _useState16 = _slicedToArray(_useState15, 2),
    hasLiked = _useState16[0],
    setHasLiked = _useState16[1];
  var createComment = function createComment() {
    var newComment = {
      author: currentUser === null || currentUser === void 0 ? void 0 : currentUser.username,
      content: comment
    };
    setBlogComments(function (state) {
      return [].concat(_toConsumableArray(state), [newComment]);
    });
  };
  var handleComment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(comment.trim() === "")) {
              _context2.next = 5;
              break;
            }
            setIsCommentPopupOpen(true);
            return _context2.abrupt("return");
          case 5:
            if (currentUser) {
              _context2.next = 8;
              break;
            }
            setIsLoginPopupOpen(true);
            return _context2.abrupt("return");
          case 8:
            _context2.prev = 8;
            setIsLoading(true);
            _context2.next = 12;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/".concat(blog._id, "/comments"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                content: comment
              })
            });
          case 12:
            response = _context2.sent;
            if (!response.ok) {
              _context2.next = 21;
              break;
            }
            _context2.next = 16;
            return response.json();
          case 16:
            data = _context2.sent;
            createComment();
            setComment("");
            _context2.next = 22;
            break;
          case 21:
            throw new Error("Failed to add comment");
          case 22:
            _context2.next = 27;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](8);
            console.error("Error adding comment:", _context2.t0);
          case 27:
            _context2.prev = 27;
            setIsLoading(false);
            return _context2.finish(27);
          case 30:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[8, 24, 27, 30]]);
    }));
    return function handleComment() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleLike = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/".concat(blog._id, "/likes"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context3.sent;
            console.log(response);
            if (!response.ok) {
              _context3.next = 10;
              break;
            }
            setHasLiked(function (state) {
              return !state;
            });
            setLikes(hasLiked ? likes - 1 : likes + 1);
            _context3.next = 11;
            break;
          case 10:
            throw new Error("Failed to like/unlike blog");
          case 11:
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.error("Error liking/unliking blog:", _context3.t0);
          case 16:
            _context3.prev = 16;
            setIsLoading(false);
            return _context3.finish(16);
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13, 16, 19]]);
    }));
    return function handleLike() {
      return _ref6.apply(this, arguments);
    };
  }();
  var likingFn = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            alert(hasLiked);
            !hasLiked, _readOnlyError("hasLiked");
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function likingFn() {
      return _ref7.apply(this, arguments);
    };
  }();
  useEffect(function () {
    setBlogComments(function (state) {
      return [].concat(_toConsumableArray(state), _toConsumableArray(blog === null || blog === void 0 ? void 0 : blog.comments));
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "main-left"
  }, !blog ? /*#__PURE__*/React.createElement(CustomerLoader, {
    width: 100,
    height: 100
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    id: "blog-title"
  }, blog.title), /*#__PURE__*/React.createElement("img", {
    src: blog.image,
    alt: "blog image",
    id: "soleil-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "like-holder",
    id: "like-holder"
  }, hasLiked ? /*#__PURE__*/React.createElement("img", {
    src: "./javascript/like.png",
    alt: "yes",
    className: "like",
    id: "track-like",
    onClick: function onClick() {
      return handleLike();
    },
    style: {
      cursor: "pointer"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: "./javascript/unlike.png",
    alt: "yes",
    className: "like",
    id: "track-like",
    onClick: function onClick() {
      return handleLike();
    },
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("span", {
    id: "likes"
  }, likes)), /*#__PURE__*/React.createElement("p", {
    id: "blog-description"
  }, blog.content)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Comments"), /*#__PURE__*/React.createElement("div", {
    className: "add-comment-cont"
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      width: "100%",
      padding: "10px 5px",
      borderRadius: "5px"
    },
    type: "text",
    placeholder: "Enter comments",
    id: "comment-content",
    value: comment,
    onChange: function onChange(e) {
      return setComment(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    id: "comment-btn",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      "float": "right",
      padding: "10px 5px",
      borderRadius: "5px",
      margin: "5px 0 20px 0"
    },
    onClick: handleComment
  }, isLoading ? /*#__PURE__*/React.createElement(CustomerLoader, {
    width: 20,
    height: 20
  }) : "Comment")), /*#__PURE__*/React.createElement("div", null, blogComments.slice(-5).reverse().map(function (b) {
    return /*#__PURE__*/React.createElement("div", {
      className: "comment",
      key: b._id
    }, /*#__PURE__*/React.createElement("img", {
      src: "./images/ssss.jpg",
      alt: "clasas"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-1"
    }, b.author), /*#__PURE__*/React.createElement("div", {
      className: "text-2"
    }, b.content)));
  })), /*#__PURE__*/React.createElement("p", null, "blog comment ", blogComments.length)));
};
var LoginPopup = function LoginPopup(_ref8) {
  var setIsLoginPopupOpen = _ref8.setIsLoginPopupOpen;
  var popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px"
  };
  var svgStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "10px"
  };
  var buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#ce3680",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none"
  };
  var onCancel = function onCancel() {
    // Handle cancel action
  };
  var onLogin = function onLogin() {
    // Handle login action
  };
  var handleClose = function handleClose(e) {
    if (e.target === e.currentTarget) {
      setIsLoginPopupOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999
    },
    onClick: function onClick(e) {
      return handleClose(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: popupStyle
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: svgStyle
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#ce3680",
    d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"
  })), "Login Required"), /*#__PURE__*/React.createElement("p", null, "To perform an action, please log in or sign up."), /*#__PURE__*/React.createElement("button", {
    style: buttonStyle,
    onClick: loginUser
  }, "Login"), /*#__PURE__*/React.createElement("button", {
    style: buttonStyle,
    onClick: function onClick() {
      return setIsLoginPopupOpen(false);
    }
  }, "Cancel")));
};
var CommentPopup = function CommentPopup(_ref9) {
  var setIsCommentPopupOpen = _ref9.setIsCommentPopupOpen;
  var popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px"
  };
  var svgStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "10px"
  };
  var buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#f00000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none"
  };
  var onCancel = function onCancel() {
    // Handle cancel action
  };
  var handleClose = function handleClose(e) {
    if (e.target === e.currentTarget) {
      setIsCommentPopupOpen(function (state) {
        return !state;
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999
    },
    onClick: function onClick(e) {
      return handleClose(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: popupStyle
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: svgStyle
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#f00000",
    d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"
  })), "Empty Comment"), /*#__PURE__*/React.createElement("p", null, "comment field must be empty try to fill in some content"), /*#__PURE__*/React.createElement("button", {
    style: buttonStyle,
    onClick: function onClick() {
      return setIsCommentPopupOpen(function (state) {
        return !state;
      });
    }
  }, "Close")));
};
var NavBar = function NavBar(_ref10) {
  var user = _ref10.user;
  var headerStyle = {
    textDecoration: "none",
    marginRight: "10px",
    fontSize: "25px"
  };
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("h3", null, "SoleilApp"), /*#__PURE__*/React.createElement("div", {
    className: "tail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: headerStyle
  }, "Home"), user ? /*#__PURE__*/React.createElement("div", {
    className: "log",
    id: "auth2",
    onClick: logout
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://up.yimg.com/ib/th?id=OIP.52T8HHBWh6b0dwrG6tSpVQHaFe&%3Bpid=Api&rs=1&c=1&qlt=95&w=156&h=115",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Logout")) : /*#__PURE__*/React.createElement("div", {
    id: "auth1",
    className: "login-btn",
    onClick: loginUser
  }, "Login")));
};
var Page = function Page() {
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    currentBlog = _useState18[0],
    setCurrentBlog = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    currentUser = _useState20[0],
    setCurrentUser = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isLiked = _useState22[0],
    setIsLiked = _useState22[1];
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    blogComments = _useState24[0],
    setBlogComments = _useState24[1];
  var _useState25 = useState(localStorage.getItem("token")),
    _useState26 = _slicedToArray(_useState25, 2),
    token = _useState26[0],
    setToken = _useState26[1];
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    commentContent = _useState28[0],
    setCommentContent = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    allBlogs = _useState30[0],
    setAllBlogs = _useState30[1];
  var _useState31 = useState(true),
    _useState32 = _slicedToArray(_useState31, 2),
    isLoading = _useState32[0],
    setIsLoading = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    isLoginPopupOpen = _useState34[0],
    setIsLoginPopupOpen = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isCommentPopupOpen = _useState36[0],
    setIsCommentPopupOpen = _useState36[1];
  var blogId = fetchBlogId("blogId");
  useEffect(function () {
    autoLoginUser();
    getCurrentBlog();
    fetchBlogs();
  }, []);
  var autoLoginUser = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/users/auth/verify-token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context5.sent;
            _context5.next = 6;
            return response.json();
          case 6:
            data = _context5.sent;
            setCurrentUser(data.data);
            console.log("after setting current user : ", data.data);
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.error("Error auto login user:", _context5.t0.message);
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function autoLoginUser() {
      return _ref11.apply(this, arguments);
    };
  }();
  var fetchBlogs = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _allBlogs;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs", {
              headers: {
                "Access-Control-Allow-Origin": "*"
              }
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            _allBlogs = _context6.sent;
            setAllBlogs(_allBlogs.data);
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.error("Error fetching blogs:", _context6.t0.message);
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 10]]);
    }));
    return function fetchBlogs() {
      return _ref12.apply(this, arguments);
    };
  }();
  var getCurrentBlog = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response, foundBlog;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/".concat(blogId), {
              method: "GET",
              headers: {
                "Access-Control-Allow-Origin": "*"
              }
            });
          case 3:
            response = _context7.sent;
            if (!response.ok) {
              _context7.next = 15;
              break;
            }
            setIsLoading(false);
            _context7.next = 8;
            return response.json();
          case 8:
            foundBlog = _context7.sent;
            setCurrentBlog(foundBlog.data);
            console.log("after getting blog ", foundBlog.data);
            setIsLiked(foundBlog.data.likes.includes(currentUser === null || currentUser === void 0 ? void 0 : currentUser._id));
            setBlogComments(foundBlog.data.comments);
            _context7.next = 16;
            break;
          case 15:
            alert("Couldn't find blog");
          case 16:
            _context7.next = 21;
            break;
          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](0);
            console.error("Error fetching current blog:", _context7.t0.message);
          case 21:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 18]]);
    }));
    return function getCurrentBlog() {
      return _ref13.apply(this, arguments);
    };
  }();
  var toggle = function toggle() {
    setIsOpen(function (state) {
      return !state;
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    user: currentUser
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100px"
    }
  }), /*#__PURE__*/React.createElement("main", {
    "class": "common testing"
  }, currentBlog ? /*#__PURE__*/React.createElement(SingleBlog, {
    blog: currentBlog,
    currentUser: currentUser,
    setIsCommentPopupOpen: setIsCommentPopupOpen,
    setIsLoginPopupOpen: setIsLoginPopupOpen
  }) : /*#__PURE__*/React.createElement(CustomerLoader, {
    width: 100,
    height: 100
  }), /*#__PURE__*/React.createElement(RelatedBlogs, {
    toggle: toggle
  })), isLoginPopupOpen && /*#__PURE__*/React.createElement(LoginPopup, {
    setIsLoginPopupOpen: setIsLoginPopupOpen
  }), isCommentPopupOpen && /*#__PURE__*/React.createElement(CommentPopup, {
    setIsCommentPopupOpen: setIsCommentPopupOpen
  }));
};
ReactDOM.render( /*#__PURE__*/React.createElement(Page, null), document.getElementById("body"));