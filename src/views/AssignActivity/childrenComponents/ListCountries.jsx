import React from "react";
import { useSelector } from "react-redux";
import { ListCountriesArray } from "./index";
import style from "./ListCountries.module.css";

export const ListCountries = () => {
  const listCountryesToActivity = useSelector(
    (state) => state.listCountryesToActivity
  );
  console.log(listCountryesToActivity);

  return (
    <div className={style.containerListCountriesArray}>
      {listCountryesToActivity.map((item, index) => (
        <ListCountriesArray key={index + 1} countryIndex={index + 1} />
      ))}
    </div>
  );
};
