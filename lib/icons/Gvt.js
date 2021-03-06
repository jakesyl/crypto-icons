"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGvt = function SvgGvt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#16b9ad", r: 16 }),
      _react2.default.createElement("path", {
        d: "M26 13.193C26 18.601 21.513 23 16 23S6 18.6 6 13.195c0-.398.024-.797.074-1.193H7.87c-.06.395-.09.794-.09 1.193 0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807 1.975.318 3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216 0-.4.04-.8.117-1.193h16.152c.05.396.074.794.074 1.193z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgGvt;