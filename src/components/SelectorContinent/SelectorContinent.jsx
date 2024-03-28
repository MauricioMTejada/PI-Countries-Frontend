import { useDispatch, useSelector } from "react-redux";
import style from "./SelectorContinent.module.css";
import { actionMainOrder, filterContinent, mainPage } from "../../redux/actions/index";

export function SelectorContinent() {
	const dispatch = useDispatch();

	const mainOrder = useSelector(state => state.mainOrder);
	const paises = useSelector(state => state.paises);
    console.log(mainOrder);
	console.log(paises);

	// Orden por Continente:
	function handleFilterContinent(event) {
		const orderContinent = event.target.value;
		dispatch(filterContinent(orderContinent));

		dispatch(actionMainOrder({
			...mainOrder,
			sortPopul: "sinOrden",
			sortAlpha: "sinOrden",
			sortActivity: "Choose",
			sortContinent: orderContinent,
		}))

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
						<option value="Antartica">Antártica</option>
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
