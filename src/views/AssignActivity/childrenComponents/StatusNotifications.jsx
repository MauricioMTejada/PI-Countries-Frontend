import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import style from "./StatusNotifications.module.css";

export const StatusNotifications = () => {
	const { optionActivity, listCountryesToActivity } = useSelector(
		(state) => state.statesAssignActivity
	);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const newMessages = [];
		console.log(listCountryesToActivity);

		// Verificar la opción de actividad
		if (!optionActivity) newMessages.push("Seleccione una Actividad.");

		// Verificar si al menos un país está seleccionado
		if (!listCountryesToActivity.some((objeto) => objeto.active === true)) {
			newMessages.push("Seleccione al menos un Pais.");
		}

		// Actualizar los mensajes
		setMessages(newMessages);
	}, [optionActivity, listCountryesToActivity]);

	return (
		<div className={style.container}>
			<div className={style.messagesText}>
				{/* Renderizar los mensajes */}
				{messages.map((message, index) => (
					<div key={index}>{message}&nbsp;</div>
				))}
			</div>
		</div>
	);
};
