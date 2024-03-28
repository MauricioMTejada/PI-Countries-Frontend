import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions";
import style from "./SelectorSortAlphabetical.module.css"

export default function SelectorSortAlphabetical ({ orden, setOrden }) {
    const dispatch = useDispatch();

    function handleSortAlphabetical(element) {
        //console.log(element.target.value);

        dispatch(orderByName(element.target.value));
        setOrden({...orden, sortPopul: "sinOrden", sortAlpha: element.target.value});
    }

    return (
        <div className={style.mainContainer}>
			<div className={style.cardDecoration}></div>
        <div className={style.container}>
            <span style={{ paddingRight: "5px"}}> <strong>{`Países ordenados por orden alfabético:`}</strong> </span>

            <select value={orden.sortAlpha} onChange={(element) => handleSortAlphabetical(element)}>
                <option value="sinOrden">- Elija un orden -</option>
                <option value="ascendente">Ascendente</option>
                <option value="descendente">Descendente</option>
            </select>
        </div></div>
    )
}