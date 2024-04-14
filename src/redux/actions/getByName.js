import store from "../store";

export const GET_BY_NAME = "GET_BY_NAME";

// Buscador de países:
export const getByName = (nombre) => {
    // Adapto: primera letra mayúscula, siguientes minúsculas.
    const name = nombre
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    return async function (dispatch) {
      let allPaises = store.getState().mainCountries;
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

      // const apiData = await axios.get(`${URLBASE}countries/?nombre=${name}`);
      // const paisByName = [apiData.data];
      // if (apiData.data === null) {
      //   alert("País no encontrado");
      //   return;
      // } else dispatch({ type: GET_BY_NAME, payload: paisByName });
    };

};