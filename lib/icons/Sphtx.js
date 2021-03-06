"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgSphtx = function SvgSphtx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#00b098", r: 16 }),
      _react2.default.createElement("path", {
        d: "M6 12.391v-.356h8.417v.356zm0-1.035V11h8.417v.356zm3.55 10.64v-8.893h.338v8.893zm.98 0v-8.893h.337v8.893zm15.232-.728l-3.798-4.013.238-.251L26 21.016zM16.519 11l3.798 4.013-.238.251-3.798-4.012zm8.55 11l-3.798-4.013.238-.252 3.798 4.013zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 22l-.238-.252 4.275-4.516.238-.252zm-.454-.984L25.07 11l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgSphtx;