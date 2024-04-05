"use strict";

// declare var React: any;

// const Test = require("./Test.jsx");

var headerStyle = {
  textDecoration: "none",
  marginRight: "10px",
  fontSize: "25px"
};
var NavBar = function NavBar() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "SoleilApp"), /*#__PURE__*/React.createElement("div", {
    className: "tail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: headerStyle
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    className: "log",
    id: "auth2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://up.yimg.com/ib/th?id=OIP.52T8HHBWh6b0dwrG6tSpVQHaFe&%3Bpid=Api&rs=1&c=1&qlt=95&w=156&h=115",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Logout")), /*#__PURE__*/React.createElement("div", {
    id: "auth1",
    className: "login-btn"
  }, "Login")));
};
ReactDOM.render( /*#__PURE__*/React.createElement(NavBar, null), document.getElementById("navbar"));