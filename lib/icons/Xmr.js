"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXmr = function SvgXmr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F60" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 0 1-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 0 1-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 0 1-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"
      })
    )
  );
};

exports.default = SvgXmr;