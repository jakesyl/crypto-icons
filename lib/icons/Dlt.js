"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgDlt = function SvgDlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#f4ae95", r: 16 }),
      _react2.default.createElement("path", {
        d: "M15.807 8.958L9.713 21.965H19.83c.293 0 .558.18.673.455l.011.025a.641.641 0 0 1-.031.56.96.96 0 0 1-.835.495H8.896a.826.826 0 0 1-.466-.145l-.056-.038a.874.874 0 0 1-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.692.692 0 0 1 .892-.01.497.497 0 0 1 .135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 0 1-.548.423h-.084a.877.877 0 0 1-.794-.516L16.249 8.96a.244.244 0 0 0-.22-.145.244.244 0 0 0-.222.143z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgDlt;