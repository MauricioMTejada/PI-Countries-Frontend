import store from "../store";

export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";

export function filterContinent(orden) {
    let allPaises = store.getState().mainCountries;
    console.log(orden);

    const statusFiltered =
      orden === "All"
        ? allPaises
        : allPaises.filter((element) => element.continente === orden);

    console.log(statusFiltered);

    return {
      type: FILTER_BY_CONTINENT,
      payload: statusFiltered };
  }