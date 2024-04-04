import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./GoToCreateActivity.module.css";

export const GoToCreateActivity = () => {
	const location = useLocation();

	const isHome = location.pathname === "/createActivity";

	return (
		<>
			<div className={style.logoContainer}>
				{" "}
				<Link
					to="/createActivity"
					className={`${style.logoLink} ${isHome ? style.active : ""}`}>
					Crear Actividad
				</Link>
			</div>
		</>
	);
};
