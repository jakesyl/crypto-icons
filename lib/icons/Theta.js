"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgTheta = function SvgTheta(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#2ab8e6", r: 16 }),
      _react2.default.createElement("path", {
        d: "M10.96 6h10.08l.96.993v18.014l-.96.993H10.96l-.96-.993V6.993zm.96 18.013h8.16V7.987h-8.16zm7.134-5.17h-2.087v2.263h-1.884v-2.262h-2.087v-1.949h6.058zm0-5.582v1.948h-6.058v-1.948h2.087v-2.263h1.884v2.263z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgTheta;