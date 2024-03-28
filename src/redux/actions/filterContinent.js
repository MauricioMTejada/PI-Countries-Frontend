import store from "../store";

export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";

export function filterContinent(orden) {
    let allPaises = store.getState().backupPaises;

    const statusFiltered =
      orden === "All"
        ? allPaises
        : allPaises.filter((element) => element.continente === orden);

    return {
      type: FILTER_BY_CONTINENT,
      payload: statusFiltered };
  }