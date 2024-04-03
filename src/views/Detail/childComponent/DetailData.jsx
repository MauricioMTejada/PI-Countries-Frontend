import React from "react";
import { useSelector } from "react-redux";

import {
	ComponentContinentImage,
	FlagImage,
	InfoCard,
	GoBackButton,
} from "./index";
import style from "../Detail.module.css";


export const DetailData = () => {
	const countryDetail = useSelector((state) => state.detail);

	return (
		<div className={style.card}>
			<h1>{countryDetail.nombre}</h1>
			<div className={style.mainGrid}>
				<div className={style.imageCards}>
					<FlagImage countryDetail={countryDetail} />
					<ComponentContinentImage countryDetail={countryDetail} />
				</div>
				<div className={style.infoCards}>
					<InfoCard countryDetail={countryDetail} />
					<GoBackButton />
				</div>
			</div>
		</div>
	);
}
