import React from "react";
import style from "./HeroData.module.css";
import { SelectorGrouper } from "../SelectorGrouper/SelectorGrouper";
import { Pagination } from "../Pagination/Pagination";
import { DataGrid } from "../DataGrid/DataGrid";

export default function HeroData() {
	return (
		<div className={style.container}>
			<SelectorGrouper />
			<Pagination />
			<DataGrid />
		</div>
	);
}
