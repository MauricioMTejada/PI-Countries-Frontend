import React from "react";

export const ListCountriesContinent = ({
	continentList,
	data,
	onChangeContinent,
}) => {
	return (
		<div>
			{/* <label htmlFor="continent-select">Selecciona un continente:</label> */}
			<select
				id="continent-select"
				value={data.selectedCountry.continent}
				onChange={onChangeContinent}>
				<option value="">Todos los continentes</option>
				{continentList.map((continent) => (
					<option key={continent} value={continent}>
						{continent}
					</option>
				))}
			</select>
		</div>
	);
};
