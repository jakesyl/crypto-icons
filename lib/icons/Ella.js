"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgElla = function SvgElla(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#396a28", r: 16 }),
      _react2.default.createElement("path", {
        d: "M18.073 13.212L16 11.14l-2.087 2.086-2.164-2.164L16 5l4.28 6.005zm-4.883.738L11.14 16l2.072 2.073-2.156 2.156L5 16l5.99-4.25zm5.584 4.137L20.86 16l-2.064-2.064 2.226-2.226L27 16l-6.044 4.269zm-4.838.71L16 20.86l2.05-2.05 2.182 2.183L16 27l-4.204-6.064zM16 12.527L19.472 16 16 19.472 12.528 16z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgElla;