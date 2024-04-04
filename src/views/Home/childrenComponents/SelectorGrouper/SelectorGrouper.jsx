import React from "react";
import style from "./SelectorGrouper.module.css";
import { SelectorContinent, SelectorSortAlphabetical, SelectorSortPopulation } from "../index";



export const SelectorGrouper = () => {
	return (
		<div className={style.gridContainer}>
			<div className={style.gridItem01}>
				<SelectorContinent />
			</div>
			<SelectorSortAlphabetical />
			<SelectorSortPopulation />
		</div>
	);
};
