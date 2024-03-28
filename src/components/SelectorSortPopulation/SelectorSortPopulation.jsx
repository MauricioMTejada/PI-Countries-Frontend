import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../redux/actions";
import style from "./SelectorSortPopulation.module.css"

export default function SelectorSortPopulation ({ orden, setOrden }) {
    const dispatch = useDispatch();

    function handleSortPoblación(element) {
        //console.log(element.target.value);
        dispatch(orderByPopulation(element.target.value));
        setOrden({...orden, sortAlpha: "sinOrden", sortPopul: element.target.value});
      }

    return (
        <div className={style.mainContainer}>
        <div className={style.cardDecoration}></div>
        <div className={style.container}>
            <span style={{ paddingRight: "5px"}}> <strong> {`Países ordenados de acuerdo a la cantidad de habitantes:`} </strong> </span>

            <select value={orden.sortPopul} onChange={(element) => handleSortPoblación(element)}>
                <option value="sinOrden">- Elija un orden -</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
        </div>
    );
}