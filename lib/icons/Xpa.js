"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXpa = function SvgXpa(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#4FA784" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M25.575 12.846l-8.11-2.324-2.774 4.725-3.222-3.737 1.46-.188 1.505 1.768 1.67-2.959-7.35-2.107a.586.586 0 0 0-.736.7L11.274 21.8l3.497-5.888 3.222 3.737-1.46.188-1.504-1.768-3.31 5.517.49 1.97a.59.59 0 0 0 .98.28l12.63-12.01a.58.58 0 0 0-.244-.98z"
      })
    )
  );
};

exports.default = SvgXpa;