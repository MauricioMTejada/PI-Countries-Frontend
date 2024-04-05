//Obtener actividades para la lista desplegable "Actividades"

import axios from "axios";
import { getData } from "../../utils/getData/getData";

export const GET_LIST_ACTIVITIES = "GET_LIST_ACTIVITIES";

export function getListActivities() {
	return async function (dispatch) {
		// Obtener la URL de la API
		const { apiUrl } = getData();

		// Para solicitar actividades:
		let nombreActividadesSinDuplicados = [];

		try {
			let json = await axios.get(`${apiUrl}/activity/`);
			let actividades = json.data.actividades;
			// console.log(actividades)
			// let nombreActividades = actividades.map((element) => {
			// 	return element.nombre;
			// });
			// console.log(nombreActividades);
			// nombreActividadesSinDuplicados = nombreActividades.filter(
			// 	(valor, indice, arreglo) => arreglo.indexOf(valor) === indice
			// );
			// console.log(nombreActividadesSinDuplicados);

			// return dispatch({
			// 	type: GET_LIST_ATIVITIES,
			// 	payload: nombreActividadesSinDuplicados,
			// });
			return dispatch({
				type: GET_LIST_ACTIVITIES,
				payload: actividades,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
