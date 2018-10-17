"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGnt = function SvgGnt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#001D57" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M20.499 5.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 0 1-1.258 3.131 4.183 4.183 0 0 1-2.217 1.226v2.039a4.273 4.273 0 0 1 2.213 1.22 4.451 4.451 0 0 1 1.262 3.136 4.451 4.451 0 0 1-1.262 3.135 4.262 4.262 0 0 1-3.07 1.302 4.24 4.24 0 0 1-3.07-1.302 4.474 4.474 0 0 1-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 0 1 2.217-1.225v-2.04a4.274 4.274 0 0 1-2.213-1.22A4.474 4.474 0 0 1 11.5 11.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 0 1 3.07-1.303c.86 0 1.687.262 2.395.749L20.5 5.288zm-4.667 14.057a2.53 2.53 0 0 0-1.857.79 2.751 2.751 0 0 0-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 0 0 1.857.79 2.53 2.53 0 0 0 1.856-.79 2.751 2.751 0 0 0 .775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 0 0-1.853-.787zm1.853-6.09a2.754 2.754 0 0 0 .778-1.931 2.7 2.7 0 0 0-.775-1.928 2.578 2.578 0 0 0-1.856-.79 2.53 2.53 0 0 0-1.857.79 2.751 2.751 0 0 0-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 0 0 1.857.79c.711 0 1.367-.276 1.853-.786z"
      })
    )
  );
};

exports.default = SvgGnt;