import stylePillData from "./PillsData.module.css";
import style from "./PillsActivities.module.css";

export const PillActivity = ({ keyData }) => {
	console.log(keyData);
	return (
		<div className={stylePillData.pill}>
			<div className={stylePillData.contentImage}>
				<img src={keyData.icono} alt={keyData.nombre} className={stylePillData.image} />
			</div>
			{/* <div className={stylePillData.contentTable}> */}
				<table className={style.table}>
					<thead>
						<tr>
							{/* <th>Icono</th> */}
							<th>Nombre</th>
							<th>Dificultad</th>
							<th>Duración</th>
							{/* <th>ID</th> */}
							<th>Temporada</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* <td>{keyData.icono}</td> */}
							<td>{keyData.nombre}</td>
							<td>{keyData.dificultad}</td>
							<td>{keyData.duracion}</td>
							{/* <td>{keyData.id}</td> */}
							<td>{keyData.temporada}</td>
						</tr>
					</tbody>
				</table>
			{/* </div> */}
		</div>
	);
};
