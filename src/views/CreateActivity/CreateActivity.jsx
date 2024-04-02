import NavBar from "../../components/NavBar/NavBar";
import { CreateActivityData } from "./CreateActivityData";

import style from "./CreateActivity.module.css";

const CreateActivity = () => {
	return (
		<div className={style.background}>
			<NavBar />
			<CreateActivityData />
		</div>
	);
};

export default CreateActivity;
