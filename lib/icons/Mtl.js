"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgMtl = function SvgMtl(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#1E1F25" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M8 9h1v14H8V9zm5 3h1v9h-1v-9zm5 2h1v5h-1v-5zm5-5h1v14h-1V9z"
      })
    )
  );
};

exports.default = SvgMtl;