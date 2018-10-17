"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgArdr = function SvgArdr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#3C87C7" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M15.883 17.19l1.769 2.312L12.5 23l3.383-5.81zM16 6l2.727 4.474L11.455 23H6L16 6zm0 9.842l3.636-2.684L26 23h-4.545L16 15.842z"
      })
    )
  );
};

exports.default = SvgArdr;