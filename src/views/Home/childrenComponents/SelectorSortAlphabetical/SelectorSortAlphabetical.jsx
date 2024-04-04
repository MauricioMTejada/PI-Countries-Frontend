import { useDispatch, useSelector } from "react-redux";
import style from "./SelectorSortAlphabetical.module.css";
import { actionMainOrder } from "../../../../redux/actions/index";

export function SelectorSortAlphabetical() {
	const dispatch = useDispatch();
	const mainOrder = useSelector((state) => state.mainOrder);

	function handleSortAlphabetical(element) {
		//console.log(element.target.value);
		const setValue = element.target.value;

		// dispatch(orderByName(setValue));
		dispatch(
			actionMainOrder({
				...mainOrder,
				sortPopul: "sinOrden",
				sortAlpha: setValue,
			})
		);
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.cardDecoration}></div>
			<div className={style.container}>
				<div className={style.text}>
					<span>
						{" "} <strong>{`Orden alfabético:`}</strong>{" "}
					</span>
				</div>

				<select
					value={mainOrder.sortAlpha}
					onChange={(element) => handleSortAlphabetical(element)}>
					<option value="sinOrden">- Elija un orden -</option>
					<option value="ascendente">Ascendente</option>
					<option value="descendente">Descendente</option>
				</select>
			</div>
		</div>
	);
}
