"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEqua = function SvgEqua(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#F68922" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M16.72 10.078s-4.127.606-4.728 5.193c0 0-.638 5.134 4.608 6.52a4.36 4.36 0 0 0 1.113.143h.258c.534 0 1.046.214 1.424.594.378.38.59.896.59 1.434a2.014 2.014 0 0 1-1.856 2.022c-2.579.174-6.04-1.092-8.286-4.136 0 0-4.399-6.325.395-12.137a10.172 10.172 0 0 1 4.277-3.072c1.97-.737 4.856-1.211 7.361.756 0 0 3.353 2.597 1.634 6.837 0 0-1.204 3.375-5.33 3.635l-.573-.032a1.895 1.895 0 0 1-1.414-.691 1.922 1.922 0 0 1-.413-1.527 1.904 1.904 0 0 1 1.818-1.605l.582-.04s1.977-.086 1.805-2.423c0 0-.172-2.077-3.266-1.47"
      })
    )
  );
};

exports.default = SvgEqua;