import React from "react";

import style from "./Detail.module.css";

import {
	Africa,
	Antartica,
	Asia,
	Europe,
	North_America,
	Oceania,
	South_America,
} from "../../assets/continents";

export const ComponentContinentImage = ({ countryDetail }) => {
	const continentImages = {
		Africa,
		Antartica,
		Asia,
		Europe,
		"North America": North_America,
		"South America": South_America,
		Oceania,
	};

	const continentImage = continentImages[countryDetail.continente];
	return (
		<div className={style.cardImage}>
			<div className={style.cardDecoration}></div>
			<div className={style.nameContinent}>
				<span className={style.spanContinent}>
					{countryDetail.continente.includes(" ")
						? countryDetail.continente.split(" ").map((word, index) => (
								<span key={index}>
									{word}
									<br />
								</span>
						  ))
						: countryDetail.continente}
				</span>
			</div>
			<div className={style.imageBorder}>
				<img
					src={continentImage}
					alt={countryDetail.continente}
					className={style.image}
				/>
			</div>
		</div>
	);
};
