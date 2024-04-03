import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallLoading } from "../../../components/Loading/Loading";
import {
	InputNombre,
	Dificultad,
	Duracion,
	Temporada,
	ListaDesplegablePais,
	handleSubmit,
} from "./index";

import style from "./CreateActivityData.module.css";

export const CreateActivityData = () => {
	const [loading, setLoading] = useState(false);

	const formData = useSelector((state) => state.activitiesFormState);
	const formErrors = useSelector((state) => state.activitiesFormErrors);

	const dispatch = useDispatch();

	const submitForm = (event) => {
		event.preventDefault();
		setLoading(true);
		handleSubmit(formData, formErrors, dispatch, setLoading);
	};

	return (
		<div className={style.mainContainer}>
			<form onSubmit={submitForm}>
				<InputNombre />
				<Dificultad />
				<Duracion />
				<Temporada />
				<ListaDesplegablePais />
				<div className={style.buttonContainer}>
					<div className={style.buttonCapsule}>
						<button type="submit">Enviar</button>
						{loading && (
							<div className={style.SmallLoading}>
								<SmallLoading />
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};
