// NavBar.js
import React from "react";
import { useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { GoToCountries, GoToCreateActivity, Logo, SearchInput } from "./childrenComponents/index";

const NavBar = () => {
	const location = useLocation();

	return (
		<div className={style.mainContainer}>
			<Logo />
			<GoToCountries />
			<GoToCreateActivity />
			{location.pathname !== "/create" && <SearchInput />}
		</div>
	);
};

export default NavBar;
