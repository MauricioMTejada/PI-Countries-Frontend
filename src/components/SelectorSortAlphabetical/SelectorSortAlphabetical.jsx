import { useDispatch, useSelector } from "react-redux";
import { actionMainOrder, orderByName } from "../../redux/actions/index";
import style from "./SelectorSortAlphabetical.module.css";

export default function SelectorSortAlphabetical() {
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
				<span style={{ paddingRight: "5px" }}>
					{" "} <strong>{`Países ordenados por orden alfabético:`}</strong>{" "}
				</span>

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
