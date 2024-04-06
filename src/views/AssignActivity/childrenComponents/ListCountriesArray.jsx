import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListCountriesSelectors } from "./ListCountriesSelectors";
import { countryToActivity } from "../../../redux/actions/index";

import style from "./ListCountriesArray.module.css";

export const ListCountriesArray = (props) => {
	const dispatch = useDispatch();

	const [arrayCountries, setArrayCountries] = useState([]);
	// console.log(arrayCountries);

	const handleAdd = () => {
		const selectedCountry = "hola";
		dispatch(countryToActivity(props.countryIndex + 1, selectedCountry));
	};

	return (
		<div className={style.container}>
			<div className={style.buttonContainer}>
				<button onClick={handleAdd}>Agregar</button>
				<button>Eliminar</button>
			</div>

			<ListCountriesSelectors countryIndex={props.countryIndex} />
		</div>
	);
};
