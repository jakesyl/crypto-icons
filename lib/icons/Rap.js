"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgRap = function SvgRap(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#000" }),
      _react2.default.createElement("path", {
        d: "M12.478 6.435v19.478H9V6h3.478v.435zM14.957 6h1.956c4.044 0 6.74 2.565 6.74 6.217 0 2.957-1.61 5.218-4.523 5.957l5.087 7.739H20.13L13.174 15.13h3.348c2.217 0 3.608-1 3.608-2.956 0-1.957-1.39-2.957-3.608-2.957H15V6h-.043z",
        fill: "#FFF"
      })
    )
  );
};

exports.default = SvgRap;