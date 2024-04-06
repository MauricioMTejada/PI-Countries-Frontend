export const COUNTRY_TO_ACTIVITY = "COUNTRY_TO_ACTIVITY";

export const countryToActivity = (countryIndex, selectedCountry) => {
    console.log(countryIndex);
    console.log(selectedCountry);

    return {
        type: COUNTRY_TO_ACTIVITY,
        payload: {countryIndex, selectedCountry}, // selectedcountry
    }
}