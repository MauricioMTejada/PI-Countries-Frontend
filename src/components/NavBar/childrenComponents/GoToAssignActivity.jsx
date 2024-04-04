import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./GoTo.module.css";

export const GoToAssignActivity = () => {
	const location = useLocation();

	const isHome = location.pathname === "/assignActivity";

	return (
		<>
			<div className={style.logoContainer}>
				{" "}
				<Link
					to="/assignActivity"
					className={`${style.logoLink} ${isHome ? style.active : ""}`}>
					Asignar Actividad
				</Link>
			</div>
		</>
	);
};