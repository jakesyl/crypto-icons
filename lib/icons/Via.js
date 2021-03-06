"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgVia = function SvgVia(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#565656", r: 16 }),
      _react2.default.createElement("path", {
        d: "M11.133 14.296H8.005v-1.719h2.47L8.58 7.627 10.144 7l3.55 9.267 4.601.03L21.856 7l1.565.627-1.896 4.95h2.47v1.72h-3.128l-.771 2.01 3.904.025-.01 1.719-4.55-.029L16 27l-3.456-9.021L8 17.949l.01-1.718 3.874.025zm3.22 3.694L16 22.288l1.638-4.277z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgVia;