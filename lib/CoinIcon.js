'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var CoinIcons = _interopRequireWildcard(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import FallbackIcon from './FallbackIcon';


var CoinIcon = function CoinIcon(_ref) {
  var fallbackRenderer = _ref.fallbackRenderer,
      size = _ref.size,
      symbol = _ref.symbol,
      props = _objectWithoutProperties(_ref, ['fallbackRenderer', 'size', 'symbol']);

  var formattedSymbol = symbol ? symbol[0].toUpperCase() + symbol.slice(1).toLowerCase() : null;

  var iconExists = Object.keys(CoinIcons).includes(formattedSymbol);
  var iconElement = iconExists ? CoinIcons[formattedSymbol] : fallbackRenderer;

  return _react2.default.createElement(
    'span',
    _extends({}, props, { size: size }),
    (0, _react.createElement)(iconElement, {
      height: size,
      symbol: formattedSymbol,
      width: size
    })
  );
};

CoinIcon.propTypes = {
  // fallbackRenderer: PropTypes.func.isRequired,
  size: _propTypes2.default.number.isRequired,
  symbol: _propTypes2.default.string.isRequired
};

//CoinIcon.defaultProps = {
//   fallbackRenderer: FallbackIcon,
//   size: 32,
// };

exports.default = CoinIcon;