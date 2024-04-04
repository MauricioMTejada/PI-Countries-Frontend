// Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/backgrounds/planisferio.jpg";

import style from "./Logo.module.css";

export const Logo = () => {

	return (
		<>
			<div className={style.logoContainer}>
				{" "}
				<div className={style.logoPosition}>
					<Link to="/" className={style.logoLink}>
					<img src={logo} alt="Logo" className={style.imageLogo} />

					</Link>
				</div>
			</div>
		</>
	);
};
