"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBela = function SvgBela(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#13a0f6", r: 16 }),
      _react2.default.createElement("path", {
        d: "M8.297 11.568A2.422 2.422 0 0 1 7 9.422a2.416 2.416 0 1 1 4.553-1.134 8.891 8.891 0 0 1 4.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 25 16.054 25s-8.946-4.013-8.946-8.964a8.94 8.94 0 0 1 1.189-4.468zm7.757 8.878c2.43 0 4.4-1.974 4.4-4.41s-1.97-4.41-4.4-4.41-4.4 1.975-4.4 4.41 1.97 4.41 4.4 4.41z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgBela;