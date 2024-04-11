import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../utils/getData/getData";
import axios from "axios";
import { SmallLoading } from "../../../components/Loading/Loading";

import style from "./SubmitAssignActivity.module.css";
import { notificationCountryesToActivity } from "../../../redux/actions/index";

export const SubmitAssignActivity = () => {
	const { apiUrl } = getData();

	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	let idActivity = useSelector((state) => state.selectActivity);
	let idCountries = useSelector((state) => state.listCountryesToActivity);

	idActivity = idActivity.id;
	idCountries = idCountries.map((country) => country.selectedCountry.id);

	// console.log(idActivity);
	// console.log(idCountries);

	const postData = { idActivity, idCountries };

	const sendData = () => {
		console.log(postData.idCountries);

		// postData.idCountries.map((country) => {
		// 	country
		// })

		const whitoutCountries = postData.idCountries.every((element) => element === undefined);

		if (idActivity && idActivity != '-') {
			setLoading(true);
			try {
				axios
					.post(`${apiUrl}/activity/assignActivity`, postData)
					.then((response) => {
						console.log(response);
						const value = false;
						const dataResponse = response.data;
						dispatch(notificationCountryesToActivity(value, dataResponse));
					})
					.then(() => setLoading(false))
			} catch (error) {
				console.log(error);
			}
		} else {
			dispatch(notificationCountryesToActivity(true));
		}
	};

	return (
		<div className={style.buttonContainer}>
			<div className={style.buttonCapsule}>
				<button onClick={sendData}>Asignar Actividad</button>
				{loading && (
					<div className={style.SmallLoading}>
						<SmallLoading />
					</div>
				)}
			</div>
		</div>
	);
};
