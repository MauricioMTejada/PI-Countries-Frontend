import React from "react";

import style from './GoBackButton.module.css'
import { Link } from "react-router-dom";

export const GoBackButton = () => {
	return (
		<div className={style.goBack}>
			<Link to="/home">
				{" "}
				<button className={style.button}>Volver</button>{" "}
			</Link>
		</div>
	);
};
