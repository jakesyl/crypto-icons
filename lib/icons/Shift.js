"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgShift = function SvgShift(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#964B9C" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", {
          opacity: 0.6,
          d: "M20.507 16.406l-4.472 4.471h8.942l-4.47-4.471z"
        }),
        _react2.default.createElement("path", { opacity: 0.7, d: "M11.528 16.41L16 11.94H7.057l4.472 4.471z" }),
        _react2.default.createElement("path", {
          opacity: 0.4,
          d: "M16.035 20.878l4.46-4.46-4.48-4.482-8.943 8.942 8.942 8.943 8.943-8.943h-.002z"
        }),
        _react2.default.createElement("path", {
          opacity: 0.8,
          d: "M16.056 3l-8.937 8.937H16l-4.446 4.446 4.502 4.501 8.942-8.942z"
        })
      )
    )
  );
};

exports.default = SvgShift;