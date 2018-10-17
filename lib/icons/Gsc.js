"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGsc = function SvgGsc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#FF0060" }),
      _react2.default.createElement("path", {
        d: "M25.07 12.047h-9.148a3.876 3.876 0 1 0 3.628 5.224h-3.628a1.022 1.022 0 0 1-1.023-1.023v-.124a1.022 1.022 0 0 1 1.023-1.023h6.047c.044.282.065.567.062.852a6.109 6.109 0 1 1-6.109-6.139l.187-.031c.039.018.08.028.124.031h5.426c2.961 0 4.17-1.581 4.17-3.814h-9.907C10.45 6 6.01 10.433 6 15.907c-.008 5.474 4.418 9.92 9.892 9.938 5.474.017 9.927-4.402 9.953-9.876v-3.132a.775.775 0 0 0-.775-.79z",
        fill: "#FFF"
      })
    )
  );
};

exports.default = SvgGsc;