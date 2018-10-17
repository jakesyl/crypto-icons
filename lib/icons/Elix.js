"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgElix = function SvgElix(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#00aded", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff" },
        _react2.default.createElement("path", { d: "M10.097 23.603l.002-.004 3.188-7.616-3.19-7.615 5.885 7.615-5.881 7.615zm11.776 0l-.004-.005-5.881-7.615 5.885-7.615-3.19 7.615 3.188 7.616z" }),
        _react2.default.createElement("path", {
          d: "M15.985 15.984v5.306l-5.89 2.31 5.89-7.62v-5.306l5.89-2.31z",
          fillOpacity: 0.8
        }),
        _react2.default.createElement("path", {
          d: "M15.985 21.29v4.651l-5.89-2.344 5.89-2.315v-5.298l-5.89-7.62 5.89 2.31V6.023l5.89 2.343-5.89 2.315v5.299l5.89 7.62z",
          fillOpacity: 0.5
        }),
        _react2.default.createElement("path", {
          d: "M10.095 8.366l5.89-2.343v4.658zm11.78 15.231l-5.89 2.344v-4.659z",
          fillOpacity: 0.145
        })
      )
    )
  );
};

exports.default = SvgElix;