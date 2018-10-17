"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEtc = function SvgEtc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#328332" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", {
          fillRule: "nonzero",
          d: "M15.989 16.553l-6.721-.577 6.72-3.802v4.379zm0 4.46v6.94C13.652 24.315 11.076 20.311 9 17.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L9 14.845 15.989 4v6.945z"
        }),
        _react2.default.createElement("path", {
          fillOpacity: 0.601,
          fillRule: "nonzero",
          d: "M22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V4l6.988 10.845-6.988-3.9z"
        }),
        _react2.default.createElement("path", { opacity: 0.2, d: "M15.989 16.553l6.72-.577-6.72 3.775z" }),
        _react2.default.createElement("path", { opacity: 0.603, d: "M15.988 16.553l-6.721-.577 6.721 3.775z" })
      )
    )
  );
};

exports.default = SvgEtc;