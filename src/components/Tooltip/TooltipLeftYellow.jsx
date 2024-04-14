import React from "react";

import style from "./TooltipLeftYellow.module.css";

export const TooltipLeftYellow = ({ text, visualizar, children }) => {

	return (
		<>
			<div className={style.tooltip}>
				{children}
				{visualizar && <div className={style.tooltiptext}>{text}</div>}
			</div>
		</>
	);
};
