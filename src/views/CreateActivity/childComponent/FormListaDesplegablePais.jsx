import { useDispatch, useSelector } from "react-redux";
import { setFormActivity, setFormErrors } from "../../../redux/actions/index";

export function ListaDesplegablePais(){
    const formData = useSelector((state) => state.activitiesFormState);
    const formErrors = useSelector((state) => state.activitiesFormErrors);
    const allPaises = useSelector((state) => state.mainCountries);
	// console.log(formData);
    // console.log(allPaises);

    const dispatch = useDispatch();

    const handlerInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormActivity({ ...formData, [name]: value }));
        dispatch(setFormErrors());
	};

    function renderPaises() {
        return allPaises.map((pais) => (
        <option key={pais.id} value={pais.id}>
            {pais.nombre}
        </option>
        ));
    }

    return(
        <div>
            <div>
            <span>Pais 1: </span>
                <select onChange={handlerInputChange} value={formData.pais1} name="pais1">
                    <option value="">- Seleccione un País -</option>
                    {renderPaises()}
                </select>{" "}
                <br />

            <span>Pais 2:_</span>
                <select onChange={handlerInputChange} value={formData.pais2} name="pais2">
                    <option value="">- Seleccione un País -</option>
                    {renderPaises()}
                </select>{" "}
                <br />

            <span>Pais 3:_</span>
                <select onChange={handlerInputChange} value={formData.pais3} name="pais3">
                    <option value="">- Seleccione un País -</option>
                    {renderPaises()}
                </select>
                </div>
                <br />

            {formErrors.pais && <span>{formErrors.pais}</span>}
        </div>
    )
}