"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPasc = function SvgPasc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F7931E" }),
      _react2.default.createElement("path", {
        d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 16 4zm6 5.813a2.25 2.25 0 0 1 2.25 2.25v3.374a2.25 2.25 0 0 1-2.25 2.25h-2.786l-.18.844a.488.488 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 0 1-.454.375h-.563a.294.294 0 0 1-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844h1.313l.179-.844a.488.488 0 0 1 .454-.375h.563a.294.294 0 0 1 .295.375l-.179.844H22z",
        fill: "#FFF"
      })
    )
  );
};

exports.default = SvgPasc;