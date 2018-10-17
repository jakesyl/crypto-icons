"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBtm = function SvgBtm(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#504C4C" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M10.827 15.376l-1.745 3.698.812 3.032 2.066.552 2.564 2.567-.772.775-6.112-1.64L6 18.248l1.23-1.228 5.342-5.343-1.745 3.699-1.745 3.698 5.442-5.442-1.952-1.955-1.745 3.699zm2.805 2.1l5.442 5.442 3.032-.812.554-2.066 2.565-2.564.775.772-1.638 6.114L18.248 26l-6.569-6.572 1.953-1.952zm4.736-2.952l-5.442-5.442-3.034.812-.552 2.063-2.565 2.567L6 13.752l1.64-6.114L13.752 6l1.228 1.23 5.34 5.34-1.952 1.954zM20.04 9.34l-2.564-2.565.772-.775 6.114 1.638L26 13.752l-6.572 6.569-1.952-1.953 5.444-5.444-.814-3.032-2.066-.552z"
      })
    )
  );
};

exports.default = SvgBtm;