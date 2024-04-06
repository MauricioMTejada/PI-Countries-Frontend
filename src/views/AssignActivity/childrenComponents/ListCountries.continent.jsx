import React from "react";

export const ListCountriesContinent = ({
	continentList,
	selectedContinent,
	onChangeContinent,
}) => {
	return (
		<div>
			{/* <label htmlFor="continent-select">Selecciona un continente:</label> */}
			<select
				id="continent-select"
				value={selectedContinent}
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
