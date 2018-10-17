"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAuto = function SvgAuto(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#FAB431" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M24.5 19.267l-4.185-2.511.48-1.989 1.787 1.055V12.19l-5.74-3.422v7.9l-1.365.755 7.538 4.47L16 26l-8.5-4.978v-9.955L16 6l8.5 5.067v8.2zM9.418 12.19v6.478l5.518-3.2V8.9l-5.518 3.289zm4.097 6.344l-3.138 1.919L16 23.745l3.175-1.86-5.66-3.352z"
      })
    )
  );
};

exports.default = SvgAuto;