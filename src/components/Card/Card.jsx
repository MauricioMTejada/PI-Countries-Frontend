import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const poblacionFormateada = props.poblacion.toLocaleString('en-US');

  return (
    <div className={style.card}>
      <div style={{ width: "250px", height: "170px" }}>
        <Link to={`/home/${props.id}`}>
          <img
            src={props.bandera}
            alt="Bandera"
            style={{ maxWidth: "250px", maxHeight: "170px" }}
          />
        </Link>
      </div>

      <p><span className={style.boldText}>{props.nombre}</span></p>
      <p>Continente: {props.continente}</p>
      <p>Población: {poblacionFormateada}</p>
    </div>
  );
};

export default Card;
