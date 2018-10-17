"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBlock = function SvgBlock(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#101341", fillRule: "nonzero" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M11.022 7H21.25l5.25 9-5.25 9H10.931l5.16-9-5.07-9zm5.43 3.166L19.803 16l-3.35 5.834h2.988L22.789 16l-3.35-5.834h-2.986z" }),
        _react2.default.createElement("path", {
          opacity: 0.5,
          d: "M12.113 11.026L9.211 16l2.876 4.93-1.839 3.209L5.5 16l4.789-8.211z"
        })
      )
    )
  );
};

exports.default = SvgBlock;