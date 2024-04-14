import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContinent, addCountry } from "../../../../redux/actions/index";

import { PillChildren, PillChildrenNoImage, } from "../../../../components/PillsData/index";
import { ListCountriesContinent, ListCountriesCountry } from "../index";
import { orderAlphabeticalArray } from "../../../../utils/orderAlphabetical/index";

import style from "./ListCountriesSelectors.module.css";


export const ListCountriesSelectors = (props) => {
	// console.log(props.data);

	const dispatch = useDispatch();

	// Estado Global: lista de países:
	const countriesList = useSelector((state) => state.mainCountries);

	// Lista de continentes ordenados alfabéficamente:
	const continentList = orderAlphabeticalArray([ ...new Set(countriesList.map((country) => country.continente)), ]);

	// manejadores de eventos de lista de continentes:
	const handleChangeContinent = (event) => {
		const selectedContinentValue = { continente: event.target.value };
		const value = props.data;
		dispatch(addContinent(value, selectedContinentValue));
	};

	// manejadores de eventos de lista de países:
	const handleChangeCountry = (event) => {
		const selectedCountryValue = event.target.value;
		const value = props.data;
		// console.log(selectedCountryValue);
		// console.log(value);
		dispatch(addCountry(value, selectedCountryValue));
		// (addCountry(value, selectedCountryValue));
	};

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
