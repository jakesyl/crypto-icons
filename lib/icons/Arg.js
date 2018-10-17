"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgArg = function SvgArg(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#A71435" }),
      _react2.default.createElement(
        "g",
        { fill: "#FFF" },
        _react2.default.createElement("path", { d: "M10.755 5.246a11.936 11.936 0 0 1 14.315 18.52c-.595-1.296-1.051-2.655-1.561-3.993l-3.08-8.07c-.297-.818-.796-1.604-1.571-2.029a6.074 6.074 0 0 0-3.494-.542c-.956.107-1.954.436-2.602 1.19-.616.711-.892 1.625-1.242 2.485L9.3 18.435c-.743 1.784-1.37 3.632-2.177 5.405a11.023 11.023 0 0 1-2.495-4.407 11.947 11.947 0 0 1 6.138-14.198l-.011.01z" }),
        _react2.default.createElement("path", { d: "M15.194 13.38c.212-.637 1.062-.85 1.614-.488.297.223.404.605.542.945 1.38 3.61 2.74 7.242 4.11 10.864.18.52.445 1.019.552 1.56a1.256 1.256 0 0 1-.298.234 11.968 11.968 0 0 1-9.833.659c-.595-.245-1.21-.457-1.731-.829.053-.488.297-.924.478-1.37 1.529-3.854 3.026-7.72 4.566-11.575z" })
      )
    )
  );
};

exports.default = SvgArg;