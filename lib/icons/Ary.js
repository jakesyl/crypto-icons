"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAry = function SvgAry(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#343434", r: 16 }),
      _react2.default.createElement("path", {
        d: "M23.917 21.11a.848.848 0 0 0 .57-.86v1.1a.91.91 0 0 1-.595.86l-7.588 2.733a.806.806 0 0 1-.596 0L8.12 22.211a.9.9 0 0 1-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 0 0 .595 0zm0-1.948a.867.867 0 0 0 .57-.86v1.1a.91.91 0 0 1-.595.86l-7.588 2.733a.806.806 0 0 1-.596 0L8.12 20.263a.9.9 0 0 1-.595-.86V18.29c0 .392.235.733.595.872l7.613 2.733a.806.806 0 0 0 .595 0zm0-1.96a.88.88 0 0 0 .583-.848v1.1a.91.91 0 0 1-.596.86l-7.588 2.733a.806.806 0 0 1-.595 0L8.12 18.302a.9.9 0 0 1-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 0 0 .595 0zM7.5 10.662a.9.9 0 0 1 .595-.86l7.601-2.745a.806.806 0 0 1 .595 0l7.601 2.745a.9.9 0 0 1 .595.86v4.832a.91.91 0 0 1-.595.86l-7.613 2.732a.806.806 0 0 1-.595 0l-7.589-2.732a.9.9 0 0 1-.595-.86z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgAry;