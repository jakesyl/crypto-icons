"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAct = function SvgAct(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#767DFF", fillRule: "nonzero" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M13.77 6.5h4.46a.87.87 0 0 1 .759.444l6.906 12.319a.87.87 0 0 1 0 .85l-2.21 3.942a.87.87 0 0 1-.758.445H9.073a.87.87 0 0 1-.759-.445l-2.209-3.942a.87.87 0 0 1 0-.85l6.906-12.319a.87.87 0 0 1 .759-.444zM16 11.401l-4.653 8.287h9.306L16 11.401z"
      })
    )
  );
};

exports.default = SvgAct;