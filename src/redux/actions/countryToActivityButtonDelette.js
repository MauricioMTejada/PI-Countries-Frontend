import store from "../store";

export const COUNTRY_TO_ACTIVITY_BUTTON_DELETE = "COUNTRY_TO_ACTIVITY_BUTTON_DELETE";

export const countryToActivityButtonDelette = (value) => {
    // console.log(`action - value: ${value}`);
    const listCountryesToActivity = store.getState().listCountryesToActivity

    // console.log(listCountryesToActivity);

    const updatedList = listCountryesToActivity.filter(item => item.countryIndex !== value);

    // console.log(updatedList);

    return {
        type: COUNTRY_TO_ACTIVITY_BUTTON_DELETE,
        payload: updatedList
    }
}