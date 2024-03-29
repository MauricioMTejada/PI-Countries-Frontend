import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrerAndOrderCountries, mainPage } from "../../redux/actions/index";

import { SelectorGrouper } from "../SelectorGrouper/SelectorGrouper";
import { Pagination } from "../Pagination/Pagination";
import { DataGrid } from "../DataGrid/DataGrid";

import style from "./HeroData.module.css";

export default function HeroData() {
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
