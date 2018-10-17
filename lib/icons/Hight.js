"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgHight = function SvgHight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#117FC0" }),
      _react2.default.createElement("path", {
        d: "M26.496 10.332l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0 0 17.96-14.94l.003-.007zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 0 0-17.96 14.94l8.452-13.93h5.047z",
        fill: "#FFF"
      })
    )
  );
};

exports.default = SvgHight;