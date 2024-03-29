import { useDispatch, useSelector } from "react-redux";
import { actionMainOrder, orderByPopulation } from "../../redux/actions/index";
import style from "./SelectorSortPopulation.module.css";

export default function SelectorSortPopulation() {
	const dispatch = useDispatch();
	const mainOrder = useSelector((state) => state.mainOrder);

	function handleSortPoblación(element) {
		//console.log(element.target.value);
		const setValue = element.target.value;

		// dispatch(orderByPopulation(setValue));
		dispatch(
			actionMainOrder({
				...mainOrder,
				sortPopul: setValue,
				sortAlpha: "sinOrden",
			})
		);
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.cardDecoration}></div>
			<div className={style.container}>
				<span style={{ paddingRight: "5px" }}>
					{" "} <strong> {" "} {`Países ordenados de acuerdo a la cantidad de habitantes:`}{" "} </strong>{" "}
				</span>

				<select
					value={mainOrder.sortPopul}
					onChange={(element) => handleSortPoblación(element)}>
					<option value="sinOrden">- Elija un orden -</option>
					<option value="ascendente">Ascendente</option>
					<option value="descendente">Descendente</option>
				</select>
			</div>
		</div>
	);
}
