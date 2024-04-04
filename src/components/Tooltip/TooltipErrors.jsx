import React from "react";

import style from "./Tooltip.module.css";
import { useSelector } from "react-redux";

export const TooltipErrors = ({ text, children }) => {
	const formErrors = useSelector((state) => state.activitiesFormErrors);

	return (
		<>
			<div className={style.tooltip}>
				{children}
				{formErrors[text] && (
					<div className={style.tooltiptext}>{formErrors[text]}</div>
				)}
			</div>
		</>
	);
};
