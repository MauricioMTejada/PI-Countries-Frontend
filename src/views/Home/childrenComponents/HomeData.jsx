import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filtrerAndOrderCountries, mainPage } from "../../../redux/actions/index";
import { SelectorGrouper, Pagination, DataGrid } from "./index";

import style from "./HomeData.module.css";

export function HomeData() {
	const dispatch = useDispatch();
	const mainOrder = useSelector((state) => state.mainOrder);

	useEffect(() => {
		dispatch(filtrerAndOrderCountries());
	}, [mainOrder]);

	return (
		<div className={style.container}>
			<SelectorGrouper />
			<Pagination />
			<DataGrid />
		</div>
	);
}
