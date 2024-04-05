import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
	getListActivities,
	selectActivity,
} from "../../../redux/actions/index";
import { PillChildren } from "../../../components/PillsData/PillsData";
import { PillActivity } from "../../../components/PillsData/PillsActitivities";
import { filterActivity } from "../../../assets/pillsActivities";

export const ListActivities = () => {
	const dispatch = useDispatch();
	const [selectedActivity, setSelectedActivity] = useState(null);

	const activitySelected = useSelector((state) => state.selectActivity);
	// console.log(activitySelected);

	useEffect(() => {
		dispatch(getListActivities());
	}, [dispatch]);

	const listaActividades = useSelector((state) => state.listaActividades);
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

			{selectedActivity && <PillActivity keyData={selectedActivity} />}
		</>
	);
};
