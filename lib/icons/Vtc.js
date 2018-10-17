"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVtc = function SvgVtc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#048657" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M2.632 16.57l1.95-2.221h6.938l4.263 5.438L26.938 4.334a14.205 14.205 0 0 1 1.86 2.04 15.002 15.002 0 0 1 1.496 2.446L16.599 27.763c-.259.272-.531.408-.816.408-.286 0-.573-.136-.862-.408L6.26 16.569H2.632z"
      })
    )
  );
};

exports.default = SvgVtc;