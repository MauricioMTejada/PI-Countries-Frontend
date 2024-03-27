import React from "react";
import { Routes, Route } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./views";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home/:id" element={<Detail />} />
				<Route path="/create" element={<Form />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
