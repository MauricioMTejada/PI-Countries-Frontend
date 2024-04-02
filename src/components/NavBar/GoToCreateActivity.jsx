import React from "react";
import { Link } from "react-router-dom";

import style from "./GoToCreateActivity.module.css";

export const GoToCreateActivity = () => {

	return (
		<>
			<div className={style.logoContainer}>
				{" "}
				<div className={style.logoPosition}>
					<Link to="/createActivity" className={style.logoLink}>
					Create Activity

					</Link>
				</div>
			</div>
		</>
	);
};
