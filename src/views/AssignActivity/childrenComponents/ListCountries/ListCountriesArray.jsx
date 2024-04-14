import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListCountriesSelectors } from "./ListCountriesSelectors";
import { actionPushStateAssignActivity, deleteCountry, } from "../../../../redux/actions/index";
import { TooltipLeftGreen, TooltipLeftYellow } from "../../../../components/Tooltip/index";
import { add01, remove01, removeDisable } from "../../../../assets/others/index";

import style from "./ListCountriesArray.module.css";


export const ListCountriesArray = (props) => {

	// dispatch
	const dispatch = useDispatch();

	// Estado Global - Estado Asignar actividad:
	const { listCountriesToActivity, endOfWork } = useSelector( (state) => state.statesAssignActivity );

	// Calculo el último índice (countryIndex)
	const lastIndex = listCountriesToActivity.reduce( (maxIndex, item) => Math.max(maxIndex, item.countryIndex), 0 );

	// Objeto "País vacío":
	const emptyCountryData = { countryIndex: props.data.countryIndex + 1, active: false, selectedCountry: {}, saveData: false, }

	// Funciones de los botones
		const handleAdd = () => {
			dispatch(actionPushStateAssignActivity(emptyCountryData));
		};

		const handleDelete = () => {
			if (listCountriesToActivity.length === 1) {
				return;
			} else {
				dispatch(deleteCountry(props.data.countryIndex));
			}
		};

	// Estilos para los botones
		const getButtonClasses = () => {
			let classes = [style.buttonAddRemove];

			if (listCountriesToActivity.length === 1) {
				classes.push(style.disabledButton);
			}

			return classes.join(" ");
		};

	// Texto de los tooltips
	const textTooltipGreen = "Relación agregada";
	const textTooltipYellow = "Relación existente";
	const visualizeGreen = props.data.saveData && !props.data.existSaveData;
	const visualizeYellow = props.data.saveData && props.data.existSaveData;


	return (
		<div className={style.container}>
			<TooltipLeftYellow
				text={textTooltipYellow}
				visualizar={visualizeYellow}>
				<TooltipLeftGreen
					text={textTooltipGreen}
					visualizar={visualizeGreen}>
					<ListCountriesSelectors data={props.data} />
				</TooltipLeftGreen>
			</TooltipLeftYellow>

			<div className={style.buttonContainer}>
				{/* <button onClick={handleDelete} className={getButtonClasses()} disabled={endOfWork}> */}
				<button
					onClick={handleDelete}
					className={style.buttonAddRemove}
					disabled={endOfWork}>
					{listCountriesToActivity.length === 1 ? (
						<img
							src={removeDisable}
							alt="remove"
							className={style.imgAddRemoveButton}
						/>
					) : (
						<img
							src={remove01}
							alt="remove"
							className={style.imgAddRemoveButton}
						/>
					)}
				</button>

				{props.data.countryIndex === lastIndex && (
					<button
						onClick={handleAdd}
						className={style.buttonAddRemove}
						disabled={endOfWork}>
						<img
							src={add01}
							alt="add"
							className={style.imgAddRemoveButton}
						/>
					</button>
				)}
			</div>
		</div>
	);
};
