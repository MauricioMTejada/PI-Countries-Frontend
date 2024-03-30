import store from "../store";

export const GET_DETAILS = "GET_DETAILS";

export function getDetail(id) {
    return async function (dispatch) {
      let allPaises = store.getState().mainCountries;

      for (let i = 0; i < allPaises.length; i++) {
        if (allPaises[i].id == id) {
          return dispatch({
            type: GET_DETAILS,
            payload: allPaises[i] });
        }

      }

      // Para solicitar los detalles del Pais al servidor:
          try {
              let json = await axios.get(`${URLBASE}countries/${id}`);
              // Al dato que llega le agrego las actividades:
                  json.data.actividades = nombreActividadesSinDuplicados;

              return dispatch({
                  type: GET_DETAILS,
                  payload: json.data, });
          } catch (error) {
              console.log(error); }
    };
  }