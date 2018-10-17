"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDock = function SvgDock(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#786DBC" }),
      _react2.default.createElement("path", {
        d: "M15.931 10.771l-1.629-1.633a1.144 1.144 0 0 1 1.582-1.654l.038.038 3.636 3.636c.447.447.447 1.17 0 1.617l-3.64 3.636a1.143 1.143 0 0 1-1.616-1.616l1.707-1.707a5.695 5.695 0 1 0 4.705 5.63V6.142a1.143 1.143 0 0 1 2.286 0v12.729a8 8 0 1 1-7.07-8.104l.001.004z",
        fill: "#FFF"
      })
    )
  );
};

exports.default = SvgDock;