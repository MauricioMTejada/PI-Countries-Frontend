export const NOTIFICATION_COUNTRYES_TO_ACTIVITY = "NOTIFICATION_COUNTRYES_TO_ACTIVITY";

export const notificationCountryesToActivity = (value, dataResponse) => {

    console.log(value);

    console.log(dataResponse);

    const set = { idActivityIncomplete: value, dataResponse}
    return {
        type: NOTIFICATION_COUNTRYES_TO_ACTIVITY,
        payload: set
    };
}