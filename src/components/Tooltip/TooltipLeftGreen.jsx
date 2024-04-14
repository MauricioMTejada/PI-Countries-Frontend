import React from "react";

import style from "./TooltipLeftGreen.module.css";

export const TooltipLeftGreen = ({ text, visualizar, children }) => {

	return (
		<>
			<div className={style.tooltip}>
				{children}
				{visualizar && <div className={style.tooltiptext}>{text}</div>}
			</div>
		</>
	);
};