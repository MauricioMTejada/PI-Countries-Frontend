import { useDispatch, useSelector } from "react-redux";
import style from "./SelectorSortPopulation.module.css";
import { actionMainOrder } from "../../../../redux/actions/index";

export function SelectorSortPopulation() {
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
				<div className={style.text}>
					<span>
						{" "} <strong> {" "} {`Orden por cantidad de habitantes:`}{" "} </strong>{" "}
					</span>
				</div>

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
