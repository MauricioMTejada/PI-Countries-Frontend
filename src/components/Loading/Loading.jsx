import React from "react";
import style from "./Loading.module.css";

export const Loading = () => {
	return (
		<div className={style.spinneContainer}>
			<div className={style.spinner}>
			</div>
		</div>
	);
};
