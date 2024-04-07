import React from "react";
import { orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical";

import style from "./ListCountries.module.css";

export const ListCountriesCountry = ({
	countriesList,
	// selectedContinent,
	// selectedCountry,
	data,
	onChangeCountry,
}) => {
	console.log(data);
	console.log(data.selectedCountry.nombre)
	countriesList = [...orderAlphabeticalArrayOfObjects(countriesList, "nombre")];
	return (
		<div className={style.containerDropDown}>

			{/* <label htmlFor="country-select">Selecciona un país:</label> */}
			<select
				id="country-select"
				value={data.selectedCountry.id}
				onChange={onChangeCountry}
				className={style.dropdown}>
				<option value="">Todos los países</option>
				{data.selectedCountry.continente &&
					countriesList
						.filter((country) => country.continente === data.selectedCountry.continente)
						.map((country) => (
							<option key={country.nombre} value={country.id}>
								{country.nombre}
							</option>
						))}
			</select>
		</div>
	);
};
