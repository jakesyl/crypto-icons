"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgHtml = function SvgHtml(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#cfa967", r: 16 }),
      _react2.default.createElement("path", {
        d: "M16.02 16.945v7.993l5.947-1.602 1.397-15.39H16.02v6.532l.304-.947h.796zm-7.384 7.524L7 6.5h18l-1.636 17.969L15.98 26.5zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592zm7.933-1.432l-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433zm-5.712.7v-2.466l-1.317 4.107h.788z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgHtml;