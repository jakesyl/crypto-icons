"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgArn = function SvgArn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#0092b5", r: 16 }),
      _react2.default.createElement("path", {
        d: "M11.76 14.102l4.282-7.538c.008-.014.024-.023.08 0l4.074 7.401a.976.976 0 0 0 .025 1.532l-3.763 6.788a1.008 1.008 0 0 0-.86-.006l-3.873-6.899a.971.971 0 0 0 .034-1.278zm-.41 1.534l3.888 6.925a.974.974 0 0 0-.18.356c-3.139-.752-5.089-1.217-5.852-1.396a9.556 9.556 0 0 1-.844-1.438l2.492-4.386a1.024 1.024 0 0 0 .496-.06zm-.539-1.883l-3.087-5.5C9.828 7.136 12.439 6.55 15.559 6.5l-4.162 7.326a1.008 1.008 0 0 0-.586-.073zm-.42.176a.977.977 0 0 0 .034 1.608l-2.29 4.03a9.464 9.464 0 0 1-.67-2.954l-.463-7.382a.889.889 0 0 1 .332-.748zm6.6 8.998a.974.974 0 0 0-.175-.355l3.818-6.887a1.018 1.018 0 0 0 .496-.024l2.474 4.494c-.21.432-.452.848-.724 1.245zm-.741 1.2a.993.993 0 0 0 .747-.739l5.456-1.415a9.661 9.661 0 0 1-2.336 2.092l-3.623 2.314a.914.914 0 0 1-.244.11zm-.454 0V26.5a.915.915 0 0 1-.29-.121l-3.623-2.314a9.664 9.664 0 0 1-2.246-1.982c.99.235 2.793.665 5.409 1.291.08.373.374.668.75.754zm5.37-10.334a1.011 1.011 0 0 0-.564-.028l-3.997-7.262c3.032.067 5.58.646 7.641 1.735zm.383.241l3.09-5.572a.89.89 0 0 1 .36.769l-.463 7.383a9.465 9.465 0 0 1-.7 3.025l-2.314-4.203a.974.974 0 0 0 .027-1.402zM16 11.234a.55.55 0 0 0-.541.534v1.954L12.573 15.5l.309.667 2.577-.844v1.954l-.722.533v.533L16 17.987l1.263.355v-.533l-.722-.533v-1.954l2.533.89.353-.712-2.886-1.778v-1.954a.55.55 0 0 0-.54-.533z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgArn;