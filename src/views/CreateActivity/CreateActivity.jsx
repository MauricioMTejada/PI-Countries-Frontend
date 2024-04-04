import { Layout } from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { CreateActivityData } from "./childrenComponents/index";

import style from "./CreateActivity.module.css";

const CreateActivity = () => {
	return (
		<Layout >
			<CreateActivityData />
		</Layout>
	);
};

export default CreateActivity;
