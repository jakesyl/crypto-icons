"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgMod = function SvgMod(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#09547d", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff" },
        _react2.default.createElement("path", { d: "M22.985 21.007V8.08l-6.312 6.449z", opacity: 0.5 }),
        _react2.default.createElement("path", { d: "M9 7l.304.312 8.467 8.675L9 24.985z" })
      )
    )
  );
};

exports.default = SvgMod;