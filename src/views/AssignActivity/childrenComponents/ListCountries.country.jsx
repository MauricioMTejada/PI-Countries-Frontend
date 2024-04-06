import React from "react";

export const ListCountriesCountry = ({
	countriesList,
	selectedContinent,
	selectedCountry,
	onChangeCountry
}) => {
	return (
		<div>
			{/* <label htmlFor="country-select">Selecciona un país:</label> */}
			<select
			id="country-select"
			value={selectedCountry}
			onChange={onChangeCountry}
			>
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
