import React from "react";
import { PaperBackground } from "../../../components/PaperBackground/PaperBackground";
import { TitleSection } from "../../../components/TitleSection/TitleSection";
import { ListActivities, ListCountries, SubmitAssignActivity } from "./index";

export const AssignActivityData = () => {
	const title = "Asignar Actividad Turística";

	return (
		<PaperBackground>
			<TitleSection title={title} />
			<ListActivities />
			<ListCountries />
			<SubmitAssignActivity />
		</PaperBackground>
	);
};
