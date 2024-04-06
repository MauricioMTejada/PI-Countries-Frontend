import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListCountriesArray, ListCountriesContinent, ListCountriesCountry } from "./index";
import { PillChildren, PillChildrenNoImage } from "../../../components/PillsData/index";
import { orderAlphabeticalArray, orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/index";

import style from "./ListCountriesSelectors.module.css";
import { countryToActivity } from "../../../redux/actions/index";

export const ListCountriesSelectors = (props) => {

    const dispatch = useDispatch();
	const countriesList = useSelector((state) => state.mainCountries);

	let continentList = [
		...new Set(countriesList.map((country) => country.continente)),
	];
	continentList = [...orderAlphabeticalArray(continentList)];
	// console.log(continentList);

	const [selectedContinent, setSelectedContinent] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	// console.log(selectedCountry.nombre);

	const handleChangeContinent = (event) => {
		setSelectedContinent(event.target.value);
		setSelectedCountry("");
	};

	const handleChangeCountry = (event) => {
        const selectedCountryValue = event.target.value;
        setSelectedCountry(selectedCountryValue);
        dispatch(countryToActivity(props.countryIndex, selectedCountryValue));
    };

	const titleContinent = "Seleccione un Continente:";
	const titleCountry = "Seleccione un país";

	const selectedCountryObject = countriesList.find(country => country.nombre === selectedCountry);

	return (
		<div className={style.container}>
			<PillChildrenNoImage title={titleContinent} >
				<ListCountriesContinent
					continentList={continentList}
					selectedContinent={selectedContinent}
					onChangeContinent={handleChangeContinent}
				/>
			</PillChildrenNoImage>
			<PillChildren image={selectedCountryObject ? selectedCountryObject.bandera : ""} title={titleCountry}>
				<ListCountriesCountry
					countriesList={countriesList}
					selectedContinent={selectedContinent}
					setSelectedCountry={setSelectedCountry}
					onChangeCountry={handleChangeCountry}
				/>
			</PillChildren>
		</div>
	);
};