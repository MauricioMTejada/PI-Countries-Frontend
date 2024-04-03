import React from "react";
import { Pill } from "./../../../components/PillsData/PillsData";
import { area, capital, population, subregion, } from "../../../assets/decorations";
import styleInfoCard from "./infoCard.module.css";

export const InfoCard = ({ countryDetail }) => {
	const pillsData = [
		{ image: subregion, title: "Subregión", data: countryDetail.subregion },
		{ image: capital, title: "Capital", data: countryDetail.capital },
		{ image: area, title: "Área", data: ( <> {countryDetail.stringArea} km<sup>2</sup> </> ), },
		{ image: population, title: "Población", data: countryDetail.stringPoblacion, },
	];

	return (
		<div className={styleInfoCard.container}>
			<div className={styleInfoCard.pillsContainer}>
				{/* Mapear los datos para renderizar las pills */}
				{pillsData.map((pill, index) => (
					<Pill key={index} image={pill.image} title={pill.title} data={pill.data} />
				))}
			</div>
		</div>
	);
};
