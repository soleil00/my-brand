"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginPopup = function LoginPopup() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "soleil-overlay ov2",
    id: "soleil-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "popup"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    "class": "svg-cont"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "class": "svg",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#ce3680",
    d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"
  })), "Login Required"), /*#__PURE__*/_react["default"].createElement("p", null, "To ", /*#__PURE__*/_react["default"].createElement("span", {
    id: "acts"
  }), ", please log in or sign up."), /*#__PURE__*/_react["default"].createElement("button", {
    "class": "btn btn-login",
    onclick: "login()"
  }, "Login"), /*#__PURE__*/_react["default"].createElement("button", {
    "class": "btn btn-cancel",
    onclick: "cancel()"
  }, "Cancel")));
};
var _default = exports["default"] = LoginPopup;