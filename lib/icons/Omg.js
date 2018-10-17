"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgOmg = function SvgOmg(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#1A53F0" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M11.856 17.29a4.353 4.353 0 0 0-4.35 4.355A4.353 4.353 0 0 0 11.855 26a4.353 4.353 0 0 0 4.352-4.355 4.353 4.353 0 0 0-4.351-4.355zm0 7.393a3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.037 3.035 3.035 0 0 1 3.034 3.037 3.04 3.04 0 0 1-3.034 3.036zM21.15 8a4.353 4.353 0 0 0-4.351 4.355 4.353 4.353 0 0 0 4.35 4.355 4.353 4.353 0 0 0 4.352-4.355A4.353 4.353 0 0 0 21.149 8zm0 7.393a3.035 3.035 0 0 1-3.034-3.036A3.035 3.035 0 0 1 21.15 9.32a3.035 3.035 0 0 1 3.033 3.037 3.04 3.04 0 0 1-3.033 3.036zM11.856 8a4.358 4.358 0 0 0-1.696 8.37 4.351 4.351 0 0 0 5.288-1.556 4.36 4.36 0 0 0-.475-5.497h1.233V8h-4.35zm3.034 4.355a3.035 3.035 0 0 1-3.034 3.036 3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.036 3.04 3.04 0 0 1 3.035 3.036h-.001z"
      })
    )
  );
};

exports.default = SvgOmg;