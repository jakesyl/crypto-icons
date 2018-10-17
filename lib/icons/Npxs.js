"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNpxs = function SvgNpxs(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F5D100" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M15.972 4C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049z" }),
        _react2.default.createElement("path", { d: "M9.774 10.656l.88-.881 4.688 4.687-.881.88zm6.818 6.821l.881-.881 4.687 4.687-.881.88zm-1.495-1.502l.88-.88.888.886-.88.882zm1.508-1.475l4.687-4.686.88.881-4.686 4.687zm-6.797 6.788l4.686-4.686.881.88-4.686 4.687z" })
      )
    )
  );
};

exports.default = SvgNpxs;