import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetail } from "../../redux/actions/index";
import { Loading } from "../../components/Loading/Loading";
import {DetailData} from "./childComponent/DetailData";
import style from "./Detail.module.css";

export default function Detail() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		dispatch(getDetail(id)).then(() => {
			setIsLoading(false);
		});
	}, [dispatch, id]);

	return (
		<div className={style.background}>
			{isLoading ? <Loading /> : <DetailData />}
		</div>
	);
}


// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { getDetail } from "../../redux/actions/index";
// import {
// 	ComponentContinentImage,
// 	FlagImage,
// 	GoBackButton,
// 	InfoCard,
// } from "./index";
// import style from "./Detail.module.css";
// import { Loading } from "../../components/Loading/Loading";

// export default function Detail() {
// 	const dispatch = useDispatch();
// 	const { id } = useParams();
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		setIsLoading(true);
// 		dispatch(getDetail(id)).then(() => {
// 			setIsLoading(false);
// 		});
// 	}, [dispatch, id]);

// 	const countryDetail = useSelector((state) => state.detail);
// 	// console.log(countryDetail);

// 	//Consulto si hay actividades:
// 	// let haveActivities = 0;
// 	// if(countryDetail.actividades.length === 0) haveActivities = 1;

// 	// console.log(countryDetail);
// 	// let poblacionFormateada = 0;
// 	// let areaFormateata = 0;
// 	// if (countryDetail.poblacion)
// 	// 	poblacionFormateada = countryDetail.poblacion.toLocaleString();
// 	// if (countryDetail.area) areaFormateata = countryDetail.area.toLocaleString();

// 	const renderDetail = () => {
// 		if (isLoading) {
// 			return <Loading />;
// 		}
// 		if (!isLoading && countryDetail.length !== 0) {
// 			return (
// 				<div className={style.card}>
// 					<h1>{countryDetail.nombre}</h1>
// 					<div className={style.mainGrid}>
// 						<div className={style.imageCards}>
// 							<FlagImage countryDetail={countryDetail} />
// 							<ComponentContinentImage countryDetail={countryDetail} />
// 						</div>
// 						<div className={style.infoCards}>
// 							<InfoCard countryDetail={countryDetail} />
// 							<GoBackButton />
// 						</div>
// 					</div>
// 				</div>
// 			);
// 		} else {
// 			return null;
// 		}
// 	};

// 	return (
// 		<div className={style.background}>
// 			{renderDetail()}
// 		</div>
// 	);
// }
