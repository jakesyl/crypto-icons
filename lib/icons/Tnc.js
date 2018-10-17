"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgTnc = function SvgTnc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#ff439b", fillRule: "nonzero", r: 16 }),
      _react2.default.createElement("path", {
        d: "M18.226 13.804l5.633 9.696H8.245l1.871-3.103 8.412.002-2.132-3.48zm-5.75 2.256l5.727-9.52L26 19.667h-3.744l-4.12-7.16-2.001 3.554zm4.885 3.619L6 19.625 13.807 6.5l1.86 3.146-4.303 6.918h4.167z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgTnc;