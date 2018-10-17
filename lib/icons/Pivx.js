"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPivx = function SvgPivx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#5E4778", fillRule: "nonzero" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        stroke: "#FFF",
        d: "M10.5 12.241h6.153v1.255H10.5v-1.255zm12 .59c0 2.974-2.11 4.895-5.028 4.895H13.43V24h-1.6v-7.693h5.425c2.175 0 3.595-1.292 3.595-3.476 0-2.158-1.42-3.413-3.57-3.413h-1.688l-4.043.013V8h5.91c2.93 0 5.04 1.857 5.04 4.831h.001z"
      })
    )
  );
};

exports.default = SvgPivx;