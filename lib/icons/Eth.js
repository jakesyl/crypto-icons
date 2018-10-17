"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEth = function SvgEth(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#627EEA" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF", fillRule: "nonzero" },
        _react2.default.createElement("path", { fillOpacity: 0.602, d: "M16.498 4v8.87l7.497 3.35z" }),
        _react2.default.createElement("path", { d: "M16.498 4L9 16.22l7.498-3.35z" }),
        _react2.default.createElement("path", { fillOpacity: 0.602, d: "M16.498 21.968v6.027L24 17.616z" }),
        _react2.default.createElement("path", { d: "M16.498 27.995v-6.028L9 17.616z" }),
        _react2.default.createElement("path", { fillOpacity: 0.2, d: "M16.498 20.573l7.497-4.353-7.497-3.348z" }),
        _react2.default.createElement("path", { fillOpacity: 0.602, d: "M9 16.22l7.498 4.353v-7.701z" })
      )
    )
  );
};

exports.default = SvgEth;