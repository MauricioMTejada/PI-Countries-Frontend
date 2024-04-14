import axios from "axios";
import { actionStateAssignActivity } from "../../redux/actions/index";
import { getData } from "../getData/getData";
import store from "../../redux/store";


export const sendDataAssignActivity = ({ setLoading, dispatch }) => {

	const { apiUrl } = getData();

	const statesAssignActivity = store.getState().statesAssignActivity;
	const { optionActivity, listCountriesToActivity } = store.getState().statesAssignActivity;

	if ( optionActivity && listCountriesToActivity.some((objeto) => objeto.active === true) ) {
		// Estado ícono de carga:
		setLoading(true);

		// Estado de "enviando información":
		dispatch(actionStateAssignActivity({ informationSent: true }));
		dispatch(actionStateAssignActivity({ messageStatusBlink: true }));

		axios
			.post(`${apiUrl}/activity/assignActivity`, statesAssignActivity)
			.then((response) => {
				console.log(response);
				// Realizar acciones adicionales basadas en la respuesta del servidor aquí
				// Por ejemplo, puedes acceder a los datos de la respuesta y realizar operaciones adicionales
				const responseData = response.data.statesAssignActivity.listCountriesToActivity;
				console.log(responseData);
				// Realizar acciones adicionales según la respuesta del servidor

				// Actualizar el estado, detener la carga y despachar acciones de Redux
				setLoading(false);
				dispatch(actionStateAssignActivity({ listCountriesToActivity: responseData }));
				dispatch(actionStateAssignActivity({ informationSent: false }));
				dispatch(actionStateAssignActivity({ informationResOK: true }));
				dispatch(actionStateAssignActivity({ messageStatusBlink: true }));
				dispatch(actionStateAssignActivity({ endOfWork: true }));
			  })
			.catch((error) => {
				console.log(error);
				setLoading(false);
				dispatch(actionStateAssignActivity({ informationSent: false }));
				dispatch( actionStateAssignActivity({ informationResBad: true }) );
				dispatch( actionStateAssignActivity({ messageStatusBlink: true }) );
			});
	} else {
		// Pasa por aquí si falta algún dato para poder enviar la petición
		dispatch(actionStateAssignActivity({ messageStatusBlink: true }));
	}
};
