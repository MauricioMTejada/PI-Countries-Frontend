import store from "../store";

export const FILTRER_AND_ORDER_COUNTRIES = "FILTRER_AND_ORDER_COUNTRIES";

export const filtrerAndOrderCountries = () => {
	let filterAndOrder = store.getState().mainOrder;
	let countries = [...store.getState().mainCountries];

	countries = filterContinent(countries, filterAndOrder);
	countries = orderByPopulation(countries, filterAndOrder);
    countries = orderByName(countries, filterAndOrder);

	// console.log(filterAndOrder);
	// console.log(countries);

	return {
		type: FILTRER_AND_ORDER_COUNTRIES,
        payload: countries,
	};
};

const filterContinent = (countries, filterAndOrder) => {
	const order = filterAndOrder.sortContinent;

	const filter =
		order === "All"
			? countries
            // ? countries.filter((element) => element.continente === order)
			: countries.filter((element) => element.continente === order);

	return filter;
};

const orderByPopulation = (countries, filterAndOrder) => {
	const order = filterAndOrder.sortPopul;

	if (order === "ascendente") {
		countries.sort(function (a, b) {
			if (a.poblacion > b.poblacion) {
				return 1;
			}
			if (a.poblacion < b.poblacion) {
				return -1;
			}
			return 0;
		});
	}

	if (order === "descendente") {
		countries.sort(function (a, b) {
			if (a.poblacion < b.poblacion) {
				return 1;
			}
			if (a.poblacion > b.poblacion) {
				return -1;
			}
			return 0;
		});
	}

	// if (order === "sinOrden") {
	// 	countries = store.getState().backupPaises;
	// }

	return countries;
};

const orderByName = (countries, filterAndOrder) => {
    const order = filterAndOrder.sortAlpha;

	if (order === "ascendente") {
		countries.sort(function (a, b) {
			if (a.nombre > b.nombre) {
				return 1;
			}
			if (a.nombre < b.nombre) {
				return -1;
			}
			return 0;
		});
	}

	if (order === "descendente") {
		countries.sort(function (a, b) {
			if (a.nombre < b.nombre) {
				return 1;
			}
			if (a.nombre > b.nombre) {
				return -1;
			}
			return 0;
		});
	}

	// if (order === "sinOrden") {
	//   countries = store.getState().backupPaises; }

	return countries;
}
