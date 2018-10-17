"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgWan = function SvgWan(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#136AAD" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M7 11.09l2.667 1.13v6.353L16 14.786l6.394 3.787V12.22L25 11.09v11.974l-9-5.315-9 5.315V11.09zm.303-.489L16 5.5l8.758 5.101-2.364.978L16 7.883l-6.333 3.696-2.364-.978zm1.879 11.821l1.97-1.13 4.878 2.825 4.818-2.825 2.03 1.13L16.03 26.5l-6.848-4.078z"
      })
    )
  );
};

exports.default = SvgWan;