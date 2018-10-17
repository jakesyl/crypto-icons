"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgUbq = function SvgUbq(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#00EA90" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillOpacity: 0.698,
        fillRule: "nonzero",
        d: "M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"
      }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        fillRule: "nonzero",
        d: "M25.992 20.679L15.179 27v-8.869l10.813-6.555v9.103zm-19.984-9.4L16.821 5v8.834L6.008 20.381v-9.103z"
      })
    )
  );
};

exports.default = SvgUbq;