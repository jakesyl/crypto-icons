"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGbx = function SvgGbx(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#1666af", r: 16 }),
      _react2.default.createElement("path", {
        d: "M15.699 11.006v2.06h-4.7c-.61 0-1.361.214-1.92.61-.693.492-1.08 1.229-1.08 2.327s.387 1.835 1.08 2.327c.559.396 1.31.61 1.92.61h2V21h-2a5.448 5.448 0 0 1-3.054-.973C6.717 19.155 6 17.789 6 16.003s.717-3.152 1.945-4.024a5.447 5.447 0 0 1 3.053-.973zm-5 6.182v-2.06h5V21H13.7v-3.812zM19 13.06V11h7v10h-9.002v-7.933h2v5.872H24v-5.878z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgGbx;