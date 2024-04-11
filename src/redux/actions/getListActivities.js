//Obtener actividades para la lista desplegable "Actividades"

import axios from "axios";
import { getData } from "../../utils/getData/getData";

export const GET_LIST_ACTIVITIES = "GET_LIST_ACTIVITIES";

export function getListActivities() {
	return async function (dispatch) {
		// Obtener la URL de la API
		const { apiUrl } = getData();

		try {
			let json = await axios.get(`${apiUrl}/activity/`);
			let actividades = json.data.actividades;

			return dispatch({
				type: GET_LIST_ACTIVITIES,
				payload: actividades,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
