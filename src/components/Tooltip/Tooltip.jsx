import React from 'react';

import style from './Tooltip.module.css';

export const Tooltip = ({ text, children }) => {
  return (
    <div className={style.tooltip}>
      {children}
      <div className={style.tooltiptext}>{text}</div>
    </div>
  );
};
