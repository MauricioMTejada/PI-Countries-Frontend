import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { noImage } from "../../../assets/others/index";
import { actionStateAssignActivity, getListActivities, resetInFalse, } from "../../../redux/actions/index";
import { filterActivity } from "../../../assets/pillsActivities";
import { PillActivity, PillChildren, } from "../../../components/PillsData/index";
import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/orderAlphabeticalArrayOfObjects";


export const ListActivities = () => {
	const dispatch = useDispatch();

	// Estado Global - estado Asignar actividad:
	const statesAssignActivity = useSelector( (state) => state.statesAssignActivity );

	// Estado Global - Lista de Actividades:
	let listaActividades = useSelector((state) => state.listaActividades);

	// Estado para botón reset
	const resetSignalAssignActivity = useSelector(state => state.resetSignalAssignActivity);
	const [resetSignal, setResetSignal] = useState(false);

	// lista de actividades ordenada alfabéticamente:
	listaActividades = [ ...orderAlphabeticalArrayOfObjects(listaActividades, "nombre"), ];

	// solicitar la lista de actividades a la API:
	useEffect(() => { dispatch(getListActivities()); }, [dispatch]);

	// objeto "Actividad Vacía":
	const emptyActivity = {dificultad: "-", duracion: "-", icono: noImage, id: "-", nombre: "-", temporada: "-", }

	// handle function:
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

	// Función para restablecer la selección a la opción por defecto
	function resetSelection() {
	const selectElement = document.getElementById("activitySelect");
	selectElement.value = "Choose";
	}

	// Reset Signal
	useEffect(() => {
		if (resetSignalAssignActivity || resetSignal) {
		resetSelection();
		// console.log("Reset signal in ListActivities");
		// Reiniciar el estado resetSignalAssignActivity a false después de restablecer la selección
		// Esto es importante para que el efecto no se active repetidamente
		dispatch(resetInFalse());
		setResetSignal(false);
		}
	}, [resetSignalAssignActivity, resetSignal, dispatch]);


	return (
		<>
			<PillChildren image={filterActivity} title="Filtrar la Actividad:">
				<div>
					<select
						id="activitySelect"
						onChange={(event) => handleFilterActivities(event)}
						disabled={statesAssignActivity.endOfWork}>

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
