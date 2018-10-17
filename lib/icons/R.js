"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgR = function SvgR(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#771a4e", r: 16 }),
      _react2.default.createElement("path", {
        d: "M10.5 24.638l3.467-1.812V10.745l4.952 2.778-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503 4.209-2.175v-3.866L13.967 7 10.5 8.812z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgR;