import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryToActivity } from "../../../redux/actions/index";

import { PillChildren, PillChildrenNoImage } from "../../../components/PillsData/index";
import { ListCountriesContinent, ListCountriesCountry } from "./index";
import { orderAlphabeticalArray } from "../../../utils/orderAlphabetical/index";

import style from "./ListCountriesSelectors.module.css";

export const ListCountriesSelectors = (props) => {
	console.log(props.data)
    const dispatch = useDispatch();
    const countriesList = useSelector((state) => state.mainCountries);
    // const listCountryesToActivity = useSelector((state) => state.listCountryesToActivity);

	// const initContinent = props.data && countriesList.find((country) => country.id === props.data.selectedCountry);
	// console.log(initContinent);

    // const [selectedContinent, setSelectedContinent] = useState(initContinent?.continente);
    // const [selectedCountry, setSelectedCountry] = useState(initContinent?.nombre);
	// console.log(`selectedContinent: ${selectedContinent}`);
	// console.log(`selectedCountry: ${selectedCountry}`);

	// useEffect(() => {
	// 	setSelectedContinent(initContinent?.continente);
	// 	setSelectedCountry(initContinent?.nombre);
	// 	console.log(`selectedContinent: ${selectedContinent}`);
	// 	console.log(`selectedCountry: ${selectedCountry}`);
	// }, [props.data, props.data?.id]);

    const handleChangeContinent = (event) => {
        // setSelectedContinent(event.target.value);
        // setSelectedCountry("");
		const selectedContinentValue = {continente: event.target.value};
		dispatch(countryToActivity(props.data.countryIndex, selectedContinentValue));
    };

    const handleChangeCountry = (event) => {
        const selectedCountryValue = event.target.value;
        console.log(`selectedCountryValue: ${selectedCountryValue}`);
        // setSelectedCountry(selectedCountryValue);
		const selectedCountry = countriesList.find((country) => country.id === selectedCountryValue);
		console.log(selectedCountry);
        dispatch(countryToActivity(props.data.countryIndex, selectedCountry));
    };

    const continentList = orderAlphabeticalArray([...new Set(countriesList.map((country) => country.continente))]);

    const titleContinent = "Seleccione un Continente:";
    const titleCountry = "Seleccione un país";

    // const selectedCountryObject = selectedCountry && countriesList.find((country) => country.nombre === selectedCountry);

    return (
        <div className={style.container}>
            <PillChildrenNoImage title={titleContinent}>
                <ListCountriesContinent
                    continentList={continentList}
                    // selectedContinent={selectedContinent}
					data={props.data}
                    onChangeContinent={handleChangeContinent}
                />
            </PillChildrenNoImage>

            <PillChildren
                // image={selectedCountryObject ? selectedCountryObject.bandera : ""}
                image={props.data.selectedCountry.bandera ? props.data.selectedCountry.bandera : ""}
                title={titleCountry}
            >
                <ListCountriesCountry
                    countriesList={countriesList}
                    // selectedContinent={selectedContinent}
                    // setSelectedCountry={setSelectedCountry}
					data={props.data}
                    onChangeCountry={handleChangeCountry}
                />
            </PillChildren>
        </div>
    );
};


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { ListCountriesArray, ListCountriesContinent, ListCountriesCountry } from "./index";
// import { PillChildren, PillChildrenNoImage } from "../../../components/PillsData/index";
// import { orderAlphabeticalArray, orderAlphabeticalArrayOfObjects } from "../../../utils/orderAlphabetical/index";

// import style from "./ListCountriesSelectors.module.css";
// import { countryToActivity } from "../../../redux/actions/index";

// export const ListCountriesSelectors = (props) => {
// 	console.log(props.countryIndex);

//     const dispatch = useDispatch();
// 	const countriesList = useSelector((state) => state.mainCountries);
// 	const listCountryesToActivity = useSelector( (state) => state.listCountryesToActivity );

// 	let continentList = [ ...new Set(countriesList.map((country) => country.continente)), ];
// 	continentList = [...orderAlphabeticalArray(continentList)];
// 	// console.log(continentList);

// 	const [selectedContinent, setSelectedContinent] = useState("");
// 	const [selectedCountry, setSelectedCountry] = useState("");
// 	// console.log(selectedCountry.nombre);

// 	const handleChangeContinent = (event) => {
// 		setSelectedContinent(event.target.value);
// 		setSelectedCountry("");
// 	};

// 	const handleChangeCountry = (event) => {
//         const selectedCountryValue = event.target.value;
//         setSelectedCountry(selectedCountryValue);
//         dispatch(countryToActivity(props.countryIndex, selectedCountryValue));
//     };

// 	const titleContinent = "Seleccione un Continente:";
// 	const titleCountry = "Seleccione un país";

// 	const selectedCountryObject = countriesList.find(country => country.nombre === selectedCountry);

// 	return (
// 		<div className={style.container}>
// 			<PillChildrenNoImage title={titleContinent} >
// 				<ListCountriesContinent
// 					continentList={continentList}
// 					selectedContinent={selectedContinent}
// 					onChangeContinent={handleChangeContinent}
// 				/>
// 			</PillChildrenNoImage>
// 			<PillChildren image={selectedCountryObject ? selectedCountryObject.bandera : ""} title={titleCountry}>
// 				<ListCountriesCountry
// 					countriesList={countriesList}
// 					selectedContinent={selectedContinent}
// 					setSelectedCountry={setSelectedCountry}
// 					onChangeCountry={handleChangeCountry}
// 				/>
// 			</PillChildren>
// 		</div>
// 	);
// };