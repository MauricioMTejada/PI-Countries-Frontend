// SearchInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getByName } from "../../../redux/actions/index"

import style from "./SearchInput.module.css";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState("");

    function handleChange(event) {
        setSearchString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (searchString === "") {
            alert("Coloque el nombre de un país.");
        } else {
            dispatch(getByName(searchString));
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            <input
                type="text"
                placeholder="Buscar"
                value={searchString}
                onChange={handleChange}
                title="Coloque el nombre de un país." // Mensaje de validación
                required // Campo requerido
            />
            <button type="submit" className={style.button}>
                Buscar
            </button>
        </form>
    );
};
