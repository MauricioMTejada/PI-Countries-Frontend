import {
	MAIN_ORDER,
	FILTER_BY_CONTINENT,
	MAIN_PAGE,
	ORDER_BY_NAME,
	ORDER_BY_POPULATION,
	ACTIVE_COUNTRIES,
	FILTRER_AND_ORDER_COUNTRIES,
} from "./actions/index";

import {
	GET_PAISES,
	GET_BY_NAME,
	GET_DETAILS,
	GET_LIST_ATIVITIES,
	FILTER_BY_ACTIVITIES,
} from "./actions";

import { arrayPaises } from "../mock/dataMock";


const initialState = {
	detail: [],
	listaActividades: [],
	getByName: [],
	editCountries: arrayPaises,
	mainCountries: arrayPaises,
	mainOrder: {
		sortAlpha: "sinOrden",
		sortPopul: "sinOrden",
		sortActivity: "Choose",
		sortContinent: "All",
	},
	mainPage: 1,
	activeCountries: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_PAISES:
			return { ...state,
				mainCountries: action.payload,
				editCountries: action.payload
			};

		case GET_BY_NAME:
			return { ...state, getByName: action.payload };

		case FILTER_BY_CONTINENT:
			// console.log(`en el Redux:`);
			// console.log(action.payload);
			return { ...state, editCountries: action.payload };

		case ORDER_BY_NAME:
			console.log(`en el Redux:`);
			console.log(action.payload);
			return { ...state, editCountries: action.payload };

		case ORDER_BY_POPULATION:
			return { ...state, editCountries: action.payload };

		case GET_DETAILS:
			return { ...state, detail: action.payload };

		case GET_LIST_ATIVITIES:
			return { ...state, listaActividades: action.payload };

		case FILTER_BY_ACTIVITIES:
			return { ...state, mainCountries: action.payload };

		case MAIN_ORDER:
			return {
				...state,
				mainOrder: action.payload,
			};

		case MAIN_PAGE:
			return {
				...state,
				mainPage: action.payload,
			};

		case ACTIVE_COUNTRIES:
			return {
                ...state,
                activeCountries: action.payload,
            };

		case FILTRER_AND_ORDER_COUNTRIES:
			return { ...state,
				editCountries: action.payload
			};

		default:
			return { ...state };
	}
};

export default rootReducer;
