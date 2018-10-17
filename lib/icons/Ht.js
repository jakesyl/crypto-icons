"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgHt = function SvgHt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#2A3069" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M18.347 10.533c0-3.52-1.707-6.506-2.987-7.466 0 0-.107-.107-.107.106-.106 6.72-3.52 8.534-5.333 11.094-4.373 5.653-.32 11.946 3.84 13.12 2.347.64-.533-1.174-.853-4.907-.534-4.693 5.44-8.107 5.44-11.947" }),
        _react2.default.createElement("path", { d: "M20.587 12.88c-.214.853-1.067 2.667-2.24 4.373-3.947 5.654-1.707 8.427-.427 9.92.747.854 0 0 1.813-.853.107-.107 3.627-1.92 3.947-6.08.427-4.053-2.133-6.613-3.093-7.36" })
      )
    )
  );
};

exports.default = SvgHt;