import { useDispatch, useSelector } from "react-redux";
import { setFormActivity } from "../../../redux/actions/index";

export function Dificultad() {
	const formData = useSelector((state) => state.activitiesFormState);
	// console.log(formData);

	const dispatch = useDispatch();

	const handlerInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormActivity({ ...formData, [name]: value }));
	};

	return (
		<div>
			<span>Dificultad: </span>
			<select
				onChange={handlerInputChange}
				value={formData.dificultad}
				name="dificultad">
				<option value={1}>- 1 -</option>
				<option value={2}>- 2 -</option>
				<option value={3}>- 3 -</option>
				<option value={4}>- 4 -</option>
				<option value={5}>- 5 -</option>
			</select>
		</div>
	);
}
