import { useSelector } from "react-redux";
import { noImage } from '../../assets/others/index'

import stylePillData from "./PillsData.module.css";
import style from "./PillsActivities.module.css";

export const PillActivity = () => {

	const { selectActivity } = useSelector( (state) => state.statesAssignActivity );

	const keyData = selectActivity;

	const iconSrc = keyData.icono ? keyData.icono : noImage;

	return (
		<div className={stylePillData.pill}>
			<div className={stylePillData.contentImage}>
				<img src={iconSrc} alt="imagen" className={stylePillData.image} />
			</div>
				<table className={style.table}>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Dificultad</th>
							<th>Duración</th>
							<th>Temporada</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{keyData.nombre}</td>
							<td>{keyData.dificultad}</td>
							<td>{keyData.duracion}</td>
							<td>{keyData.temporada}</td>
						</tr>
					</tbody>
				</table>
		</div>
	);
};
