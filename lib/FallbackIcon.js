'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: center;\n  background-color: ', ';\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n'], ['\n  align-items: center;\n  background-color: ', ';\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #ffffff;\n  font-size: ', 'px;\n  font-weight: 600;\n  text-transform: uppercase;\n  ', '\n'], ['\n  color: #ffffff;\n  font-size: ', 'px;\n  font-weight: 600;\n  text-transform: uppercase;\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _primitives = require('styled-components/primitives');

var _primitives2 = _interopRequireDefault(_primitives);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buildFallbackFontSize = function buildFallbackFontSize(_ref) {
  var symbol = _ref.symbol,
      width = _ref.width;

  if (!symbol) return 0;else if (width < 30 || symbol.length === 4) return 11;else if (symbol.length > 4) return 9;
  return 13;
};

var Container = _primitives2.default.div(_templateObject, function (_ref2) {
  var bgColor = _ref2.bgColor;
  return bgColor;
});

var Text = _primitives2.default.span(_templateObject2, buildFallbackFontSize, function (_ref3) {
  var textStyles = _ref3.textStyles;
  return textStyles;
});

var FallbackIcon = function FallbackIcon(_ref4) {
  var _ref4$symbol = _ref4.symbol,
      symbol = _ref4$symbol === undefined ? '' : _ref4$symbol,
      textStyles = _ref4.textStyles,
      width = _ref4.width,
      props = _objectWithoutProperties(_ref4, ['symbol', 'textStyles', 'width']);

  var symbolWithoutSpecialCharacters = symbol.replace(/[^a-zA-Z0-9]/g, '');
  var formattedSymbol = symbolWithoutSpecialCharacters.substring(0, width < 30 ? 1 : 5);

  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(
      Text,
      {
        symbol: formattedSymbol,
        textStyles: textStyles,
        width: width
      },
      formattedSymbol
    )
  );
};

FallbackIcon.propTypes = {
  bgColor: _propTypes2.default.string,
  symbol: _propTypes2.default.string,
  textStyles: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string])
};

FallbackIcon.defaultProps = {
  bgColor: '#3A3D51'
};

exports.default = FallbackIcon;