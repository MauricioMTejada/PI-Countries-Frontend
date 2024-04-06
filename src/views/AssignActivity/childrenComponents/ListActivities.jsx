import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { noImage } from '../../../assets/others/index'

import {
	getListActivities,
	selectActivity,
} from "../../../redux/actions/index";

import { filterActivity } from "../../../assets/pillsActivities";
import {
	PillActivity,
	PillChildren,
} from "../../../components/PillsData/index";
import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/orderAlphabeticalArrayOfObjects";

export const ListActivities = () => {
	const dispatch = useDispatch();
	const [selectedActivity, setSelectedActivity] = useState({
		dificultad: "-",
		duracion: "-",
		icono: noImage,
		id: "-",
		nombre: "-",
		temporada: "-",
	});

	const activitySelected = useSelector((state) => state.selectActivity);
	// console.log(activitySelected);

	useEffect(() => {
		dispatch(getListActivities());
	}, [dispatch]);

	let listaActividades = useSelector((state) => state.listaActividades);
	listaActividades = [...orderAlphabeticalArrayOfObjects(listaActividades, 'nombre')];
	// console.log(listaActividades);

	function handleFilterActivities(event) {
		const selectedId = parseInt(event.target.value, 10);

		const handleValue = listaActividades.find(
			(activity) => activity.id === selectedId
		);

		dispatch(selectActivity(handleValue));

		setSelectedActivity(handleValue);
	}

	return (
		<>
			<PillChildren image={filterActivity} title="Filtrar la Actividad:">
				<select
					// value={orden.sortActivity}
					onChange={(event) => handleFilterActivities(event)}>
					<option value="Choose">- Elija una Actividad -</option>
					{listaActividades.map((element) => {
						return (
							<option key={element.id} value={element.id}>
								{element.nombre}
							</option>
						);
					})}
				</select>
			</PillChildren>

			<PillActivity keyData={selectedActivity} />
		</>
	);
};
