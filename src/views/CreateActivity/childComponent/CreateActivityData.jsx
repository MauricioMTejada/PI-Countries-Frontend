import { useSelector } from "react-redux";
import {
	InputNombre,
	Dificultad,
	Duracion,
	Temporada,
	ListaDesplegablePais,
	handleSubmit,
} from "./index";
import { getData } from "../../../utils/getData/getData";

import style from "./CreateActivityData.module.css";

export const CreateActivityData = () => {
	const formData = useSelector((state) => state.activitiesFormState);
	const formErrors = useSelector((state) => state.activitiesFormErrors);

	const { apiUrl } = getData();

	const submitHandler = handleSubmit(formData, formErrors, apiUrl);

	return (
		<div className={style.mainContainer}>
			<form onSubmit={submitHandler}>
				<InputNombre />
				<Dificultad />
				<Duracion />
				<Temporada />
				<ListaDesplegablePais />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
