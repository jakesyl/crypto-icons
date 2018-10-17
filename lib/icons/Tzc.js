"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgTzc = function SvgTzc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#374851", r: 16 }),
      _react2.default.createElement("path", {
        d: "M17.7 15.4v7.598c.204-.05.404-.107.6-.173v2.91a10.029 10.029 0 0 1-4 .121V15.4h-3.5v-2.8h10.4v2.8zm1.4 10.11V22.5a7.2 7.2 0 1 0-6.2 0v3.01C8.895 24.205 6 20.44 6 16c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.44-2.895 8.205-6.9 9.51z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgTzc;