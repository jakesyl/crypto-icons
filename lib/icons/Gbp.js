"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGbp = function SvgGbp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#bc3fe0", r: 16 }),
      _react2.default.createElement("path", {
        d: "M11.087 14.815v-2.332c0-3.676 2.219-5.983 6.075-5.983 2.932 0 4.57 1.242 5.838 2.84l-2.483 1.9c-.951-1.165-1.85-1.85-3.328-1.85-1.77 0-2.827 1.217-2.827 3.17v2.255h6.578v2.637h-6.578v4.335h8.585V24.5H9v-1.977l2.087-.609v-4.462H9v-2.637z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgGbp;