"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgFuel = function SvgFuel(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#4096d0", r: 16 }),
      _react2.default.createElement("path", {
        d: "M25.532 10h-6.495l-1.926 4.83h-6.074v-2.487h6.074L18 10H8.802a.43.43 0 0 0-.432.427v4.402H6.89L6 17.171h2.37v4.397c0 .238.196.432.438.432h4.451l.889-2.341h-3.111V17.17h5.037L14.148 22h2.963l2.074-4.83h6.38c.24 0 .435-.192.435-.429v-6.28a.465.465 0 0 0-.468-.461zm-2.05 4.46c0 .204-.167.37-.374.37h-3.034l1.037-2.486h1.995a.373.373 0 0 1 .377.368z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgFuel;