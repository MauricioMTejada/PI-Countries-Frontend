import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { noImage } from "../../../assets/others/index";
import { actionStateAssignActivity, getListActivities, } from "../../../redux/actions/index";
import { filterActivity } from "../../../assets/pillsActivities";
import { PillActivity, PillChildren, } from "../../../components/PillsData/index";
import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/orderAlphabeticalArrayOfObjects";


export const ListActivities = () => {
	const dispatch = useDispatch();

	// Estado Global - Actividad Seleccionada:
	const statesAssignActivity = useSelector( (state) => state.statesAssignActivity );

	// Estado Global - Lista de Actividades:
	let listaActividades = useSelector((state) => state.listaActividades);

	// lista de actividades ordenada alfabéticamente:
	listaActividades = [ ...orderAlphabeticalArrayOfObjects(listaActividades, "nombre"), ];

	// objeto "Actividad Vacía":
	const emptyActivity = {dificultad: "-", duracion: "-", icono: noImage, id: "-", nombre: "-", temporada: "-", }

	// solicitar la lista de actividades a la API:
	useEffect(() => { dispatch(getListActivities()); }, [dispatch]);

	// hadle function:
	function handleFilterActivities(event) {
		if (event.target.value === "Choose") {
			dispatch(actionStateAssignActivity({ optionActivity: false }));
			dispatch(actionStateAssignActivity({ selectActivity: emptyActivity }));
		} else {
			dispatch(actionStateAssignActivity({ optionActivity: true }));
			const selectedId = parseInt(event.target.value, 10);
			const handleValue = listaActividades.find( (element) => element.id === selectedId )
			dispatch(actionStateAssignActivity({ selectActivity: handleValue }));
		}
	}


	return (
		<>
			<PillChildren image={filterActivity} title="Filtrar la Actividad:">
				<div>
					<select onChange={(event) => handleFilterActivities(event)}>
						<option value="Choose">- Elija una Actividad -</option>
						{listaActividades.map((element) => {
							return (
								<option key={element.id} value={element.id}>
									{element.nombre}
								</option>
							);
						})}
					</select>
				</div>
			</PillChildren>

			<PillActivity />
		</>
	);
};

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import { noImage } from "../../../assets/others/index";

// import {
// 	actionStateAssignActivity,
// 	getListActivities,
// 	notificationCountryesToActivity,
// 	selectActivity,
// } from "../../../redux/actions/index";

// import { filterActivity } from "../../../assets/pillsActivities";
// import {
// 	PillActivity,
// 	PillChildren,
// } from "../../../components/PillsData/index";
// import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/orderAlphabeticalArrayOfObjects";
// import { TooltipLeftYellow } from "../../../components/Tooltip/TooltipLeftYellow";

// export const ListActivities = () => {
// 	const dispatch = useDispatch();

// 	const { idActivityIncomplete } = useSelector(
// 		(state) => state.notificationCountryesToActivity
// 	);

// 	// Estado Global - statesAssingActivity:
// 	const statesAssignActivity = useSelector(
// 		(state) => state.statesAssignActivity
// 	);
// 	// console.log(`statesAssingActivity: `);
// 	// console.log(statesAssingActivity);

// 	// Estado Global - Lista de Actividades:
// 	let listaActividades = useSelector((state) => state.listaActividades);
// 	listaActividades = [
// 		...orderAlphabeticalArrayOfObjects(listaActividades, "nombre"),
// 	];

// 	const [selectedActivity, setSelectedActivity] = useState({
// 		dificultad: "-",
// 		duracion: "-",
// 		icono: noImage,
// 		id: "-",
// 		nombre: "-",
// 		temporada: "-",
// 	});

// 	const [tooltipYellow, setTooltipYellow] = useState(false);

// 	// solicitar la lista de actividades a la API:
// 	useEffect(() => {
// 		dispatch(getListActivities());
// 	}, [dispatch]);

// 	useEffect(() => {
// 		// console.log(idActivityIncomplete);
// 		if (idActivityIncomplete) {
// 			setTooltipYellow(true);
// 		} else {
// 			setTooltipYellow(false);
// 		}
// 	}, [idActivityIncomplete]);

// 	function handleFilterActivities(event) {
// 		// console.log(`antes del paseInt: ${event.target.value}`);

// 		let handleValue = {};

// 		if (event.target.value === "Choose") {
// 			handleValue = {
// 				dificultad: "-",
// 				duracion: "-",
// 				icono: noImage,
// 				id: "-",
// 				nombre: "-",
// 				temporada: "-",
// 			};
// 			dispatch(notificationCountryesToActivity(true));
// 			const optionActivity = false;
// 		} else {
// 			const selectedId = parseInt(event.target.value, 10);

// 			console.log(`ListActivities, selectedId:`);
// 			console.log(selectedId);

// 			handleValue = listaActividades.find(
// 				(activity) => activity.id === selectedId
// 			);
// 			dispatch(notificationCountryesToActivity(false));
// 		}

// 		dispatch(selectActivity(handleValue));

// 		setSelectedActivity(handleValue);
// 	}

// 	const textTooltip = `Actividad no seleccionada`;

// 	return (
// 		<>
// 			<PillChildren image={filterActivity} title="Filtrar la Actividad:">
// 				<div>
// 					<TooltipLeftYellow
// 						text={textTooltip}
// 						visualizar={tooltipYellow}>
// 					<select
// 						// value={orden.sortActivity}
// 						onChange={(event) => handleFilterActivities(event)}>
// 						<option value="Choose">- Elija una Actividad -</option>
// 						{listaActividades.map((element) => {
// 							return (
// 								<option key={element.id} value={element.id}>
// 									{element.nombre}
// 								</option>
// 							);
// 						})}
// 					</select>
// 					</TooltipLeftYellow>
// 				</div>
// 			</PillChildren>

// 			<PillActivity keyData={selectedActivity} />
// 		</>
// 	);
// };
