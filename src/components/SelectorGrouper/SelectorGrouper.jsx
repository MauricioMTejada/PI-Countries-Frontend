import React from "react";
import style from "./SelectorGrouper.module.css";

import { SelectorContinent } from "../SelectorContinent/SelectorContinent";
import SelectorSortAlphabetical from "../SelectorSortAlphabetical/SelectorSortAlphabetical";
import SelectorSortPopulation from "../SelectorSortPopulation/SelectorSortPopulation";
import { useSelector } from "react-redux";

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
