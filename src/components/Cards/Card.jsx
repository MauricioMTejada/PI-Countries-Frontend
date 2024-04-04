import { Link } from "react-router-dom";

import style from "./Card.module.css";

export const Card = (props) => {

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
				<p>{props.stringPoblacion} habitantes</p>
			</div>
		</div>
	);
};
