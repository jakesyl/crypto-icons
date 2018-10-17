"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIotx = function SvgIotx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#00D4D5" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M16.519 5v5.457l4.738-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.9, d: "M21.257 7.732v5.457l4.737-2.732z" }),
        _react2.default.createElement("path", {
          opacity: 0.8,
          d: "M16.519 10.457v5.457l4.738-2.725zm4.738 2.733v5.456l4.737-2.732z"
        }),
        _react2.default.createElement("path", { opacity: 0.8, d: "M16.519 15.914v5.457l4.738-2.725z" }),
        _react2.default.createElement("path", { d: "M21.257 18.646v5.457l4.737-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.4, d: "M4.273 10.273v5.457l4.738-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.2, d: "M10.25 12.302v5.457l4.73-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.3, d: "M6.738 15.753v5.457l4.737-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.9, d: "M9.86 19.871v5.457l4.73-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.7, d: "M16.48 22.22v5.458l4.73-2.733z" }),
        _react2.default.createElement("path", { opacity: 0.9, d: "M11.039 9.607v5.458l4.73-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.8, d: "M16.519 5v5.457l-4.738-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.6, d: "M11.039 7.32v5.456L6.3 10.044z" }),
        _react2.default.createElement("path", { opacity: 0.6, d: "M15.777 10.02v5.458l-4.738-2.733z" }),
        _react2.default.createElement("path", { opacity: 0.95, d: "M10.228 12.302v5.457L5.49 15.034z" }),
        _react2.default.createElement("path", { opacity: 0.6, d: "M16.519 15.914v5.457l-4.73-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.55, d: "M6.738 17.185v5.457L2 19.909z" }),
        _react2.default.createElement("path", { d: "M25.994 10.457v5.457l-4.737-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.95, d: "M21.257 13.19v5.456l-4.738-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.9, d: "M25.994 15.914v5.457l-4.737-2.725z" }),
        _react2.default.createElement("path", { opacity: 0.7, d: "M21.257 18.646v5.457l-4.738-2.732z" }),
        _react2.default.createElement("path", { opacity: 0.4, d: "M15.47 20.92v5.457l-4.737-2.725z" }),
        _react2.default.createElement("path", { d: "M21.257 7.732v5.457l-4.738-2.732z" })
      )
    )
  );
};

exports.default = SvgIotx;