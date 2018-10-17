"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgZel = function SvgZel(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#183C87", fillRule: "nonzero" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M5 15.615l4.495-2.538 4.494 2.538v4.847L9.495 23 5 20.462v-4.847zm13.01 0l4.495-2.538L27 15.615v4.847L22.505 23l-4.494-2.538v-4.847zm-.472 4.21l-1.577.867-1.499-.823V15.23l-4.1-2.316V11.23L15.961 8l5.598 3.23v1.73l-4.021 2.27v4.596z"
      })
    )
  );
};

exports.default = SvgZel;