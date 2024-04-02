import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Detail, CreateActivity, Home, Landing } from "./views";
import "./App.css";
import { getData } from "./utils/getData/getData";
import { getCountries } from "./redux/actions/index";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const { apiUrl, api, data } = getData();
		dispatch(getCountries(apiUrl, api, data));
	}, [dispatch]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home/:id" element={<Detail />} />
				<Route path="/createActivity" element={<CreateActivity />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
