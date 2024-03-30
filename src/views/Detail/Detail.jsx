import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/index";
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

	const styleTextGeneral = { color: "#310336" };
	const styleBackground = {
		backdropFilter: "blur(30px)",
		padding: "30px 10px",
		border: "1px solid black",
		borderRadius: "10px",
	};

	if (countryDetail.length !== 0)
		return (
			<div className={style.imagenFondo}>
				<div style={styleBackground}>
					<div style={styleTextGeneral}>
						<img
							src={countryDetail.bandera}
							alt="Bandera"
							style={{ maxWidth: "250px", maxHeight: "170px" }}
						/>
						<h1>{countryDetail.nombre}</h1>

						<div>
							{/* <strong>Id: </strong>
							<span>{countryDetail.id}</span>
							<br /> */}
							<strong>Continente: </strong>
							<span>{countryDetail.continente}</span>
							<br />
							<strong>Subregión: </strong>
							<span>{countryDetail.subregion}</span>
							<br />
							<strong>Capital: </strong>
							<span>{countryDetail.capital}</span>
							<br />
							<strong>Área: </strong>
							<span>{countryDetail.stringArea} km<sup>2</sup></span>
							<br />
							<strong>Población: </strong>
							<span>{countryDetail.stringPoblacion}</span>
							<br />
							{/* {countryDetail.actividades.length !== 0 && (<strong>Actividades: </strong>)}
            {countryDetail.actividades.map(element => {return (<div key={element.id}>
              <span><u>Nombre:</u> {element.nombre}, Dificultad: {element.dificultad}, Duración: {element.duracion} hs., Temporada: {element.temporada}</span></div>)})} */}
						</div>
					</div>
					<br />
					<Link to="/home">
						{" "}
						<button>Volver</button>{" "}
					</Link>
				</div>
			</div>
		);
	else {
		return <></>;
	}
}
