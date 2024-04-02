import axios from "axios";
import store from "../store";
import { getData } from "../../utils/getData/getData";

export const GET_DETAILS = "GET_DETAILS";

export function getDetail(id) {
    const allPaises = store.getState().mainCountries;

	// Obtener la URL de la API
    const { apiUrl } = getData();

	// Log para depuración
    console.log(`imprimo el id: ${id}`);
    console.log(apiUrl);

    return async function (dispatch) {
        try {
            // Buscar el país por su ID en el estado local primero
            // const foundPais = allPaises.find(pais => pais.id === id);
            // if (foundPais) {
            //     // Si se encuentra en el estado local, dispatch directamente
            //     return dispatch({
            //         type: GET_DETAILS,
            //         payload: foundPais,
            //     });
            // }

            // Si no se encuentra en el estado local, realizar solicitud a la API
            console.log(`${apiUrl}/countries/${id}`);
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

// import axios from "axios";
// import store from "../store";
// import { getData } from "../../utils/getData/getData";

// export const GET_DETAILS = "GET_DETAILS";

// export function getDetail(id) {

// 	let allPaises = store.getState().mainCountries;
// 	const { apiUrl } = getData();
// 	console.log(`imprimo el id: ${id}`);
// 	console.log(apiUrl)

// 	return async function (dispatch) {

// 		for (let i = 0; i < allPaises.length; i++) {
// 			console.log(`Paso por el for`);
// 			if (allPaises[i].id == id) {
// 				return dispatch({
// 					type: GET_DETAILS,
// 					payload: allPaises[i],
// 				});
// 			}
// 		}
// 		console.log(id);

// 		// Para solicitar los detalles del Pais al servidor:
// 		try {
// 			console.log(`${apiUrl}countries/:${id}`)
// 			let json = await axios.get(`${apiUrl}/countries/:${id}`);
// 			// Al dato que llega le agrego las actividades:
// 			// json.data.actividades = nombreActividadesSinDuplicados;

// 			return dispatch({
// 				type: GET_DETAILS,
// 				payload: json.data,
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// }
