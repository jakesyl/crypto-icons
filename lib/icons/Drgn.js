"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDrgn = function SvgDrgn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#C91111" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", {
          opacity: 0.6,
          d: "M9.4 20.78h2.818l-.072-7.327L22.64 26.776l-.033-15.732h-2.774l.072 7.401L9.404 5.087z"
        }),
        _react2.default.createElement("path", { d: "M9.4 9.953l.016-4.851 13.183 16.752.055 4.942z" })
      )
    )
  );
};

exports.default = SvgDrgn;