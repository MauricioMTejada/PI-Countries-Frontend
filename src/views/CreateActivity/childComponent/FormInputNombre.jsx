import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormActivity, setFormErrors } from "../../../redux/actions/index";

export function InputNombre() {
	const formData = useSelector((state) => state.activitiesFormState);
	const formErrors = useSelector((state) => state.activitiesFormErrors);
	// console.log(formData);

	const dispatch = useDispatch();

	const handlerInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormActivity({ ...formData, [name]: value }));
		dispatch(setFormErrors());
	};

	return (
		<>
			<div>
				<label>Nombre: </label>
				<input
					type="text"
					value={formData.nombre}
					onChange={handlerInputChange}
					name="nombre"
				/>
			</div>

			{formErrors.nombre && <span>{formErrors.nombre}</span>}
		</>
	);
}
