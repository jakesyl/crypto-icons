import React from "react";

const SvgSalt = props => (
  <svg width={32} height={32} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#1BEEF4" />
      <path
        fill="#FFF"
        d="M16.5 10.445l5.804 12.214H10.696L16.5 10.445zM16.5 5L7 25h19L16.5 5z"
      />
    </g>
  </svg>
);

export default SvgSalt;