"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgUtk = function SvgUtk(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#30367a", r: 16 }),
      _react2.default.createElement("path", {
        d: "M14.353 22.298V9.028H10.5V6h11v3.028h-3.853v13.27zM13.466 26c-1.989 0-2.93-.956-2.93-2.978V9.896h2.894v12.992c0 .32.105.426.419.426h4.339c.314 0 .42-.107.42-.426V9.896H21.5v13.126c0 2.022-.942 2.978-2.93 2.978z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgUtk;