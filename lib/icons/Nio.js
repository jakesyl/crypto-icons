"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgNio = function SvgNio(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#70C9C9" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M16 13.764h-4.822L16 5.5l4.822 8.264H16zm.655 9.736l2.515-4.309 2.411-4.131L26.5 23.5h-9.845zm-3.825-4.309l2.515 4.309H5.5l4.919-8.44 2.41 4.131z"
      })
    )
  );
};

exports.default = SvgNio;