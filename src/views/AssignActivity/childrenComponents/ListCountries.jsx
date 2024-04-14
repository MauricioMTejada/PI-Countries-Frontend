import React from "react";
import { useSelector } from "react-redux";

import { ListCountriesArray } from "./index";

import style from "./ListCountries.module.css";


export const ListCountries = () => {
	// Estado Global - Estado Asignar actividad:
	const { listCountriesToActivity } = useSelector( (state) => state.statesAssignActivity );

	// Ordenar listCountriesToActivity según el countryIndex
	const sortedList = [...listCountriesToActivity].sort((a, b) => a.countryIndex - b.countryIndex);

	return (
		<div className={style.containerListCountriesArray}>
			{sortedList.map((item, index) => (
				<ListCountriesArray key={index + 1} data={item} />
			))}
		</div>
	);
};
