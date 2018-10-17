"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgMds = function SvgMds(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#1e252c", r: 16 }),
      _react2.default.createElement("path", {
        d: "M14.22 15.589a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.698 0a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm-3.699 3.699a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.699 0a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.698-4.11a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm0 3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm-11.232-3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm0 3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm3.835 3.698a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm3.699 0a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zM14.219 11.48a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm3.699 0a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm-3.699-4.11a.685.685 0 1 1 0-1.369.685.685 0 0 1 0 1.37zm3.699 0a.685.685 0 1 1 0-1.369.685.685 0 0 1 0 1.37zm7.397 7.398a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm0 3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm-18.63-3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm0 3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zM14.219 26a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm3.699 0a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgMds;