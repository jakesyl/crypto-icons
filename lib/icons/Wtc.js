"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWtc = function SvgWtc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#8200FF", fillRule: "nonzero" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M18.414 13.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 0 1-.836-.492.662.662 0 0 1-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 0 1 .836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 0 1-.836-.492.662.662 0 0 1-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 0 1 .836.492c.014.053.02.108.02.163v2.45zm10.867-2.239l3.448-.844a.69.69 0 0 1 .836.491.653.653 0 0 1 .021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 0 1-.836-.491.662.662 0 0 1-.02-.164V11.54c0-.31.215-.58.522-.655z"
      }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 0 0 1.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 0 1-.837-.491.662.662 0 0 1-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 0 1-.522.656l-3.449.844a.69.69 0 0 1-.836-.491.662.662 0 0 1-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z",
        opacity: 0.504
      })
    )
  );
};

exports.default = SvgWtc;