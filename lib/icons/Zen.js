"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgZen = function SvgZen(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#234871", r: 16 }),
      _react2.default.createElement("path", {
        d: "M18.666 17.298l-1.345-.804v-3.627l-3.16-1.846V9.35l4.505 2.62zM16.83 13.63v1.534l-3.215 1.888v3.74l-1.3.778v-5.287zm-2.296 3.485l1.444-.835 3.088 1.839 3.109-1.839 1.4.837-4.524 2.664zm4.517 3.135l4.919-2.897v5.773L19.052 26l-4.919-2.89v-5.764zm-7.137-4.2v5.76L7 18.946v-5.783l4.898-2.886 4.933 2.884zM23.97 8.861v5.793l-4.904 2.885v-5.803L14.16 8.882 19.073 6z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgZen;