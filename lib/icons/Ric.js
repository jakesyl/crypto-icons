"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgRic = function SvgRic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#60e4dd", r: 16 }),
      _react2.default.createElement("path", {
        d: "M10.144 20.024c.3-.455.584-.881.852-1.28H7.932a.093.093 0 0 1-.093-.093v-.636c0-.051.042-.093.093-.093h3.622c1.937-2.829 2.905-3.994 2.905-4.113 0-.183-.04-.274-.7-.274-1.304 0-3.449-.931-3.449-3.473C10.31 8.679 12.547 7 13.853 7c.606 0 .699.257.42.274-.746.046-2.378 1.536-2.378 2.97 0 .96.852 2.605 2.75 2.605 2.242 0 4.157-3.564 8.812-3.564 2.797 0 3.543 2.188 3.543 2.788 0 .6-.873.914-2.051.914-1.178 0-1.222-2.103-3.59-2.103-3.718 0-6.884 4.026-8.405 7.038h2.624c.052 0 .093.042.093.093v.636a.093.093 0 0 1-.093.094h-3.01c-.208.48-.363.915-.46 1.28h2.63c.052 0 .094.04.094.092v.637a.093.093 0 0 1-.093.093H11.99c.049 1.166 1.027 2.217 2.936 3.153h-7.32a185.324 185.324 0 0 1 2-3.153H7.094A.093.093 0 0 1 7 20.754v-.637c0-.051.042-.093.093-.093z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgRic;