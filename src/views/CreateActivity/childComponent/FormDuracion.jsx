import { useDispatch, useSelector } from "react-redux";
import { setFormActivity } from "../../../redux/actions/index";

export function Duracion({ changeHandler, form }) {
	const formData = useSelector((state) => state.activitiesFormState);
	// console.log(formData);

	const dispatch = useDispatch();

	const handlerInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormActivity({ ...formData, [name]: value }));
	};

	return (
		<div>
			<span>Duración: </span>
			<select
				onChange={handlerInputChange}
				value={formData.duracion}
				name="duracion">
				<option value={1}>- 1 -</option>
				<option value={2}>- 2 -</option>
				<option value={3}>- 3 -</option>
				<option value={4}>- 4 -</option>
				<option value={5}>- 5 -</option>
				<option value={6}>- 6 -</option>
				<option value={7}>- 7 -</option>
				<option value={8}>- 8 -</option>
				<option value={9}>- 9 -</option>
				<option value={10}>- 10 -</option>
				<option value={11}>- 11 -</option>
				<option value={12}>- 12 -</option>
			</select>
		</div>
	);
}
