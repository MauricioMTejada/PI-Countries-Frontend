import store from "../store";

export const ORDER_BY_NAME = "ORDER_BY_NAME";

export function orderByName(orden) {
	let allPaises = store.getState().paises;

	if (orden === "ascendente") {
		allPaises.sort(function (a, b) {
			if (a.nombre > b.nombre) {
				return 1;
			}
			if (a.nombre < b.nombre) {
				return -1;
			}
			return 0;
		});
	}

	if (orden === "descendente") {
		allPaises.sort(function (a, b) {
			if (a.nombre < b.nombre) {
				return 1;
			}
			if (a.nombre > b.nombre) {
				return -1;
			}
			return 0;
		});
	}

	// if (orden === "sinOrden") {
	//   allPaises = store.getState().backupPaises; }

	return {
		type: ORDER_BY_NAME,
		payload: allPaises,
	};
}
