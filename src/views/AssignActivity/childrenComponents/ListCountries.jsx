import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ListCountriesArray } from "./index";
import style from "./ListCountries.module.css";

export const ListCountries = () => {
	const listCountryesToActivity = useSelector(
		(state) => state.listCountryesToActivity
	);
	//   console.log(listCountryesToActivity);

	const {idActivityIncomplete} = useSelector((state) => state.notificationCountryesToActivity);

	return (
		<div className={style.containerListCountriesArray}>
			{listCountryesToActivity.map((item, index) => (
				<ListCountriesArray key={index + 1} data={item} />
			))}
		</div>
	);
};
