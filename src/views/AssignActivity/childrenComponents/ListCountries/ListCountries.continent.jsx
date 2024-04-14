import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetInFalse } from "../../../../redux/actions/index";

export const ListCountriesContinent = ({
	continentList,
	data,
	onChangeContinent,
}) => {

	const dispatch = useDispatch();

	// Estado para botón reset
	const resetSignalAssignActivity = useSelector(state => state.resetSignalAssignActivity);
	const statesAssignActivity = useSelector( (state) => state.statesAssignActivity );
	const [resetSignal, setResetSignal] = useState(false);

	// Función para restablecer la selección a la opción por defecto
	function resetSelection() {
		const selectElement = document.getElementById(`continentSelect${data.countryIndex}`);
		selectElement.value = "Choose";
	}

	// Reset Signal
	useEffect(() => {
		if (resetSignalAssignActivity || resetSignal) {
		resetSelection();
		// console.log("Reset signal in ListCountriesContinent");
		// Reiniciar el estado resetSignalAssignActivity a false después de restablecer la selección
		// Esto es importante para que el efecto no se active repetidamente
		dispatch(resetInFalse());
		setResetSignal(false);
		}
	}, [resetSignalAssignActivity, resetSignal, dispatch]);


	return (
		<div>
			{/* <label htmlFor="continent-select">Selecciona un continente:</label> */}
			<select
				id={`continentSelect${data.countryIndex}`}
				onChange={onChangeContinent}
				disabled={statesAssignActivity.endOfWork}>

				<option value="Choose">Todos los continentes</option>
				{continentList.map((continent) => (
					<option key={continent} value={continent}>
						{continent}
					</option>
				))}
			</select>
		</div>
	);
};
