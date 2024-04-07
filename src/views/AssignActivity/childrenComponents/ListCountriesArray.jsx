import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListCountriesSelectors } from "./ListCountriesSelectors";
import {
	countryToActivity,
	countryToActivityButtonDelette,
} from "../../../redux/actions/index";

import style from "./ListCountriesArray.module.css";
import { add01, add02, add03, remove01, remove02, remove03 } from "../../../assets/others/index";

export const ListCountriesArray = (props) => {
	// console.log(`ListCountriesArray: ${props.countryIndex}`);
	// console.log(props.data);

	const dispatch = useDispatch();

	const listCountryesToActivity = useSelector(
		(state) => state.listCountryesToActivity
	);
	const lastIndex = listCountryesToActivity.reduce(
		(maxIndex, item) => Math.max(maxIndex, item.countryIndex),
		0
	);
	// console.log(listCountryesToActivity);
	// console.log(`lastIndex: ${lastIndex}`);

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

	return (
		<div className={style.container}>
			<div className={style.buttonContainer}>
				{/* <img src={add01} alt="add" className={style.addRemoveButton}/>
				<img src={remove01} alt="remove" className={style.addRemoveButton} />
				<img src={add02} alt="add" className={style.addRemoveButton} />
				<img src={remove02} alt="add" className={style.addRemoveButton} />
				<img src={add03} alt="add" className={style.addRemoveButton} />
				<img src={remove03} alt="add" className={style.addRemoveButton} /> */}
				<button onClick={handleDelete}>Eliminar</button>


				{props.data.countryIndex === lastIndex && (
					<button onClick={handleAdd}>Agregar</button>
				)}
			</div>

			<ListCountriesSelectors
				// countryIndex={props.countryIndex}
				data={props.data}
			/>
		</div>
	);
};
