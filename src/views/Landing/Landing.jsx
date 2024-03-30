import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
	return (
		<div className={style.background}>
			<h1 className={style.title}>PI Countries</h1>
			<Link to="/home">
				{" "}
				<button className={style.button}>Ingresar</button>{" "}
			</Link>
		</div>
	);
};

export default Landing;
