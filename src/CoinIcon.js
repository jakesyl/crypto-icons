import PropTypes from 'prop-types';
import React, { createElement } from 'react';
// import FallbackIcon from './FallbackIcon';
import * as CoinIcons from './icons';

const CoinIcon = ({ fallbackRenderer, size, symbol, ...props }) => {
  const formattedSymbol = symbol
    ? symbol[0].toUpperCase() + symbol.slice(1).toLowerCase()
    : null;

  const iconExists = Object.keys(CoinIcons).includes(formattedSymbol);
  const iconElement = iconExists ? CoinIcons[formattedSymbol] : fallbackRenderer;

  return (
    <span {...props} size={size}>
      {createElement(iconElement, {
        height: size,
        symbol: formattedSymbol,
        width: size,
      })}
    </span>
  );
}

CoinIcon.propTypes = {
  // fallbackRenderer: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

//CoinIcon.defaultProps = {
//   fallbackRenderer: FallbackIcon,
//   size: 32,
// };

export default CoinIcon;
