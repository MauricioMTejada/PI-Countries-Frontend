import axios from "axios";
import store from "../store";
import { getData } from "../../utils/getData/getData";

export const GET_DETAILS = "GET_DETAILS";

export function getDetail(id) {
    const allPaises = store.getState().mainCountries;

	// Obtener la URL de la API
    const { apiUrl } = getData();

    return async function (dispatch) {
        try {
            const response = await axios.get(`${apiUrl}/countries/${id}`);
            const paisData = response.data;

            // Dispatch con los datos recibidos de la API
            return dispatch({
                type: GET_DETAILS,
                payload: paisData,
            });
        } catch (error) {
            console.error("Error al obtener los detalles del país:", error);
            // Puedes agregar un dispatch de error aquí si lo necesitas
        }
    };
}
