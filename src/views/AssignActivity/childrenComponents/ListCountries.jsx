import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ListCountriesContinent, ListCountriesCountry } from "./index";
import { PillChildren, PillChildrenNoImage } from "../../../components/PillsData/index";
import { orderAlphabeticalArray, orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/index";

import style from "./ListCountries.module.css";

export const ListCountries = () => {
	const countriesList = useSelector((state) => state.mainCountries);

	let continentList = [
		...new Set(countriesList.map((country) => country.continente)),
	];
	continentList = [...orderAlphabeticalArray(continentList)];
	console.log(continentList);

	const [selectedContinent, setSelectedContinent] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	// console.log(selectedCountry.nombre);

	const handleChangeContinent = (event) => {
		setSelectedContinent(event.target.value);
		setSelectedCountry("");
	};

	const handleChangeCountry = (event) => {
        setSelectedCountry(event.target.value);
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
			{/* <PillChildren title={titleCountry}> */}
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
