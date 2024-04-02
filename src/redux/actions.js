import axios from "axios";
import store from "./store"

export const GET_LIST_ATIVITIES = "GET_LIST_ATIVITIES";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const MAIN_ORDER = "MAIN_ORDER";

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
