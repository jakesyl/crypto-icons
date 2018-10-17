"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgZil = function SvgZil(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#49c1bf", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff" },
        _react2.default.createElement("path", {
          d: "M9 7.281l11.114 5.383 2.845-1.282L11.891 6z",
          fillOpacity: 0.304
        }),
        _react2.default.createElement("path", {
          d: "M20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z",
          fillOpacity: 0.646
        }),
        _react2.default.createElement("path", { d: "M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671 7.548-3.881v-2.865z" })
      )
    )
  );
};

exports.default = SvgZil;