// submitLogic.js

import axios from "axios";
import { setFormActivity } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";

export const handleSubmit = (formData, formErrors, apiUrl) => {
    const dispatch = useDispatch();

    return (event) => {
        event.preventDefault();

        if (formData.nombre === "") {
            alert("Debe completar un nombre. No se puede enviar");
            return;
        }
        if (formErrors.pais || formErrors.nombre)
            alert("Hay errores en el Formulario. No se puede enviar");
        else {
            axios
                .post(`${apiUrl}/activity`, formData)
                .then((res) => {
                    alert(res.data);
                    dispatch(
                        setFormActivity({
                            ...formData,
                            nombre: "",
                            dificultad: 1,
                            duracion: 1,
                            temporada: "Verano",
                            pais1: "",
                            pais2: "",
                            pais3: "",
                        })
                    );
                })
                .catch((err) => alert(err));
        }
    };
};
