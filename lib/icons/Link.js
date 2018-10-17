"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgLink = function SvgLink(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#01a6fb", r: 16 }),
      _react2.default.createElement("path", {
        d: "M15 18.618V21a1 1 0 0 0 2 0v-2.382a1.5 1.5 0 1 0-2 0zM10 14v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm12 0h-9.5v-1.9c0-1.988 1.567-3.6 3.5-3.6s3.5 1.612 3.5 3.6V14H16z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgLink;