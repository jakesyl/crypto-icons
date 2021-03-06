"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgAtm = function SvgAtm(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#346fce", r: 16 }),
      _react2.default.createElement("path", {
        d: "M20.16 18.706l.956 1.797a4.369 4.369 0 0 1-1.806 5.908l-.124.066a4.369 4.369 0 0 1-5.909-1.806l-3.223-6.062a4.369 4.369 0 0 1 1.592-5.787l-.956-1.797a4.369 4.369 0 0 1 1.807-5.908l.124-.066a4.369 4.369 0 0 1 5.908 1.806l3.223 6.062a4.369 4.369 0 0 1-1.591 5.787zm0 0l-2.267-4.265a4.369 4.369 0 0 0-5.908-1.806l-.124.065c-.073.04-.145.08-.215.122l2.268 4.265a4.369 4.369 0 0 0 5.908 1.806l.124-.065c.073-.04.145-.08.215-.122z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgAtm;