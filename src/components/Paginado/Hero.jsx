import React, { useEffect, useState } from "react";
import style from "./Hero.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import SelectorSortAlphabetical from "../SelectorSortAlphabetical/SelectorSortAlphabetical";
import SelectorSortPopulation from "../SelectorSortPopulation/SelectorSortPopulation";
import { SelectorContinent } from "../SelectorContinent/SelectorContinent";
import SelectorActivity from "../SelectorActivity/SelectorActivity";
import { useSelector } from "react-redux";
import HeroLoading from "./HeroLoading";
import HeroData from "./HeroData";

export default function Hero() {
	// Estado para controlar la carga de datos
	const [dataLoaded, setDataLoaded] = useState(false);

	const allPaises = useSelector((state) => state.mainCountries);

	useEffect(() => {
		// Verifica si "allPaises" tiene elementos
		if (allPaises.length > 0) setDataLoaded(true);
	}, [allPaises]);

	return <>{dataLoaded === false ? <HeroLoading /> : <HeroData />}</>;
}
