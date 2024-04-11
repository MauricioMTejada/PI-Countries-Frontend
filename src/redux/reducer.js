import {
	MAIN_ORDER,
	FILTER_BY_CONTINENT,
	MAIN_PAGE,
	ORDER_BY_NAME,
	ORDER_BY_POPULATION,
	ACTIVE_COUNTRIES,
	FILTRER_AND_ORDER_COUNTRIES,
	GET_DETAILS,
	GET_COUNTRIES,
	GET_BY_NAME,
	SET_FORM_ACTIVITY,
	SET_FORM_ERRORS,
	GET_LIST_ACTIVITIES,
	SELECT_ACTIVITY,
	COUNTRY_TO_ACTIVITY,
	COUNTRY_TO_ACTIVITY_BUTTON_DELETE,
	NOTIFICATION_COUNTRYES_TO_ACTIVITY
} from "./actions/index";

import { FILTER_BY_ACTIVITIES } from "./actions";

const initialState = {
	mainCountries: [],
	editCountries: [],
	detail: [],
	listaActividades: [],
	getByName: [],
	mainOrder: {
		sortAlpha: "sinOrden",
		sortPopul: "sinOrden",
		sortActivity: "Choose",
		sortContinent: "All",
	},
	mainPage: 1,
	activeCountries: [],
	activitiesFormState: {
		nombre: "",
		dificultad: 1,
		duracion: 1,
		temporada: "Verano",
		pais1: "",
		pais2: "",
		pais3: "",
	},
	activitiesFormErrors: {
		nombre: "",
		dificultad: "",
		duracion: "",
		temporada: "",
		pais: "",
	},
	selectActivity: "sinActividad",
	listCountryesToActivity: [{ countryIndex: 1, selectedCountry: {} }],
	notificationCountryesToActivity: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				mainCountries: action.payload,
				editCountries: action.payload,
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

		case GET_LIST_ACTIVITIES:
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
			return { ...state, editCountries: action.payload };

		case SET_FORM_ACTIVITY:
			return { ...state, activitiesFormState: action.payload };

		case SET_FORM_ERRORS:
			return { ...state, activitiesFormErrors: action.payload };

		case SELECT_ACTIVITY:
			return { ...state, selectActivity: action.payload };

		case COUNTRY_TO_ACTIVITY:
			const { countryIndex, selectedCountry } = action.payload;
			const existingIndex = state.listCountryesToActivity.findIndex(
				(item) => item.countryIndex === countryIndex
			);

			// Si el countryIndex ya existe en listCountryesToActivity, actualiza el elemento correspondiente
			if (existingIndex !== -1) {
				const updatedList = state.listCountryesToActivity.map((item) => {
					if (item.countryIndex === countryIndex) {
						return { ...item, selectedCountry };
					} else {
						return item;
					}
				});
				return {
					...state,
					listCountryesToActivity: updatedList,
				};
			} else {
				// Si el countryIndex no existe, agrega un nuevo elemento al final de la lista
				return {
					...state,
					listCountryesToActivity: [
						...state.listCountryesToActivity,
						{ countryIndex, selectedCountry },
					],
				};
			}

		case COUNTRY_TO_ACTIVITY_BUTTON_DELETE:
			return {
				...state,
				listCountryesToActivity: action.payload,
			};

		case NOTIFICATION_COUNTRYES_TO_ACTIVITY:
			return {
				...state,
				notificationCountryesToActivity: action.payload,
			};

		default:
			return { ...state };
	}
};

export default rootReducer;
