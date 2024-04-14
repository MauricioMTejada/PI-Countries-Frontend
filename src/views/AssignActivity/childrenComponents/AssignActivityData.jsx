import React from "react";
import { PaperBackground } from "../../../components/PaperBackground/PaperBackground";
import { TitleSection } from "../../../components/TitleSection/TitleSection";
import { ListActivities, ListCountries, StatusNotifications, SubmitAssignActivity } from "./index";
import { ButtonReset } from "./ButtonReset";

export const AssignActivityData = () => {
	const title = "Asignar Actividad Turística";

	return (
		<PaperBackground>
			<ButtonReset/>
			<TitleSection title={title} />
			<StatusNotifications />
			<ListActivities />
			<ListCountries />
			<SubmitAssignActivity />
		</PaperBackground>
	);
};
