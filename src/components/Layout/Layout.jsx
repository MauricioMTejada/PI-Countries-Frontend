import React from "react";
import style from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { backgroundHome, backgroundCreateActivity, backgroundDetail, backgroundAssignActivity } from "../../assets/backgrounds";


const routeBackgrounds = {
	"/home": backgroundHome,
	"/createActivity": backgroundCreateActivity,
	"/assignActivity": backgroundAssignActivity,
};

backgroundHome

export const Layout = ({ children }) => {
	const location = useLocation();
	let backgroundImage = "";

	// Verifica si la ruta comienza con "/home/" pero no es "/home"
	if (location.pathname.startsWith("/home/") && location.pathname !== "/home") {
	  // Asigna un background específico para rutas que cumplan con el patrón
	  backgroundImage = backgroundDetail;
	} else {
	  // Si no cumple con el patrón, utiliza el enfoque anterior
	  backgroundImage = routeBackgrounds[location.pathname];
	}

	return (
		<div
			className={style.background}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<NavBar />
			{children}
		</div>
	);
};
