import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SmallLoading } from "../../../components/Loading/Loading";
import { sendDataAssignActivity } from "../../../utils/sendData/sendDataAssignActivity";

import style from "./SubmitAssignActivity.module.css";


export const SubmitAssignActivity = () => {

	const dispatch = useDispatch();

	const { endOfWork } = useSelector( (state) => state.statesAssignActivity );

	const [loading, setLoading] = useState(false);

	const handleClick = () => {
		sendDataAssignActivity({setLoading, dispatch})
	};

	return (
		<div className={style.buttonContainer}>
			<div className={style.buttonCapsule}>
				<button onClick={handleClick} disabled={endOfWork}>Asignar Actividad</button>
				{loading && (
					<div className={style.SmallLoading}>
						<SmallLoading />
					</div>
				)}
			</div>
		</div>
	);
};
