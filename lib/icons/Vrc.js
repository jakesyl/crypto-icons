"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVrc = function SvgVrc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#418bca", r: 16 }),
      _react2.default.createElement("path", {
        d: "M20.265 8H25l-9 18L7 8h4.704l4.327 9.113zM16 12.959c-.788 0-1.427-.656-1.427-1.465s.639-1.466 1.427-1.466 1.427.657 1.427 1.466-.64 1.465-1.427 1.465zm6.465 4.04c.788 0 1.427.657 1.426 1.466 0 .81-.638 1.465-1.426 1.465-.788 0-1.427-.656-1.427-1.465S21.677 17 22.465 17z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgVrc;