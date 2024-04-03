import axios from "axios";
import { setFormActivity } from "../../../redux/actions/index";

import { getData } from "../../../utils/getData/getData";

export const handleSubmit = (formData, formErrors, dispatch, setLoading) => {

	const { apiUrl } = getData();

	if (formData.nombre === "") {
		alert("Debe completar un nombre. No se puede enviar")
		setLoading(false);
		return;
	}

	if (formErrors.pais || formErrors.nombre) {
		alert("Hay errores en el Formulario. No se puede enviar")
		setLoading(false);
	} else {
		axios
			.post(`${apiUrl}/activity`, formData)
			.then((res) => {
				alert(res.data);
				console.log(res.data);
			})
			.then(() => {
				dispatch(
					setFormActivity({
						...formData,
						nombre: "",
						dificultad: 1,
						duracion: 1,
						temporada: "Verano",
						pais1: "",
						pais2: "",
						pais3: "",
					})
				);
			})
			.catch((err) => alert(err))
			.finally(() => {
				setLoading(false);
			});
	}
};
