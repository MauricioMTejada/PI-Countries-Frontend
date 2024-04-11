import React from "react";
import { PaperBackground } from "../../../components/PaperBackground/PaperBackground";
import { TitleSection } from "../../../components/TitleSection/TitleSection";
import { ListActivities, ListCountries, StatusNotifications, SubmitAssignActivity } from "./index";

export const AssignActivityData = () => {
	const title = "Asignar Actividad Turística";

	return (
		<PaperBackground>
			<TitleSection title={title} />
			<StatusNotifications />
			<ListActivities />
			<ListCountries />
			<SubmitAssignActivity />
		</PaperBackground>
	);
};
