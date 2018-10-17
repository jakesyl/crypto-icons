"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXvg = function SvgXvg(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#00CBFF" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M9.61 10.335L8 7h16l-1.592 3.335H24L15.951 27 8 10.335h1.61zm0 0l6.438 13.33 6.36-13.33H9.611z"
      }),
      _react2.default.createElement("path", { fill: "#FFF", opacity: 0.504, d: "M16 24.5L8 7h15.999z" })
    )
  );
};

exports.default = SvgXvg;