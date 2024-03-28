import style from "./Card.module.css";
import { Link } from "react-router-dom";

const formatPoblacion = (poblacion) => {
	if (poblacion > 1000000) {
		// Si la población es mayor a 1 millón, formatearla en formato "1,0 M"
		const poblacionMillones = (poblacion / 1000000).toFixed(1); // Convertir a millones con un decimal
		return `${poblacionMillones} M`;
	} else if (poblacion > 1000) {
		// Si la población es mayor a 1000, formatearla en formato "1 k"
		const poblacionK = (poblacion / 1000).toFixed(0); // Convertir a miles sin decimales
		return `${poblacionK} k`;
	} else {
		// De lo contrario, usar el formato estándar con separadores de miles
		return poblacion.toLocaleString("en-US");
	}
};

const Card = (props) => {
	const poblacionFormateada = formatPoblacion(props.poblacion);

	return (
		<div className={style.card}>
			<div className={style.cardImage}>
				<div className={style.cardDecoration}></div>

				<Link to={`/home/${props.id}`} className={style.link}>
					<div className={style.imageBorder}>
						<img
							src={props.bandera}
							alt="Bandera"
							// style={{ maxWidth: "250px", maxHeight: "170px" }}
							className={style.image}
						/>
					</div>
				</Link>
			</div>

			<div className={style.cardDecoration}></div>

			<div className={style.cardInfo}>
				<p className={style.countryName}> {props.nombre} </p>
				<p>{props.continente}</p>
				<p>{poblacionFormateada} habitantes</p>
			</div>
		</div>
	);
};

export default Card;
