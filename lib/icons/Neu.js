"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNeu = function SvgNeu(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#B3BA00" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M13.13 10.664l-.13.079L19 20v-9.265L16.004 9zM13 21.165L16.136 23 19 21.328 13 12zm-3-8.809v7.288L12 21V11zM20 21l2-1.387v-7.226L20 11z" }),
        _react2.default.createElement("path", { d: "M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838z" })
      )
    )
  );
};

exports.default = SvgNeu;