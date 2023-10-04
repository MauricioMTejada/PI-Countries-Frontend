import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import planisferioImage from "./planisferio.jpg";


const styleLanding = {
  backgroundImage: `url(${planisferioImage})`,
  backgroundSize: "cover",

  display: "flex",
  flexDirection: "column", // Alinea los elementos verticalmente
  justifyContent: "center", // Alinea los elementos en el centro vertical
  alignItems: "center", // Alinea los elementos en el centro horizontal
  width: "100vw",
  height: "100vh", // Ocupa toda la altura de la ventana del navegador

  color: "#310336"
}

const Landing = () => {
  return (
    // <div className={style.imagenFondo}>
    <div style={styleLanding}>
      <h1>PI Countries</h1>
      <Link to= "/home"> <button>Ingresar</button> </Link>
    </div>
  );
};

export default Landing;
