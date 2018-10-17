"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgOmni = function SvgOmni(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#1c347a", r: 16 }),
      _react2.default.createElement("path", {
        d: "M10.065 6.888a10.93 10.93 0 0 0-3.19 3.196V6.888zm15.004 3.11a10.93 10.93 0 0 0-3.134-3.11h3.134zm-3.088 15.084a10.933 10.933 0 0 0 3.088-3.08v3.08zM6.875 21.916a10.93 10.93 0 0 0 3.144 3.166H6.875zM26 16c0 5.514-4.486 10-10 10S6 21.514 6 16 10.486 6 16 6s10 4.486 10 10zm-10 7.292c4.02 0 7.292-3.271 7.292-7.292 0-4.02-3.271-7.292-7.292-7.292-4.02 0-7.292 3.271-7.292 7.292 0 4.02 3.271 7.292 7.292 7.292z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgOmni;