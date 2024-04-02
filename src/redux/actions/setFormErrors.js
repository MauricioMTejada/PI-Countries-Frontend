import store from "../store";

export const SET_FORM_ERRORS = "SET_FORM_ERRORS";

export const setFormErrors = () => {
    return (dispatch, getState) => {
        const formData = getState().activitiesFormState;
        const formErrors = {};

        // Validación del nombre
        if (/^[A-ZÑ][a-zñ]*$/.test(formData.nombre)) {
            formErrors.nombre = "";
        } else {
            formErrors.nombre = "Nombre con mayúscula";
        }
        if (formData.nombre === "") formErrors.nombre = "Nombre vacío";

        // Validación de los países
        if (formData.pais2 === "" && formData.pais3 === "") {
            // No se hace nada si no hay países adicionales
        } else {
            if (
                formData.pais1 === formData.pais2 ||
                formData.pais1 === formData.pais3 ||
                formData.pais2 === formData.pais3
            ) {
                formErrors.pais = "Los países deben ser distintos";
            } else {
                formErrors.pais = "";
            }
        }

        // Dispatch de la acción para actualizar los errores del formulario
        dispatch({
            type: SET_FORM_ERRORS,
            payload: formErrors,
        });
    };
};
