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

//* solicitud directamente a la API (discontinuado)
// 	return async function (dispatch) {
// 		let URL_BASE = "https://restcountries.com/v3/all";
// 		let id = "";
// 		let nombre = "";
// 		let bandera = "";
// 		let continente = "";
// 		let capital = "";
// 		let subregion = "";
// 		let area = 0;
// 		let poblacion = 0;

// 		const paises = [];

// 		fetch(`${URL_BASE}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				for (let i = 0; i < data.length; i++) {
// 					id = data[i].cca3;
// 					nombre = data[i].name.common;
// 					bandera = data[i].flags[1];
// 					continente = data[i].continents[0];

// 					if (data[i].capital) capital = data[i].capital[0];
// 					else capital = "Sin Capital";

// 					if (data[i].subregion) subregion = data[i].subregion;
// 					else subregion = "Sin Subregion";

// 					area = Math.round(data[i].area);
// 					poblacion = data[i].population;

// 					console.log(
// 						`{id: "${id}", nombre: "${nombre}", bandera: "${bandera}", continente: "${continente}", capital: "${capital}", subregion: "${subregion}", area: ${area}, poblacion: ${poblacion} }, `
// 						// ", nombre:", nombre,
// 						// ", bandera:", bandera,
// 						// ", continente:", continente,
// 						// ", capital:", capital,
// 						// ", subregion:", subregion,
// 						// ", area:", area,
// 						// ", poblacion:", poblacion,
// 						// "},"
// 					);

// 					paises.push({
// 						id,
// 						nombre,
// 						bandera,
// 						continente,
// 						capital,
// 						subregion,
// 						area,
// 						poblacion,
// 					});
// 				}
// 			});

// 		console.log("--- Base de Batos Cargada ---");
// 		console.log(paises);

// 		// const apiData = await axios.get(URLBASE + "countries");
// 		// const apiData = await axios.get(`https://restcountries.com/v3/all`)
// 		// const paises = apiData.data;
// 		dispatch({ type: GET_COUNTRIES, payload: paises });
// 	};
// };
