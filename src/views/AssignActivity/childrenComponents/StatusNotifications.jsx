import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./StatusNotifications.module.css";
import { actionStateAssignActivity } from "../../../redux/actions/index";


export const StatusNotifications = () => {

	const dispatch = useDispatch();

	const {
		optionActivity,
		listCountriesToActivity,
		messageStatusBlink,
		informationSent,
		informationResOK,
		informationResBad,
	} = useSelector((state) => state.statesAssignActivity);

	const countriesSelected = (!listCountriesToActivity.some((objeto) => objeto.active === true))

	const messages = {
		activity : {state: true, text: "Seleccione una Actividad."},
		country : {state: true, text: "Seleccione al menos un país."},
		sendStatus: [
			{ state: "ready", text: "Datos listos para enviar." },
			{ state: "sending", text: "Enviando datos." },
			{ state: "error", text: "Error al enviar datos." },
			{ state: "completed", text: "Datos enviados exitosamente." },
		]
	}

	const [applyBlink, setApplyBlink] = useState(false);

	useEffect(() => {
		// Parpadeo de mensajes:
		if (messageStatusBlink) blinkMessages();

	}, [messageStatusBlink]);

	const blinkMessages = () => {
		setApplyBlink(true);
		setTimeout(() => { setApplyBlink(false); }, 200);
		setTimeout(() => { setApplyBlink(true); }, 350);
		setTimeout(() => { setApplyBlink(false); }, 550);
		setTimeout(() => { setApplyBlink(true); }, 700);
		setTimeout(() => { setApplyBlink(false); }, 2400);
		dispatch(actionStateAssignActivity({messageStatusBlink: false}));
	};


	return (
		<div className={`${style.container} ${applyBlink ? style.blink : ""}`}>
			<div className={style.messagesText}>

				{!optionActivity &&
					<div>
						{messages.activity.text}
					</div>}
				{countriesSelected &&
					<div>
						{messages.country.text}
					</div>}
				{optionActivity && !countriesSelected && !informationResOK && !informationResBad &&
					<div>
						{messages.sendStatus.find(status => status.state === "ready").text}
					</div>}
				{informationSent &&
					<div>
						{messages.sendStatus.find(status => status.state === "sending").text}
					</div>}
				{informationResOK &&
					<div>
						{messages.sendStatus.find(status => status.state === "completed").text}
					</div>}
				{informationResBad &&
					<div>
						{messages.sendStatus.find(status => status.state === "error").text}
					</div>}

			</div>
		</div>
	);
};
