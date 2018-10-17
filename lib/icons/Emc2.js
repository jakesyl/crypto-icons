"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEmc2 = function SvgEmc2(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#0CF" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", {
          fillOpacity: 0.4,
          d: "M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z"
        }),
        _react2.default.createElement("path", {
          fillOpacity: 0.6,
          d: "M12.277 19.16h4.398l-1.894 3.838h-4.398l1.894-3.839zm2.506-5.08h4.397l-1.888 3.828h-4.398l1.889-3.828zM17.288 9h4.398l-1.889 3.829H15.4L17.288 9z"
        }),
        _react2.default.createElement("path", { d: "M16.59 19.16h4.398l-1.893 3.838h-4.398l1.894-3.839zm2.506-5.08h4.398l-1.888 3.828h-4.398l1.888-3.828zM21.602 9H26l-1.889 3.829h-4.397L21.602 9z" })
      )
    )
  );
};

exports.default = SvgEmc2;