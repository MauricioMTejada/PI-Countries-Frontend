import axios from "axios";
import store from "./store"

// const URLBASE = `http://localhost:3002/`;

export const GET_PAISES = "GET_PAISES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_LIST_ATIVITIES = "GET_LIST_ATIVITIES";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const MAIN_ORDER = "MAIN_ORDER";

// Buscar la lista completa de países:
    export const getPaises = () => {
        return async function (dispatch) {

            let URL_BASE = "https://restcountries.com/v3/all";
            let id = "";
            let nombre = "";
            let bandera = "";
            let continente = "";
            let capital = "";
            let subregion = "";
            let area = 0;
            let poblacion = 0;

            const paises = [];

            fetch(`${URL_BASE}`)
                .then((response) => response.json())
                .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    id = data[i].cca3;
                    nombre = data[i].name.common;
                    bandera = data[i].flags[1];
                    continente = data[i].continents[0];

                    if (data[i].capital) capital = data[i].capital[0];
                    else capital = "Sin Capital";

                    if (data[i].subregion) subregion = data[i].subregion;
                    else subregion = "Sin Subregion";

                    area = Math.round(data[i].area);
                    poblacion = data[i].population;

                    console.log(
                      `{id: "${id}", nombre: "${nombre}", bandera: "${bandera}", continente: "${continente}", capital: "${capital}", subregion: "${subregion}", area: ${area}, poblacion: ${poblacion} }, `
                      // ", nombre:", nombre,
                      // ", bandera:", bandera,
                      // ", continente:", continente,
                      // ", capital:", capital,
                      // ", subregion:", subregion,
                      // ", area:", area,
                      // ", poblacion:", poblacion,
                      // "},"
                    );


                    paises.push(
                        {id,
                        nombre,
                        bandera,
                        continente,
                        capital,
                        subregion,
                        area,
                        poblacion,}
                    )


                }
                });

            console.log("--- Base de Batos Cargada ---");
            console.log(paises);


            // const apiData = await axios.get(URLBASE + "countries");
            // const apiData = await axios.get(`https://restcountries.com/v3/all`)
            // const paises = apiData.data;
            dispatch({ type: GET_PAISES, payload: paises });
            };
    };

// Buscador de países:
    export const getByName = (nombre) => {
        // Adapto: primera letra mayúscula, siguientes minúsculas.
        const name = nombre
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");

        return async function (dispatch) {
          let allPaises = store.getState().paises;
          let bandera = false;
          let stringId = "";

          for (let i = 0; i < allPaises.length; i++) {
            if (allPaises[i].nombre == name) {
              dispatch({
                type: GET_BY_NAME,
                payload: allPaises[i] })
              console.log(allPaises[i]);
              bandera = true;
              stringId = allPaises[i].id;
            }
          }

          // console.log("bandera: " + bandera);

          if (bandera) window.location.href = `/home/${stringId}`;

          else {alert("País no encontrado");}
          return;

          const apiData = await axios.get(`${URLBASE}countries/?nombre=${name}`);
          const paisByName = [apiData.data];
          if (apiData.data === null) {
            alert("País no encontrado");
            return;
          } else dispatch({ type: GET_BY_NAME, payload: paisByName });
        };

    };

//Obtener actividades para la lista desplegable "Actividades"
    export function getListActivities(){
      return async function(dispatch) {
            // Para solicitar actividades:
            let nombreActividadesSinDuplicados = [];

            try {
              let json = await axios.get(`${URLBASE}activity/`);
              let actividades = json.data.actividades;
              // console.log(actividades)
              let nombreActividades = actividades.map((element) => {
                return element.nombre});
              // console.log(nombreActividades);
              nombreActividadesSinDuplicados = nombreActividades.filter((valor, indice, arreglo) => arreglo.indexOf(valor) === indice)
              // console.log(nombreActividadesSinDuplicados);

              return dispatch({
                type: GET_LIST_ATIVITIES,
                payload: nombreActividadesSinDuplicados
              })

            } catch (error) {
              console.log(error);
            }
      }
    }

//Filtrar Actividades
    export function filterActivities(nameActivitie) {
      // console.log(nameActivitie);
      return async function(dispatch) {
          try {
            //Solicito la tabla de actividades y la tabla de relaciones
                let json = await axios.get(`${URLBASE}activity/`);
                let actividades = json.data.actividades;
                // console.log(actividades);

                if(nameActivitie === "Choose"){
                  //Del arreglo de todos los países, filtro según los id obtenidos
                  let allPaises = store.getState().backupPaises;

                  return dispatch({
                    type: FILTER_BY_ACTIVITIES,
                    payload: allPaises });
                }

                let activitiesFilteredArrayId = [];
                if(nameActivitie === "All"){
                  //Filtro las actividades que coincidan con el elemento de la lista desplegable
                      let activitiesFiltered = actividades
                      activitiesFilteredArrayId = activitiesFiltered.map(element => element.id)
                      // console.log(activitiesFilteredArrayId)
                      } else {
                      //Filtro las actividades que coincidan con el elemento de la lista desplegable
                      let activitiesFiltered = actividades.filter(element => element.nombre === nameActivitie)
                      activitiesFilteredArrayId = activitiesFiltered.map(element => element.id)
                      // console.log(activitiesFilteredArrayId)
                      }

                //Busco los id de los países que coinciden con las actividades filtradas
                    let relaciones = json.data.relaciones;
                    // console.log(relaciones);
                    let idCountryWithNameActivitie = [];
                    activitiesFilteredArrayId.map(element =>
                      relaciones.map(anidado =>
                        element === anidado.activityId ? idCountryWithNameActivitie.push(anidado.countryId)  : null));
                    // console.log(idCountryWithNameActivitie);

                //Elimino duplicados de los id de países
                    let countryIdUnique = idCountryWithNameActivitie.filter(
                      (valor, indice, arreglo) => arreglo.indexOf(valor) === indice)
                    // console.log(countryIdUnique);

                //Del arreglo de todos los países, filtro según los id obtenidos
                    let allPaises = store.getState().backupPaises;
                    let countryActivityData = [];
                    countryIdUnique.map(element =>
                      allPaises.map(anidado =>
                        element === anidado.id ? countryActivityData.push(anidado) : null))
                    // let countryActivityData = allPaises.filter((element) => (element.id == nameActivitie))
                    // console.log(countryActivityData);

                return dispatch({
                  type: FILTER_BY_ACTIVITIES,
                  payload: countryActivityData });


          } catch (error) { console.log(error); }
      }
    }

export function filterActividades(value) {
    return;
}
