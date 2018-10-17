"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgRdd = function SvgRdd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#E30613" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", {
          d: "M15.361 27C9.64 27 5 22.407 5 16.742 5 11.077 9.639 6.484 15.361 6.484c5.723 0 10.362 4.593 10.362 10.258C25.723 22.407 21.083 27 15.36 27zM17.15 9.423c2.416.989 4.152 2.85 5.384 5.358l.93-.647c-1.044-2.512-2.973-4.486-6.076-5.766l-.238 1.055z",
          opacity: 0.75
        }),
        _react2.default.createElement("path", {
          fillRule: "nonzero",
          d: "M26.992 9.321C26.992 6.935 25.037 5 22.627 5s-4.365 1.935-4.365 4.321c0 .228.018.455.054.68 1.453.846 2.62 2.06 3.553 3.576.25.043.504.066.758.066 2.41 0 4.365-1.935 4.365-4.322z"
        })
      )
    )
  );
};

exports.default = SvgRdd;