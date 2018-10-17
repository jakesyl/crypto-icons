"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPpt = function SvgPpt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#152743" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M16.049 8.316c-1.316 0-2.383-.733-2.383-1.638 0-.905 1.067-1.638 2.383-1.638s2.382.733 2.382 1.638c0 .905-1.066 1.638-2.382 1.638zM14.816 26.6V9.104h5.312c.197 0 .336.147.336.344v9.708c0 .196-.14.364-.336.364H17.2v7.08c0 .197-.15.376-.347.376h-1.668a.384.384 0 0 1-.369-.375zm-.896-7.081h-2.01a.378.378 0 0 1-.374-.364V9.448c0-.197.177-.344.373-.344h2.011V19.52z"
      })
    )
  );
};

exports.default = SvgPpt;