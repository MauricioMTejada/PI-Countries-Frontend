import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/index";

import {
	ComponentContinentImage,
	FlagImage,
	GoBackButton,
	InfoCard,
} from "./index";
import style from "./Detail.module.css";

export default function Detail(props) {
	const dispatch = useDispatch();
	const { id } = useParams();

	// useEffect(() => {
	//   dispatch(getDetail(props.match.params.id));
	// }, [dispatch, props.match.params.id]);

	useEffect(() => {
		dispatch(getDetail(id)); // Utiliza el parámetro 'id' obtenido de useParams
	}, [dispatch, id]);

	const countryDetail = useSelector((state) => state.detail);
	// console.log(countryDetail);

	//Consulto si hay actividades:
	// let haveActivities = 0;
	// if(countryDetail.actividades.length === 0) haveActivities = 1;

	// console.log(countryDetail);
	// let poblacionFormateada = 0;
	// let areaFormateata = 0;
	// if (countryDetail.poblacion)
	// 	poblacionFormateada = countryDetail.poblacion.toLocaleString();
	// if (countryDetail.area) areaFormateata = countryDetail.area.toLocaleString();

	// const styleTextGeneral = { color: "#310336" };
	const styleBackground = {
		backdropFilter: "blur(30px)",
		padding: "30px 10px",
		border: "1px solid black",
		borderRadius: "10px",
	};

	if (countryDetail.length !== 0)
		return (
			<div className={style.background}>
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
			</div>
		);
	else {
		return <></>;
	}
}
