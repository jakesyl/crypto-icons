"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEla = function SvgEla(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#3FBADF" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF", fillRule: "nonzero" },
        _react2.default.createElement("path", {
          fillOpacity: 0.4,
          d: "M11 22.119l5-2.82v5.635l-5-2.815zm0-9l5-2.82v5.635l-5-2.815z"
        }),
        _react2.default.createElement("path", {
          fillOpacity: 0.7,
          d: "M26 19.23l-5 2.886V16.43l5 2.8zm0-9l-5 2.886V7.43l5 2.8z"
        }),
        _react2.default.createElement("path", {
          fillOpacity: 0.8,
          d: "M11 22.116v-5.683l5 2.87-5 2.813zm0-9V7.433l5 2.87-5 2.813z"
        }),
        _react2.default.createElement("path", { d: "M21 22.116l-5-2.812 5-2.874v5.686zm0-9l-5-2.812 5-2.874v5.686z" }),
        _react2.default.createElement("path", {
          fillOpacity: 0.6,
          d: "M21 22.116l-5 2.818v-5.63l5 2.812zm0-9l-5 2.818v-5.63l5 2.812z"
        }),
        _react2.default.createElement("path", {
          fillOpacity: 0.5,
          d: "M11 16.433v5.683l-5-2.885 5-2.798zm0-9v5.683l-5-2.885 5-2.798z"
        })
      )
    )
  );
};

exports.default = SvgEla;