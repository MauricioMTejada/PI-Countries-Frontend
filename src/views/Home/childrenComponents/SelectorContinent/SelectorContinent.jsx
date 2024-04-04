import { useDispatch, useSelector } from "react-redux";
import style from "./SelectorContinent.module.css";
import { actionMainOrder, mainPage } from "../../../../redux/actions/index";

export function SelectorContinent() {
	const dispatch = useDispatch();

	const mainOrder = useSelector((state) => state.mainOrder);
	// console.log(mainOrder);

	function handleFilterContinent(event) {
		const setValue = event.target.value;

		dispatch(
			actionMainOrder({
				...mainOrder,
				sortPopul: "sinOrden",
				sortAlpha: "sinOrden",
				sortActivity: "Choose",
				sortContinent: setValue,
			})
		);

		dispatch(mainPage(1));
	}

	return (
		<div className={style.mainContainer}>

			<div className={style.cardDecoration}></div>

			<div className={style.container}>
				<span className={style.leftElement}>
					{" "}
					<strong>{`Continente:`} </strong>{" "}
				</span>

				<span className={style.rightElement}>
					<select
						style={{ fontSize: "1.2rem" }}
						value={mainOrder.sortContinent}
						onChange={(event) => handleFilterContinent(event)}>
						<option value="All">Todos los Países</option>
						<option value="Africa">África</option>
						<option value="Antarctica">Antártica</option>
						<option value="North America">América del Norte</option>
						<option value="South America">América del Sur</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europa</option>
						<option value="Oceania">Oceanía</option>
					</select>
				</span>
			</div>
		</div>
	);
}
