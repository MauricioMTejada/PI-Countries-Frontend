import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Pagination.module.css";
import { mainPage } from "../../redux/actions/index";

export const Pagination = () => {

    const dispatch = useDispatch();

    // Arreglo de Países:
        const allPaises = useSelector((state) => state.paises);

	// Número de página actual:
        const activePage = useSelector((state) => state.mainPage);

	// Cantidad de elementos a renderizar:
	    const presentarPaises = 10;
	// Último elemento:
	    const indexOfLastCountry = activePage * presentarPaises;
	// Primer elemento:
	    const indexOfFirstCounty = indexOfLastCountry - presentarPaises;
	// Extraigo del array los elementos a renderizar
        const currentCountry = allPaises.slice(
            indexOfFirstCounty,
            indexOfLastCountry
        );

	// Función que setea el número de página a renderizar:
	const handlePaginado = (pageNumber) => {
        dispatch(mainPage(pageNumber));
		console.log(pageNumber);
	};

	// Array de números de paginado a los que se le dará un vínculo:
        const pageNumbers = [];
        for (let i = 0; i < Math.ceil(allPaises.length / presentarPaises); i++) {
            pageNumbers.push(i + 1);
        }

	return (
		<nav>
			<ul style={{ paddingInlineStart: "0px" }}>
				{pageNumbers.length > 1 &&
					pageNumbers.map((number) => (
						<a
							className={style.numeroContainer}
							key={"a" + number}
							href={`#${number}a`}>
							<span
								href={`#${number}`}
								key={number}
								className={style.numeroStyle}
								onClick={() => handlePaginado(number)}>
								{number}
							</span>
						</a>
					))}
			</ul>
		</nav>
	);
};
