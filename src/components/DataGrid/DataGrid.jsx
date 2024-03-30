import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./DataGrid.module.css";

export const DataGrid = ({}) => {
	const activeCountries = useSelector((state) => state.activeCountries);

	return (
		<div className={style.container}>
			{activeCountries.map((pais) => {
				return (
					<Card
						key={pais.id}
						id={pais.id}
						nombre={pais.nombre}
						bandera={pais.bandera}
						continente={pais.continente}
						capital={pais.capital}
						subregion={pais.subregion}
						area={pais.area}
						poblacion={pais.poblacion}
						stringPoblacion={pais.stringPoblacion}
					/>
				);
			})}
		</div>
	);
};
