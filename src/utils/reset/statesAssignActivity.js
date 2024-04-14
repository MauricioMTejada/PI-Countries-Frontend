import { noImage } from "../../assets/others";

export const baseStatesAssignActivity = {
		messageStatusBlink: false,
		optionActivity: false,
		selectActivity: { dificultad: "-", duracion: "-", icono: noImage, id: "-", nombre: "-", temporada: "-", },
		listCountriesToActivity: [{ countryIndex: 1, active: false, selectedCountry: {}, saveData: false, }],
		notificationCountryesToActivity: {},
		informationSent: false,
		informationResOK: false,
		informationResBad: false,
		endOfWork: false,
	}