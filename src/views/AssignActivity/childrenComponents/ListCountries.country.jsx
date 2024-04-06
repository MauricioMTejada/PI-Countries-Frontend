import React from "react";
import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical";

import style from "./ListCountries.module.css";

export const ListCountriesCountry = ({
	countriesList,
	selectedContinent,
	selectedCountry,
	onChangeCountry,
}) => {
	countriesList = [...orderAlphabeticalArrayOfObjects(countriesList, "nombre")];
	return (
		<div className={style.containerDropDown}>
			{/* <label htmlFor="country-select">Selecciona un país:</label> */}
			<select
				id="country-select"
				value={selectedCountry}
				onChange={onChangeCountry}
				className={style.dropdown}>
				<option value="">Todos los países</option>
				{selectedContinent &&
					countriesList
						.filter((country) => country.continente === selectedContinent)
						.map((country) => (
							<option key={country.nombre} value={country.nombre}>
								{country.nombre}
							</option>
						))}
			</select>
		</div>
	);
};
