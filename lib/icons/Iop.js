"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIop = function SvgIop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#4cb8d1", fillRule: "nonzero", r: 16 }),
      _react2.default.createElement("path", {
        d: "M10.123 8.283l.398-.717A1.09 1.09 0 0 1 11.473 7h8.955c.371 0 .716.192.917.508h4.058v7.14l.449.79a1.14 1.14 0 0 1 0 1.124l-.449.79v3.072l-3.437 2.978-.592 1.041a1.09 1.09 0 0 1-.946.557h-8.955a1.09 1.09 0 0 1-.952-.566l-.025-.044H6.498v-7.2l-.355-.639a1.14 1.14 0 0 1 0-1.104l.355-.639v-3.233zm1.35-.164L7.095 16l4.378 7.881h8.955L24.905 16l-4.477-7.881zm.405.712h8.149L24.1 16l-4.073 7.17h-8.149L7.895 16zm1.883 3.05l-2.189 4.068 2.19 4.068h4.676l2.189-4.068-2.19-4.068z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgIop;