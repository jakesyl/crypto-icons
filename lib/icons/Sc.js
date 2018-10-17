"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgSc = function SvgSc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#20EE82" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M16 7.5a8.5 8.5 0 0 1 8.5 8.5v8.5H16a8.5 8.5 0 1 1 0-17zm5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 0 0-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074H21.1z"
      })
    )
  );
};

exports.default = SvgSc;