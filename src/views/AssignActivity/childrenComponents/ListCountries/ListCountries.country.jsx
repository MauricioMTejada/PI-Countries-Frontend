import React from "react";
import { useSelector } from "react-redux";

import { orderAlphabeticalArrayOfObjects } from "../../../../utils/orderAlphabetical";

import style from "../ListCountries.module.css";


export const ListCountriesCountry = ({
	countriesList,
	data,
	onChangeCountry,
}) => {

	const statesAssignActivity = useSelector( (state) => state.statesAssignActivity );

	// console.log(data);
	// console.log(data.selectedCountry.nombre)
	countriesList = [...orderAlphabeticalArrayOfObjects(countriesList, "nombre")];

	return (
		<div className={style.containerDropDown}>

			{/* <label htmlFor="country-select">Selecciona un país:</label> */}
			<select
				id="country-select"
				value={data.selectedCountry.id}
				onChange={onChangeCountry}
				className={style.dropdown}
				disabled={statesAssignActivity.endOfWork}>

				<option value="Choose">Todos los países</option>
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
