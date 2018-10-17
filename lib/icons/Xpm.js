"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXpm = function SvgXpm(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#ffd81b", r: 16 }),
      _react2.default.createElement("path", {
        d: "M24 15.562c0 4.423-3.426 5.927-6.31 5.927v1.153h2.225v1.562h-2.224V26h-3.48v-1.796h-2.127v-1.562h2.123v-1.168c-.923 0-6.207-.219-6.207-6.233V8h3.455v7.518c0 3.139 2.766 3.11 2.766 3.11V8h3.47v10.628s2.854.16 2.854-3.153V8H24z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgXpm;