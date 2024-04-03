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
import { TitleSection } from "../../../components/TitleSection/TitleSection";

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

	const title = "Crear Actividad";

	return (
		<div className={style.mainContainer}>
			<TitleSection title={title} />
			<form onSubmit={submitForm}>
				<div className={style.gridContainer}>
					<div className={style.gridItem01}>
						<InputNombre />
					</div>
					<div className={style.gridItem02}>
						<Dificultad />
					</div>
					<div className={style.gridItem03}>
						<Temporada />
					</div>
					<div className={style.gridItem04}>
						<Duracion />
					</div>
					<div className={style.gridItem05}>
						<ListaDesplegablePais />
					</div>
				</div>
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
