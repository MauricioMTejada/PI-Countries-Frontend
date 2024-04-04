import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./GoToCountries.module.css";

export const GoToCountries = () => {
	const location = useLocation();

	const isHome = location.pathname === "/home";

	return (
		<>
			<div className={style.logoContainer}>
				{" "}
				<Link
					to="/home"
					className={`${style.logoLink} ${isHome ? style.active : ""}`}>
					Países
				</Link>
			</div>
		</>
	);
};
