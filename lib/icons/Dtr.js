"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDtr = function SvgDtr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#121747", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff", fillRule: "nonzero" },
        _react2.default.createElement("path", { d: "M18.032 22.87c0 1.145-.92 2.074-2.056 2.074s-2.055-.929-2.055-2.075V9.08c0-1.145.92-2.074 2.055-2.074s2.056.929 2.056 2.075zm-6.92.005a2.072 2.072 0 0 1-1.015 1.82 2.032 2.032 0 0 1-2.068 0 2.072 2.072 0 0 1-1.014-1.82v-3.1a2.072 2.072 0 0 1 1.014-1.82 2.032 2.032 0 0 1 2.068 0 2.072 2.072 0 0 1 1.014 1.82z" }),
        _react2.default.createElement("path", {
          d: "M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z",
          opacity: 0.5
        })
      )
    )
  );
};

exports.default = SvgDtr;