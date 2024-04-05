"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CommentPopup = function CommentPopup() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "soleil-overlay",
    id: "comment-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "popup"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    "class": "svg-cont"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "class": "svg",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#f00000",
    d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"
  })), "Empty Comment"), /*#__PURE__*/_react["default"].createElement("p", null, "commment field must be empty try to fill in som conents"), /*#__PURE__*/_react["default"].createElement("button", {
    "class": "btn btn-cancel",
    onclick: "cancel1()"
  }, "Close")));
};
var _default = exports["default"] = CommentPopup;