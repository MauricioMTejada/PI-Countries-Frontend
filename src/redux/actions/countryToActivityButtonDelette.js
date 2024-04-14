import store from "../store";

export const COUNTRY_TO_ACTIVITY_BUTTON_DELETE = "COUNTRY_TO_ACTIVITY_BUTTON_DELETE";

export const countryToActivityButtonDelette = (value) => {
    // console.log(`action - value: ${value}`);
    const listCountriesToActivity = store.getState().listCountriesToActivity

    // console.log(listCountriesToActivity);

    const updatedList = listCountriesToActivity.filter(item => item.countryIndex !== value);

    // console.log(updatedList);

    return {
        type: COUNTRY_TO_ACTIVITY_BUTTON_DELETE,
        payload: updatedList
    }
}