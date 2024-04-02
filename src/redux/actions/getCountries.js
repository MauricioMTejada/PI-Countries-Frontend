import axios from "axios";
import { formatData } from "../../utils/formatData/formatData";

export const GET_COUNTRIES = "GET_COUNTRIES";

// Función para obtener la lista completa de países
export const getCountries = (apiUrl, api, data) => {

	return async function (dispatch) {
		try {
			if (!api) {
				dispatch({ type: GET_COUNTRIES, payload: data });
			} else {
				const response = await axios.get(`${apiUrl}/countries/`);

                const data = response.data;
                const formatedData = formatData(data);
				dispatch({ type: GET_COUNTRIES, payload: response.data });
				// dispatch({ type: GET_COUNTRIES, payload: [] });
			}
		} catch (error) {
			console.error("Error al obtener la lista de países:", error);
		}
	};
};
