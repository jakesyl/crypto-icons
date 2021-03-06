"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBcn = function SvgBcn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 15.999, cy: 15.999, r: 15.999, fill: "#F04086" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M23.437 16.754c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 0 0 .862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 0 0-.972-2.594zm-5.793-2.314H14.05v-4.296h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"
      })
    )
  );
};

exports.default = SvgBcn;