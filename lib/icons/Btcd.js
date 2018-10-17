"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBtcd = function SvgBtcd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F60" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M17.078 19.356c5.08-1.567 3.267-6.834 0-7.034.83 0 1.508-2.377 1.508-5.322 7.976.567 11.723 13.711-.24 17.823.077-1.067-.36-4.045-1.267-5.467zM6 17.8v-5.467h.01c2.885-.011 5.212-2.4 5.202-5.322h5.56C16.773 12.977 11.955 17.8 6 17.8zm7.287-.99c3.3 2.712 3.486 7.279 3.486 8.19h-5.561c0-3.022-1.967-5.467-4.403-5.467 4.13-.666 4.971-1.366 6.478-2.722z"
      })
    )
  );
};

exports.default = SvgBtcd;