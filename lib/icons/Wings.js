"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWings = function SvgWings(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#0dc9f7", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff", fillRule: "nonzero" },
        _react2.default.createElement("path", {
          d: "M18.904 15.739l-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z",
          fillOpacity: 0.305
        }),
        _react2.default.createElement("path", {
          d: "M8.27 23.993L24.586 11.33 26 14.476l-1.855-.513-.065 3.264z",
          fillOpacity: 0.7
        }),
        _react2.default.createElement("path", { d: "M22.796 17.78l-4.747-8.161L6 9l9.183 2.461 2.49 8.49z" })
      )
    )
  );
};

exports.default = SvgWings;