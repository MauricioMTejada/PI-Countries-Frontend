import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import style from "./TooltipLeftYellow.module.css";

export const TooltipLeftYellow = ({ text, visualizar, children }) => {
	// const { idActivityIncomplete } = useSelector(
	// 	(state) => state.notificationCountryesToActivity
	// );

	// const [active, setActive] = useState(false);

	// useEffect(() => {
	// 	// console.log(idActivityIncomplete);
	// 	if (idActivityIncomplete) {
	// 		setActive(true);
	// 	} else {
	// 		setActive(false);
	// 	}
	// }, [idActivityIncomplete]);

	return (
		<>
			<div className={style.tooltip}>
				{children}
				{/* {idActivityIncomplete && <div className={style.tooltiptext}>{text}</div>} */}
				{visualizar && <div className={style.tooltiptext}>{text}</div>}
			</div>
		</>
	);
};
