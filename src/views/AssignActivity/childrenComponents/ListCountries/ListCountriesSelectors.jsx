import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryToActivity } from "../../../../redux/actions/index";

import {
	PillChildren,
	PillChildrenNoImage,
} from "../../../../components/PillsData/index";
import { ListCountriesContinent, ListCountriesCountry } from "../index";
import { orderAlphabeticalArray } from "../../../../utils/orderAlphabetical/index";

import style from "./ListCountriesSelectors.module.css";

export const ListCountriesSelectors = (props) => {
	// console.log(props.data);
	const dispatch = useDispatch();
	const countriesList = useSelector((state) => state.mainCountries);

	const handleChangeContinent = (event) => {
		const selectedContinentValue = { continente: event.target.value };
		dispatch(
			countryToActivity(props.data.countryIndex, selectedContinentValue)
		);
	};

	const handleChangeCountry = (event) => {
		const selectedCountryValue = event.target.value;
		// console.log(`selectedCountryValue: ${selectedCountryValue}`);
		const selectedCountry = countriesList.find(
			(country) => country.id === selectedCountryValue
		);
		// console.log(selectedCountry);
		dispatch(countryToActivity(props.data.countryIndex, selectedCountry));
	};

	const continentList = orderAlphabeticalArray([
		...new Set(countriesList.map((country) => country.continente)),
	]);

	const titleContinent = "Seleccione un Continente:";
	const titleCountry = "Seleccione un país";

	return (
		<div className={style.container}>
			<PillChildrenNoImage title={titleContinent}>
				<ListCountriesContinent
					continentList={continentList}
					data={props.data}
					onChangeContinent={handleChangeContinent}
				/>
			</PillChildrenNoImage>

			<PillChildren
				image={
					props.data.selectedCountry.bandera
						? props.data.selectedCountry.bandera
						: ""
				}
				title={titleCountry}>
				<ListCountriesCountry
					countriesList={countriesList}
					data={props.data}
					onChangeCountry={handleChangeCountry}
				/>
			</PillChildren>
		</div>
	);
};
