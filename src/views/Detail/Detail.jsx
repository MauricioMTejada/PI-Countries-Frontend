import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import style from "./Detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getDetail(props.match.params.id));
  // }, [dispatch, props.match.params.id]);

  useEffect(() => {
    dispatch(getDetail(id)); // Utiliza el parámetro 'id' obtenido de useParams
  }, [dispatch, id]);

  const myCountry = useSelector((state) => state.detail);
  // console.log(myCountry);

  //Consulto si hay actividades:
    // let haveActivities = 0;
    // if(myCountry.actividades.length === 0) haveActivities = 1;

  // console.log(myCountry);
  let poblacionFormateada = 0;
  let areaFormateata = 0;
  if(myCountry.poblacion) poblacionFormateada = myCountry.poblacion.toLocaleString();
  if(myCountry.area) areaFormateata = myCountry.area.toLocaleString();

  const styleTextGeneral = { color: "#310336" }
  const styleBackground = {backdropFilter: "blur(30px)", padding: "30px 10px", border: "1px solid black", borderRadius: "10px" }

  if(myCountry.length !== 0)
  return (
    <div className={style.imagenFondo}>
      <div style={styleBackground}>
        <div style={styleTextGeneral}>
          <img
            src={myCountry.bandera}
            alt="Bandera"
            style={{ maxWidth: "250px", maxHeight: "170px" }}
          />
          <h1>{myCountry.nombre}</h1>

          <div>
            <strong>Id: </strong>
            <span>{myCountry.id}</span>
            <br />
            <strong>Continente: </strong>
            <span>{myCountry.continente}</span>
            <br />
            <strong>Subregión: </strong>
            <span>{myCountry.subregion}</span>
            <br />
            <strong>Capital: </strong>
            <span>{myCountry.capital}</span>
            <br />
            <strong>Área: </strong>
            <span>{areaFormateata}</span>
            <br />
            <strong>Población: </strong>
            <span>{poblacionFormateada}</span>
            <br />
            {/* {myCountry.actividades.length !== 0 && (<strong>Actividades: </strong>)}
            {myCountry.actividades.map(element => {return (<div key={element.id}>
              <span><u>Nombre:</u> {element.nombre}, Dificultad: {element.dificultad}, Duración: {element.duracion} hs., Temporada: {element.temporada}</span></div>)})} */}

          </div>
        </div>
        <br />
        <Link to="/home">
          {" "}
          <button>Volver</button>{" "}
        </Link>
      </div>
    </div>
  )
  else {return(<></>)};
}
