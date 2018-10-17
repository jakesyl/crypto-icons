"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgJpy = function SvgJpy(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#eac749", r: 16 }),
      _react2.default.createElement("path", {
        d: "M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgJpy;