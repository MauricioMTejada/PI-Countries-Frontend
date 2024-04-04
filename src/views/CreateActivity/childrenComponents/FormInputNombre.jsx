import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormActivity, setFormErrors } from "../../../redux/actions/index";
import { PillChildren } from "../../../components/PillsData/PillsData";
import { area } from "../../../assets/decorations";
import { name02Activity, nameActivity } from "../../../assets/pillsActivities";
import { TooltipErrors } from "../../../components/Tooltip/TooltipErrors";

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

	const dataComponent = { title: "Nombre" };

	return (
		<>
			<PillChildren image={name02Activity} title="Nombre de la actividad">
				<TooltipErrors text={'nombre'}>
					<input
						type="text"
						value={formData.nombre}
						onChange={handlerInputChange}
						name="nombre"
					/>
				</TooltipErrors>
			</PillChildren>
		</>
	);
}
