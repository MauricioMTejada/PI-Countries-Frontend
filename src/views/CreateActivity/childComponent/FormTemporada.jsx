import { useDispatch, useSelector } from "react-redux";
import { setFormActivity } from "../../../redux/actions/index";

export function Temporada() {
	const formData = useSelector((state) => state.activitiesFormState);
	// console.log(formData);

	const dispatch = useDispatch();

	const handlerInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormActivity({ ...formData, [name]: value }));
	};

	return (
		<div>
			<span>Temporada: </span>
			<select
				onChange={handlerInputChange}
				value={formData.temporada}
				name="temporada">
				<option value="Verano">Verano</option>
				<option value="Otoño">Otoño</option>
				<option value="Inverno">Inverno</option>
				<option value="Primavera">Primavera</option>
			</select>
		</div>
	);
}
