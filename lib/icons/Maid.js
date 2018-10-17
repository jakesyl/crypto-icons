"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgMaid = function SvgMaid(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#5592D7" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF", fillRule: "nonzero" },
        _react2.default.createElement("path", { d: "M20.246 12.667V25.64L9.29 19.333c-3.24-1.897-3.034-3.077-3.034-5.64l11.263 6.512v-5.949l2.726-1.59z" }),
        _react2.default.createElement("path", {
          d: "M17.52 20.205L6.257 13.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-11.263 6.513 5.143 2.974v3.128z",
          opacity: 0.6
        }),
        _react2.default.createElement("path", {
          d: "M12.377 14.103L23.64 7.59v12.615c0 3.744-1.131 4.154-3.394 5.436V12.667L15.05 15.64l-2.674-1.538z",
          opacity: 0.2
        })
      )
    )
  );
};

exports.default = SvgMaid;