import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeroData from "./HomeData";
import { Loading } from "../../../components/Loading/Loading";

export default function Hero() {
	// Estado para controlar la carga de datos
	const [dataLoaded, setDataLoaded] = useState(false);

	const allPaises = useSelector((state) => state.mainCountries);

	// console.log(allPaises);

	useEffect(() => {
		// Verifica si "allPaises" tiene elementos
		if (allPaises.length > 0) setDataLoaded(true);
	}, [allPaises]);

	return <>{dataLoaded === false ? <Loading /> : <HeroData />}</>;
}
