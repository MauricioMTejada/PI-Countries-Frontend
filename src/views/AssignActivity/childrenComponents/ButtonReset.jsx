import React from "react";
import { useDispatch } from "react-redux";

import { resetStateAssignActivity } from "../../../redux/actions/index";

import style from "./ButtonReset.module.css";


export const ButtonReset = () => {

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(resetStateAssignActivity());
	};

	return (
		<button className={style.buttonContainer} onClick={handleClick}>
			Reset
		</button>
	);
};
