import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeroLoading from "./HeroLoading";
import HeroData from "./HeroData";
import { Loading } from "../Loading/Loading";

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
