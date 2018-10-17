"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCix = function SvgCix(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#0576B4" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M24.668 18.863l-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 19.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905l-3.06 1.611V8.644h3.06v9.314zm8.653.481l-3.06 1.7V8.644h3.06v9.795z" }),
        _react2.default.createElement("path", {
          d: "M18.883 20.843l-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607l-3.06 1.612V11.312h3.06v8.924z",
          opacity: 0.5
        })
      )
    )
  );
};

exports.default = SvgCix;