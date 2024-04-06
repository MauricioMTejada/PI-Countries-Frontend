import React from "react";
import style from "./PillsData.module.css";

export const PillNoImage = ({ title, data }) => {
	return (
		<div className={style.pill}>
			<div className={style.info}>
				<div className={style.title}>
					<strong>{title}</strong>
				</div>
				<div className={style.text}>
					<span>{data}</span>
				</div>
			</div>
		</div>
	);
};

export const PillChildrenNoImage = ({ title, children }) => {
	return (
		<div className={style.pill}>
			<div className={style.info}>
				<div className={style.title}>
					<strong>{title}</strong>
				</div>
				<div className={style.component}>{children}</div>
			</div>
		</div>
	);
};
