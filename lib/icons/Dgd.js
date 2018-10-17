"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDgd = function SvgDgd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F4D029" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M12.5 11v3h-7v-3h7zm1 0h2v10h-10v-6h8v-4zm-6 6v2h6v-2h-6zm19-4h-8v6h6v-2h-4v-2h6v6h-10V11h10v2z"
      })
    )
  );
};

exports.default = SvgDgd;