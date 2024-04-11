import React from "react";
import { useSelector } from "react-redux";

import style from "./TooltipLeftGreen.module.css";

export const TooltipLeftGreen = ({ text, visualizar, children }) => {
	const formErrors = useSelector((state) => state.activitiesFormErrors);

	return (
		<>
			<div className={style.tooltip}>
				{children}
				{visualizar && <div className={style.tooltiptext}>{text}</div>}
			</div>
		</>
	);
};