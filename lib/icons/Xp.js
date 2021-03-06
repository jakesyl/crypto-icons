"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgXp = function SvgXp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#008200", r: 16 }),
      _react2.default.createElement("path", {
        d: "M14.79 23h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019c.784-.012 1.391-.277 1.823-.793.432-.517.637-1.21.615-2.083a2.31 2.31 0 0 0-.035-.335l2.73-1.427c.378.695.522 1.514.434 2.455-.146 1.372-.74 2.47-1.779 3.293-1.039.824-2.364 1.236-3.973 1.236l-2.306-.01L17.94 23zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 9h3.48l1.23 4.789 1.052-1.78h1.75-1.75L15.34 9h2.215l5.126.01c1.165.032 2.12.341 2.866.927l-2.8 1.464a1.773 1.773 0 0 0-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694zm-9.425 9.942l5.327-2.785L8.765 23H5l.767-1.085z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgXp;