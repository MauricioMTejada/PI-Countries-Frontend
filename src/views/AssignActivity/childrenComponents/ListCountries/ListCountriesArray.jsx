import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListCountriesSelectors } from "./ListCountriesSelectors";
import {
	countryToActivity,
	countryToActivityButtonDelette,
} from "../../../../redux/actions/index";

import { add01, remove01 } from "../../../../assets/others/index";

import style from "./ListCountriesArray.module.css";
import { TooltipLeftGreen, TooltipLeftYellow } from "../../../../components/Tooltip/index";

export const ListCountriesArray = (props) => {
	// console.log(`ListCountriesArray: ${props.countryIndex}`);
	// console.log(props.data);

	// dispatch
		const dispatch = useDispatch();

	// consulto el Estado Global
		const listCountryesToActivity = useSelector(
			(state) => state.listCountryesToActivity
		);

		const { dataResponse } = useSelector((state) => state.notificationCountryesToActivity);
		// console.log(`dataResponse: `);
		// console.log(dataResponse);

	// Estados de tooltips:
		const [tooltipGreen, setTooltipGreen] = useState(false);
		const [tooltipYellow, setTooltipYellow] = useState(false);

	// Texto de los tooltips:
		const textTooltipGreen = "Relación agregada";
		const textTooltipYellow = "Relación existente";

	// Calculo el último índice
		const lastIndex = listCountryesToActivity.reduce(
			(maxIndex, item) => Math.max(maxIndex, item.countryIndex),
			0
		);
		// console.log(listCountryesToActivity);
		// console.log(`lastIndex: ${lastIndex}`);


	// Funciones de los botones
		const handleAdd = () => {
			const selectedCountry = "";
			dispatch(countryToActivity(props.data.countryIndex + 1, selectedCountry));
		};

		const handleDelete = () => {
			if (listCountryesToActivity.length === 1) {
				return;
			} else {
				dispatch(countryToActivityButtonDelette(props.data.countryIndex));
			}
		};

	useEffect(() => {
		if (1) {
			const currentCountyId = props.data.selectedCountry.id

			if (dataResponse && dataResponse.nuevasRelaciones) {
				dataResponse.nuevasRelaciones.map((country) => {
					console.log(country);
					if (country.countryId === currentCountyId) {
						setTooltipGreen(true);
					}
				})
			}

			if (dataResponse && dataResponse.relacionesExistente) {
				dataResponse.relacionesExistente.map((country) => {
					console.log(country);
					if (country.countryId === currentCountyId) {
						setTooltipYellow(true);
					}
				})
			}
			// console.log(currentCountyId );
			// console.log(dataResponse?.nuevasRelaciones);
			// console.log(dataResponse?.relacionesExistente);
		}
	}, [dataResponse]);


	// Estilos para los botones
		const getButtonClasses = () => {
			let classes = [style.buttonAddRemove];

			if (listCountryesToActivity.length === 1) {
				classes.push(style.disabledButton);
			}

			return classes.join(" ");
		};

	return (
		<div className={style.container}>
			<TooltipLeftYellow text={textTooltipYellow} visualizar={tooltipYellow}>
				<TooltipLeftGreen 	text={textTooltipGreen} visualizar={tooltipGreen}>
					<ListCountriesSelectors data={props.data} />
				</TooltipLeftGreen>
			</TooltipLeftYellow>

			<div className={style.buttonContainer}>
				<button onClick={handleDelete} className={getButtonClasses()}>
					<img
						src={remove01}
						alt="remove"
						className={style.imgAddRemoveButton}
					/>
				</button>

				{props.data.countryIndex === lastIndex && (
					<button
						onClick={handleAdd}
						className={style.buttonAddRemove}>
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
