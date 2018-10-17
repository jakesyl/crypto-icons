"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDcr = function SvgDcr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#2ED6A1" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M14.856 17.62h4.42a2.987 2.987 0 0 0 2.978-2.996 2.987 2.987 0 0 0-2.978-2.995H17.87L14.856 9h4.42a5.602 5.602 0 0 1 5.488 4.545 5.632 5.632 0 0 1-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 0 0-2.978 2.994 2.987 2.987 0 0 0 2.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 0 1-5.488-4.545 5.632 5.632 0 0 1 3.379-6.29L7.002 9h3.991l6.02 5.26z"
      })
    )
  );
};

exports.default = SvgDcr;