"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPasl = function SvgPasl(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#00acff", r: 16 }),
      _react2.default.createElement("path", {
        d: "M15.08 20.156a.51.51 0 0 1 .668.279.515.515 0 0 1-.277.671l-3.406 1.414-.452 2.48H9.269l.257-1.426-1.382.573a.51.51 0 0 1-.668-.279.515.515 0 0 1 .277-.67l1.99-.826.15-.839-2.687 1.115a.51.51 0 0 1-.667-.279.515.515 0 0 1 .277-.671l3.293-1.367L12.507 7.01h6.773c4.147-.143 6.22 1.242 6.22 4.155 0 3.695-2.702 6.553-7.285 6.553H12.94l-.283 1.556 1.487-.617a.51.51 0 0 1 .667.279.515.515 0 0 1-.277.67l-2.097.871-.153.84zm-.57-11.047l-1.172 6.425h5.218c3.212 0 4.43-2.185 4.43-3.77 0-1.584-.766-2.655-3.322-2.655z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgPasl;