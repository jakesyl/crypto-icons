"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNmc = function SvgNmc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#186C9D" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M19.261 23.5l.001-.002a1.8 1.8 0 0 0 .458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 0 0-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"
      })
    )
  );
};

exports.default = SvgNmc;