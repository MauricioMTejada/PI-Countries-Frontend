import store from "../store";

export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";

export function orderByPopulation(orden) {
	let allPaises = store.getState().paises;

	if (orden === "asc") {
		allPaises.sort(function (a, b) {
			if (a.poblacion > b.poblacion) {
				return 1;
			}
			if (a.poblacion < b.poblacion) {
				return -1;
			}
			return 0;
		});
	}

	if (orden === "desc") {
		allPaises.sort(function (a, b) {
			if (a.poblacion < b.poblacion) {
				return 1;
			}
			if (a.poblacion > b.poblacion) {
				return -1;
			}
			return 0;
		});
	}

	// if (orden === "sinOrden") {
	// 	allPaises = store.getState().backupPaises;
	// }

	return {
		type: ORDER_BY_POPULATION,
		payload: allPaises,
	};
}
